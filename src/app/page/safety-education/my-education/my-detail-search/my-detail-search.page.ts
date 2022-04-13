import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/basic/service/core/user.service';
import { DateService } from 'src/app/basic/service/util/date.service';

@Component({
  selector: 'app-my-detail-search',
  templateUrl: './my-detail-search.page.html',
  styleUrls: ['./my-detail-search.page.scss'],
})
export class MyDetailSearchPage implements OnInit {

  form = {
    project_id:this.user.userData.belong_data.project_id, // 현장 ID
    company_id:this.user.userData.belong_data.master_company_id, // 업체 ID
    ctgo_education_safe_id:0, // 교육명 ID
    education_safe_state:'전체',// 교육상태
    search_text:'', // 검색어
    start_date:this.date.today({date:-3}), // 검색 신청 시작일
    end_date:this.date.today({date:+4}) // 검색 신청 종료일
  }

  editable ={
    add:false,
    company_id:false
  }

  constructor(
    private _modal: ModalController,
    private user: UserService,
    private date: DateService
  ) { }

  ngOnInit() {
    this.projectRolechekc();
  }

  projectRolechekc() {
    const { user_role , belong_data} = this.user.userData;
    if(user_role === 'MASTER_HEAD' ||
      user_role === 'PARTNER_GENERAL'||
      user_role === 'PARTNER_HEAD' ||
      user_role === 'MASTER_GENERAL') {
        this.editable.company_id = true;
        this.form.company_id = belong_data.company_id;
        this.form.project_id = belong_data.project_id;
      } else if(user_role === 'LH_HEAD') {
        this.editable.add = true;
        this.form.project_id = 0;
      }
    }

  dismiss() {
    this._modal.dismiss();
  }
  select() {
    this._modal.dismiss(this.form);
  }
}
