(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_member-management_member-approval-wait_belong-info-edit_belong-info-edit_module_ts"],{

/***/ 70714:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/belong-info-edit/belong-info-edit-routing.module.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BelongInfoEditPageRoutingModule": () => (/* binding */ BelongInfoEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _belong_info_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./belong-info-edit.page */ 3130);




const routes = [
    {
        path: '',
        component: _belong_info_edit_page__WEBPACK_IMPORTED_MODULE_0__.BelongInfoEditPage
    }
];
let BelongInfoEditPageRoutingModule = class BelongInfoEditPageRoutingModule {
};
BelongInfoEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BelongInfoEditPageRoutingModule);



/***/ }),

/***/ 48707:
/*!*********************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/belong-info-edit/belong-info-edit.module.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BelongInfoEditPageModule": () => (/* binding */ BelongInfoEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _belong_info_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./belong-info-edit-routing.module */ 70714);
/* harmony import */ var _belong_info_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./belong-info-edit.page */ 3130);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let BelongInfoEditPageModule = class BelongInfoEditPageModule {
};
BelongInfoEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _belong_info_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.BelongInfoEditPageRoutingModule
        ],
        declarations: [_belong_info_edit_page__WEBPACK_IMPORTED_MODULE_1__.BelongInfoEditPage]
    })
], BelongInfoEditPageModule);



/***/ }),

/***/ 3130:
/*!*******************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/belong-info-edit/belong-info-edit.page.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BelongInfoEditPage": () => (/* binding */ BelongInfoEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_belong_info_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./belong-info-edit.page.html */ 66008);
/* harmony import */ var _belong_info_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./belong-info-edit.page.scss */ 43842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let BelongInfoEditPage = class BelongInfoEditPage {
    constructor() { }
    ngOnInit() {
    }
};
BelongInfoEditPage.ctorParameters = () => [];
BelongInfoEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-belong-info-edit',
        template: _raw_loader_belong_info_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_belong_info_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BelongInfoEditPage);



/***/ }),

/***/ 43842:
/*!*********************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/belong-info-edit/belong-info-edit.page.scss ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZWxvbmctaW5mby1lZGl0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 66008:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/member-management/member-approval-wait/belong-info-edit/belong-info-edit.page.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>정보 불러오기</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<h4 style=\"text-align: center;\">[재입사] 근로자의 이전 소속 정보를 불러옵니다.<br>\n소속 정보를 선택해 주세요.</h4>\n<!-- <h4 style=\"text-align: center;\">[재입사] 근로자의 소속 정보를 불러옵니다.<br>\n  소속 정보를 선택해 주세요.</h4> -->\n<app-table>\n  <thead>\n    <tr>\n      <th style=\"width: 40px;\" rowspan=\"2\"><app-check color=\"white\" size=\"small\" name=\"check\"></app-check></th>\n      <th style=\"width: 48px;\">No</th>\n      <th>업체명</th>\n      <th>현장명</th>\n      <th>공종</th>\n      <th>안전직무</th>\n      <th>직종</th>\n      <th>최초 출역일</th>\n      <th>최종 출역일</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class=\"button\">\n      <td>\n        <app-check color=\"white\" size=\"small\" name=\"check\"></app-check>\n      </td>\n      <td>2</td>\n      <td>(주)지에스아이엘</td>\n      <td>세종시 주택 공사 현장</td>\n      <td>건축</td>\n      <td>해당없음</td>\n      <td>보통인부</td>\n      <td>2021-03-30</td>\n      <td>2021-03-31</td>\n    </tr>\n  </tbody>\n</app-table>\n</ion-content>\n<app-button-footer>\n  <app-button>적용</app-button>\n</app-button-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_member-management_member-approval-wait_belong-info-edit_belong-info-edit_module_ts.js.map