
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { ConstantService } from './../../../services/constant/constant.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeApiService } from '../../../services/native-api/native-api.service'
import { Platform } from '@ionic/angular';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';
import { TouchSequence } from 'selenium-webdriver';
@Component({
  selector: 'app-mail-confirmation',
  templateUrl: './mail-confirmation.page.html',
  styleUrls: ['./mail-confirmation.page.scss'],
  providers: [
    NativeApiService
  ]
})
export class MailConfirmationPage implements OnInit {

  AccessToken: string = '';
  ErrorMessage: string = '';
  BlockDuration: number = 0;
  BlockDurationText: string = '00:00';
  isUserHold: boolean = false;
  isDebug: boolean = false;
  isUserConfirmed : boolean = false;
  interval : any;
  Model = {
    Phone: '',
    MailConfirmation: '',
    Resouses: {
      PhoneIcon: '',
      WorldPicture: '',
      PasswordIcon: '',
      ConfirmPassword: '',
      MailConfirmation: '',
      UserHold: ''
    }
  }

  constructor(
    private router: Router,
    private dataTransaction: DataTransactionService,
    private api: NativeApiService,
    private platform: Platform,
    private alert: AlertProviderService,
    private restApi: RestApiService,
    private routerProvider: RouteProviderService,
  ) {
    this.dataTransaction.getAccessToken().then((token) => {
      this.AccessToken = token;
    }).catch(error => {
      this.ErrorMessage = "The system can not detect your corrent password. <br/> please log out and login again.";
    })
    if (platform.is('cordova')) this.isDebug = false;
    else this.isDebug = true;

  }

  ngOnInit() {

    this.dataTransaction.getUserPhone().then((response) => {
      this.Model.Phone = response;
    }).catch(error => {
      this.alert.showErrorMessageAlert(error)
    })
  }


  doNext() {
    this.isUserConfirmed = false;
    if (!this.isDebug) {
      this.dataTransaction.setEmail(this.Model.MailConfirmation);
      this.api.RequestEmailVerification(this.Model.MailConfirmation, this.AccessToken)
        .then(response => {
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data);
            if (result.ErrorCode == "0") {
              this.BlockDuration = parseInt(result.Data.BlockDuration);
              this.doHoldUser();
            } else {
              this.alert.showErrorMessageAlert(result.ErrorMessage);
            }

          } else {
            this.alert.showErrorMessageAlert(response.error);
          }
        }
          , error => {
            this.alert.showErrorMessageAlert(error);
          })
    } else {
      this.dataTransaction.setEmail(this.Model.MailConfirmation);
      this.restApi.RequestEmailVerification(this.Model.MailConfirmation, this.AccessToken).subscribe(
        response => {
          let result = this.restApi.converResponseToJson(response);
          if (result.ErrorCode == "0") {
            this.BlockDuration = parseInt(result.Data.BlockDuration);
            this.doHoldUser();
          } else {
            this.ErrorMessage = result.ErrorMessage;
          }
        }
      )
    }

  }

  doHoldUser() {
    this.isUserHold = true;
    this.countdown();
    this.requestCountDown();
  }

  async requestCountDown() {
    this.interval = await setInterval(() => {
      this.doVerifyEmail();
    }, 5000)
  }

  async countdown() {
    await setTimeout(x => {
      if (this.BlockDuration <= 0) { }
      this.BlockDuration -= 1;
      if (this.BlockDuration > 0) {
        this.countdown();
        this.BlockDurationText = this.parseTime(this.BlockDuration);
      }
      else {
        this.isUserHold = false;
      }
    }, 1000);
  }

  parseTime(secondes) {
    let sec_num = parseInt(secondes, 10); // don't forget the second param
    let hours = Math.floor(sec_num / 3600).toString();
    let minutes = Math.floor((sec_num - (parseInt(hours) * 3600)) / 60).toString();
    let seconds = (sec_num - (parseInt(hours) * 3600) - (parseInt(minutes) * 60)).toString();

    if (parseInt(hours) < 10) { hours = "0" + hours; }
    if (parseInt(minutes) < 10) { minutes = "0" + minutes; }
    if (parseInt(seconds) < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds;
  }

  doVerifyEmail() {
    if (!this.isDebug) {
      this.api.GetProfile(this.AccessToken).then(
        response => {
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data);
            if (result.Data.NextStep != 'VerifyEmail') {
              this.isUserHold = false;
              this.BlockDuration = 0;
              clearInterval(this.interval);
              this.routerProvider.nextStep(result.Data.NextStep);
            }

          } else {
            this.alert.showErrorMessageAlert(response.error)
          }
        }
      ).catch(error => this.alert.showErrorMessageAlert(error));
    } else {
      this.restApi.GetProfile(this.AccessToken).subscribe(
        response => {
          let result = this.restApi.converResponseToJson(response);
          if (result.ErrorCode == "0") {
            if (result.Data.NextStep != 'VerifyEmail') {
              this.isUserHold = false;
              this.BlockDuration = 0;
              clearInterval(this.interval);
              this.routerProvider.nextStep(result.Data.NextStep);
            }
          }
        }
      )
    }
  }

  doCancel(){
    this.isUserConfirmed = false;
  }

  doConfirmation(){
    this.isUserConfirmed = true;
  }

  doLogin() {
    this.router.navigate(['auth-phone']);
  }
}
