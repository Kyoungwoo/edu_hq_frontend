(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_project-management_partner-management_partner-edit_partner-edit_module_ts"],{

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

/***/ 77161:
/*!********************************************************************************************************!*\
  !*** ./src/app/page/project-management/partner-management/partner-edit/partner-edit-routing.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerEditPageRoutingModule": () => (/* binding */ PartnerEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _partner_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-edit.page */ 6947);




const routes = [
    {
        path: '',
        component: _partner_edit_page__WEBPACK_IMPORTED_MODULE_0__.PartnerEditPage
    }
];
let PartnerEditPageRoutingModule = class PartnerEditPageRoutingModule {
};
PartnerEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PartnerEditPageRoutingModule);



/***/ }),

/***/ 63008:
/*!************************************************************************************************!*\
  !*** ./src/app/page/project-management/partner-management/partner-edit/partner-edit.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerEditPageModule": () => (/* binding */ PartnerEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _partner_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-edit-routing.module */ 77161);
/* harmony import */ var _partner_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partner-edit.page */ 6947);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let PartnerEditPageModule = class PartnerEditPageModule {
};
PartnerEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _partner_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.PartnerEditPageRoutingModule
        ],
        declarations: [_partner_edit_page__WEBPACK_IMPORTED_MODULE_1__.PartnerEditPage]
    })
], PartnerEditPageModule);



/***/ }),

/***/ 6947:
/*!**********************************************************************************************!*\
  !*** ./src/app/page/project-management/partner-management/partner-edit/partner-edit.page.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyContractData": () => (/* binding */ CompanyContractData),
/* harmony export */   "PartnerDetail": () => (/* binding */ PartnerDetail),
/* harmony export */   "PartnerEditPage": () => (/* binding */ PartnerEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_partner_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./partner-edit.page.html */ 91094);
/* harmony import */ var _partner_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partner-edit.page.scss */ 68132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/promise.service */ 55520);
/* harmony import */ var src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/util/regex.service */ 92092);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ 92340);













class CompanyContractData {
    constructor() {
        this.ctgo_construction_id = 0; //계약공종
        this.ctgo_construction_name = '';
        this.contract_name = ''; //계약명
        this.contract_start_date = ''; //계약기간~
        this.contract_end_date = ''; //~계약기간
        this.contract_amount = ''; //계약금액
        // manager_user_id:number = 0; //협력사소장
        // manager_user_name:string = '';
        this.master_company_id = 0; //원청사ID
        this.master_company_name = '';
        this.project_id = 0; //현장ID
        this.project_name = ''; //현장 이름
    }
}
class PartnerDetail {
    constructor() {
        this.company_contract_data = [];
    }
}
let PartnerEditPage = class PartnerEditPage {
    constructor(el, connect, alert, date, toast, user, _modal, regex, promise) {
        this.el = el;
        this.connect = connect;
        this.alert = alert;
        this.date = date;
        this.toast = toast;
        this.user = user;
        this._modal = _modal;
        this.regex = regex;
        this.promise = promise;
        this.type = false;
        this.permission = {
            edit: false
        };
        this.viewMode = false;
        this.isNew = false;
        this.form = new PartnerDetail();
        this.selectList = [];
    }
    ngOnInit() {
        this.getPermission();
        if (this.company_id) {
            this.viewMode = true;
            // this.isNew = false;
            this.getItem();
        }
        else {
            this.viewMode = false;
            // this.isNew = true;
        }
        this.test();
        this.getTerms();
    }
    test() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.test.core.test)
                return;
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.test.Project.test)
                return;
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.test.Project.done)
                return;
            const testIndex = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.test.Project.type.indexOf('PARTNER');
            if (testIndex > -1) {
                const el = this.el.nativeElement;
                yield this.promise.wait();
                if (this.permission.edit) {
                    // 협력사 정보 입력
                    if (this.isNew) {
                        el.querySelector('[name=company_name]').dispatchEvent(new CustomEvent('setValue', { detail: `데브몬_${this.regex.random.id(5)}` }));
                        el.querySelector('[name=business_register_no]').dispatchEvent(new CustomEvent('setValue', { detail: `${this.regex.random.businessNo()}` }));
                        el.querySelector('[name=company_ceo]').dispatchEvent(new CustomEvent('setValue', { detail: `김수홍_${this.regex.random.id(5)}` }));
                    }
                    else {
                        el.querySelector('[name=edit]').dispatchEvent(new CustomEvent('click'));
                        yield this.promise.wait();
                    }
                    el.querySelector('[name=company_phone]').dispatchEvent(new CustomEvent('setValue', { detail: `${this.regex.random.phone()}` }));
                    // 계약정보 추가
                    el.querySelector('[name=add_contract]').dispatchEvent(new CustomEvent('click'));
                    yield this.promise.wait();
                    el.querySelector('[name=project_id]').dispatchEvent(new CustomEvent('click'));
                    yield this.promise.wait(2500);
                    // el.querySelector('[name=master_company_id]').dispatchEvent(new CustomEvent('click'));
                    // await this.promise.wait(1500);
                    el.querySelector('[name=contract_name]').dispatchEvent(new CustomEvent('setValue', { detail: `계약_${this.regex.random.id(5)}` }));
                    el.querySelector('[name=ctgo_construction_id]').dispatchEvent(new CustomEvent('click'));
                    yield this.promise.wait(1000);
                    el.querySelector('[name=contract_amount]').dispatchEvent(new CustomEvent('setValue', { detail: '1000' }));
                    el.querySelector('[name=contract_start_date]').dispatchEvent(new CustomEvent('setValue', { detail: this.date.today() }));
                    el.querySelector('[name=contract_end_date]').dispatchEvent(new CustomEvent('setValue', { detail: this.date.today({ month: 1 }) }));
                    el.querySelector('[name=manager_user_id]').dispatchEvent(new CustomEvent('click'));
                    yield this.promise.wait(1500);
                    // el.querySelector('[name=manager_name]').dispatchEvent(new CustomEvent('setValue', { detail: `고한솔_${this.regex.random.id(5)}` }));
                    // el.querySelector('[name=manager_phone]').dispatchEvent(new CustomEvent('setValue', { detail: `고한솔_${this.regex.random.id(5)}` }));
                    // el.querySelector('[name=manager_email]').dispatchEvent(new CustomEvent('setValue', { detail: `${this.regex.random.id(5)}@naver.com` }));
                    // if(this.permission.agree) el.querySelector('[name=consignee_consent_date]').dispatchEvent(new CustomEvent('click'));
                    el.querySelector('[name=submit]').dispatchEvent(new CustomEvent('click'));
                    yield this.promise.wait();
                    const alertButtons = document.querySelector('ion-alert').querySelectorAll('[type=button]');
                    alertButtons[1].dispatchEvent(new Event('click'));
                }
                else {
                    el.querySelector('[name=dismiss]').dispatchEvent(new CustomEvent('click'));
                }
            }
        });
    }
    getPermission() {
        const { user_role } = this.user.userData;
        if (user_role === 'MASTER_HEAD')
            this.permission.edit = true;
        if (user_role === 'PARTNER_HEAD')
            this.permission.edit = true;
    }
    getItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/project/company/partner/detail', {
                company_id: this.company_id
            }, {
                loading: true
            });
            if (res.rsCode === 0) {
                this.form = res.rsObj;
                this.form.company_contract_data = res.rsMap;
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    addCompanyContractData() {
        const { user_role, belong_data } = this.user.userData;
        if (user_role === 'LH_HEAD') {
            this.form.company_contract_data.push(Object.assign(Object.assign({}, new CompanyContractData()), { project_id: belong_data.project_id }));
        }
        else if (user_role === 'MASTER_HEAD' && belong_data.company_contract_type === '원청사') {
            this.form.company_contract_data.push(Object.assign(Object.assign({}, new CompanyContractData()), { project_id: belong_data.project_id, master_company_id: this.master_company_id }));
        }
    }
    getItem_Map() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/project/company/masters/detail', {
                company_id: this.company_id
            });
            if (res.rsCode === 0) {
                this.form.company_contract_data = res.rsMap;
            }
        });
    }
    removeCompanyContractData(item) {
        let dataSet = {
            project_id: item.project_id,
            company_id: this.company_id
        };
        this.alert.present({
            message: '삭제 하시겠습니까?',
            buttons: [
                { text: '아니요' },
                {
                    text: '예',
                    handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                        const res = yield this.connect.run('/project/company/contract/delete', dataSet);
                        if (res.rsCode === 0) {
                            this.getItem_Map();
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                    })
                }
            ]
        });
    }
    agreement() {
        this.form.consignee_consent_date = this.date.today({}, 'SECOND');
    }
    contEdit() {
        this.viewMode = false;
    }
    contSave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.valid())
                return;
            const alert = yield this.alert.present({
                message: '저장하시겠습니까?',
                buttons: [
                    { text: '아니오' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/project/company/partner/insert', this.form, {});
                            if (res.rsCode === 0) {
                                this._modal.dismiss('Y');
                            }
                            else {
                                this.toast.present({ color: 'warning', message: res.rsMsg });
                            }
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    contDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/project/company/partner/delete', {
                                company_id: this.company_id,
                                project_id: this.project_id
                            });
                            if (res.rsCode === 0) {
                                this._modal.dismiss('Y');
                            }
                            else {
                                this.toast.present({ color: 'warning', message: res.rsMsg });
                            }
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    contUpdate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.valid())
                return;
            this.alert.present({
                message: '수정 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/project/company/partner/update', this.form);
                            if (res.rsCode === 0) {
                                this._modal.dismiss('Y');
                            }
                            else {
                                this.toast.present({ color: 'warning', message: res.rsMsg });
                            }
                        })
                    }
                ]
            });
        });
    }
    valid() {
        var _a;
        // if(this.permission.agree) {
        //   if(!this.form.consignee_consent_date) { this.toast.present({ message: '개인정보 처리 위탁 동의를 해주시기 바랍니다.',color:'warning' }); return false };
        // }
        if (!this.form.company_name) {
            this.toast.present({ message: '업체명을 입력해주세요.', color: 'warning' });
            return false;
        }
        ;
        if (!this.form.business_register_no) {
            this.toast.present({ message: '사업자등록번호 10자리를 입력해주세요.', color: 'warning' });
            return false;
        }
        ;
        if (!this.form.company_ceo) {
            this.toast.present({ message: '대표명을 입력해주세요.', color: 'warning' });
            return false;
        }
        ;
        if (!((_a = this.form.company_contract_data) === null || _a === void 0 ? void 0 : _a.length)) {
            this.toast.present({ message: '계약정보를 입력해주세요.', color: 'warning' });
            return false;
        }
        for (let i = 0; i < this.form.company_contract_data.length; i++) {
            const company_contract_data = this.form.company_contract_data[i];
            if (!company_contract_data.project_id) {
                this.toast.present({ message: '현장을 입력해주세요.', color: 'warning' });
                return false;
            }
            ;
            // if(!company_contract_data.master_company_id) { this.toast.present({ message: '원청사를 입력해주세요.',color:'warning'}); return false; };
            if (!company_contract_data.ctgo_construction_id) {
                this.toast.present({ message: '계약공종을 입력해주세요.', color: 'warning' });
                return false;
            }
            ;
            if (!company_contract_data.contract_name) {
                this.toast.present({ message: '계약명을 입력해주세요.', color: 'warning' });
                return false;
            }
            ;
            if (!company_contract_data.contract_start_date) {
                this.toast.present({ message: '계약기간을 입력해주세요.', color: 'warning' });
                return false;
            }
            ;
            if (!company_contract_data.contract_end_date) {
                this.toast.present({ message: '계약기간을 입력해주세요.', color: 'warning' });
                return false;
            }
            ;
            if (!company_contract_data.contract_amount) {
                this.toast.present({ message: '계약금액을 입력해주세요.', color: 'warning' });
                return false;
            }
            // else if(!this.regex.number.test(company_contract_data.contract_amount)) { this.toast.present({ message: '계약금액은 숫자만 입력 가능합니다.',color:'warning'}); return false; };
            // if(!company_contract_data.manager_name) { this.toast.present({ message: '현장 담당자를 입력해주세요.',color:'warning'}); return false; };
            // if(!company_contract_data.manager_phone) { this.toast.present({ message: '담당자 전화번호를 입력해주세요.',color:'warning'}); return false; };
            // if(!this.form.manager_name) this.form.manager_name = '';
            // if(!this.form.manager_phone) this.form.manager_phone = '';
            // if(!company_contract_data.manager_user_id) { this.toast.present({ message: '협력사 소장을 입력해주세요.',color:'warning'}); return false; };
        }
        return true;
    }
    getTerms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.termsRes = yield this.connect.run('/support/terms/get', { terms_title: '개인정보 처리방침' });
            //아무작동안함
            if (this.termsRes.rsCode === 0) {
            }
        });
    }
};
PartnerEditPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_6__.DateService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_8__.RegexService },
    { type: src_app_basic_service_util_promise_service__WEBPACK_IMPORTED_MODULE_7__.PromiseService }
];
PartnerEditPage.propDecorators = {
    company_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    master_company_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    project_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }]
};
PartnerEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-partner-edit',
        template: _raw_loader_partner_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_partner_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PartnerEditPage);



/***/ }),

/***/ 68132:
/*!************************************************************************************************!*\
  !*** ./src/app/page/project-management/partner-management/partner-edit/partner-edit.page.scss ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0bmVyLWVkaXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 91094:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/partner-management/partner-edit/partner-edit.page.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>협력사 정보</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button name=\"dismiss\"></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h4>협력사 정보</h4>\n  <form>\n    <app-row>\n      <app-col>\n        <app-input name=\"company_name\" label=\"업체명\" [disabled]=\"viewMode\" [(ngModel)]=\"form.company_name\" placeholder=\"업체명\"></app-input>\n      </app-col>\n      <app-col>\n        <app-input name=\"business_register_no\" [disabled]=\"viewMode\" label=\"사업자등록번호(-포함)\" [(ngModel)]=\"form.business_register_no\" placeholder=\"사업자등록번호\" [maxlength]=\"12\"></app-input>\n      </app-col>\n      <app-col>\n        <app-input name=\"company_ceo\" [disabled]=\"viewMode\" label=\"대표자\" [(ngModel)]=\"form.company_ceo\"  placeholder=\"대표자\"></app-input>\n      </app-col>\n      <!-- <app-col>\n        <app-input name=\"company_phone\" label=\"회사전화\" [disabled]=\"viewMode\" [(ngModel)]=\"form.company_phone\" placeholder=\"회사전화\"></app-input>\n      </app-col> -->\n    </app-row>\n    <app-row>\n    </app-row>\n  </form>\n<app-row>\n  <app-col>\n    <h4>계약 정보</h4>\n  </app-col>\n  <app-col size=\"auto\" *ngIf=\"!viewMode && user.userData.user_role === 'MASTER_HEAD'\">\n    <app-button name=\"add_contract\" style=\"margin-bottom: 0;\" (click)=\"addCompanyContractData()\" fill=\"translucent\">추가</app-button>\n    <!-- <app-button name=\"remove_contract\" style=\"margin-top: 0;\" (click)=\"removeCompanyContractData()\" color=\"danger\" fill=\"translucent\">삭제</app-button> -->\n  </app-col>\n</app-row>\n<app-check-group [(ngModel)]=\"selectList\">\n  <app-table>\n    <thead>\n      <tr>\n        <!-- <th *ngIf=\"!viewMode && user.userData.user_role === 'MASTER_HEAD'\" style=\"width: 40px;\">\n          <app-check type=\"all\"></app-check>\n        </th> -->\n        <th>현장명</th>\n        <th>계약명</th>\n        <th>계약공종</th>\n        <th>계약금액<br>(원/VAT 별도)</th>\n        <th style=\"width: 280px;\">계약기간</th>\n        <th>현장 담당자</th>\n        <th style=\"width: 150px;\">담당자 전화번호(-포함)</th>\n        <th style=\"width: 80px;\" *ngIf=\"!viewMode && (user.userData.user_role !== 'PARTNER_GENERAL' && user.userData.user_role !== 'PARTNER_HEAD')\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngIf=\"!viewMode; else tempView\">\n        <tr *ngFor=\"let item of form.company_contract_data; let i = index\">\n          <!-- <td *ngIf=\"!viewMode && user.userData.user_role === 'MASTER_HEAD'\">\n            <app-check [on]=\"item\"></app-check>\n          </td> -->\n          <td>\n            <app-select-scene [disabled]=\"!viewMode && user.userData.user_role !== 'MASTER_HEAD'\" label=\"\" name=\"project_id\" [(ngModel)]=\"item.project_id\"></app-select-scene>\n          </td>\n          <!-- <td>\n            <app-select-contractor name=\"master_company_id\" [project_id]=\"item.project_id\" [(ngModel)]=\"item.master_company_id\"></app-select-contractor>\n          </td> -->\n          <td>\n            <app-input [disabled]=\"!viewMode && user.userData.user_role !== 'MASTER_HEAD'\" name=\"contract_name\" [(ngModel)]=\"item.contract_name\"></app-input>\n          </td>\n          <td>\n            <app-select-construction [disabled]=\"!viewMode && user.userData.user_role !== 'MASTER_HEAD'\" [master_company_id]=\"item.master_company_id || master_company_id\" label=\"\" name=\"ctgo_construction_id\" [project_id]=\"item.project_id\" [(ngModel)]=\"item.ctgo_construction_id\"></app-select-construction>\n          </td>\n          <td>\n            <app-input [disabled]=\"!viewMode && user.userData.user_role !== 'MASTER_HEAD'\" name=\"contract_amount\" [(ngModel)]=\"item.contract_amount\"></app-input>\n          </td>\n          <td>\n            <app-input-group>\n              <app-calendar [disabled]=\"!viewMode && user.userData.user_role !== 'MASTER_HEAD'\" name=\"contract_start_date\" [(ngModel)]=\"item.contract_start_date\" [max]=\"item.contract_end_date\"></app-calendar>\n              ~\n              <app-calendar [disabled]=\"!viewMode && user.userData.user_role !== 'MASTER_HEAD'\" name=\"contract_end_date\" [(ngModel)]=\"item.contract_end_date\" [min]=\"item.contract_start_date\"></app-calendar>\n            </app-input-group>\n          </td>\n          <td>\n            <app-input name=\"manager_name\" [(ngModel)]=\"item.manager_name\"></app-input>\n          </td>\n          <td>\n            <app-input name=\"manager_phone\" [(ngModel)]=\"item.manager_phone\"></app-input>\n          </td>\n          <td>\n            <app-button (click)=\"removeCompanyContractData(item)\" *ngIf=\"!viewMode && (user.userData.user_role !== 'PARTNER_GENERAL' && user.userData.user_role !== 'PARTNER_HEAD')\">삭제</app-button>\n          </td>\n          <!-- <td>\n            <app-select-people name=\"manager_user_id\"\n            [company_id]=\"form.company_id\"\n            [user_type]=\"'COMPANY'\"\n            [user_type_editable]=\"false\"\n            [(ngModel)]=\"item.manager_user_id\"></app-select-people>\n          </td> -->\n        </tr>\n      </ng-container>\n      <ng-template #tempView>\n        <tr *ngFor=\"let item of form.company_contract_data; let i = index\">\n          <td>\n            {{ item.project_name }}\n          </td>\n          <td>\n            {{ item.contract_name }}\n          </td>\n          <td>\n            {{ item.ctgo_construction_name }}\n          </td>\n          <td>\n            {{ item.contract_amount }}\n          </td>\n          <td>\n            {{ item.contract_start_date }}\n            ~\n            {{ item.contract_end_date }}\n          </td>\n          <td>\n            {{ item.manager_name }}\n          </td>\n          <td>\n            {{ item.manager_phone }}\n          </td>\n        </tr>\n      </ng-template>\n    </tbody>\n  </app-table>\n</app-check-group>\n<!-- <h4>담당자 정보</h4> -->\n<!-- <app-row>\n  <app-col>\n    <app-input name=\"manager_name\" [disabled]=\"viewMode\" [(ngModel)]=\"form.manager_name\" label=\"성명\"></app-input>\n  </app-col>\n  <app-col>\n    <app-input name=\"manager_phone\" [disabled]=\"viewMode\" [(ngModel)]=\"form.manager_phone\" [type]=\"'tel'\" label=\"연락처\"></app-input>\n  </app-col>\n  <app-col>\n    <app-email name=\"manager_email\" [disabled]=\"viewMode\" [(ngModel)]=\"form.manager_email\"></app-email>\n  </app-col>\n</app-row> -->\n<!-- <h4>개인정보 처리 위탁 동의</h4>\n<app-row>\n  <app-col>\n    <app-input name=\"company_name_val\" [(ngModel)]=\"form.company_name\" label=\"위탁자\" [disabled]=\"true\"></app-input>\n  </app-col>\n  <app-col>\n    <app-input [disabled]=\"viewMode\" name=\"fiduciary\" value=\"한국토지주택공사\" label=\"수탁자\"></app-input>\n  </app-col>\n  <app-col>\n    <app-input name=\"consignee_consent_date_val\" [(ngModel)]=\"form.consignee_consent_date\" label=\"동의현황\" [disabled]=\"true\"></app-input>\n  </app-col>\n</app-row>\n<app-row>\n  <app-col>\n    <h4>개인정보 처리 위탁 동의서</h4>\n    <app-textarea *ngIf=\"termsRes\" name=\"terms_text\" [rows]=\"10\" [disabled]=\"viewMode\" [(ngModel)]=\"termsRes?.rsObj.terms_text\"></app-textarea>\n    <app-button name=\"consignee_consent_date\" style=\"width:100%\" *ngIf=\"permission.agree && !viewMode\" (click)=\"agreement()\">동의합니다</app-button>\n  </app-col>\n</app-row> -->\n</ion-content>\n<ng-container *ngIf=\"permission.edit\">\n  <app-button-footer *ngIf=\"company_id\">\n    <app-button name=\"edit\" fill=\"translucent\" *ngIf=\"viewMode\" (click)=\"contEdit()\">수정</app-button>\n    <app-button fill=\"translucent\" color=\"danger\" *ngIf=\"!viewMode && user.userData.user_role === 'MASTER_HEAD'\" (click)=\"contDelete()\" >삭제</app-button>\n    <app-button name=\"submit\" *ngIf=\"!viewMode\" (click)=\"contUpdate()\">저장</app-button>\n  </app-button-footer>\n  <app-button-footer *ngIf=\"!company_id\">\n    <app-button name=\"submit\" *ngIf=\"!viewMode\" (click)=\"contSave()\">저장</app-button>\n  </app-button-footer>\n</ng-container>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_project-management_partner-management_partner-edit_partner-edit_module_ts.js.map