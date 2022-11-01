(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_work-plan_ptw_ptw-edit_ptw-edit_module_ts"],{

/***/ 20640:
/*!************************************************************************!*\
  !*** ./src/app/page/work-plan/ptw/ptw-edit/ptw-edit-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PtwEditPageRoutingModule": () => (/* binding */ PtwEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ptw_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ptw-edit.page */ 10371);




const routes = [
    {
        path: '',
        component: _ptw_edit_page__WEBPACK_IMPORTED_MODULE_0__.PtwEditPage
    }
];
let PtwEditPageRoutingModule = class PtwEditPageRoutingModule {
};
PtwEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PtwEditPageRoutingModule);



/***/ }),

/***/ 55722:
/*!****************************************************************!*\
  !*** ./src/app/page/work-plan/ptw/ptw-edit/ptw-edit.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PtwEditPageModule": () => (/* binding */ PtwEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ptw_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ptw-edit-routing.module */ 20640);
/* harmony import */ var _ptw_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ptw-edit.page */ 10371);
/* harmony import */ var _ptw_risk_evaluation_ptw_risk_evaluation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ptw-risk-evaluation/ptw-risk-evaluation.module */ 44823);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/component.module */ 55051);









let PtwEditPageModule = class PtwEditPageModule {
};
PtwEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
            _ptw_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.PtwEditPageRoutingModule,
            _ptw_risk_evaluation_ptw_risk_evaluation_module__WEBPACK_IMPORTED_MODULE_2__.PtwRiskEvaluationPageModule
        ],
        declarations: [_ptw_edit_page__WEBPACK_IMPORTED_MODULE_1__.PtwEditPage]
    })
], PtwEditPageModule);



/***/ }),

/***/ 10371:
/*!**************************************************************!*\
  !*** ./src/app/page/work-plan/ptw/ptw-edit/ptw-edit.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PtwEditPage": () => (/* binding */ PtwEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ptw_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ptw-edit.page.html */ 92939);
/* harmony import */ var _ptw_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ptw-edit.page.scss */ 56022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ptw_risk_evaluation_ptw_risk_evaluation_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ptw-risk-evaluation/ptw-risk-evaluation.page */ 35305);






let PtwEditPage = class PtwEditPage {
    constructor(_modal) {
        this._modal = _modal;
        this.editable = {
            add: true,
            company_id: true,
            my_state: true
        };
    }
    ngOnInit() { }
    riskList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _ptw_risk_evaluation_ptw_risk_evaluation_page__WEBPACK_IMPORTED_MODULE_2__.PtwRiskEvaluationPage,
                componentProps: {
                // project_id: this.form.project_id,
                // risk_asment_type: this.form.risk_asment_type,
                // btn_type: 'add'
                }
            });
            modal.present();
        });
    }
};
PtwEditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
PtwEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-ptw-edit',
        template: _raw_loader_ptw_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ptw_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PtwEditPage);



/***/ }),

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

/***/ 56022:
/*!****************************************************************!*\
  !*** ./src/app/page/work-plan/ptw/ptw-edit/ptw-edit.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".help_card {\n  background-color: transparent;\n  border: 1px solid #cdd6d9;\n  color: #444;\n  line-height: 1.5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB0dy1lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJwdHctZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVscF9jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2RkNmQ5O1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG59Il19 */");

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

/***/ 92939:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/work-plan/ptw/ptw-edit/ptw-edit.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>위험공종 안전 작업허가서(PTW)</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    \n    <form>\n      <app-row>\n        <app-col *mobileHidden size=\"auto\" size=\"auto\">\n          <app-button fill=\"translucent\">임시저장</app-button>\n        </app-col>\n        <app-col *mobileHidden size=\"auto\" size=\"auto\">\n          <app-button fill=\"translucent\">결제선</app-button>\n        </app-col>\n        <app-col *mobileHidden size=\"auto\" size=\"auto\">\n          <app-button fill=\"translucent\">결제요청</app-button>\n        </app-col>\n        <app-col *mobileHidden size=\"auto\" size=\"auto\">\n          <app-button fill=\"translucent\">엑셀다운로드</app-button>\n        </app-col>\n        <app-col *mobileHidden size=\"auto\" size=\"auto\">\n          <app-button fill=\"translucent\">결제회수</app-button>\n        </app-col>\n        <app-col *mobileHidden size=\"auto\" size=\"auto\">\n          <app-button fill=\"translucent\">제출</app-button>\n        </app-col>\n        <app-col *mobileHidden></app-col>\n        <app-col>\n          <app-approval></app-approval>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h4>기본 정보</h4>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input label=\"현장명\" value=\"세종시 블록형 단독주택공사\" [readonly]=\"editable.company_id\" [disabled]=\"editable.my_state\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input label=\"사업비\" value=\"57,247,729.000원\" [readonly]=\"editable.company_id\" [disabled]=\"editable.my_state\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input label=\"공사기간\" value=\"2020-11-30 ~ 2023-03-17\" [readonly]=\"editable.company_id\" [disabled]=\"editable.my_state\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input label=\"원청사\" value=\"(주)지에스아이엘\" [readonly]=\"editable.company_id\" [disabled]=\"editable.my_state\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input label=\"감리사\" value=\"(주)감리사\" [readonly]=\"editable.company_id\" [disabled]=\"editable.my_state\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input label=\"작업업체명\" value=\"(주)지에스아이엘\" [readonly]=\"editable.company_id\" [disabled]=\"editable.my_state\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input label=\"작성자\" value=\"이상범\" [readonly]=\"editable.company_id\" [disabled]=\"editable.my_state\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input label=\"작성일\" value=\"2020-08-08\" [readonly]=\"editable.company_id\" [disabled]=\"editable.my_state\"></app-input>\n        </app-col>\n      </app-row>\n\n      <app-row>\n        <app-col>\n          <h4>위험공종 작업 내용</h4>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input-group label=\"작업일\"  [required]=\"true\">\n          <app-calendar></app-calendar>\n          ~\n          <app-calendar></app-calendar>\n        </app-input-group>\n        </app-col>\n        <app-col>\n          <app-select-scene  [required]=\"true\" placeholder=\"직접입력 또는 위험지역을 선택해주세요\"></app-select-scene>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-select-construction  [required]=\"true\"></app-select-construction>\n        </app-col>\n        <app-col>\n          <app-input label=\"작업내용\"  [required]=\"true\" placeholder=\"작업내용을 입력해주세요\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input label=\"작업인원\"  [required]=\"true\" placeholder=\"작업인원을 입력해주세요\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input label=\"작업책임자\" [required]=\"true\" placeholder=\"작업책임자를 입력해주세요\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-textarea label=\"위험요인\"></app-textarea>\n        </app-col>\n        <app-col>\n          <app-textarea label=\"재해형태\"  [required]=\"true\"></app-textarea>\n        </app-col>\n        <app-col>\n          <app-textarea label=\"감소대책\"></app-textarea>\n        </app-col>\n      </app-row>\n    </form>\n\n    <h4>첨부서류</h4>\n\n  <app-card color=\"light\" class=\"file-card\">\n    <app-row>\n      <app-col>\n        <h5>해당 공증 위험성 평가표</h5>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-button fill=\"translucent\" (click)=\"riskList()\"> 추가 </app-button>\n      </app-col>\n    </app-row>\n  </app-card>\n\n  <app-card color=\"light\" class=\"file-card\">\n    <app-row>\n      <app-col>\n        <h5>장비 작업계획서</h5>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-button fill=\"translucent\"> 추가 </app-button>\n      </app-col>\n    </app-row>\n  </app-card>\n\n  <app-card color=\"light\" class=\"file-card\">\n    <app-row>\n      <app-col>\n        <h5>기타</h5>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-button fill=\"translucent\"> 추가 </app-button>\n      </app-col>\n    </app-row>\n  </app-card>\n\n  <app-row>\n    <app-col>\n      <h4>도움말</h4>\n      <app-card class=\"help_card\">\n\n1. 허가작업에 대해 사전 안전조치 등이 미흡하여 공사감독자(감리원)의 보완지시가 있는 경우 미흡사항에 대한 조치 및 공사감독자(감리원)의 확인 후 작업 착수 가능 합니다.\n<br/>\n2. 최초 작업허가서는 감독자(감리원)의 승인(승인용 양식참조)을 득해야하며, 승인 후 승인받은 작업과 작업조건(작업내용, 위치 등)이 동일하게  반복되는 경우 둘째날부터는  \n      작업계획 제출(제출용 양식참조)후 작업 가능 합니다.\n      <br/>\n3. 타워크레인, 건설용리프트, 항타·항발기 작업을 수행할 경우 장비 작업계획서를 필수로 첨부 해 주세요.\n<br/>\n4. 첨부 서류는 최초 작업  승인시에만  첨부 합니다. (작업조건이  동일하게  반복되어  작업계획  제출시에는 생략가능)\n      </app-card>\n    </app-col>\n  </app-row>\n  </ion-content>\n  </ng-container>\n\n\n\n<!-- 모바일 -->\n  <ng-container *mobileShow>\n    <ion-header>\n      <ion-toolbar color=\"white\">\n        <ion-title>(승인) 안전 작업 허가서(PTW)</ion-title>\n        <ion-buttons slot=\"end\">\n          <app-dismiss-button></app-dismiss-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      \n      <form>\n        <app-row>\n          <app-col>\n            <app-approval></app-approval>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-approval-document>\n              <app-approval-template [approval_answer]=\"approval_answer\"></app-approval-template>\n            </app-approval-document>\n          </app-col>\n        </app-row>\n      </form>\n    </ion-content>\n    <app-button-footer>\n      <app-button fill=\"translucent\">삭제</app-button>\n      <app-button>결재</app-button>\n    </app-button-footer>\n    </ng-container>");

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
//# sourceMappingURL=default-src_app_page_work-plan_ptw_ptw-edit_ptw-edit_module_ts.js.map