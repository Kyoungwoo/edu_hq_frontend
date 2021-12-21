import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { DetailSearchComponent } from 'src/app/component/detail-search/detail-search.component';
import { NoticeDetailComponent } from 'src/app/component/notice-detail/notice-detail.component';

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
    private connect : ConnectService,
    private modal : ModalController
  ) { }

  async ngOnInit() {
    // this.getList();
  }

  // async getList(){
  //   const res = await this.connect.run('/board/notice/list',this.form,{loading:'목록 불러오는중..'});
  //   if(res.rsCode === 0) {
  //     const list = res.rsMap;
  //     console.log("asdfasdf",list)

  //   }
  // }
  async detailSerach(){
    const modal = await this.modal.create({
      component:DetailSearchComponent
    });
    modal.present();
  }
  async noticeDetail(){
    const modal =  await this.modal.create({
      component:NoticeDetailComponent
    });
    modal.present();
  }
}
