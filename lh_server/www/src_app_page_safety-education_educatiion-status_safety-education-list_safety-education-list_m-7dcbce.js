(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_safety-education_educatiion-status_safety-education-list_safety-education-list_m-7dcbce"],{

/***/ 18359:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/safety-education-list/safety-education-list-routing.module.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyEducationListPageRoutingModule": () => (/* binding */ SafetyEducationListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _safety_education_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-education-list.page */ 46378);




const routes = [
    {
        path: '',
        component: _safety_education_list_page__WEBPACK_IMPORTED_MODULE_0__.SafetyEducationListPage
    }
];
let SafetyEducationListPageRoutingModule = class SafetyEducationListPageRoutingModule {
};
SafetyEducationListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SafetyEducationListPageRoutingModule);



/***/ }),

/***/ 42156:
/*!***************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/safety-education-list/safety-education-list.module.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyEducationListPageModule": () => (/* binding */ SafetyEducationListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _safety_education_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-education-list-routing.module */ 18359);
/* harmony import */ var _safety_education_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-education-list.page */ 46378);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var _safety_education_detail_search_safety_education_detail_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../safety-education-detail-search/safety-education-detail-search.module */ 14325);
/* harmony import */ var _safety_education_detail_list_safety_education_detail_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../safety-education-detail-list/safety-education-detail-list.module */ 17408);
/* harmony import */ var _safety_education_detail_edit_safety_education_detail_edit_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../safety-education-detail-edit/safety-education-detail-edit.module */ 66660);












let SafetyEducationListPageModule = class SafetyEducationListPageModule {
};
SafetyEducationListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _safety_education_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.SafetyEducationListPageRoutingModule,
            _safety_education_detail_list_safety_education_detail_list_module__WEBPACK_IMPORTED_MODULE_5__.SafetyEducationDetailListPageModule,
            _safety_education_detail_edit_safety_education_detail_edit_module__WEBPACK_IMPORTED_MODULE_6__.SafetyEducationDetailEditPageModule,
            _safety_education_detail_search_safety_education_detail_search_module__WEBPACK_IMPORTED_MODULE_4__.SafetyEducationDetailSearchPageModule,
        ],
        declarations: [_safety_education_list_page__WEBPACK_IMPORTED_MODULE_1__.SafetyEducationListPage]
    })
], SafetyEducationListPageModule);



/***/ }),

/***/ 46378:
/*!*************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/safety-education-list/safety-education-list.page.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EduItem": () => (/* binding */ EduItem),
/* harmony export */   "SafetyEducationListPage": () => (/* binding */ SafetyEducationListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_safety_education_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./safety-education-list.page.html */ 42365);
/* harmony import */ var _safety_education_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-education-list.page.scss */ 66119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_app_component_modal_people_view_people_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/component/modal/people-view/people-view.component */ 85483);
/* harmony import */ var _safety_education_detail_edit_safety_education_detail_edit_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../safety-education-detail-edit/safety-education-detail-edit.page */ 36681);
/* harmony import */ var _safety_education_detail_search_safety_education_detail_search_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../safety-education-detail-search/safety-education-detail-search.page */ 15184);














class EduItem {
}
let SafetyEducationListPage = class SafetyEducationListPage {
    constructor(_modal, date, connect, toast, user, popover, promise, languagePack) {
        this._modal = _modal;
        this.date = date;
        this.connect = connect;
        this.toast = toast;
        this.user = user;
        this.popover = popover;
        this.promise = promise;
        this.languagePack = languagePack;
        this.form = {
            company_id: 0,
            ctgo_education_safe_id: 0,
            education_safe_state: '전체',
            end_date: this.date.today({ month: 1 }),
            limit_no: 0,
            project_id: 0,
            search_text: '',
            start_date: this.date.today({ month: -1 }),
        };
        this.editable = {
            add: false,
            company_id: false
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.projectRolechekc(),
                this.companyRolecheck();
            // await this.promise.wait(() => this.form.company_id);
            this.get();
        });
    }
    projectRolechekc() {
        const { user_role, belong_data } = this.user.userData;
        if (user_role === 'MASTER_HEAD' ||
            user_role === 'PARTNER_GENERAL' ||
            user_role === 'PARTNER_HEAD' ||
            user_role === 'MASTER_GENERAL') {
            this.editable.company_id = true;
            this.form.project_id = belong_data.project_id;
            this.form.company_id = belong_data.master_company_id;
        }
        else if (user_role === 'LH_HEAD') {
            this.editable.add = true;
            this.form.project_id = belong_data.project_id;
        }
    }
    companyRolecheck() {
        const { user_role, belong_data } = this.user.userData;
        if (user_role === 'MASTER_GENERAL' ||
            user_role === 'MASTER_HEAD') {
            this.form.company_id = belong_data.company_id;
        }
    }
    get(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            this.res = yield this.connect.run('/education/list', this.form);
            if (this.res.rsCode === 0) {
                console.log("this.res.rsMap", this.res.rsMap);
                this.res.rsMap.map((item, i) => {
                    item.index = this.res.rsObj.row_count - this.form.limit_no - i;
                    item.date_day = this.date.day(item.education_safe_date)[0];
                });
            }
            else {
                this.res = null;
            }
        });
    }
    edit(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _safety_education_detail_edit_safety_education_detail_edit_page__WEBPACK_IMPORTED_MODULE_9__.SafetyEducationDetailEditPage,
                componentProps: {
                    item
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.get();
            }
        });
    }
    openDetailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _safety_education_detail_search_safety_education_detail_search_page__WEBPACK_IMPORTED_MODULE_10__.SafetyEducationDetailSearchPage,
                componentProps: {
                    form: this.form
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.form = data;
                this.get();
            }
        });
    }
    userInfo(education_safe_manager_id, ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            ev.stopPropagation();
            const popover = yield this.popover.create({
                component: src_app_component_modal_people_view_people_view_component__WEBPACK_IMPORTED_MODULE_8__.PeopleViewComponent,
                componentProps: {
                    type: '관리자',
                    education_safe_manager_id
                },
                cssClass: 'education-info',
                event: ev
            });
            popover.present();
        });
    }
};
SafetyEducationListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_6__.DateService },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PopoverController },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_7__.PromiseService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
SafetyEducationListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-safety-education-list',
        template: _raw_loader_safety_education_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_safety_education_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SafetyEducationListPage);



/***/ }),

/***/ 66119:
/*!***************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/safety-education-list/safety-education-list.page.scss ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWZldHktZWR1Y2F0aW9uLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 42365:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/safety-education/educatiion-status/safety-education-list/safety-education-list.page.html ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- pc -->\n<ng-container *mobileHidden>\n  <app-header-admin></app-header-admin>\n  <ion-content>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\"><app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"get(0)\">검색</app-button></app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene [(ngModel)]=\"form.project_id\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <!-- <app-select-contractor [allState]=\"editable.add\" [project_id]=\"form.project_id || 0\" [(ngModel)]=\"form.company_id\" [disabled]=\"editable.company_id\"></app-select-contractor> -->\n                <app-select-contractor [project_id]=\"form.project_id\" [(ngModel)]=\"form.company_id\" [readonly]=\"editable.company_id\"></app-select-contractor> \n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-education [all]=\"true\" [(ngModel)]=\"form.ctgo_education_safe_id\"></app-select-education>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input-group label=\"교육일\">\n                  <app-calendar [(ngModel)]=\"form.start_date\" [max]=\"form.end_date\"></app-calendar>\n                  ~\n                  <app-calendar [(ngModel)]=\"form.end_date\" [min]=\"form.start_date\"></app-calendar>\n                </app-input-group>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select label=\"교육 상태\" [(ngModel)]=\"form.education_safe_state\">\n                  <app-select-option value=\"전체\">전체</app-select-option>\n                  <app-select-option value=\"교육 전\">교육 전</app-select-option>\n                  <app-select-option value=\"교육 중\">교육 중</app-select-option>\n                  <app-select-option value=\"교육 종료\">교육 종료</app-select-option>\n                </app-select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n        <ion-toolbar color=\"white\" *ngIf=\"!editable.add\" >\n          <ion-buttons slot=\"start\">\n            <app-button fill=\"translucent\" (click)=\"edit()\">신규 개설</app-button>\n          </ion-buttons>\n        </ion-toolbar>\n        <ion-toolbar color=\"white\">\n          <h5>교육 개설 목록 (총 {{ res?.rsObj?.row_count || 0}}건)</h5>\n        </ion-toolbar>\n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 48px;\">No</th>\n              <th>업체명</th>\n              <th>교육명</th>\n              <th>교육대상</th>\n              <th>교육장소</th>\n              <th>교육일</th>\n              <th>교육시간</th>\n              <th>출석진행자</th>\n              <th>교육상태</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"button\" *ngFor=\"let item of res?.rsMap let i = index\" (click)=\"edit(item)\">\n              <td>{{ item.index }}</td>\n              <td>{{ item.company_name }}</td>\n              <td>{{ item.ctgo_education_safe_name }}</td>\n              <td>{{ item.education_safe_target }}</td>\n              <td>{{ item.education_safe_place }}</td>\n              <td>{{ item.education_safe_date }} ({{ item.date_day}})</td>\n              <td>{{ item.education_safe_start_time }} ~ {{ item.education_safe_end_time }}</td>\n              <td (click)=\"userInfo(item.education_safe_manager_id,$event)\" >{{ item.education_safe_manager_name }}</td>\n              <td>{{ item.education_safe_state }}</td>\n            </tr>\n          </tbody>\n        </app-table>\n        <app-pager [totalCount]=\"res?.rsObj?.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"get($event)\"></app-pager>\n      </app-col>\n    </app-row>\n  </ion-content>\n</ng-container>\n<!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>교육 현황</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <app-select-scene [disabled]=\"true\" [all]=\"editable.add\" [(ngModel)]=\"form.project_id\"></app-select-scene>\n        <app-button (click)=\"openDetailSearch()\">{{ languagePack.getText('상세검색') }}</app-button>\n      </app-input-group>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ng-container>\n      <app-card *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item)\">\n        <app-row style=\"align-items: flex-start;\">\n          <app-col>\n            <p>{{ item.company_name }}</p>\n            <p>{{ item.education_safe_target }}\n              /{{ item.education_safe_place }}\n              /{{ item.education_safe_instructor }}</p>\n            <p>{{ item.education_safe_date }} ({{ item.date_day }})\n              /{{ item.education_safe_start_time }}~{{ item.education_safe_end_time }}</p>\n          </app-col>\n          <app-col size=\"auto\">\n            <ion-chip color=\"primary\" *ngIf=\"item.education_safe_state === '교육 전'\">{{ item.education_safe_state }} </ion-chip>\n            <ion-chip color=\"success\" *ngIf=\"item.education_safe_state === '교육 중'\">{{ item.education_safe_state }} </ion-chip>\n            <ion-chip color=\"medium\" *ngIf=\"item.education_safe_state === '교육 종료'\">{{ item.education_safe_state }} </ion-chip>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <ion-badge color=\"success\">{{ item.ctgo_education_safe_title }}</ion-badge>\n          </app-col>\n        </app-row>\n      </app-card>\n    </ng-container>\n  </ion-content>\n  <app-button-footer *ngIf=\"!editable.add\">\n    <app-button (click)=\"edit()\">신규개설</app-button>\n  </app-button-footer>\n</ng-container>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_safety-education_educatiion-status_safety-education-list_safety-education-list_m-7dcbce.js.map