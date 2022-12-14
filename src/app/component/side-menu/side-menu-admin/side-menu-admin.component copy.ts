import { Component, Injectable, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { listAnimation } from 'src/app/basic/basic.animation';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
export interface MenuItem {
  title: string,
  img: string,
  permission?:() => boolean,
  subMenuList: SubMenuItem[]
}
export interface SubMenuItem {
  title: string,
  link?: string,
  toggle?: boolean,
  permission?:() => boolean,
  thirdMenuList?: ThirdMenuItem[]
}
export interface ThirdMenuItem {
  title: string,
  link: string,
  permission?:() => boolean
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
    { title: '통합관제', img: 'assets/img/menu/control-center.svg', 
    // tw : 사이드 메뉴 1 - start 희선님 코드
    // // permission: () => {
    // //   const {  user_type, user_role } = this.user.userData;
    // //   return user_type === 'LH' || user_type === 'SUPER' || user_role === 'MASTER_HEAD' || user_role === 'MASTER_GENERAL';
    // // },
    // subMenuList: [
    //   { title: '통합관제', link: '/monitor'
    //   // permission: () => {
    //   //   const {  user_type, user_role } = this.user.userData;
    //   //   return user_type === 'LH' || user_type === 'SUPER' || user_role === 'MASTER_HEAD' || user_role === 'MASTER_GENERAL';
    //   // }
    // },
    // //   { title: 'cctv 모니터링', link: '/monitor',
    // //   // permission: () => {
    // //   //   const {  user_type, user_role } = this.user.userData;
    // //   //   return user_type === 'LH' || user_type === 'SUPER' || user_role === 'MASTER_HEAD' || user_role === 'MASTER_GENERAL';
    // //   // }
    // // },
    // ]},
    // // { title: '전자결재', img: 'assets/img/menu/sign.svg',
    // //   permission: () => {
    // //     const {  user_type } = this.user.userData;
    // //     return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
    // //   },
    // // subMenuList: [
    // //   { title: '기안/임시저장함', link: '/confirm-obtain-list',
    // //     permission: () => {
    // //       const {  user_type } = this.user.userData;
    // //       return user_type === 'COMPANY';
    // //     }
    // //   },
    // //   { title: '미결함', link: '/confirm-pending-list',
    // //   permission: () => {
    // //     const {  user_type } = this.user.userData;
    // //     return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
    // //   }
    // // },
    // //   { title: '진행/완료/반려', link: '/confirm-progress-list',
    // //   permission: () => {
    // //     const {  user_type } = this.user.userData;
    // //     return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
    // //   }},
    // //   { title: '참조함', link: '/confirm-cc-list',
    // //   permission: () => {
    // //     const {  user_type } = this.user.userData;
    // //     return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
    // //   }},
    // //   { title: '전자결재 설정', link: '/approval-edit',
    // //   permission: () => {
    // //     const {  user_type } = this.user.userData;
    // //     return user_type === 'COMPANY';
    // //   },
    // //     // thirdMenuList: [
    // //     //   { title: '기본 전자결재선 지정', link: '/approval-edit',
    // //     //   permission: () => {
    // //     //     const {  user_type } = this.user.userData;
    // //     //     return user_type === 'COMPANY';
    // //     //   }},
    // //     //   { title: '위임 관리', link: ''}
    // //     // ]
    // //   }
    // // ]},
    // // { title: '안전교육', img: 'assets/img/menu/safety-education.svg', subMenuList: [
    // //   { title: '교육 현황', link: '/safety-education-list',
    // //   permission: () => {
    // //     const {  user_role, user_type } = this.user.userData;
    // //     return user_role === 'LH_HEAD' || user_type === 'COMPANY';
    // //   }},
    // //   { title: '교육 결과 보고', link: '/safety-education-result-list',
    // //   permission: () => {
    // //     const {  user_role, user_type } = this.user.userData;
    // //     return user_role === 'LH_HEAD' || user_type === 'COMPANY';
    // //   }},
    // //   { title: '교육 이력',  link:'/safety-education-history-list',
    // //   permission: () => {
    // //     const { user_type } = this.user.userData;
    // //     return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
    // //   }}
    // // ]},
    // { img:'assets/img/menu/conference.svg', title: '사업지구관리', 
    // // permission: () => {
    // //   const { user_type } = this.user.userData;
    // //   return user_type !== 'WORKER' 
    // // },
    // subMenuList: [
    //   { title: '사업지구관리', link: '/business-list',
    //   // permission: () => {
    //   //   const { user_type } = this.user.userData;
    //   //   return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
    //   // }
    // },
    //   // { title: '회의록', link: '/work-write-list',
    //   // permission: () => {
    //   //   const { user_type } = this.user.userData;
    //   //   return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
    //   // }}
    // ]
    // },

    // { title: '회원관리', img: 'assets/img/menu/member-management.svg', subMenuList: [
    //   { title: '가입승인', link: '/lh-approval-list',
    //   // permission: () => {
    //   //   const {  user_role } = this.user.userData;
    //   //   return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
    //   // }
    //   },
    //   // { title: '관리자 가입승인', 
    //   // permission: () => {
    //   //   const {  user_role } = this.user.userData;
    //   //   return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
    //   // },
    //   // thirdMenuList:[
    //   //   {title:'LH 관리자 가입 승인',link:'/lh-approval-list', permission: () => {
    //   //     const { user_role } = this.user.userData;
    //   //     return user_role === 'LH_HEAD';
    //   //   }},
    //   //   {title:'감리 가입승인',link:'/supervision-approval-list', permission: () => {
    //   //     const { user_role } = this.user.userData;
    //   //     return user_role === 'LH_HEAD';
    //   //   }},
    //   //   {title:'원청사/협력사 관리자 가입승인',link:'/partner-approval-list',
    //   //   permission: () => {
    //   //     const {  user_role } = this.user.userData;
    //   //     return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
    //   //   }}
    //   // ]},
    //   { title: '회원 정보', link: '/lh-info-list',
    //   // permission: () => {
    //   //   const {  user_role } = this.user.userData;
    //   //   return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
    //   // }
    // },
    //   // { title: '관리자 정보',
    //   // permission: () => {
    //   //   const {  user_role } = this.user.userData;
    //   //   return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
    //   // },
    //   // thirdMenuList:[
    //   //   {title:'LH 관리자 정보',link:'/lh-info-list', permission: () => {
    //   //     const { user_role } = this.user.userData;
    //   //     return user_role === 'LH_HEAD';
    //   //   }},
    //   //   {title:'감리 정보',link:'/supervision-info-list', permission: () => {
    //   //     const { user_role } = this.user.userData;
    //   //     return user_role === 'LH_HEAD';
    //   //   }},
    //   //   {title:'원청사/협력사 관리자 정보',link:'/partner-info-list',
    //   //   permission: () => {
    //   //     const {  user_role } = this.user.userData;
    //   //     return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
    //   //   }},
    //   // ]},
    //   // {title:'안전마일리지',link:''},
    //   { title: '회원 정보 기준 관리', link:'/member-standard-set',
    //   // permission: () => {
    //   //   const {  user_role } = this.user.userData;
    //   //   return user_role === 'LH_HEAD' || user_role === 'SUPER_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
    //   // }
    // },
    // ]},
    // tw : 사이드 메뉴 1 - end 희선님 코드
    permission: () => {
      const {  user_type, user_role } = this.user.userData;
      return user_type === 'LH' || user_type === 'SUPER' || user_role === 'MASTER_HEAD' || user_role === 'MASTER_GENERAL';
    },
    subMenuList: [
      { title: '통합관제', link: '/monitor',
      permission: () => {
        const {  user_type, user_role } = this.user.userData;
        return user_type === 'LH' || user_type === 'SUPER' || user_role === 'MASTER_HEAD' || user_role === 'MASTER_GENERAL';
      }},
    ]},
    {
      title: '사업지구관리', img: 'assets/img/menu/emergency-management.svg', 
      permission: () => {
        const { user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'SUPER';
      },
      subMenuList: [
        // { title: '사업지구 관리@@@', link: '/serial-no-list',},
        // { title: '비상 알림 관리', link: '' },
        // { title: '안전사고 발생보고', link: '' }
      ]
    },
    // { title: '작업계획', img: 'assets/img/menu/work-plan.svg', 
    // permission: () => {
    //   const { user_type } = this.user.userData;
    //   return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
    // },
    // subMenuList: [
    //   { title: '위험성 평가', link: '/risk-list'},
    //   { title: '작업 지시서(PTW)', link: ''}
    // ]},
    // { title: '작업관리', img: 'assets/img/menu/work-management.svg', 
    // permission: () => {
    //   const { user_role, user_type } = this.user.userData;
    //   return user_role === 'LH_HEAD' || user_type === 'COMPANY' || user_type === 'SUPER';
    // },
    // subMenuList: [
    //   { title: '출역 현황', link: '/departure-status-list',
    // tw : 사이드 메뉴 2 - start 희선님 코드 
    // //   // permission: () => {
    // //   //   const { user_role, user_type } = this.user.userData;
    // //   //   return user_role === 'LH_HEAD' || user_type === 'COMPANY' || user_type === 'SUPER';
    // //   // }
    // // },
    // //   { title: 'TBM 일지', link: '/tbm-list'},
    // //   { title: '점검 현황',
    // //   thirdMenuList:[
    // //     {title:'일상점검', link:'/daily-list', 
    // //     // permission: () => {
    // //     //   const { user_role } = this.user.userData;
    // //     //   return user_role === 'LH_HEAD';
    // //     // }
    // //   },
    // //     {title:'위험지역점검',link:'/danger-list'},
    // //     {title:'LH점검',link:'/lh-list'},
    // //   ],
    // //   },
    // //   { title: '부적합(아차사고) 관리', link: '/incongruity-list'},
    // // ]},
    // // { title: '장비관리', img: 'assets/img/menu/equipment-management.svg',
    // //   permission: () => {
    // //     const { user_role, user_type } = this.user.userData;
    // //     return user_role === 'LH_HEAD' || user_type === 'COMPANY';
    // //   },
    // // subMenuList: [
    // //   { title: '중장비 관리', link: '/heavy-equip-list',
    // //   permission: () => {
    // //     const { user_role, user_type } = this.user.userData;
    // //     return user_role === 'LH_HEAD' || user_type === 'COMPANY';
    // //   }},
    // //   { title: '스마트 안전장비 관리', 
    // //   permission: () => {
    // //     const { user_role, user_type } = this.user.userData;
    // //     return user_role === 'LH_HEAD'|| user_role === 'MASTER_HEAD' || user_role === 'MASTER_GENERAL';
    // //   },
    // //   thirdMenuList: [
    // //     { title: '디바이스 등록', link: '/serial-no-list',
    // //     permission: () => {
    // //       const { user_role, user_type } = this.user.userData;
    // //       return user_role === 'LH_HEAD'|| user_role === 'MASTER_HEAD' || user_role === 'MASTER_GENERAL';
    // //     }},
    // //     { title: '개인용 디바이스', link: '/each-device-list',
    // //     permission: () => {
    // //       const { user_role, user_type } = this.user.userData;
    // //       return user_role === 'LH_HEAD'|| user_role === 'MASTER_HEAD' || user_role === 'MASTER_GENERAL';
    // //     }},
    // //     { title: '중장비용 디바이스', link: '/heavy-device-list',
    // //     permission: () => {
    // //       const { user_role, user_type } = this.user.userData;
    // //       return user_role === 'LH_HEAD'|| user_role === 'MASTER_HEAD' || user_role === 'MASTER_GENERAL';
    // //     }},
    // //     { title: '장소용 디바이스', link: '/danger-area-list',
    // //     permission: () => {
    // //       const { user_role, user_type } = this.user.userData;
    // //       return user_role === 'LH_HEAD'|| user_role === 'MASTER_HEAD' || user_role === 'MASTER_GENERAL';
    // //     }}
    // //   ]}
    // // ]},
    // { title: '비상상황관리', img: 'assets/img/menu/dangerous-management.svg',
    // subMenuList: [
    //   { title: '위험 알림 관리', link: '/emergency-list'},
    //   { title: '안전사고 조사표', link: '/accident-list'},
    // ]},
    // // { title: '사고관리', img: 'assets/img/menu/emergency-management.svg', subMenuList: [
    // //   // { title: '아차사고 신고', link: ''},

    // // ]},
    // { title: '고객지원', img: 'assets/img/menu/support.svg', subMenuList: [
    //   // { title: '문의하기', link: ''},
    //   { title: '사용자 매뉴얼', link: '/manual-list',
    //   // permission: () => {
    //   //   const {  user_type } = this.user.userData;
    //   //   return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
    //   // }
    // },
    //   { title: '시스템 이용약관', link: '/use-terms',
    //   // permission: () => {
    //   //   const {  user_type } = this.user.userData;
    //   //   return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
    //   // }
    // },
    //   { title: '개인정보처리방침', link: '/privacy',
    //   // permission: () => {
    //   //   const {  user_type } = this.user.userData;
    //   //   return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
    //   // }
    // }
    // ]},
    // { title: '마이페이지', img: 'assets/img/menu/board.svg', subMenuList: [
    //   // { title: '문의하기', link: ''},
    //   { title: '사용자 매뉴얼', link: '/manual-list',
      // tw : 사이드 메뉴 2 - end 희선님 코드 
    //   permission: () => {
    //     const { user_role, user_type } = this.user.userData;
    //     return user_role === 'LH_HEAD' || user_type === 'COMPANY' || user_type === 'SUPER';
    //   }},
    //   { title: 'TBM 일지', link: ''},
    //   { title: '점검 현황', link: ''},
    //   { title: '부적합(아차사고) 관리', link: ''}
    // ]},
    { title: '회원관리', img: 'assets/img/menu/member-management.svg', subMenuList: [
      { title: '작업자 가입승인', link: '/worker-approval-list',
      permission: () => {
        const {  user_role } = this.user.userData;
        return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
      }},
      { title: '관리자 가입승인', 
      permission: () => {
        const {  user_role } = this.user.userData;
        return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
      },
      thirdMenuList:[
        {title:'LH 관리자 가입 승인',link:'/lh-approval-list', permission: () => {
          const { user_role } = this.user.userData;
          return user_role === 'LH_HEAD';
        }},
        {title:'감리 가입승인',link:'/supervision-approval-list', permission: () => {
          const { user_role } = this.user.userData;
          return user_role === 'LH_HEAD';
        }},
        {title:'원청사/협력사 관리자 가입승인',link:'/partner-approval-list',
        permission: () => {
          const {  user_role } = this.user.userData;
          return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
        }}
      ]},
      { title: '작업자 정보', link: '/worker-info-list',
      permission: () => {
        const {  user_role } = this.user.userData;
        return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
      }},
      { title: '관리자 정보',
      permission: () => {
        const {  user_role } = this.user.userData;
        return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
      },
      thirdMenuList:[
        {title:'LH 관리자 정보',link:'/lh-info-list', permission: () => {
          const { user_role } = this.user.userData;
          return user_role === 'LH_HEAD';
        }},
        {title:'감리 정보',link:'/supervision-info-list', permission: () => {
          const { user_role } = this.user.userData;
          return user_role === 'LH_HEAD';
        }},
        {title:'원청사/협력사 관리자 정보',link:'/partner-info-list',
        permission: () => {
          const {  user_role } = this.user.userData;
          return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
        }},
      ]},
      // {title:'안전마일리지',link:''},
      { title: '회원 정보 기준 설정', link:'/member-standard-set',
      permission: () => {
        const {  user_role } = this.user.userData;
        return user_role === 'LH_HEAD' || user_role === 'SUPER_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
      }},
    ]},    
    { title: '비상상황관리', img: 'assets/img/menu/emergency-management.svg', subMenuList: [
      // { title: '아차사고 신고', link: ''},
      { title: '비상 알림 관리', link: ''},
      { title: '안전사고 발생보고', link: ''}
    ]},
    { title: '고객지원', img: 'assets/img/menu/support.svg', subMenuList: [
      // { title: '문의하기', link: ''},
      { title: '사용자 매뉴얼', link: '/manual-list',
      permission: () => {
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
      }},
      { title: '시스템 이용약관', link: '/use-terms',
      permission: () => {
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
      }},
      { title: '개인정보처리방침', link: '/privacy',
      permission: () => {
        const {  user_type } = this.user.userData;
        return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
      }}
    ]},
    {
      title: '마이페이지', img: 'assets/img/menu/mypage.svg', subMenuList: [
        // { title: '아차사고 신고', link: ''},
        { title: '마이페이지', link: '/my-page' },
      ]
    },    
    // { title: '현장관리/기준설정', img: 'assets/img/menu/site-management.svg', subMenuList: [
    //   { title: '현장 정보 관리', link: '/scene-list',
    //   permission: () => {
    //     const {  user_type } = this.user.userData;
    //     return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
    //   }},
    //   { title: '감리사 관리', link: '/supervision-list',
    //   permission: () => {
    //     const {  user_type } = this.user.userData;
    //     return user_type === 'LH' || user_type === 'SUPER';
    //   }},
    //   { title: '원청사 관리', link: '/contractor-list',
    //   permission: () => {
    //     const {  user_type, user_role } = this.user.userData;
    //     return user_type === 'LH' || user_role === 'MASTER_HEAD' || user_role === 'MASTER_GENERAL' || user_type === 'SUPER';
    //   }},
    //   { title: '협력사 관리', link: '/partner-list',
    //   permission: () => {
    //     const {  user_type, user_role } = this.user.userData;
    //     return user_role === 'LH_HEAD'  || user_type === 'COMPANY';
    //   }},
    //   { title:'장소 정보 기준 설정',link:'/area-standard-set',
    //   permission: () => {
    //     const {  user_role } = this.user.userData;
    //     return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD';
    //   }},
    //   { title:'작업 정보 기준 설정',link:'/work-standard-set' ,
    //   permission: () => {
    //     const {  user_role } = this.user.userData;
    //     return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD';
    //   }},
      // { title: '기준 정보 관리',
      //   permission: () => {
      //     const { user_type ,user_role } = this.user.userData;
      //     return user_role === 'LH_HEAD'  || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
      //   },
      // thirdMenuList: [
      //   // { title:'회원 정보 기준 설정', link:'/member-standard-set',
      //   // permission: () => {
      //   //   const { user_role } = this.user.userData;
      //   //   return user_role === 'LH_HEAD' || user_role === 'SUPER_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
      //   // }},
      //   // { title:'교육 정보 기준 설정',link:'' },
      //   { title:'장소 정보 기준 설정',link:'/area-standard-set',
      //   permission: () => {
      //     const {  user_role } = this.user.userData;
      //     return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD';
      //   }},
      //   { title:'작업 정보 기준 설정',link:'/work-standard-set' ,
      //   permission: () => {
      //     const {  user_role } = this.user.userData;
      //     return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD';
      //   }},
      //   // { title:'비상 관리 기준 설정',link:'' }, 
      //   // { title:'시스템 활용 기준 설정',link:'' }
      // ]}
    // ]},
    // { title: '게시판', img: 'assets/img/menu/board.svg', subMenuList: [
    //   { title: '공지사항', link: '/notice-list'},
    //   { title: 'MSDS', link: '/msds-list'},
    //   { title: '회의록', link: '/minutes-list'},
    //   { title: '작업 절차서', link: '/procedure-list'},
    // ]},
    // { title: '알림함', img: 'assets/img/menu/notification-box.svg', subMenuList: [
    //   { title: '알림함', link: '/notify-list'}
    // ]}
  ]

  selectedMenu:MenuItem;

  url:string;
  
  
  constructor(
    private alert: AlertService,
    private _modal: ModalController,
    private user: UserService,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {}

  menuClose() {
    this._modal.dismiss(); 
  }
  notReady() {
    this.alert.present({
      // img: 'https://www.devmonster.co.kr/assets/img/logo.svg',
      header: '해당 메뉴는 준비중입니다.'
    });
  }


}
