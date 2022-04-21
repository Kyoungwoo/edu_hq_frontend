import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { NoticeEditPage } from '../notice-edit/notice-edit.page';
import { NoticeSearchPage } from '../notice-search/notice-search.page';

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
    search_text: '',
    start_date: this.date.today({ month: -1 }),
    limit_no: 0
  }
  res:ConnectResult<NoticeInfo>;
  resFavorite:ConnectResult;

  permission = {
    company_id: false
  }

  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    private date: DateService,
    public user: UserService,
    private toast: ToastService
  ) { }

  async ngOnInit() {
    await this.getForm();
    this.get();
    this.getNavData();
  }

  async getNavData(){if(history.state?.notice_id) this.edit(history.state?.notice_id);}

  async getForm() {
    const { user_role, belong_data } = this.user.userData;

    if(user_role === 'LH_HEAD'
    || user_role === 'SUPER_HEAD') {

      this.permission.company_id = true;
      this.form.master_company_id = belong_data.company_id;

    }
    else if(belong_data.company_contract_type === '원청사') {

      this.permission.company_id = false;
      // 원청사 관리자에게만 보이는 버튼. LH,감리,협력사의 경우 회의 진행 버튼이 없다.(회의록 기획서 9p)
      this.form.master_company_id = belong_data.company_id;

    }
    else if(belong_data.company_contract_type === '협력사') {

      this.permission.company_id = false;

      // 협력사는 내 회사가 아니라, 내 원청사를 company_id에 넣어줘야 함
      const res = await this.connect.run('/category/certify/search_my_master_company/get', {
        project_id: this.form.project_id,
        search_text: ''
      });
      if(res.rsCode === 0) {
        const contractor = res.rsMap[0];
        this.form.master_company_id = contractor.master_company_id;
      }
      else {
        this.toast.present({ color: 'warning', message: res.rsMsg });
      }

    }
  }

  async get(limit_no = this.form.limit_no) {

    this.form.limit_no = limit_no;

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

  async detailSearch() {
    const modal = await this.modal.create({
      component: NoticeSearchPage,
      componentProps:{
        form: this.form
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.form = data;
      this.get(0);
    }
  }

  async edit(notice_id?:number) {
    const modal = await this.modal.create({
      component:NoticeEditPage,
      componentProps:{
        notice_id: notice_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      // 모바일은 편집이 없어서 이렇게해도 충분함. 있으면 추가 코드 작성을 해야함.
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
