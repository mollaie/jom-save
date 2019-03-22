import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WalletHistoryPage } from './wallet-history.page';
var routes = [
    {
        path: '',
        component: WalletHistoryPage
    }
];
var WalletHistoryPageModule = /** @class */ (function () {
    function WalletHistoryPageModule() {
    }
    WalletHistoryPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [WalletHistoryPage]
        })
    ], WalletHistoryPageModule);
    return WalletHistoryPageModule;
}());
export { WalletHistoryPageModule };
//# sourceMappingURL=wallet-history.module.js.map