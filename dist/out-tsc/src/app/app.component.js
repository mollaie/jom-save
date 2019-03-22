import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseCloudMessagingService } from './services/firebase/firebase-cloud-messaging.service';
import { ToastController } from '@ionic/angular';
import { timer } from 'rxjs/observable/timer';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, firebaseService, toastController) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.firebaseService = firebaseService;
        this.toastController = toastController;
        this.showSplash = true;
        this.initializeApp();
    }
    AppComponent.prototype.presentToast = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.notificationSetup = function () {
        var _this = this;
        this.firebaseService.getToken();
        this.firebaseService.onNotifications().subscribe(function (message) {
            if (_this.platform.is('ios')) {
                _this.presentToast(message.aps.alert);
            }
            else {
                _this.presentToast(message.body);
            }
        });
    };
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
            if (_this.platform.is('cordova'))
                _this.notificationSetup();
            timer(4000).subscribe(function () { return _this.showSplash = false; });
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            FirebaseCloudMessagingService,
            ToastController])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map