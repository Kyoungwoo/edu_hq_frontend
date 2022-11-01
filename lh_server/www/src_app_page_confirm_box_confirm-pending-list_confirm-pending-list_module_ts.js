(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_confirm_box_confirm-pending-list_confirm-pending-list_module_ts"],{

/***/ 76003:
/*!**********************************************************************************************!*\
  !*** ./src/app/page/confirm/box/confirm-pending-list/confirm-pending-list-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPendingListPageRoutingModule": () => (/* binding */ ConfirmPendingListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _confirm_pending_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-pending-list.page */ 97821);




const routes = [
    {
        path: '',
        component: _confirm_pending_list_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmPendingListPage
    }
];
let ConfirmPendingListPageRoutingModule = class ConfirmPendingListPageRoutingModule {
};
ConfirmPendingListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfirmPendingListPageRoutingModule);



/***/ }),

/***/ 13588:
/*!**************************************************************************************!*\
  !*** ./src/app/page/confirm/box/confirm-pending-list/confirm-pending-list.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPendingListPageModule": () => (/* binding */ ConfirmPendingListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _confirm_pending_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-pending-list-routing.module */ 76003);
/* harmony import */ var _confirm_pending_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-pending-list.page */ 97821);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var _confirm_pending_detail_search_confirm_pending_detail_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirm-pending-detail-search/confirm-pending-detail-search.module */ 21153);
/* harmony import */ var src_app_page_work_plan_work_minutes_worker_minutes_edit_worker_minutes_edit_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.module */ 62432);
/* harmony import */ var src_app_page_safety_education_education_result_safety_education_result_edit_safety_education_result_edit_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/page/safety-education/education-result/safety-education-result-edit/safety-education-result-edit.module */ 5551);
/* harmony import */ var src_app_page_work_plan_risk_assessment_risk_evaluation_edit_risk_evaluation_edit_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/page/work-plan/risk-assessment/risk-evaluation-edit/risk-evaluation-edit.module */ 54797);













let ConfirmPendingListPageModule = class ConfirmPendingListPageModule {
};
ConfirmPendingListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _confirm_pending_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmPendingListPageRoutingModule,
            _confirm_pending_detail_search_confirm_pending_detail_search_module__WEBPACK_IMPORTED_MODULE_4__.ConfirmPendingDetailSearchPageModule,
            src_app_page_safety_education_education_result_safety_education_result_edit_safety_education_result_edit_module__WEBPACK_IMPORTED_MODULE_6__.SafetyEducationResultEditPageModule,
            src_app_page_work_plan_risk_assessment_risk_evaluation_edit_risk_evaluation_edit_module__WEBPACK_IMPORTED_MODULE_7__.RiskEvaluationEditPageModule,
            src_app_page_work_plan_work_minutes_worker_minutes_edit_worker_minutes_edit_module__WEBPACK_IMPORTED_MODULE_5__.WorkerMinutesEditPageModule
        ],
        declarations: [_confirm_pending_list_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmPendingListPage]
    })
], ConfirmPendingListPageModule);



/***/ }),

/***/ 97821:
/*!************************************************************************************!*\
  !*** ./src/app/page/confirm/box/confirm-pending-list/confirm-pending-list.page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPendingListPage": () => (/* binding */ ConfirmPendingListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_confirm_pending_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./confirm-pending-list.page.html */ 51564);
/* harmony import */ var _confirm_pending_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-pending-list.page.scss */ 38121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var src_app_service_approval_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/approval.service */ 91589);
/* harmony import */ var _confirm_pending_detail_search_confirm_pending_detail_search_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../confirm-pending-detail-search/confirm-pending-detail-search.page */ 30898);












class ConfirmObtainItem {
}
let ConfirmPendingListPage = class ConfirmPendingListPage {
    constructor(_modal, user, connect, toast, date, approval, languagePack) {
        this._modal = _modal;
        this.user = user;
        this.connect = connect;
        this.toast = toast;
        this.date = date;
        this.approval = approval;
        this.languagePack = languagePack;
        this.form = {
            project_id: 0,
            master_company_id: 0,
            company_id: 0,
            start_date: '',
            end_date: '',
            search_text: '',
            limit_no: 0 // 20개씩 가져옵니다
        };
        this.permission = {
            master_company_all: false
        };
        this.event = {
            get: null
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getForm();
            this.get();
            this.event.get = this.getEvent.bind(this);
            window.addEventListener('approval-list:get()', this.event.get);
        });
    }
    ngOnDestroy() {
        window.removeEventListener('approval-list:get()', this.event.get);
    }
    getEvent() {
        this.get(0);
    }
    getForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const { user_role, belong_data } = this.user.userData;
            if (user_role === 'PARTNER_HEAD' || user_role === 'PARTNER_GENERAL')
                this.form.company_id = belong_data.company_id;
            this.form.project_id = belong_data.project_id;
            // if(belong_data.company_contract_type === 'LH'
            // || belong_data.company_contract_type === '감리사') {
            //   this.permission.master_company_all = true;
            //   this.form.company_id = 0;
            // }
            // else {
            //   this.permission.master_company_all = false;
            //   this.form.company_id = belong_data.company_id;
            // }
            this.form.master_company_id = belong_data.master_company_id || 0;
            // if(this.user.userData.user_role === 'MASTER_HEAD' || this.user.userData.user_role === 'MASTER_GENERAL'){
            //   this.form.company_id = 0;
            // }
            this.form.start_date = this.date.today({ year: -1 });
            this.form.end_date = this.date.today();
        });
    }
    /**
     * web, mobile 둘다 검색 시작할 때는 이걸 쓴다.
     * 이유는 limit_no를 초기화할 필요성이 있기 떄문 + 1008 예외처리가 다르다.
     */
    get(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            let trans_form = JSON.parse(JSON.stringify(this.form));
            trans_form.project_id = trans_form.project_id ? [trans_form.project_id] : [];
            this.res = yield this.connect.run('/approval/board/req/get', this.form, { loading: true });
            if (this.res.rsCode === 0) {
                // 암것도 안함
                this.res.rsMap.forEach((item, i) => {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = this.res.rsMap.length;
            const res = yield this.connect.run('/approval/board/req/get', this.form, { loading: true });
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
    detail(item) {
        this.approval.getComponent(item.ctgo_approval_module_id, item.target_id);
    }
    openDetailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _confirm_pending_detail_search_confirm_pending_detail_search_page__WEBPACK_IMPORTED_MODULE_8__.ConfirmPendingDetailSearchPage,
                componentProps: {
                    form: this.form,
                    permission: this.permission
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
};
ConfirmPendingListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_6__.DateService },
    { type: src_app_service_approval_service__WEBPACK_IMPORTED_MODULE_7__.ApprovalService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
ConfirmPendingListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-confirm-pending-list',
        template: _raw_loader_confirm_pending_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_confirm_pending_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfirmPendingListPage);



/***/ }),

/***/ 38121:
/*!**************************************************************************************!*\
  !*** ./src/app/page/confirm/box/confirm-pending-list/confirm-pending-list.page.scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLXBlbmRpbmctbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 51564:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/confirm/box/confirm-pending-list/confirm-pending-list.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- pc -->\n<ng-container *mobileHidden>\n  <app-header-admin></app-header-admin>\n  <ion-content>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\"><app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"get(0)\">검색</app-button></app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene [(ngModel)]=\"form.project_id\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor [project_id]=\"form.project_id\" [(ngModel)]=\"form.master_company_id\" [allState]=\"permission.master_company_all\"></app-select-contractor>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor-company [project_id]=\"form.project_id\" [master_company_id]=\"form.master_company_id\" [(ngModel)]=\"form.company_id\" [all]=\"true\"></app-select-contractor-company>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input-group label=\"작성일\">\n                  <app-calendar [(ngModel)]=\"form.start_date\" [max]=\"form.end_date\"></app-calendar>\n                  ~\n                  <app-calendar [(ngModel)]=\"form.end_date\" [max]=\"form.start_date\"></app-calendar>\n                </app-input-group>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" placeholder=\"검색어를 입력해 주세요.\" [(ngModel)]=\"form.search_text\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n\n        <ion-toolbar color=\"white\">\n          <h5>미결 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n        </ion-toolbar>\n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 48px;\">No</th>\n              <th>서식명</th>\n              <th>업체명</th>\n              <th>작성자</th>\n              <th>작성일</th>\n              <th>결재상태</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"button\" *ngFor=\"let item of res?.rsMap; let i = index;\" (click)=\"detail(item)\">\n              <td>{{ item.index }}</td>\n              <td>{{ item.ctgo_approval_module_name }}</td>\n              <td>{{ item.company_name }}</td>\n              <td>{{ item.user_name }}</td>\n              <td>{{ item.create_date }}</td>\n              <td>{{ item.approval_cnt_answer }}</td>\n            </tr>\n          </tbody>\n        </app-table>\n\n        <app-pager [totalCount]=\"res?.rsObj?.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"get($event)\"></app-pager>\n\n      </app-col>\n    </app-row>\n  </ion-content>\n</ng-container>\n\n<!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>미결함</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <app-select-scene [readonly]=\"true\" [(ngModel)]=\"form.project_id\"></app-select-scene>\n        <app-button (click)=\"openDetailSearch()\">{{ languagePack.getText('상세검색') }}</app-button>\n      </app-input-group>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    \n    <app-card *ngFor=\"let item of res?.rsMap; let i = index;\" (click)=\"detail(item)\">\n      <app-row style=\"align-items: flex-start;\">\n        <app-col>\n          <h5>{{ item.ctgo_approval_module_name }}</h5>\n        </app-col>\n        <app-col size=\"auto\">\n          <app-chip-approval-answer [approval_cnt_answer]=\"item.approval_cnt_answer\"></app-chip-approval-answer>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <p>{{ item.company_name }}/{{ item.user_name }}</p>\n          <p>{{ languagePack.getText('작성일') }}: {{ item.create_date }}</p>\n        </app-col>\n      </app-row>\n    </app-card>\n\n    <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n      <ion-infinite-scroll-content loading-spinner=\"dots\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_confirm_box_confirm-pending-list_confirm-pending-list_module_ts.js.map