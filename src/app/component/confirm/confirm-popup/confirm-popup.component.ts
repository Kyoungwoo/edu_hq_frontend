import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/basic/basic.animation';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss'],
  animations: [fadeInAnimation]
})
export class ConfirmPopupComponent implements OnInit {

  test:boolean = false;
  constructor() { }

  ngOnInit() {}

}
