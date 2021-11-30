import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'modal-dismiss-button',
  templateUrl: './modal-dismiss-button.component.html',
  styleUrls: ['./modal-dismiss-button.component.scss'],
})
export class ModalDismissButtonComponent implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {}

  dismiss() {
    this.modal.dismiss();
  }

}
