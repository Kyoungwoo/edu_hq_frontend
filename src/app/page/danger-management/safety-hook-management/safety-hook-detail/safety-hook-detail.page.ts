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
    page: 1,
    pageSize: 20,
    date: null,
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
  ) {
    this.form.date = date.today();
  }

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

  //날짜 변경시 조회
  calendar_change() {
    this.get();
  }

  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    console.log("limit_no  =========" + limit_no);
    limit_no === 0 ? this.form.page = 1 : this.form.page = limit_no / 10;

    //상세보기
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
