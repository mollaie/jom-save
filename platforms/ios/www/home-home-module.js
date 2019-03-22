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

module.exports = "<ion-content class=\"none-background\">\n    <div class=\"container\">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <div class=\"logo-2\"></div>\n                </ion-col>\n            </ion-row>\n            <!-- <ion-row>\n                <ion-col>\n                    <ion-toolbar no-border-top class=\"toolbar-2\">\n                        <ion-segment [(ngModel)]=\"Navbar\" class=\"segment-2\">\n                            <ion-segment-button value=\"Personal\" class=\"segment-button-2\">\n                                    <ion-icon name=\"person\"></ion-icon>\n                                Self <br /> Service\n                            </ion-segment-button>\n                            <ion-segment-button value=\"Social\" class=\"segment-button-2\">\n                                    <ion-icon name=\"git-network\"></ion-icon>\n                                Social <br /> Service\n                            </ion-segment-button>\n\n                        </ion-segment>\n                    </ion-toolbar>\n                </ion-col>\n            </ion-row> -->\n            <ion-row>\n                <ion-col class=\"text-center\" *ngIf=\"encodeData != ''\">\n                    <!-- <img [src]=\"encodeData\"/> -->\n                    <ion-input type=\"text\" [(ngModel)]=\"encodeData\"></ion-input>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <p class=\"text-center tefer-text\">{{Model.MemberId}}</p>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"3\"></ion-col>\n                <ion-col size=\"6\">\n                    <ion-button class=\"custom-button\">Refer</ion-button>\n                </ion-col>\n                <ion-col size=\"3\"></ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class=\"text-center m-t-20\">\n                <a (click)=\"doCheckHistory()\">History</a>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n</ion-content>"

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









var HomePage = /** @class */ (function () {
    function HomePage(router, dataTransaction, api, platform, restApi, routerProvider, alert) {
        var _this = this;
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.api = api;
        this.platform = platform;
        this.restApi = restApi;
        this.routerProvider = routerProvider;
        this.alert = alert;
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
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])
                _this.ngOnInit();
        });
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
        // if (this.platform.is('cordova')) {
        //   this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, input).then((encodedData) => {
        //     this.encodeData = encodedData;
        //   }, (err) => {
        //   });
        // } else {
        //   this.encodeData = "";
        // }
    };
    HomePage.prototype.doCheckHistory = function () {
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
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_7__["AlertProviderService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map