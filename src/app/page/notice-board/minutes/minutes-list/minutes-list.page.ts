import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
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
  index: number
}

@Component({
  selector: 'app-minutes-list',
  templateUrl: './minutes-list.page.html',
  styleUrls: ['./minutes-list.page.scss'],
})
export class MinutesListPage implements OnInit {

  form = { 
    project_id: this.user.userData.belong_data.project_id,
    company_id: this.user.userData.belong_data.company_id,
    end_date: this.date.today(),
    safety_meeting_types: [],
    // project_ids: [],
    search_text: '',
    start_date: this.date.today({ month: -1 }),
    limit_no: 0,
    approval_cnt_answer: ['임시저장']
  }

  res:ConnectResult<SafetyMeetingInfo>;
  resFavorite:ConnectResult;

  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    private date: DateService,
    private toast: ToastService,
    public user: UserService,
  ) { }

  async ngOnInit() {
    this.get();

  }
  public async getMobile($event) {
    this.form.limit_no = this.res.rsMap.length;

    const res = await this.connect.run('/board/safety_meeting/list', this.form, {
    });
    if(res.rsCode === 0 ) {
      this.res = res;
      this.res.rsMap.map((item, i) => {
        item.index = res.rsObj.row_count - this.form.limit_no - i;
      });
    } else if(res.rsCode === 1008) {
      this.res = null;
      // 더 로딩할 데이터가 없음
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
    setTimeout(() => {
      $event.target.complete();
    }, 50);
  }

  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    
    let trans_form = JSON.parse(JSON.stringify(this.form));
    trans_form.project_id = trans_form.project_id ? [trans_form.project_id] : [];
    const res = await this.connect.run('/board/safety_meeting/list',this.form);
    if(res.rsCode === 0 ) {
      this.res = res;
      this.res.rsMap.map((item, i) => {
        item.index = res.rsObj.row_count - this.form.limit_no - i;
      });
    }
    
    else if (res.rsCode === 1008) {
      this.res = null;
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }
  minutesEditl(){

  }
  async detailSearch() {
    const modal = await this.modal.create({
      component:DetailSearchPage,
      componentProps:{
        type:'회의록',
        form: this.form
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.form = data;
      this.get();
    }
  }
  async edit(item) {
    const modal = await this.modal.create({
      component:MinutesEditPage,
      componentProps:{
        item:item
      }
    });
    modal.present();
  }
}
