import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { NoticeOpenRangePage } from '../../notice-open-range/notice-open-range.page';

@Component({
  selector: 'app-notice-edit',
  templateUrl: './notice-edit.page.html',
  styleUrls: ['./notice-edit.page.scss'],
})
export class NoticeEditPage implements OnInit {

  @Input() notice_id; //LIST 에서 가져오는 값
  test:string = "ddfetr"
  title:string;
  smarteditText:string = '';

  resItem:ConnectResult <{
    company_id: Number,
    company_name: string
    create_date: string
    hit_count: Number
    notice_file_data: null
    notice_id: Number,
    notice_title: string
    notice_type: string
    project_id: Number,
    project_name: string
    user_name: string
    notice_content:string
  }>

  constructor(
    private connect:ConnectService,
    private _modal:ModalController,
    private toast:ToastService,
    public user:UserService
  ) { }

  ngOnInit() {
    if(this.notice_id) {
      this.title = '수정'
      this.getItem();
    } else {
      this.title = '등록'
    };
  }

  async noticeInsert() { //등록
    if(!this.resItem.rsObj.notice_title) return this.toast.present({message:'제목을 입력하세요.'});
    //메소드 호출
    const res = await this.connect.run('/board/notice/insert',this.resItem);
    if(res.rsCode) {
      this._modal.dismiss();
    } else {
      this.connect.error('등록실패',res);
    }
  }

  async getItem() { //상세보기
    this.resItem = await this.connect.run('/board/notice/detail',{notice_id:this.notice_id});
    if(this.resItem.rsCode ===  0) {
      console.log(this.resItem);
    } else {
      this.connect.error('불러오기 실패',this.resItem);
    }
  }

  async update() { //수정

  }
  async openRange() {
    const modal = await this._modal.create({
      component:NoticeOpenRangePage
    });
    modal.present();
  }
}
