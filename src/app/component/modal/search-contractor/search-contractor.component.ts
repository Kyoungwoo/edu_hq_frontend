import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

@Component({
  selector: 'app-search-contractor',
  templateUrl: './search-contractor.component.html',
  styleUrls: ['./search-contractor.component.scss'],
})
export class SearchContractorComponent implements OnInit {

  form = {
    company_contract_type:'원청사',
    search_text:''
  }
  res:ConnectResult <{
    company_id: number
    business_register_no: string
    company_name: string
    company_ceo: string
    checked:boolean
  }>

  submitItem = {
    company_id: 0,
    business_register_no: '',
    company_name: '',
    company_ceo: ''
  }
  submitArr = [];
  business_register_no_check:boolean = false;
  constructor(
    private connect: ConnectService,
    private _modal_: ModalController,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.getCtgoContractor();
  }


  async getCtgoContractor() {
    this.res = await this.connect.run('/category/certify/company/get',this.form);
    if(this.res.rsCode === 0) {}
  }

  async addCompany() {
    let filteritem = [];
    filteritem = this.res.rsMap.filter((data,i) => {
      return data.checked === true;
    })
    if(filteritem.length + this.submitArr.length >= 5) {
      const toast = await this.toast.present({
        message:'최대 선택 개수는 5개입니다.',
        position:'botton',
        color:'primary'
      });
    } else {
      this.submitArr.push({
        company_id: 0,
        business_register_no: '',
        company_name: '',
        company_ceo: ''
      })
    } 
    if(this.submitArr.length > 5) {
      const toast = await this.toast.present({
        message:'최대 선택 개수는 5개입니다.',
        position:'botton',
        color:'primary'
      });
    }
  }

  async choicCompany(item) {
    item.checked = !item.checked;
    console.log("asdfasdfasdf");
    let filteritem = [];
    filteritem = this.res.rsMap.filter((data,i) => {
      return data.checked === true;
    })
    if(filteritem.length > 5) {
      const toast = await this.toast.present({
        message:'최대 선택 개수는 5개입니다.',
        position:'botton',
        color:'primary'
      })
    }
  }

  async overlap(business_register_no) {
    if(business_register_no.length >= 10) {
      const res = await this.connect.run('/project/overlap/business_register_no',{business_register_no:business_register_no});
      if(res.rsCode === 0){
       this.business_register_no_check = true;
      } else {
        const toast = await this.toast.present({
          message:'이미 등록된 사업자등록번호입니다. 등록된 회사 목록에서 선택하여 주세요.',
          position:'botton',
          color:'danger'
        });
      }
      let spl = business_register_no.substring(0,business_register_no.length-1);
      console.log(spl);
    }
  }

  async submit() {
    for(let i = 0; i < this.submitArr.length; i++) {
      if(this.business_register_no_check){
        const res = await this.connect.run('/project/company/insert',{
          business_register_no:this.submitArr[i].business_register_no,
          company_ceo:this.submitArr[i].company_ceo,
          company_name:this.submitArr[i].company_name,
          company_contract_type:'원청사'
        });
        if(res.rsCode === 0) {
          console.log(this.submitItem);
          // this._modal_.dismiss(this.submitItem);
        }
    }
  }
  }
}
