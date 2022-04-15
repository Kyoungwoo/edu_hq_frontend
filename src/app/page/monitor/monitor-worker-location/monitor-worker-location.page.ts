import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
