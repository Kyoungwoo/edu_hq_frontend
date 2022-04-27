import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
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
  company_ceo: string;
  project_id: number;
  manager_email: string;
}
@Component({
  selector: 'app-supervision-edit',
  templateUrl: './supervision-edit.page.html',
  styleUrls: ['./supervision-edit.page.scss'],
})
export class SupervisionEditPage implements OnInit {

  permission = {
    edit: false,
    agree: false
  }
  viewMode:boolean = false;

  @Input() company_id;
  @Input() project_id;
  email: string;
  emailaddress: string;
  directlyInput: string;
  form: SupervisionEdit = new SupervisionEdit();
  termsRes:ConnectResult<{
    terms_title: string;
    create_date: string;
    update_date: string;
    terms_text:string;
  }>

  updateStatus: boolean = true;
  constructor(
    private connect: ConnectService,
    private alert: AlertService,
    private date: DateService,
    private toast: ToastService,
    private _modal: ModalController,
    public user: UserService,
  ) { }

  ngOnInit() {
    this.getPermission();
    this.form.project_id = this.project_id;
    this.getTerms();
    if(this.company_id) {
      this.viewMode = true;
      this.getItem();
    } else {
      this.viewMode = false;
    }
  }

  // getPermission() {
  //   const company_contract_type = this.user.userData.belong_data.company_contract_type;
  //   if(company_contract_type === 'LH' || company_contract_type === '감리사') {
  //     this.permission.edit = true;
  //   } else {
  //     this.permission.edit = false;
  //   }
  // }

  getPermission() {
    const { user_role } = this.user.userData;
    if(user_role === 'LH_HEAD') {
      this.permission.agree = false;
    } 
    else if(user_role === 'MASTER_HEAD') {
      this.permission.agree = false;
    } else if(user_role === 'PARTNER_HEAD'){
      this.permission.agree = true;
    } else {
      this.permission.agree = false;
    }

    const company_contract_type = this.user.userData.belong_data.company_contract_type;
    if(company_contract_type === 'LH' || company_contract_type === '감리사') {
      this.permission.edit = true;
    } else {
      this.permission.edit = false;
    }
  }

  async getItem() {
    const res = await this.connect.run('/project/company/masters/detail', {
      company_id: this.company_id
    }, {
      parse: ['company_file_data']
    });
    if (res.rsCode === 0) {
      this.form = res.rsObj;
    }
  }
  async superSave() {
    // if(!this.form.consignee_consent_date) return this.toast.present({ message: '개인정보 처리 위탁 동의를 해주시기 바랍니다.',color:'warning'})
    // if(!this.form.company_name) return this.toast.present({ message: '업체명을 입력해주세요.'});
    // if(!this.form.business_register_no) return this.toast.present({ message: '사업자등록번호를 입력해주세요.'});
    // if(!this.form.company_ceo) return this.toast.present({ message: '대표명을 입력해주세요.'});
   
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
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
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
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
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
    if(this.form.manager_email){
      let spliteamil = this.form.manager_email.split('@');
      this.email = spliteamil[0];
      this.emailaddress = spliteamil[1];
    }
    this.updateStatus = false;
  }
  async getTerms() {
    this.termsRes = await this.connect.run('/support/terms/get',{terms_title:'개인정보 처리방침'});
    //아무작동안함
    if(this.termsRes.rsCode === 0) {
    }
  }
}
