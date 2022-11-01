(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_task-management_tbm_tbm-list_tbm-list_module_ts"],{

/***/ 92574:
/*!******************************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-list/tbm-list-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmListPageRoutingModule": () => (/* binding */ TbmListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tbm_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tbm-list.page */ 24214);




const routes = [
    {
        path: '',
        component: _tbm_list_page__WEBPACK_IMPORTED_MODULE_0__.TbmListPage
    }
];
let TbmListPageRoutingModule = class TbmListPageRoutingModule {
};
TbmListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TbmListPageRoutingModule);



/***/ }),

/***/ 20177:
/*!**********************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-list/tbm-list.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmListPageModule": () => (/* binding */ TbmListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _tbm_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tbm-list-routing.module */ 92574);
/* harmony import */ var _tbm_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tbm-list.page */ 24214);
/* harmony import */ var _tbm_edit_tbm_edit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tbm-edit/tbm-edit.module */ 71858);
/* harmony import */ var _tbm_detail_search_tbm_detail_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tbm-detail-search/tbm-detail-search.module */ 3689);










let TbmListPageModule = class TbmListPageModule {
};
TbmListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _tbm_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.TbmListPageRoutingModule,
            _tbm_edit_tbm_edit_module__WEBPACK_IMPORTED_MODULE_3__.TbmEditPageModule,
            _tbm_detail_search_tbm_detail_search_module__WEBPACK_IMPORTED_MODULE_4__.TbmDetailSearchPageModule
        ],
        declarations: [_tbm_list_page__WEBPACK_IMPORTED_MODULE_2__.TbmListPage]
    })
], TbmListPageModule);



/***/ }),

/***/ 24214:
/*!********************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-list/tbm-list.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TbmListPage": () => (/* binding */ TbmListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tbm_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tbm-list.page.html */ 73994);
/* harmony import */ var _tbm_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tbm-list.page.scss */ 25219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tbm_edit_tbm_edit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tbm-edit/tbm-edit.page */ 72449);
/* harmony import */ var _tbm_detail_search_tbm_detail_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tbm-detail-search/tbm-detail-search.page */ 7966);







// import { AlertService } from 'src/app/basic/service/ionic/alert.service';
let TbmListPage = class TbmListPage {
    constructor(_modal) {
        this._modal = _modal;
        this.form = {
            project_id: null,
            project_name: '',
            company_id: null,
            ctgo_construction_id: 0,
            risk_asment_type: '나의 TBM',
            approval_cnt_answer: '전체',
            // risk_asment_start_date: this.date.today({ year: -1 }),
            // risk_asment_end_date: this.date.today(),
            search_text: '',
            limit_no: 0
        };
    }
    ngOnInit() {
        this.tab();
    }
    /**
     * 탭 스크립트
     */
    tab() {
        const tabBtn = document.querySelectorAll('.tbm_list ion-segment-button');
        const tabCont = document.querySelectorAll('.tbm_list .tab');
        for (let i = 0; i < tabBtn.length; i++) {
            tabBtn[i].addEventListener('click', () => {
                for (let i = 0; i < tabBtn.length; i++) {
                    tabCont[i].classList.remove('active');
                }
                tabCont[i].classList.add('active');
            });
        }
    }
    edit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _tbm_edit_tbm_edit_page__WEBPACK_IMPORTED_MODULE_2__.TbmEditPage,
                componentProps: {}
            });
            modal.present();
        });
    }
    openDetailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _tbm_detail_search_tbm_detail_search_page__WEBPACK_IMPORTED_MODULE_3__.TbmDetailSearchPage,
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
TbmListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
TbmListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tbm-list',
        template: _raw_loader_tbm_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tbm_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TbmListPage);



/***/ }),

/***/ 25219:
/*!**********************************************************************!*\
  !*** ./src/app/page/task-management/tbm/tbm-list/tbm-list.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".flex {\n  display: flex;\n  grid-gap: 15px;\n  gap: 15px;\n}\n\n.tab {\n  display: none;\n}\n\n.tab.active {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRibS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixjQUFTO0VBQVQsU0FBUztBQUNiOztBQUVBO0VBQ0ksYUFBYTtBQUNqQjs7QUFFQTtFQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoidGJtLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4udGFiIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFiLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ 73994:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/task-management/tbm/tbm-list/tbm-list.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n<app-header-admin></app-header-admin>\n\n<ion-content>\n  <app-row style=\"align-items: flex-start;\">\n    <app-col size=\"280px\">\n      <app-table type=\"card\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row style=\"justify-content: space-between;\">\n            <app-col size=\"auto\"><h5>필터</h5></app-col>\n            <app-col size=\"auto\">\n              <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList(0)\">검색</app-button>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <tbody>\n          <tr>\n            <td>\n              <app-select-scene></app-select-scene>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-contractor></app-select-contractor>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-construction></app-select-construction>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input-group label=\"작성일\">\n                <app-calendar></app-calendar>\n                ~\n                <app-calendar></app-calendar>\n              </app-input-group>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-select-work></app-select-work>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <app-input label=\"검색어\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n            </td>\n          </tr>\n        </tbody>\n      </app-table>\n    </app-col>\n\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <ion-buttons slot=\"start\">\n          <app-button fill=\"translucent\" (click)=\"edit()\">신규 등록</app-button>\n          <!-- <app-button fill=\"translucent\">제출 작성</app-button>\n          <app-button fill=\"translucent\" (click)=\"pending()\">미결 문서</app-button> -->\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-toolbar color=\"white\">\n        <h5>TBM 현황 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n      </ion-toolbar>\n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 48px;\">No</th>\n              <th>작업일</th>\n              <th>공종</th>\n              <th>작업내용</th>\n              <th>업체명</th>\n              <th>TBM 리더</th>\n              <th>작업자</th>\n              <th>작업상태</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"button\" class=\"button\" (click)=\"edit(item)\">\n              <td>1</td>\n              <td>2021-09-15</td>\n              <td>소방</td>\n              <td>발파공사 외 1건</td>\n              <td>(주)지에스아이엘</td>\n              <td>김성배</td>\n              <td>구경모</td>\n              <td>작업전</td>\n            </tr>\n          </tbody>\n        </app-table>\n        <!-- <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"getList($event)\"></app-pager> -->\n        <app-pager></app-pager>\n      </app-col>\n  </app-row>\n</ion-content>\n</ng-container>\n\n<!-- 모바일 -->\n<ng-container *mobileShow class=\"tbm_list\">\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>TBM</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <app-input-template label=\"현장\">\n          <!-- <p slot=\"input\">{{ form.project_name }}</p> -->\n          <p slot=\"input\">서울시 블록형 단독주택 공사</p>\n        </app-input-template>\n        <app-button (click)=\"openDetailSearch()\">상세검색</app-button>\n      </app-input-group>\n    </ion-toolbar>\n\n    <ion-toolbar color=\"white\">\n      <!-- <ion-segment color=\"primary\" [(ngModel)]=\"form.risk_asment_type\" (ionChange)=\"get(0)\">-->\n      <ion-segment color=\"primary\" value=\"나의 TBM\">\n        <ion-segment-button value=\"나의 TBM\">나의 TBM</ion-segment-button>\n        <ion-segment-button value=\"TBM 현황\">TBM 현황</ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"tab tab1 active\">\n  <!-- <app-card *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item)\"> -->\n  <app-card (click)=\"edit(item)\">\n    <app-row>\n      <app-col>\n        <ion-badge color=\"success\">전기</ion-badge>\n      </app-col>\n      <app-col size=\"auto\">\n        <ion-chip color=\"success\">작업전</ion-chip>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col>\n        <h5>매립공사 - 마감공사 및 정리1</h5>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col class=\"flex\">\n        <p>(주)지에스아이엘</p>\n        <p>2022-05-05(화)</p>\n        <p>작업팀장: 이상범</p>\n      </app-col>\n    </app-row>\n  </app-card>\n\n  <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n    <ion-infinite-scroll-content loading-spinner=\"dots\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n<ion-content class=\"tab tab2\">\n  <!-- <app-card *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item)\"> -->\n  <app-card (click)=\"edit(item)\">\n    <app-row>\n      <app-col>\n        <ion-badge color=\"success\">전기</ion-badge>\n      </app-col>\n      <app-col size=\"auto\">\n        <ion-chip color=\"success\">작업전</ion-chip>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col>\n        <h5>매립공사 - 마감공사 및 정리2</h5>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col class=\"flex\">\n        <p>(주)지에스아이엘</p>\n        <p>2022-05-05(화)</p>\n        <p>작업팀장: 이상범</p>\n      </app-col>\n    </app-row>\n  </app-card>\n\n  <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n    <ion-infinite-scroll-content loading-spinner=\"dots\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n<app-button-footer>\n  <p>TBM 출석을 위해 작업 팀장이 제시하는<br/> QR 코드 인식을 진행해주세요</p>\n  <app-button>TBM 참여</app-button>\n</app-button-footer>\n</ng-container>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_task-management_tbm_tbm-list_tbm-list_module_ts.js.map