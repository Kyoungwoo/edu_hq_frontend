import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ApprovalAnswerType } from 'src/app/component/confirm/approval/approval.component';
import { ApprovalService } from 'src/app/service/approval.service';
import { ConfirmProgressDetailSearchPage } from '../confirm-progress-detail-search/confirm-progress-detail-search.page';

class ConfirmProgressItem {
  approval_cnt_answer:ApprovalAnswerType;
  approval_id:number;
  company_id:number;
  company_name:string;
  create_date:string;
  create_user_id:number;
  ctgo_approval_module_id:number;
  ctgo_approval_module_name:string;
  master_company_name:string;
  max_approval_date:string;
  project_id:number;
  target_id:number;
  user_name:string;
  
  index:number;
  row_count:number;
}
@Component({
  selector: 'app-confirm-progress-list',
  templateUrl: './confirm-progress-list.page.html',
  styleUrls: ['./confirm-progress-list.page.scss'],
})
export class ConfirmProgressListPage implements OnInit, OnDestroy {

  form = {
    project_id: 0, // 현장 ID
    master_company_id: 0, // 원청사 ID / 전체 = 0
    company_id: 0, // 협력사 ID / 전체 = 0
    approval_cnt_answer: '전체' as ApprovalAnswerType,
    start_date: '', // 검색 시작일
    end_date: '', // 검색 종료일
    search_text: '', // 검색어
    limit_no: 0 // 20개씩 가져옵니다
  }

  res:ConnectResult<ConfirmProgressItem>;

  permission = {
    master_company_all: false
  }
  event = {
    get: null
  }

  constructor(
    private _modal: ModalController,
    private user: UserService,
    private connect: ConnectService,
    private toast: ToastService,
    private date: DateService,
    private approval: ApprovalService
  ) { }

  async ngOnInit() {
    await this.getForm();
    this.get();

    this.event.get = this.getEvent.bind(this);
    window.addEventListener('approval-list:get()', this.event.get);
  }
  ngOnDestroy() {
    window.removeEventListener('approval-list:get()', this.event.get);
  }

  getEvent() {
    this.get(0);
  }

  async getForm() {
    const { belong_data } = this.user.userData;

    this.form.project_id = belong_data.project_id;
    // if(belong_data.company_contract_type === 'LH'
    // || belong_data.company_contract_type === '감리사') {
    //   this.permission.master_company_all = true;
    //   this.form.company_id = 0;
    // }
    // else {
    //   this.permission.master_company_all = false;
    //   this.form.company_id = belong_data.company_id;
    // }
    this.form.master_company_id = belong_data.master_company_id || 0;
    // if(this.user.userData.user_role === 'MASTER_HEAD' || this.user.userData.user_role === 'MASTER_GENERAL'){
    //   this.form.company_id = 0;
    // }
    this.form.start_date = this.date.today({ month: -1 });
    this.form.end_date = this.date.today();
  }

  /**
   * web, mobile 둘다 검색 시작할 때는 이걸 쓴다.
   * 이유는 limit_no를 초기화할 필요성이 있기 떄문 + 1008 예외처리가 다르다.
   */
   async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    
    this.res = await this.connect.run('/approval/board/fin/get', this.form, { loading: true });
    if(this.res.rsCode === 0 ) {
      // 암것도 안함
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

    const res = await this.connect.run('/approval/board/fin/get', this.form, { loading: true });
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

  detail(item:ConfirmProgressItem) {
    this.approval.getComponent(item.ctgo_approval_module_id, item.target_id);
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: ConfirmProgressDetailSearchPage,
      componentProps: {
        form: this.form,
        permission: this.permission
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();

    if(data) {
      this.form = data;
      this.get(0);
    }
  }
}
