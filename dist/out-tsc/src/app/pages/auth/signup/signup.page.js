import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { Router, NavigationEnd } from '@angular/router';
import { NativeApiService } from '../../../services/native-api/native-api.service';
import { Platform } from '@ionic/angular';
import { RestApiService } from '../../../services/rest-api.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
var SignupPage = /** @class */ (function () {
    function SignupPage(dataTransaction, router, api, platform, restApi, alert) {
        var _this = this;
        this.dataTransaction = dataTransaction;
        this.router = router;
        this.api = api;
        this.platform = platform;
        this.restApi = restApi;
        this.alert = alert;
        this.Model = {
            Phone: '',
            Over18: false,
            AgreeWithTerms: false,
        };
        this.ErrorMessage = '';
        this.isDebug = false;
        router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd)
                _this.ngOnInit();
        });
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
    }
    SignupPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getUserPhone().then(function (val) {
            if (val == undefined || val == '')
                _this.router.navigate(['auth-phone']);
            else {
                _this.Model.Phone = "60" + val;
            }
        });
    };
    SignupPage.prototype.doLogin = function () {
        this.router.navigate(['auth-phone']);
    };
    SignupPage.prototype.doNext = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.PreRegister(this.Model.Phone).then(function (response) {
                var result = _this.api.converResponseToJson(response.data);
                if (response.status == 200) {
                    if (result.Data != undefined) {
                        _this.dataTransaction.setAccessToken(result.Data.OtpBlockDuration);
                        _this.router.navigate(['confirmation']);
                    }
                    if (result.ErrorCode == 2007) {
                        _this.alert.showErrorMessageAlert(result.ErrorMessage);
                        _this.router.navigate(['confirmation']);
                    }
                }
                else {
                    _this.alert.showErrorMessageAlert(result.ErrorMessage);
                }
            }).catch(function (error) {
                _this.alert.showErrorMessageAlert(error);
            });
        }
        else {
            this.restApi.PreRegister(this.Model.Phone).subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response.Data);
                _this.dataTransaction.setAccessToken(result.OtpBlockDuration);
                _this.router.navigate(['confirmation']);
            });
        }
    };
    SignupPage.prototype.doCancel = function () {
        this.router.navigate(['auth-phone']);
    };
    SignupPage.prototype.doForgotPassword = function () {
    };
    SignupPage = tslib_1.__decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.page.html',
            styleUrls: ['./signup.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [DataTransactionService,
            Router,
            NativeApiService,
            Platform,
            RestApiService,
            AlertProviderService])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.page.js.map