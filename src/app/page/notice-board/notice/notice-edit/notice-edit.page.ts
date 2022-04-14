import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SmarteditComponent } from 'src/app/basic/component/input/smartedit/smartedit.component';
import { ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem, FileService } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { NoticeOpenRangePage, NoticePublicScope, scopeOne, scopeTwo } from '../../notice-open-range/notice-open-range.page';


export class NoticeItem {
  notice_title: string;
  notice_content: string;
  project_id: number;
  user_name: string;
  company_name: string;
  scope_company_name: string;
  create_date: string;
  hit_count: number;
  project_name: string;
  notice_id: number;
  notice_type: string;
  notice_file_data: FutItem[] = [];
  file: (File|FileBlob)[] = [];
  file_json: FileJson = new FileJson();
  create_user_id: number;
  master_company_id: number;
}

@Component({
  selector: 'app-notice-edit',
  templateUrl: './notice-edit.page.html',
  styleUrls: ['./notice-edit.page.scss'],
})
export class NoticeEditPage implements OnInit {

  update_state = false;

  permission = {
    edit: false
  }

  @ViewChild('noticeText') noticeText:SmarteditComponent;

  @Input() item; //LIST 에서 가져오는 값

  title:string;

  @Input() form:NoticeItem = new NoticeItem();
  validator = new Validator(new NoticeItem()).validator;

  useNotice:boolean = false;

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private toast: ToastService,
    public user: UserService,
    private date: DateService,
    private alert: AlertService,
    private file: FileService
  ) { }

  ngOnInit() {
    // if(this.user.userData.belong_data.company_contract_type === 'LH') { 
    //   this.form.project_id = 0;
    // }
    this.getPermission();
    if(this.item) {
      this.title = '상세';
      this.get();
    } else {
      this.update_state = true;
      console.log("item",this.update_state);
      this.form.company_name = this.user.userData.belong_data.company_name;
      this.form.user_name = this.user.userData.user_name;
      this.form.create_date = this.date.today();
      this.title = '등록';
    }
  }

  getPermission() {
    const company_contract_type = this.user.userData.belong_data.company_contract_type;
    if(company_contract_type === 'LH'
    || company_contract_type === '원청사') {
      this.permission.edit = true;
    } else {
      this.permission.edit = false;
    }
  }

  async get() { //상세보기
    const res = await this.connect.run('/board/notice/detail', { 
      notice_id: this.item.notice_id 
    }, { loading: true, parse: ['notice_file_data'] });
    if(res.rsCode ===  0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      } 

      // if(this.form.notice_file_data.length){
      //   this.form.notice_file_data.map((item) => {
      //     // item.full_url.create
      //     let testt = this.file.dataUrlToBlob(String(item));
      //     // URL.createObjectURL(item);
          
      //     console.log(item.testt);
      //   });
      // }

      
      if(this.user.userData.user_id === this.form.create_user_id) {
        this.useNotice = true;
      }
      // const scopeOne = this.noticeRange.list1.find(item => item.value === this.form.public_scope_one);
      // const scopeTwo = this.noticeRange.list2.find(item => item.value === this.form.public_scope_two);
      // this.rangeText = `${scopeOne.text},${scopeTwo.text},${this.form.scope_company_name ? this.form.scope_company_name : ''}`;
      // if(!this.form.scope_company_name) {
      //   this.rangeText.substring(1,this.rangeText.length -1);
      // }
    }
  }

  public submit() {
    this.noticeText.update();
    
    if(this.form.notice_id) this.update();
    else this.noticeInsert();
  }

  async noticeInsert() { //등록
    if(!this.form.project_id) return this.toast.present({message:'현장명을 입력해주세요.',color:'warning'});
    if(!this.form.notice_type) return this.toast.present({message:'구분을 선택해주세요.',color:'warning'});

    //메소드 호출
    const alert = await this.alert.present({
      message:'등록 하시겠습니까?',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler:async() => {
            const res = await this.connect.run('/board/notice/insert', this.form);
            if(res.rsCode === 0) {
              this._modal.dismiss('Y');
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          }
        }
      ]
    });
    alert.present();
  }
  async update() { //수정
    if(!this.form.project_id) return this.toast.present({message:'현장명을 입력해주세요.',color:'warning'});
    if(!this.form.notice_type) return this.toast.present({message:'구분을 선택해주세요.',color:'warning'});
    
    const alert = await this.alert.present({
      message:'수정 하시겠습니까?',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler:async() => {
            const res = await this.connect.run('/board/notice/update', this.form);
            if(res.rsCode === 0) {
              this.update_state = false;
              this._modal.dismiss('Y');
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
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
            const res = await this.connect.run('/board/notice/delete', {
              notice_ids: [this.item.notice_id]
            });
            if (res.rsCode === 0) {
              this._modal.dismiss('Y');
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          }
        }
      ]
    })
  }

  dismiss() {
    this._modal.dismiss();
  }

  updateButton(){
    if(this.update_state) this.submit();
    else this.update_state = true;
  }
}