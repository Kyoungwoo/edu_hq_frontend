import { SafetyStateType } from './../../../../component/confirm/chip-safety-state/chip-safety-state.component';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FileService } from 'src/app/basic/service/core/file.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { DateService } from 'src/app/basic/service/util/date.service';

@Component({
  selector: 'app-worker-minutes-detail-search',
  templateUrl: './worker-minutes-detail-search.page.html',
  styleUrls: ['./worker-minutes-detail-search.page.scss'],
})
export class WorkerMinutesDetailSearchPage implements OnInit {

  @Input() form = {
    project_id: null,
    master_company_id: null,
    safety_meeting_type: '전체',
    start_date: this.date.today({ month: -1 }),
    end_date: this.date.today(),
    search_text: '',
    // approval_cnt_answer: '전체',
    limit_no: 0,
    safety_meeting_state: '전체' as SafetyStateType
  }

  temptForm = {
    project_id: null,
    master_company_id: null,
    safety_meeting_type: '전체',
    start_date: this.date.today({ month: -1 }),
    end_date: this.date.today(),
    search_text: '',
    // approval_cnt_answer: '전체',
    limit_no: 0,
    safety_meeting_state: '전체' as SafetyStateType
  }

  constructor(
    private _modal: ModalController,
    public user: UserService,
    private date: DateService,
    private file: FileService,
    public languagePack: LanguagePackService
  ) { }

  async ngOnInit() {
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
