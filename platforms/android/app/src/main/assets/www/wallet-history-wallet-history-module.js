(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-history-wallet-history-module"],{

/***/ "./src/app/pages/profile/wallet-history/wallet-history.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/wallet-history/wallet-history.module.ts ***!
  \***********************************************************************/
/*! exports provided: WalletHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletHistoryPageModule", function() { return WalletHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wallet_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet-history.page */ "./src/app/pages/profile/wallet-history/wallet-history.page.ts");







var routes = [
    {
        path: '',
        component: _wallet_history_page__WEBPACK_IMPORTED_MODULE_6__["WalletHistoryPage"]
    }
];
var WalletHistoryPageModule = /** @class */ (function () {
    function WalletHistoryPageModule() {
    }
    WalletHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_wallet_history_page__WEBPACK_IMPORTED_MODULE_6__["WalletHistoryPage"]]
        })
    ], WalletHistoryPageModule);
    return WalletHistoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/wallet-history/wallet-history.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/wallet-history/wallet-history.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>History</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of WalletHistory.Transactions\" lines=\"none\" class=\"history-item\">\n      <ion-label class=\"history-item-title\">{{item.DateTime | date :'dd MMM yyyy'}}</ion-label>\n      <ion-label class=\"history-item-description\" text-wrap>{{item.Remark}}</ion-label>\n      <ion-label class=\"history-item-type-sent\" *ngIf=\"item.Color == '009245'\">{{item.Amount}}</ion-label>\n      <ion-label class=\"history-item-type-resend\" *ngIf=\"item.Color == 'B32025'\">{{item.Amount}}</ion-label>\n      <ion-label class=\"history-item-type-joined\" *ngIf=\"item.Color != '009245' && item.Color != 'B32025'\">\n        {{item.Amount}}</ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-grid *ngIf=\"onLoading\">\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <ion-spinner name=\"dots\" color=\"primary\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMore($event)\" loadingSpinner=\"bubbles\"\n    loadingText=\"Loading more data...\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/wallet-history/wallet-history.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/wallet-history/wallet-history.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvd2FsbGV0LWhpc3Rvcnkvd2FsbGV0LWhpc3RvcnkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/wallet-history/wallet-history.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile/wallet-history/wallet-history.page.ts ***!
  \*********************************************************************/
/*! exports provided: WalletHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletHistoryPage", function() { return WalletHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");
/* harmony import */ var _services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");








var WalletHistoryPage = /** @class */ (function () {
    function WalletHistoryPage(api, restApi, platform, dataTransaction, alert, routerProvider) {
        this.api = api;
        this.restApi = restApi;
        this.platform = platform;
        this.dataTransaction = dataTransaction;
        this.alert = alert;
        this.routerProvider = routerProvider;
        this.showSplash = true;
        this.isDebug = false;
        this.AccessToken = "";
        this.rows = 10;
        this.WalletHistory = {
            Transactions: []
        };
        this.onLoading = false;
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
    }
    WalletHistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getAccessToken().then(function (acc) {
            if (acc == null)
                console.log('access token does not detected');
            else {
                _this.AccessToken = acc.toString();
                _this.GetTransactions();
            }
        });
    };
    WalletHistoryPage.prototype.GetTransactions = function (infiniteScroll) {
        var _this = this;
        this.onLoading = true;
        setTimeout(function () {
            if (!_this.isDebug) {
                _this.api.GetTransactions("" + _this.rows, "" + _this.dataTransaction.page, _this.AccessToken).then(function (response) {
                    if (response.status == 200) {
                        var result = _this.api.converResponseToJson(response.data);
                        if (result.ErrorCode == "0") {
                            _this.WalletHistory.Transactions = _this.WalletHistory.Transactions.concat(result.Data.Transactions);
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
                _this.restApi.GetTransactions("" + _this.rows, "" + _this.dataTransaction.page, _this.AccessToken).subscribe(function (reponse) {
                    var result = _this.restApi.converResponseToJson(reponse);
                    if (result.ErrorCode == "0") {
                        _this.WalletHistory.Transactions = _this.WalletHistory.Transactions.concat(result.Data.Transactions);
                    }
                    else {
                        console.log(result.ErrorMessage);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            _this.onLoading = false;
        }, 500);
        if (infiniteScroll) {
            infiniteScroll.target.complete();
        }
    };
    WalletHistoryPage.prototype.loadMore = function (infiniteScroll) {
        this.dataTransaction.page++;
        this.GetTransactions(infiniteScroll);
    };
    WalletHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wallet-history',
            template: __webpack_require__(/*! ./wallet-history.page.html */ "./src/app/pages/profile/wallet-history/wallet-history.page.html"),
            styles: [__webpack_require__(/*! ./wallet-history.page.scss */ "./src/app/pages/profile/wallet-history/wallet-history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_2__["NativeApiService"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_5__["DataTransactionService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_6__["AlertProviderService"],
            _services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_7__["RouteProviderService"]])
    ], WalletHistoryPage);
    return WalletHistoryPage;
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
//# sourceMappingURL=wallet-history-wallet-history-module.js.map