import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileBlob, FileJson } from 'src/app/basic/service/core/file.service';
import { SignUpCompanyInfo } from '../sign-up-company/sign-up-company.page';

class SignUpWorkerForm {
  account_id:string; // 아이디
  account_token:string; //비밀번호
  ctgo_country_id:number; //국적 ID
  company_id:number; //소속 업체 ID
  ctgo_construction_id:number; //공종 ID
  ctgo_occupation_id:number; //직종 ID
  project_id:number; //소속 현장 ID
  user_name:string; //이름
  user_gender:string; //성별
  user_birth:string; //생년월일
  user_email:string; //이메일
  user_phone:string;//휴대폰번호
  sms_token:string; //문자 인증번호
  basic_safe_edu_date:string; //기초안전보건교육 이수증
  file:File | FileBlob[];
  file_json:FileJson; //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증

  brain_cure_content:string; //심혈관질환명 / 없을시 빈배열
  brain_cure_state:boolean; //심혈관질환 치료여부
  covid_nineteen_content:string; //코로나 증상내용
  covid_nineteen_state:boolean; //코로나 증상여부
  covid_vaccine_state:boolean; //코로나 백신접종 여부
  etc_disease_content:string; //기타질환 내용
  etc_disease_state:boolean; //기타질환 치료여부
  health_terms_state:boolean; //문진표 작성동의 여부
  pain_head_content:string; //신경계질환 내용
  pain_head_state:boolean; //신경계질환 여부
  use_drugs_content:string; //약물명
  use_drugs_state:boolean; //약물복용여부 (false - 없다, 미접종, 미동의 / true - 있다, 접종, 동의)
  vomiting_content:string; //가슴통증 내용
  vomiting_state:boolean; //가슴통증 여부
}
@Component({
  selector: 'app-sign-up-worker',
  templateUrl: './sign-up-worker.page.html',
  styleUrls: ['./sign-up-worker.page.scss'],
})
export class SignUpWorkerPage implements OnInit {

  params:SignUpCompanyInfo;

  form:SignUpWorkerForm = new SignUpWorkerForm();
  confirm = {
    account_token: ''
  }

  constructor(
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activedRoute.queryParams.subscribe((queryParams:SignUpCompanyInfo) => {
      this.params = queryParams;
    });
  }

  
}
