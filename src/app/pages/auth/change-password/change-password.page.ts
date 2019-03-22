import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { ConstantService } from './../../../services/constant/constant.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeApiService } from '../../../services/native-api/native-api.service'
import { Platform } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { RouteProviderService } from '../../../services/route-provider/route-provider.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
  providers: [
    NativeApiService
  ]
})
export class ChangePasswordPage implements OnInit {

  ErrorMessage: string = '';
  AccessToken: string = '';
  isDebug: boolean = false;
  showNewPassword:boolean = false;
  showConfirmPassword:boolean = false;

  Model = {
    Phone: '',
    NewPassword: '',
    ConfirmPassword: ''
  }

  constructor(
    private router: Router,
    private dataTransaction: DataTransactionService,
    private api: NativeApiService,
    private platform: Platform,
    private restApi: RestApiService,
    private alert: AlertProviderService,
    private routeProvider : RouteProviderService) {

    this.dataTransaction.getAccessToken().then((token) => {
      this.AccessToken = token;
    }).catch(error => {
      this.alert.presentToast("The system can not detect your corrent access token. please log out and login again.");
    })
    if (platform.is('cordova')) this.isDebug = false;
    else this.isDebug = true;
  }

  ngOnInit() {
    this.dataTransaction.getUserPhone().then((response) => {
      this.Model.Phone = response;
    }).catch(error => {
      this.ErrorMessage = error;
    })

  }

  doNext() {
    if (!this.doCheckPassword()) return;

    if (!this.isDebug) {
      if (this.Model.NewPassword != this.Model.ConfirmPassword) {
        this.alert.presentToast("New password not same with confirm password.");
        return;
      }

      this.api.CreatePassword(this.Model.NewPassword, this.AccessToken)
        .then((response) => {
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data);
            if (result.ErrorCode = "0") {
              this.alert.presentToast('Your password has been changed');
              this.routeProvider.nextStep(result.Data.NextStep);
            }
            else {
              this.alert.showErrorMessageAlert(result.ErrorMessage);
            }
          }

        }).catch(error => {
          this.alert.showErrorMessageAlert(error)
        })
    } else {
      this.restApi.CreatePassword(this.Model.NewPassword, this.AccessToken).subscribe(
        response => {
          let result = this.restApi.converResponseToJson(response);
          if (result.ErrorCode == "0") {
            this.alert.presentToast('Your password has been changed');
            this.routeProvider.nextStep(result.Data.NextStep);
          } else {
            this.ErrorMessage = response.ErrorMessage;
          }
        }
      )
    }
  }

  doCheckPassword() {
    this.ErrorMessage = "";

    if (this.Model.NewPassword.length < 8) {
      this.alert.presentToast('Password must be 8-20 characters, and it should not contain your mobile number or member Id');      
      return false;
    }

    if (this.Model.NewPassword.includes(this.Model.Phone)) {
      this.alert.presentToast('Password could not be a part of your phone number');
      return false;
    }

    return true;

  }

  doLogin() {
    this.router.navigate(['auth-phone']);
  }

  doShowConfirmPassword(value){
    this.showConfirmPassword = value;
  }

  doShowNewPassword(value){
    this.showNewPassword = value;
  }
}
