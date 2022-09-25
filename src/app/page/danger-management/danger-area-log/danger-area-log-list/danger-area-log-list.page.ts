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

export class DepartureStatusListForm {
  project_id: number = 0; // 현장 ID
  master_company_id: number = 0; // 원청사 ID
  ctgo_construction_ids: number[] = []; // 공종 ID
  start_date: string; // 검색 시작일
  end_date: string; // 검색 종료일
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

const project_area_risk_get_response = 
{
  "rqMethod": "Get_AreaRisk_List",
  "rsCode": 0,
  "rsMsg": "성공",
  "rsMap": [
    {
      "second_user_id": 1853216416,
      "area_risk_id": 57,
      "area_middle_name": "A-1BL(1공구) 현장 경계구역",
      "ctgo_area_risk_name": "낙하물 위험지역",
      "area_middle_id": 13,
      "ctgo_area_risk_id": 4,
      "area_risk_name": "수원당수 A-1BL(1공구) 현장 경계구역",
      "manager_user_id": 7726577158,
      "area_bottom_name": null,
      "area_risk_type": "실외",
      "nfc_state": 0,
      "project_id": 160,
      "area_top_id": 27,
      "area_bottom_id": 13,
      "area_risk_use_state": 1,
      "area_top_name": "지상층",
      "gps_state": 1
    }
  ],
  "rsObj": {
    "row_count": 3
  },
  "exMsg": null,
    "authDto": null
}

class DangerAreaRes {
  rqMethod: string;
  rsCode: number;
  rsMsg: string;
  rsMap: Array<DangerAreaData>;
  rsObj: {
    row_count:number;
  }
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

  form: DepartureStatusListForm = {
    project_id: this.user.userData.belong_data.project_id, // 현장 ID
    master_company_id: this.user.userData.belong_data.master_company_id ? this.user.userData.belong_data.master_company_id : this.user.userData.belong_data.company_id, // 원청사 ID
    ctgo_construction_ids: [], // 공종 ID
    start_date: this.date.today({ month: -1 }), // 검색 시작일
    end_date: this.date.today(), // 검색 종료일
    limit_no: 0, // limit_no

  }
  // Riskform = {
  //   // ctgo_machinery_id: 0,
  //   // end_date: this.date.today(),
  //   company_id:
  //     this.user.userData.user_type == 'LH' ||
  //       this.user.userData.user_type == 'SUPER'
  //       ? 0
  //       : this.user.userData.belong_data.company_id,
  //   master_company_id:
  //     this.user.userData.user_type == 'LH' ||
  //       this.user.userData.user_type == 'SUPER'
  //       ? 0
  //       : this.user.userData.belong_data.master_company_id,
  //   partner_company_id: 0,
  //   ctgo_area_risk_id: 0,
  //   cnt_date: this.date.today(),
  //   ctgo_machine_serial_id: 0,
  //   project_id: this.user.userData.belong_data.project_id,
  //   project_name: this.user.userData.belong_data.project_name,
  //   search_text: '',
  //   limit_no: 0,
  // };

  resRisk: ConnectResult<DangerAreaData>;
  res: ConnectResult<DepartureStatusListItem>;

  // resCtgoRisk: ConnectResult<{
  //   ctgo_area_risk_id: number,
  //   ctgo_area_risk_name: string
  // }>
  permission = {
    contractor: false
  }
  detailList: any[][] = [];
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
      // setTimeout(() => {
      //   this.getList();
      // }, 300);
    setTimeout(() => {
      this.get(0);
    }, 300);      
  }

  get(limit_no = this.form.limit_no){
    this.getRiskArea(limit_no);
    this.getList(limit_no);
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
    this.form.limit_no = limit_no;
    const resRisk = await this.connect.run('/project/area/risk/get', 
    {
      project_id : this.form.project_id,
      limit_no : 0,
    }, {loading:true});
    if (resRisk.rsCode === 0) {
      this.resRisk = {
        ...this.resRisk,
        ...resRisk,
      };
      this.resRisk.rsMap.map((item, i) => {
        item.index = resRisk.rsMap.length - this.form.limit_no - i;
      });
    } else if (resRisk.rsCode === 1008) {
      this.resRisk = null;
    } else {
      this.toast.present({ color: 'warning', message: resRisk.rsMsg });
    }
  }


  async getList(limit_no = this.form.limit_no) {
    console.log(" this.form.master_company_id =" + this.form.master_company_id);

    await this.promise?.wait(() => this.form.master_company_id);

    this.form.limit_no = limit_no;
    this.res = await this.connect.run('/work_state/list', this.form, { loading: true });
    if (this.res.rsCode !== 0) {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }

  async Heavyedit(item?) {
    const modal = await this.modal.create({
      component: DangerAreaLogDetailPage,
      componentProps: {
        project_id: this.form.project_id,
        list_data: this.form,
        master_company_id: this.form.master_company_id,
      },
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.getList();
    }
  }

  // async itemDetail(item) {
  //   console.log("detail - ", this.form);
  //   const modal = await this.modal.create({
  //     component: TodayDepartureStatusListPage,
  //     cssClass: 'today-departure-status-list-modal',
  //     componentProps: {
  //       listForm: this.form,
  //       item
  //     }
  //   });
  //   modal.present();
  //   const { data } = await modal.onDidDismiss();
  //   if (data) {
  //     this.getList();
  //   }
  // }

  async detail(item) {
    console.log("detail - ", this.form);
    const modal = await this.modal.create({
      component: TodayDepartureStatusListPage,
      cssClass: 'today-departure-status-list-modal',
      componentProps: {
        listForm: this.form,
        item
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.getList();
    }
  }

  async Heavydelete() {
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            const res = await this.connect.run('/machinery/delete', {
              machinery_ids: this.selectedList,
            });
            if (res.rsCode === 0) {
              this.getList();
            } else {
              ; //this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          },
        },
      ],
    });
  }


  /**
   * @function btnPromise(): 권한에 따른 버튼활성화 메서드
   * @param type - 버튼의 type
   * @param user_id - 체크박스가 있는 목록 해당 아이템을 등록한 사람의 user_id
   * @returns true or false
   */
  btnPromise(type, user_id = null) {
    let state = false;
    switch (type) {
      case 'insert':
        if (
          this.user.userData.user_role === 'LH_HEAD' ||
          this.user.userData.user_type === 'COMPANY'
        )
          state = true;
        break;
      case 'delete':
        if (
          this.user.userData.user_role === 'LH_HEAD' ||
          this.user.userData.user_role === 'MASTER_HEAD'
        )
          state = true;
        break;
      case 'delete_check':
        if (
          this.user.userData.user_role === 'LH_HEAD' ||
          this.user.userData.user_role === 'MASTER_HEAD' ||
          user_id == this.user.userData.user_id
        )
          state = true;
        break;
    }
    return state;
  }  
}
