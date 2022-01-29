import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.scss'],
})
export class OrganizationEditComponent implements OnInit {

  @Input() selectId:number;
  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
    console.log('inptuselect',this.selectId)
  }

  dismiss(){
    this._modal.dismiss();
  }
}
