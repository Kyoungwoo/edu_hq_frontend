import { UserService } from 'src/app/basic/service/core/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { OpenDetailSearchPage } from '../open-detail-search/open-detail-search.page';

@Component({
  selector: 'app-notify-list',
  templateUrl: './notify-list.page.html',
  styleUrls: ['./notify-list.page.scss'],
})
export class NotifyListPage implements OnInit, OnDestroy {

  form = {
    create_date:this.date.today({year:-2,month:-1}),
    end_date:this.date.today(),
    notify_menu:'전체',
    project_id: this.user.userData.belong_data.project_id,
    search_text:''
  }

  res:ConnectResult<{
    seq_no: number;
    notify_text_th: string;
    notify_text_vn: string;
    notify_head: string;
    notify_menu: string;
    notify_text_ch: string;
    notify_text_kr: string;
    notify_text_en: string;
    read_state: number;
    user_id: number;
    project_id: number;
    notify_move_page: number;
    create_date: string;
    row_count:number;
  }>;

  constructor(
    private modal:ModalController,
    private connect:ConnectService,
    private toast: ToastService,
    private date: DateService,
    private user: UserService
  ) { }

  ngOnInit() {
    this.get();
  }

  ngOnDestroy() {
    window.dispatchEvent(new CustomEvent('getNotify'));
  }

  async get() {
    this.res = await this.connect.run('/notify/get',this.form);
    if(this.res.rsCode === 0) {}
    else {
      this.toast.present({message:this.res.rsMsg,color:'warning'});
    }
  }

  async openDetail() {
    const modal = await this.modal.create({
      component:OpenDetailSearchPage,
      componentProps: {
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
}
// 읽은게 1 안읽은게 0