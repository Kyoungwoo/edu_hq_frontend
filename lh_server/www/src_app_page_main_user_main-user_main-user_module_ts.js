(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_main_user_main-user_main-user_module_ts"],{

/***/ 28665:
/*!**********************************************************************!*\
  !*** ./src/app/page/main/user/main-user/main-user-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainUserPageRoutingModule": () => (/* binding */ MainUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _main_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-user.page */ 75550);




const routes = [
    {
        path: '',
        component: _main_user_page__WEBPACK_IMPORTED_MODULE_0__.MainUserPage
    }
];
let MainUserPageRoutingModule = class MainUserPageRoutingModule {
};
MainUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainUserPageRoutingModule);



/***/ }),

/***/ 81356:
/*!**************************************************************!*\
  !*** ./src/app/page/main/user/main-user/main-user.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainUserPageModule": () => (/* binding */ MainUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _main_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-user-routing.module */ 28665);
/* harmony import */ var _main_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-user.page */ 75550);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _user_main_user_bottom_menu_main_user_bottom_menu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/main-user-bottom-menu/main-user-bottom-menu.module */ 1121);









let MainUserPageModule = class MainUserPageModule {
};
MainUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _main_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainUserPageRoutingModule,
            _user_main_user_bottom_menu_main_user_bottom_menu_module__WEBPACK_IMPORTED_MODULE_3__.MainUserBottomMenuPageModule
        ],
        declarations: [_main_user_page__WEBPACK_IMPORTED_MODULE_1__.MainUserPage]
    })
], MainUserPageModule);



/***/ }),

/***/ 75550:
/*!************************************************************!*\
  !*** ./src/app/page/main/user/main-user/main-user.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainUserPage": () => (/* binding */ MainUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_main_user_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./main-user.page.html */ 54405);
/* harmony import */ var _main_user_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-user.page.scss */ 87524);
/* harmony import */ var src_app_basic_service_util_qr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/util/qr.service */ 62287);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_component_side_menu_side_menu_user_side_menu_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/component/side-menu/side-menu-user/side-menu-user.component */ 56090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);













let MainUserPage = class MainUserPage {
    constructor(modal, nav, alert, connect, user, date, qr, languagePack) {
        this.modal = modal;
        this.nav = nav;
        this.alert = alert;
        this.connect = connect;
        this.user = user;
        this.date = date;
        this.qr = qr;
        this.languagePack = languagePack;
        this.form = {
            project_id: this.user.userData.belong_data.project_id,
            master_company_id: 0,
            company_id: this.user.userData.belong_data.company_id,
            ctgo_job_position_name: '',
            contract_end_date: '-',
            contract_start_date: '-',
            admin_count: 0,
            worker_count: 0,
            alarm_count: 0,
            approval_count: 0, // 안읽은 미결함
        };
        this.Top_Today = {
            month: '',
            day: '',
            week: ''
        };
        this.notify_list = []; // 알림
        this.menu = 1;
        this.event = {
            getNotify: null
        };
    }
    ngOnInit() {
        this.dayTrans();
        this.getBoard();
    }
    ngOnDestroy() {
        window.removeEventListener('getNotify', this.event.getNotify);
    }
    /**
     * @function dayTrans(): 오늘 날짜와 요일 가져오기
     */
    dayTrans() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.nav.navigateForward('/my-page-type');
        });
    }
    openMenu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_component_side_menu_side_menu_user_side_menu_user_component__WEBPACK_IMPORTED_MODULE_8__.SideMenuUserComponent
            });
            modal.present();
        });
    }
    router(title) {
        switch (title) {
            case '미결함':
                this.nav.navigateForward('/confirm-pending-list');
                break;
            case '통합관제':
                this.nav.navigateForward('/monitor');
                break;
            case '회의록':
                this.nav.navigateForward('/minutes-list');
                break;
            case '위험성평가':
                this.nav.navigateForward('/risk-list');
                break;
            case '알림함':
                this.nav.navigateForward('/notify-list');
                break;
            case '위험작업허가(PTW)':
                this.nav.navigateForward('/ptw-list');
                break;
            case '위험알림관리':
                this.nav.navigateForward('/emergency-list');
                break;
            case '':
                this.alert.present({
                    header: '준비중',
                    message: '해당 기능은 아직 준비중인 기능입니다.'
                });
                break;
        }
    }
    QRscanner() {
        this.qr.open();
    }
};
MainUserPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_7__.NavService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_5__.DateService },
    { type: src_app_basic_service_util_qr_service__WEBPACK_IMPORTED_MODULE_2__.QrService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_9__.LanguagePackService }
];
MainUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-main-user',
        template: _raw_loader_main_user_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_main_user_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MainUserPage);



/***/ }),

/***/ 87524:
/*!**************************************************************!*\
  !*** ./src/app/page/main/user/main-user/main-user.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: var(--ion-color-white);\n}\n\n.profile-row {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: var(--app-page-padding);\n}\n\n.profile-row app-avatar {\n  width: 38px;\n  height: 38px;\n  margin-right: 5px;\n}\n\n.profile-row app-logo {\n  width: 30px;\n  height: 30px;\n  margin-right: 20px;\n}\n\n.profile-row app-col {\n  padding: 0;\n}\n\n.profile-row p {\n  font-size: var(--font-size-h6-small);\n}\n\n.main-button {\n  margin-top: 15px;\n  margin-bottom: 20px;\n}\n\n.main-button .square {\n  width: 100%;\n  height: 100%;\n}\n\n.main-button .square app-img {\n  width: 65%;\n}\n\n.main-button p {\n  font-size: var(--font-size-h6);\n}\n\n.main-button app-row {\n  align-items: stretch;\n}\n\n.badge-class {\n  position: absolute;\n  top: 12px;\n  width: auto;\n  min-width: 24px;\n  height: 24px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n}\n\n.badge-class.alarm {\n  min-width: 16px;\n  height: 16px;\n  right: -6px;\n  top: -6px;\n  background: red;\n  padding: 0 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tdXNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBYTtBQUNqQjs7QUFDQTtFQUNDLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIscUNBQXFDO0FBRXRDOztBQUxBO0VBS0UsV0FBVztFQUNYLFlBQVk7RUFDTixpQkFBaUI7QUFJekI7O0FBWEE7RUFVUSxXQUFXO0VBQ2pCLFlBQVk7RUFDTixrQkFBa0I7QUFLMUI7O0FBakJBO0VBZUksVUFBVTtBQU1kOztBQXJCQTtFQWtCUSxvQ0FBb0M7QUFPNUM7O0FBSEE7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBTXZCOztBQVJBO0VBSVEsV0FBVztFQUNYLFlBQVk7QUFRcEI7O0FBYkE7RUFTUSxVQUFVO0FBUWxCOztBQWpCQTtFQWFRLDhCQUE4QjtBQVF0Qzs7QUFyQkE7RUFnQlEsb0JBQW9CO0FBUzVCOztBQUxBO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBUXZCOztBQWxCQTtFQVlRLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2YsY0FBYztBQVV0QiIsImZpbGUiOiJtYWluLXVzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbn1cbi5wcm9maWxlLXJvdyB7XG5cdHBhZGRpbmctdG9wOiAxMnB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMTJweDtcblx0cGFkZGluZy1sZWZ0OiB2YXIoLS1hcHAtcGFnZS1wYWRkaW5nKTtcblx0YXBwLWF2YXRhciB7XG5cdFx0d2lkdGg6IDM4cHg7XG5cdFx0aGVpZ2h0OiAzOHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcblx0fVxuICAgIGFwcC1sb2dvIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG5cdFx0aGVpZ2h0OiAzMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIGFwcC1jb2wge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oNi1zbWFsbCk7XG4gICAgfVxufVxuXG4ubWFpbi1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAuc3F1YXJlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICBcbiAgICBhcHAtaW1nIHtcbiAgICAgICAgd2lkdGg6IDY1JTtcbiAgICB9XG4gICAgfVxuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oNik7XG4gICAgfVxuICAgIGFwcC1yb3cge1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICB9ICBcbn1cblxuLmJhZGdlLWNsYXNze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEycHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICYuYWxhcm17XG4gICAgICAgIG1pbi13aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICByaWdodDogLTZweDtcbiAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 54405:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/main/user/main-user/main-user.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <app-row class=\"profile-row\">\n      <app-col size=\"auto\">\n        <app-logo></app-logo>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-avatar [src]=\"user.userData.user_profile\"></app-avatar>\n      </app-col>\n      <app-col size=\"auto\" (click)=\"navMypage()\">\n        <h4>{{ user.userData.user_name }}님</h4>\n        <app-row>\n          <app-col size=\"auto\">\n            <p style=\"margin-right: 5px;\">{{ Top_Today.month }}월 {{ Top_Today.day }}일</p>\n          </app-col>\n          <app-col size=\"auto\">\n            <p>{{ Top_Today.week }}</p>\n          </app-col>\n        </app-row>\n      </app-col>\n      <app-col style=\"text-align: right;position: relative;\">\n        <app-img (click)=\"router('알림함')\" class=\"alarm\" src=\"assets/img/main/bell.svg\"></app-img>\n        <ion-badge *ngIf=\"form.alarm_count\" class=\"badge-class alarm\">{{ form.alarm_count }}</ion-badge>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-menu-button></app-menu-button>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n  <ion-toolbar color=\"white\">\n    <app-input-group>\n      <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\" (ngModelChange)=\"getBoard()\"></app-select-scene>\n    </app-input-group>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"main-button\">\n    <app-row>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('위험성평가')\">\n          <app-img src=\"assets/img/menu/risk-evaluation-report-dark.svg\"></app-img>\n          <p>{{ languagePack.getText('위험성 평가') }}</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('위험작업허가(PTW)')\">\n          <app-img src=\"assets/img/menu/ptw-dark.svg\"></app-img>\n          <p>위험작업허가(PTW)</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('회의록')\">\n          <app-img src=\"assets/img/menu/conference-dark.svg\"></app-img>\n          <p>{{ languagePack.getText('회의록') }}</p>\n        </app-button>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('통합관제')\">\n          <app-img src=\"assets/img/menu/control-center-dark.svg\"></app-img>\n          <p>통합관제</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('')\" color=\"main-btn-grey\">\n          <app-img src=\"assets/img/menu/general-check-dark.svg\"></app-img>\n          <p>점검현황</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('')\" color=\"main-btn-grey\">\n          <app-img src=\"assets/img/menu/general-incongruity-dark.svg\"></app-img>\n          <p>부적합 조치</p>\n        </app-button>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"router('미결함')\">\n          <app-img src=\"assets/img/menu/undetermined-dark.svg\"></app-img>\n          <p>미결함</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" (click)=\"QRscanner()\">\n          <app-img src=\"assets/img/menu/nfc-dark.svg\"></app-img>\n          <p>QR/NFC</p>\n        </app-button>\n      </app-col>\n      <app-col size=\"4\">\n        <app-button class=\"square\" shape=\"square\" color=\"danger\" (click)=\"router('위험알림관리')\">\n          <app-img src=\"assets/img/menu/emergency-alarm-management-dark.svg\"></app-img>\n          <p>위험알림관리</p>\n        </app-button>\n      </app-col>\n    </app-row>\n  </div>\n\n  <app-main-user-bottom-menu\n  [project_id]=\"form.project_id\"\n  [master_company_id]=\"form.master_company_id\"\n  ></app-main-user-bottom-menu>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_main_user_main-user_main-user_module_ts.js.map