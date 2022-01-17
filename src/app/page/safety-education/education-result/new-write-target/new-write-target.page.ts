import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SafetyEducationResultEditPage } from '../safety-education-result-edit/safety-education-result-edit.page';

@Component({
  selector: 'app-new-write-target',
  templateUrl: './new-write-target.page.html',
  styleUrls: ['./new-write-target.page.scss'],
})
export class NewWriteTargetPage implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }

  public async edit() {
    const modal = await this._modal.create({
      component: SafetyEducationResultEditPage

    })
    modal.present();
  }
}
