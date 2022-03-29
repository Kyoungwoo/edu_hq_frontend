import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/basic/service/core/user.service';
import { DateService } from 'src/app/basic/service/util/date.service';

@Component({
  selector: 'app-safety-education-detail-search',
  templateUrl: './safety-education-detail-search.page.html',
  styleUrls: ['./safety-education-detail-search.page.scss'],
})
export class SafetyEducationDetailSearchPage implements OnInit {

  form = {
    company_id: 0,
    ctgo_education_safe_id: 0,
    education_safe_state: '전체',
    end_date: this.date.today({ date: 7 }),
    limit_no: 0,
    project_id: 0,
    search_text: '',
    start_date: this.date.today()
  }
  constructor(
    private date: DateService,
    private _modal: ModalController,
    private user: UserService
  ) { }

  ngOnInit() {
    this.projectRolechekc();
    this.companyRolecheck();
  }

  projectRolechekc() {
    const { user_role , belong_data} = this.user.userData
    if(user_role === 'MASTER_HEAD' ||
      user_role === 'PARTNER_GENERAL'||
      user_role === 'PARTNER_HEAD' ||
      user_role === 'MASTER_GENERAL') {
        this.form.project_id = belong_data.project_id;
        
     
      } else if(user_role === 'LH_HEAD') {
        this.form.project_id = belong_data.project_id;
      }
  }
  companyRolecheck() {
    const { user_role , belong_data} = this.user.userData
    if(user_role === 'MASTER_GENERAL' ||
       user_role === 'MASTER_HEAD') {
        this.form.company_id = belong_data.company_id;
     
      } else if(user_role === 'LH_HEAD') {
        this.form.company_id = 0;
      }
  }

  reset() {
    this.form = {
      company_id: 0,
      ctgo_education_safe_id: 0,
      education_safe_state: '전체',
      end_date: this.date.today({ date: 7 }),
      limit_no: 0,
      project_id: 0,
      search_text: '',
      start_date: this.date.today()
      // start_date:"2021-01-01",
      // end_date:"2022-12-12"
    }
  }
  select() {
    this._modal.dismiss(this.form);
  }
}
