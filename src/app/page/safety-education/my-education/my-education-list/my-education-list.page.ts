import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
    education_safe_state:'',// 교육상태
    end_date:'', // 검색 신청 종료일
    project_id:0, // 현장 ID
    search_text:'', // 검색어
    start_date:'' // 검색 신청 시작일
  }
  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {

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
  }
}
