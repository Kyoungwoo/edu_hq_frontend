import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

export namespace User {
  export type UserType = "WORKER" | "PARTNER";
  export type UserGender = "남" | "여";
  export type RequestState = "승인" | "대기";
  export class UserData {
    user_id:number;
    user_session:string;
    request_state:RequestState;
    user_data: {
      user_duty:string,
      user_type:UserType,
      company_name:string,
      ctgo_occupation_name:string,
      auth_id:string,
      ctgo_occupation_id:number,
      company_id:number,
      ctgo_construction_name:string,
      ctgo_construction_id:number,
      user_profile:string,
      user_name:string,
      user_id:number,
      tbm_data:TbmDataWorker | TbmDataPartner
    }
  }
  export interface UserDataWorker extends UserData {
    tbm_data: TbmDataWorker
  }
  export interface UserDataPartner extends UserData {
    tbm_data: TbmDataPartner
  }
  export interface TbmDataWorker {
    read_risk_factors:number, // 위험요인 확인여부
    read_notice_tbm:number, // tbm 공지사항 확인여부 
    inside_state:number, // 태깅여부
    outside_state:number, // 퇴장여부 (퇴장중이면 다시 입장가능해야함)
    read_safe_edu:number // 안전교육 확인여부}
  }
  export interface TbmDataPartner {
    worker_count:number, // 총 근로자 수
    inside_count:number, // tbm 완료 수
    request_reg_count:number, // 승인대기중인 근로자 수
    tbm_percent:number // 퍼센트}
  }
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private TAG = 'SmartSafeTbm@UserData';

  userData:User.UserData = new User.UserData();
  autoLogin:boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId
  ) {
    this.get();
  }
  get() {
    if(isPlatformServer(this.platformId)) return this.userData = new User.UserData();

    let storage:Storage;
    if(window.sessionStorage.getItem(this.TAG)) {
      storage = window.sessionStorage;
      this.autoLogin = false;
    } else if(window.localStorage.getItem(this.TAG)) {
      storage = window.localStorage;
      this.autoLogin = true;
    }
    if(storage) { this.userData = JSON.parse(storage.getItem(this.TAG)) }
    else this.userData = new User.UserData();
  }
  set(data:User.UserData, autoLogin:boolean = true) {
    if(isPlatformServer(this.platformId)) return;

    let storage:Storage = autoLogin ? window.localStorage : window.sessionStorage;
    storage.setItem(this.TAG, JSON.stringify(data));

    this.get();
  }
  clear() {
    if(isPlatformServer(this.platformId)) return;

    window.sessionStorage.removeItem(this.TAG);
    window.localStorage.removeItem(this.TAG);

    this.get();
  }
}
