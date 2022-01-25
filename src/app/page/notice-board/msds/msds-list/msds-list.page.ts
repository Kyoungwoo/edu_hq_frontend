import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { DetailSearchPage } from '../../detail-search/detail-search.page';
import { DateService } from 'src/app/basic/service/util/date.service';
import { MsdsEditPage } from '../msds-edit/msds-edit.page';

type MsdsType = "폭발성 물질" | "인화성 가스" | "인화성 액체" | "인화성 고체" | "에어로졸"
| "물반응성 물질" | "산화성 가스" | "산화성 액체" | "산화성 고체" | "고압가스" | "자기반응성 물질" | "자연발화성 액체" | "자연발화성 고체" 
| "유기과산화물" | "금속부식성 물질" | "급성독성 물질" | "피부 부식성 또는 자극성 물질" 
| "심한 눈 손상성 또는 자극성 물질" | "호흡기 과민성 물질" | "피부 과민성 물질" | "발암성물질"
| "생식세포 변이원성 물질" | "생식독성 물질" | "특정표적장기 독성 물질(1회 노출)" | "특정표적장기 독성 물질(반복 노출)"
| "흡인유해성 물질" | "수생환경 유해성 물질" | "오존층 유해성 물질" ;

class MsdsInfo {
  company_id: number
  company_name: string
  create_date: string
  favorites_state: number
  hit_count: number
  msds_id: number
  msds_title: string
  msds_type: MsdsType
  project_id: number
  project_name: string
  user_name: string
  row_count: number
  favorites_state_bool:boolean
}

@Component({
  selector: 'app-msds-list',
  templateUrl: './msds-list.page.html',
  styleUrls: ['./msds-list.page.scss'],
})

export class MsdsListPage implements OnInit {

  form = {
    company_ids: [],
    end_date: this.date.today(),
    msds_types : ['일반'],
    project_ids: 1,
    search_text: '',
    start_date: this.date.today({ month: -3 }),
    limit_no: 0
  }
  res:ConnectResult<MsdsInfo>;
  resFavorite:ConnectResult;

  constructor(
    private modal : ModalController,
    private connect: ConnectService,
    private date: DateService
  ) { }

  async ngOnInit() {

    this.get();
  }

  async get() {
    let trans_form = JSON.parse(JSON.stringify(this.form));
    trans_form.project_ids = trans_form.project_ids ? [trans_form.project_ids] : [];
    this.res = await this.connect.run('/board/msds/list', this.form, {
      loading: 'MSDS 불러오기'
    })
  }

  async detailSearch() {
    const modal = await this.modal.create({
      component:DetailSearchPage,
      componentProps:{
        type:'MSDS'
      }
    });
    modal.present();
  }
  async edit(msds_id?) {
    const modal = await this.modal.create({
      component:MsdsEditPage,
      componentProps:{
        msds_id:msds_id
      }
    });
    modal.present();
  }
  async favoritesCheck($event:MouseEvent, item:MsdsInfo) {
    $event.stopPropagation();
    item.favorites_state = item.favorites_state ? 0 : 1;
    this.resFavorite = await this.connect.run('/board/msds/favorites', { msds_id:item.msds_id });
  }
}
