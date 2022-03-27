import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FileService, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ApprovalObj } from 'src/app/page/confirm/box/approval-edit/approval-edit.page';

@Component({
  selector: 'app-worker-minutes-edit',
  templateUrl: './worker-minutes-edit.page.html',
  styleUrls: ['./worker-minutes-edit.page.scss'],
})
export class WorkerMinutesEditPage implements OnInit {

  @Input() safety_meeting_id;

  @Input() project_id;
  @Input() safety_meeting_type;

  form = {
    project_id: null, // 현장ID
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
    safety_meeting_id: null // 회의록 ID
  }
  
  approvalForm = {
    project_id: this.user.userData.belong_data.project_id,
    ctgo_approval_module_id: null
  }
  approvalRes:ConnectResult<ApprovalObj>;

  constructor(
    private alert: AlertService,
    public user: UserService,
    private connect: ConnectService,
    private toast: ToastService,
    private modal: ModalController,
    private file: FileService,
    private date: DateService
  ) { }

  async ngOnInit() {
    if(!this.safety_meeting_id) {
      // 신규 작성 시, 디폴트 값을 가져옴
      this.getDefaultForm();
      this.getDefaultContent();
  
      // 결재 - 신규작성시에는 디폴트 결재선을 불러옴
      this.getDefaultApprovalForm();
      this.getDefaultApproval();
    }
    else {
      // 수정 시에는 정보를 가져와서 채워넣음
      this.form.safety_meeting_id = this.safety_meeting_id;
      await this.getDetail();
    }

    // 나머지 정보
    this.form.safety_meeting_type_text = this.getTypeText(this.safety_meeting_type);
    // 결재에는 ctgo_approval_module_id 가 반드시 필요하므로 유의
    this.form.ctgo_approval_module_id = this.getApprovalModuleId(this.safety_meeting_type);
  }

  getDefaultForm() {
    const { belong_data } = this.user.userData;
    this.form.project_id = this.project_id;
    this.form.company_id = belong_data.company_id;
    this.form.company_name = belong_data.company_name;

    this.form.safety_meeting_type = this.safety_meeting_type;

    this.form.safety_meeting_date = this.date.today();
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
      // 정보를 가져온 후, 결재 정보를 가져와야 한다!
      this.getApproval();
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
   * 결재선 정보 입력 (분리해서 컴포넌트로 만들어야 함)
   */

  // (임시) approval 불러오는데에 필요한 정보들 가져오기
  getDefaultApprovalForm() {
    this.approvalForm.project_id = this.form.project_id;
    this.approvalForm.ctgo_approval_module_id = this.getApprovalModuleId(this.safety_meeting_type);
  }
  /** 
   * 기본 결재선 정보 가져오기 
   */
  async getDefaultApproval() {
    this.approvalRes = await this.connect.run('/approval/default/get', this.approvalForm, {
      loading: true,
      parse: ['answer_datas', 'refer_datas']
    });

    if(this.approvalRes.rsCode === 0) {
      // 잘 가지고 왔으면 대씀
    }
    else if(this.approvalRes.rsCode === 1008) {
      // 내 정보를 넣어줌
      this.approvalRes.rsCode = 0;
      
      this.approvalRes.rsObj = {
        approval_default_id: 0,
        ctgo_approval_module_id: this.approvalForm.ctgo_approval_module_id,
        user_id: this.user.userData.user_id,
        project_id: this.approvalForm.project_id,

        answer_datas: [{
          approval_order_no: 0,
          approval_last_state: 0,
          answer_user_id: this.user.userData.user_id,
          answer_user_name: this.user.userData.user_name
        }],
        refer_datas: []
      };
    }
    else {
      this.toast.present({ color: 'warning', message: this.approvalRes.rsMsg });
    }
  }
  /**
   * 저장된 결재선 정보 가져오기
   */
  async getApproval() {
    const res = await this.connect.run('/approval/get', {
      approval_id: this.form.approval_id
    });
    if(res.rsCode === 0) {
      const answer_datas = JSON.parse(res.rsObj.approval_default_data.answer_datas);
      const approval_comment = res.rsObj.approval_comment;

      this.approvalRes = new ConnectResult<ApprovalObj>();
      this.approvalRes.rsObj = new ApprovalObj();
      this.approvalRes.rsObj.answer_datas = answer_datas;
      this.approvalRes.rsObj.approval_comment = approval_comment;
    }
    else  {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  /**
   * 임시저장
   */
  temptSave() {
    this.alert.present({
      message: '임시 저장 하시겠습니까?',
      buttons: [
        { text: '아니오' },
        { text: '예', handler: async() => {
          if(!this.form.safety_meeting_place) { this.toast.present({ color: 'warning', message: '회의 장소를 입력해주세요.' }); return; }
          if(!this.form.safety_meeting_content) { this.toast.present({ color: 'warning', message: '협의 사항을 입력해주세요.' }); return; }
          if(!this.form.safety_meeting_resolve) { this.toast.present({ color: 'warning', message: '의결 사항을 입력해주세요.' }); return; }

          const answer_datas = this.approvalRes.rsObj.answer_datas;
          /**
           * order_no 정렬
           * 최종 결재자만 approval_last_state 가 1이고 나머지는 0임
           */
          answer_datas.forEach((item, i) => {
            item.approval_order_no = i+1;
            item.approval_last_state = i < answer_datas.length-1 ? 0 : 1;
          });
          const refer_datas = this.approvalRes.rsObj.refer_datas || [];

          this.form.safety_meeting_type = '안전';
          this.form.approval_cnt_answer = '임시저장';
          this.form.approval_default_data =  [
            {
              default_type: 'ANSWER',
              answer_datas
            },
            {
              default_type: 'REFER',
              refer_datas
            }
          ];

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
            }
          }
          else {
            this.toast.present({ color: 'warning', message: res.rsMsg });
          }
        }}
      ]
    })
  }
  /**
   * 결재 요청
   */
  async sendApproval() {
    
  }
}
