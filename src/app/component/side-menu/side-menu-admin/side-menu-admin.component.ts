import { Component, Injectable, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { listAnimation } from 'src/app/basic/basic.animation';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';

export interface MenuItem {
  title: string,
  img: string,
  subMenuList: SubMenuItem[]
}
export interface SubMenuItem {
  title: string,
  link?: string,
  toggle?: boolean,
  thirdMenuList?: ThirdMenuItem[]
}
export interface ThirdMenuItem {
  title: string,
  link: string
}

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-side-menu-admin',
  templateUrl: './side-menu-admin.component.html',
  styleUrls: ['./side-menu-admin.component.scss'],
  animations: [ listAnimation ]
})
export class  SideMenuAdminComponent implements OnInit {

  menuList:MenuItem[] = [
    { title: '통합관제', img: 'assets/img/menu/control-center.svg', subMenuList: [
      { title: '통합관제', link: '/monitor'}
    ]},
    { title: '결재', img: 'assets/img/menu/sign.svg', subMenuList: [
      { title: '기안/임시저장함', link: '/confirm-obtain-list'},
      { title: '미결함', link: '/confirm-pending-list'},
      { title: '기결함', link: '/confirm-progress-list'},
      { title: '참조함', link: '/confirm-cc-list'},
      { title: '결재설정', thirdMenuList: [
        { title: '기본 결재선 지정', link: '/approval-edit'},
        { title: '위임 관리', link: ''}
      ]}
    ]},
    { title: '안전교육', img: 'assets/img/menu/safety-education.svg', subMenuList: [
      { title: '교육현황', link: '/safety-education-list'},
      { title: '교육 결과 보고', link: '/safety-education-result-list'},
      { title: '교육이력', thirdMenuList:[
        {title:'근로자 교육 이력',link:'/safety-education-history-list'},
        {title:'정기 교육 이력',link:''},
        {title:'특별 교육 이력',link:''}
      ]}
    ]},
    { title: '작업계획', img: 'assets/img/menu/work-plan.svg', subMenuList: [
      { title: '위험성 평가', thirdMenuList: [
        { title: '위험성평가 작성', link: '/risk-list'},
        { title: '평가표 정보 추가 요청', link: '' }
      ]},
      { title: '위험 작업 허가', link: ''},
      { title: '회의록', link: '/worker-minutes-list'}
    ]},
    { title: '작업관리', img: 'assets/img/menu/work-management.svg', subMenuList: [
      { title: '출역 현황', link: '/departure-status-list'},
      { title: 'TBM 일지', link: ''},
      { title: '점검현황', link: ''},
      { title: '부적합 조치 현황', link: ''}
    ]},
    { title: '장비관리', img: 'assets/img/menu/equipment-management.svg', subMenuList: [
      { title: '중장비 관리', link: '/heavy-equip-list'},
      { title: '스마트 안전 장비\n등록/관리', thirdMenuList: [
        { title: '시리얼 No', link: '/serial-no-list' },
        { title: '개인 디바이스', link: '/each-device-list' },
        { title: '중장비 디바이스', link: '/heavy-device-list' },
        { title: '위험지역 디바이스', link: '/danger-area-list' }
      ]}
    ]},
    { title: '위험작업관리', img: 'assets/img/menu/dangerous-management.svg', subMenuList: [
      { title: '중장비 접근', link: ''},
      { title: '안전고리 체결', link: ''},
      { title: '밀폐 환경 정보', link: ''}
    ]},
    { title: '비상상황관리', img: 'assets/img/menu/emergency-management.svg', subMenuList: [
      { title: '아차사고 신고', link: ''},
      { title: '비상 알림 관리', link: ''},
      { title: '안전사고 발생보고', link: ''}
    ]},
    { title: '고객지원', img: 'assets/img/menu/support.svg', subMenuList: [
      { title: '문의하기', link: ''},
      { title: '사용자 매뉴얼', link: '/manual-list'},
      { title: '시스템 이용 약관', link: '/use-terms'},
      { title: '개인정보처리방침', link: '/privacy'}
    ]},
    { title: '회원관리', img: 'assets/img/menu/member-management.svg', subMenuList: [
      { title: '작업자 가입승인', link: '/worker-approval-list'},
      { title: '관리자 관리', thirdMenuList:[
        {title:'LH 관리자 가입 승인',link:'lh-approval-list'},
        {title:'감리 가입승인',link:'supervision-approval-list'},
        {title:'원청사/협력사 관리자 가입승인',link:'partner-approval-list'}
      ]},
      { title: '작업자 정보', link: 'worker-info-list'},
      { title: '관리자 정보',thirdMenuList:[
        {title:'LH 관리자 정보',link:'lh-info-list'},
        {title:'감리 정보',link:'supervision-info-list'},
        {title:'원청사/협력사 관리자 정보',link:'partner-info-list'},
      ]},
      {title:'안전마일리지',link:''}
    ]},
    { title: '현장관리', img: 'assets/img/menu/site-management.svg', subMenuList: [
      { title: '현장 등록', link: '/scene-list'},
      { title: '감리사 관리', link: '/supervision-list'},
      { title: '원청사 관리', link: '/contractor-list'},
      { title: '협력사 관리', link: '/partner-list'},
      { title: '기준 정보 관리',thirdMenuList: [
        { title:'회원 정보 기준 설정',link:'/member-standard-set' },
        { title:'교육 정보 기준 설정',link:'' },
        { title:'장소 정보 기준 설정',link:'/area-standard-set' },
        { title:'작업 정보 기준 설정',link:'/work-standard-set' },
        { title:'비상 관리 기준 설정',link:'' },
        { title:'시스템 활용 기준 설정',link:'' },
      ]}
    ]},
    { title: '게시판', img: 'assets/img/menu/board.svg', subMenuList: [
      { title: '공지사항', link: '/notice-list'},
      { title: 'MSDS', link: '/msds-list'},
      { title: '회의록', link: '/minutes-list'},
    ]},
    { title: '알림함', img: 'assets/img/menu/notification-box.svg', subMenuList: [
      { title: '알림함', link: '/notify-list'}
    ]}
  ]

  selectedMenu:MenuItem;

  url:string;
  
  
  constructor(
    private alert: AlertService,
    private _modal: ModalController
  ) { }

  ngOnInit() {}

  menuClose() {
    this._modal.dismiss();
  }
  notReady() {
    this.alert.present({
      message: '<img src="https://www.devmonster.co.kr/assets/img/logo.svg">',
      header: '준비중'
    });
  }


}
