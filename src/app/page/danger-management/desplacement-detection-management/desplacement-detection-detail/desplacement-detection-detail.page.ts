import { async } from '@angular/core/testing';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService, ContentType } from 'src/app/basic/service/core/connect.service';
import { FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';

class DisplacementSensorRes {
  rsCode?: number;
  rsMsg?: string;
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
  rsMap?: Array<DisplacementSensorData>;
}

class DisplacementSensorData {
  index?: number;
  SerialNo: string;
  createdAt: string;
  // 충격감지 기준값
  impactBasis: string;
  // 충격감지 상태값
  impactCd: string;
  // 기울기 감지 기준값
  inclinationBasis: string;
  // 기울기 상태값
  inclinationCd: string;
}
@Component({
  selector: 'app-desplacement-detection-detail',
  templateUrl: './desplacement-detection-detail.page.html',
  styleUrls: ['./desplacement-detection-detail.page.scss'],
})
export class DesplacementDetectionDetailPage implements OnInit {
  @Input() project_id;
  @Input() serial_no;
  @Input() list_data; //parent form data
  @Input() master_company_id;
  form = {
    page: 1,
    pageSize: 20,
    date: null,
    project_id: null,
    serialList: null,
    limit_no: 10,
  };

  res: DisplacementSensorRes = {};

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
      '/device/status/displacementsensor/detail',
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
