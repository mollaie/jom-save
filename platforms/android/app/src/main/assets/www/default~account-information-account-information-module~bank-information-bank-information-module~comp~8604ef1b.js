(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~account-information-account-information-module~bank-information-bank-information-module~comp~8604ef1b"],{

/***/ "./src/app/services/native-api/native-api.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/native-api/native-api.service.ts ***!
  \***********************************************************/
/*! exports provided: NativeApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeApiService", function() { return NativeApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "./node_modules/@ionic-native/unique-device-id/ngx/index.js");






var NativeApiService = /** @class */ (function () {
    function NativeApiService(http, plaftorm, uniqueDeviceID) {
        this.http = http;
        this.plaftorm = plaftorm;
        this.uniqueDeviceID = uniqueDeviceID;
        this.apiUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].api;
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
            "LanguageId": _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id,
            "ClientVersion": _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version,
            "PlatformId": this.platformId
        };
    };
    NativeApiService.prototype.generateHeaderWithAccessToken = function (AccessToken) {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            "DeviceId": this.getDeviceUniqueId(),
            "LanguageId": _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id,
            "ClientVersion": _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version,
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
            "LoginRoles": role
        };
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
            SecureKey: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].Security_Key
        };
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            Email: email,
        }, {});
    };
    NativeApiService.prototype.Register = function (mobile, password) {
        var url = this.apiUrl + "/Registration/Register.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.put(url, {
            CurrentPassword: CurrentPassword,
            NewPassword: NewPassword,
        }, {});
    };
    NativeApiService.prototype.UploadProfilePhoto = function (Photo, AccessToken) {
        var url = this.apiUrl + "/User/UploadProfilePhoto.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        var formData = new FormData();
        formData.append('Photo', Photo, 'Photo');
        return this.http.post(url, {
            formData: formData
        }, {});
    };
    NativeApiService.prototype.RequestChangeMobile = function (CurrentPassword, NewMobile, AccessToken) {
        var url = this.apiUrl + "/Registration/RequestChangeMobile.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            Statement: Statement,
        }, {});
    };
    NativeApiService.prototype.GetBankInfo = function (AccessToken) {
        var url = this.apiUrl + "/User/BankInfo/GetBankInfo.php";
        return this.http.get(url, {}, this.generateHeaderWithAccessToken(AccessToken));
    };
    NativeApiService.prototype.EditBankInfo = function (AccountNo, AccountHolderName, IdentityType, IdentityNo, BankId, StatementUrl, CurrentPassword, AccessToken) {
        var url = this.apiUrl + "/User/BankInfo/EditBankInfo.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.put(url, {
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
    NativeApiService.prototype.GetBrief_Network = function (AccessToken) {
        var url = this.apiUrl + "/Network/GetBrief.php";
        return this.http.get(url, {}, this.generateHeaderWithAccessToken(AccessToken));
    };
    NativeApiService.prototype.GetMyNetwork = function (LevelNumber, PageSize, PageNumber, AccessToken) {
        var url = this.apiUrl + "/Network/GetMyNetwork.php";
        return this.http.get(url, {
            LevelNumber: LevelNumber,
            PageSize: PageSize,
            PageNumber: PageNumber
        }, this.generateHeaderWithAccessToken(AccessToken));
    };
    NativeApiService.prototype.GetUserNetwork = function (UserId, PageSize, PageNumber, AccessToken) {
        var url = this.apiUrl + "/Registration/GetUserNetwork.php";
        return this.http.get(url, {
            UserId: UserId,
            PageSize: PageSize,
            PageNumber: PageNumber
        }, this.generateHeaderWithAccessToken(AccessToken));
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            FcmToken: FcmToken
        }, {});
    };
    NativeApiService.prototype.GetHistory = function (PageSize, PageNumber, AccessToken) {
        var url = this.apiUrl + "/Notification/GetHistory.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.get(url, {
            PageSize: PageSize,
            PageNumber: PageNumber
        }, {});
    };
    // Application 
    NativeApiService.prototype.AddFeedback = function (Title, Body, NumberOfStars, AccessToken) {
        var url = this.apiUrl + "/Application/AddFeedback.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.post(url, {
            Title: Title,
            Body: Body,
            NumberOfStars: NumberOfStars
        }, {});
    };
    NativeApiService.prototype.AddComplaint = function (Title, Body, AccessToken) {
        var url = this.apiUrl + "/Application/AddComplaint.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
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
    // Master 
    NativeApiService.prototype.GetBanks = function (AccessToken) {
        var url = this.apiUrl + "/Master/GetBanks.php";
        this.http.setDataSerializer("json");
        this.http.setHeader("*", "Content-Type", "application/json");
        this.http.setHeader("*", "Accept", "");
        this.http.setHeader("*", "Access-Control-Allow-Headers", "");
        this.http.setHeader("*", "DeviceId", this.getDeviceUniqueId());
        this.http.setHeader("*", "LanguageId", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id);
        this.http.setHeader("*", "ClientVersion", _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version);
        this.http.setHeader("*", "PlatformId", this.platformId);
        this.http.setHeader("*", "AccessToken", AccessToken);
        return this.http.get(url, {}, {});
    };
    NativeApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_5__["UniqueDeviceID"]])
    ], NativeApiService);
    return NativeApiService;
}());



/***/ }),

/***/ "./src/app/services/rest-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/rest-api.service.ts ***!
  \**********************************************/
/*! exports provided: RestApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestApiService", function() { return RestApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "./node_modules/@ionic-native/unique-device-id/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var apiUrl = '/Api'; //environment.api;
var urlAddOn = ''; //'https://cors-anywhere.herokuapp.com/';
var RestApiService = /** @class */ (function () {
    function RestApiService(http, plaftorm, uniqueDeviceID) {
        this.http = http;
        this.plaftorm = plaftorm;
        this.uniqueDeviceID = uniqueDeviceID;
        this.platformId = this.plaftorm.is('ios') || this.plaftorm.is('iphone') || this.plaftorm.is('ipad') ? '2' : '3';
        this.headersWithAccessToken = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]()
            .set('DeviceId', this.getDeviceUniqueId())
            .set('LanguageId', _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id)
            .set('ClientVersion', _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version)
            .set('PlatformId', this.platformId)
            .set('Content-Type', 'application/json');
        this.headersWithoutAccessToken = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]()
            .set('DeviceId', this.getDeviceUniqueId())
            .set('LanguageId', _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id)
            .set('ClientVersion', _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version)
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
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]()
            .set('DeviceId', this.getDeviceUniqueId())
            .set('LanguageId', _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].language_id)
            .set('ClientVersion', _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].client_version)
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
            "LoginRoles": role
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
        return this.http.post(url, {
            "Mobile": mobile,
            "SecureKey": _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].Security_Key
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
    RestApiService.prototype.Register = function (mobile, password) {
        var url = "/Api/Registration/Register.php";
        var headers = this.headersWithoutAccessToken;
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
        var url = "/Api/User/BankInfo/GetBankInfo.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.get(url, {
            headers: headers,
            params: {}
        });
    };
    RestApiService.prototype.EditBankInfo = function (AccountNo, AccountHolderName, IdentityType, IdentityNo, BankId, StatementUrl, CurrentPassword, AccessToken) {
        var url = "/Api/User/BankInfo/EditBankInfo.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.put(url, {
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
    RestApiService.prototype.GetBrief_Network = function (AccessToken) {
        var url = "/Api/Network/GetBrief.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.get(url, {
            headers: headers,
        });
    };
    RestApiService.prototype.GetMyNetwork = function (LevelNumber, PageSize, PageNumber, AccessToken) {
        var url = "/Api/Network/GetMyNetwork.php";
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
        var url = "/Api/Network/GetUserNetwork.php";
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
        var url = "/Api/Notification/GetHistory.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.get(url, {
            headers: headers,
            params: {
                PageSize: PageSize,
                PageNumber: PageNumber
            }
        });
    };
    // Application 
    RestApiService.prototype.AddFeedback = function (Title, Body, NumberOfStars, AccessToken) {
        var url = "/Api/Application/AddFeedback.php";
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
        var url = "/Api/Application/AddComplaint.php";
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
    RestApiService.prototype.GetBanks = function (AccessToken) {
        var url = "/Api/Master/GetBanks.php";
        var headers = this.reNewHeaderWithAccessToken(AccessToken);
        return this.http.get(url, {
            headers: headers,
            params: {}
        });
    };
    RestApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_4__["UniqueDeviceID"]])
    ], RestApiService);
    return RestApiService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    static_resouse_path: '../assets/images',
    client_version: '1.0',
    language_id: '1',
    Security_Key: 'PD2UR1USSUPQVW5ZX1SZDMIGP2IJBE6YNO03L797PKSIHDLFVBI0VXC6GG2R3OU',
    api: 'http://p-stage.jomsave.com/Api',
    //api:'116.193.156.241/Api',
    orderAmount: 100,
    isDebug: false
};


/***/ })

}]);
//# sourceMappingURL=default~account-information-account-information-module~bank-information-bank-information-module~comp~8604ef1b.js.map