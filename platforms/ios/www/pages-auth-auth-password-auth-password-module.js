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

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <a class=\"Login-Link\" slot=\"end\" (click)=\"doCancel()\">Login</a>            \n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>      \n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"container\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <div class=\"logo\"></div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-grid>\n\n            <ion-row>\n                <ion-col>\n\n                    <div class=\"input-container\">\n                        <input type=\"password\" class=\"input-icon-password\" [(ngModel)]=\"Model.Password\" />\n                        <img src=\"../../assets/images/icon-change-login-password.svg\" class=\"input--icon\" />\n                        <br />\n                        <span class=\"input-message\">Please key in your password </span>\n                        <br/>\n                        <span color=\"danger\" *ngIf=\"ErrorMessage != ''\" >{{ErrorMessage}}</span>\n                    </div>\n                    <br />\n                    <a class=\"link\" (click)=\"doForgotPassword()\">Forgot Password</a>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-fab-button class=\"next-button\" [disabled]=\"Model.Password == ''\" (click)=\"doNext()\">\n            <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-fab-button>\n        \n    </div>  \n</ion-content>"

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









var AuthPasswordPage = /** @class */ (function () {
    function AuthPasswordPage(router, dataTransaction, api, platform, restApi, routerProvider, alert) {
        var _this = this;
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.api = api;
        this.platform = platform;
        this.restApi = restApi;
        this.routerProvider = routerProvider;
        this.alert = alert;
        this.Model = {
            Phone: '',
            Password: '',
        };
        this.ErrorMessage = '';
        this.isDebug = false;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])
                _this.ngOnInit();
        });
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
    }
    AuthPasswordPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getUserPhone().then(function (val) {
            if (val == undefined || val == '')
                _this.router.navigate(['auth-phone']);
            else {
                _this.Model.Phone = val;
                _this.Model.Password = '';
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    AuthPasswordPage.prototype.doNext = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.Login("60" + this.Model.Phone, this.Model.Password, "FreeMember")
                .then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    _this.dataTransaction.setUserPhone(_this.Model.Phone);
                    _this.dataTransaction.setUserPassword(_this.Model.Password);
                    _this.dataTransaction.setAccessToken(result.Data.NewAccessToken);
                    _this.dataTransaction.setNewRefreshToken(result.Data.NewRefreshToken);
                    _this.doGetProfile(result.Data.NewAccessToken);
                }
            }).catch(function (error) {
                _this.alert.showErrorMessageAlert(error);
            });
        }
        else {
            this.restApi.Login("60" + this.Model.Phone, this.Model.Password, "FreeMember")
                .subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response.Data);
                _this.dataTransaction.setUserPhone(_this.Model.Phone);
                _this.dataTransaction.setUserPassword(_this.Model.Password);
                _this.dataTransaction.setAccessToken(result.NewAccessToken);
                _this.dataTransaction.setNewRefreshToken(result.NewRefreshToken);
                _this.doGetProfile(result.NewAccessToken);
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
    AuthPasswordPage.prototype.doForgotPassword = function () {
        this.router.navigate(['forgot-password']);
    };
    AuthPasswordPage.prototype.doCancel = function () {
        this.router.navigate(['auth-phone']);
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
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_8__["AlertProviderService"]])
    ], AuthPasswordPage);
    return AuthPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-password-auth-password-module.js.map