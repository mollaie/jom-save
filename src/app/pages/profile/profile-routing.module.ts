import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePage } from './profile.page';

const routes: Routes = [
    {
        path: 'profile',
        component: ProfilePage,
        children:
            [
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
                        },
                        {
                            path: 'wallet-history',
                            loadChildren: './wallet-history/wallet-history.module#WalletHistoryPageModule'
                        },
                        {
                            path: 'my-network',
                            loadChildren: './my-network/my-network.module#MyNetworkPageModule'
                        }
                    ]
                },
                {
                    path: 'menu',
                    children: [
                        {
                            path: '',
                            loadChildren: './menu/menu.module#MenuPageModule'
                        },
                        {
                            path: 'setting',
                            loadChildren: './setting/setting.module#SettingPageModule'
                        },
                        {
                            path: 'feedback',
                            loadChildren: './feedback/feedback.module#FeedbackPageModule'
                        },
                        {
                            path: 'complaints',
                            loadChildren: './complaints/complaints.module#ComplaintsPageModule'
                        },
                        {
                            path: 'account-information',
                            loadChildren: './account-information/account-information.module#AccountInformationPageModule'
                        },
                        {
                            path: 'change-password',
                            loadChildren: './change-password/change-password.module#ChangePasswordPageModule'
                        },
                        {
                            path: 'bank-information',
                            loadChildren: './bank-information/bank-information.module#BankInformationPageModule'
                        },
                        {
                            path: 'location',
                            loadChildren: './location/location.module#LocationPageModule'
                        },
                        {
                            path: 'change-number',
                            loadChildren: './change-number/change-number.module#ChangeNumberPageModule'
                        },
                        {
                            path: 'about-us',
                            loadChildren: './about-us/about-us.module#AboutUsPageModule'
                        },
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
                },
            ]
    },
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    },
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
