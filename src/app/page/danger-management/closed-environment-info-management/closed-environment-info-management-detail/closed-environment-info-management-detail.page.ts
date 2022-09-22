import { async } from '@angular/core/testing';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService, ContentType } from 'src/app/basic/service/core/connect.service';
import { FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';

class AirQualitySensorData {
  index?: number;
  //디바이스식별번호
  SerialNo?: string;
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

class AirQualitySensorRes {
  rsCode?: number;
  rsMsg?: string;
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
  rsMap?: Array<AirQualitySensorData>;
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
  
  form = {
    page: 1,
    pageSize: 20,
    date: null,
    project_id: null,
    serialList: null,
    limit_no: 10,
  };

  res: AirQualitySensorRes = {};

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
      '/device/status/airqualitysensor/detail',
      this.form,
      {
        contentType: ContentType.ApplicationJson,
        iot: true,
        loading: true,
      }
    )) as any;
    if (res.rsCode === 0) {
      this.res = res;
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


