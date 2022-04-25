import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-sub-admin',
  templateUrl: './main-sub-admin.page.html',
  styleUrls: ['./main-sub-admin.page.scss'],
})
export class MainSubAdminPage implements OnInit {
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

  weather: any = {
    weather_speed: "", // 풍속,
    weather_id: "", // 아이디,
    weather_temp: "", // 기온(온도),
    avg_temp: 0,// 어제와 오늘의 온도 평균에서 뺀 기온(온도)
    weather_icon: "", // 아이콘,
    create_date: "",// 날씨를 부른 시간 3시간 기준입니다,
    weather_main: "", // 날씨 설명,
    weather_humidity: "", // 습도,
    weather_rain: "", // 강수량 :"", // 강수량
    weather_snow: "", // 적설량},
    high_weather_temp: "", // 최고 기온(온도),
    low_weather_temp: "" // 최저 기온(온도),
  }
  dust: any = {
    dataTime: "",
    grade_name: "",
    icon_url: "",
    pm10Value: 0,
    pm25Grade: 0
  }
  regional_list = [];  // 지역본부
  business_list = []; // 사업본부

  alarm_list = []; // 알림함
  approval_list = []; // 미결함
  notice_list = []; // 공지사항
  safetymeeting_list = []; // 회의록
  msds_list = []; // 회의록

  education = {
    hire_data: { good: 0, excess: 0, necessary: 0 },
    regular_data: { good: 0, excess: 0, necessary: 0 },
    special_data: { good: 0, excess: 0, necessary: 0 }
  }
  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private alert: AlertService,
    private nav: NavService,
    private promise: PromiseService,
    private toast: ToastService,
    public user: UserService
  ) {
    if(this.user.userData.user_type !== 'COMPANY') {
      this.nav.navigateRoot('/main-admin');
    }
  }

  ngOnInit() {
    this.getEtc();
    this.getBoard();
    this.getDust();
    this.getWeather();


    setInterval(() => {
      this.getDust();
      this.getWeather();
    }, 1800000);

    this.test();
  }

  private async test() {
    if (!environment.test.core.test) return;
    if (!await this.testUserManual()) return;

    /* this.alert.present({
      header: '테스트 완료',
      message: '테스트 완료'
    }); */
  }
  private async testUserManual(): Promise<boolean> {
    if (!environment.test.UserManual.test) return true;
    if (environment.test.UserManual.done) return true;

    const el = this.el.nativeElement;
    await this.promise.wait();

    el.querySelector('[name=menu_button]').dispatchEvent(new Event('click'));
    await this.promise.wait();

    document.querySelector('[name=button_manual-list]').dispatchEvent(new Event('click'));
    return true;
  }

  /**
   * @function getEtc(): 착공일/준공일, 가입대기
   */
  async getEtc() {
    await this.getContractDate();
    await this.getWaiting();
    await this.getJobPosition();
  }

  /**
   * @function getBoard(): 게시판 가져오기
   */
  async getBoard() {
    await this.getAlarm();
    await this.getApproval();
    await this.getNotice();
    await this.getSafrtyMeeting();
    await this.getMsds();
    await this.getEducation();
  }
  /**
   * @function getContractDate(): 현장 착공일/준공일 가져오기
   */
  async getContractDate() {
    const res = await this.connect.run('/category/certify/project/contract/date', this.form, {});
    switch (res.rsCode) {
      case 0:
        this.form = {
          ...this.form,
          ...res.rsObj
        }
        break;
      default:
        //  this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }
  /**
   * @function getWaiting(): 가입대기 가져오기
   */
  async getWaiting() {
    const res = await this.connect.run('/main/etc/waiting_master', this.form, {});
    switch (res.rsCode) {
      case 0:
        this.form = {
          ...this.form,
          ...res.rsObj
        }
        break;
      default:
        // this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }
  /**
   * @function getAlarm(): 알림함 가져오기
   */
  async getAlarm() {
    const res = await this.connect.run('/main/board/notify', this.form, {});
    switch (res.rsCode) {
      case 0:
        this.alarm_list = res.rsMap.length > 4 ? res.rsMap.splice(0, 4) : res.rsMap;
        this.form.alarm_count = res.rsObj.read_count;
        break;
      default:
        this.alarm_list = [];
        this.form.alarm_count = 0;
        // this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }
  /**
   * @function getApproval(): 미결함 가져오기
   */
  async getApproval() {
    const res = await this.connect.run('/main/board/approval', this.form, {});
    switch (res.rsCode) {
      case 0:
        this.approval_list = res.rsMap;
        this.form.approval_count = res.rsObj.read_count;
        break;
      default:
        this.approval_list = [];
        this.form.approval_count = 0;
        // this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }
  /**
   * @function getNotice(): 공지사항 가져오기
   */
  async getNotice() {
    const res = await this.connect.run('/main/board/notice', this.form, {});
    switch (res.rsCode) {
      case 0:
        this.notice_list = res.rsMap;
        this.form.notice_count = res.rsObj?.read_count || 0;
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
        this.form.safetymeeting_count = res.rsObj?.read_count || 0;
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
        // this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }
  /**
   * @function getEducation(): 교육이수현황 가져오기
   */
  async getEducation() {
    const res = await this.connect.run('/main/board/education', this.form, {
      parse: [
        'hire_data', 'regular_data', 'special_data'
      ]
    });
    switch (res.rsCode) {
      case 0:
        this.education = res.rsObj;
        break;
      default:
        // this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }
  /**
   * @function getJobPosition(): 내 직위 가져오기
   */
  async getJobPosition() {
    const res = await this.connect.run('/category/certify/my/jobposition', this.form, {});
    switch (res.rsCode) {
      case 0:
        this.form.ctgo_job_position_name = res.rsObj.ctgo_job_position_name;
        break;
      default:
        // this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }



  async getWeather() {
    //날씨
    const res = await this.connect.run('/weather/get', null, {});
    switch (res.rsCode) {
      case 0:
        this.weather = res.rsObj;
        break;
    }
  }

  async getDust() {
    const res = await this.connect.run('/dust/get', null, {});
    switch (res.rsCode) {
      case 0:
        this.dust = res.rsObj;
        break;
    }
  }
  alram() {
  }
  router(title: string, detail = null) {
    console.log("asdfasdf");
    switch (title) {
      case '':
        this.alert.present({
          message: '해당 기능은 아직 준비중인 기능입니다.',
          header: '준비중',
          // img: 'assets/img/logo.svg'
        });
        break;
      case '미결함':
        this.nav.navigateRoot('/confirm-pending-list');
        break;
      case '알림함':
        this.nav.navigateRoot('/notify-list');
        break;
      case '공지사항':
        if(detail) this.nav.navigateRoot('/notice-list', {state: {notice_id: detail.notice_id}});
        else this.nav.navigateRoot('/notice-list');
        break;
      case '회의록':
        this.nav.navigateRoot('/minutes-list');
        break;
      case '사용자메뉴얼':
        this.nav.navigateRoot('/manual-list');
        break;
      case '시스템이용약관':
        this.nav.navigateRoot('/use-terms');
        break;
      case '개인정보처리방침':
        this.nav.navigateRoot('/privacy');
        break;
      case '교육이력':
        this.nav.navigateRoot('/safety-education-list');
        break;
      case '위험성평가':
        this.nav.navigateRoot('/risk-list');
        break;
      case '마이페이지':
        this.nav.navigateRoot('/my-page');
        break;
      case 'MSDS':
        if(detail) this.nav.navigateRoot('/msds-list', {state: {msds_id: detail.msds_id}});
        else this.nav.navigateRoot('/msds-list');
        break;
      case '교육현황':
        this.nav.navigateRoot('/safety-education-list');
        break;
      case '관리자가입대기':
        this.nav.navigateRoot('/partner-approval-list');
        break;
      case '작업자가입대기':
        this.nav.navigateRoot('/worker-approval-list');
        break;
    }

  }
}
