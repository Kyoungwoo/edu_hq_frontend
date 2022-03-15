import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { fadeInAnimation } from 'src/app/basic/basic.animation';
import { ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

class WorkerHealth {
  use_drugs_state:0|1 = null; //약물복용여부 (false - 없다, 미접종, 미동의 / true - 있다, 접종, 동의)
  use_drugs_content:string = null; //약물명
  brain_cure_state:0|1 = null; //심혈관질환 치료여부
  brain_cure_content:string[] = []; //심혈관질환명 / 없을시 빈배열
  vomiting_state:0|1 = null; //가슴통증 여부
  vomiting_content:string = null; //가슴통증 내용
  pain_head_state:0|1 = null; //두통, 어지러운 증상 여부
  pain_head_content:string = null; //두통, 어지러운 증상 내용
  etc_disease_state:0|1 = null; //기타질환 치료여부
  etc_disease_content:string = null; //기타질환 내용
  covid_nineteen_state:0|1 = null; //코로나 증상여부
  covid_nineteen_content:string = null; //코로나 증상내용
  covid_vaccine_state:0|1 = null; //코로나 백신접종 여부
  health_terms_state:0|1 = null; //문진표 작성동의 여부
}
@Component({
  selector: 'app-my-page-health',
  templateUrl: './my-page-health.page.html',
  styleUrls: ['./my-page-health.page.scss'],
  animations: [ fadeInAnimation ]
})
export class MyPageHealthPage implements OnInit {

  editable:boolean = false;

  healthForm = new WorkerHealth();
  healthValidator = new Validator(new WorkerHealth()).validator;

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private toast: ToastService,
    private alert: AlertService,
    private loading: LoadingService,
    public user: UserService,
    private nav: NavService
  ) { }

  ngOnInit() {
    this.get();
  }

  /**
   * 데이터 구성 파트
   */
  /** 모두 가져오기 */
  async get() {
    const loading = await this.loading.present();
    await Promise.all([
      this.getHealth()
    ])
    loading.dismiss();
  }

  /** 건강문진정보 가져오기 */
  private async getHealth() {
    const res = await this.connect.run('/mypage/health/detail', {}, { parse: ['brain_cure_content'] });
    if(res.rsCode === 0) {
      this.healthForm = {
        ...this.healthForm,
        ...res.rsObj
      }
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  /**
   * 데이터 입력 파트
   */

  /** 전체 입력 */
  public async submit() {
    if(!this.healthValid()) return;

    const loading = await this.loading.present();

    const resAll = await Promise.all([
      this.healthSubmit()
    ]);

    await loading.dismiss();

    /** 모든 데이터가 성공적으로 전송되었다면, 모든 반환값이 true임 */
    if(!resAll.includes(false)) {
      this.nav.back({ force: true });
      this.alert.present({
        message: '회원정보가 변경되었습니다.'
      });
    }
  }
  /** 건강문진정보 입력 */
  private async healthSubmit() {
    const res = await this.connect.run('/mypage/health/update', this.healthForm);
    if(res.rsCode === 0) {
      return true;
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
      return false;
    }
  }


  /**
   * 데이터 체크
   */
  private healthValid() {
    if(this.healthForm.use_drugs_state == null) this.healthValidator.use_drugs_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.healthValidator.use_drugs_state = { valid: true };

    if(this.healthForm.use_drugs_state === 1
    && !this.healthForm.use_drugs_content) this.healthValidator.use_drugs_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.healthValidator.use_drugs_content = { valid: true };

    if(this.healthForm.brain_cure_state == null) this.healthValidator.brain_cure_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.healthValidator.brain_cure_state = { valid: true };

    if(this.healthForm.brain_cure_state === 1
    && !this.healthForm.brain_cure_content.length) this.healthValidator.brain_cure_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.healthValidator.brain_cure_content = { valid: true };

    if(this.healthForm.vomiting_state == null) this.healthValidator.vomiting_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.healthValidator.vomiting_state = { valid: true };

    if(this.healthForm.vomiting_state === 1
    && !this.healthForm.vomiting_content) this.healthValidator.vomiting_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.healthValidator.vomiting_content = { valid: true };

    if(this.healthForm.pain_head_state == null) this.healthValidator.pain_head_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.healthValidator.pain_head_state = { valid: true };

    if(this.healthForm.pain_head_state === 1
    && !this.healthForm.pain_head_content) this.healthValidator.pain_head_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.healthValidator.pain_head_content = { valid: true };

    if(this.healthForm.etc_disease_state == null) this.healthValidator.etc_disease_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.healthValidator.etc_disease_state = { valid: true };

    if(this.healthForm.etc_disease_state === 1
    && !this.healthForm.etc_disease_content) this.healthValidator.etc_disease_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.healthValidator.etc_disease_content = { valid: true };

    if(this.healthForm.covid_nineteen_state == null) this.healthValidator.covid_nineteen_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.healthValidator.covid_nineteen_state = { valid: true };

    if(this.healthForm.covid_nineteen_state === 1
    && !this.healthForm.covid_nineteen_content) this.healthValidator.covid_nineteen_content = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.healthValidator.covid_nineteen_content = { valid: true };

    if(this.healthForm.covid_vaccine_state == null) this.healthValidator.covid_vaccine_state = { valid: false, message: '해당 항목에 답해주세요.' };
    else this.healthValidator.covid_vaccine_state = { valid: true };

    if(this.healthForm.health_terms_state !== 1) this.healthValidator.health_terms_state = { valid: false, message: '항목에 동의해주세요.' };
    else this.healthValidator.health_terms_state = { valid: true };

    for(let key in this.healthValidator) {
      if(!this.healthValidator[key]?.valid) return false;
    }
    return true;
  }
}
