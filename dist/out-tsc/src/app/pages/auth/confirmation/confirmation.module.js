import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConfirmationPage } from './confirmation.page';
var routes = [
    {
        path: '',
        component: ConfirmationPage
    }
];
var ConfirmationPageModule = /** @class */ (function () {
    function ConfirmationPageModule() {
    }
    ConfirmationPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ConfirmationPage]
        })
    ], ConfirmationPageModule);
    return ConfirmationPageModule;
}());
export { ConfirmationPageModule };
//# sourceMappingURL=confirmation.module.js.map