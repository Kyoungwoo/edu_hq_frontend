import { Component, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserType } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';
import { SignUpDonePage } from '../sign-up-done/sign-up-done.page';
import { SignUpLhForm } from '../sign-up-lh/sign-up-lh.interface';
import { SignUpPartnerForm } from '../sign-up-partner/sign-up-partner.inerface';
import { SignUpSupervisionForm } from '../sign-up-supervision/sign-up-supervision.interface';
import { SignUpWorkerForm } from '../sign-up-worker/sign-up-worker.interface';

@Component({
  selector: 'app-sign-up-terms',
  templateUrl: './sign-up-terms.page.html',
  styleUrls: ['./sign-up-terms.page.scss'],
})
export class SignUpTermsPage implements OnInit {

  userType:UserType;
  form:SignUpLhForm | SignUpSupervisionForm | SignUpPartnerForm | SignUpWorkerForm;
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
    if(this.userType === 'LH') {
      const { signUpLhForm } = history.state;
      this.form = signUpLhForm;
    }
    else if(this.userType === 'SUPER') {
      const { signUpSupervisionForm } = history.state;
      this.form = signUpSupervisionForm;
    }
    else if(this.userType === 'COMPANY') {
      const { signUpPartnerForm } = history.state;
      this.form = signUpPartnerForm;
    }
    else if(this.userType === 'WORKER') {
      const { signUpWorkerInfo, signUpWorkerHealth } = history.state;
      this.form = {
        ...signUpWorkerInfo,
        ...signUpWorkerHealth
      }
    } 

    if(environment.test) this.test();
  }

  public async test() {
    if(!environment.test.core.test) return;
    if(!environment.test.SignUp.test) return;
    
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
    else if(history.state?.signUpSupervisionForm) {
      this.userType = 'SUPER';
      return true;
    }
    else if(history.state?.signUpPartnerForm) {
      this.userType = 'COMPANY';
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
    if(this.userType === 'LH') {
      api = '/sign/up/lh';
    }
    else if(this.userType === 'SUPER') {
      api = '/sign/up/super';
    }
    else if(this.userType === 'COMPANY') {
      api = '/sign/up/company';
    }
    else if(this.userType === 'WORKER') {
      api = '/sign/up/worker';
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