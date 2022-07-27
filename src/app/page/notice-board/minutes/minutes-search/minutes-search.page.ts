import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FileService } from 'src/app/basic/service/core/file.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { DateService } from 'src/app/basic/service/util/date.service';

@Component({
  selector: 'app-minutes-search',
  templateUrl: './minutes-search.page.html',
  styleUrls: ['./minutes-search.page.scss'],
})
export class MinutesSearchPage implements OnInit {

  @Input() form = {
    project_id: null,
    company_id: null,
    safety_meeting_types: [],
    start_date: this.date.today({ year: -3 }),
    end_date: this.date.today(),
    search_text: '',
    approval_cnt_answer: [],
    limit_no: 0
  }

  temptForm = {
    project_id: null,
    company_id: null,
    safety_meeting_types: [],
    start_date: this.date.today({ year: -3 }),
    end_date: this.date.today(),
    search_text: '',
    approval_cnt_answer: [],
    limit_no: 0
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
