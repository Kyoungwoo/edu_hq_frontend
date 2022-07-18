import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';


export class SelectItem {
  company_id: number;
  user_id: number;
  company_name: string;
  business_register_no:string;
  company_ceo:string;
}

@Component({
  selector: 'app-search-company',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.scss'],
})
export class SearchCompanyComponent implements OnInit {

  @Input() value;
  @Input() type?: boolean = false;
  @Input() all: boolean = false;
  @Input() form = {
    project_id: 0,
    search_text:''
  }
  
  res: ConnectResult<SelectItem>

  submitItem:SelectItem

  selectItem: SelectItem;

  allState: boolean = false;

  submitArr = [];
  filteritem = [];
  business_register_no_check: boolean = false;

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private toast: ToastService,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
    this.getCompany();
  }

  async getCompany() {
    this.res = await this.connect.run('/category/certify/company/partner_master/get', this.form);
    if (this.res.rsCode === 0) {
      this.res.rsMap.filter(item => {
        if(this.value === item.company_id) this.selectItem = item;
      });
      if(!this.value) this.allState = true;
    } else {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }

  select() {
    this._modal.dismiss({
      selectItem: this.selectItem,
      allState: this.allState
    });
  }
}
