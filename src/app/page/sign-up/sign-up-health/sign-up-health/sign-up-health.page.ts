import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from 'src/app/basic/basic.animation';
import { Validator } from 'src/app/basic/service/core/connect.service';
import { UserType } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { SignUpCompanyInfo } from '../../sign-up-company/sign-up-company.page';
import { SignUpWorkerHealth, SignUpWorkerInfo } from '../../sign-up-worker/sign-up-worker.interface';

@Component({
  selector: 'app-sign-up-health',
  templateUrl: './sign-up-health.page.html',
  styleUrls: ['./sign-up-health.page.scss'],
  animations: [ fadeInAnimation ]
})
export class SignUpHealthPage implements OnInit {

  companyInfo:SignUpCompanyInfo;
  signUpworkerInfo = new SignUpWorkerInfo();

  form = new SignUpWorkerHealth();
  validator = new Validator(new SignUpWorkerHealth()).validator;

  constructor(
    private activedRoute: ActivatedRoute,
    private nav: NavService
  ) { }

  ngOnInit() {
    if(!this.checkParams()) return;
    this.companyInfo = <SignUpCompanyInfo>this.activedRoute.snapshot.queryParams;
    this.signUpworkerInfo = history.state.form;
  }
  private checkParams() {
    if(history.state?.form && this.activedRoute.snapshot.queryParams) return true;
    else  {
      this.nav.navigateBack('/sign-up-company', {
        queryParams: {
          userType: UserType.WORKER
        }
      })
      return false;
    }
  }


  public prev() {
    this.nav.back();
  }
  public next() {

  }
  private valid() {
    if(typeof this.form.use_drugs_state !== 'boolean') this.validator.use_drugs_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.use_drugs_state = { valid: true };

    if(typeof this.form.use_drugs_state === 'boolean'
    && this.form.use_drugs_content === null) this.validator.use_drugs_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.use_drugs_content = { valid: true };

    if(this.form.brain_cure_state === null) this.validator.brain_cure_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.brain_cure_state = { valid: true };

    if(this.form.brain_cure_state !== null
    && this.form.brain_cure_content === null) this.validator.brain_cure_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.brain_cure_content = { valid: true };

    if(this.form.vomiting_state === null) this.validator.vomiting_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.vomiting_state = { valid: true };

    if(this.form.vomiting_content === null) this.validator.vomiting_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.vomiting_content = { valid: true };

    if(this.form.pain_head_state === null) this.validator.pain_head_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.pain_head_state = { valid: true };

    if(this.form.pain_head_content === null) this.validator.pain_head_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.pain_head_content = { valid: true };

    if(this.form.etc_disease_state === null) this.validator.etc_disease_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.etc_disease_state = { valid: true };

    if(this.form.etc_disease_content === null) this.validator.etc_disease_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.etc_disease_content = { valid: true };

    if(this.form.covid_nineteen_state === null) this.validator.covid_nineteen_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.covid_nineteen_state = { valid: true };

    if(this.form.covid_nineteen_content === null) this.validator.covid_nineteen_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.covid_nineteen_content = { valid: true };

    if(this.form.covid_vaccine_state === null) this.validator.covid_vaccine_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.covid_vaccine_state = { valid: true };

    if(this.form.health_terms_state === null) this.validator.health_terms_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.validator.health_terms_state = { valid: true };

  }
}