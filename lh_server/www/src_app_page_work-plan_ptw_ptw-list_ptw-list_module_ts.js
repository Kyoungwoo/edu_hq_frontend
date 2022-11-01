(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_work-plan_ptw_ptw-list_ptw-list_module_ts"],{

/***/ 19861:
/*!***************************************!*\
  !*** ./src/app/dumi/test-ptw-list.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ptwList": () => (/* binding */ ptwList)
/* harmony export */ });
const ptwList = [
    {
        no: '1',
        dengerType: ['고소'],
        content: '상부 방음판 교체',
        company: '(주)지에스아이엘',
        workDate: '2021-05-06',
        name: '이상범',
        writeDate: '2021-05-06',
        status: '제출 승인'
    },
    {
        no: '2',
        dengerType: ['고소', '굴착/가설'],
        content: '지하 1층 굴착 작업',
        company: '(주)건창',
        workDate: '2021-05-06',
        name: '정대현',
        writeDate: '2021-05-06',
        status: '제출 승인'
    }
];


/***/ }),

/***/ 80658:
/*!************************************************************************!*\
  !*** ./src/app/page/work-plan/ptw/ptw-list/ptw-list-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PtwListPageRoutingModule": () => (/* binding */ PtwListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ptw_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ptw-list.page */ 40865);




const routes = [
    {
        path: '',
        component: _ptw_list_page__WEBPACK_IMPORTED_MODULE_0__.PtwListPage
    }
];
let PtwListPageRoutingModule = class PtwListPageRoutingModule {
};
PtwListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PtwListPageRoutingModule);



/***/ }),

/***/ 76192:
/*!****************************************************************!*\
  !*** ./src/app/page/work-plan/ptw/ptw-list/ptw-list.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PtwListPageModule": () => (/* binding */ PtwListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _ptw_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ptw-list-routing.module */ 80658);
/* harmony import */ var _ptw_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ptw-list.page */ 40865);
/* harmony import */ var _ptw_edit_ptw_edit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ptw-edit/ptw-edit.module */ 55722);
/* harmony import */ var _ptw_pending_list_ptw_pending_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ptw-pending-list/ptw-pending-list.module */ 74879);
/* harmony import */ var _ptw_detail_search_ptw_detail_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ptw-detail-search/ptw-detail-search.module */ 32171);











let PtwListPageModule = class PtwListPageModule {
};
PtwListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _ptw_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.PtwListPageRoutingModule,
            _ptw_edit_ptw_edit_module__WEBPACK_IMPORTED_MODULE_3__.PtwEditPageModule,
            _ptw_pending_list_ptw_pending_list_module__WEBPACK_IMPORTED_MODULE_4__.PtwPendingListPageModule,
            _ptw_detail_search_ptw_detail_search_module__WEBPACK_IMPORTED_MODULE_5__.PtwDetailSearchPageModule
        ],
        declarations: [_ptw_list_page__WEBPACK_IMPORTED_MODULE_2__.PtwListPage]
    })
], PtwListPageModule);



/***/ }),

/***/ 40865:
/*!**************************************************************!*\
  !*** ./src/app/page/work-plan/ptw/ptw-list/ptw-list.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PtwListPage": () => (/* binding */ PtwListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ptw_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ptw-list.page.html */ 54749);
/* harmony import */ var _ptw_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ptw-list.page.scss */ 71897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dumi_test_ptw_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../dumi/test-ptw-list */ 19861);
/* harmony import */ var _ptw_edit_ptw_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ptw-edit/ptw-edit.page */ 10371);
/* harmony import */ var _ptw_pending_list_ptw_pending_list_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ptw-pending-list/ptw-pending-list.page */ 39299);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var _ptw_detail_search_ptw_detail_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ptw-detail-search/ptw-detail-search.page */ 85754);





 // 리스트 데이터




let PtwListPage = class PtwListPage {
    constructor(_modal, alert) {
        this._modal = _modal;
        this.alert = alert;
        this.ptwList = _dumi_test_ptw_list__WEBPACK_IMPORTED_MODULE_2__.ptwList;
        this.approval_cnt_answer = "임시저장";
    }
    ngOnInit() {
    }
    edit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _ptw_edit_ptw_edit_page__WEBPACK_IMPORTED_MODULE_3__.PtwEditPage,
                componentProps: {
                // project_id: this.form.project_id,
                // risk_asment_type: this.form.risk_asment_type,
                // btn_type: 'add'
                }
            });
            modal.present();
        });
    }
    openDetailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _ptw_detail_search_ptw_detail_search_page__WEBPACK_IMPORTED_MODULE_6__.PtwDetailSearchPage,
                componentProps: {
                // form: this.form
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            // if(data) {
            //   this.form = data;
            //   this.get(0);
            // }
        });
    }
    /**
   * 미결함으로 이동
   */
    pending() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _ptw_pending_list_ptw_pending_list_page__WEBPACK_IMPORTED_MODULE_4__.PtwPendingListPage,
            });
            modal.present();
        });
    }
    /**
     * 위험공증선택시 팝업온오프
     */
    dismiss() {
        this.alert.present({
            message: '위험공증명 작업시 스마트안전장비명 사용을 권장합니다.',
            buttons: [
                { text: '확인', handler: () => {
                        this._modal.dismiss();
                    } }
            ]
        });
    }
};
PtwListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService }
];
PtwListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-ptw-list',
        template: _raw_loader_ptw_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ptw_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PtwListPage);



/***/ }),

/***/ 71897:
/*!****************************************************************!*\
  !*** ./src/app/page/work-plan/ptw/ptw-list/ptw-list.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("body {\n  margin: 0;\n  padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB0dy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFNBQVM7RUFDVCxVQUFVO0FBQWQiLCJmaWxlIjoicHR3LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn0iXX0= */");

/***/ }),

/***/ 54749:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/work-plan/ptw/ptw-list/ptw-list.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n<app-header-admin></app-header-admin>\n\n<ion-content>\n  <app-row style=\"align-items: flex-start;\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\"><h5>필터</h5></app-col>\n            <app-col size=\"auto\">\n              <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList(0)\">검색</app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <tr>\n            <td>\n              <app-select-scene></app-select-scene>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-contractor></app-select-contractor>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <!-- 공종선택시 위험성평가 팝업 띄우기 -->\n              <app-select-construction></app-select-construction>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-approval-type></app-select-approval-type>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input-group label=\"작성일\">\n                <app-calendar></app-calendar>\n                ~\n                <app-calendar></app-calendar>\n              </app-input-group>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input label=\"검색어\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <ion-buttons slot=\"start\">\n          <app-button fill=\"translucent\" (click)=\"edit()\">신규 작성</app-button>\n          <app-button fill=\"translucent\">제출 작성</app-button> <!--  [disabled]=\"!selectitem\" 클릭금지 -->\n          <app-button fill=\"translucent\" (click)=\"pending()\">미결 문서</app-button>\n        </ion-buttons>\n      </ion-toolbar>\n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 48px;\">No</th>\n              <th>위험공종</th>\n              <th>작업내용</th>\n              <th>업체명</th>\n              <th>작업일</th>\n              <th>작업자</th>\n              <th>작성일</th>\n              <th>결재현황</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"button\" class=\"button\" *ngFor=\"let item of ptwList; let i=index\" (click)=\"edit(item)\">\n              <td>{{ item.no }}</td>\n              <td>{{ item.dengerType }}</td>\n              <td>{{ item.content }}</td>\n              <td>{{ item.company }}</td>\n              <td>{{ item.workDate }}</td>\n              <td>{{ item.name }}</td>\n              <td>{{ item.writeDate }}</td>\n              <td>{{ item.status }}</td>\n            </tr>\n          </tbody>\n        </app-table>\n        <!-- <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"getList($event)\"></app-pager> -->\n        <app-pager></app-pager>\n      </app-col>\n  </app-row>\n</ion-content>\n</ng-container>\n\n<!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>위험 작업 허가(PTW)</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <app-input-template label=\"현장\">\n          <!-- <p slot=\"input\">{{ form.project_name }}</p> -->\n          <p slot=\"input\">수원 당수 아파트 공사</p>\n        </app-input-template>\n        <app-button (click)=\"openDetailSearch()\">상세검색</app-button>\n      </app-input-group>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n  <app-row>\n    <app-col></app-col>\n    <app-col size=\"auto\">\n      <app-button fill=\"translucent\" (click)=\"pending()\">미결문서</app-button>\n    </app-col>\n  </app-row>\n  <!-- <app-card *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item)\"> -->\n  <app-card (click)=\"edit()\">\n    <app-row>\n      <app-col>\n        <h5>수시 위험성 평가서</h5>\n      </app-col>\n      <app-col size=\"auto\">\n        <!-- <app-chip-approval-answer [approval_cnt_answer]=\"item.approval_cnt_answer\"></app-chip-approval-answer> -->\n        <app-chip-approval-answer [approval_cnt_answer]=\"approval_cnt_answer\"></app-chip-approval-answer>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col>\n        <!-- <p>{{ item.company_name }}</p> -->\n        <p>극동건설(주)</p>\n        <!-- <p>작업기간: {{ item.risk_asment_start_date }} ~ {{ item.risk_asment_end_date }}</p> -->\n        <p>작업기간: 2022.11.11 ~ 2022.11.12</p>\n      </app-col>\n    </app-row>\n    <ion-badge color=\"success\">이동식 크레인</ion-badge>\n    <!-- <ion-badge color=\"success\">{{ item.ctgo_construction_name }}</ion-badge> -->\n  </app-card>\n\n  <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n    <ion-infinite-scroll-content loading-spinner=\"dots\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n</ng-container>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_work-plan_ptw_ptw-list_ptw-list_module_ts.js.map