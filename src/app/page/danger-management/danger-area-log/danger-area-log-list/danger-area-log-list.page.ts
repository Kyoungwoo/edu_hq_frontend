import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  ConnectResult,
  ConnectService,
} from 'src/app/basic/service/core/connect.service';
import { UserService, UserType } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { DangerAreaLogDetailPage } from '../danger-area-log-detail/danger-area-log-detail.page';
import { TodayDepartureStatusListPage } from '../today-danger-area-log-list/today-danger-area-status-list.page';
//import { DangerAreaLogEditPage } from '../danger-area-log-edit/danger-area-log-edit.page';
//import { TodayDepartureStatusListPage } from '../today-departure-status-list/today-departure-status-list.page';

export class RiskAreaItem {
  area_bottom_id: number = 0;
  area_bottom_name?: string;
  area_middle_id: number =0;
  area_middle_name?: string;
  area_risk_id?: number;
  area_risk_name?: string;
  area_risk_type?: string;
  area_risk_use_state?: number;
  area_top_id?: number;
  area_top_name?: string;
  ctgo_area_risk_id?: number;
  ctgo_area_risk_name?: string;
  gps_state?: number;
  index?: number;
  manager_user_id?: number;
  nfc_state?: number;
  project_id?: number;
  second_user_id?: number;
}

export class DepartureStatusListForm {
  project_id: number = 0; // 현장 ID
  master_company_id: number = 0; // 원청사 ID
  ctgo_construction_ids: number[] = []; // 공종 ID
  start_date: string; // 검색 시작일
  end_date: string; // 검색 종료일
  cnt_date: string;
  limit_no: number // limit_no
}
export class DepartureStatusListItem {
  company_admin: number = 0;
  company_worker: number = 0;
  master_admin: number = 0;
  master_worker: number = 0;
  total_cnt: number = 0;
  work_date: string = '';
  row_count: number = 0;
}

export class TodayDepartureStatusListItem {
  ctgo_construction_id: number = 0;
  outside_time: string = '';
  nb_log_id: number = 0;
  company_id: number = 0;
  ctgo_job_position_id: number = 0;
  user_name: string = '';
  ctgo_occupation_name: string = '';
  ctgo_construction_name: string = '';
  ctgo_job_position_name: string = '';
  inside_type: string = '';
  outside_type: string = '';
  user_type: UserType = null;
  ctgo_occupation_id: number = 0;
  user_id: number = 0;
  company_name: string = '';
  ctgo_safe_job_id: number = 0;
  inside_time: string = '';
  ctgo_safe_job_name: string = '';
  row_count: number = 0;
}
export class TodayDepartureStatusDetailItem {
  company_id: number;
  company_name: string;
  ctgo_construction_id: number;
  ctgo_construction_name: string;
  ctgo_job_position_id: number;
  ctgo_job_position_name: string;
  ctgo_occupation_id: number;
  ctgo_occupation_name: string;
  ctgo_safe_job_id: number;
  ctgo_safe_job_name: string;
  inside_time: string;
  inside_type: "MANUAL" | "NFC" | "QR" | "BEACON";
  nb_log_id: number;
  outside_time: string;
  outside_type: "MANUAL" | "NFC" | "QR" | "BEACON";
  user_id: number;
  user_name: string;
  user_type: UserType;
}

class DangerAreaData {
  index?: number;
  master_company_id: number;
  master_company_name: string;
  danger_area_type: string;
  danger_area_name: string;
  search_text: string;
  second_user_id: number;
  area_risk_id: number;
  area_middle_name: string;
  ctgo_area_risk_name: string;
  area_middle_id: number;
  ctgo_area_risk_id: number;
  area_risk_name: string;
  manager_user_id: number;
  area_bottom_name: string;
  area_risk_type: string;
  nfc_state: number;
  project_id: number;
  area_top_id: number;
  area_bottom_id: number;
  area_risk_use_state: number;
  area_top_name: string;
  gps_state: 1  
}

@Component({
  selector: 'app-danger-area-log-list',
  templateUrl: './danger-area-log-list.page.html',
  styleUrls: ['./danger-area-log-list.page.scss'],
})
export class DangerAreaLogListPage implements OnInit {
  // @Input() listForm: DepartureStatusListForm;
  // @Input() item: DepartureStatusListItem;
  // @Input() areaItem: DepartureStatusListItem;

  form =  {
    project_id: this.user.userData.belong_data.project_id, // 현장 ID
    master_company_id: this.user.userData.belong_data.master_company_id ? this.user.userData.belong_data.master_company_id : this.user.userData.belong_data.company_id, // 원청사 ID
    ctgo_construction_ids: [], // 공종 ID
    start_date: this.date.today({ month: -1 }), // 검색 시작일
    end_date: this.date.today(), // 검색 종료일
    cnt_date: this.date.today(),//this.date.today(), // 선택날짜
    area_risk_name:"",
    ctgo_area_risk_name:"",
    ctgo_area_risk_id:0,
    limit_no: 0, // limit_no

  }
 
  resRisk: ConnectResult<DangerAreaData>;
  resWorkStat: ConnectResult<DepartureStatusListItem>;

  detailList: any[][] = [];
  permission = {
    contractor: false
  }
  selectedList = [];
  permisson = {
    edit: false
  }
  promise: any;
  
  constructor(
    private _modal: ModalController,
    private modal: ModalController,
    private toast: ToastService,
    private connect: ConnectService,
    private date: DateService,
    public user: UserService,
    private alert: AlertService
  ) {}

  ngOnInit() {
    this.getPromission();
    this.getRiskArea(this.form.limit_no)    
    this.getWorkStatelist(this.form.limit_no)     
  }

  getPromission() {
    const { user_type } = this.user.userData;
    if (user_type === 'LH') {
      this.permission.contractor = true;
    }
    else {
      this.permission.contractor = false;
    }
  }

  async getRiskArea(limit_no = this.form.limit_no) {
    console.log("this.form.ctgo_area_risk_name = " + this.form.ctgo_area_risk_name);

    this.form.limit_no = limit_no;
    const resRisk = await this.connect.run('/project/area/risk/get', 
    {
      project_id : this.form.project_id,
      limit_no : 0,
    }, {loading:true});

    if (resRisk.rsCode === 0) {
      // this.resRisk = {
      //   ...this.resRisk,
      //   ...resRisk,
      // };
      this.resRisk = resRisk;
      if(this.form.area_risk_name !== "") {
        console.log("this.form.area_risk_name = " + this.form.area_risk_name);
        this.resRisk.rsMap = resRisk.rsMap.filter(
          (item) => item.area_risk_name === this.form.area_risk_name).map((item) => item);
      }
      if (this.form.ctgo_area_risk_name !== "") {
        console.log("this.form.ctgo_area_risk_name = " + this.form.ctgo_area_risk_name);
        this.resRisk.rsMap = resRisk.rsMap.filter(
          (item) => item.ctgo_area_risk_name === this.form.ctgo_area_risk_name).map((item) => item);
      }      
      // this.resRisk = {
      //   ...this.resRisk,
      //   ...resRisk,
      // };

      this.resRisk.rsMap.map((item, i) => {
        item.index = resRisk.rsMap.length - this.form.limit_no - i;
      });
    } else if (resRisk.rsCode === 1008) {
      this.resRisk = null;
    } else {
      this.toast.present({ color: 'warning', message: resRisk.rsMsg });
    }
  }


  async getWorkStatelist(limit_no = this.form.limit_no) {

    await this.promise?.wait(() => this.form.master_company_id);

    this.form.limit_no = limit_no;
    this.resWorkStat = await this.connect.run('/work_state/list', this.form, { loading: true });
    if (this.resWorkStat.rsCode !== 0) {
      this.toast.present({ color: 'warning', message: this.resWorkStat.rsMsg });
    }
  }

  async detail(item) {
    console.log("detail - ", this.form);
    const modal = await this.modal.create({
      component: TodayDepartureStatusListPage,
      cssClass: 'today-departure-status-list-modal',
      componentProps: {
        listForm: this.form,
        areaItem :item,
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.getWorkStatelist();
    }
  }

}
