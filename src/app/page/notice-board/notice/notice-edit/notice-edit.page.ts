import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
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

  form:NoticeItem = new NoticeItem();
  rangeText = '';

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private toast: ToastService,
    public user: UserService,
    private noticeRange: NoticeOpenRangePage,
    private date: DateService,
  ) { }

  ngOnInit() {
    console.log("zzzzzzzzzzzzzzzzzzzzzz",this.notice_id);
    if(this.notice_id) {
      this.title = '상세';
      this.get();
    } else {
      this.form.company_name = this.user.userData.user_role;
      this.form.user_name = this.user.userData.user_name;
      console.log(this.form.user_name);
      this.form.create_date = this.date.today();
      this.title = '등록';
    }
  }

  async get() { //상세보기
    const res = await this.connect.run('/board/notice/detail', { notice_id: this.notice_id });
    if(res.rsCode ===  0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      } 
      console.log("---------------------form",this.form);
    }
  }

  async noticeInsert() { //등록
    console.log("this.form",this.form.public_scope_two);
    if(!this.form.notice_title) return this.toast.present({ message:'제목을 입력하세요.' });
    //메소드 호출
    const res = await this.connect.run('/board/notice/insert', this.form);
    if(res.rsCode === 0) {
      this._modal.dismiss();
    } else {
      this.connect.error('등록실패', res);
    }
  }

  async update() { //수정
    if(!this.form.company_name) return this.toast.present({message:'업체명을 입력해주세요.'});
    if(!this.form.notice_type) return this.toast.present({message:'구분을 선택해주세요.'});
    if(!this.rangeText) return this.toast.present({message:'공개범위를 선택해주세요.'});
    const res = await this.connect.run('/board/notice/update', this.form);
    if(res.rsCode) {
      // this._modal.dismiss();
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
    console.log("---------------------form",data);
    const scope = <NoticePublicScope>data;
    console.log("scope",scope);
    this.form = {
      ...this.form,
      ...scope
    }
    console.log("this.form",this.form);
    if(scope) {
      const scopeOne = this.noticeRange.list1.find(item => item.value === scope.public_scope_one);
      const scopeTwo = this.noticeRange.list2.find(item => item.value === scope.public_scope_two);
      this.rangeText = `${scopeOne.text},${scopeTwo.text},${scope.company_name}`;
    }
  }
}