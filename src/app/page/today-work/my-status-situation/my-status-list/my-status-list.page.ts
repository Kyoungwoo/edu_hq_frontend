import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { NfcService } from 'src/app/basic/service/util/nfc.service';
import { QrService } from 'src/app/basic/service/util/qr.service';
import { DetailSearchComponent } from '../../component/status-search/detail-search/detail-search.component';

@Component({
  selector: 'app-my-status-list',
  templateUrl: './my-status-list.page.html',
  styleUrls: ['./my-status-list.page.scss'],
})
export class MyStatusListPage implements OnInit {

  open:boolean = false;

  form = {
    master_company_id: 0,
    project_id: this.user.userData.belong_data.project_id,
    project_name:''
  }

  resgate:ConnectResult<{
    area_bottom_name:string,
    area_risk_id:number,
    last_state:string,
    user_id:number,
    area_middle_name:string,
    last_time:string,
    area_top_name:string,
    inner_data: [{
      work_state:string,
      inside_time:string,
      serial_type:string,
      area_risk_id:number,
      outside_time:string,
      area_top_name:string,
      area_risk_name:string,
      area_bottom_name:string,
      area_middle_name:string,
    }],
    area_risk_name:string
  }>

  resrisk:ConnectResult<{
    area_bottom_name:string,
    area_risk_id:number,
    last_state:string,
    user_id:number,
    area_middle_name:string,
    last_time:string,
    area_top_name:string,
    inner_data: [{
      work_state:string,
      inside_time:string,
      serial_type:string,
      area_risk_id:number,
      outside_time:string,
      area_top_name:string,
      area_risk_name:string,
      area_bottom_name:string,
      area_middle_name:string,
    }],
    area_risk_name:string
    checked:boolean;
  }>

  gateState:boolean = false;
  gateOpen:boolean = false;

  notWorker:boolean = false;
  worker:boolean = false;
  
  nfcqrForm = {
      and_uq_id:'test',
      ios_uq_id:'test',
      nb_log_state:'',
      project_id:0,
      serial_key:''
  }
  constructor(
    private nav: NavService,
    private modal: ModalController,
    private connect: ConnectService,
    private qr: QrService,
    private nfc: NfcService,
    private alert: AlertService,
    private toast: ToastService,
    public user: UserService
  ) { }

  ngOnInit() {
    this.roleCheck();
  }

  roleCheck() {
    const { user_role, user_type } = this.user.userData;
    if(user_role === 'MASTER_HEAD' ||
       user_role === 'LH_HEAD'||
       user_role === 'PARTNER_HEAD' ||
       user_role === 'MASTER_GENERAL' ||
       user_role === 'PARTNER_GENERAL') this.notWorker = true;
    if(user_role === 'MASTER_HEAD' ||
       user_role === 'PARTNER_HEAD') {
         this.form.master_company_id = this.user.userData.belong_data.company_id;
       }

    if(user_role === 'PARTNER_WORKER' ||
       user_type === 'WORKER') this.notWorker = false;

       this.get();
  }

  async get() {
      this.resgate = await this.connect.run('/work_project/nfc_beacon/my_gate/list',this.form,{parse:['inner_data']});
      if(this.resgate.rsCode === 0) {
      }
      else {
        // this.toast.present({message:'게이트 출역 기록이 없습니다.', color:'warning'});
      }
      this.resrisk = await this.connect.run('/work_project/nfc_beacon/my_risk/list',this.form,{parse:['inner_data']});
      if(this.resrisk.rsCode === 0) {
      } 
      else {
        if(!this.resgate) {
          // this.toast.present({message:'게이트 먼저 입장해주세요.', color:'warning'});
        }
      }
  }

  async detailSearch() {
    const modal = await this.modal.create({
      component:DetailSearchComponent,
      componentProps:{
        type:'my'
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.form.master_company_id = data.master_company_id;
      this.form.project_id = data.project_id;
      this.get();
    }
  }

  status(item) {
    item.open = !item.open;
  }

  workerSatus() {
    if(!this.form.project_id) return this.toast.present({message:'현장을 선택해주세요.',color:'warning'});
    this.nav.navigateForward('/worker-status-list',{
      state:
        {
          project_id:this.form.project_id,
          master_company_id:this.form.master_company_id
        }
    });
  }

  async nfcScan() {
    const $nfc = await this.nfc.subscribe('worker',async (nfcData) => {
      if(nfcData.type === 'QR_CHANGE') {
        $nfc.unsubscribe();
        this.inNfcQr();
      } 
      else { 
        if(!nfcData) return this.toast.present({ message: 'nfc을 다시 스캔해주세요.' });
        this.nfcqrForm.serial_key = nfcData;
        this.nfcqrForm.nb_log_state = 'NFC';
        const res = await this.connect.run('/work_project/nfc_beacon/check_insup', this.nfcqrForm);
        if(res.rsCode === 0) {
          this.get();
          $nfc.unsubscribe();
        } 
        else {
          $nfc.unsubscribe();
          this.nfcScan();
          this.toast.present({message:res.rsMsg, color:'warning'});
        }
      }
    });
  }

  async inNfcQr() {
    this.nfcqrForm.project_id = this.form.project_id;
    if(!this.nfcqrForm.project_id) return this.toast.present({message:'현장을 선택해주세요.',color:'warning'});
    const $qr = await this.qr.subscribe('worker',async (qrData) => {
      if(qrData.type === 'NFC_CHANGE'){
        $qr.unsubscribe();
        this.nfcScan();
      }
      else {
        if(!qrData) return this.toast.present({ message: 'NFC을 다시 스캔해주세요.' });
        this.nfcqrForm.serial_key = qrData.qr_data;
        this.nfcqrForm.nb_log_state = 'QR';
        const res = await this.connect.run('/work_project/nfc_beacon/check_insup',this.nfcqrForm);
        if(res.rsCode === 0) {
          $qr.unsubscribe();
          this.get();
        }
        else {
          $qr.unsubscribe();
          this.toast.present({message:res.rsMsg, color:'warning'});
        }
      }
    });
  }
}