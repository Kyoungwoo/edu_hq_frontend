import { async } from '@angular/core/testing';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService, ContentType } from 'src/app/basic/service/core/connect.service';
import { FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';

class SafetyHookCdData {
  craneHeightCd: string;
  createdAt: string;
}
class SafetyHookCdDataRes {
  rsCode?: number;
  rsMsg?: string;
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
  rsMap?: Array<SafetyHookCdData>;
}
class SafetyHookSensorData {
  index?: number;
  id?: Number;
  deviceType?: string;
  deviceId?: string;
  safetyHookCd?: string;
  colt_dt?: string;
}



@Component({
  selector: 'app-safety-hook-detail',
  templateUrl: './safety-hook-detail.page.html',
  styleUrls: ['./safety-hook-detail.page.scss'],
})
export class SafetyHookDetailPage implements OnInit {
  @Input() project_id;
  @Input() master_company_id;
  @Input() serial_no;
  @Input() list_data;
  @Input() companyName;
  @Input() userName;


  form = {
    project_id: null,
    serialList: null,
    limit_no : 0,
    cnt_date: this.date.today(),
  };

  res: ConnectResult<SafetyHookSensorData>;

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
  ) {}

  ngOnInit() {
    this.form = {
      ...this.form,
      project_id: this.project_id,
      serialList: this.serial_no,
    };
    this.master_company_id = this.list_data.master_company_id;
    if (this.serial_no) {
      this.updateStatus = true;
      this.get();
    } else {
      this.updateStatus = false;
    }
  }

  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    //????????????
    const res = (await this.connect.run(
      '/iotapi/status/safetyhooksensor/serial/detail',
      this.form,
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
      message: '?????? ??????????????????????',
      buttons: [
        {
          text: '?????????',
        },
        {
          text: '???',
          handler: async () => {
            this._modal.dismiss();
          },
        },
      ],
    });
  }
  /**
   * @function btnPromise(): ????????? ?????? ??????????????? ?????????
   * @param type - ????????? type
   * @returns true or false
   */
  btnPromise(type) {
    let state = false;
    return true;
  }
}
