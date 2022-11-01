(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_basic_service_util_date_service_ts-src_app_page_main_admin_monitor_main-sub-ad-3d794a"],{

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

/***/ 72765:
/*!*********************************************************************************!*\
  !*** ./src/app/page/main/admin/monitor/monitor-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainSubAdminPageRoutingModule": () => (/* binding */ MainSubAdminPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _main_sub_admin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor.page */ 76118);




const routes = [
    {
        path: '',
        component: _main_sub_admin_page__WEBPACK_IMPORTED_MODULE_0__.MainSubAdminPage
    }
];
let MainSubAdminPageRoutingModule = class MainSubAdminPageRoutingModule {
};
MainSubAdminPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainSubAdminPageRoutingModule);



/***/ }),

/***/ 90563:
/*!*************************************************************************!*\
  !*** ./src/app/page/main/admin/monitor/monitor.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainSubAdminPageModule": () => (/* binding */ MainSubAdminPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _main_sub_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor-routing.module */ 72765);
/* harmony import */ var _main_sub_admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitor.page */ 76118);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let MainSubAdminPageModule = class MainSubAdminPageModule {
};
MainSubAdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _main_sub_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainSubAdminPageRoutingModule
        ],
        declarations: [_main_sub_admin_page__WEBPACK_IMPORTED_MODULE_1__.MainSubAdminPage]
    })
], MainSubAdminPageModule);



/***/ }),

/***/ 76118:
/*!***********************************************************************!*\
  !*** ./src/app/page/main/admin/monitor/monitor.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainSubAdminPage": () => (/* binding */ MainSubAdminPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_main_sub_admin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./monitor.page.html */ 8039);
/* harmony import */ var _main_sub_admin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitor.page.scss */ 75453);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _notice_board_notice_notice_edit_notice_edit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../notice-board/notice/notice-edit/notice-edit.page */ 45877);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/nav.service */ 69914);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_service_logout_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/logout.service */ 68861);













let MainSubAdminPage = class MainSubAdminPage {
    constructor(el, connect, alert, nav, promise, logout, user, modal) {
        this.el = el;
        this.connect = connect;
        this.alert = alert;
        this.nav = nav;
        this.promise = promise;
        this.logout = logout;
        this.user = user;
        this.modal = modal;
        this.form = {
            project_id: this.user.userData.belong_data.project_id,
            master_company_id: this.user.userData.user_type === 'SUPER' ? this.user.userData.belong_data.master_company_id : 0,
            company_id: this.user.userData.belong_data.company_id,
            ctgo_job_position_name: '',
            contract_end_date: '-',
            contract_start_date: '-',
            admin_count: 0,
            worker_count: 0,
            alarm_count: 0,
            approval_count: 0,
            notice_count: 0,
            safetymeeting_count: 0, // 안읽은 회의혹
            // msds_count: 0, // 안읽은 MSDS
        };
        this.weather = {
            weather_speed: "",
            weather_id: "",
            weather_temp: "",
            avg_temp: 0,
            weather_icon: "",
            create_date: "",
            weather_main: "",
            weather_humidity: "",
            weather_rain: "",
            weather_snow: "",
            high_weather_temp: "",
            low_weather_temp: "" // 최저 기온(온도),
        };
        this.dust = {
            dataTime: "",
            grade_name: "",
            icon_url: "",
            pm10Value: 0,
            pm25Grade: 0
        };
        this.regional_list = []; // 지역본부
        this.business_list = []; // 사업본부
        this.alarm_list = []; // 알림함
        this.approval_list = []; // 미결함
        this.notice_list = []; // 공지사항
        this.safetymeeting_list = []; // 회의록
        this.msds_list = []; // 회의록
        this.project_address = ''; // 현장 주소
        this.education = {
            hire_data: { good: 0, excess: 0, necessary: 0 },
            regular_data: { good: 0, excess: 0, necessary: 0 },
            special_data: { good: 0, excess: 0, necessary: 0 }
        };
        if (this.user.userData.user_type !== 'COMPANY') {
            this.nav.navigateRoot('/main-admin');
        }
    }
    ngOnInit() {
        this.getEtc();
        this.getBoard();
        this.getDust();
        this.getWeather();
        this.getProjectAddress();
        // setInterval(() => {
        //   this.getDust();
        //   this.getWeather();
        // }, 1800000);
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.test.core.test)
                return;
            if (!(yield this.testUserManual()))
                return;
            /* this.alert.present({
              header: '테스트 완료',
              message: '테스트 완료'
            }); */
        });
    }
    testUserManual() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.test.UserManual.test)
                return true;
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.test.UserManual.done)
                return true;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            el.querySelector('[name=menu_button]').dispatchEvent(new Event('click'));
            yield this.promise.wait();
            document.querySelector('[name=button_manual-list]').dispatchEvent(new Event('click'));
            return true;
        });
    }
    adminReset() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // if(this.user.userData.user_type === 'LH') this.getCtgo();
            this.getEtc();
            this.getBoard();
            this.getDust();
            this.getWeather();
            this.user.userData.belong_data.project_id = this.form.project_id;
        });
    }
    /**
     * @function getEtc(): 착공일/준공일, 가입대기
     */
    getEtc() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getContractDate();
            yield this.getWaiting();
            yield this.getJobPosition();
            yield this.getProjectAddress();
        });
    }
    /**
     * @function getBoard(): 게시판 가져오기
     */
    getBoard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getAlarm();
            yield this.getApproval();
            yield this.getNotice();
            yield this.getSafrtyMeeting();
            yield this.getMsds();
            yield this.getEducation();
        });
    }
    /**
     * @function getContractDate(): 현장 착공일/준공일 가져오기
     */
    getContractDate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/category/certify/project/contract/date', this.form, {});
            switch (res.rsCode) {
                case 0:
                    this.form = Object.assign(Object.assign({}, this.form), res.rsObj);
                    break;
                default:
                    //  this.toast.present({ color: 'warning', message: res.rsMsg });
                    break;
            }
        });
    }
    /**
     * @function getWaiting(): 가입대기 가져오기
     */
    getWaiting() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/main/etc/waiting_master', this.form, {});
            switch (res.rsCode) {
                case 0:
                    this.form = Object.assign(Object.assign({}, this.form), res.rsObj);
                    break;
                default:
                    // this.toast.present({ color: 'warning', message: res.rsMsg });
                    break;
            }
        });
    }
    /**
     * @function getAlarm(): 알림함 가져오기
     */
    getAlarm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/main/board/notify', this.form, {});
            switch (res.rsCode) {
                case 0:
                    this.alarm_list = res.rsMap.length > 4 ? res.rsMap.splice(0, 4) : res.rsMap;
                    this.form.alarm_count = res.rsObj.read_count;
                    break;
                default:
                    this.alarm_list = [];
                    this.form.alarm_count = 0;
                    // this.toast.present({ color: 'warning', message: res.rsMsg });
                    break;
            }
        });
    }
    /**
     * @function getApproval(): 미결함 가져오기
     */
    getApproval() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/main/board/approval', this.form, {});
            switch (res.rsCode) {
                case 0:
                    this.approval_list = res.rsMap;
                    this.form.approval_count = res.rsObj.read_count;
                    break;
                default:
                    this.approval_list = [];
                    this.form.approval_count = 0;
                    // this.toast.present({ color: 'warning', message: res.rsMsg });
                    break;
            }
        });
    }
    /**
     * @function getNotice(): 공지사항 가져오기
     */
    getNotice() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/main/board/notice', this.form, {});
            switch (res.rsCode) {
                case 0:
                    this.notice_list = res.rsMap;
                    this.form.notice_count = ((_a = res.rsObj) === null || _a === void 0 ? void 0 : _a.read_count) || 0;
                    break;
                default:
                    this.notice_list = [];
                    this.form.notice_count = 0;
                    // this.toast.present({ color: 'warning', message: res.rsMsg });
                    break;
            }
        });
    }
    /**
     * @function getSafrtyMeeting(): 회의록 가져오기
     */
    getSafrtyMeeting() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/main/board/safetymeeting', this.form, {});
            switch (res.rsCode) {
                case 0:
                    this.safetymeeting_list = res.rsMap;
                    this.form.safetymeeting_count = ((_a = res.rsObj) === null || _a === void 0 ? void 0 : _a.read_count) || 0;
                    break;
                default:
                    this.safetymeeting_list = [];
                    this.form.safetymeeting_count = 0;
                    // this.toast.present({ color: 'warning', message: res.rsMsg });
                    break;
            }
        });
    }
    /**
     * @function getMsds(): MSDS 가져오기
     */
    getMsds() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/main/board/msds', this.form, {});
            switch (res.rsCode) {
                case 0:
                    this.msds_list = res.rsMap;
                    // this.form.msds_count = res.rsObj.read_count;
                    break;
                default:
                    this.msds_list = [];
                    // this.toast.present({ color: 'warning', message: res.rsMsg });
                    break;
            }
        });
    }
    /**
     * @function getEducation(): 교육이수현황 가져오기
     */
    getEducation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/main/board/education', this.form, {
                parse: [
                    'hire_data', 'regular_data', 'special_data'
                ]
            });
            switch (res.rsCode) {
                case 0:
                    this.education = res.rsObj;
                    break;
                default:
                    // this.toast.present({ color: 'warning', message: res.rsMsg });
                    break;
            }
        });
    }
    /**
     * @function getJobPosition(): 내 직위 가져오기
     */
    getJobPosition() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/category/certify/my/jobposition', this.form, {});
            switch (res.rsCode) {
                case 0:
                    this.form.ctgo_job_position_name = res.rsObj.ctgo_job_position_name;
                    break;
                default:
                    // this.toast.present({ color: 'warning', message: res.rsMsg });
                    break;
            }
        });
    }
    /**
     * @function getProjectAddress(): 현장 주소 가져오기
     */
    getProjectAddress() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/project/detail', this.form);
            switch (res.rsCode) {
                case 0:
                    this.project_address = res.rsObj.project_address;
                    break;
                default:
                    // this.toast.present({ color: 'warning', message: res.rsMsg });
                    break;
            }
        });
    }
    getWeather() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            //날씨
            const res = yield this.connect.run('/weather/get', null, {});
            switch (res.rsCode) {
                case 0:
                    this.weather = res.rsObj;
                    break;
            }
        });
    }
    getDust() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/dust/get', null, {});
            switch (res.rsCode) {
                case 0:
                    this.dust = res.rsObj;
                    break;
            }
        });
    }
    alram() {
    }
    router(title, detail = null) {
        console.log("asdfasdf");
        switch (title) {
            case '':
                this.alert.present({
                    message: '해당 기능은 아직 준비중인 기능입니다.',
                    header: '준비중',
                    // img: 'assets/img/logo.svg'
                });
                break;
            case '미결함':
                this.nav.navigateRoot('/confirm-pending-list');
                break;
            case '알림함':
                this.nav.navigateRoot('/notify-list');
                break;
            case '공지사항':
                if (detail)
                    this.nav.navigateRoot('/notice-list', { state: { notice_id: detail.notice_id } });
                else
                    this.nav.navigateRoot('/notice-list');
                break;
            case '회의록':
                this.nav.navigateRoot('/minutes-list');
                break;
            case '사용자메뉴얼':
                this.nav.navigateRoot('/manual-list');
                break;
            case '시스템이용약관':
                this.nav.navigateRoot('/use-terms');
                break;
            case '개인정보처리방침':
                this.nav.navigateRoot('/privacy');
                break;
            case '교육이력':
                this.nav.navigateRoot('/safety-education-list');
                break;
            case '위험성평가':
                this.nav.navigateRoot('/risk-list');
                break;
            case '마이페이지':
                this.nav.navigateRoot('/my-page');
                break;
            case 'MSDS':
                if (detail)
                    this.nav.navigateRoot('/msds-list', { state: { msds_id: detail.msds_id } });
                else
                    this.nav.navigateRoot('/msds-list');
                break;
            case '교육현황':
                this.nav.navigateRoot('/safety-education-list');
                break;
            case '관리자가입대기':
                this.nav.navigateRoot('/partner-approval-list');
                break;
            case '작업자가입대기':
                this.nav.navigateRoot('/worker-approval-list');
                break;
            case '문의하기':
                this.edit(54);
                break;
        }
    }
    edit(notice_id = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _notice_board_notice_notice_edit_notice_edit_page__WEBPACK_IMPORTED_MODULE_2__.NoticeEditPage,
                componentProps: {
                    notice_id: notice_id || 0
                }
            });
            modal.present();
        });
    }
};
MainSubAdminPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_4__.ConnectService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: src_app_basic_service_ionic_nav_service__WEBPACK_IMPORTED_MODULE_6__.NavService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_7__.PromiseService },
    { type: src_app_service_logout_service__WEBPACK_IMPORTED_MODULE_9__.LogoutService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController }
];
MainSubAdminPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-monitor',
        template: _raw_loader_main_sub_admin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_main_sub_admin_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MainSubAdminPage);



/***/ }),

/***/ 75453:
/*!*************************************************************************!*\
  !*** ./src/app/page/main/admin/monitor/monitor.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\n\n.container {\n  max-width: 1920px;\n  width: 100%;\n  margin: auto;\n}\n\n.container .contaienr-left-col {\n  width: 420px;\n  flex: 0 0 420px;\n}\n\n.container .contaienr-right-col {\n  width: 420px;\n  flex: 0 0 420px;\n}\n\n@media screen and (max-width: 1199px) {\n  .container {\n    max-width: 768px;\n  }\n  .mobileBreak {\n    display: block;\n  }\n  .mobileBreak > app-col {\n    width: 100% !important;\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n    margin-top: 12px;\n    margin-bottom: 12px;\n  }\n  .mobileBreak app-card {\n    height: 100% !important;\n  }\n}\n\n.alarm-card .card-category-col {\n  width: 80px;\n  flex: 0 0 80px;\n}\n\n.alarm-card .card-title-col {\n  width: calc(100% - 80px);\n  flex: 0 0 calc(100% - 80px);\n}\n\n.approval-card .card-category-col {\n  width: 80px;\n  flex: 0 0 80px;\n}\n\n.approval-card .card-title-col {\n  width: calc(100% - 80px);\n  flex: 0 0 calc(100% - 80px);\n}\n\n:host ion-icon {\n  cursor: pointer;\n}\n\n:host h5 {\n  color: var(--ion-color-fourth);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n:host h6 {\n  color: var(--ion-color-fourth);\n  font-weight: bold;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.button-edit {\n  background-color: var(--ion-color-secondary);\n  color: black;\n}\n\n.chip-color {\n  background-color: var(--ion-color-danger-tint);\n}\n\n.wheather {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  height: 100px;\n}\n\n.title {\n  text-align: center;\n}\n\n.ratio {\n  text-align: center;\n}\n\n.ratio .ratio-col {\n  padding: 0;\n  display: flex;\n  justify-content: center;\n}\n\n.card-flex {\n  height: 100%;\n}\n\n.card-flex ion-card-content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.wheather-addr {\n  color: var(--ion-color-primary);\n}\n\n.card-warning {\n  background-color: var(--ion-color-warning-tint);\n}\n\n.pointer-class {\n  cursor: pointer;\n}\n\n.chip-width {\n  width: 100px;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tc3ViLWFkbWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFjO0VBQ2Qsc0JBQWlCO0FBQ3JCOztBQUVBO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2hCOztBQUpBO0VBS1EsWUFBWTtFQUNaLGVBQWU7QUFHdkI7O0FBVEE7RUFTUSxZQUFZO0VBQ1osZUFBZTtBQUl2Qjs7QUFDQTtFQUNJO0lBQ0ksZ0JBQWdCO0VBRXRCO0VBQUU7SUFDSSxjQUFjO0VBRXBCO0VBSEU7SUFHUSxzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBRzdCO0VBVkU7SUFVUSx1QkFBdUI7RUFHakM7QUFDRjs7QUFDQTtFQUVRLFdBQVc7RUFDWCxjQUFjO0FBQ3RCOztBQUpBO0VBTVEsd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUVuQzs7QUFDQTtFQUVRLFdBQVc7RUFDWCxjQUFjO0FBQ3RCOztBQUpBO0VBTVEsd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUVuQzs7QUFFQTtFQUVRLGVBQWU7QUFBdkI7O0FBRkE7RUFNUSw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFBL0I7O0FBVEE7RUFhUSw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQS9COztBQUlBO0VBQ0ksNENBQTRDO0VBQzVDLFlBQVk7QUFEaEI7O0FBSUE7RUFDSSw4Q0FBOEM7QUFEbEQ7O0FBSUE7RUFDSSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0FBRGpCOztBQUlBO0VBQ0ksa0JBQWtCO0FBRHRCOztBQUlBO0VBQ0ksa0JBQWtCO0FBRHRCOztBQUFBO0VBSVEsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7QUFBL0I7O0FBSUE7RUFDSSxZQUFZO0FBRGhCOztBQUFBO0VBSVEsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFBOUI7O0FBSUE7RUFDSSwrQkFBK0I7QUFEbkM7O0FBSUE7RUFDSSwrQ0FBK0M7QUFEbkQ7O0FBSUE7RUFDSSxlQUFlO0FBRG5COztBQUlBO0VBQ0ksWUFBWTtFQUNaLHVCQUF1QjtBQUQzQiIsImZpbGUiOiJtYWluLXN1Yi1hZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDE5MjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLmNvbnRhaWVuci1sZWZ0LWNvbCB7XG4gICAgICAgIHdpZHRoOiA0MjBweDtcbiAgICAgICAgZmxleDogMCAwIDQyMHB4O1xuICAgIH1cbiAgICAuY29udGFpZW5yLXJpZ2h0LWNvbCB7XG4gICAgICAgIHdpZHRoOiA0MjBweDtcbiAgICAgICAgZmxleDogMCAwIDQyMHB4O1xuICAgIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA3NjhweDtcbiAgICB9XG4gICAgLm1vYmlsZUJyZWFrIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgID5hcHAtY29sIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIGFwcC1jYXJkIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWxhcm0tY2FyZCB7XG4gICAgLmNhcmQtY2F0ZWdvcnktY29sIHtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGZsZXg6IDAgMCA4MHB4O1xuICAgIH1cbiAgICAuY2FyZC10aXRsZS1jb2wge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gICAgICAgIGZsZXg6IDAgMCBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgICB9XG59XG4uYXBwcm92YWwtY2FyZCB7XG4gICAgLmNhcmQtY2F0ZWdvcnktY29sIHtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGZsZXg6IDAgMCA4MHB4O1xuICAgIH1cbiAgICAuY2FyZC10aXRsZS1jb2wge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gICAgICAgIGZsZXg6IDAgMCBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgICB9XG59XG5cbjpob3N0IHtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBoNSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZm91cnRoKTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgaDYge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWZvdXJ0aCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG59XG5cbi5idXR0b24tZWRpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2hpcC1jb2xvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci10aW50KTtcbn1cblxuLndoZWF0aGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yYXRpbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLnJhdGlvLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbn1cblxuLmNhcmQtZmxleCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG5cbi53aGVhdGhlci1hZGRyIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uY2FyZC13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy10aW50KTtcbn1cblxuLnBvaW50ZXItY2xhc3Mge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoaXAtd2lkdGgge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ 8039:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/main/admin/monitor/monitor.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-admin></app-header-admin>\n\n<ion-content>\n  <div class=\"container\">\n  <app-row style=\"min-height: 724px; align-items: stretch;\" class=\"mobileBreak\">\n    <app-col class=\"contaienr-left-col\">\n      <app-card style=\"height:467px;  align-items: stretch;\">\n        <app-row>\n          <app-col>\n            <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\" (change)=\"adminReset()\"></app-select-scene>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-card>\n            <app-row>\n              <app-col style=\"text-align: center;\">\n                <h5>착공일</h5>\n                <p>{{ form.contract_start_date }}</p>\n              </app-col>\n              <app-col style=\"text-align: center;\">\n                <h5>준공일</h5>\n                <p>{{ form.contract_end_date }}</p>\n              </app-col>\n            </app-row>\n          </app-card>\n        </app-row>\n\n        <app-row style=\"text-align: center;\" class=\"pointer-class;\">\n          <app-col size=\"3\" (click)=\"router('')\">\n            <app-img style=\"width: 60%;\" src=\"assets/img/main/emergency-manage.svg\"></app-img>\n            <h5>비상알림</h5>\n          </app-col>\n          <app-col size=\"3\" (click)=\"router('')\">\n            <app-img style=\"width: 60%;\" src=\"assets/img/menu/ptw.svg\"></app-img>\n            <h5>위험 작업 허가</h5>\n          </app-col>\n          <app-col size=\"3\" (click)=\"router('교육결과보고')\">\n            <app-img style=\"width: 60%;\" src=\"assets/img/menu/education-result-report.svg\"></app-img>\n            <h5>교육 결과 보고</h5>\n          </app-col>\n          <app-col size=\"3\" (click)=\"router('위험성평가')\">\n            <app-img style=\"width: 60%;\" src=\"assets/img/menu/risk-evaluation-report.svg\"></app-img>\n            <h5>위험성 평가</h5>\n          </app-col>\n        </app-row>\n        <app-row style=\"text-align: center;\" class=\"pointer-class\">\n          <app-col size=\"3\" (click)=\"router('')\">\n            <app-img style=\"width: 60%;\" src=\"assets/img/menu/mileage.svg\"></app-img>\n            <h5>안전 마일리지</h5>\n          </app-col>\n          <app-col size=\"3\" (click)=\"router('')\">\n            <app-img style=\"width: 60%;\" src=\"assets/img/menu/general-incongruity.svg\"></app-img>\n            <h5>부적합 관리</h5>\n          </app-col>\n          <app-col size=\"3\" (click)=\"router('')\">\n            <app-img style=\"width: 60%;\" src=\"assets/img/menu/equipment-management.svg\"></app-img>\n            <h5>장비 관리</h5>\n          </app-col>\n          <app-col size=\"3\" (click)=\"router('')\">\n            <app-img style=\"width: 60%;\" src=\"assets/img/menu/tbm record.svg\"></app-img>           \n            <h5>TBM 일지</h5>\n          </app-col>\n        </app-row>\n        <app-row style=\"text-align: center;\" class=\"pointer-class\">\n          <app-col size=\"3\" (click)=\"router('교육현황')\">\n            <app-img style=\"width: 60%;\" src=\"assets/img/menu/education-career.svg\"></app-img>           \n            <h5>교육 현황</h5>\n          </app-col>\n          <app-col size=\"3\" (click)=\"router('')\">\n            <app-img style=\"width: 60%;\" src=\"assets/img/menu/general-check.svg\"></app-img>\n            <h5>점검 현황</h5>\n          </app-col>\n          <app-col size=\"3\" (click)=\"router('출역현황')\">\n            <app-img style=\"width: 60%;\" src=\"assets/img/menu/output.svg\"></app-img>           \n            <h5>출역 현황</h5>\n          </app-col>\n          <app-col size=\"3\" (click)=\"router('')\">\n            <app-img style=\"width: 60%;\" src=\"assets/img/main/plus.svg\"></app-img>           \n            <h5>추가</h5>\n          </app-col>\n        </app-row>\n      </app-card>\n      <!--  [blind]=\"true\" -->\n      <app-card style=\"height: 228px; align-items: stretch;\">\n        <ion-toolbar slot=\"top\" color=\"white\">\n          <app-row>\n            <app-col>\n              <h4>금일 비상상황 알림</h4>\n            </app-col>\n            <app-col (click)=\"router('')\" size=\"auto\">\n              <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n            </app-col>\n          </app-row>\n        </ion-toolbar>\n        <app-row>\n          <app-col>\n            <h5><b>[비상전파]</b> 혹서기 작업주의</h5>\n          </app-col>\n        </app-row>\n      </app-card>\n    </app-col>\n    <app-col>\n      <app-row style=\"height: 236px; align-items: stretch;\">\n        <app-col>\n          <app-card style=\"height: 100%;\" class=\"alarm-card\">\n            <ion-toolbar slot=\"top\" color=\"white\">\n              <app-row>\n                <app-col size=\"auto\">\n                  <h4>알림함</h4>\n                </app-col>\n                <app-col>\n                  <ion-badge color=\"medium\">{{ form.alarm_count }}</ion-badge>\n                </app-col>\n                <app-col (click)=\"router('알림함')\" size=\"auto\">\n                  <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                </app-col>\n              </app-row>\n            </ion-toolbar>\n            <app-row (click)=\"router('알림함')\" button *ngFor=\"let item of alarm_list\">\n              <app-col size=\"auto\">\n                <ion-chip color=\"warning\" class=\"chip-width\">{{ item.notify_head }}</ion-chip>\n              </app-col>\n              <app-col>\n                <h5>{{ item.notify_text_kr }}</h5>\n              </app-col>\n            </app-row>\n          </app-card>\n        </app-col> \n\n        <app-col>\n          <app-card  style=\"height: 100%;\" class=\"alarm-card\">\n            <ion-toolbar slot=\"top\" color=\"white\">\n              <app-row>\n                <app-col size=\"auto\">\n                  <h4>미결함</h4>\n                </app-col>\n                <app-col>\n                  <ion-badge color=\"medium\">{{ form.approval_count }}</ion-badge>\n                </app-col>\n                <app-col (click)=\"router('미결함')\" size=\"auto\">\n                  <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                </app-col>\n              </app-row>\n            </ion-toolbar>\n            <app-row (click)=\"router('미결함')\" button *ngFor=\"let item of approval_list\">\n              <app-col size=\"auto\">\n                <h6>{{ item.master_company_name }}</h6>\n              </app-col>\n              <app-col>\n                <h5>{{ item.ctgo_approval_module_name }}</h5>\n              </app-col>\n            </app-row>\n          </app-card>\n        </app-col>\n      </app-row>\n\n      <app-row style=\"height: 236px; align-items: stretch;\" >\n        <app-col  style=\"height: 100%;\">\n          <app-card  style=\"height: 100%;\">\n            <ion-toolbar slot=\"top\" color=\"white\">\n              <app-row>\n                <app-col size=\"auto\">\n                  <h4>공지사항</h4>\n                </app-col>\n                <app-col>\n                  <ion-badge color=\"medium\">{{ form.notice_count }}</ion-badge>\n                </app-col>\n                <app-col (click)=\"router('공지사항')\" size=\"auto\">\n                  <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                </app-col>\n              </app-row>\n            </ion-toolbar>\n            <app-row button *ngFor=\"let item of notice_list\" (click)=\"router('공지사항',item)\">\n              <app-col size=\"auto\">\n                <h6>{{ item.create_date }}</h6>\n              </app-col>\n              <app-col>\n                <h5>{{ item.notice_title }}</h5>\n              </app-col>\n            </app-row>\n          </app-card>\n        </app-col>\n        <app-col  style=\"height: 100%;\">\n          <app-card style=\"height: 100%;\">\n            <ion-toolbar slot=\"top\" color=\"white\">\n              <app-row>\n                <ion-col size=\"auto\">\n                  <h4>회의록</h4>\n                </ion-col>\n                <app-col>\n                  <ion-badge color=\"medium\">{{ form.safetymeeting_count }}</ion-badge>\n                </app-col>\n                <app-col (click)=\"router('회의록')\" size=\"auto\">\n                  <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                </app-col>\n              </app-row>\n            </ion-toolbar>\n            <app-row button *ngFor=\"let item of safetymeeting_list\" (click)=\"router('회의록')\">\n              <app-col size=\"auto\">  \n                <h6>{{ item.create_date }}</h6>\n              </app-col>\n              <app-col>\n                <h5>{{ item.safety_meeting_type }}</h5>\n              </app-col>\n            </app-row>\n          </app-card>\n        </app-col>\n      </app-row>\n      <app-row style=\"height: 236px; align-items: stretch;\">\n        <app-col style=\"height: 100%;\">\n          <app-card  style=\"height: 100%;\">\n            <ion-toolbar slot=\"top\" color=\"white\">\n              <app-row>\n                <ion-col size=\"auto\">\n                  <h4>MSDS</h4>\n                </ion-col>\n                <app-col>\n                  <!-- <ion-badge color=\"medium\">{{ form.msds_count }}</ion-badge> -->\n                </app-col>\n                <app-col (click)=\"router('MSDS')\" size=\"auto\">\n                  <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                </app-col>\n              </app-row>\n            </ion-toolbar>\n            <app-row button *ngFor=\"let item of msds_list\" (click)=\"router('MSDS', item)\">\n              <app-col size=\"auto\">  \n                <h6>{{ item.create_date }}</h6>\n              </app-col>\n              <app-col>\n                <h5><b>[{{ item.company_name }}]</b> {{ item.msds_title }}</h5>\n              </app-col>\n            </app-row>\n          </app-card>\n        </app-col>\n        <app-col  style=\"height: 100%;\">\n          <app-card  style=\"height: 100%;\">\n            <ion-toolbar slot=\"top\" color=\"white\">\n              <app-row>\n                <ion-col size=\"auto\">\n                  <h4>교육 이수 현황</h4>\n                </ion-col>\n                <app-col>\n                  <!-- <ion-chip color=\"medium\">3</ion-chip> -->\n                </app-col>\n                <app-col (click)=\"router('교육현황')\" size=\"auto\">\n                  <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                </app-col>\n              </app-row>\n            </ion-toolbar>\n            <app-row> \n              <app-col style=\"width: 30%;\"></app-col>\n              <app-col style=\"width: 22%;\">채용시</app-col>\n              <app-col style=\"width: 22%;\">정기</app-col>\n              <app-col style=\"width: 22%;\">특별</app-col>\n            </app-row>\n            <app-row style=\"background-color: var(--ion-color-medium-translucent); border-radius: 5px; margin-bottom: 10px; height:36px;\">\n              <app-col  style=\"width: 30%; padding-left: 10px;\"><h6>양호</h6></app-col>\n              <app-col  style=\"width: 22%;\"><h6>{{ education.hire_data.good ? education.hire_data.good : '-' }}</h6></app-col>\n              <app-col  style=\"width: 22%;\"><h6>{{ education.regular_data.good ? education.regular_data.good : '-' }}</h6></app-col>\n              <app-col  style=\"width: 22%;\"><h6>{{ education.special_data.good ? education.special_data.good : '-' }}</h6></app-col>\n            </app-row>\n            <app-row style=\"background-color: var(--ion-color-primary-translucent); border-radius: 5px; margin-bottom: 10px; height:36px;\">\n              <app-col  style=\"width: 30%; padding-left: 10px;\"><h6>필요</h6></app-col>\n              <app-col  style=\"width: 22%;\"><h6>{{ education.hire_data.necessary ? education.hire_data.necessary : '-' }}</h6></app-col>\n              <app-col  style=\"width: 22%;\"><h6>{{ education.regular_data.necessary ? education.regular_data.necessary : '-' }}</h6></app-col>\n              <app-col  style=\"width: 22%;\"><h6>{{ education.special_data.necessary ? education.special_data.necessary : '-' }}</h6></app-col>\n            </app-row>\n            <app-row style=\"background-color: var(--ion-color-warning-translucent); border-radius: 5px; height:36px;\">\n              <app-col  style=\"width: 30%; padding-left: 10px; padding-bottom: 6px;\"><h6 style=\"color:var(--ion-color-danger)\">기한초과</h6></app-col>\n              <app-col  style=\"width: 22%;\"><h6>{{ education.hire_data.excess ? education.hire_data.excess : '-' }}</h6></app-col>\n              <app-col  style=\"width: 22%;\"><h6>{{ education.regular_data.excess ? education.regular_data.excess : '-' }}</h6></app-col>\n              <app-col  style=\"width: 22%;\"><h6>{{ education.special_data.excess ? education.special_data.excess : '-' }}</h6></app-col>\n            </app-row>\n          </app-card>\n        </app-col>\n      </app-row>\n    </app-col>\n    <app-col class=\"contaienr-right-col\">\n      <app-card class=\"card-flex\"  style=\"height: calc(42% - 6px);\">\n        <!-- <div>\n          <app-row>\n            <app-col style=\"display: flex; align-items: center;\" routerLink=\"/my-page\">\n              <app-img style=\"width: 20%;\" src=\"assets/img/menu/mypage.svg\"></app-img>\n              <h5>마이페이지</h5>\n            </app-col>\n            <app-col size=\"auto\">\n              <ion-chip color=\"primary\">로그아웃</ion-chip>\n            </app-col>\n          </app-row>\n        </div> -->\n        <!-- <div>\n          <app-row style=\"margin: 10px; align-items: flex-start;justify-content: center;\">\n            <app-col size=\"auto\">\n              <app-avatar style=\"width: 100px; height: 100px;\" src=\"https://www.devmonster.co.kr/assets/img/logo.svg\">\n              </app-avatar>\n            </app-col>\n          </app-row>\n          <app-row style=\"justify-content: center;\">\n            <app-col size=\"auto\" style=\"text-align: center;\">\n              <h4 style=\"font-weight: 700;\">홍길동</h4>\n              <p>구일종합건설(주)</p>\n              <p>대표이사</p>\n            </app-col>\n          </app-row>\n        </div> -->\n       <div>\n          <app-row>\n            <app-col size=\"auto\" style=\"text-align: center;\">\n              <app-avatar style=\"width: 100px; height: 100px;\" [src]=\"user.userData.user_profile\">\n              </app-avatar>\n            </app-col>\n            <app-col size=\"auto\" style=\"text-align: left;\">\n              <h3 style=\"font-weight: 700;\">{{ user.userData.user_name }}</h3>\n              <p>{{ user.userData.belong_data.company_name }}</p>\n              <p>{{ form.ctgo_job_position_name }}</p>\n            </app-col>\n          </app-row>\n        \n        \n          <app-row>\n            <app-col size=\"auto\" style=\"margin-left: 110px;\">\n              <app-button color=\"secondary\" (click)=\"router('마이페이지')\">마이페이지</app-button>\n            </app-col>\n            <app-col>\n              <app-button color=\"secondary\" (click)=\"logout.logout()\">로그아웃</app-button>\n            </app-col>\n          </app-row>\n        </div>\n        <div style=\"flex: 1; margin-top: 30px; border-top: 1px solid var(--ion-color-step-100);\">\n          <app-card class=\"card-warning\">\n            <app-row>\n                <app-img src=\"assets/img/main/helmet1.svg\"></app-img>\n              <app-col>\n                <h6>관리자<br>가입 대기</h6>\n              </app-col>\n              <app-col size=\"auto\" style=\"cursor: pointer;\" (click)=\"router('관리자가입대기')\">\n                <h3><b>{{ form.admin_count }}</b></h3>\n              </app-col>\n              <app-img src=\"assets/img/main/helmet2.svg\" style=\"padding-left: 10px;\"></app-img>\n              <app-col>\n                <h6>작업자<br>가입 대기</h6>\n              </app-col>\n              <app-col size=\"auto\" style=\"cursor: pointer;\" (click)=\"router('작업자가입대기')\">\n                <h3><b>{{ form.worker_count }}</b></h3>\n              </app-col>\n            </app-row>\n          </app-card>\n          <!-- <app-card class=\"card-warning\">\n            <app-row>\n              <app-img src=\"assets/img/main/helmet2.svg\"></app-img>\n              <app-col>\n                <h6>감리 가입 대기</h6>\n              </app-col>\n              <app-col size=\"auto\">\n                <h3>8</h3>\n              </app-col>\n            </app-row>\n          </app-card> -->\n        </div>\n        </app-card>\n          <!-- //날씨 -->\n        <app-card class=\"card-flex\" style=\"height: 398px;\"> \n        <div>\n            <ion-toolbar slot=\"top\" color=\"white\">\n              <app-row>\n                <app-col>\n                  <h4>{{ project_address }}</h4>\n                </app-col>\n              </app-row>\n            </ion-toolbar>\n            <!--            \n              <app-row>\n                <app-col>\n                  <app-row>\n                    <app-col>\n                      <h5>최고기온</h5>\n                    </app-col>\n                    <app-col>\n                      <h4>{{ weather.high_weather_temp + \"&deg;C\" }}</h4>\n                    </app-col>\n                  </app-row>\n                  <app-row >\n                    <app-col class=\"wheather\" style=\"text-align: center;\">\n                      <h2>{{ weather.weather_temp + \"&deg;C\" }}</h2>\n                    </app-col>\n                  </app-row>\n                  <app-row>\n                    <app-col>\n                      <h5>최저기온</h5>\n                    </app-col>\n                    <app-col>\n                      <h4>{{ weather.low_weather_temp + \"&deg;C\" }}</h4>\n                    </app-col>\n                  </app-row>\n                </app-col>\n                <app-col>\n                  <app-img style=\"width: 100%;\" [src]=\"weather.weather_icon\"></app-img>\n                </app-col>\n              </app-row> -->\n            <app-row>\n              <app-col style=\"border-right: 1px solid var(--ion-color-step-100);\">\n                <app-row style=\"text-align: center; border-bottom: 1px solid var(--ion-color-step-100);\">\n                  <app-col>\n                    <h2>{{ weather.weather_temp }}&deg;C</h2>\n                  </app-col>\n                </app-row>\n                <app-row style=\"text-align: center;\">\n                  <app-col>\n                    <h5>최고기온</h5>\n                  </app-col>\n                  <app-col>\n                    <h3>{{ weather.high_weather_temp }}&deg;C</h3>\n                  </app-col>\n                </app-row>\n                <app-row style=\"text-align: center; border-top: 1px solid var(--ion-color-step-100);\">\n                  <app-col>\n                    <h5>최저기온</h5>\n                  </app-col>\n                  <app-col>\n                    <h3>{{ weather.low_weather_temp }}&deg;C</h3>\n                  </app-col>\n                </app-row>\n              </app-col>\n              <app-col style=\"text-align: center;\">\n                <!-- <app-img style=\"width: 100%;\" [src]=\"weather.weather_icon\"></app-img> -->\n                <app-img style=\"width: 80%;\" [src]=\"weather.weather_icon\"></app-img>\n              </app-col>\n            </app-row>\n            <app-row style=\"border-top: 1px solid var(--ion-color-step-100); text-align: center;\">\n              <app-col style=\"padding-left: 0; padding-right: 0;\">\n                <app-row class=\"title\">\n                  <app-col style=\"border-right: 1px solid var(--ion-color-step-100);\">\n                    <h5>강수량</h5>\n                  </app-col>\n                </app-row>\n                <app-row class=\"ratio\">\n                  <app-col style=\"padding: 0; border-right: 1px solid var(--ion-color-step-100);\">\n                    <h6>{{ weather.weather_rain !== '강수없음' ? weather.weather_rain + \"mm\" : weather.weather_rain}}</h6>\n                  </app-col>\n                </app-row>\n              </app-col>\n              <app-col style=\"padding-left: 0; padding-right: 0;\">\n                <app-row class=\"title\">\n                  <app-col style=\"border-right: 1px solid var(--ion-color-step-100);\">\n                    <h5>적설량</h5>\n                  </app-col>\n                </app-row>\n                <app-row class=\"ratio\">\n                  <app-col style=\"padding: 0; border-right: 1px solid var(--ion-color-step-100);\">\n                    <h6>{{ weather.weather_snow !== '적설없음' ? weather.weather_pty : '-' }}</h6>\n                  </app-col>\n                </app-row>\n              </app-col>\n              <app-col style=\"padding-left: 0; padding-right: 0;\">\n                <app-row class=\"title\">\n                  <app-col style=\"border-right: 1px solid var(--ion-color-step-100);\">\n                    <h5>최대풍속</h5>\n                  </app-col>\n                </app-row>\n                <app-row class=\"ratio\">\n                  <app-col style=\"padding: 0; border-right: 1px solid var(--ion-color-step-100);\">\n                    <h6>{{ weather.weather_speed + \"m/s\"}}</h6>\n                  </app-col>\n                </app-row>\n              </app-col>\n              <app-col style=\"padding-left: 0; padding-right: 0;\">\n                <app-row class=\"title\">\n                  <app-col>\n                    <h5>미세먼지</h5>\n                  </app-col>\n                </app-row>\n                <app-row class=\"ratio\">\n                  <app-col class=\"ratio-col\">\n                    <h6>{{ dust.grade_name}}</h6>\n                  </app-col>\n                </app-row>\n              </app-col>\n            </app-row>\n        </div>\n      </app-card>\n    </app-col>\n  </app-row>\n</div>\n</ion-content>\n<app-button-footer style=\"margin-top: 10px;\">\n  <app-row>\n    <app-col  size=\"auto\">\n      <app-logo></app-logo>\n    </app-col>\n    <app-col style=\"text-align: left;\">\n      2021 by LH Co.Ltd All rights reserved. <h5>Version:1.2.0</h5>\n    </app-col>\n    <app-col size=\"auto\" class=\"pointer-class\">\n      <h5><span (click)=\"router('문의하기')\" style=\"font-weight: 800;\">문의하기</span> | <span style=\"font-weight: 800;\" (click)=\"router('사용자메뉴얼')\">사용자 매뉴얼</span> | <span (click)=\"router('시스템이용약관')\">시스템 이용약관</span> |\n        <span (click)=\"router('개인정보처리방침')\">개인정보 처리방침</span> </h5>\n    </app-col>\n  </app-row>\n</app-button-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_basic_service_util_date_service_ts-src_app_page_main_admin_monitor_main-sub-ad-3d794a.js.map