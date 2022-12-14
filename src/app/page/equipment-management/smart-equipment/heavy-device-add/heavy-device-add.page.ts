import { SearialItem, SearchSerialNumberComponent } from './../../../../component/modal/search-serial-number/search-serial-number.component';
import { FileService } from './../../../../basic/service/core/file.service';
import { AlertService } from './../../../../basic/service/ionic/alert.service';
import { ToastService } from './../../../../basic/service/ionic/toast.service';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from './../../../../basic/service/core/connect.service';
import { Component, OnInit, Input } from '@angular/core';

class SmartInfoInsertItem {
  ctgo_machine_serial_id: number = 0;
  ctgo_machine_serial_name:string = '';
  serial_id: number = 0;
  serial_use_state: number = 0;
  // assign_user_id: number = 0;
  // assign_user_name:string = '';
  machinery_id: number = 0;
  serial_no:string = '';
  serial_type:string = '';
}

@Component({
  selector: 'app-heavy-device-add',
  templateUrl: './heavy-device-add.page.html',
  styleUrls: ['./heavy-device-add.page.scss'],
})
export class HeavyDeviceAddPage implements OnInit {
  @Input() form; // 검색조건
  @Input() item; // 저장할 아이템
  // @Input() list; // 디바이스 현황 리스트
  @Input() ctgo; // 카테고리 리스트
  @Input() serial_type; // 개인 / 중장비 / 위험지역

  /** @param res - 서버에서 받아온 등록 NO 리스트 */
  res:ConnectResult<SmartInfoInsertItem>;

  original_item:SmartInfoInsertItem[] = [];
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
    console.log('헤비 3 : ', this.item);
  }

  async get(id){
    const res = await this.connect.run('/device/machine/mo/list', {machinery_id: id});
    if(res.rsCode === 0 ) {
      this.res = {
        ...this.res,
        ...res
      };

      this.original_item = JSON.parse(JSON.stringify(this.res?.rsMap));
    }
    else if (res.rsCode === 1008) {
      this.res = null;
      this.original_item = [];
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
      this.original_item = [];
    }
  }

  async select(){
    const alert = await this.alert.present({
      message: '저장 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            let updateItems = [];
            let insert_promise = null;
            let update_promise = null;
            console.log(this.original_item);
            this.original_item?.map((item,i) => {
              if(item.serial_use_state != this.res?.rsMap[i].serial_use_state) updateItems.push(this.res?.rsMap[i]);
            });

            if(!this.insert_list.length && !updateItems.length) this._modal.dismiss();
            else {
              if(this.insert_list.length){
                // 예외처리 후 하나씩 리스트에 추가해준다. - 모든 api가 호출될때까지 기다린다
                insert_promise = await Promise.all(this.insert_list.map((item) => { return this.SmartSaveMethod(item, 'insert')}));
              }

              if(updateItems.length){
                update_promise = await Promise.all(updateItems.map((item) => { return this.SmartSaveMethod(item, 'update')}));
              }
              const all_promise = Promise.all([
                insert_promise,
                update_promise
              ]);
              all_promise.then(() => {
                this._modal.dismiss(true);
              });
            }

            this._modal.dismiss({item: this.item, type: 'insert'});
          }
        }
      ]
    });
  }

  /**
   * @function openModal_SerialMobile(): 등록을 가져오는 모달(앱일경우에만 사용)
   */
   public async openModal_SerialMobile() {
     if(!this.item.machinery_id) return this.toast.present({ message: '건설기계를 먼저 선택해주세요.', color: 'warning' });
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
        // assign_user_id: this.item.assign_user_id,
        // assign_user_name: this.item.assign_user_name,
        serial_id: selectedItem.serial_id,
        serial_no: selectedItem.serial_no,
        ctgo_machine_serial_id: selectedItem.ctgo_machine_serial_id,
        ctgo_machine_serial_name: selectedItem.ctgo_machine_serial_name,
        serial_use_state: 0,
        serial_type: selectedItem.serial_type,
        machinery_id: this.item.machinery_id
      }

      this.insert_list.push(addItem);
    }
  }

  deleteItem(index){
    this.insert_list.splice(index,1);
  }

  async changeMachine(ev){
    console.log(ev);
    if(ev) await this.get(ev);
  }

  /**
   * @function SeariaSaveMethod(): Promise가 적용된 insert/update api 호출메서드 입니다.
   * @param item - insert/update 아이템
   * @param type - 메서드 타입('insert' | 'update')
   * @returns resolve(true)
   */
   async SmartSaveMethod(item, type: 'insert' | 'update'){
    return new Promise(async(resolve, reject) => {
      const res = await this.connect.run('/device/'+type, item);
      if (res.rsCode === 0) {
        resolve(true);
      } else {
        this.toast.present({ color: 'warning', message: res.rsMsg });
        resolve(true);
      }
    });
  }
}
