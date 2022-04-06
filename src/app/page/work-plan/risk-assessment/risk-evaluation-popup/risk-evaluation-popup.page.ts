import { Component, Input, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';


export class ConstructionItem {
  risk_construction_id:number = null;
  risk_construction_name:string = null;
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
@Component({
  selector: 'app-risk-evaluation-popup',
  templateUrl: './risk-evaluation-popup.page.html',
  styleUrls: ['./risk-evaluation-popup.page.scss'],
})
export class RiskEvaluationPopupPage implements OnInit {

  @Input() project_id:number;

  form = {
    ctgo_business_field_id: null
  }
  
  res1:ConnectResult<ConstructionItem>;
  selectItem1:ConstructionItem;

  res2:ConnectResult<UnitItem>;
  selectItem2:UnitItem;

  res3:ConnectResult<FactorItem>;
  selectItem3:FactorItem;

  res4:ConnectResult<PlanItem>;
  selectItem4:PlanItem;

  constructor(
    private connect: ConnectService,
    private toast: ToastService
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
  }

  async get3() {
    this.res3 = await this.connect.run('/risk/assessment/ctgo/factor/get', {
      risk_construction_id: this.selectItem1.risk_construction_id,
      risk_unit_id: this.selectItem2.risk_unit_id
    });
    if(this.res3.rsCode) {
      this.toast.present({ color: 'warning', message: this.res3.rsMsg });
    }
  }
  item3Click(item:FactorItem) {
    this.selectItem3 = item;
  }

  async get4() {
    this.res4 = await this.connect.run('/risk/assessment/ctgo/plan/get', {
      risk_construction_id: this.selectItem1.risk_construction_id,
      risk_unit_id: this.selectItem2.risk_unit_id,
      risk_factor_id: this.selectItem3.risk_factor_id

    });
    if(this.res4.rsCode) {
      this.toast.present({ color: 'warning', message: this.res4.rsMsg });
    }
  }
  item4Click(item:PlanItem) {
    this.selectItem4 = item;
  }
}
