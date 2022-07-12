import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FileService } from 'src/app/basic/service/core/file.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';

export class ManualListForm {
  ctgo_manual_ids:number[] = []; // 사용자 매뉴얼 구분 ID
  start_date:string = null; // 작성검색시작일
  end_date:string = null; // 작성검색종료일
  search_text:string = ''; // 검색어(제목)
  limit_no:number = 0; //
}
@Component({
  selector: 'app-manual-detail-search',
  templateUrl: './manual-detail-search.page.html',
  styleUrls: ['./manual-detail-search.page.scss'],
})
export class ManualDetailSearchPage implements OnInit {

  @Input() form:ManualListForm;

  temptForm;

  constructor(
    private file: FileService,
    private _modal: ModalController,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
    this.temptForm = this.file.clone(this.form);
  }

  reset() {
    this.temptForm = this.file.clone(this.form);
  }
  search() {
    this._modal.dismiss(this.temptForm);
  }
}
