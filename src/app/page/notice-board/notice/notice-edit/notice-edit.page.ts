import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

@Component({
  selector: 'app-notice-edit',
  templateUrl: './notice-edit.page.html',
  styleUrls: ['./notice-edit.page.scss'],
})
export class NoticeEditPage implements OnInit {

  @Input() notice_id;
  
  title:string;
  smarteditText:string = '';

  form = {
    file: [],
    file_json: [{inset:[],update:[],delete:[]}],
    notice_content: '',
    notice_title: '',
    notice_type: '',
    project_id: 0,
    public_scope_allstate: false,
    public_scope_one: '',
    public_scope_two: '',
  }

  constructor(
    private connect:ConnectService,
    private _modal:ModalController,
    private toast:ToastService,
    public user:UserService
  ) { }

  ngOnInit() {
    console.log(this.user.userData);

    if(this.notice_id) {
      this.title = '수정'
      this.getItem();
    } else {
      this.title = '등록'
    }; 
  }

  async insert() { //등록
    if(!this.form.notice_title) return this.toast.present({message:'제목을 입력하세요.'});
    //메소드 호출
    const res = await this.connect.run('/board/notice/insert',this.form);
    if(res.rsCode) {
      this._modal.dismiss();
    } else {
      this.connect.error('등록실패',res);
    }
  }

  async getItem() { //상세보기
    const res = await this.connect.run('/board/notice/detail',{notice_id:this.notice_id});
    if(res.rsCode ===  0) {
      this.form = res.rsObj;
      console.log("this.form",this.form);
    }
  }

  async update() { //수정

  }
}
