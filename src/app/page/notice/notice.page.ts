import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/basic/service/core/connect.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {

  form = {
    company_ids:[],
    end_date:'',
    notice_types:[],
    project_id:0,
    search_text:'',
    start_date:''
  }
  list:Array <{
    notice_title: "",
    company_id: 0,
    project_id: 0,
    user_name: "",
    company_name: "",
    create_date: "",
    hit_count: 0,
    favorites_state: 0,
    project_name: "",
    notice_id: 9,
    notice_type: ""
  }> = [];

  constructor(
    private connect : ConnectService
  ) { }

  ngOnInit() {
    // this.getList();
  }

  // async getList(){
  //   const res = await this.connect.run('/board/notice/list',this.form,{loading:'목록 불러오는중..'});
  //   if(res.rsCode === 0) {
  //     const list = res.rsMap;
  //     console.log("asdfasdf",list)

  //   }
  // }
}
