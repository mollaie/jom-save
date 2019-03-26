(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-otp-change-number-otp-change-number-module"],{

/***/ "./src/app/pages/profile/otp-change-number/otp-change-number.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profile/otp-change-number/otp-change-number.module.ts ***!
  \*****************************************************************************/
/*! exports provided: OtpChangeNumberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpChangeNumberPageModule", function() { return OtpChangeNumberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _otp_change_number_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otp-change-number.page */ "./src/app/pages/profile/otp-change-number/otp-change-number.page.ts");







var routes = [
    {
        path: '',
        component: _otp_change_number_page__WEBPACK_IMPORTED_MODULE_6__["OtpChangeNumberPage"]
    }
];
var OtpChangeNumberPageModule = /** @class */ (function () {
    function OtpChangeNumberPageModule() {
    }
    OtpChangeNumberPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_otp_change_number_page__WEBPACK_IMPORTED_MODULE_6__["OtpChangeNumberPage"]]
        })
    ], OtpChangeNumberPageModule);
    return OtpChangeNumberPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/otp-change-number/otp-change-number.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profile/otp-change-number/otp-change-number.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>  \n</ion-header>\n\n<ion-content class=\"no-scroll content-background\">\n  <div class=\"container\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class=\"logo\"></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1.5\"></ion-col>\n        <ion-col size=\"1.5\" class=\"text-center\">\n          <input type=\"number\" (focus)=\"onFocus($event)\"  class=\"input-circle\"  (keyup)=\"doTextChange($event)\" ngMax maxlength=\"1\" [(ngModel)]=\"Model.OTP.Number1\" id=\"number1\"/>\n        </ion-col>\n        <ion-col size=\"1.5\">\n            <input type=\"number\" (focus)=\"onFocus($event)\" class=\"input-circle\" (keyup)=\"doTextChange($event)\" maxlength=\"1\" [(ngModel)]=\"Model.OTP.Number2\" id=\"number2\"/>\n        </ion-col>\n        <ion-col size=\"1.5\">\n            <input type=\"number\" (focus)=\"onFocus($event)\"  class=\"input-circle\" (keyup)=\"doTextChange($event)\"  maxlength=\"1\"  [(ngModel)]=\"Model.OTP.Number3\" id=\"number3\"/>\n        </ion-col>\n        <ion-col size=\"1.5\">\n            <input type=\"number\" (focus)=\"onFocus($event)\" class=\"input-circle\" (keyup)=\"doTextChange($event)\"  maxlength=\"1\"  [(ngModel)]=\"Model.OTP.Number4\" id=\"number4\"/>\n        </ion-col>\n        <ion-col size=\"1.5\">\n            <input type=\"number\" (focus)=\"onFocus($event)\" class=\"input-circle\" (keyup)=\"doTextChange($event)\"  maxlength=\"1\"  [(ngModel)]=\"Model.OTP.Number5\" id=\"number5\"/>\n        </ion-col>\n        <ion-col size=\"1.5\">\n            <input type=\"number\" (focus)=\"onFocus($event)\" class=\"input-circle\" (keyup)=\"doTextChange($event)\"  maxlength=\"1\"  [(ngModel)]=\"Model.OTP.Number6\" id=\"number6\"/>\n        </ion-col>\n        <ion-col size=\"1.5\"></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"text-center\">\n          <p>Please key in OTP you received via SMS</p>\n          <p style=\"color:#08accc\">{{CountDown}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class=\"text-center\">\n              <p class=\"text-center\" class=\"errormessage\" *ngIf=\"ErrorMessage\" >{{ErrorMessage}}</p>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/otp-change-number/otp-change-number.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/profile/otp-change-number/otp-change-number.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvb3RwLWNoYW5nZS1udW1iZXIvb3RwLWNoYW5nZS1udW1iZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/otp-change-number/otp-change-number.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/otp-change-number/otp-change-number.page.ts ***!
  \***************************************************************************/
/*! exports provided: OtpChangeNumberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpChangeNumberPage", function() { return OtpChangeNumberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");









var OtpChangeNumberPage = /** @class */ (function () {
    function OtpChangeNumberPage(router, dataTransaction, api, platform, restApi, routerProvider, alert, alertController) {
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
        this.maxTime = this.dataTransaction.OtpBlockDuration;
        this.Model.Mobile = this.dataTransaction.Phone;
    }
    OtpChangeNumberPage.prototype.ngOnInit = function () {
    };
    OtpChangeNumberPage.prototype.doNext = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.RequestChangeMobile(this.Model.Password, this.Model.Mobile, this.AccessToken)
                .then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                    }
                    else {
                        _this.alert.presentToast(result.ErrorMessage);
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
                }
                else {
                    _this.ErrorMessage = result.ErrorMessage;
                }
            }, function (error) {
                _this.alert.presentToast(error);
            });
        }
    };
    OtpChangeNumberPage.prototype.countdown = function () {
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
    OtpChangeNumberPage.prototype.parseTime = function (secondes) {
        var result = "";
        var min = "00";
        var sec = "00";
        min = (Math.round(secondes / 60)).toString();
        sec = (secondes - (parseInt(min) * 60)).toString();
        result = min + ":" + sec;
        return result;
    };
    OtpChangeNumberPage.prototype.doTextChange = function (event) {
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
    OtpChangeNumberPage.prototype.onFocus = function (event) {
        event.target.select();
    };
    OtpChangeNumberPage.prototype.doCheckOTP = function (value) {
        var _this = this;
        if (!this.isDebug) {
            this.api.ChangeMobile(this.Model.Mobile, value, this.AccessToken)
                .then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                        _this.dataTransaction.setUserPhone(_this.Model.Mobile);
                        _this.routerProvider.nextStep('Phone');
                    }
                    else {
                        _this.alert.presentToast(result.ErrorMessage);
                    }
                }
                else {
                    _this.alert.presentToast(response.error);
                }
            }).catch(function (error) {
                _this.alert.presentToast(error);
            });
        }
        else {
            this.restApi.ChangeMobile(this.Model.Mobile, value, this.AccessToken).subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == "0") {
                    _this.dataTransaction.setUserPhone(_this.Model.Mobile);
                    _this.routerProvider.nextStep('Phone');
                }
                else {
                    _this.alert.presentToast(result.ErrorMessage);
                }
            });
        }
    };
    OtpChangeNumberPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otp-change-number',
            template: __webpack_require__(/*! ./otp-change-number.page.html */ "./src/app/pages/profile/otp-change-number/otp-change-number.page.html"),
            styles: [__webpack_require__(/*! ./otp-change-number.page.scss */ "./src/app/pages/profile/otp-change-number/otp-change-number.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_5__["DataTransactionService"],
            src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_3__["NativeApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__["RestApiService"],
            src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_7__["RouteProviderService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_8__["AlertProviderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], OtpChangeNumberPage);
    return OtpChangeNumberPage;
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
//# sourceMappingURL=pages-profile-otp-change-number-otp-change-number-module.js.map