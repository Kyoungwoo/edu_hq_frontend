import { async } from '@angular/core/testing';
import { DangerQrViewPage } from './../danger-qr-view/danger-qr-view.page';
import { SearchAreaComponent } from 'src/app/component/modal/search-area/search-area.component';
import { LoadingService } from './../../../../basic/service/ionic/loading.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { DangerAreaAddPage } from '../danger-area-add/danger-area-add.page';
import { DangerAreaDetailSearchPage } from '../danger-area-detail-search/danger-area-detail-search.page';

class SmartInfo {
  area_full_name:string;
  area_bottom_id:number;
  area_bottom_name:string;
  area_middle_id:number;
  area_middle_name:string;
  area_risk_id:number;
  area_risk_name:string;
  area_top_id:number;
  area_top_name:string;
  create_date:string;
  create_user_id:number;
  ctgo_area_risk_id:number;
  ctgo_area_risk_name:string;
  ctgo_machine_serial_id:number;
  ctgo_machine_serial_name:string;
  device_id:number;
  master_company_id:number;
  master_company_name:string;
  project_id:number;
  return_date:string;
  return_state:number;
  serial_id:number;
  serial_no:string;
  serial_type:string;
  serial_use_state:number;
  update_date:string;
  update_user_id:number;
  index:number;
  row_count:number;
}

class SmartInfoInsertItem {
  area_full_name:string = '';
  area_top_id: number = 0;
  area_top_name: string = '';
  area_middle_id: number = 0;
  area_middle_name: string = '';
  area_bottom_id: number = 0;
  area_bottom_name: string = '';
  area_risk_id: number = 0;
  area_risk_name: string = '';
  ctgo_area_risk_id: number = 0;
  ctgo_area_risk_name: string = '';
  // assign_user_id: number = 0;
  partner_company_name:string ;
  master_company_name:string;
  // machinery_regist_no:string;
  ctgo_machine_serial_id: number = 0;
  // machinery_id: number = 0;
  serial_id: number = 0;
  serial_use_state: number = 0;
  ctgo_machinery_name: string = '';
  // assign_user_id: number = 0;
  // assign_user_name:string = '';
  serial_no:string = '';
}

class SmartCtgo {
  ctgo_machine_serial_name: string;
  ctgo_machine_serial_id: number;
}

@Component({
  selector: 'app-danger-area-list',
  templateUrl: './danger-area-list.page.html',
  styleUrls: ['./danger-area-list.page.scss'],
})
export class DangerAreaListPage implements OnInit {
  /** @param allState - 원청사와 업체를 전체를 검색할수 있는지 여부 */
  allState:boolean = (this.user.userData.user_type == 'LH' || this.user.userData.user_type == 'SUPER') ? true : false;
  
  /** @param serial_type - 등록 타입입니다. ('개인' | '중장비' | '위험지역') */
  serial_type: '개인' | '중장비' | '위험지역' = '위험지역';

  /** @param update_state - 현재 업데이트중인지 여부 */
  update_state = false;

  /** @param list_state - '전체' or '내 장비' */
  list_state = '전체';

  /** @param update_state - 현재 업데이트중인지 여부 */
  // method_type = '';

  form = {
    ctgo_machine_serial_id: 0,
    company_id: (this.user.userData.user_type == 'LH' || this.user.userData.user_type == 'SUPER') ? 0 : this.user.userData.belong_data.company_id,
    project_id: this.user.userData.belong_data.project_id,
    search_text: '',
    start_date: this.date.today({ year: -3 }),
    end_date: this.date.today()
  };

  /** @param res_original - 원본 데이터(비교용) */
  res_original:SmartInfo[] = [];

  /** @param res - 서버에서 받아온 등록 NO 리스트 */
  res:ConnectResult<SmartInfo>;

  /** @param res_insert - 추가할 리스트 */
  res_insert:SmartInfoInsertItem[] = [];

  /** @param res_my - 서버에서 받아온 나의 등록 NO 리스트 */
  res_my:ConnectResult<SmartInfo>;

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
    setTimeout(() => {
      this.get();
    }, 300);
  }

  async get(){
    await this.getSmartCtgo();
    await this.getList();
  }
  
  /**
   * @function getList(): 중장비 디바이스 목록 가져오기
   */
   async getList() {
    let method = await this.TransMethodType();
    await this.resetState();
    const res = await this.connect.run(method, this.form);
    if(res.rsCode === 0 ) {
      
      this.res = {
        ...this.res,
        ...res
      };
      this.res_original = JSON.parse(JSON.stringify(res.rsMap));
      this.res.rsMap.map((item, i) => {item.index = res.rsObj.row_count -i; });
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
    console.log("update state - ", this.update_state);
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
      let add_item = new SmartInfoInsertItem();
      if(this.user.userData.user_role === 'PARTNER_HEAD' || this.user.userData.user_role === 'PARTNER_GENERAL'){
        add_item.partner_company_name = this.user.userData.belong_data.company_name;
      } else {
        add_item.master_company_name = this.user.userData.belong_data.company_name;
        add_item.partner_company_name = this.user.userData.belong_data.company_name;
      }
      this.res_insert.push(add_item);
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
              if(!item.device_id) insert_item.push(item);
              if(item.device_id) update_item.push(item.device_id);
            });

            // insert item이 있으면 삭제
            if(insert_item.length){
              insert_item.map((item) => {if(this.res_insert.indexOf(item) != -1) this.res_insert.splice(this.res_insert.indexOf(item),1);});
            }

            // update item이 있으면 삭제
            if(update_item.length){
              const res = await this.connect.run('/device/delete', {
                device_ids : update_item
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
            console.log(this.res_insert);
            let case_1 = false; // 장비구분을 하나라도 선택 안했을때
            let case_2 = false; // serial_id를 하나라도 선택 안했을때
            let case_3 = false; // 성명을 하나라도 선택 안했을때

            let insert_promise = null;
            let update_promise = null;

            // 추가한 리스트 인서트
            let loadingCus = await this.loading.present();
            if(this.res_insert.length){
              this.res_insert.map((item, index) => {
                if(!item.ctgo_machine_serial_id) case_1 = true;
                if(!item.serial_id) case_2 = true;
                // if(!item.machinery_id) case_3 = true;
              });

              if(case_1){
                await loadingCus.dismiss();
                return this.toast.present({ color: 'warning', message: '장비구분을 선택해주세요.' });
              }
              if(case_2){
                await loadingCus.dismiss();
                return this.toast.present({ color: 'warning', message: '등록No를 선택해주세요.' });
              }
              // if(case_3){
              //   await loadingCus.dismiss();
              //   return this.toast.present({ color: 'warning', message: '장비구분을 선택해주세요.' });
              // }
              console.log(this.res_insert);
              // 예외처리 후 하나씩 리스트에 추가해준다. - 모든 api가 호출될때까지 기다린다
              insert_promise = await Promise.all(this.res_insert.map((item) => { return this.SmartSaveMethod(item, 'insert')}));
            }

            // 수정된 아이템 찾기
            let changeed_itemIndex = [];
            if(this.res){
              console.log(this.res);
              for(let i = 0; i < this.res.rsMap.length; i++){
                if(
                  this.res.rsMap[i].ctgo_machine_serial_id !== this.res_original[i].ctgo_machine_serial_id ||
                  this.res.rsMap[i].serial_id !== this.res_original[i].serial_id ||
                  this.res.rsMap[i].area_risk_id !== this.res_original[i].area_risk_id ||
                  this.res.rsMap[i].area_top_id !== this.res_original[i].area_top_id ||
                  this.res.rsMap[i].area_middle_id !== this.res_original[i].area_middle_id ||
                  this.res.rsMap[i].area_bottom_id !== this.res_original[i].area_bottom_id ||
                  this.res.rsMap[i].serial_use_state !== this.res_original[i].serial_use_state
                  ) changeed_itemIndex.push(this.res.rsMap[i]);
              }
            }
            
            // 한개라도 바뀐 아이템이 있으면 수정 실행
            if(changeed_itemIndex.length){
              // 수정된 아이템들 업데이트하기 - 모든 api를 호출할때까지 기다린다
              update_promise = await Promise.all(changeed_itemIndex.map((item) => { return this.SmartSaveMethod(item, 'update')}));
            }

            const all_promise = Promise.all([
              insert_promise,
              update_promise
            ]);
            
            await all_promise.then(() => {
              if(changeed_itemIndex.length || this.res_insert.length) this.getList();
              loadingCus.dismiss();
            });
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
  async SmartSaveMethod(item, type: 'insert' | 'update'){
    if(!item.area_top_id) item.area_middle_id = null;
    if(!item.area_middle_id) item.area_middle_id = null;
    if(!item.area_bottom_id) item.area_bottom_id = null;
    if(!item.area_risk_id) item.area_risk_id = null;

    console.log('area item - ', item);
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

  /**
   * @function openDetailSearch(): 상세검색필터 모달
   */
  public async openDetailSearch() {
    const modal = await this.modal.create({
      component: DangerAreaDetailSearchPage,
      componentProps: {
        form: this.form,
        smart_ctgo_list: this.smart_ctgo_list
      }
    })
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data){
      this.form = data.form;
      this.get();
    }
  }

  /**
   * @function edit(): 등록 모달
   */
  async edit() {
    const modal = await this.modal.create({
      component:DangerAreaAddPage,
      componentProps: {
        form: this.form,
        item: new SmartInfoInsertItem(),
        list: this.res_original,
        ctgo: this.smart_ctgo_list,
        serial_type: this.serial_type
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    //this.SmartSaveMethod(<SmartInfo>data.item, data.type);
    if(data) this.getList();
  }

  public async openModal(type:string,index:number) {
    // this.isModalData = true;
    const modal = await this.modal.create({
      component: SearchAreaComponent,
      componentProps: {
        project_id: this.form.project_id,
        selectType: 'manual'
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    console.log("data",data);
    if(data) {
      this.trnasModalInsert(type,index,data);
    }
  }

  async trnasModalInsert(type:string,index:number, data:any){
    // 초기화
    (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_full_name = '';
    (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_top_id = 0;
    (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_top_name = '';
    (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_middle_id = 0;
    (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_middle_name = '';
    (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_bottom_id = 0;
    (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_bottom_name = '';
    (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_risk_id = 0;
    (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_risk_name = '';
    (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).ctgo_area_risk_id = 0;
    (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).ctgo_area_risk_name = '';
    
    if(data.selectType == 'manual'){
      // for(let key in data.areaSelectedItem) if(data.areaSelectedItem[key]) (type == 'update' ? this.res.rsMap[index] : this.res_insert[index])[key] = data.areaSelectedItem[key];
      console.log(this.res.rsMap[index]);
      (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_full_name = data.areaSelectedItem.area_risk_name;
      (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_risk_id = data.areaSelectedItem.area_risk_id;
      // this.res_insert[index].area_full_name = data.areaSelectedItem.area_risk_name;
    } else {
      (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_full_name = '';
      for(let key in data.area1selectedItem) if(data.area1selectedItem[key]) (type == 'update' ? this.res.rsMap[index] : this.res_insert[index])[key] = data.area1selectedItem[key];
      for(let key in data.area2selectedItem) if(data.area2selectedItem[key]) (type == 'update' ? this.res.rsMap[index] : this.res_insert[index])[key] = data.area2selectedItem[key];
      for(let key in data.area3selectedItem) if(data.area3selectedItem[key]) (type == 'update' ? this.res.rsMap[index] : this.res_insert[index])[key] = data.area3selectedItem[key];
      (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_full_name = 
      ((type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_top_name ? 
        (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_top_name : '')+' '+
      ((type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_middle_name ? 
        (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_middle_name : '')+' '+
      ((type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_bottom_name ? 
        (type == 'update' ? this.res.rsMap[index] : this.res_insert[index]).area_bottom_name : '');
    }
  }

  async openModal_QR(item){
    const modal = await this.modal.create({
      component: DangerQrViewPage,
      cssClass: 'danger-qr-view-modal',
      componentProps: {
        item: item
      }
    });
    modal.present();
  }

  /**
   * @function btnPromise(): 권한에 따른 버튼활성화 메서드
   * @param type - 버튼의 type
   * @param user_id - 체크박스가 있는 목록 해당 아이템을 등록한 사람의 user_id
   * @returns true or false
   */
  btnPromise(type, user_id = null){
    let state = false;
    switch(type){
      case 'insert':
        if(this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY') state = true;
        break;
      case 'update':
        if(this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY') state = true;
        break;
      case 'delete':
        if(this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY') state = true;
        break;
      case 'delete_check':
        if(this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY') state = true;
        break;
    }
    return state;
  }
}
