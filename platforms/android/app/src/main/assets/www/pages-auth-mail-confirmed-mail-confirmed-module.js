(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-mail-confirmed-mail-confirmed-module"],{

/***/ "./src/app/pages/auth/mail-confirmed/mail-confirmed.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/mail-confirmed/mail-confirmed.module.ts ***!
  \********************************************************************/
/*! exports provided: MailConfirmedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailConfirmedPageModule", function() { return MailConfirmedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mail_confirmed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mail-confirmed.page */ "./src/app/pages/auth/mail-confirmed/mail-confirmed.page.ts");







var routes = [
    {
        path: '',
        component: _mail_confirmed_page__WEBPACK_IMPORTED_MODULE_6__["MailConfirmedPage"]
    }
];
var MailConfirmedPageModule = /** @class */ (function () {
    function MailConfirmedPageModule() {
    }
    MailConfirmedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mail_confirmed_page__WEBPACK_IMPORTED_MODULE_6__["MailConfirmedPage"]]
        })
    ], MailConfirmedPageModule);
    return MailConfirmedPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/mail-confirmed/mail-confirmed.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/mail-confirmed/mail-confirmed.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <a slot=\"end\">\n        <ion-icon name=\"close\" (click)=\"doNext()\" style=\"padding:10px;color:#7D7D7D\"></ion-icon>\n      </a>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"container\">\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n              <div class=\"logo\"></div>\n            </ion-col>\n          </ion-row>\n      <ion-row>\n        <ion-col class=\"email-confirmation\">\n          <ion-icon name=\"checkmark-circle\" style=\"font-size:60px\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"text-center\">\n          <span class=\"text-center\">thank you.<br />\n            your email has been verified.</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/mail-confirmed/mail-confirmed.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/mail-confirmed/mail-confirmed.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvbWFpbC1jb25maXJtZWQvbWFpbC1jb25maXJtZWQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/auth/mail-confirmed/mail-confirmed.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/mail-confirmed/mail-confirmed.page.ts ***!
  \******************************************************************/
/*! exports provided: MailConfirmedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailConfirmedPage", function() { return MailConfirmedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MailConfirmedPage = /** @class */ (function () {
    function MailConfirmedPage(router) {
        this.router = router;
    }
    MailConfirmedPage.prototype.ngOnInit = function () {
    };
    MailConfirmedPage.prototype.doNext = function () {
        this.router.navigate(['complete-profile']);
    };
    MailConfirmedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mail-confirmed',
            template: __webpack_require__(/*! ./mail-confirmed.page.html */ "./src/app/pages/auth/mail-confirmed/mail-confirmed.page.html"),
            styles: [__webpack_require__(/*! ./mail-confirmed.page.scss */ "./src/app/pages/auth/mail-confirmed/mail-confirmed.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MailConfirmedPage);
    return MailConfirmedPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-mail-confirmed-mail-confirmed-module.js.map