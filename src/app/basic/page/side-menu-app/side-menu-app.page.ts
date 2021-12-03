import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

interface MenuItem {
  title: string,
  subMenuList: SubMenuItem[]
}
interface SubMenuItem {
  title: string,
  link: string,
  params: {[name:string]:any},
  permission: () => boolean
}
@Component({
  selector: 'app-side-menu-app',
  templateUrl: './side-menu-app.page.html',
  styleUrls: ['./side-menu-app.page.scss'],
})
export class SideMenuAppPage implements OnInit {
  
  menuSelected:MenuItem = null;

  menuList:MenuItem[] = [
    { title: '오늘의 작업', subMenuList: [
      { title: '출역', link: '', params: {}, permission: () => { return true }},
      { title: 'TBM', link: '', params: {}, permission: () => { return true }},
      { title: '점검', link: '', params: {}, permission: () => { return true }},
      { title: '부적합', link: '', params: {}, permission: () => { return true }}
    ]},
    { title: '장비 관리', subMenuList: [
      { title: '개인 디바이스', link: '', params: {}, permission: () => { return true }},
      { title: '중장비 디바이스', link: '', params: {}, permission: () => { return true }},
      { title: '위험지역 디바이스', link: '', params: {}, permission: () => { return true }}
    ]},
    { title: '안전교육', subMenuList: [
      { title: '나의 교육', link: '', params: {}, permission: () => { return true }}
    ]},
    { title: '게시판', subMenuList: [
      { title: '공지사항', link: '', params: {}, permission: () => { return true }},
      { title: 'MSDS', link: '', params: {}, permission: () => { return true }},
      { title: '회의록', link: '', params: {}, permission: () => { return true }}
    ]},
    { title: '알림함', subMenuList: []},
    { title: '고객지원', subMenuList: [
      { title: '1:1 문의', link: '', params: {}, permission: () => { return true }},
      { title: '사용자 메뉴얼', link: '', params: {}, permission: () => { return true }},
      { title: '언어설정', link: '', params: {}, permission: () => { return true }},
      { title: '시스템 이용 약관', link: '', params: {}, permission: () => { return true }},
      { title: '개인정보처리방침', link: '', params: {}, permission: () => { return true }},
    ]}
  ]

  constructor(
    public user: UserService
  ) { 
    this.menuSelected = this.menuList[0];
  }
  ngOnInit() {
  }

}
