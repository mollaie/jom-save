(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-forgot-password-forgot-password-module"],{

/***/ "./src/app/pages/auth/forgot-password/forgot-password.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.module.ts ***!
  \**********************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/pages/auth/forgot-password/forgot-password.page.ts");







var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }
];
var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/forgot-password/forgot-password.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"no-scroll content-background\">\n    <div class=\"container\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <div class=\"logo\"></div>\n                </ion-col>\n            </ion-row>\n            <br />\n            <!-- <ion-row>\n                <ion-col size=\"1\"></ion-col>\n                <ion-col size=\"10\">\n                    <h3 class=\"text-center\">{{Model.Phone}}</h3>\n                </ion-col>\n                <ion-col size=\"1\"></ion-col>\n            </ion-row> -->\n            <ion-row>\n                <ion-col size=\"1\"></ion-col>\n                <ion-col size=\"10\">\n                    <div class=\"input-container\">\n                        <input type=\"tel\" class=\"input-icon\" [(ngModel)]=\"Model.Phone\" maxlength=\"13\" />\n                        <img src=\"../../assets/images/icon-smart-phone.svg\" class=\"input--icon\" disabled=\"disabled\"/>\n                    </div>\n                </ion-col>\n                <ion-col size=\"1\"></ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"1\"></ion-col>\n                <ion-col size=\"10\">\n                    <div class=\"input-container\">\n                        <input type=\"email\" class=\"input-icon-password\" [(ngModel)]=\"Model.Email\"/>\n                        <img src=\"../../assets/images/icon-email.svg\" class=\"input--icon\" />\n                        <br />\n                        <span class=\"input-message\">Please key in your email address </span>\n                    </div>\n                </ion-col>\n                <ion-col size=\"1\"></ion-col>\n            </ion-row>\n            <!-- <br/>\n            <ion-row *ngIf=\"ErrorMessage\">\n                <ion-col>\n                    <p class=\"error-message\" >{{ErrorMessage}}</p>\n                </ion-col>\n            </ion-row>     \n            <ion-row>\n                <ion-col size=\"3\"></ion-col>\n                <ion-col size=\"6\">\n                    <ion-button fill=\"outline\" expand=\"block\" color=\"success\" (click)=\"doNext()\"><ion-icon name=\"checkmark\"></ion-icon> Confirm Reset</ion-button>\n                </ion-col>\n\n                <ion-col size=\"3\"></ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"3\"></ion-col>\n                <ion-col size=\"6\">\n                    <ion-button fill=\"outline\" expand=\"block\" color=\"danger\" (click)=\"doCancel()\"><ion-icon name=\"close\"></ion-icon> Cancel</ion-button>\n                </ion-col>\n                <ion-col size=\"3\"></ion-col>\n            </ion-row> -->\n        </ion-grid>\n\n    </div>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button class=\"next-button\" (click)=\"doNext()\">\n            <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/forgot-password/forgot-password.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/auth/forgot-password/forgot-password.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.page.ts ***!
  \********************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_constant_constant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/constant/constant.service */ "./src/app/services/constant/constant.service.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");








var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(dataTransaction, router, constantService, restApi, api, alertController, platform) {
        var _this = this;
        this.dataTransaction = dataTransaction;
        this.router = router;
        this.constantService = constantService;
        this.restApi = restApi;
        this.api = api;
        this.alertController = alertController;
        this.platform = platform;
        this.Model = {
            Phone: '',
            Email: ''
        };
        this.isDebug = false;
        this.ErrorMessage = "";
        this.AccessToken = "";
        dataTransaction.getAccessToken().then(function (response) {
            _this.AccessToken = response;
        });
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getUserPhone().then(function (response) {
            console.log(response);
            if (response != null)
                _this.Model.Phone = "" + response;
            else {
                alert('phone does not exists');
            }
        });
    };
    ForgotPasswordPage.prototype.doCancel = function () {
        this.router.navigate(['auth-password']);
    };
    ForgotPasswordPage.prototype.doNext = function () {
        var _this = this;
        if (this.doValidate()) {
            if (!this.isDebug) {
                this.api.RequestResetPassword("" + this.Model.Phone, this.Model.Email, this.AccessToken).then(function (response) {
                    if (response.status == 200) {
                        var result = _this.api.converResponseToJson(response.data);
                        if (result.Data == "") {
                            _this.ErrorMessage = "this email is not registered with the <br/> mobile number.please check the <br/> email address above again.";
                        }
                        else {
                            _this.showAlert("Your password has been sent to <br/> " + _this.Model.Email + ".");
                        }
                    }
                });
            }
            else {
                this.restApi.RequestResetPassword(this.Model.Phone, this.Model.Email, this.AccessToken).subscribe(function (response) {
                    var result = _this.restApi.converResponseToJson(response);
                    if (result.ErrorCode == "0") {
                        if (result.Data == "") {
                            _this.ErrorMessage = "this email is not registered with the <br/> mobile number.please check the <br/> email address above again.";
                        }
                        else {
                            _this.showAlert("Your password has been sent to <br/> " + _this.Model.Email + ".");
                        }
                    }
                    else {
                        _this.ErrorMessage = result.ErrorMessage;
                    }
                });
            }
        }
    };
    ForgotPasswordPage.prototype.showAlert = function (msg) {
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
                                        _this.router.navigate(['auth-password']);
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
    ForgotPasswordPage.prototype.doValidate = function () {
        if (this.Model.Email != '') {
            var isValid = this.constantService.ValidateEmail(this.Model.Email);
            if (!isValid)
                this.ErrorMessage = "Input email is invalid";
            else
                this.ErrorMessage = "";
            return isValid;
        }
    };
    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.page.html */ "./src/app/pages/auth/forgot-password/forgot-password.page.html"),
            styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/pages/auth/forgot-password/forgot-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_3__["DataTransactionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_constant_constant_service__WEBPACK_IMPORTED_MODULE_5__["ConstantService"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_6__["RestApiService"],
            src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_7__["NativeApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-forgot-password-forgot-password-module.js.map