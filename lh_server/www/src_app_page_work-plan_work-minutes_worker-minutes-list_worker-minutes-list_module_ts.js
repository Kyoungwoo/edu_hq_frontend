(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_work-plan_work-minutes_worker-minutes-list_worker-minutes-list_module_ts"],{

/***/ 80621:
/*!*******************************************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/worker-minutes-list/worker-minutes-list-routing.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerMinutesListPageRoutingModule": () => (/* binding */ WorkerMinutesListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _worker_minutes_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-minutes-list.page */ 75311);




const routes = [
    {
        path: '',
        component: _worker_minutes_list_page__WEBPACK_IMPORTED_MODULE_0__.WorkerMinutesListPage
    }
];
let WorkerMinutesListPageRoutingModule = class WorkerMinutesListPageRoutingModule {
};
WorkerMinutesListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WorkerMinutesListPageRoutingModule);



/***/ }),

/***/ 28350:
/*!***********************************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/worker-minutes-list/worker-minutes-list.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerMinutesListPageModule": () => (/* binding */ WorkerMinutesListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _worker_minutes_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-minutes-list-routing.module */ 80621);
/* harmony import */ var _worker_minutes_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker-minutes-list.page */ 75311);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var _worker_minutes_detail_search_worker_minutes_detail_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../worker-minutes-detail-search/worker-minutes-detail-search.module */ 31990);
/* harmony import */ var _worker_minutes_select_type_worker_minutes_select_type_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../worker-minutes-select-type/worker-minutes-select-type.module */ 13922);
/* harmony import */ var _worker_minutes_edit_worker_minutes_edit_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../worker-minutes-edit/worker-minutes-edit.module */ 62432);
/* harmony import */ var _worker_minutes_pending_list_worker_minutes_pending_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../worker-minutes-pending-list/worker-minutes-pending-list.module */ 76171);













let WorkerMinutesListPageModule = class WorkerMinutesListPageModule {
};
WorkerMinutesListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _worker_minutes_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkerMinutesListPageRoutingModule,
            // 모바일 상세검색
            _worker_minutes_detail_search_worker_minutes_detail_search_module__WEBPACK_IMPORTED_MODULE_4__.WorkerMinutesDetailSearchPageModule,
            // 신규작성 시, 타입 선택
            _worker_minutes_select_type_worker_minutes_select_type_module__WEBPACK_IMPORTED_MODULE_5__.WorkerMinutesSelectTypePageModule,
            // 수정 페이지
            _worker_minutes_edit_worker_minutes_edit_module__WEBPACK_IMPORTED_MODULE_6__.WorkerMinutesEditPageModule,
            // 미결함
            _worker_minutes_pending_list_worker_minutes_pending_list_module__WEBPACK_IMPORTED_MODULE_7__.WorkerMinutesPendingListPageModule
        ],
        declarations: [_worker_minutes_list_page__WEBPACK_IMPORTED_MODULE_1__.WorkerMinutesListPage]
    })
], WorkerMinutesListPageModule);



/***/ }),

/***/ 75311:
/*!*********************************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/worker-minutes-list/worker-minutes-list.page.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyMeetingInfo": () => (/* binding */ SafetyMeetingInfo),
/* harmony export */   "WorkerMinutesListPage": () => (/* binding */ WorkerMinutesListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_worker_minutes_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./worker-minutes-list.page.html */ 59673);
/* harmony import */ var _worker_minutes_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker-minutes-list.page.scss */ 6263);
/* harmony import */ var src_app_component_modal_people_view_people_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/modal/people-view/people-view.component */ 85483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var _worker_minutes_detail_search_worker_minutes_detail_search_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../worker-minutes-detail-search/worker-minutes-detail-search.page */ 94724);
/* harmony import */ var _worker_minutes_edit_worker_minutes_edit_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../worker-minutes-edit/worker-minutes-edit.page */ 9630);
/* harmony import */ var _worker_minutes_pending_list_worker_minutes_pending_list_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../worker-minutes-pending-list/worker-minutes-pending-list.page */ 52084);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);















class SafetyMeetingInfo {
}
let WorkerMinutesListPage = class WorkerMinutesListPage {
    constructor(modal, connect, toast, date, user, nav, popover, languagePack) {
        this.modal = modal;
        this.connect = connect;
        this.toast = toast;
        this.date = date;
        this.user = user;
        this.nav = nav;
        this.popover = popover;
        this.languagePack = languagePack;
        this.form = {
            project_id: null,
            master_company_id: null,
            safety_meeting_type: '전체',
            start_date: this.date.today({ year: -3 }),
            end_date: this.date.today(),
            search_text: '',
            // approval_cnt_answer: '전체',
            limit_no: 0,
            safety_meeting_state: '전체'
        };
        this.permission = {
            company_id: false,
            add: false
        };
        this.event = {
            get: null
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getForm();
            this.get();
            // event 물리기
            this.event.get = this.getEvent.bind(this);
            window.addEventListener('worker-minutes-list:get()', this.event.get);
        });
    }
    ngOnDestroy() {
        window.removeEventListener('worker-minutes-list:get()', this.event.get);
    }
    /** event 파트 */
    getEvent() {
        this.get(0);
    }
    /**
     * permission 과 form 을 가져옴.
     */
    getForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const { user_role, belong_data } = this.user.userData;
            this.form.project_id = belong_data.project_id;
            this.form.master_company_id = belong_data.master_company_id;
            if (belong_data.company_contract_type === 'LH'
                || belong_data.company_contract_type === '감리사') {
                this.permission.company_id = true;
                this.permission.add = false;
                this.form.master_company_id = 0;
            }
            else if (belong_data.company_contract_type === '원청사') {
                this.permission.company_id = false;
                // 원청사 관리자에게만 보이는 버튼. LH,감리,협력사의 경우 회의 진행 버튼이 없다.(회의록 기획서 9p)
                this.permission.add = true;
            }
            else if (belong_data.company_contract_type === '협력사') {
                this.permission.company_id = false;
                this.permission.add = false;
            }
        });
    }
    /**
     * web, mobile 둘다 검색 시작할 때는 이걸 쓴다.
     * 이유는 limit_no를 초기화할 필요성이 있기 떄문 + 1008 예외처리가 다르다.
     */
    get(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            let trans_form = JSON.parse(JSON.stringify(this.form));
            trans_form.project_id = trans_form.project_id ? [trans_form.project_id] : [];
            this.res = yield this.connect.run('/board/safety_meeting/list', this.form, { loading: true });
            if (this.res.rsCode === 0) {
                this.res.rsMap.forEach((item, i) => {
                    switch (item.safety_meeting_type) {
                        case '노사':
                            item.safety_meeting_type = '노사 협의체';
                            break;
                        case '안전':
                            item.safety_meeting_type = '안전 및 보건의 관한 협의체';
                            break;
                        case '산업':
                            item.safety_meeting_type = '산업안전보건보건위원회';
                            break;
                    }
                    item.index = this.res.rsObj.row_count - this.form.limit_no - i;
                });
            }
            else if (this.res.rsCode === 1008) {
                // 암것도 안함.
            }
            else {
                this.toast.present({ color: 'warning', message: this.res.rsMsg });
            }
        });
    }
    /**
     * 모바일 무한스크롤 시, 사용된다.
     */
    getMobile($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = this.res.rsMap.length;
            const res = yield this.connect.run('/board/safety_meeting/list', this.form, {});
            if (res.rsCode === 0) {
                /**
                 * 모바일은 res를 대체하는 것이 아니라, 데이터를 스크롤 하단에 이어붙여야 함.
                 */
                res.rsMap.forEach((item, i) => {
                    item.index = res.rsObj.row_count - this.form.limit_no - i;
                    this.res.rsMap.push(item);
                });
            }
            else if (res.rsCode === 1008) {
                /**
                 * 더 로딩할 데이터가 없음. 게시판 형식과는 다르게, 데이터를 떼면, 데이터가 다 날아가기 때문에 데이터를 떼면 안됨.
                 * 아무것도 안하거나, 마지막 리스트라고 알려주기만 하면 됨.
                 */
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
            setTimeout(() => {
                $event.target.complete();
            }, 50);
        });
    }
    /**
     * 모바일 상세검색 팝업. PC에서는 안씀
     */
    detailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _worker_minutes_detail_search_worker_minutes_detail_search_page__WEBPACK_IMPORTED_MODULE_8__.WorkerMinutesDetailSearchPage,
                componentProps: {
                    form: this.form
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.form = data;
                this.get(0);
            }
        });
    }
    /**
     * 회의록 추가
     */
    add() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _worker_minutes_edit_worker_minutes_edit_page__WEBPACK_IMPORTED_MODULE_9__.WorkerMinutesEditPage,
                cssClass: 'risk-evaluation-class',
                componentProps: {
                    project_id: this.form.project_id
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data)
                this.get();
        });
    }
    edit(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _worker_minutes_edit_worker_minutes_edit_page__WEBPACK_IMPORTED_MODULE_9__.WorkerMinutesEditPage,
                cssClass: 'risk-evaluation-class',
                componentProps: {
                    safety_meeting_id: item.safety_meeting_id
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data)
                this.get();
        });
    }
    /**
     * 미결함으로 이동
     */
    pending() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _worker_minutes_pending_list_worker_minutes_pending_list_page__WEBPACK_IMPORTED_MODULE_10__.WorkerMinutesPendingListPage,
            });
            modal.present();
        });
    }
    userInfo(education_safe_manager_id, ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            ev.stopPropagation();
            const popover = yield this.popover.create({
                component: src_app_component_modal_people_view_people_view_component__WEBPACK_IMPORTED_MODULE_2__.PeopleViewComponent,
                componentProps: {
                    type: '관리자',
                    education_safe_manager_id
                },
                cssClass: 'education-info',
                event: ev
            });
            popover.present();
        });
    }
};
WorkerMinutesListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__.DateService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__.NavService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.PopoverController },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_11__.LanguagePackService }
];
WorkerMinutesListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-worker-minutes-list',
        template: _raw_loader_worker_minutes_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_worker_minutes_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WorkerMinutesListPage);



/***/ }),

/***/ 6263:
/*!***********************************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/worker-minutes-list/worker-minutes-list.page.scss ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrZXItbWludXRlcy1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 59673:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/work-plan/work-minutes/worker-minutes-list/worker-minutes-list.page.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n  <app-header-admin></app-header-admin>\n  <ion-content style=\"--padding-top:15px\">\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\"><app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"get(0)\">검색</app-button></app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene [(ngModel)]=\"form.project_id\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor [project_id]=\"form.project_id\" [(ngModel)]=\"form.master_company_id\" [disabled]=\"!permission.company_id\"></app-select-contractor>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select label=\"회의유형\" [(ngModel)]=\"form.safety_meeting_type\">\n                  <app-select-option value=\"전체\">전체</app-select-option>\n                  <app-select-option value=\"안전\">안전 및 보건에 관한 협의체 회의록</app-select-option>\n                  <app-select-option value=\"노사\">노사 협의체 회의록</app-select-option>\n                  <app-select-option value=\"산업\">산업안전보건위원회 회의록</app-select-option>\n                </app-select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input-group label=\"회의일\">\n                  <app-calendar name=\"start_date\" [(ngModel)]=\"form.start_date\" [max]=\"form.end_date\"></app-calendar>\n                  ~\n                  <app-calendar name=\"end_date\" [(ngModel)]=\"form.end_date\" [min]=\"form.start_date\"></app-calendar>\n                </app-input-group>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <!-- <app-select-approval-type [(ngModel)]=\"form.approval_cnt_answer\"></app-select-approval-type> -->\n                <app-select label=\"회의 상태\" [(ngModel)]=\"form.safety_meeting_state\">\n                  <app-select-option value=\"전체\">전체</app-select-option>\n                  <app-select-option value=\"회의 전\">회의 전</app-select-option>\n                  <app-select-option value=\"회의 중\">회의 중</app-select-option>\n                  <app-select-option value=\"회의 종료\">회의 종료</app-select-option>\n                </app-select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" [(ngModel)]=\"form.search_text\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n\n      <app-col>\n\n        <ion-toolbar color=\"white\">\n\n          <ion-buttons slot=\"start\">\n            <app-button *ngIf=\"permission.add\" fill=\"translucent\" (click)=\"add()\">회의 개설</app-button>\n            <!-- <app-button fill=\"translucent\" (click)=\"pending()\">미결문서</app-button> -->\n          </ion-buttons>\n\n        </ion-toolbar>\n\n        <ion-toolbar color=\"white\">\n          <h5>회의록 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n        </ion-toolbar>\n          <app-table>\n            <thead>\n              <tr>\n                <th style=\"width:48px;\">No</th>\n                <th>원청사</th>\n                <th>회의록</th>\n                <th>회의 일자</th>\n                <th>회의 시간</th>\n                <th>개설자</th>\n                <th>회의 상태</th>\n              </tr>\n            </thead>\n              <tr class=\"button\" *ngFor=\"let item of res?.rsMap let i = index\" (click)=\"edit(item)\">\n                <td>{{ i+1 }}</td>\n                <td>{{ item.master_company_name }}</td>\n                <td>{{ item.safety_meeting_type }}</td>\n                <td>{{ item.safety_meeting_date }}</td>\n                <td>{{ item.safety_meeting_time }}</td>\n                <td (click)=\"userInfo(item.user_id,$event)\">{{ item.user_name }}</td>\n                <td>{{ item.safety_meeting_state }}</td>\n              </tr>\n            <tbody>\n            </tbody>\n          </app-table>\n          \n          <app-pager [totalCount]=\"res?.rsObj?.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"get($event)\"></app-pager>\n\n\n\n      </app-col>\n\n    </app-row>\n  </ion-content> \n</ng-container>\n\n\n\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>{{ languagePack.getText('회의록') }}</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <!-- <app-input label=\"현장\" value=\"수원 당수 현장\" [readonly]=\"true\"></app-input> -->\n        <app-select-scene name=\"project_id\" [all]=\"true\" [(ngModel)]=\"form.project_id\" [disabled]=\"true\"></app-select-scene>\n        <app-button (click)=\"detailSearch()\">{{ languagePack.getText('상세검색') }}</app-button>\n      </app-input-group>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <app-row>\n      <app-col></app-col>\n      <app-col size=\"auto\">\n        <app-button *ngIf=\"permission.add\" fill=\"translucent\" (click)=\"add()\">회의 개설</app-button>\n        <!-- <app-button fill=\"translucent\" (click)=\"pending()\">미결문서</app-button> -->\n      </app-col>\n    </app-row>\n    \n    <app-card *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item)\">\n      <app-row style=\"align-items: flex-start;\">\n        <app-col>\n          <h5>{{ item.safety_meeting_type }}</h5>\n\n        </app-col>\n        <app-col size=\"auto\">\n          <chip-safety-state [safety_meeting_state]=\"item.safety_meeting_state\"></chip-safety-state>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <p>{{ item.master_company_name }} / {{ item.safety_meeting_place }} / {{ item.user_name }}</p>\n          <p>회의일: {{ item.safety_meeting_date }} / {{ item.safety_meeting_time+'('+item.safety_meeting_date_week_day+')' }}</p>\n          <!-- <ion-badge color=\"success\">{{ item.safety_meeting_state }}</ion-badge> -->\n        </app-col>\n      </app-row>\n    </app-card>\n    \n    <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n      <ion-infinite-scroll-content loading-spinner=\"dots\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-content>\n</ng-container>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_work-plan_work-minutes_worker-minutes-list_worker-minutes-list_module_ts.js.map