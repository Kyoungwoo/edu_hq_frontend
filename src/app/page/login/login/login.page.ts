import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SideMenuUserComponent } from 'src/app/component/side-menu/side-menu-user/side-menu-user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {
    this.openSideMenuUser();
  }

  async openSideMenuUser() {
    const modal = await this.modal.create({
      component: SideMenuUserComponent
    });
    modal.present();
  }
}
