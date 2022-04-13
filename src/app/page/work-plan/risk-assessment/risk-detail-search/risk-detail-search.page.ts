import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FileService } from 'src/app/basic/service/core/file.service';

@Component({
  selector: 'app-risk-detail-search',
  templateUrl: './risk-detail-search.page.html',
  styleUrls: ['./risk-detail-search.page.scss'],
})
export class RiskDetailSearchPage implements OnInit {

  @Input() form = {
    project_id: null,
    project_name: '',
    company_id: null,
    ctgo_construction_id: 0,
    risk_asment_type: '수시',
    approval_cnt_answer: '전체',
    risk_asment_start_date: '',
    risk_asment_end_date: '',
    search_text: '',
    limit_no: 0
  }

  temptForm = {
    project_id: null,
    project_name: '',
    company_id: null,
    ctgo_construction_id: 0,
    risk_asment_type: '수시',
    approval_cnt_answer: '전체',
    risk_asment_start_date: '',
    risk_asment_end_date: '',
    search_text: '',
    limit_no: 0
  }

  constructor(
    private _modal: ModalController,
    private file: FileService
  ) { }

  ngOnInit() {
    this.temptForm = this.file.clone(this.form);
  }
  projectChange(ev) {
    this.temptForm.project_name = ev.project_name;
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
