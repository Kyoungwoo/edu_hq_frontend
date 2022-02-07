import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

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

  @Input() safety_meeting_id;

  form:SafetyMeetingItem = new SafetyMeetingItem();

  rangeText = '';

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private toast: ToastService,
    public user: UserService,
  ) { }

  ngOnInit() {
    console.log("sdfasfdsdafsdafsdaf",this.safety_meeting_id);
    this.get();
  }

  async get() { 
    const res = await this.connect.run('/board/safety_meeting/detail', { safety_meeting_id: this.safety_meeting_id });
    if(res.rsCode ===  0) {
      this.form = res.rsObj;
      console.log("---------------------------",this.form);
    }
  }
  dismiss() {
    this._modal.dismiss();
  }
}
