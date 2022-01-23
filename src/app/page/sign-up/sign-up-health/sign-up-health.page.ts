import { Component, ElementRef, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/basic/basic.animation';
import { Validator } from 'src/app/basic/service/core/connect.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';
import { signUpWorkerInfo, SignUpWorkerHealth, SignUpWorkerHealthMock } from '../sign-up-worker/sign-up-worker.interface';
import { SignUpCompanyInfo } from '../sign-up.interface';

@Component({
  selector: 'app-sign-up-health',
  templateUrl: './sign-up-health.page.html',
  styleUrls: ['./sign-up-health.page.scss'],
  animations: [ fadeInAnimation ]
})
export class SignUpHealthPage implements OnInit {

  companyInfo:SignUpCompanyInfo;
  signUpWorkerInfo = new signUpWorkerInfo();

  form = new SignUpWorkerHealth();
  validator = new Validator(new SignUpWorkerHealth()).validator;

  constructor(
    private el: ElementRef<HTMLElement>,
    private nav: NavService,
    private promise: PromiseService
  ) { }

  ngOnInit() {
    if(!this.checkParams()) return this.nav.navigateBack('/sign-up-company', { queryParams: { userType: 'WORKER' } });
    this.companyInfo = history.state.companyInfo;
    this.signUpWorkerInfo = history.state.signUpWorkerInfo;

    if(environment.autoTest) this.test();
  }

  public async test() {
    const el = this.el.nativeElement;
    // 가짜 정보 입력
    this.form = new SignUpWorkerHealthMock();
    await this.promise.wait();

    // 다음 페이지로
    el.querySelector('[name=button_next]').dispatchEvent(new Event('click'));
  }

  private checkParams() {
    if(history.state?.companyInfo
    && history.state?.signUpWorkerInfo) return true;
    else return false;
  }


  public prev() {
    this.nav.back();
  }
  public next() {
    if(!this.valid()) return;

    this.nav.navigateForward('/sign-up-terms', {
      state: {
        companyInfo: this.companyInfo,
        signUpWorkerInfo: this.signUpWorkerInfo,
        signUpWorkerHealth: this.form
      }
    });
  }
  private valid() {
    if(this.form.use_drugs_state == null) this.validator.use_drugs_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.use_drugs_state = { valid: true };

    if(this.form.use_drugs_state === true
    && !this.form.use_drugs_content) this.validator.use_drugs_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.use_drugs_content = { valid: true };

    if(this.form.brain_cure_state == null) this.validator.brain_cure_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.brain_cure_state = { valid: true };

    if(this.form.brain_cure_state === true
    && !this.form.brain_cure_content.length) this.validator.brain_cure_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.brain_cure_content = { valid: true };

    if(this.form.vomiting_state == null) this.validator.vomiting_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.vomiting_state = { valid: true };

    if(this.form.vomiting_state === true
    && !this.form.vomiting_content) this.validator.vomiting_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.vomiting_content = { valid: true };

    if(this.form.pain_head_state == null) this.validator.pain_head_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.pain_head_state = { valid: true };

    if(this.form.pain_head_state === true
    && !this.form.pain_head_content) this.validator.pain_head_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.pain_head_content = { valid: true };

    if(this.form.etc_disease_state == null) this.validator.etc_disease_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.etc_disease_state = { valid: true };

    if(this.form.etc_disease_state === true
    && !this.form.etc_disease_content) this.validator.etc_disease_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.etc_disease_content = { valid: true };

    if(this.form.covid_nineteen_state == null) this.validator.covid_nineteen_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.covid_nineteen_state = { valid: true };

    if(this.form.covid_nineteen_state === true
    && !this.form.covid_nineteen_content) this.validator.covid_nineteen_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.covid_nineteen_content = { valid: true };

    if(this.form.covid_vaccine_state == null) this.validator.covid_vaccine_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.covid_vaccine_state = { valid: true };

    if(this.form.health_terms_state !== true) this.validator.health_terms_state = { valid: false, message: '항목에 동의해주세요.' };
    else this.validator.health_terms_state = { valid: true };

    for(let key in this.validator) {
      if(!this.validator[key]?.valid) return false;
    }
    return true;
  }
}