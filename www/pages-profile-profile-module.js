(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




var routes = [
    {
        path: 'profile',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"],
        children: [
            {
                path: 'home',
                children: [{
                        path: '',
                        loadChildren: './home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'deals',
                children: [
                    {
                        path: '',
                        loadChildren: './deals/deals.module#DealsPageModule'
                    }
                ]
            },
            {
                path: 'wallet',
                children: [
                    {
                        path: '',
                        loadChildren: './wallet/wallet.module#WalletPageModule'
                    },
                    {
                        path: 'wallet-history',
                        loadChildren: './wallet-history/wallet-history.module#WalletHistoryPageModule'
                    },
                    {
                        path: 'my-network',
                        loadChildren: './my-network/my-network.module#MyNetworkPageModule'
                    }
                ]
            },
            {
                path: 'menu',
                children: [
                    {
                        path: '',
                        loadChildren: './menu/menu.module#MenuPageModule'
                    },
                    {
                        path: 'setting',
                        loadChildren: './setting/setting.module#SettingPageModule'
                    },
                    {
                        path: 'feedback',
                        loadChildren: './feedback/feedback.module#FeedbackPageModule'
                    },
                    {
                        path: 'complaints',
                        loadChildren: './complaints/complaints.module#ComplaintsPageModule'
                    },
                    {
                        path: 'account-information',
                        loadChildren: './account-information/account-information.module#AccountInformationPageModule'
                    },
                    {
                        path: 'change-password',
                        loadChildren: './change-password/change-password.module#ChangePasswordPageModule'
                    },
                    {
                        path: 'bank-information',
                        loadChildren: './bank-information/bank-information.module#BankInformationPageModule'
                    },
                    {
                        path: 'location',
                        loadChildren: './location/location.module#LocationPageModule'
                    },
                    {
                        path: 'change-number',
                        loadChildren: './change-number/change-number.module#ChangeNumberPageModule'
                    },
                    {
                        path: 'about-us',
                        loadChildren: './about-us/about-us.module#AboutUsPageModule'
                    },
                ]
            },
            {
                path: 'notification',
                children: [
                    {
                        path: '',
                        loadChildren: './notification/notification.module#NotificationPageModule'
                    }
                ]
            },
        ]
    },
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    },
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");







var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProfileRoutingModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_5__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div *ngIf=\"showSplash\" class=\"splash\">\n        <ion-grid>\n            <ion-row>\n                <ion-col class=\"text-center\">\n                    <img src=\"../assets/images/jomsave_logo.svg\" />\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class=\"text-center\">\n                    <div class=\"lds-ellipsis\">\n                        <div></div>\n                        <div></div>\n                        <div></div>\n                        <div></div>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </div>\n    <ion-tabs *ngIf=\"!showSplash\">\n        <ion-tab-bar slot=\"bottom\" class=\"tab-bar\">\n            <ion-tab-button tab=\"home\" (click)=\"onOtherPageClick($event)\">\n                <ion-icon name=\"home\"></ion-icon>\n                <ion-label>Home</ion-label>\n            </ion-tab-button>\n            <ion-tab-button tab=\"deals\" (click)=\"onOtherPageClick($event)\">\n                <ion-icon name=\"star\"></ion-icon>\n                <ion-label>Deals</ion-label>\n            </ion-tab-button>\n            <ion-tab-button tab=\"wallet\" (click)=\"onOtherPageClick($event)\">\n                <ion-icon name=\"wallet\"></ion-icon>\n                <ion-label>Wallet</ion-label>\n            </ion-tab-button>\n            <ion-tab-button tab=\"notification\" (click)=\"onOtherPageClick($event)\">\n                <ion-icon name=\"notifications\"></ion-icon>\n                <ion-label>Notifications</ion-label>\n            </ion-tab-button>\n            <ion-tab-button tab=\"menu\" (click)=\"onClick($event)\">\n                <ion-icon name=\"menu\"></ion-icon>\n                <ion-label>Menu</ion-label>\n            </ion-tab-button>\n        </ion-tab-bar>\n    </ion-tabs>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-transaction/data-transaction.service */ "./src/app/services/data-transaction/data-transaction.service.ts");




var ProfilePage = /** @class */ (function () {
    function ProfilePage(router, data) {
        var _this = this;
        this.router = router;
        this.data = data;
        this.showSplash = true;
        this.isClicked = false;
        setTimeout(function () {
            _this.showSplash = false;
        }, 500);
        this.routerSubscription = this.router.events.subscribe(function (e) {
            if (_this.data.shouldNavigate) {
                if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                    if (e.url != "/profile/profile/menu" && _this.isClicked) {
                        _this.isClicked = false;
                        _this.router.navigateByUrl('profile/profile/menu');
                    }
                }
            }
        });
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.onClick = function (event) {
        this.data.shouldNavigate = true;
        this.isClicked = true;
    };
    ProfilePage.prototype.onOtherPageClick = function (event) {
        this.data.page = 1;
        this.data.shouldNavigate = false;
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_data_transaction_data_transaction_service__WEBPACK_IMPORTED_MODULE_3__["DataTransactionService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map