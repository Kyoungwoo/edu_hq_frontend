import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { SecurityPasswordComponent } from '../security-password/security-password.component';

export class WorkerApprovalItem {
  company_id: number;
  user_manage_session: string;
  user_email: string;
  sharing_terms: number;
  system_terms: number;
  user_name: string;
  user_gender: string;
  user_birth: string;
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
    private modal : ModalController,
    private connect: ConnectService,
    private user: UserService,
    private toast: ToastService
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
      company_id : this.item.company_id,
      user_id : this.item.user_id,
      user_manage_session : this.user.memberAuthToken
    }, {
      parse: ['user_profile_file_data']
    });
    if (res.rsCode === 0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      }
    } else if(res.rsCode === 3009) {
       // 비밀번호 없거나 틀렸음
       this.getPassword();
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  async getPassword() {
    const modal = await this.modal.create({
      component: SecurityPasswordComponent,
      backdropDismiss:false,
      cssClass:"security-password-modal"
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.getItem();
    }
  }

}
