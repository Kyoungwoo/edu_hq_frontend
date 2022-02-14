import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-approval-popup',
  templateUrl: './approval-popup.component.html',
  styleUrls: ['./approval-popup.component.scss'],
})
export class ApprovalPopupComponent implements OnInit {

  @Input() selectedList
  constructor() { }

  ngOnInit() {
    console.log("this.selectedList",this.selectedList);
  }

}
