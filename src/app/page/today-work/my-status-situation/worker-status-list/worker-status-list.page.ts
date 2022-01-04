import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchPeopleComponent } from 'src/app/component/modal/search-people/search-people.component';
import { SelectPeopleComponent } from 'src/app/component/select/select-people/select-people.component';
import { WorkerStatusAddPage } from '../worker-status-add/worker-status-add.page';

@Component({
  selector: 'app-worker-status-list',
  templateUrl: './worker-status-list.page.html',
  styleUrls: ['./worker-status-list.page.scss'],
})
export class WorkerStatusListPage implements OnInit {

  menuCount:Number = 1;
  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
  }
  async add_work() {
    const modal = await this.modal.create({
      component:WorkerStatusAddPage
    });
    modal.present();
  }
}
