import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';

export class SupervisionEdit {
  company_phone: string;
  manager_name: string;
  consignee_consent_date: string;
  manager_phone: string;
  company_id: number;
  business_register_no: string;
  company_name: string;
  file: (File | Blob)[] = [];
  file_json: FileJson = new FileJson();
  company_ceo:string;
  project_id:number;
  manager_email: string;
}
@Component({
  selector: 'app-supervision-edit',
  templateUrl: './supervision-edit.page.html',
  styleUrls: ['./supervision-edit.page.scss'],
})
export class SupervisionEditPage implements OnInit {

  @Input() company_id;
  @Input() project_id;
  email:string;
  emailaddress:string;
  directlyInput:string;
  form: SupervisionEdit = new SupervisionEdit();

  updateStatus: boolean = true;
  constructor(
    private connect: ConnectService,
    private alert: AlertService,
    private date: DateService,
    private toast: ToastService,
    private _modal: ModalController,
  ) { }

  ngOnInit() {
    console.log(this.company_id);
    console.log(this.project_id);
    this.form.project_id = this.project_id;
    this.getItem();
  }
  async getItem() {
    const res = await this.connect.run('/project/company/masters/detail', {
      company_id: this.company_id
    }, {
      parse: ['company_file_data']
    });
    if (res.rsCode === 0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      }
    }
  }
  async superSave() {
    if(!this.form.consignee_consent_date) return this.toast.present({ message: '개인정보 처리 위탁 동의를 해주시기 바랍니다.',color:'danger'})
    if(!this.form.company_name) return this.toast.present({ message: '회사명을 입력해주세요.'});
    if(!this.form.business_register_no) return this.toast.present({ message: '사업자등록번호를 입력해주세요.'});
    if(!this.form.company_ceo) return this.toast.present({ message: '대표명을 입력해주세요.'});
    if(this.emailaddress !== '직접입력') {
      this.form.manager_email = this.email + '@' + this.emailaddress;
    } else {
      this.form.manager_email = this.email + '@' + this.directlyInput;
    }

    this.alert.present({
      message: '저장하시겠습니까?',
      buttons: [
        { text: '아니오' },
        {
          text: '예',
          handler: async () => {
            const res = await this.connect.run('/project/company/masters/update', this.form, {});
            if (res.rsCode === 0) {
              this._modal.dismiss();
            }
          }
        }
      ]
    })
  }

  async superDelete() {
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            const res = await this.connect.run('/project/company/masters/delete', {
              company_id: this.company_id,
              project_id: this.project_id
            });
            if (res.rsCode === 0) {
              this._modal.dismiss('Y');
            }
          }
        }
      ]
    })
  }

  agreement() {
    this.form.consignee_consent_date = this.date.today({},'SECOND');
  }
  superupdate() {
    let spliteamil = this.form.manager_email.split('@');
    this.email = spliteamil[0];
    this.emailaddress = spliteamil[1];
    console.log(this.email)
    this.updateStatus = false;
  }

}
