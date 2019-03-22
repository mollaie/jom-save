(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-top-up-account-info-top-up-account-info-module"],{

/***/ "./src/app/pages/auth/top-up-account-info/top-up-account-info.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/top-up-account-info/top-up-account-info.module.ts ***!
  \******************************************************************************/
/*! exports provided: TopUpAccountInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopUpAccountInfoPageModule", function() { return TopUpAccountInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _top_up_account_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-up-account-info.page */ "./src/app/pages/auth/top-up-account-info/top-up-account-info.page.ts");







var routes = [
    {
        path: '',
        component: _top_up_account_info_page__WEBPACK_IMPORTED_MODULE_6__["TopUpAccountInfoPage"]
    }
];
var TopUpAccountInfoPageModule = /** @class */ (function () {
    function TopUpAccountInfoPageModule() {
    }
    TopUpAccountInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_top_up_account_info_page__WEBPACK_IMPORTED_MODULE_6__["TopUpAccountInfoPage"]]
        })
    ], TopUpAccountInfoPageModule);
    return TopUpAccountInfoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/top-up-account-info/top-up-account-info.page.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/top-up-account-info/top-up-account-info.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <a class=\"Login-Link\" slot=\"end\">Login</a>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n<ion-content>\n<div class=\"container\">\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <div class=\"logo\"></div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n              <h3 class=\"warningMessage\">Credit Card Information</h3>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" style=\"padding:0;margin: 0\">\n              <span class=\"credit-span\">Card number</span>\n              <input type=\"number\" [(ngModel)]=\"Model.CreditCard\" class=\"creditcard-input\"/>            \n          </ion-col>\n          <ion-col size=\"6\" style=\"padding:0;margin: 0\"  class=\"creditcard-datepicker\">\n              <span class=\"credit-span\">Expire Date</span>\n              <ion-datetime min=\"2019\" max=\"2030\" display-format=\"MM , YYYY\" picker-format=\"MM YYYY\" [(ngModel)]=\"Model.ExpireDate\" style=\"padding-left:25px\"></ion-datetime>\n          </ion-col>\n          <ion-col size=\"6\" style=\"padding:0;margin: 0\" class=\"creditcard-cvv\">\n              <span class=\"credit-span\">CVV</span>\n              <input type=\"number\" [(ngModel)]=\"Model.CVV\" />\n          </ion-col>\n          <ion-col size=\"12\">\n              <span class=\"credit-span\">Name</span>\n              <input type=\"text\" [(ngModel)]=\"Model.Name\" class=\"creditcard-input\"/>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-fab-button class=\"next-button\" (click)=\"doNext()\">\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n    </ion-fab-button>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/auth/top-up-account-info/top-up-account-info.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/top-up-account-info/top-up-account-info.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvdG9wLXVwLWFjY291bnQtaW5mby90b3AtdXAtYWNjb3VudC1pbmZvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/auth/top-up-account-info/top-up-account-info.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/auth/top-up-account-info/top-up-account-info.page.ts ***!
  \****************************************************************************/
/*! exports provided: TopUpAccountInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopUpAccountInfoPage", function() { return TopUpAccountInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../..//services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var _services_constant_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/constant/constant.service */ "./src/app/services/constant/constant.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/themeable-browser/ngx */ "./node_modules/@ionic-native/themeable-browser/ngx/index.js");
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");












var TopUpAccountInfoPage = /** @class */ (function () {
    function TopUpAccountInfoPage(router, dataTransaction, restApi, api, platform, themeableBrowser, routerProvider, constantService, alert) {
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.restApi = restApi;
        this.api = api;
        this.platform = platform;
        this.themeableBrowser = themeableBrowser;
        this.routerProvider = routerProvider;
        this.constantService = constantService;
        this.alert = alert;
        this.Model = {
            Phone: '',
            CreditCard: '',
            ExpireDate: '',
            CVV: '',
            Name: '',
        };
        this.AccessToken = '';
        this.ErrorMessage = '';
        this.isMethodCalled = false;
        this.isDebug = false;
        this.isScriptExecuted = false;
        this.isStillHold = false;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
    }
    TopUpAccountInfoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getAccessToken().then(function (acc) {
            if (acc == null)
                console.log('access token does not detected');
            else {
                _this.AccessToken = acc.toString();
            }
        });
    };
    TopUpAccountInfoPage.prototype.doLogin = function () {
        this.router.navigate(['auth-phone']);
    };
    TopUpAccountInfoPage.prototype.doNext = function () {
        if (this.Model.CreditCard != '' && this.Model.ExpireDate != '' && this.Model.Name != '' && this.Model.CVV != '') {
            this.createOrder();
        }
    };
    //oderType = {CreditCard / All}
    TopUpAccountInfoPage.prototype.createOrder = function () {
        var _this = this;
        if (!this.isMethodCalled) {
            this.isMethodCalled = true;
            var url = 'https://test.paydollar.com/b2cDemo/eng/dPayment/payComp.jsp';
            var epYear_1 = this.Model.ExpireDate.substring(0, 4);
            var epMonth_1 = this.Model.ExpireDate.replace(epYear_1 + "-", '');
            if (!this.isDebug) {
                this.api.CreateOrder('Subscription', _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].orderAmount, this.AccessToken).then(function (response) {
                    if (response.status == 200) {
                        var result = _this.api.converResponseToJson(response.data);
                        if (result != null && result.ErrorCode == 0) {
                            var model = _this.createModel(result.Data, epMonth_1, epYear_1);
                            _this.createPaymentForm(model);
                        }
                        else {
                            _this.alert.showErrorMessageAlert("API Error = " + result.ErrorMessage);
                        }
                    }
                }).catch(function (error) {
                    _this.alert.showErrorMessageAlert("System Error " + error);
                });
            }
            else {
                this.restApi.CreateOrder('Subscription', _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].orderAmount, this.AccessToken).subscribe(function (response) {
                    console.log(response);
                    var result = _this.restApi.converResponseToJson(response);
                    if (result != null && result.ErrorCode == 0) {
                        var model = _this.createModel(result.Data, epMonth_1, epYear_1);
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
    TopUpAccountInfoPage.prototype.createModel = function (reponse, epMonth, epYear) {
        var model = {
            merchantId: reponse.MerchantId,
            amount: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].orderAmount,
            orderRef: reponse.OrderRef,
            successUrl: reponse.SuccessUrl,
            failUrl: reponse.FailUrl,
            errorUrl: reponse.ErrorUrl,
            secureHash: reponse.Hash,
            lang: "E",
            currCode: '458',
            payType: 'N',
            remark: 'JOMSAVE_KSJOA01B3YHD7dUS5CXX01HD6X64P0B1QDD',
            cardNo: this.Model.CreditCard,
            securityCode: this.Model.CVV,
            epMonth: epMonth,
            epYear: epYear,
            cardHolder: this.Model.Name,
            pMethod: this.constantService.GetCardType(this.Model.CreditCard)
        };
        this.alert.showErrorMessageAlert(JSON.stringify(model));
        return model;
    };
    TopUpAccountInfoPage.prototype.createPaymentForm = function (model) {
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
                _this.isStillHold = true;
                _this.isMethodCalled = false;
                _this.doCallGetProfile();
            });
            browser_1.on('loadstop').subscribe(function (data) {
                if (!_this.isScriptExecuted) {
                    browser_1.executeScript({ code: script }).then(function (response) {
                        _this.isScriptExecuted = true;
                    });
                }
            });
        }
        catch (err) {
            this.alert.showErrorMessageAlert(err);
        }
    };
    TopUpAccountInfoPage.prototype.doCallGetProfile = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.isStillHold) {
                _this.doGetProfile();
            }
        }, 5000);
    };
    TopUpAccountInfoPage.prototype.doGetProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isDebug) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.api.GetProfile(this.AccessToken).then(function (response) {
                                if (response.status == 200) {
                                    _this.isStillHold = false;
                                    var result = _this.api.converResponseToJson(response.data);
                                    _this.dataTransaction.setProfile(result.Data);
                                    _this.routerProvider.nextStep(result.Data.NextStep);
                                }
                            }).catch(function (error) {
                                _this.alert.showErrorMessageAlert(error);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.restApi.GetProfile(this.AccessToken).subscribe(function (response) {
                            var result = _this.restApi.converResponseToJson(response);
                            if (result != null) {
                                _this.isStillHold = false;
                                _this.dataTransaction.setProfile(result.Data);
                                _this.routerProvider.nextStep(result.Data.NextStep);
                            }
                            else {
                                _this.ErrorMessage = result.ErrorMessage;
                            }
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TopUpAccountInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-top-up-account-info',
            template: __webpack_require__(/*! ./top-up-account-info.page.html */ "./src/app/pages/auth/top-up-account-info/top-up-account-info.page.html"),
            styles: [__webpack_require__(/*! ./top-up-account-info.page.scss */ "./src/app/pages/auth/top-up-account-info/top-up-account-info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_1__["DataTransactionService"],
            _services_rest_api_service__WEBPACK_IMPORTED_MODULE_8__["RestApiService"],
            src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_9__["NativeApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["ThemeableBrowser"],
            src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_10__["RouteProviderService"],
            _services_constant_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_11__["AlertProviderService"]])
    ], TopUpAccountInfoPage);
    return TopUpAccountInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-top-up-account-info-top-up-account-info-module.js.map