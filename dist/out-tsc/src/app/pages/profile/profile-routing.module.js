import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfilePage } from './profile.page';
var routes = [
    {
        path: 'profile',
        component: ProfilePage,
        children: [
            {
                path: 'home',
                children: [{
                        path: '',
                        loadChildren: './home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'deals',
                children: [
                    {
                        path: '',
                        loadChildren: './deals/deals.module#DealsPageModule'
                    }
                ]
            },
            {
                path: 'wallet',
                children: [
                    {
                        path: '',
                        loadChildren: './wallet/wallet.module#WalletPageModule'
                    }
                ]
            },
            {
                path: 'menu',
                children: [
                    {
                        path: '',
                        loadChildren: './menu/menu.module#MenuPageModule'
                    }
                ]
            },
            {
                path: 'notification',
                children: [
                    {
                        path: '',
                        loadChildren: './notification/notification.module#NotificationPageModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    },
    { path: 'wallet-history', loadChildren: './wallet-history/wallet-history.module#WalletHistoryPageModule' },
    { path: 'my-network', loadChildren: './my-network/my-network.module#MyNetworkPageModule' },
    { path: 'account-information', loadChildren: './account-information/account-information.module#AccountInformationPageModule' },
    { path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordPageModule' },
    { path: 'bank-information', loadChildren: './bank-information/bank-information.module#BankInformationPageModule' }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());
export { ProfileRoutingModule };
//# sourceMappingURL=profile-routing.module.js.map