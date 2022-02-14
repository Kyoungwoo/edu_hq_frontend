import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';

export class SafetyMeetingItem {
  safety_meeting_resolve: string;
  safety_meeting_content: string;
  safety_meeting_place: string;
  company_id: number;
  safety_meeting_date: string;
  project_id: number;
  project_name: string;
  user_name: string;
  create_date: string;
  company_name: string;

  safety_meeting_type: string;
  safety_meeting_etc: string;
  safety_meeting_file_data: FutItem[] = [];
  file: (File|FileBlob)[] = [];
  file_json: FileJson = new FileJson();
}


@Component({
  selector: 'app-minutes-edit',
  templateUrl: './minutes-edit.page.html',
  styleUrls: ['./minutes-edit.page.scss'],
})
export class MinutesEditPage implements OnInit {

  @Input() item;

  form:SafetyMeetingItem = new SafetyMeetingItem();

  rangeText = '';

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private toast: ToastService,
    public user: UserService,
    private date: DateService
  ) { }

  ngOnInit() {
    this.form.project_name = this.user.userData.belong_data.project_name;
    this.form.company_name = this.user.userData.belong_data.company_name;
    this.form.safety_meeting_date = this.date.today();
    this.form.user_name = this.user.userData.user_name;
    
    if(this.item.safety_meeting_id) {
      this.get();
    } else {
      this.getDefault();
      if(this.item === '안전 및 보건에 관한 협의체 회의록') {
        this.form.safety_meeting_place = '안전';
      } else if(this.item === '노사 협의체 회의록') {
        this.form.safety_meeting_place = '노사';
      } else {
        this.form.safety_meeting_place = '산업';
      }
    }
  }

  async get() { 
    const res = await this.connect.run('/board/safety_meeting/detail', { safety_meeting_id: this.item.safety_meeting_id });
    if(res.rsCode ===  0) {
      this.form = res.rsObj;
    }
  }
  async getDefault() {
    const res = await this.connect.run('/board/safety_meeting/default/get',{
      company_id:this.user.userData.belong_data.company_id,
      project_id:this.user.userData.belong_data.project_id
    });
    if(res.rsCode === 0 ) {
      if(this.form.safety_meeting_place === '안전') {
        this.form.safety_meeting_content = res.rsObj.safety_default;
      } else if(this.form.safety_meeting_place === '노사') {
        this.form.safety_meeting_content = res.rsObj.union_default;
      } else {
        this.form.safety_meeting_content = res.rsObj.health_default;
      }
    }
  }
  dismiss() {
    this._modal.dismiss();
  }
}
