(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-us-about-us-module"],{

/***/ "./src/app/pages/profile/about-us/about-us.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile/about-us/about-us.module.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us.page */ "./src/app/pages/profile/about-us/about-us.page.ts");







var routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]
    }
];
var AboutUsPageModule = /** @class */ (function () {
    function AboutUsPageModule() {
    }
    AboutUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]]
        })
    ], AboutUsPageModule);
    return AboutUsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/about-us/about-us.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile/about-us/about-us.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button color=\"dark\"></ion-back-button>\n      </ion-buttons>\n      <ion-title class=\"text-center\"></ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-content padding>\n\n<ion-grid>\n  <ion-row>\n    <ion-col padding>\n        <img src='../../assets/images/Js_SignUpBenefits-03.png'/>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-col>\n        <h5 style=\"color:#fbb03b;font-weight: bold;text-align: center\">Sign up as JomSave Member to enjoy these extraordinary perks</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col padding>\n          <p>. Earn unlimited RM30 premium <br/> referral incentive.</p>\n          <p>. Enjoy a 3-level network premium referral incentive.</p>\n          <p>. Enjoy instant premium vouchers worth up to RM1,000. </p>\n          <p>. Enjoy Guaranteed Best Deals.</p>\n          <p>. Special premium member rate.</p>\n        </ion-col>\n      </ion-row>\n</ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profile/about-us/about-us.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile/about-us/about-us.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/about-us/about-us.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/about-us/about-us.page.ts ***!
  \*********************************************************/
/*! exports provided: AboutUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPage", function() { return AboutUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsPage = /** @class */ (function () {
    function AboutUsPage() {
    }
    AboutUsPage.prototype.ngOnInit = function () {
    };
    AboutUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.page.html */ "./src/app/pages/profile/about-us/about-us.page.html"),
            styles: [__webpack_require__(/*! ./about-us.page.scss */ "./src/app/pages/profile/about-us/about-us.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsPage);
    return AboutUsPage;
}());



/***/ })

}]);
//# sourceMappingURL=about-us-about-us-module.js.map