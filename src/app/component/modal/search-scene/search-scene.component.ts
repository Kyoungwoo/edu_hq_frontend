import { Component, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-scene',
  templateUrl: './search-scene.component.html',
  styleUrls: ['./search-scene.component.scss'],
})
export class SearchSceneComponent implements OnInit {

  res:ConnectResult<{
    project_name: string,
    project_id: number,
    project_code: string
  }>;
  sceneItem={
    project_name: '',
    project_id: 0,
    project_code: ''
  }
  constructor(
    private connect: ConnectService,
    private _modal : ModalController,
  ) { }

  ngOnInit() {
    this.get();
  }
  
  choiceItem(item){
    this.sceneItem = item;
    console.log(this.sceneItem);
  }
    async get() {
    this.res = await this.connect.run('/category/certify/search_my_project/get',{},{loading:'불러오는중'});
    if(this.res.rsCode === 0) {
    } else {
      this.connect.error('현장 불러오기 실패', this.res);
    }
  }

  select() {
    this._modal.dismiss(this.sceneItem);
  }
}
