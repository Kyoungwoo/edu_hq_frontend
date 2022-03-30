import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { DetailSearchComponent } from 'src/app/component/modal/detail-search/detail-search.component';
import { DetailSearchPage } from '../../detail-search/detail-search.page';
import { NoticeEditPage } from '../notice-edit/notice-edit.page';

type NoticeType = "일반" | "안전관리" | "환경관리" | "공사관리" | "품질관리";

class NoticeInfo {
  notice_title: string;
  project_id: number;
  user_name: string;
  master_company_id: number;
  company_name: string;
  create_date: string;
  hit_count: number;
  favorites_state: number;
  notice_id: number;
  notice_type: string;
  row_count: number;
  index: number
}
@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.page.html',
  styleUrls: ['./notice-list.page.scss'],
})
export class NoticeListPage implements OnInit {

  form = {
    project_id: this.user.userData.belong_data.project_id,
    master_company_id: this.user.userData.belong_data.company_id,
    end_date: this.date.today(),
    notice_types: [],
    // project_ids: [1],
    search_text: '',
    start_date: this.date.today({ month: -1 }),
    limit_no: 0
  }
  res:ConnectResult<NoticeInfo>;
  resFavorite:ConnectResult;

  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    private date: DateService,
    public user: UserService,
    private toast: ToastService
  ) { }

  async ngOnInit() {
    if(this.user.userData.user_role === 'LH_HEAD') { 
      this.form.project_id = 0;
    }
    this.get();
  }
  public async getMobile($event) {
    this.form.limit_no = this.res.rsMap.length;

    const res = await this.connect.run('/board/notice/list', this.form, {
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
    const res = await this.connect.run('/board/notice/list',this.form);
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

  async detailSearch() {
    const modal = await this.modal.create({
      component:DetailSearchPage,
      componentProps:{
        type:'공지사항',
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

  async edit(item?) {
    const modal = await this.modal.create({
      component:NoticeEditPage,
      componentProps:{
        item
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.get();
    }
  }

  async favoritesCheck($event:MouseEvent, item:NoticeInfo) {
    $event.stopPropagation();
    item.favorites_state = item.favorites_state ? 0 : 1;
    this.resFavorite = await this.connect.run('/board/notice/favorites', { notice_id:item.notice_id });
    if(this.resFavorite.rsCode === 0) {
      this.get();
    }
  }
}
