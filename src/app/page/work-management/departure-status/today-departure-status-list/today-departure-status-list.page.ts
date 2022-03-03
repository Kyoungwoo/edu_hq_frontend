import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { PartnerEditPage } from 'src/app/page/project-management/partner-management/partner-edit/partner-edit.page';

export class DepartureStatusListForm {
  project_id:number = 0; // 현장 ID
  master_company_id:number = 0; // 원청사 ID
  ctgo_construction_ids:number[] = []; // 공종 ID
  start_date:string; // 검색 시작일
  end_date:string; // 검색 종료일
  limit_no:number // limit_no
}
export class DepartureStatusListItem {
  company_admin:number = 0;
  company_worker:number = 0;
  master_admin:number = 0;
  master_worker:number = 0;
  total_cnt:number = 0;
  work_date:string = '';
  row_count:number = 0;
}
@Component({
  selector: 'app-today-departure-status-list',
  templateUrl: './today-departure-status-list.page.html',
  styleUrls: ['./today-departure-status-list.page.scss'],
})
export class TodayDepartureStatusListPage implements OnInit {

  @Input() listForm:DepartureStatusListForm;
  @Input() item:DepartureStatusListItem;

  form = {
    project_id: 0, // 현장 ID
    master_company_id: 0, // 원청사 ID
    ctgo_construction_ids: [], // 공종 ID
    cnt_date: '', // 선택날짜
    search_text: '' // 검색어
  }

  res:ConnectResult <{
    company_admin:number,
    company_worker:number,
    master_admin:number,
    master_worker:number,
    total_cnt:number,
    work_date:string,
    row_count:number
  }>

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

  getPromission() {}
  getForm() {
    this.form.project_id = this.listForm.project_id;
    this.form.master_company_id = this.listForm.master_company_id;
    this.form.ctgo_construction_ids = this.listForm.ctgo_construction_ids;
    this.form.cnt_date = this.item.work_date;
  }

  async getList() {
    await this.promise.wait(() => this.form.master_company_id);
  
    this.res = await this.connect.run('/work_state/current', this.form, { loading: true });
    if(this.res.rsCode !== 0) {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }

  async edit(item) {
    const modal = await this.modal.create({
      component: PartnerEditPage,
      cssClass: 'today-departure-status-list',
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
