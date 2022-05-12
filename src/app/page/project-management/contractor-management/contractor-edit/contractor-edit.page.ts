import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';

// export class SupervisionEdit {
//   company_phone: string;
//   manager_name: string;
//   consignee_consent_date: string;
//   manager_phone: string;
//   company_id: number;
//   business_register_no: string;
//   company_name: string;
//   company_file_data: FutItem[] = [];
//   file: (File | Blob)[] = [];
//   file_json: FileJson = new FileJson();
//   company_ceo: string;
//   project_id:number;
//   manager_email: string;
// }

export class CompanyContractData {
  ctgo_construction_id:number = 0; //계약공종
  ctgo_construction_name:string = '';
  contract_name:string = ''; //계약명
  contract_start_date:string = ''; //계약기간~
  contract_end_date:string = ''; //~계약기간
  contract_amount:string = ''; //계약금액
  // manager_user_id:number = 0; //협력사소장
  // manager_user_name:string = '';
  master_company_id:number = 0; //원청사ID
  master_company_name:string = '';
  project_id:number = 0; //현장ID
  project_name:string = ''; //현장 이름
  manager_name: string; // 담당자 이름
  manager_phone: string; // 담당자 전화번호
} 

export class SupervisionEdit {
  business_register_no: string;
  company_ceo: string;
  company_id: number;
  company_name: string;
  consignee_consent_date: string;
  manager_email: string;
  company_contract_data: CompanyContractData[] = [];
  company_file_data: FutItem[] = [];
  file: (File | Blob)[] = [];
  file_json: FileJson = new FileJson();
}

@Component({
  selector: 'app-contractor-edit',
  templateUrl: './contractor-edit.page.html',
  styleUrls: ['./contractor-edit.page.scss'],
})
export class ContractorEditPage implements OnInit {

  permission = {
    edit: false,
    agree: false
  }
  viewMode:boolean = false;

  @Input() company_id;
  @Input() project_id;

  updateStatus: boolean = true;


  form: SupervisionEdit = new SupervisionEdit();
  
  termsRes:ConnectResult<{
    terms_title: string;
    create_date: string;
    update_date: string;
    terms_text:string;
  }>
  
  email:string;
  emailaddress:string;
  directlyInput:string;

  selectList = [];

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
    // this.form.project_id = this.project_id;
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
  //   if(company_contract_type === 'LH'
  //   || company_contract_type === '원청사') {
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

    if(user_role === 'LH_HEAD') this.permission.edit = true;
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
  
  async contSave() {
    /* if(!this.form.consignee_consent_date){
      if(this.user.userData.user_type !== 'LH') return this.toast.present({ message: '개인정보 처리 위탁 동의를 해주시기 바랍니다.',color:'danger' });
    } */
    if(!this.form.company_name) return this.toast.present({ message: '회사명을 입력해주세요.'});
    if(!this.form.business_register_no) return this.toast.present({ message: '사업자등록번호를 입력해주세요.'});
    if(!this.form.company_ceo) return this.toast.present({ message: '대표명을 입력해주세요.'});
    // if(!this.form.company_file_data.length) return this.toast.present({ message: '파일을 입력해주세요.'});
 
    
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
  
  async contDelete() {
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
  
  contUpdate() {
    //나중에 정규식으로 고침
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

  addCompanyContractData() {
    const { user_role, belong_data } = this.user.userData;
    if(user_role === 'LH_HEAD') {
      this.form.company_contract_data.push({
        ...new CompanyContractData(),
        project_id: belong_data.project_id
      });
    } 
    else if(user_role === 'MASTER_HEAD' && belong_data.company_contract_type === '원청사') {
      this.form.company_contract_data.push({
        ...new CompanyContractData(),
        project_id: belong_data.project_id,
        // master_company_id: this.master_company_id
      });
    }
  }
  removeCompanyContractData() {
    this.selectList.forEach(item => {
      const index = this.form.company_contract_data.indexOf(item);
      this.form.company_contract_data.splice(index, 1);
    });
    this.selectList = [];
  }
}
