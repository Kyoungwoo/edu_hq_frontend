(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_work-plan_work-minutes_work-write-list_work-write-list_module_ts"],{

/***/ 13741:
/*!***********************************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/work-write-list/work-write-list-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkWriteListPageRoutingModule": () => (/* binding */ WorkWriteListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _work_write_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work-write-list.page */ 79473);




const routes = [
    {
        path: '',
        component: _work_write_list_page__WEBPACK_IMPORTED_MODULE_0__.WorkWriteListPage
    }
];
let WorkWriteListPageRoutingModule = class WorkWriteListPageRoutingModule {
};
WorkWriteListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WorkWriteListPageRoutingModule);



/***/ }),

/***/ 63130:
/*!***************************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/work-write-list/work-write-list.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkWriteListPageModule": () => (/* binding */ WorkWriteListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _work_write_list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work-write-list-routing.module */ 13741);
/* harmony import */ var _work_write_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work-write-list.page */ 79473);
/* harmony import */ var _worker_minutes_pending_list_worker_minutes_pending_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../worker-minutes-pending-list/worker-minutes-pending-list.module */ 76171);
/* harmony import */ var _work_write_search_work_write_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../work-write-search/work-write-search.module */ 53766);
/* harmony import */ var _work_write_target_work_write_target_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../work-write-target/work-write-target.module */ 96748);












let WorkWriteListPageModule = class WorkWriteListPageModule {
};
WorkWriteListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_1__.BasicComponentModule,
            _work_write_list_routing_module__WEBPACK_IMPORTED_MODULE_2__.WorkWriteListPageRoutingModule,
            _work_write_target_work_write_target_module__WEBPACK_IMPORTED_MODULE_6__.WorkWriteTargetPageModule,
            _work_write_search_work_write_search_module__WEBPACK_IMPORTED_MODULE_5__.WorkWriteSearchPageModule,
            _worker_minutes_pending_list_worker_minutes_pending_list_module__WEBPACK_IMPORTED_MODULE_4__.WorkerMinutesPendingListPageModule
        ],
        declarations: [_work_write_list_page__WEBPACK_IMPORTED_MODULE_3__.WorkWriteListPage]
    })
], WorkWriteListPageModule);



/***/ }),

/***/ 79473:
/*!*************************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/work-write-list/work-write-list.page.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkWriteListPage": () => (/* binding */ WorkWriteListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_work_write_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./work-write-list.page.html */ 89417);
/* harmony import */ var _work_write_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work-write-list.page.scss */ 61414);
/* harmony import */ var _worker_minutes_pending_list_worker_minutes_pending_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../worker-minutes-pending-list/worker-minutes-pending-list.page */ 52084);
/* harmony import */ var _work_write_search_work_write_search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../work-write-search/work-write-search.page */ 24489);
/* harmony import */ var _work_write_target_work_write_target_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../work-write-target/work-write-target.page */ 99994);
/* harmony import */ var _work_write_edit_work_write_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../work-write-edit/work-write-edit.page */ 24093);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
















let WorkWriteListPage = class WorkWriteListPage {
    constructor(_modal, date, connect, user, toast, promise, nav, languagePack) {
        this._modal = _modal;
        this.date = date;
        this.connect = connect;
        this.user = user;
        this.toast = toast;
        this.promise = promise;
        this.nav = nav;
        this.languagePack = languagePack;
        this.form = {
            project_id: null,
            master_company_id: null,
            safety_meeting_type: '전체',
            start_date: this.date.today({ year: -3 }),
            end_date: this.date.today(),
            search_text: '',
            approval_cnt_answer: '전체',
            limit_no: 0,
            // safety_meeting_state: '전체'
        };
        this.event = {
            get: null
        };
        this.editable = {
            company_id: false,
            add: false
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.projectRolechekc();
            yield this.promise.wait(() => this.form.master_company_id);
            this.getList();
            // event 물리기
            this.event.get = this.getEvent.bind(this);
            window.addEventListener('safety-education-result-list:get()', this.event.get);
        });
    }
    ngOnDestroy() {
        window.removeEventListener('safety-education-result-list:get()', this.event.get);
    }
    /** event 파트 */
    getEvent() {
        this.getList(0);
    }
    projectRolechekc() {
        const { user_role, belong_data } = this.user.userData;
        if (user_role === 'MASTER_HEAD' ||
            user_role === 'PARTNER_GENERAL' ||
            user_role === 'PARTNER_HEAD' ||
            user_role === 'MASTER_GENERAL') {
            this.editable.company_id = true;
            this.form.project_id = belong_data.project_id;
            this.form.master_company_id = belong_data.master_company_id;
            console.log("belong_data.company_id - ", belong_data.company_id);
            console.log("form.master_company_id - ", this.form.master_company_id);
        }
        else if (user_role === 'LH_HEAD') {
            this.form.project_id = belong_data.project_id;
            this.editable.add = true;
        }
    }
    getList(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            this.res = yield this.connect.run('/board/safety_meeting/report/list', this.form);
            if (this.res.rsCode === 0) {
                this.res.rsMap.map((item, i) => {
                    item.index = this.res.rsObj.row_count - this.form.limit_no - i;
                    item.create_date = `${item.create_date} (${this.date.day(item.create_date)[0]})`;
                    item.safety_meeting_date = `${item.safety_meeting_date} (${this.date.day(item.safety_meeting_date)[0]})`;
                    // item.create_date = `${item.create_date} (${this.date.day(item.create_date)[0]})`
                });
            }
            else if (this.res.rsCode === 1008) {
                // 암것도 안함
            }
            else {
                this.toast.present({ message: this.res.rsMsg, color: 'warning' });
                this.res = null;
            }
        });
    }
    openDetailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            // const modal = await this._modal.create({
            //   component: SafetyEducationResultDetailSearchPage,
            // })
            // modal.present();
            // const { data } = await modal.onDidDismiss();
            // if(data) {
            //   this.form = data;
            //   this.getList();
            // }
        });
    }
    edit(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _work_write_edit_work_write_edit_page__WEBPACK_IMPORTED_MODULE_5__.WorkWriteEditPage,
                cssClass: 'risk-evaluation-class',
                componentProps: {
                    safety_meeting_report_id: item.safety_meeting_report_id
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.getList();
            }
        });
    }
    add() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _work_write_target_work_write_target_page__WEBPACK_IMPORTED_MODULE_4__.WorkWriteTargetPage,
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.getList();
            }
        });
    }
    /**
     * 미결함으로 이동
     */
    pending() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _worker_minutes_pending_list_worker_minutes_pending_list_page__WEBPACK_IMPORTED_MODULE_2__.WorkerMinutesPendingListPage,
            });
            modal.present();
        });
    }
    /**
     * 모바일 상세검색 팝업. PC에서는 안씀
     */
    detailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _work_write_search_work_write_search_page__WEBPACK_IMPORTED_MODULE_3__.WorkWriteSearchPage,
                componentProps: {
                    form: this.form
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.form = data;
                this.getList(0);
            }
        });
    }
};
WorkWriteListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_10__.DateService },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_11__.ConnectService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_8__.ToastService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_7__.PromiseService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_6__.NavService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_12__.LanguagePackService }
];
WorkWriteListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-work-write-list',
        template: _raw_loader_work_write_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_work_write_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WorkWriteListPage);



/***/ }),

/***/ 61414:
/*!***************************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/work-write-list/work-write-list.page.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrLXdyaXRlLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 89417:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/work-plan/work-minutes/work-write-list/work-write-list.page.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- pc -->\n<ng-container *mobileHidden>\n  <app-header-admin></app-header-admin>\n  <ion-content>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\"><app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList(0)\">검색</app-button></app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene [(ngModel)]=\"form.project_id\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor [project_id]=\"form.project_id\" [(ngModel)]=\"form.master_company_id\" [disabled]=\"!editable.company_id\" [allState]=\"editable.company_id\"></app-select-contractor>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select label=\"회의유형\" [(ngModel)]=\"form.safety_meeting_type\">\n                  <app-select-option value=\"전체\">전체</app-select-option>\n                  <app-select-option value=\"안전\">안전 및 보건에 관한 협의체 회의록</app-select-option>\n                  <app-select-option value=\"노사\">노사 협의체 회의록</app-select-option>\n                  <app-select-option value=\"산업\">산업안전보건위원회 회의록</app-select-option>\n                </app-select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input-group label=\"회의일\">\n                  <app-calendar name=\"start_date\" [(ngModel)]=\"form.start_date\" [max]=\"form.end_date\"></app-calendar>\n                  ~\n                  <app-calendar name=\"end_date\" [(ngModel)]=\"form.end_date\" [min]=\"form.start_date\"></app-calendar>\n                </app-input-group>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-approval-type [(ngModel)]=\"form.approval_cnt_answer\"></app-select-approval-type>\n                <!-- <app-select label=\"회의 상태\" [(ngModel)]=\"form.safety_meeting_state\">\n                  <app-select-option value=\"전체\">전체</app-select-option>\n                  <app-select-option value=\"회의 전\">회의 전</app-select-option>\n                  <app-select-option value=\"회의 중\">회의 중</app-select-option>\n                  <app-select-option value=\"회의 종료\">회의 종료</app-select-option>\n                </app-select> -->\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" [(ngModel)]=\"form.search_text\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n\n        <ion-toolbar color=\"white\">\n          <ion-buttons slot=\"start\">\n            <app-button *ngIf=\"!editable.add\" fill=\"translucent\" (click)=\"add()\">신규 작성</app-button>\n            <app-button fill=\"translucent\" (click)=\"pending()\">미결 문서</app-button>\n          </ion-buttons>\n        </ion-toolbar>\n          <ion-toolbar color=\"white\">\n            <h5>회의록 목록 (총 {{ res?.rsObj?.row_count || 0 }}건)</h5>\n          </ion-toolbar>\n          <app-table>\n            <thead>\n              <tr>\n                <th style=\"width: 48px;\">No</th>\n                <th>원청사명</th>\n                <th>회의유형</th>\n                <th>회의일</th>\n                <th>작성자</th>\n                <th>작성일</th>\n                <th>결재 현황</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"button\" *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item)\">\n                <td>{{ item.index}}</td>\n                <td>{{ item.master_company_name }}</td>\n                <td>{{ item.safety_meeting_type }}</td>\n                <td>{{ item.safety_meeting_date }}</td>\n                <td>{{ item.create_user_name }}</td>\n                <td>{{ item.create_date }}</td>\n                <td>{{ item.approval_cnt_answer }}</td>\n              </tr>\n            </tbody>\n          </app-table>\n          <app-pager [totalCount]=\"res?.rsObj?.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"getList($event)\"></app-pager>\n      </app-col>\n    </app-row>\n  </ion-content>\n</ng-container>\n\n<!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>회의록</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <app-select-scene name=\"project_id\" [all]=\"true\" [(ngModel)]=\"form.project_id\" [disabled]=\"true\"></app-select-scene>\n        <app-button (click)=\"detailSearch()\">{{ languagePack.getText('상세검색') }}</app-button>\n      </app-input-group>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <app-row>\n      <app-col></app-col>\n      <app-col size=\"auto\">\n        <app-button fill=\"translucent\" (click)=\"pending()\">미결문서</app-button>\n      </app-col>\n    </app-row>\n    <ng-container>\n      <app-card *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item)\">\n        <app-row style=\"align-items: flex-start;\">\n          <app-col>\n            <h5>{{ item.safety_meeting_type }}</h5>\n          </app-col>\n          <app-col size=\"auto\">\n            <app-chip-approval-answer [approval_cnt_answer]=\"item.approval_cnt_answer\"></app-chip-approval-answer>\n          </app-col>\n        </app-row>\n        <p>{{ item.master_company_name }} / {{ languagePack.getText('작성일') }} : {{ item.create_date }}</p>\n        <!-- <app-row>\n          <app-col>\n            <ion-badge color=\"success\">{{ item.ctgo_education_safe_type }}</ion-badge>\n          </app-col>\n        </app-row> -->\n      </app-card>\n    </ng-container>\n  </ion-content>\n</ng-container>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_work-plan_work-minutes_work-write-list_work-write-list_module_ts.js.map