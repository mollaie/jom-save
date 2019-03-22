import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Platform } from '@ionic/angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var apiUrl = '/Api'; //environment.api;
var urlAddOn = ''; //'https://cors-anywhere.herokuapp.com/';
var RestApiService = /** @class */ (function () {
    function RestApiService(http, plaftorm, uniqueDeviceID) {
        this.http = http;
        this.plaftorm = plaftorm;
        this.uniqueDeviceID = uniqueDeviceID;
        this.platformId = this.plaftorm.is('ios') || this.plaftorm.is('iphone') || this.plaftorm.is('ipad') ? '2' : '3';
        this.headersWithAccessToken = new HttpHeaders()
            .set('DeviceId', this.getDeviceUniqueId())
            .set('LanguageId', environment.language_id)
            .set('ClientVersion', environment.client_version)
            .set('PlatformId', this.platformId)
            .set('Content-Type', 'application/json');
        this.headersWithoutAccessToken = new HttpHeaders()
            .set('DeviceId', this.getDeviceUniqueId())
            .set('LanguageId', environment.language_id)
            .set('ClientVersion', environment.client_version)
            .set('PlatformId', this.platformId)
            .set('Content-Type', 'application/json');
    }
    RestApiService.prototype.getDeviceUniqueId = function () {
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
    RestApiService.prototype.converResponseToJson = function (response) { return JSON.parse(JSON.stringify(response)); };
    RestApiService.prototype.reNewHeaderWithAccessToken = function (AccessToken) {
        var httpHeaders = new HttpHeaders()
            .set('DeviceId', this.getDeviceUniqueId())
            .set('LanguageId', environment.language_id)
            .set('ClientVersion', environment.client_version)
            .set('PlatformId', this.platformId)
            .set('AccessToken', AccessToken);
        return httpHeaders;
    };
    // APIS
    //AUTHENTICATION 
    RestApiService.prototype.Login = function (username, password, role) {
        var url = "/Api/Auth/Login.php";
        return this.http.post(url, {
            "Username": username,
            "Password": password,
            "LoginRoles": [role]
        }, {
            headers: this.headersWithoutAccessToken,
        });
    };
    RestApiService.prototype.RefreshToken = function (OldRefreshToken, AccessToken) {
        var url = "/Api/Auth/RefreshToken.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            OldRefreshToken: OldRefreshToken
        }, {
            headers: headers,
        });
    };
    RestApiService.prototype.Logout = function (AccessToken) {
        var url = "/Api/Auth/Logout.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            headers: headers
        });
    };
    RestApiService.prototype.PreRequestResetPassword = function (Mobile, AccessToken) {
        var url = "/Api/Auth/PreRequestResetPassword.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            Mobile: Mobile
        }, {
            headers: headers
        });
    };
    RestApiService.prototype.RequestResetPassword = function (Mobile, Email, AccessToken) {
        var url = "/Api/Auth/RequestResetPassword.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            Mobile: Mobile,
            Email: Email
        }, {
            headers: headers
        });
    };
    RestApiService.prototype.ResetPasswordByEmail = function (UserId, Token, NewPassword, AccessToken) {
        var url = "/Api/Auth/RequestResetPassword.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            UserId: UserId,
            Token: Token,
            NewPassword: NewPassword
        }, {
            headers: headers
        });
    };
    // Master 
    RestApiService.prototype.GetPaymentTypes = function (AccessToken) {
        var url = "/Api/Master/GetPaymentTypes.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.get(url, {
            headers: headers,
            params: {}
        });
    };
    // Login and Registration
    RestApiService.prototype.IsMobileRgistered = function (mobile) {
        var url = "/Api/Registration/IsMobileRegistered.php";
        return this.http.get(url, {
            headers: this.headersWithAccessToken,
            params: {
                Mobile: mobile
            }
        });
    };
    RestApiService.prototype.PreRegister = function (mobile) {
        var url = "/Api/Registration/PreRegister.php";
        console.log(this.headersWithoutAccessToken);
        return this.http.post(url, {
            "Mobile": mobile,
            "SecureKey": environment.Security_Key
        }, {
            headers: this.headersWithoutAccessToken,
        });
    };
    RestApiService.prototype.VerifyEmail = function (userid, tokenid, AccessToken) {
        var url = "/Api/Registration/VerifyEmail.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            UserId: userid,
            Token: tokenid
        }, {
            headers: headers
        });
    };
    RestApiService.prototype.RequestEmailVerification = function (email, AccessToken) {
        var url = "/Api/Registration/RequestEmailVerification.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            Email: email,
        }, {
            headers: headers
        });
    };
    RestApiService.prototype.Register = function (mobile, password, AccessToken) {
        var url = "/Api/Registration/Register.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            Mobile: mobile,
            Password: password
        }, {
            headers: headers,
        });
    };
    RestApiService.prototype.SetUpline = function (UplineId, AccessToken) {
        var url = "/Api/Registration/SetUpline.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.put(url, {
            "UplineId": UplineId
        }, {
            headers: headers,
        });
    };
    RestApiService.prototype.SetRegType = function (RegType, AccessToken) {
        var url = "/Api/Registration/SetRegType.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.put(url, {
            RegType: RegType
        }, { headers: headers });
    };
    RestApiService.prototype.CreatePassword = function (Password, AccessToken) {
        var url = "/Api/Registration/CreatePassword.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.put(url, {
            Password: Password
        }, {
            headers: headers
        });
    };
    RestApiService.prototype.CompleteProfile = function (UserType, Name, DisplayName, Gender, AccessToken) {
        var url = "/Api/Registration/CompleteProfile.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.put(url, {
            UserType: UserType,
            Name: Name,
            DisplayName: DisplayName,
            Gender: Gender
        }, {
            headers: headers
        });
    };
    RestApiService.prototype.GetUserInfo = function (MemberId, AccessToken) {
        var url = "/Api/User/GetUserInfo.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        console.log(headers);
        return this.http.get(url, {
            headers: headers,
            params: {
                MemberId: MemberId
            }
        });
    };
    RestApiService.prototype.GetProfile = function (AccessToken) {
        var url = "/Api/User/GetProfile.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.get(url, {
            headers: headers,
            params: {}
        });
    };
    RestApiService.prototype.AddUpline = function (UplineId, AccessToken) {
        var url = "/Api/Registration/AddUpline.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            UplineId: UplineId,
        }, {
            headers: headers
        });
    };
    RestApiService.prototype.EditProfile = function (UserType, Name, DisplayName, Gender, CurrentPassword, AccessToken) {
        var url = "/Api/Registration/EditProfile.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.put(url, {
            UserType: UserType,
            Name: Name,
            DisplayName: DisplayName,
            Gender: Gender,
            CurrentPassword: CurrentPassword
        }, {
            headers: headers,
        });
    };
    RestApiService.prototype.ChangePassword = function (CurrentPassword, NewPassword, AccessToken) {
        var url = "/Api/User/ChangePassword.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.put(url, {
            CurrentPassword: CurrentPassword,
            NewPassword: NewPassword,
        }, {
            headers: headers,
        });
    };
    RestApiService.prototype.UploadProfilePhoto = function (Photo, AccessToken) {
        var url = "/Api/Registration/UploadProfilePhoto.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            Photo: Photo,
        }, {
            headers: headers
        });
    };
    RestApiService.prototype.RequestChangeMobile = function (CurrentPassword, NewMobile, AccessToken) {
        var url = "/Api/Registration/RequestChangeMobile.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            CurrentPassword: CurrentPassword,
            NewMobile: NewMobile
        }, {
            headers: headers,
        });
    };
    RestApiService.prototype.ChangeMobile = function (NewMobile, Otp, AccessToken) {
        var url = "/Api/Registration/ChangeMobile.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            NewMobile: NewMobile,
            Otp: Otp
        }, {
            headers: headers,
        });
    };
    RestApiService.prototype.UploadStatement = function (Statement, AccessToken) {
        var url = "/Api/Registration/EditBankInfo.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            Statement: Statement,
        }, {
            headers: headers,
        });
    };
    RestApiService.prototype.GetBankInfo = function (AccessToken) {
        var url = "/Api/Registration/GetBankInfo.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.get(url, {
            headers: headers,
            params: {}
        });
    };
    RestApiService.prototype.EditBankInfo = function (AccountNo, AccountHolderName, IdentityType, IdentityNo, BankId, StatementUrl, CurrentPassword, AccessToken) {
        var url = "/Api/Registration/EditBankInfo.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            AccountNo: AccountNo,
            AccountHolderName: AccountHolderName,
            IdentityType: IdentityType,
            IdentityNo: IdentityNo,
            BankId: BankId,
            StatementUrl: StatementUrl,
            CurrentPassword: CurrentPassword
        }, {
            headers: headers,
        });
    };
    RestApiService.prototype.GetBrief = function (AccessToken) {
        var url = "/Api/Registration/GetBrief.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.get(url, {
            headers: headers,
        });
    };
    RestApiService.prototype.GetMyNetwork = function (LevelNumber, PageSize, PageNumber, AccessToken) {
        var url = "/Api/Registration/GetMyNetwork.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.get(url, {
            headers: headers,
            params: {
                LevelNumber: LevelNumber,
                PageSize: PageSize,
                PageNumber: PageNumber
            }
        });
    };
    RestApiService.prototype.GetUserNetwork = function (UserId, PageSize, PageNumber, AccessToken) {
        var url = "/Api/Registration/GetUserNetwork.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.get(url, {
            headers: headers,
            params: {
                UserId: UserId,
                PageSize: PageSize,
                PageNumber: PageNumber
            }
        });
    };
    // Wallet 
    RestApiService.prototype.GetTransactions = function (PageSize, PageNumber, AccessToken) {
        var url = "/Api/Wallet/GetTransactions.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.get(url, {
            headers: headers,
            params: {
                PageSize: PageSize,
                PageNumber: PageNumber
            }
        });
    };
    RestApiService.prototype.GetBrief_Wallet = function (AccessToken) {
        var url = "/Api/Wallet/GetBrief.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.get(url, {
            headers: headers,
            params: {}
        });
    };
    RestApiService.prototype.PreRequestWithdraw = function (AccessToken) {
        var url = "/Api/Wallet/PreRequestWithdraw.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            headers: headers
        });
    };
    RestApiService.prototype.RequestWithdraw = function (Otp, AccessToken) {
        var url = "/Api/Wallet/RequestWithdraw.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            Otp: Otp
        }, {
            headers: headers
        });
    };
    // Notification
    RestApiService.prototype.Register_Notification = function (FcmToken, AccessToken) {
        var url = "/Api/Notification/GetHistory.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            FcmToken: FcmToken
        }, {
            headers: headers,
        });
    };
    RestApiService.prototype.GetHistory = function (PageSize, PageNumber, AccessToken) {
        var url = "/Api/Notification/Register.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            PageSize: PageSize,
            PageNumber: PageNumber
        }, {
            headers: headers,
        });
    };
    // Application 
    RestApiService.prototype.AddFeedback = function (Title, Body, NumberOfStars, AccessToken) {
        var url = "/Api/Notification/AddFeedback.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            Title: Title,
            Body: Body,
            NumberOfStars: NumberOfStars
        }, {
            headers: headers,
        });
    };
    RestApiService.prototype.AddComplaint = function (Title, Body, AccessToken) {
        var url = "/Api/Notification/AddComplaint.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            Title: Title,
            Body: Body
        }, {
            headers: headers,
        });
    };
    // Payment 
    RestApiService.prototype.CreateOrder = function (OrderType, Amount, AccessToken) {
        var url = "/Api/Payment/CreateOrder.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.post(url, {
            OrderType: OrderType,
            Amount: Amount
        }, {
            headers: headers,
        });
    };
    RestApiService.prototype.DateFeed = function (Prc, Src, SuccessCode, OrderRef, AsiaPayRef, CurrencyCode, Amount, AuthStatus, SecureHash, AccessToken) {
        var url = "/Api/Payment/DateFeed.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
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
        }, {
            headers: headers,
        });
    };
    RestApiService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            Platform,
            UniqueDeviceID])
    ], RestApiService);
    return RestApiService;
}());
export { RestApiService };
//# sourceMappingURL=rest-api.service.js.map