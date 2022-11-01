(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_project-management_scene-management_system-standard-set_system-standard-set_module_ts"],{

/***/ 23346:
/*!********************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/system-standard-set/system-standard-set-routing.module.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemStandardSetPageRoutingModule": () => (/* binding */ SystemStandardSetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _system_standard_set_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system-standard-set.page */ 92521);




const routes = [
    {
        path: '',
        component: _system_standard_set_page__WEBPACK_IMPORTED_MODULE_0__.SystemStandardSetPage
    }
];
let SystemStandardSetPageRoutingModule = class SystemStandardSetPageRoutingModule {
};
SystemStandardSetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SystemStandardSetPageRoutingModule);



/***/ }),

/***/ 56985:
/*!************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/system-standard-set/system-standard-set.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemStandardSetPageModule": () => (/* binding */ SystemStandardSetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _system_standard_set_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system-standard-set-routing.module */ 23346);
/* harmony import */ var _system_standard_set_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system-standard-set.page */ 92521);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let SystemStandardSetPageModule = class SystemStandardSetPageModule {
};
SystemStandardSetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _system_standard_set_routing_module__WEBPACK_IMPORTED_MODULE_0__.SystemStandardSetPageRoutingModule
        ],
        declarations: [_system_standard_set_page__WEBPACK_IMPORTED_MODULE_1__.SystemStandardSetPage]
    })
], SystemStandardSetPageModule);



/***/ }),

/***/ 92521:
/*!**********************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/system-standard-set/system-standard-set.page.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemStandardSetPage": () => (/* binding */ SystemStandardSetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_system_standard_set_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./system-standard-set.page.html */ 88018);
/* harmony import */ var _system_standard_set_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system-standard-set.page.scss */ 75354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let SystemStandardSetPage = class SystemStandardSetPage {
    constructor() {
        this.menuCount = 2;
    }
    ngOnInit() {
    }
};
SystemStandardSetPage.ctorParameters = () => [];
SystemStandardSetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-system-standard-set',
        template: _raw_loader_system_standard_set_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_system_standard_set_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SystemStandardSetPage);



/***/ }),

/***/ 75354:
/*!************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/system-standard-set/system-standard-set.page.scss ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzeXN0ZW0tc3RhbmRhcmQtc2V0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 88018:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/scene-management/system-standard-set/system-standard-set.page.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-admin></app-header-admin>\n\n<ion-content>\n  <ion-toolbar color=\"white\">\n    <app-row>\n      <app-col size=\"auto\">\n        <ion-segment color=\"primary\" [value]=\"1\">\n          <ion-segment-button (click)=\"menuCount = 1\" [value]=\"1\">어드민 권한</ion-segment-button>\n          <ion-segment-button (click)=\"menuCount = 2\">시스템 사용유무</ion-segment-button>\n          <ion-segment-button (click)=\"menuCount = 3\">결재선 사용유무</ion-segment-button>\n        </ion-segment>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n  <app-row style=\"align-items: flex-start;\" *ngIf=\"menuCount === 2\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\">\n              <h5>필터</h5>\n            </app-col>\n            <app-col size=\"auto\">\n              <app-button fill=\"translucent\" style=\"width: 100px;\">검색</app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <tr>\n            <td>\n              <app-select-scene></app-select-scene>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-company></app-select-company>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <ion-buttons slot=\"start\">\n          <app-button fill=\"translucent\">전체 사용</app-button>\n          <app-button fill=\"translucent\">전체 미사용</app-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-toolbar color=\"white\">\n        <h5>시스템 기능 사용 설정</h5>\n      </ion-toolbar>\n      <app-table>\n        <thead>\n          <tr>\n            <th>목록</th>\n            <th>사용여부</th>\n            <th>목록</th>\n            <th>사용여부</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n          <td>\n            <app-input [readonly]=\"true\" value=\"위험성 평가 시스템\"></app-input>\n          </td>\n          <td>\n            <app-select>\n              <app-select-option value=\"Y\">Y</app-select-option>\n              <app-select-option value=\"N\">N</app-select-option>\n            </app-select>\n          </td>\n          <td>\n            <app-input [readonly]=\"true\" value=\"필폐공간 자동 계측\"></app-input>\n          </td>\n          <td>\n            <app-select>\n              <app-select-option value=\"Y\">Y</app-select-option>\n              <app-select-option value=\"N\">N</app-select-option>\n            </app-select>\n          </td>\n        </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n  </app-row>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_project-management_scene-management_system-standard-set_system-standard-set_module_ts.js.map