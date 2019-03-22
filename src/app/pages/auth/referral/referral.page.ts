
import { Component, OnInit } from '@angular/core';
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { Router, NavigationEnd, NoPreloading } from '@angular/router';
import { ConstantService } from './../../../services/constant/constant.service';
import { NativeApiService } from '../../../services/native-api/native-api.service'
import { ZBar } from '@ionic-native/zbar/ngx';
import { RouteProviderService } from '../../../services/route-provider/route-provider.service';
import { Platform, LoadingController, AlertController } from '@ionic/angular';
import { RestApiService } from '../../../services/rest-api.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.page.html',
  styleUrls: ['./referral.page.scss'],
})
export class ReferralPage implements OnInit {

  Model = {
    Phone: '',
    Referral: '',
    ScannData: {},
  }

  UserInfo = {
    UserId: 0,
    DisplayName: '',
    Photo: '',
    Roles: ''
  }

  ErrorMessage: string = '';
  Data: any;

  zbarOptions: any;
  scannedResult: any;

  AccessToken: '';
  isDebug: boolean = false;

  constructor(
    private dataTransaction: DataTransactionService,
    private router: Router,
    private zbar: ZBar,
    private api: NativeApiService,
    private routeProvider: RouteProviderService,
    private platform: Platform,
    private loading: LoadingController,
    private restApi: RestApiService,
    private alert: AlertProviderService,
    private alertCtrl: AlertController) {

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) this.ngOnInit();
    })


    this.zbarOptions = {
      flash: 'off',
      drawSight: false
    }

    if (platform.is('cordova')) this.isDebug = false;
    else this.isDebug = true;
  }

  ngOnInit() {
    this.dataTransaction.getUserPhone().then(val => {
      if (val == undefined || val == '') this.router.navigate(['auth-phone']);
      else {
        this.Model.Phone = val.toString();
        this.dataTransaction.getAccessToken().then(acc => {
          this.AccessToken = acc.toString();
        })
      }
    })
  }


  doLogin() {
    this.router.navigate(['auth-phone']);
  }

  doNext() {
    if (this.UserInfo.UserId == 0) {
      this.alert.showErrorMessageAlert('Please fill in the Referral ID, or skip this step.')
      return;
    }

    this.presentConfirm(this.UserInfo.DisplayName,this.UserInfo.UserId);
    
  }

  doCancel() {
    this.router.navigate(['auth-phone'])
  }

  doForgotPassword() {

  }

  doSkip() {
    if (!this.isDebug) {
      this.api.SetUpline('0', this.AccessToken).then(
        (response) => {
          let result = this.api.converResponseToJson(response.data);
          if (response.status == 200) {
            this.routeProvider.nextStep(result.Data.NextStep);
          }
          else {
            this.alert.showErrorMessageAlert(result.ErrorMessage)
          }
        },
        (error) => {
          this.alert.showErrorMessageAlert(error)
          this.ErrorMessage = error;
        }
      )
    } else {
      this.restApi.SetUpline('0', this.AccessToken).subscribe(
        (response) => {
          let result = this.restApi.converResponseToJson(response);
          if (result.ErrorCode == "0") {
            this.routeProvider.nextStep(result.Data.NextStep);
          }
          else {
            this.ErrorMessage = result.ErrorMessage;
          }
        },
        (error) => {
          this.ErrorMessage = error;
        }
      )
    }
  }

  doScanCode() {
    this.zbar.scan(this.zbarOptions)
      .then(result => {
        this.Model.Referral = result;
        this.doGetUserInfo();
      })
      .catch(error => {
        alert(error); // Error message
      });
  }

  doEncodedText() {

  }

  doGetUserInfo() {

    if (this.Model.Referral != '' && this.Model.Referral.length == 6) {
      this.presentLoading();
      if (!this.isDebug) {
        this.api.GetUserInfo(this.Model.Referral, this.AccessToken).then(
          (response) => {
            let result = this.api.converResponseToJson(response.data);
            if (response.status == 200) {
              this.UserInfo = result.Data;
            } else {
              this.UserInfo = {
                UserId: 0,
                DisplayName: '',
                Photo: '',
                Roles: ''
              }
              this.alert.presentToast(result.ErrorMessage)
            }
          },
          (error) => {
            this.UserInfo = {
              UserId: 0,
              DisplayName: '',
              Photo: '',
              Roles: ''
            }
            this.alert.showErrorMessageAlert(error);
          }
        )
      } else {

        this.restApi.GetUserInfo(this.Model.Referral, this.AccessToken).subscribe(
          (response) => {
            let result = this.restApi.converResponseToJson(response);
            if (result.ErrorCode == "0") {
              this.UserInfo = result.Data;
              this.ErrorMessage = "";
            }
            else {
              this.UserInfo = {
                UserId: 0,
                DisplayName: '',
                Photo: '',
                Roles: ''
              }

              this.ErrorMessage = "Member doesn't exist."
            }
          }
        )
      }

    }
  }

  async presentLoading() {
    const loading = await this.loading.create({
      message: 'Please wait',
      duration: 500
    });
    await loading.present();
  }

  doSetUpline() {

    if (!this.isDebug) {
      this.api.SetUpline(this.UserInfo.UserId, this.AccessToken).then(
        (response) => {
          let result = this.api.converResponseToJson(response.data);
          if (response.status == 200) {
            this.routeProvider.nextStep(result.Data.NextStep);
          }
          else {
            this.alert.showErrorMessageAlert(result.ErrorMessage)
          }
        },
        (error) => {
          this.alert.showErrorMessageAlert(error)
        }
      )
    } else {
      this.restApi.SetUpline(this.UserInfo.UserId, this.AccessToken).subscribe(
        (response) => {
          let result = this.restApi.converResponseToJson(response);
          if (result.ErrorCode == "0") {
            this.routeProvider.nextStep(result.Data.NextStep);
          }
          else {
            this.ErrorMessage = result.ErrorMessage;
          }
        },
        (error) => {
          this.ErrorMessage = error;
        })
    }

  }

  doCheckValue(event) {
    let reg = /([a-z])/;
    if (!reg.test(event.key) && !(event.keyCode == 8 || event.which == 8)) {
      event.preventDefault();
    }
    console.log(event.key)
  }

  doValidate() {
    if (this.Model.Referral.length == 0) {
      this.alert.showErrorMessageAlert('Please fill in the Referral ID');
      return false;
    }

  }

  async presentConfirm(member, memberId) {
    let alert = await this.alertCtrl.create({
      header: 'Confirm purchase',
      message: `Do you confirm to add ${member} (${memberId}) as your upline?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            return false;
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.doSetUpline();
          }
        }
      ]
    });
    alert.present();
  }

}
