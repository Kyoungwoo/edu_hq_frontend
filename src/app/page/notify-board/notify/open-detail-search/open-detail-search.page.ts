import { FileService } from 'src/app/basic/service/core/file.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DateService } from 'src/app/basic/service/util/date.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';

@Component({
  selector: 'app-open-detail-search',
  templateUrl: './open-detail-search.page.html',
  styleUrls: ['./open-detail-search.page.scss'],
})
export class OpenDetailSearchPage implements OnInit {

  // form = {
  //   create_date:this.date.today({year:-2,month:-1}),
  //   end_date:this.date.today(),
  //   notify_menu:'',
  //   project_id:null,
  //   search_text:''
  // }
  @Input() form:any

  form_dump;

  constructor(
    private date: DateService,
    private _modal: ModalController,
    private file: FileService,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
    this.form_dump = this.file.clone(this.form);
  }

  remove() {
    this.form = this.file.clone(this.form_dump);
  }

  search() {
    this._modal.dismiss(this.form);
  }
}
