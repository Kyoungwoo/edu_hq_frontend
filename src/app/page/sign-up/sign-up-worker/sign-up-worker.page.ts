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
export class SignUpWorkerPage implements OnInit, DoCheck {

  params:SignUpCompanyInfo;

  form:SignUpWorkerForm = new SignUpWorkerForm();
  confirm = {
    file: [] as FutItem[],
    account_token: ''
  }

  resOverlapId:ConnectResult;
  resCheckPass:ConnectResult;
  resOverlapPhone:ConnectResult;
  resAligoSend:ConnectResult;
  resAligoCheck:ConnectResult;

  resCheck:ConnectResult;

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
    if(account_id?.length < 3) return this.resOverlapId = null;
    this.timeoutOverlapId = setTimeout(async() => {
      this.resOverlapId = await this.connect.run('/forSignUp/overlap/id', { account_id });
    }, 200);
  }

  timeoutCheckPass;
  public checkPass() {
    const { user_phone } = this.form;
    clearTimeout(this.timeoutCheckPass);
    if(user_phone?.length < 3) return this.resCheckPass = null;
    this.timeoutCheckPass = setTimeout(async() => {
      this.resCheckPass = await this.connect.run('/forSignUp/check/pass', { user_phone });
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
    /* if(!this.form.account_id) return {color: 'warning', message: '아이디를 입력해주세요.'};
    if(!this.form.account_token) return {color: 'warning', message: '비밀번호를 입력해주세요.'};
    if(!this.confirm.account_token) return {color: 'warning', message: '비밀번호 확인을 입력해주세요.'};
    if(!this.form.ctgo_country_id) return {color: 'warning', message: '아이디를 입력해주세요.'};
    if(!this.form.company_id) return {color: 'warning', message: '아이디를 입력해주세요.'};
    if(!this.form.ctgo_construction_id) return {color: 'warning', message: '아이디를 입력해주세요.'};
    if(!this.form.ctgo_occupation_id) return {color: 'warning', message: '아이디를 입력해주세요.'};
    if(!this.form.project_id) return {color: 'warning', message: '아이디를 입력해주세요.'};
    if(!this.form.user_name) return {color: 'warning', message: '아이디를 입력해주세요.'};
    if(!this.form.user_gender) return {color: 'warning', message: '아이디를 입력해주세요.'};
    if(!this.form.user_birth) return {color: 'warning', message: '아이디를 입력해주세요.'};
    if(!this.form.user_email) return {color: 'warning', message: '아이디를 입력해주세요.'};
    if(!this.form.user_phone) return {color: 'warning', message: '아이디를 입력해주세요.'};
    if(!this.form.sms_token) return {color: 'warning', message: '아이디를 입력해주세요.'};
    if(!this.form.basic_safe_edu_date) return {color: 'warning', message: '아이디를 입력해주세요.'};
    if(!this.form.file) return {color: 'warning', message: '아이디를 입력해주세요.'};
    if(!this.form.file_json) return {color: 'warning', message: '아이디를 입력해주세요.'}; */
    
    this.resCheck = new ConnectResult();

    // this.nav.navigateForward('/sign-up-health');
  }
}