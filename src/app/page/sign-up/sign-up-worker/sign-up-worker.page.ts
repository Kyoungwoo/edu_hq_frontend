import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeAnimation } from 'src/app/basic/basic.animation';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserGender } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { SignUpCompanyInfo } from '../sign-up-company/sign-up-company.page';

export class SignUpWorkerForm {
  account_id:string; // 아이디
  account_token:string; //비밀번호
  account_token_conform:string; //비밀번호 확인
  ctgo_country_id:number; //국적 ID
  company_id:number; //소속 업체 ID
  ctgo_construction_id:number; //공종 ID
  ctgo_occupation_id:number; //직종 ID
  project_id:number = 1; //소속 현장 ID
  user_name:string; //이름
  user_gender:UserGender; //성별
  user_birth:string; //생년월일
  user_email:string; //이메일
  user_phone:string;//휴대폰번호
  sms_token:string; //문자 인증번호
  basic_safe_edu_date:string; //기초안전보건교육 이수증
  file_preview:FutItem[]; // 파일 미리보기
  file:(File | FileBlob)[]; // 파일
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
``
type Validator<T> = {
  [P in keyof T]: { message:string, valid:boolean }
}
@Component({
  selector: 'app-sign-up-worker',
  templateUrl: './sign-up-worker.page.html',
  styleUrls: ['./sign-up-worker.page.scss'],
  animations: [ fadeAnimation ]
})
export class SignUpWorkerPage implements OnInit, DoCheck {

  params:SignUpCompanyInfo;

  form:SignUpWorkerForm = new SignUpWorkerForm();

  conform = {

  }

  resOverlapPhone:ConnectResult;
  resAligoSend:ConnectResult;
  resAligoCheck:ConnectResult;

  validator:Validator<SignUpWorkerForm> = {} as any;

  constructor(
    private activedRoute: ActivatedRoute,
    private connect: ConnectService,
    private nav: NavService,
    public regex: RegexService
  ) { }

  ngOnInit() {
    this.activedRoute.queryParams.subscribe((queryParams:SignUpCompanyInfo) => {
      this.params = queryParams;
      this.form.company_id = this.params.company_id;
    });
  }
  ngDoCheck() {
    console.log('Do Check');
  }

  timeoutOverlapId;
  public overlapId() {
    const { account_id } = this.form;
    clearTimeout(this.timeoutOverlapId);
    if(account_id?.length < 3) return this.validator.account_id = { valid: false, message: '아이디를 3자 이상 입력해주세요.' };
    this.timeoutOverlapId = setTimeout(async() => {
      const res = await this.connect.run('/forSignUp/overlap/id', { account_id });
      this.validator.account_id = { valid: res.rsCode === 0, message: res.rsMsg };
    }, 200);
  }

  timeoutCheckPass;
  public checkPass() {
    const { account_token } = this.form;
    clearTimeout(this.timeoutCheckPass);
    if(account_token?.length < 4) return this.validator.account_token = { valid: false, message: '비밀번호를 4자이상 입력해주세요.' };
    this.timeoutCheckPass = setTimeout(async() => {
      const res = await this.connect.run('/forSignUp/check/pass', { account_token });
      this.validator.account_token = { valid: res.rsCode === 0, message: res.rsMsg };
    }, 200);
  }
  
  timeouOverlapPhone;
  public overlapPhone() {
    const { user_phone } = this.form;
    clearTimeout(this.timeouOverlapPhone);
    if(user_phone?.length < 3) return this.resOverlapPhone = null;
    this.timeouOverlapPhone = setTimeout(async() => {
      this.resOverlapPhone = await this.connect.run('/forSignUp/overlap/phone', { user_phone });
    }, 200);
  }

  public async aligoSend() {
    const { user_phone } = this.form;
    this.resAligoSend = await this.connect.run('/aligo/send', { user_phone });    
  }
  public async aligoCheck() {
    const { user_phone } = this.form;
    this.resAligoCheck = await this.connect.run('/aligo/check', { user_phone });    
  }

  public next() {
    this.validator = {} as any;
    if(!this.form.account_id) this.validator.account_id = {message: '아이디를 입력해주세요.', valid: false};
    if(!this.form.account_token) this.validator.account_token = {message: '비밀번호를 입력해주세요.', valid: false};
    if(!this.form.account_token_conform) this.validator.account_token_conform = {message: '비밀번호 확인을 입력해주세요.', valid: false};
    if(!this.form.ctgo_country_id) this.validator.ctgo_country_id = {message: '국가를 입력해주세요.', valid: false};
    if(!this.form.company_id) this.validator.company_id = {message: '회사를 입력해주세요.', valid: false};
    if(!this.form.ctgo_construction_id) this.validator.ctgo_construction_id = {message: '공종을 입력해주세요.', valid: false};
    if(!this.form.ctgo_occupation_id) this.validator.ctgo_occupation_id = {message: '직종을 입력해주세요.', valid: false};
    if(!this.form.project_id) this.validator.project_id = {message: '현장을 입력해주세요.', valid: false};
    if(!this.form.user_name) this.validator.user_name = {message: '이름을 입력해주세요.', valid: false};
    if(!this.form.user_gender) this.validator.user_gender = {message: '성별을 입력해주세요.', valid: false};
    if(!this.form.user_birth) this.validator.user_birth = {message: '생년월일을 입력해주세요.', valid: false};
    if(!this.form.user_email) this.validator.user_email = {message: '이메일을 입력해주세요.', valid: false};
    if(!this.form.user_phone) this.validator.user_phone = {message: '휴대폰번호를 입력해주세요.', valid: false};
    if(!this.form.sms_token) this.validator.sms_token = {message: '문자인증번호를 입력해주세요.', valid: false};
    if(!this.form.basic_safe_edu_date) this.validator.basic_safe_edu_date = {message: '기초안전보건교육 이수날짜를 입력해주세요.', valid: false};
    // if(!this.form.file) this.validator.file = {message: '기초안전보건교육 파일을 업로드해주세요.', valid: false};
    // if(!this.form.file_json) this.validator.file_json = {message: '기초안전보건교육 파일을 업로드해주세요.', valid: false};

    // this.nav.navigateForward('/sign-up-health');
  }
}