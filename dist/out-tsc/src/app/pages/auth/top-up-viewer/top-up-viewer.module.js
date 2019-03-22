import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TopUpViewerPage } from './top-up-viewer.page';
var routes = [
    {
        path: '',
        component: TopUpViewerPage
    }
];
var TopUpViewerPageModule = /** @class */ (function () {
    function TopUpViewerPageModule() {
    }
    TopUpViewerPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TopUpViewerPage]
        })
    ], TopUpViewerPageModule);
    return TopUpViewerPageModule;
}());
export { TopUpViewerPageModule };
//# sourceMappingURL=top-up-viewer.module.js.map