import { Component, OnInit } from '@angular/core';
import { AlertController, Platform, LoadingController } from '@ionic/angular';
import { Router, NavigationEnd, NoPreloading } from '@angular/router';
import { DataTransactionService } from 'src/app/services/data-transaction/data-transaction.service';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-bank-information',
  templateUrl: './bank-information.page.html',
  styleUrls: ['./bank-information.page.scss'],
})
export class BankInformationPage implements OnInit {

  Model = {
    AccountNo:'',
    AccountHolderName:'',
    IdentityType:'',
    IdentityNo:'',
    BankId:'',
    BankName:'',
    Statement:'',
    Status:'',
    CurrentPassword:''
  }

  isDebug: boolean = false;
  AccessToken: '';
  file: any;
  ErrorMessage: string = '';
  BankList =[{
    Name:'',
    Id : 0
  }];
  CurrentPassword:string  =''

  constructor(    
    public alertController: AlertController,    
    private router: Router,
    private dataTransaction: DataTransactionService,
    private platform: Platform,
    private api: NativeApiService,
    private loadingCtrl : LoadingController,
    private restApi: RestApiService,
    private alert: AlertProviderService,
    private camera: Camera,
    private routerProvider : RouteProviderService) { 
      if (platform.is('cordova')) {
        this.isDebug = false;
      }
      else this.isDebug = true;
  
      this.dataTransaction.getAccessToken().then(acc => {
        this.AccessToken = acc.toString();
        this.doGetBanks();
        this.doGetBankInformation();
      })
    }

  ngOnInit() {
  }

  doGetBanks(){
   
    if(!this.isDebug){
      this.api.GetBanks(this.AccessToken).then(
        response=>{          
          if(response.status == 200){
            let result = this.api.converResponseToJson(response.data);
            if(result.ErrorCode == 0){
              
              this.BankList = result.Data.Banks;   
            }else{
              this.alert.presentToast(result.ErrorMessage);
              if(result.ErrorCode == 1002){
                this.dataTransaction.logOut();
                this.routerProvider.nextStep('Phone');
              }
            }
          }else{
            this.alert.presentToast(response.error)
          }
        }
      ).catch(error=>{
        this.alert.presentToast(error);
      })
    }else{
      this.restApi.GetBanks(this.AccessToken).subscribe(
        response=>{
          let result= this.restApi.converResponseToJson(response);
          if(result.ErrorCode == 0){
            this.BankList = result.Data.Banks;
            console.log(result.Data.Banks)
          }else{
            this.ErrorMessage = result.ErrorMessage;
          }
        },
        error =>{
          this.ErrorMessage = error;
        }
      )
    }
  }

  doGetBankInformation(){

    if(!this.isDebug){
      this.api.GetBankInfo(this.AccessToken).then(
        response=>{
          if(response.status == 200){
            let result = this.api.converResponseToJson(response.data);
            if(result.ErrorCode == "0"){
              this.Model = result.Data;
            }else{
              this.alert.presentToast(result.ErrorMessage)
              if(result.ErrorCode == 1002){
                this.dataTransaction.logOut();
                this.routerProvider.nextStep('Phone');
              }
            }
          }else{
            this.alert.presentToast(response.error)
          }
        }
      ).catch(error=>{
        this.alert.presentToast(error);
      })
    }else{
      this.restApi.GetBankInfo(this.AccessToken).subscribe(
        response=>{
          let result= this.restApi.converResponseToJson(response);
          if(result.ErrorCode == 0){
            this.Model = result.Data;
          }else{
            this.ErrorMessage = result.ErrorMessage;
          }
        },
        error =>{
          this.ErrorMessage = error;
        }
      )
    }
  }

  doNext(){
    this.Model.Statement='https://outlook.office365.com/owa/';
    if(!this.isDebug){
      this.api.EditBankInfo(this.Model.AccountNo,
                            this.Model.AccountHolderName,
                            this.Model.IdentityType,
                            this.Model.IdentityNo,
                            this.Model.BankId,
                            this.Model.Statement,
                            this.CurrentPassword,
                            this.AccessToken).then(
        response=>{
          if(response.status == 200){
            let result = this.api.converResponseToJson(response.data);
            if(result.ErroCode == "0"){
              this.alert.presentToast('Your data has been changed')
            }else{
              this.alert.presentToast(result.ErrorMessage);
              if(result.ErrorCode == 1002){
                this.dataTransaction.logOut();
                this.routerProvider.nextStep('Phone');
              }
            }
          }else{
            this.alert.presentToast(response.error)
          }
        }
      ).catch(error=>{
        this.alert.presentToast(error);
      })
    }else{
      this.restApi.EditBankInfo(this.Model.AccountNo,
        this.Model.AccountHolderName,
        this.Model.IdentityType,
        this.Model.IdentityNo,
        this.Model.BankId,
        this.Model.Statement,
        this.CurrentPassword,
        this.AccessToken).subscribe(
        response=>{
          let result= this.restApi.converResponseToJson(response);
          if(result.ErrorCode == 0){
            this.Model = result.Data;
          }else{
            this.ErrorMessage = result.ErrorMessage;
          }
        },
        error =>{
          this.ErrorMessage = error;
        }
      )
    }
  }

  uploadStatement(){
    this.doGetPhoto();
  }

  doGetPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.file = imageData;
      this.UploadPhoto();
    }, (err) => {
      this.presentAlert(err);
    });
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

  async UploadPhoto() {
    if (!this.isDebug) {
      if (this.file != null) {
        let loader = await this.loadingCtrl.create({
          message: 'Loading ...'
        });

        loader.present();
        await this.api.UploadUserProfilePhoto(this.file, this.AccessToken)
          .then(response => {
            
            let result = this.api.converResponseToJson(response.response);
            if (result.ErrorCode == "0") {
              this.alert.presentToast('Bank statement has been uploaded.');
              loader.dismiss();
              return true;
            }
            else {
              loader.dismiss();
              this.alert.presentToast(result.ErrorMessage)
            }
          }).catch(error => {
            loader.dismiss();
            this.alert.presentToast(JSON.stringify(error))
          })

      }
    }
  }


}
