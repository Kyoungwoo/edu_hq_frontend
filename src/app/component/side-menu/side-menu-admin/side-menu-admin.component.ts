import { Component, Injectable, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { listAnimation } from 'src/app/basic/basic.animation';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
export interface MenuItem {
  title: string;
  img: string;
  permission?: () => boolean;
  subMenuList: SubMenuItem[];
}
export interface SubMenuItem {
  title: string;
  link?: string;
  toggle?: boolean;
  permission?: () => boolean;
  thirdMenuList?: ThirdMenuItem[];
}
export interface ThirdMenuItem {
  title: string;
  link: string;
  permission?: () => boolean;
}

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-side-menu-admin',
  templateUrl: './side-menu-admin.component.html',
  styleUrls: ['./side-menu-admin.component.scss'],
  animations: [listAnimation],
})
export class SideMenuAdminComponent implements OnInit {
  menuList: MenuItem[] = [
    {
      title: '통합관제',
      img: 'assets/img/menu/control-center.svg',
      subMenuList: [
        { title: '통합관제', link: '/monitor' },
        { title: 'cctv 모니터링', link: '/monitor' },
      ],
    },
    {
      title: '사업지구관리',
      img: 'assets/img/menu/conference.svg',
      subMenuList: [{ title: '사업지구관리', link: '/district-management' }],
    },
    {
      title: '회원관리',
      img: 'assets/img/menu/member-management.svg',
      subMenuList: [
        { title: '가입승인', link: '/lh-approval-list' },
        { title: '회원 정보', link: '/lh-info-list' },
        { title: '회원 정보 기준 관리', link: '/member-standard-set' },
      ],
    },
    {
      title: '비상상황관리',
      img: 'assets/img/menu/dangerous-management.svg',
      subMenuList: [
        { title: '위험 알림 관리', link: '/emergency-list' },
        { title: '안전사고 조사표', link: '/accident-list' },
      ],
    },
    {
      title: '고객지원',
      img: 'assets/img/menu/support.svg',
      subMenuList: [
        { title: '사용자 매뉴얼', link: '/manual-list' },
        { title: '시스템 이용약관', link: '/use-terms' },
        { title: '개인정보처리방침', link: '/privacy' },
      ],
    },
    {
      title: '마이페이지',
      img: 'assets/img/menu/mypage.svg',
      subMenuList: [{ title: '마이페이지', link: '/my-page' }],
    },
  ];

  selectedMenu: MenuItem;

  url: string;

  constructor(
    private alert: AlertService,
    private _modal: ModalController,
    private user: UserService,
    public languagePack: LanguagePackService
  ) {}

  ngOnInit() {}

  menuClose() {
    this._modal.dismiss();
  }
  notReady() {
    this.alert.present({
      // img: 'https://www.devmonster.co.kr/assets/img/logo.svg',
      header: '해당 메뉴는 준비중입니다.',
    });
  }
}
