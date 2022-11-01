(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_safety-education_education-history_safety-education-history-list_safety-educatio-c9dd45"],{

/***/ 8579:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-history/safety-education-history-list/safety-education-history-list-routing.module.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyEducationHistoryListPageRoutingModule": () => (/* binding */ SafetyEducationHistoryListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _safety_education_history_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-education-history-list.page */ 14590);




const routes = [
    {
        path: '',
        component: _safety_education_history_list_page__WEBPACK_IMPORTED_MODULE_0__.SafetyEducationHistoryListPage
    }
];
let SafetyEducationHistoryListPageRoutingModule = class SafetyEducationHistoryListPageRoutingModule {
};
SafetyEducationHistoryListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SafetyEducationHistoryListPageRoutingModule);



/***/ }),

/***/ 17535:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-history/safety-education-history-list/safety-education-history-list.module.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyEducationHistoryListPageModule": () => (/* binding */ SafetyEducationHistoryListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _safety_education_history_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-education-history-list-routing.module */ 8579);
/* harmony import */ var _safety_education_history_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-education-history-list.page */ 14590);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var _safety_education_history_detail_safety_education_history_detail_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../safety-education-history-detail/safety-education-history-detail.module */ 64306);










let SafetyEducationHistoryListPageModule = class SafetyEducationHistoryListPageModule {
};
SafetyEducationHistoryListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _safety_education_history_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.SafetyEducationHistoryListPageRoutingModule,
            _safety_education_history_detail_safety_education_history_detail_module__WEBPACK_IMPORTED_MODULE_4__.SafetyEducationHistoryDetailPageModule
        ],
        declarations: [_safety_education_history_list_page__WEBPACK_IMPORTED_MODULE_1__.SafetyEducationHistoryListPage]
    })
], SafetyEducationHistoryListPageModule);



/***/ }),

/***/ 14590:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-history/safety-education-history-list/safety-education-history-list.page.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyEducationHistoryListPage": () => (/* binding */ SafetyEducationHistoryListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_safety_education_history_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./safety-education-history-list.page.html */ 81614);
/* harmony import */ var _safety_education_history_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-education-history-list.page.scss */ 15824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_component_modal_people_view_people_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/component/modal/people-view/people-view.component */ 85483);
/* harmony import */ var _safety_education_history_detail_safety_education_history_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../safety-education-history-detail/safety-education-history-detail.page */ 76838);









let SafetyEducationHistoryListPage = class SafetyEducationHistoryListPage {
    constructor(modal, connect, user, popover) {
        this.modal = modal;
        this.connect = connect;
        this.user = user;
        this.popover = popover;
        this.form = {
            company_id: 0,
            education_safe_state: '전체',
            limit_no: 0,
            project_id: 0,
            search_text: '' // 검색어
        };
        this.permission = {
            company_id: false
        };
        this.editable = {
            company_id: false,
            add: false
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.projectRolechekc();
            this.getForm();
            this.getList();
        });
    }
    projectRolechekc() {
        const { user_role, belong_data } = this.user.userData;
        console.log("belong_data.company_id", belong_data.company_id);
        if (user_role === 'MASTER_HEAD' ||
            user_role === 'PARTNER_GENERAL' ||
            user_role === 'PARTNER_HEAD' ||
            user_role === 'MASTER_GENERAL') {
            this.editable.company_id = true;
            this.form.project_id = belong_data.project_id;
            this.form.company_id = belong_data.company_id;
        }
        else if (user_role === 'LH_HEAD') {
            this.form.project_id = belong_data.project_id;
            this.editable.add = true;
        }
    }
    getForm() {
        const { user_role, belong_data } = this.user.userData;
        if (user_role === 'MASTER_HEAD' ||
            user_role === 'PARTNER_GENERAL' ||
            user_role === 'PARTNER_HEAD' ||
            user_role === 'MASTER_GENERAL') {
            this.form.project_id = belong_data.project_id;
            this.form.company_id = belong_data.company_id;
        }
        else if (user_role === 'LH_HEAD') {
            this.permission.company_id = true;
            this.form.project_id = belong_data.project_id;
        }
    }
    getList(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            const res = yield this.connect.run('/education/state/record/list', this.form, {
                parse: ['safe_job_name']
            });
            if (res.rsCode === 0) {
                this.res = res;
                this.res.rsMap.forEach((item, i) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    var _a;
                    item.index = res.rsObj.row_count - this.form.limit_no - i; //  - (this.form.limit_no - i);
                    (_a = item.ctgo_safe_job_name) === null || _a === void 0 ? void 0 : _a.toString();
                }));
            }
            else {
                this.res = null;
            }
        });
    }
    edit(user_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _safety_education_history_detail_safety_education_history_detail_page__WEBPACK_IMPORTED_MODULE_5__.SafetyEducationHistoryDetailPage,
                componentProps: {
                    user_id
                }
            });
            modal.present();
        });
    }
    userInfo(education_safe_manager_id, ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            ev.stopPropagation();
            const popover = yield this.popover.create({
                component: src_app_component_modal_people_view_people_view_component__WEBPACK_IMPORTED_MODULE_4__.PeopleViewComponent,
                componentProps: {
                    education_safe_manager_id
                },
                cssClass: 'education-info',
                event: ev
            });
            popover.present();
        });
    }
};
SafetyEducationHistoryListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController }
];
SafetyEducationHistoryListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-safety-education-history-list',
        template: _raw_loader_safety_education_history_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_safety_education_history_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SafetyEducationHistoryListPage);



/***/ }),

/***/ 15824:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-history/safety-education-history-list/safety-education-history-list.page.scss ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWZldHktZWR1Y2F0aW9uLWhpc3RvcnktbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 81614:
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/safety-education/education-history/safety-education-history-list/safety-education-history-list.page.html ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n  <app-header-admin></app-header-admin>\n  <ion-content>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\"><app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList(0)\">검색</app-button></app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene [(ngModel)]=\"form.project_id\"></app-select-scene>\n              </td>\n            </tr>\n            <tr *ngIf=\"user.userData.user_role !== 'PARTNER_GENERAL' && user.userData.user_role !== 'PARTNER_HEAD'\">\n              <td>\n                <!-- <app-select-contractor [allState]=\"editable.add\" [project_id]=\"form.project_id || 0\" [(ngModel)]=\"form.company_id\" [disabled]=\"editable.company_id\"></app-select-contractor> -->\n                <app-select-contractor [project_id]=\"form.project_id\" [(ngModel)]=\"form.company_id\" [readonly]=\"editable.company_id\"></app-select-contractor> \n                <!-- <app-select-company [project_id]=\"form.project_id || 0\"\n                [(ngModel)]=\"form.company_id\"\n                [all]=\"true\"></app-select-company> -->\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select label=\"교육상태\" value=\"전체\" [(ngModel)]=\"form.education_safe_state\">\n                  <app-select-option value=\"전체\">전체</app-select-option>\n                  <app-select-option value=\"양호\">양호</app-select-option>\n                  <app-select-option value=\"필요\">필요</app-select-option>\n                  <app-select-option value=\"기한초과\">기한초과</app-select-option>\n                </app-select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" [(ngModel)]=\"form.search_text\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n        <ion-toolbar color=\"white\">\n          <ion-buttons slot=\"start\">\n            <ion-segment color=\"primary\" value=\"1\">\n              <ion-segment-button [value]=\"1\">작업자</ion-segment-button>\n            </ion-segment>\n          </ion-buttons>\n          <ion-item-group slot=\"end\">\n            <ion-chip outline color=\"primary\">양호</ion-chip>\n            <ion-chip outline color=\"warning\">필요</ion-chip>\n            <ion-chip outline color=\"danger\">기한초과</ion-chip>\n          </ion-item-group>\n        </ion-toolbar>\n        <ion-toolbar color=\"white\">\n          <h5>근로자 교육 이력 (총 {{ res?.rsObj?.row_count || 0}}건)</h5>\n        </ion-toolbar>\n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 48px;\">No</th>\n              <th>업체명</th>\n              <th>성명</th>\n              <th>직위</th>\n              <th>직종</th>\n              <th>안전직무</th>\n              <th>계약유형</th>\n              <th>채용시</th>\n              <th>정기</th>\n              <th>특별</th>\n              <th>출역상태</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"button\" *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item.user_id)\">\n              <td>{{ item.index }}</td>\n              <td>{{ item.company_name }}</td>\n              <td (click)=\"userInfo(item.user_id,$event)\">{{ item.user_name}}</td>\n              <td>{{ item.ctgo_job_position_name }}</td>\n              <td>{{ item.ctgo_occupation_name }}</td>\n              <td>{{ item.ctgo_safe_job_name}}</td>\n              <td>{{ item.work_contract_type }}</td>\n              <td>\n                <ion-chip *ngIf=\"item.recruitement_state === '양호'\" outline color=\"primary\">양호</ion-chip>\n                <ion-chip *ngIf=\"item.recruitement_state === '필요'\" outline color=\"warning\">필요</ion-chip>\n                <ion-chip *ngIf=\"item.recruitement_state === '기한초과'\" outline color=\"danger\">기한초과</ion-chip>\n                <span *ngIf=\"item.recruitement_state === '-'\">-</span>\n              </td>\n              <td>\n                <ion-chip *ngIf=\"item.require_state === '양호'\" outline color=\"primary\">양호</ion-chip>\n                <ion-chip *ngIf=\"item.require_state === '필요'\" outline color=\"warning\">필요</ion-chip>\n                <ion-chip *ngIf=\"item.require_state === '기한초과'\" outline color=\"danger\">기한초과</ion-chip>\n                <span *ngIf=\"item.require_state === '-'\">-</span>\n              </td>\n              <td>\n                <ion-chip *ngIf=\"item.special_state === '양호'\" outline color=\"primary\">양호</ion-chip>\n                <ion-chip *ngIf=\"item.special_state === '필요'\" outline color=\"warning\">필요</ion-chip>\n                <ion-chip *ngIf=\"item.special_state === '기한초과'\" outline color=\"danger\">기한초과</ion-chip>\n                <span *ngIf=\"item.special_state === '-'\">-</span>\n              </td>\n              <td>출역중</td>\n            </tr>\n            <tr>\n            </tr>\n          </tbody>\n        </app-table>\n        <!-- <app-pager [totalCount]=\"res?.rsObj?.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"getList($event)\"></app-pager> -->\n      </app-col>\n    </app-row>\n  </ion-content>\n</ng-container>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_safety-education_education-history_safety-education-history-list_safety-educatio-c9dd45.js.map