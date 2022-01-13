import { Component, OnInit } from '@angular/core';

interface MenuItem {
  title: string,
  src:string,
  subMenuList: SubMenuItem[]
}
interface SubMenuItem {
  title: string,
  link: string,
  params: {[name:string]:any},
  permission: () => boolean
}
@Component({
  selector: 'app-side-menu-user',
  templateUrl: './side-menu-user.component.html',
  styleUrls: ['./side-menu-user.component.scss'],
})
export class SideMenuUserComponent implements OnInit {

  menuSelected:MenuItem = null;

  menuList:MenuItem[] = [
    { src:'assets/img/menu/today-work.svg', title: '오늘의 작업', subMenuList: [
      { title: '출역', link: '', params: {}, permission: () => { return true }},
      { title: 'TBM', link: '', params: {}, permission: () => { return true }},
      { title: '점검', link: '', params: {}, permission: () => { return true }},
      { title: '부적합', link: '', params: {}, permission: () => { return true }}
    ]},
    { src:'assets/img/menu/equipment-management.svg',title: '장비 관리', subMenuList: [
      { title: '개인 디바이스', link: '/each-device-list', params: {}, permission: () => { return true }},
      { title: '중장비 디바이스', link: '/heavy-device-list', params: {}, permission: () => { return true }},
      { title: '위험지역 디바이스', link: '/danger-area-list', params: {}, permission: () => { return true }}
    ]},
    { src:'assets/img/menu/my-education.svg',title: '나의 교육', subMenuList: [
      { title: '나의 교육', link: '/my-education-list', params: {}, permission: () => { return true }}
    ]},
    { src:'assets/img/menu/board.svg',title: '게시판', subMenuList: [
      { title: '공지사항', link: '/notice-list', params: {}, permission: () => { return true }},
      { title: 'MSDS', link: '/msds-list', params: {}, permission: () => { return true }},
      { title: '회의록', link: '/minutes-list', params: {}, permission: () => { return true }}
    ]},
    { src:'assets/img/menu/notification-box.svg',title: '알림함', subMenuList: []},
    { src:'assets/img/menu/support.svg',title: '고객지원', subMenuList: [
      { title: '1:1 문의', link: '', params: {}, permission: () => { return true }},
      { title: '사용자 메뉴얼', link: 'manual-list', params: {}, permission: () => { return true }},
      { title: '언어설정', link: '', params: {}, permission: () => { return true }},
      { title: '시스템 이용 약관', link: 'use-terms', params: {}, permission: () => { return true }},
      { title: '개인정보처리방침', link: 'privacy', params: {}, permission: () => { return true }},
    ]}
  ]

  constructor() { 
    this.menuSelected = this.menuList[0];
  }
  ngOnInit() {}

}
