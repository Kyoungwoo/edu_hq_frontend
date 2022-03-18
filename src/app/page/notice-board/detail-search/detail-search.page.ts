import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileService } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ExcelService } from 'src/app/basic/service/util/excel.service';

@Component({
  selector: 'app-detail-search',
  templateUrl: './detail-search.page.html',
  styleUrls: ['./detail-search.page.scss'],
})

export class DetailSearchPage implements OnInit {

  @Input() type: string;

  @Input() form = {
    company_ids: [1],
    end_date: this.date.today(),
    notice_types: [],
    msds_types: [],
    safety_meeting_types: [],
    project_ids: [1],
    search_text: '',
    start_date: this.date.today({ month: -1 }),
    limit_no: 0
  }

  temptForm = {
    company_ids: [1],
    end_date: this.date.today(),
    notice_types: [],
    msds_types: [],
    safety_meeting_types: [],
    project_ids: [1],
    search_text: '',
    start_date: this.date.today({ month: -1 }),
    limit_no: 0
  }

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    public user: UserService,
    private date: DateService,
    private file: FileService
  ) { }


  async ngOnInit() {
    this.temptForm = this.file.clone(this.form);
  }

  dismiss() {
    this._modal.dismiss();
  }
  remove() {
    this.temptForm = {
      company_ids: [1],
      end_date: this.date.today(),
      notice_types: [],
      msds_types: [],
      safety_meeting_types: [],
      project_ids: [1],
      search_text: '',
      start_date: this.date.today({ month: -1 }),
      limit_no: 0
    }

  }
  async search() {
    const form = this.file.clone(this.temptForm);
    this._modal.dismiss(
      form
    );
  }
}








