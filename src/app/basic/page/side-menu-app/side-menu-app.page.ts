import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-side-menu-app',
  templateUrl: './side-menu-app.page.html',
  styleUrls: ['./side-menu-app.page.scss'],
})
export class SideMenuAppPage implements OnInit {
  

  constructor(
    public user: UserService
  ) { }
  ngOnInit() {
  }

}
