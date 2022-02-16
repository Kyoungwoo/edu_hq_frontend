import { Component, Input, OnInit } from '@angular/core';
import { ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';

export class WorkerApprovalItem {
  company_id: number;
  user_manage_session: string;
  user_email: string;
  sharing_terms: number;
  system_terms: number;
  user_name: string;
  user_gender: string;
  ctgo_country_name_kr: string;
  account_id: string;
  user_id: number;
  gps_terms: number;
  user_phone: string;
  ctgo_country_id: number;
  personal_terms: number;
  sensitive_terms: number;
  file_data: FutItem[] = [];
  file: (File|FileBlob)[] = [];
  file_json: FileJson = new FileJson();

};

@Component({
  selector: 'app-worker-approval-edit',
  templateUrl: './worker-approval-edit.page.html',
  styleUrls: ['./worker-approval-edit.page.scss'],
})
export class WorkerApprovalEditPage implements OnInit {

  @Input() item;

  form = new WorkerApprovalItem();
  validator = new Validator(new WorkerApprovalItem()).validator;

  menu:number = 1;
  company_id: any;
  user_id: any;
  constructor(
    private connect: ConnectService,
  ) { }

  ngOnInit() {
    this.getItem();
  }

  public async overlapEmail() { //이메일
    const { user_email } = this.form;
    const res = await this.connect.run('/approval/worker/overlap/email', { user_email });
    this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
  }

  async getItem() {
    const res = await this.connect.run('/approval/worker/basic/detail', {
      company_id: this.company_id,
      user_id : this.user_id 
    }, {
      parse: ['user_profile_file_data']
    });
    if (res.rsCode === 0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      }
    }
  }

}
