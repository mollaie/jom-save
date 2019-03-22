(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-change-password-change-password-module"],{

/***/ "./src/app/pages/auth/change-password/change-password.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/change-password/change-password.module.ts ***!
  \**********************************************************************/
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
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/pages/auth/change-password/change-password.page.ts");







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

/***/ "./src/app/pages/auth/change-password/change-password.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/change-password/change-password.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <a class=\"Login-Link\" slot=\"end\" (click)=\"doLogin()\">Login</a>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"container\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <div class=\"logo\"></div>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"1\"></ion-col>\n                <ion-col size=\"2\">\n                    <img src=\"../../assets/images/icon-change-login-password.svg\" />\n                </ion-col>\n                <ion-col size=\"7\">\n                    <input type=\"password\" class=\"forgot-password-input\" [(ngModel)]=\"Model.NewPassword\" />\n                    <span class=\"forgot-password-span\">Please key in your new password</span>\n                    <p class=\"forgot-password-span\">\n                        Password must be 8-20\n                        characters,<br /> 1 letter, 1 CAPS.\n                    </p>\n                </ion-col>\n                <ion-col size=\"2\">\n\n                </ion-col>\n\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"1\"></ion-col>\n                <ion-col size=\"2\">\n                    <img src=\"../../assets/images/icon-confirm-password.svg\" />\n                </ion-col>\n                <ion-col size=\"7\">\n                    <input type=\"password\" class=\"forgot-password-input\" [(ngModel)]=\"Model.ConfirmPassword\"\n                        (change)=\"doCheckPassword\" />\n                    <span class=\"forgot-password-span\">Please confirm your password</span>\n                </ion-col>\n                <ion-col size=\"2\">\n\n                </ion-col>\n\n            </ion-row>\n            <ion-row *ngIf=\"ErrorMessage != ''\">\n                <ion-col>\n                    <ion-item text-wrap color=\"danger\">\n                        {{ErrorMessage}}\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-fab-button class=\"next-button\" (click)=\"doNext()\">\n            <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-fab-button>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/change-password/change-password.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/change-password/change-password.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/auth/change-password/change-password.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/change-password/change-password.page.ts ***!
  \********************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../..//services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");








var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(router, dataTransaction, api, platform, restApi, alert) {
        var _this = this;
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.api = api;
        this.platform = platform;
        this.restApi = restApi;
        this.alert = alert;
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
        var _this = this;
        this.dataTransaction.getUserPhone().then(function (response) {
            _this.Model.Phone = response;
            _this.dataTransaction.getUserPassword().then(function (pass) {
                _this.Model.Password = pass;
            }).catch(function (error) {
                _this.ErrorMessage = error;
            });
        }).catch(function (error) {
            _this.ErrorMessage = error;
        });
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
            this.api.CreatePassword(this.Model.NewPassword, this.AccessToken)
                .then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode = "0") {
                        _this.alert.showErrorMessageAlert('Your password has been changed');
                        _this.router.navigate(['mail-confirmation']);
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
            this.restApi.CreatePassword(this.Model.NewPassword, this.AccessToken).subscribe(function (response) {
                if (response.ErrorCode == "0") {
                    alert('Your password has been changed');
                    _this.router.navigate(['mail-confirmation']);
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
    ChangePasswordPage.prototype.doLogin = function () {
        this.router.navigate(['auth-phone']);
    };
    ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.page.html */ "./src/app/pages/auth/change-password/change-password.page.html"),
            providers: [
                _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__["NativeApiService"]
            ],
            styles: [__webpack_require__(/*! ./change-password.page.scss */ "./src/app/pages/auth/change-password/change-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_1__["DataTransactionService"],
            _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__["NativeApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__["RestApiService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_7__["AlertProviderService"]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-change-password-change-password-module.js.map