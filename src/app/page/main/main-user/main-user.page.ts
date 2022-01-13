import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SideMenuUserComponent } from 'src/app/component/side-menu/side-menu-user/side-menu-user.component';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.page.html',
  styleUrls: ['./main-user.page.scss'],
})
export class MainUserPage implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {
  }

  async openMenu() {
    const modal = await this.modal.create({
      component: SideMenuUserComponent
    });
    modal.present();
  }
}
