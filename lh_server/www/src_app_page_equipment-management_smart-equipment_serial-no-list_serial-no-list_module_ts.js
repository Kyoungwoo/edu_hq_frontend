(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_equipment-management_smart-equipment_serial-no-list_serial-no-list_module_ts"],{

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

/***/ 13485:
/*!***********************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/serial-no-list/serial-no-list-routing.module.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SerialNoListPageRoutingModule": () => (/* binding */ SerialNoListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _serial_no_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serial-no-list.page */ 38015);




const routes = [
    {
        path: '',
        component: _serial_no_list_page__WEBPACK_IMPORTED_MODULE_0__.SerialNoListPage
    }
];
let SerialNoListPageRoutingModule = class SerialNoListPageRoutingModule {
};
SerialNoListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SerialNoListPageRoutingModule);



/***/ }),

/***/ 943:
/*!***************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/serial-no-list/serial-no-list.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SerialNoListPageModule": () => (/* binding */ SerialNoListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _serial_no_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serial-no-list-routing.module */ 13485);
/* harmony import */ var _serial_no_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serial-no-list.page */ 38015);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);









let SerialNoListPageModule = class SerialNoListPageModule {
};
SerialNoListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _serial_no_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.SerialNoListPageRoutingModule
        ],
        declarations: [_serial_no_list_page__WEBPACK_IMPORTED_MODULE_1__.SerialNoListPage]
    })
], SerialNoListPageModule);



/***/ }),

/***/ 38015:
/*!*************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/serial-no-list/serial-no-list.page.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SerialNoListPage": () => (/* binding */ SerialNoListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_serial_no_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./serial-no-list.page.html */ 44197);
/* harmony import */ var _serial_no_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serial-no-list.page.scss */ 40970);
/* harmony import */ var _basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../basic/service/ionic/loading.service */ 21501);
/* harmony import */ var _basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../basic/service/ionic/alert.service */ 82929);
/* harmony import */ var _basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../basic/service/core/user.service */ 29730);
/* harmony import */ var _basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../basic/service/util/date.service */ 46879);
/* harmony import */ var _basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../basic/service/core/connect.service */ 71090);
/* harmony import */ var _basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../basic/service/ionic/toast.service */ 22455);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);











class SearialInfo {
}
class SearialInfoInsertItem {
    constructor() {
        this.ctgo_machine_serial_id = 0;
        this.master_company_id = 0;
        this.project_id = 0;
        this.serial_bicon = '';
        this.serial_nfc = '';
        this.serial_use_state = 0;
        this.serial_value = '';
        this.serial_id = 0;
    }
}
class SearialCtgo {
}
let SerialNoListPage = class SerialNoListPage {
    constructor(modal, toast, connect, date, user, alert, loading) {
        this.modal = modal;
        this.toast = toast;
        this.connect = connect;
        this.date = date;
        this.user = user;
        this.alert = alert;
        this.loading = loading;
        /** @param allState - 원청사와 업체를 전체를 검색할수 있는지 여부 */
        this.allState = (this.user.userData.user_type == 'LH' || this.user.userData.user_type == 'SUPER') ? true : false;
        /** @param serial_type - 등록 타입입니다. ('개인' | '중장비' | '위험지역') */
        this.serial_type = '개인';
        /** @param update_state - 현재 업데이트중인지 여부 */
        this.update_state = false;
        /** @param method_type - serial_type에따라 메서드가 변경됨 */
        this.method_type = '';
        this.form = {
            ctgo_machine_serial_id: 0,
            company_id: (this.user.userData.user_type == 'LH' || this.user.userData.user_type == 'SUPER') ? 0 : this.user.userData.belong_data.company_id,
            project_id: this.user.userData.belong_data.project_id,
            search_text: ''
        };
        /** @param res_original - 원본 데이터(비교용) */
        this.res_original = [];
        /** @param res_insert - 추가할 리스트 */
        this.res_insert = [];
        /** @param searial_ctgo_list - 등록 타입별 장비구분 카테고리 */
        this.searial_ctgo_list = [];
        /** @param selectedList - 체크박스로 선택된 목록 */
        this.selectedList = [];
    }
    ngOnInit() {
        setTimeout(() => {
            this.get();
        }, 300);
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getSearialCtgo();
            yield this.getList();
        });
    }
    ChangeSearialType(ev) {
        console.log('ChangeSearialType - ', ev);
        this.get();
    }
    /**
     * @function getList(): 중장비 등록 NO 목록 가져오기
     */
    getList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let method = yield this.TransMethodType();
            const res = yield this.connect.run(method, this.form, { parse: ['user_data'] });
            if (res.rsCode === 0) {
                this.res = Object.assign(Object.assign({}, this.res), res);
                this.res_original = JSON.parse(JSON.stringify(res.rsMap));
                this.res.rsMap.map((item, i) => { item.index = res.rsObj.row_count - i; });
            }
            else if (res.rsCode === 1008) {
                this.res = null;
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
            this.resetState();
        });
    }
    /**
     * @function resetState(): 선택리스트, 추가리스트, 업데이트 실행여부 등 스테이터스 초기화
     */
    resetState() {
        this.selectedList = [];
        this.res_insert = [];
        this.update_state = false;
    }
    /**
     * @function TransMethodType(): searial_type에 따라서 메서드 URL을 반환해주는 메서드
     */
    TransMethodType() {
        let method = '';
        switch (this.serial_type) {
            case '개인':
                method = '/serial/user/list';
                break;
            case '중장비':
                method = '/serial/machine/list';
                break;
            case '위험지역':
                method = '/serial/risk/list';
                break;
        }
        return method;
    }
    /**
     * @function getSearialCtgo(): 등록 NO 장비구분 목록 가져오기
     */
    getSearialCtgo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/serial/ctgo/list', { serial_type: '전체' });
            if (res.rsCode === 0) {
                this.searial_ctgo_list = res.rsMap;
                this.form.ctgo_machine_serial_id = 0;
            }
            else if (res.rsCode === 1008) {
                this.res = null;
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    /**
     * @function addButton(): "추가" 버튼 클릭시 목록에 ITEM ROW가 추가됩니다
     */
    addButton() {
        this.res_insert.push({
            ctgo_machine_serial_id: this.form.ctgo_machine_serial_id,
            master_company_id: this.form.company_id,
            project_id: this.form.project_id,
            serial_bicon: '',
            serial_nfc: '',
            serial_use_state: 0,
            serial_value: '',
            serial_id: 0
        });
    }
    /**
     * @function SearialDelete(): 선택목록 삭제하기 메서드
     */
    SearialDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            let insert_item = [];
                            let update_item = [];
                            this.selectedList.map((item) => {
                                if (!item.serial_id)
                                    insert_item.push(item);
                                if (item.serial_id)
                                    update_item.push(item.serial_id);
                            });
                            // insert item이 있으면 삭제
                            if (insert_item.length) {
                                insert_item.map((item) => { if (this.res_insert.indexOf(item) != -1)
                                    this.res_insert.splice(this.res_insert.indexOf(item), 1); });
                            }
                            // update item이 있으면 삭제
                            if (update_item.length) {
                                const res = yield this.connect.run('/serial/delete', {
                                    serial_ids: update_item
                                });
                                if (res.rsCode === 0) {
                                    this.getList();
                                }
                                else {
                                    this.toast.present({ color: 'warning', message: res.rsMsg });
                                }
                            }
                        })
                    }
                ]
            });
        });
    }
    /**
     * @function SearialSave(): "저장" 버튼을 클릭하면 실행되는 메서드
     */
    SearialSave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.present({
                message: '저장 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            let case_1 = false; // 원청사를 하나라도 선택 안했을때
                            let case_2 = false; // 장비구분을 하나라도 선택 안했을때
                            let insert_promise = null;
                            let update_promise = null;
                            // 추가한 리스트 인서트
                            let loadingCus = yield this.loading.present();
                            if (this.res_insert.length) {
                                this.res_insert.map((item, index) => {
                                    if (!item.master_company_id)
                                        case_1 = true;
                                    if (!item.ctgo_machine_serial_id)
                                        case_2 = true;
                                });
                                if (case_1) {
                                    yield loadingCus.dismiss();
                                    return this.toast.present({ color: 'warning', message: '원청사를 선택해주세요.' });
                                }
                                if (case_2) {
                                    yield loadingCus.dismiss();
                                    return this.toast.present({ color: 'warning', message: '장비구분을 선택해주세요.' });
                                }
                                console.log(this.res_insert);
                                // 예외처리 후 하나씩 리스트에 추가해준다. - 모든 api가 호출될때까지 기다린다
                                insert_promise = yield Promise.all(this.res_insert.map((item) => { return this.SearialSaveMethod(item, 'insert'); }));
                                // 추가할 아이템만 있을경우 실행
                                // insert_promise.then(() => {if(this.res_insert.length && !this.res) this.getList();});
                            }
                            // 수정된 아이템 찾기
                            let changeed_itemIndex = [];
                            if (this.res) {
                                console.log(this.res);
                                for (let i = 0; i < this.res.rsMap.length; i++) {
                                    if (this.res.rsMap[i].master_company_id != this.res_original[i].master_company_id ||
                                        this.res.rsMap[i].ctgo_machine_serial_id != this.res_original[i].ctgo_machine_serial_id ||
                                        this.res.rsMap[i].serial_bicon != this.res_original[i].serial_bicon ||
                                        this.res.rsMap[i].serial_nfc != this.res_original[i].serial_nfc ||
                                        this.res.rsMap[i].serial_value != this.res_original[i].serial_value ||
                                        this.res.rsMap[i].serial_use_state != this.res_original[i].serial_use_state)
                                        changeed_itemIndex.push(this.res.rsMap[i]);
                                }
                            }
                            // 한개라도 바뀐 아이템이 있으면 수정 실행
                            if (changeed_itemIndex.length) {
                                // 수정된 아이템들 업데이트하기 - 모든 api를 호출할때까지 기다린다
                                update_promise = yield Promise.all(changeed_itemIndex.map((item) => { return this.SearialSaveMethod(item, 'update'); }));
                                // 모든 api를 호출 후 리스트 다시 갱신
                                // update_promise.then(() => {this.getList();});
                            }
                            const all_promise = Promise.all([insert_promise, update_promise]);
                            yield all_promise.then(() => { if (changeed_itemIndex.length || this.res_insert.length)
                                this.getList(); });
                            if (!changeed_itemIndex.length && !this.res_insert.length)
                                this.resetState();
                            yield loadingCus.dismiss();
                        })
                    }
                ]
            });
        });
    }
    /**
     * @function SeariaSaveMethod(): Promise가 적용된 insert/update api 호출메서드 입니다.
     * @param item - insert/update 아이템
     * @param type - 메서드 타입('insert' | 'update')
     * @returns resolve(true)
     */
    SearialSaveMethod(item, type) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/serial/' + type, item);
            if (res.rsCode === 0) {
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
            resolve(true);
        }));
    }
    /**
     * @function btnPromise(): 권한에 따른 버튼활성화 메서드
     * @param type - 버튼의 type
     * @param user_id - 체크박스가 있는 목록 해당 아이템을 등록한 사람의 user_id
     * @returns true or false
     */
    btnPromise(type, user_id = null) {
        let state = false;
        switch (type) {
            case 'insert':
                if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY')
                    state = true;
                break;
            case 'update':
                if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY')
                    state = true;
                break;
            case 'delete':
                if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY')
                    state = true;
                break;
            case 'delete_check':
                if (this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY')
                    state = true;
                break;
        }
        return state;
    }
};
SerialNoListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService },
    { type: _basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_6__.ConnectService },
    { type: _basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_5__.DateService },
    { type: _basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService }
];
SerialNoListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-serial-no-list',
        template: _raw_loader_serial_no_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_serial_no_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SerialNoListPage);



/***/ }),

/***/ 40970:
/*!***************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/serial-no-list/serial-no-list.page.scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".center-class {\n  text-align: center;\n}\n\ntd {\n  vertical-align: middle !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcmlhbC1uby1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNJLGlDQUFnQztBQUNwQyIsImZpbGUiOiJzZXJpYWwtbm8tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLWNsYXNze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGR7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ 44197:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/equipment-management/smart-equipment/serial-no-list/serial-no-list.page.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-admin></app-header-admin>\n\n<ion-content [scrollX]=\"true\">\n  <app-container>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\"><app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList()\">검색</app-button></app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n               <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor [project_id]=\"form.project_id\" [(ngModel)]=\"form.company_id\"></app-select-contractor>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select label=\"스마트장비\" [(ngModel)]=\"form.ctgo_machine_serial_id\">\n                  <app-select-option [value]=\"0\">전체</app-select-option>\n                  <app-select-option *ngFor=\"let item of searial_ctgo_list\" [value]=\"item.ctgo_machine_serial_id\">{{ item.ctgo_machine_serial_name }}</app-select-option>\n                </app-select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" [(ngModel)]=\"form.search_text\" placeholder=\"검색어를 입력해 주세요.\" [(ngModel)]=\"this.form.search_text\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n        <ion-toolbar color=\"white\">\n          <ion-buttons slot=\"start\">\n            <app-button *ngIf=\"btnPromise('insert')\" fill=\"translucent\" (click)=\"addButton()\">추가</app-button>\n            <app-button *ngIf=\"btnPromise('update')\" [disabled]=\"update_state\" fill=\"translucent\" (click)=\"update_state = true\">수정</app-button>\n            <app-button *ngIf=\"btnPromise('delete')\" fill=\"translucent\" color=\"danger\" (click)=\"SearialDelete()\">삭제</app-button>\n            <app-button *ngIf=\"btnPromise('update')\" [disabled]=\"!update_state && !res_insert.length\" fill=\"translucent\" (click)=\"SearialSave()\">저장</app-button>\n          </ion-buttons>\n          <!-- <ion-buttons slot=\"end\">\n            <ion-segment color=\"primary\" [(ngModel)]=\"this.serial_type\" (ngModelChange)=\"ChangeSearialType($event)\">\n              <ion-segment-button value=\"개인\">개인용</ion-segment-button>\n              <ion-segment-button value=\"중장비\">중장비용</ion-segment-button>\n              <ion-segment-button value=\"위험지역\">장소용</ion-segment-button>\n            </ion-segment>\n          </ion-buttons> -->\n        </ion-toolbar>\n        <ion-toolbar color=\"white\">\n          <h5>장비 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n        </ion-toolbar>\n        <app-check-group [(ngModel)]=\"selectedList\">\n          <app-table>\n            <thead>\n              <tr>\n                <th *ngIf=\"btnPromise('delete_check')\" style=\"width: 40px;\" rowspan=\"2\"><app-check type=\"all\" color=\"white\" size=\"small\" name=\"check\"></app-check></th>\n                <th>업체명</th>\n                <th>스마트장비</th>\n                <th>관리번호</th>\n                <th>기기식별번호</th>\n                <th>NFC NO</th>\n                <!-- <th>기준값</th> -->\n                <th>사용여부</th>\n                <!-- <th>배정현황</th> -->\n              </tr>\n            </thead>\n            <tbody>\n              <!-- 추가된 ITEM 영역 -->\n              <tr *ngFor=\"let item of res_insert\">\n                <td *ngIf=\"btnPromise('delete_check')\" style=\"width: 40px;\"><app-check [on]=\"item\" color=\"white\" size=\"small\" name=\"check\"></app-check></td>\n                <td>\n                  <app-select-contractor label=\"\" [disabled]=\"user.userData.user_type == 'LH' ? false : true\" [project_id]=\"item.project_id\" [(ngModel)]=\"item.master_company_id\"></app-select-contractor>\n                </td>\n                <td>\n                  <app-select label=\"장비구분\" [(ngModel)]=\"item.ctgo_machine_serial_id\" label=\"\">\n                    <app-select-option *ngFor=\"let item of searial_ctgo_list\" [value]=\"item.ctgo_machine_serial_id\">{{ item.ctgo_machine_serial_name }}</app-select-option>\n                  </app-select>\n                </td>\n                <td class=\"center-class\"> - </td>\n                <td><app-input placeholder=\"입력해주세요\" [(ngModel)]=\"item.serial_bicon\"></app-input></td>\n                <td><app-input placeholder=\"입력해주세요\" [(ngModel)]=\"item.serial_nfc\"></app-input></td>\n                <!-- <td><app-input placeholder=\"입력해주세요\" [(ngModel)]=\"item.serial_value\"></app-input></td> -->\n                <td>\n                  <app-select [(ngModel)]=\"item.serial_use_state\">\n                    <app-select-option [value]=\"1\">Y</app-select-option>\n                    <app-select-option [value]=\"0\">N</app-select-option>\n                  </app-select>\n                </td>\n                <!-- <td class=\"center-class\"> - </td> -->\n              </tr>\n    \n              <tr *ngFor=\"let item of res?.rsMap\">\n                <td style=\"width: 40px;\"><app-check [on]=\"item\" color=\"white\" size=\"small\" name=\"check\"></app-check></td>\n                <td>\n                  <app-select-contractor label=\"\" [disabled]=\"(user.userData.user_type == 'LH' && update_state) ? false : true\" [project_id]=\"item.project_id\" [(ngModel)]=\"item.master_company_id\"></app-select-contractor>\n                </td>\n                <td>\n                  <app-select label=\"장비구분\" [(ngModel)]=\"item.ctgo_machine_serial_id\" label=\"\" [disabled]=\"!update_state\">\n                    <app-select-option *ngFor=\"let item of searial_ctgo_list\" [value]=\"item.ctgo_machine_serial_id\">{{ item.ctgo_machine_serial_name }}</app-select-option>\n                  </app-select>\n                </td>\n                <td [class.center-class]=\"!item.serial_no\">{{ item.serial_no }}</td>\n                <td><app-input [disabled]=\"!update_state\" [(ngModel)]=\"item.serial_bicon\"></app-input></td>\n                <td><app-input [disabled]=\"!update_state\" [(ngModel)]=\"item.serial_nfc\"></app-input></td>\n                <!-- <td><app-input [disabled]=\"!update_state\" [(ngModel)]=\"item.serial_value\"></app-input></td> -->\n                <td>\n                  <app-select [(ngModel)]=\"item.serial_use_state\" [disabled]=\"!update_state\">\n                    <app-select-option [value]=\"1\">Y</app-select-option>\n                    <app-select-option [value]=\"0\">N</app-select-option>\n                  </app-select>\n                </td>\n                <!-- <td [class.center-class]=\"!item.assign_data\">{{ item.assign_data ? item.assign_data : ' - ' }}</td> -->\n              </tr>\n            </tbody>\n          </app-table>\n        </app-check-group>\n      </app-col>\n    </app-row>\n\n  </app-container>\n\n  </ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_equipment-management_smart-equipment_serial-no-list_serial-no-list_module_ts.js.map