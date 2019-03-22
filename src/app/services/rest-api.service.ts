import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

import { Platform } from '@ionic/angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

var apiUrl :string = environment.api;
var urlAddOn : string = ''//'https://cors-anywhere.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})


export class RestApiService {

  constructor(
    public http: HttpClient,
    private plaftorm: Platform,
    private uniqueDeviceID: UniqueDeviceID) {
  }

  platformId = this.plaftorm.is('ios') || this.plaftorm.is('iphone') || this.plaftorm.is('ipad') ? '2' : '3';
  headersWithAccessToken = new HttpHeaders()
    .set('DeviceId', this.getDeviceUniqueId())
    .set('LanguageId', environment.language_id)
    .set('ClientVersion', environment.client_version)
    .set('PlatformId', this.platformId)
    .set('Content-Type','application/json');

  headersWithoutAccessToken = new HttpHeaders()
    .set('DeviceId', this.getDeviceUniqueId())
    .set('LanguageId', environment.language_id)
    .set('ClientVersion', environment.client_version)
    .set('PlatformId', this.platformId)
    .set('Content-Type','application/json');

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

  converResponseToJson(response) { return JSON.parse(JSON.stringify(response)) }

  reNewHeaderWithAccessToken(AccessToken) {
    let httpHeaders = new HttpHeaders()
      .set('DeviceId', this.getDeviceUniqueId())
      .set('LanguageId', environment.language_id)
      .set('ClientVersion', environment.client_version)
      .set('PlatformId', this.platformId)
      .set('AccessToken', AccessToken);
    return httpHeaders;
  }

  // APIS

  //AUTHENTICATION 
  Login(username, password, role):Observable<any> {
    let url = `${apiUrl}/Auth/Login.php`;
    return this.http.post(url, 
      {
        "Username": username,
        "Password": password,
        "LoginRoles": role
      },
      {
      headers: this.headersWithoutAccessToken,
    })
  }

  RefreshToken(OldRefreshToken, AccessToken):Observable<any> {
    let url = `${apiUrl}/Auth/RefreshToken.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.post(url, 
      {
        OldRefreshToken
      },
      {
      headers: headers,
    })
  }

  Logout(AccessToken) :Observable<any>{
    let url = `${apiUrl}/Auth/Logout.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.post(url,{},
      {
      headers: headers      
    })
  }

  PreRequestResetPassword(Mobile):Observable<any> {
    let url = `${apiUrl}/Auth/PreRequestResetPassword.php`;
    let headers = this.headersWithoutAccessToken;
    return this.http.post(url,
      {
        Mobile
      },
      {
        headers: headers
      })
  }

  RequestResetPassword(Mobile, Email, AccessToken):Observable<any> {
    let url = `${apiUrl}/Auth/RequestResetPassword.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.post(url, 
      {
        Mobile,
        Email
      },
      {
      headers: headers
    })
  }

  ResetPasswordByEmail(UserId, Token, NewPassword, AccessToken) :Observable<any>{
    let url = `${apiUrl}/Auth/RequestResetPassword.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.post(url, 
      {
        UserId,
        Token,
        NewPassword
      },
      {
      headers: headers
    })
  }


  // Master 

  GetPaymentTypes(AccessToken) :Observable<any>{
    let url = `${apiUrl}/Master/GetPaymentTypes.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.get(url, {
      headers: headers,
      params: {

      }
    })
  }

  // Login and Registration

  IsMobileRgistered(mobile) : Observable<any>{
    let url :string = `${apiUrl}/Registration/IsMobileRegistered.php`
    return this.http.get(url,{
      headers:this.headersWithAccessToken,
      params: {
        Mobile: mobile
      }
    })
  }


  PreRegister(mobile) : Observable<any> {
    let url = `${apiUrl}/Registration/PreRegister.php`;
    return this.http.post(url,
      {
        "Mobile": mobile,
        "SecureKey": environment.Security_Key
      },
      {
        headers: this.headersWithoutAccessToken,
      })
  }

  VerifyEmail(userid, tokenid, AccessToken) :Observable<any>{
    let url = `${apiUrl}/Registration/VerifyEmail.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);

    return this.http.post(url,
      {
        UserId: userid,
        Token: tokenid
      },
      {
      headers: headers
    })
  }

  RequestEmailVerification(email, AccessToken) :Observable<any>{
    let url = `${apiUrl}/Registration/RequestEmailVerification.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);

    return this.http.post(url, 
      {
        Email: email,
      },
      {
      headers: headers
    })
  }

  Register(mobile, password) :Observable<any>{
    let url = `${apiUrl}/Registration/Register.php`;
    let headers = this.headersWithoutAccessToken ;

    return this.http.post(url,
      {
        Mobile: mobile,
        Password: password
      },
      {
        headers: headers,
      })
  }

  SetUpline(UplineId, AccessToken) :Observable<any>{
    let url = `${apiUrl}/Registration/SetUpline.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.put(url,
      {
        "UplineId": UplineId
      },
      {
        headers: headers,
      })
  }

  SetRegType(RegType, AccessToken) :Observable<any>{
    let url = `${apiUrl}/Registration/SetRegType.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.put(url,
      {
        RegType: RegType
      },
      { headers: headers }
    )
  }

  CreatePassword(Password, AccessToken) :Observable<any>{
    let url = `${apiUrl}/Registration/CreatePassword.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.put(url,
      {
        Password: Password
      },
      {
        headers: headers
      }
    )
  }

  CompleteProfile(UserType, Name, DisplayName, Gender, AccessToken) :Observable<any>{
    let url = `${apiUrl}/Registration/CompleteProfile.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.put(url, 
      {
        UserType: UserType,
        Name: Name,
        DisplayName: DisplayName,
        Gender: Gender
      },
      {
        headers: headers
      }

    )
  }

  GetUserInfo(MemberId, AccessToken):Observable<any> {
    let url = `${apiUrl}/User/GetUserInfo.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    console.log(headers);
    return this.http.get(url,
      {
        headers: headers,
        params: {
          MemberId: MemberId
        }
      }
    )
  }

  GetProfile(AccessToken):Observable<any> {
    let url = `${apiUrl}/User/GetProfile.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.get(url,
      {
        headers: headers,
        params: {
        }
      }
    )
  }

  AddUpline(UplineId, AccessToken):Observable<any> {
    let url = `${apiUrl}/Registration/AddUpline.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.post(url, 
      {
        UplineId: UplineId,
      },
      {
      headers: headers
    })
  }

  EditProfile(UserType, Name, DisplayName, Gender, CurrentPassword, AccessToken):Observable<any> {
    let url = `${apiUrl}/Registration/EditProfile.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.put(url, 
      {
        UserType: UserType,
        Name: Name,
        DisplayName: DisplayName,
        Gender: Gender,
        CurrentPassword: CurrentPassword
      },
      {
      headers: headers,      
    })
  }

  ChangePassword(CurrentPassword, NewPassword, AccessToken):Observable<any> {
    let url = `${apiUrl}/User/ChangePassword.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.put(url, 
      {
        CurrentPassword: CurrentPassword,
        NewPassword: NewPassword,
      },
      {
      headers: headers,
    })
  }

  UploadProfilePhoto(Photo, AccessToken) :Observable<any>{
    let url = `${apiUrl}/Registration/UploadProfilePhoto.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.post(url, 
      {
        Photo: Photo,
      },
      {
      headers: headers
    })
  }

  RequestChangeMobile(CurrentPassword, NewMobile, AccessToken):Observable<any> {
    let url = `${apiUrl}/User/RequestChangeMobile.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.post(url, 
      {
        CurrentPassword: CurrentPassword,
        NewMobile: NewMobile
      },
      {
      headers: headers,
    })
  }

  ChangeMobile(NewMobile, Otp, AccessToken) :Observable<any>{
    let url = `${apiUrl}/User/ChangeMobile.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.post(url, 
      {
        NewMobile: NewMobile,
        Otp: Otp
      },
      {
      headers: headers,
    })
  }

  UploadStatement(Statement, AccessToken):Observable<any>{
    let url = `${apiUrl}/Registration/EditBankInfo.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.post(url, 
      {
        Statement: Statement,
      },
      {
      headers: headers,
    })
  }


  GetBankInfo(AccessToken) :Observable<any>{
    let url = `${apiUrl}/User/BankInfo/GetBankInfo.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.get(url, {
      headers: headers,
      params: {
      }
    })
  }

  EditBankInfo(AccountNo, AccountHolderName, IdentityType, IdentityNo, BankId, StatementUrl, CurrentPassword, AccessToken) :Observable<any>{
    let url = `${apiUrl}/User/BankInfo/EditBankInfo.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.put(url, 
      {
        AccountNo,
        AccountHolderName,
        IdentityType,
        IdentityNo,
        BankId,
        StatementUrl,
        CurrentPassword
      },
      {
      headers: headers,
    })
  }

  GetBrief_Network(AccessToken) :Observable<any>{
    let url = `${apiUrl}/Network/GetBrief.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.get(url,       
      {
      headers: headers,
    })
  }

  GetMyNetwork(LevelNumber, PageSize, PageNumber, AccessToken) :Observable<any>{
    let url = `${apiUrl}/Network/GetMyNetwork.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.get(url, {
      headers: headers,
      params: {
        LevelNumber,
        PageSize,
        PageNumber
      }
    })
  }

  GetUserNetwork(UserId, PageSize, PageNumber, AccessToken) :Observable<any>{
    let url = `${apiUrl}/Network/GetUserNetwork.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.get(url, {
      headers: headers,
      params: {
        UserId,
        PageSize,
        PageNumber
      }
    })
  }

  // Wallet 

  GetTransactions(PageSize, PageNumber, AccessToken):Observable<any> {
    let url = `${apiUrl}/Wallet/GetTransactions.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.get(url, {
      headers: headers,
      params: {
        PageSize,
        PageNumber
      }
    })
  }

  GetBrief_Wallet(AccessToken) :Observable<any>{
    let url = `${apiUrl}/Wallet/GetBrief.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.get(url, {
      headers: headers,
      params: {
      }
    })
  }

  PreRequestWithdraw(AccessToken) :Observable<any>{
    let url = `${apiUrl}/Wallet/PreRequestWithdraw.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.post(url, {
      headers: headers    
    })
  }

  RequestWithdraw(Otp, AccessToken):Observable<any> {
    let url = `/Wallet/RequestWithdraw.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.post(url, 
      {
        Otp
      },{
      headers: headers
    })
  }


  // Notification

  Register_Notification(FcmToken, AccessToken):Observable<any> {
    let url = `${apiUrl}/Notification/GetHistory.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.post(url, 
      {
        FcmToken
      },
      {
      headers: headers,
    })
  }

  GetHistory(PageSize, PageNumber, AccessToken) :Observable<any>{
    let url = `${apiUrl}/Notification/GetHistory.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.get(url, {
      headers: headers,
      params: {
        PageSize,
        PageNumber
      }
    })
  }

  // Application 

  AddFeedback(Title, Body, NumberOfStars, AccessToken) :Observable<any>{
    let url = `${apiUrl}/Application/AddFeedback.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.post(url, 
      {
        Title,
        Body,
        NumberOfStars
      },
      {
      headers: headers,
    })
  }

  AddComplaint(Title, Body, AccessToken):Observable<any> {
    let url = `${apiUrl}/Application/AddComplaint.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.post(url, 
      {
        Title,
        Body
      },
      {
      headers: headers,
    })
  }

  // Payment 

  CreateOrder(OrderType, Amount, AccessToken) :Observable<any>{
    let url = `${apiUrl}/Payment/CreateOrder.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.post(url, 
      {
        OrderType,
        Amount
      },
      {
      headers: headers,
    })
  }

  DateFeed(Prc, Src, SuccessCode, OrderRef, AsiaPayRef, CurrencyCode, Amount, AuthStatus, SecureHash, AccessToken):Observable<any> {
    let url = `${apiUrl}/Payment/DateFeed.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
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
      },
      {
      headers: headers,
    })
  }

  GetBanks(AccessToken){
    let url = `${apiUrl}/Master/GetBanks.php`;
    let headers = this.reNewHeaderWithAccessToken(AccessToken);
    return this.http.get(url, {
      headers: headers,
      params: {}
    })
  }
}


