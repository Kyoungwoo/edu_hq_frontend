import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { EmergencyEditPage } from '../emergency-edit/emergency-edit.page';
import { EmergencyWarningPage } from '../emergency-warning/emergency-warning.page';
import { EmergencyDetailSearchPage } from '../emergency-detail-search/emergency-detail-search.page';
import {
  ConnectResult,
  ConnectService,
} from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
// import { AlertService } from 'src/app/basic/service/ionic/alert.service';

export class EmergencyListForm {
  project_id: number;
  type: string;
  start_date: string;
  end_date: string;
  status: string;
  limit_no: number;

  hq_regional_id: number;
  district_id: number;
  hq_regional_name: string;
  district_name: string;
}

export class EmergencyListItem {
  project_id: number;
  master_company_id: number;
  type: string;
  message: string;
  create_date: string;
  project_name: string;
  master_company_name: string;
  danger_alarm_id: number;
  status: string;

  hq_regional_name: string;
  district_name: string;
  index: number;
  row_count: number = 0;
  hq_regional_id: number;
  district_id: number;
}

@Component({
  selector: 'app-emergency-list',
  templateUrl: './emergency-list.page.html',
  styleUrls: ['./emergency-list.page.scss'],
})
export class EmergencyListPage implements OnInit {
  form: EmergencyListForm = {
    project_id: this.user.userData.belong_data.project_id,
    type: '전체',
    start_date: this.date.today({ month: -3 }),
    end_date: this.date.today(),
    limit_no: 0,
    status: '전체',
    hq_regional_id: this.user.userData.belong_data.hq_regional_id,
    district_id: 0,
    hq_regional_name: this.user.userData.belong_data.hq_regional_name,
    district_name: '',
  };

  temp = {
    hq_regional_name: this.user.userData.belong_data.hq_regional_name,
    district_name: '',
  };

  res: ConnectResult<EmergencyListItem>;

  constructor(
    private _modal: ModalController,
    private connect: ConnectService,
    private user: UserService,
    private date: DateService,
    private toast: ToastService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getList(0);
  }

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
    const url = '/emergency/conditional_danger_alarm_list/get';
    this.form.limit_no = limit_no;

    this.res = await this.connect.run(url, this.form, { loading: true });

    if (this.res?.rsCode === 0) {
      this.res?.rsMap.map((item, i) => {
        item.hq_regional_name = this.temp.hq_regional_name;
        item.district_name = this.temp.district_name;
        item.hq_regional_id = this.form.hq_regional_id;
        item.district_id = this.form.district_id;
        item.index = this.res.rsObj.row_count - this.form.limit_no - i;
      });
    } else {
      // this.toast.present({ message: this.res?.rsMsg, color: 'warning' });
    }
  }

  async edit(item: EmergencyListItem) {
    const modal = await this._modal.create({
      component: EmergencyEditPage,
      componentProps: {
        item: item,
      },
    });
    modal.present();
  }
}
