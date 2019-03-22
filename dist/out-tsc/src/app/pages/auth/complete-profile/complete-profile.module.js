import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CompleteProfilePage } from './complete-profile.page';
var routes = [
    {
        path: '',
        component: CompleteProfilePage
    }
];
var CompleteProfilePageModule = /** @class */ (function () {
    function CompleteProfilePageModule() {
    }
    CompleteProfilePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CompleteProfilePage]
        })
    ], CompleteProfilePageModule);
    return CompleteProfilePageModule;
}());
export { CompleteProfilePageModule };
//# sourceMappingURL=complete-profile.module.js.map