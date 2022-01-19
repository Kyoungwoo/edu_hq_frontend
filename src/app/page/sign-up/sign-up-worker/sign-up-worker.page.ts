import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeAnimation } from 'src/app/basic/basic.animation';
import { ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserGender } from 'src/app/basic/service/core/user.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { SignUpCompanyInfo } from '../sign-up-company/sign-up-company.page';

/** PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증 */
export type SignUpViewType = 'PROFILE'|'BASIC_SAFE_EDU'|'CERTIFY';
export class SignUpWorkerForm {
  account_id:string; // 아이디
  account_token:string; //비밀번호
  account_token_conform:string; //비밀번호 확인
  ctgo_country_id:number; //국적 ID
  company_id:number; //소속 업체 ID
  project_id:number; //소속 현장 ID
  user_name:string; //이름
  user_gender:UserGender; //성별
  user_birth:string; //생년월일
  user_email:string; //이메일
  user_phone:string;//휴대폰번호
  sms_token:string; //문자 인증번호
  basic_safe_edu_date:string; //기초안전보건교육 이수증
  file_preview:FutItem<SignUpViewType>[] = []; // 파일 미리보기
  file:(File | FileBlob)[] = []; // 파일
  file_json:FileJson<SignUpViewType> = new FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증

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

  validator:Validator<SignUpWorkerForm> = {};

  constructor(
    private activedRoute: ActivatedRoute,
    private connect: ConnectService,
    private nav: NavService,
    public regex: RegexService,
    private loading: LoadingService
  ) { }

  ngOnInit() {
    this.activedRoute.queryParams.subscribe((queryParams:SignUpCompanyInfo) => {
      console.log('routerrouter', queryParams);
      this.params = queryParams;
      this.form.company_id = this.params.company_id;
    });
  }

  public async overlapId() {
    const { account_id } = this.form;
    if(account_id?.length < 3) return this.validator.account_id = { valid: false, message: '아이디를 3자 이상 입력해주세요.' };
    const res = await this.connect.run('/forSignUp/overlap/id', { account_id });
    this.validator.account_id = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  public async checkPass() {
    const { account_token } = this.form;
    if(account_token?.length < 4) return this.validator.account_token = { valid: false, message: '비밀번호를 4자이상 입력해주세요.' };
    const res = await this.connect.run('/forSignUp/check/pass', { account_token });
    this.validator.account_token = { valid: res.rsCode === 0, message: res.rsMsg };
  }
  public checkPassConfirm() {
    const { account_token, account_token_conform } = this.form;
    if(account_token !== account_token_conform) return this.validator.account_token_conform = { valid: false, message: '비밀번호와 비밀번호 확인이 다릅니다.' };
    else return this.validator.account_token_conform = null;
  }
  
  public async overlapPhone() {
    const { user_phone } = this.form;
    if(user_phone?.length < 3) return this.validator.user_phone = { valid: false, message: '휴대폰 번호를 정확히 입력해주세요.' };
    const res = await this.connect.run('/forSignUp/overlap/phone', { user_phone });
    this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  public async aligoSend() {
    const { user_phone } = this.form;
    const res = await this.connect.run('/aligo/send', { user_phone });
    this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
  }
  public async aligoCheck() {
    const { user_phone, sms_token } = this.form;
    const res = await this.connect.run('/aligo/check', { user_phone, sms_token });
    this.validator.sms_token = { valid: res.rsCode === 0, message: res.rsMsg };    
  }

  public async overlapEmail() {
    const { user_email } = this.form;
    const res = await this.connect.run('/forSignUp/overlap/email', { user_email });
    this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  public findFile(view_type:SignUpViewType) {
    return this.form.file_preview.find(futItem => futItem.view_type === view_type);
  }

  public async next() {
    const loading = await this.loading.present();
    this.validator = {};
    
    if(!this.form.user_name) this.validator.user_name = {message: '이름을 입력해주세요.', valid: false};
    if(!this.form.account_id) this.validator.account_id = {message: '아이디를 입력해주세요.', valid: false};
    else await this.overlapId();
    if(!this.form.account_token) this.validator.account_token = {message: '비밀번호를 입력해주세요.', valid: false};
    else await this.checkPass();
    if(!this.form.account_token_conform) this.validator.account_token_conform = {message: '비밀번호 확인을 입력해주세요.', valid: false};
    else await this.checkPassConfirm();
    if(!this.form.user_phone) this.validator.user_phone = {message: '휴대폰번호를 입력해주세요.', valid: false};
    else await this.overlapPhone();
    if(!this.form.sms_token) this.validator.sms_token = {message: '문자인증번호를 입력해주세요.', valid: false};
    else await this.aligoCheck();
    if(!this.form.user_birth) this.validator.user_birth = {message: '생년월일을 입력해주세요.', valid: false};
    if(!this.form.user_email) this.validator.user_email = {message: '이메일을 입력해주세요.', valid: false};
    //else await 
    if(!this.form.user_gender) this.validator.user_gender = {message: '성별을 선택해주세요.', valid: false};
    if(!this.form.ctgo_country_id) this.validator.ctgo_country_id = {message: '국가를 선택해주세요.', valid: false};
    if(!this.form.company_id) this.validator.company_id = {message: '회사를 입력해주세요.', valid: false};
    if(!this.form.project_id) this.validator.project_id = {message: '현장을 입력해주세요.', valid: false};
    if(!this.form.basic_safe_edu_date) this.validator.basic_safe_edu_date = {message: '기초안전보건교육 이수날짜를 입력해주세요.', valid: false};
    // if(!this.form.file) this.validator.file = {message: '기초안전보건교육 파일을 업로드해주세요.', valid: false};
    // if(!this.form.file_json) this.validator.file_json = {message: '기초안전보건교육 파일을 업로드해주세요.', valid: false};

    loading.dismiss();

    console.log(this.form);

    for(const key in this.validator) {
      if(!this.validator[key].valid) return;
    }

    this.nav.navigateForward('/sign-up-health', {
      queryParams: { test: 1 }
    });
  }
}