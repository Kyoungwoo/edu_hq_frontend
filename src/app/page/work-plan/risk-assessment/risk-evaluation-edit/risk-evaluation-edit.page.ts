import { ExcelService, Sheet, SheetStyle } from './../../../../basic/service/util/excel.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ApprovalBtnClickEvent } from 'src/app/component/confirm/approval/approval.component';
import { SearchAreaComponent } from 'src/app/component/modal/search-area/search-area.component';
import { MachineryItem, SearchConstructionMachineryComponent } from 'src/app/component/modal/search-construction-machinery/search-construction-machinery.component';
import { SearchToolComponent, ToolItem } from 'src/app/component/modal/search-tool/search-tool.component';
import { AnswerObj, CommentObj } from 'src/app/page/confirm/box/approval-edit/approval-edit.page';
import { RiskEvaluationPopupPage, RiskItem } from '../risk-evaluation-popup/risk-evaluation-popup.page';
export interface RiskTableItem {
  seq_no:number,
  rowspan:number,
  risk_construction_id:number,
  risk_construction_name:string,
  unitList: {
    rowspan:number,
    risk_unit_id:number,
    risk_unit_name:string,

    area_top_id:number,
    area_top_name:string,
    area_middle_id:number,
    area_middle_name:string,
    area_bottom_id:number,
    area_bottom_name:string,

    area_name:string,

    ctgo_machinery_ids:number[],
    ctgo_machinery_names:string[],

    ctgo_tool_ids:number[],
    ctgo_tool_names:string[],

    facterList: {
      rowspan:number,
      risk_factor_id:number,
      risk_factor_name:string,

      risk_frequency:number,
      risk_strength:number,
      risk_danger_level:number,

      planList: {
        risk_plan_id:number,
        risk_plan_name:string
      }[]
    }[]
  }[]
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

  @Input() btn_type:string = '';

  /** 복사 신규 작성 여부 */
  @Input() isDuplicate:boolean = false;

  form = {
    project_id: null, // 현장 ID
    project_name: '',
    master_company_id: null, // 원청사 ID
    company_id: null, // 업체 ID
    company_name: null,
    ctgo_construction_id: null, // 공종 ID
    ctgo_construction_name: '',
    company_file_data: [] as FutItem[],

    risk_asment_type: '수시', // 위험성평가 타입 / 최초, 정기, 수시
    risk_asment_type_text: '수시',
    risk_asment_start_date: this.date.today({ date: 1 }), // 시작일
    risk_asment_end_date: this.date.today({ date: 1 }), // 끝일
    evaluation_data: [] as RiskItem[], // 위험성 평가 평가표 정보 배열

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
    edit: false,
    tableEdit: false
  }

  riskTableList:RiskTableItem[] = [];
  approval_answer:AnswerObj[];
  approval_comment:CommentObj[];

  constructor(
    public user: UserService,
    private connect: ConnectService,
    private toast: ToastService,
    private _modal: ModalController,
    private loading: LoadingService,
    private date: DateService,
    private excel: ExcelService,
    private dateService: DateService
  ) { }

  async ngOnInit() {
    if(!this.risk_asment_id) {
      this.permission.tableEdit = true;
      // 협력사의 원청사 검색 때문에, 신규작성시 뿐 아니라, 수정시에도 일단 폼을 채워줘야 함
      this.getDefaultForm();
      // 신규 작성 시에는 가지고 온 디폴트 값을 건드리지 않음.
    }
    else if(!this.isDuplicate) {
      // 협력사의 원청사 검색 때문에, 신규작성시 뿐 아니라, 수정시에도 일단 폼을 채워줘야 함
      this.getDefaultForm();

      // 수정 시에는 정보를 가져와서 채워넣음
      this.form.risk_asment_id = this.risk_asment_id;
      await this.getDetail();
      await this.getEvaluationDetail();
    }
    else {
      // 복사 작성 시에는 정보를 가져와서 채워넣은 다음
      this.form.risk_asment_id = this.risk_asment_id;
      await this.getDetail();
      await this.getEvaluationDetail();

      // 해당 정보를 신규정보로 바꿔줌
      this.getDefaultForm();
      this.resetForDuplicate();
    }

    // 나머지 정보
    this.form.risk_asment_type_text = this.getTypeText(this.form.risk_asment_type);
    // 결재에는 ctgo_approval_module_id 가 반드시 필요하므로 유의
    this.form.ctgo_approval_module_id = this.getApprovalModuleId(this.form.risk_asment_type);
  }

  async getDefaultForm() {
    const { user_name, belong_data } = this.user.userData;
    this.form.project_id = this.project_id;
    this.form.company_id = belong_data.company_id;
    this.form.company_name = belong_data.company_name;

    this.form.risk_asment_type = this.risk_asment_type;

    this.form.user_name = user_name;

    if(belong_data.company_contract_type === '원청사') {
      this.form.master_company_id = belong_data.company_id;
    }
    else if(belong_data.company_contract_type === '협력사') {
      // 협력사는 내 회사가 아니라, 내 원청사를 company_id에 넣어줘야 함
      this.form.master_company_id = belong_data.master_company_id;
      // const res = await this.connect.run('/category/certify/search_my_master_company/get', {
      //   project_id: this.form.project_id,
      //   search_text: ''
      // });
      // if(res.rsCode === 0) {
      //   const contractor = res.rsMap[0];
      //   this.form.master_company_id = contractor.master_company_id;
      // }
      // else {
      //   this.toast.present({ color: 'warning', message: res.rsMsg });
      // }
    }
  }

  /**
   * 위험성평가 정보 가져오기
   */
   async getDetail() {
    const res = await this.connect.run('/risk/assessment/detail/get', {
      risk_asment_id: this.form.risk_asment_id
    }, { parse: ['risk_file_data','company_file_data'] });
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
   * 위험성평가 평가표 정보 가져오기
   */
   async getEvaluationDetail() {
    const res = await this.connect.run('/risk/assessment/detail/evaluation/get', {
      risk_asment_id: this.form.risk_asment_id
    });
    if(res.rsCode === 0) {
      res.rsMap.forEach(item => {
        try {
          // 배열이 스트링으로 들어오므로 배열로 변환해줘야 함
          item.ctgo_machinery_ids = JSON.parse(item.ctgo_machinery_ids);
          item.ctgo_machinery_names = JSON.parse(item.ctgo_machinery_names);
          item.ctgo_tool_ids = JSON.parse(item.ctgo_tool_ids);
          item.ctgo_tool_names = JSON.parse(item.ctgo_tool_names);
        } catch(e) {}
      });
      this.riskTableList = this.riskListToTable(res.rsMap);
      // 정보를 가져온 후, 결재 정보를 가져와야 한다! => app-approval component가 알아서 자동으로 가져온다!
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  /**
   * 복사 시, 정보 리셋
   */
  resetForDuplicate() {
    this.form.approval_id = null;

    // 복사 시, 이거 진짜 어케해야될 지 모르겠음. GG
    setTimeout(() => {
      this.isDuplicate = false;
    }, 2000);
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

    this.form.evaluation_data = this.riskTableToList(this.riskTableList);
    
    if(!this.form.ctgo_construction_id) { this.toast.present({ color: 'warning', message: '공종을 선택해주세요.' }); return; }
    if(!this.form.evaluation_data?.length) { this.toast.present({ color: 'warning', message: '위험성 평가 평가표 정보를 입력해주세요.' }); return; }

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

    this.form.evaluation_data = this.riskTableToList(this.riskTableList);

    if(!this.form.ctgo_construction_id) { this.toast.present({ color: 'warning', message: '공종을 선택해주세요.' }); return; }
    if(!this.form.evaluation_data?.length) { this.toast.present({ color: 'warning', message: '위험성 평가 평가표 정보를 입력해주세요.' }); return; }

    this.form.approval_cnt_answer = '결재중';
    this.form.approval_default_data = approval_data;

    if(!this.form.approval_id) {
      // 임시저장도 안한 상태에서는 insert에서 결재 요청을 처리한다.
      const res = await this.connect.run('/risk/assessment/insert', this.form, { loading: true });

      if(res.rsCode === 0) {
        this.toast.present({ color: 'success', message: '결재요청 되었습니다.' });
        this._modal.dismiss();
        // 목록을 새로고침 해줘야 함
        window.dispatchEvent(new CustomEvent('risk-list:get()'));
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
      
      const res = await this.connect.run('/risk/assessment/update', this.form);

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
      this.isDuplicate = true;
      this.form.approval_id = null;
      setTimeout(() => {
        this.isDuplicate = false;
      }, 2000);
      // 목록을 새로고침 해줘야 함
      window.dispatchEvent(new CustomEvent('risk-list:get()'));
      window.dispatchEvent(new CustomEvent('approval-list:get()'));
    }

  }
  /**
   * 결재 버튼 클릭
   */
   async onApprovalClick(ev:ApprovalBtnClickEvent) {

    /** 위험성평가는 결재 시, 테이블데이터 수정이 가능하다. */
    /* this.form.evaluation_data = this.riskTableToList(this.riskTableList);

    this.form.approval_cnt_answer = '결재';
    this.form.approval_default_data = ev.approval_data;

    const res1 = await this.connect.run('/risk/assessment/update', this.form, { loading: true });

    if(res1.rsCode) { this.toast.present({ color: 'warning', message: res1.rsMsg }); return; } */

    /** 데이터 수정 후 결재 진행 */
    const res2 = await ev.approval();
    if(res2.rsCode === 0) {
      this.toast.present({ color: 'success', message: '결재 되었습니다.' });
      this._modal.dismiss();
      // 목록을 새로고침 해줘야 함
      window.dispatchEvent(new CustomEvent('risk-list:get()'));
      window.dispatchEvent(new CustomEvent('approval-list:get()'));
    }
  }

  /**
   * 결재 상태가 변할 때 행동
   */
  onApprovalChange(ev:ApprovalBtnClickEvent) {
    if(ev.btnList.includes('임시저장')) {
      this.permission.edit = true;
      this.permission.tableEdit = true;
    }
    else if(ev.btnList.includes('결재')) {
      this.permission.edit = false;
      this.permission.tableEdit = true;
    }
    else {
      this.permission.edit = false;
      this.permission.tableEdit = false;
    }

    /** 결재자들을 가지고 온다.(모바일 화면 용) */
    this.approval_answer = ev.approval_data[0].answer_datas;
    /** 결재자 의견을 가지고 온다. */
    this.approval_comment = ev.approval_comment;

    /** 모바일 화면에서는 테이블 편집이 안된다. */
    if(window.innerWidth <= 768) {
      this.permission.edit = false;
      this.permission.tableEdit = false;
    }
  }

  public async add() {
    const modal = await this._modal.create({
      component:RiskEvaluationPopupPage,
      cssClass: 'risk-evaluation-class',
      componentProps: {
        project_id: this.form.project_id,
        riskList: this.riskTableToList(this.riskTableList)
      }
    })
    modal.present();
    const { data } = await modal.onDidDismiss();

    if(data) {

      const riskList = data.riskList as RiskItem[];

      /** 테이블 형식 데이터로 변환 */
      this.riskTableList = this.riskListToTable(riskList);
    }

  }

  riskFrequencyChange(factorItem) {
    const { risk_frequency, risk_strength } = factorItem;
    factorItem.risk_danger_level = risk_frequency * risk_strength;
  }
  riskStrengthChange(factorItem) {
    const { risk_frequency, risk_strength } = factorItem;
    factorItem.risk_danger_level = risk_frequency * risk_strength;
  }

  /** 
   * 편집 가능 리스트를 테이블 리스트 형태로 변경 
   */
  riskListToTable(riskList:RiskItem[]) {
    const riskTableList:RiskTableItem[] = [];
    riskList.forEach(riskItem => {
      let tableConstructionItem = riskTableList.find(item => item.risk_construction_id === riskItem.risk_construction_id);

      /** 공사명이 없다면 새로 추가 */
      if(!tableConstructionItem) {
        tableConstructionItem = {
          rowspan: 0,
          risk_construction_id: riskItem.risk_construction_id,
          risk_construction_name: riskItem.risk_construction_name,
          seq_no: riskItem.seq_no,
          unitList: []
        };
        riskTableList.push(tableConstructionItem);
      }
      
      let tableUnitItem = tableConstructionItem.unitList.find(item => item.risk_unit_id === riskItem.risk_unit_id);

      /** 공사명에 단위작업이 없다면 새로 추가 */
      if(!tableUnitItem) {
        tableUnitItem = {
          rowspan: 0,

          risk_unit_id: riskItem.risk_unit_id,
          risk_unit_name: riskItem.risk_unit_name,

          area_top_id: riskItem.area_top_id,
          area_top_name: riskItem.area_top_name,
          area_middle_id: riskItem.area_middle_id,
          area_middle_name: riskItem.area_middle_name,
          area_bottom_id: riskItem.area_bottom_id,
          area_bottom_name: riskItem.area_bottom_name,

          area_name: riskItem.area_name,

          ctgo_machinery_ids: riskItem.ctgo_machinery_ids,
          ctgo_machinery_names: riskItem.ctgo_machinery_names,

          ctgo_tool_ids: riskItem.ctgo_tool_ids,
          ctgo_tool_names: riskItem.ctgo_tool_names,

          facterList: []
        }
        tableConstructionItem.unitList.push(tableUnitItem);
      }

      /** 위험요인 아이디가 있고(직접입력이 아니고) && 현재 있는 위험요인인지 체크 */
      let tableFactorItem = tableUnitItem.facterList.find(item => item.risk_factor_id && item.risk_factor_id === riskItem.risk_factor_id);

      /** 단위작업에 위험요인이 없다면 새로 추가 */
      if(!tableFactorItem) {
        tableFactorItem = {
          rowspan: 0,
          risk_factor_id: riskItem.risk_factor_id,
          risk_factor_name: riskItem.risk_factor_name,
          risk_frequency: riskItem.risk_frequency,
          risk_strength: riskItem.risk_strength,
          risk_danger_level: riskItem.risk_danger_level,
          planList: []
        }
        tableUnitItem.facterList.push(tableFactorItem);
      }

      /** 위험요인에 감소대책 추가 */
      tableFactorItem.planList.push({
        risk_plan_id: null,
        risk_plan_name: riskItem.risk_plan_name
      });
      
      /** 테이블 레이아웃 병합 정보 추가 */
      tableConstructionItem.rowspan++;
      tableUnitItem.rowspan++;
      tableFactorItem.rowspan++;
    });

    return riskTableList;
  }

  /** 
   * 테이블 리스트를 편집 가능 리스트 형태로 변경 
   */
  riskTableToList(riskTableList:RiskTableItem[]) {
    const riskList:RiskItem[] = [];
    riskTableList.forEach(constructionItem => {
      constructionItem.unitList.forEach(unitItem => {
        unitItem.facterList.forEach(factorItem => {
          factorItem.planList.forEach(planItem => {
            riskList.push({
              risk_asment_id: this.form.risk_asment_id, // 위험성평가 ID (위험성평가 문서 ID)
              seq_no: constructionItem.seq_no, // 시퀀스 - 이 한 줄의 ID

              risk_construction_id: constructionItem.risk_construction_id, // 공사 ID
              risk_construction_name: constructionItem.risk_construction_name, // 공사명

              risk_unit_id: unitItem.risk_unit_id, // 단위작업 ID
              risk_unit_name: unitItem.risk_unit_name, // 단위작업

              area_top_id: unitItem.area_top_id,  // 장소 첫번째 ID
              area_top_name: unitItem.area_top_name, // 장소 첫번째
              area_middle_id: unitItem.area_middle_id, // 장소 두번째 ID null 이면 안고른거
              area_middle_name: unitItem.area_middle_name, // 장소 두번째
              area_bottom_id: unitItem.area_bottom_id, // 장소 세번째 ID null 이면 안고른거
              area_bottom_name: unitItem.area_bottom_name, // 장소 세번째

              area_name: unitItem.area_name,

              ctgo_machinery_ids: unitItem.ctgo_machinery_ids, // 건설기계 ID들
              ctgo_machinery_names: unitItem.ctgo_machinery_names, // 건설기계명들

              ctgo_tool_ids: unitItem.ctgo_tool_ids, // 특수공도구 ID들
              ctgo_tool_names: unitItem.ctgo_tool_names, // 특수공도구명들

              risk_factor_id: factorItem.risk_factor_id, // 위험요인 ID null 이면 직접입력
              risk_factor_name: factorItem.risk_factor_name, // 위험요인
              
              risk_frequency: factorItem.risk_frequency, // 빈도
              risk_strength: factorItem.risk_strength, // 강도
              risk_danger_level: factorItem.risk_danger_level, // 위험도

              risk_plan_id: planItem.risk_plan_id, // 감소대책 ID null 이면 직접입력
              risk_plan_name: planItem.risk_plan_name // 감소대책
            })
          });
        })
      });
    });

    return riskList;
  }

  /**
   * 장소 팝업
   */
  async openArea(unitItem) {
    const modal = await this._modal.create({
      component: SearchAreaComponent,
      componentProps: {
        project_id: this.form.project_id
      }
    });
    modal.present();

    const { data } = await modal.onDidDismiss();

    if(data) {
      unitItem.area_top_id = data.area1selectedItem.area_top_id;
      unitItem.area_top_name = data.area1selectedItem.area_top_name;
      unitItem.area_middle_id = data.area2selectedItem.area_middle_id;
      unitItem.area_middle_name = data.area2selectedItem.area_middle_name;
      unitItem.area_bottom_id = data.area3selectedItem.area_bottom_id;
      unitItem.area_bottom_name = data.area3selectedItem.area_bottom_name;
    }
  }
  /**
   * 건설기계 팝업
   */
   async openMachinery(unitItem) {

    /** 현재 목록에 있는 건설기계 데이터를 search에 있는 형태로 변경 */
    const selectedItemList:MachineryItem[] = [];
    unitItem.ctgo_machinery_ids.forEach((id, i) => {
      selectedItemList.push({
        ctgo_machinery_id: id,
        ctgo_machinery_name: unitItem.ctgo_machinery_names[i],
        ctgo_machinery_doc_state: 1,
        ctgo_machinery_use_state: 1,
        company_id: this.form.company_id,
        default_state: 1
      })
    });

    /** 검색창 오픈 */
    const modal = await this._modal.create({
      component: SearchConstructionMachineryComponent,
      componentProps: {
        form: {
          project_id: this.form.project_id,
          master_company_id: this.form.master_company_id,
          search_text: ''
        },
        multiple: true,
        selectedItemList
      }
    });
    modal.present();

    const { data } = await modal.onDidDismiss();

    if(data) {
      unitItem.ctgo_machinery_ids = [];
      unitItem.ctgo_machinery_names = [];
      data.selectedItemList.forEach(item => {
        unitItem.ctgo_machinery_ids.push(item.ctgo_machinery_id);
        unitItem.ctgo_machinery_names.push(item.ctgo_machinery_name);
      });
    }
  }
  removeMachinery(unitItem, ctgo_machinery_id) {
    const index = unitItem.ctgo_machinery_ids.indexOf(ctgo_machinery_id);
    unitItem.ctgo_machinery_ids.splice(index, 1);
    unitItem.ctgo_machinery_names.splice(index, 1);
  }

  /**
   * 특수공도구 팝업
   */
   async openTool(unitItem) {

    /** 현재 목록에 있는 건설기계 데이터를 search에 있는 형태로 변경 */
    const selectedList:ToolItem[] = [];
    unitItem.ctgo_tool_ids.forEach((id, i) => {
      selectedList.push({
        ctgo_tool_id: id,
        ctgo_tool_name: unitItem.ctgo_tool_names[i],
        project_id: this.form.project_id,
        master_company_id: this.form.master_company_id,
        ctgo_tool_use_state: 1
      });
    });

    /** 검색창 오픈 */
    const modal = await this._modal.create({
      component: SearchToolComponent,
      componentProps: {
        form: {
          project_id: this.form.project_id,
          master_company_id: this.form.master_company_id,
          search_text: ''
        },
        multiple: true,
        selectedList
      }
    });
    modal.present();

    const { data } = await modal.onDidDismiss();

    if(data) {
      unitItem.ctgo_tool_ids = [];
      unitItem.ctgo_tool_names = [];
      data.selectedList.forEach(item => {
        unitItem.ctgo_tool_ids.push(item.ctgo_tool_id);
        unitItem.ctgo_tool_names.push(item.ctgo_tool_name);
      });
    }
  }
  removeTool(unitItem, ctgo_tool_id) {
    const index = unitItem.ctgo_tool_ids.indexOf(ctgo_tool_id);
    unitItem.ctgo_tool_ids.splice(index, 1);
    unitItem.ctgo_tool_names.splice(index, 1);
  }

  async excel_download(){
    const print_date = this.dateService.today();
    const headerBorder = '1px solid #000000';
    const backgroundColor = '#d9d9d9';
    const excelData:Sheet[] = [];

    const logo:SheetStyle = {
      border: headerBorder,
      textAlign:'center',
      fontSize:16,
      height:60,
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const logo_theme:SheetStyle = {
      border: headerBorder,
      textAlign:'center',
      fontSize:16,
      height:30,
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const title_1:SheetStyle = {
      border: headerBorder,
      textAlign:'center',
      fontSize:16,
      width: 45,
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const border_1:SheetStyle = {
      border: headerBorder,
      width: 100,
      textAlign:'center',
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const border_2:SheetStyle = {
      border: headerBorder,
      width: 100,
      height: 65,
      textAlign:'center',
      verticalAlign: "middle",
      whiteSpace: 'normal'
    }

    const approval_1:SheetStyle = {
      border: headerBorder,
      backgroundColor,
      textAlign:'center',
      fontSize:12,
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

    const sub_title_3:SheetStyle = {
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
    for(let i = 0; i < 21; i++) logo_theme_arr.push({code: logo_theme});

    let sub_title_theme_arr = [];
    for(let i = 0; i < 21; i++) sub_title_theme_arr.push({code: sub_title_2});

    let sub_title_theme_arr_2 = [];
    for(let i = 0; i < 21; i++) sub_title_theme_arr_2.push({code: sub_title_4});

    let border_theme_arr = [];
    for(let i = 0; i < 21; i++) border_theme_arr.push({code: border_2});

    let sheetData:Sheet = {
      name: '위험성평가',
      data: [
        [
          {colspan: 4, rowspan: 2},
          {text: this.form.risk_asment_type_text+ ' 위험성 평가표', colspan:10, rowspan: 2},
          {rowspan: 4, text: '결재'},
          {text: '검토'},
          {text: '검토'},
          {text: '검토'},
          {text: '검토'},
          {text: '검토'},
          {text: '승인'}
        ],
        [
          {rowspan: 3},
          {rowspan: 3},
          {rowspan: 3},
          {rowspan: 3},
          {rowspan: 3},
          {rowspan: 3}
        ],
        [
          {text: '현장명'},
          {text: this.form.project_name, colspan: 3},
          {text: '회사명', colspan: 2},
          {text: this.form.company_name, colspan: 3},
          {text: '공종'},
          {text: this.form.ctgo_construction_name || '', colspan: 4}
        ],
        [
          {text: '작업기간'},
          {text: this.form.risk_asment_start_date+' ~ '+this.form.risk_asment_end_date, colspan: 3},
          {text: '작성일', colspan: 2},
          {text: this.form.create_date, colspan: 3},
          {text: '작성자'},
          {text: this.form.user_name, colspan: 4},
        ],
        [
          {text: '공사명', colspan: 2, rowspan: 2},
          {text: '단위작업', colspan: 2, rowspan: 2},
          {text: '장소', colspan: 2, rowspan: 2},
          {text: '건설기계', rowspan: 2},
          {text: '특수공도구', rowspan: 2},
          {text: '위험요인', colspan: 5, rowspan: 2},
          {text: '위험성', colspan: 3},
          {text: '감소대책', colspan: 5, rowspan: 2},
        ],
        [
          {text: '빈도'},
          {text: '감도'},
          {text: '등급'},
        ],
        // 평가표 리스트 들어가는곳


        // 결재 의견 들어가는곳

      ],
      style: [
        [
          {code: logo},
          {code: logo},
          {code: logo},
          {code: logo},
          {code: title_1},
          {code: title_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: approval_1},
          {code: approval_1},
          {code: approval_1},
          {code: approval_1},
          {code: approval_1},
          {code: approval_1},
          {code: approval_1},
          {code: approval_1}
        ],
        logo_theme_arr,
        [
          {code: sub_title_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: sub_title_1},
          {code: sub_title_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: sub_title_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: sub_title_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: border_1}
        ],
        [
          {code: sub_title_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: sub_title_1},
          {code: sub_title_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: sub_title_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: sub_title_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: border_1},
          {code: border_1}
        ],
        sub_title_theme_arr,
        sub_title_theme_arr,
        // 평가표 리스트 들어가는곳

        // 결재 의견 들어가는곳
      ]
    }

    // 평가표 데이터 가공
    // let table_theme_arr = [];
    const table_data = this.riskTableList;

    const regex_01 = /,/gi;
    // rowspan 셋팅
    if(table_data.length){
      let rowspan_deps_1 = 0;
      let rowspan_deps_2 = 6;
      let rowspan_deps_3 = 6;
      
      table_data.map((item_1) => {
        // 데이터 deps_01
        sheetData.data.push([{text: item_1.risk_construction_name, rowspan: item_1.rowspan, colspan: 2}]);

        // 스타일 deps_01
        sheetData.style.push(border_theme_arr);
        
        // rowspan
        if(item_1.rowspan > 1){
          for(let i = 0; i < item_1.rowspan-1; i++){
            sheetData.data.push([]);
            sheetData.style.push(border_theme_arr);
          }
        }

        // 데이터 deps_02
        if(item_1.unitList.length){
          item_1.unitList.map((item_2) => {
            sheetData.data[rowspan_deps_2].push({text: item_2.risk_unit_name, rowspan: item_2.rowspan, colspan: 2});
            // sheetData.data[rowspan_deps_2].push({text: (item_2.area_top_name || '')+(item_2.area_middle_name ? ' / '+item_2.area_middle_name : '')+(item_2.area_bottom_name ? ' / '+item_2.area_bottom_name : ''), rowspan: item_2.rowspan, colspan: 2});
            sheetData.data[rowspan_deps_2].push({text: item_2.area_name, rowspan: item_2.rowspan, colspan: 2});
            sheetData.data[rowspan_deps_2].push({text: item_2.ctgo_machinery_names.toString().replace(regex_01, " / "), rowspan: item_2.rowspan});
            sheetData.data[rowspan_deps_2].push({text: item_2.ctgo_tool_names.toString().replace(regex_01, ' / '), rowspan: item_2.rowspan});

            rowspan_deps_2 = rowspan_deps_2+item_2.rowspan;

            // 데이터 deps_03
            if(item_2.facterList.length){
              item_2.facterList.map((item_3) => {
                sheetData.data[rowspan_deps_3].push({text: item_3.risk_factor_name, rowspan: item_3.rowspan, colspan: 5});
                sheetData.data[rowspan_deps_3].push({text: item_3.risk_frequency, rowspan: item_3.rowspan});
                sheetData.data[rowspan_deps_3].push({text: item_3.risk_strength, rowspan: item_3.rowspan});
                sheetData.data[rowspan_deps_3].push({text: item_3.risk_danger_level, rowspan: item_3.rowspan});
                
                let plan_num = 0;
                for(let i = rowspan_deps_3; i < rowspan_deps_3+item_3.rowspan; i++){
                  sheetData.data[i].push({text: item_3.planList[plan_num].risk_plan_name, colspan: 5});
                  plan_num++;
                }

                rowspan_deps_3 = rowspan_deps_3+item_3.rowspan;
              });
            }
          });
        }


      });
    }

    // 결재 데이터
    const reverse_comment = this.approval_comment.reverse();
    let approval_max_num = 5;
    reverse_comment.map((item,index) => {
      sheetData.data[1][approval_max_num - index] = {text: item.user_name+'\n'+item.approval_answer+(item.approval_date ? '\n'+item.approval_date : ''), rowspan: 3};
    });

    // 평가표와 결재의경사이의 공백
    for(let i = 0; i < 4; i++){
      sheetData.data.push([]);
      sheetData.style.push([]);
    }
    sheetData.data.push([{text: '결재 의견', colspan: 2}]);
    sheetData.data.push([{text: '구분', colspan: 2},{text: '결재', colspan: 2},{text: '성명', colspan: 3},{text: '회사명', colspan: 2},{text: '결재일시', colspan: 2},{text: '결재의견', colspan: 10}]);
    sheetData.style.push([{code: sub_title_3}]);
    sheetData.style.push(sub_title_theme_arr);



    // 결재 의견 리스트
    let cmt_min = 0;
    let cmt_max = 0;
    let order_arr = [];
    const aprv_cmt = this.approval_comment.reverse();
    aprv_cmt.map((item) => {order_arr.push(item.approval_order_no);});
    cmt_min = Math.min.apply(null, order_arr);
    cmt_max = Math.max(...order_arr);

    aprv_cmt.map((item) => {
      sheetData.data.push([{
        text: item.approval_order_no === cmt_min ? (item.approval_order_no === cmt_max ? '작성/승인' : '작성') : (item.approval_order_no === cmt_max ? '승인' : '검토'), colspan: 2},
        {text: item.approval_answer, colspan: 2},
        {text: item.user_name, colspan: 3},
        {text: item.company_name, colspan: 2},
        {text: item.approval_date, colspan: 2},
        {text: item.approval_comment || '', colspan: 10
      }]);

      sheetData.style.push(sub_title_theme_arr_2);
    });
    
    // 회사 로고 이미지데이터
    if(this.form.company_file_data && this.form.company_file_data.length){
      sheetData.data[0][0] = {img: {src: this.form.company_file_data[0].full_url.toString(), height: 76, width: 450, left: 8, top: 8}, rowspan: 2, colspan: 4};
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
    console.log(this.riskTableList);
    this.excel.make(excelData, '위험성평가');
  }
}
