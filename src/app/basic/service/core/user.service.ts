import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

enum TAG {
  AuthToken = 'Devmonster@AuthToken',
  UserData = 'Devmonster@UserData'
}

export type UserType = 'WORKER' | 'LH' | 'SUPER' | 'COMPANY';
export type UserGender = "남" | "여";
export type RequestState = "승인" | "대기";
export interface AuthToken {
  login_token:string;
  refresh_token:string;
}
export class UserData {
  
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  authToken:AuthToken;
  userData:UserData = new UserData();
  autoLogin:boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId
  ) {
    this.getAuthToken();
  }
  getAuthToken() {
    if(isPlatformServer(this.platformId)) return this.authToken = null; // ssr에서 auth token을 어떠헥 처리해야 하지? 쿠키로 해야하나? 아니면 정보를 안띄워야 하나?

    let storage:Storage;
    if(window.sessionStorage.getItem(TAG.AuthToken)) {
      storage = window.sessionStorage;
      this.autoLogin = false;
    } else if(window.localStorage.getItem(TAG.AuthToken)) {
      storage = window.localStorage;
      this.autoLogin = true;
    }
    if(storage) { this.authToken = JSON.parse(storage.getItem(TAG.AuthToken)) }
    else this.authToken = null;
  }
  setAuthToken(authToken:AuthToken, autoLogin:boolean = true) {
    if(isPlatformServer(this.platformId)) return;

    let storage:Storage = autoLogin ? window.localStorage : window.sessionStorage;
    storage.setItem(TAG.AuthToken, JSON.stringify(authToken));

    this.getAuthToken();
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
