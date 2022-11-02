import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


import { TbmEditPage } from '../tbm-edit/tbm-edit.page';
import { TbmDetailSearchPage } from '../tbm-detail-search/tbm-detail-search.page';
// import { AlertService } from 'src/app/basic/service/ionic/alert.service';

@Component({
  selector: 'app-tbm-list',
  templateUrl: './tbm-list.page.html',
  styleUrls: ['./tbm-list.page.scss'],
})
export class TbmListPage implements OnInit {

  form = { 
    project_id: null,
    project_name: '',
    company_id: null,
    ctgo_construction_id: 0,
    risk_asment_type: '나의 TBM',
    approval_cnt_answer: '전체',
    // risk_asment_start_date: this.date.today({ year: -1 }),
    // risk_asment_end_date: this.date.today(),
    search_text: '',
    limit_no: 0
  }

  constructor(
    private _modal: ModalController,
    // private alert: AlertService,
  ) {
  }

  ngOnInit() {
    this.tab();
  }

  /**
   * 탭 스크립트
   */
  tab(){
    const tabBtn = document.querySelectorAll('.tab_list_btn');
    const tabCont = document.querySelectorAll('.tab_list');
    console.log(tabBtn)

    for(let i=0; i<tabBtn.length; i++){
      tabBtn[i].addEventListener('click', ()=>{
        
        for(let i=0; i<tabBtn.length; i++){
          tabCont[i].classList.remove('active');
        }
          tabCont[i].classList.add('active');
      })
    }
  }

  async edit() {
    const modal = await this._modal.create({
      component: TbmEditPage,
      componentProps: {}
    });
    modal.present();
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: TbmDetailSearchPage,
      componentProps: {
        // form: this.form
      }
    })
    modal.present();

    const { data } = await modal.onDidDismiss();

    // if(data) {
    //   this.form = data;
    //   this.get(0);
    // }
  }
}
