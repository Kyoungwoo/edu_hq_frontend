(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_today-work_my-status-situation_worker-status-add_worker-status-add_module_ts"],{

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

/***/ 96099:
/*!***********************************************************************************************************!*\
  !*** ./src/app/page/today-work/my-status-situation/worker-status-add/worker-status-add-routing.module.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerStatusAddPageRoutingModule": () => (/* binding */ WorkerStatusAddPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _worker_status_add_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-status-add.page */ 4370);




const routes = [
    {
        path: '',
        component: _worker_status_add_page__WEBPACK_IMPORTED_MODULE_0__.WorkerStatusAddPage
    }
];
let WorkerStatusAddPageRoutingModule = class WorkerStatusAddPageRoutingModule {
};
WorkerStatusAddPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WorkerStatusAddPageRoutingModule);



/***/ }),

/***/ 18314:
/*!***************************************************************************************************!*\
  !*** ./src/app/page/today-work/my-status-situation/worker-status-add/worker-status-add.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerStatusAddPageModule": () => (/* binding */ WorkerStatusAddPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _worker_status_add_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-status-add-routing.module */ 96099);
/* harmony import */ var _worker_status_add_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker-status-add.page */ 4370);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let WorkerStatusAddPageModule = class WorkerStatusAddPageModule {
};
WorkerStatusAddPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _worker_status_add_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkerStatusAddPageRoutingModule
        ],
        declarations: [_worker_status_add_page__WEBPACK_IMPORTED_MODULE_1__.WorkerStatusAddPage]
    })
], WorkerStatusAddPageModule);



/***/ }),

/***/ 4370:
/*!*************************************************************************************************!*\
  !*** ./src/app/page/today-work/my-status-situation/worker-status-add/worker-status-add.page.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ctgoMemberItem": () => (/* binding */ ctgoMemberItem),
/* harmony export */   "WorkerStatusAddPage": () => (/* binding */ WorkerStatusAddPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_worker_status_add_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./worker-status-add.page.html */ 5881);
/* harmony import */ var _worker_status_add_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker-status-add.page.scss */ 95044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);











class ctgoMemberItem {
}
let WorkerStatusAddPage = class WorkerStatusAddPage {
    constructor(_modal, connect, user, alert, toast, date, languagePack) {
        this._modal = _modal;
        this.connect = connect;
        this.user = user;
        this.alert = alert;
        this.toast = toast;
        this.date = date;
        this.languagePack = languagePack;
        this.form = {
            // master_company_id: this.user.userData.belong_data.company_id,
            master_company_id: 0,
            project_id: 0,
            search_text: '',
            user_type: 'WORKER',
            area_risk_id: 0,
            area_bottom_id: 0,
            area_middle_id: 0,
            area_top_id: 0,
            insert_state: '',
            select_type: '',
            inout_datetime: '',
            inout_date: '',
            serial_type: '',
            user_ids: []
        };
        this.selectData = [];
    }
    ngOnInit() {
        this.form.select_type = this.select_type;
        this.form.project_id = this.project_id;
        this.form.master_company_id = this.master_company_id;
        this.form.insert_state = this.select_type;
        this.form.area_risk_id = this.areadata.area_risk_id ? this.areadata.area_risk_id : 0;
        console.log(this.method);
        if (this.method === 'gate')
            this.gateGet();
        else
            this.riskGet();
    }
    gateGet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.selectData = [];
            this.form.serial_type = '게이트';
            this.res = yield this.connect.run('/work_project/nfc_beacon/search_work_inout_gate/list', this.form);
            if (this.res.rsCode === 0) {
            }
            else {
                // this.toast.present({message:this.res.rsMsg, color:'warning'});
            }
        });
    }
    riskGet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.selectData = [];
            this.form.serial_type = '위험지역';
            this.res = yield this.connect.run('/work_project/nfc_beacon/search_work_inout_risk/list', this.form);
            if (this.res.rsCode === 0) {
            }
            else {
                // this.toast.present({message:this.res.rsMsg, color:'warning'});
            }
        });
    }
    selectItem(item) {
        item.checked = !item.checked;
        if (item.checked) {
            if (!this.selectData.includes(item))
                this.selectData.push(item);
        }
        else {
            const index = this.selectData.findIndex((data) => data === item);
            this.selectData.splice(index, 1);
        }
    }
    workerIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.form.user_ids = [];
            this.selectData.forEach(item => this.form.user_ids.push(item.user_id));
            if (!this.form.user_ids.length)
                return this.toast.present({ message: '입장할 근로자를 선택해주세요.', color: 'warning' });
            if (!this.form.inout_date)
                return this.toast.present({ message: '입장시간을 지정해주세요.', color: 'warning' });
            const { area_top_id, area_middle_id, area_bottom_id } = this.areadata;
            this.form.area_top_id = area_top_id || 0;
            this.form.area_middle_id = area_middle_id ? area_middle_id : 0;
            this.form.area_bottom_id = area_bottom_id ? area_bottom_id : 0;
            this.form.inout_datetime = this.date.today() + ' ' + this.form.inout_date;
            console.log('this.method - ', this.method);
            if (this.method === 'gate') {
                this.form.area_risk_id = 0;
                this.form.area_top_id = 0;
                this.form.area_middle_id = 0;
                this.form.area_bottom_id = 0;
            }
            const alert = yield this.alert.present({
                message: `선택한 인원을 ${this.form.insert_state === 'IN' ? '입장' : '퇴장'} 처리하시겠습니까?`,
                buttons: [
                    { text: '아니요' },
                    { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/work_project/nfc_beacon/manual/insups', this.form);
                            if (res.rsCode === 0) {
                                this.toast.present({ message: `${this.selectData.length}명이 ${this.form.insert_state === 'IN' ? '입장' : '퇴장'} 처리되었습니다.`, color: 'primary' });
                                this._modal.dismiss(this.form.area_risk_id);
                            }
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    deleteData(i, item) {
        this.res.rsMap.filter(data => { if (data === item)
            return data.checked = false; });
        this.selectData.splice(i, 1);
    }
    dismiss() {
        this._modal.dismiss();
    }
};
WorkerStatusAddPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__.DateService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_3__.LanguagePackService }
];
WorkerStatusAddPage.propDecorators = {
    project_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    select_type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    area_risk_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    master_company_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    areadata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    method: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
WorkerStatusAddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-worker-status-add',
        template: _raw_loader_worker_status_add_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_worker_status_add_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WorkerStatusAddPage);



/***/ }),

/***/ 95044:
/*!***************************************************************************************************!*\
  !*** ./src/app/page/today-work/my-status-situation/worker-status-add/worker-status-add.page.scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".active {\n  background-color: var(--ion-color-primary-translucent);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1zdGF0dXMtYWRkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHNEQUFzRDtBQUN2RCIsImZpbGUiOiJ3b3JrZXItc3RhdHVzLWFkZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdHJhbnNsdWNlbnQpO1xufSJdfQ== */");

/***/ }),

/***/ 5881:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/today-work/my-status-situation/worker-status-add/worker-status-add.page.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>회원 검색</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar color=\"white\">\n    <app-input-group>\n      <app-select label=\"유형\" name=\"select\" [(ngModel)]=\"form.user_type\">\n        <app-select-option value=\"COMPANY\">관리자</app-select-option>\n        <app-select-option value=\"WORKER\">{{ languagePack.getText('작업자') }}</app-select-option>\n      </app-select>\n      <app-input name=\"with img\" [label]=\"languagePack.getText('검색어')\" [(ngModel)]=\"this.form.search_text\" [placeholder]=\"languagePack.getText('검색어를 입력하세요')\">\n        <app-img (click)=\"area_risk_id ? riskGet() : gateGet()\" name=\"search\"></app-img>\n      </app-input>\n    </app-input-group>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-card [button]=\"true\" *ngFor=\"let item of res?.rsMap let i = index\" [color]=\"item.checked ? 'secondary':'white'\" (click)=\"selectItem(item)\">\n    <app-row>\n      <app-col size=\"auto\">\n      </app-col>\n      <app-col>\n        <h5>{{ item.user_name}}</h5>\n        <p>{{ item.company_name }}/{{ item.ctgo_job_position_name }}/{{ item.ctgo_safe_job_name }}</p>\n      </app-col>\n    </app-row>\n  </app-card>\n</ion-content>\n<app-card style=\"min-height: 50px;\">\n  <app-row>\n    <app-col>\n      <h6>현재 입장 처리가 되어있지 않은 근로자만 조회됩니다.</h6>\n    </app-col>\n  </app-row>\n  <div style=\"height: 100px; overflow: auto;\">\n    <app-row style=\"flex-wrap: wrap;\">\n      <app-col size=\"auto\" *ngFor=\"let name of selectData let index  = index\" (click)=\"deleteData(index,name)\">\n        <ion-chip style=\"margin-top: 3px; margin-left: 0; margin-right: 3px;\" color=\"primary\" >{{ name.user_name }}\n          <ion-icon name=\"close-outline\"></ion-icon>\n        </ion-chip>\n      </app-col>\n    </app-row>\n  </div>\n</app-card>\n<app-datetime [label]=\"select_type === 'IN' ? '입장시간':'퇴장시간'\" \n[(ngModel)]=\"form.inout_date\">\n</app-datetime>\n<app-button-footer>\n  <app-button (click)=\"dismiss()\">{{ languagePack.getText('취소') }}</app-button>\n  <app-button (click)=\"workerIn()\">{{ languagePack.getText('적용') }}</app-button>\n</app-button-footer>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_today-work_my-status-situation_worker-status-add_worker-status-add_module_ts.js.map