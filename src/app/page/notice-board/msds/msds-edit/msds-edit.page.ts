import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { NoticeOpenRangePage, NoticePublicScope, scopeOne, scopeTwo } from '../../notice-open-range/notice-open-range.page';

export class MsdsItem {
  msds_title: string;
  msds_content: string;
  project_id: number;
  user_name: string;
  company_name: string;
  scope_company_name: string;
  create_date: string;
  hit_count: number;
  project_name: string;
  msds_id: number;
  msds_type: string;
  msds_file_data: FutItem[] = [];
  file: (File|FileBlob)[] = [];
  file_json: FileJson = new FileJson();
  create_user_id:number;

  public_scope_allstate: boolean;
  public_scope_one: scopeOne;
  public_scope_two: scopeTwo;
  scope_company_id: number;

};

@Component({
  selector: 'app-msds-edit',
  templateUrl: './msds-edit.page.html',
  styleUrls: ['./msds-edit.page.scss'],
})
export class MsdsEditPage implements OnInit {
  
  @Input() item;
  
  title:string;
  
  rangeText = '';
  useMsds:boolean = true;
  
  updateState:boolean = true;

  form = new MsdsItem();
  // smarteditText:string = '';

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private toast: ToastService,
    public user: UserService,
    private noticeRange: NoticeOpenRangePage,
    private date: DateService,
    private alert:AlertService,
  ) { }

  ngOnInit() {
  
    console.log("this.item",this.item);
    if(this.item?.msds_id) {
      this.title = '상세';
      this.get();
    } else{
      this.form.company_name = this.user.userData.user_role;
      this.form.user_name = this.user.userData.user_name;
      console.log(this.form.user_name);
      this.form.create_date = this.date.today();
      this.title = '등록';
    } 
  }
  async get() { //상세보기
    const res = await this.connect.run('/board/msds/detail', { msds_id: this.item.msds_id });
    if(res.rsCode ===  0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      }

        if(this.user.userData.user_id === this.form.create_user_id) {
        this.useMsds = false;
      }
    }
  }
  async MsdsInsert() { //등록
    if(!this.form.msds_title) return this.toast.present({ message:'제목을 입력하세요.' });
    //메소드 호출
    const alert = await this.alert.present({
      message:'등록 하시겠습니까?',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler:async() => {
            const res = await this.connect.run('/board/msds/insert', this.form);
            if(res.rsCode === 0) {
              this._modal.dismiss('Y');
            } else {
              this.connect.error('등록실패', res);
            }
          }
        }
      ]
    });
    alert.present();
  }
  
  async update() { //수정
    if(!this.form.company_name) return this.toast.present({message:'업체명을 입력해주세요.'});
    if(!this.form.msds_type) return this.toast.present({message:'구분을 선택해주세요.'});
    if(!this.rangeText) return this.toast.present({message:'공개범위를 선택해주세요.'});
    const alert = await this.alert.present({
      message:'수정 하시겠습니까?',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler:async() => {
            const res = await this.connect.run('/board/msds/update', this.form);
            if(res.rsCode === 0) {
              this._modal.dismiss('Y');
            } else {
              this.connect.error('등록실패', res);
            }
          }
        }
      ]
    });
  }
  async Delete() {
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            const res = await this.connect.run('/board/msds/delete', {
              msds_ids: [this.item.msds_id]
            });
            if (res.rsCode === 0) {
              this._modal.dismiss('Y');
            }
          }
        }
      ]
    })
  }
  async openRange() {
    const { 
      scope_company_id,
      public_scope_allstate,
      scope_company_name,
      public_scope_one,
      public_scope_two
     } = this.form;
    const modal = await this._modal.create({
      component:NoticeOpenRangePage,
      componentProps: {
        form: {
          scope_company_id,
          scope_company_name,
          public_scope_allstate,
          public_scope_one,
          public_scope_two
        }
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    const scope = <NoticePublicScope>data;
    this.form = {
      ...this.form,
      ...scope
    }
    if(scope) {
      const scopeOne = this.noticeRange.list1.find(item => item.value === scope.public_scope_one);
      const scopeTwo = this.noticeRange.list2.find(item => item.value === scope.public_scope_two);
      this.rangeText = `${scopeOne.text},${scopeTwo.text},${scope.scope_company_name}`;
    }
  }

  dismiss() {
    this._modal.dismiss();
  }
}
