(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_main_user_user_main-user-bottom-menu_main-user-bottom-menu_module_ts"],{

/***/ 38545:
/*!***************************************************************************************************!*\
  !*** ./src/app/page/main/user/user/main-user-bottom-menu/main-user-bottom-menu-routing.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainUserBottomMenuPageRoutingModule": () => (/* binding */ MainUserBottomMenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _main_user_bottom_menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-user-bottom-menu.page */ 71152);




const routes = [
    {
        path: '',
        component: _main_user_bottom_menu_page__WEBPACK_IMPORTED_MODULE_0__.MainUserBottomMenuPage
    }
];
let MainUserBottomMenuPageRoutingModule = class MainUserBottomMenuPageRoutingModule {
};
MainUserBottomMenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainUserBottomMenuPageRoutingModule);



/***/ }),

/***/ 1121:
/*!*******************************************************************************************!*\
  !*** ./src/app/page/main/user/user/main-user-bottom-menu/main-user-bottom-menu.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainUserBottomMenuPageModule": () => (/* binding */ MainUserBottomMenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _main_user_bottom_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-user-bottom-menu-routing.module */ 38545);
/* harmony import */ var _main_user_bottom_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-user-bottom-menu.page */ 71152);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_page_notice_board_notice_notice_edit_notice_edit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/page/notice-board/notice/notice-edit/notice-edit.module */ 40819);
/* harmony import */ var src_app_page_work_plan_work_minutes_worker_minutes_edit_worker_minutes_edit_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.module */ 62432);
/* harmony import */ var src_app_page_notice_board_msds_msds_edit_msds_edit_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/page/notice-board/msds/msds-edit/msds-edit.module */ 57134);











let MainUserBottomMenuPageModule = class MainUserBottomMenuPageModule {
};
MainUserBottomMenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _main_user_bottom_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainUserBottomMenuPageRoutingModule,
            src_app_page_notice_board_notice_notice_edit_notice_edit_module__WEBPACK_IMPORTED_MODULE_3__.NoticeEditPageModule,
            src_app_page_work_plan_work_minutes_worker_minutes_edit_worker_minutes_edit_module__WEBPACK_IMPORTED_MODULE_4__.WorkerMinutesEditPageModule,
            src_app_page_notice_board_msds_msds_edit_msds_edit_module__WEBPACK_IMPORTED_MODULE_5__.MsdsEditPageModule
        ],
        declarations: [_main_user_bottom_menu_page__WEBPACK_IMPORTED_MODULE_1__.MainUserBottomMenuPage],
        exports: [_main_user_bottom_menu_page__WEBPACK_IMPORTED_MODULE_1__.MainUserBottomMenuPage]
    })
], MainUserBottomMenuPageModule);



/***/ }),

/***/ 71152:
/*!*****************************************************************************************!*\
  !*** ./src/app/page/main/user/user/main-user-bottom-menu/main-user-bottom-menu.page.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainUserBottomMenuPage": () => (/* binding */ MainUserBottomMenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_main_user_bottom_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./main-user-bottom-menu.page.html */ 68746);
/* harmony import */ var _main_user_bottom_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-user-bottom-menu.page.scss */ 9349);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_page_notice_board_msds_msds_edit_msds_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/page/notice-board/msds/msds-edit/msds-edit.page */ 91601);
/* harmony import */ var src_app_page_notice_board_notice_notice_edit_notice_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/page/notice-board/notice/notice-edit/notice-edit.page */ 45877);
/* harmony import */ var src_app_page_work_plan_work_minutes_worker_minutes_edit_worker_minutes_edit_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.page */ 9630);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);












let MainUserBottomMenuPage = class MainUserBottomMenuPage {
    constructor(connect, nav, modal, changeRef, user, languagePack) {
        this.connect = connect;
        this.nav = nav;
        this.modal = modal;
        this.changeRef = changeRef;
        this.user = user;
        this.languagePack = languagePack;
        this.segment = '1';
        // @Input() project_id:number;
        // @Input() master_company_id:number;
        this._project_id = 0;
        this._master_company_id = 0;
        this.notice_count = 0; // 안읽은 공지사항
        this.safetymeeting_count = 0; // 안읽은 회의록
        this.notice_list = []; // 공지사항
        this.msds_list = []; // msds
        this.safetymeeting_list = []; // 회의록
        /**
         * 하단 공지사항 리스트의 변화가 생기면서 위에 버튼이 클릭되는 현상!! 이 발생해서 딜레이를 줘야 한다.
         */
        this.routerTimeout = null;
    }
    set project_id(v) {
        if (this._project_id !== v) {
            this._project_id = v;
            this.getBoard();
        }
    }
    get project_id() { return this._project_id; }
    set master_company_id(v) {
        if (this._master_company_id !== v) {
            this._master_company_id = v;
            this.getBoard();
        }
    }
    get master_company_id() { return this._master_company_id; }
    ngOnInit() {
        // this.getBoard();
    }
    getBoard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getNotice();
            yield this.getMsds();
            yield this.getSafrtyMeeting();
            this.changeRef.detectChanges();
        });
    }
    /**
     * @function getNotice(): 공지사항 가져오기
     */
    getNotice() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const { user_type } = this.user.userData;
            if (user_type !== 'LH') {
                if (!this._master_company_id)
                    return false;
            }
            const res = yield this.connect.run('/main/board/notice', {
                project_id: this.project_id,
                master_company_id: this.master_company_id
            });
            switch (res.rsCode) {
                case 0:
                    console.log('res - ', res);
                    this.notice_list = res.rsMap;
                    this.notice_count = res.rsObj.read_count;
                    break;
                default:
                    this.notice_list = [];
                    this.notice_count = 0;
                    // this.toast.present({ color: 'warning', message: res.rsMsg });
                    break;
            }
        });
    }
    /**
     * @function getMsds(): MSDS 가져오기
     */
    getMsds() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/main/board/msds', {
                project_id: this.project_id
            });
            switch (res.rsCode) {
                case 0:
                    this.msds_list = res.rsMap;
                    // this.form.msds_count = res.rsObj.read_count;
                    break;
                default:
                    this.msds_list = [];
                    this.notice_count = 0;
                    // this.toast.present({ color: 'warning', message: res.rsMsg });
                    break;
            }
        });
    }
    /**
     * @function getSafrtyMeeting(): 회의록 가져오기
     */
    getSafrtyMeeting() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/main/board/safetymeeting', {
                project_id: this.project_id
            }, {});
            switch (res.rsCode) {
                case 0:
                    this.safetymeeting_list = res.rsMap;
                    this.safetymeeting_count = res.rsObj.read_count;
                    break;
                default:
                    this.safetymeeting_list = [];
                    this.safetymeeting_count = 0;
                    break;
            }
        });
    }
    segmentChange() {
        clearTimeout(this.routerTimeout);
        this.routerTimeout = setTimeout(() => {
            document.body.style.pointerEvents = null;
        }, 100);
        document.body.style.pointerEvents = 'none';
    }
    router(title) {
        switch (title) {
            case '공지사항':
                this.nav.navigateForward('/notice-list');
                break;
            case 'MSDS':
                this.nav.navigateForward('/msds-list');
                break;
            case '회의록':
                this.nav.navigateForward('/minutes-list');
                break;
        }
    }
    openNotice(notice_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_page_notice_board_notice_notice_edit_notice_edit_page__WEBPACK_IMPORTED_MODULE_6__.NoticeEditPage,
                componentProps: {
                    notice_id
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                // 모바일은 편집이 없어서 이렇게해도 충분함. 있으면 추가 코드 작성을 해야함.
                this.getNotice();
            }
        });
    }
    openMsds(msds_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_page_notice_board_msds_msds_edit_msds_edit_page__WEBPACK_IMPORTED_MODULE_5__.MsdsEditPage,
                componentProps: {
                    msds_id
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                // 모바일은 편집이 없어서 이렇게해도 충분함. 있으면 추가 코드 작성을 해야함.
                this.getNotice();
            }
        });
    }
    openMeeting(safety_meeting_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_page_work_plan_work_minutes_worker_minutes_edit_worker_minutes_edit_page__WEBPACK_IMPORTED_MODULE_7__.WorkerMinutesEditPage,
                componentProps: {
                    safety_meeting_id
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                // 모바일은 편집이 없어서 이렇게해도 충분함. 있으면 추가 코드 작성을 해야함.
                this.getNotice();
            }
        });
    }
};
MainUserBottomMenuPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_4__.NavService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_8__.LanguagePackService }
];
MainUserBottomMenuPage.propDecorators = {
    project_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    master_company_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }]
};
MainUserBottomMenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-main-user-bottom-menu',
        template: _raw_loader_main_user_bottom_menu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_main_user_bottom_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MainUserBottomMenuPage);



/***/ }),

/***/ 41937:
/*!************************************************************************************!*\
  !*** ./src/app/page/notice-board/notice/notice-edit/notice-edit-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeEditPageRoutingModule": () => (/* binding */ NoticeEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _notice_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice-edit.page */ 45877);




const routes = [
    {
        path: '',
        component: _notice_edit_page__WEBPACK_IMPORTED_MODULE_0__.NoticeEditPage
    }
];
let NoticeEditPageRoutingModule = class NoticeEditPageRoutingModule {
};
NoticeEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NoticeEditPageRoutingModule);



/***/ }),

/***/ 40819:
/*!****************************************************************************!*\
  !*** ./src/app/page/notice-board/notice/notice-edit/notice-edit.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeEditPageModule": () => (/* binding */ NoticeEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _notice_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice-edit-routing.module */ 41937);
/* harmony import */ var _notice_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice-edit.page */ 45877);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _notice_open_range_notice_open_range_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notice-open-range/notice-open-range.module */ 96455);
/* harmony import */ var _notice_open_range_notice_open_range_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notice-open-range/notice-open-range.page */ 62106);











let NoticeEditPageModule = class NoticeEditPageModule {
};
NoticeEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_2__.BasicComponentModule,
            _notice_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.NoticeEditPageRoutingModule,
            _notice_open_range_notice_open_range_module__WEBPACK_IMPORTED_MODULE_4__.NoticeOpenRangePageModule
        ],
        declarations: [_notice_edit_page__WEBPACK_IMPORTED_MODULE_1__.NoticeEditPage],
        providers: [
            _notice_open_range_notice_open_range_page__WEBPACK_IMPORTED_MODULE_5__.NoticeOpenRangePage
        ]
    })
], NoticeEditPageModule);



/***/ }),

/***/ 6633:
/*!*****************************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/qr-safety-in/qr-safety-in-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrSafetyInPageRoutingModule": () => (/* binding */ QrSafetyInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _qr_safety_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-safety-in.page */ 58081);




const routes = [
    {
        path: '',
        component: _qr_safety_in_page__WEBPACK_IMPORTED_MODULE_0__.QrSafetyInPage
    }
];
let QrSafetyInPageRoutingModule = class QrSafetyInPageRoutingModule {
};
QrSafetyInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QrSafetyInPageRoutingModule);



/***/ }),

/***/ 59189:
/*!*********************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/qr-safety-in/qr-safety-in.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrSafetyInPageModule": () => (/* binding */ QrSafetyInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _qr_safety_in_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-safety-in-routing.module */ 6633);
/* harmony import */ var _qr_safety_in_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qr-safety-in.page */ 58081);








let QrSafetyInPageModule = class QrSafetyInPageModule {
};
QrSafetyInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _qr_safety_in_routing_module__WEBPACK_IMPORTED_MODULE_1__.QrSafetyInPageRoutingModule
        ],
        declarations: [_qr_safety_in_page__WEBPACK_IMPORTED_MODULE_2__.QrSafetyInPage]
    })
], QrSafetyInPageModule);



/***/ }),

/***/ 5347:
/*!*******************************************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit-routing.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerMinutesEditPageRoutingModule": () => (/* binding */ WorkerMinutesEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _worker_minutes_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-minutes-edit.page */ 9630);




const routes = [
    {
        path: '',
        component: _worker_minutes_edit_page__WEBPACK_IMPORTED_MODULE_0__.WorkerMinutesEditPage
    }
];
let WorkerMinutesEditPageRoutingModule = class WorkerMinutesEditPageRoutingModule {
};
WorkerMinutesEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WorkerMinutesEditPageRoutingModule);



/***/ }),

/***/ 62432:
/*!***********************************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerMinutesEditPageModule": () => (/* binding */ WorkerMinutesEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _worker_minutes_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-minutes-edit-routing.module */ 5347);
/* harmony import */ var _worker_minutes_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker-minutes-edit.page */ 9630);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _qr_safety_in_qr_safety_in_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../qr-safety-in/qr-safety-in.module */ 59189);









let WorkerMinutesEditPageModule = class WorkerMinutesEditPageModule {
};
WorkerMinutesEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _qr_safety_in_qr_safety_in_module__WEBPACK_IMPORTED_MODULE_3__.QrSafetyInPageModule,
            _worker_minutes_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkerMinutesEditPageRoutingModule
        ],
        declarations: [_worker_minutes_edit_page__WEBPACK_IMPORTED_MODULE_1__.WorkerMinutesEditPage]
    })
], WorkerMinutesEditPageModule);



/***/ }),

/***/ 9349:
/*!*******************************************************************************************!*\
  !*** ./src/app/page/main/user/user/main-user-bottom-menu/main-user-bottom-menu.page.scss ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".segment-border {\n  border-top: 1px solid var(--ion-color-step-100);\n  border-bottom: 1px solid var(--ion-color-step-100);\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.segment-font {\n  font-size: 15px;\n}\n\n.segment-width {\n  width: 33.3333%;\n  flex: 0 0 33.3333%;\n}\n\n.badge-class {\n  position: absolute;\n  top: 12px;\n  width: auto;\n  min-width: 24px;\n  height: 24px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n}\n\n.badge-class.notice {\n  right: -10px;\n}\n\n.badge-class.safety {\n  right: -3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tdXNlci1ib3R0b20tbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBK0M7RUFDL0Msa0RBQWtEO0VBQ2xELGtCQUFnQjtFQUNoQixnQkFBYztBQUNsQjs7QUFFQTtFQUNJLGVBQWU7QUFDbkI7O0FBQ0E7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0FBRXRCOztBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBRXZCOztBQVpBO0VBWWEsWUFBWTtBQUl6Qjs7QUFoQkE7RUFhYSxXQUFXO0FBT3hCIiwiZmlsZSI6Im1haW4tdXNlci1ib3R0b20tbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VnbWVudC1ib3JkZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xufVxuXG4uc2VnbWVudC1mb250IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uc2VnbWVudC13aWR0aCB7XG4gICAgd2lkdGg6IDMzLjMzMzMlO1xuICAgIGZsZXg6IDAgMCAzMy4zMzMzJTtcbn1cblxuLmJhZGdlLWNsYXNzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMnB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1pbi13aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcblxuICAgICYubm90aWNle3JpZ2h0OiAtMTBweDt9XG4gICAgJi5zYWZldHl7cmlnaHQ6IC0zcHg7fVxufSJdfQ== */");

/***/ }),

/***/ 68746:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/main/user/user/main-user-bottom-menu/main-user-bottom-menu.page.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar color=\"white\" class=\"segment-border\">\n  <ion-segment [(ngModel)]=\"segment\" color=\"primary\" (ionChange)=\"segmentChange()\">\n    <ion-segment-button value=\"1\" class=\"segment-font segment-width\">\n      {{ languagePack.getText('공지사항') }}\n      <!-- <ion-badge *ngIf=\"notice_count\" class=\"badge-class notice\">{{ notice_count }}</ion-badge> -->\n    </ion-segment-button>\n    <ion-segment-button value=\"2\" class=\"segment-font segment-width\">MSDS</ion-segment-button>\n    <ion-segment-button value=\"3\" class=\"segment-font segment-width\">\n      {{ languagePack.getText('회의록') }}\n      <!-- <ion-badge *ngIf=\"safetymeeting_count\" class=\"badge-class notice\">{{ safetymeeting_count }}</ion-badge> -->\n    </ion-segment-button>\n  </ion-segment>\n</ion-toolbar>\n\n<div [style.display]=\"segment === '1' ? 'block' : 'none'\">\n  <app-row *ngFor=\"let item of notice_list;\" style=\"margin-top: 15px;\" (click)=\"openNotice(item.notice_id)\">\n    <app-col style=\"margin-left: 20px;\">\n      <h5>{{ item.notice_title }}</h5>\n    </app-col>\n    <app-col size=\"auto\"></app-col>\n    <app-col size=\"auto\">\n      <h6>{{ item.create_date }}</h6>\n    </app-col>\n  </app-row>\n  <app-button color=\"secondary\" style=\"width: 100%;\" (click)=\"router('공지사항')\">{{ languagePack.getText('더보기') }}</app-button>\n</div>\n<div [style.display]=\"segment === '2' ? 'block' : 'none'\">\n  <app-row *ngFor=\"let item of msds_list;\" style=\"margin-top: 15px;\" (click)=\"openMsds(item.msds_id)\">\n    <app-col style=\"margin-left: 20px;\">\n      <h5>[{{ item.company_name }}]<br>{{ item.msds_title }}</h5>\n    </app-col>\n    <app-col size=\"auto\"></app-col>\n    <app-col size=\"auto\">\n      <h6>{{ item.create_date }}</h6>\n    </app-col>\n  </app-row>\n  <app-button color=\"secondary\" style=\"width: 100%;\" (click)=\"router('MSDS')\">{{ languagePack.getText('더보기') }}</app-button>\n</div>\n<div [style.display]=\"segment === '3' ? 'block' : 'none'\">\n  <app-row *ngFor=\"let item of safetymeeting_list;\" style=\"margin-top: 15px;\" (click)=\"openMeeting(item.safety_meeting_id)\">\n    <app-col style=\"margin-left: 20px;\">\n      <h5>{{ item.safety_meeting_type }}</h5>\n    </app-col>\n    <app-col size=\"auto\"></app-col>\n    <app-col size=\"auto\">\n      <h6>{{ item.create_date }}</h6>\n    </app-col>\n  </app-row>\n  <app-button color=\"secondary\" style=\"width: 100%;\" (click)=\"router('회의록')\">{{ languagePack.getText('더보기') }}</app-button>\n  \n</div>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_main_user_user_main-user-bottom-menu_main-user-bottom-menu_module_ts.js.map