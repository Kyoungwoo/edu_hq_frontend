import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ApprovalAnswerType } from 'src/app/component/confirm/approval/approval.component';
import { RiskDetailSearchPage } from '../risk-detail-search/risk-detail-search.page';
import { RiskEvaluationEditPage } from '../risk-evaluation-edit/risk-evaluation-edit.page';
import { RiskPendingListPage } from '../risk-pending-list/risk-pending-list.page';


class RiskListItem {
  approval_cnt_answer:ApprovalAnswerType = "임시저장";
  approval_id = 109;
  company_id = 22;
  company_name = "구르미";
  create_date = "2022-04-08";
  create_user_id = 3366458717;
  ctgo_approval_module_name = "수시 위험성 평가서";
  ctgo_construction_id = 9;
  ctgo_construction_name = "소방";
  index = 1;
  project_id = 1;
  risk_asment_end_date = "2022-04-09";
  risk_asment_id = 31;
  risk_asment_start_date = "2022-04-09";
  risk_asment_type = "수시";
  user_name = "업체에";
  row_count = 0;
}
@Component({
  selector: 'app-risk-list',
  templateUrl: './risk-list.page.html',
  styleUrls: ['./risk-list.page.scss'],
})
export class RiskListPage implements OnInit {

  form = { 
    project_id: null,
    project_name: '',
    company_id: null,
    ctgo_construction_id: 0,
    risk_asment_type: '수시',
    approval_cnt_answer: '전체',
    risk_asment_start_date: this.date.today({ year: -1 }),
    risk_asment_end_date: this.date.today(),
    search_text: '',
    limit_no: 0
  }

  res:ConnectResult<RiskListItem>;

  permission = {
    company_id: false,
    add: false
  }

  event = {
    get: null
  }

  selectitem:RiskListItem;

  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private date: DateService,
    private _modal: ModalController,
    public user: UserService,
    private nav: NavService,
    public languagePack: LanguagePackService
  ) { }

  async ngOnInit() {
    await this.getForm();
    setTimeout(() => {
      this.get();
    },300);
    

    // event 물리기
    this.event.get = this.getEvent.bind(this);
    window.addEventListener('risk-list:get()', this.event.get);
  }
  ngOnDestroy() {
    window.removeEventListener('risk-list:get()', this.event.get);
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
    this.form.project_name = belong_data.project_name;

    if(user_role === 'LH_HEAD'
    || user_role === 'SUPER_HEAD') {

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
      this.permission.add = true;
      this.form.company_id = belong_data.master_company_id;
      // 협력사는 내 회사가 아니라, 내 원청사를 company_id에 넣어줘야 함
      // const res = await this.connect.run('/category/certify/search_my_master_company/get', {
      //   project_id: this.form.project_id,
      //   search_text: ''
      // });
      // if(res.rsCode === 0) {
      //   const contractor = res.rsMap[0];
      //   this.form.company_id = contractor.master_company_id;
      // }
      // else {
      //   this.toast.present({ color: 'warning', message: res.rsMsg });
      // }

    }
  }

  /**
   * web, mobile 둘다 검색 시작할 때는 이걸 쓴다.
   * 이유는 limit_no를 초기화할 필요성이 있기 떄문 + 1008 예외처리가 다르다.
   */
  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    this.selectitem = null;
    
    this.res = await this.connect.run('/risk/assessment/list/get', this.form, { loading: true });
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
    this.selectitem = null;

    const res = await this.connect.run('/risk/assessment/list/get', this.form, {
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

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: RiskDetailSearchPage,
      componentProps: {
        form: this.form
      }
    })
    modal.present();

    const { data } = await modal.onDidDismiss();

    if(data) {
      this.form = data;
      this.get(0);
    }
  }

  async add() {
    const modal = await this._modal.create({
      component:RiskEvaluationEditPage,
      cssClass: 'risk-evaluation-class',
      componentProps: {
        project_id: this.form.project_id,
        risk_asment_type: this.form.risk_asment_type,
        btn_type: 'add'
      }
    });
    modal.present();
  }

  async duplicate() {
    const modal = await this._modal.create({
      component:RiskEvaluationEditPage,
      cssClass: 'risk-evaluation-class',
      componentProps: {
        isDuplicate: true,
        project_id: this.form.project_id,
        risk_asment_type: this.form.risk_asment_type,
        risk_asment_id: this.selectitem.risk_asment_id
      }
    });
    modal.present();
  }

  async edit(item) {
    const modal = await this._modal.create({
      component:RiskEvaluationEditPage,
      cssClass: 'risk-evaluation-class',
      componentProps: {
        risk_asment_id: item.risk_asment_id
      }
    });
    modal.present();
  }

  /**
   * 미결함으로 이동
   */
   async pending() {
    const modal = await this._modal.create({
      component: RiskPendingListPage,
    });
    modal.present();
  }
}
