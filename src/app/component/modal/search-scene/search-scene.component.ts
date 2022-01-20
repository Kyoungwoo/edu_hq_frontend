import { Component, Input, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ModalController } from '@ionic/angular';

type ProjectSearchType = 'ALL' | null;
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

  @Input() type:ProjectSearchType;

  form = {
    search_text: ''
  }
  res:ConnectResult<ProjectItem>;
  selectedItem:ProjectItem;

  constructor(
    private connect: ConnectService,
    private _modal : ModalController
  ) { }

  ngOnInit() {
    if(this.type !== 'ALL') {
      this.get();
    }
  }
  
  async get() {
    if(this.type === 'ALL') {
      this.res = await this.connect.run('/forSignUp/project/get', this.form, { loading: '현장 검색' })
    } else {
      this.res = await this.connect.run('/category/certify/search_my_project/get', this.form, { loading: '현장 검색' });
    }
  }
  select() {
    this._modal.dismiss(this.selectedItem);
  }
}