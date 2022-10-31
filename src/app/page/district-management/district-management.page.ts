import { LoadingService } from '../../basic/service/ionic/loading.service';
import { async } from '@angular/core/testing';
import { AlertService } from '../../basic/service/ionic/alert.service';
import { UserService } from '../../basic/service/core/user.service';
import { DateService } from '../../basic/service/util/date.service';
import { ConnectService, ConnectResult } from '../../basic/service/core/connect.service';
import { ToastService } from '../../basic/service/ionic/toast.service';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';


class DistrictInfo {
  create_date: string;
  district_code: number;
  district_name: string;
  district_url: string;
  district_use_state: number;
  update_date: string;
  user_id: number;
  index: number;
  row_count: number;
}

class DistrictInfoInsertItem {
  hq_regional_id: number = 0;
  district_code: number = 0;
  district_name: string = '';
  district_url: string = '';
  district_use_state: number = 0;
}

export class RegionalItem {
  hq_regional_entire_state: 0 | 1; // 본사권한 = 1
  hq_regional_id: number; // id
  hq_regional_code: string; // 코드
  hq_regional_name: string; // 지역본부명
  hq_regional_use_state: 0 | 1; // 사용 = 1
}

@Component({
  selector: 'app-district-management',
  templateUrl: './district-management.page.html',
  styleUrls: ['./district-management.page.scss'],
})
export class DistrictManagementPage implements OnInit {

  /** @param update_state - 현재 업데이트중인지 여부 */
  update_state = false;

  form = {
    hq_regional_id: 0,
    limit_no: 0,
  };

  /** @param res_original - 원본 데이터(비교용) */
  res_original: DistrictInfo[] = [];

  /** @param res - 서버에서 받아온 등록 NO 리스트 */
  res: ConnectResult<DistrictInfo>;

  /** @param res_insert - 추가할 리스트 */
  res_insert: DistrictInfoInsertItem[] = [];

  /** @param RegionalItemList - 등록 타입별  카테고리 */
  RegionalItemList: RegionalItem[] = [];

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

  async get() {
    await this.getHeadQuarterList();
    await this.getList();
  }

  ChangeSearialType(ev) {
    console.log('ChangeSearialType - ', ev);
    this.get();
  }

  /**
   * @function getList(): 사업지구 목록 가져오기
   */
  async getList(limit_no = this.form.limit_no) {

    //this.form.master_company_id = 0; //this.master_company_id;
    // let method = await this.TransMethodType();
  
    const res = await this.connect.run('/district/list', this.form);
    if (res.rsCode === 0) {
      this.res = {
        ...this.res,
        ...res
      };
      this.res_original = JSON.parse(JSON.stringify(res.rsMap));
      this.res.rsMap.map((item, i) => { item.index = res.rsObj.row_count - i; });
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
  resetState() {
    this.selectedList = [];
    this.res_insert = [];
    this.update_state = false;
  }

  /**
   * @function getHeadQuarterList(): 본부 목록 가져오기
   */
  async getHeadQuarterList() {
    const res = await this.connect.run('/category/organization/regional/get');

    if (res.rsCode === 0) {
      this.RegionalItemList = res.rsMap;
      this.form.hq_regional_id = 0;
    }
    else if (res.rsCode === 1008) {
      this.res = null;
    }
    else {
      ;//this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  /**
   * @function addButton(): "추가" 버튼 클릭시 목록에 ITEM ROW가 추가됩니다
   */
  addButton() {
    // 추가한 리스트 인서트
    // let loadingCus = await this.loading.present();
    if (!this.form.hq_regional_id) {
        // await loadingCus.dismiss();
        return this.toast.present({ color: 'warning', message: '본부를 선택해주세요.' });
      }

    this.res_insert.push({
      hq_regional_id: this.form.hq_regional_id,
      district_code: 0,
      district_name: '',
      district_url: '',
      district_use_state: 0,
    });
  }

  /**
   * @function SearialDelete(): 선택목록 삭제하기 메서드
   */
  async DeleteDistrict() {
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
              if (!item.district_id) insert_item.push(item);
              if (item.district_id) update_item.push(item.district_id);
            });

            // insert item이 있으면 삭제
            if (insert_item.length) {
              insert_item.map((item) => { if (this.res_insert.indexOf(item) != -1) this.res_insert.splice(this.res_insert.indexOf(item), 1); });
            }

            // update item이 있으면 삭제
            if (update_item.length) {
              const res = await this.connect.run('/district/delete', {
                district_ids: update_item
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
   * @function DistrictSave(): "저장" 버튼을 클릭하면 실행되는 메서드
   */
  async DistrictSave() {
    const alert = await this.alert.present({
      message: '저장 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            let case_1 = false; // 본부를 하나라도 선택 안했을때

            let insert_promise = null;
            let update_promise = null;

            // 추가한 리스트 인서트
            let loadingCus = await this.loading.present();
            if (this.res_insert.length) {
              this.res_insert.map((item, index) => {
                if (!this.form.hq_regional_id) case_1 = true;
              });
              if (case_1) {
                await loadingCus.dismiss();
                return this.toast.present({ color: 'warning', message: '본부를 선택해주세요.' });
              }
              console.log(this.res_insert);
              // 예외처리 후 하나씩 리스트에 추가해준다. - 모든 api가 호출될때까지 기다린다
              insert_promise = await Promise.all(this.res_insert.map((item) => { return this.DistrictSaveMethod(item, 'insert') }));

              // 추가할 아이템만 있을경우 실행
              // insert_promise.then(() => {if(this.res_insert.length && !this.res) this.getList();});
            }

            // 수정된 아이템 찾기
            let changeed_itemIndex = [];
            if (this.res) {
              console.log(this.res);
              for (let i = 0; i < this.res.rsMap.length; i++) {
                if (
                  this.res.rsMap[i].district_code != this.res_original[i].district_code ||
                  this.res.rsMap[i].district_name != this.res_original[i].district_name ||
                  this.res.rsMap[i].district_url != this.res_original[i].district_url ||
                  this.res.rsMap[i].district_use_state != this.res_original[i].district_use_state
                ) changeed_itemIndex.push(this.res.rsMap[i]);
              }
            }

            // 한개라도 바뀐 아이템이 있으면 수정 실행
            if (changeed_itemIndex.length) {
              // 수정된 아이템들 업데이트하기 - 모든 api를 호출할때까지 기다린다
              update_promise = await Promise.all(changeed_itemIndex.map((item) => { return this.DistrictSaveMethod(item, 'update') }));

              // 모든 api를 호출 후 리스트 다시 갱신
              // update_promise.then(() => {this.getList();});
            }
            const all_promise = Promise.all([insert_promise, update_promise]);
            await all_promise.then(() => { if (changeed_itemIndex.length || this.res_insert.length) this.getList(); });

            if (!changeed_itemIndex.length && !this.res_insert.length) this.resetState();

            await loadingCus.dismiss();
          }
        }
      ]
    });
  }

  /**
   * @function DistrictSaveMethod(): Promise가 적용된 insert/update api 호출메서드 입니다.
   * @param item - insert/update 아이템
   * @param type - 메서드 타입('insert' | 'update')
   * @returns resolve(true)
   */
  DistrictSaveMethod(item, type: 'insert' | 'update') {
    return new Promise(async (resolve, reject) => {
      const res = await this.connect.run('/district/' + type, item);
      if (res.rsCode === 0) {

      } else {
        this.toast.present({ color: 'warning', message: res.rsMsg });
      }
      resolve(true);
    });
  }

  /**
   * @function btnPromise(): 권한에 따른 버튼활성화 메서드
   * @param type - 버튼의 type
   * @param user_id - 체크박스가 있는 목록 해당 아이템을 등록한 사람의 user_id
   * @returns true or false
   */
  btnPromise(type, user_id = null) {
    let state = false;
    switch (type) {
      case 'insert':
        if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY') state = true;
        break;
      case 'update':
        if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY') state = true;
        break;
      case 'delete':
        if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY') state = true;
        break;
      case 'delete_check':
        if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY') state = true;
        break;
    }
    return state;
  }
}
