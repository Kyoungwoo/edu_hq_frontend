import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConnectResult, ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';
import { UpdatePasswordForm, UpdatePasswordFormMock } from '../../../login.interface';

@Component({
  selector: 'app-find-password-result',
  templateUrl: './find-password-result.component.html',
  styleUrls: ['./find-password-result.component.scss'],
})
export class FindPasswordResultComponent implements OnInit {

  @Input() form:UpdatePasswordForm;
  @Output() changeType = new EventEmitter();

  type:'find-id'|'find-password' = 'find-password';

  validator = new Validator(new UpdatePasswordForm()).validator;
  res:ConnectResult;

  constructor(
    private el: ElementRef<HTMLElement>,
    private alert: AlertService,
    private connect: ConnectService,
    private nav: NavService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.test();
  }

  private async test() {
    if(!environment.test.core.test) return;
    if(!environment.test.FindPassword.test) return;

    const el = this.el.nativeElement;
    await this.promise.wait();

    const form = new UpdatePasswordFormMock();
    
    for(const key in form) {
      const value = form[key];
      const input = el.querySelector(`[name=${key}]`);
      if(input && value) input.dispatchEvent(new CustomEvent('setValue', { detail: value }));
    }
    await this.promise.wait();

    el.querySelector('[name=button_submit]').dispatchEvent(new Event('click'));
    await this.promise.wait(800);
    
    document.querySelector('.alert-button').dispatchEvent(new Event('click'));
  }

  public async submit() {
    if(!this.valid()) return;

    this.res = await this.connect.run('/sign/find/update/account_token', this.form, {
      loading: true
    });
    if(this.res.rsCode === 0) {
      this.nav.navigateBack('/login', { force: true });
      this.alert.present({
        img: 'assets/basic/img/check-circle-primary.svg',
        header: '비밀번호가 변경되었습니다.',
        message: '재 로그인 해주세요.',
        backdropDismiss: false,
        buttons: [
          { text: '확인' }
        ]
      });
    }
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

  private valid():boolean {
    this.validator.account_id = { valid: true };
    this.validator.user_name = { valid: true };
    this.validator.user_phone = { valid: true };
    this.validator.sms_token = { valid: true };

    if(!this.form.account_token) this.validator.account_token = { message: '비밀번호를 입력해주세요.', valid: false };
    else if(this.validator.account_token?.valid) 
    this.validator.account_token = { valid: true };

    if(!this.form.account_token_conform) this.validator.account_token_conform = { message: '비밀번호 확인을 입력해주세요.', valid: false };
    else if(this.validator.account_token_conform?.valid)
    this.validator.account_token_conform = { valid: true };

    for(let key in this.validator) {
      if(!this.validator[key]?.valid) return false;
    }
    return true;
  }
}
