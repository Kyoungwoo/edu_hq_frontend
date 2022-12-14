import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { MsdsEditPage } from '../msds-edit/msds-edit.page';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { MsdsSearchPage } from '../msds-search/msds-search.page';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';

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
  index:number
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
    master_company_id: this.user.userData.belong_data.master_company_id,
    master_company_name: this.user.userData.belong_data.master_company_name,
    end_date: this.date.today(),
    msds_types : [],
    search_text: '',
    start_date: this.date.today({ year: -3 }),
    limit_no: 0
  }
  res:ConnectResult<MsdsInfo>;
  resFavorite:ConnectResult;

  permission = {
    company_id: false
  }

  constructor(
    private modal : ModalController,
    private connect: ConnectService,
    private date: DateService,
    private toast: ToastService,
    public user: UserService,
    private promise: PromiseService,
    public languagePack: LanguagePackService
  ) { }

  async ngOnInit() {
    await this.getForm();
    this.get();
    this.getNavData();
  }

  async getForm() {
    const { belong_data } = this.user.userData;

    this.form.project_id = belong_data.project_id;

    if(belong_data.company_contract_type === 'LH'
    || belong_data.company_contract_type === '감리사') {

      this.permission.company_id = true;
      this.form.master_company_id = 0;

    }
    else {

      this.permission.company_id = false;
      this.form.master_company_id = belong_data.master_company_id;

    }
  }

  async getNavData(){if(history.state?.msds_id) this.edit(history.state?.msds_id);}

  public async getMobile($event) {
    this.form.limit_no = this.res.rsMap.length;

    const res = await this.connect.run('/board/msds/list', this.form, {
    });
    if(res.rsCode === 0 ) {
      this.res = res;
      this.res.rsMap.forEach((item, i) => {
        item.index = res.rsObj.row_count - this.form.limit_no - i;
      });
    } else if(res.rsCode === 1008) {
      /**
       * 모바일은 그냥 암것도 안하면 됨
       */
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
    setTimeout(() => {
      $event.target.complete();
    }, 50);
  }

  async get(limit_no = this.form.limit_no) {
    // await this.promise.wait(() => { return this.form.company_id > 1 });
    this.form.limit_no = limit_no;

    const res = await this.connect.run('/board/msds/list', this.form);
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
      component: MsdsSearchPage,
      componentProps:{
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

  async edit(msds_id = null) {
    const modal = await this.modal.create({
      component: MsdsEditPage,
      componentProps:{
        msds_id:msds_id
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
