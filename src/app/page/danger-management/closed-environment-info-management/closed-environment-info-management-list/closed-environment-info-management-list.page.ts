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
  index?: number; //번호
  area_risk_name?: string; //장소 매핑
  id? :number; //                  bigint not null auto_increment   comment "안전고리감지장치상태id",
  project_id?:number; //          bigint not null                  comment "현장ProjectID",
  deviceType?:string; //          varchar(10)                       comment "장비유형",
  deviceId?:string;  //           varchar(100)                    comment "DeviceID",
  co2_alarm?:string; //         	varchar(12)                      comment "이산화탄소농도상태판단",
  co2_Basis?: string; //         	varchar(12)                      comment "이산화탄소농도기준값",
  co2_meas?: string; //          	varchar(12)                      comment "이산화탄소농도측정값",
  co_alarm?: string; //          	varchar(12)                      comment "일산화탄소농도상태판단",
  co_Basis?: string; //          	varchar(12)                      comment "일산화탄소농도기준값",
  co_meas?: string; //           	varchar(12)                      comment "일산화탄소농도측정값",
  flm_alarm?: string; //         	varchar(12)                      comment "가연성가스상태판단",
  flm_basis?: string; //         	varchar(12)                      comment "가연성가스농도기준",
  flm_meas?: string; //          	varchar(12)                      comment "가연성가스농도",
  h2s_alarm?: string; //         	varchar(12)                      comment "황화수소농도상태판단",
  h2s_Basis?: string; //         	varchar(12)                      comment "황화수소농도기준값",
  h2s_meas?: string; //          	varchar(12)                      comment "황화수소농도측정값",
  o2_alarm?: string; //          	varchar(12)                      comment "산소농도상태판단",
  o2_Basis?: string; //          	varchar(12)                      comment "산소농도기준값",
  o2_meas?: string; //          	varchar(12)                      comment "산소농도측정값",
  colt_dt?: string; //               datetime default current_timestamp on update current_timestamp  comment "데이터수집일시",
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
    limit_no: 0,
  };

  res: ConnectResult<DangerAreaInfo>;
  airRes: ConnectResult<AirQualitySensorData>;;

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
    const res = await this.connect.run('/risk_state/user/serial/list', {
      project_id:this.form.project_id,
      master_company_id : this.form.master_company_id,
      search_text: this.form.search_text,
    }
    );
    const serialNameList = res.rsMap
      .filter(
          (item) => item.ctgo_machine_serial_name === '밀폐환경센서'
      )
      .map((item) => item.serial_bicon);
    const airRes = (await this.connect.run(
      '/iotapi/status/airqualitysensor/serial',
      {
        project_id: this.form.project_id,
        serialList: serialNameList.join(','),
        page: this.form.limit_no,
        pageSize: 20,
      }
    )) as any;

    if (airRes.rsCode === 0) {
      this.res = {
        ...this.res,
        ...res,
      };
      this.airRes = { ...this.airRes, ...airRes };
      this.airRes.rsMap.map((item, i) => {
        item.index = airRes.rsObj.row_count - this.form.limit_no - i;
        const serialNo = item.deviceId;
        const area_risk_name = res.rsMap.filter(
          (item) => item.serial_bicon === serialNo)
          .map((item) => item.area_risk_name);
        item.area_risk_name = area_risk_name[0];        
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
        serial_no: item?.deviceId,
        area_risk_name: item?.area_risk_name,
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
