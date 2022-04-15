import { Component, Input, OnInit } from '@angular/core';
import { AnswerObj } from 'src/app/page/confirm/box/approval-edit/approval-edit.page';

@Component({
  selector: 'app-approval-template',
  templateUrl: './approval-template.component.html',
  styleUrls: ['./approval-template.component.scss'],
})
export class ApprovalTemplateComponent implements OnInit {

  @Input() approval_answer:AnswerObj[];

  constructor() { }

  ngOnInit() {}

}
