import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'auth-phone', pathMatch: 'full' },
    { path: 'auth-phone', loadChildren: './pages/auth/auth-phone/auth-phone.module#AuthPhonePageModule' },
    { path: 'auth-password', loadChildren: './pages/auth/auth-password/auth-password.module#AuthPasswordPageModule' },
    { path: 'signup', loadChildren: './pages/auth/signup/signup.module#SignupPageModule' },
    { path: 'confirmation', loadChildren: './pages/auth/confirmation/confirmation.module#ConfirmationPageModule' },
    { path: 'referral', loadChildren: './pages/auth/referral/referral.module#ReferralPageModule' },
    { path: 'top-up', loadChildren: './pages/auth/top-up/top-up.module#TopUpPageModule' },
    { path: 'top-up-account-info', loadChildren: './pages/auth/top-up-account-info/top-up-account-info.module#TopUpAccountInfoPageModule' },
    { path: 'top-up-success', loadChildren: './pages/auth/top-up-success/top-up-success.module#TopUpSuccessPageModule' },
    { path: 'change-password', loadChildren: './pages/auth/change-password/change-password.module#ChangePasswordPageModule' },
    { path: 'mail-confirmation', loadChildren: './pages/auth/mail-confirmation/mail-confirmation.module#MailConfirmationPageModule' },
    { path: 'mail-confirmed', loadChildren: './pages/auth/mail-confirmed/mail-confirmed.module#MailConfirmedPageModule' },
    { path: 'complete-profile', loadChildren: './pages/auth/complete-profile/complete-profile.module#CompleteProfilePageModule' },
    { path: 'forgot-password', loadChildren: './pages/auth/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
    { path: 'top-up-viewer', loadChildren: './pages/auth/top-up-viewer/top-up-viewer.module#TopUpViewerPageModule' },
    { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
    { path: 'wallet-history', loadChildren: './pages/profile/wallet-history/wallet-history.module#WalletHistoryPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map