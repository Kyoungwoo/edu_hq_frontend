import { WorkerMinutesPendingListPage } from './../worker-minutes-pending-list/worker-minutes-pending-list.page';
import { WorkWriteSearchPage } from './../work-write-search/work-write-search.page';
import { WorkWriteTargetPage } from './../work-write-target/work-write-target.page';
import { WorkWriteEditPage } from './../work-write-edit/work-write-edit.page';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ModalController } from '@ionic/angular';
import { ApprovalAnswerType } from 'src/app/component/confirm/approval/approval.component';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { Component, OnInit } from '@angular/core';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';

@Component({
  selector: 'app-work-write-list',
  templateUrl: './work-write-list.page.html',
  styleUrls: ['./work-write-list.page.scss'],
})
export class WorkWriteListPage implements OnInit {

  form = {
    project_id: null,
    master_company_id: null,
    safety_meeting_type: '전체',
    start_date: this.date.today({ month: -1 }),
    end_date: this.date.today(),
    search_text: '',
    approval_cnt_answer: '전체',
    limit_no: 0,
    // safety_meeting_state: '전체'
  }

  res:ConnectResult<{
    // index:number,
    // create_user_id: number,
    // ctgo_education_safe_name: string,
    // ctgo_education_safe_id: number,
    // create_user_name: string,
    // company_id: number,
    // education_safe_target: string,
    // ctgo_education_safe_text: string,
    // ctgo_education_safe_type: string,
    // approval_id: number,
    // education_safe_report_id: number,
    // education_safe_date: string,
    // ctgo_education_safe_title: string,
    // company_name: string,
    // education_safe_id: number,
    // approval_cnt_answer: ApprovalAnswerType,
    // create_date: string,
    // row_count:number,

    approval_cnt_answer:ApprovalAnswerType,
    approval_id:number,
    create_date:string,
    create_date_week_day:string,
    create_user_id:number,
    create_user_name:string,
    index:number,
    master_company_id:number,
    master_company_name:string,
    safety_meeting_id:number,
    safety_meeting_date:string,
    safety_meeting_date_week_day:string,
    safety_meeting_report_id:string,
    safety_meeting_type:string,
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
    private nav: NavService,
    public languagePack: LanguagePackService
  ) { }

  async ngOnInit() { 
    this.projectRolechekc();
    await this.promise.wait(() => this.form.master_company_id);
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
        this.form.master_company_id = belong_data.master_company_id;
        console.log("belong_data.company_id - ", belong_data.company_id);
        console.log("form.master_company_id - ", this.form.master_company_id);
      } else if(user_role === 'LH_HEAD') {
        this.form.project_id = belong_data.project_id;
        this.editable.add = true;
      }
  }

  async getList(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    this.res = await this.connect.run('/board/safety_meeting/report/list',this.form);
    if(this.res.rsCode === 0) {
      this.res.rsMap.map((item, i) => {
        item.index = this.res.rsObj.row_count - this.form.limit_no - i;
        item.create_date = `${item.create_date} (${this.date.day(item.create_date)[0]})`;
        item.safety_meeting_date = `${item.safety_meeting_date} (${this.date.day(item.safety_meeting_date)[0]})`;
        // item.create_date = `${item.create_date} (${this.date.day(item.create_date)[0]})`
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
    // const modal = await this._modal.create({
    //   component: SafetyEducationResultDetailSearchPage,
    // })
    // modal.present();
    // const { data } = await modal.onDidDismiss();
    // if(data) {
    //   this.form = data;
    //   this.getList();
    // }
  }

  async edit(item) {
    const modal = await this._modal.create({
      component: WorkWriteEditPage,
      cssClass: 'risk-evaluation-class',
      componentProps:{
        safety_meeting_report_id: item.safety_meeting_report_id
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
      component: WorkWriteTargetPage,
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
    const modal = await this._modal.create({
      component:WorkerMinutesPendingListPage,
    });
    modal.present(); 
  }

  /**
   * 모바일 상세검색 팝업. PC에서는 안씀
   */
   async detailSearch() {
    const modal = await this._modal.create({
      component: WorkWriteSearchPage,
      componentProps:{
        form: this.form
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.form = data;
      this.getList(0);
    }
  }
}
