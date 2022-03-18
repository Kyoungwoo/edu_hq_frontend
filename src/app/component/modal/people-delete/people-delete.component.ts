import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

class userInfo {
  ctgo_construction_id: string;
  company_id: string;
  ctgo_job_position_id: string;
  user_profile_file_data: string;
  user_name: string;
  ctgo_occupation_name: string;
  ctgo_construction_name: string;
  ctgo_job_position_name: string;
  project_name: string;
  account_id: number;
  project_id: 1;
  user_id: number;
  company_name: string;
  ctgo_country_id: number;
  safe_job_name: string;
  work_contract_type: string;
  ctgo_country_name: string;
}
@Component({
  selector: 'app-people-delete',
  templateUrl: './people-delete.component.html',
  styleUrls: ['./people-delete.component.scss'],
})
export class PeopleDeleteComponent implements OnInit {

  @Input() item;

  form = new userInfo();

  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private alert: AlertService,
    public _modal_: ModalController
  ) { }

  ngOnInit() {
    this.get();
  }

  async get() {
    const res = await this.connect.run('/education/attendant/detail',{attendant_user_id:this.item.user_id},{
      parse:['safe_job_name']
    });
    if(res.rsCode === 0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      }
      if(this.form.safe_job_name) {
        this.form.safe_job_name.toString();
      }
    } else {
      this.toast.present({message:res.rsMsg,color:'warning'});
    }
  }
  async attendantDelete() {
    const alert = await this.alert.present({
      message:`${this.form.user_name}님이 출석에서 제외 하시겠습니까?`,
      buttons:[
        {text: '아니요'},
        {text: '예',
          handler: async() => {
            const res = await this.connect.run('/education/attendant/delete', {
              attendant_user_id:this.item.user_id,
              education_safe_id:this.item.education_safe_id
            });
            if(res.rsCode == 0) {
              this.toast.present({message:`${this.form.user_name}님이 출석에서 제외 되엇습니다.`,color:'primary'});
              this._modal_.dismiss(true);
            } else {
              this.toast.present({message:res.rsMsg, color:'warning'});
            }
          }
        }
      ]
    });
    alert.present();
  }

  dismiss() {
    this._modal_.dismiss();
  }

}
