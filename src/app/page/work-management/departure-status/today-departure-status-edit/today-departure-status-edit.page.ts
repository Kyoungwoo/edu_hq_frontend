import { Component, Input, OnInit } from '@angular/core';


export class TodayDepartureStatusEditForm {
  area_risk_id:number = null; // 위험지역ID - 입장유형이 위험지역일 경우에만 입력
  area_top_id:number = null; // 장소ID_1(TOP) - 입장유형이 위험지역일 경우에만 입력
  area_middle_id:number = null; // 장소ID_2(MIDDLE) - 입장유형이 위험지역일 경우에만 입력
  area_bottom_id:number = null; // 장소ID_3(BOTTOM) - 입장유형이 위험지역일 경우에만 입력
  insert_state:'IN'|'OUT' = null; // IN - 입장 / OUT - 퇴장
  inside_time:string = null; // 입장시간
  master_company_id:number = null; // 원청사ID
  project_id:number = null; // 현장ID
  serial_type:string = null; // 입장유형 - 게이트/위험지역
  user_ids:string = null; // 입/퇴장 유저ID
}
@Component({
  selector: 'app-today-departure-status-edit',
  templateUrl: './today-departure-status-edit.page.html',
  styleUrls: ['./today-departure-status-edit.page.scss'],
})
export class TodayDepartureStatusEditPage implements OnInit {

  @Input() type:'입장'|'퇴장';

  form = {
    company_id: 0,
    user_type: 'WORKER',
    search_text: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
