import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss'],
})
export class ApprovalComponent implements OnInit {

  // 신규 결재선에 필요한 정보
  @Input() set project_id(v:number) {

  }
  @Input() set ctgo_approval_module_id(v:number) {

  }

  // 결재선 불러올 때, 필요한 정보
  @Input() set approval_id(v:number) {

  }

  constructor() { }

  ngOnInit() {}

}
