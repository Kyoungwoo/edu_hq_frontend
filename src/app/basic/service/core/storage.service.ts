import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

export interface USER_DATA {
  // user_id:number,
  // user_type:string,
  // user_session:string,
  // auth_type:number,
  // auth_id:string,
  // user_nm:string,
  // company_name:string,
  // push_state:string

  user_id:number, // 유저ID			
  user_session:string, // 유저세션
  user_type:string, // ADMIN - 관리자 / USER - 유저			
  user_level:number, // 0 마스터 / 1 일반			
  auth_type:number, // 1고정			
  auth_id:string, // 아이디			
  user_name:string, // 이름			
  user_phone:string, // 연락처			
  user_email:string, // 이메일			
  user_scene:string, // 현장명			
  user_birthday:string, // 생년월일			
  user_address:string, // 주소			
  user_address_detail:string, // 상세주소			
  user_nationality:string, // 국적			
  user_foreigner_no:string, // 외국인번호			
  user_sos_name:string, // 긴급연락명			
  user_sos_phone:string, // 긴급연락처			
  user_sos_family:string, // 긴급연락가족관계			
  edu_date:string,
  company_id:number, // 업체ID			
  company_name:string, // 업체명			
  company_type_name:string, // 업체구분			
  company_duty_name:string, // 직책			
  company_position_name:string, // 직위			
  construction_name:string, // 공종			
  occupation_name:string, // 직종			
  company_duty_name_etc:string, // 직책 기타입력			
  company_position_name_etc:string, // 직종 기타입력			
  construction_name_etc:string, // 공종 기타입력			
  occupation_name_etc:string, // 직종 기타입력			
  user_safe_file:string, // 안전교육			
  user_sign_file:string, // 싸인			
  work_permission:boolean, /// true - 오늘 작업허가요청함			
  user_profile_file:string, // 사진			
  bicon_rssi:string, // 비콘 센서값		
  bicon_state: boolean, // true - 오늘 작업허가 요청 후 비콘 활성화 함 	
  push_state,
  alarm_data,
  user_license_state:boolean // 운전자 여부
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    @Inject(PLATFORM_ID) private platformId
  ) {
    this.user.get();
  }

  name = 'kunyoung-app@';

  user = {
    auto_login: false,
    data: {
      // user_id: 0,
      // user_type: '',
      // user_session: '',
      // auth_type: 0,
      // auth_id: '',
      // user_nm: '',
      // company_name: '',
      // push_state: ''

      user_id: 0, // 유저ID			
      user_session: '', // 유저세션
      user_type: '', // ADMIN - 관리자 / USER - 유저			
      user_level: 0, // 0 마스터 / 1 일반			
      auth_type: 1, // 1고정			
      auth_id: '', // 아이디			
      user_name: '', // 이름			
      user_phone: '', // 연락처			
      user_email: '', // 이메일			
      user_scene: '', // 현장명			
      user_birthday: '', // 생년월일			
      user_address: '', // 주소			
      edu_date: '', // 건설업 기초교육 받은 날짜
      user_address_detail	: '', // 상세주소			
      user_nationality: '', // 국적			
      user_foreigner_no: '', // 외국인번호			
      user_sos_name: '', // 긴급연락명			
      user_sos_phone: '', // 긴급연락처			
      user_sos_family: '', // 긴급연락가족관계			
      company_id: 0, // 업체ID			
      company_name: '', // 업체명			
      company_type_name: '', // 업체구분			
      company_duty_name: '', // 직책			
      company_position_name: '', // 직위			
      construction_name: '', // 공종			
      occupation_name: '', // 직종			
      company_duty_name_etc: '', // 직책 기타입력			
      company_position_name_etc: '', // 직종 기타입력			
      construction_name_etc: '', // 공종 기타입력			
      occupation_name_etc: '', // 직종 기타입력			
      user_safe_file: '', // 안전교육			
      user_sign_file: '', // 싸인			
      work_permission: false, // true - 오늘 작업허가요청함			
      user_profile_file: '', // 사진			
      bicon_rssi: '', // 비콘 센서값	
      bicon_state: false, // true - 오늘 작업허가 요청 후 비콘 활성화 함 	
      push_state: '',
      alarm_data: {
        alarm_count: 0,
        notice_count: 0
      }
    } as USER_DATA,
    get: () => {
      if(!isPlatformServer(this.platformId)) {

        const first_key = this.name + Object.keys(this.user.data)[0];
        const storage = window.sessionStorage.getItem(first_key) ? 'sessionStorage' :
        window.localStorage.getItem(first_key) ? 'localStorage' : '';
        if(storage === 'localStorage') this.user.auto_login = true;
        if(storage) {
          for(let key in this.user.data) {
            switch(typeof this.user.data[key]) {
              case 'string':
                this.user.data[key] = window[storage].getItem(this.name + key);
                break;
              case 'number':
                this.user.data[key] = Number(window[storage].getItem(this.name + key));
                break;
              case 'boolean':
                this.user.data[key] = Boolean(window[storage].getItem(this.name + key));
                break;
            }
          }
        } else {
          for(let key in this.user.data) {
            switch(typeof this.user.data[key]) {
              case 'string':
                this.user.data[key] = '';
                break;
              case 'number':
                this.user.data[key] = 0;
                break;
            }
          }
        }
      }
      return this.user.data;
    },
    set: (data:USER_DATA, auto:boolean = true) => {
      if(location.href.indexOf('employee-app/signup') == -1) this.user.clear();
      if(!isPlatformServer(this.platformId)) {
        let storage:string = auto ? 'localStorage' : 'sessionStorage';
        for(let key in this.user.data) {
          window[storage].setItem(this.name + key, data[key] || this.user.data[key]);
        }
      }
      this.user.get();
    },
    clear: () => {
      if(!isPlatformServer(this.platformId)) {
        for(let key in this.user.data) {
          window.sessionStorage.removeItem(this.name + key);
          window.localStorage.removeItem(this.name + key);
          sessionStorage.removeItem('hr_session');
        }
        this.user.get();
      }
    }
  }
}