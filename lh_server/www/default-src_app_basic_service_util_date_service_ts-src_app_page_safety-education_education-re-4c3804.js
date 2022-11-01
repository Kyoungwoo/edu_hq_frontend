(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_basic_service_util_date_service_ts-src_app_page_safety-education_education-re-4c3804"],{

/***/ 46879:
/*!****************************************************!*\
  !*** ./src/app/basic/service/util/date.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateService": () => (/* binding */ DateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _regex_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.service */ 92092);



let DateService = class DateService {
    constructor(regex) {
        this.regex = regex;
    }
    /** 오늘날짜, 혹은 오늘날짜를 기준으로 하는 다른 날짜들을 구한다. */
    today(opts = { year: 0, month: 0, date: 0 }, type = 'DATE') {
        const resDate = new Date();
        if (opts.year)
            resDate.setFullYear(resDate.getFullYear() + opts.year);
        if (opts.month)
            resDate.setMonth(resDate.getMonth() + opts.month);
        if (opts.date)
            resDate.setDate(resDate.getDate() + opts.date);
        switch (type) {
            case 'DATE':
                return resDate.getFullYear() + '-' + this.regex.replace.fix(resDate.getMonth() + 1, 2) + '-' + this.regex.replace.fix(resDate.getDate(), 2);
            case 'MINUTE':
                return resDate.getFullYear() + '-' + this.regex.replace.fix(resDate.getMonth() + 1, 2) + '-' + this.regex.replace.fix(resDate.getDate(), 2) + ' ' + this.regex.replace.fix(resDate.getHours(), 2) + ':' + this.regex.replace.fix(resDate.getMinutes(), 2);
            case 'SECOND':
                return resDate.getFullYear() + '-' + this.regex.replace.fix(resDate.getMonth() + 1, 2) + '-' + this.regex.replace.fix(resDate.getDate(), 2) + ' ' + this.regex.replace.fix(resDate.getHours(), 2) + ':' + this.regex.replace.fix(resDate.getMinutes(), 2) + ':' + this.regex.replace.fix(resDate.getSeconds(), 2);
        }
    }
    /** Date 타입의 형태를 바꾼다. 요일 속성(day)를 활용하여 요일을 구할 수도 있다.. ex) 2021-01-01, 2021년 01월 01일 수요일 */
    string(date, opts) {
        date = typeof date === 'string' ? new Date(date) : date;
        let dayString = "";
        let formatList = [];
        switch (opts === null || opts === void 0 ? void 0 : opts.format) {
            case 'Ko':
                formatList = ['년 ', '월 ', '일'];
                break;
            default:
                formatList = [opts === null || opts === void 0 ? void 0 : opts.format, opts === null || opts === void 0 ? void 0 : opts.format, opts === null || opts === void 0 ? void 0 : opts.format];
                break;
        }
        if (opts === null || opts === void 0 ? void 0 : opts.day) {
            const dayList = (opts === null || opts === void 0 ? void 0 : opts.day) === true ? ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] : opts === null || opts === void 0 ? void 0 : opts.day;
            dayString = ' ' + dayList[new Date(date).getDay()];
        }
        return date.getFullYear() + formatList[0] + this.regex.replace.fix(date.getMonth() + 1, 2) + formatList[1] + this.regex.replace.fix(date.getDate(), 2) + formatList[2] + dayString;
    }
    /** 요일만 구한다. */
    day(date, dayFormat = null) {
        date = typeof date === 'string' ? new Date(date) : date;
        var week = dayFormat || ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        var dayOfWeek = week[new Date(date).getDay()];
        return dayOfWeek;
    }
    /** 날짜를 기준으로 나이를 구한다. 기준은 한국 나이이다. */
    age(date) {
        date = typeof date === 'string' ? new Date(date) : date;
        return new Date().getFullYear() - date.getFullYear() + 1;
    }
    /** 두 날짜간의 차이를 구한다. 앞의 날짜가 크면 음수, 작으면 양수로 나온다. */
    dirrerence(date1, date2, type = "Date") {
        const date_1 = new Date(date1);
        const date_2 = new Date(date2);
        const def_time = date_2.getTime() - date_1.getTime();
        const def_days = def_time / (1000 * 3600 * 24);
        const def_hours = def_time / (1000 * 3600);
        switch (type) {
            case 'Year':
                return Math.floor(def_days / 365);
            case 'Date':
                return def_days;
            case 'Hour':
                return def_hours;
            default:
                return def_time;
        }
    }
};
DateService.ctorParameters = () => [
    { type: _regex_service__WEBPACK_IMPORTED_MODULE_0__.RegexService }
];
DateService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DateService);



/***/ }),

/***/ 57569:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-result/education-confirm-pending-list/education-confirm-pending-list-routing.module.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationConfirmPendingListPageRoutingModule": () => (/* binding */ EducationConfirmPendingListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _education_confirm_pending_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./education-confirm-pending-list.page */ 3324);




const routes = [
    {
        path: '',
        component: _education_confirm_pending_list_page__WEBPACK_IMPORTED_MODULE_0__.EducationConfirmPendingListPage
    }
];
let EducationConfirmPendingListPageRoutingModule = class EducationConfirmPendingListPageRoutingModule {
};
EducationConfirmPendingListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EducationConfirmPendingListPageRoutingModule);



/***/ }),

/***/ 24741:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-result/education-confirm-pending-list/education-confirm-pending-list.module.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationConfirmPendingListPageModule": () => (/* binding */ EducationConfirmPendingListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _education_confirm_pending_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./education-confirm-pending-list-routing.module */ 57569);
/* harmony import */ var _education_confirm_pending_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education-confirm-pending-list.page */ 3324);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var _safety_education_result_edit_safety_education_result_edit_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../safety-education-result-edit/safety-education-result-edit.module */ 5551);










let EducationConfirmPendingListPageModule = class EducationConfirmPendingListPageModule {
};
EducationConfirmPendingListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _safety_education_result_edit_safety_education_result_edit_module__WEBPACK_IMPORTED_MODULE_4__.SafetyEducationResultEditPageModule,
            _education_confirm_pending_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.EducationConfirmPendingListPageRoutingModule
        ],
        declarations: [_education_confirm_pending_list_page__WEBPACK_IMPORTED_MODULE_1__.EducationConfirmPendingListPage]
    })
], EducationConfirmPendingListPageModule);



/***/ }),

/***/ 3324:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-result/education-confirm-pending-list/education-confirm-pending-list.page.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationConfirmPendingListPage": () => (/* binding */ EducationConfirmPendingListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_education_confirm_pending_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./education-confirm-pending-list.page.html */ 25237);
/* harmony import */ var _education_confirm_pending_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education-confirm-pending-list.page.scss */ 83232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var _safety_education_result_edit_safety_education_result_edit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../safety-education-result-edit/safety-education-result-edit.page */ 30020);









let EducationConfirmPendingListPage = class EducationConfirmPendingListPage {
    constructor(connect, toast, _modal, languagePack) {
        this.connect = connect;
        this.toast = toast;
        this._modal = _modal;
        this.languagePack = languagePack;
        this.form = {
            limit_no: 0
        };
        this.event = {
            get: null
        };
    }
    ngOnInit() {
        this.get();
        this.event.get = this.getEvent.bind(this);
        window.addEventListener('approval-list:get()', this.event.get);
    }
    ngOnDestroy() {
        window.removeEventListener('approval-list:get()', this.event.get);
    }
    getEvent() {
        this.get(0);
    }
    get(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            this.res = yield this.connect.run('/education/report/approval/req/get', this.form);
            if (this.res.rsCode === 0) {
                this.res.rsMap.map((item, i) => {
                    item.index = this.res.rsObj.row_count - this.form.limit_no - i;
                });
            }
            else if (this.res.rsCode === 1008) {
                // 암것도 안함
            }
            else {
                this.toast.present({ message: this.res.rsMsg, color: 'warning' });
            }
        });
    }
    edit(education_safe_report_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _safety_education_result_edit_safety_education_result_edit_page__WEBPACK_IMPORTED_MODULE_5__.SafetyEducationResultEditPage,
                cssClass: 'risk-evaluation-class',
                componentProps: {
                    education_safe_report_id
                }
            });
            modal.present();
        });
    }
};
EducationConfirmPendingListPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
EducationConfirmPendingListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-education-confirm-pending-list',
        template: _raw_loader_education_confirm_pending_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_education_confirm_pending_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EducationConfirmPendingListPage);



/***/ }),

/***/ 83232:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-result/education-confirm-pending-list/education-confirm-pending-list.page.scss ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZHVjYXRpb24tY29uZmlybS1wZW5kaW5nLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 25237:
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/safety-education/education-result/education-confirm-pending-list/education-confirm-pending-list.page.html ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>미결 문서 목록</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-table *mobileHidden>\n    <thead>\n      <tr>\n        <th style=\"width: 48px;\">NO</th>\n        <th>서식명</th>\n        <th>업체명</th>\n        <th>작성자</th>\n        <th>작성일</th>\n        <th>결재현황</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr class=\"button\" *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item.education_safe_report_id)\">\n        <td>{{ item.index }}</td>\n        <td>{{ item.ctgo_approval_module_name }}</td>\n        <td>{{ item.master_company_name }}</td>\n        <td>{{ item.user_name }}</td>\n        <td>{{ item.create_date }}</td>\n        <td>{{ item.approval_cnt_answer }}</td>\n      </tr>\n    </tbody>\n  </app-table>\n  <ng-container *mobileShow>\n    <app-card *ngFor=\"let item of res?.rsMap\">\n      <app-row style=\"align-items: flex-start;\">\n        <app-col>\n          <h5>{{ item.ctgo_approval_module_name }}</h5>\n          <p>{{ item.company_name }}/{{ item.user_name }}</p>\n          <h5>{{ languagePack.getText('작성일') }}:{{ item.create_date }}</h5>\n        </app-col>\n        <app-col size=\"auto\">\n          <ion-chip color=\"success\" color=\"success\" *ngIf=\"item.approval_cnt_answer === '임시저장'\">{{ item.approval_cnt_answer }}</ion-chip>\n          <ion-chip color=\"success\" color=\"success\" *ngIf=\"item.approval_cnt_answer === '결재중'\">{{ item.approval_cnt_answer }}</ion-chip>\n          <ion-chip color=\"success\" color=\"primary\" *ngIf=\"item.approval_cnt_answer === '결재완료'\">{{ item.approval_cnt_answer }}</ion-chip>\n          <ion-chip color=\"success\" color=\"warning\" *ngIf=\"item.approval_cnt_answer === '반려'\">{{ item.approval_cnt_answer }}</ion-chip>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <ion-badge color=\"success\">{{ item.approval_cnt_answer }}</ion-badge>\n        </app-col>\n      </app-row>\n    </app-card>\n  </ng-container>\n  <app-pager [totalCount]=\"res?.rsObj?.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"get($event)\"></app-pager>\n</ion-content>\n<app-button-footer>\n  <app-button>{{ languagePack.getText('적용') }}</app-button>\n</app-button-footer>\n\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_basic_service_util_date_service_ts-src_app_page_safety-education_education-re-4c3804.js.map