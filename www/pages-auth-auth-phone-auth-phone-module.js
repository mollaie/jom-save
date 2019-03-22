(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-phone-auth-phone-module"],{

/***/ "./src/app/pages/auth/auth-phone/auth-phone.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/auth/auth-phone/auth-phone.module.ts ***!
  \************************************************************/
/*! exports provided: AuthPhonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPhonePageModule", function() { return AuthPhonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_phone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-phone.page */ "./src/app/pages/auth/auth-phone/auth-phone.page.ts");







var routes = [
    {
        path: '',
        component: _auth_phone_page__WEBPACK_IMPORTED_MODULE_6__["AuthPhonePage"]
    }
];
var AuthPhonePageModule = /** @class */ (function () {
    function AuthPhonePageModule() {
    }
    AuthPhonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_auth_phone_page__WEBPACK_IMPORTED_MODULE_6__["AuthPhonePage"]]
        })
    ], AuthPhonePageModule);
    return AuthPhonePageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/auth-phone/auth-phone.page.html":
/*!************************************************************!*\
  !*** ./src/app/pages/auth/auth-phone/auth-phone.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"no-scroll content-background\">\n    <div class=\"container\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <div class=\"logo\"></div>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"1\"></ion-col>\n                <ion-col size=\"10\">\n                    <div class=\"input-container\">\n                        <img src=\"../../assets/images/icon-smart-phone.svg\" class=\"input--icon\" />\n                        <input type=\"tel\" class=\"input-icon\" [(ngModel)]=\"Model.Phone\" (keydown)=\"doOnChange($event)\"\n                            maxlength=\"13\" />\n                        <br />\n                        <span class=\"input-message\">Please key in your mobile number </span>\n                    </div>\n                </ion-col>\n                <ion-col size=\"1\"></ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"ErrorMessage\">\n                <ion-col>\n                    <ion-textarea style=\"width: 100%;word-wrap: break-word\" [rows]=10 [(ngModel)]=\"ErrorMessage\">\n                    </ion-textarea>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button class=\"next-button\" (click)=\"doNext()\">\n            <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/auth-phone/auth-phone.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/auth/auth-phone/auth-phone.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvYXV0aC1waG9uZS9hdXRoLXBob25lLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/auth/auth-phone/auth-phone.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/auth-phone/auth-phone.page.ts ***!
  \**********************************************************/
/*! exports provided: AuthPhonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPhonePage", function() { return AuthPhonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../..//services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");
/* harmony import */ var src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");









var AuthPhonePage = /** @class */ (function () {
    function AuthPhonePage(router, dataTransaction, api, platform, restApi, alert, routerProvider) {
        var _this = this;
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.api = api;
        this.platform = platform;
        this.restApi = restApi;
        this.alert = alert;
        this.routerProvider = routerProvider;
        this.Model = {
            Phone: '',
            Password: '',
            Resouses: {
                PhoneIcon: '',
                WorldPicture: '',
            }
        };
        this.isDebug = false;
        this.ErrorMessage = '';
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
        this.Model.Phone = "+60";
        this.dataTransaction.getAccessToken().then(function (accessToken) {
            if (accessToken != null && accessToken != '' && accessToken.length > 10) {
                _this.doGetProfile(accessToken);
            }
            else {
                _this.dataTransaction.getUserPhone().then(function (phone) {
                    if (phone != null && phone != '' && phone.length > 1) {
                        _this.Model.Phone = phone;
                    }
                });
            }
        });
    }
    AuthPhonePage.prototype.ngOnInit = function () {
    };
    AuthPhonePage.prototype.doLogin = function () {
        this.router.navigate(['auth-password']);
    };
    AuthPhonePage.prototype.doRegister = function () {
        this.router.navigate(['signup']);
    };
    AuthPhonePage.prototype.doNext = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.Model.Phone == '' || this.Model.Phone.length < 10) {
                    this.alert.presentToast('Please fill in the mobile number.');
                    return [2 /*return*/, false];
                }
                if (!this.isDebug) {
                    this.api.IsMobileRgistered("" + this.Model.Phone)
                        .then(function (response) {
                        //load.dismiss();
                        if (response.status == 200) {
                            var result = _this.api.converResponseToJson(response.data);
                            if (result.Data.IsRegistered == "0") {
                                _this.dataTransaction.Phone = _this.Model.Phone;
                                _this.doRegister();
                            }
                            else {
                                _this.dataTransaction.Phone = _this.Model.Phone;
                                _this.doLogin();
                            }
                        }
                        else {
                            _this.alert.showErrorMessageAlert(response.error);
                        }
                    })
                        .catch(function (error) {
                        _this.alert.showErrorMessageAlert(JSON.stringify(error));
                    });
                }
                else {
                    this.restApi.IsMobileRgistered("" + this.Model.Phone)
                        .subscribe(function (response) {
                        //load.dismiss();
                        var result = _this.restApi.converResponseToJson(response);
                        if (result.Data.IsRegistered == "0") {
                            _this.dataTransaction.Phone = _this.Model.Phone;
                            _this.doRegister();
                        }
                        else {
                            _this.dataTransaction.Phone = _this.Model.Phone;
                            _this.doLogin();
                        }
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    AuthPhonePage.prototype.doForgotPassword = function () {
    };
    AuthPhonePage.prototype.doOnChange = function (event) {
        var pattern = /^[0-9]*$/;
        var inputChar = event.key;
        if (event.keyCode == 8 || event.which == 8) {
            if (event.target.value.length == 3) {
                event.preventDefault();
            }
        }
        else {
            // if (!pattern.test(inputChar)) {
            //   // invalid character, prevent input
            //   event.preventDefault();
            // }
            if (isNaN(inputChar)) {
                event.preventDefault();
            }
        }
    };
    AuthPhonePage.prototype.doGetProfile = function (AccessToken) {
        var _this = this;
        if (!this.isDebug) {
            this.api.GetProfile(AccessToken).then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                        _this.dataTransaction.setProfile(result.Data);
                        _this.dataTransaction.shouldNavigate = true;
                        _this.routerProvider.nextStep(result.Data.NextStep);
                    }
                    else {
                    }
                }
            }).catch(function (error) { return _this.alert.showErrorMessageAlert(error); });
        }
        else {
            this.restApi.GetProfile(AccessToken).subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == "0") {
                    _this.dataTransaction.setProfile(result.Data);
                    _this.dataTransaction.shouldNavigate = true;
                    _this.routerProvider.nextStep(result.Data.NextStep);
                }
                else {
                    _this.ErrorMessage = result.ErrorMessage;
                }
            }, function (error) {
                _this.ErrorMessage = error;
            });
        }
    };
    AuthPhonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-auth-phone',
            template: __webpack_require__(/*! ./auth-phone.page.html */ "./src/app/pages/auth/auth-phone/auth-phone.page.html"),
            providers: [
                _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__["NativeApiService"]
            ],
            styles: [__webpack_require__(/*! ./auth-phone.page.scss */ "./src/app/pages/auth/auth-phone/auth-phone.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_1__["DataTransactionService"],
            _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__["NativeApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__["RestApiService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_7__["AlertProviderService"],
            src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_8__["RouteProviderService"]])
    ], AuthPhonePage);
    return AuthPhonePage;
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



/***/ }),

/***/ "./src/app/services/route-provider/route-provider.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/route-provider/route-provider.service.ts ***!
  \*******************************************************************/
/*! exports provided: RouteProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteProviderService", function() { return RouteProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RouteProviderService = /** @class */ (function () {
    function RouteProviderService(router) {
        this.router = router;
    }
    RouteProviderService.prototype.nextStep = function (step) {
        switch (step) {
            case "AddReferral":
                this.router.navigate(['referral']);
                break;
            case "MakePayment":
                this.router.navigate(['top-up']);
                break;
            case "CreatePassword":
                this.router.navigate(['change-password']);
                break;
            case "VerifyEmail":
                this.router.navigate(['mail-confirmation']);
                break;
            case "CompleteProfile":
                this.router.navigate(['complete-profile']);
                break;
            case "VerifyProfile":
                this.router.navigate(['profile/profile/home']);
                break;
            case "Password":
                this.router.navigate(['auth-password']);
                break;
            case "Upline":
                break;
            case "ForgotPassword":
                this.router.navigate(['forgot-password']);
                break;
            case "Phone":
                this.router.navigate(['auth-phone']);
                break;
            case "OTP-ChangePassword":
                this.router.navigate(['otp-change-number']);
                break;
            default:
                this.router.navigate(['profile/profile/home']);
        }
    };
    RouteProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RouteProviderService);
    return RouteProviderService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-phone-auth-phone-module.js.map