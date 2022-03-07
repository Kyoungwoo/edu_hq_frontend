import { Component, Input, OnInit } from '@angular/core';
import { ConnectResult } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';

export class EditItem {
  ctgo_education_safe_id:number;
  education_safe_date:string;
  education_safe_end_time:string;
  education_safe_instructor:string;
  education_safe_manager_data:[{
    manager_user_id:number
  }];
  education_safe_place:string
  education_safe_start_time:string;
  education_safe_target:string;
  education_safe_text:string;
  project_id:number;
}


@Component({
  selector: 'app-safety-education-detail-list',
  templateUrl: './safety-education-detail-list.page.html',
  styleUrls: ['./safety-education-detail-list.page.scss'],
})
export class SafetyEducationDetailListPage implements OnInit {

  @Input() item;

  form:EditItem = new EditItem();

  eduState = '';
  constructor(
    private user: UserService
  ) { }

  ngOnInit() {
    console.log( this.item);
    if(this.item) {

    } else {
      console.log("sfasdfasdfs");
      this.form.project_id = this.user.userData.belong_data.project_id;
      this.eduState = '교육 전';
    }
  }

  async safeInsert() {

  }
}
