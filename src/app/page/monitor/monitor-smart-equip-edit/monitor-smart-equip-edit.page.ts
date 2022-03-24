import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor-smart-equip-edit',
  templateUrl: './monitor-smart-equip-edit.page.html',
  styleUrls: ['./monitor-smart-equip-edit.page.scss'],
})
export class MonitorSmartEquipEditPage implements OnInit {
  /**
   * @var smart_option - 구분 셀렉트 아이템 변수
   */
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

  /**
   * @var total_count - 총 보유대수
   * @var using_total_count - 총 가동대수
   */
  total_count = 0;
  using_total_count = 0;

  /**
   * @var form - 메서드 호출용 필수 변수모음
   */
  form = {
    project_id: 1,
    master_company_id: 1,
    ctgo_machine_serial_id: 0
  }

  /**
   * @var res - 메서드로 받아온 아이템 Array
   */
  res:ConnectResult<{
    not_using_count:number; // 미가동
    company_name:string; // 업체이름
    master_company_id: number; // 원청사 ID
    ctgo_machine_serial_name: string; // 스마트장비 이름
    ctgo_machine_serial_id: number; // 스마트장비 ID
    machine_count: number; // 스마트장비 보유 갯수
    mmachine_using_count: number // 가동중
  }>
  
  constructor(
    private connect: ConnectService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.get()
  }
  
  /**
   * @function get(): 개별현장 스마트 장비 리스트를 불러오는 메서드
   */
  async get() {
    this.res = await this.connect.run('/integrated/smart_equip_list',this.form);
    if(this.res.rsCode === 0) {
      let total = 0;
      let using_total = 0;

      this.res.rsMap.map((item) => {
        total = total+item.machine_count;
        using_total = using_total+item.mmachine_using_count;
      });

      this.total_count = total;
      this.using_total_count = using_total;
    } else {
      this.toast.present({message:this.res.rsMsg, color:'warning'});
    }
  }
}
