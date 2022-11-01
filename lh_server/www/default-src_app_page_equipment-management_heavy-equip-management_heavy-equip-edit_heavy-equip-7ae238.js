(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_equipment-management_heavy-equip-management_heavy-equip-edit_heavy-equip-7ae238"],{

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

/***/ 71333:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/heavy-equip-management/heavy-equip-edit/heavy-equip-edit-routing.module.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeavyEquipEditPageRoutingModule": () => (/* binding */ HeavyEquipEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _heavy_equip_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heavy-equip-edit.page */ 45254);




const routes = [
    {
        path: '',
        component: _heavy_equip_edit_page__WEBPACK_IMPORTED_MODULE_0__.HeavyEquipEditPage
    }
];
let HeavyEquipEditPageRoutingModule = class HeavyEquipEditPageRoutingModule {
};
HeavyEquipEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HeavyEquipEditPageRoutingModule);



/***/ }),

/***/ 40982:
/*!**************************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/heavy-equip-management/heavy-equip-edit/heavy-equip-edit.module.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeavyEquipEditPageModule": () => (/* binding */ HeavyEquipEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _heavy_equip_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heavy-equip-edit-routing.module */ 71333);
/* harmony import */ var _heavy_equip_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heavy-equip-edit.page */ 45254);
/* harmony import */ var src_app_basic_directive_directive_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/directive/directive.module */ 71845);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/component.module */ 55051);









let HeavyEquipEditPageModule = class HeavyEquipEditPageModule {
};
HeavyEquipEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_basic_directive_directive_module__WEBPACK_IMPORTED_MODULE_2__.DirectiveModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
            _heavy_equip_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.HeavyEquipEditPageRoutingModule
        ],
        declarations: [_heavy_equip_edit_page__WEBPACK_IMPORTED_MODULE_1__.HeavyEquipEditPage]
    })
], HeavyEquipEditPageModule);



/***/ }),

/***/ 45254:
/*!************************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/heavy-equip-management/heavy-equip-edit/heavy-equip-edit.page.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeavyEquipDetail": () => (/* binding */ HeavyEquipDetail),
/* harmony export */   "HeavyEquipDetail_Theme": () => (/* binding */ HeavyEquipDetail_Theme),
/* harmony export */   "HeavyEquipEditPage": () => (/* binding */ HeavyEquipEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_heavy_equip_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./heavy-equip-edit.page.html */ 86915);
/* harmony import */ var _heavy_equip_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heavy-equip-edit.page.scss */ 98042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);











class HeavyEquipDetail {
    constructor() {
        this.machinery_file = [];
        this.machinery_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__.FileJson();
        this.plan_file_data = [];
        this.regist_file_data = [];
        this.rental_file_data = [];
        this.etc_file_data = [];
        this.plan_file = [];
        this.regist_file = [];
        this.rental_file = [];
        this.etc_file = [];
        this.plan_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__.FileJson();
        this.regist_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__.FileJson();
        this.rental_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__.FileJson();
        this.etc_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__.FileJson();
    }
}
class HeavyEquipDetail_Theme {
    constructor() {
        this.ctgo_construction_id = 0;
        this.partner_company_name = '';
        this.rental_start_date = '';
        this.ctgo_construction_name = '';
        this.ctgo_machinery_id = 0;
        this.master_company_id = 0;
        this.machinery_id = 0;
        this.project_name = '';
        this.master_company_name = '';
        this.rental_end_date = '';
        this.project_id = 0;
        this.partner_company_id = 0;
        this.rental_price = 0;
        this.machinery_regist_no = '';
        this.rental_company_name = '';
        this.ctgo_machinery_name = '';
        this.machinery_file = [];
        this.machinery_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__.FileJson();
        this.create_user_id = 0;
    }
}
let HeavyEquipEditPage = class HeavyEquipEditPage {
    constructor(connect, alert, date, toast, user, _modal) {
        this.connect = connect;
        this.alert = alert;
        this.date = date;
        this.toast = toast;
        this.user = user;
        this._modal = _modal;
        this.updateStatus = false;
        this.form = new HeavyEquipDetail();
        this.selectList = [];
    }
    ngOnInit() {
        console.log(this.list_data);
        this.form = Object.assign(Object.assign({}, this.form), this.list_data);
        if (this.machinery_id) {
            this.updateStatus = true;
            this.get();
        }
        else {
            this.updateStatus = false;
        }
    }
    SetListData() {
        this.form.project_id = this.list_data.project_id;
        this.form.master_company_id = this.list_data.master_company_id;
        this.form.partner_company_id = this.list_data.partner_company_id;
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/machinery/get', {
                machinery_id: this.machinery_id
            }, { loading: true, parse: ['etc_file_data', 'rental_file_data', 'regist_file_data', 'plan_file_data'] });
            if (res.rsCode === 0) {
                this.form = Object.assign(Object.assign({}, this.form), res.rsObj);
            }
        });
    }
    Heavyedit() {
        this.updateStatus = false;
    }
    Heavydelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.present({
                message: '선택된 장비 정보가 모두 삭제됩니다. 정말 삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/machinery/delete', {
                                machinery_ids: [this.machinery_id]
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
    Heavysave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let state = yield this.UpdateValidation();
            if (state)
                return;
            this.alert.present({
                message: '저장하시겠습니까?',
                buttons: [
                    { text: '아니오' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            yield this.TransFileData();
                            let json_obj = new HeavyEquipDetail_Theme();
                            for (let key in json_obj) {
                                json_obj[key] = this.form[key];
                            }
                            const res = yield this.connect.run('/machinery/insert', json_obj, {});
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
    Heavyupdate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let state = yield this.UpdateValidation();
            if (state)
                return;
            this.alert.present({
                message: '수정 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            yield this.TransFileData();
                            let json_obj = new HeavyEquipDetail_Theme();
                            for (let key in json_obj) {
                                json_obj[key] = this.form[key];
                            }
                            const res = yield this.connect.run('/machinery/update', json_obj);
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
    UpdateValidation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.form.project_id) {
                this.toast.present({ message: '현장명을 입력해주세요.', color: 'warning' });
                return true;
            }
            if (!this.form.partner_company_id) {
                this.toast.present({ message: '업체명을 입력해주세요.', color: 'warning' });
                return true;
            }
            if (!this.form.ctgo_machinery_id) {
                this.toast.present({ message: '중장비를 입력해주세요.', color: 'warning' });
                return true;
            }
            if (!this.form.machinery_regist_no) {
                this.toast.present({ message: '등록번호를 입력해주세요.', color: 'warning' });
                return true;
            }
            // if(!this.form.ctgo_construction_id){
            //   this.toast.present({message:'공종을 입력해주세요.',color:'warning'});
            //   return true;
            // }
            if (!this.form.rental_company_name) {
                this.toast.present({ message: '대여업체를 입력해주세요.', color: 'warning' });
                return true;
            }
            if (!this.form.rental_start_date) {
                this.toast.present({ message: '보증기간을 입력해주세요.', color: 'warning' });
                return true;
            }
            if (!this.form.rental_end_date) {
                this.toast.present({ message: '보증기간을 입력해주세요.', color: 'warning' });
                return true;
            }
            if (!this.form.rental_price) {
                this.toast.present({ message: '보증금액을 입력해주세요.', color: 'warning' });
                return true;
            }
            return false;
        });
    }
    /**
     * @function TransFileData(): 4개의 파일을 통합해줍니다.
     */
    TransFileData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // 초기화
            this.form.machinery_json.insert = [];
            yield this.form.plan_file.forEach((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () { yield this.form.machinery_file.push(item); }));
            yield this.form.plan_json.insert.forEach((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () { yield this.form.machinery_json.insert.push(item); }));
            yield this.form.plan_json.delete.forEach((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () { yield this.form.machinery_json.delete.push(item); }));
            yield this.form.regist_file.forEach((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () { yield this.form.machinery_file.push(item); }));
            yield this.form.regist_json.insert.forEach((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () { yield this.form.machinery_json.insert.push(item); }));
            yield this.form.regist_json.delete.forEach((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () { yield this.form.machinery_json.delete.push(item); }));
            yield this.form.rental_file.forEach((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () { yield this.form.machinery_file.push(item); }));
            yield this.form.rental_json.insert.forEach((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () { yield this.form.machinery_json.insert.push(item); }));
            yield this.form.rental_json.delete.forEach((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () { yield this.form.machinery_json.delete.push(item); }));
            yield this.form.etc_file.forEach((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () { yield this.form.machinery_file.push(item); }));
            yield this.form.etc_json.insert.forEach((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () { yield this.form.machinery_json.insert.push(item); }));
            yield this.form.etc_json.delete.forEach((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () { yield this.form.machinery_json.delete.push(item); }));
            this.form.machinery_json.insert.forEach((item, index) => { item.order_no = index + 1; });
        });
    }
    /**
     * @function btnPromise(): 권한에 따른 버튼활성화 메서드
     * @param type - 버튼의 type
     * @returns true or false
     */
    btnPromise(type) {
        let state = false;
        switch (type) {
            case 'save':
                if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY' || this.user.userData.user_id == this.form.create_user_id)
                    state = true;
                break;
            case 'delete':
                if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_role == 'MASTER_HEAD' || this.user.userData.user_id == this.form.create_user_id)
                    state = true;
                break;
        }
        return state;
    }
};
HeavyEquipEditPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_7__.DateService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
HeavyEquipEditPage.propDecorators = {
    machinery_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    list_data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
HeavyEquipEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-heavy-equip-edit',
        template: _raw_loader_heavy_equip_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_heavy_equip_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeavyEquipEditPage);

// plan_file_data: FutItem[] = [];
// regist_file_data: FutItem[] = [];
// rental_file_data: FutItem[] = [];
// etc_file_data: FutItem[] = [];
// plan_file: (File | Blob)[] = [];
// regist_file: (File | Blob)[] = [];
// rental_file: (File | Blob)[] = [];
// etc_file: (File | Blob)[] = [];
// plan_json : FileJson = new FileJson();
// regist_json : FileJson = new FileJson();
// rental_json : FileJson = new FileJson();
// etc_json : FileJson = new FileJson();


/***/ }),

/***/ 98042:
/*!**************************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/heavy-equip-management/heavy-equip-edit/heavy-equip-edit.page.scss ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".file-card {\n  --app-margin: 8px;\n}\n\n.file-card app-file-preview {\n  --app-padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYXZ5LWVxdWlwLWVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWE7QUFDakI7O0FBRkE7RUFHUSxnQkFBYztBQUd0QiIsImZpbGUiOiJoZWF2eS1lcXVpcC1lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLWNhcmQge1xuICAgIC0tYXBwLW1hcmdpbjogOHB4O1xuICAgIGFwcC1maWxlLXByZXZpZXcge1xuICAgICAgICAtLWFwcC1wYWRkaW5nOiAwO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 86915:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/equipment-management/heavy-equip-management/heavy-equip-edit/heavy-equip-edit.page.html ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>중장비 정보</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    <h4>기본정보</h4>\n   <app-row mobileBreak>\n     <app-col>\n      <app-select-scene name=\"project_id\"  [required]=\"true\" [disabled]=\"true\" [(ngModel)]=\"form.project_id\"></app-select-scene>\n      <!-- <app-select-scene name=\"project_id\"  [required]=\"true\" [disabled]=\"updateStatus\" [(ngModel)]=\"form.project_id\"></app-select-scene> -->\n     </app-col>\n     <app-col>\n      <app-select-contractor [multiple]=\"false\" name=\"master_company_id\"\n      [required]=\"true\" [project_id]=\"form.project_id\"\n      [disabled]=\"updateStatus || user.userData.user_type === 'COMPANY'\" [(ngModel)]=\"form.master_company_id\"></app-select-contractor>\n     </app-col>\n   </app-row>\n   <app-row mobileBreak>\n    <app-col>\n      <app-select-contractor-company [project_id]=\"form.project_id\" [master_company_id]=\"form.master_company_id\" \n      [required]=\"true\" label=\"업체명\" name=\"input\" \n      [disabled]=\"updateStatus || user.userData.user_role === 'PARTNER_HEAD' || user.userData.user_role === 'PARTNER_GENERAL'\"\n      [(ngModel)]=\"form.partner_company_id\"></app-select-contractor-company>\n    </app-col> \n    <app-col>\n      <app-select-construction-machinery [company_id]=\"form.master_company_id\" label=\"건설기계 구분\"\n      [required]=\"true\" [disabled]=\"updateStatus\" [project_id]=\"form.project_id\"\n      [(ngModel)]=\"form.ctgo_machinery_id\"></app-select-construction-machinery>\n    </app-col>\n  </app-row>\n  <app-row mobileBreak>\n    <app-col>\n      <app-input name=\"machinery_regist_no\" [required]=\"true\" [disabled]=\"updateStatus\" [required]=\"true\" label=\"등록번호/명칭\"\n        [(ngModel)]=\"form.machinery_regist_no\" placeholder=\"\"></app-input>\n    </app-col>\n    <app-col>\n      <app-select-construction name=\"ctgo_construction_name\" [required]=\"true\" [master_company_id]=\"form.master_company_id\" [project_id]=\"form.project_id\" [disabled]=\"updateStatus\" [(ngModel)]=\"form.ctgo_construction_id\"></app-select-construction>\n    </app-col>\n    <app-col>\n      <app-input label=\"대여업체(운전원)\" [disabled]=\"updateStatus\" [required]=\"true\" [(ngModel)]=\"form.rental_company_name\"></app-input>\n    </app-col>\n  </app-row>\n  <app-row mobileBreak>\n\n    <app-col>\n      <app-input-group label=\"보증기간\" [disabled]=\"updateStatus\" [required]=\"true\">\n        <app-calendar name=\"contract_start_date\" [(ngModel)]=\"form.rental_start_date\" [max]=\"form.rental_end_date\"></app-calendar>\n        ~\n        <app-calendar name=\"contract_end_date\" [(ngModel)]=\"form.rental_end_date\" [min]=\"form.rental_start_date\"></app-calendar>\n      </app-input-group>\n    </app-col>\n    <app-col>\n      <app-input label=\"보증금액\" [required]=\"true\" [disabled]=\"updateStatus\" [(ngModel)]=\"form.rental_price\"></app-input>\n    </app-col>\n  </app-row>\n  <!-- <app-row mobileBreak>\n\n    <app-col>\n    </app-col>\n  </app-row> -->\n\n  <h4>첨부서류</h4>\n\n  <app-card color=\"light\" class=\"file-card\">\n    <app-row>\n      <app-col>\n        <h5>건설기계 등록증</h5>\n      </app-col>\n      <app-col size=\"auto\" *ngIf=\"!updateStatus\">\n        <app-button fill=\"translucent\">\n          추가\n          <app-file view_type='REGIST'\n          [(ngModel)]=\"form.regist_file_data\"\n          [file]=\"form.regist_file\"\n          [file_json]=\"form.regist_json\"></app-file>\n        </app-button>\n      </app-col>\n    </app-row>\n    <app-file-preview *ngFor=\"let futItem of form.regist_file_data let i = index\" [futItem]=\"futItem\" [readonly]=\"updateStatus\" (buttonClick)=\"form.regist_file_data.splice(i,1)\"></app-file-preview>\n  </app-card>\n\n  <app-card color=\"light\" class=\"file-card\">\n    <app-row>\n      <app-col>\n        <h5>대여대금 지급보증서</h5>\n      </app-col>\n      <app-col size=\"auto\" *ngIf=\"!updateStatus\">\n        <app-button fill=\"translucent\">\n          추가\n          <app-file view_type=\"RENTAL\"\n        [(ngModel)]=\"form.rental_file_data\"\n        [file]=\"form.rental_file\"\n        [file_json]=\"form.rental_json\"></app-file>\n        </app-button>\n      </app-col>\n    </app-row>\n    <app-file-preview *ngFor=\"let futItem of form.rental_file_data let i = index\" [futItem]=\"futItem\" [readonly]=\"updateStatus\" (buttonClick)=\"form.rental_file_data.splice(i,1)\"></app-file-preview>\n  </app-card>\n\n  <app-card color=\"light\" class=\"file-card\">\n    <app-row>\n      <app-col>\n        <h5>장비 작업계획서</h5>\n      </app-col>\n      <app-col size=\"auto\" *ngIf=\"!updateStatus\">\n        <app-button fill=\"translucent\">\n          추가\n          <app-file view_type=\"PLAN\"\n          [(ngModel)]=\"form.plan_file_data\"\n          [file]=\"form.plan_file\"\n          [file_json]=\"form.plan_json\"></app-file>\n        </app-button>\n      </app-col>\n    </app-row>\n    <app-file-preview *ngFor=\"let futItem of form.plan_file_data let i = index\" [futItem]=\"futItem\" [readonly]=\"updateStatus\" (buttonClick)=\"form.plan_file_data.splice(i,1)\"></app-file-preview>\n  </app-card>\n\n  <app-card color=\"light\" class=\"file-card\">\n    <app-row>\n      <app-col>\n        <h5>기타</h5>\n      </app-col>\n      <app-col size=\"auto\" *ngIf=\"!updateStatus\">\n        <app-button fill=\"translucent\">\n          추가\n          <app-file view_type=\"ETC\"\n          [(ngModel)]=\"form.etc_file_data\"\n          [file]=\"form.etc_file\"\n          [file_json]=\"form.etc_json\"></app-file>\n        </app-button>\n      </app-col>\n    </app-row>\n    <app-file-preview *ngFor=\"let futItem of form.etc_file_data let i = index\" [futItem]=\"futItem\" [readonly]=\"updateStatus\" (buttonClick)=\"form.etc_file_data.splice(i,1)\"></app-file-preview>\n  </app-card>\n  \n</ion-content>\n<app-button-footer *ngIf=\"machinery_id\">\n  <app-button fill=\"translucent\" *ngIf=\"updateStatus\" (click)=\"Heavyedit()\">수정</app-button>\n  <app-button fill=\"translucent\" *ngIf=\"!updateStatus\" (click)=\"Heavydelete()\" color=\"danger\">삭제</app-button>\n  <app-button fill=\"translucent\" *ngIf=\"!updateStatus\" (click)=\"Heavyupdate()\">저장</app-button>\n</app-button-footer>\n<app-button-footer *ngIf=\"!machinery_id\">\n  <app-button name=\"submit\" *ngIf=\"!updateStatus\" (click)=\"Heavysave()\">저장</app-button>\n</app-button-footer>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_equipment-management_heavy-equip-management_heavy-equip-edit_heavy-equip-7ae238.js.map