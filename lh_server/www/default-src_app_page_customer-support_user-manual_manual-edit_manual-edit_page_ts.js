(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_customer-support_user-manual_manual-edit_manual-edit_page_ts"],{

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

/***/ 37218:
/*!***********************************************************************************!*\
  !*** ./src/app/page/customer-support/user-manual/manual-edit/manual-edit.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManualUpdateForm": () => (/* binding */ ManualUpdateForm),
/* harmony export */   "ManualEditPage": () => (/* binding */ ManualEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_manual_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./manual-edit.page.html */ 22775);
/* harmony import */ var _manual_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manual-edit.page.scss */ 19764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ 92340);















class ManualUpdateForm {
    constructor() {
        this.ctgo_manual_ids = []; // 구분 ID
        this.manual_id = null; // 사용자 매뉴얼 ID
        this.pin_state = 0; // 상단 고정
        this.manual_title = null; // 제목
        this.manual_text = null; // 내용
        this.manual_file = []; // FILE
        this.manual_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__.FileJson(); // JSON
    }
}
let ManualEditPage = class ManualEditPage {
    constructor(el, connect, nav, date, user, regex, promise, toast, _modal, alert, changeDetector) {
        this.el = el;
        this.connect = connect;
        this.nav = nav;
        this.date = date;
        this.user = user;
        this.regex = regex;
        this.promise = promise;
        this.toast = toast;
        this._modal = _modal;
        this.alert = alert;
        this.changeDetector = changeDetector;
        this.form = new ManualUpdateForm();
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.Validator(new ManualUpdateForm()).validator;
    }
    ngOnInit() {
        if (this.manual_id) {
            this.form.manual_id = this.manual_id;
            this.get();
        }
        else {
            const userData = this.user.userData;
            this.form.create_date = this.date.today();
            this.form.update_date = this.form.create_date;
            this.form.create_user_name = userData.user_name;
            this.form.company_name = userData.belong_data.company_name;
        }
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.test.core.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_11__.environment.test.UserManual.test)
                return;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            el.querySelector('[name=ctgo_manual_ids]').dispatchEvent(new Event('click'));
            yield this.promise.wait();
            el.querySelector('[name=pin_state]').dispatchEvent(new CustomEvent('click'));
            el.querySelector('[name=manual_title]').dispatchEvent(new CustomEvent('setValue', { detail: this.regex.random.id('테스트 타이틀') }));
            el.querySelector('[name=manual_text]').dispatchEvent(new CustomEvent('setValue', { detail: `<p>${this.regex.random.id('테스트 내용', 50)}</p>\n<p>test end</p>` }));
            yield this.promise.wait();
            const toast = yield this.toast.present({ color: 'warning', message: '파일을 업로드 테스트 대기 10초', duration: 10000, buttons: [{ text: '완료' }] });
            yield toast.onDidDismiss();
            el.querySelector('[name=submit]').dispatchEvent(new Event('click'));
        });
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/support/manual/get', {
                manual_id: this.form.manual_id
            }, {
                parse: ['ctgo_manual_ids', 'manual_file_data', 'manual_ctgo_data']
            });
            if (res.rsCode === 0) {
                this.form = Object.assign(Object.assign({}, this.form), res.rsObj);
            }
            else {
                this.connect.error('error', res);
            }
        });
    }
    insert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.menualText.update();
            if (!this.valid())
                return;
            this.res = yield this.connect.run('/support/manual/insert', this.form, {
                loading: true
            });
            if (this.res.rsCode === 0) {
                this._modal.dismiss(true);
            }
        });
    }
    update() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.menualText.update();
            if (!this.valid())
                return;
            this.res = yield this.connect.run('/support/manual/update', this.form, {
                loading: true
            });
            if (this.res.rsCode === 0) {
                this._modal.dismiss(true);
            }
        });
    }
    remove() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.alert.present({
                header: '사용자 매뉴얼 삭제',
                message: '사용자 매뉴얼을 삭제하시겠습니까?',
                buttons: [
                    { text: '취소' },
                    { text: '삭제', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/support/manual/delete', {
                                manual_ids: [this.form.manual_id]
                            }, {
                                loading: true
                            });
                            if (res.rsCode === 0) {
                                this._modal.dismiss(true);
                            }
                            else {
                                this.toast.present({ color: 'warning', message: res.rsMsg });
                            }
                        }) }
                ]
            });
        });
    }
    valid() {
        var _a;
        this.validator.manual_id = { valid: true };
        this.validator.ctgo_manual_ids = { valid: true };
        if (!this.form.manual_title)
            this.validator.manual_title = { message: '제목을 입력해주세요.', valid: false };
        else
            this.validator.manual_title = { valid: true };
        if (!this.form.manual_text)
            this.validator.manual_text = { message: '내용을 입력해주세요.', valid: false };
        else
            this.validator.manual_text = { valid: true };
        this.validator.manual_file_data = { valid: true };
        this.validator.manual_file = { valid: true };
        this.validator.manual_json = { valid: true };
        this.validator.create_user_id = { valid: true };
        this.validator.create_user_name = { valid: true };
        this.validator.create_date = { valid: true };
        this.validator.company_id = { valid: true };
        this.validator.pin_state = { valid: true };
        this.validator.manual_views = { valid: true };
        this.validator.update_user_id = { valid: true };
        this.validator.update_user_name = { valid: true };
        this.validator.update_date = { valid: true };
        for (let key in this.validator) {
            if (!((_a = this.validator[key]) === null || _a === void 0 ? void 0 : _a.valid))
                return false;
        }
        return true;
    }
};
ManualEditPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ElementRef },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_6__.NavService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_8__.DateService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_10__.RegexService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_9__.PromiseService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef }
];
ManualEditPage.propDecorators = {
    menualText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['menualText',] }],
    manual_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }]
};
ManualEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-manual-edit',
        template: _raw_loader_manual_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_manual_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ManualEditPage);



/***/ }),

/***/ 19764:
/*!*************************************************************************************!*\
  !*** ./src/app/page/customer-support/user-manual/manual-edit/manual-edit.page.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW51YWwtZWRpdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 22775:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/customer-support/user-manual/manual-edit/manual-edit.page.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>사용자 매뉴얼 {{ form.manual_id ? '수정' : '등록' }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h4>사용자 매뉴얼</h4>\n  <app-row mobileBreak>\n    <app-col>\n      <app-input label=\"업체\" [value]=\"form.company_name\" [disabled]=\"true\"></app-input>\n    </app-col>\n    <app-col>\n      <app-input *ngIf=\"form.create_date === form.update_date; else tempUpdateUserName\" [disabled]=\"true\" label=\"작성자\" [value]=\"form.create_user_name\"></app-input>\n      <ng-template #tempUpdateUserName>\n        <app-input [disabled]=\"true\" label=\"작성자/수정자\" [value]=\"form.create_user_name + ' / ' + form.update_user_name\"></app-input>\n      </ng-template>\n    </app-col>\n   </app-row>\n   <app-row mobileBreak>\n    <app-col>\n      <app-input *ngIf=\"form.create_date === form.update_date; else tempUpdateDate\" [disabled]=\"true\" label=\"작성일\" [value]=\"form.create_date\"></app-input>\n      <ng-template #tempUpdateDate>\n        <app-input [disabled]=\"true\" label=\"작성일/수정일\" [value]=\"form.create_date + ' / ' + form.update_date\"></app-input>\n      </ng-template>\n    </app-col>\n    <app-col>\n      <app-select-manual name=\"ctgo_manual_ids\" [(ngModel)]=\"form.ctgo_manual_ids\" [multiple]=\"true\"></app-select-manual>\n    </app-col>\n  </app-row>\n  <app-row>\n    <app-col>\n      <app-input name=\"manual_title\" label=\"제목\" \n      [color]=\"validator.manual_title?.valid === false && 'warning'\"\n      [(ngModel)]=\"form.manual_title\" [required]=\"true\">\n        <app-check name=\"pin_state\" [(ngModel)]=\"form.pin_state\" [on]=\"1\" [off]=\"0\">상단고정</app-check>\n      </app-input>\n      <app-input-caption *ngIf=\"validator.manual_title?.valid === false\">{{ validator.manual_title.message }}</app-input-caption>\n    </app-col>\n  </app-row>\n  <app-row>\n    <app-col>\n      <app-smartedit #menualText name=\"manual_text\" placeholder=\"내용을 입력하세요.\" \n      [color]=\"validator.manual_title?.valid === false && 'warning'\"\n      [(ngModel)]=\"form.manual_text\"></app-smartedit>\n      <app-input-caption *ngIf=\"validator.manual_title?.valid === false\">{{ validator.manual_title.message }}</app-input-caption>\n    </app-col>\n  </app-row>\n  <h4>\n    <app-row>\n      <app-col>\n        첨부자료\n      </app-col>\n      <app-col size=\"auto\">\n        <app-button>\n          <app-file\n          [(ngModel)]=\"form.manual_file_data\"\n          view_type=\"MANUAL\"\n          [file]=\"form.manual_file\"\n          [file_json]=\"form.manual_json\" [multiple]=\"true\"></app-file>\n          추가\n        </app-button>\n      </app-col>\n    </app-row>\n  </h4>\n  <app-file-preview *ngFor=\"let futItem of form.manual_file_data; let i = index;\" [futItem]=\"futItem\" (buttonClick)=\"form.manual_file_data.splice(i, 1)\"></app-file-preview>\n</ion-content>\n<app-button-footer *ngIf=\"form.manual_id; else tempAdd\">\n  <app-card *ngIf=\"res && res.rsCode\" color=\"warning\" slot=\"top\">{{ res.rsMsg }}</app-card>\n  <app-button name=\"remove\" (click)=\"remove()\">삭제</app-button>\n  <app-button name=\"submit\" (click)=\"update()\">수정</app-button>\n  <ng-container >\n  </ng-container>\n</app-button-footer>\n<ng-template #tempAdd>\n  <app-button-footer>\n    <app-card *ngIf=\"res && res.rsCode\" color=\"warning\" slot=\"top\">{{ res.rsMsg }}</app-card>\n    <app-button name=\"submit\" (click)=\"insert()\">저장</app-button>\n  </app-button-footer>\n</ng-template>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_customer-support_user-manual_manual-edit_manual-edit_page_ts.js.map