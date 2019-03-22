import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
var FirebaseCloudMessagingService = /** @class */ (function () {
    function FirebaseCloudMessagingService(platform, firebase, firestore, uniqueDeviceID) {
        this.platform = platform;
        this.firebase = firebase;
        this.firestore = firestore;
        this.uniqueDeviceID = uniqueDeviceID;
    }
    FirebaseCloudMessagingService.prototype.getToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var token;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebase.getToken()];
                    case 1:
                        token = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.firebase.getToken()];
                    case 3:
                        token = _a.sent();
                        this.firebase.grantPermission();
                        _a.label = 4;
                    case 4:
                        this.saveToken(token);
                        return [2 /*return*/];
                }
            });
        });
    };
    FirebaseCloudMessagingService.prototype.saveToken = function (token) {
        if (!token)
            return;
        var devicesRef = this.firestore.collection('devices');
        var data = {
            token: token,
            userId: this.getDeviceUniqueId()
        };
        devicesRef.doc(token).set(data);
    };
    FirebaseCloudMessagingService.prototype.onNotifications = function () {
        return this.firebase.onNotificationOpen();
    };
    FirebaseCloudMessagingService.prototype.getDeviceUniqueId = function () {
        var uniqueId = '';
        this.uniqueDeviceID.get()
            .then(function (uuid) { return uniqueId = uuid; })
            .catch(function (error) { return console.log(error); });
        // on test duration 
        if (uniqueId == 'cordova_not_available')
            return 'android-simulator';
        // if cordova was not able to detect device id
        if (uniqueId == '')
            return 'simulator';
        return uniqueId;
    };
    FirebaseCloudMessagingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            Firebase,
            AngularFirestore,
            UniqueDeviceID])
    ], FirebaseCloudMessagingService);
    return FirebaseCloudMessagingService;
}());
export { FirebaseCloudMessagingService };
//# sourceMappingURL=firebase-cloud-messaging.service.js.map