import { ScannerService } from './../../../basic/service/util/scanner.service';
// import { QrService } from 'src/app/basic/service/util/qr.service';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { LogoutService } from 'src/app/service/logout.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';

export interface MenuItem {
  title: string,
  img:string,
  permission?:() => boolean,
  subMenuList: SubMenuItem[]
}
export interface SubMenuItem {
  title: string,
  link?: string,
  toggle?: boolean,
  permission?: () => boolean,
  thirdMenuList?:ThirdMenuItem[],
  params: {[name:string]:any}
}
export interface ThirdMenuItem {
  title: string,
  link: string,
  permission?: () => boolean
}
@Component({
  selector: 'app-side-menu-user',
  templateUrl: './side-menu-user.component.html',
  styleUrls: ['./side-menu-user.component.scss'],
})
export class SideMenuUserComponent implements OnInit {

  language_type:string = '';
  menuSelected:MenuItem = null;

  menuList:MenuItem[] = [
    // { img:'assets/img/menu/member-management.svg', title: '회원 관리', permission: () => {
    //   const { user_type } = this.user.userData;
    //   return user_type !== 'WORKER' 
    // }, subMenuList: [
    //   { title: '안전 마일리지', link: '', params: {}, permission: () => { return true }}
    // ]},
    { img:'assets/img/menu/today-work.svg', title: '오늘의 작업', subMenuList: [
      { title: '나의 출입 현황', link: '/my-status-list', params: {}, permission: () => {
        const { user_role, user_type } = this.user.userData;
        return user_role === 'LH_HEAD' ||  user_type === 'COMPANY' ||  user_type === 'WORKER';
       }},
      { title: 'TBM', link: '', params: {}, permission: () =>  { return true }},
      { title: '점검', link: '', params: {}, permission: () => { return true }},
      { title: '부적합 조치', link: '', params: {}, permission: () => { return true}}
    ]},
    { img:'assets/img/menu/work-plan.svg', title: '작업 계획', permission: () => {
      const { user_type } = this.user.userData;
      return user_type !== 'WORKER' 
    },
    subMenuList: [
      { title: '위험성평가', link: '/risk-list', params: {}, permission: () => { 
        const { user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY';
      }},
      { title: '위험작업허가(PTW)', link: '', params: {}, permission: () => { return true }},
      { title: '회의록', link: '/worker-minutes-list', params: {}, permission: () => { 
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY';
       }}
    ]},
    { img:'assets/img/menu/safety-education.svg', title: '안전 교육', subMenuList: [
      { title: '교육현황', link: '/safety-education-list', params: {}, permission: () => {
        const { user_role, user_type } = this.user.userData;
        return user_role === 'LH_HEAD' || user_type === 'COMPANY';
      }},
      { title: '나의 교육', link: '/my-education-list', params: {}, permission: () => {
        const { user_role, user_type } = this.user.userData;
        return user_type === 'COMPANY' || user_type === 'WORKER';
       }},
      { title: '교육 결과보고', link: '/safety-education-result-list', params: {}, permission: () => { 
        const { user_role, user_type } = this.user.userData;
        return user_role === 'LH_HEAD' || user_type === 'COMPANY';
       }}
    ]},
    { img:'assets/img/menu/conference.svg', title: '안전 회의',
    subMenuList: [
      { title: '회의 현황', link: '/worker-minutes-list', params: {}, permission: () => { 
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY';
       }},
       { title: '나의 회의', link: '/work-my-list', params: {}, permission: () => { 
        const {  user_type } = this.user.userData;
        return user_type !== 'SUPER' 
       }},
       { title: '회의록', link: '/work-write-list', params: {}, permission: () => { 
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
       }}
    ]},
    { img:'assets/img/menu/emergency-management.svg', title: '사고관리', subMenuList: [
      // { title: '아차사고 신고', link: '', params: {}, permission: () => { return true }},
      { title: '비상 알림 관리', link: '', params: {}, permission: () => { return true }}
    ]},
    { img:'assets/img/menu/control-center.svg', title: '통합관제', subMenuList: [
      { title: '지역본부 모니터링', link: '', params: {}, permission: () => { return true }},
      { title: '현장 모니터링', link:'/monitor' , params: {}, permission: () => { 
        const {  user_type, user_role } = this.user.userData;
        return user_type === 'LH' || user_role === 'MASTER_HEAD' || user_role === 'MASTER_GENERAL';
      }}
    ]},
    { img:'assets/img/menu/equipment-management.svg',title: '장비 관리', subMenuList: [
      { title: '개인 디바이스', link: '/each-device-list', params: {}, permission: () => { 
        const { user_role, user_type } = this.user.userData;
        return user_role === 'LH_HEAD' ||  user_type === 'COMPANY' ||  user_type === 'WORKER';
       }},
      { title: '중장비 디바이스', link: '/heavy-device-list', params: {}, permission: () => { 
        const { user_role, user_type } = this.user.userData;
        return user_role === 'LH_HEAD' ||  user_type === 'COMPANY';
       }},
      { title: '장소 디바이스', link: '/danger-area-list', params: {}, permission: () => { 
        const { user_role, user_type } = this.user.userData;
        return user_role === 'LH_HEAD' ||  user_type === 'COMPANY';
      }}
    ]},
    { img:'assets/img/menu/sign.svg', title: '전자 결재', permission: () => {
      const { user_type } = this.user.userData;
      return user_type !== 'WORKER' 
    },
    subMenuList: [
      { title: '기안/임시저장함', link: '/confirm-obtain-list', params: {}, permission: () => { 
        const {  user_type } = this.user.userData;
        return user_type === 'COMPANY';
       }},
      { title: '미결함', link:'/confirm-pending-list', params: {}, permission: () => {
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'SUPER' || user_type === 'COMPANY';
       }},
      { title: '진행/완료/반려', link: '/confirm-progress-list', params: {}, permission: () => { 
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'SUPER' || user_type === 'COMPANY';
      }},
      { title: '참조함', link: '/confirm-cc-list', params: {}, permission: () => {
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'SUPER' || user_type === 'COMPANY';
       }},
      { title: '위임관리', link: '', params: {}, permission: () => { return false }}
    ]},
    { img:'assets/img/menu/board.svg', title: '게시판', subMenuList: [
      { title: '공지사항', link: '/notice-list', params: {}, permission: () => { 
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'WORKER';
       }},
      { title: 'MSDS', link: '/msds-list', params: {}, permission: () => { 
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'WORKER';
       }},
      { title: '회의록', link: '/minutes-list', params: {}, permission: () => { 
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'WORKER';
       }}
    ]},
    { img:'assets/img/menu/notification-box.svg',title: '알림함', subMenuList: [
      { title: '알림함', link: '/notify-list', params: {}, permission: () => {return true;}},
    ]},
    { img:'assets/img/menu/support.svg', title: '고객지원', subMenuList: [
      // { title: '문의하기', link: '', params: {}, permission: () => { return true }},
      { title: '사용자 매뉴얼', link: 'manual-list', params: {}, permission: () => { 
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'WORKER';
       }},
      { title: '시스템 이용 약관', link: 'use-terms', params: {}, permission: () => { 
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'WORKER';
       }},
      { title: '개인정보처리방침', link: 'privacy', params: {}, permission: () => { 
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'WORKER';
       }},
    ]}
  ]

  constructor(
    private alert: AlertService,
    public _modal: ModalController,
    public user: UserService,
    private nav: NavService,
    private connect: ConnectService,
    private scanner: ScannerService,
    private logout: LogoutService,
    public languagePack: LanguagePackService
  ) { 
    this.menuSelected = this.user.userData.user_type === 'WORKER' ? this.menuList[2] : this.menuList[0];
  }

  ngOnInit() {
    this.getMyLanguage();
  }

  menuClose() {
    this._modal.dismiss();
  }
  notReady() {
    this.alert.present({
      // img: 'https://www.devmonster.co.kr/assets/img/logo.svg',
      header: '해당 메뉴는 준비중입니다.'
    });
  }
  QRscanner(){
    this.scanner.init();
    // this.qr.open();
  }

  navMypage() {
    this._modal.dismiss();
    this.nav.navigateForward('/my-page-type');
  }

  router(title: string) {
    switch (title) {
      case '':
        this.alert.present({
      // img: 'https://www.devmonster.co.kr/assets/img/logo.svg',
          header: '해당 메뉴는 준비중입니다.'
        });
        break;
      case '설정':
        this.nav.navigateForward('/setting-menu');
        break;
    }
  }

  /**
   * @function languageChange(): 언어설정을 변경해주는 메서드
   */
  async languageChange(){
    this.alert.present({
      header: 'Language',
      inputs: [
        {type:'radio', value: 'kr', label: '한국어(Korean)', checked: this.language_type === 'kr' ? true : false},
        {type:'radio', value: 'en', label: '영어(English)', checked: this.language_type === 'en' ? true : false},
        {type:'radio', value: 'ch', label: '중국어(Chinese)', checked: this.language_type === 'ch' ? true : false},
        {type:'radio', value: 'vi', label: '베트남(Vietnamese)', checked: this.language_type === 'vi' ? true : false}
      ],
      buttons: [
        {
          text: '확인', 
          handler: async(item) => {
            this.language_type = item;
            const res = await this.connect.run('/main/etc/language/update', {language_type: this.language_type}, {});
            switch (res.rsCode) {
              case 0:
                this.getMyLanguage();
                break;
              default:
                // this.toast.present({ color: 'warning', message: res.rsMsg });
                break;
            }
          }
        }
      ]
    });
  }

  /**
   * @function languageChange(): 언어설정을 가져오는 메서드
   */
  async getMyLanguage(){
    const res = await this.connect.run('/main/etc/language/get');
    switch (res.rsCode) {
      case 0:
        this.language_type = res.rsObj.language_type;
        break;
      default:
        // this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }

  userLogout() {
    this._modal.dismiss();
    this.logout.logout();
  }
}