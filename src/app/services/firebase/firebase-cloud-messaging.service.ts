import { Injectable } from '@angular/core';
// import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { DataTransactionService } from '../data-transaction/data-transaction.service'
@Injectable({
  providedIn: 'root'
})
export class FirebaseCloudMessagingService {


  constructor(
    private platform: Platform,
    //private firebase: Firebase,
    private firestore: AngularFirestore,
    private uniqueDeviceID: UniqueDeviceID,
    private _Data: DataTransactionService
  ) {

  }


  async getToken() {
    let token;

    if (this.platform.is('android')) {
      token = null//await this.firebase.getToken();
    }

    if (this.platform.is('ios')) {
      token = null //await this.firebase.getToken();
      //this.firebase.grantPermission();
    }
    this.saveToken(token);
  }

  private saveToken(token) {
    if (!token) return;

    const devicesRef = this.firestore.collection('devices');

    const data = {
      token,
      userId: this.getDeviceUniqueId()
    }

    devicesRef.doc(token).set(data);
    this._Data.setToken(data);
  }

  onNotifications() {
    return null //this.firebase.onNotificationOpen();
  }

  getDeviceUniqueId() {
    let uniqueId = '';
    this.uniqueDeviceID.get()
      .then((uuid: any) => uniqueId = uuid)
      .catch((error: any) => console.log(error));

    // on test duration 
    if (uniqueId == 'cordova_not_available') return 'android-simulator';
    // if cordova was not able to detect device id
    if (uniqueId == '') return 'simulator';
    return uniqueId;
  }
}
