import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { DetailSearchPage } from '../../detail-search/detail-search.page';
import { MinutesEditPage } from '../minutes-edit/minutes-edit.page';

type SafteyMeetingtype = "전체" | "안전 및 보건에 관한 협의체 회의록" | "노사 협의체 회의록" | "산업안전보건위원회 회의록";

class SafetyMeetingInfo {
  company_id: number;
  company_name: string;
  create_date: string;
  safety_meeting_id: number;
  notice_title: string;
  safety_meeting_type: SafteyMeetingtype;
  project_id: number;
  project_name: string;
  user_name: string;
  row_count: number;
  safety_meeting_date: string;
}

@Component({
  selector: 'app-minutes-list',
  templateUrl: './minutes-list.page.html',
  styleUrls: ['./minutes-list.page.scss'],
})
export class MinutesListPage implements OnInit {

  form = {
    company_ids: [1],
    end_date: this.date.today(),
    safety_meeting_types: [],
    project_ids: [],
    search_text: '',
    start_date: this.date.today({ month: -1 }),
    limit_no: 0,
    cnt_approval_answers :[]
  }

  res:ConnectResult<SafetyMeetingInfo>;
  resFavorite:ConnectResult;

  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    private date: DateService,
  ) { }

  async ngOnInit() {
    this.get();
  }
  async get() {
    let trans_form = JSON.parse(JSON.stringify(this.form));
    trans_form.project_ids = trans_form.project_ids ? [trans_form.project_ids] : [];

    this.res = await this.connect.run('/board/safety_meeting/list', trans_form, {
      loading: '회의록 불러오기'
    });
    console.log("---------------------------",this.res);
  }
  minutesEditl(){

  }
  async detailSearch() {
    const modal = await this.modal.create({
      component:DetailSearchPage,
      componentProps:{
        type:'회의록'
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.form.search_text = data.search_text;
      this.get();
    }
  }
  async edit(safety_meeting_id) {
    console.log("---------------------",safety_meeting_id);
    const modal = await this.modal.create({
      component:MinutesEditPage,
      componentProps:{
        safety_meeting_id:safety_meeting_id
      }
    });
    modal.present();
  }
}
