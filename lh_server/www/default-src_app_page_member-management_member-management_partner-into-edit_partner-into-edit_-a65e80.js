(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_member-management_member-management_partner-into-edit_partner-into-edit_-a65e80"],{

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

/***/ 4899:
/*!****************************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-management/partner-into-edit/partner-into-edit-routing.module.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerIntoEditPageRoutingModule": () => (/* binding */ PartnerIntoEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _partner_into_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-into-edit.page */ 68034);




const routes = [
    {
        path: '',
        component: _partner_into_edit_page__WEBPACK_IMPORTED_MODULE_0__.PartnerIntoEditPage
    }
];
let PartnerIntoEditPageRoutingModule = class PartnerIntoEditPageRoutingModule {
};
PartnerIntoEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PartnerIntoEditPageRoutingModule);



/***/ }),

/***/ 33203:
/*!********************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-management/partner-into-edit/partner-into-edit.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerIntoEditPageModule": () => (/* binding */ PartnerIntoEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _partner_into_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-into-edit-routing.module */ 4899);
/* harmony import */ var _partner_into_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partner-into-edit.page */ 68034);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let PartnerIntoEditPageModule = class PartnerIntoEditPageModule {
};
PartnerIntoEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _partner_into_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.PartnerIntoEditPageRoutingModule
        ],
        declarations: [_partner_into_edit_page__WEBPACK_IMPORTED_MODULE_1__.PartnerIntoEditPage]
    })
], PartnerIntoEditPageModule);



/***/ }),

/***/ 68034:
/*!******************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-management/partner-into-edit/partner-into-edit.page.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicItem": () => (/* binding */ BasicItem),
/* harmony export */   "ApprovalItem": () => (/* binding */ ApprovalItem),
/* harmony export */   "SafeEduList": () => (/* binding */ SafeEduList),
/* harmony export */   "TotalMileageList": () => (/* binding */ TotalMileageList),
/* harmony export */   "PlusMileageList": () => (/* binding */ PlusMileageList),
/* harmony export */   "MinusMileageList": () => (/* binding */ MinusMileageList),
/* harmony export */   "PartnerIntoEditPage": () => (/* binding */ PartnerIntoEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_partner_into_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./partner-into-edit.page.html */ 85165);
/* harmony import */ var _partner_into_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partner-into-edit.page.scss */ 1488);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/loading.service */ 21501);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_page_my_page_change_phone_change_phone_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/page/my-page/change-phone/change-phone.page */ 66802);
/* harmony import */ var _member_approval_wait_security_password_security_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../member-approval-wait/security-password/security-password.component */ 52346);
/* harmony import */ var _member_approval_wait_worker_approval_edit_worker_approval_edit_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../member-approval-wait/worker-approval-edit/worker-approval-edit.page */ 46533);
/* harmony import */ var _mileage_popup_mileage_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../mileage-popup/mileage-popup.component */ 95506);
















//기본정보
class BasicItem {
    constructor() {
        this.file = [];
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_4__.FileJson();
        this.user_profile_file_data = [];
    }
}
//소속정보
class ApprovalItem {
    constructor() {
        this.safe_job_file_data = [];
        this.safe_job_data = [];
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
//마일리지 적립 리스트
class PlusMileageList {
}
// 마일리지 사용 리스트
class MinusMileageList {
}
let PartnerIntoEditPage = class PartnerIntoEditPage {
    constructor(_modal_, connect, user, toast, alert, loading, date) {
        this._modal_ = _modal_;
        this.connect = connect;
        this.user = user;
        this.toast = toast;
        this.alert = alert;
        this.loading = loading;
        this.date = date;
        this.editable = false;
        this.form = {
            user_id: 0,
            approval_user_id: 0,
            session_company_id: 0,
            user_manage_session: ''
        };
        this.formBasic = new BasicItem();
        this.formApproval = new ApprovalItem();
        this.formSafeEdu = new _member_approval_wait_worker_approval_edit_worker_approval_edit_page__WEBPACK_IMPORTED_MODULE_11__.SafeEduItem();
        this.formSafeList = {
            ctgo_education_safe_type: '전체',
            search_text: '',
            project_id: 0
        };
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.Validator(new BasicItem()).validator;
        this.permission = {
            mileageinsert: false,
            approval: false //저장
        };
        this.system = false; //시스템권한선택
        this.menu = 1;
        this.work_end_data_state = false;
    }
    ngOnInit() {
        // if(this.item.company_contract_type === '협력사' && 
        //   this.user.userData.user_role === 'MASTER_HEAD') this.system = true
        //   else {
        //     this.system = false;
        //   }
        console.log('this.item.company_contract_type - ', this.item.company_contract_type);
        if (this.item.company_contract_type === '협력사')
            this.system = true;
        else
            this.system = false;
        this.getPermission();
        this.get();
    }
    //권한
    getPermission() {
        if (this.user.userData.user_role === 'MASTER_HEAD') {
            this.permission.mileageinsert = true;
        }
        else {
            this.permission.mileageinsert = false;
        }
        if (this.user.userData.user_role === 'LH_HEAD' || this.user.userData.user_role === 'MASTER_HEAD' || this.user.userData.user_role === 'PARTNER_HEAD') {
            this.permission.approval = true;
        }
        else {
            this.permission.approval = false;
        }
        this.form.user_id = this.item.user_id;
        this.form.approval_user_id = this.item.user_id;
        this.form.session_company_id = this.user.userData.belong_data.company_id;
        this.form.user_manage_session = this.user.memberAuthToken;
    }
    //이메일
    overlapEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const { user_id, user_email } = this.formBasic;
            if (!user_email)
                return this.validator.user_email = null;
            if (!user_id)
                return this.validator.user_id = null;
            const res = yield this.connect.run('/usermanage/info/company/overlap/email', { user_email, user_id });
            this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
            this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    // //휴대폰
    // public async overlapPhone() {
    //   const { user_phone, user_id } = this.formBasic;
    //   if (!user_phone) return this.validator.user_phone = null;
    //   if (!user_id) return this.validator.user_id = null;
    //   const res = await this.connect.run('/usermanage/info/company/overlap/phone', { user_phone, user_id });
    //   this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
    //   this.validator.user_id = { valid: res.rsCode === 0, message: res.rsMsg };
    // }
    // 휴대폰번호
    overlapPhone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const { user_id, user_phone } = this.formBasic;
            if (!user_id)
                return this.validator.user_id = null;
            if (!user_phone)
                return this.validator.user_phone = null;
            if ((user_phone === null || user_phone === void 0 ? void 0 : user_phone.length) < 3)
                return this.validator.user_phone = { valid: false, message: '휴대폰 번호를 정확히 입력해주세요.' };
            const res = yield this.connect.run('/usermanage/info/company/overlap/phone', { user_phone, user_id });
            this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    changePhone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal_.create({
                component: src_app_page_my_page_change_phone_change_phone_page__WEBPACK_IMPORTED_MODULE_9__.ChangePhonePage,
                cssClass: 'change-phone-modal'
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data === null || data === void 0 ? void 0 : data.update) {
                this.get();
            }
        });
    }
    get() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loading.present();
            yield Promise.all([
                (_a = this.inputSafeJob) === null || _a === void 0 ? void 0 : _a.submit(),
                this.getItem(),
                this.getBelong(),
                this.getSafeEduList(),
                this.getTotalMileageList(),
                this.getPlusMileageList(),
                this.getMinusMileageList()
            ]);
            loading.dismiss();
        });
    }
    //기본정보
    getItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/info/company/basic/detail', this.form, {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (this.formApproval.construction_state === '출역종료') {
                if (!this.formApproval.construction_end_date)
                    return this.toast.present({ message: '출역종료 날짜를 선택해주세요.' });
            }
            const res = yield this.connect.run('/usermanage/info/company/belong/detail', this.form, {
                parse: ['safe_job_data', 'safe_job_file_data']
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
    //비밀번호
    getPassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
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
    //교육이력 리스트불러오기
    getSafeEduList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.form.session_company_id = this.user.userData.belong_data.company_id;
            this.form.user_manage_session = this.user.memberAuthToken;
            this.formSafeList.project_id = this.user.userData.belong_data.project_id;
            this.form.approval_user_id = this.item.user_id;
            const res = yield this.connect.run('/usermanage/info/company/edu/list', Object.assign(Object.assign({}, this.form), this.formSafeList), {
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
    // 총 안전마일리지 목록
    getTotalMileageList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.form.session_company_id = this.user.userData.belong_data.company_id;
            this.form.user_manage_session = this.user.memberAuthToken;
            this.formSafeList.project_id = this.user.userData.belong_data.project_id;
            this.form.approval_user_id = this.item.user_id;
            const res = yield this.connect.run('/usermanage/info/company/mileagetotal/list', Object.assign({}, this.form), {
                loading: true
            });
            if (res.rsCode === 0) {
                this.resTotalMileageList = Object.assign(Object.assign({}, res), this.resTotalMileageList);
                // 정상
            }
            else if (res.rsCode === 1008) {
                // 데이터 없음
            }
        });
    }
    // 마일리지 적립 목록
    getPlusMileageList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.form.session_company_id = this.user.userData.belong_data.company_id;
            this.form.user_manage_session = this.user.memberAuthToken;
            this.formSafeList.project_id = this.user.userData.belong_data.project_id;
            this.form.approval_user_id = this.item.user_id;
            const res = yield this.connect.run('/usermanage/info/company/mileageplus/list', Object.assign({}, this.form), {
                loading: true
            });
            if (res.rsCode === 0) {
                this.resPlusMileageList = Object.assign(Object.assign({}, res), this.resPlusMileageList);
                // 정상
            }
            else if (res.rsCode === 1008) {
                // 데이터 없음
            }
        });
    }
    // 마일리지 사용 목록
    getMinusMileageList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.form.session_company_id = this.user.userData.belong_data.company_id;
            this.form.user_manage_session = this.user.memberAuthToken;
            this.formSafeList.project_id = this.user.userData.belong_data.project_id;
            this.form.approval_user_id = this.item.user_id;
            const res = yield this.connect.run('/usermanage/info/company/mileageminus/list', Object.assign({}, this.form), {
                loading: true
            });
            if (res.rsCode === 0) {
                this.resMinusMileageList = Object.assign(Object.assign({}, res), this.resMinusMileageList);
                // 정상
            }
            else if (res.rsCode === 1008) {
                // 데이터 없음
            }
        });
    }
    //마일리지 지급
    MileageInsert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal_.create({
                component: _mileage_popup_mileage_popup_component__WEBPACK_IMPORTED_MODULE_12__.MileagePopupComponent,
                componentProps: {
                    company_id: this.formApproval.company_id,
                    user_id: this.form.user_id
                },
                cssClass: "mileage-modal"
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.get();
            }
        });
    }
    // 저장(수정)
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
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
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
                            var _a;
                            yield Promise.all([
                                this.BasicSubmit(),
                                (_a = this.inputSafeJob) === null || _a === void 0 ? void 0 : _a.submit(),
                                this.BelongSubmit()
                            ]);
                        })
                    }
                ]
            });
        });
    }
    //기본정보 수정
    BasicSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/info/company/basic/update', Object.assign(Object.assign({}, this.form), this.formBasic), {});
            if (res.rsCode === 0) {
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    //소속정보 수정
    BelongSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/usermanage/info/company/belong/update', Object.assign(Object.assign({}, this.form), this.formApproval), {});
            if (res.rsCode === 0) {
                this._modal_.dismiss('Y');
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
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
PartnerIntoEditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_8__.ToastService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: src_app_basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_2__.DateService }
];
PartnerIntoEditPage.propDecorators = {
    inputSafeJob: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['inputSafeJob',] }],
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }]
};
PartnerIntoEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-partner-into-edit',
        template: _raw_loader_partner_into_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_partner_into_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PartnerIntoEditPage);



/***/ }),

/***/ 66802:
/*!****************************************************************!*\
  !*** ./src/app/page/my-page/change-phone/change-phone.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePhoneForm": () => (/* binding */ ChangePhoneForm),
/* harmony export */   "ChangePhonePage": () => (/* binding */ ChangePhonePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_change_phone_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./change-phone.page.html */ 23412);
/* harmony import */ var _change_phone_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-phone.page.scss */ 86875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/basic.animation */ 56503);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ 92340);













class ChangePhoneForm {
    constructor() {
        this.user_phone = null; // 휴대폰 번호
        this.sms_token = null; // 토큰
    }
}
let ChangePhonePage = class ChangePhonePage {
    constructor(el, alert, _modal, connect, promise, regex, toast, changeDetector, languagePack) {
        this.el = el;
        this.alert = alert;
        this._modal = _modal;
        this.connect = connect;
        this.promise = promise;
        this.regex = regex;
        this.toast = toast;
        this.changeDetector = changeDetector;
        this.languagePack = languagePack;
        this.form = new ChangePhoneForm();
        this.validator = new src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.Validator(new ChangePhoneForm()).validator;
    }
    ngOnInit() {
        this.test();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.test.core.test)
                return;
            const el = this.el.nativeElement;
            yield this.promise.wait();
            // 데이터 입력
            el.querySelector('[name=user_phone]').dispatchEvent(new CustomEvent('setValue', { detail: this.regex.random.phone() }));
            yield this.promise.wait();
            // 문자 인증 전송
            el.querySelector('[name=user_phone]').dispatchEvent(new Event('buttonClick'));
            yield this.promise.wait(1500);
            // 문자 인증번호 가져와서 넣기
            const { user_phone } = this.form;
            const res = yield this.connect.run('/test/sms/get', { user_phone });
            el.querySelector('[name=sms_token]').dispatchEvent(new CustomEvent('setValue', { detail: res.rsObj.sms_token }));
            yield this.promise.wait();
            // 문자 인증
            el.querySelector('[name=sms_token]').dispatchEvent(new Event('buttonClick'));
            yield this.promise.wait();
            // 변경하기
            el.querySelector('[name=button_submit]').dispatchEvent(new Event('click'));
            yield this.promise.wait(800);
            document.querySelector('.alert-button').dispatchEvent(new Event('click'));
        });
    }
    dismiss() {
        this._modal.dismiss();
    }
    /** 휴대폰번호 관련 코드 */
    // user_phone은 overlapPhone 과 aligoSend 두개를 모두 실행해야 valid 된다.
    overlapPhone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const { user_phone } = this.form;
            if (!user_phone)
                return this.validator.user_phone = null;
            if ((user_phone === null || user_phone === void 0 ? void 0 : user_phone.length) < 3)
                return this.validator.user_phone = { valid: false, message: '휴대폰 번호를 정확히 입력해주세요.' };
            /** /forSignUp/overlap/phone 이거 사용한거 실수 아님. 내 폰번호 포함 모든 번호를 중복 체크 해야되기 때문에 이렇게 함. */
            const res = yield this.connect.run('/forSignUp/overlap/phone', { user_phone });
            this.validator.user_phone = res.rsCode === 0 ? null : { valid: res.rsCode === 0, message: res.rsMsg };
            this.validator.sms_token = null;
        });
    }
    aligoSend() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const { user_phone } = this.form;
            if (((_a = this.validator.user_phone) === null || _a === void 0 ? void 0 : _a.valid) === false)
                return;
            const res = yield this.connect.run('/mypage/send/sms', { user_phone });
            this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    aligoCheck() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const { user_phone, sms_token } = this.form;
            const res = yield this.connect.run('/mypage/check/sms', { user_phone, sms_token });
            this.validator.sms_token = { valid: res.rsCode === 0, message: res.rsMsg };
        });
    }
    /** submit */
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.valid())
                return;
            const res = yield this.connect.run('/mypage/phone/update', this.form);
            if (res.rsCode === 0) {
                this._modal.dismiss({ update: true });
                this.alert.present({
                    img: 'assets/basic/img/check-circle-primary.svg',
                    message: '휴대폰 번호가 변경되었습니다.'
                });
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    valid() {
        var _a, _b, _c;
        if (!this.form.user_phone)
            this.validator.user_phone = { message: '휴대폰번호를 입력해주세요.', valid: false };
        else if ((_a = this.validator.user_phone) === null || _a === void 0 ? void 0 : _a.valid)
            this.validator.user_phone = { valid: true };
        if (!this.form.sms_token)
            this.validator.sms_token = { message: '문자인증번호를 입력해주세요.', valid: false };
        else if (!((_b = this.validator.sms_token) === null || _b === void 0 ? void 0 : _b.valid))
            this.validator.sms_token = { message: '문자인증번호를 인증해주세요.', valid: false };
        else
            this.validator.sms_token = { valid: true };
        for (let key in this.validator) {
            if (!((_c = this.validator[key]) === null || _c === void 0 ? void 0 : _c.valid))
                return false;
        }
        return true;
    }
};
ChangePhonePage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_7__.PromiseService },
    { type: src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_8__.RegexService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_4__.LanguagePackService }
];
ChangePhonePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-change-phone',
        template: _raw_loader_change_phone_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__.fadeAnimation],
        styles: [_change_phone_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChangePhonePage);



/***/ }),

/***/ 1488:
/*!********************************************************************************************************!*\
  !*** ./src/app/page/member-management/member-management/partner-into-edit/partner-into-edit.page.scss ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-avatar {\n  margin-top: 30px !important;\n  margin-bottom: 20px !important;\n  width: 100px !important;\n  height: 100px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRuZXItaW50by1lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJwYXJ0bmVyLWludG8tZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtYXZhdGFyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ 86875:
/*!******************************************************************!*\
  !*** ./src/app/page/my-page/change-phone/change-phone.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGhvbmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 85165:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/member-management/member-management/partner-into-edit/partner-into-edit.page.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n    <ion-title>원청사/협력사 회원정보</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-container size=\"small\">\n    <app-card color=\"light\" [button]=\"false\">\n      <ion-toolbar slot=\"top\" color=\"white\">\n        <h5>회원정보</h5>\n      </ion-toolbar>\n      <form>\n        <app-avatar \n      name=\"input-profile\"\n      view_type=\"PROFILE\"\n      [(ngModel)]=\"formBasic.user_profile_file_data\" [file]=\"formBasic.file\" [file_json]=\"formBasic.file_json\" [readonly]=\"!permission.approval\"></app-avatar>\n        <app-row>\n          <app-col>\n            <app-input name=\"input disabled\" label=\"아이디\" value=\"input disabled\" [(ngModel)]=\"formBasic.account_id\" [disabled]=\"true\" [required]=\"true\"></app-input>\n          </app-col>\n          <app-col>\n            <app-input type=\"text\" name=\"input\" label=\"성명\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formBasic.user_name\" [required]=\"true\"></app-input>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-calendar name=\"calendar\" label=\"생년월일\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formBasic.user_birth\" [required]=\"true\"></app-calendar>\n          </app-col>\n          <app-col>\n            <app-radio-input name=\"user_gender\" label=\"성별\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formBasic.user_gender\" [required]=\"true\">\n              <app-radio value=\"남\">남</app-radio>\n              <app-radio value=\"여\">여</app-radio>\n            </app-radio-input>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            \n            <app-input-template name=\"user_phone\" label=\"휴대폰\" placeholder=\"-없이 숫자만 입력해주세요.\" type=\"tel\" \n            [color]=\"validator.user_phone?.valid === false && 'warning'\"\n            [disabled]=\"!permission.approval\" [required]=\"true\" (buttonClick)=\"overlapPhone()\">\n              <!-- <p slot=\"input\">{{ formBasic.user_phone }}</p> -->\n              <input name=\"tel\" slot=\"input\" [(ngModel)]=\"formBasic.user_phone\" />\n              중복확인\n            </app-input-template>\n\n            <!-- <app-input type=\"tel\" name=\"input\" label=\"핸드폰\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formBasic.user_phone\" [required]=\"true\" (click)=\"overlapPhone()\">\n              중복확인\n            </app-input> -->\n            <!-- <app-input-caption *ngIf=\"validator_2.user_phone?.valid === false\" color=\"warning\">{{ validator_2.user_phone?.message }}</app-input-caption> -->\n          </app-col>\n          <app-col>\n            <app-email name=\"user_email\" label=\"이메일\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formBasic.user_email\"\n          [color]=\"validator.user_email?.valid === false && 'warning'\" (delayKeyup)=\"overlapEmail()\"></app-email>\n          <app-input-caption *ngIf=\"validator.user_email?.valid === false\" color=\"warning\">{{ validator.user_email?.message }}</app-input-caption>\n          </app-col>\n        </app-row>\n      </form>\n   \n    </app-card>\n    <app-card color=\"light\">\n      <ion-toolbar slot=\"top\" color=\"white\">\n        <ion-buttons slot=\"start\">\n          <ion-segment color=\"primary\" [value]=\"1\">\n            <ion-segment-button [value]=\"1\" (click)=\"menu = 1\">소속 정보</ion-segment-button>\n            <!-- <ion-segment-button (click)=\"menu = 2\">교육 이력</ion-segment-button> -->\n            <!-- <ion-segment-button (click)=\"menu = 3\">근로 이력</ion-segment-button> -->\n            <ion-segment-button (click)=\"menu = 4\" *ngIf=\"formApproval.user_role === 9 || formApproval.user_role === 10\">안전 마일리지</ion-segment-button>\n          </ion-segment>\n        </ion-buttons>\n      </ion-toolbar>\n      <div [style.display]=\"menu === 1 ? 'block' : 'none'\">\n        <app-row>\n          <app-col></app-col>\n          <app-col size=\"auto\" style=\"text-align: right;\">\n            <p>최종 수정일 : {{ formBasic.update_date }}</p>\n            <p *ngIf=\"formBasic.delete_state\">탈퇴일 : {{ formBasic.delete_date }}</p>\n          </app-col>\n        </app-row>\n      <app-row>\n        <app-col>\n          <app-input  [disabled]=\"true\" label=\"업체명\" [(ngModel)]=\"formApproval.company_name\"></app-input>\n        </app-col>\n        <app-col>\n          <app-select-position [company_id]=\"formApproval.company_id\" name=\"직위\" label=\"직위\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formApproval.ctgo_job_position_id\" [required]=\"true\"></app-select-position>\n        </app-col>\n        <app-col>\n          <app-select label=\"시스템 권한\" *ngIf=\"!system\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formApproval.user_role\">\n            <app-select-option [value]=\"6\">원청사 마스터 어드민</app-select-option>\n            <app-select-option [value]=\"7\">원청사 일반 관리자</app-select-option>\n          </app-select>\n          <app-select label=\"시스템 권한\" *ngIf=\"system\"[disabled]=\"!permission.approval\" [(ngModel)]=\"formApproval.user_role\">\n            <app-select-option [value]=\"9\">협력사 마스터 어드민</app-select-option>\n            <app-select-option [value]=\"10\">협력사 일반 관리자</app-select-option>\n          </app-select>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input name=\"input disabled\" label=\"현장명\" [disabled]=\"true\" [(ngModel)]=\"formApproval.project_name\"></app-input>\n        </app-col>\n        <app-col>\n          <app-select-construction name=\"ctgo_construction_id\" \n          [project_id]=\"formApproval.project_id\" \n          [master_company_id]=\"formApproval.master_company_id\"\n          [disabled]=\"!permission.approval\" [(ngModel)]=\"formApproval.ctgo_construction_id\"></app-select-construction>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-radio-input name=\"현장 출역 상태\" label=\"현장 출역 상태\" [(ngModel)]=\"formApproval.construction_state\" (ngModelChange)=\"changeWorkState()\" placeholder=\"text\">\n            <app-radio value=\"출역중\">출역중</app-radio>\n            <app-radio value=\"출역종료\">출역종료</app-radio>\n          </app-radio-input>\n        </app-col>\n        <app-col>\n          <app-input-group label=\"현장 출역 기간\" [disabled]=\"!permission.approval\">\n            <app-calendar [(ngModel)]=\"formApproval.construction_start_date\" [max]=\"formApproval.construction_end_date\"></app-calendar>\n            ~\n            <app-calendar [(ngModel)]=\"formApproval.construction_end_date\" [min]=\"formApproval.construction_end_date\"></app-calendar>\n          </app-input-group>\n        </app-col>\n      </app-row>\n      <app-input-safejob #inputSafeJob\n      [project_id]=\"formApproval.project_id\"\n      [company_id]=\"formApproval.company_id\"\n      insert_url=\"/usermanage/info/company/safejob/insert\"\n      update_url=\"/usermanage/info/company/safejob/update\"\n      delete_url=\"/usermanage/info/company/safejob/delete\"\n      [params]=\"this.form\"\n      [(ngModel)]=\"formApproval.safe_job_data\" [disabled]=\"!permission.approval\"></app-input-safejob>\n    </div>\n    <div [style.display]=\"menu === 2 ? 'block' : 'none'\">\n      <!-- 교육이력 -->\n      <app-row>\n        <app-col></app-col>\n        <app-col size=\"auto\" style=\"text-align: right;\">\n          <p>최종 수정일 : {{ formBasic.update_date }}</p>\n          <p *ngIf=\"formBasic.delete_state\">탈퇴일 : {{ formBasic.delete_date }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <!-- <app-select-scene [disabled]=\"!permission.approval\" [(ngModel)]=\"formSafeList.project_id\"></app-select-scene> -->\n          <app-select-scene [disabled]=\"true\" [(ngModel)]=\"formSafeList.project_id\"></app-select-scene>\n        </app-col>\n        <app-col>\n          <app-input label=\"검색어\" [disabled]=\"!permission.approval\" [(ngModel)]=\"formSafeList.search_text\" placeholder=\"교육명을 입력해 주세요.\">\n          <app-img name=\"search\" (click)=\"getSafeEduList()\"></app-img>\n        </app-input>\n        </app-col>\n      </app-row>\n      <app-table type=\"card\">\n        <thead>\n          <tr>\n            <th style=\"width: 48px;\">No</th>\n            <th>교육명</th>\n            <th>이수일</th>\n            <th>이수시간</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of resSafeList?.rsMap let i = index\">\n           <td>{{ i+1 }}</td>\n           <td>{{ item.ctgo_education_safe_title }}</td>\n           <td>{{ item.create_date }}</td>\n           <td>{{ item.education_safe_time }}</td>\n          </tr>\n        </tbody>\n      </app-table>\n    </div>\n    <div [style.display]=\"menu === 4 ? 'block' : 'none'\">\n      <!-- 안전마일리지 -->\n      <app-row>\n        <app-col></app-col>\n        <app-col size=\"auto\" style=\"text-align: right;\">\n          <p>최종 수정일 : {{ formBasic.update_date }}</p>\n          <p *ngIf=\"formBasic.delete_state\">탈퇴일 : {{ formBasic.delete_date }}</p>\n        </app-col>\n      </app-row>\n      <h5>마일리지 현황</h5>\n      <app-table type=\"card\">\n        <thead>\n          <tr>\n            <th>총 적립 마일리지</th>\n            <th>총 사용 마일리지</th>\n            <th>잔여 마일리지</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{ resTotalMileageList?.rsObj?.total_mileage }}</td>\n            <td>{{ resTotalMileageList?.rsObj?.minus_mileage }}</td>\n            <td>{{ resTotalMileageList?.rsObj?.plus_mileage }}</td>\n          </tr>\n        </tbody>\n      </app-table>\n      <h5>안전 마일리지 적립 내역</h5>\n      <app-table type=\"card\">\n        <thead>\n          <tr>\n            <th style=\"width:48px\">No</th>\n            <th>마일리지 분류</th>\n            <th>지급자</th>\n            <th>적립일</th>\n            <th>적립 마일리지</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of resPlusMileageList?.rsMap let i = index\">\n            <td>{{ i+1 }}</td>\n            <td>{{ item.ctgo_safe_mileage }}</td>\n            <td>{{ item.payer_user_name }}</td>\n            <td>{{ item.create_date }}</td>\n            <td>{{ item.ctgo_safe_mileage_point }}</td>\n          </tr>\n        </tbody>\n      </app-table>\n      <app-row>\n        <app-col></app-col>\n        <app-col size=\"auto\">\n          <app-button fill=\"translucent\" style=\"width: 120px;\" (click)=\"MileageInsert()\" *ngIf=\"permission.mileageinsert\">마일리지 지급</app-button>\n        </app-col>\n      </app-row>\n      <h5>안전 마일리지 사용 내역</h5>\n      <app-table type=\"card\">\n        <thead>\n          <tr>\n            <th style=\"width:48px\">No</th>\n            <th>사용내역</th>\n            <th>사용이자</th>\n            <th>사용일</th>\n            <th>사용 마일리지</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of resMinusMileageList?.rsMap let i = index\">\n            <td>{{ i+1 }}</td>\n            <td>{{ item.ctgo_safe_mileage }}</td>\n            <td>{{ item.payer_user_name }}</td>\n            <td>{{ item.create_date }}</td>\n            <td>{{ item.ctgo_safe_mileage_point }}</td>\n          </tr>\n        </tbody>\n      </app-table>\n      <!-- <app-row>\n        <app-col></app-col>\n        <app-col size=\"auto\">\n          <app-button fill=\"translucent\" style=\"width: 120px;\">마일리지 사용</app-button>\n        </app-col>\n      </app-row> -->\n    </div>\n    <app-button-footer *ngIf=\"permission.approval\">\n      <app-button style=\"width: 120px;\" (click)=\"submit()\">저장</app-button>\n  </app-button-footer>\n      <!-- <ion-toolbar slot=\"bottom\" color=\"white\">\n        <ion-buttons slot=\"end\">\n          <app-button style=\"width: 120px;\">퇴사</app-button>\n        </ion-buttons>\n      </ion-toolbar> -->\n    </app-card>\n  </app-container>\n</ion-content>\n\n");

/***/ }),

/***/ 23412:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/my-page/change-phone/change-phone.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>{{ languagePack.getText('휴대폰 번호 변경') }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h4>{{ languagePack.getText('휴대폰 번호 변경') }}</h4>\n  \n  <app-input name=\"user_phone\" [label]=\"languagePack.getText('핸드폰')\"  [placeholder]=\"languagePack.getText('- 없이 숫자만 입력해주세요')\" type=\"tel\" \n  [color]=\"validator.user_phone?.valid === false ? 'warning' \n  : validator.sms_token?.valid === true && 'success'\"\n  [(ngModel)]=\"form.user_phone\" (delayKeyup)=\"overlapPhone()\" (buttonClick)=\"aligoSend()\" [required]=\"true\">\n  {{ languagePack.getText('인증번호 받기') }}\n  </app-input>\n  <app-input-caption *ngIf=\"validator.user_phone?.valid === false\" color=\"warning\">{{ validator.user_phone?.message }}</app-input-caption>\n  <app-input-caption *ngIf=\"validator.sms_token?.valid\" color=\"success\">인증이 완료되었습니다.</app-input-caption>\n  \n  <div @fadeAnimation *ngIf=\"validator.user_phone?.valid && !validator.sms_token?.valid\">\n    <app-input\n    name=\"sms_token\" [label]=\"languagePack.getText('인증번호')\" [placeholder]=\"languagePack.getText('인증번호를 입력해주세요.')\" type=\"tel\"\n    [color]=\"validator.sms_token?.valid === false && 'warning'\"\n    [(ngModel)]=\"form.sms_token\" (buttonClick)=\"aligoCheck()\" [required]=\"true\">\n    {{ languagePack.getText('확인') }}\n    </app-input>\n  </div>\n  <app-input-caption *ngIf=\"validator.sms_token?.valid === false\" color=\"warning\">{{ validator.sms_token?.message }}</app-input-caption>\n\n</ion-content>\n\n<app-button-footer>\n  <app-button (click)=\"dismiss()\">{{ languagePack.getText('취소') }}</app-button>\n  <app-button name=\"button_submit\" (click)=\"submit()\">{{ languagePack.getText('휴대폰 번호 변경') }}</app-button>\n</app-button-footer>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_member-management_member-management_partner-into-edit_partner-into-edit_-a65e80.js.map