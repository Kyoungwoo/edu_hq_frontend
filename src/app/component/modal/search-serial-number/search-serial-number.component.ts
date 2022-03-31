import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';


export class SearialItem {
  serial_id: number;
  serial_no: string;
  serial_type: string;
  ctgo_machine_serial_id: number;
  ctgo_machine_serial_name: string
}

class SmartCtgo {
  ctgo_machine_serial_name: string;
  ctgo_machine_serial_id: number;
}

@Component({
  selector: 'app-search-serial-number',
  templateUrl: './search-serial-number.component.html',
  styleUrls: ['./search-serial-number.component.scss'],
})
export class SearchSerialNumberComponent implements OnInit {
  /** @param searial_ctgo_list - 스마트장비 카테고리 */
  smart_ctgo_list:SmartCtgo[] = [];

  @Input() form;

  res: ConnectResult<SearialItem>

  allState:boolean = false;
  selectedItem:SearialItem;
  

  constructor(
    private _modal : ModalController,
    private connect: ConnectService,
    private toast: ToastService,
  ) { }

  ngOnInit() {
    this.getSerial();
    this.getSmartCtgo();
  }

  async getSerial() {
    this.res = await this.connect.run('/category/serial/no/get', this.form);
    if (this.res.rsCode === 0) {
    } else {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }

  /**
   * @function getSmartCtgo(): 스마트장비 카테고리 목록 가져오기
   */
   async getSmartCtgo() {
    const res = await this.connect.run('/category/serial/machine/get', { serial_type: this.form.serial_type });
    if(res.rsCode === 0 ) {
      this.smart_ctgo_list = res.rsMap;
      // this.form.ctgo_machine_serial_id = 0;
    }
    else if (res.rsCode === 1008) {
      this.res = null;
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  select() {
    this._modal.dismiss({
      selectedItem: this.selectedItem,
      allState: this.allState
    });
  }
}
