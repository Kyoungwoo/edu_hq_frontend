import { Component, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ModalController } from '@ionic/angular';

class ProjectItem {
  project_name: string;
  project_id: number;
  project_code: string;
}

@Component({
  selector: 'app-search-scene',
  templateUrl: './search-scene.component.html',
  styleUrls: ['./search-scene.component.scss'],
})
export class SearchSceneComponent implements OnInit {

  res:ConnectResult<ProjectItem>;
  selectedItem:ProjectItem = new ProjectItem();

  constructor(
    private connect: ConnectService,
    private _modal : ModalController
  ) { }

  ngOnInit() {
    this.get();
  }
  
  async get() {
    this.res = await this.connect.run('/category/certify/search_my_project/get', {}, {loading:'불러오는중'});
  }

  select() {
    this._modal.dismiss(this.selectedItem);
  }
}
