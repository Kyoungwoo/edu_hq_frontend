(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_notice-board_procedure_procedure-edit_procedure-edit_module_ts"],{

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

/***/ 47695:
/*!*********************************************************************************************!*\
  !*** ./src/app/page/notice-board/procedure/procedure-edit/procedure-edit-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcedureEditPageRoutingModule": () => (/* binding */ ProcedureEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _procedure_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./procedure-edit.page */ 69922);




const routes = [
    {
        path: '',
        component: _procedure_edit_page__WEBPACK_IMPORTED_MODULE_0__.ProcedureEditPage
    }
];
let ProcedureEditPageRoutingModule = class ProcedureEditPageRoutingModule {
};
ProcedureEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProcedureEditPageRoutingModule);



/***/ }),

/***/ 29669:
/*!*************************************************************************************!*\
  !*** ./src/app/page/notice-board/procedure/procedure-edit/procedure-edit.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcedureEditPageModule": () => (/* binding */ ProcedureEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../basic/component/basic.component.module */ 95511);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../component/component.module */ 55051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _procedure_edit_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./procedure-edit-routing.module */ 47695);
/* harmony import */ var _procedure_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./procedure-edit.page */ 69922);









let ProcedureEditPageModule = class ProcedureEditPageModule {
};
ProcedureEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_1__.ComponentModule,
            _basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_0__.BasicComponentModule,
            _procedure_edit_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProcedureEditPageRoutingModule
        ],
        declarations: [_procedure_edit_page__WEBPACK_IMPORTED_MODULE_3__.ProcedureEditPage]
    })
], ProcedureEditPageModule);



/***/ }),

/***/ 69922:
/*!***********************************************************************************!*\
  !*** ./src/app/page/notice-board/procedure/procedure-edit/procedure-edit.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcedureItem": () => (/* binding */ ProcedureItem),
/* harmony export */   "ProcedureEditPage": () => (/* binding */ ProcedureEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_procedure_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./procedure-edit.page.html */ 25060);
/* harmony import */ var _procedure_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./procedure-edit.page.scss */ 43387);
/* harmony import */ var _basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../basic/service/core/language-pack.service */ 96083);
/* harmony import */ var _basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../basic/service/ionic/alert.service */ 82929);
/* harmony import */ var _basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../basic/service/util/date.service */ 46879);
/* harmony import */ var _basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../basic/service/core/user.service */ 29730);
/* harmony import */ var _basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../basic/service/ionic/toast.service */ 22455);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../basic/service/core/connect.service */ 71090);
/* harmony import */ var _basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../basic/service/core/file.service */ 89613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);












class ProcedureItem {
    constructor() {
        this.work_procedure_file_data = [];
        this.file = [];
        this.file_json = new _basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_8__.FileJson();
    }
}
let ProcedureEditPage = class ProcedureEditPage {
    constructor(connect, _modal, toast, user, date, alert, file, languagePack) {
        this.connect = connect;
        this._modal = _modal;
        this.toast = toast;
        this.user = user;
        this.date = date;
        this.alert = alert;
        this.file = file;
        this.languagePack = languagePack;
        this.update_state = false;
        this.permission = {
            edit: false
        };
        this.form = new ProcedureItem();
        this.validator = new _basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_7__.Validator(new ProcedureItem()).validator;
        this.useNotice = false;
    }
    ngOnInit() {
        // if(this.user.userData.belong_data.company_contract_type === 'LH') { 
        //   this.form.project_id = 0;
        // }
        // this.getPermission();
        if (this.work_procedure_id) {
            this.title = '상세';
            this.get();
        }
        else {
            this.update_state = true;
            this.getForm();
            this.title = '등록';
        }
    }
    // getPermission() {
    //   const company_contract_type = this.user.userData.belong_data.company_contract_type;
    //   if(company_contract_type === 'LH'
    //   || company_contract_type === '원청사') {
    //     this.permission.edit = true;
    //   } else {
    //     this.permission.edit = false;
    //   }
    // }
    getForm() {
        const { user_name, belong_data } = this.user.userData;
        if (this.searchForm) {
            console.log('if - ', this.form);
            this.form.project_id = this.searchForm.project_id;
            this.form.master_company_id = this.searchForm.master_company_id;
        }
        else {
            console.log('else - ', this.form);
            this.form.project_id = belong_data.project_id;
            this.form.master_company_id = belong_data.master_company_id ? belong_data.master_company_id : belong_data.company_id;
        }
        this.form.company_id = belong_data.company_id;
        this.form.company_name = belong_data.company_name;
        this.form.create_user_name = user_name;
        this.form.create_date = this.date.today();
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/board/work_procedure/detail', {
                work_procedure_id: this.work_procedure_id
            }, { loading: true, parse: ['work_procedure_file_data'] });
            if (res.rsCode === 0) {
                this.form = Object.assign(Object.assign({}, this.form), res.rsObj);
                if (this.user.userData.user_id === this.form.create_user_id) {
                    this.useNotice = true;
                }
                // const scopeOne = this.noticeRange.list1.find(item => item.value === this.form.public_scope_one);
                // const scopeTwo = this.noticeRange.list2.find(item => item.value === this.form.public_scope_two);
                // this.rangeText = `${scopeOne.text},${scopeTwo.text},${this.form.scope_company_name ? this.form.scope_company_name : ''}`;
                // if(!this.form.scope_company_name) {
                //   this.rangeText.substring(1,this.rangeText.length -1);
                // }
            }
        });
    }
    submit() {
        // this.noticeText.update();
        if (this.form.work_procedure_id)
            this.update();
        else
            this.noticeInsert();
    }
    noticeInsert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.form.project_id)
                return this.toast.present({ message: '현장명을 입력해주세요.', color: 'warning' });
            if (!this.form.work_procedure_language)
                return this.toast.present({ message: '언어를 선택해주세요.', color: 'warning' });
            //메소드 호출
            const alert = yield this.alert.present({
                message: '등록 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/board/work_procedure/insert', this.form);
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
    update() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.form.project_id)
                return this.toast.present({ message: '현장명을 입력해주세요.', color: 'warning' });
            if (!this.form.work_procedure_language)
                return this.toast.present({ message: '언어를 선택해주세요.', color: 'warning' });
            const alert = yield this.alert.present({
                message: '수정 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/board/work_procedure/update', this.form);
                            if (res.rsCode === 0) {
                                this.update_state = false;
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
    Delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/board/work_procedure/delete', {
                                work_procedure_id: this.work_procedure_id
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
    dismiss() {
        this._modal.dismiss();
    }
    updateButton() {
        if (this.update_state)
            this.submit();
        else
            this.update_state = true;
    }
};
ProcedureEditPage.ctorParameters = () => [
    { type: _basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_7__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: _basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_4__.DateService },
    { type: _basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_8__.FileService },
    { type: _basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_2__.LanguagePackService }
];
ProcedureEditPage.propDecorators = {
    work_procedure_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    searchForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }]
};
ProcedureEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-procedure-edit',
        template: _raw_loader_procedure_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_procedure_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProcedureEditPage);



/***/ }),

/***/ 43387:
/*!*************************************************************************************!*\
  !*** ./src/app/page/notice-board/procedure/procedure-edit/procedure-edit.page.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jZWR1cmUtZWRpdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 25060:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/notice-board/procedure/procedure-edit/procedure-edit.page.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>작업 절차서 {{ title }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ng-container *mobileHidden>\n  <ion-content>\n    <h4>공지사항</h4>\n   <app-row mobileBreak>\n     <app-col>\n        <app-select-scene label=\"현장명\" [(ngModel)]=\"form.project_id\" [disabled]=\"true\"></app-select-scene>\n     </app-col>\n     <app-col>\n      <app-input label=\"업체명\" [(ngModel)]=\"form.company_name\" [disabled]=\"true\"></app-input>\n     </app-col>\n   </app-row>\n   <app-row mobileBreak>\n    <app-col>\n        <app-input label=\"작성자\" [(ngModel)]=\"form.create_user_name\" [disabled]=\"true\"></app-input>\n    </app-col>\n    <app-col>\n      <app-input label=\"작성일\" [(ngModel)]=\"form.create_date\" [disabled]=\"true\"></app-input>\n    </app-col>\n  </app-row>\n  <app-row mobileBreak>\n    <app-col>\n      <app-select [disabled]=\"!update_state\" label=\"언어\" [(ngModel)]=\"form.work_procedure_language\" [required]=\"true\">\n        <app-select-option value=\"한국어\">한국어</app-select-option>\n        <app-select-option value=\"영어\">영어</app-select-option>\n        <app-select-option value=\"베트남어\">베트남어</app-select-option>\n        <app-select-option value=\"중국어\">중국어</app-select-option>\n        <app-select-option value=\"태국어\">태국어</app-select-option>\n      </app-select>\n    </app-col>\n    <app-col>\n      <app-select-contractor [disabled]=\"!update_state\" [allState]=\"true\" [project_id]=\"form.project_id\" [multiple]=\"false\" [(ngModel)]=\"form.master_company_id\" *ngIf=\"user.userData.belong_data.company_contract_type === 'LH'\"></app-select-contractor>\n    </app-col>\n  </app-row>\n    <app-row>\n      <app-col>\n        <app-input [disabled]=\"!update_state\" label=\"제목\" [(ngModel)]=\"form.work_procedure_title\"></app-input>\n      </app-col>\n    </app-row>\n    <app-row>\n      <app-col>\n        <app-textarea label=\"내용\" \n        [rows]=\"10\"\n        [(ngModel)]=\"form.work_procedure_text\" [readonly]=\"!update_state\"></app-textarea>\n        <!-- <app-smartedit #noticeText name=\"notice_text\" placeholder=\"내용을 입력하세요.\" \n        [disabled]=\"!update_state\"\n        [color]=\"validator.notice_title?.valid === false && 'warning'\"\n        [(ngModel)]=\"form.notice_content\"></app-smartedit> -->\n        <app-input-caption *ngIf=\"validator.work_procedure_title?.valid === false\">{{ validator.work_procedure_title.message }}</app-input-caption>\n      </app-col>\n    </app-row>\n    <app-row *mobileShow>\n      <app-col>\n        <app-textarea value=\"공지합니다\" [readonly]=\"true\"></app-textarea>\n      </app-col>\n    </app-row>\n    <h4>\n      <ion-toolbar color=\"white\">\n      <app-row>\n        <app-col>\n          첨부자료\n        </app-col>\n        <app-col size=\"auto\" *ngIf=\"update_state\">\n          <app-button fill=\"translucent\">추가\n            <app-file name=\"input\" view_type=\"PROCEDURE\"\n            [(ngModel)]=\"form.work_procedure_file_data\" \n            [file]=\"form.file\" \n            [file_json]=\"form.file_json\" [multiple]=\"true\"></app-file>\n          </app-button>\n        </app-col>\n      </app-row>\n      </ion-toolbar>\n    </h4>\n    <app-file-preview [readonly]=\"!update_state\"  *ngFor=\"let futItem of form.work_procedure_file_data; let i = index\" [futItem]=\"futItem\"  \n    (buttonClick)=\"form.work_procedure_file_data.splice(i,1)\"></app-file-preview>\n\n</ion-content>\n<app-button-footer>\n  <!-- <app-button *ngIf=\"item && useNotice\" fill=\"translucent\" (click)=\"submit()\">수정</app-button> -->\n  <app-button *ngIf=\"work_procedure_id && useNotice\" fill=\"translucent\" (click)=\"updateButton()\">{{ update_state ? '저장' : '수정' }}</app-button>\n  <app-button *ngIf=\"work_procedure_id && useNotice\"color=\"danger\" (click)=\"Delete()\" fill=\"translucent\">삭제</app-button>\n  <app-button *ngIf=\"!work_procedure_id\" (click)=\"submit()\">저장</app-button>\n</app-button-footer>\n</ng-container>\n\n<!-- 모바일 -->\n<ng-container *mobileShow>\n  <ion-content>\n    <app-row>\n      <app-col>\n        <h4>{{ languagePack.getText('공지사항') }}</h4>\n      </app-col>\n    </app-row>\n    <app-card>\n      <app-row>\n        <app-col>\n          <h5>{{ languagePack.getText('현장명') }}</h5>\n        </app-col>\n        <app-col>\n          <p>{{ form.project_name}}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>{{ languagePack.getText('업체명') }}</h5>\n        </app-col>\n        <app-col >\n          <p>{{ form.company_name }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>{{ languagePack.getText('작성자') }}</h5>\n        </app-col>\n        <app-col>\n          <p>{{ form.create_user_name }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>{{ languagePack.getText('작성일') }}</h5>\n        </app-col>\n        <app-col >\n          <p>{{ form.create_date }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>{{ languagePack.getText('구분') }}</h5>\n        </app-col>\n        <app-col>\n          <p>{{ form.work_procedure_language }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>제목</h5>\n        </app-col>\n        <app-col >\n          <p>{{ form.work_procedure_title }}</p>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <h5>내용</h5>\n        </app-col>\n        <app-col >\n          <p>{{ form.work_procedure_text }}</p>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-row>\n      <app-col>\n        <h4>{{ languagePack.getText('첨부자료') }}</h4>\n      </app-col>\n    </app-row>\n    <app-file-preview [readonly]=\"!update_state\"  *ngFor=\"let futItem of form.work_procedure_file_data; let i = index\" [futItem]=\"futItem\"  \n    (buttonClick)=\"form.work_procedure_file_data.splice(i,1)\"></app-file-preview>\n  </ion-content>\n</ng-container>\n<app-button-footer *mobileShow>\n  <app-button (click)=\"dismiss()\">{{ languagePack.getText('확인') }}</app-button>\n</app-button-footer>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_notice-board_procedure_procedure-edit_procedure-edit_module_ts.js.map