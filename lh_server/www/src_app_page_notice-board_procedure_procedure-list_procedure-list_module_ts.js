(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_notice-board_procedure_procedure-list_procedure-list_module_ts"],{

/***/ 51852:
/*!*********************************************************************************************!*\
  !*** ./src/app/page/notice-board/procedure/procedure-list/procedure-list-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcedureListPageRoutingModule": () => (/* binding */ ProcedureListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _procedure_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./procedure-list.page */ 94115);




const routes = [
    {
        path: '',
        component: _procedure_list_page__WEBPACK_IMPORTED_MODULE_0__.ProcedureListPage
    }
];
let ProcedureListPageRoutingModule = class ProcedureListPageRoutingModule {
};
ProcedureListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProcedureListPageRoutingModule);



/***/ }),

/***/ 29694:
/*!*************************************************************************************!*\
  !*** ./src/app/page/notice-board/procedure/procedure-list/procedure-list.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcedureListPageModule": () => (/* binding */ ProcedureListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _procedure_search_procedure_search_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../procedure-search/procedure-search.module */ 65876);
/* harmony import */ var _procedure_edit_procedure_edit_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../procedure-edit/procedure-edit.module */ 29669);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../component/component.module */ 55051);
/* harmony import */ var _basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../basic/component/basic.component.module */ 95511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _procedure_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./procedure-list-routing.module */ 51852);
/* harmony import */ var _procedure_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./procedure-list.page */ 94115);











let ProcedureListPageModule = class ProcedureListPageModule {
};
ProcedureListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _procedure_list_routing_module__WEBPACK_IMPORTED_MODULE_4__.ProcedureListPageRoutingModule,
            _procedure_edit_procedure_edit_module__WEBPACK_IMPORTED_MODULE_1__.ProcedureEditPageModule,
            _procedure_search_procedure_search_module__WEBPACK_IMPORTED_MODULE_0__.ProcedureSearchPageModule
        ],
        declarations: [_procedure_list_page__WEBPACK_IMPORTED_MODULE_5__.ProcedureListPage]
    })
], ProcedureListPageModule);



/***/ }),

/***/ 94115:
/*!***********************************************************************************!*\
  !*** ./src/app/page/notice-board/procedure/procedure-list/procedure-list.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcedureListPage": () => (/* binding */ ProcedureListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_procedure_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./procedure-list.page.html */ 19690);
/* harmony import */ var _procedure_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./procedure-list.page.scss */ 83906);
/* harmony import */ var _procedure_edit_procedure_edit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../procedure-edit/procedure-edit.page */ 69922);
/* harmony import */ var _procedure_search_procedure_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../procedure-search/procedure-search.page */ 94877);
/* harmony import */ var _basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../basic/service/core/language-pack.service */ 96083);
/* harmony import */ var _basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../basic/service/core/file.service */ 89613);
/* harmony import */ var _basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../basic/service/ionic/toast.service */ 22455);
/* harmony import */ var _basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../basic/service/core/user.service */ 29730);
/* harmony import */ var _basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../basic/service/util/date.service */ 46879);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../basic/service/core/connect.service */ 71090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);













class ProcedureInfo {
}
let ProcedureListPage = class ProcedureListPage {
    constructor(modal, connect, date, user, toast, file, languagePack) {
        this.modal = modal;
        this.connect = connect;
        this.date = date;
        this.user = user;
        this.toast = toast;
        this.file = file;
        this.languagePack = languagePack;
        this.form = {
            project_id: this.user.userData.belong_data.project_id,
            master_company_id: this.user.userData.belong_data.master_company_id,
            master_company_name: this.user.userData.belong_data.master_company_name,
            end_date: this.date.today(),
            work_procedure_languages: [],
            search_text: '',
            start_date: this.date.today({ year: -3 }),
            limit_no: 0
        };
        this.permission = {
            company_id: false
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getForm();
            this.get();
            this.getNavData();
        });
    }
    getNavData() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () { if ((_a = history.state) === null || _a === void 0 ? void 0 : _a.notice_id)
            this.edit((_b = history.state) === null || _b === void 0 ? void 0 : _b.notice_id); });
    }
    getForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const { belong_data } = this.user.userData;
            this.form.project_id = belong_data.project_id;
            if (belong_data.company_contract_type === 'LH'
                || belong_data.company_contract_type === '감리사') {
                this.permission.company_id = true;
                this.form.master_company_id = 0;
            }
            else {
                this.permission.company_id = false;
                this.form.master_company_id = belong_data.master_company_id;
            }
        });
    }
    get(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            const res = yield this.connect.run('/board/work_procedure/list', this.form);
            if (res.rsCode === 0) {
                this.res = res;
                this.res.rsMap.map((item, i) => {
                    item.index = res.rsObj.row_count - this.form.limit_no - i;
                });
            }
            else if (res.rsCode === 1008) {
                this.res = null;
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    getMobile($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = this.res.rsMap.length;
            const res = yield this.connect.run('/board/work_procedure/list', this.form);
            if (res.rsCode === 0) {
                this.res = res;
                this.res.rsMap.forEach((item, i) => {
                    item.index = res.rsObj.row_count - this.form.limit_no - i;
                });
            }
            else if (res.rsCode === 1008) {
                /**
                 * 모바일은 그냥 암것도 안하면 됨
                 */
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
            setTimeout(() => {
                $event.target.complete();
            }, 50);
        });
    }
    detailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _procedure_search_procedure_search_page__WEBPACK_IMPORTED_MODULE_3__.ProcedureSearchPage,
                componentProps: {
                    form: this.form
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.form = data;
                this.get(0);
            }
        });
    }
    edit(work_procedure_id = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _procedure_edit_procedure_edit_page__WEBPACK_IMPORTED_MODULE_2__.ProcedureEditPage,
                componentProps: {
                    work_procedure_id: work_procedure_id || 0,
                    searchForm: this.file.clone(this.form) // 검색 데이터를 끌고 가야함
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                // 모바일은 편집이 없어서 이렇게해도 충분함. 있으면 추가 코드 작성을 해야함.
                this.get();
            }
        });
    }
};
ProcedureListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_9__.ConnectService },
    { type: _basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_8__.DateService },
    { type: _basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService },
    { type: _basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: _basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_5__.FileService },
    { type: _basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__.LanguagePackService }
];
ProcedureListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-procedure-list',
        template: _raw_loader_procedure_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_procedure_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProcedureListPage);



/***/ }),

/***/ 83906:
/*!*************************************************************************************!*\
  !*** ./src/app/page/notice-board/procedure/procedure-list/procedure-list.page.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jZWR1cmUtbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 19690:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/notice-board/procedure/procedure-list/procedure-list.page.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n  <app-header-admin></app-header-admin>\n  <ion-content>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\">\n                <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"get(0)\">검색</app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor [project_id]=\"form.project_id\" [(ngModel)]=\"form.master_company_id\" [disabled]=\"!permission.company_id\" [allState]=\"permission.company_id\"></app-select-contractor>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select label=\"언어 구분\" [(ngModel)]=\"form.work_procedure_languages\" [multiple]=\"true\">\n                  <app-select-option type=\"all\" [value]=\"[]\">전체</app-select-option>\n                  <app-select-option value=\"한국어\">한국어</app-select-option>\n                  <app-select-option value=\"영어\">영어</app-select-option>\n                  <app-select-option value=\"베트남어\">베트남어</app-select-option>\n                  <app-select-option value=\"중국어\">중국어</app-select-option>\n                  <app-select-option value=\"태국어\">태국어</app-select-option>\n                </app-select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input-group label=\"등록일\">\n                  <app-calendar name=\"start_date\" [(ngModel)]=\"form.start_date\" [max]=\"form.end_date\"></app-calendar>\n                  ~\n                  <app-calendar name=\"end_date\" [(ngModel)]=\"form.end_date\" [min]=\"form.start_date\"></app-calendar>\n                </app-input-group>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" [(ngModel)]=\"form.search_text\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n        <ion-toolbar color=\"white\" *ngIf=\"user.userData.belong_data.company_contract_type === 'LH' \n        || user.userData.belong_data.company_contract_type === '원청사' || user.userData.belong_data.company_contract_type === '협력사'\">   \n          <ion-buttons slot=\"start\">\n            <app-button fill=\"translucent\" (click)=\"edit()\">등록</app-button>\n          </ion-buttons>\n        </ion-toolbar>\n        <ion-toolbar color=\"white\">\n          <h5>작업 절차서 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n        </ion-toolbar>\n        <ng-container *ngIf=\"res\">\n          <ng-container *ngIf=\"res.rsCode === 0 else tempFail\">\n            <app-table>\n              <thead>\n                <tr>\n                  <th style=\"width: 48px;\">No</th>\n                  <th>언어</th>\n                  <th>제목</th>\n                  <th>업체명</th>\n                  <th>작성자</th>\n                  <th>작성일</th>\n                  <th style=\"width: 50px;\">조회수</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class=\"button\" *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item.work_procedure_id)\">\n                  <td>{{ item.index }}</td>\n                  <td>{{ item.work_procedure_language }}</td>\n                  <td style=\"text-align: left;\">{{ item.work_procedure_title }}</td>\n                  <td>{{ item.company_name }}</td>\n                  <td>{{ item.create_user_name }}</td>\n                  <td>{{ item.create_date }}</td>\n                  <td>{{ item.work_procedure_read }}</td>\n                </tr>\n              </tbody>\n            </app-table>\n            <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"get($event)\"></app-pager>\n          </ng-container>\n          <ng-template #tempFail>\n            <app-card>{{ res.rsMsg }}</app-card>\n          </ng-template>\n        </ng-container>\n      </app-col>\n    </app-row>\n  </ion-content>\n</ng-container>\n\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>{{ languagePack.getText('공지사항') }}</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\" [readonly]=\"true\"></app-select-scene>\n        <app-button (click)=\"detailSearch()\">{{ languagePack.getText('상세검색') }}</app-button>\n      </app-input-group>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <app-card *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item.work_procedure_id)\">\n      <app-row style=\"align-items: flex-start;\">\n        <app-col>\n          <h5>{{ item.work_procedure_title }}</h5>\n          <p>{{ item.company_name }}/{{ item.create_user_name }}/{{ languagePack.getText('작성일') }}: {{ item.create_date }}</p>\n        </app-col>\n      </app-row>\n      <ion-badge color=\"success\">{{ item.work_procedure_language }}</ion-badge>\n    </app-card>\n\n    <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n      <ion-infinite-scroll-content loading-spinner=\"dots\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-content>\n</ng-container>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_notice-board_procedure_procedure-list_procedure-list_module_ts.js.map