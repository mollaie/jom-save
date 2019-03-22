import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
var NativeApiService = /** @class */ (function () {
    function NativeApiService(http, plaftorm, uniqueDeviceID) {
        this.http = http;
        this.plaftorm = plaftorm;
        this.uniqueDeviceID = uniqueDeviceID;
        this.apiUrl = environment.api;
        this.platformId = this.plaftorm.is('ios') || this.plaftorm.is('iphone') || this.plaftorm.is('ipad') ? '2' : '3';
    }
    NativeApiService.prototype.getDeviceUniqueId = function () {
        var uniqueId = '';
        this.uniqueDeviceID.get()
            .then(function (uuid) { return uniqueId = uuid; })
            .catch(function (error) { return console.log(error); });
        // on test duration 
        if (uniqueId == 'cordova_not_available')
            return 'android-simulator';
        // if cordova was not able to detect device id
        if (uniqueId == '')
            return 'simulator';
        return uniqueId;
    };
    NativeApiService.prototype.converResponseToJson = function (response) { return JSON.parse(response); };
    NativeApiService.prototype.generateHeaderWithoutAccessToken = function () {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            "DeviceId": this.getDeviceUniqueId(),
            "LanguageId": environment.language_id,
            "ClientVersion": environment.client_version,
            "PlatformId": this.platformId
        };
    };
    NativeApiService.prototype.generateHeaderWithAccessToken = function (AccessToken) {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            "DeviceId": this.getDeviceUniqueId(),
            "LanguageId": environment.language_id,
            "ClientVersion": environment.client_version,
            "PlatformId": this.platformId,
            "AccessToken": AccessToken
        };
    };
    // APIS
    //AUTHENTICATION 
    NativeApiService.prototype.Login = function (username, password, role) {
        var url = this.apiUrl + "/Auth/Login.php";
        var params = {
            "Username": username,
            "Password": password,
            "LoginRoles": [role]
        };
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        return this.http.post(url, params, {});
    };
    NativeApiService.prototype.RefreshToken = function (OldRefreshToken, AccessToken) {
        var url = this.apiUrl + "/Auth/RefreshToken.php";
        var params = {
            OldRefreshToken: OldRefreshToken
        };
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
    };
    NativeApiService.prototype.Logout = function (AccessToken) {
        var url = this.apiUrl + "/Auth/Logout.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {}, {});
    };
    NativeApiService.prototype.PreRequestResetPassword = function (Mobile, AccessToken) {
        var url = this.apiUrl + "/Auth/PreRequestResetPassword.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        var params = {
            Mobile: Mobile
        };
        return this.http.post(url, params, {});
    };
    NativeApiService.prototype.RequestResetPassword = function (Mobile, Email, AccessToken) {
        var url = this.apiUrl + "/Auth/RequestResetPassword.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        var params = {
            Mobile: Mobile,
            Email: Email
        };
        return this.http.post(url, params, {});
    };
    NativeApiService.prototype.ResetPasswordByEmail = function (UserId, Token, NewPassword, AccessToken) {
        var url = this.apiUrl + "/Auth/RequestResetPassword.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        var params = {
            UserId: UserId,
            Token: Token,
            NewPassword: NewPassword
        };
        return this.http.post(url, params, {});
    };
    // Master 
    NativeApiService.prototype.GetPaymentTypes = function (AccessToken) {
        var url = this.apiUrl + "/Master/GetPaymentTypes.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.get(url, {}, {});
    };
    // Login and Registration
    NativeApiService.prototype.IsMobileRgistered = function (mobile) {
        var url = this.apiUrl + "/Registration/IsMobileRegistered.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        var params = {
            Mobile: mobile
        };
        return this.http.get(url, params, {});
    };
    NativeApiService.prototype.PreRegister = function (mobile) {
        var url = this.apiUrl + "/Registration/PreRegister.php";
        var parmas = {
            Mobile: mobile,
            SecureKey: environment.Security_Key
        };
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        return this.http.post(url, parmas, {});
    };
    NativeApiService.prototype.VerifyEmail = function (userid, tokenid, AccessToken) {
        var url = this.apiUrl + "/Registration/VerifyEmail.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            UserId: userid,
            Token: tokenid
        }, {});
    };
    NativeApiService.prototype.RequestEmailVerification = function (email, AccessToken) {
        var url = this.apiUrl + "/Registration/RequestEmailVerification.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            Email: email,
        }, {});
    };
    NativeApiService.prototype.Register = function (mobile, password, AccessToken) {
        var url = this.apiUrl + "/Registration/Register.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            Mobile: mobile,
            Password: password
        }, {});
    };
    NativeApiService.prototype.SetUpline = function (UplineId, AccessToken) {
        var url = this.apiUrl + "/Registration/SetUpline.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.put(url, {
            "UplineId": UplineId
        }, {});
    };
    NativeApiService.prototype.SetRegType = function (RegType, AccessToken) {
        var url = this.apiUrl + "/Registration/SetRegType.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.put(url, {
            RegType: RegType
        }, {});
    };
    NativeApiService.prototype.CreatePassword = function (Password, AccessToken) {
        var url = this.apiUrl + "/Registration/CreatePassword.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.put(url, {
            Password: Password
        }, {});
    };
    NativeApiService.prototype.CompleteProfile = function (UserType, Name, DisplayName, Gender, AccessToken) {
        var url = this.apiUrl + "/Registration/CompleteProfile.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.put(url, {
            UserType: UserType,
            Name: Name,
            DisplayName: DisplayName,
            Gender: Gender
        }, {});
    };
    NativeApiService.prototype.GetUserInfo = function (MemberId, AccessToken) {
        var url = this.apiUrl + "/User/GetUserInfo.php";
        return this.http.get(url, { MemberId: MemberId }, this.generateHeaderWithAccessToken(AccessToken));
    };
    NativeApiService.prototype.GetProfile = function (AccessToken) {
        var url = this.apiUrl + "/User/GetProfile.php";
        return this.http.get(url, {}, this.generateHeaderWithAccessToken(AccessToken));
    };
    NativeApiService.prototype.AddUpline = function (UplineId, AccessToken) {
        var url = this.apiUrl + "/Registration/AddUpline.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            UplineId: UplineId,
        }, {});
    };
    NativeApiService.prototype.EditProfile = function (UserType, Name, DisplayName, Gender, CurrentPassword, AccessToken) {
        var url = this.apiUrl + "/Registration/EditProfile.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.put(url, {
            UserType: UserType,
            Name: Name,
            DisplayName: DisplayName,
            Gender: Gender,
            CurrentPassword: CurrentPassword
        }, {});
    };
    NativeApiService.prototype.ChangePassword = function (CurrentPassword, NewPassword, AccessToken) {
        var url = this.apiUrl + "/User/ChangePassword.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.put(url, {
            CurrentPassword: CurrentPassword,
            NewPassword: NewPassword,
        }, {});
    };
    NativeApiService.prototype.UploadProfilePhoto = function (Photo, AccessToken) {
        var url = this.apiUrl + "/Registration/UploadProfilePhoto.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            Photo: Photo,
        }, {});
    };
    NativeApiService.prototype.RequestChangeMobile = function (CurrentPassword, NewMobile, AccessToken) {
        var url = this.apiUrl + "/Registration/RequestChangeMobile.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            CurrentPassword: CurrentPassword,
            NewMobile: NewMobile
        }, {});
    };
    NativeApiService.prototype.ChangeMobile = function (NewMobile, Otp, AccessToken) {
        var url = this.apiUrl + "/Registration/ChangeMobile.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            NewMobile: NewMobile,
            Otp: Otp
        }, {});
    };
    NativeApiService.prototype.UploadStatement = function (Statement, AccessToken) {
        var url = this.apiUrl + "/Registration/EditBankInfo.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            Statement: Statement,
        }, {});
    };
    NativeApiService.prototype.GetBankInfo = function (AccessToken) {
        var url = this.apiUrl + "/Registration/GetBankInfo.php";
        return this.http.get(url, {}, this.generateHeaderWithAccessToken(AccessToken));
    };
    NativeApiService.prototype.EditBankInfo = function (AccountNo, AccountHolderName, IdentityType, IdentityNo, BankId, StatementUrl, CurrentPassword, AccessToken) {
        var url = this.apiUrl + "/Registration/EditBankInfo.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            AccountNo: AccountNo,
            AccountHolderName: AccountHolderName,
            IdentityType: IdentityType,
            IdentityNo: IdentityNo,
            BankId: BankId,
            StatementUrl: StatementUrl,
            CurrentPassword: CurrentPassword
        }, {});
    };
    NativeApiService.prototype.GetBrief = function (AccessToken) {
        var url = this.apiUrl + "/Registration/GetBrief.php";
        return this.http.get(url, {}, this.generateHeaderWithAccessToken(AccessToken));
    };
    NativeApiService.prototype.GetMyNetwork = function (LevelNumber, PageSize, PageNumber, AccessToken) {
        var url = this.apiUrl + "/Registration/GetMyNetwork.php";
        return this.http.get(url, { LevelNumber: LevelNumber,
            PageSize: PageSize,
            PageNumber: PageNumber }, this.generateHeaderWithAccessToken(AccessToken));
    };
    NativeApiService.prototype.GetUserNetwork = function (UserId, PageSize, PageNumber, AccessToken) {
        var url = this.apiUrl + "/Registration/GetUserNetwork.php";
        return this.http.get(url, { UserId: UserId,
            PageSize: PageSize,
            PageNumber: PageNumber }, this.generateHeaderWithAccessToken(AccessToken));
    };
    // Wallet 
    NativeApiService.prototype.GetTransactions = function (PageSize, PageNumber, AccessToken) {
        var url = this.apiUrl + "/Wallet/GetTransactions.php";
        return this.http.get(url, {
            PageSize: PageSize,
            PageNumber: PageNumber
        }, this.generateHeaderWithAccessToken(AccessToken));
    };
    NativeApiService.prototype.GetBrief_Wallet = function (AccessToken) {
        var url = this.apiUrl + "/Wallet/GetBrief.php";
        return this.http.get(url, {}, this.generateHeaderWithAccessToken(AccessToken));
    };
    NativeApiService.prototype.PreRequestWithdraw = function (AccessToken) {
        var url = this.apiUrl + "/Wallet/PreRequestWithdraw.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {}, {});
    };
    NativeApiService.prototype.RequestWithdraw = function (Otp, AccessToken) {
        var url = this.apiUrl + "/Wallet/RequestWithdraw.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            Otp: Otp
        }, {});
    };
    // Notification
    NativeApiService.prototype.Register_Notification = function (FcmToken, AccessToken) {
        var url = this.apiUrl + "/Notification/GetHistory.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            FcmToken: FcmToken
        }, {});
    };
    NativeApiService.prototype.GetHistory = function (PageSize, PageNumber, AccessToken) {
        var url = this.apiUrl + "/Notification/Register.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            PageSize: PageSize,
            PageNumber: PageNumber
        }, {});
    };
    // Application 
    NativeApiService.prototype.AddFeedback = function (Title, Body, NumberOfStars, AccessToken) {
        var url = this.apiUrl + "/Notification/AddFeedback.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            Title: Title,
            Body: Body,
            NumberOfStars: NumberOfStars
        }, {});
    };
    NativeApiService.prototype.AddComplaint = function (Title, Body, AccessToken) {
        var url = this.apiUrl + "/Notification/AddComplaint.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            Title: Title,
            Body: Body
        }, {});
    };
    // Payment 
    NativeApiService.prototype.CreateOrder = function (OrderType, Amount, AccessToken) {
        var url = this.apiUrl + "/Payment/CreateOrder.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            OrderType: OrderType,
            Amount: Amount
        }, {});
    };
    NativeApiService.prototype.DateFeed = function (Prc, Src, SuccessCode, OrderRef, AsiaPayRef, CurrencyCode, Amount, AuthStatus, SecureHash, AccessToken) {
        var url = this.apiUrl + "/Payment/DateFeed.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", environment.language_id);
        this.http.setHeader("*", "ClientVersion", environment.client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            Prc: Prc,
            Src: Src,
            SuccessCode: SuccessCode,
            OrderRef: OrderRef,
            AsiaPayRef: AsiaPayRef,
            CurrencyCode: CurrencyCode,
            Amount: Amount,
            AuthStatus: AuthStatus,
            SecureHash: SecureHash
        }, {});
    };
    NativeApiService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HTTP,
            Platform,
            UniqueDeviceID])
    ], NativeApiService);
    return NativeApiService;
}());
export { NativeApiService };
//# sourceMappingURL=native-api.service.js.map