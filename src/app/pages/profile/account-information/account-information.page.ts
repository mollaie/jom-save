

import { Component, OnInit } from '@angular/core';
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, Platform, LoadingController } from '@ionic/angular';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NativeApiService } from '../../../services/native-api/native-api.service'
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.page.html',
  styleUrls: ['./account-information.page.scss'],
  providers: [
    NativeApiService
  ]
})
export class AccountInformationPage implements OnInit {

  Navbar = 'Personal';

  Model = {
    Phone: '',
    FullName: '',
    DisplayName: '',
    Gender: 'Others',
    Photo : '',
    Resouses: {
      PhoneIcon: '',
      WorldPicture: '',
      ProfileImage: '',
      CameraImage: ''
    }
  }

  isDebug: boolean = false;
  AccessToken: '';
  ErrorMessage: string = '';
  file: any;

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    private diagnostic: Diagnostic,
    private router: Router,
    private dataTransaction: DataTransactionService,
    private camera: Camera,
    private platform: Platform,
    private api: NativeApiService,
    private routeProvider: RouteProviderService,
    private restApi: RestApiService,
    private alert: AlertProviderService,
    private loadingCtrl: LoadingController
  ) {
    if (platform.is('cordova')) {
      this.isDebug = false;
    }
    else this.isDebug = true;

    this.dataTransaction.getAccessToken().then(acc => {
      this.AccessToken = acc.toString();
    })

    this.dataTransaction.getProfile().then(
      profile => {
        this.Model.FullName = profile.Name;
        this.Model.DisplayName = profile.DisplayName;
        this.Model.Gender = profile.Gender;
        this.Navbar = profile.UserType;
        if(this.dataTransaction.ProfileImage == null || this.dataTransaction.ProfileImage ==''){
          this.dataTransaction.ProfileImage = profile.Photo;
        }       
      }
    )

    
  }

  ngOnInit() {
  }

  doNext() {
    if (!this.isDebug) {
      if (this.Model.DisplayName != '' && this.Model.FullName != '') {
        this.api.CompleteProfile(this.Navbar, this.Model.FullName, this.Model.DisplayName, this.Model.Gender, this.AccessToken)
          .then(response => {
            if (response.status == 200) {
              let result = this.api.converResponseToJson(response.data);
              if (result.ErrorCode == "0") {
                this.routeProvider.nextStep(result.Data.NextStep);
              } else {
                this.alert.presentToast(result.ErrorMessage);
              }
            }


          }).catch(error => {
            this.alert.presentToast(error)
          })
      }
    } else {
      this.restApi.CompleteProfile(this.Navbar, this.Model.FullName, this.Model.DisplayName, this.Model.Gender, this.AccessToken)
        .subscribe(response => {
          let result = this.restApi.converResponseToJson(response);
          if (result.ErrorCode == "0") {
            this.routeProvider.nextStep(result.Data.NextStep);
          } else {
            this.ErrorMessage = result.ErrorMessage;
          }
        })

    }


  }

  doPersonal() {
  }

  doBussines() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          this.doTakePhoto()
        }
      }, {
        text: 'Gallery',
        icon: 'folder-open',
        handler: () => {
          this.doGetPhoto()
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }

  doTakePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.file = imageData;
      this.UploadPhoto();
    }, (err) => {
      this.presentAlert(err);
    });
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
              this.dataTransaction.ProfileImage = result.Data.PhotoUrl;
              this.dataTransaction.getProfile().then(
                profile => {
                  let p = profile;
                  p.ProfileImage = this.dataTransaction.ProfileImage;
                  this.dataTransaction.setProfile(p);
                }
              )
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

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}
