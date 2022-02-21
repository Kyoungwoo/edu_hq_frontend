import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';

export class ctgoMemberItem {
  ctgo_job_position_name_kr: string;
  company_id: number;
  ctgo_safe_job_name_kr: string;
  user_id: number;
  ctgo_job_position_id: number;
  user_name: string;
  company_name: string;
  user_safe_job_id: number;
  ctgo_safe_job_id: number;
}
@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.scss'],
})
export class SearchPeopleComponent implements OnInit {


  @Input() form = {
    project_id: 0,
    search_text: '',
    user_type: ''
  }
  res:ConnectResult<ctgoMemberItem>

  selectedItem:ctgoMemberItem;
  constructor(
    private connect: ConnectService,
    private user: UserService,
    private _modal: ModalController
  ) { }

  ngOnInit() {
    this.get();
  }

  async get() {
    this.res = await this.connect.run('/category/certify/company/user/get',this.form);
  }
  select() {
    this._modal.dismiss({
      selectedItem: this.selectedItem
    });
  }
}
