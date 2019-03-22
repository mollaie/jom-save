
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NativeApiService } from '../../../services/native-api/native-api.service'
import { Platform, LoadingController } from '@ionic/angular';
import { RestApiService } from '../../../services/rest-api.service'
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';

@Component({
  selector: 'app-auth-phone',
  templateUrl: './auth-phone.page.html',
  styleUrls: ['./auth-phone.page.scss'],
  providers: [
    NativeApiService
  ]
})
export class AuthPhonePage implements OnInit {

  Model = {
    Phone: '',
    Password: '',
    Resouses: {
      PhoneIcon: '',
      WorldPicture: '',
    }

  }

  isDebug: boolean = false;
  ErrorMessage = '';

  constructor(
    private router: Router,
    private dataTransaction: DataTransactionService,
    private api: NativeApiService,
    private platform: Platform,
    private restApi: RestApiService,
    private alert: AlertProviderService,
    private routerProvider: RouteProviderService,
  ) {
    if (platform.is('cordova')) this.isDebug = false;
    else this.isDebug = true;

    this.Model.Phone = "+60";

    this.dataTransaction.getAccessToken().then(
      accessToken => {
        if (accessToken != null && accessToken != '' && accessToken.length > 10) {
          this.doGetProfile(accessToken);
        } else {
          this.dataTransaction.getUserPhone().then(
            phone => {
              if (phone != null && phone != '' && phone.length > 1) {
                this.Model.Phone = phone;
              }
            }
          )
        }
      }
    )
  }


  ngOnInit() {
  }

  doLogin() {
    this.router.navigate(['auth-password']);
  }

  doRegister() {
    this.router.navigate(['signup']);
  }

  async doNext() {
    if (this.Model.Phone == '' || this.Model.Phone.length < 10) {
      this.alert.presentToast('Please fill in the mobile number.');
      return false;
    }
    if (!this.isDebug) {
      this.api.IsMobileRgistered(`${this.Model.Phone}`)
        .then(response => {
          //load.dismiss();
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data);
            if (result.Data.IsRegistered == "0") {
              this.dataTransaction.Phone = this.Model.Phone;
              this.doRegister();
            }
            else {
              this.dataTransaction.Phone = this.Model.Phone;
              this.doLogin();
            }
          } else {
            this.alert.showErrorMessageAlert(response.error);
          }
        })
        .catch(error => {
          this.alert.showErrorMessageAlert(JSON.stringify(error));
        })
    } else {
      this.restApi.IsMobileRgistered(`${this.Model.Phone}`)
        .subscribe(response => {
          //load.dismiss();
          let result = this.restApi.converResponseToJson(response);
          if (result.Data.IsRegistered == "0") {
            this.dataTransaction.Phone = this.Model.Phone;
            this.doRegister();
          } else {
            this.dataTransaction.Phone = this.Model.Phone;
            this.doLogin();
          }
        })
    }

  }

  doForgotPassword() {

  }

  doOnChange(event) {
    const pattern = /^[0-9]*$/;
    let inputChar = event.key;

    if (event.keyCode == 8 || event.which == 8) {
      if (event.target.value.length == 3) {
        event.preventDefault();
      }
    } else {
      // if (!pattern.test(inputChar)) {
      //   // invalid character, prevent input
      //   event.preventDefault();
      // }
      if(isNaN(inputChar)){
        event.preventDefault();
      }
    }
  }

  doGetProfile(AccessToken) {
    if (!this.isDebug) {
      this.api.GetProfile(AccessToken).then(
        response => {
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data);
            if (result.ErrorCode == "0") {
              this.dataTransaction.setProfile(result.Data);
              this.dataTransaction.shouldNavigate = true;
              this.routerProvider.nextStep(result.Data.NextStep);
            } else {

            }
          }
        }
      ).catch(error => this.alert.showErrorMessageAlert(error));
    } else {
      this.restApi.GetProfile(AccessToken).subscribe(
        response => {
          let result = this.restApi.converResponseToJson(response);
          if (result.ErrorCode == "0") {
            this.dataTransaction.setProfile(result.Data);
            this.dataTransaction.shouldNavigate = true;
            this.routerProvider.nextStep(result.Data.NextStep);
          } else {
            this.ErrorMessage = result.ErrorMessage;
          }
        },
        error => {
          this.ErrorMessage = error;
        }
      )
    }
  }



}
