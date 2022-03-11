import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DateService } from 'src/app/basic/service/util/date.service';

@Component({
  selector: 'app-open-detail-search',
  templateUrl: './open-detail-search.page.html',
  styleUrls: ['./open-detail-search.page.scss'],
})
export class OpenDetailSearchPage implements OnInit {

  form = {
    create_date:this.date.today({year:-2,month:-1}),
    end_date:this.date.today(),
    notify_menu:'',
    project_id:null,
    search_text:''
  }

  constructor(
    private date: DateService,
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }

  remove() {
    this.form = {
      create_date:this.date.today({year:-2,month:-1}),
      end_date:this.date.today(),
      notify_menu:'',
      project_id:null,
      search_text:''
    }
  }

  search() {
    this._modal.dismiss(this.form);
  }

}
