import { NumberSymbol } from '@angular/common';
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
import { SearchConstructionMachineryComponent } from 'src/app/component/modal/search-construction-machinery/search-construction-machinery.component';
import { SearchToolComponent } from 'src/app/component/modal/search-tool/search-tool.component';
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

  form = {
    project_id: null, // 현장 ID
    master_company_id: null, // 원청사 ID
    company_id: null, // 업체 ID
    company_name: null,
    ctgo_construction_id: null, // 공종 ID

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
    edit: false
  }

  riskTableList:RiskTableItem[] = [];

  constructor(
    public user: UserService,
    private connect: ConnectService,
    private toast: ToastService,
    private _modal: ModalController,
    private loading: LoadingService,
    private date: DateService
  ) { }

  async ngOnInit() {
    /**
     * 협력사의 원청사 검색 때문에, 신규작성시 뿐 아니라, 수정시에도 일단 가지고 와야 함
     */
    this.getDefaultForm(); // 폼 채우기
    if(!this.risk_asment_id) {
      // 신규 작성 시에는 가지고 온 디폴트 값을 건드리지 않음.
    }
    else {
      // 수정 시에는 정보를 가져와서 채워넣음
      this.form.risk_asment_id = this.risk_asment_id;
      await this.getDetail();
      await this.getEvaluationDetail();
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
      const res = await this.connect.run('/category/certify/search_my_master_company/get', {
        project_id: this.form.project_id,
        search_text: ''
      });
      if(res.rsCode === 0) {
        const contractor = res.rsMap[0];
        this.form.master_company_id = contractor.master_company_id;
      }
      else {
        this.toast.present({ color: 'warning', message: res.rsMsg });
      }
    }
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
      componentProps: {
        project_id: this.form.project_id
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
    const modal = await this._modal.create({
      component: SearchConstructionMachineryComponent,
      componentProps: {
        form: {
          project_id: this.form.project_id,
          master_company_id: this.form.master_company_id,
          search_text: ''
        },
        multiple: true
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
      })
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
    const modal = await this._modal.create({
      component: SearchToolComponent,
      componentProps: {
        form: {
          project_id: this.form.project_id,
          master_company_id: this.form.master_company_id,
          search_text: ''
        },
        multiple: true
      }
    });
    modal.present();

    const { data } = await modal.onDidDismiss();

    if(data) {
      console.log(data);
    }
  }
}
