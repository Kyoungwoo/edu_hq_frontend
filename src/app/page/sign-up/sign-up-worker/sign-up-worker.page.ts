import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeAnimation } from 'src/app/basic/basic.animation';
import { ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { environment } from 'src/environments/environment';
import { SignUpViewType, SignUpWorkerInfoMock, SignUpWorkerInfo, SignUpCompanyInfo } from './sign-up-worker.interface';

@Component({
  selector: 'app-sign-up-worker',
  templateUrl: './sign-up-worker.page.html',
  styleUrls: ['./sign-up-worker.page.scss'],
  animations: [ fadeAnimation ]
})
export class SignUpWorkerPage implements OnInit {

  companyInfo:SignUpCompanyInfo;

  form = new SignUpWorkerInfo();
  validator = new Validator(new SignUpWorkerInfo()).validator;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private nav: NavService,
    public regex: RegexService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log('companyInfo', history.state.companyInfo);
    if(!this.checkParams()) return this.nav.navigateBack('/sign-up-company', { queryParams: { userType: 'WORKER' } });
    this.companyInfo = history.state.companyInfo;
    this.form.company_id = this.companyInfo.company_id;

    if(environment.autoTest) this.test();
  }

  public async test() {
    const el = this.el.nativeElement;
    await this.promise.wait();

    // 가짜 데이터 삽입
    this.form = new SignUpWorkerInfoMock();
    this.form.company_id = this.companyInfo.company_id;

    // 핸드폰 중복 체크
    el.querySelector('[name=user_phone]').dispatchEvent(new Event('delayKeyup'));
    await this.promise.wait();
    // 문자 인증 전송
    el.querySelector('[name=user_phone]').dispatchEvent(new Event('buttonClick'));
    await this.promise.wait(1500);

    // 문자 인증번호 가져와서 넣기
    const { user_phone } = this.form;
    const res = await this.connect.run('/test/sms/get', { user_phone });
    this.form.sms_token = res.rsObj.sms_token;
    await this.promise.wait();
    
    // 문자 인증
    this.changeDetector.detectChanges();
    el.querySelector('[name=sms_token]').dispatchEvent(new Event('buttonClick'));
    await this.promise.wait();

    /* // 국가 가져오기
    el.querySelector('[name=ctgo_country_id]').dispatchEvent(new Event('click')); */

    // 현장 가져오기
    el.querySelector('[name=project_id]').dispatchEvent(new Event('click'));
    await this.promise.wait(3000);
    
    // 다음 페이지로
    // el.querySelector('[name=button_next]').dispatchEvent(new Event('click'));
  }

  private checkParams() {
    if(history.state?.companyInfo) return true;
    else return false;
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
    else return this.validator.account_token_conform = { valid: true };
  }
  
  // user_phone은 overlapPhone 과 aligoSend 두개를 모두 실행해야 valid 된다.
  public async overlapPhone() {
    const { user_phone } = this.form;
    if(user_phone?.length < 3) return this.validator.user_phone = { valid: false, message: '휴대폰 번호를 정확히 입력해주세요.' };
    const res = await this.connect.run('/forSignUp/overlap/phone', { user_phone });
    this.validator.user_phone = res.rsCode === 0 ? null : { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.sms_token = null;
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

  public prev() {
    this.nav.back();
  }
  public async next() {
    if(!this.valid()) return;

    this.nav.navigateForward('/sign-up-health', {
      state: {
        companyInfo: this.companyInfo,
        signUpworkerInfo: this.form
      }
    });
  }
  private valid():boolean {
    if(!this.form.user_name) this.validator.user_name = { message: '이름을 입력해주세요.', valid: false };
    else this.validator.user_name = { valid: true };

    if(!this.form.account_id) this.validator.account_id = { message: '아이디를 입력해주세요.', valid: false };
    else if(this.validator.account_id?.valid)
    this.validator.account_id = { valid: true };

    if(!this.form.account_token) this.validator.account_token = { message: '비밀번호를 입력해주세요.', valid: false };
    else if(this.validator.account_token?.valid) 
    this.validator.account_token = { valid: true };

    if(!this.form.account_token_conform) this.validator.account_token_conform = { message: '비밀번호 확인을 입력해주세요.', valid: false };
    else if(this.validator.account_token_conform?.valid)
    this.validator.account_token_conform = { valid: true };

    if(!this.form.user_phone) this.validator.user_phone = { message: '휴대폰번호를 입력해주세요.', valid: false };
    else if(this.validator.user_phone?.valid)
    this.validator.user_phone = { valid: true };

    if(!this.form.sms_token) this.validator.sms_token = { message: '문자인증번호를 입력해주세요.', valid: false };
    else if(this.validator.sms_token?.valid)
    this.validator.sms_token = { valid: true };

    if(!this.form.user_birth) this.validator.user_birth = { message: '생년월일을 입력해주세요.', valid: false };
    else this.validator.user_birth = { valid: true };

    if(this.validator.user_email?.valid)
    this.validator.user_email = { valid: true };

    if(!this.form.user_gender) this.validator.user_gender = { message: '성별을 선택해주세요.', valid: false };
    else this.validator.user_gender = { valid: true };

    if(!this.form.ctgo_country_id) this.validator.ctgo_country_id = { message: '국가를 선택해주세요.', valid: false };
    else this.validator.ctgo_country_id = { valid: true };

    if(!this.form.company_id) this.validator.company_id = { message: '회사를 입력해주세요.', valid: false };
    else this.validator.company_id = { valid: true };

    if(!this.form.project_id) this.validator.project_id = { message: '현장을 입력해주세요.', valid: false };
    else this.validator.project_id = { valid: true };

    // if(!this.form.basic_safe_edu_date) this.validator.basic_safe_edu_date = { message: '기초안전보건교육 이수날짜를 입력해주세요.', valid: false };
    this.validator.basic_safe_edu_date = { valid: true };

    //
    this.validator.file_preview = { valid: true };

    // if(!this.form.file) this.validator.file = {message: '기초안전보건교육 파일을 업로드해주세요.', valid: false};
    this.validator.file = { valid: true };
    // if(!this.form.file_json) this.validator.file_json = {message: '기초안전보건교육 파일을 업로드해주세요.', valid: false};
    this.validator.file_json = { valid: true };

    for(let key in this.validator) {
      if(!this.validator[key]?.valid) return false;
    }
    return true;
  }
}