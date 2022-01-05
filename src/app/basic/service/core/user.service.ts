import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

enum TAG {
  AuthToken = 'Devmonster@AuthToken',
  UserData = 'Devmonster@UserData'
}

export type UserType = "WORKER" | "PARTNER";
export type UserGender = "남" | "여";
export type RequestState = "승인" | "대기";
export interface userAuthToken {
  login_token:string;
  refresh_token:string;
}
export class UserData {
  
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData:UserData = new UserData();
  autoLogin:boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId
  ) {
    
  }
  getAuthToken() {

  }
  setAuthToken(authToken:userAuthToken, autoLogin:boolean = true) {
    if(isPlatformServer(this.platformId)) return;

    let storage:Storage = autoLogin ? window.localStorage : window.sessionStorage;
    storage.setItem(TAG.AuthToken, JSON.stringify(authToken));
  }
  getUserData() {
    if(isPlatformServer(this.platformId)) return this.userData = new UserData();

    let storage:Storage;
    if(window.sessionStorage.getItem(TAG.UserData)) {
      storage = window.sessionStorage;
      this.autoLogin = false;
    } else if(window.localStorage.getItem(TAG.UserData)) {
      storage = window.localStorage;
      this.autoLogin = true;
    }
  setAuthToken(rsObj: any) {
    throw new Error('Method not implemented.');
  }
    if(storage) { this.userData = JSON.parse(storage.getItem(TAG.UserData)) }
    else this.userData = new UserData();
  }
  setUserData(data:UserData, autoLogin:boolean = true) {
    if(isPlatformServer(this.platformId)) return;

    let storage:Storage = autoLogin ? window.localStorage : window.sessionStorage;
    storage.setItem(TAG.UserData, JSON.stringify(data));

    //this.get();
  }
  clear() {
    if(isPlatformServer(this.platformId)) return;

    window.sessionStorage.removeItem(TAG.AuthToken);
    window.localStorage.removeItem(TAG.AuthToken);
    window.sessionStorage.removeItem(TAG.UserData);
    window.localStorage.removeItem(TAG.UserData);

    //this.get();
  }
}
