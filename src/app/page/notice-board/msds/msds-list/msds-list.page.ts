import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { DetailSearchPage } from '../../detail-search/detail-search.page';
import { DateService } from 'src/app/basic/service/util/date.service';
import { MsdsEditPage } from '../msds-edit/msds-edit.page';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { UserService } from 'src/app/basic/service/core/user.service';

type MsdsType = "폭발성 물질" | "인화성 가스" | "인화성 액체" | "인화성 고체" | "에어로졸"
| "물반응성 물질" | "산화성 가스" | "산화성 액체" | "산화성 고체" | "고압가스" | "자기반응성 물질" | "자연발화성 액체" | "자연발화성 고체" 
| "유기과산화물" | "금속부식성 물질" | "급성독성 물질" | "피부 부식성 또는 자극성 물질" 
| "심한 눈 손상성 또는 자극성 물질" | "호흡기 과민성 물질" | "피부 과민성 물질" | "발암성물질"
| "생식세포 변이원성 물질" | "생식독성 물질" | "특정표적장기 독성 물질(1회 노출)" | "특정표적장기 독성 물질(반복 노출)"
| "흡인유해성 물질" | "수생환경 유해성 물질" | "오존층 유해성 물질" ;

class MsdsInfo {
  company_id: number;
  company_name: string;
  create_date: string;
  favorites_state: number;
  hit_count: number;
  msds_id: number;
  msds_title: string;
  msds_content: string;
  msds_type: MsdsType;
  project_id: number;
  project_name: string;
  user_name: string;
  row_count: number;
  favorites_state_bool:boolean;
}

@Component({
  selector: 'app-msds-list',
  templateUrl: './msds-list.page.html',
  styleUrls: ['./msds-list.page.scss'],
})

export class MsdsListPage implements OnInit {

  form = {
    project_id: this.user.userData.belong_data.project_id,
    company_id: this.user.userData.belong_data.company_id,
    end_date: this.date.today(),
    msds_types : [],
    // project_ids: [1],
    search_text: '',
    start_date: this.date.today({ month: -1 }),
    limit_no: 0
  }
  res:ConnectResult<MsdsInfo>;
  resFavorite:ConnectResult;

  constructor(
    private modal : ModalController,
    private connect: ConnectService,
    private date: DateService,
    private toast: ToastService,
    private user: UserService

  ) { }

  async ngOnInit() {

    this.get();
  }

  public async getMobile($event) {
    this.form.limit_no = this.res.rsMap.length;

    const res = await this.connect.run('/board/msds/list', this.form, {
    });
    if(res.rsCode === 0) {
      res.rsMap.forEach(item => {
        this.res.rsMap.push(item);
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
    this.res = await this.connect.run('/board/msds/list', this.form, {
      loading: 'MSDS 불러오기'
    })
  }

  async detailSearch() {
    const modal = await this.modal.create({
      component:DetailSearchPage,
      componentProps:{
        type:'MSDS',
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
      component:MsdsEditPage,
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
  async favoritesCheck($event:MouseEvent, item:MsdsInfo) {
    $event.stopPropagation();
    item.favorites_state = item.favorites_state ? 0 : 1;
    this.resFavorite = await this.connect.run('/board/msds/favorites', { msds_id:item.msds_id });
    if(this.resFavorite.rsCode === 0) {
      this.get();
    }
  }
}
