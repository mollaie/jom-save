(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deals-deals-module"],{

/***/ "./src/app/pages/profile/deals/deals.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/profile/deals/deals.module.ts ***!
  \*****************************************************/
/*! exports provided: DealsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsPageModule", function() { return DealsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _deals_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deals.page */ "./src/app/pages/profile/deals/deals.page.ts");







var routes = [
    {
        path: '',
        component: _deals_page__WEBPACK_IMPORTED_MODULE_6__["DealsPage"]
    }
];
var DealsPageModule = /** @class */ (function () {
    function DealsPageModule() {
    }
    DealsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_deals_page__WEBPACK_IMPORTED_MODULE_6__["DealsPage"]]
        })
    ], DealsPageModule);
    return DealsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/deals/deals.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/profile/deals/deals.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"none-background\">\n    <div class=\"container\">\n        <ion-grid>\n            <ion-row>\n                <ion-col> <div class=\"logo-2\"></div></ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-list no-border>\n                        <ion-item class=\"deal-item\" no-border no-lines lines=\"none\" *ngFor=\"let item of Deals\">\n                            <ion-grid>\n                                <ion-row>\n                                    <ion-col size=\"10\">\n                                        <p class=\"deal-item-date\">{{item.Date}}</p>\n                                    </ion-col>\n                                    <ion-col size=\"2\" class=\"deal-item-time\">{{item.Time}}</ion-col>\n                                </ion-row>\n                                <ion-row>\n                                    <ion-col>\n                                        <p class=\"deal-item-title\">{{item.title}}</p>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-item>\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/deals/deals.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/profile/deals/deals.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvZGVhbHMvZGVhbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profile/deals/deals.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/profile/deals/deals.page.ts ***!
  \***************************************************/
/*! exports provided: DealsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsPage", function() { return DealsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DealsPage = /** @class */ (function () {
    function DealsPage() {
        this.Deals = [
            {
                Id: 0,
                Date: '10 Jan 2019',
                Time: '10:00',
                Title: 'Very Good News',
                Description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ',
            },
            {
                Id: 0,
                Date: '10 Jan 2019',
                Time: '10:00',
                Title: 'Very Good News',
                Description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ',
            }, {
                Id: 0,
                Date: '10 Jan 2019',
                Time: '10:00',
                Title: 'Very Good News',
                Description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ',
            }
        ];
    }
    DealsPage.prototype.ngOnInit = function () {
    };
    DealsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deals',
            template: __webpack_require__(/*! ./deals.page.html */ "./src/app/pages/profile/deals/deals.page.html"),
            styles: [__webpack_require__(/*! ./deals.page.scss */ "./src/app/pages/profile/deals/deals.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DealsPage);
    return DealsPage;
}());



/***/ })

}]);
//# sourceMappingURL=deals-deals-module.js.map