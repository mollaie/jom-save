import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ThemeableBrowser } from '@ionic-native/themeable-browser/ngx';
import { RestApiService } from '../../../services/rest-api.service';
import { environment } from '../../../../environments/environment.prod';
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { Router, NavigationEnd } from '@angular/router';
import { Platform } from '@ionic/angular';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
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
            if (event instanceof NavigationEnd)
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
                this.api.CreateOrder(this.orderType, environment.orderAmount, this.AccessToken).then(function (response) {
                    console.log(response);
                    var result = _this.api.converResponseToJson(response.data);
                    if (result != null && result.ErrorCode == 0) {
                        var model = {
                            merchantId: result.Data.MerchantId,
                            amount: environment.orderAmount,
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
                this.restApi.CreateOrder(this.orderType, environment.orderAmount, this.AccessToken).subscribe(function (response) {
                    console.log(response);
                    var result = _this.api.converResponseToJson(response);
                    if (result != null && result.ErrorCode == 0) {
                        var model = {
                            MerchantId: result.Data.MerchantId,
                            amount: environment.orderAmount,
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
    TopUpViewerPage = tslib_1.__decorate([
        Component({
            selector: 'app-top-up-viewer',
            templateUrl: './top-up-viewer.page.html',
            styleUrls: ['./top-up-viewer.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ThemeableBrowser,
            RestApiService,
            NativeApiService,
            Router,
            DataTransactionService,
            Platform])
    ], TopUpViewerPage);
    return TopUpViewerPage;
}());
export { TopUpViewerPage };
//# sourceMappingURL=top-up-viewer.page.js.map