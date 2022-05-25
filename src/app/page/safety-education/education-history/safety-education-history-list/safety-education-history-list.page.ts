import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { PeopleViewComponent } from 'src/app/component/modal/people-view/people-view.component';
import { SafetyEducationHistoryDetailPage } from '../safety-education-history-detail/safety-education-history-detail.page';

@Component({
  selector: 'app-safety-education-history-list',
  templateUrl: './safety-education-history-list.page.html',
  styleUrls: ['./safety-education-history-list.page.scss'],
})
export class SafetyEducationHistoryListPage implements OnInit {

  form = {
    company_id: 0, // 업체 ID
    education_safe_state: '필요', // 양호 필요 기한초과
    limit_no: 0,// 20개씩
    project_id: 0, // 현장 ID
    search_text:'' // 검색어
  }
  res:ConnectResult<{
    index:number,
    ctgo_safe_job_name:string,
    ctgo_job_position_id:number,
    user_name:string,
    ctgo_occupation_name:string,
    ctgo_job_position_name:string,
    project_name:string,
    ctgo_occupation_id:number,
    user_id:number,
    project_id:number,
    recruitement_state:string,
    require_state:string, //정기
    special_state:string, //특별
    work_contract_type:'일용직' | '상용직',
    row_count:number,
    company_name:string,
    special_edu_state_result:string
  }>

  permission = {
    company_id: false
  }
  editable = {
    company_id:false,
    add: false
  }
  constructor(
    private modal : ModalController,
    private connect: ConnectService,
    public user: UserService,
    private popover: PopoverController
  ) { }

  async ngOnInit() {
    await this.projectRolechekc();
    this.getForm();
    this.getList();
  }

  projectRolechekc() {
    const { user_role , belong_data} = this.user.userData;
    console.log("belong_data.company_id",belong_data.company_id);
    if(user_role === 'MASTER_HEAD' ||
      user_role === 'PARTNER_GENERAL'||
      user_role === 'PARTNER_HEAD' ||
      user_role === 'MASTER_GENERAL') {
        this.editable.company_id = true;
        this.form.project_id = belong_data.project_id;
        this.form.company_id = belong_data.company_id;
      } else if(user_role === 'LH_HEAD') {
        this.form.project_id = belong_data.project_id;
        this.editable.add = true;
      }
  }

  getForm() {
    const { user_role , belong_data} = this.user.userData;
    if(user_role === 'MASTER_HEAD' ||
      user_role === 'PARTNER_GENERAL'||
      user_role === 'PARTNER_HEAD' ||
      user_role === 'MASTER_GENERAL') {
        this.form.project_id = belong_data.project_id;
        this.form.company_id = belong_data.company_id;
      } else if(user_role === 'LH_HEAD') {
        this.permission.company_id = true;
        this.form.project_id = belong_data.project_id;
      }
  }

  async getList(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    const res = await this.connect.run('/education/state/record/list', this.form, {
      parse:['safe_job_name']
    });
    if(res.rsCode === 0) {
      this.res = res;

      this.res.rsMap.forEach(async(item, i) => {
        item.index = res.rsObj.row_count - this.form.limit_no - i; //  - (this.form.limit_no - i);
        item.ctgo_safe_job_name?.toString();
      });
    } else {
      this.res = null;
    }
  }

  async edit(user_id) {
    const modal = await this.modal.create({
      component:SafetyEducationHistoryDetailPage,
      componentProps:{
        user_id
      }
    });
    modal.present();
  }

  async userInfo(education_safe_manager_id,ev) {
    ev.stopPropagation()
    const popover = await this.popover.create({
      component:PeopleViewComponent,
      componentProps:{
        education_safe_manager_id
      },
      cssClass:'education-info',
      event:ev
    });
    popover.present();
  }
}
