(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-network-my-network-module"],{

/***/ "./src/app/pages/profile/my-network/my-network.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/profile/my-network/my-network.module.ts ***!
  \***************************************************************/
/*! exports provided: MyNetworkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNetworkPageModule", function() { return MyNetworkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_network_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-network.page */ "./src/app/pages/profile/my-network/my-network.page.ts");







var routes = [
    {
        path: '',
        component: _my_network_page__WEBPACK_IMPORTED_MODULE_6__["MyNetworkPage"]
    }
];
var MyNetworkPageModule = /** @class */ (function () {
    function MyNetworkPageModule() {
    }
    MyNetworkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_network_page__WEBPACK_IMPORTED_MODULE_6__["MyNetworkPage"]]
        })
    ], MyNetworkPageModule);
    return MyNetworkPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/my-network/my-network.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/profile/my-network/my-network.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"wallet-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" class=\"show-back-button\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n        <p class=\"wallet-header-p\" style=\"margin-left:25%\">A-Wallet</p>\n    </ion-title>\n  </ion-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <p class=\"wallet-header-life-earning\">Lifetime Earnings</p>\n        <p class=\"wallet-header-life-earning-value\">RM{{LifeTimeEarning }}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content fullscreen>\n  <ion-list padding>\n    <ion-list-header style=\"padding:0\">\n      <div class=\"network-button network-button-active\" id=\"level1\" (click)=\"segmentChanged($event)\" data-level=\"1\">\n        <span>{{Level.Level1Count}}</span>\n        <p>Level 1</p>\n      </div>\n      <div class=\"network-button\" id=\"level2\" (click)=\"segmentChanged($event)\" data-level=\"2\">\n        <span>{{Level.Level2Count}}</span>\n        <p>Level 2</p>\n      </div>\n      <div class=\"network-button\" id=\"level3\" (click)=\"segmentChanged($event)\" data-level=\"3\">\n        <span>{{Level.Level3Count}}</span>\n        <p>Level 3</p>\n      </div>\n\n    </ion-list-header>\n    <ion-item *ngFor=\"let item of Downlines\" class=\"network-item\" lines=\"none\">\n      <p class=\"network-item-title\">{{item.DisplayName}}</p>\n      <p class=\"network-item-date\">Joined since: {{item.JoinDateTime | date:\"dd MMM yyyy\"}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/my-network/my-network.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/profile/my-network/my-network.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important; }\n\n.back-button-md,\n.back-button-ios {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9teS1uZXR3b3JrL0M6XFxzb3VyY2VcXGFwcFxcaW9uaWNcXGpvbS1zYXZlL3NyY1xcYXBwXFxwYWdlc1xccHJvZmlsZVxcbXktbmV0d29ya1xcbXktbmV0d29yay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBYTtFQUNiLHdDQUFpQixFQUFBOztBQUduQjs7RUFFRSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL215LW5ldHdvcmsvbXktbmV0d29yay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmFjay1idXR0b24tbWQsXHJcbi5iYWNrLWJ1dHRvbi1pb3Mge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/profile/my-network/my-network.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/profile/my-network/my-network.page.ts ***!
  \*************************************************************/
/*! exports provided: MyNetworkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNetworkPage", function() { return MyNetworkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");









var MyNetworkPage = /** @class */ (function () {
    function MyNetworkPage(api, restApi, platform, dataTransaction, alert, router, routerProvider) {
        this.api = api;
        this.restApi = restApi;
        this.platform = platform;
        this.dataTransaction = dataTransaction;
        this.alert = alert;
        this.router = router;
        this.routerProvider = routerProvider;
        this.showSplash = true;
        this.isDebug = false;
        this.AccessToken = "";
        this.LevelNumber = "1";
        this.LifeTimeEarning = 0;
        this.Level = {
            Level1Count: 0,
            Level2Count: 0,
            Level3Count: 0
        };
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
        this.LifeTimeEarning = dataTransaction.DataParam;
    }
    MyNetworkPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getAccessToken().then(function (acc) {
            if (acc == null)
                console.log('access token does not detected');
            else {
                _this.AccessToken = acc.toString();
                _this.GetBrief();
                _this.GetMyNetwork();
            }
        });
    };
    MyNetworkPage.prototype.GetBrief = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.GetBrief_Network(this.AccessToken).then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                        _this.Level = result.Data;
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
            this.restApi.GetBrief_Network(this.AccessToken).subscribe(function (reponse) {
                var result = _this.restApi.converResponseToJson(reponse);
                if (result.ErrorCode == "0") {
                    _this.Level = result.Data;
                }
                else {
                    console.log(result.ErrorMessage);
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    MyNetworkPage.prototype.segmentChanged = function (event) {
        var target = null;
        if (event.target.localName == "span") {
            target = event.target.parentElement;
        }
        if (event.target.localName == "p") {
            target = event.target.parentElement;
        }
        if (event.target.localName == "div") {
            target = event.target;
        }
        var elements = Array.from(document.querySelectorAll('.network-button-active'));
        elements.forEach(function (element) {
            element.classList.remove('network-button-active');
        });
        var selectElement = document.getElementById(target.id);
        if (selectElement != null) {
            selectElement.classList.add('network-button-active');
        }
        this.LevelNumber = target.dataset.level;
        this.GetMyNetwork();
    };
    MyNetworkPage.prototype.GetMyNetwork = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.GetMyNetwork("" + this.LevelNumber, '1000', '1', this.AccessToken).then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                        _this.Downlines = [];
                        _this.Downlines = result.Data.Downlines;
                    }
                    else {
                        _this.alert.showErrorMessageAlert(result.ErrorMessage);
                        if (result.ErrorCode == 1002) {
                            _this.dataTransaction.logOut();
                            _this.routerProvider.nextStep('Phone');
                        }
                    }
                }
                else {
                    alert(JSON.stringify(response));
                    _this.alert.presentToast(response.error);
                }
            }).catch(function (error) {
                _this.alert.presentToast(error);
            });
        }
    };
    MyNetworkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-network',
            template: __webpack_require__(/*! ./my-network.page.html */ "./src/app/pages/profile/my-network/my-network.page.html"),
            styles: [__webpack_require__(/*! ./my-network.page.scss */ "./src/app/pages/profile/my-network/my-network.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_2__["NativeApiService"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_5__["DataTransactionService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_6__["AlertProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_8__["RouteProviderService"]])
    ], MyNetworkPage);
    return MyNetworkPage;
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
//# sourceMappingURL=my-network-my-network-module.js.map