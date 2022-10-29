import { PushService } from './../../../../service/push.service';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { SideMenuUserComponent } from 'src/app/component/side-menu/side-menu-user/side-menu-user.component';
import { GeolocationService } from 'src/app/service/geolocation.service';

@Component({
  selector: 'app-main-user-master',
  templateUrl: './main-user-master.page.html',
  styleUrls: ['./main-user-master.page.scss'],
})
export class MainUserMasterPage implements OnInit, OnDestroy {

  form = {
    project_id: this.user.userData.belong_data.project_id,
    master_company_id: this.user.userData.belong_data.master_company_id,
    company_id: this.user.userData.belong_data.company_id,
    ctgo_job_position_name: '',
    contract_end_date: '-', // 준공일
    contract_start_date: '-', // 착공일
    admin_count: 0, // lh 가입대기
    worker_count: 0, // 감리 가입대기
    alarm_count: 0, // 안읽은 알림
    approval_count: 0, // 안읽은 미결함
    notice_count: 0, // 안읽은 공지사항
    safetymeeting_count: 0, // 안읽은 회의혹
    // msds_count: 0, // 안읽은 MSDS
  }

  Top_Today = {
    month: '',
    day: '',
    week: ''
  }
  
  notify_list = []; // 알림

  event = {
    getNotify: null
  }

  constructor(
    private modal: ModalController,
    private nav: NavService,
    private alert: AlertService,
    private connect: ConnectService,
    public user: UserService,
    public date: DateService,
    private push: PushService,
    private gps: GeolocationService
  ) { }

  ngOnInit() {
    this.dayTrans();
    this.getBoard();
    this.locationUpdate();
  }

  ngOnDestroy() {
    window.removeEventListener('getNotify', this.event.getNotify);
  }

  locationTimeout = null;
  locationUpdate() {
    // this.gps.stopLocationUpdates();
    /** 버그는 안나는데, 혹시몰라서 */
    this.locationTimeout = setTimeout(() => {
      this.gps.startLocationUpdates();
    }, 3000);

    // console.log("BackgroundGeolocation - ",BackgroundGeolocation);
    // this.testGeolo();
  }

  // testGeolo(){
  //   let last_location;
  //   BackgroundGeolocation.addWatcher(
  //       {
  //         stale: true
  //       },
  //       (location,error) => {
  //         console.log("last_location - ", location);
  //         // last_location = location || undefined;

  //         if (error) {
  //           if (error.code === "NOT_AUTHORIZED") {
  //               if (window.confirm(
  //                   "This app needs your location, " +
  //                   "but does not have permission.\n\n" +
  //                   "Open settings now?"
  //               )) {
  //                   // It can be useful to direct the user to their device's
  //                   // settings when location permissions have been denied. The
  //                   // plugin provides the 'openSettings' method to do exactly
  //                   // this.
  //                   BackgroundGeolocation.openSettings();
  //               }
  //           }
  //           return console.error(error);
  //         }
  //         this.GPS_CALL(location);
  //         // return console.log(location);
  //       }
  //   );
  // }

  // async GPS_CALL(data = null){
  //   console.log('location - ', data);
  //   if(data){
  //     // console.log('location 2 - ', data);
  //     const res = await this.connect.run('/work_project/gps/call', {latitude: data.longitude, longitude: data.latitude}, {});
  //     switch (res.rsCode) {
  //       case 0:
  //         console.log('location 3 - ', res);
  //         break;
  //       default:
  //         console.log('location 4 - ', data);
  //         break;
  //     }
  //   }
  // }

  /**
   * @function dayTrans(): 오늘 날짜와 요일 가져오기
   */
  async dayTrans(){
    let Todate = new Date();
    this.Top_Today.week = this.date.day(Todate);
    this.Top_Today.month = (Todate.getMonth() + 1) < 10 ? '0'+(Todate.getMonth() + 1) : String(Todate.getMonth() + 1);
    this.Top_Today.day = Todate.getDate() < 10 ? '0'+Todate.getDate() : String(Todate.getDate());
  }

  /**
   * @function getBoard(): 게시판 가져오기
   */
   async getBoard(){
    await this.getNotify();
    this.event.getNotify = this.getNotify.bind(this);
    window.addEventListener('getNotify', this.event.getNotify);

    this.user.userData.belong_data.project_id = this.form.project_id;
  }

  /**
   * @function getNotify(): 알림 가져오기
   */
   async getNotify() {
    const res = await this.connect.run('/main/board/notify', this.form, {});
    switch (res.rsCode) {
      case 0:
        this.notify_list = {
          ...this.notify_list,
          ...res.rsMap
        };
        this.form.alarm_count = res.rsObj.read_count;
        break;
      default:
        this.notify_list = [];
        this.form.alarm_count = 0;
        // this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }

  async navMypage() {
    this.nav.navigateForward('/my-page');
  }

  
  async openMenu() {
    const modal = await this.modal.create({
      component: SideMenuUserComponent
    });
    modal.present();
  }

  router(title: string) {
    switch (title) {
      case '미결함':
        this.nav.navigateForward('/confirm-pending-list');
        break;
      case '통합관제':
        this.nav.navigateForward('/monitor');
        break;
      case '나의출입현황':
        this.nav.navigateForward('/my-status-list');
        break;
      case '위험성평가':
        this.nav.navigateForward('/risk-list');
        break;
      case '알림함':
        this.nav.navigateForward('/notify-list');
        break;
      case '':
        this.alert.present({
          header: '준비중',
          message: '해당 기능은 아직 준비중인 기능입니다.'
        });
        break;
    }
  }
}