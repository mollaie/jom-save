(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-referral-referral-module"],{

/***/ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic-native/barcode-scanner/ngx/index.js ***!
  \*****************************************************************/
/*! exports provided: BarcodeScanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScanner", function() { return BarcodeScanner; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BarcodeScanner = /** @class */ (function (_super) {
    __extends(BarcodeScanner, _super);
    function BarcodeScanner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Encode = {
            TEXT_TYPE: 'TEXT_TYPE',
            EMAIL_TYPE: 'EMAIL_TYPE',
            PHONE_TYPE: 'PHONE_TYPE',
            SMS_TYPE: 'SMS_TYPE'
        };
        return _this;
    }
    BarcodeScanner.prototype.scan = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "scan", { "callbackOrder": "reverse" }, arguments); };
    BarcodeScanner.prototype.encode = function (type, data) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "encode", {}, arguments); };
    BarcodeScanner.pluginName = "BarcodeScanner";
    BarcodeScanner.plugin = "phonegap-plugin-barcodescanner";
    BarcodeScanner.pluginRef = "cordova.plugins.barcodeScanner";
    BarcodeScanner.repo = "https://github.com/phonegap/phonegap-plugin-barcodescanner";
    BarcodeScanner.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows"];
    BarcodeScanner = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], BarcodeScanner);
    return BarcodeScanner;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhcmNvZGUtc2Nhbm5lci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFnSHBDLGtDQUFpQjs7O1FBQ25ELFlBQU0sR0FLRjtZQUNGLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFFBQVEsRUFBRSxVQUFVO1NBQ3JCLENBQUM7OztJQVVGLDZCQUFJLGFBQUMsT0FBK0I7SUFZcEMsK0JBQU0sYUFBQyxJQUFZLEVBQUUsSUFBUzs7Ozs7O0lBakNuQixjQUFjO1FBSDFCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxjQUFjO3lCQWpIM0I7RUFpSG9DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVNjYW5uZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIFByZWZlciBmcm9udCBjYW1lcmEuIFN1cHBvcnRlZCBvbiBpT1MgYW5kIEFuZHJvaWQuXG4gICAqL1xuICBwcmVmZXJGcm9udENhbWVyYT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3cgZmxpcCBjYW1lcmEgYnV0dG9uLiBTdXBwb3J0ZWQgb24gaU9TIGFuZCBBbmRyb2lkLlxuICAgKi9cbiAgc2hvd0ZsaXBDYW1lcmFCdXR0b24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaG93IHRvcmNoIGJ1dHRvbi4gU3VwcG9ydGVkIG9uIGlPUyBhbmQgQW5kcm9pZC5cbiAgICovXG4gIHNob3dUb3JjaEJ1dHRvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYW5pbWF0aW9ucy4gU3VwcG9ydGVkIG9uIGlPUyBvbmx5LlxuICAgKi9cbiAgZGlzYWJsZUFuaW1hdGlvbnM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHN1Y2Nlc3MgYmVlcC4gU3VwcG9ydGVkIG9uIGlPUyBvbmx5LlxuICAgKi9cbiAgZGlzYWJsZVN1Y2Nlc3NCZWVwPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJvbXB0IHRleHQuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIG9ubHkuXG4gICAqL1xuICBwcm9tcHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEZvcm1hdHMgc2VwYXJhdGVkIGJ5IGNvbW1hcy4gRGVmYXVsdHMgdG8gYWxsIGZvcm1hdHMgZXhjZXB0IGBQREZfNDE3YCBhbmQgYFJTU19FWFBBTkRFRGAuXG4gICAqL1xuICBmb3JtYXRzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPcmllbnRhdGlvbi4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS4gQ2FuIGJlIHNldCB0byBgcG9ydHJhaXRgIG9yIGBsYW5kc2NhcGVgLiBEZWZhdWx0cyB0byBub25lIHNvIHRoZSB1c2VyIGNhbiByb3RhdGUgdGhlIHBob25lIGFuZCBwaWNrIGFuIG9yaWVudGF0aW9uLlxuICAgKi9cbiAgb3JpZW50YXRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExhdW5jaCB3aXRoIHRoZSB0b3JjaCBzd2l0Y2hlZCBvbiAoaWYgYXZhaWxhYmxlKS4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS5cbiAgICovXG4gIHRvcmNoT24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IHNjYW5uZWQgdGV4dCBmb3IgWCBtcy4gMCBzdXBwcmVzc2VzIGl0IGVudGlyZWx5LCBkZWZhdWx0IDE1MDAuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIG9ubHkuXG4gICAqL1xuICByZXN1bHREaXNwbGF5RHVyYXRpb24/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVNjYW5SZXN1bHQge1xuICBmb3JtYXQ6XG4gICAgfCAnUVJfQ09ERSdcbiAgICB8ICdEQVRBX01BVFJJWCdcbiAgICB8ICdVUENfRSdcbiAgICB8ICdVUENfQSdcbiAgICB8ICdFQU5fOCdcbiAgICB8ICdFQU5fMTMnXG4gICAgfCAnQ09ERV8xMjgnXG4gICAgfCAnQ09ERV8zOSdcbiAgICB8ICdDT0RFXzkzJ1xuICAgIHwgJ0NPREFCQVInXG4gICAgfCAnSVRGJ1xuICAgIHwgJ1JTUzE0J1xuICAgIHwgJ1JTU19FWFBBTkRFRCdcbiAgICB8ICdQREZfNDE3J1xuICAgIHwgJ0FaVEVDJ1xuICAgIHwgJ01TSSc7XG4gIGNhbmNlbGxlZDogYm9vbGVhbjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEJhcmNvZGUgU2Nhbm5lclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgQmFyY29kZSBTY2FubmVyIFBsdWdpbiBvcGVucyBhIGNhbWVyYSB2aWV3IGFuZCBhdXRvbWF0aWNhbGx5IHNjYW5zIGEgYmFyY29kZSwgcmV0dXJuaW5nIHRoZSBkYXRhIGJhY2sgdG8geW91LlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgcGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0JhcmNvZGVTY2FubmVyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vcGhvbmVnYXAvcGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYXJjb2RlLXNjYW5uZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhcmNvZGVTY2FubmVyOiBCYXJjb2RlU2Nhbm5lcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYmFyY29kZVNjYW5uZXIuc2NhbigpLnRoZW4oYmFyY29kZURhdGEgPT4ge1xuICogIGNvbnNvbGUubG9nKCdCYXJjb2RlIGRhdGEnLCBiYXJjb2RlRGF0YSk7XG4gKiB9KS5jYXRjaChlcnIgPT4ge1xuICogXHRjb25zb2xlLmxvZygnRXJyb3InLCBlcnIpO1xuICogfSk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBCYXJjb2RlU2Nhbm5lck9wdGlvbnNcbiAqIEJhcmNvZGVTY2FuUmVzdWx0XG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmFyY29kZVNjYW5uZXInLFxuICBwbHVnaW46ICdwaG9uZWdhcC1wbHVnaW4tYmFyY29kZXNjYW5uZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuYmFyY29kZVNjYW5uZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Bob25lZ2FwL3Bob25lZ2FwLXBsdWdpbi1iYXJjb2Rlc2Nhbm5lcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0JsYWNrQmVycnkgMTAnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQmFyY29kZVNjYW5uZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEVuY29kZToge1xuICAgIFRFWFRfVFlQRTogc3RyaW5nO1xuICAgIEVNQUlMX1RZUEU6IHN0cmluZztcbiAgICBQSE9ORV9UWVBFOiBzdHJpbmc7XG4gICAgU01TX1RZUEU6IHN0cmluZztcbiAgfSA9IHtcbiAgICBURVhUX1RZUEU6ICdURVhUX1RZUEUnLFxuICAgIEVNQUlMX1RZUEU6ICdFTUFJTF9UWVBFJyxcbiAgICBQSE9ORV9UWVBFOiAnUEhPTkVfVFlQRScsXG4gICAgU01TX1RZUEU6ICdTTVNfVFlQRSdcbiAgfTtcblxuICAvKipcbiAgICogT3BlbiB0aGUgYmFyY29kZSBzY2FubmVyLlxuICAgKiBAcGFyYW0ge0JhcmNvZGVTY2FubmVyT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbmFsIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgc2Nhbm5lclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggc2Nhbm5lciBkYXRhLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIHNjYW4ob3B0aW9ucz86IEJhcmNvZGVTY2FubmVyT3B0aW9ucyk6IFByb21pc2U8QmFyY29kZVNjYW5SZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5jb2RlcyBkYXRhIGludG8gYSBiYXJjb2RlLlxuICAgKiBOT1RFOiBub3Qgd2VsbCBzdXBwb3J0ZWQgb24gQW5kcm9pZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlIG9mIGVuY29kaW5nXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIERhdGEgdG8gZW5jb2RlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuY29kZSh0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./src/app/pages/auth/referral/referral.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/referral/referral.module.ts ***!
  \********************************************************/
/*! exports provided: ReferralPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralPageModule", function() { return ReferralPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _referral_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./referral.page */ "./src/app/pages/auth/referral/referral.page.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");








var routes = [
    {
        path: '',
        component: _referral_page__WEBPACK_IMPORTED_MODULE_6__["ReferralPage"]
    }
];
var ReferralPageModule = /** @class */ (function () {
    function ReferralPageModule() {
    }
    ReferralPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_referral_page__WEBPACK_IMPORTED_MODULE_6__["ReferralPage"]],
            providers: [
                _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["BarcodeScanner"]
            ]
        })
    ], ReferralPageModule);
    return ReferralPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/referral/referral.page.html":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/referral/referral.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class=\"logo\"></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n        <ion-row>\n          <ion-col>\n            <h3 class=\"warningMessage\">Who is your Referral?</h3>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n          <ion-row>\n            <ion-col size=\"2\"></ion-col>\n            <ion-col size=\"8\">\n              <p class=\"text-center\">Please key in your referral’s REFID</p>\n              <div class=\"input-container\">\n                  <img src=\"../../assets/images/btn-scan-qr.svg\" class=\"input--icon\" (click)=\"doScanCode()\" />\n                  <input type=\"text\" class=\"input-icon\" [(ngModel)]=\"Model.Referral\" (input)=\"doGetUserInfo()\" maxlength=\"6\"/>                  \n                  <span class=\"input-content\"></span>\n              </div>\n            </ion-col>\n            <ion-col size=\"2\"></ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"UserInfo.UserId >0\" >\n            <ion-col size=\"3\"></ion-col>\n            <ion-col size=\"6\" class=\"text-center\" style=\"padding-left:20px\">\n              <div class=\"picture-container text-center\">               \n                <img [src]=\"UserInfo.Photo\" width=150 height=150/>\n              </div>\n            </ion-col>\n            <ion-col size=\"3\"></ion-col>\n            <ion-col size=\"12\">\n              <p class=\"text-center\"> Member Name  : {{UserInfo.DisplayName}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n                <p class=\"text-center\" color=\"danger\" *ngIf=\"ErrorMessage != ''\" >{{ErrorMessage}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col class=\"text-center\">\n                  <a class=\"text-center\" (click)=\"doSkip()\" >Skip For Now</a>\n              </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-fab-button class=\"next-button\" (click)=\"doNext()\">\n            <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-fab-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/referral/referral.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/referral/referral.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvcmVmZXJyYWwvcmVmZXJyYWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/auth/referral/referral.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/referral/referral.page.ts ***!
  \******************************************************/
/*! exports provided: ReferralPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralPage", function() { return ReferralPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../..//services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/native-api/native-api.service */ "./src/app/services/native-api/native-api.service.ts");
/* harmony import */ var _ionic_native_zbar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/zbar/ngx */ "./node_modules/@ionic-native/zbar/ngx/index.js");
/* harmony import */ var _services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/route-provider/route-provider.service */ "./src/app/services/route-provider/route-provider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/alert-provider/alert-provider.service */ "./src/app/services/alert-provider/alert-provider.service.ts");










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
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    ReferralPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-referral',
            template: __webpack_require__(/*! ./referral.page.html */ "./src/app/pages/auth/referral/referral.page.html"),
            styles: [__webpack_require__(/*! ./referral.page.scss */ "./src/app/pages/auth/referral/referral.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_2__["DataTransactionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_native_zbar_ngx__WEBPACK_IMPORTED_MODULE_5__["ZBar"],
            _services_native_api_native_api_service__WEBPACK_IMPORTED_MODULE_4__["NativeApiService"],
            _services_route_provider_route_provider_service__WEBPACK_IMPORTED_MODULE_6__["RouteProviderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _services_rest_api_service__WEBPACK_IMPORTED_MODULE_8__["RestApiService"],
            src_app_services_alert_provider_alert_provider_service__WEBPACK_IMPORTED_MODULE_9__["AlertProviderService"]])
    ], ReferralPage);
    return ReferralPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-referral-referral-module.js.map