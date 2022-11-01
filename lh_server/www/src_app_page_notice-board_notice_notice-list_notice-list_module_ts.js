(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_notice-board_notice_notice-list_notice-list_module_ts"],{

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

/***/ 41937:
/*!************************************************************************************!*\
  !*** ./src/app/page/notice-board/notice/notice-edit/notice-edit-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeEditPageRoutingModule": () => (/* binding */ NoticeEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _notice_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice-edit.page */ 45877);




const routes = [
    {
        path: '',
        component: _notice_edit_page__WEBPACK_IMPORTED_MODULE_0__.NoticeEditPage
    }
];
let NoticeEditPageRoutingModule = class NoticeEditPageRoutingModule {
};
NoticeEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NoticeEditPageRoutingModule);



/***/ }),

/***/ 40819:
/*!****************************************************************************!*\
  !*** ./src/app/page/notice-board/notice/notice-edit/notice-edit.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeEditPageModule": () => (/* binding */ NoticeEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _notice_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice-edit-routing.module */ 41937);
/* harmony import */ var _notice_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice-edit.page */ 45877);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _notice_open_range_notice_open_range_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notice-open-range/notice-open-range.module */ 96455);
/* harmony import */ var _notice_open_range_notice_open_range_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notice-open-range/notice-open-range.page */ 62106);











let NoticeEditPageModule = class NoticeEditPageModule {
};
NoticeEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_2__.BasicComponentModule,
            _notice_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.NoticeEditPageRoutingModule,
            _notice_open_range_notice_open_range_module__WEBPACK_IMPORTED_MODULE_4__.NoticeOpenRangePageModule
        ],
        declarations: [_notice_edit_page__WEBPACK_IMPORTED_MODULE_1__.NoticeEditPage],
        providers: [
            _notice_open_range_notice_open_range_page__WEBPACK_IMPORTED_MODULE_5__.NoticeOpenRangePage
        ]
    })
], NoticeEditPageModule);



/***/ }),

/***/ 25909:
/*!************************************************************************************!*\
  !*** ./src/app/page/notice-board/notice/notice-list/notice-list-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeListPageRoutingModule": () => (/* binding */ NoticeListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _notice_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice-list.page */ 68324);




const routes = [
    {
        path: '',
        component: _notice_list_page__WEBPACK_IMPORTED_MODULE_0__.NoticeListPage
    }
];
let NoticeListPageRoutingModule = class NoticeListPageRoutingModule {
};
NoticeListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NoticeListPageRoutingModule);



/***/ }),

/***/ 84446:
/*!****************************************************************************!*\
  !*** ./src/app/page/notice-board/notice/notice-list/notice-list.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeListPageModule": () => (/* binding */ NoticeListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _notice_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice-list-routing.module */ 25909);
/* harmony import */ var _notice_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice-list.page */ 68324);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _notice_edit_notice_edit_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notice-edit/notice-edit.module */ 40819);
/* harmony import */ var _notice_search_notice_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notice-search/notice-search.module */ 61753);











let NoticeListPageModule = class NoticeListPageModule {
};
NoticeListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_2__.BasicComponentModule,
            _notice_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.NoticeListPageRoutingModule,
            _notice_search_notice_search_module__WEBPACK_IMPORTED_MODULE_5__.NoticeSearchPageModule,
            _notice_edit_notice_edit_module__WEBPACK_IMPORTED_MODULE_4__.NoticeEditPageModule
        ],
        declarations: [_notice_list_page__WEBPACK_IMPORTED_MODULE_1__.NoticeListPage]
    })
], NoticeListPageModule);



/***/ }),

/***/ 68324:
/*!**************************************************************************!*\
  !*** ./src/app/page/notice-board/notice/notice-list/notice-list.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeListPage": () => (/* binding */ NoticeListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_notice_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notice-list.page.html */ 65987);
/* harmony import */ var _notice_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice-list.page.scss */ 61009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var _notice_edit_notice_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../notice-edit/notice-edit.page */ 45877);
/* harmony import */ var _notice_search_notice_search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notice-search/notice-search.page */ 75455);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);













class NoticeInfo {
}
let NoticeListPage = class NoticeListPage {
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
            notice_types: [],
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
            const res = yield this.connect.run('/board/notice/list', this.form);
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
            const res = yield this.connect.run('/board/notice/list', this.form);
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
                component: _notice_search_notice_search_page__WEBPACK_IMPORTED_MODULE_7__.NoticeSearchPage,
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
    edit(notice_id = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _notice_edit_notice_edit_page__WEBPACK_IMPORTED_MODULE_6__.NoticeEditPage,
                componentProps: {
                    notice_id: notice_id || 0,
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
    favoritesCheck($event, item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            $event.stopPropagation();
            item.favorites_state = item.favorites_state ? 0 : 1;
            this.resFavorite = yield this.connect.run('/board/notice/favorites', { notice_id: item.notice_id });
            if (this.resFavorite.rsCode === 0) {
                this.get();
            }
        });
    }
};
NoticeListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_5__.DateService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_8__.FileService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_9__.LanguagePackService }
];
NoticeListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-notice-list',
        template: _raw_loader_notice_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notice_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NoticeListPage);



/***/ }),

/***/ 61009:
/*!****************************************************************************!*\
  !*** ./src/app/page/notice-board/notice/notice-list/notice-list.page.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpY2UtbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 65987:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/notice-board/notice/notice-list/notice-list.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n  <app-header-admin></app-header-admin>\n  <ion-content>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\">\n                <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"get(0)\">검색</app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor [project_id]=\"form.project_id\" [(ngModel)]=\"form.master_company_id\" [disabled]=\"!permission.company_id\" [allState]=\"permission.company_id\"></app-select-contractor>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select label=\"공지 구분\" [(ngModel)]=\"form.notice_types\" [multiple]=\"true\">\n                  <app-select-option type=\"all\" [value]=\"[]\">전체</app-select-option>\n                  <app-select-option value=\"일반\">일반</app-select-option>\n                  <app-select-option value=\"안전관리\">안전관리</app-select-option>\n                  <app-select-option value=\"환경관리\">환경관리</app-select-option>\n                  <app-select-option value=\"공사관리\">공사관리</app-select-option>\n                  <app-select-option value=\"품질관리\">품질관리</app-select-option>\n                </app-select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input-group label=\"등록일\">\n                  <app-calendar name=\"start_date\" [(ngModel)]=\"form.start_date\" [max]=\"form.end_date\"></app-calendar>\n                  ~\n                  <app-calendar name=\"end_date\" [(ngModel)]=\"form.end_date\" [min]=\"form.start_date\"></app-calendar>\n                </app-input-group>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" [(ngModel)]=\"form.search_text\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n        <ion-toolbar color=\"white\" *ngIf=\"user.userData.belong_data.company_contract_type === 'LH' \n        || user.userData.belong_data.company_contract_type === '원청사'\">   \n          <ion-buttons slot=\"start\">\n            <app-button fill=\"translucent\" (click)=\"edit()\">등록</app-button>\n          </ion-buttons>\n        </ion-toolbar>\n        <ion-toolbar color=\"white\">\n          <h5>공지사항 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n        </ion-toolbar>\n        <app-card *ngIf=\"resFavorite?.rsCode\" color=\"warning\">{{ resFavorite.rsMsg }}</app-card>\n        <ng-container *ngIf=\"res\">\n          <ng-container *ngIf=\"res.rsCode === 0 else tempFail\">\n            <app-table>\n              <thead>\n                <tr>\n                  <th style=\"width: 40px; text-align: center;\" *ngIf=\"user.userData.belong_data.company_contract_type === 'LH' \n                  || user.userData.belong_data.company_contract_type === '원청사'\">\n                    고정\n                  </th>\n                  <th>구분</th>\n                  <th>제목</th>\n                  <th>업체명</th>\n                  <th>작성자</th>\n                  <th>작성일</th>\n                  <th style=\"width: 50px;\">조회수</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class=\"button\" *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item.notice_id)\">\n                  <td style=\"text-align: center;\" (click)=\"favoritesCheck($event, item)\" *ngIf=\"user.userData.belong_data.company_contract_type === 'LH' \n                  || user.userData.belong_data.company_contract_type === '원청사'\">\n                    <app-button size=\"small\" shape=\"square\" fill=\"translucent\"\n                    [color]=\"item.favorites_state ? 'star' : 'medium'\">\n                      <ion-icon name=\"star\"></ion-icon>\n                    </app-button>\n                  </td>\n                  <td>{{ item.notice_type }}</td>\n                  <td style=\"text-align: left;\">{{ item.notice_title }}</td>\n                  <td>{{ item.company_name }}</td>\n                  <td>{{ item.user_name }}</td>\n                  <td>{{ item.create_date }}</td>\n                  <td>{{ item.hit_count }}</td>\n                </tr>\n              </tbody>\n            </app-table>\n            <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"get($event)\"></app-pager>\n          </ng-container>\n          <ng-template #tempFail>\n            <app-card>{{ res.rsMsg }}</app-card>\n          </ng-template>\n        </ng-container>\n      </app-col>\n    </app-row>\n  </ion-content>\n</ng-container>\n\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>{{ languagePack.getText('공지사항') }}</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\" [readonly]=\"true\"></app-select-scene>\n        <app-button (click)=\"detailSearch()\">{{ languagePack.getText('상세검색') }}</app-button>\n      </app-input-group>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <app-card *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item.notice_id)\">\n      <app-row style=\"align-items: flex-start;\">\n        <app-col>\n          <p>{{ item.notice_title }}</p>\n          <p>{{ item.company_name }}/{{ item.user_name }}</p>\n          <p>{{ languagePack.getText('작성일') }}: {{ item.create_date }}</p>\n        </app-col>\n      </app-row>\n      <ion-badge color=\"success\">{{ item.notice_type }}</ion-badge>\n    </app-card>\n\n    <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n      <ion-infinite-scroll-content loading-spinner=\"dots\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-content>\n</ng-container>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_notice-board_notice_notice-list_notice-list_module_ts.js.map