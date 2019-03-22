import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MyNetworkPage } from './my-network.page';
var routes = [
    {
        path: '',
        component: MyNetworkPage
    }
];
var MyNetworkPageModule = /** @class */ (function () {
    function MyNetworkPageModule() {
    }
    MyNetworkPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MyNetworkPage]
        })
    ], MyNetworkPageModule);
    return MyNetworkPageModule;
}());
export { MyNetworkPageModule };
//# sourceMappingURL=my-network.module.js.map