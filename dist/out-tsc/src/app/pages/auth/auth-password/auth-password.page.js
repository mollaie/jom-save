import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { NativeApiService } from '../../../services/native-api/native-api.service';
import { Platform } from '@ionic/angular';
import { RestApiService } from '../../../services/rest-api.service';
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
var AuthPasswordPage = /** @class */ (function () {
    function AuthPasswordPage(router, dataTransaction, api, platform, restApi, routerProvider, alert) {
        var _this = this;
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.api = api;
        this.platform = platform;
        this.restApi = restApi;
        this.routerProvider = routerProvider;
        this.alert = alert;
        this.Model = {
            Phone: '',
            Password: '',
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
    AuthPasswordPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getUserPhone().then(function (val) {
            if (val == undefined || val == '')
                _this.router.navigate(['auth-phone']);
            else {
                _this.Model.Phone = val;
                _this.Model.Password = '';
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    AuthPasswordPage.prototype.doNext = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.Login("60" + this.Model.Phone, this.Model.Password, "FreeMember")
                .then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    _this.dataTransaction.setUserPhone(_this.Model.Phone);
                    _this.dataTransaction.setUserPassword(_this.Model.Password);
                    _this.dataTransaction.setAccessToken(result.Data.NewAccessToken);
                    _this.dataTransaction.setNewRefreshToken(result.Data.NewRefreshToken);
                    _this.doGetProfile(result.Data.NewAccessToken);
                }
            }).catch(function (error) {
                _this.alert.showErrorMessageAlert(error);
            });
        }
        else {
            this.restApi.Login("60" + this.Model.Phone, this.Model.Password, "FreeMember")
                .subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response.Data);
                _this.dataTransaction.setUserPhone(_this.Model.Phone);
                _this.dataTransaction.setUserPassword(_this.Model.Password);
                _this.dataTransaction.setAccessToken(result.NewAccessToken);
                _this.dataTransaction.setNewRefreshToken(result.NewRefreshToken);
                _this.doGetProfile(result.NewAccessToken);
            }, function (error) {
                _this.alert.showErrorMessageAlert(error);
            });
        }
    };
    AuthPasswordPage.prototype.doGetProfile = function (AccessToken) {
        var _this = this;
        if (!this.isDebug) {
            this.api.GetProfile(AccessToken).then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                        _this.dataTransaction.setProfile(result.Data);
                        _this.routerProvider.nextStep(result.Data.NextStep);
                    }
                    else {
                        _this.alert.showErrorMessageAlert(result.ErrorMessage);
                    }
                }
            }).catch(function (error) { return _this.alert.showErrorMessageAlert(error); });
        }
        else {
            this.restApi.GetProfile(AccessToken).subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == "0") {
                    _this.dataTransaction.setProfile(result.Data);
                    _this.routerProvider.nextStep(result.Data.NextStep);
                }
                else {
                    _this.ErrorMessage = result.ErrorMessage;
                }
            }, function (error) {
                _this.ErrorMessage = error;
            });
        }
    };
    AuthPasswordPage.prototype.doForgotPassword = function () {
        this.router.navigate(['forgot-password']);
    };
    AuthPasswordPage.prototype.doCancel = function () {
        this.router.navigate(['auth-phone']);
    };
    AuthPasswordPage = tslib_1.__decorate([
        Component({
            selector: 'app-auth-password',
            templateUrl: './auth-password.page.html',
            styleUrls: ['./auth-password.page.scss'],
            providers: [
                NativeApiService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            DataTransactionService,
            NativeApiService,
            Platform,
            RestApiService,
            RouteProviderService,
            AlertProviderService])
    ], AuthPasswordPage);
    return AuthPasswordPage;
}());
export { AuthPasswordPage };
//# sourceMappingURL=auth-password.page.js.map