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
import { DesplacementDetectionDetailPage } from '../desplacement-detection-detail/desplacement-detection-detail.page';

class DesplacementDetectionInfo {
  index: number;
}

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

class DisplacementSensorRes {
  rsCode: number;
  rsMsg: string;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  row_count: number;
  rsMap: Array<DisplacementSensorData>;
}


class DisplacementSensorData {
  index?: number;
  area_risk_name?: string;  //장소 맵핑
  id?:Number;
  deviceType?:string;
  deviceId?:string; 
  impt_basis?:string;
  // 충격감지 기준값
  impt_cd?:string;
  // 충격감지 상태값
  inct_basis?:string;
  // 기울기 감지 기준값
  inct_cd?:string;
  // 기울기 상태값
  colt_dt?:string;
}



@Component({
  selector: 'app-desplacement-detection-list',
  templateUrl: './desplacement-detection-list.page.html',
  styleUrls: ['./desplacement-detection-list.page.scss'],
})
export class DesplacementDetectionListPage implements OnInit {
  form = {
    // ctgo_machinery_id: 0,
    // end_date: this.date.today(),
    company_id: (this.user.userData.user_type == 'LH' || this.user.userData.user_type == 'SUPER') ? 0 : this.user.userData.belong_data.company_id,
    master_company_id: (this.user.userData.user_type == 'LH' || this.user.userData.user_type == 'SUPER') ? 0 : this.user.userData.belong_data.master_company_id,
    
    partner_company_id: 0,
    // start_date: this.date.today({ year: -3 }),
    ctgo_machine_serial_id: 0,
    project_id: this.user.userData.belong_data.project_id,
    project_name: this.user.userData.belong_data.project_name,
    //company_id: this.user.userData.belong_data.company_id,
    search_text: '',
    limit_no: 0,    
  };

  res: ConnectResult<SerialInfo>;
  //displaceRes: DisplacementSensorRes;
  displaceRes: ConnectResult<DisplacementSensorData>;
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
    this.displaceRes=null;
     const res = await this.connect.run('/risk_state/user/serial/list', {
        project_id: this.form.project_id,
        master_company_id: this.form.master_company_id,
        search_text:this.form.search_text,
     });
    console.log("@@@@" + res);  
    const serialNameList = res.rsMap
      .filter((item) => item.ctgo_machine_serial_name.includes('변위'))
      .map((item) => item.serial_bicon);

    //iot 수집서버로 API 호출해서 가져오기 (contentType에 따라 분류됨)
    const displaceRes = (await this.connect.run(
      '/iotapi/status/displacementsensor/serial',
      {
        project_id: this.form.project_id,
        serialList: serialNameList.join(','),
        page: this.form.limit_no,
        pageSize: 20,
      }
    )) as any;

    if(displaceRes.rsCode === 0) {

      this.res = {
        ...this.res,
        ...res,
      };
      this.displaceRes = { ...this.displaceRes, ...displaceRes };
      this.displaceRes.rsMap.map((item, i) => {
        item.index = displaceRes.rsObj.row_count - this.form.limit_no - i;
        const serialNo = item.deviceId;
        const area_risk_name = res.rsMap.filter(
          (item) => item.serial_bicon === serialNo)
          .map((item) => item.area_risk_name);
        item.area_risk_name = area_risk_name[0];
      });
      this.res.rsMap.map((item, i) => {
        item.index = res.rsObj.row_count - this.form.limit_no - i;
      });
    }  else if (res.rsCode === 1008) {
      this.res = null;
    } else {
      ;//this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  async Heavyedit(item?) {
  
    const modal = await this.modal.create({
      component: DesplacementDetectionDetailPage,
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
              ;// this.toast.present({ color: 'warning', message: res.rsMsg });
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
