(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-top-up-success-top-up-success-module"],{

/***/ "./src/app/pages/auth/top-up-success/top-up-success.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/top-up-success/top-up-success.module.ts ***!
  \********************************************************************/
/*! exports provided: TopUpSuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopUpSuccessPageModule", function() { return TopUpSuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _top_up_success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-up-success.page */ "./src/app/pages/auth/top-up-success/top-up-success.page.ts");







var routes = [
    {
        path: '',
        component: _top_up_success_page__WEBPACK_IMPORTED_MODULE_6__["TopUpSuccessPage"]
    }
];
var TopUpSuccessPageModule = /** @class */ (function () {
    function TopUpSuccessPageModule() {
    }
    TopUpSuccessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_top_up_success_page__WEBPACK_IMPORTED_MODULE_6__["TopUpSuccessPage"]]
        })
    ], TopUpSuccessPageModule);
    return TopUpSuccessPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/top-up-success/top-up-success.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/top-up-success/top-up-success.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <a  slot=\"end\" (click)=\"doNext()\" style=\"font-size: 18px;color: #b9b9b9;padding:10px\">\n              <ion-icon name=\"close\"></ion-icon>\n            </a>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n<ion-content>\n  <div class=\"container\">\n      <ion-grid>\n          <ion-row>\n              <ion-col>\n                  <div class=\"logo\"></div>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n                <h3 class=\"SuccessMessage\">Success!</h3>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p class=\"text-center\">Thank you for your payment.</p>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/auth/top-up-success/top-up-success.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/top-up-success/top-up-success.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvdG9wLXVwLXN1Y2Nlc3MvdG9wLXVwLXN1Y2Nlc3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/auth/top-up-success/top-up-success.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/top-up-success/top-up-success.page.ts ***!
  \******************************************************************/
/*! exports provided: TopUpSuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopUpSuccessPage", function() { return TopUpSuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TopUpSuccessPage = /** @class */ (function () {
    function TopUpSuccessPage(router) {
        this.router = router;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    TopUpSuccessPage.prototype.ngOnInit = function () {
    };
    TopUpSuccessPage.prototype.doNext = function () {
        this.router.navigate(['change-password']);
    };
    TopUpSuccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-up-success',
            template: __webpack_require__(/*! ./top-up-success.page.html */ "./src/app/pages/auth/top-up-success/top-up-success.page.html"),
            styles: [__webpack_require__(/*! ./top-up-success.page.scss */ "./src/app/pages/auth/top-up-success/top-up-success.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TopUpSuccessPage);
    return TopUpSuccessPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-top-up-success-top-up-success-module.js.map