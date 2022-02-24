import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

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
  @Input() areadata:any;
  
  form = {
    // master_company_id: this.user.userData.belong_data.company_id,
    master_company_id: 2,
    project_id: 1,
    search_text:'',
    select_type:'',
    user_type:'',
    area_risk_id:0,
    area_bottom_id:0,
    area_middle_id:0,
    area_top_id:0,
    insert_state:'',
    inside_time:'',
    serial_type:'',
    user_ids:[]
  }

  res:ConnectResult<ctgoMemberItem>

  selectData:ctgoMemberItem[] = [];
  constructor(
    private _modal : ModalController,
    private connect: ConnectService,
    private user: UserService,
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    
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
  async workerIn() {
    this.selectData.map(item => this.form.user_ids.push(item.user_id));
    this.form.area_risk_id ? this.form.user_type = '위험지역' : this.form.user_type = '게이트'
    
    this.form = {
      ...this.areadata,
      ...this.form
    }
    console.log("this.=form",this.form);
    const alert = await this.alert.present({
      message:'선택한 인원을 입장 처리하시겠습니까?',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler:async() => {
            const res = await this.connect.run('/work_project/nfc_beacon/manual/insups',this.form);
            if(res.rsCode === 0) {
              this.toast.present({message:`${this.selectData.length}명이 입장 처리되엇습니다.`})
              this._modal.dismiss(true);
            }

          }
        }
      ]
    })
  }
}
