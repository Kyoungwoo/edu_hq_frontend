import { Component, Input, OnInit } from '@angular/core';
import { CommentObj } from 'src/app/page/confirm/box/approval-edit/approval-edit.page';

@Component({
  selector: 'app-approval-comment',
  templateUrl: './approval-comment.component.html',
  styleUrls: ['./approval-comment.component.scss'],
})
export class ApprovalCommentComponent implements OnInit {

  @Input() approval_comment:CommentObj[];

  constructor() { }

  ngOnInit() {}

}
