import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-pending-list',
  templateUrl: './confirm-pending-list.page.html',
  styleUrls: ['./confirm-pending-list.page.scss'],
})
export class ConfirmPendingListPage implements OnInit {

  constructor(
    private modal:ModalController
  ) { }

  ngOnInit() {
  }

}
