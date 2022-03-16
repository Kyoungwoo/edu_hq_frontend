import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { SearchPeopleComponent } from 'src/app/component/modal/search-people/search-people.component';

export class SafetyMeetingItem {
  safety_meeting_resolve: string;
  safety_meeting_content: string;
  safety_meeting_place: string;
  company_id: number;
  safety_meeting_date: string;
  project_id: number;
  project_name: string;
  user_name: string;
  create_date: string;
  company_name: string;
  safety_meeting_id: number;
  approval_cnt_answer: string;
  user_id:number;
  approval_default_data:
    {
      default_type:string;
      answer_datas:[{
        approval_order_no: number,
        approval_last_state: number,
        answer_user_id: number
      }];
      refer_datas:[{
        refer_user_id: number
      }];
    }[] = [];
  safety_meeting_type: string;
  safety_meeting_etc: string;
  safety_meeting_file_data: FutItem[] = [];
  file: (File | FileBlob)[] = [];
  file_json: FileJson = new FileJson();
}


@Component({
  selector: 'app-minutes-edit',
  templateUrl: './minutes-edit.page.html',
  styleUrls: ['./minutes-edit.page.scss'],
})
export class MinutesEditPage implements OnInit {

  @Input() item;

  form: SafetyMeetingItem = new SafetyMeetingItem();

  user_Check:boolean = false;



  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private toast: ToastService,
    public user: UserService,
    private date: DateService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    console.log("zzzzzzzzzzz",this.item);
    this.form.approval_default_data.push({
      default_type:'ANSWER',
      answer_datas:[{
        answer_user_id:this.user.userData.user_id,
        approval_last_state:0,
        approval_order_no:1
      }],
      refer_datas:[{
        refer_user_id:this.user.userData.user_id
      }]
    });
    
    if (this.item.safety_meeting_id) {
      this.form.safety_meeting_id = this.item.safety_meeting_id
      this.get();
    } else {
      this.form.project_id = this.user.userData.belong_data.project_id;
      this.form.company_name = this.user.userData.belong_data.company_name;
      this.form.safety_meeting_date = this.date.today();
      this.form.user_name = this.user.userData.user_name;
      this.getDefault();
      this.form.safety_meeting_type = this.item;
    }
  }

  dismiss() {
    this._modal.dismiss('Y');
  }

  async get() {
    const res = await this.connect.run('/board/safety_meeting/detail', { safety_meeting_id: this.item.safety_meeting_id });
    if (res.rsCode === 0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      };
      
      if(this.form.user_id === this.user.userData.user_id) this.user_Check = true;
      
    }
  }

  async getDefault() {
    const res = await this.connect.run('/board/safety_meeting/default/get', {
      // company_id:this.user.userData.belong_data.company_id,
      company_id: 1,
      project_id: this.user.userData.belong_data.project_id
    });
    if (res.rsCode === 0) {
      if (this.item === '안전 및 보건에 관한 협의체 회의록') {
        this.form.safety_meeting_content = res.rsObj.safety_default;
      } else if (this.item === '노사 협의체 회의록') {
        this.form.safety_meeting_content = res.rsObj.union_default;
      } else {
        this.form.safety_meeting_content = res.rsObj.health_default;
      }
    }
  }
  async approvalPeople() {
    const modal = await this._modal.create({
      component: SearchPeopleComponent,
      componentProps: {
        type: "approval"
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
   
  }

  async whileSave(save) {
    if (!this.form.safety_meeting_content) return await this.toast.present({ message: '회의록 협의 내용을 입력해주세요.', color: 'danger' });
    if (!this.form.safety_meeting_date) return await this.toast.present({ message: '회의록 일자를 입력해주세요.', color: 'danger' });
    if (!this.form.safety_meeting_etc) return await this.toast.present({ message: '회의록 기타내용을 입력해주세요.', color: 'danger' });
    if (!this.form.safety_meeting_place) return await this.toast.present({ message: '회의록 장소를 입력해주세요.', color: 'danger' });
    if (!this.form.safety_meeting_resolve) return await this.toast.present({ message: '회의록 의결내용을 입력해주세요.', color: 'danger' });
    if (!this.form.safety_meeting_type) return await this.toast.present({ message: '회의록 유형을 입력해주세요.', color: 'danger' });
    if (this.item === '안전 및 보건에 관한 협의체 회의록') {
      this.form.safety_meeting_type = '안전';
    } else if (this.item === '노사 협의체 회의록') {
      this.form.safety_meeting_type = '노사';
    } else {
      this.form.safety_meeting_type = '산업';
    }
    this.form.project_id = this.user.userData.belong_data.project_id;
    const alert = await this.alert.present({
      message: this.item.safety_meeting_id ? '수정 하시겠습니까?' : '저장 하시겠습니까?',
      buttons: [
        { text: '아니오' },
        {
          text: '예',
          handler: async () => {
            if (this.item.safety_meeting_id) {
              // this.form.file_json = {"insert":[],"update":[],"delete":[]};
              const res = await this.connect.run('/board/safety_meeting/update', this.form, {});
              if (res.rsCode === 0) {
                // this._modal.dismiss('Y');
              }
            } else {
             
              if (save === 1) this.form.approval_cnt_answer = '임시저장';
              if (save === 2) this.form.approval_cnt_answer = '결재요청';
              
              const res = await this.connect.run('/board/safety_meeting/insert ', this.form, {});
              if (res.rsCode === 0) {
              }
            }
          }
        }
      ]
    });
    alert.present();
  };

  async approvalDelete() { 
    const alert = await this.alert.present({
      message:'회의록을 삭제하시겠습니까?',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler: async() => {
            const res = await this.connect.run('/board/safety_meeting/delete',{
              safety_meeting_ids:[this.item.safety_meeting_id]
            },{});
            if(res.rsCode === 0) {
              this._modal.dismiss('Y');
            }
          }
        }
      ]
    })
  }
}


