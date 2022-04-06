import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';

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

  menuSelected:MenuItem = null;

  menuList:MenuItem[] = [
    { img:'assets/img/menu/member-management.svg', title: '회원관리', subMenuList: [
      { title: '안전 마일리지', link: '', params: {}, permission: () => { return true }}
    ]},
    { img:'assets/img/menu/work-plan.svg', title: '작업계획', subMenuList: [
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
    { img:'assets/img/menu/safety-education.svg', title: '안전교육', subMenuList: [
      { title: '교육현황', link: '/safety-education-list', params: {}, permission: () => {
        const { user_role, user_type } = this.user.userData;
        return user_role === 'LH_HEAD' || user_type === 'COMPANY';
      }},
      { title: '나의 교육', link: '/my-education-list', params: {}, permission: () => {
        const { user_role, user_type } = this.user.userData;
        return user_role === 'LH_HEAD' || user_type === 'COMPANY';
       }},
      { title: '교육 결과보고', link: '/safety-education-result-list', params: {}, permission: () => { 
        const { user_role, user_type } = this.user.userData;
        return user_role === 'LH_HEAD' || user_type === 'COMPANY';
       }}
    ]},
    { img:'assets/img/menu/today-work.svg', title: '오늘의 작업', subMenuList: [
      { title: '나의 출입 현황', link: '/my-status-list', params: {}, permission: () => {
        const { user_role, user_type } = this.user.userData;
        return user_role === 'LH_HEAD' ||  user_type === 'COMPANY' ||  user_type === 'WORKER';
       }},
      { title: 'TBM', link: '', params: {}, permission: () =>  { return true }},
      { title: '점검', link: '', params: {}, permission: () => { return true }},
      { title: '부적합 조치', link: '', params: {}, permission: () => { return true}}
    ]},
    { img:'assets/img/menu/emergency-management.svg', title: '비상상황 관리', subMenuList: [
      { title: '아차사고 신고', link: '', params: {}, permission: () => { return true }},
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
      { title: '위험지역 디바이스', link: '/danger-area-list', params: {}, permission: () => { 
        const { user_role, user_type } = this.user.userData;
        return user_role === 'LH_HEAD' ||  user_type === 'COMPANY';
      }}
    ]},
    { img:'assets/img/menu/sign.svg', title: '전자 결재', subMenuList: [
      { title: '기안/임시저장함', link: '/confirm-obtain-list', params: {}, permission: () => { 
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY';
       }},
      { title: '미결함', link:'/confirm-pending-list', params: {}, permission: () => {
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY';
       }},
      { title: '기결함', link: '/confirm-progress-list', params: {}, permission: () => { 
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY';
      }},
      { title: '참조함', link: '/confirm-cc-list', params: {}, permission: () => {
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY';
       }},
      { title: '위임관리', link: '', params: {}, permission: () => { return true }}
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
      { title: '알림함', link: '/notify-list', params: {}, permission: () => { 
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'WORKER';
       }},
    ]},
    { img:'assets/img/menu/support.svg', title: '고객지원', subMenuList: [
      { title: '문의하기', link: '', params: {}, permission: () => { return true }},
      { title: '사용자 메뉴얼', link: 'manual-list', params: {}, permission: () => { 
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
    private user: UserService
  ) { 
    this.menuSelected = this.menuList[0];
  }

  ngOnInit() {}

  menuClose() {
    this._modal.dismiss();
  }
  notReady() {
    this.alert.present({
      img: 'https://www.devmonster.co.kr/assets/img/logo.svg',
      header: '준비중'
    });
  }
}