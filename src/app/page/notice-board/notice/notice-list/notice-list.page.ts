import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { DetailSearchPage } from '../../detail-search/detail-search.page';
import { NoticeEditPage } from '../notice-edit/notice-edit.page';

type NoticeType = "일반" | "안전관리" | "환경관리" | "공사관리" | "품질관리";
@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.page.html',
  styleUrls: ['./notice-list.page.scss'],
})
export class NoticeListPage implements OnInit {

  form = {
    company_ids: [],
    end_date: this.date.today(),
    notice_types: [],
    project_id: 0,
    search_text: '',
    start_date: this.date.today({ month: -3 }),
    limit_no: 0
  }
  res:ConnectResult<{
    company_id: number,
    company_name: string,
    create_date: string,
    favorites_state: number,
    hit_count: number,
    notice_id: number,
    notice_title: string,
    notice_type: NoticeType,
    project_id: number,
    project_name: string,
    user_name: string,
    row_count: number
  }>;

  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    private date: DateService
  ) { }

  async ngOnInit() {

    this.get();
  }

  async get() {
    this.res = await this.connect.run('/board/notice/list', this.form, {
      loading: '공지사항 불러오기'
    })
    if(this.res.rsCode === 0) {
    } else {
      this.connect.error('공지사항 불러오기 실패', this.res);
    }
  }

  async detailSearch() {
    const modal = await this.modal.create({
      component:DetailSearchPage
    });
    modal.present();
  }

  async edit(notice_id?) {
    const modal = await this.modal.create({
      component:NoticeEditPage,
      componentProps:{
        notice_id:notice_id
      }
    });
    modal.present();
  }
  async add() {
    const modal = await this.modal.create({
      component:NoticeEditPage
    });
    modal.present();
  }
}
