import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/basic/service/core/user.service';

@Component({
  selector: 'app-detail-search',
  templateUrl: './detail-search.component.html',
  styleUrls: ['./detail-search.component.scss'],
})
export class DetailSearchComponent implements OnInit {

  @Input() type:string;

  form = {
    project_id:0,
    master_company_id:0
  }

  disabled:boolean = false;

  constructor(
    private _modal: ModalController,
    private user: UserService
  ) { }

  ngOnInit() {
    this.roleCheck();
  }

  roleCheck() {
   const { user_role,belong_data } = this.user.userData;
   console.log(user_role);
   console.log(this.disabled);
    if(user_role === 'MASTER_HEAD' || user_role === 'MASTER_GENERAL'){
      this.form.project_id = belong_data.project_id;
      this.form.master_company_id = belong_data.company_id;
      this.disabled = true;
    } else if(user_role === 'PARTNER_HEAD' || user_role === 'PARTNER_GENERAL') {
      this.form.project_id = belong_data.project_id;
      this.form.master_company_id = belong_data.company_id;
      this.disabled = true;
    }
  }
  search() {
    this._modal.dismiss(this.form);
  }
}
