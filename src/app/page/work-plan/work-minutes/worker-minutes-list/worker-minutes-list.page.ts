import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { WorkerMinutesDetailSearchPage } from '../worker-minutes-detail-search/worker-minutes-detail-search.page';
import { WorkerMinutesEditPage } from '../worker-minutes-edit/worker-minutes-edit.page';
import { WorkerMinutesPendingListPage } from '../worker-minutes-pending-list/worker-minutes-pending-list.page';
import { WorkerMinutesSelectTypePage } from '../worker-minutes-select-type/worker-minutes-select-type.page';

export class SafetyMeetingInfo {
  company_id: number;
  company_name: string;
  create_date: string;
  safety_meeting_id: number;
  notice_title: string;
  safety_meeting_type: string;
  project_id: number;
  project_name: string;
  user_name: string;
  row_count: number;
  safety_meeting_date: string;
  index: number;
  approval_cnt_answer:string;
}
@Component({
  selector: 'app-worker-minutes-list',
  templateUrl: './worker-minutes-list.page.html',
  styleUrls: ['./worker-minutes-list.page.scss'],
})
export class WorkerMinutesListPage implements OnInit, OnDestroy {

  form = { 
    project_id: null,
    company_id: null,
    safety_meeting_types: [],
    start_date: this.date.today({ month: -1 }),
    end_date: this.date.today(),
    search_text: '',
    approval_cnt_answer: '전체',
    limit_no: 0
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
    private nav: NavService
  ) { }

  async ngOnInit() {
    await this.getForm();
    this.get();

    // event 물리기
    this.event.get = this.getEvent.bind(this);
    window.addEventListener('worker-minutes-list:get()', this.event.get);
  }
  ngOnDestroy() {
    window.removeEventListener('worker-minutes-list:get()', this.event.get);
  }

  /** event 파트 */
  getEvent() {
    this.get(0);
  }

  /** 
   * permission 과 form 을 가져옴.
   */
  async getForm() {
    const { user_role, belong_data } = this.user.userData;

    this.form.project_id = belong_data.project_id;

    if(belong_data.company_contract_type === 'LH'
    || belong_data.company_contract_type === '감리사') {

      this.permission.company_id = true;
      this.permission.add = false;
      this.form.company_id = belong_data.company_id;

    }
    else if(belong_data.company_contract_type === '원청사') {

      this.permission.company_id = false;
      // 원청사 관리자에게만 보이는 버튼. LH,감리,협력사의 경우 회의 진행 버튼이 없다.(회의록 기획서 9p)
      this.permission.add = true;
      this.form.company_id = belong_data.company_id;

    }
    else if(belong_data.company_contract_type === '협력사') {

      this.permission.company_id = false;
      this.permission.add = false;

      // 협력사는 내 회사가 아니라, 내 원청사를 company_id에 넣어줘야 함
      const res = await this.connect.run('/category/certify/search_my_master_company/get', {
        project_id: this.form.project_id,
        search_text: ''
      });
      if(res.rsCode === 0) {
        const contractor = res.rsMap[0];
        this.form.company_id = contractor.master_company_id;
      }
      else {
        this.toast.present({ color: 'warning', message: res.rsMsg });
      }

    }
  }

  /**
   * web, mobile 둘다 검색 시작할 때는 이걸 쓴다.
   * 이유는 limit_no를 초기화할 필요성이 있기 떄문 + 1008 예외처리가 다르다.
   */
  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    
    let trans_form = JSON.parse(JSON.stringify(this.form));
    trans_form.project_id = trans_form.project_id ? [trans_form.project_id] : [];
    this.res = await this.connect.run('/board/safety_meeting/list', this.form, { loading: true });
    if(this.res.rsCode === 0 ) {
      this.res.rsMap.forEach((item, i) => {
        item.index = this.res.rsObj.row_count - this.form.limit_no - i;
      });
    }
    else if (this.res.rsCode === 1008) {
      // 암것도 안함.
    }
    else {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }

  /**
   * 모바일 무한스크롤 시, 사용된다.
   */
  public async getMobile($event) {
    this.form.limit_no = this.res.rsMap.length;

    const res = await this.connect.run('/board/safety_meeting/list', this.form, {
    });
    if(res.rsCode === 0 ) {
      /**
       * 모바일은 res를 대체하는 것이 아니라, 데이터를 스크롤 하단에 이어붙여야 함.
       */
      res.rsMap.forEach((item, i) => {
        item.index = res.rsObj.row_count - this.form.limit_no - i;
        this.res.rsMap.push(item);
      });

    } else if(res.rsCode === 1008) {
      /** 
       * 더 로딩할 데이터가 없음. 게시판 형식과는 다르게, 데이터를 떼면, 데이터가 다 날아가기 때문에 데이터를 떼면 안됨.
       * 아무것도 안하거나, 마지막 리스트라고 알려주기만 하면 됨.
       */
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
    setTimeout(() => {
      $event.target.complete();
    }, 50);
  }

  /**
   * 모바일 상세검색 팝업. PC에서는 안씀
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
   * 회의록 추가
   */
  async add() {
    const modal = await this.modal.create({
      component: WorkerMinutesSelectTypePage,
      cssClass: 'worker-minutes-select-type-modal',
      componentProps: {
        project_id: this.form.project_id
      }
    });
    modal.present();
  }

  async edit(item:SafetyMeetingInfo) {
    const modal = await this.modal.create({
      component: WorkerMinutesEditPage,
      componentProps: {
        safety_meeting_id: item.safety_meeting_id
      }
    });
    modal.present();
  }

  /**
   * 미결함으로 이동
   */
   async pending() {
    const modal = await this.modal.create({
      component: WorkerMinutesPendingListPage,
    });
    modal.present();
  }
}
