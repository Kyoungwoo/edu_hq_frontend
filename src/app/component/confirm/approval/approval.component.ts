import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { AnswerObj, ApprovalObj, CommentObj, ReferObj } from 'src/app/page/confirm/box/approval-edit/approval-edit.page';
import { ConfirmProcessPopupComponent } from '../confirm-process-popup/confirm-process-popup.component';
import { ConfirmSettingPopupComponent } from '../confirm-setting-popup/confirm-setting-popup.component';


export type ApprovalAnswerType = "전체" | "임시저장" | "결재중" | "결재완료" | "반려";
export interface ApprovalBtnClickEvent {
  approval_data: ApprovalData;
  approval_comment: CommentObj[];
  btnList:string[];
  delete: () => Promise<ConnectResult>;
  send: () => Promise<ConnectResult>;
  recovery: () => Promise<ConnectResult>;
  approval: () => Promise<ConnectResult>;
  refresh: () => Promise<ConnectResult>;
}
export type ApprovalData = [
  {
    default_type: "ANSWER",
    answer_datas: AnswerObj[]
  },
  {
    default_type: "REFER",
    refer_datas: ReferObj[]
  }
];
@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss'],
})
export class ApprovalComponent implements OnInit {

  // 신규 결재선에 필요한 정보
  @Input() set project_id(v:number) {
    if(this.form.approval_id !== v) {
      this.form.project_id = v;
      this.get();
    }
  }
  @Input() set ctgo_approval_module_id(v:number) {
    if(this.form.ctgo_approval_module_id !== v) {
      this.form.ctgo_approval_module_id = v;
      this.get();
    }
  }

  // 결재선 불러올 때, 필요한 정보
  @Input() set approval_id(v:number) {
    if(this.form.approval_id !== v) {
      this.form.approval_id = v;
      this.get();
    }
  }

  // 결재선 복사 작성시, 필요한 정보
  @Input() isDuplicate:boolean = false;

  // btn 아웃풋들
  @Output() deleteClick = new EventEmitter();
  @Output() saveClick = new EventEmitter();
  @Output() sendClick = new EventEmitter();
  @Output() recoveryClick = new EventEmitter();
  @Output() approvalClick = new EventEmitter();
  @Output() printClick = new EventEmitter();
  @Output() change = new EventEmitter();

  form = {
    project_id: null,
    ctgo_approval_module_id: null,
    approval_id: null
  }
  res:ConnectResult<ApprovalObj>;

  btnList = [];

  isApprovalHidden:boolean = true;

  constructor(
    private user: UserService,
    private connect: ConnectService,
    private toast: ToastService,
    private _modal: ModalController,
    private alert: AlertService
  ) { }

  ngOnInit() {}

  /**
   * 버튼 클릭
   */
  onBtnClick(btn) {
    switch(btn) {
      case '삭제':
        this.onDeleteClick();
        break;
      case '임시저장':
        this.onSaveClick();
        break;
      case '결재선':
        this.onEditClick();
        break;
      case '결재요청':
        this.onSendClick();
        break;
      case '결재회수':
        this.onRecoveryClick();
        break;
      case '결재':
        this.onApprovalClick();
        break;
      
    }
  }
  /** 삭제버튼 클릭 */
  async onDeleteClick() {
    this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니오' },
        { text: '예', handler: () => {
          this.deleteClick.emit({
            delete: this.deleteApproval.bind(this)
          })
        }}
      ]
    });
  }
  async deleteApproval() {
    const res = await this.connect.run('/approval/delete', {
      approval_id: this.form.approval_id
    });
    return res;
  }

  /** 저장버튼 클릭 */
  onSaveClick() {
    this.alert.present({
      message: '임시 저장 하시겠습니까?',
      buttons: [
        { text: '아니오' },
        { text: '예', handler: async() => {
          this.saveClick.emit(this.getClickEvent());
        }}
      ]
    });
  }
  /** 결재선 변경 버튼 클릭 */
  async onEditClick() {
    const modal = await this._modal.create({
      component: ConfirmSettingPopupComponent,
      componentProps: {
        approvalObj: this.res.rsObj
      }
    });

    modal.present();
    const { data } = await modal.onDidDismiss();

    if(data) {
      this.res.rsObj.answer_datas = data.answer_datas;
      this.res.rsObj.refer_datas = data.refer_datas;
      this.res.rsObj.approval_comment = data.comment_datas;
    }

    this.change.emit(this.getClickEvent());
  }
  /** 결재 요청 버튼 클릭 */
  onSendClick() {
    this.alert.present({
      message: '결재 요청 하시겠습니까?',
      buttons: [
        { text: '아니오' },
        { text: '예', handler: async() => {
          this.sendClick.emit(this.getClickEvent());
        }}
      ]
    });
  }
  /** 임시저장 된 결재를 결재 요청 상태 변경 함수 */
  async sendApproval() {
    const res = await this.connect.run('/approval/update/req', {
      approval_id: this.form.approval_id
    });
    return res;
  }
  /** 결재 회수 버튼 클릭 */
  onRecoveryClick() {
    this.alert.present({
      message: '회수 하시겠습니까?',
      buttons: [
        { text: '아니오' },
        { text: '예', handler: async() => {
          this.recoveryClick.emit(this.getClickEvent());
        }}
      ]
    });
  }
  /** 회수 함수 */
  async recoveryApproval() {
    const res = await this.connect.run('/approval/recovery', {
      approval_id: this.form.approval_id
    }, { loading: true });
    if(res.rsCode === 0) this.get();
    return res;
  }
  /** 결재 버튼 클릭 */
  approvalForm = {
    approval_id: null,
    approval_answer: null,
    approval_comment: null
  }
  async onApprovalClick() {
    const modal = await this._modal.create({
      component: ConfirmProcessPopupComponent,
      cssClass: 'confirm-process-modal'
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.approvalForm = {
        approval_id: this.form.approval_id,
        approval_answer: data.approval_answer,
        approval_comment: data.approval_comment
      }
      this.approvalClick.emit(this.getClickEvent());
    }
  }
  /** 결재 함수 */
  async approvalApproval() {
    const res = await this.connect.run('/approval/send', this.approvalForm, { loading: true });
    return res;
  }

  /** 프린트 버튼 클릭 */
  onPrintClick() {

  }

  /** 반환 이벤트 파라미터 만들기 */
  getClickEvent():ApprovalBtnClickEvent {
    return {
      approval_data: this.getApprovalData(),
      approval_comment: this.res?.rsObj?.approval_comment || [],
      btnList: this.btnList,
      delete: this.deleteApproval.bind(this),
      send: this.sendApproval.bind(this),
      recovery: this.recoveryApproval.bind(this),
      approval: this.approvalApproval.bind(this),
      refresh: this.get.bind(this)
    }
  }
  /** 
   * 서버에 올리는 형태로 데이터를 변경하는 함수 
   */
  private getApprovalData() {
    const answer_datas = this.res?.rsObj?.answer_datas || [];
    /**
     * order_no 정렬
     * 최종 결재자만 approval_last_state 가 1이고 나머지는 0임
     */
    answer_datas.forEach((item, i) => {
      item.approval_order_no = i+1;
      item.approval_last_state = i < answer_datas.length-1 ? 0 : 1;
    });
    const refer_datas = this.res?.rsObj?.refer_datas || [];
    return [
      {
        default_type: "ANSWER",
        answer_datas
      },
      {
        default_type: "REFER",
        refer_datas
      }
    ] as ApprovalData;
  }

  /**
   * 결재선 데이터 셋팅
   * 상황에 따라, 기본결재선, 혹은 문서에서 지정된 결재선을 가지고 온다.
   */
  async get() {
    if(this.form.project_id && this.form.ctgo_approval_module_id && !this.form.approval_id && !this.isDuplicate) {
      // 결재선이 없을 경우, 디폴트를 넣어줌
      await Promise.all([
        this.getDefaultButton(),
        this.getDefaultApproval()
      ]);
    }
    else if(this.form.project_id && this.form.ctgo_approval_module_id && this.form.approval_id && !this.isDuplicate) {
      // 결재선이 존재할 경우, 기존 결재선을 끌고 옴
      await Promise.all([
        this.getApprovalButton(),
        this.getApproval()
      ]);
    }
    else if(this.form.project_id && this.form.ctgo_approval_module_id && this.form.approval_id && this.isDuplicate) {
      // 복사작성일 경우, 버튼은 디폴트를 가져오고, 결재선은 끌고온 다음 초기화 시켜줌
      await Promise.all([
        this.getDefaultButton(),
        this.getApproval()
      ]);
      this.approval_id = null;
      this.form.approval_id = null;
      this.res.rsObj.answer_datas.forEach(item => {
        item.approval_id = null;
        item.approval_answer = null;
        item.approval_date = null;
      });
    }

    this.change.emit(this.getClickEvent());
  }

  /** 
   * 기본 결재선 정보 가져오기
   * 기본 결재선을 가져올 때는 버튼을 가져오는 함수를 호출하지 않으므로, 임의로 만들어줘야 한다.
   */
  getDefaultButton() {
    this.btnList = ["임시저장", "결재선", "결재요청"];
  }
  async getDefaultApproval() {
    const res = await this.connect.run('/approval/default/get', this.form, {
      loading: true,
      parse: ['answer_datas', 'refer_datas']
    });

    // 혹시 지정된 결재선과 통신 중이었는지 확인 후 데이터 삽입
    if(!this.form.approval_id) this.res = res;
    else return;

    if(res.rsCode === 0) {
      // 잘 가지고 왔으면, 되어씀
      res.rsObj.answer_datas.sort((a, b) => a.approval_order_no > b.approval_order_no ? 1 : -1);
    }
    else if(res.rsCode === 1008) {
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
        refer_datas: [],
        approval_comment: [{
          approval_answer: '미결',
          approval_comment: '',
          approval_date: '',
          approval_last_state: 1,
          approval_order_no: 0,
          company_id: this.user.userData.belong_data.company_id,
          company_name: this.user.userData.belong_data.company_name,
          user_id: this.user.userData.user_id,
          user_name: this.user.userData.user_name
        }]
      };
    }
    else {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }
  
  /**
   * 저장된 결재선 정보 가져오기
   * 저장된 결재선 정보를 가져올 떄는 버튼, 결재선정보 두가지를 가져온다.
   */
  async getApprovalButton() {
    const res = await this.connect.run('/approval/btn/get', {
      approval_id: this.form.approval_id
    });
    if(res.rsCode === 0) {
      this.btnList = res.rsObj.btn_data;
    }
    else  {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }
  async getApproval() {
    const res = await this.connect.run('/approval/get', {
      approval_id: this.form.approval_id
    });
    if(res.rsCode === 0) {
      const answer_datas = JSON.parse(res.rsObj.approval_default_data.answer_datas);
      const approval_comment = res.rsObj.approval_comment;

      answer_datas.sort((a, b) => a.approval_order_no > b.approval_order_no ? 1 : -1);
      approval_comment.sort((a, b) => a.approval_order_no > b.approval_order_no ? 1 : -1);

      this.res = new ConnectResult<ApprovalObj>();
      this.res.rsObj = new ApprovalObj();
      this.res.rsObj.answer_datas = answer_datas;
      this.res.rsObj.approval_comment = approval_comment;
    }
    else  {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  /**
   * 모바일 레이아웃에서 결재선을 토글한다.
   */
  approvalToggle() {
    this.isApprovalHidden = !this.isApprovalHidden;
  }
}