import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TopUpSuccessPage } from './top-up-success.page';
var routes = [
    {
        path: '',
        component: TopUpSuccessPage
    }
];
var TopUpSuccessPageModule = /** @class */ (function () {
    function TopUpSuccessPageModule() {
    }
    TopUpSuccessPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TopUpSuccessPage]
        })
    ], TopUpSuccessPageModule);
    return TopUpSuccessPageModule;
}());
export { TopUpSuccessPageModule };
//# sourceMappingURL=top-up-success.module.js.map