import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';


export class ProjectItem {
  serial_no: number;
  serial_type: string;
  ctgo_machine_serial_id: number;
  ctgo_machine_serial_name: string

}

@Component({
  selector: 'app-search-serial-number',
  templateUrl: './search-serial-number.component.html',
  styleUrls: ['./search-serial-number.component.scss'],
})
export class SearchSerialNumberComponent implements OnInit {

  @Input() form = {
    ctgo_machine_serial_id: 0,
    search_text: ''
  }

  res: ConnectResult<ProjectItem>

  allState:boolean = false;
  selectedItem:ProjectItem;

  constructor(
    private _modal : ModalController,
    private connect: ConnectService,
    private toast: ToastService,
  ) { }

  
  selectList;

  ngOnInit() {
    this.getSerial();
  }

  async getSerial() {
    this.res = await this.connect.run('/category/serial/no/get', this.form);
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
