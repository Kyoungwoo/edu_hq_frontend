(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_work-plan_ptw_ptw-risk-evaluation_ptw-risk-evaluation_module_ts"],{

/***/ 92501:
/*!**********************************************************************************************!*\
  !*** ./src/app/page/work-plan/ptw/ptw-risk-evaluation/ptw-risk-evaluation-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PtwRiskEvaluationPageRoutingModule": () => (/* binding */ PtwRiskEvaluationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ptw_risk_evaluation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ptw-risk-evaluation.page */ 35305);




const routes = [
    {
        path: '',
        component: _ptw_risk_evaluation_page__WEBPACK_IMPORTED_MODULE_0__.PtwRiskEvaluationPage
    }
];
let PtwRiskEvaluationPageRoutingModule = class PtwRiskEvaluationPageRoutingModule {
};
PtwRiskEvaluationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PtwRiskEvaluationPageRoutingModule);



/***/ }),

/***/ 44823:
/*!**************************************************************************************!*\
  !*** ./src/app/page/work-plan/ptw/ptw-risk-evaluation/ptw-risk-evaluation.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PtwRiskEvaluationPageModule": () => (/* binding */ PtwRiskEvaluationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ptw_risk_evaluation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ptw-risk-evaluation-routing.module */ 92501);
/* harmony import */ var _ptw_risk_evaluation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ptw-risk-evaluation.page */ 35305);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let PtwRiskEvaluationPageModule = class PtwRiskEvaluationPageModule {
};
PtwRiskEvaluationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _ptw_risk_evaluation_routing_module__WEBPACK_IMPORTED_MODULE_0__.PtwRiskEvaluationPageRoutingModule,
        ],
        declarations: [_ptw_risk_evaluation_page__WEBPACK_IMPORTED_MODULE_1__.PtwRiskEvaluationPage]
    })
], PtwRiskEvaluationPageModule);



/***/ }),

/***/ 35305:
/*!************************************************************************************!*\
  !*** ./src/app/page/work-plan/ptw/ptw-risk-evaluation/ptw-risk-evaluation.page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PtwRiskEvaluationPage": () => (/* binding */ PtwRiskEvaluationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ptw_risk_evaluation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ptw-risk-evaluation.page.html */ 7893);
/* harmony import */ var _ptw_risk_evaluation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ptw-risk-evaluation.page.scss */ 60499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let PtwRiskEvaluationPage = class PtwRiskEvaluationPage {
    constructor() {
        this.editable = {
            add: true,
            company_id: true,
            my_state: true
        };
    }
    ngOnInit() { }
};
PtwRiskEvaluationPage.ctorParameters = () => [];
PtwRiskEvaluationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-risk-evaluation',
        template: _raw_loader_ptw_risk_evaluation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ptw_risk_evaluation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PtwRiskEvaluationPage);



/***/ }),

/***/ 60499:
/*!**************************************************************************************!*\
  !*** ./src/app/page/work-plan/ptw/ptw-risk-evaluation/ptw-risk-evaluation.page.scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".btn_wrap {\n  display: flex;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB0dy1yaXNrLWV2YWx1YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJwdHctcmlzay1ldmFsdWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5fd3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ 7893:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/work-plan/ptw/ptw-risk-evaluation/ptw-risk-evaluation.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>위험성 평가 불러오기</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <form>\n      <app-check-group>\n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 40px;\">\n                <app-radio-input type=\"all\" name=\"radio\">\n                  <app-radio value=\"all\"></app-radio>\n                </app-radio-input>\n              </th>\n              <th>No</th>\n              <th>공종</th>\n              <th>서식명</th>\n              <th>업체명</th>\n              <th>작업기간</th>\n              <th>작성자</th>\n              <th>작성일</th>\n              <th>결제현황</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>\n                <app-radio-input name=\"radio\">\n                  <app-radio value=\"1\"></app-radio>\n                </app-radio-input>\n                \n              </td>\n              <td>1</td>\n              <td>토목</td>\n              <td>수시 위험성 평가서</td>\n              <td>건진건설(주)</td>\n              <td>2022-07-01 ~ 2022-07-15</td>\n              <td>소세원</td>\n              <td>2022-06-27</td>\n              <td>결제중</td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-check-group>\n      <div class=\"btn_wrap\">\n        <app-button>적용</app-button>\n      </div>\n      \n    </form>\n  </ion-content>\n  </ng-container>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_work-plan_ptw_ptw-risk-evaluation_ptw-risk-evaluation_module_ts.js.map