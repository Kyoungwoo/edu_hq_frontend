import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ApprovalBtnClickEvent } from 'src/app/component/confirm/approval/approval.component';
import { CommentObj } from 'src/app/page/confirm/box/approval-edit/approval-edit.page';

@Component({
  selector: 'app-worker-minutes-edit',
  templateUrl: './worker-minutes-edit.page.html',
  styleUrls: ['./worker-minutes-edit.page.scss'],
})
export class WorkerMinutesEditPage implements OnInit {

  /** 수정 시 필요한 ID */
  @Input() safety_meeting_id;

  /** 신규 작성시 필요한 정보 */
  @Input() project_id;
  @Input() safety_meeting_type;

  form = {
    project_id: null, // 현장ID
    project_name: null,
    company_id: null, // 회사ID
    company_name: null, // 회사 이름

    safety_meeting_type: null, // 회의록 유형
    safety_meeting_type_text: null, // 회의록 유형 장문

    safety_meeting_date: null, // 회의록 일자
    safety_meeting_place: null, // 회의록 장소

    safety_meeting_content: null, // 회의록 협의내용
    safety_meeting_resolve: null, // 회의록 의결내용
    safety_meeting_etc: '', // 회의록 기타내용
    
    file_data: [] as FutItem[], //FUT
    file: [] as (File|FileBlob)[], // FILE
    file_json: new FileJson(), // JSON

    // 결재 값
    ctgo_approval_module_id: null,
    approval_cnt_answer: null, // 결재선 유형 - 임시저장 OR 결재중 -> 결재요청은 결재중 상태로 올려주세요. 두가지중 하나만 가능
    approval_default_data: [], // 결재선 값

    // 수정시 정보
    approval_id: null, // 결재 ID
    safety_meeting_id: null, // 회의록 ID
    user_name: null
  }

  permission = {
    edit: false
  }

  approval_comment:CommentObj[];

  constructor(
    public user: UserService,
    private connect: ConnectService,
    private toast: ToastService,
    private modal: ModalController,
    private loading: LoadingService,
    private date: DateService
  ) { }

  async ngOnInit() {
    if(!this.safety_meeting_id) {
      // 신규 작성 시, 디폴트 값을 가져옴
      this.getDefaultForm(); // 폼으로 채우고
      this.getDefaultContent(); // 기본 정보를 가지고 온다.
    }
    else {
      // 수정 시에는 정보를 가져와서 채워넣음
      this.form.safety_meeting_id = this.safety_meeting_id;
      await this.getDetail();
    }

    // 나머지 정보
    this.form.safety_meeting_type_text = this.getTypeText(this.form.safety_meeting_type);
    // 결재에는 ctgo_approval_module_id 가 반드시 필요하므로 유의
    this.form.ctgo_approval_module_id = this.getApprovalModuleId(this.form.safety_meeting_type);
  }

  getDefaultForm() {
    const { user_name, belong_data } = this.user.userData;
    this.form.project_id = this.project_id;
    this.form.company_id = belong_data.company_id;
    this.form.company_name = belong_data.company_name;

    this.form.safety_meeting_type = this.safety_meeting_type;

    this.form.safety_meeting_date = this.date.today();
    this.form.user_name = user_name;
  }

  /**
   * 기본 회의록 협의사항 가져오기
   */
   async getDefaultContent() {
    const res = await this.connect.run('/board/safety_meeting/default/get', {
      project_id: this.form.project_id,
      company_id: this.form.company_id
    });
    if(res.rsCode === 0) {
      switch(this.form.safety_meeting_type) {
        case '안전':
          this.form.safety_meeting_content = res.rsObj.safety_default;
          break;
        case '노사':
          this.form.safety_meeting_content = res.rsObj.union_default;
          break;
        case '산업':
          this.form.safety_meeting_content = res.rsObj.health_default;
          break;
      }
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  /**
   * 회의록 정보 가져오기
   */
  async getDetail() {
    const res = await this.connect.run('/board/safety_meeting/detail', {
      safety_meeting_id: this.form.safety_meeting_id
    }, { parse: ['file_data'] });
    if(res.rsCode === 0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      }
      // 정보를 가져온 후, 결재 정보를 가져와야 한다! => app-approval component가 알아서 자동으로 가져온다!
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  /**
   * 회의록 텍스트 가져오기
   */
  getTypeText(safety_meeting_type) {
    switch(safety_meeting_type) {
      case '안전':
        return '안전 및 보건에 관한 협의체 회의록';
      case '노사':
        return '노사 협의체 회의록';
      case '산업':
        return '산업안전보건위원회 회의록';
    }
  }
  /**
   * 회의록 결재선 아이디 가져오기
   */
  getApprovalModuleId(safety_meeting_type) {
    switch(safety_meeting_type) {
      case '안전':
        return 11;
      case '노사':
        return 10;
      case '산업':
        return 9;
    }
  }

  /** 
   * 삭제 버튼 클릭
   */
   async onDeleteClick(ev:ApprovalBtnClickEvent) {
    // 여기서는 딱히 처리할게 없음. 그냥 삭제 후 닫기.
    const res = await ev.delete();
    if(res.rsCode  === 0) {
      this.modal.dismiss();
      // 목록을 새로고침 해줘야 함
      window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }
  /**
   * 임시 저장버튼 클릭
   */
  async onSaveClick(ev:ApprovalBtnClickEvent) {
    const approval_data = ev.approval_data;

    if(!this.form.safety_meeting_place) { this.toast.present({ color: 'warning', message: '회의 장소를 입력해주세요.' }); return; }
    if(!this.form.safety_meeting_content) { this.toast.present({ color: 'warning', message: '협의 사항을 입력해주세요.' }); return; }
    if(!this.form.safety_meeting_resolve) { this.toast.present({ color: 'warning', message: '의결 사항을 입력해주세요.' }); return; }

    this.form.approval_cnt_answer = '임시저장';
    this.form.approval_default_data = approval_data;

    let url = '';
    if(!this.form.approval_id) {
      url = '/board/safety_meeting/insert';
    }
    else {
      url = '/board/safety_meeting/update';
    }

    const res = await this.connect.run(url, this.form, { loading: true });

    if(res.rsCode === 0) {
      this.toast.present({ color: 'success', message: '임시저장 되었습니다.' });
      if(!this.form.approval_id) {
        // 신규 작성이었다면, approval_id와 safety_meeting_id 반환받아서 넣어줘야 임시저장 시, 새로 추가되는 것이 아닌 수정이 된다.
        this.form.approval_id = res.rsObj.approval_id;
        this.form.safety_meeting_id = res.rsObj.safety_meeting_id;
        // 목록을 새로고침 해줘야 함
        window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
      }
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }
  /**
   * 결재 요청 버튼 클릭
   */
  async onSendClick(ev:ApprovalBtnClickEvent) {
    const approval_data = ev.approval_data;

    if(!this.form.safety_meeting_place) { this.toast.present({ color: 'warning', message: '회의 장소를 입력해주세요.' }); return; }
    if(!this.form.safety_meeting_content) { this.toast.present({ color: 'warning', message: '협의 사항을 입력해주세요.' }); return; }
    if(!this.form.safety_meeting_resolve) { this.toast.present({ color: 'warning', message: '의결 사항을 입력해주세요.' }); return; }

    this.form.approval_cnt_answer = '결재중';
    this.form.approval_default_data = approval_data;

    if(!this.form.approval_id) {
      // 임시저장도 안한 상태에서는 insert에서 결재 요청을 처리한다.
      const res = await this.connect.run('/board/safety_meeting/insert', this.form, { loading: true });

      if(res.rsCode === 0) {
        this.toast.present({ color: 'success', message: '결재요청 되었습니다.' });
        this.modal.dismiss();
        // 목록을 새로고침 해줘야 함
        window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
      }
      else {
        this.toast.present({ color: 'warning', message: res.rsMsg });
      }
    }
    else {
      /**
       * 임시저장을 한 상태에서는 approval에서 따로 결재 요청(ev.send()) 처리한다.
       * 순서상, update 후 결재 요청을 욜리는 것이 맞다고 생각된다.
       */
      const loading = await this.loading.present();
      
      const res = await this.connect.run('/board/safety_meeting/update', this.form);

      if(res.rsCode === 0) {
        const approvalRes = await ev.send();
        if(approvalRes.rsCode === 0) {
          this.toast.present({ color: 'success', message: '결재요청 되었습니다.' });
          this.modal.dismiss();
          // 목록을 새로고침 해줘야 함
          window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
        }
        else {
          this.toast.present({ color: 'warning', message: approvalRes.rsMsg });  
        }
      }
      else {
        this.toast.present({ color: 'warning', message: res.rsMsg });
      }

      loading.dismiss();
    }
  }
  /** 
   * 결재 회수 버튼 클릭 
   */
  async onRecoveryClick(ev:ApprovalBtnClickEvent) {
    const res = await ev.recovery();
    if(res.rsCode === 0) {
      // 목록을 새로고침 해줘야 함
      window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
    }

  }
  /**
   * 결재 버튼 클릭
   */
   async onApprovalClick(ev:ApprovalBtnClickEvent) {
    const res = await ev.approval();
    if(res.rsCode === 0) {
      // 목록을 새로고침 해줘야 함
      window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
    }
  }

  /**
   * 결재 상태가 변할 때 행동
   */
  onApprovalChange(ev:ApprovalBtnClickEvent) {
    if(ev.btnList.includes('임시저장')) {
      this.permission.edit = true;
    }
    else {
      this.permission.edit = false;
    }

    /** 결재자 의견을 가지고 온다. */
    this.approval_comment = ev.approval_comment;
  }
}
