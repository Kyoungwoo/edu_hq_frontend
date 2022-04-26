import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { MyPageEducationSearchPage } from '../my-page-education-search/my-page-education-search.page';
import { EducationGetForm, EducationRes } from '../my-page/my-page.page';

@Component({
  selector: 'app-my-page-education',
  templateUrl: './my-page-education.page.html',
  styleUrls: ['./my-page-education.page.scss'],
})
export class MyPageEducationPage implements OnInit {

  segment:'ONE'|'TWO' = 'ONE';
  
  /** 교육 form */
  educationGetForm = new EducationGetForm();

  /** 교육이력 res */
  educationRes:ConnectResult<EducationRes>;

  /** 고용형태 res */
  res:ConnectResult<{ work_contract_type: '일용직' | '상용직' }>;
  /** 채용시 교육 res */
  educationHireRes:ConnectResult<{
    create_date: string,
    ctgo_education_safe_name: string,
    ctgo_education_safe_title: string,
    education_credit_date: number,
    education_credit_time: string,
    hire_edu_state: string,
    user_id: number
  }>;
  /** 정기교육 res */
  educationRoutineRes:ConnectResult<{
    ctgo_education_safe_name:string
    education_complete_time:number
    education_end_term:string
    education_remaining_date:number
    education_remaining_time:number
    education_start_term:string
    routine_edu_state:string
    user_id:number
  }>;

  educationSpecialRes:ConnectResult<{
    ctgo_education_safe_name:string,

    education_complete_time:string,
    education_complete_hours:number,
    
    education_remaining_time:string,
    education_recommended_hours:number,

    education_towercrane_state:0|1,

    education_start_term:string,
    education_end_term:string,
    education_remaining_date:number,
    special_edu_state:string,
    user_id:number
  }>;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private _modal: ModalController,
    private nav: NavService,
    public regex: RegexService,
    public user: UserService,
    private toast: ToastService,
    private alert: AlertService,
    private loading: LoadingService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getForm();
    this.get();
  }

  /**
   * 데이터 구성 파트
   */
   getForm() {
    /** 교육 데이터 */
    this.educationGetForm.project_id = this.user.userData.belong_data.project_id;
    this.educationGetForm.project_name = this.user.userData.belong_data.project_name;
  }

  /** 모두 가져오기 */
  async get() {
    const loading = await this.loading.present();
    /** Promise.all 은 모든 promise(async/await)들의 작동이 끝나면, 아래 코드를 읽습니다. 
     * api 여러개를 호출하여 한번에 데이터를 가져와야 하는데, 각 api 호출 마다 loading을 넣으면 너무 지져분하니
     * 하나의 loading 으로 처리하기 위해서 만들었습니다.
     */
    await Promise.all([
      this.getWorkContract(),
      this.getEducationHire(),
      this.getEducationRoutine(),
      this.getEducationSpecial(),
      this.getEducation()
    ]);

    loading.dismiss();
  }

  /** 교육정보 가져오기 */
  async getEducationSearch() {
    const modal = await this._modal.create({
      component: MyPageEducationSearchPage,
      componentProps: {
        educationGetForm: this.educationGetForm
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.educationGetForm = data;
      this.get();
    }
  }
  /** 고용형태 가져오기 */
  private async getWorkContract() {
    this.res = await this.connect.run('/mypage/workcontract');
  }
  /** 채용시 교육 가져오기 */
  private async getEducationHire() {
    this.educationHireRes = await this.connect.run('/mypage/safeeducation/hire/list', this.educationGetForm);
    if(this.educationHireRes.rsCode === 1008) {
      // 암것도 안함
    }
    else if(this.educationHireRes.rsCode) {
      this.toast.present({ color: 'warning', message: this.educationHireRes.rsMsg });
    }
  }
  /** 정기교육 가져오기 */
  private async getEducationRoutine() {
    this.educationRoutineRes = await this.connect.run('/mypage/safeeducation/routine/list', this.educationGetForm);
    if(this.educationRoutineRes.rsCode === 1008) {
      // 암것도 안함
    }
    else if(this.educationRoutineRes.rsCode) {
      this.toast.present({ color: 'warning', message: this.educationRoutineRes.rsMsg });
    }
  }
  /** 특별교육 가져오기 */
  private async getEducationSpecial() {
    this.educationSpecialRes = await this.connect.run('/mypage/safeeducation/special/list', this.educationGetForm);
    if(this.educationSpecialRes.rsCode === 0) {
      this.educationSpecialRes.rsMap?.forEach(item => this.parseEducationHours(item));
    }
    else if(this.educationSpecialRes.rsCode === 1008) {
      // 암것도 안함
    }
    else {
      this.toast.present({ color: 'warning', message: this.educationSpecialRes.rsMsg });
    }
  }

  parseEducationHours(item) {
    const completeHourArr = item.education_complete_time?.split(':') || ['00','00'];
    item.education_complete_hours = parseInt(completeHourArr[0]) + (parseInt(completeHourArr[1])/60);
    
    const recommendHourArr = item.education_recommended_time?.split(':') || ['00','00'];
    item.education_recommended_hours = parseInt(recommendHourArr[0]) + (parseInt(recommendHourArr[1])/60);
  }

  /** 전체 교육 이력 가져오기 */
  private async getEducation() {
    this.educationRes = await this.connect.run('/mypage/education/list', this.educationGetForm);
    if(this.educationRes.rsCode === 1008) {
      // 암것도 안함
    }
    else if(this.educationRes.rsCode) {
      this.toast.present({ color: 'warning', message: this.educationRes.rsMsg });
    }
  }

}
