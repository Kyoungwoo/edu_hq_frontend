import { Component, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';

@Component({
  selector: 'app-work-standard-set',
  templateUrl: './work-standard-set.page.html',
  styleUrls: ['./work-standard-set.page.scss'],
})
export class WorkStandardSetPage implements OnInit {

  menuCount:Number = 1;
  //공종 시작
  constructionForm = 0;
  resConstruction:ConnectResult <{
    ctgo_construction_id: number, // 공종ID
    ctgo_construction_name: string, // 공종명
    project_id: number, // 현장 ID
    ctgo_construction_use_state: number// 1 사용 / 0 미사용
  }>
  basicArr = [
    {
      ctgo_construction_name:'기계',
      ctgo_construction_use_state:1
    },
    {
      ctgo_construction_name:'건축',
      ctgo_construction_use_state:1
    },
    {
      ctgo_construction_name:'조경',
      ctgo_construction_use_state:1
    },
    {
      ctgo_construction_name:'토목',
      ctgo_construction_use_state:1
    },
    {
      ctgo_construction_name:'전기',
      ctgo_construction_use_state:1
    },
    {
      ctgo_construction_name:'소방',
      ctgo_construction_use_state:1
    },
    {
      ctgo_construction_name:'통신',
      ctgo_construction_use_state:1
    }
]
  //공종 끝
  constructor(
    private connect: ConnectService
  ) { }

  ngOnInit() {
    this.getConstruction();
  }

  //공종 시작
  async getConstruction() {
    this.resConstruction = await this.connect.run('/project/construction/get',{project_id:this.constructionForm});
    if(this.resConstruction.rsCode === 0) {};
  }
  
  //공종 끝
}