(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_safety-education_education-result_safety-education-result-list_safety-education--76f61c"],{

/***/ 91509:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-result/safety-education-result-list/safety-education-result-list-routing.module.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyEducationResultListPageRoutingModule": () => (/* binding */ SafetyEducationResultListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _safety_education_result_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-education-result-list.page */ 99214);




const routes = [
    {
        path: '',
        component: _safety_education_result_list_page__WEBPACK_IMPORTED_MODULE_0__.SafetyEducationResultListPage
    }
];
let SafetyEducationResultListPageRoutingModule = class SafetyEducationResultListPageRoutingModule {
};
SafetyEducationResultListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SafetyEducationResultListPageRoutingModule);



/***/ }),

/***/ 58921:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-result/safety-education-result-list/safety-education-result-list.module.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyEducationResultListPageModule": () => (/* binding */ SafetyEducationResultListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _safety_education_result_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-education-result-list-routing.module */ 91509);
/* harmony import */ var _safety_education_result_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-education-result-list.page */ 99214);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _safety_education_result_detail_search_safety_education_result_detail_search_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../safety-education-result-detail-search/safety-education-result-detail-search.module */ 89024);
/* harmony import */ var _new_write_target_new_write_target_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../new-write-target/new-write-target.module */ 34214);
/* harmony import */ var _education_confirm_pending_list_education_confirm_pending_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../education-confirm-pending-list/education-confirm-pending-list.module */ 24741);











let SafetyEducationResultListPageModule = class SafetyEducationResultListPageModule {
};
SafetyEducationResultListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _safety_education_result_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.SafetyEducationResultListPageRoutingModule,
            _safety_education_result_detail_search_safety_education_result_detail_search_module__WEBPACK_IMPORTED_MODULE_3__.SafetyEducationResultDetailSearchPageModule,
            _new_write_target_new_write_target_module__WEBPACK_IMPORTED_MODULE_4__.NewWriteTargetPageModule,
            _education_confirm_pending_list_education_confirm_pending_list_module__WEBPACK_IMPORTED_MODULE_5__.EducationConfirmPendingListPageModule
        ],
        declarations: [_safety_education_result_list_page__WEBPACK_IMPORTED_MODULE_1__.SafetyEducationResultListPage]
    })
], SafetyEducationResultListPageModule);



/***/ }),

/***/ 99214:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-result/safety-education-result-list/safety-education-result-list.page.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyEducationResultListPage": () => (/* binding */ SafetyEducationResultListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_safety_education_result_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./safety-education-result-list.page.html */ 88611);
/* harmony import */ var _safety_education_result_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-education-result-list.page.scss */ 611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var _education_confirm_pending_list_education_confirm_pending_list_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../education-confirm-pending-list/education-confirm-pending-list.page */ 3324);
/* harmony import */ var _new_write_target_new_write_target_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../new-write-target/new-write-target.page */ 90737);
/* harmony import */ var _safety_education_result_detail_search_safety_education_result_detail_search_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../safety-education-result-detail-search/safety-education-result-detail-search.page */ 54902);
/* harmony import */ var _safety_education_result_edit_safety_education_result_edit_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../safety-education-result-edit/safety-education-result-edit.page */ 30020);
















let SafetyEducationResultListPage = class SafetyEducationResultListPage {
    constructor(_modal, date, connect, user, toast, promise, nav, languagePack) {
        this._modal = _modal;
        this.date = date;
        this.connect = connect;
        this.user = user;
        this.toast = toast;
        this.promise = promise;
        this.nav = nav;
        this.languagePack = languagePack;
        this.form = {
            approval_cnt_answer: '전체',
            company_id: 0,
            ctgo_education_safe_id: 0,
            end_date: this.date.today({ month: 1 }),
            // end_date: '2025-12-01', // 검색 신청 종료일
            limit_no: 0,
            project_id: 0,
            search_text: '',
            start_date: this.date.today({ month: -1 }) // 검색 신청 시작일
            // start_date: '2019-01-01' // 검색 신청 시작일
        };
        this.event = {
            get: null
        };
        this.editable = {
            company_id: false,
            add: false
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.projectRolechekc();
            yield this.promise.wait(() => this.form.company_id);
            this.getList();
            // event 물리기
            this.event.get = this.getEvent.bind(this);
            window.addEventListener('safety-education-result-list:get()', this.event.get);
        });
    }
    ngOnDestroy() {
        window.removeEventListener('safety-education-result-list:get()', this.event.get);
    }
    /** event 파트 */
    getEvent() {
        this.getList(0);
    }
    projectRolechekc() {
        const { user_role, belong_data } = this.user.userData;
        if (user_role === 'MASTER_HEAD' ||
            user_role === 'PARTNER_GENERAL' ||
            user_role === 'PARTNER_HEAD' ||
            user_role === 'MASTER_GENERAL') {
            this.editable.company_id = true;
            this.form.project_id = belong_data.project_id;
            this.form.company_id = belong_data.master_company_id;
            console.log("belong_data.company_id - ", belong_data.company_id);
            console.log("belong_data.company_id - ", this.form.company_id);
        }
        else if (user_role === 'LH_HEAD') {
            this.form.project_id = belong_data.project_id;
            this.editable.add = true;
        }
    }
    getList(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            this.res = yield this.connect.run('/education/report/list', this.form);
            if (this.res.rsCode === 0) {
                this.res.rsMap.map((item, i) => {
                    item.index = this.res.rsObj.row_count - this.form.limit_no - i;
                    item.education_safe_date = `${item.education_safe_date} (${this.date.day(item.education_safe_date)[0]})`;
                    item.create_date = `${item.create_date} (${this.date.day(item.create_date)[0]})`;
                });
            }
            else if (this.res.rsCode === 1008) {
                // 암것도 안함
            }
            else {
                this.toast.present({ message: this.res.rsMsg, color: 'warning' });
                this.res = null;
            }
        });
    }
    openDetailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _safety_education_result_detail_search_safety_education_result_detail_search_page__WEBPACK_IMPORTED_MODULE_11__.SafetyEducationResultDetailSearchPage,
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.form = data;
                this.getList();
            }
        });
    }
    edit(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _safety_education_result_edit_safety_education_result_edit_page__WEBPACK_IMPORTED_MODULE_12__.SafetyEducationResultEditPage,
                cssClass: 'risk-evaluation-class',
                componentProps: {
                    education_safe_report_id: item.education_safe_report_id
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.getList();
            }
        });
    }
    add() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _new_write_target_new_write_target_page__WEBPACK_IMPORTED_MODULE_10__.NewWriteTargetPage,
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.getList();
            }
        });
    }
    /**
     * 미결함으로 이동
     */
    pending() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _education_confirm_pending_list_education_confirm_pending_list_page__WEBPACK_IMPORTED_MODULE_9__.EducationConfirmPendingListPage,
            });
            modal.present();
        });
    }
};
SafetyEducationResultListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__.DateService },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_8__.PromiseService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__.NavService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
SafetyEducationResultListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-safety-education-result-list',
        template: _raw_loader_safety_education_result_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_safety_education_result_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SafetyEducationResultListPage);



/***/ }),

/***/ 611:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-result/safety-education-result-list/safety-education-result-list.page.scss ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWZldHktZWR1Y2F0aW9uLXJlc3VsdC1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 88611:
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/safety-education/education-result/safety-education-result-list/safety-education-result-list.page.html ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- pc -->\n<ng-container *mobileHidden>\n  <app-header-admin></app-header-admin>\n  <ion-content>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\"><app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList(0)\">검색</app-button></app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <!-- <app-select-scene [all]=\"editable.add\" name=\"project_id\" [all]=\"true\" [(ngModel)]=\"form.project_id\"></app-select-scene> -->\n                <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <!-- <app-select-contractor [allState]=\"editable.add\" [project_id]=\"form.project_id || 0\" [(ngModel)]=\"form.company_id\" [disabled]=\"editable.company_id\"></app-select-contractor> -->\n                <app-select-contractor [project_id]=\"form.project_id\" [(ngModel)]=\"form.company_id\" [readonly]=\"editable.company_id\"></app-select-contractor> \n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-education [all]=\"true\" [(ngModel)]=\"form.ctgo_education_safe_id\"></app-select-education>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input-group label=\"교육일\">\n                  <app-calendar [(ngModel)]=\"form.start_date\" [max]=\"form.end_date\"></app-calendar>\n                  ~\n                  <app-calendar [(ngModel)]=\"form.end_date\" [min]=\"form.start_date\"></app-calendar>\n                </app-input-group>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-approval-type [(ngModel)]=\"form.approval_cnt_answer\"></app-select-approval-type>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" placeholder=\"검색어를 입력해 주세요.\" [(ngModel)]=\"form.search_text\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n\n        <ion-toolbar color=\"white\">\n          <ion-buttons slot=\"start\">\n            <app-button *ngIf=\"!editable.add\" fill=\"translucent\" (click)=\"add()\">신규 작성</app-button>\n            <app-button fill=\"translucent\" (click)=\"pending()\">미결 문서</app-button>\n          </ion-buttons>\n        </ion-toolbar>\n          <ion-toolbar color=\"white\">\n            <h5>결과 보고 목록 (총 {{ res?.rsObj?.row_count || 0 }}건)</h5>\n          </ion-toolbar>\n          <app-table>\n            <thead>\n              <tr>\n                <th style=\"width: 48px;\">No</th>\n                <th>업체명</th>\n                <th>교육명</th>\n                <th>교육대상</th>\n                <th>교육일</th>\n                <th>작성자</th>\n                <th>작성일</th>\n                <th>결재현황</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"button\" *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item)\">\n                <td>{{ item.index}}</td>\n                <td>{{ item.company_name }}</td>\n                <td>{{ item.ctgo_education_safe_name }}</td>\n                <td>{{ item.education_safe_target }}</td>\n                <td>{{ item.education_safe_date }}</td>\n                <td>{{ item.create_user_name }}</td>\n                <td>{{ item.create_date }}</td>\n                <td>{{ item.approval_cnt_answer }}</td>\n              </tr>\n            </tbody>\n          </app-table>\n          <app-pager [totalCount]=\"res?.rsObj?.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"getList($event)\"></app-pager>\n      </app-col>\n    </app-row>\n  </ion-content>\n</ng-container>\n\n<!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>교육 결과 보고</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <app-select-scene name=\"project_id\" [all]=\"true\" [(ngModel)]=\"form.project_id\" [disabled]=\"true\"></app-select-scene>\n        <app-button (click)=\"openDetailSearch()\">{{ languagePack.getText('상세검색') }}</app-button>\n      </app-input-group>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <app-row>\n      <app-col></app-col>\n      <app-col size=\"auto\">\n        <app-button fill=\"translucent\" (click)=\"pending()\">미결문서</app-button>\n      </app-col>\n    </app-row>\n    <ng-container>\n      <app-card *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item)\">\n        <app-row style=\"align-items: flex-start;\">\n          <app-col>\n            <h5>{{ item.ctgo_education_safe_name }}</h5>\n          </app-col>\n          <app-col size=\"auto\">\n            <app-chip-approval-answer [approval_cnt_answer]=\"item.approval_cnt_answer\"></app-chip-approval-answer>\n          </app-col>\n        </app-row>\n        <p>{{ item.company_name }} / {{ languagePack.getText('교육일') }}:{{ item.education_safe_date }}</p>\n        <app-row>\n          <app-col>\n            <ion-badge color=\"success\">{{ item.ctgo_education_safe_type }}</ion-badge>\n          </app-col>\n        </app-row>\n      </app-card>\n    </ng-container>\n  </ion-content>\n</ng-container>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_safety-education_education-result_safety-education-result-list_safety-education--76f61c.js.map