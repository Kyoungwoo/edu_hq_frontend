import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';


export class HeavyEquipDetail {
    ctgo_construction_id: number;
    partner_company_name: string;
    rental_start_date: string;
    ctgo_construction_name: string;
    ctgo_machinery_id: number;
    machinery_id: number;
    project_name: string;
    master_company_name: string;
    rental_end_date: string;
    project_id: number;
    partner_company_id: number;
    master_company_id: number;
    rental_price: number;
    machinery_regist_no: string;
    rental_company_name: string;
    ctgo_machinery_name: string;
    file: (File | Blob)[] = [];
    file_json: FileJson = new FileJson();
    plan_file_data: FutItem[] = [];
    regist_file_data: FutItem[] = [];
    rental_file_data: FutItem[] = [];
    etc_file_data: FutItem[] = [];
}

@Component({
  selector: 'app-heavy-equip-edit',
  templateUrl: './heavy-equip-edit.page.html',
  styleUrls: ['./heavy-equip-edit.page.scss'],
})
export class HeavyEquipEditPage implements OnInit {

  @Input() machinery_id;

  updateStatus: boolean = true;


  form:HeavyEquipDetail = new HeavyEquipDetail();
  selectList = [];

  constructor(
    private connect: ConnectService,
    private alert: AlertService,
    private date: DateService,
    private toast: ToastService,
    private user: UserService,
    private _modal: ModalController,
  ) { }

  ngOnInit() {
    this.get();
  }

  async get() { //상세보기
    const res = await this.connect.run('/machinery/get', { 
      machinery_id: this.machinery_id 
    }, { loading: true, parse: ['etc_file_data','rental_file_data','regist_file_data','plan_file_data'] });
    if(res.rsCode ===  0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      }
    }
  }

  Heavyupdate() {
    this.updateStatus = false;
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
              machinery_ids : [this.machinery_id]
            });
            if (res.rsCode === 0) {
              this._modal.dismiss('Y');
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          }
        }
      ]
    })
  }

  async Heavysave() {
    this.alert.present({
      message: '저장하시겠습니까?',
      buttons: [
        { text: '아니오' },
        {
          text: '예',
          handler: async () => {
            const res = await this.connect.run('/machinery/update', this.form, {});
            if (res.rsCode === 0) {
              this._modal.dismiss();
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          }
        }
      ]
    })
  }
}
