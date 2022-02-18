import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-search',
  templateUrl: './detail-search.component.html',
  styleUrls: ['./detail-search.component.scss'],
})
export class DetailSearchComponent implements OnInit {

  @Input() type
  form = {
    project_id:0,
    master_company_id:0
  }
  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {}


  search() {
    this._modal.dismiss(this.form);
  }
}
