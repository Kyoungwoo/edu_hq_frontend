import { MonitorCctvEditPage } from './../monitor-cctv-edit/monitor-cctv-edit.page';
import { ConnectService, ConnectResult } from './../../../basic/service/core/connect.service';
import { UserService } from './../../../basic/service/core/user.service';
import { ToastService } from './../../../basic/service/ionic/toast.service';
import { ModalController } from '@ionic/angular';
import { AlertService } from './../../../basic/service/ionic/alert.service';
import { Component, OnInit } from '@angular/core';

export class CCTVInfo {
  cctv_id:number;
  cctv_area_name:string;
  cctv_channel_no:string;
  cctv_ip:string;
  cctv_nvr_id:string;
  cctv_nvr_password:string;
  cctv_port:string;
  cctv_use_state:number;
  master_company_id:number;
  master_company_name:string;
  row_count: number;
}

@Component({
  selector: 'app-monitor-cctv-list',
  templateUrl: './monitor-cctv-list.page.html',
  styleUrls: ['./monitor-cctv-list.page.scss'],
})
export class MonitorCctvListPage implements OnInit {
  form = {
    project_id: this.user.userData.belong_data.project_id,
    master_company_id: this.user.userData.belong_data.master_company_id ? this.user.userData.belong_data.master_company_id : 0,
    search_text: '',
    limit_no: 0
  }
  res:ConnectResult<CCTVInfo>;

  permission = {
    company_id: false
  }

  selectedList = [];
  constructor(
    private alert: AlertService,
    private _modal: ModalController,
    private connect: ConnectService,
    public user: UserService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    const { belong_data } = this.user.userData;

    this.form.project_id = belong_data.project_id;

    if(belong_data.company_contract_type === 'LH'
    || belong_data.company_contract_type === '감리사') {
      this.permission.company_id = true;
      this.form.master_company_id = 0;
    } else {
      this.permission.company_id = false;
      this.form.master_company_id = belong_data.master_company_id;
    }

    this.get();
  }

  /**
   * @function edit(): CCTV살세정보 OR 수정하기
   */
  async edit(method = '', cctv_id = null) {
    const modal = await this._modal.create({
      component:MonitorCctvEditPage,
      componentProps: {
        cctv_id: cctv_id || 0,
        type: method,
        item: this.form
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      // 모바일은 편집이 없어서 이렇게해도 충분함. 있으면 추가 코드 작성을 해야함.
      this.get();
    }
  }

  /**
   * @function delete(): CCTV정보등록 OR 삭제
   */
   async delete(){
    let delete_arr =[];
    this.selectedList.map((item) => {delete_arr.push(item.cctv_id);});

    const alert = await this.alert.present({
      message:'삭제 하시겠습니까?',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler:async() => {
            const res = await this.connect.run('/cctv/delete', {cctv_ids: delete_arr});
            if(res.rsCode === 0 ) {
              this.get();
            }
            else if (res.rsCode === 1008) {
              // this.res = null;
            }
            else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * @function get(): CCTV목록정보를 가져옵니다.
   */
  async get() {
    const res = await this.connect.run('/cctv/list', this.form);
    if(res.rsCode === 0 ) {
      this.res = res;
    }
    else if (res.rsCode === 1008) {
      this.res = null;
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  /**
   * @function changeUse(): CCTV표출정보를 변경합니다.
   */
  async changeUse(item){
    const res = await this.connect.run('/cctv/usestate/update', item);
    if(res.rsCode === 0) {
      
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }
}
