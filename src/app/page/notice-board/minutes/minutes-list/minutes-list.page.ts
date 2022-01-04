import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailSearchPage } from '../../detail-search/detail-search.page';

@Component({
  selector: 'app-minutes-list',
  templateUrl: './minutes-list.page.html',
  styleUrls: ['./minutes-list.page.scss'],
})
export class MinutesListPage implements OnInit {

  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
  }
  minutesEditl(){

  }
  detailSerach(){
    
  }
  async detailSearch() {
    const modal = await this.modal.create({
      component:DetailSearchPage
    });
    modal.present();
  }
}
