import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthPasswordPage } from './auth-password.page';
var routes = [
    {
        path: '',
        component: AuthPasswordPage
    }
];
var AuthPasswordPageModule = /** @class */ (function () {
    function AuthPasswordPageModule() {
    }
    AuthPasswordPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AuthPasswordPage]
        })
    ], AuthPasswordPageModule);
    return AuthPasswordPageModule;
}());
export { AuthPasswordPageModule };
//# sourceMappingURL=auth-password.module.js.map