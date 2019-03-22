import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataTransactionService {

  OtpBlockDuration: 0;
  DeviceId: '1325';
  PlatformId: '3'
  DataParam: any
  Phone: string = "";
  shouldNavigate: boolean = true;
  page: number = 1;
  ProfileImage: string;

  // public storage: SecureStorageObject;

  constructor(private storage: Storage) {
    this.OnInit();
  }

  OnInit() {
    // this.secureStorage.create('JomSave').then(
    //   (token : SecureStorageObject)=> {
    //     this.storage = token;
    //   }
    // )
  }

  logOut() {
    this.storage.remove('AccessToken');
    this.storage.remove('NewRefreshToken');
    this.storage.remove('Email');
    this.storage.remove('Profile');
  }

  setOnBoard(){
    this.storage.set('Onboard','true');
  }

  setUserPhone(phone) {
    this.storage.remove('Phone');
    this.storage.set('Phone', phone);
  }

  setAccessToken(AccessToken) {
    this.storage.remove('AccessToken');
    this.storage.set('AccessToken', AccessToken);
  }

  setNewRefreshToken(NewRefreshToken) {
    this.storage.remove('NewRefreshToken');
    this.storage.set('NewRefreshToken', NewRefreshToken);
  }

  setEmail(Email) {
    this.storage.remove('Email');
    this.storage.set('Email', Email);
  }

  setProfile(Profile) {
    this.storage.remove('Profile');
    this.storage.set('Profile', Profile);
  }

  setToken(Token) {
    this.storage.remove('Token');
    this.storage.set('Token', Token);
  }

  public getUserPhone() {
    return this.storage.get('Phone');
  }

  public getAccessToken() {
    return this.storage.get('AccessToken');
  }

  public getNewRefreshToken() {
    return this.storage.get('NewRefreshToken');
  }

  public getEmail() {
    return this.storage.get('Email');
  }

  public getProfile() {
    return this.storage.get('Profile');
  }

  public GetToken() {
    return this.storage.get('Token');
  }

  public GetOnBoard(){
    return this.storage.get('Onboard');
  }

}
