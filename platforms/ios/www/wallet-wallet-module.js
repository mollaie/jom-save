(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-wallet-module"],{

/***/ "./src/app/pages/profile/wallet/wallet.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/profile/wallet/wallet.module.ts ***!
  \*******************************************************/
/*! exports provided: WalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet.page */ "./src/app/pages/profile/wallet/wallet.page.ts");







var routes = [
    {
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]
    }
];
var WalletPageModule = /** @class */ (function () {
    function WalletPageModule() {
    }
    WalletPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]]
        })
    ], WalletPageModule);
    return WalletPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/wallet/wallet.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/profile/wallet/wallet.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"none-background\">\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profile/wallet/wallet.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/profile/wallet/wallet.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/wallet/wallet.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/profile/wallet/wallet.page.ts ***!
  \*****************************************************/
/*! exports provided: WalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPage", function() { return WalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WalletPage = /** @class */ (function () {
    function WalletPage() {
    }
    WalletPage.prototype.ngOnInit = function () {
    };
    WalletPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.page.html */ "./src/app/pages/profile/wallet/wallet.page.html"),
            styles: [__webpack_require__(/*! ./wallet.page.scss */ "./src/app/pages/profile/wallet/wallet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WalletPage);
    return WalletPage;
}());



/***/ })

}]);
//# sourceMappingURL=wallet-wallet-module.js.map