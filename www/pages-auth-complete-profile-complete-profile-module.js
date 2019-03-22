(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-complete-profile-complete-profile-module"],{

/***/ "./src/app/pages/auth/complete-profile/complete-profile.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/complete-profile/complete-profile.module.ts ***!
  \************************************************************************/
/*! exports provided: CompleteProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteProfilePageModule", function() { return CompleteProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _complete_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complete-profile.page */ "./src/app/pages/auth/complete-profile/complete-profile.page.ts");







var routes = [
    {
        path: '',
        component: _complete_profile_page__WEBPACK_IMPORTED_MODULE_6__["CompleteProfilePage"]
    }
];
var CompleteProfilePageModule = /** @class */ (function () {
    function CompleteProfilePageModule() {
    }
    CompleteProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_complete_profile_page__WEBPACK_IMPORTED_MODULE_6__["CompleteProfilePage"]]
        })
    ], CompleteProfilePageModule);
    return CompleteProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/complete-profile/complete-profile.page.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/complete-profile/complete-profile.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content  class=\"none-background\">\n  <div class=\"container\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class=\"logo\"></div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\">\n          <ion-toolbar no-border-top class=\"toolbar\">\n            <ion-segment  [(ngModel)]=\"Navbar\">\n              <ion-segment-button value=\"Personal\" (click)=\"doPersonal()\">\n                Personal\n              </ion-segment-button>\n              <ion-segment-button value=\"Bussines\" (click)=\"doBussines()\">\n                Business\n              </ion-segment-button>\n\n            </ion-segment>\n          </ion-toolbar>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\"></ion-col>\n        <ion-col size=\"6\" class=\"text-center\" style=\"padding-left:20px\">\n          <div class=\"picture-container text-center\">\n            <img src={{Model.ProfileImage}} width=150 height=150/>\n          </div>\n        </ion-col>\n        <ion-col size=\"3\">\n          <div>\n            <img src=\"../../assets/images/photo-camera.svg\" style=\"width:25px;margin-top: 60%;\"\n              (click)=\"presentActionSheet()\" />\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"2\">\n          <img  *ngIf=\"Navbar =='Personal'\" src=\"../../assets/images/icon-fullname.svg\" />\n          <img  *ngIf=\"Navbar !='Personal'\" src=\"../../assets/images/icon-bank.svg\" />\n        </ion-col>\n        <ion-col size=\"8\">\n          <input type=\"text\" class=\"forgot-password-input\" [(ngModel)]=\"Model.FullName\" />\n          <span class=\"forgot-password-span\" *ngIf=\"Navbar =='Personal'\" >Full Name</span>\n          <span class=\"forgot-password-span\" *ngIf=\"Navbar !='Personal'\" >Business Registration name</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"2\">\n          <img src=\"../../assets/images/icon-dispaly-name.svg\" />\n        </ion-col>\n        <ion-col size=\"8\">\n          <input type=\"text\" class=\"forgot-password-input\" [(ngModel)]=\"Model.DisplayName\" />\n          <span class=\"forgot-password-span\">Display Name</span>\n        </ion-col>\n      </ion-row>\n      <ion-radio-group *ngIf=\"Navbar =='Personal'\" [(ngModel)]=\"Model.Gender\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-item no-lines lines=\"none\">\n              <ion-label>Male</ion-label>\n              <ion-radio color=\"danger\" item-left value=\"Male\" checked></ion-radio>\n            </ion-item>\n          </ion-col>\n\n          <ion-col  size=\"4\">\n            <ion-item no-lines lines=\"none\">\n              <ion-label>Female</ion-label>\n              <ion-radio color=\"danger\" item-left value=\"Female\" ></ion-radio>\n            </ion-item>\n          </ion-col>\n\n          <ion-col  size=\"4\">\n            <ion-item no-lines lines=\"none\">\n              <ion-label>Others</ion-label>\n              <ion-radio color=\"danger\" item-left value=\"Other\" ></ion-radio>\n            </ion-item>\n          </ion-col>\n\n        </ion-row>\n      </ion-radio-group>\n      <ion-row>\n        <ion-col>\n          <ion-label color=\"danger\" *ngIf=\"ErrorMessage != ''\">{{ErrorMessage}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button class=\"next-button\" (click)=\"doNext()\">\n          <ion-icon name=\"arrow-forward\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/complete-profile/complete-profile.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/complete-profile/complete-profile.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvY29tcGxldGUtcHJvZmlsZS9jb21wbGV0ZS1wcm9maWxlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/auth/complete-profile/complete-profile.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/complete-profile/complete-profile.page.ts ***!
  \**********************************************************************/
/*! exports provided: CompleteProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteProfilePage", function() { return CompleteProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../..//services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");











var CompleteProfilePage = /** @class */ (function () {
    function CompleteProfilePage(actionSheetController, alertController, diagnostic, router, dataTransaction, camera, platform, api, routeProvider, restApi, alert, loadingCtrl) {
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
        this.loadingCtrl = loadingCtrl;
        this.Navbar = 'Personal';
        this.Model = {
            Phone: '',
            FullName: '',
            DisplayName: '',
            ProfileImage: null,
            Gender: 'Male',
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
        this.Model.ProfileImage = '../../assets/images/icon-dispaly-name.svg';
        this.Model.Phone = "";
    };
    CompleteProfilePage.prototype.doNext = function () {
        var _this = this;
        if (this.doValidation()) {
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
                            //this.router.navigate(['profile/profile/home']);
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
                    //this.router.navigate(['profile/profile/home']);
                });
            }
        }
    };
    CompleteProfilePage.prototype.doPersonal = function () {
    };
    CompleteProfilePage.prototype.doBussines = function () {
    };
    CompleteProfilePage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            buttons: [{
                                    text: 'Camera',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.doTakePhoto();
                                    }
                                }, {
                                    text: 'Gallery',
                                    icon: 'folder-open',
                                    handler: function () {
                                        _this.doGetPhoto();
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
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
    CompleteProfilePage.prototype.doTakePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.file = imageData;
            _this.UploadPhoto();
        }, function (err) {
            _this.presentAlert(err);
        });
    };
    CompleteProfilePage.prototype.doGetPhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.file = imageData;
            _this.UploadPhoto();
        }, function (err) {
            _this.presentAlert(err);
        });
    };
    CompleteProfilePage.prototype.UploadPhoto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loader_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isDebug) return [3 /*break*/, 3];
                        if (!(this.file != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading ...'
                            })];
                    case 1:
                        loader_1 = _a.sent();
                        loader_1.present();
                        return [4 /*yield*/, this.api.UploadUserProfilePhoto(this.file, this.AccessToken)
                                .then(function (response) {
                                var result = _this.api.converResponseToJson(response.response);
                                if (result.ErrorCode == "0") {
                                    _this.dataTransaction.ProfileImage = result.Data.PhotoUrl;
                                    _this.dataTransaction.getProfile().then(function (profile) {
                                        var p = profile;
                                        p.ProfileImage = _this.dataTransaction.ProfileImage;
                                        _this.Model.ProfileImage = _this.dataTransaction.ProfileImage;
                                        _this.dataTransaction.setProfile(p);
                                    });
                                    loader_1.dismiss();
                                    return true;
                                }
                                else {
                                    loader_1.dismiss();
                                    _this.alert.showErrorMessageAlert(result.ErrorMessage);
                                }
                            }).catch(function (error) {
                                loader_1.dismiss();
                                _this.alert.showErrorMessageAlert(JSON.stringify(error));
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CompleteProfilePage.prototype.presentAlert = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    CompleteProfilePage.prototype.doValidation = function () {
        if (this.Model.DisplayName.length == 0) {
            this.alert.showErrorMessageAlert('Please key in your display name.');
            return false;
        }
        if (this.Model.FullName.length == 0) {
            this.alert.showErrorMessageAlert('Please key in your full name.');
            return false;
        }
        return true;
    };
    CompleteProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complete-profile',
            template: __webpack_require__(/*! ./complete-profile.page.html */ "./src/app/pages/auth/complete-profile/complete-profile.page.html"),
            providers: [
                _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_7__["NativeApiService"]
            ],
            styles: [__webpack_require__(/*! ./complete-profile.page.scss */ "./src/app/pages/auth/complete-profile/complete-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_5__["Diagnostic"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_2__["DataTransactionService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_7__["NativeApiService"],
            src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_8__["RouteProviderService"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_9__["RestApiService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_10__["AlertProviderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], CompleteProfilePage);
    return CompleteProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-complete-profile-complete-profile-module.js.map