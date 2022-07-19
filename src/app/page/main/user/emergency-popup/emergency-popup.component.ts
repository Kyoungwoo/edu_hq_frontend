import { async } from '@angular/core/testing';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService, ConnectResult } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { EmergencyClearPopupComponent } from '../emergency-clear-popup/emergency-clear-popup.component';

class MsdsInfo {
  seq_no:number;
  user_type:string;
  company_id:number;
  project_id:number;
  user_name:string;
  company_name:string;
  user_phone:string;
  sos_user_id:number;
  create_date:string;
  selected:boolean = false;
}

@Component({
  selector: 'app-emergency-popup',
  templateUrl: './emergency-popup.component.html',
  styleUrls: ['./emergency-popup.component.scss'],
})
export class EmergencyPopupComponent implements OnInit {
  @Input() message:string;

  all_state = false;

  res:ConnectResult<MsdsInfo>;

  /** @param selectedList - 체크박스로 선택된 목록 */
  // selectedList = [];

  constructor(
    private _modal_: ModalController,
    private user:  UserService,
    private connect: ConnectService,
    private alert: AlertService,
    private nav: NavService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.get();
  }

  async get(){
    const res = await this.connect.run('/main/sos/get', null, {loading: true});
    switch (res.rsCode) {
      case 0:
        // this.res?.rsMap.map((item) => {item.selected = false;});
        this.res = res;
        break;
      default:
        this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }

  async dismiss() {
    this._modal_.dismiss().then(() => {
      this.nav.navigateRoot('/sos-popup'); 
    });
  }

  async finish() {
    let selected_items = this.res.rsMap.filter((item) => {return item.selected;});
    if(selected_items?.length) this.update(selected_items);
    else this.toast.present({ color: 'warning', message: '종료하실 상황을 먼저 선택해주세요.' });
  }

  async update(items){
    this.alert.present({
      header: '선택하신 비상상황을 종료하시겠습니까?',
      buttons: [
        {
          text: '예',
          handler: async() => {
            const res = await this.connect.run('/main/sos/finish', { sos_user_datas: items }, {loading: true});
            switch (res.rsCode) {
              case 0:
                if(this.all_state) this.all_state = false;
                this.get();
                this.toast.present({ color: 'success', message: '선택하신 SOS상황이 종료되었습니다.' });
                break;
              default:
                this.toast.present({ color: 'warning', message: res.rsMsg });
                break;
            }
          }
        },
        {text:'아니요',role:'cancel'}
      ]
    });
  }

  close(){
    this._modal_.dismiss();
  }

  allClick(){
    this.all_state = !this.all_state;
    if(this.all_state) this.res.rsMap.map((item) => {if(!item.selected) item.selected = true;});
    else this.res.rsMap.map((item) => {if(item.selected) item.selected = false;});
  }

  singleClick(item){
    item.selected = !item.selected;
    this.all_state = false;
  }
}
