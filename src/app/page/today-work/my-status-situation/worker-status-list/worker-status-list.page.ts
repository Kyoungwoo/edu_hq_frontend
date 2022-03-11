import { Component, Injectable, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { NfcService } from 'src/app/basic/service/util/nfc.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { QrService } from 'src/app/basic/service/util/qr.service';
import { AreaDate } from 'src/app/component/select/select-dangerous-area/select-dangerous-area.component';
import { DetailSearchComponent } from '../../component/status-search/detail-search/detail-search.component';
import { WorkerStatusAddPage } from '../worker-status-add/worker-status-add.page';


export type CtgoNative = 'ch' | 'en' | 'kr' | 'vi';

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
    private qr: QrService,
    private nfc: NfcService
  ) { }

  ngOnInit() {
    this.form.project_id = history.state.project_id;
    this.form.master_company_id = history.state.master_company_id;
  }

  async getGate() {
   const res = await this.connect.run('/work_project/nfc_beacon/gate/list',this.form,{
      parse:['inner_data', 'ctgo_job_position_name','ctgo_occupation_name','ctgo_safe_job_name']
    });
    if(res.rsCode === 0) {
      this.gateList = {
        ...res,
        ...this.gateList
      }
    } else {
      this.toast.present({ color: 'warning', message: this.gateList.rsMsg }); 
    }
  }
  
  async getRiskArea() {
    this.nfcIn = false;
    if(!this.form.area_risk_id) return await this.toast.present({message:'위험지역을 선택해 주세요.', color:'warning'});
    this.form.area_risk_id = this.areadata.area_risk_id;
    const res = await this.connect.run('/work_project/nfc_beacon/risk/list',this.form,{
      parse:['inner_data']
    });
    if(res.rsCode === 0) {

      this.riskAreaList = {
        ...res,
        ...this.riskAreaList
      }
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  dataChange(ev)  {
    this.areadata = ev.data;
  }

  async work_edit(type) {
    const modal = await this.modal.create({
      component:WorkerStatusAddPage,
      componentProps: {
        project_id: this.form.project_id,
        select_type:type,
        area_risk_id:this.form.area_risk_id,
        areadata:this.areadata,
        master_company_id: this.form.master_company_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data?.area_risk_id) this.getRiskArea();
    else this.getGate();
  }

  async detailSearch() {
    const modal = await this.modal.create({
      component:DetailSearchComponent
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) this.getGate();
  }

  async nfcScan() {
    const $nfc = await this.nfc.subscribe('worker',async (nfcData) => {
      // this.nfcqrForm.project_id = this.form.project_id;
      this.nfcqrForm.serial_key = nfcData;
      this.nfcqrForm.nb_log_state = 'NFC'
      if(nfcData.type === 'QR_CHANGE') {
        this.inNfcQr();
      } else { 
        if(!nfcData) return this.toast.present({ message: 'nfc을 다시 스캔해주세요.' });
        const res = await this.connect.run('/work_project/nfc_beacon/check_insup', this.nfcqrForm);
        if(res.rsCode !== 0) {
          this.getGate();
          $nfc.unsubscribe();
          } else {
          this.connect.error('nfc스캔실패',res);
        }     
      }
    });
  }

  async inNfcQr() {
    this.nfcqrForm.project_id = this.form.project_id;
    // if(!this.nfcqrForm.project_id) return this.toast.present({message:'현장을 선택해주세요.',color:'warning'});
    const $qr = await this.qr.subscribe('worker',async (qrData) => {
      this.nfcqrForm.serial_key = qrData.qr_data;
      this.nfcqrForm.nb_log_state = 'QR';
      if(qrData.type === 'NFC_CHANGE') {
        this.nfcScan();
      }
      else {
        if(!qrData) return this.toast.present({ message: 'qr을 다시 스캔해주세요.' });
        const res = await this.connect.run('/work_project/nfc_beacon/check_insup',this.nfcqrForm);
        if(res.rsCode !== 0) {
          $qr.unsubscribe();
          this.getGate();
          } else {
            $qr.unsubscribe();
            this.inNfcQr();
          this.connect.error('qr스캔실패',res);
        }
      }
    });
  }
}
