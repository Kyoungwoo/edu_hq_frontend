import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/basic/service/core/user.service';
import { DateService } from 'src/app/basic/service/util/date.service';

@Component({
  selector: 'app-worker-minutes-detail-search',
  templateUrl: './worker-minutes-detail-search.page.html',
  styleUrls: ['./worker-minutes-detail-search.page.scss'],
})
export class WorkerMinutesDetailSearchPage implements OnInit {

  form = {
    approval_cnt_answer: [],//결재상태('임시저장’, '결재중’, '결재완료’, ‘반려’)
    company_ids: [1],
    end_date: this.date.today(),
    limit_no: 0,
    project_ids: this.user.userData.belong_data.project_id,
    safety_meeting_types: [], //회의록 유형('안전’, '노사’, ‘산업’)
    search_text: '',
    start_date: this.date.today({ year: -5, month: -1 })
  }
  constructor(
    private date: DateService,
    private user: UserService,
    private _modal: ModalController
  ) { }

  ngOnInit() {

  }
  remove() {
    this.form.approval_cnt_answer = [];//결재상태('임시저장’, '결재중’, '결재완료’, ‘반려’)
    this.form.company_ids = [1],
    this.form.end_date = this.date.today(),
    this.form.limit_no = 0,
    this.form.project_ids = this.user.userData.belong_data.project_id,
    this.form.safety_meeting_types = [], //회의록 유형('안전’, '노사’, ‘산업’)
    this.form.search_text = '',
    this.form.start_date = this.date.today({ month: -1 })
  }

  search(){
    this._modal.dismiss(this.form);
  }
}
