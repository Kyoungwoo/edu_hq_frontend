import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';

@Component({
  selector: 'app-search-company',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.scss'],
})
export class SearchCompanyComponent implements OnInit {

  form = {
    company_contract_type:this.user.userData.user_type,
    search_text:''
  }
  companyData:ConnectResult <{
    company_id: number,
    business_register_no: string,
    company_name: string,
    company_ceo: string
  }>

  selectedItem;

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private user: UserService
  ) { }

  ngOnInit() {
    this.getConpany();
  }

  async getConpany() {
    console.log(this.form.company_contract_type);
    this.companyData = await this.connect.run('/category/certify/company/get',this.form,{});
    if(this.companyData.rsCode === 0) { };
  }

  select(){
    this._modal.dismiss(this.selectedItem);
  }
}
