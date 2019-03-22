import * as tslib_1 from "tslib";
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NativeApiService } from '../../../services/native-api/native-api.service';
import { Platform, LoadingController } from '@ionic/angular';
import { RestApiService } from '../../../services/rest-api.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
var AuthPhonePage = /** @class */ (function () {
    function AuthPhonePage(router, dataTransaction, api, platform, restApi, loadingCtrl, alert) {
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.api = api;
        this.platform = platform;
        this.restApi = restApi;
        this.loadingCtrl = loadingCtrl;
        this.alert = alert;
        this.Model = {
            Phone: '',
            Password: '',
            Resouses: {
                PhoneIcon: '',
                WorldPicture: '',
            }
        };
        this.isDebug = false;
        this.ErrorMessage = '';
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
    }
    AuthPhonePage.prototype.ngOnInit = function () {
        var _this = this;
        this.Model.Phone = "";
        this.dataTransaction.getUserPhone().then(function (response) { if (response == null)
            _this.dataTransaction.setUserPhone('11111111111'); });
    };
    AuthPhonePage.prototype.doLogin = function () {
        this.router.navigate(['auth-password']);
    };
    AuthPhonePage.prototype.doRegister = function () {
        var _this = this;
        this.dataTransaction.getUserPhone().then(function (response) {
            if (response != null && response != '' && response != '11111111111') {
                _this.router.navigate(['signup']);
            }
        });
    };
    AuthPhonePage.prototype.doNext = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var load;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            spinner: 'dots',
                            duration: 5000,
                            message: 'Please Wait ...',
                        })];
                    case 1:
                        load = _a.sent();
                        return [4 /*yield*/, load.present()];
                    case 2:
                        _a.sent();
                        if (!this.isDebug) {
                            this.api.IsMobileRgistered("60" + this.Model.Phone)
                                .then(function (response) {
                                load.dismiss();
                                if (response.status == 200) {
                                    var result = _this.api.converResponseToJson(response.data);
                                    if (result.Data.IsRegistered == "0") {
                                        _this.dataTransaction.setUserPhone(_this.Model.Phone);
                                        _this.doRegister();
                                    }
                                    else {
                                        _this.dataTransaction.setUserPhone(_this.Model.Phone);
                                        _this.doLogin();
                                    }
                                }
                                else {
                                    _this.alert.showErrorMessageAlert(response.error);
                                }
                            })
                                .catch(function (error) {
                                _this.alert.showErrorMessageAlert(error);
                            });
                        }
                        else {
                            this.restApi.IsMobileRgistered("60" + this.Model.Phone)
                                .subscribe(function (response) {
                                load.dismiss();
                                var result = _this.restApi.converResponseToJson(response);
                                if (result.Data.IsRegistered == "0") {
                                    _this.dataTransaction.setUserPhone(_this.Model.Phone);
                                    _this.doRegister();
                                }
                                else {
                                    _this.dataTransaction.setUserPhone(_this.Model.Phone);
                                    _this.doLogin();
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthPhonePage.prototype.doForgotPassword = function () {
    };
    AuthPhonePage = tslib_1.__decorate([
        Component({
            selector: 'app-auth-phone',
            templateUrl: './auth-phone.page.html',
            styleUrls: ['./auth-phone.page.scss'],
            providers: [
                NativeApiService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            DataTransactionService,
            NativeApiService,
            Platform,
            RestApiService,
            LoadingController,
            AlertProviderService])
    ], AuthPhonePage);
    return AuthPhonePage;
}());
export { AuthPhonePage };
//# sourceMappingURL=auth-phone.page.js.map