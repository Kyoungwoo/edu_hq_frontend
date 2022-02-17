import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { MinutesEditPage } from 'src/app/page/notice-board/minutes/minutes-edit/minutes-edit.page';
import { WorkMinutesComponent } from '../component/work-minutes/work-minutes.component';
import { WorkerMinutesDetailSearchPage } from '../worker-minutes-detail-search/worker-minutes-detail-search.page';

export class FormItem {

}

@Component({
  selector: 'app-worker-minutes-list',
  templateUrl: './worker-minutes-list.page.html',
  styleUrls: ['./worker-minutes-list.page.scss'],
})
export class WorkerMinutesListPage implements OnInit {

  form = {
    approval_cnt_answer: [],//결재상태('임시저장’, '결재중’, '결재완료’, ‘반려’)
    company_ids: [this.user.userData.belong_data.company_id],
    end_date: this.date.today(),
    limit_no: 0,
    project_ids: this.user.userData.belong_data.project_id,
    safety_meeting_types: [], //회의록 유형('안전’, '노사’, ‘산업’)
    search_text: '',
    start_date: this.date.today({ year: -5, month: -1 })
  }
  res: ConnectResult<{
    safety_meeting_id: number,
    company_id: number,
    safety_meeting_date: string,
    project_id: number,
    user_name: string,
    company_name: string,
    safety_meeting_type: string,
    create_date: string,
    project_name: string,
    approval_cnt_answer: string
    row_count: number
  }>

  constructor(
    private modal: ModalController,
    private toast: ToastService,
    private connect: ConnectService,
    private date: DateService,
    private user: UserService
  ) { }

  ngOnInit() {
    this.getList();
  }

  async getList(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    // if(!this.form.company_ids.length) return await this.toast.present({message:'업체를 선택하세요',color:'danger'});
    if (!this.form.end_date) return await this.toast.present({ message: '끝날짜를 선택하세요', color: 'danger' });
    if (!this.form.start_date) return await this.toast.present({ message: '시작날짜를 선택하세요', color: 'danger' });
    if (!this.form.project_ids) return await this.toast.present({ message: '현장을 선택하세요', color: 'danger' });
    const res = await this.connect.run('/board/safety_meeting/list', this.form, {});
    if (res.rsCode === 0) {
      this.res = res;
    } else if (res.rsCode === 1008) {
      if (!this.form.limit_no) this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }
  
  async minutesType() {
    const modal = await this.modal.create({
      component:WorkMinutesComponent,
      cssClass:'worker-minutes-modal'
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.edit(data);
    }
  }

  public async openDetailSearch() {
    const modal = await this.modal.create({
      component: WorkerMinutesDetailSearchPage,
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.form = data;
      this.getList();
    }
  }

  async edit(item) {
    const modal = await this.modal.create({
      component: MinutesEditPage,
      componentProps: {
        item: item
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.getList();
    }
  }
}
