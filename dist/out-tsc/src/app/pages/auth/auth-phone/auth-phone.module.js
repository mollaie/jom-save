import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthPhonePage } from './auth-phone.page';
var routes = [
    {
        path: '',
        component: AuthPhonePage
    }
];
var AuthPhonePageModule = /** @class */ (function () {
    function AuthPhonePageModule() {
    }
    AuthPhonePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AuthPhonePage]
        })
    ], AuthPhonePageModule);
    return AuthPhonePageModule;
}());
export { AuthPhonePageModule };
//# sourceMappingURL=auth-phone.module.js.map