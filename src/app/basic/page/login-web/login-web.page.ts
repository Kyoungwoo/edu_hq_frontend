import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-web',
  templateUrl: './login-web.page.html',
  styleUrls: ['./login-web.page.scss'],
})
export class LoginWebPage implements OnInit {

  postion = [
    {
      x: 126.7857687,
      y: 36.9131764,
      info:{
        x:36.8637499,
        y:126.6422598,
        name:'홍길동'
      }
    },
    {
      x: 126.7047445,
      y: 36.8285827,
      info:{
        x:36.8186891,
        y:126.4554922,
        name:'긷두한'
      }
    },
    {
      x: 126.9011252,
      y: 36.8274835
    },

]
  constructor() { }

  ngOnInit() {
  }

}