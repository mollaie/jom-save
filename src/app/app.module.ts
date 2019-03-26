
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ZBar } from '@ionic-native/zbar/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { ThemeableBrowser } from '@ionic-native/themeable-browser/ngx';

// Native Http Module
import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
import { Platform } from '@ionic/angular';

//Social Sharing
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

//Firebase 
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { Firebase } from '@ionic-native/firebase/ngx';
// import { FirebaseCloudMessagingService } from './services/firebase/firebase-cloud-messaging.service';

//Secure Storage

const config = {
  apiKey: "AIzaSyBsacs7Yv0SLZEK0cG0yQAUytdIUwEYRDs",
  authDomain: "jomsavemalaysia.firebaseapp.com",
  databaseURL: "https://jomsavemalaysia.firebaseio.com",
  projectId: "jomsavemalaysia",
  storageBucket: "jomsavemalaysia.appspot.com",
  messagingSenderId: "118760874022"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AppRoutingModule,
    HttpClientModule,
    NativeHttpModule],
  providers: [
    StatusBar,
    ZBar,
    ThemeableBrowser,
    // Firebase,
    // FirebaseCloudMessagingService,
    SplashScreen,
    FileTransfer,
    SocialSharing,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
