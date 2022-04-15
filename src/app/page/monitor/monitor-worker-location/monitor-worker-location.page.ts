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

  gpsData:ConnectResult<userData> = new ConnectResult();

  gps_log_id = [];
  gps_log_data = new GpsCoordinateData();

  constructor(
    private connect: ConnectService,

  ) { }

  ngOnInit() {
  }

  async get() {
    this.gpsData = await this.connect.run('/integrated/gps/log',this.form);
    if(this.gpsData.rsCode === 0) {
    }
  }

}
