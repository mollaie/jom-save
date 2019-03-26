(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedback-feedback-module"],{

/***/ "./src/app/pages/profile/feedback/feedback.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile/feedback/feedback.module.ts ***!
  \***********************************************************/
/*! exports provided: FeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback.page */ "./src/app/pages/profile/feedback/feedback.page.ts");







var routes = [
    {
        path: '',
        component: _feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]
    }
];
var FeedbackPageModule = /** @class */ (function () {
    function FeedbackPageModule() {
    }
    FeedbackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]]
        })
    ], FeedbackPageModule);
    return FeedbackPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/feedback/feedback.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile/feedback/feedback.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title class=\"text-center\">Feedback</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div class=\"content\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <input type=\"text\" class=\"input\" placeholder=\"Title\" [(ngModel)]=\"Model.Title\" />\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <textarea rows=\"10\" [(ngModel)]=\"Model.Body\" placeholder=\"Description\"></textarea>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button class=\"emoji-button love\" (click)=\"doChangeSatisfy(4)\"></button>\n          <button class=\"emoji-button happy\" (click)=\"doChangeSatisfy(3)\"></button>\n          <button class=\"emoji-button sad\" (click)=\"doChangeSatisfy(2)\"></button>\n          <button class=\"emoji-button angry\" (click)=\"doChangeSatisfy(1)\"></button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <p class=\"text-center\" style=\"font-weight: bold;font-size:16px;\">{{Satisfy}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button class=\"next-button\" (click)=\"doNext()\">\n      <ion-icon name=\"arrow-forward\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/feedback/feedback.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile/feedback/feedback.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvZmVlZGJhY2svZmVlZGJhY2sucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/feedback/feedback.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/feedback/feedback.page.ts ***!
  \*********************************************************/
/*! exports provided: FeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPage", function() { return FeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");
/* harmony import */ var src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(platform, api, restApi, alert, dataTransaction, routerProvider, router) {
        var _this = this;
        this.platform = platform;
        this.api = api;
        this.restApi = restApi;
        this.alert = alert;
        this.dataTransaction = dataTransaction;
        this.routerProvider = routerProvider;
        this.router = router;
        this.isDebug = false;
        this.ErrorMessage = '';
        this.Satisfy = "";
        this.Model = {
            Title: '',
            Body: '',
            NumberOfStars: 1
        };
        if (platform.is('cordova')) {
            this.isDebug = false;
        }
        else
            this.isDebug = true;
        this.dataTransaction.getAccessToken().then(function (acc) {
            _this.AccessToken = acc.toString();
        });
        this.Model.Title = "";
        this.Model.Body = "";
    }
    FeedbackPage.prototype.ngOnInit = function () {
    };
    FeedbackPage.prototype.doChangeSatisfy = function (num) {
        this.Model.NumberOfStars = num;
        switch (num) {
            case 1:
                this.Satisfy = "Angry";
                break;
            case 2:
                this.Satisfy = "Sad";
                break;
            case 3:
                this.Satisfy = "Happy";
                break;
            case 4:
                this.Satisfy = "Love";
                break;
        }
    };
    FeedbackPage.prototype.doNext = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.AddFeedback(this.Model.Title, this.Model.Body, this.Model.NumberOfStars, this.AccessToken)
                .then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                        _this.alert.showErrorMessageAlert('Thank you for taking time to provide valueable feedback to us.We will response to your feedback within 2 working days.');
                        _this.router.navigate(['profile/profile/menu']);
                    }
                    else {
                        _this.alert.presentToast(result.ErrorMessage);
                        if (result.ErrorCode == 1002) {
                            _this.dataTransaction.logOut();
                            _this.routerProvider.nextStep('Phone');
                        }
                    }
                }
            }).catch(function (error) {
                _this.alert.presentToast(error);
            });
        }
        else {
            this.restApi.AddFeedback(this.Model.Title, this.Model.Body, this.Model.NumberOfStars, this.AccessToken)
                .subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == "0") {
                    _this.alert.presentToast('Your Feedback is saved.');
                }
                else {
                    _this.ErrorMessage = result.ErrorMessage;
                }
            });
        }
    };
    FeedbackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.page.html */ "./src/app/pages/profile/feedback/feedback.page.html"),
            styles: [__webpack_require__(/*! ./feedback.page.scss */ "./src/app/pages/profile/feedback/feedback.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_3__["NativeApiService"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_5__["AlertProviderService"],
            src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_6__["DataTransactionService"],
            src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_7__["RouteProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], FeedbackPage);
    return FeedbackPage;
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
//# sourceMappingURL=feedback-feedback-module.js.map