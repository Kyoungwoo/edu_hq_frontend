import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  ConnectResult,
  ConnectService,
} from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';

import { AccidentEditPage } from '../accident-edit/accident-edit.page';
// import { AlertService } from 'src/app/basic/service/ionic/alert.service';

export class AccidentListForm {
  project_id: number;
  accident_type: string;
  occured_range_start_date: string;
  occured_range_end_date: string;
  limit_no: number;
  search_text: string;

  hq_regional_id: number;
  district_id: number;
  hq_regional_name: string;
  district_name: string;
}

export class AccidentListItem {
  accident_inspection_id: number;
  accident_type: string;
  create_user_name: string;
  company_name: string;
  hq_region_name: string;
  region_name: string;
  project_name: string;
  occured_date: string;

  index: number;
  row_count: number = 0;
  hq_regional_name: string;
  district_name: string;
  hq_regional_id: number;
  district_id: number;
}

@Component({
  selector: 'app-accident-list',
  templateUrl: './accident-list.page.html',
  styleUrls: ['./accident-list.page.scss'],
})
export class AccidentListPage implements OnInit {
  constructor(
    private _modal: ModalController,
    private user: UserService,
    private toast: ToastService,
    private date: DateService,
    private connect: ConnectService
  ) {}

  ngOnInit() {
    this.getList(0);
  }

  form: AccidentListForm = {
    project_id: this.user.userData.belong_data.project_id,
    accident_type: '전체',
    occured_range_start_date: this.date.today({ month: -3 }),
    occured_range_end_date: this.date.today(),
    limit_no: 0,
    search_text: '',
    hq_regional_id: this.user.userData.belong_data.hq_regional_id,
    district_id: 0,
    hq_regional_name: this.user.userData.belong_data.hq_regional_name,
    district_name: '',
  };

  temp = {
    hq_regional_name: this.user.userData.belong_data.hq_regional_name,
    district_name: '',
  };

  res: ConnectResult<AccidentListItem>;

  /**
   * 지역본부 이름 조회
   * @param hq_regional_name
   */
  changeGetNameHq(hq_regional_name) {
    this.temp.hq_regional_name = hq_regional_name;
  }

  /**
   * 사업지구 이름 조회
   * @param hq_business_name
   */
  changeGetNameBusiness(district_name) {
    this.temp.district_name = district_name;
  }

  async getList(limit_no: number = this.form.limit_no) {
    this.form.limit_no = limit_no;

    const url = '/emergency/safety_accident_inspection_info_list/get';

    this.res = await this.connect.run(url, this.form, { loading: true });

    if (this.res?.rsCode === 0) {
      this.res?.rsMap.map((item, i) => {
        item.hq_regional_id = this.form.hq_regional_id;
        item.district_id = this.form.district_id;
        item.index = this.res.rsObj.row_count - this.form.limit_no - i;
      });
    } else {
      // this.toast.present({ message: this.res?.rsMsg, color: 'warning' });
    }
  }

  async edit(item: AccidentListItem) {
    const modal = await this._modal.create({
      component: AccidentEditPage,
      componentProps: {
        item: item,
      },
    });
    modal.present();
  }

  /**
   * 위험공증선택시 팝업온오프
   */
  // dismiss() {
  //   this.alert.present({
  //     message: '위험공증명 작업시 스마트안전장비명 사용을 권장합니다.',
  //     buttons: [
  //       { text: '확인', handler: () => {
  //         this._modal.dismiss();
  //       }}
  //     ]
  //   })
  // }
}
