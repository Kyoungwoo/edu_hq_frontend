import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailSearchComponent } from 'src/app/component/modal/detail-search/detail-search.component';

@Component({
  selector: 'app-each-device-list',
  templateUrl: './each-device-list.page.html',
  styleUrls: ['./each-device-list.page.scss'],
})
export class EachDeviceListPage implements OnInit {

  constructor(
    private modal:ModalController
  ) { }

  ngOnInit() {
  }

}
