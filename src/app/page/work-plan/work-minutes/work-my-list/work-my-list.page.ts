import { WorkMyDetailPage } from './../work-my-detail/work-my-detail.page';
import { ScannerService } from './../../../../basic/service/util/scanner.service';
import { SafetyMeetingInfo } from 'src/app/page/work-plan/work-minutes/worker-minutes-list/worker-minutes-list.page';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { ConnectService, ConnectResult } from 'src/app/basic/service/core/connect.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-my-list',
  templateUrl: './work-my-list.page.html',
  styleUrls: ['./work-my-list.page.scss'],
})
export class WorkMyListPage implements OnInit {
  form = { 
    project_id: null,
    // master_company_id: null,
    // safety_meeting_type: '전체',
    // start_date: this.date.today({ month: -1 }),
    // end_date: this.date.today(),
    // search_text: '',
    // approval_cnt_answer: '전체',
    limit_no: 0
    // safety_meeting_state: '전체' as SafetyStateType
  }

  res:ConnectResult<SafetyMeetingInfo>;
  // resFavorite:ConnectResult;

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
    // private nav: NavService,
    // private popover: PopoverController,
    public languagePack: LanguagePackService,
    private scanner: ScannerService
  ) { }

  async ngOnInit() {
    // await this.getForm();
    const { belong_data } = this.user.userData;
    this.form.project_id = belong_data.project_id;

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
  // async getForm() {
  //   const { user_role, belong_data } = this.user.userData;

  //   this.form.project_id = belong_data.project_id;
  //   this.form.master_company_id = belong_data.master_company_id;

  //   if(belong_data.company_contract_type === 'LH'
  //   || belong_data.company_contract_type === '감리사') {

  //     this.permission.company_id = true;
  //     this.permission.add = false;
  //     this.form.master_company_id = 0;

  //   }
  //   else if(belong_data.company_contract_type === '원청사') {

  //     this.permission.company_id = false;
  //     // 원청사 관리자에게만 보이는 버튼. LH,감리,협력사의 경우 회의 진행 버튼이 없다.(회의록 기획서 9p)
  //     this.permission.add = true;

  //   }
  //   else if(belong_data.company_contract_type === '협력사') {

  //     this.permission.company_id = false;
  //     this.permission.add = false;

  //   }
  // }

  /**
   * web, mobile 둘다 검색 시작할 때는 이걸 쓴다.
   * 이유는 limit_no를 초기화할 필요성이 있기 떄문 + 1008 예외처리가 다르다.
   */
  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    
    // let trans_form = JSON.parse(JSON.stringify(this.form));
    // trans_form.project_id = trans_form.project_id ? [trans_form.project_id] : [];
    this.res = await this.connect.run('/board/safety_meeting/my_list', {}, { loading: true });
    if(this.res.rsCode === 0 ) {
      this.res.rsMap.forEach((item, i) => {
        switch(item.safety_meeting_type){
          case '노사':
            item.safety_meeting_type = '노사 협의체';
          break;
          case '안전':
            item.safety_meeting_type = '안전 및 보건의 관한 협의체';
          break;
          case '산업':
            item.safety_meeting_type = '산업안전보건보건위원회';
          break;
        }
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

    const res = await this.connect.run('/board/safety_meeting/my_list', {}, {
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

  async edit(item:SafetyMeetingInfo) {
    const modal = await this.modal.create({
      component: WorkMyDetailPage,
      componentProps: {
        safety_meeting_id: item.safety_meeting_id
      }
    });
    modal.present();
  }

  async inNfcQr() {
    this.scanner.init().then((data) => {this.get(0)});
  }
}
