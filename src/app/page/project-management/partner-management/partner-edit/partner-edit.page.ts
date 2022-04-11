import {  Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { environment } from 'src/environments/environment';

export class CompanyContractData {
  ctgo_construction_id:number = 0; //계약공종
  ctgo_construction_name:string = '';
  contract_name:string = ''; //계약명
  contract_start_date:string = ''; //계약기간~
  contract_end_date:string = ''; //~계약기간
  contract_amount:string = ''; //계약금액
  manager_user_id:number = 0; //협력사소장
  manager_user_name:string = '';
  master_company_id:number = 0; //원청사ID
  master_company_name:string = '';
  project_id:number = 0; //현장ID
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
  company_contract_data: CompanyContractData[] = [];
}
@Component({
  selector: 'app-partner-edit',
  templateUrl: './partner-edit.page.html',
  styleUrls: ['./partner-edit.page.scss'],
})
export class PartnerEditPage implements OnInit {
  
  @Input() company_id;
  @Input() project_id;
  @Input() type?:boolean = false;

  permission = {
    edit: false,
    agree: false
  }

  viewMode:boolean = false;
  isNew:boolean = false;
  
  form:PartnerDetail = new PartnerDetail();

  termsRes:ConnectResult<{
    terms_title: string;
    create_date: string;
    update_date: string;
    terms_text:string;
  }>
  
  selectList = [];

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private alert: AlertService,
    private date: DateService,
    private toast: ToastService,
    private user: UserService,
    private _modal: ModalController,
    private regex: RegexService,
    private promise: PromiseService
  ) { }

  ngOnInit() {
    this.getPermission();
    if(this.company_id) {
      this.viewMode = true;
      this.isNew = false;
      this.getItem();
    } else {
      this.viewMode = false;
      this.isNew = true;
      this.permission.agree = true;
    }

    this.test();
    this.getTerms();
    
  }

  private async test() {
    if(!environment.test.core.test) return;
    if(!environment.test.Project.test) return;
    if(environment.test.Project.done) return;
    
    const testIndex = environment.test.Project.type.indexOf('PARTNER');
    if(testIndex > -1) {
      const el = this.el.nativeElement;
      await this.promise.wait();

      if(this.permission.edit) {
        // 협력사 정보 입력
        if(this.isNew) {
          el.querySelector('[name=company_name]').dispatchEvent(new CustomEvent('setValue', { detail: `데브몬_${this.regex.random.id(5)}` }));
          el.querySelector('[name=business_register_no]').dispatchEvent(new CustomEvent('setValue', { detail: `${this.regex.random.businessNo()}` }));
          el.querySelector('[name=company_ceo]').dispatchEvent(new CustomEvent('setValue', { detail: `김수홍_${this.regex.random.id(5)}` }));
        } else {
          el.querySelector('[name=edit]').dispatchEvent(new CustomEvent('click'));
          await this.promise.wait();
        }
        el.querySelector('[name=company_phone]').dispatchEvent(new CustomEvent('setValue', { detail: `${this.regex.random.phone()}` }));
  
        // 계약정보 추가
        el.querySelector('[name=add_contract]').dispatchEvent(new CustomEvent('click'));
        await this.promise.wait();
  
        el.querySelector('[name=project_id]').dispatchEvent(new CustomEvent('click'));
        await this.promise.wait(2500);
        el.querySelector('[name=master_company_id]').dispatchEvent(new CustomEvent('click'));
        await this.promise.wait(1500);
        el.querySelector('[name=contract_name]').dispatchEvent(new CustomEvent('setValue', { detail: `계약_${this.regex.random.id(5)}` }));
        el.querySelector('[name=ctgo_construction_id]').dispatchEvent(new CustomEvent('click'));
        await this.promise.wait(1000);
        el.querySelector('[name=contract_amount]').dispatchEvent(new CustomEvent('setValue', { detail: '1000' }));
        el.querySelector('[name=contract_start_date]').dispatchEvent(new CustomEvent('setValue', { detail: this.date.today() }));
        el.querySelector('[name=contract_end_date]').dispatchEvent(new CustomEvent('setValue', { detail: this.date.today({ month: 1 }) }));
        el.querySelector('[name=manager_user_id]').dispatchEvent(new CustomEvent('click'));
        await this.promise.wait(1500);
  
        el.querySelector('[name=manager_name]').dispatchEvent(new CustomEvent('setValue', { detail: `고한솔_${this.regex.random.id(5)}` }));
        el.querySelector('[name=manager_phone]').dispatchEvent(new CustomEvent('setValue', { detail: `고한솔_${this.regex.random.id(5)}` }));
        el.querySelector('[name=manager_email]').dispatchEvent(new CustomEvent('setValue', { detail: `${this.regex.random.id(5)}@naver.com` }));
  
        if(this.permission.agree) el.querySelector('[name=consignee_consent_date]').dispatchEvent(new CustomEvent('click'));
  
        el.querySelector('[name=submit]').dispatchEvent(new CustomEvent('click'));
        await this.promise.wait();
  
        const alertButtons = document.querySelector('ion-alert').querySelectorAll('[type=button]');
        alertButtons[1].dispatchEvent(new Event('click'));
      } else {
        el.querySelector('[name=dismiss]').dispatchEvent(new CustomEvent('click'));
      }
    }
  }

  getPermission() {
    const { user_role } = this.user.userData;
    if(user_role === 'LH_HEAD') {
      this.permission.edit = true;
      this.permission.agree = false;
    } 
    else if(user_role === 'MASTER_HEAD') {
      this.permission.edit = true;
      this.permission.agree = true;
    } else {
      this.permission.edit = false;
      this.permission.agree = false;
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
        master_company_id: belong_data.company_id
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

  agreement() {
    this.form.consignee_consent_date = this.date.today({}, 'SECOND');
  }

  contEdit() {
    this.viewMode = false;
  }

  async contSave() {
    if(!this.valid()) return;
    
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
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
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
          handler: async() => {
            const res = await this.connect.run('/project/company/partner/delete', {
              company_id: this.company_id,
              project_id: this.project_id
            });
            if(res.rsCode === 0) {
              this._modal.dismiss('Y');
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          }
        }
      ]
    })
    alert.present();
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
            const res = await this.connect.run('/project/company/partner/update', this.form);
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

  private valid():boolean {
    if(this.permission.agree) {
      if(!this.form.consignee_consent_date) { this.toast.present({ message: '개인정보 처리 위탁 동의를 해주시기 바랍니다.',color:'warning' }); return false };
    }
    if(!this.form.company_name) { this.toast.present({ message: '업체명을 입력해주세요.',color:'warning'}); return false };
    if(!this.form.business_register_no) { this.toast.present({ message: '사업자등록번호 10자리를 입력해주세요.',color:'warning'}); return false; };
    if(!this.form.company_ceo) { this.toast.present({ message: '대표명을 입력해주세요.',color:'warning'}); return false; };

    for(let i = 0; i < this.form.company_contract_data.length; i++) {
      const company_contract_data = this.form.company_contract_data[i];
      
      if(!company_contract_data.project_id) { this.toast.present({ message: '현장을 입력해주세요.',color:'warning'}); return false; };
      
      if(!company_contract_data.master_company_id) { this.toast.present({ message: '원청사를 입력해주세요.',color:'warning'}); return false; };

      if(!company_contract_data.ctgo_construction_id) { this.toast.present({ message: '계약공종을 입력해주세요.',color:'warning'}); return false; };

      if(!company_contract_data.contract_name) { this.toast.present({ message: '계약명을 입력해주세요.',color:'warning'}); return false; };
      
      if(!company_contract_data.contract_start_date) { this.toast.present({ message: '계약기간을 입력해주세요.',color:'warning'}); return false; };

      if(!company_contract_data.contract_end_date) { this.toast.present({ message: '계약기간을 입력해주세요.',color:'warning'}); return false; };

      if(!company_contract_data.contract_amount) { this.toast.present({ message: '계약금액을 입력해주세요.',color:'warning'}); return false; }
      else if(!this.regex.number.test(company_contract_data.contract_amount)) { this.toast.present({ message: '계약금액은 숫자만 입력 가능합니다.',color:'warning'}); return false; };

      // if(!company_contract_data.manager_user_id) { this.toast.present({ message: '협력사 소장을 입력해주세요.',color:'warning'}); return false; };
    }

    return true;
  }

  async getTerms() {
    this.termsRes = await this.connect.run('/support/terms/get',{terms_title:'개인정보 처리방침'});
    //아무작동안함
    if(this.termsRes.rsCode === 0) {
    }
  }
}
