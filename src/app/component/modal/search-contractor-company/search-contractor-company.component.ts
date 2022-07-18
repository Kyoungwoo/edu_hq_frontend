import { ToastService } from './../../../basic/service/ionic/toast.service';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from './../../../basic/service/core/connect.service';
import { Component, OnInit, Input } from '@angular/core';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';

export class SelectItem {
  company_id: number;
  user_id: number;
  company_name: string;
  business_register_no:string;
  company_ceo:string;
}

@Component({
  selector: 'app-search-contractor-company',
  templateUrl: './search-contractor-company.component.html',
  styleUrls: ['./search-contractor-company.component.scss'],
})
export class SearchContractorCompanyComponent implements OnInit {
  @Input() type?: boolean = false;
  @Input() all: boolean = false;
  @Input() form = {
    project_id: 0,
    master_company_id: 0,
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
    this.res = await this.connect.run('/category/certify/partner/company/get', this.form);
    if (this.res.rsCode === 0) {
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
