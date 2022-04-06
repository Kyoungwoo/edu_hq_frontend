import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ApprovalBtnClickEvent } from 'src/app/component/confirm/approval/approval.component';
import { RiskEvaluationPopupPage } from '../risk-evaluation-popup/risk-evaluation-popup.page';

export class RiskEvaluationData {
  risk_asment_id:number = null; // 위험성평가 ID (위험성평가 문서 ID)
  seq_no:number = null; // 시퀀스 - 이 한 줄의 ID

  risk_construction_id:number = null; // 공사 ID
  risk_construction_name:string = null; // 공사명

  risk_unit_id:number = null; // 단위작업 ID
  risk_unit_name:string = null; // 단위작업

  area_top_id:number = null; // 장소 첫번째 ID
  area_top_name:string = null; // 장소 첫번째
  area_middle_id:number = null; // 장소 두번째 ID null 이면 안고른거
  area_middle_name:string = null; // 장소 두번째
  area_bottom_id:number = null; // 장소 세번째 ID null 이면 안고른거
  area_bottom_name:string = null; // 장소 세번째

  ctgo_machinery_ids:number[] = []; // 건설기계 ID들
  ctgo_machinery_names:string[] = []; // 건설기계명들

  ctgo_tool_ids:number[] = []; // 특수공도구 ID들
  ctgo_tool_names:string[] = []; // 특수공도구명들

  risk_factor_id:number = null; // 위험요인 ID null 이면 직접입력
  risk_factor_name:string = null; // 위험요인
  
  risk_frequency:number = null; // 빈도
  risk_strength:number = null; // 강도
  risk_danger_level:number = null; // 위험도

  risk_plan_id:number = null // 감소대책 ID null 이면 직접입력
  risk_plan_name:string = null; // 감소대책
}
@Component({
  selector: 'app-risk-evaluation-edit',
  templateUrl: './risk-evaluation-edit.page.html',
  styleUrls: ['./risk-evaluation-edit.page.scss'],
})
export class RiskEvaluationEditPage implements OnInit {

  /** 수정 시 필요한 ID */
  @Input() risk_asment_id;

  /** 신규 작성시 필요한 정보 */
  @Input() project_id;
  @Input() risk_asment_type;

  form = {
    project_id: null, // 현장 ID
    company_id: null, // 업체 ID
    company_name: null,
    ctgo_construction_id: null, // 공종 ID

    risk_asment_type: '수시', // 위험성평가 타입 / 최초, 정기, 수시
    risk_asment_type_text: '수시',
    risk_asment_start_date: this.date.today({ date: 1 }), // 시작일
    risk_asment_end_date: this.date.today({ date: 1 }), // 끝일
    evaluation_data: [] as RiskEvaluationData[], // 위험성 평가 평가표 정보 배열

    risk_file_data: [] as FutItem[], //FUT
    file: [] as (File|FileBlob)[], // FILE
    file_json: new FileJson(), // JSON
    
    // 결재 값
    ctgo_approval_module_id: null,
    approval_cnt_answer: null, // 결재선 유형 - 임시저장 OR 결재중 -> 결재요청은 결재중으로 올려주세요 두가지중 하나만 가능
    approval_default_data: [], // 결재자 / 참조자 등록정보

    // 수정시
    approval_id: null, // 결재 ID
    risk_asment_id: null, // 위험성 평가 ID
    user_name: null,
    create_date: this.date.today()
  }

  permission = {
    edit: false
  }

  constructor(
    public user: UserService,
    private connect: ConnectService,
    private toast: ToastService,
    private _modal: ModalController,
    private loading: LoadingService,
    private date: DateService
  ) { }

  async ngOnInit() {
    if(!this.risk_asment_id) {
      // 신규 작성 시, 디폴트 값을 가져옴
      this.getDefaultForm(); // 폼 채우기
    }
    else {
      // 수정 시에는 정보를 가져와서 채워넣음
      this.form.risk_asment_id = this.risk_asment_id;
      await this.getDetail();
    }

    // 나머지 정보
    this.form.risk_asment_type_text = this.getTypeText(this.form.risk_asment_type);
    // 결재에는 ctgo_approval_module_id 가 반드시 필요하므로 유의
    this.form.ctgo_approval_module_id = this.getApprovalModuleId(this.form.risk_asment_type);
  }

  getDefaultForm() {
    const { user_name, belong_data } = this.user.userData;
    this.form.project_id = this.project_id;
    this.form.company_id = belong_data.company_id;
    this.form.company_name = belong_data.company_name;

    this.form.risk_asment_type = this.risk_asment_type;

    this.form.user_name = user_name;
  }

  /**
   * 위험성평가 정보 가져오기
   */
   async getDetail() {
    const res = await this.connect.run('/risk/assessment/detail/get', {
      risk_asment_id: this.form.risk_asment_id
    }, { parse: ['risk_file_data'] });
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
   * 위험성평가 텍스트 가져오기
   */
   getTypeText(risk_asment_type) {
    switch(risk_asment_type) {
      case '최초':
        return '최초';
      case '정기':
        return '정기';
      case '수시':
        return '수시';
    }
  }

  /**
   * 회의록 결재선 아이디 가져오기
   */
   getApprovalModuleId(risk_asment_type) {
    switch(risk_asment_type) {
      case '최초':
        return 6;
      case '정기':
        return 7;
      case '수시':
        return 8;
    }
  }

  /** 
   * 삭제 버튼 클릭
   */
   async onDeleteClick(ev:ApprovalBtnClickEvent) {
    // 여기서는 딱히 처리할게 없음. 그냥 삭제 후 닫기.
    const res = await ev.delete();
    if(res.rsCode  === 0) {
      this._modal.dismiss();
      // 목록을 새로고침 해줘야 함
      window.dispatchEvent(new CustomEvent('risk-list:get()'));
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

    if(!this.form.evaluation_data.length) { this.toast.present({ color: 'warning', message: '위험성 평가 평가표 정보를 입력해주세요.' }); return; }

    this.form.approval_cnt_answer = '임시저장';
    this.form.approval_default_data = approval_data;

    let url = '';
    if(!this.form.approval_id) {
      url = '/risk/assessment/insert';
    }
    else {
      url = '/risk/assessment/update';
    }

    const res = await this.connect.run(url, this.form, { loading: true });

    if(res.rsCode === 0) {
      this.toast.present({ color: 'success', message: '임시저장 되었습니다.' });
      if(!this.form.approval_id) {
        // 신규 작성이었다면, approval_id와 safety_meeting_id 반환받아서 넣어줘야 임시저장 시, 새로 추가되는 것이 아닌 수정이 된다.
        this.form.approval_id = res.rsObj.approval_id;
        this.form.risk_asment_id = res.rsObj.risk_asment_id;
        // 목록을 새로고침 해줘야 함
        window.dispatchEvent(new CustomEvent('risk-list:get()'));
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

    if(!this.form.evaluation_data.length) { this.toast.present({ color: 'warning', message: '위험성 평가 평가표 정보를 입력해주세요.' }); return; }

    this.form.approval_cnt_answer = '결재중';
    this.form.approval_default_data = approval_data;

    if(!this.form.approval_id) {
      // 임시저장도 안한 상태에서는 insert에서 결재 요청을 처리한다.
      const res = await this.connect.run('/board/safety_meeting/insert', this.form, { loading: true });

      if(res.rsCode === 0) {
        this.toast.present({ color: 'success', message: '결재요청 되었습니다.' });
        this._modal.dismiss();
        // 목록을 새로고침 해줘야 함
        window.dispatchEvent(new CustomEvent('risk-list:get()'));
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
          this._modal.dismiss();
          // 목록을 새로고침 해줘야 함
          window.dispatchEvent(new CustomEvent('risk-list:get()'));
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
      window.dispatchEvent(new CustomEvent('risk-list:get()'));
    }

  }
  /**
   * 결재 버튼 클릭
   */
   async onApprovalClick(ev:ApprovalBtnClickEvent) {
    const res = await ev.approval();
    if(res.rsCode === 0) {
      // 목록을 새로고침 해줘야 함
      window.dispatchEvent(new CustomEvent('risk-list:get()'));
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
  }

  public async add() {
    const modal = await this._modal.create({
      component:RiskEvaluationPopupPage,

    })
    modal.present();
  }
}
