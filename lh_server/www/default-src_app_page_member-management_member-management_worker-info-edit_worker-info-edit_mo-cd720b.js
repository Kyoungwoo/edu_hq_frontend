(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_member-management_member-management_worker-info-edit_worker-info-edit_mo-cd720b"],{

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

/***/ 72984:
/*!**************************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-management/worker-info-edit/worker-info-edit-routing.module.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerInfoEditPageRoutingModule": () => (/* binding */ WorkerInfoEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _worker_info_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-info-edit.page */ 42590);




const routes = [
    {
        path: '',
        component: _worker_info_edit_page__WEBPACK_IMPORTED_MODULE_0__.WorkerInfoEditPage
    }
];
let WorkerInfoEditPageRoutingModule = class WorkerInfoEditPageRoutingModule {
};
WorkerInfoEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WorkerInfoEditPageRoutingModule);



/***/ }),

/***/ 16576:
/*!******************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-management/worker-info-edit/worker-info-edit.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerInfoEditPageModule": () => (/* binding */ WorkerInfoEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _worker_info_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-info-edit-routing.module */ 72984);
/* harmony import */ var _worker_info_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker-info-edit.page */ 42590);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let WorkerInfoEditPageModule = class WorkerInfoEditPageModule {
};
WorkerInfoEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _worker_info_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkerInfoEditPageRoutingModule
        ],
        declarations: [_worker_info_edit_page__WEBPACK_IMPORTED_MODULE_1__.WorkerInfoEditPage]
    })
], WorkerInfoEditPageModule);



/***/ }),

/***/ 42590:
/*!****************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-management/worker-info-edit/worker-info-edit.page.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicItem": () => (/* binding */ BasicItem),
/* harmony export */   "ApprovalItem": () => (/* binding */ ApprovalItem),
/* harmony export */   "HealthItem": () => (/* binding */ HealthItem),
/* harmony export */   "SafeEduItem": () => (/* binding */ SafeEduItem),
/* harmony export */   "SafeEduList": () => (/* binding */ SafeEduList),
/* harmony export */   "TotalMileageList": () => (/* binding */ TotalMileageList),
/* harmony export */   "MinusMileageList": () => (/* binding */ MinusMileageList),
/* harmony export */   "PlusMileageList": () => (/* binding */ PlusMileageList),
/* harmony export */   "WorkerInfoEditPage": () => (/* binding */ WorkerInfoEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_worker_info_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./worker-info-edit.page.html */ 6196);
/* harmony import */ var _worker_info_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker-info-edit.page.scss */ 81483);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/basic.animation */ 56503);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/ionic/loading.service */ 21501);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var _member_approval_wait_security_password_security_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../member-approval-wait/security-password/security-password.component */ 52346);














//기본정보
class BasicItem {
    constructor() {
        this.user_profile_file_data = [];
        this.file = [];
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_5__.FileJson();
    }
}
//소속정보
class ApprovalItem {
    constructor() {
        // safe_job_data: {
        //   user_id: number;
        //   ctgo_safe_job_id: number;
        //   user_safe_job_id: number;
        //   safe_job_start_date: string;
        //   ctgo_safe_job_name_kr: string;
        // }
        this.safe_job_file_data = [];
        this.certify_file_data = [];
        this.safe_job_data = [];
    }
}
// 건강문진
class HealthItem {
    constructor() {
        this.brain_cure_content = [];
        this.use_drugs_state = 0;
        this.covid_vaccine_state = 0;
        this.vomiting_state = 0;
        this.vomiting_content = '';
        this.covid_nineteen_state = 0;
        this.pain_head_state = 0;
        this.covid_nineteen_content = '';
        this.brain_cure_state = 0;
        this.health_terms_state = 0;
        this.etc_disease_state = 0;
        this.etc_disease_content = '';
        this.create_date = '';
        this.use_drugs_content = '';
        this.pain_head_content = '';
    }
}
//교육정보
class SafeEduItem {
    constructor() {
        this.user_safe_edu_file_data = [];
        this.file = []; // 파일
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_5__.FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증
    }
}
//교육이력 리스트
class SafeEduList {
    constructor() {
        this.ctgo_education_safe_type = '전체';
    }
}
//총 마일리지 리스트
class TotalMileageList {
}
// 마일리지 사용 리스트
class MinusMileageList {
}
//마일리지 적립 리스트
class PlusMileageList {
}
let WorkerInfoEditPage = class WorkerInfoEditPage {
    constructor(_modal_, connect, toast, user, alert, loading, alertController, date) {
        this._modal_ = _modal_;
        this.connect = connect;
        this.toast = toast;
        this.user = user;
        this.alert = alert;
        this.loading = loading;
        this.alertController = alertController;
        this.date = date;
        this.editable = false;
        this.menu = 1;
        this.form = {
            user_id: 0,
            approval_user_id: 0,
            session_company_id: 0,
            user_manage_session: ''
        };
        this.formBasic = new BasicItem();
        this.formApproval = new ApprovalItem();
        this.formHealth = new HealthItem();
        this.formSafeEdu = new SafeEduItem();
        this.formSafeList = {
            ctgo_education_safe_type: '전체',
            search_text: '',
            project_id: 0
        };
        this.formSafeJob = {
            ctgo_safe_job_id: 0,
            ctgo_safe_job_name_kr: '',
            safe_job_start_date: '',
            user_id: 0,
            user_safe_job_id: 0,
            approval_user_id: 0,
            session_company_id: 0,
            user_manage_session: '',
            project_id: 0
        };
        this.safeAdd = [{
                ctgo_safe_job_id: 0,
                ctgo_safe_job_name_kr: '',
                safe_job_start_date: '',
                user_id: 0,
                user_safe_job_id: 0,
                approval_user_id: 0,
                session_company_id: 0,
                user_manage_session: '',
                file: [],
                file_json: new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_5__.FileJson(),
                project_id: 0
            }];
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_4__.Validator(new BasicItem()).validator;
        this.permission = {
            mileage: false,
            approval: false //저장
        };
        this.work_end_data_state = false;
    }
    ngOnInit() {
        this.getPermission();
        this.get();
    }
    //권한
    getPermission() {
        if (this.user.userData.user_type === 'LH' || this.user.userData.user_role === 'PARTNER_HEAD') {
            this.permission.mileage = false;
        }
        else {
            this.permission.mileage = true;
        }
        if (this.user.userData.user_role === 'MASTER_HEAD' || this.user.userData.user_role === 'PARTNER_HEAD') {
            this.permission.approval = true;
        }
        else {
            this.permission.approval = false;
        }
        this.form.user_id = this.item.user_id;
        this.form;
        this.form.approval_user_id = this.item.user_id;
        this.form.session_company_id = this.user.userData.belong_data.company_id;
        this.form.user_manage_session = this.user.memberAuthToken;
    }
    //이메일
    overlapEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const { user_id, user_email } = this.formBasic;
            if (!user_email)
                return this.validator.user_email = null;
            if (!user_id)
                return this.validator.user_id = null;
            const res = yield this.connect.run('/usermanage/info/worker/overlap/email', { user_email, user_id });
            this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
            this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    //휴대폰
    overlapPhone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const { user_phone, user_id } = this.formBasic;
            if (!user_phone)
                return this.validator.user_phone = null;
            if (!user_id)
                return this.validator.user_id = null;
            const res = yield this.connect.run('/usermanage/info/worker/overlap/phone', { user_phone, user_id });
            this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
            this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    //교육이수증
    findFile(view_type) {
        return this.formSafeEdu.user_safe_edu_file_data.find(futItem => futItem.view_type === view_type);
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.present();
            yield Promise.all([
                this.getItem(),
                this.getBelong(),
                this.getSafeEdu(),
                this.getSafeEduList(),
                this.getHealth(),
                this.getTotalMileageList(),
                this.getPlusMileageList(),
                this.getMinusMileageList()
            ]);
            loading.dismiss();
        });
    }
    //기본정보
    getItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/info/worker/basic/detail', this.form, {
                parse: ['user_profile_file_data']
            });
            if (res.rsCode === 0) {
                this.formBasic = Object.assign(Object.assign({}, this.formBasic), res.rsObj);
            }
            else if (res.rsCode === 3008) {
                // 비밀번호 없거나 틀렸음
                this.getPassword();
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    //소속정보
    getBelong() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/info/worker/belong/detail', this.form, {
                parse: ['certify_data', 'certify_file_data', 'safe_job_data', 'safe_job_file_data']
            });
            if (res.rsCode === 0) {
                this.formApproval = Object.assign(Object.assign({}, this.formApproval), res.rsObj);
            }
            else if (res.rsCode === 3008) {
                // 비밀번호 없거나 틀렸음
                this.getPassword();
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    //교육이력 
    getSafeEdu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/info/worker/safeedu/detail', this.form, {
                parse: ['user_safe_edu_file_data']
            });
            if (res.rsCode === 0) {
                this.formSafeEdu = Object.assign(Object.assign({}, this.formSafeEdu), res.rsObj);
            }
            else if (res.rsCode === 3008) {
                // 비밀번호 없거나 틀렸음
                this.getPassword();
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    //비밀번호
    getPassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal_.create({
                component: _member_approval_wait_security_password_security_password_component__WEBPACK_IMPORTED_MODULE_10__.SecurityPasswordComponent,
                backdropDismiss: false,
                cssClass: "security-password-modal"
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.getItem();
            }
        });
    }
    // 저장(수정)
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (this.validator.user_phone) {
                if (!this.validator.user_phone.valid)
                    return this.toast.present({ message: this.validator.user_phone.message, color: 'warning' });
            }
            this.form.session_company_id = this.user.userData.belong_data.company_id;
            this.form.user_manage_session = this.user.memberAuthToken;
            this.form.approval_user_id = this.form.user_id;
            this.alert.present({
                message: '저장 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                            var _a;
                            yield Promise.all([
                                this.BasicSubmit(),
                                (_a = this.inputSafeJob) === null || _a === void 0 ? void 0 : _a.submit(),
                                this.inputCertify.submit(),
                                this.BelongSubmit(),
                                this.SafeEduSubmit()
                            ]);
                        })
                    }
                ]
            });
        });
    }
    //기본정보 수정
    BasicSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/info/worker/basic/update', Object.assign(Object.assign({}, this.form), this.formBasic), {});
            if (res.rsCode === 0) {
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    //소속정보 수정
    BelongSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (this.formApproval.construction_state === '출역종료') {
                if (!this.formApproval.construction_end_date)
                    return this.toast.present({ message: '출역종료 날짜를 선택해주세요.' });
            }
            const res = yield this.connect.run('/usermanage/info/worker/belong/update', Object.assign(Object.assign({}, this.form), this.formApproval), {});
            if (res.rsCode === 0) {
                this._modal_.dismiss('Y');
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    //교육 수정
    SafeEduSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/info/worker/safeedu/update', Object.assign(Object.assign({}, this.form), this.formSafeEdu), {});
            if (res.rsCode === 0) {
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    //교육이력 리스트불러오기
    getSafeEduList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.form.session_company_id = this.user.userData.belong_data.company_id;
            this.form.user_manage_session = this.user.memberAuthToken;
            this.formSafeList.project_id = this.user.userData.belong_data.project_id;
            this.form.approval_user_id = this.item.user_id;
            const res = yield this.connect.run('/usermanage/info/worker/edu/list', Object.assign(Object.assign({}, this.form), this.formSafeList), {
                loading: true
            });
            if (res.rsCode === 0) {
                this.resSafeList = Object.assign(Object.assign({}, res), this.resSafeList);
                // 정상
            }
            else if (res.rsCode === 1008) {
                // 데이터 없음
            }
        });
    }
    //건강문진
    getHealth() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.form.session_company_id = this.user.userData.belong_data.company_id;
            this.form.user_manage_session = this.user.memberAuthToken;
            this.form.approval_user_id = this.item.user_id;
            const res = yield this.connect.run('/usermanage/info/worker/health/get', this.form, {
                parse: ['brain_cure_content']
            });
            if (res.rsCode === 0) {
                this.formHealth = res.rsObj;
            }
        });
    }
    // 총 안전마일리지 목록
    getTotalMileageList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.form.session_company_id = this.user.userData.belong_data.company_id;
            this.form.user_manage_session = this.user.memberAuthToken;
            this.formSafeList.project_id = this.user.userData.belong_data.project_id;
            this.form.approval_user_id = this.item.user_id;
            const res = yield this.connect.run('/usermanage/info/worker/mileagetotal/list', Object.assign({}, this.form), {
                loading: true
            });
            if (res.rsCode === 0) {
                this.resTotalMileageList = res;
                // 정상
            }
            else if (res.rsCode === 1008) {
                // 데이터 없음
            }
        });
    }
    // 마일리지 적립 목록
    getPlusMileageList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.form.session_company_id = this.user.userData.belong_data.company_id;
            this.form.user_manage_session = this.user.memberAuthToken;
            this.formSafeList.project_id = this.user.userData.belong_data.project_id;
            this.form.approval_user_id = this.item.user_id;
            const res = yield this.connect.run('/usermanage/info/worker/mileageplus/list', Object.assign({}, this.form), {
                loading: true
            });
            if (res.rsCode === 0) {
                this.resPlusMileageList = res;
                console.log('resPlusMileageList - ', this.resPlusMileageList);
                // 정상
            }
            else if (res.rsCode === 1008) {
                // 데이터 없음
            }
        });
    }
    // 마일리지 사용 목록
    getMinusMileageList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.form.session_company_id = this.user.userData.belong_data.company_id;
            this.form.user_manage_session = this.user.memberAuthToken;
            this.formSafeList.project_id = this.user.userData.belong_data.project_id;
            this.form.approval_user_id = this.item.user_id;
            const res = yield this.connect.run('/usermanage/info/worker/mileageminus/list', Object.assign({}, this.form), {
                loading: true
            });
            if (res.rsCode === 0) {
                this.resMinusMileageList = res;
                // 정상
            }
            else if (res.rsCode === 1008) {
                // 데이터 없음
            }
        });
    }
    //마일리지 지급
    MileageInsert(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            // const modal = await this._modal_.create({
            //   component: MileagePopupComponent,
            //   componentProps: {
            //     company_id: this.formApproval.company_id,
            //     user_id: this.form.user_id
            //   },
            //   cssClass:"mileage-modal"
            // }); 
            // modal.present();
            // const { data } = await modal.onDidDismiss();
            // if(data) {
            //   this.get();
            // }
            let type_text = type === 'RECEIVE' ? '지급' : '사용';
            const alert = yield this.alertController.create({
                header: '마일리지 ' + type_text,
                cssClass: 'mileage-width-class',
                inputs: [
                    { type: 'number', label: '마일리지', name: 'ctgo_safe_mileage_point', placeholder: '마일리지(숫자)를 입력해주세요' },
                    { type: 'text', label: '사유', name: 'ctgo_safe_mileage', placeholder: '사유룰 입력해주세요' }
                ],
                buttons: [
                    { text: '닫기' },
                    {
                        text: '확인',
                        handler: (item) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                            console.log(item);
                            const form = {
                                ctgo_safe_mileage_point: item.ctgo_safe_mileage_point,
                                ctgo_safe_mileage_kr: item.ctgo_safe_mileage,
                                ctgo_safe_mileage_vi: item.ctgo_safe_mileage,
                                ctgo_safe_mileage_en: item.ctgo_safe_mileage,
                                ctgo_safe_mileage_ch: item.ctgo_safe_mileage,
                                ctgo_safe_mileage_state: type,
                                session_company_id: this.user.userData.belong_data.company_id,
                                user_manage_session: this.user.memberAuthToken,
                                user_id: this.form.user_id
                            };
                            if (!item.ctgo_safe_mileage_point)
                                return this.toast.present({ message: '마일리지(숫자만)를 입력해주세요.', color: 'warning' });
                            const res = yield this.connect.run('/usermanage/info/worker/mileage/insert', form);
                            if (res.rsCode === 0) {
                                // this._modal.dismiss('Y');
                                this.toast.present({ message: '마일리지가 ' + type_text + '되었습니다.', color: 'success' });
                                yield Promise.all([
                                    this.getTotalMileageList(),
                                    this.getPlusMileageList(),
                                    this.getMinusMileageList()
                                ]);
                            }
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    changeWorkState() {
        if (this.formApproval.construction_state === '출역중') {
            this.work_end_data_state = true;
            this.formApproval.construction_end_date = '';
        }
        else {
            this.work_end_data_state = false;
            if (!this.formApproval.construction_end_date)
                this.formApproval.construction_end_date = this.date.today();
        }
    }
};
WorkerInfoEditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_4__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_9__.ToastService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService },
    { type: src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_8__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_2__.DateService }
];
WorkerInfoEditPage.propDecorators = {
    inputSafeJob: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['inputSafeJob',] }],
    inputCertify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['inputCertify',] }],
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }]
};
WorkerInfoEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-worker-info-edit',
        template: _raw_loader_worker_info_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInAnimation],
        styles: [_worker_info_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WorkerInfoEditPage);



/***/ }),

/***/ 81483:
/*!******************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-management/worker-info-edit/worker-info-edit.page.scss ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-avatar {\n  margin-top: 30px !important;\n  margin-bottom: 20px !important;\n  width: 100px !important;\n  height: 100px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1pbmZvLWVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0FBQzVCIiwiZmlsZSI6Indvcmtlci1pbmZvLWVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWF2YXRhciB7XG4gICAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ 6196:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/member-management/member-management/worker-info-edit/worker-info-edit.page.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n    <ion-title>작업자 회원정보</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-container size=\"small\">\n    <app-card color=\"light\" [button]=\"false\">\n      <ion-toolbar slot=\"top\" color=\"white\">\n        <h5>회원정보</h5>\n      </ion-toolbar>\n      <form>\n        <app-avatar name=\"input-profile\" view_type=\"PROFILE\"\n          [(ngModel)]=\"formBasic.user_profile_file_data\" [file]=\"formBasic.file\" [file_json]=\"formBasic.file_json\"\n          [readonly]=\"!permission.approval\"></app-avatar>\n        <app-row>\n          <app-col>\n            <app-input name=\"input disabled\" label=\"아이디\" [(ngModel)]=\"formBasic.account_id\" [disabled]=\"true\"\n              [required]=\"true\">\n            </app-input>\n          </app-col>\n          <app-col>\n            <app-input name=\"input\" label=\"성명\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formBasic.user_name\"\n              [required]=\"true\"></app-input>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-calendar name=\"calendar\" label=\"생년월일\" [disabled]=\"!permission.approval\"\n              [(ngModel)]=\"formBasic.user_birth\" [required]=\"true\"></app-calendar>\n          </app-col>\n          <app-col>\n            <app-radio-input name=\"user_gender\" label=\"성별\" [disabled]=\"!permission.approval\"\n              [(ngModel)]=\"formBasic.user_gender\" [required]=\"true\">\n              <app-radio value=\"남\">남</app-radio>\n              <app-radio value=\"여\">여</app-radio>\n            </app-radio-input>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-input name=\"phone-number\" label=\"휴대폰\" [disabled]=\"!permission.approval\"\n              [(ngModel)]=\"formBasic.user_phone\" [required]=\"true\" (click)=\"overlapPhone()\">\n              중복확인\n            </app-input>\n            <app-input-caption *ngIf=\"validator.user_phone?.valid === false || validator.user_phone?.message == '성공'\"\n              [color]=\"validator.user_phone?.message == '성공' ? 'primary' : 'warning'\">{{ validator.user_phone?.message\n              == \"성공\" ? \"사용가능한 전화번호 입니다.\" : validator.user_phone?.message }}</app-input-caption>\n          </app-col>\n          <app-col>\n            <app-select-country name=\"국가\" name=\"ctgo_country_id\" [disabled]=\"!permission.approval\"\n              [color]=\"validator.ctgo_country_id?.valid === false && 'warning'\" [(ngModel)]=\"formBasic.ctgo_country_id\"\n              [required]=\"true\"></app-select-country>\n            <app-input-caption *ngIf=\"validator.ctgo_country_id?.valid === false\" color=\"warning\">{{\n              validator.ctgo_country_id?.message }}</app-input-caption>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <!-- {{ validator.user_email?.valid }} -->\n            <app-email name=\"user_email\" label=\"이메일\" [disabled]=\"!permission.approval\"\n              [(ngModel)]=\"formBasic.user_email\" [color]=\"validator.user_email?.valid === false && 'warning'\"\n              (delayKeyup)=\"overlapEmail()\" [(ngModel)]=\"formBasic.user_email\"></app-email>\n            <app-input-caption *ngIf=\"validator.user_email?.valid === false\" color=\"warning\">{{\n              validator.user_email?.message }}</app-input-caption>\n          </app-col>\n          <app-col></app-col>\n        </app-row>\n      </form>\n\n    </app-card>\n    <app-card color=\"light\">\n      <ion-toolbar slot=\"top\" color=\"white\">\n        <ion-segment color=\"primary\" [value]=\"menu\">\n          <ion-segment-button [value]=\"menu\" (click)=\"menu = 1\">소속 정보</ion-segment-button>\n          <ion-segment-button (click)=\"menu = 2\">건강 문진</ion-segment-button>\n          <ion-segment-button (click)=\"menu = 3\">교육 이력</ion-segment-button>\n          <!-- <ion-segment-button (click)=\"menu = 4\">근로 이력</ion-segment-button> -->\n          <ion-segment-button (click)=\"menu = 5\">안전 마일리지</ion-segment-button>\n        </ion-segment>\n      </ion-toolbar>\n\n      <div [style.display]=\"menu === 1 ? 'block' : 'none'\">\n        <app-row>\n          <app-col></app-col>\n          <app-col size=\"auto\" style=\"text-align: right;\">\n            <p>최종 수정일 : {{ formBasic.update_date }}</p>\n            <p *ngIf=\"formBasic.delete_state\">탈퇴일 : {{ formBasic.delete_date }}</p>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-input name=\"input disabled\" label=\"업체명\" [disabled]=\"true\" [(ngModel)]=\"formApproval.company_name\">\n            </app-input>\n          </app-col>\n          <app-col>\n            <app-select-position [company_id]=\"formApproval.company_id\" name=\"직위\" label=\"직위\"\n              [disabled]=\"!permission.approval\" [(ngModel)]=\"formApproval.ctgo_job_position_id\" [required]=\"true\">\n            </app-select-position>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-input name=\"input disabled\" label=\"현장명\" [disabled]=\"true\" [(ngModel)]=\"formApproval.project_name\">\n            </app-input>\n          </app-col>\n          <app-col>\n            <app-select-construction [project_id]=\"formApproval.project_id\" name=\"공종\" label=\"공종\" [master_company_id]=\"formApproval.master_company_id\"\n              [disabled]=\"!permission.approval\" [(ngModel)]=\"formApproval.ctgo_construction_id\">\n            </app-select-construction>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-radio-input name=\"계약유형\" label=\"계약유형\" [disabled]=\"!permission.approval\"\n              [(ngModel)]=\"formApproval.work_contract_type\">\n              <app-radio value=\"상용직\">상용직</app-radio>\n              <app-radio value=\"일용직\">일용직</app-radio>\n            </app-radio-input>\n          </app-col>\n          <app-col>\n            <app-select-occupation name=\"직종\" [company_id]=\"formApproval.company_id\" [disabled]=\"!permission.approval\"\n              [(ngModel)]=\"formApproval.ctgo_occupation_id\"></app-select-occupation>\n          </app-col>\n\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-radio-input name=\"현장 출역 상태\" label=\"현장 출역 상태\" [(ngModel)]=\"formApproval.construction_state\" (ngModelChange)=\"changeWorkState()\" placeholder=\"text\">\n              <app-radio value=\"출역중\">출역중</app-radio>\n              <app-radio value=\"출역종료\">출역종료</app-radio>\n            </app-radio-input>\n          </app-col>\n          <app-col>\n            <app-input-group label=\"현장 출역 기간\" [disabled]=\"!permission.approval\">\n              <app-calendar [(ngModel)]=\"formApproval.construction_start_date\"\n                [max]=\"formApproval.construction_end_date\"></app-calendar>\n              ~\n              <app-calendar [disabled]=\"work_end_data_state\" [(ngModel)]=\"formApproval.construction_end_date\"\n                [min]=\"formApproval.construction_start_date\"></app-calendar>\n            </app-input-group>\n          </app-col>\n        </app-row>\n        <app-input-safejob #inputSafeJob \n        [project_id]=\"formApproval.project_id\"\n        [company_id]=\"formApproval.company_id\"\n        [user_type]=\"'WORKER'\"\n        insert_url=\"/usermanage/info/worker/safejob/insert\" update_url=\"/usermanage/info/worker/safejob/update\"\n        delete_url=\"/usermanage/info/worker/safejob/delete\" [params]=\"this.form\"\n        [(ngModel)]=\"formApproval.safe_job_data\" [disabled]=\"!permission.approval\"></app-input-safejob>\n\n        <!-- <app-row>\n        <app-col></app-col>\n        <app-col size=\"auto\">\n          <app-button color=\"danger\" fill=\"translucent\" style=\"width: 120px;\">현장 삭제</app-button>\n        </app-col>\n        <app-col size=\"auto\">\n          <app-button fill=\"translucent\" style=\"width: 120px;\">현장 추가</app-button>\n        </app-col>\n      </app-row> -->\n        <h5>자격정보</h5>\n        <app-input-certify #inputCertify insert_url=\"/usermanage/approval/worker/certify/insert\"\n          update_url=\"/usermanage/approval/worker/certify/update\"\n          delete_url=\"/usermanage/approval/worker/certify/delete\" [params]=\"this.form\"\n          [(ngModel)]=\"formApproval.certify_data\" [disabled]=\"!permission.approval\"></app-input-certify>\n      </div>\n      <div [style.display]=\"menu === 2 ? 'block' : 'none'\">\n        <!-- 건강문진 -->\n        <app-row>\n          <app-col></app-col>\n          <app-col size=\"auto\" style=\"text-align: right;\">\n            <p>최종 수정일 : {{ formBasic.update_date }}</p>\n            <p *ngIf=\"formBasic.delete_state\">탈퇴일 : {{ formBasic.delete_date }}</p>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col></app-col>\n          <app-col size=\"auto\">\n            <p>작성일 : {{ formHealth.create_date }}</p>\n          </app-col>\n        </app-row>\n        <h5>1. 현재 복용하고 있는 약물이 있습니까?</h5>\n        <app-radio-input [value]=\"formHealth.use_drugs_state\">\n          <app-radio [value]=\"0\" [disabled]=\"true\">없다</app-radio>\n          <app-radio [value]=\"1\" [disabled]=\"true\">있다</app-radio>\n        </app-radio-input>\n        <app-input name=\"약물명을 입력해주세요.\" placeholder=\"약물명을 입력해주세요.\" [readonly]=\"true\" *ngIf=\"formHealth.use_drugs_state\"\n          [(ngModel)]=\"formHealth.use_drugs_content\"></app-input>\n\n        <h5>2. 과거나 현재 뇌, 심혈관질환으로 치료를 받았거나 받고 있습니까?</h5>\n        <app-radio-input name=\"brain_cure_state\" [(ngModel)]=\"formHealth.brain_cure_state\">\n          <app-radio [value]=\"0\" [disabled]=\"true\">없다</app-radio>\n          <app-radio [value]=\"1\" [disabled]=\"true\">있다</app-radio>\n        </app-radio-input>\n\n        <div @fadeInAnimation *ngIf=\"formHealth.brain_cure_state\">\n          * 해당하는 항목에 체크해주세요\n          <app-input-template>\n            <app-check-group slot=\"input\" name=\"brain_cure_content\" [(ngModel)]=\"formHealth.brain_cure_content\">\n              <app-check on=\"뇌졸중\" [disabled]=\"true\">뇌졸중</app-check>\n              <app-check on=\"뇌출혈\" [disabled]=\"true\">뇌출혈</app-check>\n              <app-check on=\"협심증\" [disabled]=\"true\">협심증</app-check>\n              <app-check on=\"심근경색\" [disabled]=\"true\">심근경색</app-check>\n              <app-check on=\"간질발작\" [disabled]=\"true\">간질발작</app-check>\n            </app-check-group>\n          </app-input-template>\n        </div>\n        <h5>3. 최근 가슴을 쥐어짜는 통증,오심,구토 증상을 겪은 적이 있습니까?</h5>\n        <app-radio-input [value]=\"formHealth.vomiting_state\">\n          <app-radio [value]=\"0\" [disabled]=\"true\">없다</app-radio>\n          <app-radio [value]=\"1\" [disabled]=\"true\">있다</app-radio>\n        </app-radio-input>\n        <app-input name=\"증상을 적어주세요.\" placeholder=\"증상을 적어주세요.\" [readonly]=\"true\" *ngIf=\"formHealth.vomiting_state\"\n          [value]=\"formHealth.vomiting_content\"></app-input>\n\n        <h5>4. 최근 갑자기 한쪽 팔,다리에 힘이 빠지거나 말이 어눌하게 나오거나 두통,어지러운 증상을 겪은적이 있습니까?</h5>\n        <app-radio-input [value]=\"formHealth.pain_head_state\">\n          <app-radio [value]=\"0\" [disabled]=\"true\">없다</app-radio>\n          <app-radio [value]=\"1\" [disabled]=\"true\">있다</app-radio>\n        </app-radio-input>\n        <app-input name=\"증상을 적어주세요.\" placeholder=\"증상을 적어주세요.\" [readonly]=\"true\" *ngIf=\"formHealth.pain_head_content\"\n          [value]=\"formHealth.pain_head_content\"></app-input>\n\n        <h5>5. 현재 기타질병(당뇨,간장질환,폐질환 등)으로 치료를 받고 있습니까?</h5>\n        <app-radio-input [value]=\"formHealth.etc_disease_state\">\n          <app-radio [value]=\"0\" [disabled]=\"true\">없다</app-radio>\n          <app-radio [value]=\"1\" [disabled]=\"true\">있다</app-radio>\n        </app-radio-input>\n        <app-input name=\"증상을 적어주세요.\" placeholder=\"증상을 적어주세요.\" *ngIf=\"formHealth.etc_disease_state\"\n          [value]=\"formHealth.etc_disease_content\"></app-input>\n\n        <h5>6. 본인이 코로나19가 의심되는 아래의 임상증상이 있습니까?(*주요 임상증상)체온 37.5도 이상,기침,호흡곤란,오한,근육통,두통,인후통,후각미각 소실 또는 폐렴\n          (단,코로나19와 관계없이 평소의 기저질환으로 인한 증상인 경우는 제외)\n        </h5>\n        <app-radio-input [value]=\"formHealth.covid_nineteen_state\">\n          <app-radio [value]=\"0\" [disabled]=\"true\">없다</app-radio>\n          <app-radio [value]=\"1\" [disabled]=\"true\">있다</app-radio>\n        </app-radio-input>\n        <app-input name=\"증상을 적어주세요.\" placeholder=\"증상을 적어주세요.\" *ngIf=\"formHealth.covid_nineteen_state\"\n          [value]=\"formHealth.covid_nineteen_content\"></app-input>\n\n        <h5>7. 코로나 백신 접종을 하셨습니까?</h5>\n        <app-radio-input [value]=\"formHealth.covid_nineteen_state\">\n          <app-radio [value]=\"0\" [disabled]=\"true\">미접종</app-radio>\n          <app-radio [value]=\"1\" [disabled]=\"true\">접종</app-radio>\n        </app-radio-input>\n\n      </div>\n      <!-- 교육이력 -->\n      <div [style.display]=\"menu === 3 ? 'block' : 'none'\">\n        <app-row>\n          <app-col></app-col>\n          <app-col size=\"auto\" style=\"text-align: right;\">\n            <p>최종 수정일 : {{ formBasic.update_date }}</p>\n            <p *ngIf=\"formBasic.delete_state\">탈퇴일 : {{ formBasic.delete_date }}</p>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-calendar label=\"기초 안전 보건 교육 이수일\" [disabled]=\"!permission.approval\"\n              [(ngModel)]=\"formSafeEdu.basic_safe_edu_date\"></app-calendar>\n          </app-col>\n          <app-col>\n            <app-input-template label=\"기초안전보건교육 이수증\" [disabled]=\"!permission.approval\">\n              <p *ngIf=\"!formSafeEdu.user_safe_edu_file_data?.[0] else tempBasicSafeEduValue\" slot=\"input\">기초안전보건교육 이수증</p>\n              <ng-template #tempBasicSafeEduValue>\n                <ion-text color=\"dark\" slot=\"input\">{{ formSafeEdu.user_safe_edu_file_data[0].file_name }}</ion-text>\n              </ng-template>\n              파일찾기\n              <app-file name=\"input-basic_safe_edu\" [(ngModel)]=\"formSafeEdu.user_safe_edu_file_data\" view_type=\"BASIC_SAFE_EDU\"\n                [file]=\"formSafeEdu.file\" [file_json]=\"formSafeEdu.file_json\"></app-file>\n            </app-input-template>\n          </app-col>\n        </app-row>\n        <app-file-preview *ngFor=\"let futItem of formSafeEdu.user_safe_edu_file_data; let i = index;\" [futItem]=\"futItem\" (buttonClick)=\"formSafeEdu.user_safe_edu_file_data.splice(i, 1)\"></app-file-preview>\n        <app-row>\n          <app-col>\n            <!-- <app-select-scene [disabled]=\"!permission.approval\" [(ngModel)]=\"formSafeList.project_id\"></app-select-scene> -->\n            <app-select-scene [disabled]=\"true\" [(ngModel)]=\"formSafeList.project_id\"></app-select-scene>\n          </app-col>\n          <!-- <app-col>\n            <app-select label=\"교육구분\" [(ngModel)]=\"form.ctgo_education_safe_type\">\n              <app-select-option type=\"all\" value=\"전체\">전체</app-select-option>\n              <app-select-option value=\"특별\">특별</app-select-option>\n              <app-select-option value=\"정기\">정기</app-select-option>\n              <app-select-option value=\"작업 변경시\">작업 변경시</app-select-option>\n            </app-select>\n          </app-col> -->\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-input label=\"검색어\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formSafeList.search_text\"\n              placeholder=\"교육명을 입력해 주세요.\">\n              <app-img name=\"search\" (click)=\"getSafeEduList()\"></app-img>\n            </app-input>\n          </app-col>\n        </app-row>\n        <app-table type=\"card\">\n          <thead>\n            <tr>\n              <th>NO</th>\n              <th>교육명</th>\n              <th>이수일</th>\n              <th>이수시간</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of resSafeList?.rsMap let i = index\">\n              <td>{{ i+1 }}</td>\n              <td>{{ item.ctgo_education_safe_title }}</td>\n              <td>{{ item.education_safe_date }}</td>\n              <td>{{ item.education_safe_time }}</td>\n            </tr>\n          </tbody>\n        </app-table>\n      </div>\n      <!-- 안전마일리지 -->\n      <div [style.display]=\"menu === 5 ? 'block' : 'none'\">\n        <app-row>\n          <app-col></app-col>\n          <app-col size=\"auto\" style=\"text-align: right;\">\n            <p>최종 수정일 : {{ formBasic.update_date }}</p>\n            <p *ngIf=\"formBasic.delete_state\">탈퇴일 : {{ formBasic.delete_date }}</p>\n          </app-col>\n        </app-row>\n        <h5>마일리지 현황</h5>\n        <app-table type=\"card\">\n          <thead>\n            <tr>\n              <th>총 적립 마일리지</th>\n              <th>총 사용 마일리지</th>\n              <th>잔여 마일리지</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{ resTotalMileageList?.rsObj?.plus_mileage }}</td>\n              <td>{{ resTotalMileageList?.rsObj?.minus_mileage }}</td>\n              <td>{{ resTotalMileageList?.rsObj?.total_mileage }}</td>\n            </tr>\n          </tbody>\n        </app-table>\n        <h5>안전 마일리지 적립 내역</h5>\n        <app-table type=\"card\">\n          <thead>\n            <tr>\n              <th style=\"width:40px\">NO</th>\n              <th>마일리지 분류</th>\n              <th>지급자</th>\n              <th>적립일</th>\n              <th>적립 마일리지</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of resPlusMileageList?.rsMap let i = index\">\n              <td>{{ i+1 }}</td>\n              <td>{{ item.ctgo_safe_mileage }}</td>\n              <td>{{ item.payer_user_name }}</td>\n              <td>{{ item.create_date }}</td>\n              <td>{{ item.ctgo_safe_mileage_point }}</td>\n            </tr>\n          </tbody>\n        </app-table>\n        <app-row>\n          <app-col></app-col>\n          <app-col size=\"auto\">\n            <app-button fill=\"translucent\" style=\"width: 120px;\" (click)=\"MileageInsert('RECEIVE')\" *ngIf=\"permission.mileage\">마일리지 지급</app-button>\n          </app-col>\n          <app-col size=\"auto\">\n            <app-button fill=\"translucent\" style=\"width: 120px;\" (click)=\"MileageInsert('USE')\" *ngIf=\"permission.mileage\">마일리지 사용</app-button>\n          </app-col>\n        </app-row>\n        <h5>안전 마일리지 사용 내역</h5>\n        <app-table type=\"card\">\n          <thead>\n            <tr>\n              <th style=\"width:40px\">NO</th>\n              <th>사용내역</th>\n              <th>사용자</th>\n              <th>사용일</th>\n              <th>사용 마일리지</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of resMinusMileageList?.rsMap let i = index\">\n              <td>{{ i+1 }}</td>\n              <td>{{ item.ctgo_safe_mileage }}</td>\n              <td>{{ item.payer_user_name }}</td>\n              <td>{{ item.create_date }}</td>\n              <td>{{ item.ctgo_safe_mileage_point }}</td>\n            </tr>\n          </tbody>\n        </app-table>\n        <!-- <app-row>\n      <h5>마일리지 현황</h5>\n      <app-table type=\"card\">\n        <thead>\n          <tr>\n            <th>총 적립 마일리지</th>\n            <th>총 사용 마일리지</th>\n            <th>잔여 마일리지</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{ resTotalMileageList?.rsObj?.total_mileage }}</td>\n            <td>{{ resTotalMileageList?.rsObj?.minus_mileage }}</td>\n            <td>{{ resTotalMileageList?.rsObj?.plus_mileage }}</td>\n          </tr>\n        </tbody>\n      </app-table>\n      <h5>안전 마일리지 적립 내역</h5>\n      <app-table type=\"card\">\n        <thead>\n          <tr>\n            <th style=\"width:48px\">No</th>\n            <th>마일리지 분류</th>\n            <th>지급자</th>\n            <th>적립일</th>\n            <th>적립 마일리지</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of resPlusMileageList?.rsMap let i = index\">\n            <td>{{ i+1 }}</td>\n            <td>{{ item.ctgo_safe_mileage }}</td>\n            <td>{{ item.payer_user_name }}</td>\n            <td>{{ item.create_date }}</td>\n            <td>{{ item.ctgo_safe_mileage_point }}</td>\n          </tr>\n        </tbody>\n      </app-table>\n      <app-row>\n        <app-col></app-col>\n        <app-col size=\"auto\">\n          <app-button fill=\"translucent\" style=\"width: 120px;\" (click)=\"MileageInsert()\" *ngIf=\"permission.mileage\">마일리지 지급</app-button>\n        </app-col>\n      </app-row>\n      <h5>안전 마일리지 사용 내역</h5>\n      <app-table type=\"card\">\n        <thead>\n          <tr>\n            <th style=\"width:48px\">No</th>\n            <th>사용내역</th>\n            <th>사용자</th>\n            <th>사용일</th>\n            <th>사용 마일리지</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of resMinusMileageList?.rsMap let i = index\">\n            <td>{{ i+1 }}</td>\n            <td>{{ item.ctgo_safe_mileage }}</td>\n            <td>{{ item.payer_user_name }}</td>\n            <td>{{ item.create_date }}</td>\n            <td>{{ item.ctgo_safe_mileage_point }}</td>\n          </tr>\n        </tbody>\n      </app-table>-->\n      <!-- <app-row>\n        <app-col></app-col>\n        <app-col size=\"auto\">\n          <app-button fill=\"translucent\" style=\"width: 120px;\">마일리지 사용</app-button>\n        </app-col>\n      </app-row> -->\n      </div>\n      <!-- <ion-toolbar slot=\"bottom\" color=\"white\">\n        <ion-buttons slot=\"end\">\n          <app-button style=\"width: 120px;\">퇴사</app-button>\n        </ion-buttons>\n      </ion-toolbar> -->\n    </app-card>\n    <app-button-footer *ngIf=\"permission.approval\">\n      <app-button style=\"width: 120px;\" (click)=\"submit()\">저장</app-button>\n    </app-button-footer>\n  </app-container>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_member-management_member-management_worker-info-edit_worker-info-edit_mo-cd720b.js.map