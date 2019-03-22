import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DealsPage } from './deals.page';
var routes = [
    {
        path: '',
        component: DealsPage
    }
];
var DealsPageModule = /** @class */ (function () {
    function DealsPageModule() {
    }
    DealsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DealsPage]
        })
    ], DealsPageModule);
    return DealsPageModule;
}());
export { DealsPageModule };
//# sourceMappingURL=deals.module.js.map