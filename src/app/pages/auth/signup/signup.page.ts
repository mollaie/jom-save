import { Component, OnInit } from '@angular/core';
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { Router, NavigationEnd } from '@angular/router';
import { ConstantService } from './../../../services/constant/constant.service';
import { NativeApiService } from '../../../services/native-api/native-api.service'
import { Platform } from '@ionic/angular';
import { RestApiService } from '../../../services/rest-api.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { ThemeableBrowser, ThemeableBrowserObject, ThemeableBrowserOptions } from '@ionic-native/themeable-browser/ngx';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  Model = {
    Phone: '',
    Over18: false,
    AgreeWithTerms: false,
  }

  Data: any;

  ErrorMessage = '';
  isDebug: Boolean = false;

  constructor(
    private dataTransaction: DataTransactionService,
    private router: Router,
    private api: NativeApiService,
    private platform: Platform,
    private restApi: RestApiService,
    private alert: AlertProviderService,
    private themeableBrowser: ThemeableBrowser, ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) this.ngOnInit();
    })

    if (platform.is('cordova')) this.isDebug = false;
    else this.isDebug = true;
  }

  ngOnInit() {
    if (this.dataTransaction.Phone == '')
      this.router.navigate(['auth-phone']);

    this.Model.Phone = this.dataTransaction.Phone;

  }

  doLogin() {
    this.router.navigate(['auth-phone']);
  }

  doNext() {
    if (this.doValidate()) {
      this.dataTransaction.setUserPhone(this.Model.Phone);

      if (!this.isDebug) {
        this.api.PreRegister(this.Model.Phone).then(
          (response) => {
            let result = this.api.converResponseToJson(response.data);
            if (response.status == 200) {
              if (result.ErrorCode == "0") {
                this.dataTransaction.OtpBlockDuration = result.Data.OtpBlockDuration;
                this.router.navigate(['confirmation']);
              }
              if (result.ErrorCode == 2007) {
                this.alert.showErrorMessageAlert(result.ErrorMessage)
                this.router.navigate(['confirmation']);
              }
            } else {
              this.alert.showErrorMessageAlert(result.ErrorMessage)
            }
          },
        ).catch((error) => {
          this.alert.showErrorMessageAlert(error);
        })
      } else {
        this.restApi.PreRegister(this.Model.Phone).subscribe(response => {
          let result = this.restApi.converResponseToJson(response);
          if (result.ErrorCode == "0") {
            this.dataTransaction.OtpBlockDuration = result.Data.OtpBlockDuration;
            this.router.navigate(['confirmation']);
          } else {
            this.ErrorMessage = result.ErrorMessage;
          }

        })
      }
    }
  }

  doValidate() {
    if (!this.Model.Over18) {
      this.alert.showErrorMessageAlert('You should certify that you are at least 18 years old.');
      return false;
    }

    if (!this.Model.AgreeWithTerms) {
      this.alert.showErrorMessageAlert('You should certify that you are agreed with our Privacy & Policy');
      return false;
    }

    return true;
  }

  doCancel() {
    this.router.navigate(['auth-phone'])
  }
  doForgotPassword() {

  }

  doShowPricay() {
    const options: ThemeableBrowserOptions = {
      toolbar: {
        height: 44,
        color: '#fbb03b'
      },
      title: {
        color: '#ffffffff',
        showPageTitle: true,
        staticText: 'JomSave'
      },
      backButton: {
        image: 'back',
        imagePressed: 'back_pressed',
        align: 'left',
        event: 'backPressed'
      },
      forwardButton: {
        image: 'forward',
        imagePressed: 'forward_pressed',
        align: 'left',
        event: 'forwardPressed'
      },
      closeButton: {
        image: 'close',
        imagePressed: 'close_pressed',
        align: 'left',
        event: 'closePressed'
      },
      backButtonCanClose: false,

    };

    let url = 'https://afrd.website/jomsave/privacy.html';
    const browser: ThemeableBrowserObject = this.themeableBrowser.create(url, '_blank', options);
  }
}
