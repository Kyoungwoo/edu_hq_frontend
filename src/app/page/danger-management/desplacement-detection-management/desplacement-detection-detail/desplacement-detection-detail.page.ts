import { async } from '@angular/core/testing';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService, ContentType } from 'src/app/basic/service/core/connect.service';
import { FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { getSafePropertyAccessString } from '@angular/compiler';

class DisplacementSensorData {
  index?: number;
  area_risk_name?: string;  //장소 맵핑
  id?: Number;
  deviceType?: string;
  deviceId?: string;
  impt_basis?: string;
  // 충격감지 기준값
  impt_cd?: string;
  // 충격감지 상태값
  inct_basis?: string;
  // 기울기 감지 기준값
  inct_cd?: string;
  // 기울기 상태값
  colt_dt?: string;
}
@Component({
  selector: 'app-desplacement-detection-detail',
  templateUrl: './desplacement-detection-detail.page.html',
  styleUrls: ['./desplacement-detection-detail.page.scss'],
})
export class DesplacementDetectionDetailPage implements OnInit {
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

  res: ConnectResult<DisplacementSensorData>;

  test = true;
  updateStatus = false;

  constructor(
    private connect: ConnectService,
    private alert: AlertService,
    private date: DateService,
    private toast: ToastService,
    public user: UserService,
    private _modal: ModalController
  ) {}

  ngOnInit() {
    this.form = {
      ...this.form,
      project_id: this.project_id,
      serialList: this.serial_no,
    };

    if (this.serial_no) {
      //console.log("@@@@@@ this.serial_no = " + this.serial_no);
 
      this.updateStatus = true;
      this.get();
    } else {
      this.updateStatus = false;
    }
    //console.log(this.form);
  }

  //날짜 변경시 조회
  calendar_change() {
    this.get();
  }

  async get(limit_no = this.form.limit_no) {

    this.form.limit_no = limit_no;
    limit_no === 0 ? this.form.page = 1 : this.form.page = limit_no / 10;

    //상세보기
    const res = (await this.connect.run(
      '/iotapi/status/displacementsensor/serial/detail',
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

  Heavyedit() {
    this.updateStatus = false;
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
    return state;
  }
}
