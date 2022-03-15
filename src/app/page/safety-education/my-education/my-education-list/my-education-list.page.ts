import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { QrService } from 'src/app/basic/service/util/qr.service';
import { MyDetailSearchPage } from '../my-detail-search/my-detail-search.page';
import { MyEducationDetailListPage } from '../my-education-detail-list/my-education-detail-list.page';

@Component({
  selector: 'app-my-education-list',
  templateUrl: './my-education-list.page.html',
  styleUrls: ['./my-education-list.page.scss'],
})
export class MyEducationListPage implements OnInit {

  form = {
    company_id:0, // 업체 ID
    ctgo_education_safe_id:0, // 교육명 ID
    education_safe_state:'전체',// 교육상태
    end_date:'2022-04-01', // 검색 신청 종료일
    project_id:0, // 현장 ID
    search_text:'', // 검색어
    start_date:'2020-01-01' // 검색 신청 시작일
  }

  res:ConnectResult<{
    create_user_id: number;
    education_safe_state:string;
    ctgo_education_safe_name: string;
    ctgo_education_safe_id: number;
    create_user_name: string;
    company_id: number;
    education_safe_target: string;
    ctgo_education_safe_type: string;
    education_safe_manager_names: string;
    education_safe_place: string;
    education_safe_date: string;
    education_safe_start_time: string;
    ctgo_education_safe_title: string;
    user_id: string;
    education_safe_end_time: string;
    company_name: string;
    education_safe_id: number;
    week_day: string;
    education_safe_manager_ids: string;
  }>
  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    private toast: ToastService,
    public date: DateService,
    private qr: QrService
  ) { }

  ngOnInit() {
    this.getList();
  }

  async getList() {
    const res = await this.connect.run('/education/my/list',this.form,{
      parse:['education_safe_manager_names']
    });
    if(res.rsCode === 0) {
      this.res = {
        ...res,
        ...this.res
      }
      this.res.rsMap.join()
      this.res.rsMap.forEach(item => {
        if(item.education_safe_manager_names)
        item.education_safe_manager_names.toString()
        item.education_safe_date = `${item.education_safe_date} (${this.date.day(item.education_safe_date)[0]})`;
      })

    } else {
      this.toast.present({message:res.rsMsg,color:'warning'});
    }
  }

  async edit() {
    const modal = await this.modal.create({
      component:MyEducationDetailListPage,
    });
    modal.present();
  }

  async openDetailSearch() {
    const modal = await this.modal.create({
      component:MyDetailSearchPage,
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.form = data;
      this.getList();
    }
  }

 async QRedcaution() {
  const ar = await this.qr.subscribe(qrdata => {

  });
  }


}
