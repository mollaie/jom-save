import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TopUpAccountInfoPage } from './top-up-account-info.page';
var routes = [
    {
        path: '',
        component: TopUpAccountInfoPage
    }
];
var TopUpAccountInfoPageModule = /** @class */ (function () {
    function TopUpAccountInfoPageModule() {
    }
    TopUpAccountInfoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TopUpAccountInfoPage]
        })
    ], TopUpAccountInfoPageModule);
    return TopUpAccountInfoPageModule;
}());
export { TopUpAccountInfoPageModule };
//# sourceMappingURL=top-up-account-info.module.js.map