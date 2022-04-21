import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FileService } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';

@Component({
  selector: 'app-msds-search',
  templateUrl: './msds-search.page.html',
  styleUrls: ['./msds-search.page.scss'],
})
export class MsdsSearchPage implements OnInit {

  @Input() form = {
    project_id: null,
    company_id: null,
    msds_types: [],
    start_date: '',
    end_date: '',
    search_text: '',
    limit_no: 0
  }
  
  temptForm = {
    project_id: null,
    company_id: null,
    msds_types: [],
    start_date: '',
    end_date: '',
    search_text: '',
    limit_no: 0
  }

  constructor(
    private _modal: ModalController,
    public user: UserService,
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
