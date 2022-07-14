import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { ApprovalAnswerType } from 'src/app/component/confirm/approval/approval.component';
import { WorkerMinutesEditPage } from '../worker-minutes-edit/worker-minutes-edit.page';

@Component({
  selector: 'app-worker-minutes-pending-list',
  templateUrl: './worker-minutes-pending-list.page.html',
  styleUrls: ['./worker-minutes-pending-list.page.scss'],
})
export class WorkerMinutesPendingListPage implements OnInit {

  form = {
    limit_no: 0
  }

  res:ConnectResult<{
    index:number,
    create_user_id:number, // user_id
    ctgo_approval_module_name:string,
    safety_meeting_date:string,
    company_name:string,
    user_name:string,
    create_date:string,
    approval_cnt_answer:ApprovalAnswerType,
    row_count:number
  }>;

  event = {
    get: null
  }

  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private _modal: ModalController,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
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

  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    this.res = await this.connect.run('/board/approval/req/get', this.form, { loading: true });
    if(this.res.rsCode === 0) {
      this.res.rsMap.forEach((item, i) => {
        item.index = this.res.rsObj.row_count - this.form.limit_no - i;
      });
    }
    else if(this.res.rsCode === 1008) {
      // 암것도 안함
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

    const res = await this.connect.run('/board/approval/req/get', this.form, {
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

  async edit(item) {
    const modal = await this._modal.create({
      component:WorkerMinutesEditPage,
      componentProps: {
        safety_meeting_id: item.safety_meeting_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.get(0);
    }
  }
}
