import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';

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
  @Input() master_company_id:number;
  @Input() areadata:any;
  
  form = {
    // master_company_id: this.user.userData.belong_data.company_id,
    master_company_id: 0,
    project_id: 0,
    search_text:'',
    user_type:'',
    area_risk_id:0,
    area_bottom_id:0,
    area_middle_id:0,
    area_top_id:0,
    insert_state:'', //입퇴장 타입(IN - 입장등록 / OUT - 퇴장등록) 유저리스트 메소드
    select_type:'', //입퇴장 타입(IN - 입장등록 / OUT - 퇴장등록) 입장퇴장 메소드
    inout_datetime:'',
    inout_date: '', // Date 형태의 
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
    private toast: ToastService,
    private date: DateService
  ) { }

  ngOnInit() {
    this.form.select_type = this.select_type;
    this.form.project_id = this.project_id;
    this.form.master_company_id = this.master_company_id;
    this.form.insert_state = this.select_type;
    this.form.area_risk_id = this.areadata.area_risk_id ? this.areadata.area_risk_id : 0;
  }
  async gateGet() {
    this.selectData = [];
    this.form.serial_type = '게이트';
    this.res = await this.connect.run('/work_project/nfc_beacon/search_work_inout_gate/list',this.form);
    if(this.res.rsCode === 0) {
    } else {
      this.toast.present({message:this.res.rsMsg, color:'warning'});
    }
  }
  async riskGet() {
    this.selectData = [];
    this.form.serial_type = '위험지역';
    this.res = await this.connect.run('/work_project/nfc_beacon/search_work_inout_risk/list',this.form);
    if(this.res.rsCode === 0) {
    } else {
      this.toast.present({message:this.res.rsMsg, color:'warning'});
    }

  }

  selectItem(item) {
    item.checked = !item.checked;
    if(item.checked) {
      if(!this.selectData.includes(item)) this.selectData.push(item);
    } else {
      const index = this.selectData.findIndex((data) => data === item);
      this.selectData.splice(index,1);
    }
  }

  async workerIn() {
    this.form.user_ids = [];
    this.selectData.forEach(item => this.form.user_ids.push(item.user_id));

    if(!this.form.user_ids.length) return this.toast.present({message:'입장할 근로자를 선택해주세요.',color:'warning'});
    if(!this.form.inout_date) return this.toast.present({message:'입장시간을 지정해주세요.',color:'warning'});

    const { area_top_id, area_middle_id, area_bottom_id } = this.areadata;

    this.form.area_top_id = area_top_id || 0;
    this.form.area_middle_id = area_middle_id ? area_middle_id : 0;
    this.form.area_bottom_id = area_bottom_id ? area_bottom_id : 0;
    this.form.inout_datetime = this.date.today() +' '+ this.form.inout_date;
    const alert = await this.alert.present({
      message: `선택한 인원을 ${this.form.insert_state === 'IN'? '입장':'퇴장' } 처리하시겠습니까?`,
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler:async() => {
            const res = await this.connect.run('/work_project/nfc_beacon/manual/insups',this.form);
            if(res.rsCode === 0) {
              this.toast.present({message:`${this.selectData.length}명이 입장 처리되었습니다.`,color:'primary'});
              this._modal.dismiss(this.form.area_risk_id);
            }
          }
        }
      ]
    });
    alert.present();
  }

  deleteData(i,item) {
    this.res.rsMap.filter(data => {if(data === item) return data.checked = false});
    this.selectData.splice(i,1);
  }

  dismiss() {
    this._modal.dismiss();
  }
}
