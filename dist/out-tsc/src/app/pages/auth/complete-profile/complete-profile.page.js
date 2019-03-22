import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { Router } from '@angular/router';
import { ConstantService } from './../../../services/constant/constant.service';
import { ActionSheetController, AlertController, Platform } from '@ionic/angular';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { NativeApiService } from '../../../services/native-api/native-api.service';
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
var CompleteProfilePage = /** @class */ (function () {
    function CompleteProfilePage(actionSheetController, alertController, diagnostic, router, dataTransaction, camera, platform, api, routeProvider, restApi, alert) {
        var _this = this;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.diagnostic = diagnostic;
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.camera = camera;
        this.platform = platform;
        this.api = api;
        this.routeProvider = routeProvider;
        this.restApi = restApi;
        this.alert = alert;
        this.Navbar = 'Personal';
        this.Model = {
            Phone: '',
            FullName: '',
            DisplayName: '',
            ProfileImage: '',
            Gender: 'Others',
            Resouses: {
                PhoneIcon: '',
                WorldPicture: '',
                ProfileImage: '',
                CameraImage: ''
            }
        };
        this.isDebug = false;
        this.ErrorMessage = '';
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        if (platform.is('cordova')) {
            this.isDebug = false;
        }
        else
            this.isDebug = true;
        this.dataTransaction.getAccessToken().then(function (acc) {
            _this.AccessToken = acc.toString();
        });
    }
    CompleteProfilePage.prototype.ngOnInit = function () {
        this.Model.Phone = "";
    };
    CompleteProfilePage.prototype.doNext = function () {
        var _this = this;
        if (!this.isDebug) {
            if (this.Model.DisplayName != '' && this.Model.FullName != '') {
                this.api.CompleteProfile(this.Navbar, this.Model.FullName, this.Model.DisplayName, this.Model.Gender, this.AccessToken)
                    .then(function (response) {
                    if (response.status == 200) {
                        var result = _this.api.converResponseToJson(response.data);
                        if (result.ErrorCode == "0") {
                            _this.routeProvider.nextStep(result.Data.NextStep);
                        }
                        else {
                            _this.alert.showErrorMessageAlert(result.ErrorMessage);
                        }
                        _this.router.navigate(['profile']);
                    }
                }).catch(function (error) {
                    _this.alert.showErrorMessageAlert(error);
                });
            }
        }
        else {
            this.restApi.CompleteProfile(this.Navbar, this.Model.FullName, this.Model.DisplayName, this.Model.Gender, this.AccessToken)
                .subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == "0") {
                    _this.routeProvider.nextStep(result.Data.NextStep);
                }
                else {
                    _this.ErrorMessage = result.ErrorMessage;
                }
                _this.router.navigate(['profile']);
            });
        }
    };
    CompleteProfilePage.prototype.doPersonal = function () {
    };
    CompleteProfilePage.prototype.doBussines = function () {
    };
    CompleteProfilePage.prototype.presentActionSheet = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            buttons: [{
                                    text: 'Delete',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.Model.ProfileImage = ConstantService.icon_photo_camera;
                                    }
                                }, {
                                    text: 'Camera',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.doTakePhoto(0);
                                    }
                                }, {
                                    text: 'Gallery',
                                    icon: 'folder-open',
                                    handler: function () {
                                        _this.doTakePhoto(1);
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CompleteProfilePage.prototype.doTakePhoto = function (sourceType) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType == 0 ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        this.diagnostic.isCameraAvailable().then(function (callback) {
            _this.camera.getPicture(options).then(function (imageData) {
                var base64Image = 'data:image/jpeg;base64,' + imageData;
                _this.Model.ProfileImage = base64Image;
                _this.UploadPhoto();
            }, function (err) {
                _this.presentAlert(err);
            });
        }).catch(function (err) {
            _this.presentAlert(err);
        });
    };
    CompleteProfilePage.prototype.UploadPhoto = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isDebug) return [3 /*break*/, 2];
                        if (!(this.Model.ProfileImage != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.api.UploadProfilePhoto(this.Model.ProfileImage, this.AccessToken)
                                .then(function (response) {
                                if (response.status == 200) {
                                    var result = _this.api.converResponseToJson(response.data);
                                    if (result.ErrorCode == "0")
                                        return true;
                                    else
                                        _this.alert.showErrorMessageAlert(result.ErrorMessage);
                                }
                            }).catch(function (error) {
                                _this.alert.showErrorMessageAlert(error);
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    CompleteProfilePage.prototype.presentAlert = function (msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            subHeader: 'Subtitle',
                            message: msg,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CompleteProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-complete-profile',
            templateUrl: './complete-profile.page.html',
            styleUrls: ['./complete-profile.page.scss'],
            providers: [
                NativeApiService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [ActionSheetController,
            AlertController,
            Diagnostic,
            Router,
            DataTransactionService,
            Camera,
            Platform,
            NativeApiService,
            RouteProviderService,
            RestApiService,
            AlertProviderService])
    ], CompleteProfilePage);
    return CompleteProfilePage;
}());
export { CompleteProfilePage };
//# sourceMappingURL=complete-profile.page.js.map