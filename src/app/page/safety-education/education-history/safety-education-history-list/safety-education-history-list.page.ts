import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SafetyEducationHistoryDetailPage } from '../safety-education-history-detail/safety-education-history-detail.page';

@Component({
  selector: 'app-safety-education-history-list',
  templateUrl: './safety-education-history-list.page.html',
  styleUrls: ['./safety-education-history-list.page.scss'],
})
export class SafetyEducationHistoryListPage implements OnInit {

  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
  }

  async edit() {
    const modal = await this.modal.create({
      component:SafetyEducationHistoryDetailPage,
    });
    modal.present();
  }
}
