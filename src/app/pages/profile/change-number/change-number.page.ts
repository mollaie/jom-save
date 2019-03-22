import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataTransactionService } from 'src/app/services/data-transaction/data-transaction.service';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
import { Platform, AlertController } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest-api.service';
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.page.html',
  styleUrls: ['./change-number.page.scss'],
})
export class ChangeNumberPage implements OnInit {

  Model = {
    Mobile: '',
    Password: '',
  }

  AccessToken: string = "";
  ErrorMessage = '';
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
    this.Model.Mobile = "+60";
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
              this.presentAlert('An OTP will be sent to the above mobile number');
              this.dataTransaction.OtpBlockDuration = result.Data.OtpBlockDuration;
              this.dataTransaction.Phone = this.Model.Mobile;
              this.routerProvider.nextStep('OTP-ChangePassword');
            } else {
              this.alert.presentToast(result.ErrorMessage);
              if(result.ErrorCode == 1002){
                this.dataTransaction.logOut();
                this.routerProvider.nextStep('Phone');
              }
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
            this.presentAlert('An OTP will be sent to the above mobile number');
            this.dataTransaction.OtpBlockDuration = result.Data.OtpBlockDuration;
            this.dataTransaction.Phone = this.Model.Mobile;
            this.routerProvider.nextStep('OTP-ChangePassword');
          } else {
            this.alert.presentToast(result.ErrorMessage);
          }
        }, error => {
          this.alert.presentToast(error);
        })
    }

  }

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async Confirmation() {
    const alert = await this.alertController.create({
      header: 'Jom-Save',
      message: 'Changing your mobile number will replace current number. Are you sure you want to proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Ok',
          handler: () => {
            this.doNext();
          }
        }
      ]
    });

    await alert.present();
  }

  doShowPassword(value){
    this.showPassword = value;
  }

  doOnChange(event) {
    const pattern = /^[0-9]*$/;
    let inputChar = event.key;

    if (event.keyCode == 8 || event.which == 8) {
      if (event.target.value.length == 3) {
        event.preventDefault();
      }
    } else {
      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
    }
  }
}
