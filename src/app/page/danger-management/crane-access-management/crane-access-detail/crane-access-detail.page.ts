import { async } from '@angular/core/testing';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  ConnectService,
  ContentType,
} from 'src/app/basic/service/core/connect.service';
import { FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';

class CraneHeightCdData {
  craneHeightCd: string;
  createdAt: string;
}
class CraneHeightCdDataRes {
  rsCode?: number;
  rsMsg?: string;
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
  rsMap?: Array<CraneHeightCdData>;
}

@Component({
  selector: 'app-crane-access-detail',
  templateUrl: './crane-access-detail.page.html',
  styleUrls: ['./crane-access-detail.page.scss'],
})
export class CraneAccessDetailPage implements OnInit {
  @Input() project_id;
  @Input() serial_no;
  @Input() list_data;
  @Input() master_company_data;


  form = {
    page: 1,
    pageSize: 20,
    date: null,
    project_id: null,
    serialList: null,
  };

  res: CraneHeightCdDataRes = {};

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
    master_company_id: this.list_data.master_company_id;
    if (this.serial_no) {
      this.updateStatus = true;
      this.get();
    } else {
      this.updateStatus = false;
    }
    console.log(this.form);
  }

  async get() {
    //상세보기
    const res = (await this.connect.run(
      '/device/status/craneheightsensor/detail',
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

// plan_file_data: FutItem[] = [];
// regist_file_data: FutItem[] = [];
// rental_file_data: FutItem[] = [];
// etc_file_data: FutItem[] = [];

// plan_file: (File | Blob)[] = [];
// regist_file: (File | Blob)[] = [];
// rental_file: (File | Blob)[] = [];
// etc_file: (File | Blob)[] = [];

// plan_json : FileJson = new FileJson();
// regist_json : FileJson = new FileJson();
// rental_json : FileJson = new FileJson();
// etc_json : FileJson = new FileJson();
