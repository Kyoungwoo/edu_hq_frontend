import { ExcelService, Sheet, SheetStyle } from './../../../../basic/service/util/excel.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { fadeInAnimation } from 'src/app/basic/basic.animation';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
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
  
  company_file_data: FutItem[] = [];
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
    private loading: LoadingService,
    public languagePack: LanguagePackService,
    private excel: ExcelService
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
      parse:[ 'education_safe_manager_names', 'education_safe_manager_ids', 'education_safe_file_data' ]
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
      parse:[ 'education_safe_report_file_data', 'education_safe_file_data', 'company_file_data' ]
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

  async excel_download(){
    // const print_date = this.dateService.today();
    const headerBorder = '1px solid #000000';
    const backgroundColor = '#d9d9d9';
    const excelData:Sheet[] = [];

    const logo:SheetStyle = {
      border: headerBorder,
      textAlign:'center',
      fontSize:16,
      width: 80,
      height:30,
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const logo_theme:SheetStyle = {
      border: headerBorder,
      textAlign:'left',
      fontSize:12,
      height:30,
      verticalAlign: "top",
      whiteSpace: 'normal'
    }

    const title_1:SheetStyle = {
      border: headerBorder,
      textAlign:'center',
      width: 80,
      fontSize:16,
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const title_2:SheetStyle = {
      border: headerBorder,
      textAlign:'center',
      width: 40,
      fontSize:16,
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const title_3:SheetStyle = {
      border: headerBorder,
      textAlign:'center',
      width: 200,
      fontSize:16,
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const title_4:SheetStyle = {
      border: headerBorder,
      textAlign:'center',
      width: 60,
      fontSize:16,
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const border_1:SheetStyle = {
      border: headerBorder,
      textAlign:'center',
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const border_2:SheetStyle = {
      border: headerBorder,
      height: 65,
      textAlign:'center',
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const approval_1:SheetStyle = {
      border: headerBorder,
      backgroundColor,
      textAlign:'center',
      // width: 80,
      fontSize:12,
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const approval_2:SheetStyle = {
      border: headerBorder,
      textAlign:'center',
      // width: 80,
      height: 40,
      fontSize:11,
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const sub_title_1:SheetStyle = {
      border: headerBorder,
      backgroundColor,
      textAlign:'center',
      fontSize:12,
      height:52,
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const sub_title_2:SheetStyle = {
      border: headerBorder,
      backgroundColor,
      textAlign:'center',
      fontSize:12,
      height:32,
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const sub_title_1_user:SheetStyle = {
      border: headerBorder,
      backgroundColor,
      textAlign:'center',
      fontSize:12,
      height:48,
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const sub_title_2_user:SheetStyle = {
      border: headerBorder,
      textAlign:'center',
      fontSize:12,
      height:48,
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const sub_title_4:SheetStyle = {
      border: headerBorder,
      textAlign:'center',
      fontSize:12,
      height:32,
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    let logo_theme_arr = [];
    for(let i = 0; i < 18; i++) logo_theme_arr.push({code: logo_theme});

    let logo_theme_arr_2 = [];
    for(let i = 0; i < 14; i++) logo_theme_arr_2.push({code: logo_theme});
    for(let i = 0; i < 4; i++) logo_theme_arr_2.push({code: approval_2});

    let sub_title_theme_arr = [];
    for(let i = 0; i < 18; i++) sub_title_theme_arr.push({code: sub_title_2});

    let sub_title_theme_arr_2 = [];
    for(let i = 0; i < 18; i++) sub_title_theme_arr_2.push({code: sub_title_4});

    let border_theme_arr = [];
    for(let i = 0; i < 18; i++) border_theme_arr.push({code: border_2});

    // let sheetData:Sheet = {

    // };
    // 45
    let sheetData:Sheet = {
      name: '교육 결과 보고서',
      data: [
        [
          {colspan: 4, rowspan: 4},
          {text: '교육결과보고서', colspan: 9, rowspan: 4},
          {rowspan: 4, text: '결재'},
          {text: '검토'},
          {text: '검토'},
          {text: '검토'},
          {text: '승인'}
        ],
        [
          {rowspan: 3},
          {rowspan: 3},
          {rowspan: 3},
          {rowspan: 3}
        ],
        [],
        [],
        [
          {text: '현장명'},
          {text: this.form.project_name, colspan: 4},
          {text: '회사명'},
          {text: this.form.company_name, colspan: 4},
          {text: '작성일'},
          {text: this.form.create_date, colspan: 3},
          {text: '작성자'},
          {text: this.form.user_name, colspan: 3}
        ],
        [
          {text: '교육명'},
          {text: this.form.ctgo_education_safe_name, colspan: 13},
          {text: '교육대상'},
          {text: this.form.education_safe_target, colspan: 3},
        ],
        [
          {text: '교육장소'},
          {text: this.form.education_safe_place, colspan: 4},
          {text: '교육일'},
          {text: this.form.education_safe_date, colspan: 4},
          {text: '교육시간'},
          {text: this.form.education_safe_start_time+' ~ '+this.form.education_safe_end_time+'('+this.form.education_safe_time+'H)', colspan: 3},
          {text: '강사'},
          {text: this.form.education_safe_report_instructor, colspan: 3}
        ],
        [
          {text: '교육내용', colspan: 18},
        ],
        [
          {text: this.form.education_safe_text, colspan: 18, rowspan: 45},
        ],
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
        [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
        [],[],[],[],
        [
          {text: '사진', colspan: 9},
          {text: '사진', colspan: 9},
        ],
        [
          {colspan: 9, rowspan: 18},
          {colspan: 9, rowspan: 18},
        ]

      ],
      style: [
        [{code: logo},{code: logo},{code: logo},{code: logo},{code: title_1},{code: title_1},{code: title_1},{code: title_1},{code: title_2},{code: title_2},{code: title_1},{code: title_1},{code: title_1},{code: approval_1},{code: approval_1},{code: approval_1},{code: approval_1},{code: approval_1}],
        logo_theme_arr_2,logo_theme_arr_2,logo_theme_arr_2,
        [{code: sub_title_1},{code: border_1},{code: border_1},{code: border_1},{code: border_1},{code: sub_title_1},{code: border_1},{code: border_1},{code: border_1},{code: border_1},{code: sub_title_1},{code: border_1},{code: border_1},{code: border_1},{code: sub_title_1},{code: border_1},{code: border_1},{code: border_1}],
        [{code: sub_title_1},{code: border_1},{code: border_1},{code: border_1},{code: border_1},{code: border_1},{code: border_1},{code: border_1},{code: border_1},{code: border_1},{code: border_1},{code: border_1},{code: border_1},{code: border_1},{code: sub_title_1},{code: border_1},{code: border_1},{code: border_1}],
        [{code: sub_title_1},{code: border_1},{code: border_1},{code: border_1},{code: border_1},{code: sub_title_1},{code: border_1},{code: border_1},{code: border_1},{code: border_1},{code: sub_title_1},{code: border_1},{code: border_1},{code: border_1},{code: sub_title_1},{code: border_1},{code: border_1},{code: border_1}],
        sub_title_theme_arr,
        logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,
        logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,
        logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,

        sub_title_theme_arr,
        logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,logo_theme_arr,
      ]
    }

    let sheetData_user_list:Sheet = {
      name: '참석자명단',
      data: [
        [
          {text: '참석자 명단', colspan: 6},
          {text: '교육일: '+this.form.education_safe_date, colspan: 2}
        ],
        [
          {text: 'No'},
          {text: '회사명'},
          {text: '성명'},
          {text: '서명일시'},
          {text: 'No'},
          {text: '회사명'},
          {text: '성명'},
          {text: '서명일시'},
        ],
      ],
      style: [
        [
          {code: Object.assign(title_4, {height: 80})},
          {code: title_3},
          {code: title_3},
          {code: title_3},
          {code: title_4},
          {code: title_3},
          {code: title_3},
          {code: title_3}
        ],
        [
          {code: sub_title_2},
          {code: sub_title_2},
          {code: sub_title_2},
          {code: sub_title_2},
          {code: sub_title_2},
          {code: sub_title_2},
          {code: sub_title_2},
          {code: sub_title_2},
        ],
        // 리스트 들어가는곳
      ]
    }

    // 결재 데이터
    const reverse_comment = this.approval_comment.reverse();
    let approval_max_num = 3;
    reverse_comment.map((item,index) => {
      sheetData.data[1][approval_max_num - index] = {text: item.user_name+'\n'+item.approval_answer+(item.approval_date ? '\n'+item.approval_date : ''), rowspan: 3};
    });

    // 참석자명단 리스트 데이터
    let change_cnt = 0;
    let list_theme_arr_num = Math.ceil((this.res.rsMap.length / 2));
    for(let i = 0; i < list_theme_arr_num; i++){
      let item_arr = [];
      for(let x = 0; x < 1; x++){
        if(change_cnt%2 === 0) item_arr.push({text: change_cnt+1},{text: this.res?.rsMap[change_cnt]?.company_name},{text: this.res?.rsMap[change_cnt]?.user_name},{text: this.res?.rsMap[change_cnt]?.create_date});
        change_cnt++;
        if(change_cnt%2 !== 0) item_arr.push({text: change_cnt+1},{text: this.res?.rsMap[change_cnt]?.company_name},{text: this.res?.rsMap[change_cnt]?.user_name},{text: this.res?.rsMap[change_cnt]?.create_date});
        change_cnt++;
      }
      sheetData_user_list.data.push(item_arr);
      sheetData_user_list.style.push([
        {code: sub_title_1_user},
        {code: sub_title_2_user},
        {code: sub_title_2_user},
        {code: sub_title_2_user},
        {code: sub_title_1_user},
        {code: sub_title_2_user},
        {code: sub_title_2_user},
        {code: sub_title_2_user}
      ]);
    }
    // sheetData_user_list.data.push(list_theme_arr);
    // console.log('sheetData_user_list - ',sheetData_user_list);

    // 참석자명단 리스트 데이터
    // const user_list = this.approval_comment.reverse();
    
    // reverse_comment.map((item,index) => {
    //   sheetData.data[1][approval_max_num - index] = {text: item.user_name+'\n'+item.approval_answer+(item.approval_date ? '\n'+item.approval_date : ''), rowspan: 3};
    // });

    // 평가표와 결재의경사이의 공백
    // for(let i = 0; i < 4; i++){
    //   sheetData.data.push([]);
    //   sheetData.style.push([]);
    // }
    // sheetData.data.push([{text: '결재 의견', colspan: 2}]);
    // sheetData.data.push([{text: '구분', colspan: 2},{text: '결재', colspan: 2},{text: '성명', colspan: 3},{text: '회사명', colspan: 2},{text: '결재일시', colspan: 2},{text: '결재의견', colspan: 10}]);
    // sheetData.style.push([{code: sub_title_3}]);
    // sheetData.style.push(sub_title_theme_arr);



    // 결재 의견 리스트
    // let cmt_min = 0;
    // let cmt_max = 0;
    // let order_arr = [];
    // const aprv_cmt = this.approval_comment.reverse();
    // aprv_cmt.map((item) => {order_arr.push(item.approval_order_no);});
    // cmt_min = Math.min.apply(null, order_arr);
    // cmt_max = Math.max(...order_arr);

    // aprv_cmt.map((item) => {
    //   sheetData.data.push([{
    //     text: item.approval_order_no === cmt_min ? (item.approval_order_no === cmt_max ? '작성/승인' : '작성') : (item.approval_order_no === cmt_max ? '승인' : '검토'), colspan: 2},
    //     {text: item.approval_answer, colspan: 2},
    //     {text: item.user_name, colspan: 3},
    //     {text: item.company_name, colspan: 2},
    //     {text: item.approval_date, colspan: 2},
    //     {text: item.approval_comment || '', colspan: 10
    //   }]);

    //   sheetData.style.push(sub_title_theme_arr_2);
    // });
    
    // 회사 로고 이미지데이터
    if(this.form.company_file_data && this.form.company_file_data.length){
      sheetData.data[0][0] = {img: {src: this.form.company_file_data[0].full_url.toString(), height: 135, width: 350, left: 8, top: 8}, rowspan: 4, colspan: 4};
    }

    // 회의 사진 데이터
    if(this.form.education_safe_file_data && this.form.education_safe_file_data.length){
      sheetData.data[54][0] = {img: {src: this.form.education_safe_file_data[0]?.full_url.toString(), height: 500, width: 700, left: 8, top: 8}, rowspan: 18, colspan: 9};
      sheetData.data[54][1] = {img: {src: this.form.education_safe_file_data[1]?.full_url.toString(), height: 500, width: 680, left: 8, top: 8}, rowspan: 18, colspan: 9};
    }

    // img?: {
    //   src:string,
    //   left?:number,
    //   top?:number,
    //   width?:number,
    //   height?:number
    // }

    // let item of approval_comment; let f = first; let l = last
    excelData.push(sheetData);
    excelData.push(sheetData_user_list);
    // console.log(this.riskTableList);
    this.excel.make(excelData, '교육 결과 보고서');
  }
}
