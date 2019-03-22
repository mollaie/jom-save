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

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"no-scroll\">\n    <div class=\"container\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <div class=\"logo\"></div>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"1\"></ion-col>\n                <ion-col size=\"10\">\n                    <div class=\"input-container\">\n                        <img src=\"../../assets/images/icon-smart-phone.svg\" class=\"input--icon\"/>\n                        <span class=\"input-content\">+60</span>\n                        <input type=\"number\" class=\"input-icon\" [(ngModel)]=\"Model.Phone\" />                       \n                        <br />\n                        <span class=\"input-message\">Please key in your mobile number </span>\n                    </div>\n                </ion-col>\n                <ion-col size=\"1\"></ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"ErrorMessage\" >\n                <ion-col>\n                        <ion-textarea style=\"width: 100%;word-wrap: break-word\" [rows]=10 [(ngModel)]=\"ErrorMessage\"></ion-textarea>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <ion-fab-button class=\"next-button\" (click)=\"doNext()\" [disabled]=\"Model.Phone == ''\">\n            <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-fab-button>        \n    </div>\n</ion-content>"

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








var AuthPhonePage = /** @class */ (function () {
    function AuthPhonePage(router, dataTransaction, api, platform, restApi, loadingCtrl, alert) {
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.api = api;
        this.platform = platform;
        this.restApi = restApi;
        this.loadingCtrl = loadingCtrl;
        this.alert = alert;
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
    }
    AuthPhonePage.prototype.ngOnInit = function () {
        var _this = this;
        this.Model.Phone = "";
        this.dataTransaction.getUserPhone().then(function (response) { if (response == null)
            _this.dataTransaction.setUserPhone('11111111111'); });
    };
    AuthPhonePage.prototype.doLogin = function () {
        this.router.navigate(['auth-password']);
    };
    AuthPhonePage.prototype.doRegister = function () {
        var _this = this;
        this.dataTransaction.getUserPhone().then(function (response) {
            if (response != null && response != '' && response != '11111111111') {
                _this.router.navigate(['signup']);
            }
        });
    };
    AuthPhonePage.prototype.doNext = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var load;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            spinner: 'dots',
                            duration: 5000,
                            message: 'Please Wait ...',
                        })];
                    case 1:
                        load = _a.sent();
                        return [4 /*yield*/, load.present()];
                    case 2:
                        _a.sent();
                        if (!this.isDebug) {
                            this.api.IsMobileRgistered("60" + this.Model.Phone)
                                .then(function (response) {
                                load.dismiss();
                                if (response.status == 200) {
                                    var result = _this.api.converResponseToJson(response.data);
                                    if (result.Data.IsRegistered == "0") {
                                        _this.dataTransaction.setUserPhone(_this.Model.Phone);
                                        _this.doRegister();
                                    }
                                    else {
                                        _this.dataTransaction.setUserPhone(_this.Model.Phone);
                                        _this.doLogin();
                                    }
                                }
                                else {
                                    _this.alert.showErrorMessageAlert(response.error);
                                }
                            })
                                .catch(function (error) {
                                _this.alert.showErrorMessageAlert(error);
                            });
                        }
                        else {
                            this.restApi.IsMobileRgistered("60" + this.Model.Phone)
                                .subscribe(function (response) {
                                load.dismiss();
                                var result = _this.restApi.converResponseToJson(response);
                                if (result.Data.IsRegistered == "0") {
                                    _this.dataTransaction.setUserPhone(_this.Model.Phone);
                                    _this.doRegister();
                                }
                                else {
                                    _this.dataTransaction.setUserPhone(_this.Model.Phone);
                                    _this.doLogin();
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthPhonePage.prototype.doForgotPassword = function () {
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_7__["AlertProviderService"]])
    ], AuthPhonePage);
    return AuthPhonePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-phone-auth-phone-module.js.map