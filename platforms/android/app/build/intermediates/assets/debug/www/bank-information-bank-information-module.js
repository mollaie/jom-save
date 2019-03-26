(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bank-information-bank-information-module"],{

/***/ "./src/app/pages/profile/bank-information/bank-information.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/bank-information/bank-information.module.ts ***!
  \***************************************************************************/
/*! exports provided: BankInformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankInformationPageModule", function() { return BankInformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bank_information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bank-information.page */ "./src/app/pages/profile/bank-information/bank-information.page.ts");







var routes = [
    {
        path: '',
        component: _bank_information_page__WEBPACK_IMPORTED_MODULE_6__["BankInformationPage"]
    }
];
var BankInformationPageModule = /** @class */ (function () {
    function BankInformationPageModule() {
    }
    BankInformationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bank_information_page__WEBPACK_IMPORTED_MODULE_6__["BankInformationPage"]]
        })
    ], BankInformationPageModule);
    return BankInformationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/bank-information/bank-information.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/bank-information/bank-information.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\"></ion-back-button>\n      <ion-title class=\"text-center\">Bank Information</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"account-info\">\n          <img src='../../assets/images/icon-fullname.svg' />\n          <input type=\"text\" [(ngModel)]=\"Model.AccountHolderName\" />\n          <span>Fullname / Company Name</span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class=\"account-info\">\n          <img src='../../assets/images/icon-ID.svg' />\n          <select [(ngModel)]=\"Model.IdentityType\" >\n            <option value=\"NewIc\">New Ic</option>\n            <option value=\"Passport\">Passport</option>\n            <option value=\"Business Registration Number\">Business Registration Number</option>\n          </select>\n          <br />\n          <br />\n          <input type=\"text\" [(ngModel)]=\"Model.IdentityNo\" />\n        </div>\n      </ion-col>\n    </ion-row>\n    <br />\n    <ion-row>\n      <ion-col>\n        <div class=\"account-info\">\n          <img src='../../assets/images/icon-bank.svg' />\n          <select [(ngModel)]=\"Model.BankId\">\n            <option *ngFor=\"let item of BankList\" value={{item.Id}}>{{item.Name}}</option>\n          </select>\n          <br />\n          <br />\n          <input type=\"text\" [(ngModel)]=\"Model.BankName\" />\n          <br />\n          <br />\n        </div>\n      </ion-col>\n    </ion-row>\n    <br />\n    <ion-row>\n      <ion-col>\n        <div class=\"account-info\">\n          <img src='../../assets/images/icon-bank-account.svg' />\n          <input type=\"text\" [(ngModel)]=\"Model.AccountNo\" />\n          <span>Bank Account Number</span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <br/>\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <a (click)=\"uploadStatement()\">Upload Statement</a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button class=\"next-button\" (click)=\"doNext()\">\n      <ion-icon name=\"arrow-forward\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/bank-information/bank-information.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/profile/bank-information/bank-information.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvYmFuay1pbmZvcm1hdGlvbi9iYW5rLWluZm9ybWF0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profile/bank-information/bank-information.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/bank-information/bank-information.page.ts ***!
  \*************************************************************************/
/*! exports provided: BankInformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankInformationPage", function() { return BankInformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");










var BankInformationPage = /** @class */ (function () {
    function BankInformationPage(alertController, router, dataTransaction, platform, api, loadingCtrl, restApi, alert, camera, routerProvider) {
        var _this = this;
        this.alertController = alertController;
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.platform = platform;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.restApi = restApi;
        this.alert = alert;
        this.camera = camera;
        this.routerProvider = routerProvider;
        this.Model = {
            AccountNo: '',
            AccountHolderName: '',
            IdentityType: '',
            IdentityNo: '',
            BankId: '',
            BankName: '',
            Statement: '',
            Status: '',
            CurrentPassword: ''
        };
        this.isDebug = false;
        this.ErrorMessage = '';
        this.BankList = [{
                Name: '',
                Id: 0
            }];
        this.CurrentPassword = '';
        if (platform.is('cordova')) {
            this.isDebug = false;
        }
        else
            this.isDebug = true;
        this.dataTransaction.getAccessToken().then(function (acc) {
            _this.AccessToken = acc.toString();
            _this.doGetBanks();
            _this.doGetBankInformation();
        });
    }
    BankInformationPage.prototype.ngOnInit = function () {
    };
    BankInformationPage.prototype.doGetBanks = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.GetBanks(this.AccessToken).then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == 0) {
                        _this.BankList = result.Data.Banks;
                    }
                    else {
                        _this.alert.presentToast(result.ErrorMessage);
                        if (result.ErrorCode == 1002) {
                            _this.dataTransaction.logOut();
                            _this.routerProvider.nextStep('Phone');
                        }
                    }
                }
                else {
                    _this.alert.presentToast(response.error);
                }
            }).catch(function (error) {
                _this.alert.presentToast(error);
            });
        }
        else {
            this.restApi.GetBanks(this.AccessToken).subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == 0) {
                    _this.BankList = result.Data.Banks;
                    console.log(result.Data.Banks);
                }
                else {
                    _this.ErrorMessage = result.ErrorMessage;
                }
            }, function (error) {
                _this.ErrorMessage = error;
            });
        }
    };
    BankInformationPage.prototype.doGetBankInformation = function () {
        var _this = this;
        if (!this.isDebug) {
            this.api.GetBankInfo(this.AccessToken).then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                        _this.Model = result.Data;
                    }
                    else {
                        _this.alert.presentToast(result.ErrorMessage);
                        if (result.ErrorCode == 1002) {
                            _this.dataTransaction.logOut();
                            _this.routerProvider.nextStep('Phone');
                        }
                    }
                }
                else {
                    _this.alert.presentToast(response.error);
                }
            }).catch(function (error) {
                _this.alert.presentToast(error);
            });
        }
        else {
            this.restApi.GetBankInfo(this.AccessToken).subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == 0) {
                    _this.Model = result.Data;
                }
                else {
                    _this.ErrorMessage = result.ErrorMessage;
                }
            }, function (error) {
                _this.ErrorMessage = error;
            });
        }
    };
    BankInformationPage.prototype.doNext = function () {
        var _this = this;
        this.Model.Statement = 'https://outlook.office365.com/owa/';
        if (!this.isDebug) {
            this.api.EditBankInfo(this.Model.AccountNo, this.Model.AccountHolderName, this.Model.IdentityType, this.Model.IdentityNo, this.Model.BankId, this.Model.Statement, this.CurrentPassword, this.AccessToken).then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErroCode == "0") {
                        _this.alert.presentToast('Your data has been changed');
                    }
                    else {
                        _this.alert.presentToast(result.ErrorMessage);
                        if (result.ErrorCode == 1002) {
                            _this.dataTransaction.logOut();
                            _this.routerProvider.nextStep('Phone');
                        }
                    }
                }
                else {
                    _this.alert.presentToast(response.error);
                }
            }).catch(function (error) {
                _this.alert.presentToast(error);
            });
        }
        else {
            this.restApi.EditBankInfo(this.Model.AccountNo, this.Model.AccountHolderName, this.Model.IdentityType, this.Model.IdentityNo, this.Model.BankId, this.Model.Statement, this.CurrentPassword, this.AccessToken).subscribe(function (response) {
                var result = _this.restApi.converResponseToJson(response);
                if (result.ErrorCode == 0) {
                    _this.Model = result.Data;
                }
                else {
                    _this.ErrorMessage = result.ErrorMessage;
                }
            }, function (error) {
                _this.ErrorMessage = error;
            });
        }
    };
    BankInformationPage.prototype.uploadStatement = function () {
        this.doGetPhoto();
    };
    BankInformationPage.prototype.doGetPhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.file = imageData;
            _this.UploadPhoto();
        }, function (err) {
            _this.presentAlert(err);
        });
    };
    BankInformationPage.prototype.presentAlert = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            subHeader: 'Subtitle',
                            message: msg,
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
    BankInformationPage.prototype.UploadPhoto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loader_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isDebug) return [3 /*break*/, 3];
                        if (!(this.file != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading ...'
                            })];
                    case 1:
                        loader_1 = _a.sent();
                        loader_1.present();
                        return [4 /*yield*/, this.api.UploadUserProfilePhoto(this.file, this.AccessToken)
                                .then(function (response) {
                                var result = _this.api.converResponseToJson(response.response);
                                if (result.ErrorCode == "0") {
                                    _this.alert.presentToast('Bank statement has been uploaded.');
                                    loader_1.dismiss();
                                    return true;
                                }
                                else {
                                    loader_1.dismiss();
                                    _this.alert.presentToast(result.ErrorMessage);
                                }
                            }).catch(function (error) {
                                loader_1.dismiss();
                                _this.alert.presentToast(JSON.stringify(error));
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BankInformationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bank-information',
            template: __webpack_require__(/*! ./bank-information.page.html */ "./src/app/pages/profile/bank-information/bank-information.page.html"),
            styles: [__webpack_require__(/*! ./bank-information.page.scss */ "./src/app/pages/profile/bank-information/bank-information.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_4__["DataTransactionService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            src_app_services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_5__["NativeApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_7__["RestApiService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_8__["AlertProviderService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
            src_app_services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_6__["RouteProviderService"]])
    ], BankInformationPage);
    return BankInformationPage;
}());



/***/ })

}]);
//# sourceMappingURL=bank-information-bank-information-module.js.map