import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SideMenuUserComponent } from 'src/app/component/side-menu/side-menu-user/side-menu-user.component';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnInit {

  constructor(
    private _modal: ModalController
  ) { }

  ngOnInit() {}

  async openMenu() {
    const modal = await this._modal.create({
      component: SideMenuUserComponent
    });
    modal.present();
  }
}
