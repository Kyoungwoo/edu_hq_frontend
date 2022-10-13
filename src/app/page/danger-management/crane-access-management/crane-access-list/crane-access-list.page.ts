import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  ConnectResult,
  ConnectService,
  ContentType,
} from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { CraneAccessDetailPage } from '../crane-access-detail/crane-access-detail.page';

class SerialInfo {
  create_date: string;
  ctgo_machine_serial_id: number;
  ctgo_machine_serial_name: string;
  master_company_id: number;
  master_company_name: string;
  project_id: number;
  serial_bicon: string;
  serial_id: number;
  serial_nfc: string;
  serial_no: string;
  serial_type: string;
  serial_use_state: number;
  serial_value: string;
  update_date: string;
  assign_data: any;
  user_id: number;
  index: number;
  row_count: number;
}

class CraneHeightSensorRes {
  rsCode: number;
  rsMsg: string;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  rsMap: Array<CraneHeightSensorData>;
}

class CraneHeightSensorData {
  index?: number;
  machinery_regist_no?: string;
  id?: Number;
  deviceType?: string;
  deviceId?: string;
  craneHeightCd: string;
  colt_dt?: string;
}
@Component({
  selector: 'app-crane-access-list',
  templateUrl: './crane-access-list.page.html',
  styleUrls: ['./crane-access-list.page.scss'],
})
export class CraneAccessListPage implements OnInit {
  form = {
    company_id:
      this.user.userData.user_type == 'LH' ||
        this.user.userData.user_type == 'SUPER'
        ? 0
        : this.user.userData.belong_data.company_id,
    master_company_id:
      this.user.userData.user_type == 'LH' ||
        this.user.userData.user_type == 'SUPER'
        ? 0
        : this.user.userData.belong_data.master_company_id,
    partner_company_id: 0,    
    ctgo_machine_serial_id: 0,
    project_id: this.user.userData.belong_data.project_id,
    project_name: this.user.userData.belong_data.project_name,
    search_text: '',
    limit_no: 0,
  };

  res: ConnectResult<SerialInfo>;
  craneRes: ConnectResult<CraneHeightSensorData>;;

  selectedList = [];

  constructor(
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
      this.form.partner_company_id = this.user.userData.belong_data.company_id;

    setTimeout(() => {
      this.getList();
    }, 300);
  }

  async getList(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    this.craneRes = null;
    const res = await this.connect.run('/risk_state/user/serial/list', {
      project_id: this.form.project_id,
      master_company_id: this.form.master_company_id,
      search_text: this.form.search_text,
    });
    console.log("@@@@" + res);  
    const serialNameList = res.rsMap
      .filter(
        (item) => item.ctgo_machine_serial_name.includes('크레인')
      )
      .map((item) => item.serial_bicon);
    const craneRes = (await this.connect.run(
      '/iotapi/status/cranesensor/serial',
      {
        project_id: this.form.project_id,
        serialList: serialNameList.join(','),
        page: this.form.limit_no,
        pageSize: 20,
      }
    )) as any;

    if (craneRes.rsCode === 0) {
      this.res = {
        ...this.res,
        ...res,
      };
      this.craneRes = { ...this.craneRes, ...craneRes };
      this.craneRes.rsMap.map((item, i) => {
        item.index = craneRes.rsObj.row_count - this.form.limit_no - i;
        const serialNo = item.deviceId;
        const machinery_regist_no = res.rsMap.filter(
          (item) => item.serial_bicon === serialNo)
          .map((item) => item.machinery_regist_no);
        item.machinery_regist_no = machinery_regist_no[0];
      });
      this.res.rsMap.map((item, i) => {
        item.index = res.rsObj.row_count - this.form.limit_no - i;
      });
    } else if (res.rsCode === 1008) {
      this.res = null;
    } else {
      ; //this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  async Craneedit(item?) {
    const modal = await this.modal.create({
      component: CraneAccessDetailPage,
      componentProps: {
        project_id: this.form.project_id,
        project_name: this.form.project_name,
        serial_no: item?.deviceId,
        machinery_regist_no: item.machinery_regist_no,
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
