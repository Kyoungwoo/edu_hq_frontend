import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';


export class ConstructionItem {
  risk_construction_id:number = null;
  risk_construction_name:string = null;
  seq_no:number = 0;
}
export class UnitItem {
  risk_unit_id:number = null;
  risk_unit_name:string = null;
}
export class FactorItem {
  risk_factor_id:number = null;
  risk_factor_name:string = null;
}
export class PlanItem {
  risk_plan_id:number = null;
  risk_plan_name:string = null;
}
export class RiskItem {
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
  
  risk_frequency:number = 1; // 빈도
  risk_strength:number = 1; // 강도
  risk_danger_level:number = 1; // 위험도

  risk_plan_id:number = null // 감소대책 ID null 이면 직접입력
  risk_plan_name:string = null; // 감소대책
}
@Component({
  selector: 'app-risk-evaluation-popup',
  templateUrl: './risk-evaluation-popup.page.html',
  styleUrls: ['./risk-evaluation-popup.page.scss'],
})
export class RiskEvaluationPopupPage implements OnInit {

  @Input() project_id:number;
  @Input() riskList:RiskItem[] = [];

  form = {
    ctgo_business_field_id: null
  }
  
  res1:ConnectResult<ConstructionItem>;
  selectItem1:ConstructionItem;

  res2:ConnectResult<UnitItem>;
  selectItem2:UnitItem;

  res3:ConnectResult<FactorItem>;
  selectItem3:FactorItem;

  /**
   * 현재 감소 대책을 직접입력 밖에 없음
    res4:ConnectResult<PlanItem>;
    selectItem4:PlanItem;
   */

  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private _modal: ModalController
  ) { }

  async ngOnInit() {
    await this.getBusinessField();
    this.get1();
  }

  async getBusinessField() {
    const res = await this.connect.run('/category/certify/businessfield/get', {
      project_id: this.project_id
    });
    if(res.rsCode === 0) {
      this.form.ctgo_business_field_id = res.rsObj.ctgo_business_field_id;
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }
  async get1() {
    this.res1 = await this.connect.run('/risk/assessment/ctgo/construction/get', {
      ctgo_business_field_id: this.form.ctgo_business_field_id
    });
    if(this.res1.rsCode) {
      this.toast.present({ color: 'warning', message: this.res1.rsMsg });
    }
  }
  item1Click(item:ConstructionItem) {
    this.selectItem1 = item;
    this.selectItem2 = null;
    this.selectItem3 = null;
    this.res2 = null;
    this.res3 = null;
    this.get2();
  }

  async get2() {
    this.res2 = await this.connect.run('/risk/assessment/ctgo/unit/get', {
      risk_construction_id: this.selectItem1.risk_construction_id
    });
    if(this.res2.rsCode) {
      this.toast.present({ color: 'warning', message: this.res2.rsMsg });
    }
  }
  item2Click(item:UnitItem) {
    this.selectItem2 = item;
    this.get3();
  }

  async get3() {
    this.res3 = await this.connect.run('/risk/assessment/ctgo/factor/get', {
      risk_construction_id: this.selectItem1.risk_construction_id,
      risk_unit_id: this.selectItem2.risk_unit_id
    });
    if(this.res3.rsCode === 0) {
      // 암것도 안함
    }
    else if(this.res3.rsCode === 1008) {
      // 암것도 안함
    }
    else {
      this.toast.present({ color: 'warning', message: this.res3.rsMsg });
    }
  }
  item3Click(item:FactorItem) {
    this.selectItem3 = item;
    this.addRiskItem();
    // this.get4(); 현재 감소대책 입력은 직접입력 뿐
  }
  empty3Click() {
    this.selectItem3 = null;
    this.addRiskItem();
  }

  /**
   * 현재 감소대책 입력은 직접입력 뿐
  async get4() {
    this.res4 = await this.connect.run('/risk/assessment/ctgo/plan/get', {
      risk_construction_id: this.selectItem1.risk_construction_id,
      risk_unit_id: this.selectItem2.risk_unit_id,
      risk_factor_id: this.selectItem3.risk_factor_id

    });
    if(this.res4.rsCode) {
      this.toast.present({ color: 'warning', message: this.res4.rsMsg });
    }
  } */

  addRiskItem() {
    this.riskList.unshift({
      ...new RiskItem(),
      ...this.selectItem1,
      ...this.selectItem2,
      ...this.selectItem3
    });
  }
  submit() {
    
    const emptyRiskFactor = this.riskList.find(item => {
      return !item.risk_factor_name;
    });
    if(emptyRiskFactor) { this.toast.present({ color: 'warning', message: '위험요인을 입력해주세요.' }); return; }
    
    const emptyRiskPlan = this.riskList.find(item => {
      return !item.risk_plan_name;
    });
    if(emptyRiskPlan) { this.toast.present({ color: 'warning', message: '감소대책을 입력해주세요.' }); return; }

    this._modal.dismiss({
      riskList: this.riskList
    });
  }
}
