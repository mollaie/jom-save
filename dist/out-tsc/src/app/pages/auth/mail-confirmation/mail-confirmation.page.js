import * as tslib_1 from "tslib";
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NativeApiService } from '../../../services/native-api/native-api.service';
import { Platform } from '@ionic/angular';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';
var MailConfirmationPage = /** @class */ (function () {
    function MailConfirmationPage(router, dataTransaction, api, platform, alert, restApi, routerProvider) {
        var _this = this;
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.api = api;
        this.platform = platform;
        this.alert = alert;
        this.restApi = restApi;
        this.routerProvider = routerProvider;
        this.AccessToken = '';
        this.ErrorMessage = '';
        this.BlockDuration = 0;
        this.BlockDurationText = '00:00';
        this.isUserHold = false;
        this.isDebug = false;
        this.Model = {
            Phone: '',
            MailConfirmation: '',
            Resouses: {
                PhoneIcon: '',
                WorldPicture: '',
                PasswordIcon: '',
                ConfirmPassword: '',
                MailConfirmation: '',
                UserHold: ''
            }
        };
        this.dataTransaction.getAccessToken().then(function (token) {
            _this.AccessToken = token;
        }).catch(function (error) {
            _this.ErrorMessage = "The system can not detect your corrent password. <br/> please log out and login again.";
        });
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
    }
    MailConfirmationPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getUserPhone().then(function (response) {
            _this.Model.Phone = response;
        }).catch(function (error) {
            _this.alert.showErrorMessageAlert(error);
        });
    };
    MailConfirmationPage.prototype.doNext = function () {
        var _this = this;
        if (!this.isDebug) {
            this.dataTransaction.setEmail(this.Model.MailConfirmation);
            this.api.RequestEmailVerification(this.Model.MailConfirmation, this.AccessToken)
                .then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                        _this.BlockDuration = parseInt(result.Data.BlockDuration);
                        _this.doHoldUser();
                    }
                    else {
                        _this.alert.showErrorMessageAlert(result.ErrorMessage);
                    }
                }
                else {
                    _this.alert.showErrorMessageAlert(response.error);
                }
            }, function (error) {
                _this.alert.showErrorMessageAlert(error);
            });
        }
        else {
            this.dataTransaction.setEmail(this.Model.MailConfirmation);
            this.restApi.RequestEmailVerification(this.Model.MailConfirmation, this.AccessToken).subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == "0") {
                    _this.BlockDuration = parseInt(result.Data.BlockDuration);
                    _this.doHoldUser();
                }
                else {
                    _this.ErrorMessage = result.ErrorMessage;
                }
            });
        }
    };
    MailConfirmationPage.prototype.doHoldUser = function () {
        this.isUserHold = true;
        this.countdown();
        this.requestCountDown();
    };
    MailConfirmationPage.prototype.requestCountDown = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, setInterval(function () {
                            _this.doVerifyEmail();
                        }, 5000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MailConfirmationPage.prototype.countdown = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, setTimeout(function (x) {
                            if (_this.BlockDuration <= 0) { }
                            _this.BlockDuration -= 1;
                            if (_this.BlockDuration > 0) {
                                _this.countdown();
                                _this.BlockDurationText = _this.parseTime(_this.BlockDuration);
                            }
                            else {
                                _this.isUserHold = false;
                            }
                        }, 1000)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MailConfirmationPage.prototype.parseTime = function (secondes) {
        var result = "";
        var min = "00";
        var sec = "00";
        min = (Math.round(secondes / 60)).toString();
        sec = (secondes - (parseInt(min) * 60)).toString();
        result = min + ":" + sec;
        return result;
    };
    MailConfirmationPage.prototype.doVerifyEmail = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.GetProfile(this.AccessToken).then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.Data.NextStep != 'VerifyEmail') {
                        _this.isUserHold = false;
                        _this.BlockDuration = 0;
                        _this.routerProvider.nextStep(result.Data.NextStep);
                    }
                }
                else {
                    _this.alert.showErrorMessageAlert(response.error);
                }
            }).catch(function (error) { return _this.alert.showErrorMessageAlert(error); });
        }
        else {
            this.restApi.GetProfile(this.AccessToken).subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == "0") {
                    if (result.Data.NextStep != 'VerifyEmail') {
                        _this.isUserHold = false;
                        _this.BlockDuration = 0;
                        _this.routerProvider.nextStep(result.Data.NextStep);
                    }
                }
            });
        }
    };
    MailConfirmationPage.prototype.doLogin = function () {
        this.router.navigate(['auth-phone']);
    };
    MailConfirmationPage = tslib_1.__decorate([
        Component({
            selector: 'app-mail-confirmation',
            templateUrl: './mail-confirmation.page.html',
            styleUrls: ['./mail-confirmation.page.scss'],
            providers: [
                NativeApiService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            DataTransactionService,
            NativeApiService,
            Platform,
            AlertProviderService,
            RestApiService,
            RouteProviderService])
    ], MailConfirmationPage);
    return MailConfirmationPage;
}());
export { MailConfirmationPage };
//# sourceMappingURL=mail-confirmation.page.js.map