import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WalletPage } from './wallet.page';
var routes = [
    {
        path: '',
        component: WalletPage
    }
];
var WalletPageModule = /** @class */ (function () {
    function WalletPageModule() {
    }
    WalletPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [WalletPage]
        })
    ], WalletPageModule);
    return WalletPageModule;
}());
export { WalletPageModule };
//# sourceMappingURL=wallet.module.js.map