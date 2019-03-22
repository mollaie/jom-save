import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MailConfirmationPage } from './mail-confirmation.page';
var routes = [
    {
        path: '',
        component: MailConfirmationPage
    }
];
var MailConfirmationPageModule = /** @class */ (function () {
    function MailConfirmationPageModule() {
    }
    MailConfirmationPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MailConfirmationPage]
        })
    ], MailConfirmationPageModule);
    return MailConfirmationPageModule;
}());
export { MailConfirmationPageModule };
//# sourceMappingURL=mail-confirmation.module.js.map