import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConstantService {

  public static WorldMap_Picture = `../../assets/images/world-map.svg`;
  public static icon_change_login_password = `../../assets/images/icon-change-login-password.svg`;
  public static icon_smart_phone = `../../assets/images/icon-smart-phone.svg`;
  public static icon_btn_scan_qr = `../../assets/images/btn-scan-qr.svg`
  public static icon_btn_bank_inactive = `../../assets/images/btn-bank-inactive.svg`;
  public static icon_btn_credit_card_active = `../../assets/images/btn-credit-card-active.svg`;
  public static icon_icon_confirm_password = `../../assets/images/icon-confirm-password.svg`;
  public static icon_icon_email = `../../assets/images/icon-email.svg`;
  public static icon_dispaly_name = `../../assets/images/icon-dispaly-name.svg`;
  public static icon_photo_camera= `../../assets/images/photo-camera.svg`;
  public static icon_stop = '../../assets/images/stop.png'
  public static icon_QRCode = '../../assets/images/icon_QRCode.png'

  constructor() { 

  }

  GetCardType(num)
  {
      let number = String(num);
      // visa
      var re = new RegExp("^4");
      if (number.match(re) != null)
          return "VISA";
  
      // Mastercard 
      // Updated for Mastercard 2017 BINs expansion
       if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)) 
          return "Master";
  
      // AMEX
      re = new RegExp("^3[47]");
      if (number.match(re) != null)
          return "AMEX";
  
      // Discover
      re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
      if (number.match(re) != null)
          return "Discover";
  
      // Diners
      re = new RegExp("^36");
      if (number.match(re) != null)
          return "Diners";
  
      // Diners - Carte Blanche
      re = new RegExp("^30[0-5]");
      if (number.match(re) != null)
          return "Diners - Carte Blanche";
  
      // JCB
      re = new RegExp("^35(2[89]|[3-8][0-9])");
      if (number.match(re) != null)
          return "JCB";
  
      // Visa Electron
      re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
      if (number.match(re) != null)
          return "VISA";
  
      return "";
  }

    ValidateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}


