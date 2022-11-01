(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_member-management_member-approval-wait_lh-approval-list_lh-approval-list_module_ts"],{

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

/***/ 72830:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/lh-approval-list/lh-approval-list-routing.module.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LhApprovalListPageRoutingModule": () => (/* binding */ LhApprovalListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _lh_approval_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lh-approval-list.page */ 7196);




const routes = [
    {
        path: '',
        component: _lh_approval_list_page__WEBPACK_IMPORTED_MODULE_0__.LhApprovalListPage
    }
];
let LhApprovalListPageRoutingModule = class LhApprovalListPageRoutingModule {
};
LhApprovalListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LhApprovalListPageRoutingModule);



/***/ }),

/***/ 43018:
/*!*********************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/lh-approval-list/lh-approval-list.module.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LhApprovalListPageModule": () => (/* binding */ LhApprovalListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _lh_approval_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lh-approval-list-routing.module */ 72830);
/* harmony import */ var _lh_approval_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lh-approval-list.page */ 7196);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _lh_approval_edit_lh_approval_edit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lh-approval-edit/lh-approval-edit.module */ 96927);









let LhApprovalListPageModule = class LhApprovalListPageModule {
};
LhApprovalListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _lh_approval_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.LhApprovalListPageRoutingModule,
            _lh_approval_edit_lh_approval_edit_module__WEBPACK_IMPORTED_MODULE_3__.LhApprovalEditPageModule
        ],
        declarations: [_lh_approval_list_page__WEBPACK_IMPORTED_MODULE_1__.LhApprovalListPage]
    })
], LhApprovalListPageModule);



/***/ }),

/***/ 7196:
/*!*******************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/lh-approval-list/lh-approval-list.page.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LhApprovalListPage": () => (/* binding */ LhApprovalListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_lh_approval_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lh-approval-list.page.html */ 2771);
/* harmony import */ var _lh_approval_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lh-approval-list.page.scss */ 43822);
/* harmony import */ var _basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../basic/service/ionic/nav.service */ 69914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var _approval_popup_approval_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../approval-popup/approval-popup.component */ 32966);
/* harmony import */ var _lh_approval_edit_lh_approval_edit_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lh-approval-edit/lh-approval-edit.page */ 67062);
/* harmony import */ var _security_password_security_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../security-password/security-password.component */ 52346);













class LhApprovalInfo {
}
let LhApprovalListPage = class LhApprovalListPage {
    constructor(modal, user, connect, date, toast, nav) {
        this.modal = modal;
        this.user = user;
        this.connect = connect;
        this.date = date;
        this.toast = toast;
        this.nav = nav;
        this.form = {
            approval_state: '전체',
            hq_regional_id: 0,
            start_date: this.date.today({ year: -3 }),
            end_date: this.date.today(),
            search_text: '',
            limit_no: 0,
            session_company_id: this.user.userData.belong_data.company_id,
            user_manage_session: '',
        };
        this.selectedList = [];
    }
    ngOnInit() {
        this.get();
    }
    get(limit_no = this.form.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.form.limit_no = limit_no;
            const authToken = this.user.memberAuthToken;
            this.form.user_manage_session = authToken;
            const res = yield this.connect.run('/usermanage/approval/lh/list', this.form);
            if (res.rsCode === 0) {
                this.res = res;
                this.res.rsMap.map((item, i) => {
                    item.index = res.rsObj.row_count - this.form.limit_no - i;
                });
            }
            if (res.rsCode === 0) {
                // 정상
                this.res.rsMap.map((item) => { item.state = 'lh'; });
            }
            else if (res.rsCode === 1008) {
                this.res = null;
                // 데이터 없음
            }
            else if (res.rsCode === 3008 || res.rsCode === 3009) {
                // 비밀번호 없거나 틀렸음
                this.getPassword();
            }
            else {
                // 그외. 인터넷안됨, 서버연결안됨 등등
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    getPassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _security_password_security_password_component__WEBPACK_IMPORTED_MODULE_9__.SecurityPasswordComponent,
                backdropDismiss: false,
                cssClass: "security-password-modal"
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.get();
                if (data.state === 'approval')
                    this.nav.navigateForward(data.page_name, { force: true });
            }
        });
    }
    edit(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _lh_approval_edit_lh_approval_edit_page__WEBPACK_IMPORTED_MODULE_8__.LhApprovalEditPage,
                componentProps: {
                    item,
                    state: 'lh'
                }
            });
            modal.present();
        });
    }
    approval() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.selectedList.length)
                return yield this.toast.present({ message: '관리자를 선택해주세요.', color: 'warning' });
            const modal = yield this.modal.create({
                component: _approval_popup_approval_popup_component__WEBPACK_IMPORTED_MODULE_7__.ApprovalPopupComponent,
                componentProps: {
                    selectedList: this.selectedList,
                    state: 'lh'
                },
                cssClass: "approval-modal"
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.get();
            }
        });
    }
};
LhApprovalListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_6__.DateService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: _basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_2__.NavService }
];
LhApprovalListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-lh-approval-list',
        template: _raw_loader_lh_approval_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lh_approval_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LhApprovalListPage);



/***/ }),

/***/ 43822:
/*!*********************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-approval-wait/lh-approval-list/lh-approval-list.page.scss ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaC1hcHByb3ZhbC1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 2771:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/member-management/member-approval-wait/lh-approval-list/lh-approval-list.page.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ng-container *mobileHidden>\n  <app-header-admin></app-header-admin>\n    <!-- <ion-toolbar color=\"white\">\n      <ion-title>\n        <h4>LH 관리자 가입승인</h4>\n      </ion-title>\n    </ion-toolbar> -->\n  <ion-content>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\"><app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"get(0)\">검색</app-button></app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <!-- <app-select-regional [(ngModel)]=\"form.hq_regional_id\" [all]=\"true\"></app-select-regional> -->\n                <app-input label=\"사업지구\" [readonly]=\"true\" value=\"수원당수지구\"></app-input>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input-group label=\"신청일\">\n                  <app-calendar [(ngModel)]=\"form.start_date\" [max]=\"form.end_date\"></app-calendar>\n                  ~\n                  <app-calendar [(ngModel)]=\"form.end_date\" [min]=\"form.start_date\"></app-calendar>\n                </app-input-group>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-radio-input label=\"승인현황\" [(ngModel)]=\"form.approval_state\">\n                  <app-radio type=\"all\" value=\"전체\">전체</app-radio>\n                  <app-radio value=\"미승인\">미승인</app-radio>\n                  <app-radio value=\"반려\">반려</app-radio>\n                </app-radio-input>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" placeholder=\"검색어를 입력해 주세요.\" [(ngModel)]=\"form.search_text\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n        <ion-toolbar color=\"white\">\n          <ion-buttons slot=\"start\">\n            <!-- <app-button fill=\"translucent\">엑셀 업로드</app-button>\n            <app-button fill=\"translucent\">양식 다운로드</app-button> -->\n            <app-button fill=\"translucent\" (click)=\"approval()\">가입승인</app-button>\n          </ion-buttons>\n        </ion-toolbar>\n        <ion-toolbar color=\"white\">\n          <h5>LH 관리자 가입 신청 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n        </ion-toolbar>\n        <app-check-group [(ngModel)]=\"selectedList\">\n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 40px;\" rowspan=\"2\"><app-check color=\"white\" size=\"small\" name=\"check\"></app-check></th>\n              <th style=\"width: 48px;\">No</th>\n              <!-- <th>사업지구</th> -->\n              <th>성명</th>\n              <th>직위</th>\n              <th>신청일</th>\n              <th>승인현황</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"button\" *ngFor=\"let item of res?.rsMap let i = index\" (click)=\"edit(item)\">\n              <td>\n                <app-check (click)=\"$event.stopPropagation()\" [on]=\"item\" color=\"white\" size=\"small\" name=\"check\"></app-check>\n              </td>\n              <td>{{ item.index }}</td>\n              <!-- <td>{{ item.hq_regional_name }}</td> -->\n              <td>{{ item.user_name }}</td>\n              <td>{{ item.ctgo_job_position_name }}</td>\n              <td>{{ item.create_date }}</td>\n              <td>{{ item.approval_state }}</td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-check-group>\n      <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"get($event)\"></app-pager>\n      </app-col>\n    </app-row>\n  </ion-content>\n</ng-container>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_member-management_member-approval-wait_lh-approval-list_lh-approval-list_module_ts.js.map