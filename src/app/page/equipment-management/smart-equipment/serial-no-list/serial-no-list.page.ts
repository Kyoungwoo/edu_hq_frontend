import { LoadingService } from './../../../../basic/service/ionic/loading.service';
import { async } from '@angular/core/testing';
import { AlertService } from './../../../../basic/service/ionic/alert.service';
import { UserService } from './../../../../basic/service/core/user.service';
import { DateService } from './../../../../basic/service/util/date.service';
import { ConnectService, ConnectResult } from './../../../../basic/service/core/connect.service';
import { ToastService } from './../../../../basic/service/ionic/toast.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

class SearialInfo {
  create_date:string;
  ctgo_machine_serial_id:number;
  ctgo_machine_serial_name:string;
  master_company_id:number;
  master_company_name:string;
  project_id:number;
  serial_bicon:string;
  serial_id:number;
  serial_nfc:string;
  serial_no:string;
  serial_type:string;
  serial_use_state:number;
  serial_value:string;
  update_date:string;
  assign_data:any;
  user_id:number;
  index:number;
  row_count:number;
}

class SearialInfoInsertItem {
  ctgo_machine_serial_id: number = 0;
  master_company_id: number = 0;
  project_id: number = 0;
  serial_bicon: string = '';
  serial_nfc: string = '';
  serial_use_state: number = 0;
  serial_value: string = '';
  serial_id:number = 0;
}

class SearialCtgo {
  serial_type: string;
  ctgo_machine_serial_name: string;
  ctgo_machine_serial_id: number;
}

@Component({
  selector: 'app-serial-no-list',
  templateUrl: './serial-no-list.page.html',
  styleUrls: ['./serial-no-list.page.scss'],
})
export class SerialNoListPage implements OnInit {
  /** @param serial_type - 시리얼 타입입니다. ('개인' | '중장비' | '위험지역') */
  serial_type: '개인' | '중장비' | '위험지역' = '개인';

  /** @param update_state - 현재 업데이트중인지 여부 */
  update_state = false;

  /** @param method_type - serial_type에따라 메서드가 변경됨 */
  method_type = '';

  form = {
    ctgo_machine_serial_id: 0,
    company_id: (this.user.userData.user_type == 'LH' || this.user.userData.user_type == 'SUPER') ? 0 : this.user.userData.belong_data.company_id,
    project_id: this.user.userData.belong_data.project_id,
    search_text: ''
  };

  /** @param res_original - 원본 데이터(비교용) */
  res_original:SearialInfo[] = [];

  /** @param res - 서버에서 받아온 시리얼 NO 리스트 */
  res:ConnectResult<SearialInfo>;

  /** @param res_insert - 추가할 리스트 */
  res_insert:SearialInfoInsertItem[] = [];

  /** @param searial_ctgo_list - 시리얼 타입별 장비구분 카테고리 */
  searial_ctgo_list:SearialCtgo[] = [];

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
    await this.getSearialCtgo();
    await this.getList();
  }

  ChangeSearialType(ev){
    console.log('ChangeSearialType - ', ev);
    this.get();
  }
  
  /**
   * @function getList(): 중장비 시리얼 No 목록 가져오기
   */
   async getList() {
    let method = await this.TransMethodType();
    const res = await this.connect.run(method, this.form,{parse: ['user_data']});
    if(res.rsCode === 0 ) {
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
    this.resetState();
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
        method = '/serial/user/list';
        break;
      case '중장비':
        method = '/serial/machine/list';
        break;
      case '위험지역':
        method = '/serial/risk/list';
        break;
    }
    return method;
  }

  /**
   * @function getSearialCtgo(): 시리얼 No 장비구분 목록 가져오기
   */
   async getSearialCtgo() {
    const res = await this.connect.run('/serial/ctgo/list', { serial_type: this.serial_type });
    if(res.rsCode === 0 ) {
      this.searial_ctgo_list = res.rsMap;
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
     this.res_insert.push({
      ctgo_machine_serial_id: this.form.ctgo_machine_serial_id,
      master_company_id: this.form.company_id,
      project_id: this.form.project_id,
      serial_bicon: '',
      serial_nfc: '',
      serial_use_state: 0,
      serial_value: '',
      serial_id: 0
     });
   }

  /**
   * @function SearialDelete(): 선택목록 삭제하기 메서드
   */
  async SearialDelete() {
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
   * @function SearialSave(): "저장" 버튼을 클릭하면 실행되는 메서드
   */
   async SearialSave() {
    const alert = await this.alert.present({
      message: '저장 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            let case_1 = false; // 원청사를 하나라도 선택 안했을때
            let case_2 = false; // 장비구분을 하나라도 선택 안했을때

            // 추가한 리스트 인서트
            let loadingCus = await this.loading.present();
            if(this.res_insert.length){
              this.res_insert.map((item, index) => {
                if(!item.master_company_id) case_1 = true;
                if(!item.ctgo_machine_serial_id) case_2 = true;
              });

              if(case_1) {
                await loadingCus.dismiss();
                return this.toast.present({ color: 'warning', message: '원청사를 선택해주세요.' });
              }
              if(case_2) {
                await loadingCus.dismiss();
                return this.toast.present({ color: 'warning', message: '장비구분을 선택해주세요.' });
              }
              console.log(this.res_insert);
              // 예외처리 후 하나씩 리스트에 추가해준다. - 모든 api가 호출될때까지 기다린다
              const insert_promise = Promise.all(this.res_insert.map(async(item) => { return await this.SearialSaveMethod(item, 'insert')}));
              
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
                  this.res.rsMap[i].serial_bicon != this.res_original[i].serial_bicon ||
                  this.res.rsMap[i].serial_nfc != this.res_original[i].serial_nfc ||
                  this.res.rsMap[i].serial_value != this.res_original[i].serial_value ||
                  this.res.rsMap[i].serial_use_state != this.res_original[i].serial_use_state
                  ) changeed_itemIndex.push(this.res.rsMap[i]);
              }
            }

            // 한개라도 바뀐 아이템이 있으면 수정 실행
            if(changeed_itemIndex.length){
              // 수정된 아이템들 업데이트하기 - 모든 api를 호출할때까지 기다린다
              const update_promise = Promise.all(changeed_itemIndex.map(async(item) => { return await this.SearialSaveMethod(item, 'update')}));
              
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
  SearialSaveMethod(item, type: 'insert' | 'update'){
    return new Promise(async(resolve, reject) => {
      const res = await this.connect.run('/serial/'+type, item);
      if (res.rsCode === 0) {
  
      } else {
        this.toast.present({ color: 'warning', message: res.rsMsg });
      }
      resolve(true);
    });
  }
}
