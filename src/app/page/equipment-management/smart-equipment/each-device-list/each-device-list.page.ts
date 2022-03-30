import { LoadingService } from './../../../../basic/service/ionic/loading.service';
import { AlertService } from './../../../../basic/service/ionic/alert.service';
import { UserService } from './../../../../basic/service/core/user.service';
import { DateService } from './../../../../basic/service/util/date.service';
import { ConnectService, ConnectResult } from './../../../../basic/service/core/connect.service';
import { ToastService } from './../../../../basic/service/ionic/toast.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EachDeviceAddPage } from '../each-device-add/each-device-add.page';
import { EachDeviceDetailSearchPage } from '../each-device-detail-search/each-device-detail-search.page';

class SmartInfo {
  serial_use_state:number;
  partner_company_name:string;
  device_id:number;
  serial_type:string;
  user_name:string;
  ctgo_machine_serial_name:string;
  master_company_name:string;
  update_date:string;
  user_id:number;
  partner_company_id:number;
  serial_id:number;
  master_company_id:number;
  ctgo_machine_serial_id:number;
  return_state:number;
  create_date:string;
  serial_no:string;
  return_date:string;
  index:number;
  row_count:number;
}

class SmartInfoInsertItem {
  // area_bottom_id: number = 0;
  // area_middle_id: number = 0;
  // area_risk_id: number = 0;
  // area_top_id: number = 0;
  // assign_user_id: number = 0;
  ctgo_machine_serial_id: number = 0;
  // machinery_id: number = 0;
  serial_id: number = 0;
  serial_use_state: number = 0;
  user_id: number = 0;
  serial_no:string = '';
}

class SmartCtgo {
  ctgo_machine_serial_name: string;
  ctgo_machine_serial_id: number;
}

@Component({
  selector: 'app-each-device-list',
  templateUrl: './each-device-list.page.html',
  styleUrls: ['./each-device-list.page.scss'],
})
export class EachDeviceListPage implements OnInit {
  /** @param serial_type - 시리얼 타입입니다. ('개인' | '중장비' | '위험지역') */
  serial_type: '개인' | '중장비' | '위험지역' = '개인';

  /** @param update_state - 현재 업데이트중인지 여부 */
  update_state = false;

  /** @param update_state - 현재 업데이트중인지 여부 */
  // method_type = '';

  form = {
    ctgo_machine_serial_id: 0,
    company_id: (this.user.userData.user_type == 'LH' || this.user.userData.user_type == 'SUPER') ? 0 : this.user.userData.belong_data.company_id,
    project_id: this.user.userData.belong_data.project_id,
    search_text: '',
    start_date: this.date.today({ month: -1 }),
    end_date: this.date.today(),
    return_state: '전체'
  };

  /** @param res_original - 원본 데이터(비교용) */
  res_original:SmartInfo[] = [];

  /** @param res - 서버에서 받아온 시리얼 NO 리스트 */
  res:ConnectResult<SmartInfo>;

  /** @param res_insert - 추가할 리스트 */
  res_insert:SmartInfoInsertItem[] = [];

  /** @param searial_ctgo_list - 스마트장비 카테고리 */
  smart_ctgo_list:SmartCtgo[] = [];

  /** @param selectedList - 체크박스로 선택된 목록 */
  selectedList = [];

  constructor(
    private modal: ModalController,
    private toast: ToastService,
    private connect: ConnectService,
    private date: DateService,
    public user: UserService,
    private alert: AlertService,
    private loading: LoadingService
  ) { }


  ngOnInit() {
    this.get();
  }

  async get(){
    await this.getSmartCtgo();
    await this.getList();
    this.update_state = false;
    this.selectedList = [];
  }

  ChangeSearialType(ev){
    console.log('ChangeSearialType - ', ev);
    this.get();
  }
  
  /**
   * @function getList(): 개인 디바이스 목록 가져오기
   */
   async getList() {
    let method = await this.TransMethodType();
    // ,{parse: ['user_data']}
    const res = await this.connect.run(method, this.form);
    if(res.rsCode === 0 ) {
      this.resetState();
      this.res = {
        ...this.res,
        ...res
      };
      this.res_original = JSON.parse(JSON.stringify(res.rsMap));
      this.res.rsMap.map((item, i) => {item.index = res.rsObj.row_count -i;});
    }
    else if (res.rsCode === 1008) {
      this.res = null;
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  /**
   * @function resetState(): 선택리스트, 추가리스트, 업데이트 실행여부 등 스테이터스 초기화
   */
  resetState(){
    this.selectedList = [];
    this.res_insert = [];
    this.update_state = false;
  }

  /**
   * @function TransMethodType(): searial_type에 따라서 메서드 URL을 반환해주는 메서드
   */
  TransMethodType(){
    let method = '';
    switch(this.serial_type){
      case '개인':
        method = '/device/user/list';
        break;
      case '중장비':
        method = '/device/machine/list';
        break;
      case '위험지역':
        method = '/device/risk/list';
        break;
    }
    return method;
  }

  /**
   * @function getSmartCtgo(): 스마트장비 카테고리 목록 가져오기
   */
   async getSmartCtgo() {
    const res = await this.connect.run('/category/serial/machine/get', { serial_type: this.serial_type });
    if(res.rsCode === 0 ) {
      this.smart_ctgo_list = res.rsMap;
      this.form.ctgo_machine_serial_id = 0;
    }
    else if (res.rsCode === 1008) {
      this.res = null;
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  /**
   * @function addButton(): "추가" 버튼 클릭시 목록에 ITEM ROW가 추가됩니다
   */
   addButton(){
     this.res_insert.push(new SmartInfoInsertItem());
   }

  /**
   * @function SmartDelete(): 선택목록 삭제하기 메서드
   */
  async SmartDelete() {
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            let insert_item = [];
            let update_item = [];

            this.selectedList.map((item) => {
              if(!item.serial_id) insert_item.push(item);
              if(item.serial_id) update_item.push(item.serial_id);
            });

            // insert item이 있으면 삭제
            if(insert_item.length){
              insert_item.map((item) => {if(this.res_insert.indexOf(item) != -1) this.res_insert.splice(this.res_insert.indexOf(item),1);});
            }

            // update item이 있으면 삭제
            if(update_item.length){
              const res = await this.connect.run('/serial/delete', {
                serial_ids : update_item
              });
              if (res.rsCode === 0) {
                this.getList();
              } else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
              }
            }
          }
        }
      ]
    });
  }

  /**
   * @function SmartSave(): "저장" 버튼을 클릭하면 실행되는 메서드
   */
   async SmartSave() {
    const alert = await this.alert.present({
      message: '저장 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            let case_1 = false; // 장비구분을 하나라도 선택 안했을때
            let case_2 = false; // serial_id를 하나라도 선택 안했을때
            let case_3 = false; // 성명을 하나라도 선택 안했을때

            // 추가한 리스트 인서트
            let loadingCus = await this.loading.present();
            if(this.res_insert.length){
              this.res_insert.map((item, index) => {
                if(!item.ctgo_machine_serial_id) case_1 = true;
                if(!item.serial_id) case_2 = true;
                if(!item.user_id) case_3 = true;
              });

              if(case_1){
                await loadingCus.dismiss();
                return this.toast.present({ color: 'warning', message: '장비구분을 선택해주세요.' });
              }
              if(case_2){
                await loadingCus.dismiss();
                return this.toast.present({ color: 'warning', message: '시리얼No를 선택해주세요.' });
              }
              if(case_3){
                await loadingCus.dismiss();
                return this.toast.present({ color: 'warning', message: '성명을 선택해주세요.' });
              }
              console.log(this.res_insert);
              // 예외처리 후 하나씩 리스트에 추가해준다. - 모든 api가 호출될때까지 기다린다
              const insert_promise = Promise.all(this.res_insert.map(async(item) => { return await this.SmartSaveMethod(item, 'insert')}));
              
              // 추가할 아이템만 있을경우 실행
              insert_promise.then(() => {if(this.res_insert.length && !this.res) this.getList();});
            }

            // 수정된 아이템 찾기
            let changeed_itemIndex = [];
            if(this.res){
              console.log(this.res);
              for(let i = 0; i < this.res.rsMap.length; i++){
                if(
                  this.res.rsMap[i].master_company_id != this.res_original[i].master_company_id ||
                  this.res.rsMap[i].ctgo_machine_serial_id != this.res_original[i].ctgo_machine_serial_id ||
                  // this.res.rsMap[i].serial_bicon != this.res_original[i].serial_bicon ||
                  // this.res.rsMap[i].serial_nfc != this.res_original[i].serial_nfc ||
                  // this.res.rsMap[i].serial_value != this.res_original[i].serial_value ||
                  this.res.rsMap[i].serial_use_state != this.res_original[i].serial_use_state
                  ) changeed_itemIndex.push(this.res.rsMap[i]);
              }
            }

            // 한개라도 바뀐 아이템이 있으면 수정 실행
            if(changeed_itemIndex.length){
              // 수정된 아이템들 업데이트하기 - 모든 api를 호출할때까지 기다린다
              const update_promise = Promise.all(changeed_itemIndex.map(async(item) => { return await this.SmartSaveMethod(item, 'update')}));
              
              // 모든 api를 호출 후 리스트 다시 갱신
              update_promise.then(() => {this.getList();});
            }
            await loadingCus.dismiss();
          }
        }
      ]
    });
  }

  /**
   * @function SeariaSaveMethod(): Promise가 적용된 insert/update api 호출메서드 입니다.
   * @param item - insert/update 아이템
   * @param type - 메서드 타입('insert' | 'update')
   * @returns resolve(true)
   */
  SmartSaveMethod(item, type: 'insert' | 'update'){
    return new Promise(async(resolve, reject) => {
      const res = await this.connect.run('/device/'+type, item);
      if (res.rsCode === 0) {
  
      } else {
        this.toast.present({ color: 'warning', message: res.rsMsg });
      }
      resolve(true);
    });
  }

  public async openDetailSearch() {
    const modal = await this.modal.create({
      component: EachDeviceDetailSearchPage,

    })
    modal.present();
  }

  async edit() {
    const modal = await this.modal.create({
      component:EachDeviceAddPage,
    });
    modal.present();
  }
}
