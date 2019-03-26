(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-signup-signup-module"],{

/***/ "./src/app/pages/auth/signup/signup.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/signup/signup.module.ts ***!
  \****************************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/auth/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/signup/signup.page.html":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/signup/signup.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <!-- <a class=\"Login-Link\" slot=\"end\" (click)=\"doLogin()\">Login</a> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"no-scroll content-background\">\n  <div class=\"container\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class=\"logo\"></div>\n        </ion-col>\n      </ion-row>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <h3 class=\"warningMessage\">You're not a member yet</h3>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"text-center\">Do you want to register with :</p>\n            <h4 class=\"text-center\">{{Model.Phone}}</h4>\n            <p class=\"text-center\" style=\"font-size: 9.6px;font-family: 'GothamRoundedLight'!important\">An OTP will be\n              sent to the above mobile number</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"1\"></ion-col>\n          <ion-col size=\"10\">\n            <div class=\"checkbox-container\">\n                <ion-toggle [(ngModel)]=\"Model.Over18\"></ion-toggle>\n              <p class=\"checkbox-child\">I’m over 18 years old</p>\n            </div>\n            <div class=\"checkbox-container\">\n              <ion-toggle [(ngModel)]=\"Model.AgreeWithTerms\"></ion-toggle>\n              <p class=\"checkbox-child\">I’ve read the <a (click)=\"doShowPricay()\">Privacy Policy</a></p>\n            </div>\n            <span color=\"danger\" class=\"errormessage\" *ngIf=\"ErrorMessage != ''\">{{ErrorMessage}}</span>\n          </ion-col>\n          <ion-col size=\"1\"></ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-grid>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button class=\"next-button\" (click)=\"doNext()\">\n          <ion-icon name=\"arrow-forward\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab>\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/signup/signup.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/signup/signup.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/auth/signup/signup.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/signup/signup.page.ts ***!
  \**************************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../..//services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");
/* harmony import */ var _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/themeable-browser/ngx */ "./node_modules/@ionic-native/themeable-browser/ngx/index.js");









var SignupPage = /** @class */ (function () {
    function SignupPage(dataTransaction, router, api, platform, restApi, alert, themeableBrowser) {
        var _this = this;
        this.dataTransaction = dataTransaction;
        this.router = router;
        this.api = api;
        this.platform = platform;
        this.restApi = restApi;
        this.alert = alert;
        this.themeableBrowser = themeableBrowser;
        this.Model = {
            Phone: '',
            Over18: false,
            AgreeWithTerms: false,
        };
        this.ErrorMessage = '';
        this.isDebug = false;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])
                _this.ngOnInit();
        });
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
    }
    SignupPage.prototype.ngOnInit = function () {
        if (this.dataTransaction.Phone == '')
            this.router.navigate(['auth-phone']);
        this.Model.Phone = this.dataTransaction.Phone;
    };
    SignupPage.prototype.doLogin = function () {
        this.router.navigate(['auth-phone']);
    };
    SignupPage.prototype.doNext = function () {
        var _this = this;
        if (this.doValidate()) {
            this.dataTransaction.setUserPhone(this.Model.Phone);
            if (!this.isDebug) {
                this.api.PreRegister(this.Model.Phone).then(function (response) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (response.status == 200) {
                        if (result.ErrorCode == "0") {
                            _this.dataTransaction.OtpBlockDuration = result.Data.OtpBlockDuration;
                            _this.router.navigate(['confirmation']);
                        }
                        if (result.ErrorCode == 2007) {
                            _this.alert.showErrorMessageAlert(result.ErrorMessage);
                            _this.router.navigate(['confirmation']);
                        }
                    }
                    else {
                        _this.alert.showErrorMessageAlert(result.ErrorMessage);
                    }
                }).catch(function (error) {
                    _this.alert.showErrorMessageAlert(error);
                });
            }
            else {
                this.restApi.PreRegister(this.Model.Phone).subscribe(function (response) {
                    var result = _this.restApi.converResponseToJson(response);
                    if (result.ErrorCode == "0") {
                        _this.dataTransaction.OtpBlockDuration = result.Data.OtpBlockDuration;
                        _this.router.navigate(['confirmation']);
                    }
                    else {
                        _this.ErrorMessage = result.ErrorMessage;
                    }
                });
            }
        }
    };
    SignupPage.prototype.doValidate = function () {
        if (!this.Model.Over18) {
            this.alert.showErrorMessageAlert('You should certify that you are at least 18 years old.');
            return false;
        }
        if (!this.Model.AgreeWithTerms) {
            this.alert.showErrorMessageAlert('You should certify that you are agreed with our Privacy & Policy');
            return false;
        }
        return true;
    };
    SignupPage.prototype.doCancel = function () {
        this.router.navigate(['auth-phone']);
    };
    SignupPage.prototype.doForgotPassword = function () {
    };
    SignupPage.prototype.doShowPricay = function () {
        var options = {
            toolbar: {
                height: 44,
                color: '#fbb03b'
            },
            title: {
                color: '#ffffffff',
                showPageTitle: true,
                staticText: 'JomSave'
            },
            backButton: {
                image: 'back',
                imagePressed: 'back_pressed',
                align: 'left',
                event: 'backPressed'
            },
            forwardButton: {
                image: 'forward',
                imagePressed: 'forward_pressed',
                align: 'left',
                event: 'forwardPressed'
            },
            closeButton: {
                image: 'close',
                imagePressed: 'close_pressed',
                align: 'left',
                event: 'closePressed'
            },
            backButtonCanClose: false,
        };
        var url = 'https://afrd.website/jomsave/privacy.html';
        var browser = this.themeableBrowser.create(url, '_blank', options);
    };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/pages/auth/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/auth/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_2__["DataTransactionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__["NativeApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__["RestApiService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_7__["AlertProviderService"],
            _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["ThemeableBrowser"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ }),

/***/ "./src/app/services/alert-provider/alert-provider.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/alert-provider/alert-provider.service.ts ***!
  \*******************************************************************/
/*! exports provided: AlertProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertProviderService", function() { return AlertProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var AlertProviderService = /** @class */ (function () {
    function AlertProviderService(alertController, loadingCntroller, toastController) {
        this.alertController = alertController;
        this.loadingCntroller = loadingCntroller;
        this.toastController = toastController;
    }
    AlertProviderService.prototype.showErrorMessageAlert = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Jom-Save',
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
    AlertProviderService.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 3000,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], AlertProviderService);
    return AlertProviderService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-signup-signup-module.js.map