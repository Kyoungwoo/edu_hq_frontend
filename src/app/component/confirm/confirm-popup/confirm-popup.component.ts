import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss'],
})
export class ConfirmPopupComponent implements OnInit {

  test:boolean = false;
  constructor() { }

  ngOnInit() {}

}
