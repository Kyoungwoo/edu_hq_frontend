import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-minutes-edit',
  templateUrl: './minutes-edit.component.html',
  styleUrls: ['./minutes-edit.component.scss'],
})
export class MinutesEditComponent implements OnInit {

  constructor(
    private _modal:ModalController
  ) { }

  ngOnInit() {}
  
  dismiss(){
    this._modal.dismiss();
  }
}
