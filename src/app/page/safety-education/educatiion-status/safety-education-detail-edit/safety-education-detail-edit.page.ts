import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/basic/service/core/user.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { SearchAttendanceComponent } from 'src/app/component/modal/search-attendance/search-attendance.component';


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
  create_user_id: number;
  ctgo_education_safe_name: string
  user_name: string;
  education_safe_state: string;
  ctgo_education_safe_text: string;
  ctgo_education_safe_type: string;
  project_name: string;
  ctgo_education_safe_title: string;
  company_name: string;
  education_safe_id: number;
  create_date: string;
}


@Component({
  selector: 'app-safety-education-detail-edit',
  templateUrl: './safety-education-detail-edit.page.html',
  styleUrls: ['./safety-education-detail-edit.page.scss'],
})
export class SafetyEducationDetailEditPage implements OnInit {


  @Input() item;

  form:EditItem = new EditItem();
  
  eduState = '';

  

  constructor(
    private _modal: ModalController,
    private user: UserService,
    private date: DateService
  ) { }

  ngOnInit() {
    console.log( this.item);
    if(this.item) {

    } else {
      console.log("asdfasdf");
      this.form.project_id = this.user.userData.belong_data.project_id;
      this.form.education_safe_state = '교육 전'
      this.form.company_name = `${this.user.userData.user_name} / ${this.user.userData.belong_data.company_name}`
      this.form.create_date = this.date.today();
    }
  }

  async safeInsert() {

  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: SearchAttendanceComponent,
      componentProps:{
        title:'출석등록'
      }
    })
    modal.present();
  }
}
