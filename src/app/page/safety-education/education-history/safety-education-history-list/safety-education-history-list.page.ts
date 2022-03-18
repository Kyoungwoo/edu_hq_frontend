import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { SafetyEducationHistoryDetailPage } from '../safety-education-history-detail/safety-education-history-detail.page';

@Component({
  selector: 'app-safety-education-history-list',
  templateUrl: './safety-education-history-list.page.html',
  styleUrls: ['./safety-education-history-list.page.scss'],
})
export class SafetyEducationHistoryListPage implements OnInit {

  form = {
    company_id: 0, // 업체 ID
    education_safe_state: '양호', // 양호 필요 기한초과
    limit_no: 0,// 20개씩
    project_id: 0, // 현장 ID
    search_text:'' // 검색어
  }
  res:ConnectResult<{
    index:number,
    safe_job_name:string,
    routine_edu_state:string, //정기
    ctgo_job_position_id:number,
    user_name:string,
    ctgo_occupation_name:string,
    ctgo_job_position_name:string,
    project_name:string,
    ctgo_occupation_id:number,
    user_id:number,
    project_id:number,
    special_edu_state:string, //특별
    hire_edu_state:string,
    work_contract_type:string,
    row_count:number,
    company_name:string
  }>
  constructor(
    private modal : ModalController,
    private connect: ConnectService,
    private user: UserService,
    private toast: ToastService
  ) { }

  ngOnInit() {
  }

  async getList(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    const res = await this.connect.run('/education/state/record/list',this.form,{
      parse:['safe_job_name']
    });
    if(res.rsCode === 0) {
      this.res = res;

      this.res.rsMap.map((item, i) => {
        // console.log(item);
        item.index = res.rsObj.row_count - this.form.limit_no - i;
        item.safe_job_name?.toString();
      });
      // console.log(this.res);
    } else {      
      this.toast.present({message:res.rsMsg,color:'warning'});
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
}
