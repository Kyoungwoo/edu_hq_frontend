(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_main_user_main-user-worker_main-user-worker_module_ts"],{

/***/ 91115:
/*!************************************************************************************!*\
  !*** ./src/app/page/main/user/main-user-worker/main-user-worker-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainUserWorkerPageRoutingModule": () => (/* binding */ MainUserWorkerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _main_user_worker_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-user-worker.page */ 41101);




const routes = [
    {
        path: '',
        component: _main_user_worker_page__WEBPACK_IMPORTED_MODULE_0__.MainUserWorkerPage
    }
];
let MainUserWorkerPageRoutingModule = class MainUserWorkerPageRoutingModule {
};
MainUserWorkerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainUserWorkerPageRoutingModule);



/***/ }),

/***/ 81722:
/*!****************************************************************************!*\
  !*** ./src/app/page/main/user/main-user-worker/main-user-worker.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainUserWorkerPageModule": () => (/* binding */ MainUserWorkerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _sos_popup_sos_popup_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../sos-popup/sos-popup.module */ 73108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _main_user_worker_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-user-worker-routing.module */ 91115);
/* harmony import */ var _main_user_worker_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-user-worker.page */ 41101);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _user_main_user_bottom_menu_main_user_bottom_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/main-user-bottom-menu/main-user-bottom-menu.module */ 1121);










let MainUserWorkerPageModule = class MainUserWorkerPageModule {
};
MainUserWorkerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
            _main_user_worker_routing_module__WEBPACK_IMPORTED_MODULE_1__.MainUserWorkerPageRoutingModule,
            _user_main_user_bottom_menu_main_user_bottom_menu_module__WEBPACK_IMPORTED_MODULE_4__.MainUserBottomMenuPageModule,
            _sos_popup_sos_popup_module__WEBPACK_IMPORTED_MODULE_0__.SosPopupPageModule
        ],
        declarations: [_main_user_worker_page__WEBPACK_IMPORTED_MODULE_2__.MainUserWorkerPage]
    })
], MainUserWorkerPageModule);



/***/ }),

/***/ 41101:
/*!**************************************************************************!*\
  !*** ./src/app/page/main/user/main-user-worker/main-user-worker.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainUserWorkerPage": () => (/* binding */ MainUserWorkerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_main_user_worker_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./main-user-worker.page.html */ 59476);
/* harmony import */ var _main_user_worker_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-user-worker.page.scss */ 16385);
/* harmony import */ var _sos_popup_sos_popup_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../sos-popup/sos-popup.page */ 44239);
/* harmony import */ var _basic_service_util_scanner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../basic/service/util/scanner.service */ 47284);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_component_side_menu_side_menu_user_side_menu_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/component/side-menu/side-menu-user/side-menu-user.component */ 56090);
/* harmony import */ var src_app_service_geolocation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/geolocation.service */ 65497);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);















let MainUserWorkerPage = class MainUserWorkerPage {
    constructor(modal, nav, alert, connect, user, date, gps, scanner, languagePack) {
        this.modal = modal;
        this.nav = nav;
        this.alert = alert;
        this.connect = connect;
        this.user = user;
        this.date = date;
        this.gps = gps;
        this.scanner = scanner;
        this.languagePack = languagePack;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getNotify();
            this.event.getNotify = this.getNotify.bind(this);
            window.addEventListener('getNotify', this.event.getNotify);
        });
    }
    /**
     * @function getNotify(): 알림 가져오기
     */
    getNotify() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.nav.navigateForward('/my-page-type');
        });
    }
    openMenu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_component_side_menu_side_menu_user_side_menu_user_component__WEBPACK_IMPORTED_MODULE_9__.SideMenuUserComponent
            });
            modal.present();
        });
    }
    router(title) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            switch (title) {
                case '마이페이지':
                    this.nav.navigateForward('/my-page-type');
                    break;
                case '나의교육':
                    this.nav.navigateForward('/my-education-list');
                    break;
                case '나의출입현황':
                    this.nav.navigateForward('/my-status-list');
                    break;
                case '스마트안전장비':
                    this.nav.navigateForward('/each-device-list');
                    break;
                case 'SOS':
                    // this.nav.navigateForward('/sos-popup');
                    const modal = yield this.modal.create({
                        component: _sos_popup_sos_popup_page__WEBPACK_IMPORTED_MODULE_2__.SosPopupPage
                    });
                    modal.present();
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
        });
    }
    QRscanner() {
        this.scanner.init();
        // this.qr.open();
    }
};
MainUserWorkerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_8__.NavService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_6__.ConnectService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_4__.DateService },
    { type: src_app_service_geolocation_service__WEBPACK_IMPORTED_MODULE_10__.GeolocationService },
    { type: _basic_service_util_scanner_service__WEBPACK_IMPORTED_MODULE_3__.ScannerService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_11__.LanguagePackService }
];
MainUserWorkerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-main-user-worker',
        template: _raw_loader_main_user_worker_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_main_user_worker_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MainUserWorkerPage);



/***/ }),

/***/ 16385:
/*!****************************************************************************!*\
  !*** ./src/app/page/main/user/main-user-worker/main-user-worker.page.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: var(--ion-color-white);\n}\n\n.profile-row {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: var(--app-page-padding);\n}\n\n.profile-row app-avatar {\n  width: 38px;\n  height: 38px;\n  margin-right: 5px;\n}\n\n.profile-row app-logo {\n  width: 30px;\n  height: 30px;\n  margin-right: 20px;\n}\n\n.profile-row app-col {\n  padding: 0;\n}\n\n.profile-row p {\n  font-size: var(--font-size-h6-small);\n}\n\n.main-button {\n  margin-top: 15px;\n  margin-bottom: 20px;\n}\n\n.main-button .square {\n  width: 100%;\n  height: 100%;\n}\n\n.main-button .square app-img {\n  width: 65%;\n}\n\n.main-button p {\n  font-size: var(--font-size-h6);\n}\n\n.main-button app-row {\n  align-items: stretch;\n}\n\n.badge-class {\n  position: absolute;\n  top: 12px;\n  width: auto;\n  min-width: 24px;\n  height: 24px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n}\n\n.badge-class.alarm {\n  min-width: 16px;\n  height: 16px;\n  right: -6px;\n  top: -6px;\n  background: red;\n  padding: 0 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tdXNlci13b3JrZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQWE7QUFDakI7O0FBQ0E7RUFDQyxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHFDQUFxQztBQUV0Qzs7QUFMQTtFQUtFLFdBQVc7RUFDWCxZQUFZO0VBQ04saUJBQWlCO0FBSXpCOztBQVhBO0VBVVEsV0FBVztFQUNqQixZQUFZO0VBQ04sa0JBQWtCO0FBSzFCOztBQWpCQTtFQWVJLFVBQVU7QUFNZDs7QUFyQkE7RUFrQlEsb0NBQW9DO0FBTzVDOztBQUhBO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQU12Qjs7QUFSQTtFQUlRLFdBQVc7RUFDWCxZQUFZO0FBUXBCOztBQWJBO0VBU1EsVUFBVTtBQVFsQjs7QUFqQkE7RUFhUSw4QkFBOEI7QUFRdEM7O0FBckJBO0VBZ0JRLG9CQUFvQjtBQVM1Qjs7QUFKQTtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQU92Qjs7QUFqQkE7RUFhUSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGNBQWM7QUFRdEIiLCJmaWxlIjoibWFpbi11c2VyLXdvcmtlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xufVxuLnByb2ZpbGUtcm93IHtcblx0cGFkZGluZy10b3A6IDEycHg7XG5cdHBhZGRpbmctYm90dG9tOiAxMnB4O1xuXHRwYWRkaW5nLWxlZnQ6IHZhcigtLWFwcC1wYWdlLXBhZGRpbmcpO1xuXHRhcHAtYXZhdGFyIHtcblx0XHR3aWR0aDogMzhweDtcblx0XHRoZWlnaHQ6IDM4cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuXHR9XG4gICAgYXBwLWxvZ28ge1xuICAgICAgICB3aWR0aDogMzBweDtcblx0XHRoZWlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG4gICAgYXBwLWNvbCB7XG4gICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWg2LXNtYWxsKTtcbiAgICB9XG59XG5cbi5tYWluLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC5zcXVhcmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIFxuICAgIGFwcC1pbWcge1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgIH1cbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWg2KTtcbiAgICB9XG5cdGFwcC1yb3cge1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICB9XG4gICBcbn1cblxuLmJhZGdlLWNsYXNze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEycHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuXG4gICAgJi5hbGFybXtcbiAgICAgICAgbWluLXdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIHJpZ2h0OiAtNnB4O1xuICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ 59476:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/main/user/main-user-worker/main-user-worker.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <app-row class=\"profile-row\">\n      <app-col size=\"auto\">\n        <app-logo></app-logo>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-avatar [src]=\"user.userData.user_profile\"></app-avatar>\n      </app-col>\n      <app-col size=\"auto\" (click)=\"navMypage()\">\n        <h4>{{ user.userData.user_name }}님</h4>\n        <app-row>\n          <app-col size=\"auto\">\n            <p style=\"margin-right: 5px;\">{{ Top_Today.month }}{{ languagePack.getText('월') }} {{ Top_Today.day }}{{ languagePack.getText('일') }}</p>\n          </app-col>\n          <app-col size=\"auto\">\n            <p>{{ Top_Today.week }}</p>\n          </app-col>\n        </app-row>\n      </app-col>\n      <app-col style=\"text-align: right;position: relative;\">\n        <app-img (click)=\"router('알림함')\" class=\"alarm\" src=\"assets/img/main/bell.svg\"></app-img>\n        <ion-badge *ngIf=\"form.alarm_count\" class=\"badge-class alarm\">{{ form.alarm_count }}</ion-badge>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-menu-button></app-menu-button>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n  <ion-toolbar color=\"white\">\n    <app-input-group>\n      <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\" (ngModelChange)=\"getBoard()\"></app-select-scene>\n    </app-input-group>\n  </ion-toolbar>\n</ion-header>\n<ion-content> \n  <div class=\"main-button\">\n    <app-row>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('나의출입현황')\">\n          <app-img src=\"assets/img/menu/output-dark.svg\"></app-img>\n          <p>{{ languagePack.getText('나의 출입 현황') }}</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('나의교육')\">\n          <app-img src=\"assets/img/menu/my-education-dark.svg\"></app-img>\n          <p>{{ languagePack.getText('나의 교육') }}</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('스마트안전장비')\">\n          <app-img src=\"assets/img/menu/smart-equipment-dark.svg\"></app-img>\n          <p>{{ languagePack.getText('스마트 안전 장비 관리') }}</p>\n        </app-button>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('마이페이지')\">\n          <app-img src=\"assets/img/menu/mypage-dark.svg\"></app-img>\n          <p>{{ languagePack.getText('마이페이지') }}</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('')\" color=\"main-btn-grey\">\n          <app-img src=\"assets/img/menu/tbm-dark.svg\"></app-img>\n          <p>TBM</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('')\" color=\"main-btn-grey\">\n          <app-img src=\"assets/img/menu/general-incongruity-dark.svg\"></app-img>\n          <p>{{ languagePack.getText('부적합 조치') }}</p>\n        </app-button>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('')\" color=\"main-btn-grey\">\n          <app-img src=\"assets/img/menu/accident-dark.svg\"></app-img>\n          <p>{{ languagePack.getText('아차사고 신고') }}</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"QRscanner()\">\n          <app-img src=\"assets/img/menu/nfc-dark.svg\"></app-img>\n          <p>QR/NFC</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" color=\"danger\" (click)=\"router('SOS')\">\n          <app-img src=\"assets/img/menu/emergency-alarm-management-dark.svg\"></app-img>\n          <p>SOS</p>\n        </app-button>\n      </app-col>\n    </app-row>\n  </div>\n\n  <app-main-user-bottom-menu\n  [project_id]=\"form.project_id\"\n  [master_company_id]=\"form.master_company_id\"\n  ></app-main-user-bottom-menu>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_main_user_main-user-worker_main-user-worker_module_ts.js.map