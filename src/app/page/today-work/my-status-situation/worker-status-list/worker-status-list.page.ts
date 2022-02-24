import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { AreaDate } from 'src/app/component/select/select-dangerous-area/select-dangerous-area.component';
import { DetailSearchComponent } from '../../component/status-search/detail-search/detail-search.component';
import { WorkerStatusAddPage } from '../worker-status-add/worker-status-add.page';

export type CtgoNative = 'ch' | 'en' | 'kr' | 'vi';
export class InnerDate {
  nb_log_id: number;
  inside_time: string;
  inside_state: number;
  outside_time: string;
  outside_state: number;
}

@Component({
  selector: 'app-worker-status-list',
  templateUrl: './worker-status-list.page.html',
  styleUrls: ['./worker-status-list.page.scss'],
})
export class WorkerStatusListPage implements OnInit {

  menuCount:Number = 1;

  gateList:ConnectResult<{
    outside_time: string,
    manual_state: number,
    nb_log_id: number,
    user_name: string,
    ctgo_occupation_name: CtgoNative,
    ctgo_job_position_name: CtgoNative,
    inside_state: number,
    user_id: number,
    outside_state: number,
    company_name: string,
    inner_data:{
      nb_log_id: number;
      inside_time: string;
      inside_state: number;
      outside_time: string;
      outside_state: number;
    }[],
    ctgo_safe_job_name: CtgoNative,
    inside_time: string
  }>;

  areadata = new AreaDate();

  gateOpen:boolean = false;
  gateForm = {
    master_company_id:1,
    project_id:0,
    search_text:''
  }
  
  riskAreaForm = {
    area_risk_id:0,
    master_company_id:1,
    project_id:0,
    search_text:''
  }

  riskAreaList:ConnectResult<{
    outside_time: null,
    manual_state: 1,
    nb_log_id: null,
    user_name: null,
    ctgo_occupation_name: null,
    ctgo_job_position_name: null,
    inside_state: null,
    inside_type: null,
    outside_type: null,
    user_id: null,
    outside_state: null,
    company_name: null,
    inner_data:{
      nb_log_id: number;
      inside_time: string;
      inside_state: number;
      outside_time: string;
      outside_state: number;
    }[],
    ctgo_safe_job_name: null,
    inside_time: null
  }>

  nfcIn:boolean = true;

  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    private toast: ToastService,
    private promise: PromiseService
  ) { }

  ngOnInit() {
    console.log(history.state);
  }

  async getGate() {
    await this.promise.wait(() => this.gateForm.project_id = history.state.navigationId);
    this.gateList = await this.connect.run('/work_project/nfc_beacon/gate/list',this.gateForm,{
      parse:['inner_data', 'ctgo_job_position_name','ctgo_occupation_name','ctgo_safe_job_name']
    });
    if(this.gateList.rsCode !== 0) {
      this.toast.present({ color: 'warning', message: this.gateList.rsMsg }); 
    }
  }
  
  async getRiskArea() {
    if(!this.riskAreaForm.area_risk_id) return await this.toast.present({message:'위험지역을 선택해 주세요.', color:'warning'});
    this.riskAreaForm.area_risk_id = this.areadata.area_risk_id;
    const res = await this.connect.run('/work_project/nfc_beacon/risk/list',this.riskAreaForm);
    if(res.rsCode === 0) {
      this.riskAreaList = {
        ...res,
        ...this.riskAreaList
      }
      this.nfcIn = false;
      console.log("this.nfcIn",this.nfcIn);
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  dataChange(ev)  {
    this.areadata = ev.data;
  }

  async work_edit(type) {
    console.log(this.areadata);
    const modal = await this.modal.create({
      component:WorkerStatusAddPage,
      componentProps: {
        project_id: history.state.navigationId,
        select_type:type,
        area_risk_id:this.riskAreaForm.area_risk_id,
        areadata:this.areadata
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
  }

  async detailSearch() {
    const modal = await this.modal.create({
      component:DetailSearchComponent
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) this.getGate();
  }
}
