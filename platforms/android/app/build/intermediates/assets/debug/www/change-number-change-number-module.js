(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-number-change-number-module"],{

/***/ "./src/app/pages/profile/change-number/change-number.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/change-number/change-number.module.ts ***!
  \*********************************************************************/
/*! exports provided: ChangeNumberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeNumberPageModule", function() { return ChangeNumberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_number_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-number.page */ "./src/app/pages/profile/change-number/change-number.page.ts");







var routes = [
    {
        path: '',
        component: _change_number_page__WEBPACK_IMPORTED_MODULE_6__["ChangeNumberPage"]
    }
];
var ChangeNumberPageModule = /** @class */ (function () {
    function ChangeNumberPageModule() {
    }
    ChangeNumberPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_change_number_page__WEBPACK_IMPORTED_MODULE_6__["ChangeNumberPage"]]
        })
    ], ChangeNumberPageModule);
    return ChangeNumberPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/change-number/change-number.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/change-number/change-number.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\"></ion-back-button>\n      <ion-title class=\"text-center\"></ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <div class=\"text-center\">\n                <img src='../../assets/images/jomsave_logo.svg' width=\"100\"/>\n            </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col size=\"1\"></ion-col>\n          <ion-col size=\"2\">\n            <img src=\"../../assets/images/icon-change-login-password.svg\" />\n          </ion-col>\n          <ion-col size=\"7\">            \n            <input type=\"text\" class=\"input-icon-password\" *ngIf=\"showPassword\" [(ngModel)]=\"Model.Password\" />\n            <input type=\"password\" class=\"input-icon-password\" *ngIf=\"!showPassword\" [(ngModel)]=\"Model.Password\" />\n            <ion-icon name=\"eye\" class=\"eye-button\" *ngIf=\"showPassword\" (click)=\"doShowPassword(false)\"></ion-icon>\n            <ion-icon name=\"eye-off\" class=\"eye-button\" *ngIf=\"!showPassword\" (click)=\"doShowPassword(true)\"></ion-icon>\n            <span class=\"forgot-password-span\">Please key in your current password</span>\n          </ion-col>\n          <ion-col size=\"2\">\n          </ion-col>\n        </ion-row>\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\">\n          <img src=\"../../assets/images/icon-smart-phone.svg\" />\n        </ion-col>\n        <ion-col size=\"7\">\n          <input type=\"tel\" class=\"forgot-password-input\" [(ngModel)]=\"Model.Mobile\" (keydown)=\"doOnChange($event)\" maxlength=\"13\"/>\n          <span class=\"forgot-password-span\">Please key in your new Mobile</span>     \n        </ion-col>\n        <ion-col size=\"2\">\n\n        </ion-col>\n\n      </ion-row>\n      <ion-row *ngIf=\"ErrorMessage != ''\">\n        <ion-col>\n          <ion-item text-wrap color=\"danger\">\n            {{ErrorMessage}}\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button class=\"next-button\" (click)=\"Confirmation()\">\n          <ion-icon name=\"arrow-forward\"></ion-icon>\n      </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/change-number/change-number.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/change-number/change-number.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLW51bWJlci9jaGFuZ2UtbnVtYmVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/change-number/change-number.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile/change-number/change-number.page.ts ***!
  \*******************************************************************/
/*! exports provided: ChangeNumberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeNumberPage", function() { return ChangeNumberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");









var ChangeNumberPage = /** @class */ (function () {
    function ChangeNumberPage(router, dataTransaction, api, platform, restApi, routerProvider, alert, alertController) {
        var _this = this;
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.api = api;
        this.platform = platform;
        this.restApi = restApi;
        this.routerProvider = routerProvider;
        this.alert = alert;
        this.alertController = alertController;
        this.Model = {
            Mobile: '',
            Password: '',
        };
        this.AccessToken = "";
        this.ErrorMessage = '';
        this.isDebug = false;
        this.showPassword = false;
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
        dataTransaction.getAccessToken().then(function (accessToken) {
            if (accessToken == null || accessToken == '') {
                dataTransaction.logOut();
                _this.routerProvider.nextStep('Phone');
            }
            else {
                _this.AccessToken = accessToken;
            }
        });
        this.Model.Mobile = "+60";
    }
    ChangeNumberPage.prototype.ngOnInit = function () {
    };
    ChangeNumberPage.prototype.doNext = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.RequestChangeMobile(this.Model.Password, this.Model.Mobile, this.AccessToken)
                .then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                        _this.presentAlert('An OTP will be sent to the above mobile number');
                        _this.dataTransaction.OtpBlockDuration = result.Data.OtpBlockDuration;
                        _this.dataTransaction.Phone = _this.Model.Mobile;
                        _this.routerProvider.nextStep('OTP-ChangePassword');
                    }
                    else {
                        _this.alert.presentToast(result.ErrorMessage);
                        if (result.ErrorCode == 1002) {
                            _this.dataTransaction.logOut();
                            _this.routerProvider.nextStep('Phone');
                        }
                    }
                }
            }).catch(function (error) {
                _this.alert.presentToast(error);
            });
        }
        else {
            this.restApi.RequestChangeMobile(this.Model.Password, this.Model.Mobile, this.AccessToken)
                .subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == "0") {
                    _this.presentAlert('An OTP will be sent to the above mobile number');
                    _this.dataTransaction.OtpBlockDuration = result.Data.OtpBlockDuration;
                    _this.dataTransaction.Phone = _this.Model.Mobile;
                    _this.routerProvider.nextStep('OTP-ChangePassword');
                }
                else {
                    _this.alert.presentToast(result.ErrorMessage);
                }
            }, function (error) {
                _this.alert.presentToast(error);
            });
        }
    };
    ChangeNumberPage.prototype.presentAlert = function (msg) {
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
    ChangeNumberPage.prototype.Confirmation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Jom-Save',
                            message: 'Changing your mobile number will replace current number. Are you sure you want to proceed?',
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
                                        _this.doNext();
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
    ChangeNumberPage.prototype.doShowPassword = function (value) {
        this.showPassword = value;
    };
    ChangeNumberPage.prototype.doOnChange = function (event) {
        var pattern = /^[0-9]*$/;
        var inputChar = event.key;
        if (event.keyCode == 8 || event.which == 8) {
            if (event.target.value.length == 3) {
                event.preventDefault();
            }
        }
        else {
            if (!pattern.test(inputChar)) {
                // invalid character, prevent input
                event.preventDefault();
            }
        }
    };
    ChangeNumberPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-number',
            template: __webpack_require__(/*! ./change-number.page.html */ "./src/app/pages/profile/change-number/change-number.page.html"),
            styles: [__webpack_require__(/*! ./change-number.page.scss */ "./src/app/pages/profile/change-number/change-number.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_3__["DataTransactionService"],
            src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__["NativeApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__["RestApiService"],
            src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_7__["RouteProviderService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_8__["AlertProviderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], ChangeNumberPage);
    return ChangeNumberPage;
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
//# sourceMappingURL=change-number-change-number-module.js.map