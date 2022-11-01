(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_task-management_incongruity_incongruity-need_incongruity-need_module_ts"],{

/***/ 62032:
/*!************************************************************************************************************************!*\
  !*** ./src/app/page/task-management/incongruity/incongruity-detail-search/incongruity-detail-search-routing.module.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncongruityDetailSearchPageRoutingModule": () => (/* binding */ IncongruityDetailSearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _incongruity_detail_search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incongruity-detail-search.page */ 38480);




const routes = [
    {
        path: '',
        component: _incongruity_detail_search_page__WEBPACK_IMPORTED_MODULE_0__.IncongruityDetailSearchPage
    }
];
let IncongruityDetailSearchPageRoutingModule = class IncongruityDetailSearchPageRoutingModule {
};
IncongruityDetailSearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IncongruityDetailSearchPageRoutingModule);



/***/ }),

/***/ 44431:
/*!****************************************************************************************************************!*\
  !*** ./src/app/page/task-management/incongruity/incongruity-detail-search/incongruity-detail-search.module.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncongruityDetailSearchPageModule": () => (/* binding */ IncongruityDetailSearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _incongruity_detail_search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incongruity-detail-search-routing.module */ 62032);
/* harmony import */ var _incongruity_detail_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incongruity-detail-search.page */ 38480);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);









let IncongruityDetailSearchPageModule = class IncongruityDetailSearchPageModule {
};
IncongruityDetailSearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _incongruity_detail_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.IncongruityDetailSearchPageRoutingModule
        ],
        declarations: [_incongruity_detail_search_page__WEBPACK_IMPORTED_MODULE_1__.IncongruityDetailSearchPage]
    })
], IncongruityDetailSearchPageModule);



/***/ }),

/***/ 38480:
/*!**************************************************************************************************************!*\
  !*** ./src/app/page/task-management/incongruity/incongruity-detail-search/incongruity-detail-search.page.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncongruityDetailSearchPage": () => (/* binding */ IncongruityDetailSearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_incongruity_detail_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./incongruity-detail-search.page.html */ 1267);
/* harmony import */ var _incongruity_detail_search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incongruity-detail-search.page.scss */ 29131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);







let IncongruityDetailSearchPage = class IncongruityDetailSearchPage {
    constructor(_modal, file, languagePack) {
        this._modal = _modal;
        this.file = file;
        this.languagePack = languagePack;
        this.form = {
            project_id: null,
            project_name: '',
            company_id: null,
            ctgo_construction_id: 0,
            risk_asment_type: '수시',
            approval_cnt_answer: '전체',
            risk_asment_start_date: '',
            risk_asment_end_date: '',
            search_text: '',
            limit_no: 0
        };
        this.temptForm = {
            project_id: null,
            project_name: '',
            company_id: null,
            ctgo_construction_id: 0,
            risk_asment_type: '수시',
            approval_cnt_answer: '전체',
            risk_asment_start_date: '',
            risk_asment_end_date: '',
            search_text: '',
            limit_no: 0
        };
    }
    ngOnInit() {
        this.temptForm = this.file.clone(this.form);
    }
    projectChange(ev) {
        this.temptForm.project_name = ev.project_name;
    }
    reset() {
        this.temptForm = this.file.clone(this.form);
    }
    search() {
        const form = this.file.clone(this.temptForm);
        this._modal.dismiss(form);
    }
};
IncongruityDetailSearchPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
IncongruityDetailSearchPage.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
IncongruityDetailSearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-incongruity-detail-search',
        template: _raw_loader_incongruity_detail_search_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_incongruity_detail_search_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IncongruityDetailSearchPage);



/***/ }),

/***/ 85509:
/*!******************************************************************************************************!*\
  !*** ./src/app/page/task-management/incongruity/incongruity-need/incongruity-need-routing.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncongruityNeedPageRoutingModule": () => (/* binding */ IncongruityNeedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _incongruity_need_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./incongruity-need.page */ 584);




const routes = [
    {
        path: '',
        component: _incongruity_need_page__WEBPACK_IMPORTED_MODULE_0__.IncongruityNeedPage
    }
];
let IncongruityNeedPageRoutingModule = class IncongruityNeedPageRoutingModule {
};
IncongruityNeedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IncongruityNeedPageRoutingModule);



/***/ }),

/***/ 89796:
/*!**********************************************************************************************!*\
  !*** ./src/app/page/task-management/incongruity/incongruity-need/incongruity-need.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncongruityNeedPageModule": () => (/* binding */ IncongruityNeedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _incongruity_need_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incongruity-need-routing.module */ 85509);
/* harmony import */ var _incongruity_need_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incongruity-need.page */ 584);
/* harmony import */ var _incongruity_edit_incongruity_edit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../incongruity-edit/incongruity-edit.module */ 27646);
/* harmony import */ var _incongruity_detail_search_incongruity_detail_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../incongruity-detail-search/incongruity-detail-search.module */ 44431);










let IncongruityNeedPageModule = class IncongruityNeedPageModule {
};
IncongruityNeedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _incongruity_need_routing_module__WEBPACK_IMPORTED_MODULE_1__.IncongruityNeedPageRoutingModule,
            _incongruity_edit_incongruity_edit_module__WEBPACK_IMPORTED_MODULE_3__.IncongruityEditPageModule,
            _incongruity_detail_search_incongruity_detail_search_module__WEBPACK_IMPORTED_MODULE_4__.IncongruityDetailSearchPageModule
        ],
        declarations: [_incongruity_need_page__WEBPACK_IMPORTED_MODULE_2__.IncongruityNeedPage]
    })
], IncongruityNeedPageModule);



/***/ }),

/***/ 584:
/*!********************************************************************************************!*\
  !*** ./src/app/page/task-management/incongruity/incongruity-need/incongruity-need.page.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IncongruityNeedPage": () => (/* binding */ IncongruityNeedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_incongruity_need_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./incongruity-need.page.html */ 39025);
/* harmony import */ var _incongruity_need_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incongruity-need.page.scss */ 38804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _incongruity_edit_incongruity_edit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../incongruity-edit/incongruity-edit.page */ 23652);
/* harmony import */ var _incongruity_detail_search_incongruity_detail_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../incongruity-detail-search/incongruity-detail-search.page */ 38480);







let IncongruityNeedPage = class IncongruityNeedPage {
    constructor(_modal) {
        this._modal = _modal;
    }
    ngOnInit() {
    }
    edit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _incongruity_edit_incongruity_edit_page__WEBPACK_IMPORTED_MODULE_2__.IncongruityEditPage,
                componentProps: {}
            });
            modal.present();
        });
    }
    openDetailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
IncongruityNeedPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
IncongruityNeedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-incongruity-need',
        template: _raw_loader_incongruity_need_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_incongruity_need_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IncongruityNeedPage);



/***/ }),

/***/ 29131:
/*!****************************************************************************************************************!*\
  !*** ./src/app/page/task-management/incongruity/incongruity-detail-search/incongruity-detail-search.page.scss ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmNvbmdydWl0eS1kZXRhaWwtc2VhcmNoLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 38804:
/*!**********************************************************************************************!*\
  !*** ./src/app/page/task-management/incongruity/incongruity-need/incongruity-need.page.scss ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".flex_end {\n  display: flex;\n  justify-content: flex-end;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY29uZ3J1aXR5LW5lZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJpbmNvbmdydWl0eS1uZWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4X2VuZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufSJdfQ== */");

/***/ }),

/***/ 1267:
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/task-management/incongruity/incongruity-detail-search/incongruity-detail-search.page.html ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>{{ languagePack.getText('상세검색') }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-select-scene [(ngModel)]=\"temptForm.project_id\" (change)=\"projectChange($event)\"></app-select-scene>\n  <app-select-contractor [project_id]=\"temptForm.project_id\" [(ngModel)]=\"temptForm.company_id\"></app-select-contractor>\n  <app-select-construction [project_id]=\"temptForm.project_id\" [master_company_id]=\"temptForm.company_id\" [(ngModel)]=\"temptForm.company_id\"></app-select-construction>\n  <app-select-approval-type [(ngModel)]=\"temptForm.approval_cnt_answer\"></app-select-approval-type>\n\n  <app-input-group label=\"작업기간\">\n    <app-calendar [(ngModel)]=\"temptForm.risk_asment_start_date\" [max]=\"temptForm.risk_asment_end_date\"></app-calendar>\n    ~\n    <app-calendar [(ngModel)]=\"temptForm.risk_asment_end_date\" [min]=\"temptForm.risk_asment_start_date\"></app-calendar>\n  </app-input-group>\n\n  <app-input [label]=\"languagePack.getText('검색어')\" [placeholder]=\"languagePack.getText('검색어를 입력해 주세요')\" [(ngModel)]=\"temptForm.search_text\"></app-input>\n</ion-content>\n<app-button-footer>\n  <app-button (click)=\"reset()\">{{ languagePack.getText('초기화') }}</app-button>\n  <app-button (click)=\"search()\">{{ languagePack.getText('검색') }}</app-button>\n</app-button-footer> -->\n\n<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>{{ languagePack.getText('상세검색') }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-select-scene></app-select-scene>\n  <app-select-contractor></app-select-contractor>\n  <app-select-action></app-select-action>\n\n  <app-input-group label=\"발생일\">\n    <app-calendar></app-calendar>\n  </app-input-group>\n\n  <app-input [label]=\"languagePack.getText('검색어')\" [placeholder]=\"languagePack.getText('검색어를 입력해 주세요')\"></app-input>\n</ion-content>\n<app-button-footer>\n  <app-button (click)=\"reset()\">{{ languagePack.getText('초기화') }}</app-button>\n  <app-button (click)=\"search()\">{{ languagePack.getText('검색') }}</app-button>\n</app-button-footer>\n");

/***/ }),

/***/ 39025:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/task-management/incongruity/incongruity-need/incongruity-need.page.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n<app-header-admin></app-header-admin>\n\n<ion-content>\n  <app-row style=\"align-items: flex-start;\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\"><h5>필터</h5></app-col>\n            <app-col size=\"auto\">\n              <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList(0)\">검색</app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <tr>\n            <td>\n              <app-select-scene></app-select-scene>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-contractor></app-select-contractor>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input-group label=\"발생일\">\n                <app-calendar></app-calendar>\n                ~\n                <app-calendar></app-calendar>\n              </app-input-group>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-action></app-select-action>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input label=\"검색어\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <ion-buttons slot=\"start\">\n          <app-button fill=\"translucent\" (click)=\"edit()\">신규 등록</app-button>\n          <app-button fill=\"translucent\">조치 필요</app-button>\n          <!-- <app-button fill=\"translucent\">제출 작성</app-button>\n          <app-button fill=\"translucent\" (click)=\"pending()\">미결 문서</app-button> -->\n        </ion-buttons>\n      </ion-toolbar>\n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 48px;\">No</th>\n              <th>장소</th>\n              <th>부적합 정보</th>\n              <th>발생일시</th>\n              <th>작성자</th>\n              <th>조치 현황</th>\n              <th>조치일시</th>\n              <th>조치자</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"button\" class=\"button\" (click)=\"edit(item)\">\n              <td>1</td>\n              <td>116동 엘리베이터실 앞</td>\n              <td>안전 난간대 조치 요망</td>\n              <td>21.09.15 07:30</td>\n              <td>이상범</td>\n              <td>조치 전</td>\n              <td>21.09.16 08:30</td>\n              <td>구범수,이상범</td>\n            </tr>\n          </tbody>\n        </app-table>\n        <!-- <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"getList($event)\"></app-pager> -->\n        <app-pager></app-pager>\n      </app-col>\n  </app-row>\n</ion-content>\n</ng-container>\n\n<!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>부적합(아차사고) 관리</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <!-- <app-card *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item)\"> -->\n  <app-card>\n    <app-row>\n      <app-col>\n        <h5>변전선 미설치로 인한 감전위험</h5>\n      </app-col>\n      <app-col class=\"flex_end\">\n        <ion-chip color=\"warning\">조치 전</ion-chip>\n        <!-- <ion-chip color=\"success\">조치 완료</ion-chip> -->\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col class=\"flex\">\n        <p>A-1블록 103동 지하 1층 전기실</p>\n        <p>작성자 : 이상범 / 발생일시 : 2022.05.06(화)</p>\n        <p>조치자 : 이상범/ 조치일시 : 2022.05.06(화)</p>\n      </app-col>\n    </app-row>\n  </app-card>\n\n  <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n    <ion-infinite-scroll-content loading-spinner=\"dots\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n</ng-container>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_task-management_incongruity_incongruity-need_incongruity-need_module_ts.js.map