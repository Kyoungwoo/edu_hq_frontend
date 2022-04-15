import { Component, Input, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FutItem } from 'src/app/basic/service/core/file.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

export class HistoryItem {
  company_id:number;
  ctgo_job_position_id:number;
  user_name:string;
  ctgo_occupation_name:string;
  ctgo_job_position_name:string;
  project_name:string;
  ctgo_occupation_id:number;
  user_id:number;
  project_id:number;
  company_name:string;
  project_work_state:number;
  ctgo_country_id:number;
  work_contract_type:string;
  ctgo_country_name:string;
  ctgo_safe_job_id:number;
  safe_job_name:string;
  user_profile_file_data:FutItem[] = [];
}

export class HireItem {
  education_credit_time: number;
  hire_edu_state: string;
  ctgo_education_safe_title: string;
  education_credit_date: number;
  create_date: string;
  user_id: number
}

export class RoutineItem {
  education_complete_time: number;
  ctgo_education_safe_name: string;
  education_remaining_date: number;
  routine_edu_state: string;
  user_id: number;
  education_remaining_time: number;
  education_start_term: string;
  education_end_term: string;
  education_recommended_time:number;
}

@Component({
  selector: 'app-safety-education-history-detail',
  templateUrl: './safety-education-history-detail.page.html',
  styleUrls: ['./safety-education-history-detail.page.scss'],
})
export class SafetyEducationHistoryDetailPage implements OnInit {

  @Input() user_id;

  menuCount = 1;

  useForm = {
    attendant_user_id:0,
    limit_no:0,
    search_text:''
  }

  res:HistoryItem = new HistoryItem();

  hireRes:HireItem = new HireItem();

  routineRes:RoutineItem = new RoutineItem();

  specialRes:ConnectResult<{
    education_complete_time: number,
    ctgo_education_safe_name: string,
    education_remaining_date: number,
    user_id: number,
    special_edu_state: string,
    education_remaining_time: number,
    create_date: string,
    education_recommended_time: number,
    education_towercrane_state: number
  }>;

  useRes:ConnectResult<{
    index:number,
    ctgo_education_safe_name: string,
    ctgo_education_safe_id: number,
    ctgo_education_safe_title: string,
    education_safe_id: number,
    ctgo_education_safe_type: string,
    education_safe_time: number,
    create_date: string,
    row_count: number
  }>



  constructor(
    private connect: ConnectService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.getItem();
    this.hireItem();
    this.routineItem();
    this.specialItem();
    this.useItem();
  }

  async getItem() {
    const res = await this.connect.run('/education/state/user/detail',{attendant_user_id:this.user_id},{
      parse:['safe_job_name','user_profile_file_data']
    });
    if(res.rsCode === 0) {
      this.res = res.rsObj;
      this.res?.safe_job_name?.toString();
    }
  }

  async hireItem() {
    const res = await this.connect.run('/education/report/hire/get',{approval_user_id:this.user_id});
    console.log("this.hireRes : ",this.hireRes);
    if(res.rsCode === 0) {
      this.hireRes = res.rsObj;
    }
  }

  async routineItem() {
    const res = await this.connect.run('/education/report/routine/get',{approval_user_id:this.user_id});
    if(res.rsCode === 0) {
      this.routineRes = res.rsObj;
    } 
  }

  async specialItem() {
    const res = await this.connect.run('/education/report/special/get',{approval_user_id:this.user_id});
    if(res.rsCode === 0) {
      this.specialRes = res;
    } 
  }

  specialToday(state,item) {
    if(state) {
      let recommendedeWidth = 0;
      const recommAllTiem = item.education_towercrane_state ? 2:8;
      recommendedeWidth = (100 * item.education_recommended_time) / recommAllTiem;
      return `width:${recommendedeWidth}%`;
    } else {
      let completeWidth = 0;
      const towercraneAllTiem = item.education_towercrane_state ? 2:8;
        if(item.education_complete_time === 0) completeWidth = 0;
        else completeWidth = 100 * item.education_complete_time/towercraneAllTiem;
        return `width:${completeWidth}%`;
    }
  }

  specialPull(state,item) {
    if(state) {
      let recommendedeWidth = 0;
      recommendedeWidth = (100 * item.education_recommended_time) / 16;
      return `width:${recommendedeWidth}%`;
    } else {
      let completeWidth = 0;
        if(item.education_complete_time === 0) completeWidth = 0;
        else completeWidth = 100 * item.education_complete_time/16;
        return `width:${completeWidth}%`;
    }
  }

  async useItem(limit_no = this.useForm.limit_no) {
    this.useForm.limit_no = limit_no;
    this.useForm.attendant_user_id = this.user_id
    const res = await this.connect.run('/education/state/user/list',this.useForm);
    if(res.rsCode === 0) {
      this.useRes = res;
      this.useRes.rsMap.forEach((item,i) => {
        item.index = res.rsObj.row_count - this.useForm.limit_no - i
      });
    } else {
      this.useRes = null;
    }
  }
}
