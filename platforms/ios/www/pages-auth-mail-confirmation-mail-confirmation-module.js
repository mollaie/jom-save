(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-mail-confirmation-mail-confirmation-module"],{

/***/ "./src/app/pages/auth/mail-confirmation/mail-confirmation.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/mail-confirmation/mail-confirmation.module.ts ***!
  \**************************************************************************/
/*! exports provided: MailConfirmationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailConfirmationPageModule", function() { return MailConfirmationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mail_confirmation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mail-confirmation.page */ "./src/app/pages/auth/mail-confirmation/mail-confirmation.page.ts");







var routes = [
    {
        path: '',
        component: _mail_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["MailConfirmationPage"]
    }
];
var MailConfirmationPageModule = /** @class */ (function () {
    function MailConfirmationPageModule() {
    }
    MailConfirmationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mail_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["MailConfirmationPage"]]
        })
    ], MailConfirmationPageModule);
    return MailConfirmationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/mail-confirmation/mail-confirmation.page.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/mail-confirmation/mail-confirmation.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class=\"logo\"></div>\n        </ion-col>\n      </ion-row>\n      <ion-row id=\"sendemail\" *ngIf=\"!isUserHold\" >\n          <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\">\n          <img src=\"../../assets/images/icon-email.svg\" />\n        </ion-col>\n        <ion-col size=\"7\">\n          <input type=\"text\" class=\"forgot-password-input\" [(ngModel)]=\"Model.MailConfirmation\" />\n          <span class=\"forgot-password-span\">Please key in your email for <br /> verification purpose</span>\n          <span color=\"danger\" *ngIf=\"ErrorMessage != ''\" >{{ErrorMessage}}</span>\n        </ion-col>\n        <ion-col size=\"2\"></ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"isUserHold\" >\n        <ion-col class=\"text-center\">\n          <img src=\"../../assets/images/stop.png\" width=250 />\n          <h4 class=\"text-center\">Waiting for email verified {{BlockDurationText}}</h4>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-fab-button class=\"next-button\" (click)=\"doNext()\" *ngIf=\"!isUserHold\">\n      <ion-icon name=\"arrow-forward\"></ion-icon>\n    </ion-fab-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/mail-confirmation/mail-confirmation.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/auth/mail-confirmation/mail-confirmation.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvbWFpbC1jb25maXJtYXRpb24vbWFpbC1jb25maXJtYXRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/auth/mail-confirmation/mail-confirmation.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/mail-confirmation/mail-confirmation.page.ts ***!
  \************************************************************************/
/*! exports provided: MailConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailConfirmationPage", function() { return MailConfirmationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../..//services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");









var MailConfirmationPage = /** @class */ (function () {
    function MailConfirmationPage(router, dataTransaction, api, platform, alert, restApi, routerProvider) {
        var _this = this;
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.api = api;
        this.platform = platform;
        this.alert = alert;
        this.restApi = restApi;
        this.routerProvider = routerProvider;
        this.AccessToken = '';
        this.ErrorMessage = '';
        this.BlockDuration = 0;
        this.BlockDurationText = '00:00';
        this.isUserHold = false;
        this.isDebug = false;
        this.Model = {
            Phone: '',
            MailConfirmation: '',
            Resouses: {
                PhoneIcon: '',
                WorldPicture: '',
                PasswordIcon: '',
                ConfirmPassword: '',
                MailConfirmation: '',
                UserHold: ''
            }
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
    MailConfirmationPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getUserPhone().then(function (response) {
            _this.Model.Phone = response;
        }).catch(function (error) {
            _this.alert.showErrorMessageAlert(error);
        });
    };
    MailConfirmationPage.prototype.doNext = function () {
        var _this = this;
        if (!this.isDebug) {
            this.dataTransaction.setEmail(this.Model.MailConfirmation);
            this.api.RequestEmailVerification(this.Model.MailConfirmation, this.AccessToken)
                .then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                        _this.BlockDuration = parseInt(result.Data.BlockDuration);
                        _this.doHoldUser();
                    }
                    else {
                        _this.alert.showErrorMessageAlert(result.ErrorMessage);
                    }
                }
                else {
                    _this.alert.showErrorMessageAlert(response.error);
                }
            }, function (error) {
                _this.alert.showErrorMessageAlert(error);
            });
        }
        else {
            this.dataTransaction.setEmail(this.Model.MailConfirmation);
            this.restApi.RequestEmailVerification(this.Model.MailConfirmation, this.AccessToken).subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == "0") {
                    _this.BlockDuration = parseInt(result.Data.BlockDuration);
                    _this.doHoldUser();
                }
                else {
                    _this.ErrorMessage = result.ErrorMessage;
                }
            });
        }
    };
    MailConfirmationPage.prototype.doHoldUser = function () {
        this.isUserHold = true;
        this.countdown();
        this.requestCountDown();
    };
    MailConfirmationPage.prototype.requestCountDown = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, setInterval(function () {
                            _this.doVerifyEmail();
                        }, 5000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MailConfirmationPage.prototype.countdown = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, setTimeout(function (x) {
                            if (_this.BlockDuration <= 0) { }
                            _this.BlockDuration -= 1;
                            if (_this.BlockDuration > 0) {
                                _this.countdown();
                                _this.BlockDurationText = _this.parseTime(_this.BlockDuration);
                            }
                            else {
                                _this.isUserHold = false;
                            }
                        }, 1000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MailConfirmationPage.prototype.parseTime = function (secondes) {
        var result = "";
        var min = "00";
        var sec = "00";
        min = (Math.round(secondes / 60)).toString();
        sec = (secondes - (parseInt(min) * 60)).toString();
        result = min + ":" + sec;
        return result;
    };
    MailConfirmationPage.prototype.doVerifyEmail = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.GetProfile(this.AccessToken).then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.Data.NextStep != 'VerifyEmail') {
                        _this.isUserHold = false;
                        _this.BlockDuration = 0;
                        _this.routerProvider.nextStep(result.Data.NextStep);
                    }
                }
                else {
                    _this.alert.showErrorMessageAlert(response.error);
                }
            }).catch(function (error) { return _this.alert.showErrorMessageAlert(error); });
        }
        else {
            this.restApi.GetProfile(this.AccessToken).subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == "0") {
                    if (result.Data.NextStep != 'VerifyEmail') {
                        _this.isUserHold = false;
                        _this.BlockDuration = 0;
                        _this.routerProvider.nextStep(result.Data.NextStep);
                    }
                }
            });
        }
    };
    MailConfirmationPage.prototype.doLogin = function () {
        this.router.navigate(['auth-phone']);
    };
    MailConfirmationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-mail-confirmation',
            template: __webpack_require__(/*! ./mail-confirmation.page.html */ "./src/app/pages/auth/mail-confirmation/mail-confirmation.page.html"),
            providers: [
                _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__["NativeApiService"]
            ],
            styles: [__webpack_require__(/*! ./mail-confirmation.page.scss */ "./src/app/pages/auth/mail-confirmation/mail-confirmation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_1__["DataTransactionService"],
            _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__["NativeApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_6__["AlertProviderService"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_7__["RestApiService"],
            src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_8__["RouteProviderService"]])
    ], MailConfirmationPage);
    return MailConfirmationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-mail-confirmation-mail-confirmation-module.js.map