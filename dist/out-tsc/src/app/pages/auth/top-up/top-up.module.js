import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TopUpPage } from './top-up.page';
var routes = [
    {
        path: '',
        component: TopUpPage
    }
];
var TopUpPageModule = /** @class */ (function () {
    function TopUpPageModule() {
    }
    TopUpPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TopUpPage]
        })
    ], TopUpPageModule);
    return TopUpPageModule;
}());
export { TopUpPageModule };
//# sourceMappingURL=top-up.module.js.map