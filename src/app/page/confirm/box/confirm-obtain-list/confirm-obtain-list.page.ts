import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ApprovalAnswerType } from 'src/app/component/confirm/approval/approval.component';
import { ApprovalService } from 'src/app/service/approval.service';
import { ConfirmObtainDetailSearchPage } from '../confirm-obtain-detail-search/confirm-obtain-detail-search.page';

class ConfirmObtainItem {
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
  selector: 'app-confirm-obtain-list',
  templateUrl: './confirm-obtain-list.page.html',
  styleUrls: ['./confirm-obtain-list.page.scss'],
})
export class ConfirmObtainListPage implements OnInit {

  form = {
    project_id: null, // 현장 ID
    master_company_id: null, // 원청사 ID / 전체 = 0
    company_id: null, // 협력사 ID / 전체 = 0
    start_date: null, // 검색 시작일
    end_date: null, // 검색 종료일
    approval_cnt_answer: '전체' as ApprovalAnswerType, // 결재상태 / 전체, 임시저장, 결재중, 결재완료, 반려
    search_text: null, // 검색어
    limit_no: 0 // 20개씩 가져옵니다
  }

  res:ConnectResult<ConfirmObtainItem>;

  selectItem:ConfirmObtainItem;

  constructor(
    private _modal: ModalController,
    private user: UserService,
    private connect: ConnectService,
    private toast: ToastService,
    private date: DateService,
    private loading: LoadingService,
    private approval: ApprovalService
  ) { }

  async ngOnInit() {
    await this.getForm();
    this.get();
  }

  async getForm() {
    const { belong_data } = this.user.userData;

    this.form.project_id = belong_data.project_id;
    this.form.company_id = belong_data.company_id;

    if(belong_data.company_contract_type === '원청사') {
      this.form.master_company_id = belong_data.company_id;
    }
    else if(belong_data.company_contract_type === '협력사') {
      // 협력사는 내 회사가 아니라, 내 원청사를 company_id에 넣어줘야 함
      const res = await this.connect.run('/category/certify/search_my_master_company/get', {
        project_id: this.form.project_id,
        search_text: ''
      });
      if(res.rsCode === 0) {
        const contractor = res.rsMap[0];
        this.form.master_company_id = contractor.master_company_id;
      }
      else {
        this.toast.present({ color: 'warning', message: res.rsMsg });
      }
    }

    this.form.start_date = this.date.today({ month: -1 });
    this.form.end_date = this.date.today();
    this.form.approval_cnt_answer = '전체';
  }

  /**
   * web, mobile 둘다 검색 시작할 때는 이걸 쓴다.
   * 이유는 limit_no를 초기화할 필요성이 있기 떄문 + 1008 예외처리가 다르다.
   */
  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    
    let trans_form = JSON.parse(JSON.stringify(this.form));
    trans_form.project_id = trans_form.project_id ? [trans_form.project_id] : [];
    this.res = await this.connect.run('/approval/board/my/get', this.form, { loading: true });
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

    const res = await this.connect.run('/approval/board/my/get', this.form, { loading: true });
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

  detail(item:ConfirmObtainItem) {
    this.approval.getComponent(item.ctgo_approval_module_id, item.target_id);
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: ConfirmObtainDetailSearchPage,
      componentProps: {
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
}
