import { templateJitUrl } from '@angular/compiler';
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
import { SafetyHookDetailPage } from '../safety-hook-detail/safety-hook-detail.page';

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

class SafetyHookRes {
  rsCode: number;
  rsMsg: string;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  rsMap: Array<SafetyHookData>;
}

class SafetyHookData {
  index?: number;
  companyName?:string;
  userName?:string;
  SerialNo: string;
  craneHeightCd: string;
  createdAt: string;
}
@Component({
  selector: 'app-safety-hook-list',
  templateUrl: './safety-hook-list.page.html',
  styleUrls: ['./safety-hook-list.page.scss'],
})
export class SafetyHookListPage implements OnInit {
  form = {
    //ctgo_machinery_id: 0,
    //end_date: this.date.today(),
    //start_date: this.date.today({ year: -3 }),
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
    ctgo_machine_serial_id: 0,
    project_id: this.user.userData.belong_data.project_id,
    project_name: this.user.userData.belong_data.project_name,
    search_text: '',
    limit_no: 0,
  };

  res: ConnectResult<SerialInfo>;
  hookRes: SafetyHookRes;

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
    this.hookRes= null;
    const res = await this.connect.run('/serial/user/list', this.form, {
      parse: ['user_data'],
    });
    console.log(res);
    const serialNameList = res.rsMap
      .filter((item) => item.ctgo_machine_serial_name === '안전고리')
      .map((item) => item.serial_bicon);
    const hookRes: SafetyHookRes = (await this.connect.run(
      '/device/status/safetyhook/serial',
      {
        project_id: this.form.project_id,
        serialList: serialNameList.join(','),
        page: this.form.limit_no,
        pageSize: 20,
      },
      { contentType: ContentType.ApplicationJson, iot: true }
    )) as any;


    if (res.rsCode === 0 && hookRes.rsCode === 0) {
      this.res = {...this.res, ...res, };
      this.hookRes = { ...this.hookRes, ...hookRes };
      this.hookRes.rsMap.map((item, i) => {
        item.index = hookRes.totalItems - this.form.limit_no - i;
        // res.rsMap.filter((resItem) => {resItem.serial_bicon === item.SerialNo} ) 
        const assingedDataList = res.rsMap
          .filter((resItem) => resItem.serial_bicon === item.SerialNo)
          .map((resItem) => resItem.assign_data);
        item.companyName = assingedDataList[0].split("/")[0];
        item.userName =assingedDataList[0].split("/")[1];

          
      });
      this.res.rsMap.map((item, i) => {
        item.index = res.rsObj.row_count - this.form.limit_no - i;
      });
    } else if (res.rsCode === 1008) {
      this.res = null;
      this.hookRes = null;
    } else {
      this.res = null;
      this.hookRes = null;
      ; //this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  async Hookedit(item?) {
    const modal = await this.modal.create({
      component: SafetyHookDetailPage,
      componentProps: {
        //machinery_id: item?.machinery_id,
        project_id: this.form.project_id,
        project_name: this.form.project_name,
        serial_no: item?.SerialNo,
        companyName:item.companyName,
        userName:item.userName,        
        list_data: this.form,
      },
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.getList();
    }
  }

  // async Heavydelete() {
  //   const alert = await this.alert.present({
  //     message: '삭제 하시겠습니까?',
  //     buttons: [
  //       { text: '아니요' },
  //       {
  //         text: '예',
  //         handler: async () => {
  //           const res = await this.connect.run('/machinery/delete', {
  //             machinery_ids: this.selectedList,
  //           });
  //           if (res.rsCode === 0) {
  //             this.getList();
  //           } else {
  //             this.toast.present({ color: 'warning', message: res.rsMsg });
  //           }
  //         },
  //       },
  //     ],
  //   });
  // }

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