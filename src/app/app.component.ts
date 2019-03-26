import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FirebaseCloudMessagingService } from './services/firebase/firebase-cloud-messaging.service';
import { ToastController } from '@ionic/angular';

import { timer } from 'rxjs/observable/timer';
import {DataTransactionService} from './services/data-transaction/data-transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  showSplash = true;
  showIntro = true;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private firebaseService: FirebaseCloudMessagingService,
    public toastController: ToastController,
    private data: DataTransactionService
  ) {
    this.initializeApp();
  }

  private async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    })

    toast.present();
  }

  private notificationSetup() {
    this.firebaseService.getToken();
    this.firebaseService.onNotifications().subscribe(
      (message) => {
        if (this.platform.is('ios')) {
          this.presentToast(message.aps.alert);
        } else {
          this.presentToast(message.body);
        }
      }
    )
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#fbb333');
      this.splashScreen.hide();

      //if (this.platform.is('cordova')) this.notificationSetup();
      timer(1500).subscribe(() => this.showSplash = false);

      this.data.GetOnBoard().then(
        res=>{
          if(res != null && res){
            this.showIntro = false;
          }else{
            this.showIntro = true;
          }
        }
      )
    });
  }

  doStart(){
    this.data.setOnBoard();
    this.showIntro = false;
  }
}
