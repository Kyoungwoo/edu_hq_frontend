(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_main_user_main-user-partner_main-user-partner_module_ts"],{

/***/ 9732:
/*!**************************************************************************************!*\
  !*** ./src/app/page/main/user/main-user-partner/main-user-partner-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainUserPartnerPageRoutingModule": () => (/* binding */ MainUserPartnerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _main_user_partner_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-user-partner.page */ 11093);




const routes = [
    {
        path: '',
        component: _main_user_partner_page__WEBPACK_IMPORTED_MODULE_0__.MainUserPartnerPage
    }
];
let MainUserPartnerPageRoutingModule = class MainUserPartnerPageRoutingModule {
};
MainUserPartnerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainUserPartnerPageRoutingModule);



/***/ }),

/***/ 99383:
/*!******************************************************************************!*\
  !*** ./src/app/page/main/user/main-user-partner/main-user-partner.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainUserPartnerPageModule": () => (/* binding */ MainUserPartnerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _main_user_partner_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-user-partner-routing.module */ 9732);
/* harmony import */ var _main_user_partner_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-user-partner.page */ 11093);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _user_main_user_bottom_menu_main_user_bottom_menu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/main-user-bottom-menu/main-user-bottom-menu.module */ 1121);









let MainUserPartnerPageModule = class MainUserPartnerPageModule {
};
MainUserPartnerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _main_user_partner_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainUserPartnerPageRoutingModule,
            _user_main_user_bottom_menu_main_user_bottom_menu_module__WEBPACK_IMPORTED_MODULE_3__.MainUserBottomMenuPageModule
        ],
        declarations: [_main_user_partner_page__WEBPACK_IMPORTED_MODULE_1__.MainUserPartnerPage]
    })
], MainUserPartnerPageModule);



/***/ }),

/***/ 11093:
/*!****************************************************************************!*\
  !*** ./src/app/page/main/user/main-user-partner/main-user-partner.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainUserPartnerPage": () => (/* binding */ MainUserPartnerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_main_user_partner_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./main-user-partner.page.html */ 16334);
/* harmony import */ var _main_user_partner_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-user-partner.page.scss */ 20526);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_component_side_menu_side_menu_user_side_menu_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/component/side-menu/side-menu-user/side-menu-user.component */ 56090);
/* harmony import */ var src_app_service_geolocation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/geolocation.service */ 65497);












let MainUserPartnerPage = class MainUserPartnerPage {
    constructor(modal, nav, alert, connect, user, date, gps) {
        this.modal = modal;
        this.nav = nav;
        this.alert = alert;
        this.connect = connect;
        this.user = user;
        this.date = date;
        this.gps = gps;
        this.segment = '1';
        this.form = {
            project_id: this.user.userData.belong_data.project_id,
            master_company_id: this.user.userData.belong_data.master_company_id,
            company_id: this.user.userData.belong_data.company_id,
            ctgo_job_position_name: '',
            contract_end_date: '-',
            contract_start_date: '-',
            admin_count: 0,
            worker_count: 0,
            alarm_count: 0,
            approval_count: 0,
            notice_count: 0,
            safetymeeting_count: 0, // 안읽은 회의혹
            // msds_count: 0, // 안읽은 MSDS
        };
        this.Top_Today = {
            month: '',
            day: '',
            week: ''
        };
        this.notify_list = []; // 알림
        this.event = {
            getNotify: null
        };
        this.locationTimeout = null;
    }
    ngOnInit() {
        this.dayTrans();
        this.getBoard();
        this.locationUpdate();
    }
    ngOnDestroy() {
        window.removeEventListener('getNotify', this.event.getNotify);
    }
    locationUpdate() {
        this.gps.stopLocationUpdates();
        /** 버그는 안나는데, 혹시몰라서 */
        this.locationTimeout = setTimeout(() => {
            this.gps.startLocationUpdates();
        }, 3000);
    }
    /**
     * @function dayTrans(): 오늘 날짜와 요일 가져오기
     */
    dayTrans() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let Todate = new Date();
            this.Top_Today.week = this.date.day(Todate);
            this.Top_Today.month = (Todate.getMonth() + 1) < 10 ? '0' + (Todate.getMonth() + 1) : String(Todate.getMonth() + 1);
            this.Top_Today.day = Todate.getDate() < 10 ? '0' + Todate.getDate() : String(Todate.getDate());
        });
    }
    /**
     * @function getBoard(): 게시판 가져오기
     */
    getBoard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getNotify();
            this.event.getNotify = this.getNotify.bind(this);
            window.addEventListener('getNotify', this.event.getNotify);
            this.user.userData.belong_data.project_id = this.form.project_id;
        });
    }
    /**
     * @function getNotify(): 알림 가져오기
     */
    getNotify() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/main/board/notify', this.form, {});
            switch (res.rsCode) {
                case 0:
                    this.notify_list = Object.assign(Object.assign({}, this.notify_list), res.rsMap);
                    this.form.alarm_count = res.rsObj.read_count;
                    break;
                default:
                    this.notify_list = [];
                    this.form.alarm_count = 0;
                    // this.toast.present({ color: 'warning', message: res.rsMsg });
                    break;
            }
        });
    }
    navMypage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.nav.navigateForward('/my-page-type');
        });
    }
    openMenu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_component_side_menu_side_menu_user_side_menu_user_component__WEBPACK_IMPORTED_MODULE_7__.SideMenuUserComponent
            });
            modal.present();
        });
    }
    router(title) {
        switch (title) {
            case '미결함':
                this.nav.navigateForward('/confirm-pending-list');
                break;
            case '나의교육':
                this.nav.navigateForward('/my-education-list');
                break;
            case '나의출입현황':
                this.nav.navigateForward('/my-status-list');
                break;
            case '위험성평가':
                this.nav.navigateForward('/risk-list');
                break;
            case 'SOS':
                this.nav.navigateForward('/sos-popup');
                break;
            case '알림함':
                this.nav.navigateForward('/notify-list');
                break;
            case '':
                this.alert.present({
                    header: '준비중',
                    message: '해당 기능은 아직 준비중인 기능입니다.'
                });
                break;
        }
    }
};
MainUserPartnerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_6__.NavService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_4__.DateService },
    { type: src_app_service_geolocation_service__WEBPACK_IMPORTED_MODULE_8__.GeolocationService }
];
MainUserPartnerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-main-user-partner',
        template: _raw_loader_main_user_partner_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_main_user_partner_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MainUserPartnerPage);



/***/ }),

/***/ 20526:
/*!******************************************************************************!*\
  !*** ./src/app/page/main/user/main-user-partner/main-user-partner.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: var(--ion-color-white);\n}\n\n.profile-row {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: var(--app-page-padding);\n}\n\n.profile-row app-avatar {\n  width: 38px;\n  height: 38px;\n  margin-right: 5px;\n}\n\n.profile-row app-logo {\n  width: 30px;\n  height: 30px;\n  margin-right: 20px;\n}\n\n.profile-row app-col {\n  padding: 0;\n}\n\n.profile-row p {\n  font-size: var(--font-size-h6-small);\n}\n\n.main-button {\n  margin-top: 15px;\n  margin-bottom: 20px;\n}\n\n.main-button .square {\n  width: 100%;\n  height: 100%;\n}\n\n.main-button .square app-img {\n  width: 65%;\n}\n\n.main-button p {\n  font-size: var(--font-size-h6);\n}\n\n.main-button app-row {\n  align-items: stretch;\n}\n\n.badge-class {\n  position: absolute;\n  top: 12px;\n  width: auto;\n  min-width: 24px;\n  height: 24px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n}\n\n.badge-class.alarm {\n  min-width: 16px;\n  height: 16px;\n  right: -6px;\n  top: -6px;\n  background: red;\n  padding: 0 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tdXNlci1wYXJ0bmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFhO0FBQ2pCOztBQUNBO0VBQ0MsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixxQ0FBcUM7QUFFdEM7O0FBTEE7RUFLRSxXQUFXO0VBQ1gsWUFBWTtFQUNOLGlCQUFpQjtBQUl6Qjs7QUFYQTtFQVVRLFdBQVc7RUFDakIsWUFBWTtFQUNOLGtCQUFrQjtBQUsxQjs7QUFqQkE7RUFlSSxVQUFVO0FBTWQ7O0FBckJBO0VBa0JRLG9DQUFvQztBQU81Qzs7QUFIQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFNdkI7O0FBUkE7RUFJUSxXQUFXO0VBQ1gsWUFBWTtBQVFwQjs7QUFiQTtFQVNRLFVBQVU7QUFRbEI7O0FBakJBO0VBYVEsOEJBQThCO0FBUXRDOztBQXJCQTtFQWdCUSxvQkFBb0I7QUFTNUI7O0FBSkE7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFPdkI7O0FBakJBO0VBWVEsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0FBU3RCIiwiZmlsZSI6Im1haW4tdXNlci1wYXJ0bmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG59XG4ucHJvZmlsZS1yb3cge1xuXHRwYWRkaW5nLXRvcDogMTJweDtcblx0cGFkZGluZy1ib3R0b206IDEycHg7XG5cdHBhZGRpbmctbGVmdDogdmFyKC0tYXBwLXBhZ2UtcGFkZGluZyk7XG5cdGFwcC1hdmF0YXIge1xuXHRcdHdpZHRoOiAzOHB4O1xuXHRcdGhlaWdodDogMzhweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG5cdH1cbiAgICBhcHAtbG9nbyB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuXHRcdGhlaWdodDogMzBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICBhcHAtY29sIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDYtc21hbGwpO1xuICAgIH1cbn1cblxuLm1haW4tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgLnNxdWFyZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgXG4gICAgYXBwLWltZyB7XG4gICAgICAgIHdpZHRoOiA2NSU7XG4gICAgfVxuICAgIH1cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDYpO1xuICAgIH1cblx0YXBwLXJvdyB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIH1cbiAgIFxufVxuXG4uYmFkZ2UtY2xhc3N7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTJweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgJi5hbGFybXtcbiAgICAgICAgbWluLXdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIHJpZ2h0OiAtNnB4O1xuICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ 16334:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/main/user/main-user-partner/main-user-partner.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <app-row class=\"profile-row\">\n      <app-col size=\"auto\">\n        <app-logo></app-logo>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-avatar [src]=\"user.userData.user_profile\"></app-avatar>\n      </app-col>\n      <app-col size=\"auto\" (click)=\"navMypage()\">\n        <h4>{{ user.userData.user_name }}님</h4>\n        <app-row>\n          <app-col size=\"auto\">\n            <p style=\"margin-right: 5px;\">{{ Top_Today.month }}월 {{ Top_Today.day }}일</p>\n          </app-col>\n          <app-col size=\"auto\">\n            <p>{{ Top_Today.week }}</p>\n          </app-col>\n        </app-row>\n      </app-col>\n      <app-col style=\"text-align: right;position: relative;\">\n        <app-img (click)=\"router('알림함')\" class=\"alarm\" src=\"assets/img/main/bell.svg\"></app-img>\n        <ion-badge *ngIf=\"form.alarm_count\" class=\"badge-class alarm\">{{ form.alarm_count }}</ion-badge>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-menu-button></app-menu-button>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n  <ion-toolbar color=\"white\">\n    <app-input-group>\n      <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\" (ngModelChange)=\"getBoard()\"></app-select-scene>\n    </app-input-group>\n  </ion-toolbar>\n</ion-header>\n<ion-content> \n  <div class=\"main-button\">\n    <app-row>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('나의출입현황')\">\n          <app-img src=\"assets/img/menu/output-dark.svg\"></app-img>\n          <p>나의 출입현황</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('위험성평가')\">\n          <app-img src=\"assets/img/menu/risk-evaluation-report-dark.svg\"></app-img>\n          <p>위험성 평가</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('나의교육')\">\n          <app-img src=\"assets/img/menu/my-education-dark.svg\"></app-img>\n          <p>나의 교육</p>\n        </app-button>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('미결함')\">\n          <app-img src=\"assets/img/menu/undetermined-dark.svg\"></app-img>\n          <p>미결함</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('')\" color=\"main-btn-grey\">\n          <app-img src=\"assets/img/menu/tbm-dark.svg\"></app-img>\n          <p>TBM</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('')\" color=\"main-btn-grey\">\n          <app-img src=\"assets/img/menu/general-check-dark.svg\"></app-img>\n          <p>점검</p>\n        </app-button>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('')\" color=\"main-btn-grey\">\n          <app-img src=\"assets/img/menu/general-incongruity-dark.svg\"></app-img>\n          <p>부적합 조치</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('')\" color=\"main-btn-grey\">\n          <app-img src=\"assets/img/menu/ptw-dark.svg\"></app-img>\n          <p>위험작업허가</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" color=\"danger\" (click)=\"router('SOS')\">\n          <app-img src=\"assets/img/menu/emergency-alarm-management-dark.svg\"></app-img>\n          <p>SOS</p>\n        </app-button>\n      </app-col>\n    </app-row>\n  </div>\n\n  <app-main-user-bottom-menu\n  [project_id]=\"form.project_id\"\n  [master_company_id]=\"form.master_company_id\"\n  ></app-main-user-bottom-menu>\n  \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_main_user_main-user-partner_main-user-partner_module_ts.js.map