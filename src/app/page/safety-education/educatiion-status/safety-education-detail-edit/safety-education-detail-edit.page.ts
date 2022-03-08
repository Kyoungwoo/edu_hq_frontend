import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { SearchAttendanceComponent } from 'src/app/component/modal/search-attendance/search-attendance.component';

export class EditItem {
  ctgo_education_safe_id:number;
  education_safe_date:string;
  education_safe_end_time:string;
  education_safe_instructor:string;
  education_safe_manager_ids:[] = [];
  education_safe_place:string
  education_safe_start_time:string;
  education_safe_target:string;
  education_safe_text:string;
  project_id:number;
  create_user_id: number;
  ctgo_education_safe_name: string
  user_name: string;
  education_safe_state: string;
  ctgo_education_safe_text: string;
  ctgo_education_safe_type: string;
  project_name: string;
  ctgo_education_safe_title: string;
  company_name: string;
  education_safe_id: number;
  create_date: string;
}


@Component({
  selector: 'app-safety-education-detail-edit',
  templateUrl: './safety-education-detail-edit.page.html',
  styleUrls: ['./safety-education-detail-edit.page.scss'],
})
export class SafetyEducationDetailEditPage implements OnInit {


  @Input() item;

  form:EditItem = new EditItem();
  res:ConnectResult<{
    create_user_id: number;
    company_id: number;
    user_id: string;
    user_name: string;
    company_name: string;
    education_safe_id: number;
    create_date: string;
    account_id:string;
    row_count:number;
  }>

  eduState = '';

  constructor(
    private connect: ConnectService,
    private date: DateService,
    private _modal: ModalController,
    private toast: ToastService,
    private user: UserService,
    private alert: AlertService
  ) { }


  ngOnInit() {
    if(this.item) {
      this.eduGetList();
    } else {
      this.form.project_id = this.user.userData.belong_data.project_id;
      this.form.education_safe_state = '교육 전'
      this.form.company_name = `${this.user.userData.user_name} / ${this.user.userData.belong_data.company_name}`
      this.form.create_date = this.date.today();
    }
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: SearchAttendanceComponent,
      componentProps:{
        title:'출석등록'
      }
    })
    modal.present();
  }

  async eduGetList() {
    this.res = await this.connect.run('/education/attendant/list',{education_safe_id:this.item.education_safe_id});
    if(this.res.rsCode === 0) {}
    else this.toast.present({message:this.res.rsMsg, color:'warning'});
  }
  notReady() {
    this.toast.present({message:'준비중....',color:'warning'});
  }

  async submit() {
    this.alert.present({
      message:'저장하시겠습니까?',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler: async() => {
            const res = await this.connect.run('/education/insert',this.form);
            if(res.rsCode === 0) {
              this._modal.dismiss();
              this.toast.present({message:'저장되었습니다.',color:'primary'});
            } else {
              this.toast.present({message:res.rsMsg,color:'warning'});
            }
          }
        }
      ]
    })
  }
}
