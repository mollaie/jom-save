import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Platform } from '@ionic/angular';
import { DataTransactionService } from 'src/app/services/data-transaction/data-transaction.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { Router } from '@angular/router';
var NotificationPage = /** @class */ (function () {
    function NotificationPage(api, restApi, platform, dataTransaction, alert, router) {
        this.api = api;
        this.restApi = restApi;
        this.platform = platform;
        this.dataTransaction = dataTransaction;
        this.alert = alert;
        this.router = router;
        this.showSplash = true;
        this.isDebug = false;
        this.AccessToken = "";
        if (platform.is('cordova'))
            this.isDebug = false;
        else
            this.isDebug = true;
    }
    NotificationPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataTransaction.getAccessToken().then(function (acc) {
            if (acc == null)
                console.log('access token does not detected');
            else {
                _this.AccessToken = acc.toString();
                _this.GetHistory();
            }
        });
    };
    NotificationPage.prototype.GetHistory = function () {
        var _this = this;
        console.log(this.AccessToken);
        if (!this.isDebug) {
            this.api.GetHistory(1000, 1, this.AccessToken).then(function (response) {
                if (response.status == 200) {
                    var result = _this.api.converResponseToJson(response.data);
                    if (result.ErrorCode == "0") {
                    }
                    else {
                        _this.alert.showErrorMessageAlert(result.ErrorMessage);
                    }
                }
                else {
                    _this.alert.showErrorMessageAlert(response.error);
                }
            }).catch(function (error) {
                _this.alert.showErrorMessageAlert(error);
            });
        }
        else {
            this.restApi.GetHistory(1000, 1, this.AccessToken).subscribe(function (reponse) {
                var result = _this.restApi.converResponseToJson(reponse);
                if (result.ErrorCode == "0") {
                    console.log(result.Data);
                }
                else {
                    console.log(result.ErrorMessage);
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    NotificationPage = tslib_1.__decorate([
        Component({
            selector: 'app-notification',
            templateUrl: './notification.page.html',
            styleUrls: ['./notification.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NativeApiService,
            RestApiService,
            Platform,
            DataTransactionService,
            AlertProviderService,
            Router])
    ], NotificationPage);
    return NotificationPage;
}());
export { NotificationPage };
//# sourceMappingURL=notification.page.js.map