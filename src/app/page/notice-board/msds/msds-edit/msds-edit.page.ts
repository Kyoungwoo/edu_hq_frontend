import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SmarteditComponent } from 'src/app/basic/component/input/smartedit/smartedit.component';
import { ConnectService, Validator } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { NoticeOpenRangePage } from '../../notice-open-range/notice-open-range.page';

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
  file_data: FutItem[] = [];
  file: (File|FileBlob)[] = [];
  file_json: FileJson = new FileJson();
  create_user_id:number;
  master_company_id: number;
};

@Component({
  selector: 'app-msds-edit',
  templateUrl: './msds-edit.page.html',
  styleUrls: ['./msds-edit.page.scss'],
})
export class MsdsEditPage implements OnInit {

  update_state = false;

  permission = {
    edit: false
  }

  @ViewChild('msdsText') msdsText:SmarteditComponent;
  
  @Input() item;
  
  title:string;
  validator = new Validator(new MsdsItem()).validator;
  
  updateState: boolean = true;
  useMsds: boolean = false;

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
    
    if(this.user.userData.belong_data.company_contract_type === 'LH' || this.user.userData.belong_data.company_contract_type === '감리사') { 
      this.form.project_id = 0;
    }
    this.getPermission();
    if(this.item?.msds_id) {
      this.title = '상세';
      this.get();
    } else{
      this.form.project_id = this.user.userData.belong_data.project_id;
      this.form.company_name = this.user.userData.user_role;
      this.form.user_name = this.user.userData.user_name;
      this.form.create_date = this.date.today();
      this.title = '등록';
    } 
  }

  getPermission() {
    const company_contract_type = this.user.userData.belong_data.company_contract_type;
    if(company_contract_type === '원청사'
    || company_contract_type === '협력사') {
      this.permission.edit = true;
    } else {
      this.permission.edit = false;
    }
  }

  async get() { //상세보기
    const res = await this.connect.run('/board/msds/detail', { 
      msds_id: this.item.msds_id
     }, { parse: ['file_data'] });
    if(res.rsCode ===  0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      }

        if(this.user.userData.user_id === this.form.create_user_id) {
        this.useMsds = true;
      }
      
    }
  }
  // public submit() {
  //   this.msdsText.update();
  //   if(this.form.msds_id) {
  //     this.update();
  //   } else {
  //     this.MsdsInsert();
  //   }
  // }

  public submit() {
    this.msdsText.update();
    
    if(this.form.msds_id) this.update();
    else this.MsdsInsert();
  }


  async MsdsInsert() { //등록
    if(!this.form.project_id) return this.toast.present({message:'현장명을 입력해주세요.',color:'warning'});
    if(!this.form.msds_type) return this.toast.present({message:'구분을 선택해주세요.',color:'warning'});
    
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
    if(!this.form.msds_type) return this.toast.present({message:'구분을 선택해주세요.',color:'warning'});
  
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
            const res = await this.connect.run('/board/msds/delete', {
              msds_ids: [this.item.msds_id]
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
