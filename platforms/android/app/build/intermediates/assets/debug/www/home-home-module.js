(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/pages/profile/home/home.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/profile/home/home.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/profile/home/home.page.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");








var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__["NgxQRCodeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/home/home.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/profile/home/home.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"container\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <div class=\"text-center\">\n                        <img src='../../assets/images/jomsave_logo.svg' width=\"100\"/>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col style=\"border-bottom: 1px solid #fbb03b\">\n                    <h6 class=\"text-center\">Social</h6>                    \n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class=\"text-center\" *ngIf=\"encodeData\">\n                    <ngx-qrcode [qrc-value]=\"encodeData\"></ngx-qrcode>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <p class=\"text-center tefer-text\">{{Model.MemberId}}</p>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"3\"></ion-col>\n                <ion-col size=\"6\">\n                    <ion-button class=\"custom-button\" (click)=\"doShare()\">Refer</ion-button>\n                </ion-col>\n                <ion-col size=\"3\"></ion-col>\n            </ion-row>\n            <!-- <ion-row>\n                <ion-col class=\"text-center m-t-20\">\n                    <a (click)=\"doCheckHistory()\">History</a>\n                </ion-col>\n            </ion-row> -->\n        </ion-grid>\n\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/home/home.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/profile/home/home.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvaG9tZS9ob21lLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/home/home.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/home/home.page.ts ***!
  \*************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");
/* harmony import */ var src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");










var HomePage = /** @class */ (function () {
    function HomePage(router, dataTransaction, api, platform, restApi, routerProvider, alert, socialSharing) {
        var _this = this;
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.api = api;
        this.platform = platform;
        this.restApi = restApi;
        this.routerProvider = routerProvider;
        this.alert = alert;
        this.socialSharing = socialSharing;
        this.Navbar = "Social";
        this.QRCode = "";
        this.Model = {
            DisplayName: "",
            MemberId: '',
            Email: '',
            Mobile: '',
            Gender: 'MKYTY',
            UserType: "",
            Roles: "",
            NextStep: "",
            Upline: {
                MemberId: "",
                DisplayName: ""
            }
        };
        this.AccessToken = "";
        this.isDebug = false;
        this.ErrorMessage = '';
        this.zbarOptions = {
            flash: 'off',
            drawSight: false
        };
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
        this.dataTransaction.getProfile().then(function (val) {
            if (val == undefined || val == '')
                _this.router.navigate(['auth-phone']);
            else {
                _this.Model = val;
                _this.encodedText(_this.Model.MemberId);
                _this.dataTransaction.getAccessToken().then(function (acc) {
                    _this.AccessToken = acc.toString();
                });
            }
        });
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.encodedText = function (input) {
        this.encodeData = input;
    };
    HomePage.prototype.doCheckHistory = function () {
        this.router.navigateByUrl('profile/profile/wallet/wallet-history');
    };
    HomePage.prototype.doShare = function () {
        var msg = "Hey!Want to earn high active and passive income monthly,simple and hassle-free? JomSave is the one for you! Join us now! https://www.youtube.com/watch?v=29PD2TFxJJc  \n  Yes,I want in! \n https://member-stage.jomsave.com/Home/Login?refCode=" + this.Model.MemberId;
        this.socialSharing.share(msg, 'JomSave', null, '');
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/profile/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/profile/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_8__["DataTransactionService"],
            src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_2__["NativeApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"],
            src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_6__["RouteProviderService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_7__["AlertProviderService"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"]])
    ], HomePage);
    return HomePage;
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
//# sourceMappingURL=home-home-module.js.map