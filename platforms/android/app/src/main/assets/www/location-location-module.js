(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-location-module"],{

/***/ "./src/app/pages/profile/location/location.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile/location/location.module.ts ***!
  \***********************************************************/
/*! exports provided: LocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location.page */ "./src/app/pages/profile/location/location.page.ts");







var routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]
    }
];
var LocationPageModule = /** @class */ (function () {
    function LocationPageModule() {
    }
    LocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
        })
    ], LocationPageModule);
    return LocationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/location/location.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile/location/location.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"text-center\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col style=\"border-bottom: 1px solid #D9D8D7;margin-bottom: 5px;\">\n        <p class=\"location-title\">Address</p>\n        <p class=\"location-body\">Lot 1205, Faber Tower, Tower 2, Level 12, 1208, Jalan Desa Bahagia, Taman Desa, 58100\n          Kuala Lumpur, Federal Territory of Kuala Lumpur</p>\n          <br/>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style=\"border-bottom: 1px solid #D9D8D7;margin-bottom: 5px;\">\n        <p class=\"location-title\">A2A GLOBAL NETWORK SDN BHD <br/> (1169274-K)(AJL932135)</p>\n        <p class=\"location-body\">T: +603 - 7972 7005</p>\n        <p class=\"location-body\">T: +603 - 7972 1006</p>\n        <a>Contact Us</a>\n        <br/>\n        <br/>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col >\n        <p class=\"location-title\">Office Hours</p>\n        <p class=\"location-body\">Monday - Friday 10AM-7PM</p>\n        <p class=\"location-body\">Closed on public holidays</p>\n        <br/>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/location/location.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile/location/location.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvbG9jYXRpb24vbG9jYXRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/location/location.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/location/location.page.ts ***!
  \*********************************************************/
/*! exports provided: LocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPage", function() { return LocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocationPage = /** @class */ (function () {
    function LocationPage() {
    }
    LocationPage.prototype.ngOnInit = function () {
    };
    LocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.page.html */ "./src/app/pages/profile/location/location.page.html"),
            styles: [__webpack_require__(/*! ./location.page.scss */ "./src/app/pages/profile/location/location.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocationPage);
    return LocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=location-location-module.js.map