import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
import { Platform, AlertController } from '@ionic/angular';
import { DataTransactionService } from 'src/app/services/data-transaction/data-transaction.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';

@Component({
  selector: 'app-otp-change-number',
  templateUrl: './otp-change-number.page.html',
  styleUrls: ['./otp-change-number.page.scss'],
})
export class OtpChangeNumberPage implements OnInit {

  Model = {
    Mobile: '',
    Password: '',
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
  showPassword: boolean = false;
  constructor(
    private router: Router,
    private dataTransaction: DataTransactionService,
    private api: NativeApiService,
    private platform: Platform,
    private restApi: RestApiService,
    private routerProvider: RouteProviderService,
    private alert: AlertProviderService,
    public alertController: AlertController,
  ) { 

    if (platform.is('cordova')) this.isDebug = false;
    else this.isDebug = true;

    dataTransaction.getAccessToken().then(
      accessToken => {
        if (accessToken == null || accessToken == '') {
          dataTransaction.logOut();
          this.routerProvider.nextStep('Phone');
        } else {
          this.AccessToken = accessToken;
        }
      }
    )

    this.maxTime = this.dataTransaction.OtpBlockDuration;
    this.Model.Mobile=  this.dataTransaction.Phone;
  }

  ngOnInit() {
  }

  doNext() {
    if (!this.isDebug) {
      this.api.RequestChangeMobile(this.Model.Password, this.Model.Mobile, this.AccessToken)
        .then(response => {
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data);
            if (result.ErrorCode == "0") {

            } else {
              this.alert.presentToast(result.ErrorMessage);
            }
          }
        }).catch(error => {
          this.alert.presentToast(error);
        })
    } else {
      this.restApi.RequestChangeMobile(this.Model.Password, this.Model.Mobile, this.AccessToken)
        .subscribe(response => {
          let result = this.restApi.converResponseToJson(response);
          if (result.ErrorCode == "0") {

          } else {
            this.ErrorMessage = result.ErrorMessage;
          }
        }, error => {
          this.alert.presentToast(error);
        })
    }

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
      this.api.ChangeMobile(this.Model.Mobile, value, this.AccessToken)
        .then(response => {
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data);
            if (result.ErrorCode == "0") {
              this.dataTransaction.setUserPhone(this.Model.Mobile);
              this.routerProvider.nextStep('Phone');
            } else {
              this.alert.presentToast(result.ErrorMessage);
            }

          } else {
            this.alert.presentToast(response.error);
          }
        }).catch(error => {
          this.alert.presentToast(error);
        })
    } else {
      this.restApi.ChangeMobile(this.Model.Mobile, value, this.AccessToken).subscribe
        (response => {
          let result = this.restApi.converResponseToJson(response);
          if (result.ErrorCode == "0") {
            this.dataTransaction.setUserPhone(this.Model.Mobile);
            this.routerProvider.nextStep('Phone');
          } else {
            this.alert.presentToast(result.ErrorMessage);
          }

        })
    }

  }



}
