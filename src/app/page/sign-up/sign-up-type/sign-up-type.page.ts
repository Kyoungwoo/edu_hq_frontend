import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-type',
  templateUrl: './sign-up-type.page.html',
  styleUrls: ['./sign-up-type.page.scss'],
})
export class SignUpTypePage implements OnInit {

  userType: 'worker' | 'LH' | 'supervisor' | 'company';

  constructor() { }

  ngOnInit() {
  }

}