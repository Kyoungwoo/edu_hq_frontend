import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';

@Component({
  selector: 'app-my-education-detail-list',
  templateUrl: './my-education-detail-list.page.html',
  styleUrls: ['./my-education-detail-list.page.scss'],
})
export class MyEducationDetailListPage implements OnInit {

  @Input() education_safe_id:number;

  form:ConnectResult<{
    ctgo_education_safe_name: string,
    create_user_name: string,
    education_safe_state: string,
    education_safe_text: string,
    project_name: string,
    education_safe_manager_names: string,
    safe_education_week_day: string,
    project_id: number,
    create_date: string,
    education_safe_manager_ids: string,
    create_user_id: number,
    ctgo_education_safe_id: number,
    company_id: number,
    ctgo_education_safe_text: string,
    education_safe_target: string,
    ctgo_education_safe_type: string,
    education_safe_time: number,
    education_safe_place: string,
    education_safe_date: string,
    education_safe_start_time: string,
    ctgo_education_safe_title: string,
    user_id: string,
    education_safe_end_time: string,
    company_name: string,
    education_safe_id: number,
    create_date_week_day: string
  }>
  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private _modal: ModalController
  ) { }

  ngOnInit() {
    this.getItem();
  }

  async getItem() {
    const res = await this.connect.run('/education/my/detail',{education_safe_id:this.education_safe_id},{
      parse:['education_safe_manager_names','education_safe_manager_ids']
    });
    if(res.rsCode === 0) {
      this.form = {
        ...res,
        ...this.form
      }
      this.form.rsObj.education_safe_manager_names.toString();
      console.log("this.form",this.form.rsObj);
    } else {
      this.toast.present({message:res.rsMsg, color:'wanring'});
    }
  }
  dismiss() {
    this._modal.dismiss();
  }
}
