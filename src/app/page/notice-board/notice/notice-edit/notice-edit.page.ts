import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { NoticeOpenRangePage, NoticePublicScope, scopeOne, scopeTwo } from '../../notice-open-range/notice-open-range.page';


export class NoticeItem implements NoticePublicScope {
  notice_title: string;
  notice_content: string;
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

  company_id: number;
  public_scope_allstate: boolean;
  public_scope_one: scopeOne;
  public_scope_two: scopeTwo;
}

@Component({
  selector: 'app-notice-edit',
  templateUrl: './notice-edit.page.html',
  styleUrls: ['./notice-edit.page.scss'],
})
export class NoticeEditPage implements OnInit {

  @Input() notice_id; //LIST 에서 가져오는 값

  title:string;

  form = new NoticeItem();

  rangeText = '';

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private toast: ToastService,
    public user: UserService,
    private noticeRange: NoticeOpenRangePage
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
    const { 
      company_id,
      public_scope_allstate,
      public_scope_one,
      public_scope_two
     } = this.form;
    const modal = await this._modal.create({
      component:NoticeOpenRangePage,
      componentProps: {
        form: {
          company_id,
          public_scope_allstate,
          public_scope_one,
          public_scope_two
        }
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    const scope = <NoticePublicScope>data;
    if(scope) {
      const scopeOne = this.noticeRange.list1.find(item => item.value === scope.public_scope_one);
      const scopeTwo = this.noticeRange.list2.find(item => item.value === scope.public_scope_two);
      this.rangeText = `${scopeOne.text},${scopeTwo.text},${scope.company_name}`;
    }
  }
}