import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ExcelService } from 'src/app/basic/service/util/excel.service';

export class NoticeItem  {
  project_id: number;
  company_id: number;
  select_type: string;
  search_text: string;
  end_date: string;
  start_date: string;
}
@Component({
  selector: 'app-detail-search',
  templateUrl: './detail-search.page.html',
  styleUrls: ['./detail-search.page.scss'],
})

export class DetailSearchPage implements OnInit {

  @Input() type: string;
  
 form:NoticeItem = new NoticeItem();

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    public user: UserService,
    private date: DateService,
  ) { }

  
  async ngOnInit() {

   
  }

  dismiss(){
    this._modal.dismiss();
  }
  remove(){
    this.form.project_id = 0;
    this.form.company_id = 0;
    this.form.select_type = '';
    this.form.search_text = '';
    this.form.end_date = '';
    this.form.start_date = '';
  }
  async search(){
    this._modal.dismiss(
      this.form
    );
  }
}


 





