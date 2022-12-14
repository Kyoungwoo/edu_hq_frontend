import { Component, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { fadeInAnimation } from 'src/app/basic/basic.animation';
import { ConnectResult, ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { DeviceService } from 'src/app/basic/service/core/device.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { UserType } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';
import { SignUpDonePage } from '../sign-up-done/sign-up-done.page';
import { SignUpTerms } from '../sign-up.interface';

@Component({
  selector: 'app-sign-up-terms',
  templateUrl: './sign-up-terms.page.html',
  styleUrls: ['./sign-up-terms.page.scss'],
  animations: [fadeInAnimation]
})
export class SignUpTermsPage implements OnInit {

  userType: UserType;

  prevForm;
  form = new SignUpTerms();

  validator = new Validator(new SignUpTerms()).validator;

  res: ConnectResult;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private modal: ModalController,
    private toast: ToastService,
    private nav: NavService,
    private promise: PromiseService,
    private device: DeviceService,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
    if (!this.checkParams()) return this.nav.navigateBack('/sign-up-type');
    if (this.userType === 'LH') {
      const { signUpLhForm } = history.state;
      this.prevForm = signUpLhForm;
    }
    else if (this.userType === 'SUPER') {
      const { SignUpSuperForm } = history.state;
      this.prevForm = SignUpSuperForm;
    }
    else if (this.userType === 'COMPANY') {
      const { signUpPartnerForm } = history.state;
      this.prevForm = signUpPartnerForm;
    }
    else if (this.userType === 'WORKER') {
      const { signUpWorkerInfo, signUpWorkerHealth } = history.state;
      this.prevForm = {
        ...signUpWorkerInfo,
        ...signUpWorkerHealth
      }
    }

    this.test();
  }

  public async test() {
    if (!environment.test.core.test) return;
    if (!environment.test.SignUp.test) return;

    const el = this.el.nativeElement;
    await this.promise.wait();

    // ?????? ??????
    el.querySelector('[name=system_terms]').dispatchEvent(new Event('click'));
    el.querySelector('[name=personal_terms]').dispatchEvent(new Event('click'));
    if (this.userType === 'WORKER') el.querySelector('[name=sensitive_terms]').dispatchEvent(new Event('click'));
    el.querySelector('[name=gps_terms]').dispatchEvent(new Event('click'));
    el.querySelector('[name=sharing_terms]').dispatchEvent(new Event('click'));

    // ?????? ??????
    el.querySelector('[name=submit]').dispatchEvent(new Event('click'));
  }

  private checkParams() {
    if (history.state?.signUpLhForm) {
      this.userType = 'LH';
      return true;
    }
    else if (history.state?.SignUpSuperForm) {
      this.userType = 'SUPER';
      return true;
    }
    else if (history.state?.signUpPartnerForm) {
      this.userType = 'COMPANY';
      return true;
    }
    else if (history.state?.companyInfo
      && history.state?.signUpWorkerInfo
      && history.state?.signUpWorkerHealth) {
      this.userType = 'WORKER';
      return true;
    }
    else return false;
  }

  prev() {
    this.nav.back();
  }
  done() {
    console.log(this.prevForm);
    console.log(this.form);
    console.log(this.validator);
    if (!this.valid()) return;
    this.signUp();
  }

  private async signUp() {
    let api = '';
    if (this.userType === 'LH') {
      api = '/sign/up/lh';
    }
    else if (this.userType === 'SUPER') {
      api = '/sign/up/super';
    }
    else if (this.userType === 'COMPANY') {
      api = '/sign/up/company';
    }
    else if (this.userType === 'WORKER') {
      api = '/sign/up/worker';
    }

    this.res = await this.connect.run(api, {
      ...this.prevForm,
      ...this.form
    }, {
      loading: true
    });
    if (this.res.rsCode === 0) {
      const modal = await this.modal.create({
        component: SignUpDonePage
      });
      modal.present();
      if (this.device.platform_type < 3) {
        this.nav.navigateRoot('/login-mobile', {
          force: true
        });
      }
      else {
        this.nav.navigateRoot('/login', {
          force: true
        });
      }
    }
  }

  private valid(): boolean {
    if (!this.form.system_terms) this.validator.system_terms = { message: '????????? ??????????????? ??????????????????.', valid: false };
    else this.validator.system_terms = { valid: true };

    if (!this.form.personal_terms) this.validator.personal_terms = { message: '???????????? ?????? ??? ????????? ??????????????????.', valid: false };
    else this.validator.personal_terms = { valid: true };

    if (this.userType === 'WORKER') {
      // ??????????????? worker ??? ??????
      if (!this.form.sensitive_terms) this.validator.sensitive_terms = { message: '???????????? ?????? ??? ????????? ??????????????????.', valid: false };
      else this.validator.sensitive_terms = { valid: true };
    } else {
      this.validator.sensitive_terms = { valid: true };
    }

    if (!this.form.gps_terms) this.validator.gps_terms = { message: '???????????? ????????? ??????????????? ??????????????????.', valid: false };
    else this.validator.gps_terms = { valid: true };

    if (!this.form.sharing_terms) this.validator.sharing_terms = { message: '???3??? ??????????????? ??????????????????.', valid: false };
    else this.validator.sharing_terms = { valid: true };

    for (let key in this.validator) {
      if (!this.validator[key]?.valid) return false;
    }

    return true;
  }

  termPage(url: string) {
    window.open('https://cdn.lh-skeeper.or.kr/terms/' + url, '_blank');
  }
}
