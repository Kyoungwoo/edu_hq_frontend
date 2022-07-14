import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { fadeAnimation } from 'src/app/basic/basic.animation';
import { ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { environment } from 'src/environments/environment';

export class ChangePhoneForm {
  user_phone:string = null; // 휴대폰 번호
  sms_token:string = null; // 토큰
}

@Component({
  selector: 'app-change-phone',
  templateUrl: './change-phone.page.html',
  styleUrls: ['./change-phone.page.scss'],
  animations: [ fadeAnimation ]
})
export class ChangePhonePage implements OnInit {

  form = new ChangePhoneForm();
  validator = new Validator(new ChangePhoneForm()).validator;

  constructor(
    private el: ElementRef<HTMLElement>,
    private alert: AlertService,
    private _modal: ModalController,
    private connect: ConnectService,
    private promise: PromiseService,
    private regex: RegexService,
    private toast: ToastService,
    private changeDetector: ChangeDetectorRef,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
    this.test();
  }
  private async test() {
    if(!environment.test.core.test) return;

    const el = this.el.nativeElement;
    await this.promise.wait();

    // 데이터 입력
    el.querySelector('[name=user_phone]').dispatchEvent(new CustomEvent('setValue', { detail: this.regex.random.phone() }));
    await this.promise.wait();
    
    // 문자 인증 전송
    el.querySelector('[name=user_phone]').dispatchEvent(new Event('buttonClick'));
    await this.promise.wait(1500);

    // 문자 인증번호 가져와서 넣기
    const { user_phone } = this.form;
    const res = await this.connect.run('/test/sms/get', { user_phone });
    el.querySelector('[name=sms_token]').dispatchEvent(new CustomEvent('setValue', { detail: res.rsObj.sms_token }));
    await this.promise.wait();
    
    // 문자 인증
    el.querySelector('[name=sms_token]').dispatchEvent(new Event('buttonClick'));
    await this.promise.wait();

    // 변경하기
    el.querySelector('[name=button_submit]').dispatchEvent(new Event('click'));
    await this.promise.wait(800);

    document.querySelector('.alert-button').dispatchEvent(new Event('click'));
  }

  dismiss() {
    this._modal.dismiss();
  }

  /** 휴대폰번호 관련 코드 */
  // user_phone은 overlapPhone 과 aligoSend 두개를 모두 실행해야 valid 된다.
  async overlapPhone() {
    const { user_phone } = this.form;
    if(!user_phone) return this.validator.user_phone = null;
    if(user_phone?.length < 3) return this.validator.user_phone = { valid: false, message: '휴대폰 번호를 정확히 입력해주세요.' };
    /** /forSignUp/overlap/phone 이거 사용한거 실수 아님. 내 폰번호 포함 모든 번호를 중복 체크 해야되기 때문에 이렇게 함. */
    const res = await this.connect.run('/forSignUp/overlap/phone', { user_phone });
    this.validator.user_phone = res.rsCode === 0 ? null : { valid: res.rsCode === 0, message: res.rsMsg };
    this.validator.sms_token = null;
  }
  async aligoSend() {
    const { user_phone } = this.form;
    if(this.validator.user_phone?.valid === false) return;
    const res = await this.connect.run('/mypage/send/sms', { user_phone });
    this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
  }
  
  async aligoCheck() {
    const { user_phone, sms_token } = this.form;
    const res = await this.connect.run('/mypage/check/sms', { user_phone, sms_token });
    this.validator.sms_token = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  /** submit */
  async submit() {
    if(!this.valid()) return;
    const res = await this.connect.run('/mypage/phone/update', this.form);
    if(res.rsCode === 0) {
      this._modal.dismiss({ update: true });
      this.alert.present({
        img: 'assets/basic/img/check-circle-primary.svg',
        message: '휴대폰 번호가 변경되었습니다.'
      });
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  private valid() {
    if(!this.form.user_phone) this.validator.user_phone = { message: '휴대폰번호를 입력해주세요.', valid: false };
    else if(this.validator.user_phone?.valid) this.validator.user_phone = { valid: true };

    if(!this.form.sms_token) this.validator.sms_token = { message: '문자인증번호를 입력해주세요.', valid: false };
    else if(!this.validator.sms_token?.valid) this.validator.sms_token = { message: '문자인증번호를 인증해주세요.', valid: false };
    else this.validator.sms_token = { valid: true };

    for(let key in this.validator) {
      if(!this.validator[key]?.valid) return false;
    }
    return true;
  }
}
