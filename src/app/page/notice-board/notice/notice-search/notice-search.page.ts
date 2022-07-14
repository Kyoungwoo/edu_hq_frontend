import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FileService } from 'src/app/basic/service/core/file.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { DateService } from 'src/app/basic/service/util/date.service';

@Component({
  selector: 'app-notice-search',
  templateUrl: './notice-search.page.html',
  styleUrls: ['./notice-search.page.scss'],
})
export class NoticeSearchPage implements OnInit {

  @Input() form = {
    project_id: null,
    company_id: null,
    notice_types: [],
    start_date: '',
    end_date: '',
    search_text: '',
    limit_no: 0
  }
  
  temptForm = {
    project_id: null,
    company_id: null,
    notice_types: [],
    start_date: '',
    end_date: '',
    search_text: '',
    limit_no: 0
  }

  constructor(
    private _modal: ModalController,
    public user: UserService,
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
