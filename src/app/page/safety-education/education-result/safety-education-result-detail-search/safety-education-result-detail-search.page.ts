import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { DateService } from 'src/app/basic/service/util/date.service';

@Component({
  selector: 'app-safety-education-result-detail-search',
  templateUrl: './safety-education-result-detail-search.page.html',
  styleUrls: ['./safety-education-result-detail-search.page.scss'],
})
export class SafetyEducationResultDetailSearchPage implements OnInit {

  form = {
    approval_cnt_answer:'전체', // 결재상태 / 전체, 임시저장, 결재중, 결재완료, 반려
    company_id:0, // 원청사명 ID
    ctgo_education_safe_id: 0, // 교육명 ID
    end_date: this.date.today(), // 검색 신청 종료일
    // end_date: '2025-12-01', // 검색 신청 종료일
    limit_no: 0, // 20까지
    project_id: 0, // 현장명 ID
    search_text:'',// 검색어
    start_date: this.date.today({date:-7}) // 검색 신청 시작일
    // start_date: '2019-01-01' // 검색 신청 시작일
  }

  editable = {
    company_id:false
  }

  constructor(
    private _modal: ModalController,
    private date: DateService,
    private user: UserService,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
    this.projectRolechekc();
  }

  projectRolechekc() {
    const { user_role , belong_data} = this.user.userData
    if(user_role === 'MASTER_HEAD' ||
      user_role === 'PARTNER_GENERAL'||
      user_role === 'PARTNER_HEAD' ||
      user_role === 'MASTER_GENERAL') {
        this.editable.company_id = true;
        this.form.project_id = belong_data.project_id;
        this.form.company_id = belong_data.company_id;
      } else if(user_role === 'LH_HEAD') {
        this.form.project_id = belong_data.project_id;
      }
  }

  reset() {
    this.form = {
      approval_cnt_answer:'전체', // 결재상태 / 전체, 임시저장, 결재중, 결재완료, 반려
      company_id:0, // 원청사명 ID
      ctgo_education_safe_id: 0, // 교육명 ID
      end_date: this.date.today(), // 검색 신청 종료일
      limit_no: 0, // 20까지
      project_id: 0, // 현장명 ID
      search_text:'',// 검색어
      start_date: this.date.today({date:-7}) // 검색 신청 시작일
    }
  }
  dismiss() {
    this._modal.dismiss(this.form);
  }
}
