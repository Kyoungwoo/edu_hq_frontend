import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

export class TodayDeparturePersionItem {
  ctgo_job_position_name_kr: string;
  company_id: number;
  ctgo_safe_job_name_kr: string;
  user_id: number;
  ctgo_job_position_id: number;
  user_name: string;
  company_name: string;
  user_safe_job_id: number;
  ctgo_safe_job_id: number;
}
export class TodayDepartureStatusEditForm {
  area_risk_id?:number = null; // 위험지역ID - 입장유형이 위험지역일 경우에만 입력
  area_top_id?:number = null; // 장소ID_1(TOP) - 입장유형이 위험지역일 경우에만 입력
  area_middle_id?:number = null; // 장소ID_2(MIDDLE) - 입장유형이 위험지역일 경우에만 입력
  area_bottom_id?:number = null; // 장소ID_3(BOTTOM) - 입장유형이 위험지역일 경우에만 입력
  project_id:number = null; // 현장ID
  master_company_id:number = null; // 원청사ID
  serial_type:string = null; // 입장유형 - 게이트/위험지역
  insert_state:'IN'|'OUT' = null; // IN - 입장 / OUT - 퇴장
  inout_datetime:string = null; // 입장시간
  inout_date:string = null; // 입장 시간 - 날짜
  inout_time:string = null; // 입장 시간 - 시간
  user_ids:number[] = []; // 입/퇴장 유저ID
}
@Component({
  selector: 'app-today-departure-status-edit',
  templateUrl: './today-departure-status-edit.page.html',
  styleUrls: ['./today-departure-status-edit.page.scss'],
})
export class TodayDepartureStatusEditPage implements OnInit {

  @Input() type:'입장'|'퇴장';
  @Input() project_id:number;
  @Input() company_id:number;
  @Input() inout_date:string;

  form = {
    project_id: 0,
    company_id: 0,
    inside_date: '',
    user_type: 'WORKER',
    search_text: ''
  }

  res:ConnectResult<TodayDeparturePersionItem>;
  selectedList:TodayDeparturePersionItem[] = [];

  submitForm = new TodayDepartureStatusEditForm();

  constructor(
    private _modal: ModalController,
    private connect: ConnectService,
    private toast: ToastService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    /** form 초기값 입력
     * 이 부분에서 초기값을 제대로 입력 안해서, 오류가 나는 경우가 많습니다. 유의해주세요.
     */
    this.form.project_id = this.project_id;
    this.form.company_id = this.company_id;
    this.form.inside_date = this.inout_date;

    this.submitForm.project_id = this.project_id;
    this.submitForm.master_company_id = this.company_id;
    this.submitForm.serial_type = '게이트';
    this.submitForm.insert_state = this.type === '입장' ? 'IN' : 'OUT';
    this.submitForm.inout_date = this.inout_date;
    this.submitForm.inout_time = '07:30';
    /** inout_date 와 inout_time을 합쳐서 하나의 datetime 형태로 만들어야 할 때는
     * get, set을 이용하면 편하지만, 위의 형태로 사용하셔도 무방합니다.
     */

    /** 리스트 호출 */
    this.get();
  }

  async get() {
    let url;
    if(this.type === '입장') {
      url = '/category/certify/project/notin/user/get';
    } /** if else 정렬 이렇게 하세요. */
    else {
      url = '/category/certify/project/in/user/get';
    }

    /** api 호출 */
    this.res = await this.connect.run(url, this.form);
    if(this.res.rsCode) {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }

  select(item:TodayDeparturePersionItem) {
    /** 이 코드는 밖에서 select list를 들고와야 할 경우는 틀린 코드입니다.
     * 이유는 깊은 비교 상에서 다르기 떄문입니다. 이점 유의하시기 바랍니다.
     * 깊은 비교로는 다르나, 얕은 비교 상에서 같은 아이템을 찾아야 할 경우는
     * const index = this.selectedList.findIndex(selectedItem => this.file.shallowEqual(selectedItem, item))
     * 이런 식으로 찾아야 합니다.
     * 단, 얕은 비교의 경우, 서버에서 받아온 데이터를 비교해야하는 경우가 대부분이고, 이 경우 아이디를 제외한 데이터는 변동될 수 있습니다.
     * 때문에 위의 방식을 쓰면 안되고,
     * const index = this.selectedList.findIndex(selectedItem => selectedItem.user_id === item.user_id)
     * 로 비교하는 것이 맞습니다. */
    const index = this.selectedList.indexOf(item);
    if(index > -1) {
      this.selectedList.splice(index, 1);
    } /** if else 정렬 이렇게 하세요. */
    else {
      this.selectedList.push(item);
    }
  }

  submit() {
    /** form 입력 */
    this.submitForm.inout_datetime = `${this.submitForm.inout_date} ${this.submitForm.inout_time}`;
    this.submitForm.user_ids = this.selectedList.map(item => item.user_id);

    /** form 검증 */
    if(!this.submitForm.user_ids.length) return this.toast.present({ color: 'warning', message: `${this.type} 할 유저를 선택해주세요.` });


    let message:string = '';
    if(this.type === '입장') {
      message = '선택한 인원을 입장 등록 처리하시겠습니까?';
    }
    else {
      message = '선택한 인원이 아직 현장에 남아 있을 수 있습니다. 퇴장 등록 처리 하시겠습니까?';
    }

    this.alert.present({
      message, /** message: message 를 간축하여 쓴 형태 입니다. */
      buttons: [{
        text: '아니오'
      }, {
        text: '예',
        handler: () => {
          /** handler 처럼 function을 값으로 가지는 변수들을
           * handler: this.submitHandler.bind(this)
           * 형태로도 쓸 수 있습니다. 다만, 이 부분은 알려드린 부분이 아니라서, 여기서는 이렇게 사용하지는 않았습니다.
           */
          this.submitHandler();
        }
      }]
    });
  }
  async submitHandler() {
    /** api 호출 */
    const res = await this.connect.run('/work_project/nfc_beacon/manual/insups', this.submitForm);
    if(res.rsCode === 0) {
      this._modal.dismiss({ update: true });
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }
}