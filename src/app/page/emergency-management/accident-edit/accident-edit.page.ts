import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  ConnectResult,
  ConnectService,
} from 'src/app/basic/service/core/connect.service';
import { FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { AccidentListItem } from '../accident-list/accident-list.page';
// import { SearchAttendanceComponent } from 'src/app/component/modal/search-attendance/search-attendance.component';
// import { QrEducationInPage } from '../../../safety-education/educatiion-status/qr-education-in/qr-education-in.page';
// import { AlertService } from 'src/app/basic/service/ionic/alert.service';

export class AccidentDetailItem {
  damage_harm_count: number;
  damaged_person_note: string;
  human_reason_note: string;
  construction_amount: string;
  user_name: string;
  management_reason_note: string;
  project_name: string;
  file_data: string;
  accident_inspection_id: number;
  bidding_rate: string;
  damaged_person_birth: string;
  project_id: number;
  construction_ctgo: string;
  property_reason_note: string;
  accident_type: string;
  create_user_id: number;
  company_id: number;
  occured_date_formatted: string;
  accident_note: string;
  occured_date: string;
  damage_property: string;
  occured_place: string;
  damaged_person_gender: string;
  construction_start_date: string;
  damage_dead_count: number;
  construction_end_date: string;
  company_name: string;
  damaged_person_organization: string;
  damaged_person_name: string;
  progress_rate: string;

  occured_date_only: string;
  occured_date_time: string;
  management_reason_note_list: string[];
  property_reason_note_list: string[];
  human_reason_note_list: string[];
}

@Component({
  selector: 'app-accident-edit',
  templateUrl: './accident-edit.page.html',
  styleUrls: ['./accident-edit.page.scss'],
})
export class AccidentEditPage implements OnInit {
  @Input() item: AccidentListItem;
  editable = {
    add: true,
    company_id: true,
    my_state: true,
  };

  constructor(
    private _modal: ModalController,
    private toast: ToastService,
    private user: UserService,
    private connect: ConnectService
  ) {}

  res: ConnectResult<AccidentDetailItem>;
  form: AccidentDetailItem = {
    damage_harm_count: 0,
    damaged_person_note: '',
    human_reason_note: '',
    construction_amount: '',
    user_name: '',
    management_reason_note: '',
    project_name: '',
    file_data: '',
    accident_inspection_id: 0,
    bidding_rate: '',
    damaged_person_birth: '',
    project_id: 0,
    construction_ctgo: '',
    property_reason_note: '',
    accident_type: '',
    create_user_id: 0,
    company_id: 0,
    occured_date_formatted: '',
    accident_note: '',
    occured_date: '',
    damage_property: '',
    occured_place: '',
    damaged_person_gender: '',
    construction_start_date: '',
    damage_dead_count: 0,
    construction_end_date: '',
    company_name: '',
    damaged_person_organization: '',
    damaged_person_name: '',
    progress_rate: '',
    occured_date_only: '',
    occured_date_time: '',
    management_reason_note_list: [],
    property_reason_note_list: [],
    human_reason_note_list: [],
  };

  file_data: FutItem[];

  ngOnInit() {
    this.get();
  }

  async get() {
    const url = '/emergency/safety_accident_inspection_detail/get';
    this.res = await this.connect.run(
      url,
      {
        accident_inspection_id: this.item.accident_inspection_id,
        hq_regional_id: this.item.hq_regional_id,
        district_id: this.item.district_id,
      },
      { loading: true }
    );

    if (this.res.rsCode === 0) {
      this.form = this.res.rsObj;
      this.form.occured_date_only =
        this.form.occured_date_formatted.split(' ')[0];
      this.form.occured_date_time =
        this.form.occured_date_formatted.split(' ')[1];
      this.form.management_reason_note_list = JSON.parse(
        this.form.management_reason_note
      ).join(' / ');
      this.form.property_reason_note_list = JSON.parse(
        this.form.property_reason_note
      ).join(' / ');
      this.form.human_reason_note_list = JSON.parse(
        this.form.human_reason_note
      ).join(' / ');
      this.file_data = JSON.parse(this.form.file_data);
    } else {
      this.toast.present({ message: this.res.rsMsg, color: 'warning' });
    }
  }
}
