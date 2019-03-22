import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { Router, NavigationEnd } from '@angular/router';
import { NativeApiService } from '../../../services/native-api/native-api.service';
import { Platform } from '@ionic/angular';
import { RestApiService } from '../../../services/rest-api.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
var ConfirmationPage = /** @class */ (function () {
    function ConfirmationPage(dataTransaction, router, api, platform, restApi, alert) {
        var _this = this;
        this.dataTransaction = dataTransaction;
        this.router = router;
        this.api = api;
        this.platform = platform;
        this.restApi = restApi;
        this.alert = alert;
        this.Model = {
            Phone: '',
            OTP: {
                Number1: '',
                Number2: '',
                Number3: '',
                Number4: '',
                Number5: '',
                Number6: ''
            }
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
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
    }
    ConfirmationPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getUserPhone().then(function (val) {
            if (val == undefined || val == '')
                _this.router.navigate(['auth-phone']);
            else {
                _this.Model.Phone = val.toString();
                _this.maxTime = _this.dataTransaction.OtpBlockDuration;
                _this.countdown();
                _this.dataTransaction.getAccessToken().then(function (acc) {
                    _this.AccessToken = acc.toString();
                });
            }
        });
        document.getElementById('number1').focus();
    };
    ConfirmationPage.prototype.countdown = function () {
        var _this = this;
        setTimeout(function (x) {
            if (_this.maxTime <= 0) { }
            _this.maxTime -= 1;
            if (_this.maxTime > 0) {
                _this.countdown();
                _this.CountDown = _this.parseTime(_this.maxTime);
            }
            else {
            }
        }, 1000);
    };
    ConfirmationPage.prototype.parseTime = function (secondes) {
        var result = "";
        var min = "00";
        var sec = "00";
        min = (Math.round(secondes / 60)).toString();
        sec = (secondes - (parseInt(min) * 60)).toString();
        result = min + ":" + sec;
        return result;
    };
    ConfirmationPage.prototype.doLogin = function () {
        this.router.navigate(['auth-phone']);
    };
    ConfirmationPage.prototype.doNext = function () {
        document.getElementById('OTPMessage').style.display = "none";
        this.router.navigate(['referral']);
    };
    ConfirmationPage.prototype.doCancel = function () {
        this.router.navigate(['auth-phone']);
    };
    ConfirmationPage.prototype.doForgotPassword = function () {
        this.router.navigate(['forgot-password']);
    };
    ConfirmationPage.prototype.doResendOTP = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (!this.isDebug) {
                    this.api.PreRegister("60" + this.Model.Phone)
                        .then(function (response) {
                        if (response.status == 200) {
                            var result = _this.api.converResponseToJson(response.data);
                            //update user data 
                            _this.dataTransaction.OtpBlockDuration = result.Data.OtpBlockDuration;
                            _this.ngOnInit();
                        }
                        else {
                            _this.alert.showErrorMessageAlert(response.error);
                        }
                    }).catch(function (error) {
                        _this.alert.showErrorMessageAlert(error);
                    });
                }
                else {
                    this.restApi.PreRegister("60" + this.Model.Phone)
                        .subscribe(function (response) {
                        var result = _this.restApi.converResponseToJson(response.Data);
                        _this.dataTransaction.setAccessToken(result.OtpBlockDuration);
                        _this.ngOnInit();
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    ConfirmationPage.prototype.doTextChange = function (event) {
        if (("" + event.target.value).length > 1) {
            event.target.value = event.target.value.slice(0, 1);
        }
        switch (event.target.id) {
            case "number1":
                if (("" + event.target.value).length > 0)
                    document.getElementById('number2').focus();
                break;
            case "number2":
                if (("" + event.target.value).length > 0)
                    document.getElementById('number3').focus();
                break;
            case "number3":
                if (("" + event.target.value).length > 0)
                    document.getElementById('number4').focus();
                break;
            case "number4":
                if (("" + event.target.value).length > 0)
                    document.getElementById('number5').focus();
                break;
            case "number5":
                if (("" + event.target.value).length > 0)
                    document.getElementById('number6').focus();
                break;
            case "number6":
                if (("" + event.target.value).length > 0) {
                    var optNumber = "" + this.Model.OTP.Number1 + this.Model.OTP.Number2 + this.Model.OTP.Number3 + this.Model.OTP.Number4 + this.Model.OTP.Number5 + this.Model.OTP.Number6;
                    this.doCheckOTP(optNumber);
                }
                break;
        }
    };
    ConfirmationPage.prototype.onFocus = function (event) {
        event.target.select();
    };
    ConfirmationPage.prototype.doCheckOTP = function (value) {
        var _this = this;
        if (!this.isDebug) {
            this.api.Register("60" + this.Model.Phone, value, this.AccessToken)
                .then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    _this.dataTransaction.setAccessToken(result.Data.NewAccessToken);
                    _this.dataTransaction.setNewRefreshToken(result.Data.NewRefreshToken);
                    _this.doNext();
                }
                else {
                    _this.alert.showErrorMessageAlert(response.error);
                }
            }).catch(function (error) {
                _this.alert.showErrorMessageAlert(error);
            });
        }
        else {
            this.restApi.Register("60" + this.Model.Phone, value, this.AccessToken).subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response.Data);
                console.log(response);
                _this.dataTransaction.setAccessToken(result.NewAccessToken);
                _this.dataTransaction.setNewRefreshToken(result.NewRefreshToken);
                _this.doNext();
            });
        }
    };
    ConfirmationPage.prototype.doShowWrongOTPMessage = function (value) {
        document.getElementById('OTPMessage').style.display = "block";
    };
    ConfirmationPage = tslib_1.__decorate([
        Component({
            selector: 'app-confirmation',
            templateUrl: './confirmation.page.html',
            styleUrls: ['./confirmation.page.scss'],
            providers: [
                NativeApiService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [DataTransactionService,
            Router,
            NativeApiService,
            Platform,
            RestApiService,
            AlertProviderService])
    ], ConfirmationPage);
    return ConfirmationPage;
}());
export { ConfirmationPage };
//# sourceMappingURL=confirmation.page.js.map