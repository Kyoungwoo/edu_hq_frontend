import { LanguagePackService } from './../../../../basic/service/core/language-pack.service';
import { FileService } from './../../../../basic/service/core/file.service';
import { UserService } from './../../../../basic/service/core/user.service';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedure-search',
  templateUrl: './procedure-search.page.html',
  styleUrls: ['./procedure-search.page.scss'],
})
export class ProcedureSearchPage implements OnInit {
  @Input() form = {
    project_id:null,
    master_company_id:null,
    master_company_name:'',
    end_date:'',
    work_procedure_languages:[],
    search_text:'',
    start_date:'',
    limit_no: 0
  }
  
  temptForm = {
    project_id:null,
    master_company_id:null,
    master_company_name:'',
    end_date:'',
    work_procedure_languages:[],
    search_text:'',
    start_date:'',
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
