(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_emergency-management_accident-list_accident-list_module_ts"],{

/***/ 64446:
/*!*****************************************************************************************!*\
  !*** ./src/app/page/emergency-management/accident-list/accident-list-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccidentListPageRoutingModule": () => (/* binding */ AccidentListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _accident_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accident-list.page */ 97679);




const routes = [
    {
        path: '',
        component: _accident_list_page__WEBPACK_IMPORTED_MODULE_0__.AccidentListPage
    }
];
let AccidentListPageRoutingModule = class AccidentListPageRoutingModule {
};
AccidentListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccidentListPageRoutingModule);



/***/ }),

/***/ 42186:
/*!*********************************************************************************!*\
  !*** ./src/app/page/emergency-management/accident-list/accident-list.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccidentListPageModule": () => (/* binding */ AccidentListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _accident_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accident-list-routing.module */ 64446);
/* harmony import */ var _accident_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accident-list.page */ 97679);
/* harmony import */ var _accident_edit_accident_edit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../accident-edit/accident-edit.module */ 33988);









let AccidentListPageModule = class AccidentListPageModule {
};
AccidentListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _accident_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.AccidentListPageRoutingModule,
            _accident_edit_accident_edit_module__WEBPACK_IMPORTED_MODULE_3__.AccidentEditPageModule,
        ],
        declarations: [_accident_list_page__WEBPACK_IMPORTED_MODULE_2__.AccidentListPage]
    })
], AccidentListPageModule);



/***/ }),

/***/ 97679:
/*!*******************************************************************************!*\
  !*** ./src/app/page/emergency-management/accident-list/accident-list.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccidentListPage": () => (/* binding */ AccidentListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_accident_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./accident-list.page.html */ 15058);
/* harmony import */ var _accident_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accident-list.page.scss */ 3047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _accident_edit_accident_edit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accident-edit/accident-edit.page */ 30835);






// import { AlertService } from 'src/app/basic/service/ionic/alert.service';
let AccidentListPage = class AccidentListPage {
    constructor(_modal) {
        this._modal = _modal;
    }
    ngOnInit() {
    }
    edit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _accident_edit_accident_edit_page__WEBPACK_IMPORTED_MODULE_2__.AccidentEditPage,
                componentProps: {}
            });
            modal.present();
        });
    }
};
AccidentListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
AccidentListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-accident-list',
        template: _raw_loader_accident_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_accident_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccidentListPage);



/***/ }),

/***/ 3047:
/*!*********************************************************************************!*\
  !*** ./src/app/page/emergency-management/accident-list/accident-list.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("body {\n  margin: 0;\n  padding: 0;\n}\n\nlabel {\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2lkZW50LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksU0FBUztFQUNULFVBQVU7QUFBZDs7QUFHQTtFQUNJLGVBQWU7QUFBbkIiLCJmaWxlIjoiYWNjaWRlbnQtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufSJdfQ== */");

/***/ }),

/***/ 15058:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/emergency-management/accident-list/accident-list.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n<app-header-admin></app-header-admin>\n\n<ion-content>\n  <app-row style=\"align-items: flex-start;\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\"><h5>필터</h5></app-col>\n            <app-col size=\"auto\">\n              <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList(0)\">검색</app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <tr>\n            <td>\n              <app-select-region></app-select-region>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-business-district></app-select-business-district>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-scene></app-select-scene>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-accident-unit></app-select-accident-unit>\n              <!-- <app-check-input>\n                <app-row>\n                  <app-col>\n                    <app-check type=\"all\" value=\"전체\">전체</app-check>\n                    <app-check value=\"추락(떨어짐)\">추락(떨어짐)</app-check>\n                  </app-col>\n                  <app-col>\n                    <app-check value=\"전도(넘어짐)\">전도(넘어짐)</app-check>\n                    <app-check value=\"전도(깔림)\">전도(깔림)</app-check>\n                  </app-col>\n                </app-row>\n                <app-row>\n                  <app-col>\n                    <app-check value=\"충돌(부딪힘)\">충돌(부딪힘)</app-check>\n                    <app-check value=\"붕괴(무너짐)\">붕괴(무너짐)</app-check>\n                  </app-col>\n                  <app-col>\n                    <app-check value=\"협착(끼임)\">협착(끼임)</app-check>\n                    <app-check value=\"감전\">감전</app-check>\n                  </app-col>\n                </app-row>\n                <app-row>\n                  <app-col>\n                    <app-check value=\"절단\">절단</app-check>\n                    <app-check value=\"절단\">베임</app-check>\n                    <app-check value=\"절단\">찔림</app-check>\n                    <app-check value=\"무리한 동작\">무리한 동작</app-check>\n                  </app-col>\n                  <app-col>\n                    <app-check value=\"화재\">화재</app-check>\n                    <app-check value=\"폭발\">폭발</app-check>\n                    <app-check value=\"파열\">파열</app-check>\n                    <app-check value=\"기타\">기타</app-check>\n                  </app-col>\n                </app-row>\n                <app-row>\n                  <app-col>\n                    <app-check value=\"낙하비례(물체에맞음)\">낙하비례(물체에맞음)</app-check>\n                  </app-col>\n                </app-row>\n              </app-check-input> -->\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input-group label=\"발생일\">\n                <app-calendar></app-calendar>\n                ~\n                <app-calendar></app-calendar>\n              </app-input-group>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input label=\"검색어\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <ion-buttons slot=\"start\">\n          <app-button fill=\"translucent\" (click)=\"edit()\">조사표 등록</app-button>\n          <!-- <app-button fill=\"translucent\">제출 작성</app-button>\n          <app-button fill=\"translucent\" (click)=\"pending()\">미결 문서</app-button> -->\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-toolbar color=\"white\">\n        <h5>안전사고 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n      </ion-toolbar>\n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 48px;\">No</th>\n              <th>지역본부</th>\n              <th>사업지구</th>\n              <th>현장명</th>\n              <th>수급인(원청사)</th>\n              <th>사고유형</th>\n              <th>작성자</th>\n              <th>발생일</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"button\" class=\"button\" (click)=\"edit(item)\">\n              <td>1</td>\n              <td>경기지역본부</td>\n              <td>수원당수지구</td>\n              <td>수원당수A,2BL</td>\n              <td>A건설(주)</td>\n              <td>추락</td>\n              <td>최소현</td>\n              <td>2011.11.11</td>\n            </tr>\n          </tbody>\n        </app-table>\n        <!-- <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"getList($event)\"></app-pager> -->\n        <app-pager></app-pager>\n      </app-col>\n  </app-row>\n</ion-content>\n</ng-container>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_emergency-management_accident-list_accident-list_module_ts.js.map