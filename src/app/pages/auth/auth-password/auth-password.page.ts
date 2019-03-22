
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ConstantService } from './../../../services/constant/constant.service';
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { NativeApiService } from '../../../services/native-api/native-api.service';
import { Platform } from '@ionic/angular';
import { RestApiService } from '../../../services/rest-api.service'
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { ForgotPasswordService } from '../../../services/forgot-password/forgot-password.service';
@Component({
  selector: 'app-auth-password',
  templateUrl: './auth-password.page.html',
  styleUrls: ['./auth-password.page.scss'],
  providers: [
    NativeApiService
  ]
})
export class AuthPasswordPage implements OnInit {

  Model = {
    Phone: '',
    Password: '',
  }

  ErrorMessage = '';
  isDebug: boolean = false;
  showPassword : boolean = false;

  constructor(private router: Router,
    private dataTransaction: DataTransactionService,
    private api: NativeApiService,
    private platform: Platform,
    private restApi: RestApiService,
    private routerProvider: RouteProviderService,
    private alert: AlertProviderService,
    private forgotPasswordService: ForgotPasswordService
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) this.ngOnInit();
    })

    if (platform.is('cordova')) this.isDebug = false;
    else this.isDebug = true;

    this.Model.Phone = this.dataTransaction.Phone;
  }

  ngOnInit() {
    if (this.Model.Phone == '' || this.dataTransaction.Phone == '') {
      this.router.navigate(['auth-phone']);
    }
  }

  doNext() {
    if (!this.isDebug) {
      this.api.Login(`${this.Model.Phone}`, this.Model.Password, ["FreeMember", "Member"])
        .then(response => {
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data);
            if (result.ErrorCode == "0") {
              this.dataTransaction.setUserPhone(this.Model.Phone);
              this.dataTransaction.setProfile(this.Model);
              this.dataTransaction.setAccessToken(result.Data.NewAccessToken);
              this.dataTransaction.setNewRefreshToken(result.Data.NewRefreshToken);
              this.doRegisterNotification(result.Data.NewAccessToken);
              this.doGetProfile(result.Data.NewAccessToken);
            } else {
              this.alert.showErrorMessageAlert(result.ErrorMessage);
            }
          }
        }).catch(error => {
          this.alert.showErrorMessageAlert(error);
        })
    } else {
      this.restApi.Login(`${this.Model.Phone}`, this.Model.Password, ["FreeMember", "Member"])
        .subscribe(response => {
          let result = this.restApi.converResponseToJson(response);
          if (result.ErrorCode == "0") {
            this.dataTransaction.setUserPhone(this.Model.Phone);
            this.dataTransaction.setProfile(this.Model);
            this.dataTransaction.setAccessToken(result.Data.NewAccessToken);
            this.dataTransaction.setNewRefreshToken(result.Data.NewRefreshToken);
            this.doGetProfile(result.Data.NewAccessToken);
          } else {
            this.ErrorMessage = result.ErrorMessage;
          }
        }, error => {
          this.alert.showErrorMessageAlert(error);
        })
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
              this.dataTransaction.ProfileImage = result.Data.Photo == null || result.Data.Photo == '' ? '../../assets/images/icon-dispaly-name.svg' : result.Data.Photo;
              this.routerProvider.nextStep(result.Data.NextStep);
            } else {
              this.alert.showErrorMessageAlert(result.ErrorMessage);
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

  doRegisterNotification(AccessToken) {
    this.dataTransaction.GetToken().then(
      token => {
        this.api.Register_Notification(token.token, AccessToken).then(
          response => {
          }
        )
      }
    )


  }

  doForgotPassword() {
    this.forgotPasswordService.preRequestResetPassword(this.Model.Phone);
  }

  doCancel() {
    this.router.navigate(['auth-phone'])
  }

  doShowPassword(value){
    this.showPassword = value;
  }
}
