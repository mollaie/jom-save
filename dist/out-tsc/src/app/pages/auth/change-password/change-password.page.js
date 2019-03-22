import * as tslib_1 from "tslib";
import { DataTransactionService } from './../../..//services/data-transaction/data-transaction.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NativeApiService } from '../../../services/native-api/native-api.service';
import { Platform } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(router, dataTransaction, api, platform, restApi, alert) {
        var _this = this;
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.api = api;
        this.platform = platform;
        this.restApi = restApi;
        this.alert = alert;
        this.ErrorMessage = '';
        this.AccessToken = '';
        this.isDebug = false;
        this.Model = {
            Phone: '',
            Password: '',
            NewPassword: '',
            ConfirmPassword: ''
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
    ChangePasswordPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getUserPhone().then(function (response) {
            _this.Model.Phone = response;
            _this.dataTransaction.getUserPassword().then(function (pass) {
                _this.Model.Password = pass;
            }).catch(function (error) {
                _this.ErrorMessage = error;
            });
        }).catch(function (error) {
            _this.ErrorMessage = error;
        });
    };
    ChangePasswordPage.prototype.doNext = function () {
        var _this = this;
        if (!this.doCheckPassword())
            return;
        if (!this.isDebug) {
            if (this.Model.NewPassword != this.Model.ConfirmPassword) {
                this.ErrorMessage = "The entered password and confirmation are equal.<br/> please check your entered values.";
                return;
            }
            if (this.Model.Password == '') {
                this.ErrorMessage = "The system can not detect your corrent password. <br/> please log out and login again.";
                return;
            }
            this.api.CreatePassword(this.Model.NewPassword, this.AccessToken)
                .then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode = "0") {
                        _this.alert.showErrorMessageAlert('Your password has been changed');
                        _this.router.navigate(['mail-confirmation']);
                    }
                    else {
                        _this.alert.showErrorMessageAlert(result.ErrorMessage);
                    }
                }
            }).catch(function (error) {
                _this.alert.showErrorMessageAlert(error);
            });
        }
        else {
            this.restApi.CreatePassword(this.Model.NewPassword, this.AccessToken).subscribe(function (response) {
                if (response.ErrorCode == "0") {
                    alert('Your password has been changed');
                    _this.router.navigate(['mail-confirmation']);
                }
                else {
                    _this.ErrorMessage = response.ErrorMessage;
                }
            });
        }
    };
    ChangePasswordPage.prototype.doCheckPassword = function () {
        this.ErrorMessage = "";
        if (this.Model.NewPassword.length < 8) {
            this.ErrorMessage = "Your password's length must be at least 8.";
            return false;
        }
        if (this.Model.NewPassword.includes(this.Model.Phone)) {
            this.ErrorMessage = "Password could not be a part of your phone number";
            return false;
        }
        return true;
    };
    ChangePasswordPage.prototype.doLogin = function () {
        this.router.navigate(['auth-phone']);
    };
    ChangePasswordPage = tslib_1.__decorate([
        Component({
            selector: 'app-change-password',
            templateUrl: './change-password.page.html',
            styleUrls: ['./change-password.page.scss'],
            providers: [
                NativeApiService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            DataTransactionService,
            NativeApiService,
            Platform,
            RestApiService,
            AlertProviderService])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());
export { ChangePasswordPage };
//# sourceMappingURL=change-password.page.js.map