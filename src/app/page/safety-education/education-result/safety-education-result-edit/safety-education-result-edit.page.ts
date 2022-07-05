import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { fadeInAnimation } from 'src/app/basic/basic.animation';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ApprovalBtnClickEvent } from 'src/app/component/confirm/approval/approval.component';
import { AnswerObj, CommentObj } from 'src/app/page/confirm/box/approval-edit/approval-edit.page';

export class EducationItem {
  project_id: number;
  project_name: string;
  company_id: number;
  company_name: string;

  ctgo_education_safe_type: string; // 교육 유형
  ctgo_education_safe_type_text: string; // 교육 유형 텍스트

  ctgo_education_safe_id: number;
  create_user_name:string;
  ctgo_education_safe_name: string;
  ctgo_education_safe_text: string;

  education_safe_id: number;
  education_safe_text: string;
  education_safe_report_text: string;
  education_safe_state: string;
  education_safe_target: string;
  education_safe_manager_names: string;
  education_safe_place: string;
  education_safe_date: string;
  education_safe_start_time: string;
  ctgo_education_safe_title: string;
  education_safe_end_time: string;
  education_safe_report_instructor: string;
  education_safe_manager_ids: string
  education_safe_time:string;
  
  education_safe_file_data: FutItem[] = [];
  file:(File|FileBlob)[] = []; // FILE
  file_json:FileJson = new FileJson(); // JSON
  
  // 결재 값
  ctgo_approval_module_id: number;
  approval_cnt_answer:string; // 결재선 유형 - 임시저장 OR 결재중 -> 결재요청은 결재중으로 올려주세요 두가지중 하나만 가능
  approval_default_data: any[] = [];
  
  // 수정시 정보
  approval_id: number;
  education_safe_report_id: number;
  create_user_id: number;
  user_name: string;
  create_date: string;
}
@Component({
  selector: 'app-safety-education-result-edit',
  templateUrl: './safety-education-result-edit.page.html',
  styleUrls: ['./safety-education-result-edit.page.scss'],
  animations: [ fadeInAnimation ]

})
export class SafetyEducationResultEditPage implements OnInit {

  @Input() item;
  @Input() education_safe_report_id;

  res:ConnectResult<{
    education_safe_report_id: number,
    education_safe_id: number,
    create_date: string,
    company_id: number,
    user_id: number,
    company_name: string,
    user_name:string
  }>;

  form = new EducationItem();

  permission = {
    edit: true
  }

  approval_answer:AnswerObj[];
  approval_comment:CommentObj[];

  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    public date: DateService,
    private user: UserService,
    private _modal: ModalController,
    private loading: LoadingService
  ) { }

  async ngOnInit() {
    this.form.education_safe_id = this.item?.education_safe_id;
    if(this.item) {
      this.form.education_safe_report_instructor = this.item.education_safe_instructor;
      this.form.education_safe_report_text = this.item.ctgo_education_safe_text;
      await this.getDefaultItem();
      this.newReportList()
    }
    if(this.education_safe_report_id) {
        this.getItem();
        this.reportList();
    }

    // 나머지 정보
    this.form.ctgo_education_safe_type_text = this.getTypeText(this.form.ctgo_education_safe_type);
    // 결재에는 ctgo_approval_module_id 가 반드시 필요하므로 유의
    this.form.ctgo_approval_module_id = this.getApprovalModuleId(this.form.ctgo_education_safe_type);
  }
  
  /**
   * 교육 리포트가 없을 경우
   */
  async getDefaultItem() {
    this.form.approval_default_data.push({
      default_type:'REFER',
      answer_datas:[{
        answer_user_id:this.user.userData.user_id,
        approval_last_state:0,
        approval_order_no:1
      }],
      refer_datas:[{
        refer_user_id:this.user.userData.user_id
      }]
    });
    
    const res = await this.connect.run('/education/detail', {education_safe_id: this.item.education_safe_id },{
      parse:[ 'education_safe_manager_names', 'education_safe_manager_ids' ]
    });
    if(res.rsCode === 0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      }
      this.form.education_safe_report_text = res.rsObj.education_safe_text;

      // 정보를 가져온 후, 결재 정보를 가져와야 한다! => app-approval component가 알아서 자동으로 가져온다!
    } 
    else {
      this.toast.present({message:res.rsMsg, color:'warning'});
    }
  }

  /**
   * 교육 리포트가 있을 경우
   */
  async getItem() {
    const res = await this.connect.run('/education/report/get', { education_safe_report_id: this.education_safe_report_id },{
      parse:[ 'education_safe_report_file_data' ]
    })
    if(res.rsCode === 0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      }

      // 정보를 가져온 후, 결재 정보를 가져와야 한다! => app-approval component가 알아서 자동으로 가져온다!
    }
    else {
      this.toast.present({message:res.rsMsg, color:'warning'});
    }
  }

  //참석자 목록
  async reportList() {
    this.res = await this.connect.run('/education/report/attendant/list', { education_safe_report_id:this.education_safe_report_id});
    if(this.res.rsCode === 0) {
    }
  }


  async newReportList() {
    console.log("this.education_safe_report_id",this.item.education_safe_id);
    this.res = await this.connect.run('/education/attendant/list', { education_safe_id:this.item.education_safe_id,search_text:''});
    console.log("this.res",this.res);
    if(this.res.rsCode === 0) {
    }
  }

  /**
   * 회의록 텍스트 가져오기
   */
   getTypeText(ctgo_education_safe_type) {
    switch(ctgo_education_safe_type) {
      case '채용시':
        return '교육 결과 보고서 (채용시)';
      case '정기':
        return '교육 결과 보고서 (작업자 정기)';
      case '관리감독자정기': // => 1차에 안들어감
        return '교육 결과 보고서 (관리감독자 정기)';
      case '작업변경시':
        return '교육 결과 보고서 (작업 내용 변경 시)';
      case '특별':
        return '교육 결과 보고서 (특별 교육)';
    }
  }
  /**
   * 교육결과 보고서 아이디 가져오기
   */
   getApprovalModuleId(ctgo_education_safe_type) {
    switch(ctgo_education_safe_type) {
      case '채용시':
        return 1;
      case '정기':
        return 2;
      case '관리감독자정기': // => 1차에 안들어감
        return 3;
      case '작업변경시':
        return 4;
      case '특별':
        return 5;
    }
  }

  /** 
   * 삭제 버튼 클릭
   */
   async onDeleteClick(ev:ApprovalBtnClickEvent) {
    // 여기서는 딱히 처리할게 없음. 그냥 삭제 후 닫기.
    const res = await ev.delete();
    if(res.rsCode  === 0) {
      this._modal.dismiss(true);
      // 목록을 새로고침 해줘야 함
      window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
      window.dispatchEvent(new CustomEvent('approval-list:get()'));
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

    // if(!this.form.education_safe_report_instructor) { this.toast.present({ color: 'warning', message: '강사명이 없습니다.' }); return; }
    // if(!this.form.education_safe_report_text) { this.toast.present({ color: 'warning', message: '결과 보고를 작성해 주세요.' }); return; }

    this.form.approval_cnt_answer = '임시저장';
    this.form.approval_default_data = approval_data;

    console.log("this.form",this.form);
    let url = '';
    if(!this.form.approval_id) {
      url = '/education/report/insert';
    }
    else {
      url = '/education/report/update';
    }

    const res = await this.connect.run(url, this.form, { loading: true });

    if(res.rsCode === 0) {
      this.toast.present({ color: 'success', message: '임시저장 되었습니다.' });
      if(!this.form.approval_id) {
        // 신규 작성이었다면, approval_id와 safety_meeting_id 반환받아서 넣어줘야 임시저장 시, 새로 추가되는 것이 아닌 수정이 된다.
        this.form.approval_id = res.rsObj.approval_id;
        this.form.education_safe_report_id = res.rsObj.education_safe_report_id;
        // 목록을 새로고침 해줘야 함
        window.dispatchEvent(new CustomEvent('safety-education-result-list:get()'));
        window.dispatchEvent(new CustomEvent('approval-list:get()'));
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

    if(!this.form.education_safe_report_instructor) { this.toast.present({ color: 'warning', message: '강사명이 없습니다.' }); return; }
    if(!this.form.education_safe_report_text) { this.toast.present({ color: 'warning', message: '교육 내용을 입력해주세요.' }); return; }

    this.form.approval_cnt_answer = '결재중';
    this.form.approval_default_data = approval_data;

    console.log("this.form",this.form);

    if(!this.form.approval_id) {
      // 임시저장도 안한 상태에서는 insert에서 결재 요청을 처리한다.
      const res = await this.connect.run('/education/report/insert', this.form, { loading: true });

      if(res.rsCode === 0) {
        this.toast.present({ color: 'success', message: '결재요청 되었습니다.' });
        this._modal.dismiss(true);
        // 목록을 새로고침 해줘야 함
        window.dispatchEvent(new CustomEvent('safety-education-result-list:get()'));
        window.dispatchEvent(new CustomEvent('approval-list:get()'));
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
      
      const res = await this.connect.run('/education/report/update', this.form);

      if(res.rsCode === 0) {
        const approvalRes = await ev.send();
        if(approvalRes.rsCode === 0) {
          this.toast.present({ color: 'success', message: '결재요청 되었습니다.' });
          this._modal.dismiss(true);
          // 목록을 새로고침 해줘야 함
          window.dispatchEvent(new CustomEvent('safety-education-result-list:get()'));
          window.dispatchEvent(new CustomEvent('approval-list:get()'));
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
      window.dispatchEvent(new CustomEvent('safety-education-result-list:get()'));
      window.dispatchEvent(new CustomEvent('approval-list:get()'));
    }

  }
  /**
   * 결재 버튼 클릭
   */
   async onApprovalClick(ev:ApprovalBtnClickEvent) {
    const res = await ev.approval();
    if(res.rsCode === 0) {
      this._modal.dismiss();
      // 목록을 새로고침 해줘야 함
      window.dispatchEvent(new CustomEvent('safety-education-result-list:get()'));
      window.dispatchEvent(new CustomEvent('approval-list:get()'));
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
    
    /** 결재자들을 가지고 온다.(모바일 화면 용) */
    this.approval_answer = ev.approval_data[0].answer_datas;
    /** 결재자 의견을 가지고 온다. */
    this.approval_comment = ev.approval_comment;

    /** 모바일 화면에서는 테이블 편집이 안된다. */
    if(window.innerWidth <= 768) {
      this.permission.edit = false;
    }
  }
}
