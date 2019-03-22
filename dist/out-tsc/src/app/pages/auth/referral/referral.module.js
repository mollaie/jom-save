import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReferralPage } from './referral.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
var routes = [
    {
        path: '',
        component: ReferralPage
    }
];
var ReferralPageModule = /** @class */ (function () {
    function ReferralPageModule() {
    }
    ReferralPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ReferralPage],
            providers: [
                BarcodeScanner
            ]
        })
    ], ReferralPageModule);
    return ReferralPageModule;
}());
export { ReferralPageModule };
//# sourceMappingURL=referral.module.js.map