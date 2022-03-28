import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileService } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { AnswerObj, ApprovalObj, ReferObj } from 'src/app/page/confirm/box/approval-edit/approval-edit.page';
import { SearchPeopleComponent } from '../../modal/search-people/search-people.component';

@Component({
  selector: 'app-confirm-setting-popup',
  templateUrl: './confirm-setting-popup.component.html',
  styleUrls: ['./confirm-setting-popup.component.scss'],
})
export class ConfirmSettingPopupComponent implements OnInit {

  @Input() approvalObj:ApprovalObj;

  answerObj:AnswerObj[];
  answerOrigin:AnswerObj[];

  referObj:ReferObj[];
  referOrigin:ReferObj[];

  answerSortableOption = {
    handle: '.answer-handle',
    onMove: (ev) => {
      if (ev.related) {
          return !ev.related.classList.contains('locked');
      }
    }
  }

  constructor(
    private user: UserService,
    private connect: ConnectService,
    private toast: ToastService,
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
      component: SearchPeopleComponent,
      componentProps: {
        form: {
          company_id: this.user.userData.belong_data.company_id,
          search_text: '',
          user_type: 'WORKER'
        }
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
    }
  }
  /**
   * 결재자 삭제
   */
  async removeAnswer(i) {
    this.answerObj.splice(i, 1);
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
      component: SearchPeopleComponent,
      componentProps: {
        form: {
          company_id: this.user.userData.belong_data.company_id,
          search_text: '',
          user_type: 'WORKER'
        }
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
      refer_datas: this.referObj
    });
  }

}
