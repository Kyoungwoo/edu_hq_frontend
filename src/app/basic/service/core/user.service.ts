import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

enum TAG {
  Id = 'Devmonster@Id',
  AuthToken = 'Devmonster@AuthToken',
  UserData = 'Devmonster@UserData',
  memberAuthToken = 'Devmonster@MemberAuthToken'
}

export type UserType = 'WORKER' | 'LH' | 'SUPER' | 'COMPANY';
export type UserRole = 
'LH_HEAD'  // LH 본사 마스터
| 'LH_ADMIN' // LH 본사 관리자
| 'LH_REGION' // LH 지역본부 관리자
| 'LH_BUSINESS' // LH 사업본부 관리자
| 'LH_PROJECT' // LH 현장 관리자

| 'MASTER_HEAD' // 원청사 마스터
| 'MASTER_GENERAL' // 원청사 일반 관리자
| 'MASTER_WORKER' // 원청사 작업자

| 'PARTNER_HEAD' // 협력사 마스터
| 'PARTNER_GENERAL' // 협력사 일반 관리자
| 'PARTNER_WORKER'; // 협력사 작업자

export type UserGender = "남" | "여";
export type RequestState = "승인" | "대기";
export interface AuthToken {
  login_token:string;
  refresh_token:string;
}
export class UserData {
  account_id:string; // "worker_sh"
  belong_data = {
    company_contract_type: "" as "원청사" | "협력사" | "감리사" | "LH",
    company_id: 0,
    company_name: '',
    project_id: 0,
    project_name: '',
    hq_business_id: 0,
    hq_business_name: '',
    hq_regional_id: 0,
    hq_regional_name: ''
  };
  old_token_state:boolean; // false
  user_birth:string; // "1987-07-26"
  user_email:string; // "BOcilSPgIm@naver.com"
  user_gender:string; // "남"
  user_id:number; // 8573724717
  user_name:string; // "김수홍"
  user_phone:string; // "01000249857"
  user_profile:string; // "null"
  user_role:UserRole; // "COMPANY_WORKER" | "COMPANY_GENERAL" | ""
  user_type:UserType; // "WORKER"
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  authToken:AuthToken;
  userData:UserData = new UserData();
  accountID:string;
  memberAuthToken:string;
  autoLogin:boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId
  ) {
    this.getId();
    this.getAuthToken();
    this.getUserData();
    this.getMemberAuthToken();
  }
  
  getId() {
    this.accountID = window.localStorage.getItem(TAG.Id) || null;
  }
  setId(accountID:string) {
    if(isPlatformServer(this.platformId)) return;

    window.localStorage.setItem(TAG.Id, accountID);
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

  getMemberAuthToken() {
    this.memberAuthToken = window.localStorage.getItem(TAG.memberAuthToken) || null;
  }
  setMemberAuthToken(authToken:string) {
    if(isPlatformServer(this.platformId)) return;

    window.localStorage.setItem(TAG.memberAuthToken, authToken);
    this.getMemberAuthToken();
  }

  clear() {
    if(isPlatformServer(this.platformId)) return;

    window.localStorage.removeItem(TAG.Id);
    window.sessionStorage.removeItem(TAG.AuthToken);
    window.localStorage.removeItem(TAG.AuthToken);
    window.sessionStorage.removeItem(TAG.UserData);
    window.localStorage.removeItem(TAG.UserData);

    //this.get();
  }

  /** utils */
  parseUserRole(userRole:number) {
    switch(userRole) {
      case 0:
        return 'LH 본사 마스터';
      case 1:
        return 'LH 본사 관리자';
      case 2:
        return 'LH 지역본부 관리자';
      case 3:
        return 'LH 사업본부 관리자';
      case 4:
        return 'LH 현장 관리자';
      case 5:
        return '원청사 마스터';
      case 6:
        return '원청사 일반 관리자';
      case 7:
        return '원청사 작업자';
      case 8:
        return '협력사 마스터';
      case 9:
        return '협력사 일반 관리자';
      case 10:
        return '협력사 작업자';
    }
  }
}