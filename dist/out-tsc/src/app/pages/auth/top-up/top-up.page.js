import * as tslib_1 from "tslib";
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { ConstantService } from './../../../services/constant/constant.service';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Platform } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest-api.service';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
import { ThemeableBrowser } from '@ionic-native/themeable-browser/ngx';
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { environment } from 'src/environments/environment';
var TopUpPage = /** @class */ (function () {
    function TopUpPage(router, dataTransaction, restApi, api, platform, themeableBrowser, routerProvider, constantService, alert) {
        var _this = this;
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
        router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd)
                _this.ngOnInit();
        });
    }
    TopUpPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getAccessToken().then(function (acc) {
            if (acc == null)
                console.log('access token does not detected');
            else {
                _this.AccessToken = acc.toString();
            }
        });
    };
    TopUpPage.prototype.doLogin = function () {
        this.router.navigate(['auth-phone']);
    };
    TopUpPage.prototype.doNext = function () {
    };
    TopUpPage.prototype.doCredit = function () {
        this.router.navigate(['top-up-account-info']);
    };
    TopUpPage.prototype.doBank = function () {
        this.createOrder();
    };
    TopUpPage.prototype.doSkip = function () {
        console.log('skip clicked');
        this.router.navigate(['change-password']);
    };
    //oderType = {CreditCard / All}
    TopUpPage.prototype.createOrder = function () {
        var _this = this;
        if (!this.isMethodCalled) {
            this.isMethodCalled = true;
            var url = 'https://test.paydollar.com/b2cDemo/eng/dPayment/payComp.jsp';
            var epYear_1 = this.Model.ExpireDate.substring(0, 4);
            var epMonth_1 = this.Model.ExpireDate.replace(epYear_1 + "-", '');
            if (!this.isDebug) {
                this.api.CreateOrder('Subscription', environment.orderAmount, this.AccessToken).then(function (response) {
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
                this.restApi.CreateOrder('Subscription', environment.orderAmount, this.AccessToken).subscribe(function (response) {
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
    TopUpPage.prototype.createModel = function (reponse, epMonth, epYear) {
        var model = {
            merchantId: reponse.MerchantId,
            amount: environment.orderAmount,
            orderRef: reponse.OrderRef,
            successUrl: reponse.SuccessUrl,
            failUrl: reponse.FailUrl,
            errorUrl: reponse.ErrorUrl,
            secureHash: reponse.Hash,
            lang: "E",
            currCode: '458',
            payType: 'N',
            remark: 'JOMSAVE_KSJOA01B3YHD7dUS5CXX01HD6X64P0B1QDD',
            cardNo: '',
            securityCode: '',
            epMonth: '',
            epYear: '',
            cardHolder: '',
            pMethod: 'MYCLEAR'
        };
        this.alert.showErrorMessageAlert(JSON.stringify(model));
        return model;
    };
    TopUpPage.prototype.createPaymentForm = function (model) {
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
    TopUpPage.prototype.doCallGetProfile = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.isStillHold) {
                _this.doGetProfile();
            }
        }, 5000);
    };
    TopUpPage.prototype.doGetProfile = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
    TopUpPage = tslib_1.__decorate([
        Component({
            selector: 'app-top-up',
            templateUrl: './top-up.page.html',
            styleUrls: ['./top-up.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            DataTransactionService,
            RestApiService,
            NativeApiService,
            Platform,
            ThemeableBrowser,
            RouteProviderService,
            ConstantService,
            AlertProviderService])
    ], TopUpPage);
    return TopUpPage;
}());
export { TopUpPage };
//# sourceMappingURL=top-up.page.js.map