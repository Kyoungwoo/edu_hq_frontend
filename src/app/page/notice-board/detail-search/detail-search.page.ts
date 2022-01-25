import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';

export class NoticeItem  {
  
  project_id: number;
  company_name: string;
  create_date: string;
  
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

  
  ngOnInit() {
  }
  dismiss(){
    this._modal.dismiss();
  }
  init(){
    
  }
  search(){
    this._modal.dismiss();
  }
}


 





