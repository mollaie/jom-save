import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NativeApiService } from 'src/app/services/native-api/native-api.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Router, NavigationEnd } from '@angular/router';
import { Platform } from '@ionic/angular';
import { RouteProviderService } from 'src/app/services/route-provider/route-provider.service';
import { AlertProviderService } from 'src/app/services/alert-provider/alert-provider.service';
import { DataTransactionService } from 'src/app/services/data-transaction/data-transaction.service';
var HomePage = /** @class */ (function () {
    function HomePage(router, dataTransaction, api, platform, restApi, routerProvider, alert) {
        var _this = this;
        this.router = router;
        this.dataTransaction = dataTransaction;
        this.api = api;
        this.platform = platform;
        this.restApi = restApi;
        this.routerProvider = routerProvider;
        this.alert = alert;
        this.Navbar = "Social";
        this.QRCode = "";
        this.Model = {
            DisplayName: "",
            MemberId: '',
            Email: '',
            Mobile: '',
            Gender: 'MKYTY',
            UserType: "",
            Roles: "",
            NextStep: "",
            Upline: {
                MemberId: "",
                DisplayName: ""
            }
        };
        this.AccessToken = "";
        this.isDebug = false;
        this.ErrorMessage = '';
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
        this.dataTransaction.getProfile().then(function (val) {
            if (val == undefined || val == '')
                _this.router.navigate(['auth-phone']);
            else {
                _this.Model = val;
                _this.encodedText(_this.Model.MemberId);
                _this.dataTransaction.getAccessToken().then(function (acc) {
                    _this.AccessToken = acc.toString();
                });
            }
        });
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.encodedText = function (input) {
        // if (this.platform.is('cordova')) {
        //   this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, input).then((encodedData) => {
        //     this.encodeData = encodedData;
        //   }, (err) => {
        //   });
        // } else {
        //   this.encodeData = "";
        // }
    };
    HomePage.prototype.doCheckHistory = function () {
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.page.html',
            styleUrls: ['./home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            DataTransactionService,
            NativeApiService,
            Platform,
            RestApiService,
            RouteProviderService,
            AlertProviderService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map