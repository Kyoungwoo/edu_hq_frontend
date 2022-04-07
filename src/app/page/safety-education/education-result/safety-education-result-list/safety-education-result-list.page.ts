import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { ApprovalAnswerType } from 'src/app/component/confirm/approval/approval.component';
import { NewWriteTargetPage } from '../new-write-target/new-write-target.page';
import { SafetyEducationResultDetailSearchPage } from '../safety-education-result-detail-search/safety-education-result-detail-search.page';
import { SafetyEducationResultEditPage } from '../safety-education-result-edit/safety-education-result-edit.page';

@Component({
  selector: 'app-safety-education-result-list',
  templateUrl: './safety-education-result-list.page.html',
  styleUrls: ['./safety-education-result-list.page.scss'],
})
export class SafetyEducationResultListPage implements OnInit {

  form = {
    approval_cnt_answer: '전체', // 결재상태 / 전체, 임시저장, 결재중, 결재완료, 반려
    company_id:0, // 원청사명 ID
    ctgo_education_safe_id: 0, // 교육명 ID
    end_date: this.date.today(), // 검색 신청 종료일
    // end_date: '2025-12-01', // 검색 신청 종료일
    limit_no: 0, // 20까지
    project_id: 0, // 현장명 ID
    search_text:'',// 검색어
    start_date: this.date.today({date:-7}) // 검색 신청 시작일
    // start_date: '2019-01-01' // 검색 신청 시작일
  }

  res:ConnectResult<{
    index:number,
    create_user_id: number,
    ctgo_education_safe_name: string,
    ctgo_education_safe_id: number,
    create_user_name: string,
    company_id: number,
    education_safe_target: string,
    ctgo_education_safe_text: string,
    ctgo_education_safe_type: string,
    approval_id: number,
    education_safe_report_id: number,
    education_safe_date: string,
    ctgo_education_safe_title: string,
    company_name: string,
    education_safe_id: number,
    approval_cnt_answer: ApprovalAnswerType,
    create_date: string,
    row_count:number
  }>;

  event = {
    get: null
  }

  editable = {
    company_id:false,
    add: false
  }

  constructor(
    private _modal: ModalController,
    private date: DateService,
    private connect: ConnectService,
    private user: UserService,
    private toast: ToastService,
    private promise: PromiseService,
    private nav: NavService
  ) { }

  async ngOnInit() { 
    this.projectRolechekc();
    await this.promise.wait(() => this.form.company_id);
    this.getList();

    // event 물리기
    this.event.get = this.getEvent.bind(this);
    window.addEventListener('safety-education-result-list:get()', this.event.get);
  }
  ngOnDestroy() {
    window.removeEventListener('safety-education-result-list:get()', this.event.get);
  }

  /** event 파트 */
  getEvent() {
    this.getList(0);
  }

  projectRolechekc() {
    const { user_role , belong_data} = this.user.userData;
    if(user_role === 'MASTER_HEAD' ||
      user_role === 'PARTNER_GENERAL'||
      user_role === 'PARTNER_HEAD' ||
      user_role === 'MASTER_GENERAL') {
        this.editable.company_id = true;
        this.form.project_id = belong_data.project_id;
        this.form.company_id = belong_data.company_id;
      } else if(user_role === 'LH_HEAD') {
        this.form.project_id = belong_data.project_id;
        this.editable.add = true;
      }
  }

  async getList(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    this.res = await this.connect.run('/education/report/list',this.form);
    if(this.res.rsCode === 0) {
      this.res.rsMap.map((item, i) => {
        item.index = this.res.rsObj.row_count - this.form.limit_no - i;
        item.education_safe_date = `${item.education_safe_date} (${this.date.day(item.education_safe_date)[0]})`
        item.create_date = `${item.create_date} (${this.date.day(item.create_date)[0]})`
      });
    }
    else if(this.res.rsCode === 1008) {
      // 암것도 안함
    }
    else {
      this.toast.present({message:this.res.rsMsg,color:'warning'});
      this.res = null;
    }
  }
  async openDetailSearch() {
    const modal = await this._modal.create({
      component: SafetyEducationResultDetailSearchPage,
    })
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.form = data;
      this.getList();
    }
  }

  async edit(item) {
    const modal = await this._modal.create({
      component: SafetyEducationResultEditPage,
      componentProps:{
        education_safe_report_id: item.education_safe_report_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.getList();
    }
  }

  public async add() {
    const modal = await this._modal.create({
      component: NewWriteTargetPage,
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.getList();
    }
  }

  /**
   * 미결함으로 이동
   */
  async pending() {
    this.nav.navigateForward('/confirm-pending-list');
    /* const modal = await this._modal.create({
      component:EducationConfirmPendingListPage,
    });
    modal.present(); */
  }
}
