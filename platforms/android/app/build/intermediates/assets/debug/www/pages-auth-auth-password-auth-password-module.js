(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-password-auth-password-module"],{

/***/ "./src/app/pages/auth/auth-password/auth-password.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/auth-password/auth-password.module.ts ***!
  \******************************************************************/
/*! exports provided: AuthPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPasswordPageModule", function() { return AuthPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-password.page */ "./src/app/pages/auth/auth-password/auth-password.page.ts");







var routes = [
    {
        path: '',
        component: _auth_password_page__WEBPACK_IMPORTED_MODULE_6__["AuthPasswordPage"]
    }
];
var AuthPasswordPageModule = /** @class */ (function () {
    function AuthPasswordPageModule() {
    }
    AuthPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_auth_password_page__WEBPACK_IMPORTED_MODULE_6__["AuthPasswordPage"]]
        })
    ], AuthPasswordPageModule);
    return AuthPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/auth-password/auth-password.page.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/auth-password/auth-password.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <!-- <a class=\"Login-Link\" slot=\"end\" (click)=\"doCancel()\">Login</a> -->\n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"no-scroll content-background\">\n    <div class=\"container\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <div class=\"logo\"></div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"1\"></ion-col>\n                <ion-col size=\"10\">\n                    <div class=\"input-container\">\n                        <img src=\"../../assets/images/icon-smart-phone.svg\" class=\"input--icon\" />\n                        <input type=\"tel\" class=\"input-icon\" [(ngModel)]=\"Model.Phone\" maxlength=\"12\" />\n                        <br />\n                        <span class=\"input-message\">Please key in your mobile number </span>\n                    </div>\n                </ion-col>\n                <ion-col size=\"1\"></ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"1\"></ion-col>\n                <ion-col size=\"10\">\n                    <div class=\"input-container\">\n                        <input type=\"text\" class=\"input-icon-password\" *ngIf=\"showPassword\"\n                            [(ngModel)]=\"Model.Password\" />\n                        <input type=\"password\" class=\"input-icon-password\" *ngIf=\"!showPassword\"\n                            [(ngModel)]=\"Model.Password\" />\n                        <ion-icon name=\"eye\" class=\"eye-button\" *ngIf=\"showPassword\" (click)=\"doShowPassword(false)\">\n                        </ion-icon>\n                        <ion-icon name=\"eye-off\" class=\"eye-button\" *ngIf=\"!showPassword\"\n                            (click)=\"doShowPassword(true)\"></ion-icon>\n                        <img src=\"../../assets/images/icon-change-login-password.svg\" class=\"input--icon\" />\n                        <br />\n                        <span class=\"input-message\">Please key in your password </span>\n                        <br />\n                        <span color=\"danger\" *ngIf=\"ErrorMessage != ''\" class=\"errormessage\">{{ErrorMessage}}</span>\n                    </div>\n                    <br />\n                    <a class=\"link\" (click)=\"doForgotPassword()\">Forgot Password</a>\n                </ion-col>\n                <ion-col size=\"1\"></ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button class=\"next-button\" (click)=\"doNext()\">\n            <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/auth-password/auth-password.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/auth-password/auth-password.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvYXV0aC1wYXNzd29yZC9hdXRoLXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/auth/auth-password/auth-password.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/auth-password/auth-password.page.ts ***!
  \****************************************************************/
/*! exports provided: AuthPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPasswordPage", function() { return AuthPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../..//services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");
/* harmony import */ var _services_forgot_password_forgot_password_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/forgot-password/forgot-password.service */ "./src/app/services/forgot-password/forgot-password.service.ts");










var AuthPasswordPage = /** @class */ (function () {
    function AuthPasswordPage(router, dataTransaction, api, platform, restApi, routerProvider, alert, forgotPasswordService) {
        var _this = this;
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.api = api;
        this.platform = platform;
        this.restApi = restApi;
        this.routerProvider = routerProvider;
        this.alert = alert;
        this.forgotPasswordService = forgotPasswordService;
        this.Model = {
            Phone: '',
            Password: '',
        };
        this.ErrorMessage = '';
        this.isDebug = false;
        this.showPassword = false;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])
                _this.ngOnInit();
        });
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
        this.Model.Phone = this.dataTransaction.Phone;
    }
    AuthPasswordPage.prototype.ngOnInit = function () {
        if (this.Model.Phone == '' || this.dataTransaction.Phone == '') {
            this.router.navigate(['auth-phone']);
        }
    };
    AuthPasswordPage.prototype.doNext = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.Login("" + this.Model.Phone, this.Model.Password, ["FreeMember", "Member"])
                .then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                        _this.dataTransaction.setUserPhone(_this.Model.Phone);
                        _this.dataTransaction.setProfile(_this.Model);
                        _this.dataTransaction.setAccessToken(result.Data.NewAccessToken);
                        _this.dataTransaction.setNewRefreshToken(result.Data.NewRefreshToken);
                        _this.doRegisterNotification(result.Data.NewAccessToken);
                        _this.doGetProfile(result.Data.NewAccessToken);
                    }
                    else {
                        _this.alert.showErrorMessageAlert(result.ErrorMessage);
                    }
                }
            }).catch(function (error) {
                _this.alert.showErrorMessageAlert(error);
            });
        }
        else {
            this.restApi.Login("" + this.Model.Phone, this.Model.Password, ["FreeMember", "Member"])
                .subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == "0") {
                    _this.dataTransaction.setUserPhone(_this.Model.Phone);
                    _this.dataTransaction.setProfile(_this.Model);
                    _this.dataTransaction.setAccessToken(result.Data.NewAccessToken);
                    _this.dataTransaction.setNewRefreshToken(result.Data.NewRefreshToken);
                    _this.doGetProfile(result.Data.NewAccessToken);
                }
                else {
                    _this.ErrorMessage = result.ErrorMessage;
                }
            }, function (error) {
                _this.alert.showErrorMessageAlert(error);
            });
        }
    };
    AuthPasswordPage.prototype.doGetProfile = function (AccessToken) {
        var _this = this;
        if (!this.isDebug) {
            this.api.GetProfile(AccessToken).then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                        _this.dataTransaction.setProfile(result.Data);
                        _this.dataTransaction.shouldNavigate = true;
                        _this.dataTransaction.ProfileImage = result.Data.Photo == null || result.Data.Photo == '' ? '../../assets/images/icon-dispaly-name.svg' : result.Data.Photo;
                        _this.routerProvider.nextStep(result.Data.NextStep);
                    }
                    else {
                        _this.alert.showErrorMessageAlert(result.ErrorMessage);
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
    AuthPasswordPage.prototype.doRegisterNotification = function (AccessToken) {
        var _this = this;
        this.dataTransaction.GetToken().then(function (token) {
            _this.api.Register_Notification(token.token, AccessToken).then(function (response) {
            });
        });
    };
    AuthPasswordPage.prototype.doForgotPassword = function () {
        this.forgotPasswordService.preRequestResetPassword(this.Model.Phone);
    };
    AuthPasswordPage.prototype.doCancel = function () {
        this.router.navigate(['auth-phone']);
    };
    AuthPasswordPage.prototype.doShowPassword = function (value) {
        this.showPassword = value;
    };
    AuthPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-password',
            template: __webpack_require__(/*! ./auth-password.page.html */ "./src/app/pages/auth/auth-password/auth-password.page.html"),
            providers: [
                _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__["NativeApiService"]
            ],
            styles: [__webpack_require__(/*! ./auth-password.page.scss */ "./src/app/pages/auth/auth-password/auth-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_3__["DataTransactionService"],
            _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__["NativeApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__["RestApiService"],
            src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_7__["RouteProviderService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_8__["AlertProviderService"],
            _services_forgot_password_forgot_password_service__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordService"]])
    ], AuthPasswordPage);
    return AuthPasswordPage;
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

/***/ "./src/app/services/forgot-password/forgot-password.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/forgot-password/forgot-password.service.ts ***!
  \*********************************************************************/
/*! exports provided: ForgotPasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordService", function() { return ForgotPasswordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var _native_api_native_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");







var ForgotPasswordService = /** @class */ (function () {
    function ForgotPasswordService(data, api, restApi, router, platform, alertController) {
        this.data = data;
        this.api = api;
        this.restApi = restApi;
        this.router = router;
        this.platform = platform;
        this.alertController = alertController;
        this.isDebug = false;
        this.AccessToken = "";
        if (platform.is('cordova'))
            this.isDebug = false;
        this.isDebug = true;
    }
    ForgotPasswordService.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getAccessToken().then(function (Response) {
            _this.AccessToken = Response;
        });
    };
    ForgotPasswordService.prototype.preRequestResetPassword = function (mobile) {
        var _this = this;
        if (!this.isDebug) {
            this.api.PreRequestResetPassword(mobile).then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                        if (result.Data.IsEmailVerified == true || result.Data.IsEmailVerified == "true" || result.Data.IsEmailVerified == "1") {
                            _this.router.nextStep('ForgotPassword');
                        }
                        else {
                            _this.emailNotRegisteredAlert(mobile);
                        }
                    }
                    else {
                        alert(result.ErrorMessage);
                    }
                }
            });
        }
        else {
            this.restApi.PreRequestResetPassword(mobile).subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == 0) {
                    if (result.Data.IsEmailVerified == "Yes") {
                        _this.router.nextStep('ForgotPassword');
                    }
                    else {
                        _this.emailNotRegisteredAlert(mobile);
                    }
                }
                else {
                    alert(result.ErrorMessage);
                }
            });
        }
    };
    ForgotPasswordService.prototype.phoneNotRegisterAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Jom-Save',
                            subHeader: 'Warning',
                            message: 'The phone is not registered.',
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
    ForgotPasswordService.prototype.emailNotRegisteredAlert = function (mobile) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Jom-Save',
                            message: 'Your password will be reset and a new password will be sent to your mobile number',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.router.nextStep("Password");
                                    }
                                }, {
                                    text: 'Proceed',
                                    handler: function () {
                                        _this.doProceed(mobile);
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
    ForgotPasswordService.prototype.doProceed = function (mobile) {
        var _this = this;
        if (!this.isDebug) {
            this.api.RequestResetPassword(mobile, '', this.AccessToken).then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                        _this.showAlert("Your password has been sent to your mobile " + mobile);
                    }
                    else {
                        alert(result.ErrorMessage);
                    }
                }
            });
        }
        else {
            this.restApi.RequestResetPassword(mobile, '', this.AccessToken).subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == 0) {
                    _this.showAlert("Your password has been sent to your mobile " + mobile);
                }
                else {
                    alert(result.ErrorMessage);
                }
            });
        }
    };
    ForgotPasswordService.prototype.showAlert = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'JomSave',
                            subHeader: 'Reset Password',
                            message: msg,
                            buttons: [
                                {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.router.nextStep("Phone");
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
    ForgotPasswordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_2__["DataTransactionService"],
            _native_api_native_api_service__WEBPACK_IMPORTED_MODULE_3__["NativeApiService"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"],
            _route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_6__["RouteProviderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], ForgotPasswordService);
    return ForgotPasswordService;
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
//# sourceMappingURL=pages-auth-auth-password-auth-password-module.js.map