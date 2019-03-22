import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AccountInformationPage } from './account-information.page';
var routes = [
    {
        path: '',
        component: AccountInformationPage
    }
];
var AccountInformationPageModule = /** @class */ (function () {
    function AccountInformationPageModule() {
    }
    AccountInformationPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AccountInformationPage]
        })
    ], AccountInformationPageModule);
    return AccountInformationPageModule;
}());
export { AccountInformationPageModule };
//# sourceMappingURL=account-information.module.js.map