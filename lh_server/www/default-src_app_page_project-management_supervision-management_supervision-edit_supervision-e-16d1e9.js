(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_project-management_supervision-management_supervision-edit_supervision-e-16d1e9"],{

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

/***/ 91936:
/*!********************************************************************************************************************!*\
  !*** ./src/app/page/project-management/supervision-management/supervision-edit/supervision-edit-routing.module.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupervisionEditPageRoutingModule": () => (/* binding */ SupervisionEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _supervision_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supervision-edit.page */ 76540);




const routes = [
    {
        path: '',
        component: _supervision_edit_page__WEBPACK_IMPORTED_MODULE_0__.SupervisionEditPage
    }
];
let SupervisionEditPageRoutingModule = class SupervisionEditPageRoutingModule {
};
SupervisionEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SupervisionEditPageRoutingModule);



/***/ }),

/***/ 58992:
/*!************************************************************************************************************!*\
  !*** ./src/app/page/project-management/supervision-management/supervision-edit/supervision-edit.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupervisionEditPageModule": () => (/* binding */ SupervisionEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _supervision_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supervision-edit-routing.module */ 91936);
/* harmony import */ var _supervision_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supervision-edit.page */ 76540);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);









let SupervisionEditPageModule = class SupervisionEditPageModule {
};
SupervisionEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _supervision_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupervisionEditPageRoutingModule
        ],
        declarations: [_supervision_edit_page__WEBPACK_IMPORTED_MODULE_1__.SupervisionEditPage]
    })
], SupervisionEditPageModule);



/***/ }),

/***/ 76540:
/*!**********************************************************************************************************!*\
  !*** ./src/app/page/project-management/supervision-management/supervision-edit/supervision-edit.page.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyContractData": () => (/* binding */ CompanyContractData),
/* harmony export */   "SupervisionEdit": () => (/* binding */ SupervisionEdit),
/* harmony export */   "SupervisionEditPage": () => (/* binding */ SupervisionEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_supervision_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./supervision-edit.page.html */ 25806);
/* harmony import */ var _supervision_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supervision-edit.page.scss */ 7545);
/* harmony import */ var _basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../basic/service/util/regex.service */ 92092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);











class CompanyContractData {
    constructor() {
        this.ctgo_construction_id = 0; //계약공종
        this.ctgo_construction_name = '';
        this.contract_name = ''; //계약명
        this.contract_start_date = ''; //계약기간~
        this.contract_end_date = ''; //~계약기간
        this.contract_amount = ''; //계약금액
        this.master_company_id = 0; //원청사ID
        this.master_company_name = '';
        this.project_id = 0; //현장ID
        this.project_name = ''; //현장 이름
    }
}
class SupervisionEdit {
    constructor() {
        this.company_contract_type = '감리사';
        this.company_contract_data = [];
    }
}
let SupervisionEditPage = class SupervisionEditPage {
    constructor(connect, alert, date, toast, _modal, user, regex) {
        this.connect = connect;
        this.alert = alert;
        this.date = date;
        this.toast = toast;
        this._modal = _modal;
        this.user = user;
        this.regex = regex;
        this.permission = {
            edit: false,
            agree: false
        };
        this.viewMode = false;
        this.isNew = false;
        this.updateStatus = true;
        this.form = new SupervisionEdit();
        this.selectList = [];
    }
    ngOnInit() {
        this.getPermission();
        this.getTerms();
        console.log("company - ", this.company_id);
        if (this.company_id) {
            this.viewMode = true;
            // this.isNew = false;
            this.getItem();
        }
        else {
            this.viewMode = false;
            // this.isNew = true;
        }
    }
    getPermission() {
        const { user_role } = this.user.userData;
        if (user_role === 'LH_HEAD')
            this.permission.edit = true;
        if (user_role === 'SUPER_HEAD')
            this.permission.edit = true;
    }
    getItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/project/company/masters/detail', {
                company_id: this.company_id
            }, {
                parse: ['company_file_data']
            });
            if (res.rsCode === 0) {
                this.form = res.rsObj;
                this.form.company_contract_data = res.rsMap;
            }
        });
    }
    contSave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.valid())
                return;
            this.alert.present({
                message: '저장하시겠습니까?',
                buttons: [
                    { text: '아니오' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/project/company/masters/insert', this.form, {});
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
    contEdit() {
        this.viewMode = false;
    }
    contDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/project/company/masters/delete', {
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
        });
    }
    agreement() {
        this.form.consignee_consent_date = this.date.today({}, 'SECOND');
    }
    contUpdate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.valid())
                return;
            this.alert.present({
                message: '수정 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/project/company/masters/update', this.form);
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
    getTerms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.termsRes = yield this.connect.run('/support/terms/get', { terms_title: '개인정보 처리방침' });
            //아무작동안함
            if (this.termsRes.rsCode === 0) {
            }
        });
    }
    addCompanyContractData() {
        const { user_role, belong_data } = this.user.userData;
        if (user_role === 'LH_HEAD') {
            this.form.company_contract_data.push(Object.assign(Object.assign({}, new CompanyContractData()), { project_id: belong_data.project_id }));
        }
        else if (user_role === 'MASTER_HEAD' && belong_data.company_contract_type === '원청사') {
            this.form.company_contract_data.push(Object.assign(Object.assign({}, new CompanyContractData()), { project_id: belong_data.project_id }));
        }
    }
    getItem_Map() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
                    handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
            // if(!company_contract_data.ctgo_construction_id) { this.toast.present({ message: '계약공종을 입력해주세요.',color:'warning'}); return false; };
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
            // if(!company_contract_data.manager_name) { this.toast.present({ message: '현장 담당지을 입력해주세요.',color:'warning'}); return false; };
            // if(!company_contract_data.manager_phone) { this.toast.present({ message: '현장 전화번호를 입력해주세요.',color:'warning'}); return false; };
            // if(!this.form.manager_name) this.form.manager_name = '';
            // if(!this.form.manager_phone) this.form.manager_phone = '';
            // if(!company_contract_data.manager_user_id) { this.toast.present({ message: '협력사 소장을 입력해주세요.',color:'warning'}); return false; };
        }
        return true;
    }
};
SupervisionEditPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__.DateService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _basic_service_util_regex_service__WEBPACK_IMPORTED_MODULE_2__.RegexService }
];
SupervisionEditPage.propDecorators = {
    company_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    project_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
SupervisionEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-supervision-edit',
        template: _raw_loader_supervision_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_supervision_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SupervisionEditPage);



/***/ }),

/***/ 7545:
/*!************************************************************************************************************!*\
  !*** ./src/app/page/project-management/supervision-management/supervision-edit/supervision-edit.page.scss ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBlcnZpc2lvbi1lZGl0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 25806:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/supervision-management/supervision-edit/supervision-edit.page.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>감리사 정보</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h4>회사 정보</h4>\n  <app-row mobileBreak>\n    <app-col>\n      <app-input  [required]=\"true\" [disabled]=\"viewMode\" label=\"업체명\" name=\"input\"\n      [(ngModel)]=\"form.company_name\"></app-input>\n    </app-col>\n    <app-col>\n      <app-input  [required]=\"true\" [disabled]=\"viewMode\" label=\"사업자등록번호(-포함)\" [(ngModel)]=\"form.business_register_no\" [maxlength]=\"12\"></app-input>\n    </app-col>\n    <app-col>\n      <app-input [required]=\"true\" [disabled]=\"viewMode\" name=\"input buisnessman\"\n        [(ngModel)]=\"form.company_ceo\" label=\"대표자\" placeholder=\"\"></app-input>\n    </app-col>\n  </app-row>\n\n  <app-row>\n    <app-col>\n      <h4>계약 정보</h4>\n    </app-col>\n    <app-col size=\"auto\" *ngIf=\"!viewMode && user.userData.user_role === 'LH_HEAD'\">\n      <app-button name=\"add_contract\" style=\"margin-bottom: 0;\" (click)=\"addCompanyContractData()\" fill=\"translucent\">추가</app-button>\n      <!-- <app-button name=\"remove_contract\" style=\"margin-top: 0;\" (click)=\"removeCompanyContractData()\" color=\"danger\" fill=\"translucent\">삭제</app-button> -->\n    </app-col>\n  </app-row>\n  <app-check-group [(ngModel)]=\"selectList\">\n    <app-table>\n      <thead>\n        <tr>\n          <!-- <th *ngIf=\"!viewMode && user.userData.user_role === 'LH_HEAD'\" style=\"width: 40px;\">\n            <app-check type=\"all\"></app-check>\n          </th> -->\n          <th>현장명</th>\n          <th>계약명</th>\n          <th>계약금액<br>(원/VAT 별도)</th>\n          <th style=\"width: 280px;\">계약기간</th>\n          <th>현장 담당자</th>\n          <th style=\"width: 130px;\">현장 전화번호(-포함)</th>\n          <th style=\"width: 80px;\" *ngIf=\"!viewMode\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngIf=\"!viewMode; else tempView\">\n          <tr *ngFor=\"let item of form.company_contract_data; let i = index\">\n            <!-- <td *ngIf=\"!viewMode && user.userData.user_role === 'LH_HEAD'\">\n              <app-check [on]=\"item\"></app-check>\n            </td> -->\n            <td>\n              <app-select-scene [disabled]=\"!viewMode && user.userData.user_role !== 'LH_HEAD'\" label=\"\" name=\"project_id\" [(ngModel)]=\"item.project_id\"></app-select-scene>\n            </td>\n            <td>\n              <app-input [disabled]=\"!viewMode && user.userData.user_role !== 'LH_HEAD'\" name=\"contract_name\" [(ngModel)]=\"item.contract_name\"></app-input>\n            </td>\n            <td>\n              <app-input [disabled]=\"!viewMode && user.userData.user_role !== 'LH_HEAD'\" name=\"contract_amount\" [(ngModel)]=\"item.contract_amount\"></app-input>\n            </td>\n            <td>\n              <app-input-group>\n                <app-calendar [disabled]=\"!viewMode && user.userData.user_role !== 'LH_HEAD'\" name=\"contract_start_date\" [(ngModel)]=\"item.contract_start_date\" [max]=\"item.contract_end_date\"></app-calendar>\n                ~\n                <app-calendar [disabled]=\"!viewMode && user.userData.user_role !== 'LH_HEAD'\" name=\"contract_end_date\" [(ngModel)]=\"item.contract_end_date\" [min]=\"item.contract_start_date\"></app-calendar>\n              </app-input-group>\n            </td>\n            <td>\n              <app-input name=\"manager_name\" [(ngModel)]=\"item.manager_name\"></app-input>\n            </td>\n            <td>\n              <app-input name=\"manager_phone\" [(ngModel)]=\"item.manager_phone\"></app-input>\n            </td>\n            <td>\n              <app-button (click)=\"removeCompanyContractData(item)\" *ngIf=\"!viewMode\">삭제</app-button>\n            </td>\n          </tr>\n        </ng-container>\n        <ng-template #tempView>\n          <tr *ngFor=\"let item of form.company_contract_data; let i = index\">\n            <td>\n              {{ item.project_name }}\n            </td>\n            <td>\n              {{ item.contract_name }}\n            </td>\n            <td>\n              {{ item.contract_amount }}\n            </td>\n            <td>\n              {{ item.contract_start_date }}\n              ~\n              {{ item.contract_end_date }}\n            </td>\n            <td>\n              {{ item.manager_name }}\n            </td>\n            <td>\n              {{ item.manager_phone }}\n            </td>\n          </tr>\n        </ng-template>\n      </tbody>\n    </app-table>\n  </app-check-group>\n</ion-content>\n\n<ng-container *ngIf=\"permission.edit\">\n  <app-button-footer *ngIf=\"company_id\">\n    <app-button name=\"edit\" fill=\"translucent\" *ngIf=\"viewMode\" (click)=\"contEdit()\">수정</app-button>\n    <app-button fill=\"translucent\" color=\"danger\" *ngIf=\"!viewMode && user.userData.user_role === 'LH_HEAD'\" (click)=\"contDelete()\" >삭제</app-button>\n    <app-button name=\"submit\" *ngIf=\"!viewMode\" (click)=\"contUpdate()\">저장</app-button>\n  </app-button-footer>\n  <app-button-footer *ngIf=\"!company_id\">\n    <app-button name=\"submit\" *ngIf=\"!viewMode\" (click)=\"contSave()\">저장</app-button>\n  </app-button-footer>\n</ng-container>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_project-management_supervision-management_supervision-edit_supervision-e-16d1e9.js.map