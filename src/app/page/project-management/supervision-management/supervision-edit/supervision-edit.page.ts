import { RegexService } from './../../../../basic/service/util/regex.service';
import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';

export class CompanyContractData {
  ctgo_construction_id:number = 0; //계약공종
  ctgo_construction_name:string = '';
  contract_name:string = ''; //계약명
  contract_start_date:string = ''; //계약기간~
  contract_end_date:string = ''; //~계약기간
  contract_amount:string = ''; //계약금액
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
  company_contract_type: string = '감리사';
  consignee_consent_date: string;
  manager_email: string;
  company_contract_data: CompanyContractData[] = [];
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
  isNew:boolean = false;

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
    private regex: RegexService
  ) { }

  ngOnInit() {
    this.getPermission();
    this.getTerms();
    console.log("company - ",this.company_id);
    if(this.company_id) {
      this.viewMode = true;
      // this.isNew = false;
      this.getItem();
    } else {
      this.viewMode = false;
      // this.isNew = true;
    }
  }

  getPermission() {
    const { user_role } = this.user.userData;
    if(user_role === 'LH_HEAD') this.permission.edit = true;
    if(user_role === 'SUPER_HEAD') this.permission.edit = true;
  }
  
  async getItem() {
    const res = await this.connect.run('/project/company/masters/detail', {
      company_id: this.company_id
    }, {
      parse: ['company_file_data']
    });
    if (res.rsCode === 0) {
      this.form = res.rsObj;
      this.form.company_contract_data = res.rsMap;
    }
  }
  
  async contSave() {
    if(!this.valid()) return;
    this.alert.present({
      message: '저장하시겠습니까?',
      buttons: [
        { text: '아니오' },
        {
          text: '예',
          handler: async () => {
            const res = await this.connect.run('/project/company/masters/insert', this.form, {});
            if (res.rsCode === 0) {
              this._modal.dismiss('Y');
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          }
        }
      ]
    });
  }
  
  contEdit() {
    this.viewMode = false;
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
  
  async contUpdate() { //수정
    if(!this.valid()) return;

    this.alert.present({
      message:'수정 하시겠습니까?',
      buttons:[
        { text:'아니요' },
        {
          text:'예',
          handler: async() => {
            const res = await this.connect.run('/project/company/masters/update', this.form);
            if(res.rsCode === 0) {
              this._modal.dismiss('Y');
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          }
        }
      ]
    });
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
  async getItem_Map() {
    const res = await this.connect.run('/project/company/masters/detail', {
      company_id: this.company_id
    });
    if (res.rsCode === 0) {
      this.form.company_contract_data = res.rsMap;
    }
  }
  
  removeCompanyContractData(item) {
    let dataSet = {
      project_id: item.project_id,
      company_id:this.company_id
    }

    this.alert.present({
      message:'삭제 하시겠습니까?',
      buttons:[
        { text:'아니요' },
        {
          text:'예',
          handler: async() => {
            const res = await this.connect.run('/project/company/contract/delete', dataSet);
            if(res.rsCode === 0) {
              this.getItem_Map();
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          }
        }
      ]
    });
  }

  private valid():boolean {
    // if(this.permission.agree) {
    //   if(!this.form.consignee_consent_date) { this.toast.present({ message: '개인정보 처리 위탁 동의를 해주시기 바랍니다.',color:'warning' }); return false };
    // }
    if(!this.form.company_name) { this.toast.present({ message: '업체명을 입력해주세요.',color:'warning'}); return false };
    if(!this.form.business_register_no) { this.toast.present({ message: '사업자등록번호 10자리를 입력해주세요.',color:'warning'}); return false; };
    if(!this.form.company_ceo) { this.toast.present({ message: '대표명을 입력해주세요.',color:'warning'}); return false; };

    if(!this.form.company_contract_data?.length) { this.toast.present({ message: '계약정보를 입력해주세요.',color:'warning'}); return false; }
    for(let i = 0; i < this.form.company_contract_data.length; i++) {
      const company_contract_data = this.form.company_contract_data[i];
      
      if(!company_contract_data.project_id) { this.toast.present({ message: '현장을 입력해주세요.',color:'warning'}); return false; };
      
      // if(!company_contract_data.master_company_id) { this.toast.present({ message: '원청사를 입력해주세요.',color:'warning'}); return false; };

      // if(!company_contract_data.ctgo_construction_id) { this.toast.present({ message: '계약공종을 입력해주세요.',color:'warning'}); return false; };

      if(!company_contract_data.contract_name) { this.toast.present({ message: '계약명을 입력해주세요.',color:'warning'}); return false; };
      
      if(!company_contract_data.contract_start_date) { this.toast.present({ message: '계약기간을 입력해주세요.',color:'warning'}); return false; };

      if(!company_contract_data.contract_end_date) { this.toast.present({ message: '계약기간을 입력해주세요.',color:'warning'}); return false; };

      if(!company_contract_data.contract_amount) { this.toast.present({ message: '계약금액을 입력해주세요.',color:'warning'}); return false; }
      // else if(!this.regex.number.test(company_contract_data.contract_amount)) { this.toast.present({ message: '계약금액은 숫자만 입력 가능합니다.',color:'warning'}); return false; };

      // if(!company_contract_data.manager_name) { this.toast.present({ message: '현장 담당지을 입력해주세요.',color:'warning'}); return false; };

      // if(!company_contract_data.manager_phone) { this.toast.present({ message: '현장 전화번호를 입력해주세요.',color:'warning'}); return false; };

      // if(!this.form.manager_name) this.form.manager_name = '';
      // if(!this.form.manager_phone) this.form.manager_phone = '';
      // if(!company_contract_data.manager_user_id) { this.toast.present({ message: '협력사 소장을 입력해주세요.',color:'warning'}); return false; };
    }

    return true;
  }
}
