import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private connect: ConnectService,
    private modal: ModalController
  ) { }

  ngOnInit() {
    
  }
  async login() {
    const res = await this.connect.run('/token/get', {
      accountID: "worker",
      accountToken: "qwer1234"
    });
  }
}
