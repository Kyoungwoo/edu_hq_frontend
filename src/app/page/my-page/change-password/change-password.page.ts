import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';

export class ChangePasswordForm {
  account_token:string = null;
  new_account_token:string = null;
  new_account_token_conform:string = null;
}

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  form = new ChangePasswordForm();
  validator = new Validator(new ChangePasswordForm()).validator;

  constructor(
    private el: ElementRef<HTMLElement>,
    private alert: AlertService,
    private _modal: ModalController,
    private connect: ConnectService,
    private nav: NavService,
    private promise: PromiseService,
    private toast: ToastService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.test();
  }

  private async test() {
    if(!environment.test.core.test) return;

    const el = this.el.nativeElement;
    await this.promise.wait();
    
    // 데이터 입력
    el.querySelector('[name=account_token]').dispatchEvent(new CustomEvent('setValue', { detail: 'qwer1234' }));
    el.querySelector('[name=new_account_token]').dispatchEvent(new CustomEvent('setValue', { detail: 'qwer1234' }));
    el.querySelector('[name=new_account_token_conform]').dispatchEvent(new CustomEvent('setValue', { detail: 'qwer1234' }));
    await this.promise.wait();

    el.querySelector('[name=button_submit]').dispatchEvent(new Event('click'));
    await this.promise.wait(800);
    
    document.querySelector('.alert-button').dispatchEvent(new Event('click'));
  }

  dismiss() {
    this._modal.dismiss();
  }

  public async checkPass() {
    const { new_account_token } = this.form;
    if(!new_account_token) return this.validator.new_account_token = null;
    if(new_account_token?.length < 4) return this.validator.new_account_token = { valid: false, message: '비밀번호를 4자이상 입력해주세요.' };
    const res = await this.connect.run('/forSignUp/check/pass', { account_token: new_account_token });
    this.validator.new_account_token = { valid: res.rsCode === 0, message: res.rsMsg };
  }
  public checkPassConfirm() {
    const { new_account_token, new_account_token_conform } = this.form;
    if(new_account_token !== new_account_token_conform) return this.validator.new_account_token_conform = { valid: false, message: '비밀번호와 비밀번호 확인이 다릅니다.' };
    else return this.validator.new_account_token_conform = { valid: true };
  }

  /** submit */
  async submit() {
    if(!this.valid()) return;

    const res = await this.connect.run('/mypage/account_token/update', this.form, {
      loading: true
    });
    if(res.rsCode === 0) {
      this._modal.dismiss();
      this.nav.navigateRoot('/login', { force: true, animated: true });
      this.alert.present({
        img: 'assets/basic/img/check-circle-primary.svg',
        header: '비밀번호가 변경되었습니다.',
        message: '재 로그인 해주세요.',
        backdropDismiss: false,
        buttons: [
          { text: '확인' }
        ]
      });
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  private valid():boolean {
    if(!this.form.account_token) this.validator.account_token = { message: '기존 비밀번호를 입력해주세요.', valid: false };
    else this.validator.account_token = { valid: true };

    if(!this.form.new_account_token) this.validator.new_account_token = { message: '새 비밀번호를 입력해주세요.', valid: false };
    else if(this.validator.new_account_token?.valid) this.validator.new_account_token = { valid: true };

    if(!this.form.new_account_token_conform) this.validator.new_account_token_conform = { message: '새 비밀번호 확인을 입력해주세요.', valid: false };
    else if(this.validator.new_account_token_conform?.valid) this.validator.new_account_token_conform = { valid: true };

    for(let key in this.validator) {
      if(!this.validator[key]?.valid) return false;
    }
    return true;
  }

}
