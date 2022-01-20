import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';
import { SignUpDonePage } from '../sign-up-done/sign-up-done.page';
import { SignUpWorkerForm } from '../sign-up-worker/sign-up-worker.interface';

@Component({
  selector: 'app-sign-up-terms',
  templateUrl: './sign-up-terms.page.html',
  styleUrls: ['./sign-up-terms.page.scss'],
})
export class SignUpTermsPage implements OnInit {

  form = new SignUpWorkerForm();
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
    const { signUpworkerInfo, signUpWorkerHealth } = history.state;
    this.form = {
      ...signUpworkerInfo,
      ...signUpWorkerHealth
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
    if(history.state?.companyInfo
    && history.state?.signUpworkerInfo
    && history.state?.signUpWorkerHealth) return true;
    else return false;
  }

  prev() {
    this.nav.back();
  }
  done() {
    this.signUp();
  }

  private async signUp() {
    this.res = await this.connect.run('/sign/up/worker', this.form, {
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