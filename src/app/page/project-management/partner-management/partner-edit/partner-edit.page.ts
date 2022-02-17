import {  Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';



export class CompanyContractData {
  ctgo_construction_id: number = 0; //계약공종
  contract_name: string = ''; //계약명
  contract_start_date: string = ''; //계약기간~
  contract_end_date: string = ''; //~계약기간
  contract_amount: string = ''; //계약금액
  manager_user_id: number = 0; //협력사소장
  master_company_id: number = 0; //원청사ID
  project_id: number = 0; //현장ID
  project_name:string = ''; //현장 이름
} 

export class PartnerDetail {
  business_register_no: string;
  company_ceo: string;
  company_file_data: null;
  company_id: number;
  company_name: string;
  company_phone: string;
  consignee_consent_date: string;
  manager_email: string;
  manager_name: string;
  manager_phone: string;
  company_contract_data: CompanyContractData[];
}
@Component({
  selector: 'app-partner-edit',
  templateUrl: './partner-edit.page.html',
  styleUrls: ['./partner-edit.page.scss'],
})
export class PartnerEditPage implements OnInit {
  
  @Input() company_id;
  @Input() project_id;
  @Input() type?: boolean = false;

  viewMode: boolean = false;
  isNew: boolean = false;

  email: string;
  emailaddress: string;
  directlyInput: string;
  
  form:PartnerDetail = new PartnerDetail();
  selectList = [];

  constructor(
    private connect: ConnectService,
    private alert: AlertService,
    private date: DateService,
    private toast: ToastService,
    private _modal: ModalController
  ) { }

  ngOnInit() {
    this.getItem();
    if(this.company_id) {
      this.viewMode = true;
    }
  }

  async getItem() {
    const res = await this.connect.run('/project/company/partner/detail', { 
      company_id: this.company_id
    }, {
      loading: true
    });
    if(res.rsCode === 0) {
      this.form = res.rsObj;
      this.form.company_contract_data = res.rsMap;
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  addCompanyContractData() {
    this.form.company_contract_data.push(new CompanyContractData());
  }
  removeCompanyContractData() {
    this.selectList.forEach(item => {
      const index = this.form.company_contract_data.indexOf(item);
      this.form.company_contract_data.splice(index, 1);
    });
    this.selectList = [];
  }

  agreement() {
    this.form.consignee_consent_date = this.date.today({}, 'SECOND');
  }

  contEdit() {
    this.viewMode = false;
  }

  async contSave() {
    if(!this.form.consignee_consent_date) return this.toast.present({ message: '개인정보 처리 위탁 동의를 해주시기 바랍니다.',color:'danger' })
    if(!this.form.company_name) return this.toast.present({ message: '업체명을 입력해주세요.',color:'danger'});
    if(!this.form.business_register_no) return this.toast.present({ message: '사업자등록번호 10자리를 입력해주세요.',color:'danger'});
    if(!this.form.company_ceo) return this.toast.present({ message: '대표명을 입력해주세요.',color:'danger'});
    
    const alert = await this.alert.present({
      message: '저장하시겠습니까?',
      buttons: [
        { text: '아니오' },
        {
          text: '예',
          handler: async () => {
            const res = await this.connect.run('/project/company/partner/insert', this.form, {});
            if(res.rsCode === 0) {
              this._modal.dismiss('Y');
            }
          }
        }
      ]
    });
    alert.present();
  }

  async contDelete() {
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            const res = await this.connect.run('/project/company/partner/delete', {
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
    alert.present();
  }
  
  async contUpdate() { //수정
    if(!this.form.consignee_consent_date) return this.toast.present({ message: '개인정보 처리 위탁 동의를 해주시기 바랍니다.',color:'danger' })
    if(!this.form.company_name) return this.toast.present({ message: '업체명을 입력해주세요.'});
    if(!this.form.business_register_no) return this.toast.present({ message: '사업자등록번호를 입력해주세요.'});
    if(!this.form.company_ceo) return this.toast.present({ message: '대표명을 입력해주세요.'});

    this.alert.present({
      message:'수정 하시겠습니까?',
      buttons:[
        { text:'아니요' },
        {
          text:'예',
          handler: async() => {
            const res = await this.connect.run('/project/company/partner/update', this.form);
            if(res.rsCode === 0) {
              this._modal.dismiss('Y');
            } else {
              this.connect.error('등록실패', res);
            }
          }
        }
      ]
    });
  }
}
