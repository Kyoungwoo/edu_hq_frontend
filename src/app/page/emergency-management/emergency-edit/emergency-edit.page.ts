import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  ConnectResult,
  ConnectService,
} from 'src/app/basic/service/core/connect.service';
import { FileService, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { EmergencyListItem } from '../emergency-list/emergency-list.page';
// import { SearchAttendanceComponent } from 'src/app/component/modal/search-attendance/search-attendance.component';
// import { QrEducationInPage } from '../../../safety-education/educatiion-status/qr-education-in/qr-education-in.page';
// import { AlertService } from 'src/app/basic/service/ionic/alert.service';

export class EmergencyDetailItem {
  user_name: string;
  company_name: string;
  type: string;
  message: string;
  create_date: string;
  project_name: string;
  danger_alarm_id: number;
  occured_place: string;
  file_data: string;
  status: string;

  hq_regional_name: string;
  district_name: string;
}

@Component({
  selector: 'app-emergency-edit',
  templateUrl: './emergency-edit.page.html',
  styleUrls: ['./emergency-edit.page.scss'],
})
export class EmergencyEditPage implements OnInit {
  @Input() item: EmergencyListItem;

  constructor(
    private _modal: ModalController,
    private connect: ConnectService,
    private toast: ToastService,
    private user: UserService,
    private file: FileService
  ) {}

  ngOnInit() {
    this.get();
  }

  res: ConnectResult<EmergencyDetailItem>;
  form: EmergencyDetailItem = {
    user_name: '',
    company_name: '',
    type: '',
    message: '',
    create_date: '',
    project_name: '',
    danger_alarm_id: 0,
    occured_place: '',
    file_data: '',
    status: '',
    hq_regional_name: '',
    district_name: '',
  };
  file_data: FutItem[] = [];

  async get() {
    const url = '/emergency/danger_alarm_info_detail/get';
    this.res = await this.connect.run(
      url,
      {
        danger_alarm_id: this.item.danger_alarm_id,
        hq_regional_id: this.item.hq_regional_id,
        district_id: this.item.district_id,
      },
      { loading: true }
    );
    if (this.res.rsCode === 0) {
      this.res.rsObj.hq_regional_name = this.item.hq_regional_name;
      this.res.rsObj.district_name = this.item.district_name;
      this.form = this.res.rsObj;
      this.file_data = JSON.parse(this.res?.rsObj.file_data);
    } else {
      this.toast.present({ message: this.res.rsMsg, color: 'warning' });
    }
  }

  // async eduAdd() {
  //   const modal = await this._modal.create({
  //     component:SearchAttendanceComponent,
  //     componentProps:{
  //       // project_id: this.user.userData.belong_data.project_id,
  //       // company_id: this.user.userData.belong_data.company_id,
  //       // educationType: false,
  //       // value: this.user_id,
  //       // title: '근로자'
  //     }
  //   });
  //   modal.present();
  //   // const { data } = await modal.onDidDismiss();
  //   // if(data) {
  //   //   this.user_id = [];
  //   //   data.forEach(item => {
  //   //     if(!this.user_id.includes(item.user_id)) this.user_id.push(item.user_id)
  //   //   });
  //   //   const res = await this.connect.run('/education/attendant/insert',{
  //   //     attendant_user_ids:this.user_id,
  //   //     education_safe_id:this.item.education_safe_id
  //   //   });
  //   //   if(res.rsCode === 0) {
  //   //     this.toast.present({message:'선택하신 인원이 출석되었습니다.',color:'primary'});
  //   //     this.eduGetList();
  //   //   } else {
  //   //     this.toast.present({message:res.rsMsg,color:'warning'});
  //   //   }
  //   //}
  // }

  // async qrAdd() {
  //   const modal = await this._modal.create({
  //     component:QrEducationInPage,
  //     componentProps: {
  //       // item:this.form
  //     }
  //   });
  //   modal.present();
  //   const { data } = await modal.onDidDismiss();
  //   if(data) {
  //     // this.eduGetList();
  //   }
  // }

  // async eduGetList() {
  //   this.res = await this.connect.run('/education/attendant/list',{
  //     education_safe_id:this.item.education_safe_id,
  //     search_text:this.attentForm.search_text
  //   });
  //   if(this.res.rsCode === 0) {
  //     this.user_id = [];
  //     this.res?.rsMap.map((data) => {
  //       this.user_id.push(data.user_id);
  //     });
  //     this.eduUpdate = true;
  //     console.log("this.eduUpdate - ",this.eduUpdate);
  //   }
  // }

  /**
   * 미결함으로 이동
   */
  //  async target() {
  //   const modal = await this._modal.create({
  //     component: EmergencyTargetPage,
  //   });
  //   modal.present();
  // }

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
