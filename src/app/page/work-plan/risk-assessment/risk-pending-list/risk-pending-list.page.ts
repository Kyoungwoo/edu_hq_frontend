import { Component, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { ApprovalAnswerType } from 'src/app/component/confirm/approval/approval.component';

@Component({
  selector: 'app-risk-pending-list',
  templateUrl: './risk-pending-list.page.html',
  styleUrls: ['./risk-pending-list.page.scss'],
})
export class RiskPendingListPage implements OnInit {

  form = {
    limit_no: 0
  }

  res:ConnectResult<{
    index:number,
    create_user_id:number, // user_id
    company_id:number, // 회사 ID
    user_name:string, // 작성자명
    max_approval_date:string, // 마지막 결재일시
    ctgo_approval_module_name:string, // 서식명
    risk_asment_id:number, // 위험성평가 ID
    master_company_name:string, // 원청사 명
    approval_id:number, // 결재 ID
    project_id:number, // 현장 ID
    ctgo_approval_module_id:number, // 결재모듈 ID
    company_name:string, // 회사명
    approval_cnt_answer:ApprovalAnswerType, // 현재 결재상태
    risk_asment_start_date:string, // 서식명 옆에 기간 ~
    risk_asment_end_date:string, // 서식명 옆에 ~ 기간
    create_date:string // 작성일
    row_count:number
  }>;

  constructor(
    private connect: ConnectService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.get();
  }

  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    this.res = await this.connect.run('/risk/assessment/approval/req/get', this.form, { loading: true });
    if(this.res.rsCode === 0) {
      this.res.rsMap.forEach((item, i) => {
        item.index = this.res.rsObj.row_count - this.form.limit_no - i;
      });
    }
    else if(this.res.rsCode === 1008) {
      // 암것도 안함
    }
    else {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }
}
