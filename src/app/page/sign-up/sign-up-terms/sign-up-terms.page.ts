import { Component, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserType } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';
import { SignUpDonePage } from '../sign-up-done/sign-up-done.page';
import { SignUpLhForm } from '../sign-up-lh/sign-up-lh.interface';
import { SignUpWorkerForm } from '../sign-up-worker/sign-up-worker.interface';

@Component({
  selector: 'app-sign-up-terms',
  templateUrl: './sign-up-terms.page.html',
  styleUrls: ['./sign-up-terms.page.scss'],
})
export class SignUpTermsPage implements OnInit {

  userType:UserType;
  form:SignUpWorkerForm | SignUpLhForm;
  res:ConnectResult;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private modal: ModalController,
    private nav: NavService,
    private promise: PromiseService
  ) {}

  ngOnInit() {
    if(!this.checkParams()) return this.nav.navigateBack('/sign-up-type');
    if(this.userType === 'WORKER') {
      const { signUpWorkerInfo, signUpWorkerHealth } = history.state;
      this.form = {
        ...signUpWorkerInfo,
        ...signUpWorkerHealth
      }
    } else if(this.userType === 'LH') {
      const { signUpLhForm } = history.state;
      this.form = signUpLhForm;
    }

    if(environment.autoTest) this.test();
  }

  public async test() {
    const el = this.el.nativeElement;

    // 약관 동의 (현재 없음)

    // 회원 가입
    el.querySelector('[name=submit]').dispatchEvent(new Event('click'));
  }

  private checkParams() {
    if(history.state?.signUpLhForm) {
      this.userType = 'LH';
      return true;
    }
    else if(history.state?.companyInfo
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
    this.signUp();
  }

  private async signUp() {
    let api = '';
    if(this.userType === 'WORKER') {
      api = '/sign/up/worker';
    } else if(this.userType === 'LH') {
      api = '/sign/up/lh';
    }
    this.res = await this.connect.run(api, this.form, {
      loading: true
    });
    if(this.res.rsCode === 0) {
      const modal = await this.modal.create({
        component: SignUpDonePage
      });
      modal.present();
      this.nav.navigateRoot('/login', {
        force: true
      });
    }
  }
}