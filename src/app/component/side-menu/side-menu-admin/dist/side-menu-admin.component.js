"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SideMenuAdminComponent = void 0;
var core_1 = require("@angular/core");
var basic_animation_1 = require("src/app/basic/basic.animation");
var SideMenuAdminComponent = /** @class */ (function () {
    function SideMenuAdminComponent(alert, _modal, user) {
        var _this = this;
        this.alert = alert;
        this._modal = _modal;
        this.user = user;
        this.menuList = [
            { title: '통합관제', img: 'assets/img/menu/control-center.svg', permission: function () {
                    var _a = _this.user.userData, user_type = _a.user_type, user_role = _a.user_role;
                    return user_type === 'LH' || user_type === 'SUPER' || user_role === 'MASTER_HEAD' || user_role === 'MASTER_GENERAL';
                },
                subMenuList: [
                    { title: '통합관제', link: '/monitor', permission: function () {
                            var _a = _this.user.userData, user_type = _a.user_type, user_role = _a.user_role;
                            return user_type === 'LH' || user_type === 'SUPER' || user_role === 'MASTER_HEAD' || user_role === 'MASTER_GENERAL';
                        } },
                ] },
            { title: '전자결재', img: 'assets/img/menu/sign.svg', permission: function () {
                    var user_type = _this.user.userData.user_type;
                    return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
                },
                subMenuList: [
                    { title: '기안/임시저장함', link: '/confirm-obtain-list', permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'COMPANY';
                        }
                    },
                    { title: '미결함', link: '/confirm-pending-list', permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
                        }
                    },
                    { title: '진행/완료/반려', link: '/confirm-progress-list', permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
                        } },
                    { title: '참조함', link: '/confirm-cc-list', permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
                        } },
                    { title: '전자결재 설정', permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'COMPANY';
                        },
                        thirdMenuList: [
                            { title: '기본 전자결재선 지정', link: '/approval-edit', permission: function () {
                                    var user_type = _this.user.userData.user_type;
                                    return user_type === 'COMPANY';
                                } },
                            { title: '위임 관리', link: '' }
                        ]
                    }
                ] },
            { title: '안전교육', img: 'assets/img/menu/safety-education.svg', subMenuList: [
                    { title: '교육 현황', link: '/safety-education-list', permission: function () {
                            var _a = _this.user.userData, user_role = _a.user_role, user_type = _a.user_type;
                            return user_role === 'LH_HEAD' || user_type === 'COMPANY';
                        } },
                    { title: '교육 결과 보고', link: '/safety-education-result-list', permission: function () {
                            var _a = _this.user.userData, user_role = _a.user_role, user_type = _a.user_type;
                            return user_role === 'LH_HEAD' || user_type === 'COMPANY';
                        } },
                    { title: '교육 이력', thirdMenuList: [
                            { title: '근로자 교육 이력', link: '/safety-education-history-list', permission: function () {
                                    var user_type = _this.user.userData.user_type;
                                    return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
                                } },
                            { title: '정기 교육 이력', link: '' },
                            { title: '특별 교육 이력', link: '' }
                        ] }
                ] },
            { title: '작업계획', img: 'assets/img/menu/work-plan.svg', permission: function () {
                    var user_type = _this.user.userData.user_type;
                    return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
                },
                subMenuList: [
                    { title: '위험성 평가', thirdMenuList: [
                            { title: '위험성평가 작성', link: '/risk-list', permission: function () {
                                    var user_type = _this.user.userData.user_type;
                                    return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
                                } },
                            { title: '평가표 정보 추가 요청', link: '' }
                        ] },
                    { title: '위험 작업 허가', link: '' },
                    { title: '회의록', link: '/worker-minutes-list', permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
                        } }
                ] },
            { title: '작업관리', img: 'assets/img/menu/work-management.svg', permission: function () {
                    var _a = _this.user.userData, user_role = _a.user_role, user_type = _a.user_type;
                    return user_role === 'LH_HEAD' || user_type === 'COMPANY' || user_type === 'SUPER';
                },
                subMenuList: [
                    { title: '출역 현황', link: '/departure-status-list', permission: function () {
                            var _a = _this.user.userData, user_role = _a.user_role, user_type = _a.user_type;
                            return user_role === 'LH_HEAD' || user_type === 'COMPANY' || user_type === 'SUPER';
                        } },
                    { title: 'TBM 일지', link: '' },
                    { title: '점검 현황', link: '' },
                    { title: '부적합 조치 현황', link: '' }
                ] },               
            { title: '회원관리', img: 'assets/img/menu/member-management.svg', subMenuList: [
                    { title: '작업자 가입승인', link: '/worker-approval-list', permission: function () {
                            var user_role = _this.user.userData.user_role;
                            return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
                        } },
                    { title: '관리자 가입승인', permission: function () {
                            var user_role = _this.user.userData.user_role;
                            return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
                        },
                        thirdMenuList: [
                            { title: 'LH 관리자 가입 승인', link: '/lh-approval-list', permission: function () {
                                    var user_role = _this.user.userData.user_role;
                                    return user_role === 'LH_HEAD';
                                } },
                            { title: '감리 가입승인', link: '/supervision-approval-list', permission: function () {
                                    var user_role = _this.user.userData.user_role;
                                    return user_role === 'LH_HEAD';
                                } },
                            { title: '원청사/협력사 관리자 가입승인', link: '/partner-approval-list', permission: function () {
                                    var user_role = _this.user.userData.user_role;
                                    return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
                                } }
                        ] },
                    { title: '작업자 정보', link: '/worker-info-list', permission: function () {
                            var user_role = _this.user.userData.user_role;
                            return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
                        } },
                    { title: '관리자 정보', permission: function () {
                            var user_role = _this.user.userData.user_role;
                            return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
                        },
                        thirdMenuList: [
                            { title: 'LH 관리자 정보', link: '/lh-info-list', permission: function () {
                                    var user_role = _this.user.userData.user_role;
                                    return user_role === 'LH_HEAD';
                                } },
                            { title: '감리 정보', link: '/supervision-info-list', permission: function () {
                                    var user_role = _this.user.userData.user_role;
                                    return user_role === 'LH_HEAD';
                                } },
                            { title: '원청사/협력사 관리자 정보', link: '/partner-info-list', permission: function () {
                                    var user_role = _this.user.userData.user_role;
                                    return user_role === 'LH_HEAD' || user_role === 'MASTER_HEAD' || user_role === 'PARTNER_HEAD';
                                } },
                        ] },
                    { title: '안전마일리지', link: '' }
                ] },
            { title: '비상상황관리', img: 'assets/img/menu/emergency-management.svg', subMenuList: [
                { title: '아차사고 신고', link: '' },
                { title: '비상 알림 관리', link: '' },
                { title: '안전사고 발생보고', link: '' }
                ] },
            { title: '고객지원', img: 'assets/img/menu/support.svg', subMenuList: [
                    { title: '문의하기', link: '' },
                    { title: '사용자 매뉴얼', link: '/manual-list', permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
                        } },
                    { title: '시스템 이용약관', link: '/use-terms', permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
                        } },
                    { title: '개인정보처리방침', link: '/privacy', permission: function () {
                            var user_type = _this.user.userData.user_type;
                            return user_type === 'LH' || user_type === 'COMPANY' || user_type === 'SUPER';
                        } }
                ] },

            { title: '게시판', img: 'assets/img/menu/board.svg', subMenuList: [
                    { title: '공지사항', link: '/notice-list' },
                    { title: 'MSDS', link: '/msds-list' },
                    { title: '회의록', link: '/minutes-list' },
                ] },
            { title: '알림함', img: 'assets/img/menu/notification-box.svg', subMenuList: [
                    { title: '알림함', link: '/notify-list' }
                ] }
        ];
    }
    SideMenuAdminComponent.prototype.ngOnInit = function () { };
    SideMenuAdminComponent.prototype.menuClose = function () {
        this._modal.dismiss();
    };
    SideMenuAdminComponent.prototype.notReady = function () {
        this.alert.present({
            img: 'https://www.devmonster.co.kr/assets/img/logo.svg',
            header: '준비중'
        });
    };
    SideMenuAdminComponent = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        core_1.Component({
            selector: 'app-side-menu-admin',
            templateUrl: './side-menu-admin.component.html',
            styleUrls: ['./side-menu-admin.component.scss'],
            animations: [basic_animation_1.listAnimation]
        })
    ], SideMenuAdminComponent);
    return SideMenuAdminComponent;
}());
exports.SideMenuAdminComponent = SideMenuAdminComponent;
