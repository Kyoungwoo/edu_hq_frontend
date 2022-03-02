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
    project_id:0
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

  gateOpen:boolean = false;

  notWorker:boolean = false;
  worker:boolean = false;
  
  nfcqrForm = {
      and_uq_id:0,
      ios_uq_id:0,
      nb_log_state:'',
      project_id:0,
      serial_key:0
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
    if(this.user.userData.user_role === 'LH_HEAD' ||
      this.user.userData.user_role === 'MASTER_HEAD' ||
      this.user.userData.user_role === 'PARTNER_HEAD') this.notWorker = true;
  }

  async get() {
    this.resgate = await this.connect.run('/work_project/nfc_beacon/my_gate/list',this.form,{parse:['inner_data']});
    if(this.resgate.rsCode === 0) {
    } else {
      this.toast.present({message:this.resgate.rsMsg, color:'warning'});
    }
    this.resrisk = await this.connect.run('/work_project/nfc_beacon/my_risk/list',this.form,{parse:['inner_data']});
    if(this.resrisk.rsCode === 0) {
    } else {
      this.toast.present({message:this.resrisk.rsMsg, color:'warning'});
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

  async inNfcQr() {
   const alert = await this.alert.present({
      message:'출입 방법을 선택해주세요.',
      buttons:[
        {text:'QR',
          handler: async() =>{
            const $qr = await this.qr.subscribe(async (qrData) => {
              this.nfcqrForm.project_id = this.form.project_id;
              this.nfcqrForm.serial_key = qrData.qr_data;
              this.nfcqrForm.nb_log_state = 'QR'
              console.log("this.nfcqrForm",this.nfcqrForm);
              if(!this.nfcqrForm.project_id) return this.toast.present({message:'현장을 선택해주세요.',color:'warning'});
              if(!qrData) return this.toast.present({ message: 'qr을 다시 스캔해주세요.' });
              const res = await this.connect.run('/work_project/nfc_beacon/check_insup', { user_id: qrData.user_id });
              if(res.rsCode !== 0) {
                $qr.unsubscribe();
                this.get();
                } else {
                this.connect.error('qr스캔실패',res);
              }
            });
          }
        },
        {text:'NFC',
          handler: async() => {
            const $nfc = await this.nfc.subscribe(async (nfcData) => {
              this.nfcqrForm.project_id = this.form.project_id;
              this.nfcqrForm.serial_key = nfcData;
              this.nfcqrForm.nb_log_state = 'QR'
              console.log("nfc",nfcData);
              console.log("this.nfcqrForm",this.nfcqrForm);
              if(!nfcData) return this.toast.present({ message: 'nfc을 다시 스캔해주세요.' });
              const res = await this.connect.run('/work_project/nfc_beacon/check_insup', { user_id: nfcData.user_id });
              if(res.rsCode !== 0) {
                this.get();
                $nfc.unsubscribe();
                } else {
                this.connect.error('nfc스캔실패',res);
              }
            });
          }
        }
      ]
    });
    alert.present();
  }
}
