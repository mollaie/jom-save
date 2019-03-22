import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataTransactionService } from 'src/app/services/data-transaction/data-transaction.service';
import { Router } from '@angular/router';
import { ConstantService } from 'src/app/services/constant/constant.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(dataTransaction, router, constantService, restApi, api, alertController) {
        var _this = this;
        this.dataTransaction = dataTransaction;
        this.router = router;
        this.constantService = constantService;
        this.restApi = restApi;
        this.api = api;
        this.alertController = alertController;
        this.Model = {
            Phone: '',
            Email: ''
        };
        this.isDebug = false;
        this.ErrorMessage = "";
        this.AccessToken = "";
        dataTransaction.getAccessToken().then(function (response) {
            _this.AccessToken = response;
        });
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getUserPhone().then(function (response) {
            console.log(response);
            if (response != null)
                _this.Model.Phone = "60" + response;
            else {
                alert('phone does not exists');
            }
        });
    };
    ForgotPasswordPage.prototype.doCancel = function () {
        this.router.navigate(['auth-password']);
    };
    ForgotPasswordPage.prototype.doNext = function () {
        var _this = this;
        if (this.doValidate()) {
            if (!this.isDebug) {
                this.api.RequestResetPassword("60" + this.Model.Phone, this.Model.Email, this.AccessToken).then(function (response) {
                    if (response.status == 200) {
                        var result = _this.api.converResponseToJson(response.data);
                        if (result.Data == "") {
                            _this.ErrorMessage = "this email is not registered with the <br/> mobile number.please check the <br/> email address above again.";
                        }
                        else {
                            _this.showAlert("Your password has been sent to <br/> " + _this.Model.Email + ".");
                        }
                    }
                });
            }
            else {
            }
        }
    };
    ForgotPasswordPage.prototype.showAlert = function (msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'JomSave',
                            subHeader: 'Reset Password',
                            message: msg,
                            buttons: [
                                {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.router.navigate(['auth-password']);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotPasswordPage.prototype.doValidate = function () {
        if (this.Model.Email != '') {
            var isValid = this.constantService.ValidateEmail(this.Model.Email);
            if (!isValid)
                this.ErrorMessage = "Input email is invalid";
            else
                this.ErrorMessage = "";
            return isValid;
        }
    };
    ForgotPasswordPage = tslib_1.__decorate([
        Component({
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.page.html',
            styleUrls: ['./forgot-password.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [DataTransactionService,
            Router,
            ConstantService,
            RestApiService,
            NativeApiService,
            AlertController])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());
export { ForgotPasswordPage };
//# sourceMappingURL=forgot-password.page.js.map