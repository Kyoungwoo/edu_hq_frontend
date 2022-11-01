(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_task-management_inspection_danger-list_danger-list_module_ts"],{

/***/ 73147:
/*!*******************************************************************************************!*\
  !*** ./src/app/page/task-management/inspection/danger-list/danger-list-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DangerListPageRoutingModule": () => (/* binding */ DangerListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _danger_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./danger-list.page */ 78954);




const routes = [
    {
        path: '',
        component: _danger_list_page__WEBPACK_IMPORTED_MODULE_0__.DangerListPage
    }
];
let DangerListPageRoutingModule = class DangerListPageRoutingModule {
};
DangerListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DangerListPageRoutingModule);



/***/ }),

/***/ 42050:
/*!***********************************************************************************!*\
  !*** ./src/app/page/task-management/inspection/danger-list/danger-list.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DangerListPageModule": () => (/* binding */ DangerListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _danger_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./danger-list-routing.module */ 73147);
/* harmony import */ var _danger_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./danger-list.page */ 78954);
/* harmony import */ var _danger_edit_danger_edit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../danger-edit/danger-edit.module */ 852);
/* harmony import */ var _danger_search_danger_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../danger-search/danger-search.module */ 86394);
/* harmony import */ var _danger_detail_search_danger_detail_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../danger-detail-search/danger-detail-search.module */ 49390);











let DangerListPageModule = class DangerListPageModule {
};
DangerListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _danger_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.DangerListPageRoutingModule,
            _danger_edit_danger_edit_module__WEBPACK_IMPORTED_MODULE_3__.DangerEditPageModule,
            _danger_search_danger_search_module__WEBPACK_IMPORTED_MODULE_4__.DangerSearchPageModule,
            _danger_detail_search_danger_detail_search_module__WEBPACK_IMPORTED_MODULE_5__.DangerDetailSearchPageModule
        ],
        declarations: [_danger_list_page__WEBPACK_IMPORTED_MODULE_2__.DangerListPage]
    })
], DangerListPageModule);



/***/ }),

/***/ 78954:
/*!*********************************************************************************!*\
  !*** ./src/app/page/task-management/inspection/danger-list/danger-list.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DangerListPage": () => (/* binding */ DangerListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_danger_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./danger-list.page.html */ 28806);
/* harmony import */ var _danger_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./danger-list.page.scss */ 57721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _danger_edit_danger_edit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../danger-edit/danger-edit.page */ 99210);
/* harmony import */ var _danger_detail_search_danger_detail_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../danger-detail-search/danger-detail-search.page */ 86062);







let DangerListPage = class DangerListPage {
    constructor(_modal) {
        this._modal = _modal;
    }
    ngOnInit() {
    }
    edit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _danger_edit_danger_edit_page__WEBPACK_IMPORTED_MODULE_2__.DangerEditPage,
                componentProps: {}
            });
            modal.present();
        });
    }
    openDetailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _danger_detail_search_danger_detail_search_page__WEBPACK_IMPORTED_MODULE_3__.DangerDetailSearchPage,
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
DangerListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
DangerListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-danger-list',
        template: _raw_loader_danger_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_danger_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DangerListPage);



/***/ }),

/***/ 57721:
/*!***********************************************************************************!*\
  !*** ./src/app/page/task-management/inspection/danger-list/danger-list.page.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("body {\n  margin: 0;\n  padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhbmdlci1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFNBQVM7RUFDVCxVQUFVO0FBQWQiLCJmaWxlIjoiZGFuZ2VyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn0iXX0= */");

/***/ }),

/***/ 28806:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/task-management/inspection/danger-list/danger-list.page.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n<app-header-admin></app-header-admin>\n\n<ion-content>\n  <app-row style=\"align-items: flex-start;\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\"><h5>필터</h5></app-col>\n            <app-col size=\"auto\">\n              <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList(0)\">검색</app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <tr>\n            <td>\n              <app-select-scene></app-select-scene>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-contractor></app-select-contractor>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-contractor-company></app-select-contractor-company>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input-group label=\"점검일\">\n                <app-calendar></app-calendar>\n                ~\n                <app-calendar></app-calendar>\n              </app-input-group>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-danger></app-select-danger>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input label=\"검색어\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <ion-buttons slot=\"start\">\n          <app-button fill=\"translucent\" (click)=\"edit()\">신규 점검</app-button>\n          <!-- <app-button fill=\"translucent\">제출 작성</app-button>\n          <app-button fill=\"translucent\" (click)=\"pending()\">미결 문서</app-button> -->\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-toolbar color=\"white\">\n        <h5>일일 점검 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n      </ion-toolbar>\n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 48px;\">No</th>\n              <th>점검일</th>\n              <th>위험지역유형</th>\n              <th>위험지역명</th>\n              <th>업체명</th>\n              <th>점검자</th>\n              <th>점검일</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"button\" class=\"button\" (click)=\"edit(item)\">\n              <td>1</td>\n              <td>2022-09-15</td>\n              <td>전기실</td>\n              <td>A-2 전기실</td>\n              <td>(주)지에스아이엘</td>\n              <td>김성배</td>\n              <td>2022-09-05</td>\n            </tr>\n          </tbody>\n        </app-table>\n        <!-- <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"getList($event)\"></app-pager> -->\n        <app-pager></app-pager>\n      </app-col>\n  </app-row>\n</ion-content>\n</ng-container>\n\n<!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>위험 지역 점검</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <app-input-template label=\"현장\">\n          <!-- <p slot=\"input\">{{ form.project_name }}</p> -->\n          <p slot=\"input\">서울시 블록형 단독주택 공사</p>\n        </app-input-template>\n        <app-button (click)=\"openDetailSearch()\">상세검색</app-button>\n      </app-input-group>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <!-- <app-card *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item)\"> -->\n  <app-card (click)=\"edit()\">\n    <app-row>\n      <app-col>\n        <h5>업체명 : (주)지에스아이엘</h5>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col class=\"flex\">\n        <p>점검일 : 2022-05-05(화)</p>\n        <p>점검자 : 이상범</p>\n        <p>전기실 / 101동 B1층 전기실</p>\n      </app-col>\n    </app-row>\n  </app-card>\n\n  <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n    <ion-infinite-scroll-content loading-spinner=\"dots\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n</ng-container>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_task-management_inspection_danger-list_danger-list_module_ts.js.map