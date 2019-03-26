(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./src/app/pages/profile/menu/menu.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/profile/menu/menu.module.ts ***!
  \***************************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/profile/menu/menu.page.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");
/* harmony import */ var _modal_modal_image_modal_image_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal/modal-image/modal-image.module */ "./src/app/pages/profile/modal/modal-image/modal-image.module.ts");









var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__["NgxQRCodeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            providers: [
                _modal_modal_image_modal_image_module__WEBPACK_IMPORTED_MODULE_8__["ModalImagePageModule"]
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/menu/menu.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/profile/menu/menu.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"3\">\n                <div class=\"home-userinfo-container\">\n                    <p>Member</p>\n                    <span>{{Model.DisplayName}}</span>\n                </div>\n            </ion-col>\n            <ion-col size=\"6\" class=\"text-center\" style=\"padding-left:20px\">\n                <div class=\"picture-container text-center\">\n                    <img [src]=\"dataTransaction.ProfileImage\" width=150 height=150 />\n                </div>\n            </ion-col>\n            <ion-col size=\"3\">\n                <div>\n                    <img src=\"../../assets/images/photo-camera.svg\" style=\"width:25px;margin-top: 60%;\"\n                        (click)=\"presentActionSheet()\" />\n                </div>\n                <div class=\"home-qrcode-container\">\n                    <ngx-qrcode [qrc-value]=\"encodeData\" class=\"text-center\"></ngx-qrcode>\n                    <p>{{MemberId}}</p>\n                </div>\n            </ion-col>\n        </ion-row>\n        <br />\n        <br />\n        <ion-row>\n            <ion-col size=\"4\" class=\"text-center\">\n                <img src='../../assets/images/btn-settings.svg' style=\"max-width:30%\" (click)=\"Setting()\"/>\n                <p>Settings</p>\n            </ion-col>\n            <ion-col size=\"4\" class=\"text-center\">\n                <img src='../../assets/images/btn-feedback.svg' style=\"max-width:30%\" (click)=\"Feedback()\"/>\n                <p>Feedback</p>\n            </ion-col>\n            <ion-col size=\"4\" class=\"text-center\">\n                <img src='../../assets/images/btn-complaints.svg' style=\"max-width:30%\" (click)=\"Complaints()\"/>\n                <p>Complaints</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class=\"text-center\" (click)=\"VisitUs()\">\n                <img src='../../assets/images/btn-visit-us.svg' style=\"max-width:10%\" />\n                <p>Visit Us</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class=\"text-center\">\n                <a (click)=\"About()\">About JomSave</a>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class=\"text-center\">\n                <a (click)=\"Terms()\">Terms of Use</a>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class=\"text-center\">\n                <a (click)=\"Policy()\">Privacy Policy</a>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class=\"text-center\">\n                <a (click)=\"logOutConfirmation()\">Logout</a>                \n            </ion-col>            \n        </ion-row>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/menu/menu.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/profile/menu/menu.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvbWVudS9tZW51LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/menu/menu.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/menu/menu.page.ts ***!
  \*************************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/themeable-browser/ngx */ "./node_modules/@ionic-native/themeable-browser/ngx/index.js");
/* harmony import */ var src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");
/* harmony import */ var src_app_services_constant_constant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/constant/constant.service */ "./src/app/services/constant/constant.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/ngx/index.js");













var MenuPage = /** @class */ (function () {
    function MenuPage(router, dataTransaction, restApi, api, platform, camera, alertController, themeableBrowser, routerProvider, constantService, alert, actionSheetController, diagnostic, loadingCtrl, modalController) {
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.restApi = restApi;
        this.api = api;
        this.platform = platform;
        this.camera = camera;
        this.alertController = alertController;
        this.themeableBrowser = themeableBrowser;
        this.routerProvider = routerProvider;
        this.constantService = constantService;
        this.alert = alert;
        this.actionSheetController = actionSheetController;
        this.diagnostic = diagnostic;
        this.loadingCtrl = loadingCtrl;
        this.modalController = modalController;
        this.MemberId = "";
        this.AccessToken = '';
        this.ErrorMessage = '';
        this.isDebug = false;
        this.Model = {
            Phone: '',
            FullName: '',
            DisplayName: '',
            Photo: '',
            Gender: 'Others',
            MemberId: '',
        };
        this.options = {
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
                wwwImage: 'assets/images/Close.png',
                align: 'left',
                event: 'closePressed'
            },
            backButtonCanClose: false,
        };
    }
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getAccessToken().then(function (acc) {
            if (acc == null)
                console.log('access token does not detected');
            else {
                _this.AccessToken = acc.toString();
            }
        });
        this.dataTransaction.getProfile().then(function (profile) {
            _this.Model = profile;
            _this.encodedText(_this.Model.MemberId);
            _this.MemberId = _this.Model.MemberId;
            if (_this.dataTransaction.ProfileImage == null || _this.dataTransaction.ProfileImage == '') {
                _this.dataTransaction.ProfileImage = profile.Photo;
            }
        });
    };
    MenuPage.prototype.encodedText = function (input) {
        this.encodeData = input;
    };
    MenuPage.prototype.About = function () {
        this.router.navigateByUrl('profile/profile/menu/about-us');
    };
    MenuPage.prototype.Terms = function () {
        var url = 'https://afrd.website/jomsave/term.html';
        var browser = this.themeableBrowser.create(url, '_blank', this.options);
    };
    MenuPage.prototype.Policy = function () {
        var url = 'https://afrd.website/jomsave/privacy.html';
        var browser = this.themeableBrowser.create(url, '_blank', this.options);
    };
    MenuPage.prototype.Setting = function () {
        this.dataTransaction.shouldNavigate = false;
        this.router.navigateByUrl('profile/profile/menu/setting');
    };
    MenuPage.prototype.Complaints = function () {
        this.dataTransaction.shouldNavigate = false;
        this.router.navigateByUrl('profile/profile/menu/complaints');
    };
    MenuPage.prototype.Feedback = function () {
        this.dataTransaction.shouldNavigate = false;
        this.router.navigateByUrl('profile/profile/menu/feedback');
    };
    MenuPage.prototype.presentActionSheet = function () {
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
    MenuPage.prototype.doTakePhoto = function () {
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
    MenuPage.prototype.doGetPhoto = function () {
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
    MenuPage.prototype.UploadPhoto = function () {
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
                                        _this.Model.Photo = _this.dataTransaction.ProfileImage;
                                        _this.dataTransaction.setProfile(p);
                                    });
                                    loader_1.dismiss();
                                    return true;
                                }
                                else {
                                    loader_1.dismiss();
                                    _this.alert.presentToast(result.ErrorMessage);
                                }
                            }).catch(function (error) {
                                loader_1.dismiss();
                                _this.alert.presentToast(JSON.stringify(error));
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MenuPage.prototype.logOutConfirmation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Jom-Save',
                            message: 'Are you sure you want to logout?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function () {
                                        _this.Logout();
                                    }
                                }
                            ]
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
    MenuPage.prototype.Logout = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.Logout(this.AccessToken).then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                        _this.dataTransaction.shouldNavigate = false;
                        _this.dataTransaction.logOut();
                        _this.routerProvider.nextStep('Phone');
                    }
                    else {
                        _this.alert.presentToast(result.ErrorMessage);
                        if (result.ErrorCode == 1002) {
                            _this.dataTransaction.logOut();
                            _this.routerProvider.nextStep('Phone');
                        }
                    }
                }
                else {
                    _this.alert.presentToast(response.error);
                }
            });
        }
        else {
            this.restApi.Logout(this.AccessToken).subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == "0") {
                    //if (result.ErrorCode == "0" || result.ErrorCode == 1002) {
                    _this.dataTransaction.shouldNavigate = false;
                    _this.dataTransaction.logOut();
                    _this.routerProvider.nextStep('Phone');
                }
                else {
                    _this.ErrorMessage = result.ErrorMessage;
                }
            }, function (error) {
                _this.ErrorMessage = error;
            });
        }
    };
    MenuPage.prototype.VisitUs = function () {
        this.dataTransaction.shouldNavigate = false;
        this.router.navigateByUrl('profile/profile/menu/location');
    };
    MenuPage.prototype.presentAlert = function (msg) {
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
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.page.html */ "./src/app/pages/profile/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/profile/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_3__["DataTransactionService"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"],
            src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_5__["NativeApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["ThemeableBrowser"],
            src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_8__["RouteProviderService"],
            src_app_services_constant_constant_service__WEBPACK_IMPORTED_MODULE_9__["ConstantService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_10__["AlertProviderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
            _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_12__["Diagnostic"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ }),

/***/ "./src/app/pages/profile/modal/modal-image/modal-image.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/modal/modal-image/modal-image.module.ts ***!
  \***********************************************************************/
/*! exports provided: ModalImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalImagePageModule", function() { return ModalImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-image.page */ "./src/app/pages/profile/modal/modal-image/modal-image.page.ts");







var routes = [
    {
        path: '',
        component: _modal_image_page__WEBPACK_IMPORTED_MODULE_6__["ModalImagePage"]
    }
];
var ModalImagePageModule = /** @class */ (function () {
    function ModalImagePageModule() {
    }
    ModalImagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_modal_image_page__WEBPACK_IMPORTED_MODULE_6__["ModalImagePage"]]
        })
    ], ModalImagePageModule);
    return ModalImagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/modal/modal-image/modal-image.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/modal/modal-image/modal-image.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content fullscreen>\n \n  <ion-item class=\"close-fake\" lines=\"none\" text-center>\n    <ion-button (click)=\"close()\" fill=\"clear\" color=\"light\">\n      <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n      Back\n    </ion-button>\n \n    <ion-button (click)=\"zoom(true)\" fill=\"clear\" color=\"light\">\n      <ion-icon name=\"add\" slot=\"start\"></ion-icon>\n      in\n    </ion-button>\n \n    <ion-button (click)=\"zoom(false)\" fill=\"clear\" color=\"light\">\n      <ion-icon name=\"remove\" slot=\"start\"></ion-icon>\n      out\n    </ion-button>\n  </ion-item>\n \n  <ion-slides [options]=\"sliderOpts\" #slider>\n    <ion-slide>\n      <div class=\"swiper-zoom-container\">\n        <img src=\"assets/img/{{ img }}.png\">\n      </div>\n    </ion-slide>\n  </ion-slides>\n \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/modal/modal-image/modal-image.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/modal/modal-image/modal-image.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".close-fake {\n  --background: transparent;\n  margin-top: 40px; }\n  .close-fake ion-icon {\n    font-size: 2rem; }\n  ion-content {\n  --background: rgba(44, 39, 45, 0.84); }\n  ion-slides {\n  height: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9tb2RhbC9tb2RhbC1pbWFnZS9DOlxcc291cmNlXFxhcHBcXGlvbmljXFxqb20tc2F2ZS9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXG1vZGFsXFxtb2RhbC1pbWFnZVxcbW9kYWwtaW1hZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQWE7RUFJYixnQkFBZ0IsRUFBQTtFQUxwQjtJQUdRLGVBQWUsRUFBQTtFQUt2QjtFQUNJLG9DQUFhLEVBQUE7RUFHakI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL21vZGFsL21vZGFsLWltYWdlL21vZGFsLWltYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZS1mYWtlIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4gXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSg0NCwgMzksIDQ1LCAwLjg0KTtcclxufVxyXG4gXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/profile/modal/modal-image/modal-image.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/modal/modal-image/modal-image.page.ts ***!
  \*********************************************************************/
/*! exports provided: ModalImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalImagePage", function() { return ModalImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ModalImagePage = /** @class */ (function () {
    function ModalImagePage(navParams, modalController) {
        this.navParams = navParams;
        this.modalController = modalController;
        this.sliderOpts = {
            zoom: {
                maxRatio: 5
            }
        };
    }
    ModalImagePage.prototype.ngOnInit = function () {
        this.img = this.navParams.get('img');
    };
    ModalImagePage.prototype.zoom = function (zoomIn) {
        var zoom = this.slider.nativeElement.swiper.zoom;
        if (zoomIn) {
            zoom.in();
        }
        else {
            zoom.out();
        }
    };
    ModalImagePage.prototype.close = function () {
        this.modalController.dismiss();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ModalImagePage.prototype, "slider", void 0);
    ModalImagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-image',
            template: __webpack_require__(/*! ./modal-image.page.html */ "./src/app/pages/profile/modal/modal-image/modal-image.page.html"),
            styles: [__webpack_require__(/*! ./modal-image.page.scss */ "./src/app/pages/profile/modal/modal-image/modal-image.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ModalImagePage);
    return ModalImagePage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-menu-module.js.map