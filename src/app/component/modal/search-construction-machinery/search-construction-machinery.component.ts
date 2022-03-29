import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

export class MachineryItem {
  ctgo_machinery_id: number;
  company_id: number;
  ctgo_machinery_name: string;
  ctgo_machinery_doc_state: number;
  default_state: number;
  ctgo_machinery_use_state: number;
}

@Component({
  selector: 'app-search-construction-machinery',
  templateUrl: './search-construction-machinery.component.html',
  styleUrls: ['./search-construction-machinery.component.scss'],
})
export class SearchConstructionMachineryComponent implements OnInit {

  @Input() all:boolean = false;
  @Input() form = {
    company_id: 0,
    search_text: ''
  }
  res:ConnectResult<MachineryItem>;

  allState: boolean = false;
  selectedItem: MachineryItem;

  constructor(
    private connect: ConnectService,
    private _modal : ModalController,
    private toast: ToastService,
  ) { }

  ngOnInit() {
    this.getMachinery();
  }

  async getMachinery() {
    this.res = await this.connect.run('/category/certify/machinery/get', this.form);
    if (this.res.rsCode === 0) {
    } else {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }

  select() {
    this._modal.dismiss({
      selectedItem: this.selectedItem,
      allState: this.allState
    });
  }
}
