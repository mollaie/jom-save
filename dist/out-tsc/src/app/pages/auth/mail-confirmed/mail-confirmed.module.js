import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MailConfirmedPage } from './mail-confirmed.page';
var routes = [
    {
        path: '',
        component: MailConfirmedPage
    }
];
var MailConfirmedPageModule = /** @class */ (function () {
    function MailConfirmedPageModule() {
    }
    MailConfirmedPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MailConfirmedPage]
        })
    ], MailConfirmedPageModule);
    return MailConfirmedPageModule;
}());
export { MailConfirmedPageModule };
//# sourceMappingURL=mail-confirmed.module.js.map