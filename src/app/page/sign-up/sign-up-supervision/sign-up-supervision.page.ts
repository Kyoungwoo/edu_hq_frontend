import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/basic/basic.animation';
import { Validator, ConnectService } from 'src/app/basic/service/core/connect.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { environment } from 'src/environments/environment';
import { SignUpCompanyInfo, SignUpViewType } from '../sign-up.interface';
import { SignUpSuperForm, SignUpSuperFormMock } from './sign-up-supervision.interface';

@Component({
  selector: 'app-sign-up-supervision',
  templateUrl: './sign-up-supervision.page.html',
  styleUrls: ['./sign-up-supervision.page.scss'],
  animations: [ fadeAnimation ]
})
export class SignUpSupervisionPage implements OnInit {

  companyInfo:SignUpCompanyInfo;

  form = new SignUpSuperForm();
  validator = new Validator(new SignUpSuperForm()).validator;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private nav: NavService,
    public regex: RegexService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if(!this.checkParams()) return this.nav.navigateBack('/sign-up-company', { queryParams: { userType: 'SUPER' } });
    this.companyInfo = history.state.companyInfo;
    this.form.company_id = this.companyInfo.company_id;

    this.test();
  }
 
  public async test() {
    if(!environment.test.core.test) return;
    if(!environment.test.SignUp.test) return;
    
    const el = this.el.nativeElement;
    await this.promise.wait();

    // 입력 데이터 삽입
    const form = new SignUpSuperFormMock();
    for(const key in form) {
      const value = form[key];
      const input = el.querySelector(`[name=${key}]`);
      if(input && value) input.dispatchEvent(new CustomEvent('setValue', { detail: value }));
    }
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

    // 직위 가져오기
    el.querySelector('[name=ctgo_job_position_id]').dispatchEvent(new Event('click'));
    await this.promise.wait(1000);

    // 현장 가져오기
    el.querySelector('[name=project_id]').dispatchEvent(new Event('click'));
    await this.promise.wait(2500);

    // 공종 가져오기
    el.querySelector('[name=ctgo_construction_id]').dispatchEvent(new Event('click'));
    await this.promise.wait(1000);
    
    // 다음 페이지로
    el.querySelector('[name=button_next]').dispatchEvent(new Event('click'));

    console.log(this.form);
    console.log(this.validator);
  }

  private checkParams() {
    if(history.state?.companyInfo) return true;
    else return false;
  }

  public prev() {
    this.nav.navigateBack('/sign-up-type');
  }
  public async next() {
    if(!this.valid()) return;

    this.nav.navigateForward('/sign-up-terms', {
      state: {
        SignUpSuperForm: this.form
      }
    });
  }

  public async overlapId() {
    const { account_id } = this.form;
    if(!account_id) return this.validator.account_id = null;
    if(account_id?.length < 3) return this.validator.account_id = { valid: false, message: '아이디를 3자 이상 입력해주세요.' };
    const res = await this.connect.run('/forSignUp/overlap/id', { account_id });
    this.validator.account_id = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  public async checkPass() {
    const { account_token } = this.form;
    if(!account_token) return this.validator.account_token = null;
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
    if(!user_phone) return this.validator.user_phone = null;
    if(user_phone?.length < 3) return this.validator.user_phone = { valid: false, message: '휴대폰 번호를 정확히 입력해주세요.' };
    const res = await this.connect.run('/forSignUp/overlap/phone', { user_phone });
    this.validator.user_phone = res.rsCode === 0 ? null : { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.sms_token = null;
  }
  public async aligoSend() {
    const { user_phone } = this.form;
    if(this.validator.user_phone?.valid === false) return;
    const res = await this.connect.run('/aligo/send', { user_phone });
    this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };

    // 문자 인증번호 가져와서 넣기
    const res2 = await this.connect.run('/test/sms/get', { user_phone });
    this.form.sms_token = res2.rsObj.sms_token;
    await this.promise.wait();
  }
  
  public async aligoCheck() {
    const { user_phone, sms_token } = this.form;
    const res = await this.connect.run('/aligo/check', { user_phone, sms_token });
    this.validator.sms_token = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  public async overlapEmail() {
    const { user_email } = this.form;
    if(!user_email) return this.validator.user_email = null;
    const res = await this.connect.run('/forSignUp/overlap/email', { user_email });
    this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  public findFile(view_type:SignUpViewType) {
    return this.form.file_preview.find(futItem => futItem.view_type === view_type);
  }

  private valid():boolean {
    this.validator.user_email = { valid: true };

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

    if(!this.form.user_birth) this.validator.user_birth = { message: '생년월일을 입력해주세요.', valid: false };
    else this.validator.user_birth = { valid: true };

    if(!this.form.user_gender) this.validator.user_gender = { message: '성별을 선택해주세요.', valid: false };
    else this.validator.user_gender = { valid: true };

    if(!this.form.company_id) this.validator.company_id = { message: '회사를 입력해주세요.', valid: false };
    else this.validator.company_id = { valid: true };

    if(!this.form.user_phone) this.validator.user_phone = { message: '휴대폰번호를 입력해주세요.', valid: false };
    else if(!this.validator.sms_token?.valid) this.validator.sms_token = { message: '문자인증번호를 인증해주세요.', valid: false };
    else
    this.validator.user_phone = { valid: true };

    if(!this.form.sms_token) this.validator.sms_token = { message: '문자인증번호를 입력해주세요.', valid: false };
    else if(this.validator.sms_token?.valid)
    this.validator.sms_token = { valid: true };

    // if(this.validator.user_email?.valid)
    // this.validator.user_email = { valid: true };

    if(this.form.ctgo_job_position_id == null) this.validator.ctgo_job_position_id = { message: '직위를 입력해주세요.', valid: false };
    else this.validator.ctgo_job_position_id = { valid: true };

    if(!this.form.company_id) this.validator.company_id = { message: '회사를 입력해주세요.', valid: false };
    else this.validator.company_id = { valid: true };

    if(this.form.project_id == null) this.validator.project_id = { message: '현장을 입력해주세요.', valid: false };
    else this.validator.project_id = { valid: true };

    /* if(this.form.ctgo_construction_id == null) this.validator.ctgo_construction_id = { message: '공종을 입력해주세요.', valid: false };
    else this.validator.ctgo_construction_id = { valid: true }; */

    this.validator.file_preview = { valid: true };
    this.validator.file = { valid: true };
    this.validator.file_json = { valid: true };

    for(let key in this.validator) {
      if(!this.validator[key]?.valid) return false;
    }
    return true;
  }

}
