import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-side-menu-app',
  templateUrl: './side-menu-app.page.html',
  styleUrls: ['./side-menu-app.page.scss'],
})
export class SideMenuAppPage implements OnInit {
  page_type = 0;

  page_list = [
    {title: "오늘의 작업",list: ["출역","TBM","점검","부적합 조치"]},
    {title: "장비 관리",list: ["개인 디바이스","중장비 디바이스","위험지역 디바이스"]},
    {title: "안전교육",list: ["나의 교육"]},
    {title: "게시판",list: ["공지사항","MSDS","회의록"]},
    {title: "알림함",list: []},
    {title: "고객지원",list: ["1:1 문의","사용자 메뉴얼","언어설정","시스템 이용 약관","개인정보처리방침"]}
  ]
  constructor(
    public user: UserService
  ) { }
  ngOnInit() {
  }

}
