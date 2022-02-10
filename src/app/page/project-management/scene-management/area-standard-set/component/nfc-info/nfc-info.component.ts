import { Component, Input, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';

@Component({
  selector: 'app-nfc-info',
  templateUrl: './nfc-info.component.html',
  styleUrls: ['./nfc-info.component.scss'],
})
export class NfcInfoComponent implements OnInit {

  @Input() area_risk_id;
  nfcData:ConnectResult <{
    device_id: number, // 장비 ID
    serial_no: string, // 시리얼넘버
    serial_id: number // 시리얼 ID
  }>
  constructor(
    private connect: ConnectService
  ) { }

  ngOnInit() {
    this.getNfc();
  }
  async getNfc() {
    this.nfcData = await this.connect.run('/project/area/risk/nfc/get',{area_risk_id:this.area_risk_id})
    if(this.nfcData.rsCode === 0) {};
  }
}
