import { QrService } from 'src/app/basic/service/util/qr.service';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { SideMenuUserComponent } from 'src/app/component/side-menu/side-menu-user/side-menu-user.component';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.page.html',
  styleUrls: ['./main-user.page.scss'],
})
export class MainUserPage implements OnInit, OnDestroy {

  segment:string = '1';
  
  form = {
    project_id: this.user.userData.belong_data.project_id,
    master_company_id: this.user.userData.user_type === 'SUPER' ? this.user.userData.belong_data.master_company_id : 0,
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

  notice_list = []; // 공지사항
  safetymeeting_list = []; // 회의록
  msds_list = []; // 회의록
  notify_list = []; // 알림

  menu: number = 1;

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
    private qr: QrService
  ) { }

  ngOnInit() {
    this.dayTrans();
    this.getBoard();
  }

  ngOnDestroy() {
    window.removeEventListener('getNotify', this.event.getNotify);
  }

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
    await this.getNotice();
    await this.getSafrtyMeeting();
    await this.getMsds();
    await this.getNotify();
    this.event.getNotify = this.getNotify.bind(this);
    window.addEventListener('getNotify', this.event.getNotify);
  }

  /**
   * @function getNotice(): 공지사항 가져오기
   */
   async getNotice() {
    const res = await this.connect.run('/main/board/notice', this.form, {});
    switch (res.rsCode) {
      case 0:
        this.notice_list = res.rsMap;
        this.form.notice_count = res.rsObj.read_count;
        break;
      default:
        this.notice_list = [];
        this.form.notice_count = 0;
        // this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }
  /**
   * @function getSafrtyMeeting(): 회의록 가져오기
   */
   async getSafrtyMeeting() {
    const res = await this.connect.run('/main/board/safetymeeting', this.form, {});
    switch (res.rsCode) {
      case 0:
        this.safetymeeting_list = res.rsMap;
        this.form.safetymeeting_count = res.rsObj.read_count;
        break;
      default:
        this.safetymeeting_list = [];
        this.form.safetymeeting_count = 0;
        // this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }
  /**
   * @function getMsds(): MSDS 가져오기
   */
   async getMsds() {
    const res = await this.connect.run('/main/board/msds', this.form, {});
    switch (res.rsCode) {
      case 0:
        this.msds_list = res.rsMap;
        // this.form.msds_count = res.rsObj.read_count;
        break;
      default:
        this.msds_list = [];
        this.form.notice_count = 0;
        // this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
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
    this.nav.navigateForward('/my-page-type');
  }

  async openMenu() {
    const modal = await this.modal.create({
      component: SideMenuUserComponent
    });
    modal.present();
  }

  /** 
   * 하단 공지사항 리스트의 변화가 생기면서 위에 버튼이 클릭되는 현상!! 이 발생해서 딜레이를 줘야 한다.
   */
  routerTimeout = null;
  routerPrevent = false;
  segmentChange() {
    clearTimeout(this.routerTimeout);
    this.routerTimeout = setTimeout(() => {
      this.routerPrevent = false;
    }, 100);
    this.routerPrevent = true;
  }
  router(title: string) {
    if(this.routerPrevent) return;
    
    switch (title) {
      case '미결함':
        this.nav.navigateForward('/confirm-pending-list');
        break;
      case '통합관제':
        this.nav.navigateForward('/monitor');
        break;
      case '회의록':
        this.nav.navigateForward('/minutes-list');
        break;
      case '위험성평가':
        this.nav.navigateForward('/risk-list');
        break;
      case '공지사항':
        this.nav.navigateForward('/notice-list');
        break;
      case 'MSDS':
        this.nav.navigateForward('/msds-list');
        break;
      case '회의록':
        this.nav.navigateForward('/minutes-list');
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

  QRscanner(){
    this.qr.open();
  }
}
