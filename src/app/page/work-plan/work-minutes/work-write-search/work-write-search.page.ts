import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { FileService } from 'src/app/basic/service/core/file.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-write-search',
  templateUrl: './work-write-search.page.html',
  styleUrls: ['./work-write-search.page.scss'],
})
export class WorkWriteSearchPage implements OnInit {
  @Input() form = {
    project_id: null,
    master_company_id: null,
    safety_meeting_type: '전체',
    start_date: this.date.today({ month: -1 }),
    end_date: this.date.today(),
    search_text: '',
    approval_cnt_answer: '전체',
    limit_no: 0,
    // safety_meeting_state: '전체' as SafetyStateType
  }

  temptForm = {
    project_id: null,
    master_company_id: null,
    safety_meeting_type: '전체',
    start_date: this.date.today({ month: -1 }),
    end_date: this.date.today(),
    search_text: '',
    approval_cnt_answer: '전체',
    limit_no: 0,
    // safety_meeting_state: '전체' as SafetyStateType
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
