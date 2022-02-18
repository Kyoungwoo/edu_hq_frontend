import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
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
    master_company_id: 1,
    project_id:0
  }

  resgate:ConnectResult<{
    area_bottom_name: string,
    area_risk_id: number,
    last_state: string,
    user_id: number,
    area_middle_name: string,
    last_time: string,
    area_top_name: string,
    inner_data: [{
      work_state: string,
      inside_time: string,
      serial_type: string,
      area_risk_id: number,
      outside_time: string,
      area_top_name: string,
      area_risk_name: string,
      area_bottom_name: string,
      area_middle_name: string,
    }],
    area_risk_name: string
  }>

  resrisk:ConnectResult<{
    area_bottom_name: string,
    area_risk_id: number,
    last_state: string,
    user_id: number,
    area_middle_name: string,
    last_time: string,
    area_top_name: string,
    inner_data: [{
      work_state: string,
      inside_time: string,
      serial_type: string,
      area_risk_id: number,
      outside_time: string,
      area_top_name: string,
      area_risk_name: string,
      area_bottom_name: string,
      area_middle_name: string,
    }],
    area_risk_name: string
    checked:boolean;
  }>

  gateOpen:boolean = false;
  

  constructor(
    private nav: NavService,
    private modal: ModalController,
    private connect: ConnectService,
    private qr: QrService,
    private nfc: NfcService
  ) { }

  ngOnInit() {
  }

  async get() {
    this.resgate = await this.connect.run('/work_project/nfc_beacon/my_gate/list',this.form,{parse:['inner_data']});
    if(this.resgate.rsCode === 0) {
      console.log(this.resgate);
    } else {
      
    }
    this.resrisk = await this.connect.run('/work_project/nfc_beacon/my_risk/list',this.form,{parse:['inner_data']});
    if(this.resgate.rsCode === 0) {
      console.log(this.resgate);
    } else {
      
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
      // this.form.master_company_id = data.master_company_id;
      this.form.project_id = data.project_id;
      this.get();
    }
  }

  status(item) {
    item.open = !item.open;
  }

  workerSatus() {
    this.nav.navigateForward('/worker-status-list');
  }

  async inNfcQr() {
    
  }
}
