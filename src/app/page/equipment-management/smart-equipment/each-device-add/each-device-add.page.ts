import { ConnectService, ConnectResult } from 'src/app/basic/service/core/connect.service';
import { FileService } from 'src/app/basic/service/core/file.service';
import { SearchSerialNumberComponent, SearialItem } from './../../../../component/modal/search-serial-number/search-serial-number.component';
import { AlertService } from './../../../../basic/service/ionic/alert.service';
import { ToastService } from './../../../../basic/service/ionic/toast.service';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

class SmartInfoInsertItem {
  ctgo_machine_serial_id: number = 0;
  ctgo_machine_serial_name:string = '';
  serial_id: number = 0;
  serial_use_state: number = 0;
  assign_user_id: number = 0;
  assign_user_name:string = '';
  serial_no:string = '';
  serial_type:string = '';
}

@Component({
  selector: 'app-each-device-add',
  templateUrl: './each-device-add.page.html',
  styleUrls: ['./each-device-add.page.scss'],
})
export class EachDeviceAddPage implements OnInit {
  @Input() form; // 검색조건
  @Input() item; // 저장할 아이템
  // @Input() list; // 디바이스 현황 리스트
  @Input() ctgo; // 카테고리 리스트
  @Input() serial_type; // 개인 / 중장비 / 위험지역

  /** @param res - 서버에서 받아온 시리얼 NO 리스트 */
  res:ConnectResult<SmartInfoInsertItem>;

  original_item = [];
  insert_list:SmartInfoInsertItem[] = [];

  constructor(
    private _modal:ModalController,
    private toast:ToastService,
    private alert:AlertService,
    private file:FileService,
    private connect:ConnectService
  ) { }

  ngOnInit() {
    // this.original_item = this.file.clone(this.list);
  }

  async get(){
    // const res = await this.connect.run('/device/user/mo/list', {user_ids: });
    // if(res.rsCode === 0 ) {
    //   this.res = {
    //     ...this.res,
    //     ...res
    //   };
    // }
    // else if (res.rsCode === 1008) {
    //   this.res = null;
    // }
    // else {
    //   this.toast.present({ color: 'warning', message: res.rsMsg });
    // }
  }

  async select(){
    const alert = await this.alert.present({
      message: '저장 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            if(!this.insert_list.length) this._modal.dismiss();
            else {

            }
            if(!this.item.ctgo_machine_serial_id){
              return this.toast.present({ color: 'warning', message: '장비구분을 선택해주세요.' });
            }
            if(!this.item.serial_id){
              return this.toast.present({ color: 'warning', message: '시리얼No를 선택해주세요.' });
            }
            if(!this.item.assign_user_id){
              return this.toast.present({ color: 'warning', message: '성명을 선택해주세요.' });
            }

            this._modal.dismiss({item: this.item, type: 'insert'});
          }
        }
      ]
    });
  }

  /**
   * @function openModal_SerialMobile(): 시리얼을 가져오는 모달(앱일경우에만 사용)
   */
   public async openModal_SerialMobile() {
     if(!this.item.assign_user_id) return this.toast.present({ message: '성명을 먼저 선택해주세요.', color: 'warning' });
    const modal = await this._modal.create({
      component:SearchSerialNumberComponent,
      componentProps: {
        form: {
          serial_type: this.serial_type,
          project_id: this.form.project_id,
          master_company_id: this.form.company_id,
          ctgo_machine_serial_id: 0,
          search_text: ''
        },
        state: 'mobile'
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      const selectedItem = <SearialItem>data.selectedItem;
      console.log(selectedItem);

      let addItem = {
        assign_user_id: this.item.assign_user_id,
        assign_user_name: this.item.assign_user_name,
        serial_id: selectedItem.serial_id,
        serial_no: selectedItem.serial_no,
        ctgo_machine_serial_id: selectedItem.ctgo_machine_serial_id,
        ctgo_machine_serial_name: selectedItem.ctgo_machine_serial_name,
        serial_use_state: 0,
        serial_type: selectedItem.serial_type
      }

      this.insert_list.push(addItem);
    }
  }

  deleteItem(index){
    this.insert_list.splice(index,1);
  }
}
