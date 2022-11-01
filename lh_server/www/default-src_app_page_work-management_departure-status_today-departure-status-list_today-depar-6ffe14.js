(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_work-management_departure-status_today-departure-status-list_today-depar-6ffe14"],{

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

/***/ 90844:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/page/work-management/departure-status/today-departure-status-list/today-departure-status-list-routing.module.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodayDepartureStatusListPageRoutingModule": () => (/* binding */ TodayDepartureStatusListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _today_departure_status_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today-departure-status-list.page */ 20811);




const routes = [
    {
        path: '',
        component: _today_departure_status_list_page__WEBPACK_IMPORTED_MODULE_0__.TodayDepartureStatusListPage
    }
];
let TodayDepartureStatusListPageRoutingModule = class TodayDepartureStatusListPageRoutingModule {
};
TodayDepartureStatusListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TodayDepartureStatusListPageRoutingModule);



/***/ }),

/***/ 34124:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/page/work-management/departure-status/today-departure-status-list/today-departure-status-list.module.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodayDepartureStatusListPageModule": () => (/* binding */ TodayDepartureStatusListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _today_departure_status_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today-departure-status-list-routing.module */ 90844);
/* harmony import */ var _today_departure_status_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today-departure-status-list.page */ 20811);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _today_departure_status_edit_today_departure_status_edit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../today-departure-status-edit/today-departure-status-edit.module */ 71324);









let TodayDepartureStatusListPageModule = class TodayDepartureStatusListPageModule {
};
TodayDepartureStatusListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _today_departure_status_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.TodayDepartureStatusListPageRoutingModule,
            _today_departure_status_edit_today_departure_status_edit_module__WEBPACK_IMPORTED_MODULE_3__.TodayDepartureStatusEditPageModule
        ],
        declarations: [_today_departure_status_list_page__WEBPACK_IMPORTED_MODULE_1__.TodayDepartureStatusListPage],
        exports: [_today_departure_status_list_page__WEBPACK_IMPORTED_MODULE_1__.TodayDepartureStatusListPage]
    })
], TodayDepartureStatusListPageModule);



/***/ }),

/***/ 20811:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/page/work-management/departure-status/today-departure-status-list/today-departure-status-list.page.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartureStatusListForm": () => (/* binding */ DepartureStatusListForm),
/* harmony export */   "DepartureStatusListItem": () => (/* binding */ DepartureStatusListItem),
/* harmony export */   "TodayDepartureStatusListItem": () => (/* binding */ TodayDepartureStatusListItem),
/* harmony export */   "TodayDepartureStatusDetailItem": () => (/* binding */ TodayDepartureStatusDetailItem),
/* harmony export */   "TodayDepartureStatusListPage": () => (/* binding */ TodayDepartureStatusListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_today_departure_status_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./today-departure-status-list.page.html */ 18992);
/* harmony import */ var _today_departure_status_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today-departure-status-list.page.scss */ 93716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var _today_departure_status_edit_today_departure_status_edit_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../today-departure-status-edit/today-departure-status-edit.page */ 88931);











class DepartureStatusListForm {
    constructor() {
        this.project_id = 0; // 현장 ID
        this.master_company_id = 0; // 원청사 ID
        this.ctgo_construction_ids = []; // 공종 ID
    }
}
class DepartureStatusListItem {
    constructor() {
        this.company_admin = 0;
        this.company_worker = 0;
        this.master_admin = 0;
        this.master_worker = 0;
        this.total_cnt = 0;
        this.work_date = '';
        this.row_count = 0;
    }
}
class TodayDepartureStatusListItem {
    constructor() {
        this.ctgo_construction_id = 0;
        this.outside_time = '';
        this.nb_log_id = 0;
        this.company_id = 0;
        this.ctgo_job_position_id = 0;
        this.user_name = '';
        this.ctgo_occupation_name = '';
        this.ctgo_construction_name = '';
        this.ctgo_job_position_name = '';
        this.inside_type = '';
        this.outside_type = '';
        this.user_type = null;
        this.ctgo_occupation_id = 0;
        this.user_id = 0;
        this.company_name = '';
        this.ctgo_safe_job_id = 0;
        this.inside_time = '';
        this.ctgo_safe_job_name = '';
        this.row_count = 0;
    }
}
class TodayDepartureStatusDetailItem {
}
let TodayDepartureStatusListPage = class TodayDepartureStatusListPage {
    constructor(_modal, connect, user, toast, date, promise) {
        this._modal = _modal;
        this.connect = connect;
        this.user = user;
        this.toast = toast;
        this.date = date;
        this.promise = promise;
        this.form = {
            project_id: 0,
            master_company_id: 0,
            ctgo_construction_ids: [],
            cnt_date: '',
            search_text: '' // 검색어
        };
        this.detailList = [];
        this.permisson = {
            edit: false
        };
    }
    ngOnInit() {
        this.getPromission();
        this.getForm();
        this.getSummary();
        this.getList();
    }
    getPromission() {
        const { user_type } = this.user.userData;
        if (user_type === 'LH' || user_type === 'SUPER') {
            this.permisson.edit = false;
        }
        else if (user_type === 'COMPANY') {
            this.permisson.edit = true;
        }
    }
    getForm() {
        this.form.project_id = this.listForm.project_id;
        this.form.master_company_id = this.listForm.master_company_id;
        this.form.ctgo_construction_ids = this.listForm.ctgo_construction_ids;
        this.form.cnt_date = this.item.work_date;
    }
    getSummary() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.res = yield this.connect.run('/work_state/current', this.form, { loading: true });
            if (this.res.rsCode !== 0 && this.res.rsCode !== 1008) {
                this.toast.present({ color: 'warning', message: this.res.rsMsg });
            }
        });
    }
    getList(limit_no = this.listForm.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.listForm.limit_no = limit_no;
            this.res2 = yield this.connect.run('/work_state/detail/list', this.form, { loading: true });
            if (this.res2.rsCode !== 0 && this.res2.rsCode !== 1008) {
                this.toast.present({ color: 'warning', message: this.res2.rsMsg });
            }
        });
    }
    detail(item, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.detailList[index]) {
                this.detailList[index] = null;
            }
            else {
                const form = {
                    cnt_date: this.form.cnt_date,
                    project_id: this.form.project_id,
                    master_company_id: item.company_id,
                    ctgo_construction_id: item.ctgo_construction_id,
                    view_user_id: item.user_id
                };
                const res = yield this.connect.run('/work_state/detail/sub_list', form, { loading: true });
                if (res.rsCode === 0) {
                    this.detailList[index] = res.rsMap;
                }
            }
        });
    }
    edit(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _today_departure_status_edit_today_departure_status_edit_page__WEBPACK_IMPORTED_MODULE_7__.TodayDepartureStatusEditPage,
                cssClass: 'today-departure-status-edit-modal',
                componentProps: {
                    type,
                    project_id: this.form.project_id,
                    company_id: this.user.userData.belong_data.company_id,
                    inout_date: this.form.cnt_date
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.getSummary();
                this.getList();
            }
        });
    }
};
TodayDepartureStatusListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_5__.DateService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_6__.PromiseService }
];
TodayDepartureStatusListPage.propDecorators = {
    listForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
TodayDepartureStatusListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-today-departure-status-list',
        template: _raw_loader_today_departure_status_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_today_departure_status_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TodayDepartureStatusListPage);



/***/ }),

/***/ 93716:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/page/work-management/departure-status/today-departure-status-list/today-departure-status-list.page.scss ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".detail td {\n  background-color: var(--ion-color-step-50);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZGF5LWRlcGFydHVyZS1zdGF0dXMtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSwwQ0FBMEM7QUFBbEQiLCJmaWxlIjoidG9kYXktZGVwYXJ0dXJlLXN0YXR1cy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xuICAgIHRkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTApO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 18992:
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/work-management/departure-status/today-departure-status-list/today-departure-status-list.page.html ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>{{ form.cnt_date }} 출역 현황</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollX]=\"true\" style=\"--padding-top:15px\">\n  <app-container>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\">\n                <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList(0)\">검색</app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-construction [master_company_id]=\"form.master_company_id\" [project_id]=\"form.project_id\" [(ngModel)]=\"form.ctgo_construction_ids\" [all]=\"true\" [multiple]=\"true\"></app-select-construction>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" [(ngModel)]=\"form.search_text\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n        <ion-toolbar color=\"white\" *ngIf=\"permisson.edit\">\n          <ion-buttons slot=\"start\">\n            <app-button fill=\"translucent\">인쇄(협의중)</app-button>\n          </ion-buttons>\n        </ion-toolbar>\n        <ion-toolbar color=\"white\">\n          <h5>현재 출역</h5>\n        </ion-toolbar>\n        <app-table>\n          <thead>\n            <tr>\n              <th colspan=\"2\">원청사</th>\n              <th colspan=\"2\">협력사</th>\n              <th rowspan=\"2\">총 출역 인원</th>\n            </tr>\n            <tr>\n              <th>관리자</th>\n              <th>작업자</th>\n              <th>관리자</th>\n              <th>작업자</th>\n            </tr>\n            <tr>\n              <td>{{ res?.rsObj?.master_admin || 0 }}</td>\n              <td>{{ res?.rsObj?.master_worker || 0 }}</td>\n              <td>{{ res?.rsObj?.company_admin || 0 }}</td>\n              <td>{{ res?.rsObj?.company_worker || 0 }}</td>\n              <td>{{ res?.rsObj?.total_cnt || 0 }}</td>\n            </tr>\n          </thead>\n        </app-table>\n        <ion-toolbar color=\"white\" *ngIf=\"permisson.edit\">\n          <ion-buttons slot=\"start\">\n            <app-button fill=\"translucent\" (click)=\"edit('입장')\">근로자 입장 등록</app-button>\n            <app-button fill=\"translucent\" (click)=\"edit('퇴장')\">근로자 퇴장 등록</app-button>\n          </ion-buttons>\n        </ion-toolbar>\n        <ion-toolbar color=\"white\">\n          <h5>상세 내역 (총 {{ res2?.rsObj?.row_count || 0}}건)</h5>\n        </ion-toolbar>\n        <app-table>\n          <thead>\n            <tr>\n              <th>No</th>\n              <th>회사명</th>\n              <th>공종</th>\n              <th>구분</th>\n              <th>성명</th>\n              <th>직위</th>\n              <th>안전직무</th>\n              <th>직종</th>\n              <th>최초 입장시간</th>\n              <th>최종 퇴장시간</th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngFor=\"let item of res2?.rsMap; let i = index; let c = count;\" >\n              <tr class=\"button\" (click)=\"detail(item, i)\">\n                <td>{{ c - i }}</td>\n                <td>{{ item.company_name }}</td>\n                <td>{{ item.ctgo_construction_name }}</td>\n                <td>{{ item.user_type === 'WORKER' ? '작업자' : '관리자' }}</td>\n                <td>{{ item.user_name }}</td>\n                <td>{{ item.ctgo_job_position_name }}</td>\n                <td>{{ item.ctgo_safe_job_name }}</td>\n                <td>{{ item.ctgo_occupation_name }}</td>\n                <td>{{ item.inside_time ? item.inside_time+(item.inside_type == 'MANUAL' ? '(수동)' : '') : '-' }}</td>\n                <td>{{ item.outside_time ? item.outside_time+(item.outside_type == 'MANUAL' ? '(수동)' : '') : '-' }}</td>\n              </tr>\n              <ng-container *ngFor=\"let detail of detailList[i]\">\n                <tr class=\"detail\">\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td>{{ detail.inside_time ? detail.inside_time+(detail.inside_type == 'MANUAL' ? '(수동)' : '') : '-' }}</td>\n                  <td>{{ detail.outside_time ? detail.outside_time+(detail.outside_type == 'MANUAL' ? '(수동)' : '') : '-' }}</td>\n                </tr>\n              </ng-container>\n            </ng-container>\n          </tbody>\n        </app-table>\n      </app-col>\n    </app-row>\n  </app-container>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_work-management_departure-status_today-departure-status-list_today-depar-6ffe14.js.map