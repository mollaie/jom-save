(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"],{

/***/ "./src/app/pages/profile/change-password/change-password.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/change-password/change-password.module.ts ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/pages/profile/change-password/change-password.page.ts");







var routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]
    }
];
var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/change-password/change-password.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/change-password/change-password.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button color=\"dark\"></ion-back-button>\n        <ion-title class=\"text-center\">Change Login Password</ion-title>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n  <div class=\"container\">\n    <ion-grid>\n      <!-- <ion-row>\n        <ion-col>\n            <div class=\"text-center\">\n                <img src='../../assets/images/jomsave_logo.svg' width=\"100\"/>\n            </div>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n          <ion-col size=\"1\"></ion-col>\n          <ion-col size=\"2\">\n            <img src=\"../../assets/images/icon-change-login-password.svg\" />\n          </ion-col>\n          <ion-col size=\"7\">\n            <input type=\"password\" class=\"forgot-password-input\" [(ngModel)]=\"Model.Password\" />\n            <span class=\"forgot-password-span\">Please key in your current password</span>\n          </ion-col>\n          <ion-col size=\"2\">\n          </ion-col>\n        </ion-row>\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\">\n          <img src=\"../../assets/images/icon-confirm-password.svg\" />\n        </ion-col>\n        <ion-col size=\"7\">\n          <input type=\"password\" class=\"forgot-password-input\" [(ngModel)]=\"Model.NewPassword\" />\n          <span class=\"forgot-password-span\">Please key in your new password</span>\n          <p class=\"forgot-password-span\">\n            Password must be 8-20\n            characters,<br /> 1 letter, 1 CAPS.\n          </p>\n        </ion-col>\n        <ion-col size=\"2\">\n\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\">\n          <img src=\"../../assets/images/icon-confirm-password.svg\" />\n        </ion-col>\n        <ion-col size=\"7\">\n          <input type=\"password\" class=\"forgot-password-input\" [(ngModel)]=\"Model.ConfirmPassword\"\n            (change)=\"doCheckPassword\" />\n          <span class=\"forgot-password-span\">Please confirm your password</span>\n        </ion-col>\n        <ion-col size=\"2\">\n\n        </ion-col>\n\n      </ion-row>\n      <ion-row *ngIf=\"ErrorMessage != ''\">\n        <ion-col>\n          <ion-item text-wrap color=\"danger\">\n            {{ErrorMessage}}\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button class=\"next-button\" (click)=\"doNext()\">\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/change-password/change-password.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/change-password/change-password.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/change-password/change-password.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/change-password/change-password.page.ts ***!
  \***********************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");
/* harmony import */ var src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");









var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(router, dataTransaction, api, platform, restApi, alert, routeProvider, routerProvider) {
        var _this = this;
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.api = api;
        this.platform = platform;
        this.restApi = restApi;
        this.alert = alert;
        this.routeProvider = routeProvider;
        this.routerProvider = routerProvider;
        this.ErrorMessage = '';
        this.AccessToken = '';
        this.isDebug = false;
        this.Model = {
            Phone: '',
            Password: '',
            NewPassword: '',
            ConfirmPassword: ''
        };
        this.dataTransaction.getAccessToken().then(function (token) {
            _this.AccessToken = token;
        }).catch(function (error) {
            _this.ErrorMessage = "The system can not detect your corrent password. <br/> please log out and login again.";
        });
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
    }
    ChangePasswordPage.prototype.ngOnInit = function () {
    };
    ChangePasswordPage.prototype.doNext = function () {
        var _this = this;
        if (!this.doCheckPassword())
            return;
        if (!this.isDebug) {
            if (this.Model.NewPassword != this.Model.ConfirmPassword) {
                this.ErrorMessage = "The entered password and confirmation are equal.<br/> please check your entered values.";
                return;
            }
            if (this.Model.Password == '') {
                this.ErrorMessage = "The system can not detect your corrent password. <br/> please log out and login again.";
                return;
            }
            this.api.ChangePassword(this.Model.Password, this.Model.NewPassword, this.AccessToken)
                .then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode = "0") {
                        _this.alert.presentToast('Your password has been changed');
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
            this.restApi.ChangePassword(this.Model.Password, this.Model.NewPassword, this.AccessToken).subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == "0") {
                    alert('Your password has been changed');
                }
                else {
                    _this.ErrorMessage = response.ErrorMessage;
                }
            });
        }
    };
    ChangePasswordPage.prototype.doCheckPassword = function () {
        this.ErrorMessage = "";
        if (this.Model.NewPassword.length < 8) {
            this.ErrorMessage = "Your password's length must be at least 8.";
            return false;
        }
        if (this.Model.NewPassword.includes(this.Model.Phone)) {
            this.ErrorMessage = "Password could not be a part of your phone number";
            return false;
        }
        return true;
    };
    ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.page.html */ "./src/app/pages/profile/change-password/change-password.page.html"),
            styles: [__webpack_require__(/*! ./change-password.page.scss */ "./src/app/pages/profile/change-password/change-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_3__["DataTransactionService"],
            src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__["NativeApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__["RestApiService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_7__["AlertProviderService"],
            src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_8__["RouteProviderService"],
            src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_8__["RouteProviderService"]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
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
//# sourceMappingURL=change-password-change-password-module.js.map