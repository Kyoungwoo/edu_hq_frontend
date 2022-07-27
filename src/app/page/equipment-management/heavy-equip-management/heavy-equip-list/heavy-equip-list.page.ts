import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { HeavyEquipEditPage } from '../heavy-equip-edit/heavy-equip-edit.page';

class HeavyEquipInfo {
  ctgo_construction_id: number;
  partner_company_name: string;
  partner_company_id: number;
  master_company_id: number;
  ctgo_construction_name: string;
  ctgo_machinery_id: number;
  machinery_regist_no: string;
  machinery_id: number;
  ctgo_machinery_name: string;
  create_date: string;
  master_company_name: string;
  row_count: number;
  index: number
}

@Component({
  selector: 'app-heavy-equip-list',
  templateUrl: './heavy-equip-list.page.html',
  styleUrls: ['./heavy-equip-list.page.scss'],
})
export class HeavyEquipListPage implements OnInit {

  form = {
    ctgo_machinery_id: 0,
    end_date: this.date.today(),
    master_company_id: (this.user.userData.user_type == 'LH' || this.user.userData.user_type == 'SUPER') ? 0 : this.user.userData.belong_data.master_company_id,
    partner_company_id: 0,
    project_id: this.user.userData.belong_data.project_id,
    search_text: '',
    start_date: this.date.today({ year: -3 }),
    limit_no: 0
  };

  res:ConnectResult<HeavyEquipInfo>;

  selectedList = [];

  constructor(
    private modal: ModalController,
    private toast: ToastService,
    private connect: ConnectService,
    private date: DateService,
    public user: UserService,
    private alert: AlertService
  ) { }


  ngOnInit() {
    if(this.user.userData.user_role === 'PARTNER_HEAD' || this.user.userData.user_role === 'PARTNER_GENERAL') this.form.partner_company_id = this.user.userData.belong_data.company_id;

    setTimeout(() => {
      this.getList();
    }, 300);
  }


  async getList(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    const res = await this.connect.run('/machinery/list', this.form);
    if(res.rsCode === 0 ) {
      this.res = {
        ...this.res,
        ...res
      };
      this.res.rsMap.map((item, i) => {
        item.index = res.rsObj.row_count - this.form.limit_no - i;
      });
    }
    else if (res.rsCode === 1008) {
      this.res = null;
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  async Heavyedit(item?) {
    const modal = await this.modal.create({
      component:HeavyEquipEditPage,
      componentProps:{
        machinery_id: item?.machinery_id,
        list_data: this.form
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
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
              machinery_ids : this.selectedList
            });
            if (res.rsCode === 0) {
              this.getList();
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          }
        }
      ]
    });
  }
  
  /**
   * @function btnPromise(): 권한에 따른 버튼활성화 메서드
   * @param type - 버튼의 type
   * @param user_id - 체크박스가 있는 목록 해당 아이템을 등록한 사람의 user_id
   * @returns true or false
   */
  btnPromise(type, user_id = null){
    let state = false;
    switch(type){
      case 'insert':
        if(this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY') state = true;
        break;
      case 'delete':
        if(this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_role == 'MASTER_HEAD') state = true;
        break;
      case 'delete_check':
        if(this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_role == 'MASTER_HEAD' || user_id == this.user.userData.user_id) state = true;
        break;
    }
    return state;
  }
}
