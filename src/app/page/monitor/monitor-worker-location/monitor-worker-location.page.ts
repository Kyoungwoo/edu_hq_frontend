import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { userData } from 'src/app/basic/component/input/naver-user-map/naver-user-map.component';

@Component({
  selector: 'app-monitor-worker-location',
  templateUrl: './monitor-worker-location.page.html',
  styleUrls: ['./monitor-worker-location.page.scss'],
})
export class MonitorWorkerLocationPage implements OnInit {

  @Input() set project_id(v) {
    this.form.project_id = v;
  }
  @Input() set master_company_id(v) {
    this.form.master_company_id = v;
  }

  form = {
    company_id: 0,
    ctgo_construction_id: 0,
    master_company_id: 0,
    project_id: 0,
    search_text: '',
    user_type: '전체'
  }

  gpsData:userData[] = [];

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

  /* event = {
    resize: null
  }
  mapSize = {
    height: 0
  } */

  constructor(
    private el: ElementRef,
    private connect: ConnectService
  ) { }

  ngOnInit() {
    this.get();
  }
  /* ngAfterViewInit() {
    this.event.resize = this.resizeEvent.bind(this);
    window.addEventListener('resize', this.event.resize);
  }
  resizeEvent() {
    const el = this.el.nativeElement.getElementsByClassName('inner-scroll')[0];
  } */

  get() {
    this.getGps();
    this.wokerInGetList();
  }

  async getGps() {
    const res = await this.connect.run('/integrated/gps/log', this.form);
    if(res.rsCode === 0) {
      this.gpsData = res.rsMap;
    }
    else {
      this.gpsData = [];
    }
  }

  async wokerInGetList() {
    this.workerInRes = await this.connect.run('/integrated/worker/in/list', this.form);
  }

}
