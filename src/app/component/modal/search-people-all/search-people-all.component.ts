import { ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ctgoMemberItem } from './../search-people/search-people.component';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-people-all',
  templateUrl: './search-people-all.component.html',
  styleUrls: ['./search-people-all.component.scss'],
})
export class SearchPeopleAllComponent implements OnInit {
  @Input() form;
  res:ConnectResult<ctgoMemberItem>

  selectedItem:ctgoMemberItem;
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
    this.res = await this.connect.run('/category/certify/project/company/user/get',this.form);
    if(this.res.rsCode !== 0) {
      this.toast.present({message:this.res.rsMsg,color:'warning'});
    }
  }
  select() {
    this._modal.dismiss({
      selectedItem: this.selectedItem
    });
  }
}
