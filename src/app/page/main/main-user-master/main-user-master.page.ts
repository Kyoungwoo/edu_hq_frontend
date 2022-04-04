import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { SideMenuUserComponent } from 'src/app/component/side-menu/side-menu-user/side-menu-user.component';

@Component({
  selector: 'app-main-user-master',
  templateUrl: './main-user-master.page.html',
  styleUrls: ['./main-user-master.page.scss'],
})
export class MainUserMasterPage implements OnInit {

  constructor(
    private modal: ModalController,
    private nav: NavService
  ) { }

  ngOnInit() {
  }
  async navMypage() {
    this.nav.navigateForward('/my-page-type');
  }

  
  async openMenu() {
    const modal = await this.modal.create({
      component: SideMenuUserComponent
    });
    modal.present();
  }

}