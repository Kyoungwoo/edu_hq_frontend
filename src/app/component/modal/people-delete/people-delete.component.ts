import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
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
  @Input() menu_state;
  @Input() my_state;
  @Input() type: 'EDU' | 'SAFE';

  form = new userInfo();
  method:string = '';
  params:any = null;

  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private alert: AlertService,
    public _modal_: ModalController,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
    this.get();

    switch(this.type){
      case 'EDU':
        this.method = '/education/attendant/delete';
        this.params = {attendant_user_id:this.item.user_id,education_safe_id:this.item.education_safe_id};
        break;
      case 'SAFE':
        this.method = '/board/safety_meeting/attendant/delete';
        this.params = {attendant_user_id:this.item.user_id,safety_meeting_id:this.item.safety_meeting_id};
        break;
    }
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
      message:`${this.form.user_name}?????? ???????????? ?????? ???????????????????`,
      buttons:[
        {text: '?????????'},
        {text: '???',
          handler: async() => {
            const res = await this.connect.run(this.method, this.params);
            if(res.rsCode == 0) {
              this.toast.present({message:`${this.form.user_name}?????? ???????????? ?????? ???????????????.`,color:'primary'});
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
