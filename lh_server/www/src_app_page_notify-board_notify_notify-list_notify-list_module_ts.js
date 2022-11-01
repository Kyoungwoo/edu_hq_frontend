(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_notify-board_notify_notify-list_notify-list_module_ts"],{

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

/***/ 69982:
/*!************************************************************************************!*\
  !*** ./src/app/page/notify-board/notify/notify-list/notify-list-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotifyListPageRoutingModule": () => (/* binding */ NotifyListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _notify_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notify-list.page */ 30910);




const routes = [
    {
        path: '',
        component: _notify_list_page__WEBPACK_IMPORTED_MODULE_0__.NotifyListPage
    }
];
let NotifyListPageRoutingModule = class NotifyListPageRoutingModule {
};
NotifyListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotifyListPageRoutingModule);



/***/ }),

/***/ 63508:
/*!****************************************************************************!*\
  !*** ./src/app/page/notify-board/notify/notify-list/notify-list.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotifyListPageModule": () => (/* binding */ NotifyListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _notify_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notify-list-routing.module */ 69982);
/* harmony import */ var _notify_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notify-list.page */ 30910);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _open_detail_search_open_detail_search_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../open-detail-search/open-detail-search.module */ 16764);









let NotifyListPageModule = class NotifyListPageModule {
};
NotifyListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _notify_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotifyListPageRoutingModule,
            _open_detail_search_open_detail_search_module__WEBPACK_IMPORTED_MODULE_3__.OpenDetailSearchPageModule
        ],
        declarations: [_notify_list_page__WEBPACK_IMPORTED_MODULE_1__.NotifyListPage]
    })
], NotifyListPageModule);



/***/ }),

/***/ 30910:
/*!**************************************************************************!*\
  !*** ./src/app/page/notify-board/notify/notify-list/notify-list.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotifyListPage": () => (/* binding */ NotifyListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_notify_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notify-list.page.html */ 75753);
/* harmony import */ var _notify_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notify-list.page.scss */ 95548);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var _open_detail_search_open_detail_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../open-detail-search/open-detail-search.page */ 42934);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);











let NotifyListPage = class NotifyListPage {
    constructor(modal, connect, toast, date, user, languagePack) {
        this.modal = modal;
        this.connect = connect;
        this.toast = toast;
        this.date = date;
        this.user = user;
        this.languagePack = languagePack;
        this.form = {
            create_date: this.date.today({ year: -2, month: -1 }),
            end_date: this.date.today(),
            notify_menu: '전체',
            project_id: this.user.userData.belong_data.project_id,
            search_text: ''
        };
    }
    ngOnInit() {
        this.get();
    }
    ngOnDestroy() {
        window.dispatchEvent(new CustomEvent('getNotify'));
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.res = yield this.connect.run('/notify/get', this.form);
            if (this.res.rsCode === 0) { }
            else {
                this.toast.present({ message: this.res.rsMsg, color: 'warning' });
            }
        });
    }
    openDetail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _open_detail_search_open_detail_search_page__WEBPACK_IMPORTED_MODULE_6__.OpenDetailSearchPage,
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
};
NotifyListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_5__.DateService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_7__.LanguagePackService }
];
NotifyListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-notify-list',
        template: _raw_loader_notify_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notify_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotifyListPage);

// 읽은게 1 안읽은게 0


/***/ }),

/***/ 95548:
/*!****************************************************************************!*\
  !*** ./src/app/page/notify-board/notify/notify-list/notify-list.page.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".color {\n  color: var(--ion-color-primary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmeS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUErQjtBQUNuQyIsImZpbGUiOiJub3RpZnktbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3Ige1xuICAgIGNvbG9yOnZhciggLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */");

/***/ }),

/***/ 75753:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/notify-board/notify/notify-list/notify-list.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- pc -->\n<ng-container *mobileHidden>\n  <app-header-admin></app-header-admin>\n  <ion-content>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\"><app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"get()\">검색</app-button></app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene [all]=\"true\" [(ngModel)]=\"form.project_id\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select label=\"메뉴 그룹\" [(ngModel)]=\"form.notify_menu\">\n                  <app-select-option value=\"전체\">전체</app-select-option>\n                  <app-select-option value=\"회원관리\">회원관리</app-select-option>\n                  <app-select-option value=\"현장 관리\">현장 관리</app-select-option>\n                  <app-select-option value=\"오늘의 작업\">오늘의 작업</app-select-option>\n                  <app-select-option value=\"장비관리\">장비 관리</app-select-option>\n                  <app-select-option value=\"비상상활관리\">비상상황 관리</app-select-option>\n                  <app-select-option value=\"결재\">결재</app-select-option>\n                  <app-select-option value=\"게시판\">게시판</app-select-option>\n                  <app-select-option value=\"고객 지원\">고객 지원</app-select-option>\n                </app-select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input-group label=\"알림일\">\n                  <app-calendar [(ngModel)]=\"form.create_date\"></app-calendar>\n                  ~\n                  <app-calendar [(ngModel)]=\"form.end_date\"></app-calendar>\n                </app-input-group>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" [(ngModel)]=\"form.search_text\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n        <ion-toolbar color=\"white\">\n          <h5>알림함 목록 (총 {{ res?.rsObj?.row_count || 0 }}건)</h5>\n        </ion-toolbar>\n        <app-table>\n          <thead>\n            <tr>\n              <th style=\"width: 130px;\">메뉴 그룹</th>\n              <th>메시지</th>\n              <th style=\"width: 200px;\">알람일시</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"button\" [class.color]=\"!item.read_state\" *ngFor=\"let item of res?.rsMap\">\n              <td>{{ item.notify_menu }}</td>\n              <td style=\"text-align: left;\">{{ item.notify_text_kr }}</td>\n              <td>{{ item.create_date }}</td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n    </app-row>\n  </ion-content>\n</ng-container>\n\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>{{ languagePack.getText('알림함') }}</ion-title>\n      <!-- <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons> -->\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <app-select-scene [(ngModel)]=\"form.project_id\" [disabled]=\"true\"></app-select-scene>\n        <app-button (click)=\"openDetail()\">{{ languagePack.getText('상세검색') }}</app-button>\n      </app-input-group>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ng-container>\n      <app-card  *ngFor=\"let item of res?.rsMap\">\n        <app-row style=\"align-items: flex-start;\">\n          <app-col>\n            <h5 [class.color]=\"!item.read_state\">{{ item.notify_menu }}</h5>\n          </app-col>\n          <!-- <app-col size=\"auto\">\n            <ion-chip color=\"success\">진행중</ion-chip>\n          </app-col> -->\n        </app-row>\n        <app-row>\n          <app-col>\n            <p>{{ item.notify_text_kr }}</p>\n            <p>{{ languagePack.getText('작성일') }}: {{ item.create_date }}</p>\n          </app-col>\n        </app-row>\n      </app-card>\n    </ng-container>\n  </ion-content>\n\n  <!-- <div>\n    <app-card>\n      <app-row>\n        <app-col style=\"text-align: center;\">\n          <app-img src=\"assets/img/main/plus.svg\"></app-img>\n        </app-col>\n      </app-row>\n    </app-card>\n  </div> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_page_notify-board_notify_notify-list_notify-list_module_ts.js.map