import { Component, Input, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FutItem } from 'src/app/basic/service/core/file.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { EducationService } from 'src/app/service/education.service';

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
  project_state:number;
  ctgo_country_id:number;
  work_contract_type:'일용직' | '상용직';
  ctgo_country_name:string;
  ctgo_safe_job_id:number;
  safe_job_name:string;
  user_profile_file_data:FutItem[] = [];
}

export class HireEducationItem {
  ctgo_education_safe_name:string;
  education_complete_time: number;
  education_date: string;
  elapse_date: number;
  recruitment_state: string;
}

export class RoutineEducationItem {
  ctgo_education_safe_name: string;
  user_id: number;
  special_edu_state: string;
  create_date: string;

  education_complete_time: string; // 이수한 시간
  education_complete_hours: number;

  remaining_date: string; // 총 시간(권장시간X) 중 남은 시간
  remaining_time: string; // 잔여 시간

  education_need_time: string; // 권장시간
  education_need_hours: number;

  special_state: string;

  education_towercrane_state: number;

  education_start_term:string;
  education_end_term:string;
  require_state:'양호' | '필요' | '기한초과';
}
export class SpecialEducationItem {
  ctgo_education_safe_name: string;
  education_complete_hours: number;
  education_complete_time: string;
  education_date: string;
  education_need_hours: number;
  education_need_time: string;
  recommend_time: string;
  remaining_date: string;
  remaining_time: string;
  special_state: string;

  education_start_term?:string;
  education_end_term?:string;
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

  hire:HireEducationItem = new HireEducationItem();

  routine:RoutineEducationItem = new RoutineEducationItem();

  specialRes:ConnectResult<SpecialEducationItem>;

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
    public education: EducationService
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
    if(res.rsCode === 0) {
      this.hire = res.rsObj;
    }
  }

  async routineItem() {
    const res = await this.connect.run('/education/report/routine/get',{approval_user_id:this.user_id});
    if(res.rsCode === 0) {
      this.routine = res.rsObj;
      this.education.parseEducationHours(this.routine);
    } 
  }

  private async specialItem() {
    const res = await this.connect.run('/education/report/special/get',{approval_user_id:this.user_id});
    if(res.rsCode === 0) {
      this.specialRes = res;
      this.specialRes.rsMap?.forEach(item => this.education.parseEducationHours(item));
    }
  }

  async useItem(limit_no = this.useForm.limit_no) {
    this.useForm.limit_no = limit_no;
    this.useForm.attendant_user_id = this.user_id
    const res = await this.connect.run('/education/state/user/list', this.useForm);
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
