import { CCTVInfo } from './../monitor-cctv-list/monitor-cctv-list.page';
import { AlertService } from './../../../basic/service/ionic/alert.service';
import { ModalController } from '@ionic/angular';
import { ConnectService, ConnectResult } from './../../../basic/service/core/connect.service';
import { UserService } from './../../../basic/service/core/user.service';
import { ToastService } from './../../../basic/service/ionic/toast.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor-cctv-edit',
  templateUrl: './monitor-cctv-edit.page.html',
  styleUrls: ['./monitor-cctv-edit.page.scss'],
})
export class MonitorCctvEditPage implements OnInit {
  @Input() cctv_id:number = null;
  @Input() type:string = '';
  @Input() item:any;

  form = {
    cctv_id: 0,
    cctv_area_name: '',
    cctv_channel_no: '',
    cctv_ip: '',
    cctv_nvr_id: '',
    cctv_nvr_password: '',
    cctv_port: '',
    cctv_use_state: 0,
    master_company_id: 0,
    master_company_name: '',
    project_id: 0,
    project_name: ''
  }

  permission = {
    edit_btn: false,
    input_disabled: false
  }

  constructor(
    private alert: AlertService,
    private _modal: ModalController,
    private connect: ConnectService,
    public user: UserService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    if(this.cctv_id){
      this.get();
    } else {
      this.form.project_id = this.item.project_id;
      this.form.master_company_id = this.item.master_company_id;
    }

    if(this.type === 'update') this.permission.edit_btn = true;
    else this.permission.input_disabled = true;
  }

  /**
   * @function get(): CCTV상세정보를 가져옵니다.
   */
   async get() {
    const res = await this.connect.run('/cctv/detail', {cctv_id: this.cctv_id});
    if(res.rsCode === 0 ) {
      this.form = res.rsObj;
    }
    else if (res.rsCode === 1008) {
      // this.res = null;
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  /**
   * @function save(): CCTV정보등록 OR 수정
   */
  async save(){
    let msg:string = this.validation();
    if(msg) return this.toast.present({message: msg, color: 'warning'});

    const alert = await this.alert.present({
      message:'저장 하시겠습니까?',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler:async() => {
            // console.log(this.form);
            const res = await this.connect.run(`/cctv/${this.type}`, this.form);
            if(res.rsCode === 0 ) {
              this._modal.dismiss(true);
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
   * @function delete(): CCTV정보등록 OR 삭제
   */
   async delete(){
    const alert = await this.alert.present({
      message:'삭제 하시겠습니까?',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler:async() => {
            const res = await this.connect.run('/cctv/delete', {cctv_ids: [this.cctv_id]});
            if(res.rsCode === 0 ) {
              this._modal.dismiss(true);
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
   * @function validation(): CCTV상세정보 유효성검사
   */
  validation(){
    if(!this.form.project_id) return '현장을 선택해주세요.';
    if(!this.form.master_company_id) return '원청사를 선택해주세요.';
    if(!this.form.cctv_area_name) return '설치장소명을 입력해주세요.';
    if(!this.form.cctv_ip) return 'CCTV IP를 입력해주세요.';
    if(!this.form.cctv_port) return 'Port를 입력해주세요.';
    if(!this.form.cctv_channel_no) return 'Channel No.를 입력해주세요.';
    if(!this.form.cctv_nvr_id) return 'NVR ID를 입력해주세요.';
    if(!this.form.cctv_nvr_password) return 'NVR PW를 입력해주세요.';
    return null;
  }
}
