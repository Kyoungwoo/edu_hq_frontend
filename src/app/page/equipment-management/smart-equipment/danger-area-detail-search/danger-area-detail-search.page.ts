import { DateService } from './../../../../basic/service/util/date.service';
import { UserService } from './../../../../basic/service/core/user.service';
import { ModalController } from '@ionic/angular';
import { FileService } from './../../../../basic/service/core/file.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-danger-area-detail-search',
  templateUrl: './danger-area-detail-search.page.html',
  styleUrls: ['./danger-area-detail-search.page.scss'],
})
export class DangerAreaDetailSearchPage implements OnInit {
  @Input() form; // 검색조건
  @Input() smart_ctgo_list; // 카테고리 리스트

  temptForm = {
    ctgo_machine_serial_id: 0,
    company_id: (this.user.userData.user_type == 'LH' || this.user.userData.user_type == 'SUPER') ? 0 : this.user.userData.belong_data.company_id,
    project_id: this.user.userData.belong_data.project_id,
    search_text: '',
    start_date: this.date.today({ month: -1 }),
    end_date: this.date.today()
  };
  
  constructor(
    private file:FileService,
    private _modal:ModalController,
    private user:UserService,
    private date:DateService
  ) { }

  ngOnInit() {
    this.temptForm = this.file.clone(this.form);
  }

  reset() {
    this.form = this.file.clone(this.temptForm);
  }
  search() {
    const temptForm = this.file.clone(this.form);
    this._modal.dismiss({form:this.form});
  }
}
