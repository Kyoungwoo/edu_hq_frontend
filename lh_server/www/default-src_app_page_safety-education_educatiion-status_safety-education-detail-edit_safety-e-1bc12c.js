(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_safety-education_educatiion-status_safety-education-detail-edit_safety-e-1bc12c"],{

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

/***/ 71877:
/*!***********************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/qr-education-in/qr-education-in-routing.module.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrEducationInPageRoutingModule": () => (/* binding */ QrEducationInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _qr_education_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-education-in.page */ 48422);




const routes = [
    {
        path: '',
        component: _qr_education_in_page__WEBPACK_IMPORTED_MODULE_0__.QrEducationInPage
    }
];
let QrEducationInPageRoutingModule = class QrEducationInPageRoutingModule {
};
QrEducationInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QrEducationInPageRoutingModule);



/***/ }),

/***/ 42783:
/*!***************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/qr-education-in/qr-education-in.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrEducationInPageModule": () => (/* binding */ QrEducationInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _qr_education_in_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-education-in-routing.module */ 71877);
/* harmony import */ var _qr_education_in_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-education-in.page */ 48422);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let QrEducationInPageModule = class QrEducationInPageModule {
};
QrEducationInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _qr_education_in_routing_module__WEBPACK_IMPORTED_MODULE_0__.QrEducationInPageRoutingModule
        ],
        declarations: [_qr_education_in_page__WEBPACK_IMPORTED_MODULE_1__.QrEducationInPage]
    })
], QrEducationInPageModule);



/***/ }),

/***/ 48422:
/*!*************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/qr-education-in/qr-education-in.page.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrEducationInPage": () => (/* binding */ QrEducationInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_qr_education_in_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./qr-education-in.page.html */ 67567);
/* harmony import */ var _qr_education_in_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-education-in.page.scss */ 62477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var qrious__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrious */ 96434);
/* harmony import */ var qrious__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrious__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);







let QrEducationInPage = class QrEducationInPage {
    constructor(navParams, connect, _modal) {
        this.navParams = navParams;
        this.connect = connect;
        this._modal = _modal;
        this.qr = null;
    }
    ngOnInit() {
        this.eduTime = `${this.item.education_safe_start_time} ~ ${this.item.education_safe_end_time}`;
        this.generatorQrcode();
    }
    generatorQrcode() {
        console.log("this.navParams", `${this.navParams.data.item.education_safe_id}`);
        this.qr = new (qrious__WEBPACK_IMPORTED_MODULE_2___default())({
            element: document.getElementById('qrious'),
            size: 250,
            value: '{"education_safe_id":"' + this.navParams.data.item.education_safe_id + '","type":"EDU"}' // `${this.navParams.data.item.education_safe_id}`
        });
    }
    downloadQR() {
        let link = document.createElement("a");
        link.download = 'QRcode';
        link.href = this.qr.image.currentSrc;
        link.click();
    }
    dismiss() {
        this._modal.dismiss(true);
    }
};
QrEducationInPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
QrEducationInPage.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
QrEducationInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-qr-education-in',
        template: _raw_loader_qr_education_in_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_qr_education_in_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QrEducationInPage);



/***/ }),

/***/ 78415:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/safety-education-detail-edit/safety-education-detail-edit-routing.module.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyEducationDetailEditPageRoutingModule": () => (/* binding */ SafetyEducationDetailEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _safety_education_detail_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-education-detail-edit.page */ 36681);




const routes = [
    {
        path: '',
        component: _safety_education_detail_edit_page__WEBPACK_IMPORTED_MODULE_0__.SafetyEducationDetailEditPage
    }
];
let SafetyEducationDetailEditPageRoutingModule = class SafetyEducationDetailEditPageRoutingModule {
};
SafetyEducationDetailEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SafetyEducationDetailEditPageRoutingModule);



/***/ }),

/***/ 66660:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/safety-education-detail-edit/safety-education-detail-edit.module.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyEducationDetailEditPageModule": () => (/* binding */ SafetyEducationDetailEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _safety_education_detail_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-education-detail-edit-routing.module */ 78415);
/* harmony import */ var _safety_education_detail_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-education-detail-edit.page */ 36681);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _qr_education_in_qr_education_in_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../qr-education-in/qr-education-in.module */ 42783);









let SafetyEducationDetailEditPageModule = class SafetyEducationDetailEditPageModule {
};
SafetyEducationDetailEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _qr_education_in_qr_education_in_module__WEBPACK_IMPORTED_MODULE_3__.QrEducationInPageModule,
            _safety_education_detail_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.SafetyEducationDetailEditPageRoutingModule,
        ],
        declarations: [_safety_education_detail_edit_page__WEBPACK_IMPORTED_MODULE_1__.SafetyEducationDetailEditPage]
    })
], SafetyEducationDetailEditPageModule);



/***/ }),

/***/ 36681:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/safety-education-detail-edit/safety-education-detail-edit.page.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditItem": () => (/* binding */ EditItem),
/* harmony export */   "SafetyEducationDetailEditPage": () => (/* binding */ SafetyEducationDetailEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_safety_education_detail_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./safety-education-detail-edit.page.html */ 33149);
/* harmony import */ var _safety_education_detail_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-education-detail-edit.page.scss */ 26905);
/* harmony import */ var _basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../basic/service/core/file.service */ 89613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var src_app_component_modal_people_delete_people_delete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/component/modal/people-delete/people-delete.component */ 84921);
/* harmony import */ var src_app_component_modal_search_attendance_search_attendance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/component/modal/search-attendance/search-attendance.component */ 66822);
/* harmony import */ var _qr_education_in_qr_education_in_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../qr-education-in/qr-education-in.page */ 48422);














class EditItem {
    constructor() {
        this.education_safe_manager_ids = [];
        this.company_file_data = [];
        this.education_safe_file_data = [];
        this.file = [];
        this.file_json = new _basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_2__.FileJson();
    }
}
class attendantRes {
}
let SafetyEducationDetailEditPage = class SafetyEducationDetailEditPage {
    constructor(connect, date, _modal, toast, user, alert) {
        this.connect = connect;
        this.date = date;
        this._modal = _modal;
        this.toast = toast;
        this.user = user;
        this.alert = alert;
        this.form = new EditItem();
        this.attentForm = {
            education_safe_id: 0,
            search_text: ''
        };
        this.eduState = '';
        this.user_id = [];
        this.editable = {
            update: true,
            educationMenu: 1,
            educationMenu_state: false,
            my_state: false
        };
        this.eduUpdate = false;
        this.input_active = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (this.item) {
                yield this.getItem();
                this.eduGetList();
            }
            else {
                const { belong_data } = this.user.userData;
                this.form.education_safe_date = this.date.today();
                this.form.project_id = belong_data.project_id;
                this.form.project_name = belong_data.project_name;
                this.form.company_id = belong_data.company_id;
                this.form.company_name = belong_data.company_name;
                this.form.education_safe_state = '교육 전';
                this.form.create_date = this.date.today();
                this.input_active = true;
                // this.editable.update = true;
            }
        });
    }
    openDetailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: src_app_component_modal_search_attendance_search_attendance_component__WEBPACK_IMPORTED_MODULE_9__.SearchAttendanceComponent,
                componentProps: {
                    title: '출석등록'
                }
            });
            modal.present();
        });
    }
    eduGetList() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.res = yield this.connect.run('/education/attendant/list', {
                education_safe_id: this.item.education_safe_id,
                search_text: this.attentForm.search_text
            });
            if (this.res.rsCode === 0) {
                this.user_id = [];
                (_a = this.res) === null || _a === void 0 ? void 0 : _a.rsMap.map((data) => {
                    this.user_id.push(data.user_id);
                });
                this.eduUpdate = true;
                console.log("this.eduUpdate - ", this.eduUpdate);
            }
        });
    }
    notReady() {
        this.toast.present({ message: '준비중....', color: 'warning' });
    }
    getItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/education/detail', { education_safe_id: this.item.education_safe_id }, {
                parse: ['education_safe_manager_ids', 'education_safe_manager_names', 'education_safe_file_data', 'company_file_data']
            });
            if (res.rsCode === 0) {
                this.form = Object.assign(Object.assign({}, this.form), res.rsObj);
                // console.log('this.form - ', this.form);
                this.form.education_safe_manager_ids.forEach(item => {
                    if (Number(item) === this.user.userData.user_id)
                        this.editable.educationMenu_state = true;
                });
                // if(this.form.create_user_id !== this.user.userData.user_id) this.editable.update = true;
                if (this.form.create_user_id === this.user.userData.user_id)
                    this.editable.my_state = true;
            }
            this.input_active = true;
        });
    }
    updateItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log("update - ", this.form);
            if (!this.form.ctgo_education_safe_id)
                return this.toast.present({ message: '교육명을 설정해 주세요.', color: 'warning' });
            if (!this.form.education_safe_target)
                return this.toast.present({ message: '교육대상을 입력해 주세요.', color: 'warning' });
            if (!this.form.education_safe_place)
                return this.toast.present({ message: '교육장소를 입력해 주세요.', color: 'warning' });
            if (!this.form.education_safe_date)
                return this.toast.present({ message: '교육일을 설정해 주세요.', color: 'warning' });
            if (!this.form.education_safe_start_time)
                return this.toast.present({ message: '교육시간을 설정해 주세요.', color: 'warning' });
            if (!this.form.education_safe_end_time)
                return this.toast.present({ message: '교육시간을 설정해 주세요.', color: 'warning' });
            let start_time = Number(this.form.education_safe_start_time.split(':')[0] + this.form.education_safe_start_time.split(':')[1]);
            let end_time = Number(this.form.education_safe_end_time.split(':')[0] + this.form.education_safe_end_time.split(':')[1]);
            if (start_time >= end_time)
                return this.toast.present({ message: '교육종료시간을 교육시작시간보다 나중으로 해주세요.', color: 'warning' });
            const alert = yield this.alert.present({
                message: '수정하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/education/update', this.form);
                            if (res.rsCode === 0) {
                                this._modal.dismiss(true);
                                this.toast.present({ message: '수정되었습니다.', color: 'primary' });
                            }
                            else {
                                this.toast.present({ message: res.rsMsg, color: 'warning' });
                            }
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            // if(this.form.file_json.insert.length){
            //   this.form.file_json.insert.map((item) => {
            //     if(item.view_type === 'EDU_ONE') item.order_no = 1;
            //     if(item.view_type === 'EDU_TWO') item.order_no = 2;
            //   });
            // }
            if (!this.form.ctgo_education_safe_id)
                return this.toast.present({ message: '교육명을 설정해 주세요.', color: 'warning' });
            if (!this.form.education_safe_target)
                return this.toast.present({ message: '교육대상을 입력해 주세요.', color: 'warning' });
            if (!this.form.education_safe_place)
                return this.toast.present({ message: '교육장소를 입력해 주세요.', color: 'warning' });
            if (!this.form.education_safe_date)
                return this.toast.present({ message: '교육일을 설정해 주세요.', color: 'warning' });
            if (!this.form.education_safe_start_time)
                return this.toast.present({ message: '교육시간을 설정해 주세요.', color: 'warning' });
            if (!this.form.education_safe_end_time)
                return this.toast.present({ message: '교육시간을 설정해 주세요.', color: 'warning' });
            let start_time = Number(this.form.education_safe_start_time.split(':')[0] + this.form.education_safe_start_time.split(':')[1]);
            let end_time = Number(this.form.education_safe_end_time.split(':')[0] + this.form.education_safe_end_time.split(':')[1]);
            if (start_time >= end_time)
                return this.toast.present({ message: '교육종료시간을 교육시작시간보다 나중으로 해주세요.', color: 'warning' });
            const alert = yield this.alert.present({
                message: '저장하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/education/insert', this.form);
                            if (res.rsCode === 0) {
                                this._modal.dismiss(true);
                                this.toast.present({ message: '저장되었습니다.', color: 'primary' });
                            }
                            else {
                                this.toast.present({ message: res.rsMsg, color: 'warning' });
                            }
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    userInfo(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: src_app_component_modal_people_delete_people_delete_component__WEBPACK_IMPORTED_MODULE_8__.PeopleDeleteComponent,
                componentProps: Object.assign({ item }, { menu_state: this.editable.educationMenu_state, my_state: this.editable.my_state, type: 'EDU' })
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.eduGetList();
            }
        });
    }
    eduAdd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: src_app_component_modal_search_attendance_search_attendance_component__WEBPACK_IMPORTED_MODULE_9__.SearchAttendanceComponent,
                componentProps: {
                    project_id: this.user.userData.belong_data.project_id,
                    company_id: this.user.userData.belong_data.company_id,
                    educationType: false,
                    value: this.user_id,
                    title: '근로자'
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.user_id = [];
                data.forEach(item => {
                    if (!this.user_id.includes(item.user_id))
                        this.user_id.push(item.user_id);
                });
                const res = yield this.connect.run('/education/attendant/insert', {
                    attendant_user_ids: this.user_id,
                    education_safe_id: this.item.education_safe_id
                });
                if (res.rsCode === 0) {
                    this.toast.present({ message: '선택하신 인원이 출석되었습니다.', color: 'primary' });
                    this.eduGetList();
                }
                else {
                    this.toast.present({ message: res.rsMsg, color: 'warning' });
                }
            }
        });
    }
    qrAdd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _qr_education_in_qr_education_in_page__WEBPACK_IMPORTED_MODULE_10__.QrEducationInPage,
                componentProps: {
                    item: this.form
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.eduGetList();
            }
        });
    }
    deleteItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.present({
                message: '삭제하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/education/delete', { education_safe_id: this.item.education_safe_id });
                            if (res.rsCode === 0) {
                                this.toast.present({ message: '삭제되었습니다.', color: 'primary' });
                                this._modal.dismiss(true);
                            }
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    educationText(ctgo_education_safe_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (!ctgo_education_safe_id || this.item)
                return;
            const res = yield this.connect.run('/education/text/get', {
                ctgo_education_safe_id
            });
            if (res.rsCode === 0) {
                this.form.education_safe_text = res.rsObj.ctgo_education_safe_text;
            }
        });
    }
};
SafetyEducationDetailEditPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__.DateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService }
];
SafetyEducationDetailEditPage.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }]
};
SafetyEducationDetailEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-safety-education-detail-edit',
        template: _raw_loader_safety_education_detail_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_safety_education_detail_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SafetyEducationDetailEditPage);



/***/ }),

/***/ 62477:
/*!***************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/qr-education-in/qr-education-in.page.scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1lZHVjYXRpb24taW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 26905:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/educatiion-status/safety-education-detail-edit/safety-education-detail-edit.page.scss ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWZldHktZWR1Y2F0aW9uLWRldGFpbC1lZGl0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 67567:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/safety-education/educatiion-status/qr-education-in/qr-education-in.page.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <app-row>\n      <app-col>\n        <ion-title>출석등록 QR</ion-title>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-button (click)=\"dismiss()\" fill=\"clear\">\n          <app-img name=\"close\"></app-img>\n        </app-button>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div  style=\"display: flex; justify-content: center; height:calc(100% - 60%); align-items: center;\">\n    <img (click)=\"downloadQR()\" id=\"qrious\"/>\n  </div>\n    <app-card>\n      <app-row>\n        <app-col>\n          <!-- <app-input [readonly]=\"true\" name=\"date\" label=\"교육일\" [value]=\"item.education_safe_date\"></app-input> -->\n          <app-input [readonly]=\"true\" name=\"date\" label=\"교육일\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <!-- <app-input [readonly]=\"true\" name=\"name\" label=\"교육명\" [value]=\"item.ctgo_education_safe_name\"></app-input> -->\n          <app-input [readonly]=\"true\" name=\"name\" label=\"교육명\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <app-input [readonly]=\"true\" name=\"time\" label=\"교육시간\" [value]=\"eduTime\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <!-- <app-input [readonly]=\"true\" name=\"time\" label=\"출석 담당자\" [value]=\"item.education_safe_manager_names\"></app-input> -->\n          <app-input [readonly]=\"true\" name=\"time\" label=\"출석 담당자\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n</ion-content>\n");

/***/ }),

/***/ 33149:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/safety-education/educatiion-status/safety-education-detail-edit/safety-education-detail-edit.page.html ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>교육 현황</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <app-row>\n      <app-col>\n        <h4>교육 정보</h4>\n      </app-col>\n      <ng-container *ngIf=\"item\">\n        <!-- <app-col size=\"auto\" *ngIf=\"editable.my_state && !editable.update\">\n          <app-button (click)=\"editable.update = true\" fill=\"translucent\">수정</app-button>\n        </app-col> -->\n        <app-col size=\"auto\" *ngIf=\"editable.my_state\">\n          <app-button (click)=\"deleteItem()\" fill=\"translucent\" color=\"danger\">삭제</app-button>\n        </app-col>\n        <app-col size=\"auto\" *ngIf=\"editable.my_state\">\n          <app-button (click)=\"updateItem()\" fill=\"translucent\">저장</app-button>\n        </app-col>\n      </ng-container>\n      <app-col size=\"auto\" *ngIf=\"!item\">\n        <app-button  (click)=\"submit()\">저장</app-button>\n      </app-col>\n    </app-row>\n    <form>\n      <app-row>\n        <app-col>\n          <app-input [disabled]=\"true\" name=\"edustate\" label=\"현장명\" [value]=\"form.project_name\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input [disabled]=\"true\" name=\"edustate\" label=\"교육상태\" [(ngModel)]=\"form.education_safe_state\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input name=\"create\" [disabled]=\"true\" label=\"개설자\" [value]=\"form.education_safe_id ? (form.user_name + ' / ' + form.company_name) : (user.userData.user_name + ' / ' + user.userData.belong_data.company_name)\"></app-input>\n        </app-col>\n        <app-col>\n          <app-input [disabled]=\"true\" label=\"개설일\" name=\"createdata\" [(ngModel)]=\"form.create_date\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-select-education [disabled]=\"editable.my_state ? false : (item)\" [required]=\"true\" (change)=\"educationText($event)\" name=\"safe\" [required]=\"true\" [(ngModel)]=\"form.ctgo_education_safe_id\"></app-select-education>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-input label=\"교육대상\" [disabled]=\"editable.my_state ? false : (item)\" [required]=\"true\" placeholder=\"교육대상을 입력해주세요.\" name=\"education_safe_target\" [(ngModel)]=\"form.education_safe_target\"></app-input>\n        </app-col>\n          <app-col>\n            <app-input placeholder=\"교육장소를 입력해주세요\" name=\"education_safe_place\" [disabled]=\"editable.my_state ? false : (item)\" [required]=\"true\" label=\"교육장소\" [(ngModel)]=\"form.education_safe_place\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col size=\"6\">\n          <app-calendar name=\"create_date\" [disabled]=\"editable.my_state ? false : (item)\" label=\"교육일\" [required]=\"true\" [(ngModel)]=\"form.education_safe_date\"></app-calendar>\n        </app-col>\n        <app-col size=\"3\">\n          <app-datetime [required]=\"true\" [disabled]=\"editable.my_state ? false : (item)\" name=\"education_safe_start_time\" label=\"교육시작시간\"\n          [(ngModel)]=\"form.education_safe_start_time\">\n          </app-datetime>\n        </app-col>\n        <app-col size=\"3\">\n          <app-datetime [required]=\"true\" [disabled]=\"editable.my_state ? false : (item)\" name=\"education_safe_end_time\" label=\"교육종료시간\"\n          [(ngModel)]=\"form.education_safe_end_time\">\n          </app-datetime>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-select-attendance *ngIf=\"input_active\" [required]=\"true\" [disabled]=\"editable.my_state ? false : (item)\" [educationType]=\"true\" name=\"attendance\" \n          [project_id]=\"form.education_safe_id ? form.project_id : user.userData.belong_data.project_id\" \n          [company_id]=\"form.education_safe_id ? form.company_id : user.userData.belong_data.company_id\"\n          [multiple]=\"true\" [(ngModel)]=\"form.education_safe_manager_ids\"></app-select-attendance>\n        </app-col>\n        <app-col>\n          <app-input placeholder=\"강사를 입력해주세요\" name=\"education_safe_instructor\" [disabled]=\"editable.my_state ? false : (item)\" label=\"강사\" [(ngModel)]=\"form.education_safe_instructor\"></app-input>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col>\n          <app-textarea placeholder=\"교육내용을 입력해주세요\" label=\"교육내용\" [readonly]=\"editable.my_state ? false : (item)\" name=\"education_safe_text\" [rows]=\"10\" [(ngModel)]=\"form.education_safe_text\"></app-textarea>\n        </app-col>\n      </app-row>\n\n      <app-row *ngIf=\"item\" style=\"align-items: flex-start;\">\n        <app-col>\n          <ion-toolbar color=\"white\">\n            <app-row>\n              <app-col>\n                <h4>교육 사진</h4>\n              </app-col>\n              <app-col *ngIf=\"editable.my_state\" size=\"auto\">\n                <app-button>추가\n                  <app-file name=\"input\" view_type=\"EDU_ONE\" [(ngModel)]=\"form.education_safe_file_data\" [file]=\"form.file\"\n                    [file_json]=\"form.file_json\"></app-file>\n                </app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <ng-container *ngFor=\"let futItem of form.education_safe_file_data; let i = index\">\n            <app-file-preview type=\"auto\" *ngIf=\"futItem.view_type === 'EDU_ONE'\" [futItem]=\"futItem\"\n              (buttonClick)=\"form.education_safe_file_data.splice(i,1)\" [readonly]=\"editable.my_state ? false : (item)\"></app-file-preview>\n          </ng-container>\n        </app-col>\n\n        <app-col>\n          <ion-toolbar color=\"white\">\n            <app-row>\n              <app-col>\n                <h4>교육 사진</h4>\n              </app-col>\n              <app-col *ngIf=\"editable.my_state\" size=\"auto\">\n                <app-button>추가\n                  <app-file name=\"input\" view_type=\"EDU_TWO\" [(ngModel)]=\"form.education_safe_file_data\" [file]=\"form.file\"\n                    [file_json]=\"form.file_json\"></app-file>\n                </app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <ng-container *ngFor=\"let futItem of form.education_safe_file_data; let i = index\">\n            <app-file-preview type=\"auto\" *ngIf=\"futItem.view_type === 'EDU_TWO'\" [futItem]=\"futItem\"\n              (buttonClick)=\"form.education_safe_file_data.splice(i,1)\" [readonly]=\"editable.my_state ? false : (item)\"></app-file-preview>\n          </ng-container>\n        </app-col>\n      </app-row>\n    </form>\n    <br>\n    <ion-toolbar color=\"white\">\n      <app-row *ngIf=\"item\" style=\"align-items: flex-start;\">\n      <app-col>\n        <h4>교육 자료</h4>\n      </app-col>\n      <app-col size=\"auto\" *ngIf=\"editable.my_state\">\n        <app-button fill=\"translucent\">첨부\n          <app-file name=\"input\" view_type=\"EDU\" [multiple]=\"true\" [(ngModel)]=\"form.education_safe_file_data\"\n            [file]=\"form.file\" [file_json]=\"form.file_json\" [multiple]=\"true\">\n          </app-file>\n        </app-button>\n      </app-col>\n    </app-row>\n   </ion-toolbar>\n    <ng-container *ngFor=\"let futItem of form.education_safe_file_data; let i = index\" >\n      <app-file-preview type=\"auto\"\n      *ngIf=\"futItem.view_type === 'EDU'\"\n      [futItem]=\"futItem\" \n      [readonly]=\"editable.my_state ? false : (item)\"\n      (buttonClick)=\"form.education_safe_file_data.splice(i,1)\"></app-file-preview> \n    </ng-container> \n    \n      <ng-container *ngIf=\"form.education_safe_state !== '교육 전'\">\n        <app-row style=\"margin-top: 10px;\">\n          <app-col>\n            <h4>출석 현황 : {{ res?.rsObj?.row_count || 0 }}명</h4>\n          </app-col>\n          <app-col size=\"3\">\n            <app-input (keyup.enter)=\"eduGetList()\" [(ngModel)]=\"attentForm.search_text\" placeholder=\"출석한 근로자를 검색할 수 있습니다\">\n              <app-img (click)=\"eduGetList()\" name=\"search\"></app-img>\n            </app-input>\n          </app-col>\n          <app-col size=\"auto\" *ngIf=\"editable.educationMenu_state || editable.my_state\">\n            <app-button (click)=\"eduAdd()\" fill=\"translucent\" >출석등록(검색)</app-button>\n          </app-col>\n          <app-col size=\"auto\" *ngIf=\"editable.educationMenu_state || editable.my_state\" >\n            <app-button (click)=\"qrAdd()\">출석등록QR)</app-button> \n          </app-col>\n          <!-- <app-col size=\"auto\">\n            <app-button color=\"danger\" fill=\"translucent\" (click)=\"notReady()\">출석삭제</app-button>\n          </app-col>\n          <app-col size=\"auto\">\n            <app-button fill=\"translucent\" (click)=\"notReady()\">출석등록(검색)</app-button>\n          </app-col>\n          <app-col size=\"auto\">\n            <app-button fill=\"translucent\" (click)=\"notReady()\">출석등록(QR)</app-button>\n          </app-col> -->\n        </app-row>\n      <app-table style=\"margin-top: 0;\">\n        <thead>\n          <tr>\n            <th style=\"width: 48px;\">No</th>\n            <th>업체명</th>\n            <th>성명</th>\n            <th>서명일시</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let item of res?.rsMap let i = index\">\n          <tr class=\"button\" (click)=\"userInfo(item)\">\n            <td>{{ i+1 }}</td>\n            <td>{{ item.company_name }}</td>\n            <td>{{ item.user_name }}({{ item.account_id }})</td>\n            <td>{{ item.create_date }}</td>\n          </tr>\n        </tbody>\n      </app-table>\n    </ng-container>\n  </ion-content>\n</ng-container>\n\n<!-- 모바일 교육정보/출석현황 탭 -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>교육 현황</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\" *ngIf=\"item\">\n      <ion-segment color=\"primary\" [value]=\"1\" >\n        <ion-segment-button (click)=\"editable.educationMenu = 1\" [value]=\"1\">교육정보</ion-segment-button>\n        <ion-segment-button (click)=\"editable.educationMenu = 2\" [value]=\"2\">교육사진</ion-segment-button>\n        <ion-segment-button (click)=\"editable.educationMenu = 3\" [value]=\"3\">출석현황</ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ng-container *ngIf=\"editable.educationMenu === 1\">\n      <app-row>\n        <app-col>\n          <h4>기본정보</h4>\n        </app-col>\n      </app-row>\n\n      <app-card>\n        <app-row>\n          <app-col>\n            <app-input [disabled]=\"true\" name=\"edustate\" label=\"현장명\" [value]=\"form.project_name\"></app-input>\n          </app-col>\n        </app-row>\n      </app-card>\n      \n      <app-card>\n        <app-row>\n          <app-col>\n            <app-input [disabled]=\"true\" name=\"edustate\" label=\"교육상태\" [(ngModel)]=\"form.education_safe_state\"></app-input>\n          </app-col>\n        </app-row>\n      </app-card>\n\n      <app-card>\n        <app-row>\n          <app-col>\n            <app-input name=\"create\" [disabled]=\"true\" label=\"개설자\" [value]=\"form.education_safe_id ? (form.user_name + ' / ' + form.company_name) : (user.userData.user_name + ' / ' + user.userData.belong_data.company_name)\"></app-input>\n          </app-col>\n        </app-row>\n      </app-card>\n\n      <app-card>\n        <app-row>\n          <app-col>\n              <app-input [disabled]=\"true\" label=\"개설일\" name=\"createdata\" [(ngModel)]=\"form.create_date\"></app-input>\n          </app-col>\n        </app-row>\n      </app-card>\n      \n      <app-card>\n        <app-row>\n          <app-col>\n            <app-select-education [disabled]=\"editable.my_state ? false : (item)\" [required]=\"true\" (change)=\"educationText($event)\" name=\"safe\" [(ngModel)]=\"form.ctgo_education_safe_id\"></app-select-education>\n          </app-col>\n        </app-row>\n      </app-card>\n\n      <app-card>\n        <app-row>\n          <app-col>\n            <app-input [disabled]=\"editable.my_state ? false : (item)\" label=\"교육대상\" [required]=\"true\" placeholder=\"교육대상을 입력해주세요.\" name=\"education_safe_target\" [(ngModel)]=\"form.education_safe_target\"></app-input>\n          </app-col>\n        </app-row>\n      </app-card>\n\n      <app-card>\n        <app-row>\n          <app-col>\n            <app-input [disabled]=\"editable.my_state ? false : (item)\" placeholder=\"교육장소를 입력해주세요\" name=\"education_safe_place\" [required]=\"true\" label=\"교육장소\" [(ngModel)]=\"form.education_safe_place\"></app-input>\n          </app-col>\n        </app-row>\n      </app-card>\n\n      <app-card>\n        <app-row>\n          <app-col>\n            <app-calendar [disabled]=\"editable.my_state ? false : (item)\" name=\"create_date\" label=\"교육일\" [required]=\"true\" [required]=\"true\" [(ngModel)]=\"form.education_safe_date\"></app-calendar>\n          </app-col>\n        </app-row>\n      </app-card>\n\n      <app-card>\n        <app-row>\n          <app-col>\n            <app-datetime [disabled]=\"editable.my_state ? false : (item)\" [required]=\"true\" name=\"education_safe_start_time\" label=\"교육시작시간\" \n            [(ngModel)]=\"form.education_safe_start_time\">\n            </app-datetime>\n          </app-col>\n        </app-row>\n\n        <app-row>\n          <app-col>\n            <app-datetime [disabled]=\"editable.my_state ? false : (item)\" [required]=\"true\" name=\"education_safe_end_time\" label=\"교육종료시간\" \n            [(ngModel)]=\"form.education_safe_end_time\">\n            </app-datetime>\n          </app-col>\n        </app-row>\n      </app-card>\n\n      <app-card>\n        <app-row>\n          <app-col>\n          <app-select-attendance [disabled]=\"editable.my_state ? false : (item)\" *ngIf=\"input_active\" [required]=\"true\" [educationType]=\"true\" name=\"attendance\" \n          [project_id]=\"form.education_safe_id ? form.project_id : user.userData.belong_data.project_id\" \n          [company_id]=\"form.education_safe_id ? form.company_id : user.userData.belong_data.company_id\"\n          [multiple]=\"true\" [(ngModel)]=\"form.education_safe_manager_ids\"></app-select-attendance>\n          </app-col>\n        </app-row>\n      </app-card>\n\n      <app-card>\n        <app-row>\n          <app-col>\n            <app-input [disabled]=\"editable.my_state ? false : (item)\" placeholder=\"강사를 입력해주세요\" name=\"education_safe_instructor\" label=\"강사\" [(ngModel)]=\"form.education_safe_instructor\"></app-input>\n          </app-col>\n        </app-row>\n      </app-card>\n\n      <app-card>\n        <app-row>\n          <app-col>\n            <app-textarea [readonly]=\"editable.my_state ? false : (item)\" placeholder=\"교육내용을 입력해주세요\" label=\"교육내용\" name=\"education_safe_text\" [rows]=\"10\" [(ngModel)]=\"form.education_safe_text\"></app-textarea>\n          </app-col>\n        </app-row>\n      </app-card>\n      \n      <!-- <app-row>\n        <app-col>\n          첨부자료\n        </app-col>\n        <app-col size=\"auto\" *ngIf=\"editable.update ? true : (editable.educationMenu_state || editable.my_state)\">\n          <app-button fill=\"translucent\">추가\n            <app-file [limit]=\"2\" name=\"input\" view_type=\"EDU\"\n            [(ngModel)]=\"form.education_safe_file_data\" \n            [file]=\"form.file\" \n            [file_json]=\"form.file_json\" [multiple]=\"true\"></app-file>\n          </app-button>\n        </app-col>\n      </app-row>\n      <app-file-preview type=\"full\" [readonly]=\"editable.update ? false : (!editable.educationMenu_state && !editable.my_state)\"  *ngFor=\"let futItem of form.education_safe_file_data; let i = index\" [futItem]=\"futItem\"  \n      (buttonClick)=\"form.education_safe_file_data.splice(i,1)\"></app-file-preview> -->\n    </ng-container>\n\n    <ng-container *ngIf=\"editable.educationMenu === 2\">\n      <app-row style=\"align-items: flex-start;\">\n        <app-col>\n          <ion-toolbar color=\"white\">\n            <app-row>\n              <app-col>\n                <h5>사진</h5>\n              </app-col>\n              <app-col size=\"auto\">\n                <app-button>추가\n                  <app-file name=\"input\" view_type=\"EDU_ONE\" [(ngModel)]=\"form.education_safe_file_data\" [file]=\"form.file\"\n                    [file_json]=\"form.file_json\"></app-file>\n                </app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <ng-container *ngFor=\"let futItem of form.education_safe_file_data; let i = index\">\n            <app-file-preview type=\"full\" *ngIf=\"futItem.view_type === 'EDU_ONE'\" [futItem]=\"futItem\"\n              (buttonClick)=\"form.education_safe_file_data.splice(i,1)\"></app-file-preview>\n          </ng-container>\n        </app-col>\n      </app-row>\n\n      <app-row style=\"align-items: flex-start;\">\n        <app-col>\n          <ion-toolbar color=\"white\">\n            <app-row>\n              <app-col>\n                <h5>사진</h5>\n              </app-col>\n              <app-col size=\"auto\">\n                <app-button>추가\n                  <app-file name=\"input\" view_type=\"EDU_TWO\" [(ngModel)]=\"form.education_safe_file_data\" [file]=\"form.file\"\n                    [file_json]=\"form.file_json\"></app-file>\n                </app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <ng-container *ngFor=\"let futItem of form.education_safe_file_data; let i = index\">\n            <app-file-preview type=\"full\" *ngIf=\"futItem.view_type === 'EDU_TWO'\" [futItem]=\"futItem\"\n              (buttonClick)=\"form.education_safe_file_data.splice(i,1)\"></app-file-preview>\n          </ng-container>\n        </app-col>\n      </app-row>\n    </ng-container>\n\n    <ng-container *ngIf=\"editable.educationMenu === 3\">\n      <app-card>\n        <app-row>\n          <app-col>\n            <h4>현황 : 총 {{ res?.rsObj?.row_count || 0 }}명</h4>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-input [(ngModel)]=\"attentForm.search_text\" placeholder=\"출석한 근로자를 검색할 수 있습니다\">\n              <app-img (click)=\"eduGetList()\" name=\"search\"></app-img>\n            </app-input>\n          </app-col>\n        </app-row>\n      </app-card>\n      <ion-row>\n        <ion-col *ngFor=\"let item of res?.rsMap\" size=\"6\">\n          <app-card [button]=\"true\" (click)=\"userInfo(item)\" style=\"height: 85%;\">\n            <app-row>\n              <app-col>\n                <h5>{{ item.user_name }}({{ item.account_id }})</h5>\n              </app-col>\n            </app-row>\n            <app-line></app-line>\n            <app-row>\n              <app-col>\n                <h6>업체명</h6>\n                <h5>{{ item.company_name }}</h5>\n                <h6>직종</h6>\n                <h5>{{ item.ctgo_occupation_name }}</h5>\n              </app-col>\n            </app-row>\n          </app-card>\n        </ion-col>\n        <ion-col size=\"6\">\n          <app-card *ngIf=\"editable.educationMenu_state || editable.my_state\" style=\"background-color: var(--ion-color-medium-translucent); height: 85%;\" (click)=\"qrAdd()\">\n            <app-row>\n              <app-col size=\"auto\">\n                <app-img name=\"tag\"></app-img>\n              </app-col>\n              <app-col>\n              </app-col>\n            </app-row>\n            <app-line></app-line>\n            <app-row>\n              <app-col style=\"text-align: center;\">\n                <h5>QR코드를 근로자에게<br> 인식 시켜주세요</h5>\n              </app-col>\n            </app-row>\n          </app-card>\n        </ion-col>\n      </ion-row>\n    </ng-container>\n  </ion-content>\n  <app-button-footer *ngIf=\"item && (editable.educationMenu === 1 || editable.educationMenu === 2)\">\n    <app-button *ngIf=\"editable.my_state\" (click)=\"updateItem()\" fill=\"translucent\">수정</app-button>\n    <app-button *ngIf=\"editable.my_state\" (click)=\"deleteItem()\" color=\"danger\" fill=\"translucent\">삭제</app-button>\n  </app-button-footer>\n  <app-button-footer *ngIf=\"!item\">\n    <app-button (click)=\"submit()\">저장</app-button>\n  </app-button-footer>\n  <app-button-footer *ngIf=\"editable.educationMenu_state && editable.educationMenu === 3\">\n    <app-button *ngIf=\"editable.educationMenu === 3\" (click)=\"eduAdd()\" fill=\"translucent\" >출석등록(검색)</app-button>\n    <app-button *ngIf=\"editable.educationMenu === 3\" (click)=\"qrAdd()\">출석등록QR)</app-button>\n  </app-button-footer>\n</ng-container>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_safety-education_educatiion-status_safety-education-detail-edit_safety-e-1bc12c.js.map