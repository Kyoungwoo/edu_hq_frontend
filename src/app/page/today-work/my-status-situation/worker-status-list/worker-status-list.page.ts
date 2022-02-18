import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { SearchPeopleComponent } from 'src/app/component/modal/search-people/search-people.component';
import { SelectPeopleComponent } from 'src/app/component/select/select-people/select-people.component';
import { StatusSearchComponent } from '../../component/status-search.component';
import { WorkerStatusAddPage } from '../worker-status-add/worker-status-add.page';

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
    ctgo_occupation_name: {"ch": string, "en": string, "kr": string, "vi": string},
    ctgo_job_position_name: {"ch": string, "en": string, "kr": string, "vi": string},
    inside_state: number,
    user_id: number,
    outside_state: number,
    company_name: string,
    inner_data: [{"nb_log_id": number, "inside_time": string, "inside_state": number, "outside_time": string, "outside_state": number}],
    ctgo_safe_job_name: {"ch": string, "en": string, "kr": string, "vi": string},
    inside_time: string
  }>;

  gateForm = {
    master_company_id:0,
    project_id:0,
    search_text:''
  }
  constructor(
    private modal : ModalController,
    private connect: ConnectService
  ) { }

  ngOnInit() {
  }

  async getGate() {
    this.gateList = await this.connect.run('/nfc_beacon/gate/list',this.gateForm,{});
    if(this.gateList.rsCode === 0) {
      
    }
  }

  async add_work() {
    const modal = await this.modal.create({
      component:WorkerStatusAddPage
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
  }
  async detailSearch() {
    const modal = await this.modal.create({
      component:StatusSearchComponent
    });
    modal.present();
  }
}
