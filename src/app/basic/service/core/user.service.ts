import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

enum TAG {
  Id = 'Devmonster@Id',
  AuthToken = 'Devmonster@AuthToken',
  UserData = 'Devmonster@UserData'
}

export type UserType = 'WORKER' | 'LH' | 'LH' | 'SUPER' | 'COMPANY';
export type UserGender = "남" | "여";
export type RequestState = "승인" | "대기";
export interface AuthToken {
  login_token:string;
  refresh_token:string;
}
export class UserData {
  account_id:string; // "worker_sh"
  belong_data = {
    company_id: 0,
    project_id: 0
  }; // "{\"company_id\": 1, \"project_id\": 61}"
  old_token_state:boolean; // false
  user_birth:string; // "1987-07-26"
  user_email:string; // "BOcilSPgIm@naver.com"
  user_gender:string; // "남"
  user_id:number; // 8573724717
  user_name:string; // "김수홍"
  user_phone:string; // "01000249857"
  user_profile:string; // "null"
  user_role:string; // "COMPANY_WORKER"
  user_type:UserType; // "WORKER"
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  authToken:AuthToken;
  userData:UserData = new UserData();
  accountID:string;
  autoLogin:boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId
  ) {
    this.getAuthToken();
    this.getUserData();
  }
  
  getId() {
    this.accountID = window.localStorage.getItem(TAG.Id) || null;
  }
  setId(id) {
    if(isPlatformServer(this.platformId)) return;

    window.localStorage.setItem(TAG.Id, id);
    this.getId();
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
    let deleteStorage:Storage = autoLogin ? window.sessionStorage : window.localStorage;
    storage.setItem(TAG.AuthToken, JSON.stringify(authToken));
    deleteStorage.removeItem(TAG.AuthToken);

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
    let deleteStorage:Storage = autoLogin ? window.sessionStorage : window.localStorage;
    storage.setItem(TAG.UserData, JSON.stringify(data));
    deleteStorage.removeItem(TAG.AuthToken);
    
    this.getUserData();
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