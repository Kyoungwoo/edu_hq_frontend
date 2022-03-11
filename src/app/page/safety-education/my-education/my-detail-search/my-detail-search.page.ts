import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-my-detail-search',
  templateUrl: './my-detail-search.page.html',
  styleUrls: ['./my-detail-search.page.scss'],
})
export class MyDetailSearchPage implements OnInit {

  form = {
    company_id:0, // 업체 ID
    ctgo_education_safe_id:0, // 교육명 ID
    education_safe_state:'',// 교육상태
    end_date:'', // 검색 신청 종료일
    project_id:0, // 현장 ID
    search_text:'', // 검색어
    start_date:'' // 검색 신청 시작일
  }

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {

  }

  dismiss() {
    this._modal.dismiss();
  }
  select() {
    this._modal.dismiss(this.form);
  }
}
