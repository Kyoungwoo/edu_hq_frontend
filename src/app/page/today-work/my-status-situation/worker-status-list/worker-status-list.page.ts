import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
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

  gateOpen:boolean = false;
  gateForm = {
    master_company_id:0,
    project_id:0,
    search_text:''
  }

  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    console.log(history.state.project_id);
    this.gateForm.project_id = history.state.project_id;
    console.log(this.gateForm.project_id);
    this.getGate();
  }

  async getGate() {
    this.gateList = await this.connect.run('/work_project/nfc_beacon/gate/list',this.gateForm,{
      parse:['inner_data', 'ctgo_job_position_name','ctgo_occupation_name','ctgo_safe_job_name']
    });
    if(this.gateList.rsCode === 0) {
      
    } else {
      this.toast.present({ color: 'warning', message: this.gateList.rsMsg });
    }
  }

  async add_work() {
    const modal = await this.modal.create({
      component:WorkerStatusAddPage,
    });
    modal.present();    
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
