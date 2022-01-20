import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-search',
  templateUrl: './detail-search.page.html',
  styleUrls: ['./detail-search.page.scss'],
})
export class DetailSearchPage implements OnInit {
  scene = '';

  constructor(
    private _modal_ : ModalController
  ) { }

  ngOnInit() {
  }
  dismiss(){
    this._modal_.dismiss();
  }
  init(){
    
  }
  search(){
    this._modal_.dismiss();
  }
}
