import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.page.html',
  styleUrls: ['./business-list.page.scss'],
})

export class BusinessListPage implements OnInit {
  constructor(
    private _modal: ModalController,
    private alert: AlertService,
  ) {
  }

  ngOnInit() {

  }
  
}
