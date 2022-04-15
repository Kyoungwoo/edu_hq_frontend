import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approval-document',
  templateUrl: './approval-document.component.html',
  styleUrls: ['./approval-document.component.scss'],
})
export class ApprovalDocumentComponent implements OnInit {

  isDocumentHidden:boolean = false;

  constructor() { }

  ngOnInit() {}

  /** 모바일 레이아웃 전용 */
  documentToggle() {
    this.isDocumentHidden = !this.isDocumentHidden;
  }

}
