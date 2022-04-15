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
  @Input() form:any;
  @Input() multiple:boolean = false;
  
  /** multiple에서 쓰는 녀셕 */
  @Input() selectedItemList:MachineryItem[] = [];

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

  isSelectedItem(item:MachineryItem) {
    if(!this.multiple) {
      return this.selectedItem.ctgo_machinery_id === item.ctgo_machinery_id;
    }
    else {
      return this.selectedItemList.find(selectedItem => selectedItem.ctgo_machinery_id === item.ctgo_machinery_id);
    }
  }
  selectItem(item:MachineryItem) {
    this.allState = false;
    if(!this.multiple) {
      this.selectedItem.ctgo_machinery_id = item.ctgo_machinery_id;
    }
    else {
      const itemIndex = this.selectedItemList.findIndex(selectedItem => selectedItem.ctgo_machinery_id === item.ctgo_machinery_id);
      if(itemIndex > -1) {
        this.selectedItemList.splice(itemIndex, 1);
      }
      else {
        this.selectedItemList.push(item);
      }
    }
  }

  submit() {
    this._modal.dismiss({
      selectedItem: this.selectedItem,
      selectedItemList: this.selectedItemList,
      allState: this.allState
    });
  }
}
