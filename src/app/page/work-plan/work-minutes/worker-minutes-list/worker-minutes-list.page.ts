import { SafetyStateType } from './../../../../component/confirm/chip-safety-state/chip-safety-state.component';
import { PeopleViewComponent } from 'src/app/component/modal/people-view/people-view.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { WorkerMinutesDetailSearchPage } from '../worker-minutes-detail-search/worker-minutes-detail-search.page';
import { WorkerMinutesEditPage } from '../worker-minutes-edit/worker-minutes-edit.page';
import { WorkerMinutesPendingListPage } from '../worker-minutes-pending-list/worker-minutes-pending-list.page';
import { WorkerMinutesSelectTypePage } from '../worker-minutes-select-type/worker-minutes-select-type.page';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';

export class SafetyMeetingInfo {
  master_company_id: number;
  master_company_name: string;
  company_id: number;
  company_name: string;
  create_date: string;
  safety_meeting_id: number;
  notice_title: string;
  safety_meeting_type: string;
  project_id: number;
  project_name: string;
  user_name: string;
  user_id:number;
  row_count: number;
  safety_meeting_date: string;
  index: number;
  safety_meeting_state:SafetyStateType;
  safety_meeting_time:string;
  safety_meeting_date_week_day:string;
  safety_meeting_place: string;
  // approval_cnt_answer:string;
}
@Component({
  selector: 'app-worker-minutes-list',
  templateUrl: './worker-minutes-list.page.html',
  styleUrls: ['./worker-minutes-list.page.scss'],
})
export class WorkerMinutesListPage implements OnInit, OnDestroy {

  form = { 
    project_id: null,
    master_company_id: null,
    safety_meeting_type: '??????',
    start_date: this.date.today({ year: -3 }),
    end_date: this.date.today(),
    search_text: '',
    // approval_cnt_answer: '??????',
    limit_no: 0,
    safety_meeting_state: '??????' as SafetyStateType
  }

  res:ConnectResult<SafetyMeetingInfo>;
  resFavorite:ConnectResult;

  permission = {
    company_id: false,
    add: false
  }

  event = {
    get: null
  }

  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    private toast: ToastService,
    private date: DateService,
    public user: UserService,
    private nav: NavService,
    private popover: PopoverController,
    public languagePack: LanguagePackService
  ) { }

  async ngOnInit() {
    await this.getForm();
    this.get();

    // event ?????????
    this.event.get = this.getEvent.bind(this);
    window.addEventListener('worker-minutes-list:get()', this.event.get);
  }
  ngOnDestroy() {
    window.removeEventListener('worker-minutes-list:get()', this.event.get);
  }

  /** event ?????? */
  getEvent() {
    this.get(0);
  }

  /** 
   * permission ??? form ??? ?????????.
   */
  async getForm() {
    const { user_role, belong_data } = this.user.userData;

    this.form.project_id = belong_data.project_id;
    this.form.master_company_id = belong_data.master_company_id;

    if(belong_data.company_contract_type === 'LH'
    || belong_data.company_contract_type === '?????????') {

      this.permission.company_id = true;
      this.permission.add = false;
      this.form.master_company_id = 0;

    }
    else if(belong_data.company_contract_type === '?????????') {

      this.permission.company_id = false;
      // ????????? ?????????????????? ????????? ??????. LH,??????,???????????? ?????? ?????? ?????? ????????? ??????.(????????? ????????? 9p)
      this.permission.add = true;

    }
    else if(belong_data.company_contract_type === '?????????') {

      this.permission.company_id = false;
      this.permission.add = false;

    }
  }

  /**
   * web, mobile ?????? ?????? ????????? ?????? ?????? ??????.
   * ????????? limit_no??? ???????????? ???????????? ?????? ?????? + 1008 ??????????????? ?????????.
   */
  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    
    let trans_form = JSON.parse(JSON.stringify(this.form));
    trans_form.project_id = trans_form.project_id ? [trans_form.project_id] : [];
    this.res = await this.connect.run('/board/safety_meeting/list', this.form, { loading: true });
    if(this.res.rsCode === 0 ) {
      this.res.rsMap.forEach((item, i) => {
        switch(item.safety_meeting_type){
          case '??????':
            item.safety_meeting_type = '?????? ?????????';
          break;
          case '??????':
            item.safety_meeting_type = '?????? ??? ????????? ?????? ?????????';
          break;
          case '??????':
            item.safety_meeting_type = '?????????????????????????????????';
          break;
        }
        item.index = this.res.rsObj.row_count - this.form.limit_no - i;
      });
    }
    else if (this.res.rsCode === 1008) {
      // ????????? ??????.
    }
    else {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }

  /**
   * ????????? ??????????????? ???, ????????????.
   */
  public async getMobile($event) {
    this.form.limit_no = this.res.rsMap.length;

    const res = await this.connect.run('/board/safety_meeting/list', this.form, {
    });
    if(res.rsCode === 0 ) {
      /**
       * ???????????? res??? ???????????? ?????? ?????????, ???????????? ????????? ????????? ??????????????? ???.
       */
      res.rsMap.forEach((item, i) => {
        item.index = res.rsObj.row_count - this.form.limit_no - i;
        this.res.rsMap.push(item);
      });

    } else if(res.rsCode === 1008) {
      /** 
       * ??? ????????? ???????????? ??????. ????????? ???????????? ?????????, ???????????? ??????, ???????????? ??? ???????????? ????????? ???????????? ?????? ??????.
       * ???????????? ????????????, ????????? ??????????????? ??????????????? ?????? ???.
       */
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
    setTimeout(() => {
      $event.target.complete();
    }, 50);
  }

  /**
   * ????????? ???????????? ??????. PC????????? ??????
   */
  async detailSearch() {
    const modal = await this.modal.create({
      component: WorkerMinutesDetailSearchPage,
      componentProps:{
        form: this.form
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.form = data;
      this.get(0);
    }
  }

  /**
   * ????????? ??????
   */
  async add() {
    const modal = await this.modal.create({
      component: WorkerMinutesEditPage,
      cssClass: 'risk-evaluation-class',
      componentProps: {
        project_id: this.form.project_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) this.get();
  }

  async edit(item:SafetyMeetingInfo) {
    const modal = await this.modal.create({
      component: WorkerMinutesEditPage,
      cssClass: 'risk-evaluation-class',
      componentProps: {
        safety_meeting_id: item.safety_meeting_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) this.get();
  }

  /**
   * ??????????????? ??????
   */
   async pending() {
    const modal = await this.modal.create({
      component: WorkerMinutesPendingListPage,
    });
    modal.present();
  }

  async userInfo(education_safe_manager_id,ev) {
    ev.stopPropagation();
    const popover = await this.popover.create({
      component:PeopleViewComponent,
      componentProps:{
        type:'?????????',
        education_safe_manager_id
      },
      cssClass:'education-info',
      event:ev
    });
    popover.present();
  }
}
