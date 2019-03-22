import * as tslib_1 from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ZBar } from '@ionic-native/zbar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { ThemeableBrowser } from '@ionic-native/themeable-browser/ngx';
// Native Http Module
import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
import { Platform } from '@ionic/angular';
//Firebase 
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import { FirebaseCloudMessagingService } from './services/firebase/firebase-cloud-messaging.service';
var config = {
    apiKey: "AIzaSyBsacs7Yv0SLZEK0cG0yQAUytdIUwEYRDs",
    authDomain: "jomsavemalaysia.firebaseapp.com",
    databaseURL: "https://jomsavemalaysia.firebaseio.com",
    projectId: "jomsavemalaysia",
    storageBucket: "jomsavemalaysia.appspot.com",
    messagingSenderId: "118760874022"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent],
            entryComponents: [],
            imports: [
                BrowserModule,
                IonicModule.forRoot({
                    scrollAssist: false,
                    scrollPadding: false,
                }),
                IonicStorageModule.forRoot(),
                AngularFireModule.initializeApp(config),
                AngularFirestoreModule,
                AppRoutingModule,
                HttpClientModule,
                NativeHttpModule
            ],
            providers: [
                StatusBar,
                ZBar,
                ThemeableBrowser,
                Firebase,
                FirebaseCloudMessagingService,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
                { provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend] }
            ],
            bootstrap: [AppComponent],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map