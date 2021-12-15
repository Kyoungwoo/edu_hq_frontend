import { Component, OnInit } from '@angular/core';
import { listAnimation } from 'src/app/basic/app.animation';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';

interface MenuItem {
  title: string,
  img: string,
  subMenuList: SubMenuItem[]
}
interface SubMenuItem {
  title: string,
  link?: string,
  toggle?: boolean,
  thirdMenuList?: ThirdMenuItem[]
}
interface ThirdMenuItem {
  title: string,
  link: string
}

@Component({
  selector: 'app-side-menu-admin',
  templateUrl: './side-menu-admin.component.html',
  styleUrls: ['./side-menu-admin.component.scss'],
  animations: [ listAnimation ]
})
export class SideMenuAdminComponent implements OnInit {

  menuList:MenuItem[] = [
    { title: '통합관제', img: 'assets/img/menu/control-center.svg', subMenuList: [
      { title: '통합관제', link: ''}
    ]},
    { title: '결재', img: 'assets/img/menu/sign.svg', subMenuList: [
      { title: '미결함', link: ''},
      { title: '문서함', thirdMenuList: [
        { title: '기안/임시저장함', link: ''},
        { title: '진행/완료/반려함', link: ''},
        { title: '참조함', link: ''}
      ]},
      { title: '결재설정', thirdMenuList: [
        { title: '기본 결재선 지정', link: ''},
        { title: '위임 관리', link: ''}
      ]}
    ]},
    { title: '안전교육', img: 'assets/img/menu/safety-education.svg', subMenuList: [
      { title: '교육현황', link: ''},
      { title: '교육 결과 보고', link: ''},
      { title: '교육이력', link: ''}
    ]},
    { title: '작업계획', img: 'assets/img/menu/work-plan.svg', subMenuList: [
      { title: '위험성 평가', thirdMenuList: [
        { title: '위험성평가 작성', link: '' },
        { title: '평가표 정보 추가 요청', link: '' }
      ]},
      { title: '위험 작업 허가', link: ''},
      { title: '장비작업계획', link: ''},
      { title: '협의체 회의', link: ''}
    ]},
    { title: '작업관리', img: 'assets/img/menu/work-management.svg', subMenuList: [
      { title: '출역 현황', link: ''},
      { title: 'TBM 일지', link: ''},
      { title: '점검현황', link: ''},
      { title: '부적합 조치 현황', link: ''},
      { title: '현장기상정보', link: ''}
    ]},
    { title: '장비관리', img: 'assets/img/menu/equipment-management.svg', subMenuList: [
      { title: '중장비 관리', link: ''},
      { title: '스마트 안전 장비\n등록/관리', thirdMenuList: [
        { title: '시리얼 No', link: '' },
        { title: '개인 디바이스', link: '' },
        { title: '중장비 디바이스', link: '' },
        { title: '위험지역 디바이스', link: '' }
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
      { title: '사고 보고', link: ''}
    ]},
    { title: '고객지원', img: 'assets/img/menu/support.svg', subMenuList: [
      { title: '1:1 문의', link: ''},
      { title: '사용자 매뉴얼', link: ''},
      { title: '언어 설정', link: ''},
      { title: '시스템 이용 약관', link: ''},
      { title: '개인정보처리방침', link: ''}
    ]},
    { title: '현장관리', img: 'assets/img/menu/site-management.svg', subMenuList: [
      { title: '현장 등록', link: ''},
      { title: '원청사 등록', link: ''}, 
      { title: '장소 등록', link: ''},
      { title: '기준 정보 관리', link: ''}
    ]},
    { title: '게시판', img: 'assets/img/menu/board.svg', subMenuList: [
      { title: '공지사항', link: ''},
      { title: 'MSDS', link: ''},
      { title: '회의록', link: ''},
    ]},
    { title: '알림함', img: 'assets/img/menu/notification-box.svg', subMenuList: [
      { title: '알림함', link: ''}
    ]}
  ]
  
  constructor(
    private alert: AlertService
  ) { }

  ngOnInit() {}

  notReady() {
    this.alert.present({
      message: '<img src="https://www.devmonster.co.kr/assets/img/logo.svg">',
      header: '준비중'
    });
  }
}
