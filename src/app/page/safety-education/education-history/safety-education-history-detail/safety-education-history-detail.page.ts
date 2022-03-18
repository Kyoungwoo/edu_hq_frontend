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

  res:HistoryItem = new HistoryItem();
  hireRes:HireItem = new HireItem();
  routineRes:ConnectResult<{
    education_complete_time: number;
    ctgo_education_safe_name: string;
    education_remaining_date: number;
    routine_edu_state: string;
    user_id: number;
    education_remaining_time: number;
    education_start_term: string;
    education_end_term: string;
    education_recommended_time:number;
  }>

  specialRes:ConnectResult<{
    education_complete_time: number,
    ctgo_education_safe_name: string,
    education_remaining_date: number,
    user_id: number,
    special_edu_state: string,
    education_remaining_time: number,
    create_date: string,
    education_recommended_time: number
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
  }

  async getItem() {
    const res = await this.connect.run('/education/state/user/detail',{attendant_user_id:this.user_id},{
      parse:['safe_job_name','user_profile_file_data']
    });
    if(res.rsCode === 0) {
      this.res = res.rsObj;
      console.log(this.res.user_profile_file_data);
      this.res?.safe_job_name?.toString();
    } else {
      this.toast.present({message:res.rsMsg, color:'warning'});
    }
  }

  async hireItem() {
    const res = await this.connect.run('/education/report/hire/get',{approval_user_id:this.user_id});
    if(res.rsCode === 0) {
      this.hireRes = res.rsObj;
    } else {
      this.toast.present({message:res.rsMsg, color:'warning'});
    }
  }

  async routineItem() {
    const res = await this.connect.run('/education/report/routine/get',{approval_user_id:this.user_id});
    if(res.rsCode === 0) {
      this.routineRes = res;
    } else {
      this.toast.present({message:res.rsMsg, color:'warning'});
    }
  }

  async specialItem() {
    const res = await this.connect.run('/education/report/special/get',{approval_user_id:this.user_id});
    if(res.rsCode === 0) {
      this.specialRes = res;
    } else {
      this.toast.present({message:res.rsMsg, color:'warning'});
    }
  }

  routine(state){
    if(state) {
      let recommendedeWidth = 0;
      this.routineRes?.rsMap?.forEach(item => {
        console.log(item.education_recommended_time);
        return recommendedeWidth = (100/6)*item.education_recommended_time;
      });
      return `width:${recommendedeWidth}%`;
    } else {
      let completeWidth = 0;
      this.routineRes?.rsMap?.forEach(item => {
        console.log(item.education_complete_time);
        return completeWidth = (100/6)*item.education_complete_time;
      });
      return `width:${completeWidth}%`;
    }
  }
}
