import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.page.html',
  styleUrls: ['./main-admin.page.scss'],
})
export class MainAdminPage implements OnInit {
  form = {
    hq_regional_id: this.user.userData.belong_data.hq_regional_id ? this.user.userData.belong_data.hq_regional_id : 0,
    hq_business_id: this.user.userData.belong_data.hq_business_id ? this.user.userData.belong_data.hq_business_id : 0,
    project_id: this.user.userData.belong_data.project_id,
    master_company_id: this.user.userData.user_type === 'SUPER' ? this.user.userData.belong_data.master_company_id : 0,
    company_id: this.user.userData.belong_data.company_id,
    ctgo_job_position_name: '',
    contract_end_date: '-', // 준공일
    contract_start_date: '-', // 착공일
    lh_count: 0, // lh 가입대기
    super_count: 0, // 감리 가입대기
    alarm_count: 0, // 안읽은 알림
    approval_count: 0, // 안읽은 미결함
    notice_count: 0, // 안읽은 공지사항
    safetymeeting_count: 0, // 안읽은 회의혹
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

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private alert: AlertService,
    private nav: NavService,
    private promise: PromiseService,
    private toast: ToastService,
    public user: UserService
  ) { }

  ngOnInit() {
    if(this.user.userData.user_type === 'LH') this.getCtgo();
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
   * @function getCtgo(): 기본 카테고리 정보들을 가져오는 메서드
   */
  async getCtgo(){
    await this.getRegional();
    await this.getBusiness();
  }

  /**
   * @function getEtc(): 착공일/준공일, 가입대기
   */
   async getEtc(){
    await this.getContractDate();
    await this.getWaiting();
    await this.getJobPosition();
  }

  /**
   * @function getBoard(): 게시판 가져오기
   */
   async getBoard(){
    await this.getAlarm();
    await this.getApproval();
    await this.getNotice();
    await this.getSafrtyMeeting();
  }

  /**
   * @function getRegional(): 지역본부 가져오기
   */
   async getRegional() {
    const res = await this.connect.run('/category/organization/regional/get', null, {});
    switch (res.rsCode) {
      case 0:
        this.regional_list = res.rsMap;
        break;
      default:
        // this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }
  /**
   * @function getBusiness(): 사업본부 가져오기
   */
   async getBusiness() {
    const res = await this.connect.run('/category/organization/business/get', this.form, {});
    switch (res.rsCode) {
      case 0:
        this.business_list = res.rsMap;
        if(!this.form.hq_business_id && res.rsMap.length) this.form.hq_business_id = this.business_list[0].hq_business_id;
        break;
      default:
        // this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
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
    const res = await this.connect.run('/main/etc/waiting_lh', this.form, {});
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
        this.alarm_list = res.rsMap;
        this.form.alarm_count = res.rsObj.read_count;
        break;
      default:
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
        this.form.notice_count = res.rsObj.read_count;
        break;
      default:
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
  router(title: string) {
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
        this.nav.navigateRoot('/notice-list');
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
    }
  }
}
