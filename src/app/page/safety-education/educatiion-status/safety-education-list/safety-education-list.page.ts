import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { promise } from 'protractor';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { PeopleViewComponent } from 'src/app/component/modal/people-view/people-view.component';
import { SafetyEducationDetailEditPage } from '../safety-education-detail-edit/safety-education-detail-edit.page';
import { SafetyEducationDetailSearchPage } from '../safety-education-detail-search/safety-education-detail-search.page';


export class EduItem {
  index:number;
  create_user_id: number;
  ctgo_education_safe_name: string;
  ctgo_education_safe_id: number;
  company_id: number;
  education_safe_target: string;
  education_safe_state: string;
  ctgo_education_safe_type: string;
  education_safe_place: string;
  education_safe_date: string;
  education_safe_start_time: string;
  ctgo_education_safe_title: string;
  project_id: number;
  education_safe_end_time: string;
  company_name: string;
  education_safe_id: number;
  education_safe_instructor: string
  row_count:number;
  date_day:string;
  education_safe_manager_name:string;
  education_safe_manager_id:number;
}
@Component({
  selector: 'app-safety-education-list',
  templateUrl: './safety-education-list.page.html',
  styleUrls: ['./safety-education-list.page.scss'],
})
export class SafetyEducationListPage implements OnInit {

  form = {
    company_id:0,
    ctgo_education_safe_id:0,
    education_safe_state:'전체',
    end_date:this.date.today({date:7}),
    limit_no:0,
    project_id:0,
    search_text:'',
    start_date:this.date.today(),
  }

  res:ConnectResult<EduItem>

  editable ={
    add:false,
    company_id:false
  }

  constructor(
    private _modal: ModalController,
    private date: DateService,
    private connect: ConnectService,
    private toast: ToastService,
    private user: UserService,
    private popover: PopoverController,
    private promise: PromiseService
  ) { }

  async ngOnInit() {
    this.projectRolechekc(),
    this.companyRolecheck()
    
    // await this.promise.wait(() => this.form.company_id);
    this.get();
  }

  projectRolechekc() {
  const { user_role , belong_data} = this.user.userData;
  if(user_role === 'MASTER_HEAD' ||
    user_role === 'PARTNER_GENERAL'||
    user_role === 'PARTNER_HEAD' ||
    user_role === 'MASTER_GENERAL') {
      this.editable.company_id = true;
      this.form.project_id = belong_data.project_id;
      this.form.company_id = belong_data.master_company_id;
    } else if(user_role === 'LH_HEAD') {
      this.editable.add = true;
      this.form.project_id = belong_data.project_id;
    }
  }
  
  companyRolecheck() {
    const { user_role , belong_data} = this.user.userData
    if(user_role === 'MASTER_GENERAL' ||
       user_role === 'MASTER_HEAD') {
        this.form.company_id = belong_data.company_id;
      }
  }
  

  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    this.res = await this.connect.run('/education/list',this.form);
    if(this.res.rsCode === 0) {
      this.res.rsMap.map((item, i) => {
        item.index =  this.res.rsObj.row_count - this.form.limit_no - i;
        item.date_day = this.date.day(item.education_safe_date)[0];
      });
    } else {
      this.toast.present({message:this.res.rsMsg, color:'warning'});
      this.res = null;
    }
  }

  public async edit(item?) {
    const modal = await this._modal.create({
      component: SafetyEducationDetailEditPage,
      componentProps:{
        item
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.get();
    }
  }
  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: SafetyEducationDetailSearchPage,
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.form = data;
      this.get();
    }
  }

  async userInfo(education_safe_manager_id,ev) {
    ev.stopPropagation()
    const popover = await this.popover.create({
      component:PeopleViewComponent,
      componentProps:{
        type:'관리자',
        education_safe_manager_id
      },
      cssClass:'education-info',
      event:ev
    });
    popover.present();
  }
}