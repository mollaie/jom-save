import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BankInformationPage } from './bank-information.page';
var routes = [
    {
        path: '',
        component: BankInformationPage
    }
];
var BankInformationPageModule = /** @class */ (function () {
    function BankInformationPageModule() {
    }
    BankInformationPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [BankInformationPage]
        })
    ], BankInformationPageModule);
    return BankInformationPageModule;
}());
export { BankInformationPageModule };
//# sourceMappingURL=bank-information.module.js.map