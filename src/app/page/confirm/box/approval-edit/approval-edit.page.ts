import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileService } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { SearchPeopleComponent } from 'src/app/component/modal/search-people/search-people.component';

export class ApprovalObj {
  approval_default_id: number; // 기본 결재선 ID
  ctgo_approval_module_id: number; // 결재서식 ID
  user_id: number; // 유저 ID
  project_id: number; // 현장 ID

  answer_datas: Array<AnswerObj>; // 결재자 정보
  approval_comment?: Array<CommentObj>; // 코멘트 정보
  refer_datas: Array<ReferObj> // 참조자 정보
}
export class AnswerObj {
  // 디폴트 값
  answer_user_id: number; // 결재자 user_id
  answer_user_name: string; // 결재자 이름
  approval_order_no: number; // 결재자 순서
  approval_last_state: 0|1; // 최종결재자 여부 1 최종 / 0 최종아님

  // 결재 진행 중 값
  approval_answer?:string;
  approval_date?:string;
}
export class CommentObj {
  approval_answer: "승인"|"반려"|"미결";
  approval_comment: string;
  approval_date: string;
  approval_last_state: 0|1;
  approval_order_no: number;
  company_id: number;
  company_name: string;
  user_id: number;
  user_name: string;
}
export class ReferObj {
  refer_user_id: number; // 참조자 user_id
  refer_user_name: string; // 참조자 이름
}
@Component({
  selector: 'app-approval-edit',
  templateUrl: './approval-edit.page.html',
  styleUrls: ['./approval-edit.page.scss'],
})
export class ApprovalEditPage implements OnInit {

  answerSortableOption = {
    handle: '.answer-handle',
    onMove: (ev) => {
      if (ev.related) {
          return !ev.related.classList.contains('locked');
      }
    }
  }

  form = {
    project_id: this.user.userData.belong_data.project_id,
    ctgo_approval_module_id: null
  }

  res:ConnectResult<ApprovalObj>;
  answerOrigin:AnswerObj[];
  referOrigin:ReferObj[];

  constructor(
    private user: UserService,
    private connect: ConnectService,
    private toast: ToastService,
    private modal: ModalController,
    private file: FileService
  ) { }

  ngOnInit() {
    
  }

  /**
   * 결재선 리스트 가져오기
   * 전자결재 서식의 default가 '선택' 이므로 시작부터 들고오지는 않는다.
   */
  async get() {
    if(!this.form.ctgo_approval_module_id) {
      this.toast.present({ color: 'warning', message: '전자 결재 서식을 선택해주세요.' });
      return;
    }

    this.res = await this.connect.run('/approval/default/get', this.form, {
      loading: true,
      parse: ['answer_datas', 'refer_datas']
    });
    if(this.res.rsCode === 0) {
      // 초기화 기능 때문에 클론을 떠놔야 함
      this.answerOrigin = this.file.clone(this.res.rsObj.answer_datas);
      this.res.rsObj.refer_datas = this.res.rsObj.refer_datas || [];
      this.referOrigin = this.file.clone(this.res.rsObj.refer_datas);
    }
    else if(this.res.rsCode === 1008) {
      // 내 정보를 넣어줌
      this.res.rsCode = 0;
      
      this.res.rsObj = {
        approval_default_id: 0,
        ctgo_approval_module_id: this.form.ctgo_approval_module_id,
        user_id: this.user.userData.user_id,
        project_id: this.form.project_id,

        answer_datas: [{
          approval_order_no: 0,
          approval_last_state: 0,
          answer_user_id: this.user.userData.user_id,
          answer_user_name: this.user.userData.user_name
        }],
        refer_datas: []
      };
      // 초기화 기능 때문에 클론을 떠놔야 함
      this.answerOrigin = this.file.clone(this.res.rsObj.answer_datas);
      this.referOrigin = this.file.clone(this.res.rsObj.refer_datas);
    }
    else if(this.res.rsCode) {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }

  search() {
    this.get();
  }

  /**
   * 결재자 초기화
   */
  async resetAnswer() {
    this.res.rsObj.answer_datas = this.file.clone(this.answerOrigin);
  }
  /** 
   * 결재자 추가
   */
  async addAnswer() {
    const modal = await this.modal.create({
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
      this.res.rsObj.answer_datas.push({
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
    this.res.rsObj.answer_datas.splice(i, 1);
  }
  /**
   * 참조자 초기화
   */
  async resetRefer() {
    this.res.rsObj.refer_datas = this.file.clone(this.referOrigin);
  }
  /**
   * 참조자 추가
   */
  async addRefer() {
    const modal = await this.modal.create({
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
      this.res.rsObj.refer_datas.push({
        refer_user_id: item.user_id,
        refer_user_name: item.user_name
      });
    }
  }
  /**
   * 참조자 삭제
   */
  async removeRefer(i) {
    this.res.rsObj.refer_datas.splice(i, 1);
  }

  /**
   * 결재선 저장
   */
  async submit() {
    const answer_datas = this.res.rsObj.answer_datas;
    /**
     * order_no 정렬
     * 최종 결재자만 approval_last_state 가 1이고 나머지는 0임
     */
    answer_datas.forEach((item, i) => {
      item.approval_order_no = i+1;
      item.approval_last_state = i < answer_datas.length-1 ? 0 : 1;
    });
    const refer_datas = this.res.rsObj.refer_datas || [];
    
    const res = await this.connect.run('/approval/default/insert', {
      project_id: this.form.project_id,
      ctgo_approval_module_id: this.form.ctgo_approval_module_id,
      approval_default_data: [
        {
          default_type: 'ANSWER',
          answer_datas
        },
        {
          default_type: 'REFER',
          refer_datas
        }
      ]
    }, { loading: true });

    if(res.rsCode === 0) {
      // 저장되면, 다시 가져오기
      this.get();
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

}
