import { Injectable } from '@angular/core';
import { DataTransactionService } from '../data-transaction/data-transaction.service';
import { NativeApiService } from '../native-api/native-api.service';
import { RestApiService } from '../rest-api.service';
import { Platform, AlertController } from '@ionic/angular';
import { RouteProviderService } from '../route-provider/route-provider.service';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {


  isDebug: boolean = false;
  AccessToken: string = "";
  constructor(
    private data: DataTransactionService,
    private api: NativeApiService,
    private restApi: RestApiService,
    private router: RouteProviderService,
    private platform: Platform,
    public alertController: AlertController
  ) {
    if (platform.is('cordova')) this.isDebug = false;
    this.isDebug = true;
  }

  ngOnInit(): void {
    this.data.getAccessToken().then(
      Response => {
        this.AccessToken = Response;
      }
    )
  }


  preRequestResetPassword(mobile) {
    if (!this.isDebug) {
      this.api.PreRequestResetPassword(mobile).then(
        response => {
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data);
            if (result.ErrorCode == "0") {
              if (result.Data.IsEmailVerified == true || result.Data.IsEmailVerified == "true" || result.Data.IsEmailVerified == "1") {
                this.router.nextStep('ForgotPassword');
              } else {
                this.emailNotRegisteredAlert(mobile);
              }
            } else {
              alert(result.ErrorMessage);
            }
          }
        }
      )
    } else {
      this.restApi.PreRequestResetPassword(mobile).subscribe(
        response => {
          let result = this.restApi.converResponseToJson(response);
          if (result.ErrorCode == 0) {
            if (result.Data.IsEmailVerified == "Yes") {
              this.router.nextStep('ForgotPassword');
            } else {
              this.emailNotRegisteredAlert(mobile);
            }
          } else {
            alert(result.ErrorMessage);
          }
        }
      )
    }
  }

  async  phoneNotRegisterAlert() {
    const alert = await this.alertController.create({
      header: 'Jom-Save',
      subHeader: 'Warning',
      message: 'The phone is not registered.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async emailNotRegisteredAlert(mobile) {
    const alert = await this.alertController.create({
      header: 'Jom-Save',
      message: 'Your password will be reset and a new password will be sent to your mobile number',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.router.nextStep("Password");
          }
        }, {
          text: 'Proceed',
          handler: () => {
            this.doProceed(mobile);
          }
        }
      ]
    });

    await alert.present();
  }

  doProceed(mobile) {
    if (!this.isDebug) {
      this.api.RequestResetPassword(mobile, '', this.AccessToken).then(
        response => {
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data);
            if (result.ErrorCode == "0") {
              this.showAlert(`Your password has been sent to your mobile ${mobile}`);
            } else {
              alert(result.ErrorMessage);
            }
          }
        }
      )
    } else {
      this.restApi.RequestResetPassword(mobile, '', this.AccessToken).subscribe(
        response => {
          let result = this.restApi.converResponseToJson(response);
          if (result.ErrorCode == 0) {
            this.showAlert(`Your password has been sent to your mobile ${mobile}`);
          } else {
            alert(result.ErrorMessage);
          }
        }
      )
    }
  }

  async showAlert(msg) {
    const alert = await this.alertController.create({
      header: 'JomSave',
      subHeader: 'Reset Password',
      message: msg,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.router.nextStep("Phone");
          }
        }
      ]
    });
    await alert.present();
  }



}

