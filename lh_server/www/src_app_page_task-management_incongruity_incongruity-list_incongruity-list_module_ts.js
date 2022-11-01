(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_task-management_incongruity_incongruity-list_incongruity-list_module_ts"],{

/***/ 84826:
/*!******************************************************************************************************!*\
  !*** ./src/app/page/task-management/incongruity/incongruity-list/incongruity-list-routing.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncongruityListPageRoutingModule": () => (/* binding */ IncongruityListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _incongruity_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incongruity-list.page */ 79304);




const routes = [
    {
        path: '',
        component: _incongruity_list_page__WEBPACK_IMPORTED_MODULE_0__.IncongruityListPage
    }
];
let IncongruityListPageRoutingModule = class IncongruityListPageRoutingModule {
};
IncongruityListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IncongruityListPageRoutingModule);



/***/ }),

/***/ 19913:
/*!**********************************************************************************************!*\
  !*** ./src/app/page/task-management/incongruity/incongruity-list/incongruity-list.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncongruityListPageModule": () => (/* binding */ IncongruityListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _incongruity_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incongruity-list-routing.module */ 84826);
/* harmony import */ var _incongruity_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incongruity-list.page */ 79304);
/* harmony import */ var _incongruity_edit_incongruity_edit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../incongruity-edit/incongruity-edit.module */ 27646);
/* harmony import */ var _incongruity_detail_search_incongruity_detail_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../incongruity-detail-search/incongruity-detail-search.module */ 44431);
/* harmony import */ var _incongruity_need_incongruity_need_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../incongruity-need/incongruity-need.module */ 89796);











let IncongruityListPageModule = class IncongruityListPageModule {
};
IncongruityListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _incongruity_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.IncongruityListPageRoutingModule,
            _incongruity_edit_incongruity_edit_module__WEBPACK_IMPORTED_MODULE_3__.IncongruityEditPageModule,
            _incongruity_detail_search_incongruity_detail_search_module__WEBPACK_IMPORTED_MODULE_4__.IncongruityDetailSearchPageModule,
            _incongruity_need_incongruity_need_module__WEBPACK_IMPORTED_MODULE_5__.IncongruityNeedPageModule
        ],
        declarations: [_incongruity_list_page__WEBPACK_IMPORTED_MODULE_2__.IncongruityListPage]
    })
], IncongruityListPageModule);



/***/ }),

/***/ 79304:
/*!********************************************************************************************!*\
  !*** ./src/app/page/task-management/incongruity/incongruity-list/incongruity-list.page.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncongruityListPage": () => (/* binding */ IncongruityListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_incongruity_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./incongruity-list.page.html */ 65577);
/* harmony import */ var _incongruity_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incongruity-list.page.scss */ 4692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _incongruity_edit_incongruity_edit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../incongruity-edit/incongruity-edit.page */ 23652);
/* harmony import */ var _incongruity_detail_search_incongruity_detail_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../incongruity-detail-search/incongruity-detail-search.page */ 38480);
/* harmony import */ var _incongruity_need_incongruity_need_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../incongruity-need/incongruity-need.page */ 584);








let IncongruityListPage = class IncongruityListPage {
    constructor(_modal) {
        this._modal = _modal;
    }
    ngOnInit() {
    }
    edit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _incongruity_edit_incongruity_edit_page__WEBPACK_IMPORTED_MODULE_2__.IncongruityEditPage,
                componentProps: {}
            });
            modal.present();
        });
    }
    need() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _incongruity_need_incongruity_need_page__WEBPACK_IMPORTED_MODULE_4__.IncongruityNeedPage,
                componentProps: {}
            });
            modal.present();
        });
    }
    openDetailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _incongruity_detail_search_incongruity_detail_search_page__WEBPACK_IMPORTED_MODULE_3__.IncongruityDetailSearchPage,
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
IncongruityListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
IncongruityListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-incongruity-list',
        template: _raw_loader_incongruity_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_incongruity_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IncongruityListPage);



/***/ }),

/***/ 4692:
/*!**********************************************************************************************!*\
  !*** ./src/app/page/task-management/incongruity/incongruity-list/incongruity-list.page.scss ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".flex_end {\n  display: flex;\n  justify-content: flex-end;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY29uZ3J1aXR5LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJpbmNvbmdydWl0eS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4X2VuZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufSJdfQ== */");

/***/ }),

/***/ 65577:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/task-management/incongruity/incongruity-list/incongruity-list.page.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n<app-header-admin></app-header-admin>\n\n<ion-content>\n  <app-row style=\"align-items: flex-start;\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\"><h5>필터</h5></app-col>\n            <app-col size=\"auto\">\n              <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList(0)\">검색</app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <tr>\n            <td>\n              <app-select-scene></app-select-scene>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-contractor></app-select-contractor>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input-group label=\"발생일\">\n                <app-calendar></app-calendar>\n                ~\n                <app-calendar></app-calendar>\n              </app-input-group>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-action></app-select-action>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input label=\"검색어\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <ion-buttons slot=\"start\">\n          <app-button fill=\"translucent\" (click)=\"edit()\">신규 등록</app-button>\n          <app-button fill=\"translucent\">조치 필요</app-button>\n          <!-- <app-button fill=\"translucent\">제출 작성</app-button>\n          <app-button fill=\"translucent\" (click)=\"pending()\">미결 문서</app-button> -->\n        </ion-buttons>\n      </ion-toolbar>\n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 48px;\">No</th>\n              <th>장소</th>\n              <th>부적합 정보</th>\n              <th>발생일시</th>\n              <th>작성자</th>\n              <th>조치 현황</th>\n              <th>조치일시</th>\n              <th>조치자</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"button\" class=\"button\" (click)=\"edit(item)\">\n              <td>1</td>\n              <td>116동 엘리베이터실 앞</td>\n              <td>안전 난간대 조치 요망</td>\n              <td>21.09.15 07:30</td>\n              <td>이상범</td>\n              <td>조치 전</td>\n              <td>21.09.16 08:30</td>\n              <td>구범수,이상범</td>\n            </tr>\n          </tbody>\n        </app-table>\n        <!-- <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"getList($event)\"></app-pager> -->\n        <app-pager></app-pager>\n      </app-col>\n  </app-row>\n</ion-content>\n</ng-container>\n\n<!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>부적합(아차사고) 관리</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <app-input-template label=\"현장\">\n          <!-- <p slot=\"input\">{{ form.project_name }}</p> -->\n          <p slot=\"input\">서울시 블록형 단독주택 공사</p>\n        </app-input-template>\n        <app-button (click)=\"openDetailSearch()\">상세검색</app-button>\n      </app-input-group>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <!-- <app-card *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item)\"> -->\n  <app-card (click)=\"edit()\">\n    <app-row>\n      <app-col>\n        <h5>변전선 미설치로 인한 감전위험</h5>\n      </app-col>\n      <app-col class=\"flex_end\">\n        <ion-chip color=\"warning\">조치 전</ion-chip>\n        <!-- <ion-chip color=\"success\">조치 완료</ion-chip> -->\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col class=\"flex\">\n        <p>A-1블록 103동 지하 1층 전기실</p>\n        <p>작성자 : 이상범 / 발생일시 : 2022.05.06(화)</p>\n        <p>조치자 : 이상범/ 조치일시 : 2022.05.06(화)</p>\n      </app-col>\n    </app-row>\n  </app-card>\n\n  <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n    <ion-infinite-scroll-content loading-spinner=\"dots\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n<app-button-footer>\n  <app-button (click)=\"edit()\">신규 등록</app-button>\n  <app-button (click)=\"need()\">조치 필요</app-button>\n</app-button-footer>\n</ng-container>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_task-management_incongruity_incongruity-list_incongruity-list_module_ts.js.map