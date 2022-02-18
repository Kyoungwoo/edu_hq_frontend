import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';


export class SelectItem {
  company_id: number;
  business_register_no: string;
  company_name: string;
  company_ceo: string;
} 

@Component({
  selector: 'app-search-company',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.scss'],
})
export class SearchCompanyComponent implements OnInit {


  @Input() value;
  @Input() type?: boolean = false;
  @Input() multiple:boolean;
  @Input() form = {
    company_contract_type: '',
    search_text: ''
  }

  // form = {
  //   company_contract_type:this.user.userData.user_type,
  //   search_text:''
  // }
  res: ConnectResult<{
    company_id: number;
    business_register_no: string;
    company_name: string;
    company_ceo: string;
    checked: boolean;
  }>
  submitItem = {
    company_id: 0,
    business_register_no: '',
    company_name: '',
    company_ceo: '',
    search_type: ''
  }

  selectItem:SelectItem;

  submitArr = [];
  filteritem = [];
  business_register_no_check: boolean = false;

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private toast: ToastService,
  ) { }

  ngOnInit() {
    if(this.form.company_contract_type === 'COMPANY') {
      this.form.company_contract_type = '원청사';
    }
    this.getCompany();
  }

  async getCompany() {
    this.res = await this.connect.run('/category/certify/company/get', this.form);
    if (this.res.rsCode === 0) {
    } else {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }
  async addCompany() {
    if(this.multiple){
      if (this.filteritem.length + this.submitArr.length >= 5 || this.submitArr.length > 5) {
        const toast = await this.toast.present({
          message: '최대 선택 개수는 5개입니다.',
          position: 'botton',
          color: 'primary'
        });
      } else {
        this.submitArr.push({
          company_id: 0,
          business_register_no: '',
          company_name: '',
          company_ceo: '',
          search_type: '원청사'
        });
      }
    } else { 
      this.selectItem = {
        company_id: 0,
        business_register_no: '',
        company_name: '',
        company_ceo: '',
        
      }
    }
  }
  async choicCompany(item) {
    item.checked = !item.checked;
    this.filteritem = this.res.rsMap.filter((data, i) => {
      return data.checked === true;
    });
    if (this.filteritem.length > 5) {
      const toast = await this.toast.present({
        message: '최대 선택 개수는 5개입니다.',
        position: 'botton',
        color: 'primary'
      });
    }
  }

  async overlap(business_register_no) {
    if(this.multiple) {
      if (business_register_no.length >= 10) {
        const res = await this.connect.run('/project/overlap/business_register_no', { business_register_no: business_register_no });
        if (res.rsCode === 0) {
          this.business_register_no_check = true;
        } else if (business_register_no.length > 10) {
          return this.toast.present({ message: '10자 이하로 입력해주세요', color: 'warning' });
        }
        else {
          const toast = await this.toast.present({
            message: '이미 등록된 사업자등록번호입니다. 등록된 회사 목록에서 선택하여 주세요.',
            position: 'botton',
            color: 'warning'
          });
        }
      }
    }
  }

  async select() {
    if(this.multiple){
      if (this.business_register_no_check) {
        let conArr = this.filteritem.concat(this.submitArr);
        for (let i = 0; i < this.submitArr.length; i++) {
          if (!this.submitArr[i].company_name) return this.toast.present({ message: '회사명 입력해 주세요.',color: "warning" });
          if (!this.submitArr[i].business_register_no) return this.toast.present({ message: '사업자등록번호를 입력해 주세요.', color: "warning"});
          if (this.submitArr[i].business_register_no.length < 10) return this.toast.present({ message: '사업자등록번호를 확인해주세요.', color: "warning" });
          if (!this.submitArr[i].company_ceo) return this.toast.present({ message: '대표자를 입력해 주세요.', color: "warning"});
          const res = await this.connect.run('/project/company/insert', {
            business_register_no: this.submitArr[i].business_register_no,
            company_ceo: this.submitArr[i].company_ceo,
            company_name: this.submitArr[i].company_name,
            company_contract_type: '원청사'
          });
          if (res.rsCode === 0) {
            this._modal.dismiss(conArr);
          }
        }
      } else {
        let conArr = this.filteritem.concat(this.submitArr);
        conArr.forEach(item => {
          if (!item.company_name) return this.toast.present({ message: '회사명 입력해 주세요.', color: "warning" });
          if (!item.business_register_no) return this.toast.present({ message: '사업자등록번호를 입력해 주세요.', color: "warning" });
          if (item.business_register_no.length < 10) return this.toast.present({ message: '사업자등록번호를 확인해주세요.', color: "warning" });
          if (item.business_register_no.length > 10) this.overlap(item.business_register_no);
          if (!item.company_ceo) return this.toast.present({ message: '대표자를 입력해 주세요.', color: "warning" });
        });
        this._modal.dismiss(conArr);
      }
    } else {
      if(!this.selectItem.company_name) return await this.toast.present({message:'회사명을 입력하세요'});
      if(!this.selectItem.business_register_no) return await this.toast.present({message:'사업자등록번호를 입력하세요'});
      if(!this.selectItem.company_ceo) return await this.toast.present({message:'대표자를 입력하세요'});
      this._modal.dismiss(this.selectItem);
    }
  }
  // select(){
  //   this._modal.dismiss(this.selectedItem);
  // }
}
