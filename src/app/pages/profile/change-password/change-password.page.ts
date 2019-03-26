import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransactionService } from 'src/app/services/data-transaction/data-transaction.service';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
import { Platform } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  ErrorMessage: string = '';
  AccessToken: string = '';
  isDebug: boolean = false;
  Model = {
    Phone: '',
    Password: '',
    NewPassword: '',
    ConfirmPassword: ''
  }
  constructor(private router: Router,
    private dataTransaction: DataTransactionService,
    private api: NativeApiService,
    private platform: Platform,
    private restApi: RestApiService,
    private alert: AlertProviderService,
    private routeProvider: RouteProviderService,
    private routerProvider : RouteProviderService) {

    this.dataTransaction.getAccessToken().then((token) => {
      this.AccessToken = token;
    }).catch(error => {
      this.ErrorMessage = "The system can not detect your corrent password. <br/> please log out and login again.";
    })
    if (platform.is('cordova')) this.isDebug = false;
    else this.isDebug = true;
  }

  ngOnInit() {
  }

  doNext() {
    if (!this.doCheckPassword()) return;

    if (!this.isDebug) {
      if (this.Model.NewPassword != this.Model.ConfirmPassword) {
        this.alert.presentToast("The entered password and confirmation are equal.please check your entered values.");
        return;
      }
      if (this.Model.Password == '') {

        this.alert.presentToast("The system can not detect your corrent password. please log out and login again.");
        return;
      }
      this.api.ChangePassword(this.Model.Password, this.Model.NewPassword, this.AccessToken)
        .then((response) => {
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data);
            if (result.ErrorCode = "0") {
              this.alert.presentToast('Your password has been changed');
            }
            else {
              this.alert.presentToast(result.ErrorMessage);
              if(result.ErrorCode == 1002){
                this.dataTransaction.logOut();
                this.routerProvider.nextStep('Phone');
              }
            }
          }

        }).catch(error => {
          this.alert.presentToast(error)
        })
    } else {
      this.restApi.ChangePassword(this.Model.Password, this.Model.NewPassword, this.AccessToken).subscribe(
        response => {
          let result = this.restApi.converResponseToJson(response);
          if (result.ErrorCode == "0") {
            alert('Your password has been changed');
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
      this.alert.presentToast("Your password's length must be at least 8.");
      return false;
    }

    if (this.Model.NewPassword.includes(this.Model.Phone)) {
      this.alert.presentToast("Password could not be a part of your phone number");
      return false;
    }

    return true;

  }


}
