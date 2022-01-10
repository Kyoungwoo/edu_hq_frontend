import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchAttendanceComponent } from 'src/app/component/modal/search-attendance/search-attendance.component';

@Component({
  selector: 'app-safety-education-detail-edit',
  templateUrl: './safety-education-detail-edit.page.html',
  styleUrls: ['./safety-education-detail-edit.page.scss'],
})
export class SafetyEducationDetailEditPage implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: SearchAttendanceComponent,
      componentProps:{
        title:'출석등록'
      }
    })
    modal.present();
  }
}
