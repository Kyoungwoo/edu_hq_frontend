(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_notice-board_msds_msds-list_msds-list_module_ts"],{

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

/***/ 14838:
/*!******************************************************************************!*\
  !*** ./src/app/page/notice-board/msds/msds-list/msds-list-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MsdsListPageRoutingModule": () => (/* binding */ MsdsListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _msds_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msds-list.page */ 11430);




const routes = [
    {
        path: '',
        component: _msds_list_page__WEBPACK_IMPORTED_MODULE_0__.MsdsListPage
    }
];
let MsdsListPageRoutingModule = class MsdsListPageRoutingModule {
};
MsdsListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MsdsListPageRoutingModule);



/***/ }),

/***/ 5670:
/*!**********************************************************************!*\
  !*** ./src/app/page/notice-board/msds/msds-list/msds-list.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MsdsListPageModule": () => (/* binding */ MsdsListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _msds_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msds-list-routing.module */ 14838);
/* harmony import */ var _msds_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msds-list.page */ 11430);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var _msds_edit_msds_edit_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../msds-edit/msds-edit.module */ 57134);
/* harmony import */ var _msds_search_msds_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../msds-search/msds-search.module */ 92542);











let MsdsListPageModule = class MsdsListPageModule {
};
MsdsListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _msds_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.MsdsListPageRoutingModule,
            _msds_search_msds_search_module__WEBPACK_IMPORTED_MODULE_5__.MsdsSearchPageModule,
            _msds_edit_msds_edit_module__WEBPACK_IMPORTED_MODULE_4__.MsdsEditPageModule
        ],
        declarations: [_msds_list_page__WEBPACK_IMPORTED_MODULE_1__.MsdsListPage]
    })
], MsdsListPageModule);



/***/ }),

/***/ 11430:
/*!********************************************************************!*\
  !*** ./src/app/page/notice-board/msds/msds-list/msds-list.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MsdsListPage": () => (/* binding */ MsdsListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_msds_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./msds-list.page.html */ 10755);
/* harmony import */ var _msds_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msds-list.page.scss */ 2952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var _msds_edit_msds_edit_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../msds-edit/msds-edit.page */ 91601);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var _msds_search_msds_search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../msds-search/msds-search.page */ 17862);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);













class MsdsInfo {
}
let MsdsListPage = class MsdsListPage {
    constructor(modal, connect, date, toast, user, promise, languagePack) {
        this.modal = modal;
        this.connect = connect;
        this.date = date;
        this.toast = toast;
        this.user = user;
        this.promise = promise;
        this.languagePack = languagePack;
        this.form = {
            project_id: this.user.userData.belong_data.project_id,
            company_id: this.user.userData.belong_data.company_id,
            master_company_id: this.user.userData.belong_data.master_company_id,
            master_company_name: this.user.userData.belong_data.master_company_name,
            end_date: this.date.today(),
            msds_types: [],
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
    getNavData() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () { if ((_a = history.state) === null || _a === void 0 ? void 0 : _a.msds_id)
            this.edit((_b = history.state) === null || _b === void 0 ? void 0 : _b.msds_id); });
    }
    getMobile($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = this.res.rsMap.length;
            const res = yield this.connect.run('/board/msds/list', this.form, {});
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
    get(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // await this.promise.wait(() => { return this.form.company_id > 1 });
            this.form.limit_no = limit_no;
            const res = yield this.connect.run('/board/msds/list', this.form);
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
    detailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _msds_search_msds_search_page__WEBPACK_IMPORTED_MODULE_7__.MsdsSearchPage,
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
    edit(msds_id = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _msds_edit_msds_edit_page__WEBPACK_IMPORTED_MODULE_4__.MsdsEditPage,
                componentProps: {
                    msds_id: msds_id
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.get();
            }
        });
    }
    favoritesCheck($event, item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            $event.stopPropagation();
            item.favorites_state = item.favorites_state ? 0 : 1;
            this.resFavorite = yield this.connect.run('/board/msds/favorites', { msds_id: item.msds_id });
            if (this.resFavorite.rsCode === 0) {
                this.get();
            }
        });
    }
};
MsdsListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_3__.DateService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_8__.PromiseService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_9__.LanguagePackService }
];
MsdsListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-msds-list',
        template: _raw_loader_msds_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_msds_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MsdsListPage);



/***/ }),

/***/ 2952:
/*!**********************************************************************!*\
  !*** ./src/app/page/notice-board/msds/msds-list/msds-list.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".iconstar {\n  color: var(--ion-color-star);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zZHMtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyw0QkFBMkI7QUFDNUIiLCJmaWxlIjoibXNkcy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uc3Rhcntcblx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0YXIpO1xufSJdfQ== */");

/***/ }),

/***/ 10755:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/notice-board/msds/msds-list/msds-list.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n  <app-header-admin></app-header-admin>\n  <ion-content>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\">\n                <h5>필터</h5>\n              </app-col>\n              <app-col size=\"auto\">\n                <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"get(0)\">검색</app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene [(ngModel)]=\"form.project_id\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor [project_id]=\"form.project_id\" [(ngModel)]=\"form.master_company_id\" [disabled]=\"!permission.company_id\" [allState]=\"permission.company_id\"></app-select-contractor>\n                <!-- <app-select-company [project_id]=\"form.project_id\" [(ngModel)]=\"form.company_id\"></app-select-company> -->\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select label=\"MSDS 구분\" [(ngModel)]=\"form.msds_types\" [multiple]=\"true\">\n                  <app-select-option type=\"all\" [value]=\"[]\">전체</app-select-option>\n                  <app-select-option value=\"해당없음\">해당없음</app-select-option>\n                  <app-select-option value=\"폭발성 물질\">폭발성 물질</app-select-option>\n                  <app-select-option value=\"인화성 가스\">인화성 가스</app-select-option>\n                  <app-select-option value=\"인화성 액체\">인화성 액체</app-select-option>\n                  <app-select-option value=\"인화성 고체\">인화성 고체</app-select-option>\n                  <app-select-option value=\"에어로졸\">에어로졸</app-select-option>\n                  <app-select-option value=\"물반응성 물질\">물반응성 물질</app-select-option>\n                  <app-select-option value=\"산화성 가스\">산화성 가스</app-select-option>\n                  <app-select-option value=\"산화성 액체\">산화성 액체</app-select-option>\n                  <app-select-option value=\"산화성 고체\">산화성 고체</app-select-option>\n                  <app-select-option value=\"고압가스\">고압가스</app-select-option>\n                  <app-select-option value=\"자기반응성 물질\">자기반응성 물질</app-select-option>\n                  <app-select-option value=\"자연발화성 액체\">자연발화성 액체</app-select-option>\n                  <app-select-option value=\"자연발화성 고체\">자연발화성 고체</app-select-option>\n                  <app-select-option value=\"심한 눈 손상성 또는 자극성 물질\">심한 눈 손상성 또는 자극성 물질</app-select-option>\n                  <app-select-option value=\"호흡기 과민성 물질\">호흡기 과민성 물질</app-select-option>\n                  <app-select-option value=\"피부 과민성 물질\">피부 과민성 물질</app-select-option>\n                  <app-select-option value=\"발암성물질\">발암성물질</app-select-option>\n                  <app-select-option value=\"생식세포 변이원성 물질\">생식세포 변이원성 물질</app-select-option>\n                  <app-select-option value=\"생식독성 물질\">생식독성 물질</app-select-option>\n                  <app-select-option value=\"특정표적장기 독성 물질(1회 노출)\">특정표적장기 독성 물질(1회 노출)</app-select-option>\n                  <app-select-option value=\"특정표적장기 독성 물질(반복 노출)\">특정표적장기 독성 물질(반복 노출)</app-select-option>\n                  <app-select-option value=\"흡인유해성 물질\">흡인유해성 물질</app-select-option>\n                  <app-select-option value=\"수생환경 유해성 물질\">수생환경 유해성 물질</app-select-option>\n                  <app-select-option value=\"오존층 유해성 물질\">오존층 유해성 물질</app-select-option>\n                </app-select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input-group label=\"등록일\">\n                  <app-calendar name=\"start_date\" [(ngModel)]=\"form.start_date\" [max]=\"form.end_date\"></app-calendar>\n                  ~\n                  <app-calendar name=\"end_date\" [(ngModel)]=\"form.end_date\" [min]=\"form.start_date\"></app-calendar>\n                </app-input-group>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" [(ngModel)]=\"form.search_text\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n        <ion-toolbar color=\"white\" *ngIf=\"user.userData.belong_data.company_contract_type === '협력사' \n        || user.userData.belong_data.company_contract_type === '원청사'\">\n          <ion-buttons slot=\"start\">\n            <app-button fill=\"translucent\" (click)=\"edit()\">등록</app-button>\n          </ion-buttons>\n        </ion-toolbar>\n        <ion-toolbar color=\"white\">\n          <h5>MSDS 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n        </ion-toolbar>\n  \n        <app-check-group>\n          <app-table>\n            <thead>\n              <tr>\n                <!-- <th style=\"width: 40px;\" *ngIf=\"user.userData.belong_data.company_contract_type === 'LH' \n                || user.userData.belong_data.company_contract_type === '원청사'\">고정</th> -->\n                <th style=\"width: 48px;\">No</th>\n                <th>MSDS 구분</th>\n                <th>제목</th>\n                <th>업체명</th>\n                <th>작성자</th>\n                <th>작성일</th>\n                <th style=\"width: 50px;\">조회수</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"button\" *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item.msds_id)\">\n                <!-- <td (click)=\"favoritesCheck($event, item)\"  *ngIf=\"user.userData.belong_data.company_contract_type === 'LH' \n                || user.userData.belong_data.company_contract_type === '원청사'\">\n                  <app-button size=\"small\" shape=\"square\" fill=\"translucent\"\n                    [color]=\"item.favorites_state ? 'star' : 'medium'\">\n                    <ion-icon name=\"star\"></ion-icon>\n                  </app-button>\n                </td> -->\n                <td>{{ item.index }}</td>\n                <td>{{ item.msds_type }}</td>\n                <td style=\"text-align: left;\">{{ item.msds_title }}</td>\n                <td>{{ item.company_name }}</td>\n                <td>{{ item.user_name }}</td>\n                <td>{{ item.create_date }}</td>\n                <td>{{ item.hit_count }}</td>\n              </tr>\n            </tbody>\n          </app-table>\n        </app-check-group>\n\n        <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"get($event)\"></app-pager>\n\n      </app-col>\n    </app-row>\n  </ion-content>\n</ng-container>\n<!--  -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>MSDS</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\" [readonly]=\"true\"></app-select-scene>\n        <app-button (click)=\"detailSearch()\">{{ languagePack.getText('상세검색') }}</app-button>\n      </app-input-group>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <app-card *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item.msds_id)\">\n      <app-row style=\"align-items: flex-start;\">\n        <app-col>\n          <p>{{ item.company_name }}/{{ item.user_name }}</p>\n          <p>{{ languagePack.getText('작성일') }}: {{ item.create_date }}</p>\n          <ion-badge color=\"success\">{{ item.msds_type }}</ion-badge>\n        </app-col>\n      </app-row>\n    </app-card>\n    <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n      <ion-infinite-scroll-content loading-spinner=\"dots\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-content>\n</ng-container>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_notice-board_msds_msds-list_msds-list_module_ts.js.map