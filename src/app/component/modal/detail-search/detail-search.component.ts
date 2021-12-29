import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-search',
  templateUrl: './detail-search.component.html',
  styleUrls: ['./detail-search.component.scss'],
})
export class DetailSearchComponent implements OnInit {
  scene = '';

  

  constructor(
    private _modal : ModalController
  ) { }

  ngOnInit() {
   
  }

  dismiss(){
    this._modal.dismiss();
  }
  init(){
    
  }
  search(){
    this._modal.dismiss();
  }
}
