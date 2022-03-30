import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FileService } from 'src/app/basic/service/core/file.service';
import { ApprovalAnswerType } from 'src/app/component/confirm/approval/approval.component';

@Component({
  selector: 'app-confirm-progress-detail-search',
  templateUrl: './confirm-progress-detail-search.page.html',
  styleUrls: ['./confirm-progress-detail-search.page.scss'],
})
export class ConfirmProgressDetailSearchPage implements OnInit {

  @Input() form = {
    project_id: null, // 현장 ID
    master_company_id: null, // 원청사 ID / 전체 = 0
    company_id: null, // 협력사 ID / 전체 = 0
    start_date: null, // 검색 시작일
    end_date: null, // 검색 종료일
    approval_cnt_answer: null as ApprovalAnswerType, // 결재상태 / 전체, 임시저장, 결재중, 결재완료, 반려
    search_text: null, // 검색어
    limit_no: 0 // 20개씩 가져옵니다
  }

  temptForm = {
    project_id: null, // 현장 ID
    master_company_id: null, // 원청사 ID / 전체 = 0
    company_id: null, // 협력사 ID / 전체 = 0
    start_date: null, // 검색 시작일
    end_date: null, // 검색 종료일
    approval_cnt_answer: null as ApprovalAnswerType, // 결재상태 / 전체, 임시저장, 결재중, 결재완료, 반려
    search_text: null, // 검색어
    limit_no: 0 // 20개씩 가져옵니다
  }

  constructor(
    private _modal: ModalController,
    private file: FileService
  ) { }

  ngOnInit() {
    this.temptForm = this.file.clone(this.form);
  }

  reset() {
    this.temptForm = this.file.clone(this.form);
  }
  search() {
    const form = this.file.clone(this.temptForm);
    this._modal.dismiss(
      form
    );
  }

}
