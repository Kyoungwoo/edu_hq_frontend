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
import { ClosedEnvironmentInfoDetailPage } from '../closed-environment-info-management-detail/closed-environment-info-management-detail.page';


class AirQualitySensorRes {
  rsCode: number;
  rsMsg: string;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  rsMap: Array<AirQualitySensorData>;
}

class AirQualitySensorData {
  index?: number;
  //디바이스식별번호
  SerialNo: string;
  //생성일
  createdAt: string;
  // 산소농도 기준값
  o2Basis: string;
  // 산소농도 측정값
  o2measure: string;
  // 산소농도 상태 판단
  o2alarm: string;
  // 일산화탄소농도 기준값
  coBasis: string;
  // 일산화탄소농도 측정값
  comeasure: string;
  // 일산화탄소농도 상태 판단
  coalarm: string;
  // 이산화탄소농도 기준값
  co2Basis: string;
  // 이산화탄소농도 측정값
  co2measure: string;
  // 이산화탄소농도 상태 판단
  co2alarm: string;
  // 가연성가스농도기준
  flmbasis: string;
  // 가연성가스농도
  flmmeasure: string;
  // 가연성가스상태판단
  flmalarm: string;
  // 황화수소농도 기준값
  h2sBasis: string;
  // 황화수소농도 측정값
  h2smeasure: string;
  // 황화수소농도 상태 판단
  h2salarm: string;
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
  selector: 'app-closed-environment-info-management-list',
  templateUrl: './closed-environment-info-management-list.page.html',
  styleUrls: ['./closed-environment-info-management-list.page.scss'],
})
export class ClosedEnvironmentInfoListPage implements OnInit {
  form = {
    // ctgo_machinery_id: 0,
    // end_date: this.date.today(),
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
    // start_date: this.date.today({ year: -3 }),
    ctgo_machine_serial_id: 0,
    project_id: this.user.userData.belong_data.project_id,
    project_name: this.user.userData.belong_data.project_name,
    search_text: '',
    limit_no: 1,
  };

  res: ConnectResult<DangerAreaInfo>;
  airRes: AirQualitySensorRes;

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
    this.airRes = null;
    const res = await this.connect.run('/serial/user/list', this.form, {
      parse: ['user_data'],
    });
    const serialNameList = res.rsMap
      .filter(
        (item) => item.ctgo_machine_serial_name === '밀폐환경센서'
      )
      .map((item) => item.serial_bicon);
    const airRes: AirQualitySensorRes = (await this.connect.run(
      '/device/status/airqualitysensor/serial',
      {
        project_id: this.form.project_id,
        serialList: serialNameList.join(','),
        page: this.form.limit_no,
        pageSize: 20,
      },
      { contentType: ContentType.ApplicationJson, iot: true }
    )) as any;

    if (airRes.rsCode === 0) {
      this.res = {
        ...this.res,
        ...res,
      };
      this.airRes = { ...this.airRes, ...airRes };
      this.airRes.rsMap.map((item, i) => {
        item.index = airRes.totalItems - this.form.limit_no - i;
        // const ctgo_machine_serial_name = res.rsMap
        //   .filter((resItem) => resItem.serial_bicon === item.SerialNo)
        //   .map((resItem) => resItem.ctgo_machine_serial_name);
        // item.craneName = ctgo_machine_serial_name[0];
      });
      this.res.rsMap.map((item, i) => {
        item.index = res.rsObj.row_count - this.form.limit_no - i;
      });
    } else if (res.rsCode === 1008) {
      this.res = null;
    } else {
      ;//this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  async Heavyedit(item?) {
    const modal = await this.modal.create({
      component: ClosedEnvironmentInfoDetailPage,
      componentProps: {
        project_id: this.form.project_id,
        project_name: this.form.project_name,
        serial_no: item?.SerialNo,
        craneName: item.craneName,
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
