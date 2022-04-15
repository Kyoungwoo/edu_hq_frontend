import { Component, OnInit } from '@angular/core';
import { GpsCoordinateData } from 'src/app/basic/component/input/naver-map/naver-map.component';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { userData } from 'src/app/basic/component/input/naver-user-map/naver-user-map.component';

@Component({
  selector: 'app-monitor-worker-location',
  templateUrl: './monitor-worker-location.page.html',
  styleUrls: ['./monitor-worker-location.page.scss'],
})
export class MonitorWorkerLocationPage implements OnInit {

  form = {
    company_id: 0,
    ctgo_construction_id: 0,
    master_company_id: 0,
    project_id: 0,
    search_text: '',
    user_type: '전체'
  }

  resGps:ConnectResult<userData> = new ConnectResult();

  workerInRes:ConnectResult<{
    ctgo_construction_id: number,
    user_type: string,
    company_id: number,
    user_id: number,
    user_name: string,
    company_name: string,
    ctgo_construction_name: string,
    row_count:number
  }>;

  gps_log_id = [];
  gps_log_data = new GpsCoordinateData();


  constructor(
    private connect: ConnectService,

  ) { }

  ngOnInit() {
    this.getGps();
  }

  async getGps() {
    const res = await this.connect.run('/integrated/gps/log',this.form);
    if(res.rsCode === 0) {

    }
  }

  async wokerInGetList() {
    this.workerInRes = await this.connect.run('/integrated/worker/in/list',this.form);
    /* if(this.workerInRes.rsCode !== 0 && this.workerInRes.rsCode !== 1008) {
      this.toast.present({message:this.workerInRes.rsMsg, color:'warning'});
    } */
  }

}
