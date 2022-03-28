import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { SafetyMeetingInfo } from 'src/app/page/work-plan/work-minutes/worker-minutes-list/worker-minutes-list.page';
import { MinutesEditPage } from '../minutes-edit/minutes-edit.page';
import { MinutesSearchPage } from '../minutes-search/minutes-search.page';

@Component({
  selector: 'app-minutes-list',
  templateUrl: './minutes-list.page.html',
  styleUrls: ['./minutes-list.page.scss'],
})
export class MinutesListPage implements OnInit {

  form = { 
    project_id: null,
    company_id: null,
    safety_meeting_types: [],
    start_date: this.date.today({ month: -1 }),
    end_date: this.date.today(),
    search_text: '',
    approval_cnt_answer: ['결재완료'],
    limit_no: 0
  }

  res:ConnectResult<SafetyMeetingInfo>;
  resFavorite:ConnectResult;

  permission = {
    company_id: false
  }

  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    private date: DateService,
    private toast: ToastService,
    public user: UserService,
  ) { }

  async ngOnInit() {
    await this.getForm();
    this.get();
  }

  /** 
   * permission 과 form 을 가져옴.
   */
  async getForm() {
    console.log(this.user.userData);
    const { belong_data } = this.user.userData;

    this.form.project_id = belong_data.project_id;

    if(belong_data.company_contract_type === 'LH'
    || belong_data.company_contract_type === '감리사') {

      this.permission.company_id = true;
      this.form.company_id = belong_data.company_id;

    }
    else if(belong_data.company_contract_type === '원청사') {

      this.permission.company_id = false;
      this.form.company_id = belong_data.company_id;

    }
    else if(belong_data.company_contract_type === '협력사') {

      this.permission.company_id = false;

      // 협력사는 내 회사가 아니라, 내 원청사를 company_id에 넣어줘야 함
      const res = await this.connect.run('/category/certify/search_my_master_company/get', {
        project_id: this.form.project_id,
        search_text: ''
      });
      if(res.rsCode === 0) {
        const contractor = res.rsMap[0];
        this.form.company_id = contractor.master_company_id;
      }
      else if(res.rsCode) {
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
    this.res = await this.connect.run('/board/safety_meeting/list', this.form);
    if(this.res.rsCode === 0 ) {
      this.res.rsMap.map((item, i) => {
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

    const res = await this.connect.run('/board/safety_meeting/list', this.form, { loading: true });
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
      component: MinutesSearchPage,
      componentProps:{
        form: this.form
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.form = data;
      this.get();
    }
  }

  async edit(item) {
    const modal = await this.modal.create({
      component: MinutesEditPage,
      componentProps:{
        item:item
      }
    });
    modal.present();
  }
}
