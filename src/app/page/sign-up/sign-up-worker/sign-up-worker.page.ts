import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeAnimation } from 'src/app/basic/basic.animation';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserGender } from 'src/app/basic/service/core/user.service';
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
  user_gender:UserGender; //성별
  user_birth:string; //생년월일
  user_email:string; //이메일
  user_phone:string;//휴대폰번호
  sms_token:string; //문자 인증번호
  basic_safe_edu_date:string; //기초안전보건교육 이수증
  file:(File | FileBlob)[];
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
  animations: [ fadeAnimation ]
})
export class SignUpWorkerPage implements OnInit {

  params:SignUpCompanyInfo;

  form:SignUpWorkerForm = new SignUpWorkerForm();
  confirm = {
    file: [] as FutItem[],
    account_token: ''
  }

  resOverlapId:ConnectResult;
  resOverlapPhone:ConnectResult;
  resAligoCheck:ConnectResult;
  resAligoSend:ConnectResult;

  constructor(
    private activedRoute: ActivatedRoute,
    private connect: ConnectService
  ) { }

  ngOnInit() {
    this.activedRoute.queryParams.subscribe((queryParams:SignUpCompanyInfo) => {
      this.params = queryParams;
    });
  }

  timeoutOverlapId;
  public overlapId() {
    const { account_id } = this.form;
    clearTimeout(this.timeoutOverlapId);
    if(account_id?.length < 2) return this.resOverlapId = null;
    this.timeoutOverlapId = setTimeout(async() => {
      this.resOverlapId = await this.connect.run('/forSignUp/overlap/id', { account_id });
    }, 200);
  }
  
  timeouOverlapPhone;
  public overlapPhone() {
    const { user_phone } = this.form;
    clearTimeout(this.timeouOverlapPhone);
    if(user_phone?.length < 2) return this.resOverlapPhone = null;
    this.timeoutOverlapId = setTimeout(async() => {
      this.resOverlapPhone = await this.connect.run('/forSignUp/overlap/phone', { user_phone });
    }, 200);
  }

  public async aligoCheck() {
    const { user_phone } = this.form;
    this.resAligoCheck = await this.connect.run('/aligo/check', { user_phone });    
  }
}