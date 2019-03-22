import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';

import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';

@Injectable({
  providedIn: 'root'
})
export class NativeApiService {

  constructor(public http: HTTP,
    public plaftorm: Platform,
    private uniqueDeviceID: UniqueDeviceID,
    private transfer: FileTransfer) {

  }

  apiUrl: string = environment.api;
  platformId = this.plaftorm.is('ios') || this.plaftorm.is('iphone') || this.plaftorm.is('ipad') ? '2' : '3';

  getDeviceUniqueId() {
    let uniqueId = '';
    this.uniqueDeviceID.get()
      .then((uuid: any) => uniqueId = uuid)
      .catch((error: any) => console.log(error));

    // on test duration 
    if (uniqueId == 'cordova_not_available') return 'android-simulator';
    // if cordova was not able to detect device id
    if (uniqueId == '') return 'simulator';

    return uniqueId;
  }

  converResponseToJson(response) { return JSON.parse(response) }


  generateHeaderWithoutAccessToken() {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      "DeviceId": this.getDeviceUniqueId(),
      "LanguageId": environment.language_id,
      "ClientVersion": environment.client_version,
      "PlatformId": this.platformId
    }
  }

  generateHeaderWithAccessToken(AccessToken) {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      "DeviceId": this.getDeviceUniqueId(),
      "LanguageId": environment.language_id,
      "ClientVersion": environment.client_version,
      "PlatformId": this.platformId,
      "AccessToken": AccessToken
    }
  }


  // APIS

  //AUTHENTICATION 
  Login(username, password, role) {
    let url = `${this.apiUrl}/Auth/Login.php`;
    let params = {
      "Username": username,
      "Password": password,
      "LoginRoles": role
    }
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);

    return this.http.post(url,
      params, {}
    )
  }

  RefreshToken(OldRefreshToken, AccessToken) {
    let url = `${this.apiUrl}/Auth/RefreshToken.php`;
    let params = {
      OldRefreshToken: OldRefreshToken
    }
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.post(url, params, {});
  }

  Logout(AccessToken) {
    let url = `${this.apiUrl}/Auth/Logout.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.post(url, {}, {})
  }

  PreRequestResetPassword(Mobile) {
    let url = `${this.apiUrl}/Auth/PreRequestResetPassword.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    let params = {
      Mobile: Mobile
    }
    return this.http.post(url, params, {}
    )
  }

  RequestResetPassword(Mobile, Email, AccessToken) {
    let url = `${this.apiUrl}/Auth/RequestResetPassword.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    let params = {
      Mobile: Mobile,
      Email: Email
    }
    return this.http.post(url, params, {})
  }

  ResetPasswordByEmail(UserId, Token, NewPassword, AccessToken) {
    let url = `${this.apiUrl}/Auth/RequestResetPassword.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    let params = {
      UserId: UserId,
      Token: Token,
      NewPassword: NewPassword
    }
    return this.http.post(url, params, {})
  }


  // Master 

  GetPaymentTypes(AccessToken) {
    let url = `${this.apiUrl}/Master/GetPaymentTypes.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.get(url, {}, {})
  }

  // Login and Registration

  IsMobileRgistered(mobile) {
    let url: string = `${this.apiUrl}/Registration/IsMobileRegistered.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    let params = {
      Mobile: mobile
    }
    return this.http.get(url, params, {})
  }


  PreRegister(mobile) {
    let url = `${this.apiUrl}/Registration/PreRegister.php`;
    let parmas =
    {
      Mobile: mobile,
      SecureKey: environment.Security_Key
    }
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);

    return this.http.post(url,
      parmas, {}
    )
  }

  VerifyEmail(userid, tokenid, AccessToken) {
    let url = `${this.apiUrl}/Registration/VerifyEmail.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.post(url,
      {
        UserId: userid,
        Token: tokenid
      }, {}
    )
  }

  RequestEmailVerification(email, AccessToken) {
    let url = `${this.apiUrl}/Registration/RequestEmailVerification.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.post(url,
      {
        Email: email,
      }, {}
    )
  }

  Register(mobile, password) {
    let url = `${this.apiUrl}/Registration/Register.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    return this.http.post(url,
      {
        Mobile: mobile,
        Password: password
      }, {}
    )
  }

  SetUpline(UplineId, AccessToken) {
    let url = `${this.apiUrl}/Registration/SetUpline.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.put(url,
      {
        "UplineId": UplineId
      }, {}
    )
  }

  SetRegType(RegType, AccessToken) {
    let url = `${this.apiUrl}/Registration/SetRegType.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.put(url,
      {
        RegType: RegType
      }, {}
    )
  }

  CreatePassword(Password, AccessToken) {
    let url = `${this.apiUrl}/Registration/CreatePassword.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.put(url,
      {
        Password: Password
      }, {}
    )
  }

  CompleteProfile(UserType, Name, DisplayName, Gender, AccessToken) {
    let url = `${this.apiUrl}/Registration/CompleteProfile.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.put(url,
      {
        UserType: UserType,
        Name: Name,
        DisplayName: DisplayName,
        Gender: Gender
      }, {}

    )
  }

  GetUserInfo(MemberId, AccessToken) {
    let url = `${this.apiUrl}/User/GetUserInfo.php`;
    return this.http.get(url, { MemberId: MemberId }, this.generateHeaderWithAccessToken(AccessToken));

  }

  GetProfile(AccessToken) {
    let url = `${this.apiUrl}/User/GetProfile.php`;
    return this.http.get(url, {}, this.generateHeaderWithAccessToken(AccessToken));

  }

  AddUpline(UplineId, AccessToken) {
    let url = `${this.apiUrl}/Registration/AddUpline.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.post(url,
      {
        UplineId: UplineId,
      }, {}
    )
  }

  EditProfile(UserType, Name, DisplayName, Gender, CurrentPassword, AccessToken) {
    let url = `${this.apiUrl}/Registration/EditProfile.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.put(url,
      {
        UserType: UserType,
        Name: Name,
        DisplayName: DisplayName,
        Gender: Gender,
        CurrentPassword: CurrentPassword
      }, {}
    )
  }

  ChangePassword(CurrentPassword, NewPassword, AccessToken) {
    let url = `${this.apiUrl}/User/ChangePassword.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.put(url,
      {
        CurrentPassword: CurrentPassword,
        NewPassword: NewPassword,
      }, {}
    )
  }

  UploadProfilePhoto(Photo, AccessToken) {
    let url = `${this.apiUrl}/User/UploadProfilePhoto.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);

    let formData = new FormData();
    formData.append('Photo', Photo, 'Photo');

    return this.http.post(url,
      {
        formData
      },
      {}
    )
  }

  RequestChangeMobile(CurrentPassword, NewMobile, AccessToken) {
    let url = `${this.apiUrl}/User/RequestChangeMobile.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.post(url,
      {
        CurrentPassword: CurrentPassword,
        NewMobile: NewMobile
      }, {}
    )
  }

  ChangeMobile(NewMobile, Otp, AccessToken) {
    let url = `${this.apiUrl}/User/ChangeMobile.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.post(url,
      {
        NewMobile: NewMobile,
        Otp: Otp
      }, {}
    )
  }


  GetBankInfo(AccessToken) {
    let url = `${this.apiUrl}/User/BankInfo/GetBankInfo.php`;
    return this.http.get(url, {}, this.generateHeaderWithAccessToken(AccessToken))

  }

  EditBankInfo(AccountNo, AccountHolderName, IdentityType, IdentityNo, BankId, StatementUrl, CurrentPassword, AccessToken) {
    let url = `${this.apiUrl}/User/BankInfo/EditBankInfo.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.put(url,
      {
        AccountNo,
        AccountHolderName,
        IdentityType,
        IdentityNo,
        BankId,
        StatementUrl,
        CurrentPassword
      }, {}
    )
  }

  GetBrief(AccessToken) {
    let url = `${this.apiUrl}/Registration/GetBrief.php`;

    return this.http.get(url, {}, this.generateHeaderWithAccessToken(AccessToken))
  }

  GetBrief_Network(AccessToken) {
    let url = `${this.apiUrl}/Network/GetBrief.php`;

    return this.http.get(url, {}, this.generateHeaderWithAccessToken(AccessToken))
  }

  GetMyNetwork(LevelNumber, PageSize, PageNumber, AccessToken) {
    let url = `${this.apiUrl}/Network/GetMyNetwork.php`;
    return this.http.get(url, {
      LevelNumber,
      PageSize,
      PageNumber
    },
      this.generateHeaderWithAccessToken(AccessToken)
    )
  }

  GetUserNetwork(UserId, PageSize, PageNumber, AccessToken) {
    let url = `${this.apiUrl}/Registration/GetUserNetwork.php`;
    return this.http.get(url, {
      UserId,
      PageSize,
      PageNumber
    }, this.generateHeaderWithAccessToken(AccessToken)
    )
  }

  // Wallet 

  GetTransactions(PageSize, PageNumber, AccessToken) {
    let url = `${this.apiUrl}/Wallet/GetTransactions.php`;
    return this.http.get(url, {
      PageSize,
      PageNumber
    }, this.generateHeaderWithAccessToken(AccessToken)
    )
  }

  GetBrief_Wallet(AccessToken) {
    let url = `${this.apiUrl}/Wallet/GetBrief.php`;
    return this.http.get(url, {}, this.generateHeaderWithAccessToken(AccessToken))
  }

  PreRequestWithdraw(AccessToken) {
    let url = `${this.apiUrl}/Wallet/PreRequestWithdraw.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.post(url, {}, {})
  }

  RequestWithdraw(Otp, AccessToken) {
    let url = `${this.apiUrl}/Wallet/RequestWithdraw.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.post(url,
      {
        Otp
      }, {})
  }


  // Notification

  Register_Notification(FcmToken, AccessToken) {
    let url = `${this.apiUrl}/Notification/Register.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.post(url,
      {
        FcmToken
      }, {})
  }

  GetHistory(PageSize, PageNumber, AccessToken) {
    let url = `${this.apiUrl}/Notification/GetHistory.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.get(url,
      {
        PageSize,
        PageNumber
      }, {}
    )
  }

  // Application 

  AddFeedback(Title, Body, NumberOfStars, AccessToken) {
    let url = `${this.apiUrl}/Application/AddFeedback.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.post(url,
      {
        Title,
        Body,
        NumberOfStars
      }, {}
    )
  }

  AddComplaint(Title, Body, AccessToken) {
    let url = `${this.apiUrl}/Application/AddComplaint.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.post(url,
      {
        Title,
        Body
      }, {})
  }

  // Payment 

  CreateOrder(OrderType, Amount, AccessToken) {
    let url = `${this.apiUrl}/Payment/CreateOrder.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.post(url,
      {
        OrderType,
        Amount
      }, {})
  }

  DateFeed(Prc, Src, SuccessCode, OrderRef, AsiaPayRef, CurrencyCode, Amount, AuthStatus, SecureHash, AccessToken) {
    let url = `${this.apiUrl}/Payment/DateFeed.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.post(url,
      {
        Prc,
        Src,
        SuccessCode,
        OrderRef,
        AsiaPayRef,
        CurrencyCode,
        Amount,
        AuthStatus,
        SecureHash
      }, {})
  }

  // Master 

  GetBanks(AccessToken) {
    let url = `${this.apiUrl}/Master/GetBanks.php`;
    this.http.setDataSerializer("json");
    this.http.setHeader("*", "Content-Type", "application/json");
    this.http.setHeader("*", "Accept", "");
    this.http.setHeader("*", "Access-Control-Allow-Headers", "");
    this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
    this.http.setHeader("*", "LanguageId", environment.language_id);
    this.http.setHeader("*", "ClientVersion", environment.client_version);
    this.http.setHeader("*", "PlatformId", this.platformId);
    this.http.setHeader("*", "AccessToken", AccessToken);
    return this.http.get(url,
      {}, {}
    )
  }

  //FileUpload
  public UploadUserProfilePhoto(file: any, AccessToken): Promise<any> {

    let header = {
      "DeviceId": this.getDeviceUniqueId(),
      "LanguageId": environment.language_id,
      "ClientVersion": environment.client_version,
      "PlatformId": this.platformId,
      "AccessToken": AccessToken
    }

    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'Photo',
      fileName: 'Photo',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: header
    }
    return fileTransfer.upload(file, `${this.apiUrl}/User/UploadProfilePhoto.php`, options);
  }

  public UploadStatement(file: any, AccessToken): Promise<any> {

    let header = {
      "Content-Type": "application/json",
      "Accept": "",
      "Access-Control-Allow-Headers": "",
      "DeviceId": this.getDeviceUniqueId(),
      "LanguageId": environment.language_id,
      "ClientVersion": environment.client_version,
      "PlatformId": this.platformId,
      "AccessToken": AccessToken
    }

    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'Photo',
      fileName: 'Photo',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: header
    }

    return fileTransfer.upload(file.imageURI, `${this.apiUrl}/User/UploadProfilePhoto.php`, options);
  }
}

