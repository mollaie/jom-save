import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteProviderService {

  constructor(private router: Router) {
  }

  nextStep(step) {
    switch (step) {
      case "AddReferral":
        this.router.navigate(['referral']);
        break;
      case "MakePayment":
        this.router.navigate(['top-up']);
        break;
      case "CreatePassword":
        this.router.navigate(['change-password']);
        break;
      case "VerifyEmail":
        this.router.navigate(['mail-confirmation']);
        break;
      case "CompleteProfile":
        this.router.navigate(['complete-profile']);
        break;
      case "VerifyProfile":
        this.router.navigate(['profile/profile/home']);
        break;
      case "Password":
        this.router.navigate(['auth-password']);
        break;
      case "Upline":
        break;
      case "ForgotPassword":
        this.router.navigate(['forgot-password']);
        break;
      case "Phone":
        this.router.navigate(['auth-phone']);
        break;
      case "OTP-ChangePassword":
        this.router.navigate(['otp-change-number']);
        break;
      default:
        this.router.navigate(['profile/profile/home']);
    }
  }
}
