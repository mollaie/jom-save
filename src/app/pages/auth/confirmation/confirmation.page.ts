import { Component, OnInit, EventEmitter } from '@angular/core';
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { Router, NavigationEnd } from '@angular/router';
import { ConstantService } from './../../../services/constant/constant.service';
import { NativeApiService } from '../../../services/native-api/native-api.service'
import { Platform } from '@ionic/angular';
import { RestApiService } from '../../../services/rest-api.service'
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
  providers: [
    NativeApiService
  ]
})
export class ConfirmationPage implements OnInit {

  Model = {
    Phone: '',
    OTP: {
      Number1: '',
      Number2: '',
      Number3: '',
      Number4: '',
      Number5: '',
      Number6: ''
    }
  }

  CountDown: any;
  maxTime: 0;
  Data: any;
  ErrorMessage: string = '';
  AccessToken: '';
  isDebug: boolean = false;

  constructor(
    private dataTransaction: DataTransactionService,
    private router: Router,
    private api: NativeApiService,
    private platform: Platform,
    private restApi: RestApiService,
    private alert: AlertProviderService) {

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) this.ngOnInit();
    })
    if (platform.is('cordova')) this.isDebug = false;
    else this.isDebug = true;

    if (dataTransaction.Phone == '')
      router.navigate(['auth-phone']);

    this.Model.Phone = dataTransaction.Phone;
    this.maxTime = dataTransaction.OtpBlockDuration;

  }

  ngOnInit() {
    this.dataTransaction.setUserPhone(this.dataTransaction.Phone);
    this.countdown();
  }

  countdown() {
    setTimeout(x => {
      if (this.maxTime <= 0) { }
      this.maxTime -= 1;
      if (this.maxTime > 0) {
        this.countdown();
        this.CountDown = this.parseTime(this.maxTime);
      }
      else {
      }
    }, 1000);
  }

  parseTime(secondes) {
    let result = "";
    let min = "00";
    let sec = "00";

    min = (Math.round(secondes / 60)).toString();
    sec = (secondes - (parseInt(min) * 60)).toString();

    result = `${min}:${sec}`;
    return result;
  }

  doLogin() {
    this.router.navigate(['auth-phone']);
  }

  doNext() {
    this.router.navigate(['referral']);
  }

  doCancel() {
    this.router.navigate(['auth-phone'])
  }

  doForgotPassword() {
    this.router.navigate(['forgot-password']);
  }

  async doResendOTP() {
    if (!this.isDebug) {
      this.api.PreRegister(`${this.Model.Phone}`)
        .then(response => {
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data);
            //update user data 
            this.dataTransaction.OtpBlockDuration = result.Data.OtpBlockDuration;
            this.ngOnInit();
          } else {
            this.alert.showErrorMessageAlert(response.error)
          }
        }).catch(error => {
          this.alert.showErrorMessageAlert(error)
        })

    } else {
      this.restApi.PreRegister(`${this.Model.Phone}`)
        .subscribe(response => {
          let result = this.restApi.converResponseToJson(response.Data);
          this.dataTransaction.setAccessToken(result.OtpBlockDuration);
          this.ngOnInit();
        })
    }

  }

  doTextChange(event) {
    if (`${event.target.value}`.length > 1) {
      event.target.value = event.target.value.slice(0, 1);
    }

    switch (event.target.id) {
      case "number1":
        if (`${event.target.value}`.length > 0)
          document.getElementById('number2').focus();
        break;
      case "number2":
        if (`${event.target.value}`.length > 0)
          document.getElementById('number3').focus();
        break;
      case "number3":
        if (`${event.target.value}`.length > 0)
          document.getElementById('number4').focus();
        break;
      case "number4":
        if (`${event.target.value}`.length > 0)
          document.getElementById('number5').focus();
        break;
      case "number5":
        if (`${event.target.value}`.length > 0)
          document.getElementById('number6').focus();
        break;
      case "number6":
        if (`${event.target.value}`.length > 0) {
          let optNumber = `${this.Model.OTP.Number1}${this.Model.OTP.Number2}${this.Model.OTP.Number3}${this.Model.OTP.Number4}${this.Model.OTP.Number5}${this.Model.OTP.Number6}`;
          this.doCheckOTP(optNumber);
        }
        break;
    }
  }

  onFocus(event) {
    event.target.select();
  }

  doCheckOTP(value) {
    if (!this.isDebug) {
      this.api.Register(`${this.Model.Phone}`, value)
        .then(response => {
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data);
            if (result.ErrorCode == "0") {
              this.dataTransaction.setAccessToken(result.Data.NewAccessToken);
              this.dataTransaction.setNewRefreshToken(result.Data.NewRefreshToken);
              this.doNext();
            } else {
              this.alert.showErrorMessageAlert(result.ErrorMessage);
            }

          } else {
            this.alert.showErrorMessageAlert(response.error);
          }
        }).catch(error => {
          this.alert.showErrorMessageAlert(error);
        })
    } else {
      this.restApi.Register(`${this.Model.Phone}`, value).subscribe(response => {
        let result = this.restApi.converResponseToJson(response);
        if (result.ErrorCode == "0") {
          this.dataTransaction.setAccessToken(result.Data.NewAccessToken);
          this.dataTransaction.setNewRefreshToken(result.Data.NewRefreshToken);
          this.doNext();
        } else {
          this.ErrorMessage = result.ErrorMessage;
        }

      })
    }

  }

  doShowWrongOTPMessage(value) {
    document.getElementById('OTPMessage').style.display = "block";
  }
}
