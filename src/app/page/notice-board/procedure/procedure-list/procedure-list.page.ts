import { ProcedureEditPage } from './../procedure-edit/procedure-edit.page';
import { ProcedureSearchPage } from './../procedure-search/procedure-search.page';
import { LanguagePackService } from './../../../../basic/service/core/language-pack.service';
import { FileService } from './../../../../basic/service/core/file.service';
import { ToastService } from './../../../../basic/service/ionic/toast.service';
import { UserService } from './../../../../basic/service/core/user.service';
import { DateService } from './../../../../basic/service/util/date.service';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from './../../../../basic/service/core/connect.service';
import { Component, OnInit } from '@angular/core';
class ProcedureInfo {
  company_id:number;
  company_name:string;
  create_date:string;
  create_user_id:number;
  create_user_name:string;
  delete_date:string;
  delete_state:number;
  project_id:number;
  project_name:string;
  update_date:string;
  work_procedure_id:number;
  work_procedure_language:string;
  work_procedure_read:string;
  work_procedure_text:string;
  work_procedure_title:string;
  row_count: number;
  index: number;
}

@Component({
  selector: 'app-procedure-list',
  templateUrl: './procedure-list.page.html',
  styleUrls: ['./procedure-list.page.scss'],
})
export class ProcedureListPage implements OnInit {
  form = {
    project_id: this.user.userData.belong_data.project_id,
    master_company_id: this.user.userData.belong_data.master_company_id,
    master_company_name: this.user.userData.belong_data.master_company_name,
    end_date: this.date.today(),
    work_procedure_languages: [],
    search_text: '',
    start_date: this.date.today({ year: -3 }),
    limit_no: 0
  }
  res:ConnectResult<ProcedureInfo>;

  permission = {
    company_id: false
  }

  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    private date: DateService,
    public user: UserService,
    private toast: ToastService,
    private file: FileService,
    public languagePack: LanguagePackService
  ) { }

  async ngOnInit() {
    await this.getForm();
    this.get();
    this.getNavData();
  }

  async getNavData(){if(history.state?.notice_id) this.edit(history.state?.notice_id);}

  async getForm() {
    const { belong_data } = this.user.userData;

    this.form.project_id = belong_data.project_id;

    if(belong_data.company_contract_type === 'LH'
    || belong_data.company_contract_type === '감리사') {
      this.permission.company_id = true;
      this.form.master_company_id = 0;
    } else {
      this.permission.company_id = false;
      this.form.master_company_id = belong_data.master_company_id;
    }
  }

  async get(limit_no = this.form.limit_no) {

    this.form.limit_no = limit_no;

    const res = await this.connect.run('/board/work_procedure/list', this.form);
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

    const res = await this.connect.run('/board/work_procedure/list', this.form);
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

  async detailSearch() {
    const modal = await this.modal.create({
      component: ProcedureSearchPage,
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

  async edit(work_procedure_id = null) {
    const modal = await this.modal.create({
      component:ProcedureEditPage,
      componentProps: {
        work_procedure_id: work_procedure_id || 0,
        searchForm: this.file.clone(this.form) // 검색 데이터를 끌고 가야함
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      // 모바일은 편집이 없어서 이렇게해도 충분함. 있으면 추가 코드 작성을 해야함.
      this.get();
    }
  }

  // async favoritesCheck($event:MouseEvent, item:ProcedureInfo) {
  //   $event.stopPropagation();
  //   item.favorites_state = item.favorites_state ? 0 : 1;
  //   this.resFavorite = await this.connect.run('/board/notice/favorites', { notice_id:item.notice_id });
  //   if(this.resFavorite.rsCode === 0) {
  //     this.get();
  //   }
  // }
}
