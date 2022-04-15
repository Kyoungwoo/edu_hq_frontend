import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { SafetyEducationResultEditPage } from '../safety-education-result-edit/safety-education-result-edit.page';

@Component({
  selector: 'app-new-write-target',
  templateUrl: './new-write-target.page.html',
  styleUrls: ['./new-write-target.page.scss'],
})
export class NewWriteTargetPage implements OnInit {

  form = {
    limit_no:0
  }
  
  res:ConnectResult<{
    index:number;
    ctgo_education_safe_name:string;
    education_safe_date:string;
    ctgo_education_safe_id:number;
    ctgo_education_safe_title:string;
    ctgo_education_safe_text:string;
    education_safe_target:string;
    education_safe_id:number;
    ctgo_education_safe_type:string;
    education_safe_instructor:string;
    education_safe_place:string;
    attendant_count:number;
    row_count:number;
  }>;

  constructor(
    private _modal: ModalController,
    private connect: ConnectService,
    private toast: ToastService,
    private date:DateService
  ) { }

  ngOnInit() {
    this.get();
  }

  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    this.res = await this.connect.run('/education/report/new/list',this.form);
    if(this.res.rsCode === 0) {
      console.log("this.res",this.res);
      this.res.rsMap.map((item,i) => {
        item.index = this.res.rsObj.row_count - this.form.limit_no - i;
        item.education_safe_date = `${item.education_safe_date} (${this.date.day(item.education_safe_date)[0]})`;
      });
    } else { 
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }
  
  async edit(item) {
    const modal = await this._modal.create({
      component: SafetyEducationResultEditPage,
      componentProps:{
        item:item
      }
    })
    modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
    if(data) {
      this.get();
    }
  }
}
