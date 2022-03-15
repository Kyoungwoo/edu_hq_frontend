import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { EducationConfirmPendingListPage } from '../education-confirm-pending-list/education-confirm-pending-list.page';
import { NewWriteTargetPage } from '../new-write-target/new-write-target.page';
import { SafetyEducationResultDetailSearchPage } from '../safety-education-result-detail-search/safety-education-result-detail-search.page';
import { SafetyEducationResultEditPage } from '../safety-education-result-edit/safety-education-result-edit.page';

@Component({
  selector: 'app-safety-education-result-list',
  templateUrl: './safety-education-result-list.page.html',
  styleUrls: ['./safety-education-result-list.page.scss'],
})
export class SafetyEducationResultListPage implements OnInit {

  form = {
    approval_cnt_answer:'', // 결재상태 / 전체, 임시저장, 결재중, 결재완료, 반려
    company_ids: [], // 원청사명 ID
    ctgo_education_safe_ids: [], // 교육명 ID
    end_date: this.date.today(), // 검색 신청 종료일
    limit_no: 0, // 20까지
    project_ids: [], // 현장명 ID
    search_text:'',// 검색어
    start_date: this.date.today({date:-7}) // 검색 신청 시작일
  }

  res:ConnectResult<{
    index:number,
    create_user_id: number,
    ctgo_education_safe_name: string,
    ctgo_education_safe_id: number,
    create_user_name: string,
    company_id: number,
    education_safe_target: string,
    ctgo_education_safe_text: string,
    ctgo_education_safe_type: string,
    approval_id: number,
    education_safe_report_id: number,
    education_safe_date: string,
    ctgo_education_safe_title: string,
    company_name: string,
    education_safe_id: number,
    approval_cnt_answer: string,
    create_date: string,
    row_count:number
  }>

  constructor(
    private _modal: ModalController,
    private date: DateService,
    private connect: ConnectService
  ) { }

  ngOnInit() {
    this.getList();
  }
  async getList(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    this.res = await this.connect.run('/education/report/list',this.form);
    if(this.res.rsCode === 0) {
      this.res.rsMap.map((item, i) => {
        item.index = this.res.rsObj.row_count - this.form.limit_no - i;
        item.education_safe_date = 
        item.education_safe_date + this.date.day(item.education_safe_date)[0];
      });
    } else {

    }
  }
  async openDetailSearch() {
    const modal = await this._modal.create({
      component: SafetyEducationResultDetailSearchPage,

    })
    modal.present();
  }

  async edit() {
    const modal = await this._modal.create({
      component:NewWriteTargetPage,
    });
    modal.present();
  }

  async pending() {
    const modal = await this._modal.create({
      component:EducationConfirmPendingListPage,
    });
    modal.present();
  }

  public async add() {
    const modal = await this._modal.create({
      component: NewWriteTargetPage,

  })
  modal.present();
}
}
