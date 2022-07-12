import { WorkWriteEditPage } from './../work-write-edit/work-write-edit.page';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-write-target',
  templateUrl: './work-write-target.page.html',
  styleUrls: ['./work-write-target.page.scss'],
})
export class WorkWriteTargetPage implements OnInit {

  form = {
    limit_no:0
  }
  
  res:ConnectResult<{
    attendant_count:number,
    index:number,
    safety_meeting_date:string,
    safety_meeting_date_week_day:string,
    safety_meeting_id:number,
    safety_meeting_place:string,
    safety_meeting_type:string,
    row_count:number
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
    this.res = await this.connect.run('/board/safety_meeting/report/new/list', this.form);
    if(this.res.rsCode === 0) {
      console.log("this.res",this.res);
      this.res.rsMap.map((item,i) => {
        item.index = this.res.rsObj.row_count - this.form.limit_no - i;
        item.safety_meeting_date = `${item.safety_meeting_date} (${this.date.day(item.safety_meeting_date)[0]})`;
      });
    } 
    else if(this.res.rsCode === 1008) {
      // 암것도 안함
    }
    else { 
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }
  
  async edit(item) {
    await this._modal.dismiss();
    
    const modal = await this._modal.create({
      component: WorkWriteEditPage,
      componentProps:{
        item:item
      }
    })
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.get();
    }
  }
}
