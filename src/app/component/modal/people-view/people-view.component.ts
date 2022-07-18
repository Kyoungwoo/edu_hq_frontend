import { Component, Input, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { fadeInAnimation } from 'src/app/basic/basic.animation';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FutItem } from 'src/app/basic/service/core/file.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

export class userInfo {
  ctgo_job_position_name_kr: string;
  ctgo_construction_id: number;
  safe_job_data: string;
  ctgo_job_position_name_en: string;
  company_id: number;
  ctgo_job_position_id: number;
  user_name: string;
  ctgo_job_position_name_ch: string;
  ctgo_construction_name: string;
  project_name: string;
  account_id: string;
  ctgo_job_position_name_vi: string;
  user_id: number;
  project_id: number;
  company_name: string;
  safe_job_name_ch: string;
  safe_job_name_en: string;
  safe_job_name_kr: string;
  safe_job_name_vi: string;
  user_profile_file_data:FutItem[] = [];
  ctgo_country_name:string;
  work_contract_type:string;
}

@Component({
  selector: 'app-people-view',
  templateUrl: './people-view.component.html',
  styleUrls: ['./people-view.component.scss'],
  animations: [fadeInAnimation]
})


export class PeopleViewComponent implements OnInit {

  @Input() type:string;
  @Input() education_safe_manager_id:number

  menu:boolean = false;

  res:userInfo = new userInfo();
  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private _modal: ModalController,
    private _popover: PopoverController,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
    console.log(this.type);
    this.getInfo();
  }

  async getInfo() {
    const res = await this.connect.run('/category/certify/manager/get',{user_id:this.education_safe_manager_id},{
      parse:['user_profile_file_data','safe_job_name_kr']
    });
    if(res.rsCode === 0) {
      this.res = {
        ...this.res,
        ...res.rsObj
      }
      this.res.safe_job_name_kr?.toString();
    } else {
      this.toast.present({message:res.rsMsg, color:'warning'});
    }
  }

  dismiss() {
    this._popover.dismiss();
  }
}
