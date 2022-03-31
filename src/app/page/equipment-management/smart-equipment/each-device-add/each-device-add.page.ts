import { ToastService } from './../../../../basic/service/ionic/toast.service';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-each-device-add',
  templateUrl: './each-device-add.page.html',
  styleUrls: ['./each-device-add.page.scss'],
})
export class EachDeviceAddPage implements OnInit {
  @Input() form; // 검색조건
  @Input() item; // 저장할 아이템
  @Input() list; // 디바이스 현황 리스트
  @Input() ctgo; // 카테고리 리스트

  constructor(
    private _modal:ModalController,
    private toast:ToastService
  ) { }

  ngOnInit() {
  }

  select(){
    if(!this.item.ctgo_machine_serial_id){
      return this.toast.present({ color: 'warning', message: '장비구분을 선택해주세요.' });
    }
    if(!this.item.serial_id){
      return this.toast.present({ color: 'warning', message: '시리얼No를 선택해주세요.' });
    }
    if(!this.item.assign_user_id){
      return this.toast.present({ color: 'warning', message: '성명을 선택해주세요.' });
    }

    this._modal.dismiss({item: this.item});
  }
}
