import { ScannerService } from './../../../../basic/service/util/scanner.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { AreaDate } from 'src/app/component/select/select-dangerous-area/select-dangerous-area.component';
import { DetailSearchComponent } from '../../component/status-search/detail-search/detail-search.component';
import { WorkerStatusAddPage } from '../worker-status-add/worker-status-add.page';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';


export type CtgoNative = 'ch' | 'en' | 'kr' | 'vi';

@Component({
  selector: 'app-worker-status-list',
  templateUrl: './worker-status-list.page.html',
  styleUrls: ['./worker-status-list.page.scss'],
})
export class WorkerStatusListPage implements OnInit {

  menuCount:'gate' | 'risk' = 'gate';

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
    inside_type: string,
    outside_type: string,
    inner_data:{
      nb_log_id: number;
      inside_time: string;
      inside_state: number;
      outside_time: string;
      outside_state: number;
      inside_type: string;
      outside_type: string;
    }[],
    ctgo_safe_job_name: CtgoNative,
    inside_time: string,
    checked:boolean
  }>;

  areadata = new AreaDate();
  form = {
    master_company_id:0,
    project_id:history.state.project_id,
    search_text:'',
    area_risk_id:0,
  }

  form_risk = {
    master_company_id:0,
    project_id:history.state.project_id,
    search_text:'',
    area_risk_id:0,
  }

  nfcqrForm = {
    and_uq_id:0,
    ios_uq_id:0,
    nb_log_state:'',
    project_id:0,
    serial_key:0
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
      inside_type: string;
      outside_type: string;
    }[],
    ctgo_safe_job_name: null,
    inside_time: null,
    checked:boolean
  }>

  nfcIn:boolean = true;

  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    private toast: ToastService,
    private scanner: ScannerService,
    private changeDetector: ChangeDetectorRef,
    public languagePack: LanguagePackService
  ) { }

  async ngOnInit() {
    this.form.project_id = history.state.project_id;
    this.form.master_company_id = history.state.master_company_id | 0;
    this.form_risk.project_id = history.state.project_id;
    this.form_risk.master_company_id = history.state.master_company_id | 0;

    await this.getGate();
  }

  async getGate() {
   const res = await this.connect.run('/work_project/nfc_beacon/gate/list',this.form,{
      parse:['inner_data', 'ctgo_job_position_name','ctgo_occupation_name','ctgo_safe_job_name']
    });
    if(res.rsCode === 0) {
      this.gateList = {
        ...this.gateList,
        ...res
      }
    } else {
      // this.toast.present({ color: 'warning', message: this.gateList.rsMsg }); 
    }
  }
  
  async getRiskArea() {
    console.log('getRiskArea()', this.form_risk);
    console.log('getRiskArea()', this.areadata);
    this.nfcIn = false;
    // if(!this.form_risk.area_risk_id) return;  // await this.toast.present({message:'위험지역을 선택해 주세요.', color:'warning'});
    // this.form.area_risk_id = this.areadata.area_risk_id;
    const res = await this.connect.run('/work_project/nfc_beacon/risk/list',this.form_risk,{
      parse:['inner_data']
    });
    if(res.rsCode === 0) {

      this.riskAreaList = {
        ...this.riskAreaList,
        ...res
      }
    } else {
      // this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  dataChange(ev)  {
    // this.areadata = ev.data;
    console.log('dataChange_1',ev);
    if(ev?.area_risk_id) this.form_risk.area_risk_id = ev.area_risk_id;
    this.areadata = {
      ...this.areadata,
      ...ev
    };
    console.log('this.areadata - ',this.areadata);
    this.getRiskArea();
  }

  async work_edit(type) {
    let method = '';
    if(this.menuCount === 'gate') method = 'gate';
    else method = 'risk';
    const modal = await this.modal.create({
      component:WorkerStatusAddPage,
      componentProps: {
        project_id: this.menuCount === 'gate' ? this.form.project_id : this.form_risk.project_id,
        select_type:type,
        area_risk_id: this.menuCount === 'gate' ? this.form.area_risk_id : this.form_risk.area_risk_id,
        areadata:this.areadata,
        master_company_id: this.menuCount === 'gate' ? this.form.master_company_id : this.form_risk.master_company_id,
        method: method
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data){
      if(method === 'gate') this.getGate();
      else {
        this.areadata.area_risk_id = data.data;
        this.getRiskArea();
      }
    }
  }

  async detailSearch() {
    const modal = await this.modal.create({
      component:DetailSearchComponent
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) this.getGate();
  }

  async inNfcQr() {
    this.scanner.init(true).then((data) => {
      // this.form.area_risk_id = data.data;
      this.areadata.area_risk_id = data.data;
      this.getRiskArea();
    });
  }
}
