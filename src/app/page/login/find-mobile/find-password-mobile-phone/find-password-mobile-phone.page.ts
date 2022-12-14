import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeAnimation } from 'src/app/basic/basic.animation';
import { ConnectResult, ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { environment } from 'src/environments/environment';
import { FindPasswordForm, FindPasswordFormMock, UpdatePasswordForm } from '../../login.interface';

@Component({
  selector: 'app-find-password-mobile-phone',
  templateUrl: './find-password-mobile-phone.page.html',
  styleUrls: ['./find-password-mobile-phone.page.scss'],
  animations: [ fadeAnimation ]
})
export class FindPasswordMobilePhonePage implements OnInit {

  form = new FindPasswordForm();
  validator = new Validator(new FindPasswordForm()).validator;
  res:ConnectResult;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private activedRoute: ActivatedRoute,
    private nav: NavService,
    public regex: RegexService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
    this.test();
  }

  private async test() {
    if(!environment.test.core.test) return;
    if(!environment.test.FindPassword.test) return;
    
    const el = this.el.nativeElement;
    await this.promise.wait();

    // 입력 데이터 삽입
    const form = new FindPasswordFormMock();
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

    // 다음 프로세스
    el.querySelector('[name=button_next]').dispatchEvent(new Event('click'));
    console.log(this.form);
    console.log(this.validator);
  }

  public prev() {
    this.nav.navigateBack('/find-password-mobile-type');
  }
  public async next() {
    if(!this.valid()) return;

    this.res = await this.connect.run('/sign/find/account_token', this.form, { loading: true });
    if(this.res.rsCode === 0) {
      const form:UpdatePasswordForm = {
        ...this.form,
        account_token: null,
        account_token_conform: null
      }
      this.nav.navigateForward('/find-password-mobile-result', {
        state: {
          form
        }
      });
    }
  }

  public async aligoSend() {
    const { user_phone } = this.form;
    if(this.validator.user_phone?.valid === false) return;
    const res = await this.connect.run('/aligo/send', { user_phone });
    this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
  }
  public async aligoCheck() {
    const { user_phone, sms_token } = this.form;
    const res = await this.connect.run('/aligo/check', { user_phone, sms_token });
    this.validator.sms_token = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  private valid():boolean {
    if(!this.form.account_id) this.validator.account_id = { message: '아이디를 입력해주세요.', valid: false };
    else this.validator.account_id = { valid: true };

    if(!this.form.user_name) this.validator.user_name = { message: '이름을 입력해주세요.', valid: false };
    else this.validator.user_name = { valid: true };

    if(!this.form.user_phone) this.validator.user_phone = { message: '휴대폰번호를 입력해주세요.', valid: false };
    else if(this.validator.user_phone?.valid)
    this.validator.user_phone = { valid: true };

    if(!this.form.sms_token) this.validator.sms_token = { message: '문자인증번호를 입력해주세요.', valid: false };
    else if(this.validator.sms_token?.valid)
    this.validator.sms_token = { valid: true };

    for(let key in this.validator) {
      if(!this.validator[key]?.valid) return false;
    }
    return true;
  }
}