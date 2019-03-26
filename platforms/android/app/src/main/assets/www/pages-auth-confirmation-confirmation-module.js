(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-confirmation-confirmation-module"],{

/***/ "./src/app/pages/auth/confirmation/confirmation.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/confirmation/confirmation.module.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPageModule", function() { return ConfirmationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confirmation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmation.page */ "./src/app/pages/auth/confirmation/confirmation.page.ts");







var routes = [
    {
        path: '',
        component: _confirmation_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmationPage"]
    }
];
var ConfirmationPageModule = /** @class */ (function () {
    function ConfirmationPageModule() {
    }
    ConfirmationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmationPage"]]
        })
    ], ConfirmationPageModule);
    return ConfirmationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/confirmation/confirmation.page.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/confirmation/confirmation.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <!-- <a class=\"Login-Link\" slot=\"end\" (click)=\"doLogin()\">Login</a> -->\n    </ion-buttons>\n  </ion-toolbar>  \n</ion-header>\n\n<ion-content class=\"no-scroll content-background\">\n  <div class=\"container\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class=\"logo\"></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1.5\"></ion-col>\n        <ion-col size=\"1.5\" class=\"text-center\">\n          <input type=\"number\" (focus)=\"onFocus($event)\"  class=\"input-circle\"  (keyup)=\"doTextChange($event)\" ngMax maxlength=\"1\" [(ngModel)]=\"Model.OTP.Number1\" id=\"number1\"/>\n        </ion-col>\n        <ion-col size=\"1.5\">\n            <input type=\"number\" (focus)=\"onFocus($event)\" class=\"input-circle\" (keyup)=\"doTextChange($event)\" maxlength=\"1\" [(ngModel)]=\"Model.OTP.Number2\" id=\"number2\"/>\n        </ion-col>\n        <ion-col size=\"1.5\">\n            <input type=\"number\" (focus)=\"onFocus($event)\"  class=\"input-circle\" (keyup)=\"doTextChange($event)\"  maxlength=\"1\"  [(ngModel)]=\"Model.OTP.Number3\" id=\"number3\"/>\n        </ion-col>\n        <ion-col size=\"1.5\">\n            <input type=\"number\" (focus)=\"onFocus($event)\" class=\"input-circle\" (keyup)=\"doTextChange($event)\"  maxlength=\"1\"  [(ngModel)]=\"Model.OTP.Number4\" id=\"number4\"/>\n        </ion-col>\n        <ion-col size=\"1.5\">\n            <input type=\"number\" (focus)=\"onFocus($event)\" class=\"input-circle\" (keyup)=\"doTextChange($event)\"  maxlength=\"1\"  [(ngModel)]=\"Model.OTP.Number5\" id=\"number5\"/>\n        </ion-col>\n        <ion-col size=\"1.5\">\n            <input type=\"number\" (focus)=\"onFocus($event)\" class=\"input-circle\" (keyup)=\"doTextChange($event)\"  maxlength=\"1\"  [(ngModel)]=\"Model.OTP.Number6\" id=\"number6\"/>\n        </ion-col>\n        <ion-col size=\"1.5\"></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"text-center\">\n          <p>Please key in OTP you received via SMS</p>\n          <p style=\"color:#08accc\">{{CountDown}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"text-center\">\n            <a class=\"text-center\" (click)=\"doResendOTP()\" >Resend OTP {{Model.Phone}}</a>\n            <br/>\n            <a class=\"text-center\" (click)=\"doLogin()\" >Cancel</a>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n          <ion-col class=\"text-center\">\n              <p class=\"text-center\" class=\"errormessage\" *ngIf=\"ErrorMessage\" >{{ErrorMessage}}</p>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/confirmation/confirmation.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/confirmation/confirmation.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/auth/confirmation/confirmation.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/auth/confirmation/confirmation.page.ts ***!
  \**************************************************************/
/*! exports provided: ConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPage", function() { return ConfirmationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../..//services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");








var ConfirmationPage = /** @class */ (function () {
    function ConfirmationPage(dataTransaction, router, api, platform, restApi, alert) {
        var _this = this;
        this.dataTransaction = dataTransaction;
        this.router = router;
        this.api = api;
        this.platform = platform;
        this.restApi = restApi;
        this.alert = alert;
        this.Model = {
            Phone: '',
            OTP: {
                Number1: '',
                Number2: '',
                Number3: '',
                Number4: '',
                Number5: '',
                Number6: ''
            }
        };
        this.ErrorMessage = '';
        this.isDebug = false;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])
                _this.ngOnInit();
        });
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
        if (dataTransaction.Phone == '')
            router.navigate(['auth-phone']);
        this.Model.Phone = dataTransaction.Phone;
        this.maxTime = dataTransaction.OtpBlockDuration;
    }
    ConfirmationPage.prototype.ngOnInit = function () {
        this.dataTransaction.setUserPhone(this.dataTransaction.Phone);
        this.countdown();
    };
    ConfirmationPage.prototype.countdown = function () {
        var _this = this;
        setTimeout(function (x) {
            if (_this.maxTime <= 0) { }
            _this.maxTime -= 1;
            if (_this.maxTime > 0) {
                _this.countdown();
                _this.CountDown = _this.parseTime(_this.maxTime);
            }
            else {
            }
        }, 1000);
    };
    ConfirmationPage.prototype.parseTime = function (secondes) {
        var result = "";
        var min = "00";
        var sec = "00";
        min = (Math.round(secondes / 60)).toString();
        sec = (secondes - (parseInt(min) * 60)).toString();
        result = min + ":" + sec;
        return result;
    };
    ConfirmationPage.prototype.doLogin = function () {
        this.router.navigate(['auth-phone']);
    };
    ConfirmationPage.prototype.doNext = function () {
        this.router.navigate(['referral']);
    };
    ConfirmationPage.prototype.doCancel = function () {
        this.router.navigate(['auth-phone']);
    };
    ConfirmationPage.prototype.doForgotPassword = function () {
        this.router.navigate(['forgot-password']);
    };
    ConfirmationPage.prototype.doResendOTP = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.isDebug) {
                    this.api.PreRegister("" + this.Model.Phone)
                        .then(function (response) {
                        if (response.status == 200) {
                            var result = _this.api.converResponseToJson(response.data);
                            //update user data 
                            _this.dataTransaction.OtpBlockDuration = result.Data.OtpBlockDuration;
                            _this.ngOnInit();
                        }
                        else {
                            _this.alert.showErrorMessageAlert(response.error);
                        }
                    }).catch(function (error) {
                        _this.alert.showErrorMessageAlert(error);
                    });
                }
                else {
                    this.restApi.PreRegister("" + this.Model.Phone)
                        .subscribe(function (response) {
                        var result = _this.restApi.converResponseToJson(response.Data);
                        _this.dataTransaction.setAccessToken(result.OtpBlockDuration);
                        _this.ngOnInit();
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    ConfirmationPage.prototype.doTextChange = function (event) {
        if (("" + event.target.value).length > 1) {
            event.target.value = event.target.value.slice(0, 1);
        }
        switch (event.target.id) {
            case "number1":
                if (("" + event.target.value).length > 0)
                    document.getElementById('number2').focus();
                break;
            case "number2":
                if (("" + event.target.value).length > 0)
                    document.getElementById('number3').focus();
                break;
            case "number3":
                if (("" + event.target.value).length > 0)
                    document.getElementById('number4').focus();
                break;
            case "number4":
                if (("" + event.target.value).length > 0)
                    document.getElementById('number5').focus();
                break;
            case "number5":
                if (("" + event.target.value).length > 0)
                    document.getElementById('number6').focus();
                break;
            case "number6":
                if (("" + event.target.value).length > 0) {
                    var optNumber = "" + this.Model.OTP.Number1 + this.Model.OTP.Number2 + this.Model.OTP.Number3 + this.Model.OTP.Number4 + this.Model.OTP.Number5 + this.Model.OTP.Number6;
                    this.doCheckOTP(optNumber);
                }
                break;
        }
    };
    ConfirmationPage.prototype.onFocus = function (event) {
        event.target.select();
    };
    ConfirmationPage.prototype.doCheckOTP = function (value) {
        var _this = this;
        if (!this.isDebug) {
            this.api.Register("" + this.Model.Phone, value)
                .then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                        _this.dataTransaction.setAccessToken(result.Data.NewAccessToken);
                        _this.dataTransaction.setNewRefreshToken(result.Data.NewRefreshToken);
                        _this.doNext();
                    }
                    else {
                        _this.alert.showErrorMessageAlert(result.ErrorMessage);
                    }
                }
                else {
                    _this.alert.showErrorMessageAlert(response.error);
                }
            }).catch(function (error) {
                _this.alert.showErrorMessageAlert(error);
            });
        }
        else {
            this.restApi.Register("" + this.Model.Phone, value).subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == "0") {
                    _this.dataTransaction.setAccessToken(result.Data.NewAccessToken);
                    _this.dataTransaction.setNewRefreshToken(result.Data.NewRefreshToken);
                    _this.doNext();
                }
                else {
                    _this.ErrorMessage = result.ErrorMessage;
                }
            });
        }
    };
    ConfirmationPage.prototype.doShowWrongOTPMessage = function (value) {
        document.getElementById('OTPMessage').style.display = "block";
    };
    ConfirmationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation',
            template: __webpack_require__(/*! ./confirmation.page.html */ "./src/app/pages/auth/confirmation/confirmation.page.html"),
            providers: [
                _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__["NativeApiService"]
            ],
            styles: [__webpack_require__(/*! ./confirmation.page.scss */ "./src/app/pages/auth/confirmation/confirmation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_2__["DataTransactionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__["NativeApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__["RestApiService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_7__["AlertProviderService"]])
    ], ConfirmationPage);
    return ConfirmationPage;
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
//# sourceMappingURL=pages-auth-confirmation-confirmation-module.js.map