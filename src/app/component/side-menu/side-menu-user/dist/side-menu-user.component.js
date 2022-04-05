"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SideMenuUserComponent = void 0;
var core_1 = require("@angular/core");
var SideMenuUserComponent = /** @class */ (function () {
    function SideMenuUserComponent(alert, _modal, user) {
        var _this = this;
        this.alert = alert;
        this._modal = _modal;
        this.user = user;
        this.menuSelected = null;
        this.menuList = [
            { img: 'assets/img/menu/member-management.svg', title: '회원관리', subMenuList: [
                    { title: '안전 마일리지', link: '', params: {}, permission: function () { return true; } }
                ] },
            { img: 'assets/img/menu/work-plan.svg', title: '작업계획', subMenuList: [
                    { title: '위험성평가', link: '/risk-list', params: {}, permission: function () { return true; } },
                    { title: '위험작업허가(PTW)', link: '', params: {}, permission: function () { return true; } },
                    { title: '회의록', link: '/worker-minutes-list', params: {}, permission: function () { return true; } }
                ] },
            { img: 'assets/img/menu/safety-education.svg', title: '안전교육', subMenuList: [
                    { title: '교육현황', link: '/safety-education-list', params: {}, permission: function () {
                            var _a = _this.user.userData, user_role = _a.user_role, user_type = _a.user_type;
                            return user_role === 'LH_HEAD' || user_type === 'COMPANY';
                        } },
                    { title: '나의 교육', link: '/my-education-list', params: {}, permission: function () { return true; } },
                    { title: '교육 결과보고', link: '/safety-education-result-list', params: {}, permission: function () { return true; } }
                ] },
            { img: 'assets/img/menu/today-work.svg', title: '오늘의 작업', subMenuList: [
                    { title: '나의 출입 현황', link: '/my-status-list', params: {}, permission: function () { return true; } },
                    { title: 'TBM', link: '', params: {}, permission: function () { return true; } },
                    { title: '점검', link: '', params: {}, permission: function () { return true; } },
                    { title: '부적합 조치', link: '', params: {}, permission: function () { return true; } }
                ] },
            { img: 'assets/img/menu/emergency-management.svg', title: '비상상황 관리', subMenuList: [
                    { title: '아차사고 신고', link: '', params: {}, permission: function () { return true; } },
                    { title: '비상 알림 관리', link: '', params: {}, permission: function () { return true; } }
                ] },
            { img: 'assets/img/menu/control-center.svg', title: '통합관제', subMenuList: [
                    { title: '지역본부 모니터링', link: '', params: {}, permission: function () { return true; } },
                    { title: '현장 모니터링', link: '', params: {}, permission: function () { return true; } }
                ] },
            { img: 'assets/img/menu/equipment-management.svg', title: '장비 관리', subMenuList: [
                    { title: '개인 디바이스', link: '/each-device-list', params: {}, permission: function () { return true; } },
                    { title: '중장비 디바이스', link: '/heavy-device-list', params: {}, permission: function () { return true; } },
                    { title: '위험지역 디바이스', link: '/danger-area-list', params: {}, permission: function () { return true; } }
                ] },
            { img: 'assets/img/menu/sign.svg', title: '전자 결재', subMenuList: [
                    { title: '기안/임시저장함', link: '/confirm-obtain-list', params: {}, permission: function () { return true; } },
                    { title: '미결함', link: '/confirm-pending-list', params: {}, permission: function () { return true; } },
                    { title: '기결함', link: '/confirm-progress-list', params: {}, permission: function () { return true; } },
                    { title: '참조함', link: '/confirm-cc-list', params: {}, permission: function () { return true; } },
                    { title: '위임관리', link: '', params: {}, permission: function () { return true; } }
                ] },
            { img: 'assets/img/menu/board.svg', title: '게시판', subMenuList: [
                    { title: '공지사항', link: '/notice-list', params: {}, permission: function () { return true; } },
                    { title: 'MSDS', link: '/msds-list', params: {}, permission: function () { return true; } },
                    { title: '회의록', link: '/minutes-list', params: {}, permission: function () { return true; } }
                ] },
            { img: 'assets/img/menu/notification-box.svg', title: '알림함', subMenuList: [] },
            { img: 'assets/img/menu/support.svg', title: '고객지원', subMenuList: [
                    { title: '문의하기', link: '', params: {}, permission: function () { return true; } },
                    { title: '사용자 메뉴얼', link: 'manual-list', params: {}, permission: function () { return true; } },
                    { title: '시스템 이용 약관', link: 'use-terms', params: {}, permission: function () { return true; } },
                    { title: '개인정보처리방침', link: 'privacy', params: {}, permission: function () { return true; } },
                ] }
        ];
        this.menuSelected = this.menuList[0];
    }
    SideMenuUserComponent.prototype.ngOnInit = function () { };
    SideMenuUserComponent.prototype.menuClose = function () {
        this._modal.dismiss();
    };
    SideMenuUserComponent.prototype.notReady = function () {
        this.alert.present({
            img: 'https://www.devmonster.co.kr/assets/img/logo.svg',
            header: '준비중'
        });
    };
    SideMenuUserComponent = __decorate([
        core_1.Component({
            selector: 'app-side-menu-user',
            templateUrl: './side-menu-user.component.html',
            styleUrls: ['./side-menu-user.component.scss']
        })
    ], SideMenuUserComponent);
    return SideMenuUserComponent;
}());
exports.SideMenuUserComponent = SideMenuUserComponent;
