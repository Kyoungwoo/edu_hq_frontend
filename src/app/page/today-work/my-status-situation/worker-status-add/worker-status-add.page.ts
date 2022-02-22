import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';

export class ctgoMemberItem {
  user_id: number;
  user_name: string;
  company_name: string;
  ctgo_job_position_name: string;
  ctgo_safe_job_name: string
  checked:boolean
}

@Component({
  selector: 'app-worker-status-add',
  templateUrl: './worker-status-add.page.html',
  styleUrls: ['./worker-status-add.page.scss'],
})
export class WorkerStatusAddPage implements OnInit {

  @Input() project_id:number;
  @Input() select_type:string;
  @Input() area_risk_id:number;
  
  form = {
    master_company_id: this.user.userData.belong_data.company_id,
    project_id: 0,
    search_text:'',
    select_type:'',
    user_type:'',
    area_risk_id:0
  }

  res:ConnectResult<ctgoMemberItem>

  selectData:ctgoMemberItem[] = [];
  constructor(
    private _modal : ModalController,
    private connect: ConnectService,
    private user: UserService
  ) { }

  ngOnInit() {
    console.log(this.select_type);
    if(this.area_risk_id) {
      this.riskGet()
    } else {
      this.gateGet();
    }
  }
  async gateGet() {
    this.form.project_id = this.project_id;
    this.form.select_type = this.select_type;
    this.res = await this.connect.run('/work_project/nfc_beacon/search_work_inout_gate/list',this.form);
    if(this.res.rsCode === 0) {}
  }
  async riskGet() {
    this.form.project_id = this.project_id;
    this.form.select_type = this.select_type;
    this.form.area_risk_id = this.area_risk_id; 
    this.res = await this.connect.run('/work_project/nfc_beacon/search_work_inout_risk/list',this.form);
    if(this.res.rsCode === 0) {}
  }

  selectItem(item) {
    item.checked = !item.checked;
    if(!this.selectData.includes(item)) this.selectData.push(item);
  }
}
