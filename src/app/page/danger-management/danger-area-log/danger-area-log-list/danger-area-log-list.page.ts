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

class DangerAreaInfo {
  index: number;
  master_company_id: number;
  master_company_name: string;
  danger_area_type: string;
  danger_area_name: string;
  search_text: string;
}

@Component({
  selector: 'app-danger-area-log-list',
  templateUrl: './danger-area-log-list.page.html',
  styleUrls: ['./danger-area-log-list.page.scss'],
})
export class DangerAreaLogListPage implements OnInit {
  @Input() listForm: DepartureStatusListForm;
  @Input() item: DepartureStatusListItem;
  // form = {
  //   area_full_name: '',
  //   master_company_id:
  //     this.user.userData.user_type === 'LH' ||
  //     this.user.userData.user_type === 'SUPER'
  //       ? 0
  //       : this.user.userData.belong_data.master_company_id,
  //   date: new Date(),
  //   area_risk_type: '',
  //   area_risk_name: '',
  //   search_text: '',
  //   limit_no: 0,
  // };
  form = {
    project_id: 0, // 현장 ID
    master_company_id: 0, // 원청사 ID
    ctgo_construction_ids: [], // 공종 ID
    cnt_date: '', // 선택날짜
    start_date: this.date.today({ month: -1 }), // 검색 시작일
    end_date: this.date.today(), // 검색 종료일
    search_text: '', // 검색어'
    limit_no: 0
  }
  res: ConnectResult<DangerAreaInfo>;
  res2: ConnectResult<TodayDepartureStatusListItem>;
  detailList: any[][] = [];
  selectedList = [];
  permisson = {
    edit: false
  }
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
    if (
      this.user.userData.user_role === 'PARTNER_HEAD' ||
      this.user.userData.user_role === 'PARTNER_GENERAL'
    )
      setTimeout(() => {
        this.getList();
      }, 300);
  }

  getPromission() {
    const { user_type } = this.user.userData;
    if (user_type === 'LH' || user_type === 'SUPER') {
      this.permisson.edit = false;
    }
    else if (user_type === 'COMPANY') {
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
    if (this.res.rsCode !== 0 && this.res.rsCode !== 1008) {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }
  async getList(limit_no = this.listForm.limit_no) {
    this.listForm.limit_no = limit_no;
    this.res2 = await this.connect.run('/work_state/detail/list', this.form, { loading: true });
    if (this.res2.rsCode !== 0 && this.res2.rsCode !== 1008) {
      this.toast.present({ color: 'warning', message: this.res2.rsMsg });
    }
  }
  async detail(item: TodayDepartureStatusListItem, index) {
    if (this.detailList[index]) {
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
      if (res.rsCode === 0) {
        this.detailList[index] = res.rsMap;
      }
    }
  }

  async edit(type) {
    const modal = await this._modal.create({
      component: DangerAreaLogDetailPage,
      cssClass: 'today-departure-status-edit-modal',
      componentProps: {
        type,
        project_id: this.form.project_id,
        company_id: this.user.userData.belong_data.company_id,
        inout_date: this.form.cnt_date
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.getSummary();
      this.getList();
    }
  }
//   async getList(limit_no = this.form.limit_no) {
//     this.form.limit_no = limit_no;
// //    const res = await this.connect.run('/danger-area/list', this.form);
//     if (res.rsCode === 0) {
//       this.res = {
//         ...this.res,
//         ...res,
//       };
//       this.res.rsMap.map((item, i) => {
//         item.index = res.rsObj.row_count - this.form.limit_no - i;
//       });
//     } else if (res.rsCode === 1008) {
//       this.res = null;
//     } else {
//       this.toast.present({ color: 'warning', message: res.rsMsg });
//     }
//   }

  async Heavyedit(item?) {
    const modal = await this.modal.create({
      component: DangerAreaLogDetailPage,
      componentProps: {
        machinery_id: item?.machinery_id,
        list_data: this.form,
      },
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
              this.toast.present({ color: 'warning', message: res.rsMsg });
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
          this.user.userData.user_role == 'LH_HEAD' ||
          this.user.userData.user_type == 'COMPANY'
        )
          state = true;
        break;
      case 'delete':
        if (
          this.user.userData.user_role == 'LH_HEAD' ||
          this.user.userData.user_role == 'MASTER_HEAD'
        )
          state = true;
        break;
      case 'delete_check':
        if (
          this.user.userData.user_role == 'LH_HEAD' ||
          this.user.userData.user_role == 'MASTER_HEAD' ||
          user_id == this.user.userData.user_id
        )
          state = true;
        break;
    }
    return state;
  }
}
