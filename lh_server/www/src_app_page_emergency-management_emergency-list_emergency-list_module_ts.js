(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_emergency-management_emergency-list_emergency-list_module_ts"],{

/***/ 57284:
/*!*******************************************************************************************!*\
  !*** ./src/app/page/emergency-management/emergency-list/emergency-list-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyListPageRoutingModule": () => (/* binding */ EmergencyListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _emergency_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emergency-list.page */ 27255);




const routes = [
    {
        path: '',
        component: _emergency_list_page__WEBPACK_IMPORTED_MODULE_0__.EmergencyListPage
    }
];
let EmergencyListPageRoutingModule = class EmergencyListPageRoutingModule {
};
EmergencyListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmergencyListPageRoutingModule);



/***/ }),

/***/ 90899:
/*!***********************************************************************************!*\
  !*** ./src/app/page/emergency-management/emergency-list/emergency-list.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyListPageModule": () => (/* binding */ EmergencyListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _emergency_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emergency-list-routing.module */ 57284);
/* harmony import */ var _emergency_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emergency-list.page */ 27255);
/* harmony import */ var _emergency_edit_emergency_edit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emergency-edit/emergency-edit.module */ 97101);
/* harmony import */ var _emergency_warning_emergency_warning_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emergency-warning/emergency-warning.module */ 55773);
/* harmony import */ var _emergency_detail_search_emergency_detail_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../emergency-detail-search/emergency-detail-search.module */ 33564);











let EmergencyListPageModule = class EmergencyListPageModule {
};
EmergencyListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _emergency_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmergencyListPageRoutingModule,
            _emergency_edit_emergency_edit_module__WEBPACK_IMPORTED_MODULE_3__.EmergencyEditPageModule,
            _emergency_warning_emergency_warning_module__WEBPACK_IMPORTED_MODULE_4__.EmergencyWarningPageModule,
            _emergency_detail_search_emergency_detail_search_module__WEBPACK_IMPORTED_MODULE_5__.EmergencyDetailSearchPageModule
        ],
        declarations: [_emergency_list_page__WEBPACK_IMPORTED_MODULE_2__.EmergencyListPage]
    })
], EmergencyListPageModule);



/***/ }),

/***/ 27255:
/*!*********************************************************************************!*\
  !*** ./src/app/page/emergency-management/emergency-list/emergency-list.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyListPage": () => (/* binding */ EmergencyListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_emergency_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./emergency-list.page.html */ 95113);
/* harmony import */ var _emergency_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emergency-list.page.scss */ 8823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _emergency_edit_emergency_edit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emergency-edit/emergency-edit.page */ 67689);
/* harmony import */ var _emergency_warning_emergency_warning_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emergency-warning/emergency-warning.page */ 7705);
/* harmony import */ var _emergency_detail_search_emergency_detail_search_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emergency-detail-search/emergency-detail-search.page */ 7749);








// import { AlertService } from 'src/app/basic/service/ionic/alert.service';
let EmergencyListPage = class EmergencyListPage {
    constructor(_modal) {
        this._modal = _modal;
    }
    ngOnInit() {
    }
    edit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _emergency_edit_emergency_edit_page__WEBPACK_IMPORTED_MODULE_2__.EmergencyEditPage,
                componentProps: {}
            });
            modal.present();
        });
    }
    warning() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _emergency_warning_emergency_warning_page__WEBPACK_IMPORTED_MODULE_3__.EmergencyWarningPage,
            });
            modal.present();
        });
    }
    openDetailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _emergency_detail_search_emergency_detail_search_page__WEBPACK_IMPORTED_MODULE_4__.EmergencyDetailSearchPage,
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
};
EmergencyListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
EmergencyListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-emergency-list',
        template: _raw_loader_emergency_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_emergency_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EmergencyListPage);



/***/ }),

/***/ 8823:
/*!***********************************************************************************!*\
  !*** ./src/app/page/emergency-management/emergency-list/emergency-list.page.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("body {\n  margin: 0;\n  padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtZXJnZW5jeS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFNBQVM7RUFDVCxVQUFVO0FBQWQiLCJmaWxlIjoiZW1lcmdlbmN5LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn0iXX0= */");

/***/ }),

/***/ 95113:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/emergency-management/emergency-list/emergency-list.page.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n<app-header-admin></app-header-admin>\n\n<ion-content>\n  <app-row style=\"align-items: flex-start;\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\"><h5>필터</h5></app-col>\n            <app-col size=\"auto\">\n              <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList(0)\">검색</app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <tr>\n            <td>\n              <app-select-scene></app-select-scene>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-contractor></app-select-contractor>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-radio-input label=\"알림유형\">\n                <app-radio type=\"all\" value=\"전체\">전체</app-radio>\n                <app-radio value=\"비상알림\">비상알림</app-radio>\n                <app-radio value=\"경고알림\">경고알림</app-radio>\n              </app-radio-input>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-radio-input label=\"상태\">\n                <app-radio type=\"all\" value=\"전체\">전체</app-radio>\n                <app-radio value=\"종료\">종료</app-radio>\n                <app-radio value=\"진행중\">진행중</app-radio>\n              </app-radio-input>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input-group label=\"발송일\">\n                <app-calendar></app-calendar>\n                ~\n                <app-calendar></app-calendar>\n              </app-input-group>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input label=\"검색어\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <ion-buttons slot=\"start\">\n          <app-button fill=\"translucent\" (click)=\"edit()\">비상 알림</app-button>\n          <app-button fill=\"translucent\" (click)=\"warning()\">경고 팝업 대상</app-button>\n          <!-- <app-button fill=\"translucent\">제출 작성</app-button>\n          <app-button fill=\"translucent\" (click)=\"pending()\">미결 문서</app-button> -->\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-toolbar color=\"white\">\n        <h5>위험 알림 관리 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n      </ion-toolbar>\n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 48px;\">No</th>\n              <th>알림유형</th>\n              <th>메세지</th>\n              <th>상태</th>\n              <th>발송일시</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"button\" class=\"button\" (click)=\"edit(item)\">\n              <td>1</td>\n              <td>비상알림</td>\n              <td>[101]동 화재발생했습니다.</td>\n              <td>진행중</td>\n              <td>21.11.22 17:47</td>\n            </tr>\n          </tbody>\n        </app-table>\n        <!-- <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"getList($event)\"></app-pager> -->\n        <app-pager></app-pager>\n      </app-col>\n  </app-row>\n</ion-content>\n</ng-container>\n\n\n<!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>위험 알림 관리</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <app-input-template label=\"현장\">\n          <!-- <p slot=\"input\">{{ form.project_name }}</p> -->\n          <p slot=\"input\">수원 당수 아파트 공사</p>\n        </app-input-template>\n        <app-button (click)=\"openDetailSearch()\">상세검색</app-button>\n      </app-input-group>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n  <app-row>\n    <app-col></app-col>\n    <app-col size=\"auto\">\n      <app-button fill=\"translucent\" (click)=\"edit()\">비상알림</app-button>\n    </app-col>\n  </app-row>\n  <!-- <app-card *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item)\"> -->\n  <app-card (click)=\"edit()\">\n    <app-row>\n      <app-col>\n        <h5>수시 위험성 평가서</h5>\n      </app-col>\n      <app-col size=\"auto\">\n        <!-- <app-chip-approval-answer [approval_cnt_answer]=\"item.approval_cnt_answer\"></app-chip-approval-answer> -->\n        <!-- <ion-chip color=\"primary\">상황종료</ion-chip> -->\n        <ion-chip color=\"success\">진행중</ion-chip>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col>\n        <!-- <p>{{ item.company_name }}</p> -->\n        <p>극동건설(주)</p>\n        <!-- <p>작업기간: {{ item.risk_asment_start_date }} ~ {{ item.risk_asment_end_date }}</p> -->\n        <p>작업기간: 2022.11.11 ~ 2022.11.12</p>\n      </app-col>\n    </app-row>\n    <ion-badge color=\"warning\">비상 알림</ion-badge>\n    <!-- <ion-badge color=\"success\">경고 알림</ion-badge> -->\n    <!-- <ion-badge color=\"success\">{{ item.ctgo_construction_name }}</ion-badge> -->\n  </app-card>\n\n  <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n    <ion-infinite-scroll-content loading-spinner=\"dots\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n</ng-container>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_emergency-management_emergency-list_emergency-list_module_ts.js.map