import { Component, Input, OnInit } from '@angular/core';
import { ApprovalAnswerType } from '../approval/approval.component';

@Component({
  selector: 'app-chip-approval-answer',
  templateUrl: './chip-approval-answer.component.html',
  styleUrls: ['./chip-approval-answer.component.scss'],
})
export class ChipApprovalAnswerComponent implements OnInit {

  @Input() approval_cnt_answer:ApprovalAnswerType;

  constructor() { }

  ngOnInit() {}

}
