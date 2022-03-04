import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { DepartureStatusListForm, DepartureStatusListItem, TodayDepartureStatusListPage } from '../today-departure-status-list/today-departure-status-list.page';

@Component({
  selector: 'app-departure-status-list',
  templateUrl: './departure-status-list.page.html',
  styleUrls: ['./departure-status-list.page.scss'],
})
export class DepartureStatusListPage implements OnInit {

  form:DepartureStatusListForm = {
    project_id: this.user.userData.belong_data.project_id, // 현장 ID
    master_company_id: 0, // 원청사 ID
    ctgo_construction_ids: [], // 공종 ID
    start_date: this.date.today({ month: -1 }), // 검색 시작일
    end_date: this.date.today(), // 검색 종료일
    limit_no: 0 // limit_no
  }

  res:ConnectResult<DepartureStatusListItem>;

  permission = {
    contractor: false
  }

  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    public user: UserService,
    private toast: ToastService,
    private date: DateService,
    private promise: PromiseService
  ) { }

  ngOnInit() {
    this.getPromission();
    this.getForm();
    this.getList();
  }

  getPromission() {
    const { user_type, user_role, belong_data } = this.user.userData;
    if(user_type === 'LH') {
      this.permission.contractor = true;
    }
    else {
      this.permission.contractor = false;
    }
  }
  getForm() {
    const { user_type, belong_data } = this.user.userData;
    if(user_type === 'LH') {
      this.form.master_company_id = 0;
    } else {
      this.form.master_company_id = belong_data.company_id;
    }
  }

  async getList(limit_no = this.form.limit_no) {
    await this.promise.wait(() => this.form.master_company_id);
    
    this.form.limit_no = limit_no;
    this.res = await this.connect.run('/work_state/list', this.form, { loading: true });
    if(this.res.rsCode !== 0) {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }

  async detail(item) {
    const modal = await this.modal.create({
      component: TodayDepartureStatusListPage,
      cssClass: 'today-departure-status-list-modal',
      componentProps:{
        listForm: this.form,
        item
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.getList();
    }
  }

}
