import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FileService } from 'src/app/basic/service/core/file.service';
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
    company_id: null,
    safety_meeting_types: [],
    start_date: this.date.today({ month: -1 }),
    end_date: this.date.today(),
    search_text: '',
    approval_cnt_answer: [],
    limit_no: 0
  }

  temptForm = {
    project_id: null,
    company_id: null,
    safety_meeting_types: [],
    start_date: this.date.today({ month: -1 }),
    end_date: this.date.today(),
    search_text: '',
    approval_cnt_answer: [],
    limit_no: 0
  }

  constructor(
    private _modal: ModalController,
    public user: UserService,
    private date: DateService,
    private file: FileService
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
