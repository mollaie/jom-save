(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-top-up-viewer-top-up-viewer-module"],{

/***/ "./src/app/pages/auth/top-up-viewer/top-up-viewer.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/top-up-viewer/top-up-viewer.module.ts ***!
  \******************************************************************/
/*! exports provided: TopUpViewerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopUpViewerPageModule", function() { return TopUpViewerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _top_up_viewer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-up-viewer.page */ "./src/app/pages/auth/top-up-viewer/top-up-viewer.page.ts");







var routes = [
    {
        path: '',
        component: _top_up_viewer_page__WEBPACK_IMPORTED_MODULE_6__["TopUpViewerPage"]
    }
];
var TopUpViewerPageModule = /** @class */ (function () {
    function TopUpViewerPageModule() {
    }
    TopUpViewerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_top_up_viewer_page__WEBPACK_IMPORTED_MODULE_6__["TopUpViewerPage"]]
        })
    ], TopUpViewerPageModule);
    return TopUpViewerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/top-up-viewer/top-up-viewer.page.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/top-up-viewer/top-up-viewer.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/auth/top-up-viewer/top-up-viewer.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/top-up-viewer/top-up-viewer.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvdG9wLXVwLXZpZXdlci90b3AtdXAtdmlld2VyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/auth/top-up-viewer/top-up-viewer.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/top-up-viewer/top-up-viewer.page.ts ***!
  \****************************************************************/
/*! exports provided: TopUpViewerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopUpViewerPage", function() { return TopUpViewerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/themeable-browser/ngx */ "./node_modules/@ionic-native/themeable-browser/ngx/index.js");
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../..//services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");









var TopUpViewerPage = /** @class */ (function () {
    function TopUpViewerPage(themeableBrowser, restApi, api, router, dataTransaction, platform) {
        var _this = this;
        this.themeableBrowser = themeableBrowser;
        this.restApi = restApi;
        this.api = api;
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.platform = platform;
        this.AccessToken = '';
        this.ErrorMessage = '';
        this.orderType = '';
        this.cardNo = '';
        this.securityCode = '';
        this.epMonth = '';
        this.epYear = '';
        this.cardHolder = '';
        this.isMethodCalled = false;
        this.isDebug = false;
        this.isScriptExecuted = false;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"])
                _this.ngOnInit();
        });
        this.orderType = router.getCurrentNavigation().extras.state.orderType;
        this.securityCode = router.getCurrentNavigation().extras.state.securityCode;
        this.cardNo = router.getCurrentNavigation().extras.state.cardNo;
        this.cardHolder = router.getCurrentNavigation().extras.state.cardHolder;
        this.epYear = router.getCurrentNavigation().extras.state.expireDate.substring(0, 4);
        this.epMonth = router.getCurrentNavigation().extras.state.expireDate.replace(this.epYear + "-", '');
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
    }
    TopUpViewerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getAccessToken().then(function (acc) {
            if (acc == null)
                console.log('access token does not detected');
            else {
                _this.AccessToken = acc.toString();
                _this.createOrder();
            }
        });
    };
    //oderType = {CreditCard / All}
    TopUpViewerPage.prototype.createOrder = function () {
        var _this = this;
        if (!this.isMethodCalled) {
            this.isMethodCalled = true;
            var url = 'https://test.paydollar.com/b2cDemo/eng/dPayment/payComp.jsp';
            if (!this.isDebug) {
                this.api.CreateOrder(this.orderType, _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].orderAmount, this.AccessToken).then(function (response) {
                    console.log(response);
                    var result = _this.api.converResponseToJson(response.data);
                    if (result != null && result.ErrorCode == 0) {
                        var model = {
                            merchantId: result.Data.MerchantId,
                            amount: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].orderAmount,
                            orderRef: result.Data.OrderRef,
                            successUrl: result.Data.SuccessUrl,
                            failUrl: result.Data.FailUrl,
                            errorUrl: result.Data.ErrorUrl,
                            secureHash: result.Data.Hash,
                            lang: "E",
                            currCode: '458',
                            payType: 'N',
                            remark: 'JOMSAVE_KSJOA01B3YHD7dUS5CXX01HD6X64P0B1QDD',
                            cardNo: _this.cardNo,
                            securityCode: _this.securityCode,
                            epMonth: _this.epMonth,
                            epYear: _this.epYear,
                            cardHolder: _this.cardHolder,
                            pMethod: 'VISA'
                        };
                        _this.createPaymentForm(model);
                    }
                    else {
                        _this.ErrorMessage = result.ErrorMessage;
                    }
                }, function (error) {
                });
            }
            else {
                this.restApi.CreateOrder(this.orderType, _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].orderAmount, this.AccessToken).subscribe(function (response) {
                    console.log(response);
                    var result = _this.api.converResponseToJson(response);
                    if (result != null && result.ErrorCode == 0) {
                        var model = {
                            MerchantId: result.Data.MerchantId,
                            amount: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].orderAmount,
                            orderRef: result.Data.OrderRef,
                            successUrl: result.Data.SuccessUrl,
                            failUrl: result.Data.FailUrl,
                            errorUrl: result.Data.ErrorUrl,
                            Hash: result.Data.Hash,
                            Lang: "E",
                            paymentType: "N",
                            currCode: '',
                            payType: '',
                            remark: '',
                            cardNo: _this.cardNo,
                            securityCode: _this.securityCode,
                            epMonth: _this.epMonth,
                            epYear: _this.epYear,
                            cardHolder: _this.cardHolder,
                            pMethod: _this.orderType
                        };
                        _this.createPaymentForm(model);
                    }
                    else {
                        _this.ErrorMessage = result.ErrorMessage;
                    }
                }, function (error) {
                });
            }
        }
    };
    TopUpViewerPage.prototype.createPaymentForm = function (model) {
        //Browser Option
        var _this = this;
        var options = {
            toolbar: {
                height: 44,
                color: '#fbb03b'
            },
            title: {
                color: '#ffffffff',
                showPageTitle: true,
                staticText: 'JomSave'
            },
            backButton: {
                image: 'back',
                imagePressed: 'back_pressed',
                align: 'left',
                event: 'backPressed'
            },
            forwardButton: {
                image: 'forward',
                imagePressed: 'forward_pressed',
                align: 'left',
                event: 'forwardPressed'
            },
            closeButton: {
                image: 'close',
                imagePressed: 'close_pressed',
                align: 'left',
                event: 'closePressed'
            },
            backButtonCanClose: false,
        };
        //Form Script
        var url = 'https://test.paydollar.com/b2cDemo/eng/dPayment/payComp.jsp';
        var direction = 'https://member.jomsave.com/Home/TutorialSlides';
        var script = 'var form = document.createElement("form");';
        script += 'form.method="post";';
        script += 'form.setAttribute("action","' + url + '");';
        for (var data in model) {
            script += 'var ' + data + 'hiddenField = document.createElement("input");';
            script += data + 'hiddenField.setAttribute("type", "hidden");';
            script += data + 'hiddenField.setAttribute("name","' + data + '");';
            script += data + 'hiddenField.setAttribute("value","' + model[data] + '");';
            script += 'form.appendChild(' + data + 'hiddenField);';
        }
        script += 'document.body.appendChild(form);';
        script += 'form.submit();';
        try {
            var browser_1 = this.themeableBrowser.create(direction, '_blank', options);
            browser_1.on('closePressed').subscribe(function (data) {
                browser_1.close();
                _this.isMethodCalled = false;
            });
            browser_1.on('exit').subscribe(function (e) {
                alert(e.url);
            });
            browser_1.on('loadstop').subscribe(function (data) {
                if (!_this.isScriptExecuted) {
                    browser_1.executeScript({ code: script }).then(function (response) {
                        _this.isScriptExecuted = true;
                    });
                }
            });
            browser_1.on('event_getURL').subscribe(function (event) {
                alert('event');
            });
        }
        catch (err) {
            alert(err);
        }
    };
    TopUpViewerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-up-viewer',
            template: __webpack_require__(/*! ./top-up-viewer.page.html */ "./src/app/pages/auth/top-up-viewer/top-up-viewer.page.html"),
            styles: [__webpack_require__(/*! ./top-up-viewer.page.scss */ "./src/app/pages/auth/top-up-viewer/top-up-viewer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["ThemeableBrowser"],
            _services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"],
            src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_8__["NativeApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_5__["DataTransactionService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]])
    ], TopUpViewerPage);
    return TopUpViewerPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-top-up-viewer-top-up-viewer-module.js.map