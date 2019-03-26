(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-wallet-module"],{

/***/ "./src/app/pages/profile/wallet/wallet.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/profile/wallet/wallet.module.ts ***!
  \*******************************************************/
/*! exports provided: WalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet.page */ "./src/app/pages/profile/wallet/wallet.page.ts");







var routes = [
    {
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]
    }
];
var WalletPageModule = /** @class */ (function () {
    function WalletPageModule() {
    }
    WalletPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]]
        })
    ], WalletPageModule);
    return WalletPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/wallet/wallet.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/profile/wallet/wallet.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"wallet-header\">\n    <ion-grid>\n        <ion-row>\n            <ion-col class=\"text-center\">\n                <p class=\"wallet-header-p\">A-Wallet</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class=\"text-center\">\n                <p class=\"wallet-header-life-earning\">Lifetime Earnings</p>\n                <p class=\"wallet-header-life-earning-value\">RM{{Wallet.LifeTimeEarning }}</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n<ion-content padding>\n    <div class=\"wallet-body-item\">\n        <ion-grid>\n            <ion-row>\n                <ion-col class=\"text-center\">\n                    <p class=\"wallet-body-amount\">Amount <ion-icon name=\"help-circle-outline\" (click)=\"doShowMessage()\"></ion-icon>\n                    </p>\n                    <p class=\"wallet-body-life-earning-value\">RM{{Wallet.CurrentBalance }}</p>\n                    <button class=\"wallet-body-withdraw\">Withdraw</button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <ion-grid style=\"position: absolute;bottom: 0;text-align: center;width: 100%;\">\n\n        <ion-row>\n            <ion-col class=\"text-center\">\n                <a (click)=\"doWalletHistory()\">A-Wallet History</a>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class=\"text-center\">\n                <a (click)=\"doMyNetwork()\">View My Network</a>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/wallet/wallet.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/profile/wallet/wallet.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/wallet/wallet.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/profile/wallet/wallet.page.ts ***!
  \*****************************************************/
/*! exports provided: WalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPage", function() { return WalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");









var WalletPage = /** @class */ (function () {
    function WalletPage(api, restApi, platform, dataTransaction, alert, router, navControll, routerProvider) {
        var _this = this;
        this.api = api;
        this.restApi = restApi;
        this.platform = platform;
        this.dataTransaction = dataTransaction;
        this.alert = alert;
        this.router = router;
        this.navControll = navControll;
        this.routerProvider = routerProvider;
        this.Wallet = {
            LifeTimeEarning: "0",
            CurrentBalance: "0",
            WithdrawalAminFee: "0",
            AmountToBeRecieved: "0"
        };
        this.isDebug = false;
        this.AccessToken = "";
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
        this.routerSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]) {
                if (event.url == '/profile/profile/notification') {
                    _this.getBrief();
                }
            }
        });
    }
    WalletPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getAccessToken().then(function (acc) {
            if (acc == null)
                console.log('access token does not detected');
            else {
                _this.AccessToken = acc.toString();
                _this.getBrief();
            }
        });
    };
    WalletPage.prototype.getBrief = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.GetBrief_Wallet(this.AccessToken).then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                        _this.Wallet = result.Data;
                    }
                    else {
                        _this.alert.presentToast(result.ErrorMessage);
                        if (result.ErrorCode == 1002) {
                            _this.dataTransaction.logOut();
                            _this.routerProvider.nextStep('Phone');
                        }
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
            this.restApi.GetBrief_Wallet(this.AccessToken).subscribe(function (reponse) {
                var result = _this.restApi.converResponseToJson(reponse);
                if (result.ErrorCode == "0") {
                    _this.Wallet = result.Data;
                }
                else {
                    console.log(result.ErrorMessage);
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    WalletPage.prototype.doWalletHistory = function () {
        this.router.navigateByUrl('profile/profile/wallet/wallet-history');
    };
    WalletPage.prototype.doMyNetwork = function () {
        this.dataTransaction.DataParam = this.Wallet.LifeTimeEarning;
        this.router.navigateByUrl('profile/profile/wallet/my-network');
    };
    WalletPage.prototype.doShowMessage = function () {
        this.alert.showErrorMessageAlert("You need a minimum RM" + this.Wallet.WithdrawalAminFee + " of Withdrawable Amount to proceed.");
    };
    WalletPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.page.html */ "./src/app/pages/profile/wallet/wallet.page.html"),
            styles: [__webpack_require__(/*! ./wallet.page.scss */ "./src/app/pages/profile/wallet/wallet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_2__["NativeApiService"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_5__["DataTransactionService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_6__["AlertProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_8__["RouteProviderService"]])
    ], WalletPage);
    return WalletPage;
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
//# sourceMappingURL=wallet-wallet-module.js.map