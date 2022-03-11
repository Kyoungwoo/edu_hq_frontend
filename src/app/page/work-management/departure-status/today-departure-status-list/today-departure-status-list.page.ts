import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService, UserType } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { TodayDepartureStatusEditPage } from '../today-departure-status-edit/today-departure-status-edit.page';

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

export class TodayDepartureStatusListItem {
  ctgo_construction_id:number = 0;
  outside_time:string = '';
  nb_log_id:number = 0;
  company_id:number = 0;
  ctgo_job_position_id:number = 0;
  user_name:string = '';
  ctgo_occupation_name:string = '';
  ctgo_construction_name:string = '';
  ctgo_job_position_name:string = '';
  inside_type:string = '';
  outside_type:string = '';
  user_type:UserType = null;
  ctgo_occupation_id:number = 0;
  user_id:number = 0;
  company_name:string = '';
  ctgo_safe_job_id:number = 0;
  inside_time:string = '';
  ctgo_safe_job_name:string = '';
  row_count:number = 0;
}
export class TodayDepartureStatusDetailItem {
  company_id:number;
  company_name:string;
  ctgo_construction_id:number;
  ctgo_construction_name:string;
  ctgo_job_position_id:number;
  ctgo_job_position_name:string;
  ctgo_occupation_id:number;
  ctgo_occupation_name:string;
  ctgo_safe_job_id:number;
  ctgo_safe_job_name:string;
  inside_time:string;
  inside_type:"MANUAL" | "NFC" | "QR" | "BEACON";
  nb_log_id:number;
  outside_time:string;
  outside_type:"MANUAL" | "NFC" | "QR" | "BEACON";
  user_id:number;
  user_name:string;
  user_type:UserType;
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
    work_date:string
  }>;

  res2:ConnectResult<TodayDepartureStatusListItem>;
  detailList:any[][] = [];

  permisson = {
    edit: false
  }

  constructor(
    private _modal: ModalController,
    private connect: ConnectService,
    public user: UserService,
    private toast: ToastService,
    private date: DateService,
    private promise: PromiseService
  ) { }

  ngOnInit() {
    this.getPromission();
    this.getForm();
    this.getSummary();
    this.getList();
  }

  getPromission() {
    const { user_type } = this.user.userData;
    if(user_type === 'LH' || user_type === 'SUPER') {
      this.permisson.edit = false;
    }
    else if(user_type === 'COMPANY') {
      this.permisson.edit = true;
    }
  }
  getForm() {
    this.form.project_id = this.listForm.project_id;
    this.form.master_company_id = this.listForm.master_company_id;
    this.form.ctgo_construction_ids = this.listForm.ctgo_construction_ids;
    this.form.cnt_date = this.item.work_date;
  }

  async getSummary() {
    this.res = await this.connect.run('/work_state/current', this.form, { loading: true });
    if(this.res.rsCode !== 0 && this.res.rsCode !== 1008) {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }
  async getList() {
    this.res2 = await this.connect.run('/work_state/detail/list', this.form, { loading: true });
    if(this.res2.rsCode !== 0 && this.res2.rsCode !== 1008) {
      this.toast.present({ color: 'warning', message: this.res2.rsMsg });
    }
  }

  async detail(item:TodayDepartureStatusListItem, index) {
    if(this.detailList[index]) {
      this.detailList[index] = null;
    } 
    else {
      const form = {
        cnt_date: this.form.cnt_date,
        project_id: this.form.project_id,
        master_company_id: item.company_id,
        ctgo_construction_id: item.ctgo_construction_id,
        view_user_id: item.user_id
      }
      const res = await this.connect.run('/work_state/detail/sub_list', form, { loading: true });
      if(res.rsCode === 0) {
        this.detailList[index] = res.rsMap;
      }
    }
  }

  async edit(type) {
    const modal = await this._modal.create({
      component: TodayDepartureStatusEditPage,
      cssClass: 'today-departure-status-edit-modal',
      componentProps: {
        type,
        project_id: this.form.project_id,
        company_id: this.form.master_company_id,
        inout_date: this.form.cnt_date
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.getSummary();
      this.getList();
    }
  }

}