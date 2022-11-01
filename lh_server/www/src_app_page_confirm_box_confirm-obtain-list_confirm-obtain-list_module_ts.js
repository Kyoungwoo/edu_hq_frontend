(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_confirm_box_confirm-obtain-list_confirm-obtain-list_module_ts"],{

/***/ 22962:
/*!********************************************************************************************!*\
  !*** ./src/app/page/confirm/box/confirm-obtain-list/confirm-obtain-list-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmObtainListPageRoutingModule": () => (/* binding */ ConfirmObtainListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _confirm_obtain_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-obtain-list.page */ 84778);




const routes = [
    {
        path: '',
        component: _confirm_obtain_list_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmObtainListPage
    }
];
let ConfirmObtainListPageRoutingModule = class ConfirmObtainListPageRoutingModule {
};
ConfirmObtainListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfirmObtainListPageRoutingModule);



/***/ }),

/***/ 53260:
/*!************************************************************************************!*\
  !*** ./src/app/page/confirm/box/confirm-obtain-list/confirm-obtain-list.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmObtainListPageModule": () => (/* binding */ ConfirmObtainListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _confirm_obtain_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-obtain-list-routing.module */ 22962);
/* harmony import */ var _confirm_obtain_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-obtain-list.page */ 84778);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var _confirm_obtain_detail_search_confirm_obtain_detail_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirm-obtain-detail-search/confirm-obtain-detail-search.module */ 73267);
/* harmony import */ var src_app_page_work_plan_work_minutes_worker_minutes_edit_worker_minutes_edit_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.module */ 62432);
/* harmony import */ var src_app_page_safety_education_education_result_safety_education_result_edit_safety_education_result_edit_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/page/safety-education/education-result/safety-education-result-edit/safety-education-result-edit.module */ 5551);
/* harmony import */ var src_app_page_work_plan_risk_assessment_risk_evaluation_edit_risk_evaluation_edit_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/page/work-plan/risk-assessment/risk-evaluation-edit/risk-evaluation-edit.module */ 54797);













let ConfirmObtainListPageModule = class ConfirmObtainListPageModule {
};
ConfirmObtainListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _confirm_obtain_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmObtainListPageRoutingModule,
            _confirm_obtain_detail_search_confirm_obtain_detail_search_module__WEBPACK_IMPORTED_MODULE_4__.ConfirmObtainDetailSearchPageModule,
            src_app_page_safety_education_education_result_safety_education_result_edit_safety_education_result_edit_module__WEBPACK_IMPORTED_MODULE_6__.SafetyEducationResultEditPageModule,
            src_app_page_work_plan_risk_assessment_risk_evaluation_edit_risk_evaluation_edit_module__WEBPACK_IMPORTED_MODULE_7__.RiskEvaluationEditPageModule,
            src_app_page_work_plan_work_minutes_worker_minutes_edit_worker_minutes_edit_module__WEBPACK_IMPORTED_MODULE_5__.WorkerMinutesEditPageModule,
        ],
        declarations: [_confirm_obtain_list_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmObtainListPage]
    })
], ConfirmObtainListPageModule);



/***/ }),

/***/ 84778:
/*!**********************************************************************************!*\
  !*** ./src/app/page/confirm/box/confirm-obtain-list/confirm-obtain-list.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmObtainListPage": () => (/* binding */ ConfirmObtainListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_confirm_obtain_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./confirm-obtain-list.page.html */ 7889);
/* harmony import */ var _confirm_obtain_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-obtain-list.page.scss */ 52257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/loading.service */ 21501);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var src_app_service_approval_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/approval.service */ 91589);
/* harmony import */ var _confirm_obtain_detail_search_confirm_obtain_detail_search_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../confirm-obtain-detail-search/confirm-obtain-detail-search.page */ 95729);













class ConfirmObtainItem {
}
let ConfirmObtainListPage = class ConfirmObtainListPage {
    constructor(_modal, user, connect, toast, date, loading, approval, languagePack) {
        this._modal = _modal;
        this.user = user;
        this.connect = connect;
        this.toast = toast;
        this.date = date;
        this.loading = loading;
        this.approval = approval;
        this.languagePack = languagePack;
        this.form = {
            project_id: 0,
            master_company_id: 0,
            company_id: 0,
            start_date: null,
            end_date: null,
            approval_cnt_answer: '전체',
            search_text: null,
            limit_no: 0 // 20개씩 가져옵니다
        };
        this.event = {
            get: null
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const { user_role, belong_data } = this.user.userData;
            if (user_role === 'PARTNER_HEAD' || user_role === 'PARTNER_GENERAL')
                this.form.company_id = belong_data.company_id;
            this.form.project_id = belong_data.project_id;
            // this.form.company_id = belong_data.company_id;
            this.form.master_company_id = belong_data.master_company_id;
            // if(belong_data.company_contract_type === '원청사') {
            //   this.form.master_company_id = belong_data.master_company_id;
            // }
            // else if(belong_data.company_contract_type === '협력사') {
            //   // 협력사는 내 회사가 아니라, 내 원청사를 company_id에 넣어줘야 함
            //   const res = await this.connect.run('/category/certify/search_my_master_company/get', {
            //     project_id: this.form.project_id,
            //     search_text: ''
            //   });
            //   if(res.rsCode === 0) {
            //     const contractor = res.rsMap[0];
            //     this.form.master_company_id = contractor.master_company_id;
            //   }
            //   else {
            //     this.toast.present({ color: 'warning', message: res.rsMsg });
            //   }
            // }
            this.form.start_date = this.date.today({ year: -1 });
            this.form.end_date = this.date.today();
            this.form.approval_cnt_answer = '전체';
        });
    }
    /**
     * web, mobile 둘다 검색 시작할 때는 이걸 쓴다.
     * 이유는 limit_no를 초기화할 필요성이 있기 떄문 + 1008 예외처리가 다르다.
     */
    get(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            let trans_form = JSON.parse(JSON.stringify(this.form));
            trans_form.project_id = trans_form.project_id ? [trans_form.project_id] : [];
            this.res = yield this.connect.run('/approval/board/my/get', this.form, { loading: true });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = this.res.rsMap.length;
            const res = yield this.connect.run('/approval/board/my/get', this.form, { loading: true });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _confirm_obtain_detail_search_confirm_obtain_detail_search_page__WEBPACK_IMPORTED_MODULE_9__.ConfirmObtainDetailSearchPage,
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
};
ConfirmObtainListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__.DateService },
    { type: src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: src_app_service_approval_service__WEBPACK_IMPORTED_MODULE_8__.ApprovalService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
ConfirmObtainListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-confirm-obtain-list',
        template: _raw_loader_confirm_obtain_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_confirm_obtain_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfirmObtainListPage);



/***/ }),

/***/ 52257:
/*!************************************************************************************!*\
  !*** ./src/app/page/confirm/box/confirm-obtain-list/confirm-obtain-list.page.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLW9idGFpbi1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 7889:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/confirm/box/confirm-obtain-list/confirm-obtain-list.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- pc -->\n<ng-container *mobileHidden>\n  <app-header-admin></app-header-admin>\n  <ion-content>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\"><app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"get(0)\">검색</app-button></app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene [(ngModel)]=\"form.project_id\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor [project_id]=\"form.project_id\" [(ngModel)]=\"form.master_company_id\"></app-select-contractor>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor-company [all]=\"true\" [project_id]=\"form.project_id\" [master_company_id]=\"form.master_company_id\" [(ngModel)]=\"form.company_id\"></app-select-contractor-company>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-approval-type [(ngModel)]=\"form.approval_cnt_answer\"></app-select-approval-type>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input-group label=\"작성일\">\n                  <app-calendar [(ngModel)]=\"form.start_date\" [max]=\"form.end_date\"></app-calendar>\n                  ~\n                  <app-calendar [(ngModel)]=\"form.end_date\" [max]=\"form.start_date\"></app-calendar>\n                </app-input-group>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" placeholder=\"검색어를 입력해 주세요.\" [(ngModel)]=\"form.search_text\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n\n        <ion-toolbar color=\"white\">\n          <h5>기안/임시저장 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n        </ion-toolbar>\n\n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 48px;\">No</th>\n              <th>서식명</th>\n              <th>업체명</th>\n              <th>작성자</th>\n              <th>작성일</th>\n              <th>결재일</th>\n              <th>결재상태</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"button\" *ngFor=\"let item of res?.rsMap; let i = index;\" (click)=\"detail(item)\">\n              <td>{{ item.index }}</td>\n              <td>{{ item.ctgo_approval_module_name }}</td>\n              <td>{{ item.company_name }}</td>\n              <td>{{ item.user_name }}</td>\n              <td>{{ item.create_date }}</td>\n              <td>{{ item.max_approval_date }}</td>\n              <td>{{ item.approval_cnt_answer }}</td>\n            </tr>\n          </tbody>\n        </app-table>\n\n        <app-pager [totalCount]=\"res?.rsObj?.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"get($event)\"></app-pager>\n\n      </app-col>\n    </app-row>\n  </ion-content>\n</ng-container>\n\n<!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>기안/임시저장함</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <app-select-scene [readonly]=\"true\" [(ngModel)]=\"form.project_id\"></app-select-scene>\n        <app-button (click)=\"openDetailSearch()\">{{ languagePack.getText('상세검색') }}</app-button>\n      </app-input-group>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n\n    <app-card *ngFor=\"let item of res?.rsMap; let i = index;\" (click)=\"detail(item)\">\n      <app-row style=\"align-items: flex-start;\">\n        <app-col>\n          <h5>{{ item.ctgo_approval_module_name }}</h5>\n        </app-col>\n        <app-col size=\"auto\">\n          <app-chip-approval-answer [approval_cnt_answer]=\"item.approval_cnt_answer\"></app-chip-approval-answer>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <p>{{ item.company_name }}/{{ item.user_name }}</p>\n          <p>{{ languagePack.getText('작성일') }} : {{ item.create_date }}</p>\n          <p>{{ languagePack.getText('결재일') }} : {{ item.max_approval_date }}</p>\n        </app-col>\n      </app-row>\n    </app-card>\n\n    <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n      <ion-infinite-scroll-content loading-spinner=\"dots\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </ion-content>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_confirm_box_confirm-obtain-list_confirm-obtain-list_module_ts.js.map