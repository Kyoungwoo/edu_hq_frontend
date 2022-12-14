import { FutItem, FileJson, FileBlob } from './../../../../basic/service/core/file.service';
import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular'
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { PeopleDeleteComponent } from 'src/app/component/modal/people-delete/people-delete.component';
import { SearchAttendanceComponent } from 'src/app/component/modal/search-attendance/search-attendance.component';
import { QrEducationInPage } from '../qr-education-in/qr-education-in.page';

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
  project_name: string;

  company_id:number;
  company_name: string;

  create_user_id: number;
  ctgo_education_safe_name: string
  user_name: string;
  education_safe_state: string;
  ctgo_education_safe_type: string;
  ctgo_education_safe_title: string;
  education_safe_id: number;
  create_date: string;
  education_safe_manager_names:string;
  company_file_data: FutItem[] = [];

  education_safe_file_data: FutItem[] = [];
  file: (File|FileBlob)[] = [];
  file_json: FileJson = new FileJson();
}

class attendantRes {
  create_user_id: number;
  account_id: string;
  company_id: number;
  user_id: string;
  user_name: string;
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

  form = new EditItem();
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
    ctgo_occupation_name:string;
  }>

  attendantRes:ConnectResult<attendantRes>;
  
  attentForm = {
    education_safe_id:0,
    search_text:''
  }
  eduState = '';

  user_id = [];


  editable = {
    update:true,
    educationMenu:1,
    educationMenu_state: false,
    my_state: false
  };

  eduUpdate:boolean = false;

  input_active:boolean = false;

  constructor(
    private connect: ConnectService,
    private date: DateService,
    private _modal: ModalController,
    private toast: ToastService,
    public user: UserService,
    private alert: AlertService,
  ) { }


  async ngOnInit() {
    if(this.item) {
      await this.getItem();
      this.eduGetList();
    } else {
      const { belong_data } = this.user.userData;
      this.form.education_safe_date = this.date.today();

      this.form.project_id = belong_data.project_id;
      this.form.project_name = belong_data.project_name;

      this.form.company_id = belong_data.company_id;
      this.form.company_name = belong_data.company_name;

      this.form.education_safe_state = '?????? ???'
      this.form.create_date = this.date.today();
      this.input_active = true;

      // this.editable.update = true;
    }
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: SearchAttendanceComponent,
      componentProps:{
        title:'????????????'
      }
    })
    modal.present();
  }

  async eduGetList() {
    this.res = await this.connect.run('/education/attendant/list',{
      education_safe_id:this.item.education_safe_id,
      search_text:this.attentForm.search_text
    });
    if(this.res.rsCode === 0) {
      this.user_id = [];
      this.res?.rsMap.map((data) => {
        this.user_id.push(data.user_id);
      });
      this.eduUpdate = true;
      console.log("this.eduUpdate - ",this.eduUpdate);
    }
  }
  notReady() {
    this.toast.present({message:'?????????....',color:'warning'});
  }
  
  async getItem() {
    const res = await this.connect.run('/education/detail',{education_safe_id:this.item.education_safe_id},{
      parse:['education_safe_manager_ids','education_safe_manager_names','education_safe_file_data', 'company_file_data']
    });
    if(res.rsCode === 0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      };
      // console.log('this.form - ', this.form);
      
      this.form.education_safe_manager_ids.forEach(item => {
        if(Number(item) === this.user.userData.user_id) this.editable.educationMenu_state = true;
      });

      // if(this.form.create_user_id !== this.user.userData.user_id) this.editable.update = true;

      if(this.form.create_user_id === this.user.userData.user_id) this.editable.my_state = true;
      
    }
    this.input_active = true;
  }
  async updateItem() {
    console.log("update - ", this.form);
    if(!this.form.ctgo_education_safe_id) return this.toast.present({message:'???????????? ????????? ?????????.', color:'warning'});
    if(!this.form.education_safe_target) return this.toast.present({message:'??????????????? ????????? ?????????.', color:'warning'});
    if(!this.form.education_safe_place) return this.toast.present({message:'??????????????? ????????? ?????????.', color:'warning'});
    if(!this.form.education_safe_date) return this.toast.present({message:'???????????? ????????? ?????????.', color:'warning'});
    if(!this.form.education_safe_start_time) return this.toast.present({message:'??????????????? ????????? ?????????.', color:'warning'});
    if(!this.form.education_safe_end_time) return this.toast.present({message:'??????????????? ????????? ?????????.', color:'warning'});
    let start_time = Number(this.form.education_safe_start_time.split(':')[0]+this.form.education_safe_start_time.split(':')[1]);
    let end_time = Number(this.form.education_safe_end_time.split(':')[0]+this.form.education_safe_end_time.split(':')[1]);
    if(start_time >= end_time) return this.toast.present({message:'????????????????????? ???????????????????????? ???????????? ????????????.', color:'warning'});
    const alert = await this.alert.present({
      message:'?????????????????????????',
      buttons:[
        {text:'?????????'},
        {text:'???',
          handler: async() => {
            const res = await this.connect.run('/education/update', this.form);
            if(res.rsCode === 0) {
              this._modal.dismiss(true);
              this.toast.present({message:'?????????????????????.',color:'primary'});
            } else {
              this.toast.present({message:res.rsMsg,color:'warning'})
            }
          }
        }
      ]
    });
    alert.present();
  }

  async submit() { 
    // if(this.form.file_json.insert.length){
    //   this.form.file_json.insert.map((item) => {
    //     if(item.view_type === 'EDU_ONE') item.order_no = 1;
    //     if(item.view_type === 'EDU_TWO') item.order_no = 2;
    //   });
    // }
    if(!this.form.ctgo_education_safe_id) return this.toast.present({message:'???????????? ????????? ?????????.', color:'warning'});
    if(!this.form.education_safe_target) return this.toast.present({message:'??????????????? ????????? ?????????.', color:'warning'});
    if(!this.form.education_safe_place) return this.toast.present({message:'??????????????? ????????? ?????????.', color:'warning'});
    if(!this.form.education_safe_date) return this.toast.present({message:'???????????? ????????? ?????????.', color:'warning'});
    if(!this.form.education_safe_start_time) return this.toast.present({message:'??????????????? ????????? ?????????.', color:'warning'});
    if(!this.form.education_safe_end_time) return this.toast.present({message:'??????????????? ????????? ?????????.', color:'warning'});
    let start_time = Number(this.form.education_safe_start_time.split(':')[0]+this.form.education_safe_start_time.split(':')[1]);
    let end_time = Number(this.form.education_safe_end_time.split(':')[0]+this.form.education_safe_end_time.split(':')[1]);
    if(start_time >= end_time) return this.toast.present({message:'????????????????????? ???????????????????????? ???????????? ????????????.', color:'warning'});
    const alert = await this.alert.present({
      message:'?????????????????????????',
      buttons:[
        {text:'?????????'},
        {text:'???',
          handler: async() => {
            const res = await this.connect.run('/education/insert',this.form);
            if(res.rsCode === 0) {
              this._modal.dismiss(true);
              this.toast.present({message:'?????????????????????.',color:'primary'});
            } else {
              this.toast.present({message:res.rsMsg,color:'warning'});
            }
          }
        }
      ]
    });
    alert.present();
  }

  async userInfo(item) {
    const modal = await this._modal.create({
       component:PeopleDeleteComponent,
       componentProps:{
        item,
        ...{menu_state:this.editable.educationMenu_state,my_state:this.editable.my_state, type: 'EDU'}
       }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.eduGetList();
    }
  }

  async eduAdd() {
    const modal = await this._modal.create({
      component:SearchAttendanceComponent,
      componentProps:{
        project_id: this.user.userData.belong_data.project_id,
        company_id: this.user.userData.belong_data.company_id,
        educationType: false,
        value: this.user_id,
        title: '?????????'
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.user_id = [];
      data.forEach(item => {
        if(!this.user_id.includes(item.user_id)) this.user_id.push(item.user_id)
      });
      const res = await this.connect.run('/education/attendant/insert',{
        attendant_user_ids:this.user_id,
        education_safe_id:this.item.education_safe_id
      });
      if(res.rsCode === 0) {
        this.toast.present({message:'???????????? ????????? ?????????????????????.',color:'primary'});
        this.eduGetList();
      } else {
        this.toast.present({message:res.rsMsg,color:'warning'});
      }
    }
  }

  async qrAdd() {
    const modal = await this._modal.create({
      component:QrEducationInPage,
      componentProps: {
        item:this.form
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.eduGetList();
    }
  }

  async deleteItem() {
    const alert = await this.alert.present({
      message:'?????????????????????????',
      buttons:[
        {text:'?????????'},
        {text:'???',
          handler:async() => {
            const res = await this.connect.run('/education/delete',{education_safe_id:this.item.education_safe_id});
            if(res.rsCode === 0) {
              this.toast.present({message:'?????????????????????.',color:'primary'});
              this._modal.dismiss(true);
            }
          }
        }
      ]
    });
    alert.present();
  }

  async educationText(ctgo_education_safe_id) {
    if(!ctgo_education_safe_id || this.item) return;
    const res = await this.connect.run('/education/text/get', {
      ctgo_education_safe_id
    });
    
    if(res.rsCode === 0) {
      this.form.education_safe_text = res.rsObj.ctgo_education_safe_text;
    }
  }
}
