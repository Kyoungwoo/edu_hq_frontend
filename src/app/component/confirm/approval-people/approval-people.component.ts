import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

@Component({
  selector: 'app-approval-people',
  templateUrl: './approval-people.component.html',
  styleUrls: ['./approval-people.component.scss'],
})
export class ApprovalPeopleComponent implements OnInit {

  @Input() form = {
    project_id: 0,
    company_id: 0,
    search_text: ''
  }
  res:ConnectResult<any>

  selectedItem:any;
  constructor(
    private connect: ConnectService,
    private user: UserService,
    private toast: ToastService,
    private _modal: ModalController
  ) { }

  ngOnInit() {
    this.get();
  }

  async get() {
    this.res = await this.connect.run('/category/certify/approval/user/get', this.form);
    if(this.res.rsCode !== 0) {
      this.toast.present({ message: this.res.rsMsg, color: 'warning' });
    }
  }
  select() {
    this._modal.dismiss({
      selectedItem: this.selectedItem
    });
  }

}
