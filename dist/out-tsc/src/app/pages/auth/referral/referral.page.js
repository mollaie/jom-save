import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { Router, NavigationEnd } from '@angular/router';
import { NativeApiService } from '../../../services/native-api/native-api.service';
import { ZBar } from '@ionic-native/zbar/ngx';
import { RouteProviderService } from '../../../services/route-provider/route-provider.service';
import { Platform, LoadingController } from '@ionic/angular';
import { RestApiService } from '../../../services/rest-api.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
var ReferralPage = /** @class */ (function () {
    function ReferralPage(dataTransaction, router, zbar, api, routeProvider, platform, loading, restApi, alert) {
        var _this = this;
        this.dataTransaction = dataTransaction;
        this.router = router;
        this.zbar = zbar;
        this.api = api;
        this.routeProvider = routeProvider;
        this.platform = platform;
        this.loading = loading;
        this.restApi = restApi;
        this.alert = alert;
        this.Model = {
            Phone: '',
            Referral: '',
            ScannData: {},
        };
        this.UserInfo = {
            UserId: 0,
            DisplayName: '',
            Photo: '',
            Roles: ''
        };
        this.ErrorMessage = '';
        this.isDebug = false;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd)
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
    }
    ReferralPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getUserPhone().then(function (val) {
            if (val == undefined || val == '')
                _this.router.navigate(['auth-phone']);
            else {
                _this.Model.Phone = val.toString();
                _this.dataTransaction.getAccessToken().then(function (acc) {
                    _this.AccessToken = acc.toString();
                });
            }
        });
    };
    ReferralPage.prototype.doLogin = function () {
        this.router.navigate(['auth-phone']);
    };
    ReferralPage.prototype.doNext = function () {
        this.doSetUpline();
    };
    ReferralPage.prototype.doCancel = function () {
        this.router.navigate(['auth-phone']);
    };
    ReferralPage.prototype.doForgotPassword = function () {
    };
    ReferralPage.prototype.doSkip = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.SetUpline('0', this.AccessToken).then(function (response) {
                var result = _this.api.converResponseToJson(response.data);
                if (response.status == 200) {
                    _this.routeProvider.nextStep(result.Data.NextStep);
                }
                else {
                    _this.alert.showErrorMessageAlert(result.ErrorMessage);
                }
            }, function (error) {
                _this.alert.showErrorMessageAlert(error);
                _this.ErrorMessage = error;
            });
        }
        else {
            this.restApi.SetUpline('0', this.AccessToken).subscribe(function (response) {
                var result = _this.api.converResponseToJson(response);
                if (result.ErrorCode == "0") {
                    _this.routeProvider.nextStep(result.Data.NextStep);
                }
                else {
                    _this.ErrorMessage = result.ErrorMessage;
                }
            }, function (error) {
                _this.ErrorMessage = error;
            });
        }
    };
    ReferralPage.prototype.doScanCode = function () {
        var _this = this;
        this.zbar.scan(this.zbarOptions)
            .then(function (result) {
            _this.Model.Referral = result;
            _this.doGetUserInfo();
        })
            .catch(function (error) {
            alert(error); // Error message
        });
    };
    ReferralPage.prototype.doEncodedText = function () {
    };
    ReferralPage.prototype.doGetUserInfo = function () {
        var _this = this;
        if (this.Model.Referral != '' && this.Model.Referral.length == 6) {
            if (!this.isDebug) {
                this.api.GetUserInfo(this.Model.Referral, this.AccessToken).then(function (response) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (response.status == 200) {
                        _this.presentLoading();
                        _this.UserInfo = result.Data;
                    }
                    else {
                        _this.UserInfo = {
                            UserId: 0,
                            DisplayName: '',
                            Photo: '',
                            Roles: ''
                        };
                        _this.alert.showErrorMessageAlert(result.ErrorMessage);
                    }
                }, function (error) {
                    _this.UserInfo = {
                        UserId: 0,
                        DisplayName: '',
                        Photo: '',
                        Roles: ''
                    };
                    _this.alert.showErrorMessageAlert(error);
                });
            }
            else {
                this.restApi.GetUserInfo(this.Model.Referral, this.AccessToken).subscribe(function (response) {
                    var result = _this.restApi.converResponseToJson(response);
                    console.log(result);
                    if (result.ErrorCode == "0") {
                        _this.presentLoading();
                        _this.UserInfo = result.Data;
                    }
                    else {
                        _this.UserInfo = {
                            UserId: 0,
                            DisplayName: '',
                            Photo: '',
                            Roles: ''
                        };
                        _this.ErrorMessage = "Member doesn't exist.";
                    }
                });
            }
        }
    };
    ReferralPage.prototype.presentLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.create({
                            message: 'Please wait',
                            duration: 500
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReferralPage.prototype.doSetUpline = function () {
        var _this = this;
        if (this.UserInfo.UserId == 0)
            return;
        if (!this.isDebug) {
            this.api.SetUpline(this.UserInfo.UserId, this.AccessToken).then(function (response) {
                var result = _this.api.converResponseToJson(response.data);
                if (response.status == 200) {
                    _this.routeProvider.nextStep(result.Data.NextStep);
                }
                else {
                    _this.alert.showErrorMessageAlert(result.ErrorMessage);
                }
            }, function (error) {
                _this.alert.showErrorMessageAlert(error);
            });
        }
        else {
            this.api.SetUpline(this.UserInfo.UserId, this.AccessToken).then(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == "0") {
                    _this.routeProvider.nextStep(result.Data.NextStep);
                }
                else {
                    _this.ErrorMessage = result.ErrorMessage;
                }
            }, function (error) {
                _this.ErrorMessage = error;
            });
        }
    };
    ReferralPage = tslib_1.__decorate([
        Component({
            selector: 'app-referral',
            templateUrl: './referral.page.html',
            styleUrls: ['./referral.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [DataTransactionService,
            Router,
            ZBar,
            NativeApiService,
            RouteProviderService,
            Platform,
            LoadingController,
            RestApiService,
            AlertProviderService])
    ], ReferralPage);
    return ReferralPage;
}());
export { ReferralPage };
//# sourceMappingURL=referral.page.js.map