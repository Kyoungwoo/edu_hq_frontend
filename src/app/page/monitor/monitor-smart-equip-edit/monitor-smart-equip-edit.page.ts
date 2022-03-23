import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor-smart-equip-edit',
  templateUrl: './monitor-smart-equip-edit.page.html',
  styleUrls: ['./monitor-smart-equip-edit.page.scss'],
})
export class MonitorSmartEquipEditPage implements OnInit {
  smart_option = [
    {
      text: '구조물 변위 감지',
      ctgo_machine_serial_id: 8
    },
    {
      text: '크레인 상하차 감지',
      ctgo_machine_serial_id: 4
    },
    {
      text: '밀폐공간 유해물질 감지',
      ctgo_machine_serial_id: 7
    }
  ]

  form = {
    project_id: 0,
    master_company_id: 0,
    ctgo_machine_serial_id: 0
  }

  constructor() { }

  ngOnInit() {
  }

}
