import { Component, OnInit } from '@angular/core';
import { slideUpInAnimation } from 'src/app/basic/basic.animation';

@Component({
  selector: 'app-sign-up-type',
  templateUrl: './sign-up-type.page.html',
  styleUrls: ['./sign-up-type.page.scss'],
  animations: [slideUpInAnimation]
})
export class SignUpTypePage implements OnInit {

  userType: 'WORKER' | 'LH' | 'SUPER' | 'COMPANY';

  constructor() { }

  ngOnInit() {
  }

}