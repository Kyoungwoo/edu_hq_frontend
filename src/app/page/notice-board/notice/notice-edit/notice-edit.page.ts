import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { NoticeOpenRangePage } from '../../notice-open-range/notice-open-range.page';

export class NoticeItem {
  notice_title: string;
  notice_content: string;
  company_id: number;
  project_id: number;
  user_name: string;
  company_name: string;
  create_date: string;
  hit_count: number;
  project_name: string;
  notice_id: number;
  notice_type: string;
  notice_file_data: FutItem[] = [];
  file: (File|FileBlob)[] = [];
  file_json: FileJson = new FileJson();
  public_scope_allstate: boolean;
  public_scope_one: string;
  public_scope_two: string;
  public_scope_name: string;
};

@Component({
  selector: 'app-notice-edit',
  templateUrl: './notice-edit.page.html',
  styleUrls: ['./notice-edit.page.scss'],
})
export class NoticeEditPage implements OnInit {

  @Input() notice_id; //LIST 에서 가져오는 값

  title:string;

  form = new NoticeItem();

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private toast: ToastService,
    public user: UserService
  ) { }

  ngOnInit() {
    if(this.notice_id) {
      this.title = '상세';
      this.get();
    } else {
      this.title = '등록';
    }
  }

  async get() { //상세보기
    const res = await this.connect.run('/board/notice/detail', { notice_id: this.notice_id });
    if(res.rsCode ===  0) {
      this.form = res.rsObj;
    }
  }

  async noticeInsert() { //등록
    if(!this.form.notice_title) return this.toast.present({ message:'제목을 입력하세요.' });
    //메소드 호출
    const res = await this.connect.run('/board/notice/insert', this.form);
    if(res.rsCode) {
      this._modal.dismiss();
    } else {
      this.connect.error('등록실패', res);
    }
  }

  async update() { //수정
    const res = await this.connect.run('/board/notice/update', this.form);
    if(res.rsCode) {
      this._modal.dismiss();
    } else {
      this.connect.error('수정실패', res);
    }
  }
  async openRange() {
    const modal = await this._modal.create({
      component:NoticeOpenRangePage
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) { 
      this.form.public_scope_name = data.area1 + ' ' + data.area2 + ' ' + data.area3
      console.log("data",data);
      console.log("this.form",this.form);
    }
  }
}
