import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FileService } from 'src/app/basic/service/core/file.service';
import { AnswerObj, ApprovalObj, CommentObj, ReferObj } from 'src/app/page/confirm/box/approval-edit/approval-edit.page';
import { ApprovalPeopleComponent } from '../approval-people/approval-people.component';

@Component({
  selector: 'app-confirm-setting-popup',
  templateUrl: './confirm-setting-popup.component.html',
  styleUrls: ['./confirm-setting-popup.component.scss'],
})
export class ConfirmSettingPopupComponent implements OnInit {

  @Input() project_id:number;
  @Input() company_id:number;
  @Input() approvalObj:ApprovalObj;

  answerObj:AnswerObj[];
  answerOrigin:AnswerObj[];

  referObj:ReferObj[];
  referOrigin:ReferObj[];

  commentObj:CommentObj[];
  commentOrigin:CommentObj[];

  answerSortableOption = {
    handle: '.answer-handle',
    onMove: (ev) => {
      if (ev.related) {
          return !ev.related.classList.contains('locked');
      }
    }
  }

  constructor(
    private _modal: ModalController,
    private file: FileService
  ) { }

  ngOnInit() {
    // 초기화 기능 때문에 클론을 떠놔야 함
    this.answerObj = this.file.clone(this.approvalObj.answer_datas);
    this.answerOrigin = this.file.clone(this.approvalObj.answer_datas);

    this.approvalObj.refer_datas = this.approvalObj.refer_datas || [];
    this.referObj = this.file.clone(this.approvalObj.refer_datas);
    this.referOrigin = this.file.clone(this.approvalObj.refer_datas);

    this.commentObj = this.file.clone(this.approvalObj.approval_comment);
    this.commentOrigin = this.file.clone(this.approvalObj.approval_comment);
  }

  /**
   * 결재자 초기화
   */
   async resetAnswer() {
    this.answerObj = this.file.clone(this.answerOrigin);
  }
  /** 
   * 결재자 추가
   */
  async addAnswer() {
    const modal = await this._modal.create({
      component: ApprovalPeopleComponent,
      componentProps: {
        form: {
          project_id: this.project_id,
          company_id: this.company_id,
          search_text: ''
        },
        preSelected: this.answerObj
      }
    });
    modal.present();

    const { data } = await modal.onDidDismiss();
    if(data) {
      const item = data.selectedItem;
      this.answerObj.push({
        answer_user_id: item.user_id,
        answer_user_name: item.user_name,
        approval_order_no: 0,
        approval_last_state: 0
      });
      this.commentObj.push({
        approval_answer: '미결',
        approval_comment: '',
        approval_date: '',
        approval_last_state: 0,
        approval_order_no: 0,
        company_id: item.company_id,
        company_name: item.company_name,
        user_id: item.user_id,
        user_name: item.user_name
      })
    }
  }
  /**
   * 결재자 삭제
   */
  async removeAnswer(i) {
    this.answerObj.splice(i, 1);
    this.commentObj.splice(i, 1);
  }
  /**
   * 참조자 초기화
   */
  async resetRefer() {
    this.referObj = this.file.clone(this.referOrigin);
  }
  /**
   * 참조자 추가
   */
  async addRefer() {
    const modal = await this._modal.create({
      component: ApprovalPeopleComponent,
      componentProps: {
        form: {
          project_id: this.project_id,
          company_id: this.company_id,
          search_text: ''
        },
        preSelected: this.answerObj
      }
    });
    modal.present();

    const { data } = await modal.onDidDismiss();
    if(data) {
      const item = data.selectedItem;
      this.referObj.push({
        refer_user_id: item.user_id,
        refer_user_name: item.user_name
      });
    }
  }
  /**
   * 참조자 삭제
   */
  async removeRefer(i) {
    this.referObj.splice(i, 1);
  }

  /**
   * 결재선 저장
   */
  async submit() {
    this._modal.dismiss({
      answer_datas: this.answerObj,
      refer_datas: this.referObj,
      comment_datas: this.commentObj
    });
  }

}
