import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

@Component({
  selector: 'app-supervision-search',
  templateUrl: './supervision-search.component.html',
  styleUrls: ['./supervision-search.component.scss'],
})
export class SupervisionSearchComponent implements OnInit {

  @Input() value;
  @Input() type?: boolean = false;
  @Input() form = {
    company_contract_type: '감리사',
    search_text: ''
  }
  res: ConnectResult<{
    company_id: number
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
    search_type: '감리사'
  }

  submitArr = [];
  filteritem = [];
  business_register_no_check: boolean = false;
  max_out:boolean = false;
  
  constructor(
    private connect: ConnectService,
    private _modal_: ModalController,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.getCtgoSupervision();
  }

  async getCtgoSupervision() {
    console.log("this.value", this.value);
    this.res = await this.connect.run('/category/certify/company/get', this.form);
    if (this.res.rsCode === 0) {
        for (let i = 0; i < this.res.rsMap.length; i++) {
          for (let x = 0; x < this.value.length; x++) {
            if (this.res.rsMap[i].company_id === this.value[x]) {
              this.res.rsMap[i].checked = true;
              this.filteritem.push(this.res.rsMap[i]);
            }
          }
        }
    }
  }

  async addCompany() {
    this.filteritem = this.res.rsMap.filter((data, i) => {
      return data.checked === true;
    })
    if (this.filteritem.length + this.submitArr.length >= 5 || this.submitArr.length > 5) {
      const toast = await this.toast.present({
        message: '최대 선택 개수는 5개입니다.',
        position: 'botton',
        color: 'danger'
      });
    } else {
      this.submitArr.push({
        company_id: 0,
        business_register_no: '',
        company_name: '',
        company_ceo: '',
        search_type: '감리사'
      });
    }
  }
  
  async choicCompany(item) {
    console.log("this.filteritem", this.filteritem);
    console.log("this.filteritem.length > 5",this.filteritem.length < 6);
    this.max_out = true;
    if (this.filteritem.length < 5 ) {
      item.checked = !item.checked;
      this.filteritem = this.res.rsMap.filter((data, i) => {
        return data.checked === true;
      });
    } else {
      this.max_out = false;
    }
    if(!this.max_out) {
      return await this.toast.present({
        message: '최대 선택 개수는 5개입니다.',
        position: 'botton',
        color: 'danger'
      });
    }
  }



  async overlap(business_register_no) {
    console.log("business_register_no", business_register_no);
    if (business_register_no.length >= 10) {
      const res = await this.connect.run('/project/overlap/business_register_no', { business_register_no: business_register_no });
      if (res.rsCode === 0) {
        this.business_register_no_check = true;
      } else if (business_register_no.length > 10) {
        return this.toast.present({ message: '10자 이하로 입력해주세요', color: 'danger' });
      }
      else {
        const toast = await this.toast.present({
          message: '이미 등록된 사업자등록번호입니다. 등록된 회사 목록에서 선택하여 주세요.',
          position: 'botton',
          color: 'danger'
        });
      }
    }
  }

  async submit() {
    console.log(this.business_register_no_check);
    if (this.business_register_no_check) {
      // let conArr = this.filteritem.concat(this.submitArr);
      for (let i = 0; i < this.submitArr.length; i++) {
        if (!this.submitArr[i].company_name) return this.toast.present({ message: '회사명 입력해 주세요.', color: "danger"  });
        if (!this.submitArr[i].business_register_no) return this.toast.present({ message: '사업자등록번호를 입력해 주세요.', color: "danger"  });
        if (this.submitArr[i].business_register_no.length < 10) return this.toast.present({ message: '사업자등록번호를 확인해주세요.', color: "danger" });
        if (!this.submitArr[i].company_ceo) return this.toast.present({ message: '대표자를 입력해 주세요.', color: "danger"  });
        const res = await this.connect.run('/project/company/insert', {
          business_register_no: this.submitArr[i].business_register_no,
          company_ceo: this.submitArr[i].company_ceo,
          company_name: this.submitArr[i].company_name,
          company_contract_type: '감리사'
        });
        if (res.rsCode === 0) {
          this.getCtgoSupervision();
          this.submitArr = [];
          return this.toast.present({message:'새로운 업체가 등록되었습니다.',color:'primary'});
          // this._modal_.dismiss(conArr);
        }
      }
    } else {
      // let conArr = this.filteritem.concat(this.submitArr);
      this.filteritem.forEach(item => {
        if (!item.company_name) return this.toast.present({ message: '회사명 입력해 주세요.', color: "danger" });
        if (!item.business_register_no) return this.toast.present({ message: '사업자등록번호를 입력해 주세요.', color: "danger" });
        if (item.business_register_no.length < 10) return this.toast.present({ message: '사업자등록번호를 확인해주세요.', color: "danger" });
        if (item.business_register_no.length > 10) this.overlap(item.business_register_no);
        if (!item.company_ceo) return this.toast.present({ message: '대표자를 입력해 주세요.', color: "danger" });
      });
      this._modal_.dismiss(this.filteritem);
    }
  }
}
