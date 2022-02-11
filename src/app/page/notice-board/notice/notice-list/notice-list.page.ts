import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { DetailSearchComponent } from 'src/app/component/modal/detail-search/detail-search.component';
import { DetailSearchPage } from '../../detail-search/detail-search.page';
import { NoticeEditPage } from '../notice-edit/notice-edit.page';

type NoticeType = "일반" | "안전관리" | "환경관리" | "공사관리" | "품질관리";

class NoticeInfo {
  company_id: number;
  company_name: string;
  create_date: string;
  favorites_state: number;
  hit_count: number;
  notice_id: number;
  notice_title: string;
  notice_content: string;
  notice_type: NoticeType;
  project_id: number;
  project_name: string;
  user_name: string;
  row_count: number;
}
@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.page.html',
  styleUrls: ['./notice-list.page.scss'],
})
export class NoticeListPage implements OnInit {

  form = {
    company_ids: [1],
    end_date: this.date.today(),
    notice_types: [],
    project_ids: [1],
    search_text: '',
    start_date: this.date.today({ month: -1 }),
    limit_no: 0
  }
  res:ConnectResult<NoticeInfo>;
  resFavorite:ConnectResult;

  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    private date: DateService
  ) { }

  async ngOnInit() {
    this.get();
  }

  async get(limit_no = this.form.limit_no) {

    this.form.limit_no = limit_no;

    let trans_form = JSON.parse(JSON.stringify(this.form));
    trans_form.project_ids = trans_form.project_ids ? [trans_form.project_ids] : [];
    this.res = await this.connect.run('/board/notice/list', this.form, {
      loading: '공지사항 불러오기'
    });
  }

  async detailSearch() {
    const modal = await this.modal.create({
      component:DetailSearchComponent,
      componentProps:{
        type:'공지사항'
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.form.search_text = data.search_text;
      this.get();
    }
  }

  async edit(item?) {
    console.log("---------------------",item);
    const modal = await this.modal.create({
      component:NoticeEditPage,
      componentProps:{
        item
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      console.log("data",data);
      this.get();
    }
  }

  async favoritesCheck($event:MouseEvent, item:NoticeInfo) {
    $event.stopPropagation();
    item.favorites_state = item.favorites_state ? 0 : 1;
    this.resFavorite = await this.connect.run('/board/notice/favorites', { notice_id:item.notice_id });
  }
}
