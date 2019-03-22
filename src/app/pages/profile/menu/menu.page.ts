import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataTransactionService } from 'src/app/services/data-transaction/data-transaction.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
import { Platform, ActionSheetController, AlertController, ModalController, LoadingController } from '@ionic/angular';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';
import { ConstantService } from 'src/app/services/constant/constant.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import {ModalImagePage} from '../modal/modal-image/modal-image.page';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  encodeData: null;
  MemberId: string = "";
  AccessToken: string = '';
  ErrorMessage: string = '';
  isDebug: boolean = false;
  Profile: any;
  Model = {
    Phone: '',
    FullName: '',
    DisplayName: '',
    Photo: '',
    Gender: 'Others',
    MemberId: '',
  }
  routerSubscription: any;
  file : any;

  options: ThemeableBrowserOptions = {
    toolbar: {
      height: 44,
      color: '#fbb03b'
    },
    title: {
      color: '#ffffffff',
      showPageTitle: true,
      staticText: 'JomSave'
    },
    closeButton: {
      wwwImage:'assets/images/Close.png',
      align: 'left',
      event: 'closePressed'
    },
    backButtonCanClose: false,

  };

  constructor(
    private router: Router,
    private dataTransaction: DataTransactionService,
    private restApi: RestApiService,
    private api: NativeApiService,
    private platform: Platform,
    private camera: Camera,
    public alertController: AlertController,
    private themeableBrowser: ThemeableBrowser,
    private routerProvider: RouteProviderService,
    private constantService: ConstantService,
    private alert: AlertProviderService,
    public actionSheetController: ActionSheetController,
    private diagnostic: Diagnostic,
    private loadingCtrl: LoadingController,
    private modalController: ModalController   
  ) {
  }

  ngOnInit() {

    this.dataTransaction.getAccessToken().then(acc => {
      if (acc == null)
        console.log('access token does not detected');
      else {
        this.AccessToken = acc.toString();
      }
    })

    this.dataTransaction.getProfile().then(
      profile => {
        this.Model = profile;
        this.encodedText(this.Model.MemberId);
        this.MemberId = this.Model.MemberId;          
        if(this.dataTransaction.ProfileImage == null || this.dataTransaction.ProfileImage ==''){
          this.dataTransaction.ProfileImage = profile.Photo;
        }        
      }
    )
  }

  encodedText(input) {
    this.encodeData = input;
  }

  About() {
    this.router.navigateByUrl('profile/profile/menu/about-us');
  }

  Terms() {
    let url = 'https://afrd.website/jomsave/term.html'
    const browser: ThemeableBrowserObject = this.themeableBrowser.create(url, '_blank', this.options);
  }

  Policy() {
    let url = 'https://afrd.website/jomsave/privacy.html'
    const browser: ThemeableBrowserObject = this.themeableBrowser.create(url, '_blank', this.options);
  }

  Setting() {
    this.dataTransaction.shouldNavigate = false;
    
    this.router.navigateByUrl('profile/profile/menu/setting');
  }

  Complaints() {
    this.dataTransaction.shouldNavigate = false;
    
    this.router.navigateByUrl('profile/profile/menu/complaints');
  }

  Feedback() {
    this.dataTransaction.shouldNavigate = false;
    this.router.navigateByUrl('profile/profile/menu/feedback');
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
          console.log('Cancel clicked');
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
                  this.Model.Photo = this.dataTransaction.ProfileImage;
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


  async logOutConfirmation() {
    const alert = await this.alertController.create({
      header: 'Jom-Save',
      message: 'Are you sure you want to logout?',
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
            this.Logout();
          }
        }
      ]
    });

    await alert.present();
  }

  Logout() {
    if (!this.isDebug) {
      this.api.Logout(this.AccessToken).then(
        response => {
          if (response.status == 200) {
            let result = this.api.converResponseToJson(response.data)
            if (result.ErrorCode == "0") {
              this.dataTransaction.shouldNavigate = false;
              this.dataTransaction.logOut();
              this.routerProvider.nextStep('Phone');
            }
            else {
              this.alert.presentToast(result.ErrorMessage)
              if(result.ErrorCode == 1002){
                this.dataTransaction.logOut();
                this.routerProvider.nextStep('Phone');
              }
            }
          } else {
            this.alert.presentToast(response.error)
          }
        }
      )
    } else {
      this.restApi.Logout(this.AccessToken).subscribe(
        response => {
          let result = this.restApi.converResponseToJson(response);
          if (result.ErrorCode == "0") {
            //if (result.ErrorCode == "0" || result.ErrorCode == 1002) {
            this.dataTransaction.shouldNavigate = false;
            this.dataTransaction.logOut();
            this.routerProvider.nextStep('Phone');
          } else {
            this.ErrorMessage = result.ErrorMessage;
          }

        }, error => {
          this.ErrorMessage = error;
        }
      )
    }
  }

  VisitUs(){
    this.dataTransaction.shouldNavigate = false;
    this.router.navigateByUrl('profile/profile/menu/location');
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

