import { async } from '@angular/core/testing';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService, ContentType } from 'src/app/basic/service/core/connect.service';
import { FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';

class AirQualitySensorData {
  index?: number; //번호
  area_risk_name?: string; //장소 매핑
  id?: number; //                  bigint not null auto_increment   comment "안전고리감지장치상태id",
  project_id?: number; //          bigint not null                  comment "현장ProjectID",
  deviceType?: string; //          varchar(10)                       comment "장비유형",
  deviceId?: string;  //           varchar(100)                    comment "DeviceID",
  co2_alarm?: string; //         	varchar(12)                      comment "이산화탄소농도상태판단",
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
@Component({
  selector: 'app-closed-environment-info-management-detail',
  templateUrl: './closed-environment-info-management-detail.page.html',
  styleUrls: ['./closed-environment-info-management-detail.page.scss'],
})
export class ClosedEnvironmentInfoDetailPage implements OnInit {
  @Input() project_id;
  @Input() serial_no;
  @Input() list_data;
  @Input() master_company_id;
  @Input() area_risk_name;

  form = {
    page: 1,
    pageSize: 20,
    date: null,
    project_id: 0,
    serialList: null,
    cnt_date: this.date.today(),
    limit_no: 0,
  };

  res: ConnectResult<AirQualitySensorData>;

  test = true;
  updateStatus = false;


  selectList = [];
  constructor(
    private connect: ConnectService,
    private alert: AlertService,
    private date: DateService,
    private toast: ToastService,
    public user: UserService,
    private _modal: ModalController
  ) {
    this.form.date = date.today();
  }

  ngOnInit() {
    this.form = {
      ...this.form,
      project_id: this.project_id,
      serialList: this.serial_no,
    };
    if (this.serial_no) {
      this.updateStatus = true;
      this.get();
    } else {
      this.updateStatus = false;
    }
    console.log(this.form);
  }

  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    console.log("limit_no  =========" + limit_no);
    limit_no === 0 ? this.form.page = 1 : this.form.page = limit_no / 10;
      
    //상세보기
    const res = (await this.connect.run(
      '/iotapi/status/airqualitysensor/serial/detail',
      {
        project_id: this.form.project_id,
        serialList: this.serial_no,
        limit_no: this.form.limit_no,
        cnt_date: this.form.cnt_date,
        pageSize: 20,
      }
    )) as any;

    if (res.rsCode === 0) {
      this.res = res;
    }
    else {
      this.res = null;

    }
  }

  async close() {
    const alert = await this.alert.present({
      message: '정말 닫으시겠습니까?',
      buttons: [
        {
          text: '아니요',
        },
        {
          text: '예',
          handler: async () => {
            this._modal.dismiss();
          },
        },
      ],
    });
  }

  /**
   * @function btnPromise(): 권한에 따른 버튼활성화 메서드
   * @param type - 버튼의 type
   * @returns true or false
   */
  btnPromise(type) {
    let state = false;
    return true;
  }
}


