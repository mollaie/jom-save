import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DataTransactionService } from '../data-transaction/data-transaction.service';
import { NativeApiService } from '../native-api/native-api.service';
import { RestApiService } from '../rest-api.service';
import { Platform, AlertController } from '@ionic/angular';
import { RouteProviderService } from '../route-provider/route-provider.service';
var ForgotPasswordService = /** @class */ (function () {
    function ForgotPasswordService(data, api, restApi, router, platform, alertController) {
        this.data = data;
        this.api = api;
        this.restApi = restApi;
        this.router = router;
        this.platform = platform;
        this.alertController = alertController;
        this.isDebug = false;
        this.Mobile = "";
        this.AccessToken = "";
        if (platform.is('cordova'))
            this.isDebug = false;
        this.isDebug = true;
    }
    ForgotPasswordService.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUserPhone().then(function (response) {
            _this.Mobile = response;
        }).catch(function () {
            _this.phoneNotRegisterAlert();
        });
        this.data.getAccessToken().then(function (Response) {
            _this.AccessToken = Response;
        });
    };
    ForgotPasswordService.prototype.preRequestResetPassword = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.PreRequestResetPassword(this.Mobile, this.AccessToken).then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                }
            });
        }
        else {
        }
    };
    ForgotPasswordService.prototype.phoneNotRegisterAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Jom-Save',
                            subHeader: 'Warning',
                            message: 'The phone is not registered.',
                            buttons: ['OK']
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
    ForgotPasswordService.prototype.emailNotRegisteredAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Jom-Save',
                            message: 'Your password will be reset and a new <br/> password will be sent to your <br/> mobile number',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.router.nextStep("Password");
                                    }
                                }, {
                                    text: 'Proceed',
                                    handler: function () {
                                        _this.doProceed();
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
    ForgotPasswordService.prototype.doProceed = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.PreRequestResetPassword(this.Mobile, this.AccessToken).then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.Data == "") {
                    }
                    else {
                        _this.showAlert("Your password has been sent to your mobile " + _this.Mobile);
                    }
                }
            });
        }
        else {
        }
    };
    ForgotPasswordService.prototype.showAlert = function (msg) {
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
                                        _this.router.nextStep("Password");
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
    ForgotPasswordService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [DataTransactionService,
            NativeApiService,
            RestApiService,
            RouteProviderService,
            Platform,
            AlertController])
    ], ForgotPasswordService);
    return ForgotPasswordService;
}());
export { ForgotPasswordService };
//# sourceMappingURL=forgot-password.service.js.map