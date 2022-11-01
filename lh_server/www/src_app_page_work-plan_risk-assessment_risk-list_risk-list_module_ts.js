(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_work-plan_risk-assessment_risk-list_risk-list_module_ts"],{

/***/ 28901:
/*!************************************************************************************************************!*\
  !*** ./src/app/page/work-plan/risk-assessment/risk-evaluation-edit/risk-evaluation-edit-routing.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiskEvaluationEditPageRoutingModule": () => (/* binding */ RiskEvaluationEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _risk_evaluation_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./risk-evaluation-edit.page */ 29085);




const routes = [
    {
        path: '',
        component: _risk_evaluation_edit_page__WEBPACK_IMPORTED_MODULE_0__.RiskEvaluationEditPage
    }
];
let RiskEvaluationEditPageRoutingModule = class RiskEvaluationEditPageRoutingModule {
};
RiskEvaluationEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RiskEvaluationEditPageRoutingModule);



/***/ }),

/***/ 54797:
/*!****************************************************************************************************!*\
  !*** ./src/app/page/work-plan/risk-assessment/risk-evaluation-edit/risk-evaluation-edit.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiskEvaluationEditPageModule": () => (/* binding */ RiskEvaluationEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _risk_evaluation_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./risk-evaluation-edit-routing.module */ 28901);
/* harmony import */ var _risk_evaluation_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./risk-evaluation-edit.page */ 29085);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var _risk_evaluation_popup_risk_evaluation_popup_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../risk-evaluation-popup/risk-evaluation-popup.module */ 18131);










let RiskEvaluationEditPageModule = class RiskEvaluationEditPageModule {
};
RiskEvaluationEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _risk_evaluation_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.RiskEvaluationEditPageRoutingModule,
            _risk_evaluation_popup_risk_evaluation_popup_module__WEBPACK_IMPORTED_MODULE_4__.RiskEvaluationPopupPageModule
        ],
        declarations: [_risk_evaluation_edit_page__WEBPACK_IMPORTED_MODULE_1__.RiskEvaluationEditPage]
    })
], RiskEvaluationEditPageModule);



/***/ }),

/***/ 80079:
/*!**************************************************************************************************************!*\
  !*** ./src/app/page/work-plan/risk-assessment/risk-evaluation-popup/risk-evaluation-popup-routing.module.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiskEvaluationPopupPageRoutingModule": () => (/* binding */ RiskEvaluationPopupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _risk_evaluation_popup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./risk-evaluation-popup.page */ 82369);




const routes = [
    {
        path: '',
        component: _risk_evaluation_popup_page__WEBPACK_IMPORTED_MODULE_0__.RiskEvaluationPopupPage
    }
];
let RiskEvaluationPopupPageRoutingModule = class RiskEvaluationPopupPageRoutingModule {
};
RiskEvaluationPopupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RiskEvaluationPopupPageRoutingModule);



/***/ }),

/***/ 18131:
/*!******************************************************************************************************!*\
  !*** ./src/app/page/work-plan/risk-assessment/risk-evaluation-popup/risk-evaluation-popup.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiskEvaluationPopupPageModule": () => (/* binding */ RiskEvaluationPopupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _risk_evaluation_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./risk-evaluation-popup-routing.module */ 80079);
/* harmony import */ var _risk_evaluation_popup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./risk-evaluation-popup.page */ 82369);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);









let RiskEvaluationPopupPageModule = class RiskEvaluationPopupPageModule {
};
RiskEvaluationPopupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _risk_evaluation_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__.RiskEvaluationPopupPageRoutingModule
        ],
        declarations: [_risk_evaluation_popup_page__WEBPACK_IMPORTED_MODULE_1__.RiskEvaluationPopupPage]
    })
], RiskEvaluationPopupPageModule);



/***/ }),

/***/ 13447:
/*!**************************************************************************************!*\
  !*** ./src/app/page/work-plan/risk-assessment/risk-list/risk-list-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiskListPageRoutingModule": () => (/* binding */ RiskListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _risk_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./risk-list.page */ 60074);




const routes = [
    {
        path: '',
        component: _risk_list_page__WEBPACK_IMPORTED_MODULE_0__.RiskListPage
    }
];
let RiskListPageRoutingModule = class RiskListPageRoutingModule {
};
RiskListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RiskListPageRoutingModule);



/***/ }),

/***/ 26321:
/*!******************************************************************************!*\
  !*** ./src/app/page/work-plan/risk-assessment/risk-list/risk-list.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiskListPageModule": () => (/* binding */ RiskListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _risk_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./risk-list-routing.module */ 13447);
/* harmony import */ var _risk_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./risk-list.page */ 60074);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var _risk_detail_search_risk_detail_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../risk-detail-search/risk-detail-search.module */ 87292);
/* harmony import */ var _risk_evaluation_edit_risk_evaluation_edit_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../risk-evaluation-edit/risk-evaluation-edit.module */ 54797);
/* harmony import */ var _risk_pending_list_risk_pending_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../risk-pending-list/risk-pending-list.module */ 88259);












let RiskListPageModule = class RiskListPageModule {
};
RiskListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _risk_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.RiskListPageRoutingModule,
            _risk_detail_search_risk_detail_search_module__WEBPACK_IMPORTED_MODULE_4__.RiskDetailSearchPageModule,
            _risk_evaluation_edit_risk_evaluation_edit_module__WEBPACK_IMPORTED_MODULE_5__.RiskEvaluationEditPageModule,
            _risk_pending_list_risk_pending_list_module__WEBPACK_IMPORTED_MODULE_6__.RiskPendingListPageModule
        ],
        declarations: [_risk_list_page__WEBPACK_IMPORTED_MODULE_1__.RiskListPage]
    })
], RiskListPageModule);



/***/ }),

/***/ 60074:
/*!****************************************************************************!*\
  !*** ./src/app/page/work-plan/risk-assessment/risk-list/risk-list.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RiskListPage": () => (/* binding */ RiskListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_risk_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./risk-list.page.html */ 43318);
/* harmony import */ var _risk_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./risk-list.page.scss */ 34835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var _risk_detail_search_risk_detail_search_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../risk-detail-search/risk-detail-search.page */ 42246);
/* harmony import */ var _risk_evaluation_edit_risk_evaluation_edit_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../risk-evaluation-edit/risk-evaluation-edit.page */ 29085);
/* harmony import */ var _risk_pending_list_risk_pending_list_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../risk-pending-list/risk-pending-list.page */ 79912);














class RiskListItem {
    constructor() {
        this.approval_cnt_answer = "임시저장";
        this.approval_id = 109;
        this.company_id = 22;
        this.company_name = "구르미";
        this.create_date = "2022-04-08";
        this.create_user_id = 3366458717;
        this.ctgo_approval_module_name = "수시 위험성 평가서";
        this.ctgo_construction_id = 9;
        this.ctgo_construction_name = "소방";
        this.index = 1;
        this.project_id = 1;
        this.risk_asment_end_date = "2022-04-09";
        this.risk_asment_id = 31;
        this.risk_asment_start_date = "2022-04-09";
        this.risk_asment_type = "수시";
        this.user_name = "업체에";
        this.row_count = 0;
    }
}
let RiskListPage = class RiskListPage {
    constructor(connect, toast, date, _modal, user, nav, languagePack) {
        this.connect = connect;
        this.toast = toast;
        this.date = date;
        this._modal = _modal;
        this.user = user;
        this.nav = nav;
        this.languagePack = languagePack;
        this.form = {
            project_id: null,
            project_name: '',
            company_id: null,
            ctgo_construction_id: 0,
            risk_asment_type: '수시',
            approval_cnt_answer: '전체',
            risk_asment_start_date: this.date.today({ year: -1 }),
            risk_asment_end_date: this.date.today(),
            search_text: '',
            limit_no: 0
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getForm();
            setTimeout(() => {
                this.get();
            }, 300);
            // event 물리기
            this.event.get = this.getEvent.bind(this);
            window.addEventListener('risk-list:get()', this.event.get);
        });
    }
    ngOnDestroy() {
        window.removeEventListener('risk-list:get()', this.event.get);
    }
    /** event 파트 */
    getEvent() {
        this.get(0);
    }
    /**
     * permission 과 form 을 가져옴.
     */
    getForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const { user_role, belong_data } = this.user.userData;
            this.form.project_id = belong_data.project_id;
            this.form.project_name = belong_data.project_name;
            if (user_role === 'LH_HEAD'
                || user_role === 'SUPER_HEAD') {
                this.permission.company_id = true;
                this.permission.add = false;
                this.form.company_id = belong_data.company_id;
            }
            else if (belong_data.company_contract_type === '원청사') {
                this.permission.company_id = false;
                // 원청사 관리자에게만 보이는 버튼. LH,감리,협력사의 경우 회의 진행 버튼이 없다.(회의록 기획서 9p)
                this.permission.add = true;
                this.form.company_id = belong_data.company_id;
            }
            else if (belong_data.company_contract_type === '협력사') {
                this.permission.company_id = false;
                this.permission.add = true;
                this.form.company_id = belong_data.master_company_id;
                // 협력사는 내 회사가 아니라, 내 원청사를 company_id에 넣어줘야 함
                // const res = await this.connect.run('/category/certify/search_my_master_company/get', {
                //   project_id: this.form.project_id,
                //   search_text: ''
                // });
                // if(res.rsCode === 0) {
                //   const contractor = res.rsMap[0];
                //   this.form.company_id = contractor.master_company_id;
                // }
                // else {
                //   this.toast.present({ color: 'warning', message: res.rsMsg });
                // }
            }
        });
    }
    /**
     * web, mobile 둘다 검색 시작할 때는 이걸 쓴다.
     * 이유는 limit_no를 초기화할 필요성이 있기 떄문 + 1008 예외처리가 다르다.
     */
    get(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            this.selectitem = null;
            this.res = yield this.connect.run('/risk/assessment/list/get', this.form, { loading: true });
            if (this.res.rsCode === 0) {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = this.res.rsMap.length;
            this.selectitem = null;
            const res = yield this.connect.run('/risk/assessment/list/get', this.form, {});
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
    openDetailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _risk_detail_search_risk_detail_search_page__WEBPACK_IMPORTED_MODULE_8__.RiskDetailSearchPage,
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
    add() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _risk_evaluation_edit_risk_evaluation_edit_page__WEBPACK_IMPORTED_MODULE_9__.RiskEvaluationEditPage,
                cssClass: 'risk-evaluation-class',
                componentProps: {
                    project_id: this.form.project_id,
                    risk_asment_type: this.form.risk_asment_type,
                    btn_type: 'add'
                }
            });
            modal.present();
        });
    }
    duplicate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _risk_evaluation_edit_risk_evaluation_edit_page__WEBPACK_IMPORTED_MODULE_9__.RiskEvaluationEditPage,
                cssClass: 'risk-evaluation-class',
                componentProps: {
                    isDuplicate: true,
                    project_id: this.form.project_id,
                    risk_asment_type: this.form.risk_asment_type,
                    risk_asment_id: this.selectitem.risk_asment_id
                }
            });
            modal.present();
        });
    }
    edit(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _risk_evaluation_edit_risk_evaluation_edit_page__WEBPACK_IMPORTED_MODULE_9__.RiskEvaluationEditPage,
                cssClass: 'risk-evaluation-class',
                componentProps: {
                    risk_asment_id: item.risk_asment_id
                }
            });
            modal.present();
        });
    }
    /**
     * 미결함으로 이동
     */
    pending() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _risk_pending_list_risk_pending_list_page__WEBPACK_IMPORTED_MODULE_10__.RiskPendingListPage,
            });
            modal.present();
        });
    }
};
RiskListPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__.DateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_5__.NavService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
RiskListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-risk-list',
        template: _raw_loader_risk_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_risk_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RiskListPage);



/***/ }),

/***/ 34835:
/*!******************************************************************************!*\
  !*** ./src/app/page/work-plan/risk-assessment/risk-list/risk-list.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaXNrLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 43318:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/work-plan/risk-assessment/risk-list/risk-list.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- pc -->\n<ng-container *mobileHidden>\n  <app-header-admin></app-header-admin>\n  <ion-content>\n    <ion-toolbar color=\"white\" style=\"margin-bottom: 8px;\">\n      <app-row>\n        <app-col size=\"auto\">\n          <ion-segment color=\"primary\" [(ngModel)]=\"form.risk_asment_type\" (ionChange)=\"get(0)\">\n            <ion-segment-button value=\"최초\">최초</ion-segment-button>\n            <ion-segment-button value=\"정기\">정기</ion-segment-button>\n            <ion-segment-button value=\"수시\">수시</ion-segment-button>\n          </ion-segment>\n        </app-col>\n      </app-row>\n    </ion-toolbar>\n\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\"><app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"get(0)\">검색</app-button></app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene [(ngModel)]=\"form.project_id\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor [project_id]=\"form.project_id\" [(ngModel)]=\"form.company_id\"></app-select-contractor>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-construction [project_id]=\"form.project_id\" [master_company_id]=\"form.company_id\" [(ngModel)]=\"form.ctgo_construction_id\" [all]=\"true\"></app-select-construction>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-approval-type [(ngModel)]=\"form.approval_cnt_answer\"></app-select-approval-type>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input-group label=\"작성일\">\n                  <app-calendar [(ngModel)]=\"form.risk_asment_start_date\" [max]=\"form.risk_asment_end_date\"></app-calendar>\n                  ~\n                  <app-calendar [(ngModel)]=\"form.risk_asment_end_date\" [min]=\"form.risk_asment_start_date\"></app-calendar>\n                </app-input-group>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" placeholder=\"검색어를 입력해 주세요.\" [(ngModel)]=\"form.search_text\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n\n      <app-col>\n\n        <ion-toolbar color=\"white\">\n          <ion-buttons slot=\"start\">\n            <app-button *ngIf=\"permission.add\" fill=\"translucent\" (click)=\"add()\">신규 작성</app-button>\n            <app-button *ngIf=\"permission.add\" fill=\"translucent\" (click)=\"duplicate()\" [disabled]=\"!selectitem\">복사 작성</app-button>\n            <app-button fill=\"translucent\" (click)=\"pending()\">미결 문서</app-button>\n          </ion-buttons>\n          <!-- <ion-buttons slot=\"end\">\n            <ion-segment color=\"primary\" [(ngModel)]=\"form.risk_asment_type\" (ionChange)=\"get(0)\">\n              <ion-segment-button value=\"최초\">최초</ion-segment-button>\n              <ion-segment-button value=\"정기\">정기</ion-segment-button>\n              <ion-segment-button value=\"수시\">수시</ion-segment-button>\n            </ion-segment>\n          </ion-buttons> -->\n        </ion-toolbar>\n\n        <ion-toolbar color=\"white\">\n          <h5>수시 위험성평가 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n        </ion-toolbar>\n        <app-radio-group [(ngModel)]=\"selectitem\">\n          <app-table>\n            <thead>\n              <tr>\n                <th *ngIf=\"!permission.company_id\" style=\"width: 40px;\"></th>\n                <th style=\"width: 40px;\">No</th>\n                <th>공종</th>\n                <th>서식명</th>\n                <th>업체명</th>\n                <th>작업기간</th>\n                <th>작성자</th>\n                <th>작성일</th>\n                <th>결재현황</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"button\" *ngFor=\"let item of res?.rsMap let i = index\" (click)=\"edit(item)\">\n                <td *ngIf=\"!permission.company_id\" (click)=\"$event.stopPropagation()\">\n                  <app-radio color=\"white\" size=\"small\" name=\"check\" [value]=\"item\"></app-radio>\n                </td>\n                <td>{{ item.index }}</td>\n                <td>{{ item.ctgo_construction_name }}</td>\n                <td>{{ item.ctgo_approval_module_name }}</td>\n                <td>{{ item.company_name }}</td>\n                <td>{{ item.risk_asment_start_date }} ~ {{ item.risk_asment_end_date }}</td>\n                <td>{{ item.user_name }}</td>\n                <td>{{ item.create_date }}</td>\n                <td>{{ item.approval_cnt_answer }}</td>\n              </tr>\n            </tbody>\n          </app-table>\n        </app-radio-group>\n\n        <app-pager [totalCount]=\"res?.rsObj?.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"get($event)\"></app-pager>\n\n      </app-col>\n\n    </app-row>\n  </ion-content>\n</ng-container>\n\n<!-- 모바일 -->\n <ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>위험성 평가 보고</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <app-input-template label=\"현장\">\n          <p slot=\"input\">{{ form.project_name }}</p>\n        </app-input-template>\n        <app-button (click)=\"openDetailSearch()\">상세검색</app-button>\n      </app-input-group>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <ion-segment color=\"primary\" [(ngModel)]=\"form.risk_asment_type\" (ionChange)=\"get(0)\">\n        <ion-segment-button value=\"최초\">최초</ion-segment-button>\n        <ion-segment-button value=\"정기\">정기</ion-segment-button>\n        <ion-segment-button value=\"수시\">수시</ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n  <app-row>\n    <app-col></app-col>\n    <app-col size=\"auto\">\n      <app-button fill=\"translucent\" (click)=\"pending()\">미결문서</app-button>\n    </app-col>\n  </app-row>\n  <app-card *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item)\">\n    <app-row>\n      <app-col>\n        <h5>{{ item.ctgo_approval_module_name }}</h5>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-chip-approval-answer [approval_cnt_answer]=\"item.approval_cnt_answer\"></app-chip-approval-answer>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col>\n        <p>{{ item.company_name }}</p>\n        <p>작업기간: {{ item.risk_asment_start_date }} ~ {{ item.risk_asment_end_date }}</p>\n      </app-col>\n    </app-row>\n    <ion-badge color=\"success\">{{ item.ctgo_construction_name }}</ion-badge>\n  </app-card>\n\n  <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n    <ion-infinite-scroll-content loading-spinner=\"dots\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n</ng-container>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_work-plan_risk-assessment_risk-list_risk-list_module_ts.js.map