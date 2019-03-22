import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, Platform } from '@ionic/angular'
import { DataTransactionService } from 'src/app/services/data-transaction/data-transaction.service';
import { Router } from '@angular/router';
import { ConstantService } from 'src/app/services/constant/constant.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  Model = {
    Phone: '',
    Email: ''
  }

  isDebug: boolean = false;
  ErrorMessage: string = "";
  AccessToken: string = ""
  constructor(
    private dataTransaction: DataTransactionService,
    private router: Router,
    private constantService: ConstantService,
    private restApi: RestApiService,
    private api: NativeApiService,
    public alertController: AlertController,
    private platform : Platform) {

    dataTransaction.getAccessToken().then(
      response => {
        this.AccessToken = response;
      }
    )

    if(platform.is('cordova')) this.isDebug = false;
    else this.isDebug = true;
  }

  ngOnInit() {
    this.dataTransaction.getUserPhone().then(
      response => {
        console.log(response)
        if (response != null) this.Model.Phone = `${response}`;
        else {
          alert('phone does not exists')
        }
      }
    )

  }

  doCancel() {
    this.router.navigate(['auth-password'])
  }

  doNext() {
    if (this.doValidate()) {

      if (!this.isDebug) {
        this.api.RequestResetPassword(`${this.Model.Phone}`, this.Model.Email,this.AccessToken).then(
          response=>{
            if(response.status == 200){
              let result = this.api.converResponseToJson(response.data);
              if(result.Data ==""){
                this.ErrorMessage = "this email is not registered with the <br/> mobile number.please check the <br/> email address above again."
              }else{
                this.showAlert(`Your password has been sent to <br/> ${this.Model.Email}.`)               
              }
            }
          }
        )
      } else {
        this.restApi.RequestResetPassword(this.Model.Phone, this.Model.Email,this.AccessToken).subscribe(
          response =>{
            let result = this.restApi.converResponseToJson(response);
            if(result.ErrorCode == "0"){
              if(result.Data ==""){
                this.ErrorMessage = "this email is not registered with the <br/> mobile number.please check the <br/> email address above again."
              }else{
                this.showAlert(`Your password has been sent to <br/> ${this.Model.Email}.`)
                
              }
            }else{
              this.ErrorMessage = result.ErrorMessage;
            }
          }
        )
      }
    }
  }

  async showAlert(msg){
    const alert = await this.alertController.create({
      header: 'JomSave',
      subHeader: 'Reset Password',
      message: msg,
      buttons: [
         {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['auth-password']);
          }
        }
      ]
    });
     await alert.present();
  }

  doValidate() {
    if (this.Model.Email != '') {
      let isValid = this.constantService.ValidateEmail(this.Model.Email);
      if (!isValid) this.ErrorMessage = "Input email is invalid";
      else this.ErrorMessage = "";
      return isValid;
    }

  }
}
