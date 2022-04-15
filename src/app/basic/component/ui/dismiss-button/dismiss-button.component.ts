import { Component, HostListener, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';

@Component({
  selector: 'app-dismiss-button',
  templateUrl: './dismiss-button.component.html',
  styleUrls: ['./dismiss-button.component.scss'],
})
export class DismissButtonComponent implements OnInit {

  @HostListener('click') onClick() {
    this.dismiss();
  }

  constructor(
    private alert: AlertService,
    private _modal: ModalController
  ) { }

  ngOnInit() {}

  dismiss() {
    this.alert.present({
      message: '창을 닫으시겠습니까?',
      buttons: [
        { text: '취소' },
        { text: '닫기', handler: () => {
          this._modal.dismiss();
        }}
      ]
    })
  }
}