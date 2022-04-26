import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FileService } from 'src/app/basic/service/core/file.service';

@Component({
  selector: 'app-confirm-pending-detail-search',
  templateUrl: './confirm-pending-detail-search.page.html',
  styleUrls: ['./confirm-pending-detail-search.page.scss'],
})
export class ConfirmPendingDetailSearchPage implements OnInit {

  @Input() permission = { master_company_all: false }
  @Input() form = {
    project_id: null, // 현장 ID
    master_company_id: null, // 원청사 ID / 전체 = 0
    company_id: null, // 협력사 ID / 전체 = 0
    start_date: null, // 검색 시작일
    end_date: null, // 검색 종료일
    search_text: null, // 검색어
    limit_no: 0 // 20개씩 가져옵니다
  }

  temptForm = {
    project_id: null, // 현장 ID
    master_company_id: null, // 원청사 ID / 전체 = 0
    company_id: null, // 협력사 ID / 전체 = 0
    start_date: null, // 검색 시작일
    end_date: null, // 검색 종료일
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
