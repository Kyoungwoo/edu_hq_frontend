(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_work-plan_work-minutes_worker-minutes-edit_worker-minutes-edit_page_ts"],{

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

/***/ 58081:
/*!*******************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/qr-safety-in/qr-safety-in.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrSafetyInPage": () => (/* binding */ QrSafetyInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_qr_safety_in_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./qr-safety-in.page.html */ 42628);
/* harmony import */ var _qr_safety_in_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-safety-in.page.scss */ 78487);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var qrious__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qrious */ 96434);
/* harmony import */ var qrious__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qrious__WEBPACK_IMPORTED_MODULE_3__);







let QrSafetyInPage = class QrSafetyInPage {
    constructor(navParams, connect, _modal) {
        this.navParams = navParams;
        this.connect = connect;
        this._modal = _modal;
        this.qr = null;
    }
    ngOnInit() {
        console.log('QrSafetyInPage - ', this.item);
        this.meet_time = `${this.item.safety_meeting_start_time} ~ ${this.item.safety_meeting_end_time}`;
        this.meet_date = `${this.item.safety_meeting_date}(${this.item.safety_meeting_date_week_day})`;
        this.generatorQrcode();
    }
    generatorQrcode() {
        console.log("this.navParams", `${this.navParams.data.item.safety_meeting_id}`);
        this.qr = new (qrious__WEBPACK_IMPORTED_MODULE_3___default())({
            element: document.getElementById('qrious'),
            size: 250,
            value: '{"safety_meeting_id":"' + this.navParams.data.item.safety_meeting_id + '","type":"SAFE"}' // `${this.navParams.data.item.education_safe_id}`
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
QrSafetyInPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
QrSafetyInPage.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
QrSafetyInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-qr-safety-in',
        template: _raw_loader_qr_safety_in_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_qr_safety_in_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QrSafetyInPage);



/***/ }),

/***/ 9630:
/*!*********************************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.page.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditItem": () => (/* binding */ EditItem),
/* harmony export */   "WorkerMinutesEditPage": () => (/* binding */ WorkerMinutesEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_worker_minutes_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./worker-minutes-edit.page.html */ 27702);
/* harmony import */ var _worker_minutes_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker-minutes-edit.page.scss */ 57677);
/* harmony import */ var _qr_safety_in_qr_safety_in_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../qr-safety-in/qr-safety-in.page */ 58081);
/* harmony import */ var src_app_component_modal_people_delete_people_delete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/modal/people-delete/people-delete.component */ 84921);
/* harmony import */ var src_app_component_modal_search_attendance_search_attendance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/component/modal/search-attendance/search-attendance.component */ 66822);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/basic/service/core/language-pack.service */ 96083);















class EditItem {
    constructor() {
        this.safety_meeting_content = '';
        this.safety_meeting_resolve = '';
        this.safety_meeting_etc = '';
        this.safety_meeting_file_data = [];
        this.file = [];
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_7__.FileJson();
    }
}
class attendantRes {
}
let WorkerMinutesEditPage = class WorkerMinutesEditPage {
    constructor(user, connect, toast, _modal, date, alert, languagePack) {
        this.user = user;
        this.connect = connect;
        this.toast = toast;
        this._modal = _modal;
        this.date = date;
        this.alert = alert;
        this.languagePack = languagePack;
        this.form = new EditItem();
        this.attentForm = {
            safety_meeting_id: 0,
            search_text: ''
        };
        this.user_id = [];
        this.eduUpdate = false;
        // form = {
        //   project_id: null, // 현장ID
        //   project_name: null,
        //   company_id: null,
        //   master_company_id: null, // 회사ID
        //   master_company_name: null, // 회사 이름
        //   user_id: null, // 작성자 아이디
        //   safety_meeting_type: '직접입력', // 회의록 유형
        //   safety_meeting_type_text: '직접입력', // 회의록 유형 장문
        //   safety_meeting_date: null, // 회의록 일자
        //   safety_meeting_place: null, // 회의록 장소
        //   safety_meeting_content: null, // 회의록 협의내용
        //   safety_meeting_resolve: null, // 회의록 의결내용
        //   safety_meeting_etc: '', // 회의록 기타내용
        //   safety_meeting_state: '회의 전', // 회의 상태
        //   file_data: [] as FutItem[], //FUT
        //   file: [] as (File|FileBlob)[], // FILE
        //   file_json: new FileJson(), // JSON
        //   // 결재 값
        //   ctgo_approval_module_id: null,
        //   approval_cnt_answer: null, // 결재선 유형 - 임시저장 OR 결재중 -> 결재요청은 결재중 상태로 올려주세요. 두가지중 하나만 가능
        //   approval_default_data: [], // 결재선 값
        //   // 수정시 정보
        //   approval_id: null, // 결재 ID
        //   safety_meeting_id: null, // 회의록 ID
        //   user_name: null,
        //   create_date: null,
        //   create_date_week_day: null,
        //   safety_meeting_start_time: null, // 회의록 시작시간
        //   safety_meeting_end_time: null, // 회의록 종료시간
        // }
        this.permission = {
            edit: false
        };
        this.editable = {
            update: true,
            safetyMenu: 1,
            menu_state: false,
            my_state: false
        };
        this.safety_defualt = null;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.safety_meeting_id) {
                // 신규 작성 시, 디폴트 값을 가져옴
                this.editable.update = true;
                this.form.safety_meeting_state = '회의 전';
                this.form.safety_meeting_type_text = '직접입력';
                this.getDefaultForm(); // 폼으로 채우고
            }
            else {
                // 수정 시에는 정보를 가져와서 채워넣음
                this.form.safety_meeting_id = this.safety_meeting_id;
                yield this.getDetail();
                this.getAttendList();
            }
            this.getDefaultContent(); // 기본 정보를 가지고 온다.
            // 나머지 정보
            // this.form.safety_meeting_type_text = this.getTypeText(this.form.safety_meeting_type);
            // 결재에는 ctgo_approval_module_id 가 반드시 필요하므로 유의
            // this.form.ctgo_approval_module_id = this.getApprovalModuleId(this.form.safety_meeting_type);
        });
    }
    getDefaultForm() {
        const { user_name, belong_data } = this.user.userData;
        this.form.project_id = this.project_id;
        this.form.project_name = belong_data.project_name;
        this.form.master_company_id = belong_data.master_company_id;
        this.form.master_company_name = belong_data.master_company_name;
        this.form.company_id = belong_data.company_id;
        this.form.safety_meeting_type = this.safety_meeting_type;
        this.form.safety_meeting_date = this.date.today();
        this.form.create_date = this.date.today();
        this.form.user_name = user_name + ' / ' + belong_data.company_name;
    }
    /**
     * 기본 회의록 협의사항 가져오기
     */
    getDefaultContent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/board/safety_meeting/default/get', {
                project_id: this.form.project_id,
                company_id: this.form.master_company_id
            });
            if (res.rsCode === 0) {
                this.safety_defualt = res.rsObj;
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    /**
     * 기본 회의록 협의사항 적용하기
     */
    changeDefault(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            switch (item) {
                case '안전':
                    this.form.safety_meeting_content = this.safety_defualt.safety_default;
                    break;
                case '노사':
                    this.form.safety_meeting_content = this.safety_defualt.union_default;
                    break;
                case '산업':
                    this.form.safety_meeting_content = this.safety_defualt.health_default;
                    break;
                case '직접입력':
                    this.form.safety_meeting_content = '';
                    break;
            }
        });
    }
    /**
     * 회의록 정보 가져오기
     */
    getDetail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/board/safety_meeting/detail', {
                safety_meeting_id: this.form.safety_meeting_id
            }, { parse: ['safety_meeting_file_data'] });
            if (res.rsCode === 0) {
                this.form = Object.assign(Object.assign({}, this.form), res.rsObj);
                if (this.form.user_id === this.user.userData.user_id)
                    this.editable.my_state = true;
                this.form.user_name = this.form.user_name + ' / ' + this.form.master_company_name;
                this.form.safety_meeting_type_text = this.form.safety_meeting_type;
                if (this.form.safety_meeting_type_text !== '안전' &&
                    this.form.safety_meeting_type_text !== '노사' &&
                    this.form.safety_meeting_type_text !== '산업') {
                    let theme_text_1 = this.form.safety_meeting_type_text;
                    let theme_text_2 = this.form.safety_meeting_content;
                    this.form.safety_meeting_type_text = '직접입력';
                    setTimeout(() => {
                        this.form.safety_meeting_type = theme_text_1;
                        this.form.safety_meeting_content = theme_text_2;
                    }, 100);
                }
                if (this.user.userData.user_id === this.form.user_id)
                    this.editable.menu_state = true;
                if (this.form.user_id === this.user.userData.user_id)
                    this.editable.my_state = true;
                // console.log(this.form.safety_meeting_type);
                // console.log('this.form - ', this.form);
                // console.log(this.form);
                // 정보를 가져온 후, 결재 정보를 가져와야 한다! => app-approval component가 알아서 자동으로 가져온다!
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    getAttendList() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.res = yield this.connect.run('/board/safety_meeting/attendant/list', {
                safety_meeting_id: this.safety_meeting_id,
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
            else if (this.res.rsCode === 1008) {
                this.user_id = [];
            }
        });
    }
    /**
     * 회의록 텍스트 가져오기
     */
    getTypeText(safety_meeting_type) {
        switch (safety_meeting_type) {
            case '안전':
                return '안전 및 보건에 관한 협의체 회의록';
            case '노사':
                return '노사 협의체 회의록';
            case '산업':
                return '산업안전보건위원회 회의록';
        }
    }
    /**
     * 회의록 결재선 아이디 가져오기
     */
    getApprovalModuleId(safety_meeting_type) {
        switch (safety_meeting_type) {
            case '안전':
                return 11;
            case '노사':
                return 10;
            case '산업':
                return 9;
        }
    }
    /**
     * 삭제 버튼 클릭
     */
    onDeleteClick(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // 여기서는 딱히 처리할게 없음. 그냥 삭제 후 닫기.
            const res = yield ev.delete();
            if (res.rsCode === 0) {
                this._modal.dismiss();
                // 목록을 새로고침 해줘야 함
                window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
                window.dispatchEvent(new CustomEvent('approval-list:get()'));
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    updateItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            console.log("update - ", this.form);
            console.log("update - 1");
            if (this.form.safety_meeting_type_text === '직접입력') {
                if (!this.form.safety_meeting_type)
                    return this.toast.present({ message: '회의유형을 입력해 주세요.', color: 'warning' });
            }
            if (!this.form.safety_meeting_date)
                return this.toast.present({ message: '회의일을 선택해 주세요.', color: 'warning' });
            if (!this.form.safety_meeting_place)
                return this.toast.present({ message: '회의장소를 입력해 주세요.', color: 'warning' });
            if (!this.form.safety_meeting_start_time)
                return this.toast.present({ message: '회의시간을 설정해 주세요.', color: 'warning' });
            if (!this.form.safety_meeting_end_time)
                return this.toast.present({ message: '회의시간을 설정해 주세요.', color: 'warning' });
            if (!this.form.safety_meeting_content)
                return this.toast.present({ message: '협의사항을 입력해 주세요.', color: 'warning' });
            let start_time = Number(this.form.safety_meeting_start_time.split(':')[0] + this.form.safety_meeting_start_time.split(':')[1]);
            let end_time = Number(this.form.safety_meeting_end_time.split(':')[0] + this.form.safety_meeting_end_time.split(':')[1]);
            if (start_time >= end_time)
                return this.toast.present({ message: '교육종료시간을 교육시작시간보다 나중으로 해주세요.', color: 'warning' });
            const alert = yield this.alert.present({
                message: '수정하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/board/safety_meeting/update', this.form);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.safety_meeting_type_text === '직접입력') {
                if (!this.form.safety_meeting_type)
                    return this.toast.present({ message: '회의유형을 입력해 주세요.', color: 'warning' });
            }
            if (!this.form.safety_meeting_place)
                return this.toast.present({ message: '회의장소를 입력해 주세요.', color: 'warning' });
            if (!this.form.safety_meeting_place)
                return this.toast.present({ message: '회의장소를 입력해 주세요.', color: 'warning' });
            if (!this.form.safety_meeting_start_time)
                return this.toast.present({ message: '회의시간을 설정해 주세요.', color: 'warning' });
            if (!this.form.safety_meeting_end_time)
                return this.toast.present({ message: '회의시간을 설정해 주세요.', color: 'warning' });
            if (!this.form.safety_meeting_content)
                return this.toast.present({ message: '협의사항을 입력해 주세요.', color: 'warning' });
            let start_time = Number(this.form.safety_meeting_start_time.split(':')[0] + this.form.safety_meeting_start_time.split(':')[1]);
            let end_time = Number(this.form.safety_meeting_end_time.split(':')[0] + this.form.safety_meeting_end_time.split(':')[1]);
            if (start_time >= end_time)
                return this.toast.present({ message: '교육종료시간을 교육시작시간보다 나중으로 해주세요.', color: 'warning' });
            const alert = yield this.alert.present({
                message: '저장하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/board/safety_meeting/insert', this.form);
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
    deleteItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.present({
                message: '삭제하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/board/safety_meeting/delete', { safety_meeting_ids: [this.safety_meeting_id] });
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
    // /**
    //  * 임시 저장버튼 클릭
    //  */
    // async onSaveClick(ev:ApprovalBtnClickEvent) {
    //   const approval_data = ev.approval_data;
    //   if(!this.form.safety_meeting_place) { this.toast.present({ color: 'warning', message: '회의 장소를 입력해주세요.' }); return; }
    //   if(!this.form.safety_meeting_content) { this.toast.present({ color: 'warning', message: '협의 사항을 입력해주세요.' }); return; }
    //   if(!this.form.safety_meeting_resolve) { this.toast.present({ color: 'warning', message: '의결 사항을 입력해주세요.' }); return; }
    //   // this.form.approval_cnt_answer = '임시저장';
    //   // this.form.approval_default_data = approval_data;
    //   let url = '';
    //   if(!this.form.safety_meeting_id) {
    //     url = '/board/safety_meeting/insert';
    //   }
    //   else {
    //     url = '/board/safety_meeting/update';
    //   }
    //   const res = await this.connect.run(url, this.form, { loading: true });
    //   if(res.rsCode === 0) {
    //     this.toast.present({ color: 'success', message: '임시저장 되었습니다.' });
    //     if(!this.form.safety_meeting_id) {
    //       // 신규 작성이었다면, approval_id와 safety_meeting_id 반환받아서 넣어줘야 임시저장 시, 새로 추가되는 것이 아닌 수정이 된다.
    //       // this.form.approval_id = res.rsObj.approval_id;
    //       this.form.safety_meeting_id = res.rsObj.safety_meeting_id;
    //       // 목록을 새로고침 해줘야 함
    //       window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
    //       window.dispatchEvent(new CustomEvent('approval-list:get()'));
    //     }
    //   }
    //   else {
    //     this.toast.present({ color: 'warning', message: res.rsMsg });
    //   }
    // }
    // /**
    //  * 결재 요청 버튼 클릭
    //  */
    // async onSendClick(ev:ApprovalBtnClickEvent) {
    //   const approval_data = ev.approval_data;
    //   if(!this.form.safety_meeting_place) { this.toast.present({ color: 'warning', message: '회의 장소를 입력해주세요.' }); return; }
    //   if(!this.form.safety_meeting_content) { this.toast.present({ color: 'warning', message: '협의 사항을 입력해주세요.' }); return; }
    //   if(!this.form.safety_meeting_resolve) { this.toast.present({ color: 'warning', message: '의결 사항을 입력해주세요.' }); return; }
    //   this.form.approval_cnt_answer = '결재중';
    //   this.form.approval_default_data = approval_data;
    //   if(!this.form.approval_id) {
    //     // 임시저장도 안한 상태에서는 insert에서 결재 요청을 처리한다.
    //     const res = await this.connect.run('/board/safety_meeting/insert', this.form, { loading: true });
    //     if(res.rsCode === 0) {
    //       this.toast.present({ color: 'success', message: '결재요청 되었습니다.' });
    //       this._modal.dismiss();
    //       // 목록을 새로고침 해줘야 함
    //       window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
    //       window.dispatchEvent(new CustomEvent('approval-list:get()'));
    //     }
    //     else {
    //       this.toast.present({ color: 'warning', message: res.rsMsg });
    //     }
    //   }
    //   else {
    //     /**
    //      * 임시저장을 한 상태에서는 approval에서 따로 결재 요청(ev.send()) 처리한다.
    //      * 순서상, update 후 결재 요청을 욜리는 것이 맞다고 생각된다.
    //      */
    //     const loading = await this.loading.present();
    //     const res = await this.connect.run('/board/safety_meeting/update', this.form);
    //     if(res.rsCode === 0) {
    //       const approvalRes = await ev.send();
    //       if(approvalRes.rsCode === 0) {
    //         this.toast.present({ color: 'success', message: '결재요청 되었습니다.' });
    //         this._modal.dismiss();
    //         // 목록을 새로고침 해줘야 함
    //         window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
    //         window.dispatchEvent(new CustomEvent('approval-list:get()'));
    //       }
    //       else {
    //         this.toast.present({ color: 'warning', message: approvalRes.rsMsg });  
    //       }
    //     }
    //     else {
    //       this.toast.present({ color: 'warning', message: res.rsMsg });
    //     }
    //     loading.dismiss();
    //   }
    // }
    // /** 
    //  * 결재 회수 버튼 클릭 
    //  */
    // async onRecoveryClick(ev:ApprovalBtnClickEvent) {
    //   const res = await ev.recovery();
    //   if(res.rsCode === 0) {
    //     // 목록을 새로고침 해줘야 함
    //     window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
    //     window.dispatchEvent(new CustomEvent('approval-list:get()'));
    //   }
    // }
    // /**
    //  * 결재 버튼 클릭
    //  */
    //  async onApprovalClick(ev:ApprovalBtnClickEvent) {
    //   const res = await ev.approval();
    //   if(res.rsCode === 0) {
    //     this.toast.present({ color: 'success', message: '결재 되었습니다.' });
    //     this._modal.dismiss();
    //     // 목록을 새로고침 해줘야 함
    //     window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
    //     window.dispatchEvent(new CustomEvent('approval-list:get()'));
    //   }
    // }
    // /**
    //  * 결재 상태가 변할 때 행동
    //  */
    // onApprovalChange(ev:ApprovalBtnClickEvent) {
    //   if(ev.btnList.includes('임시저장')) {
    //     this.permission.edit = true;
    //   }
    //   else {
    //     this.permission.edit = false;
    //   }
    //   /** 결재자들을 가지고 온다.(모바일 화면 용) */
    //   this.approval_answer = ev.approval_data[0].answer_datas;
    //   /** 결재자 의견을 가지고 온다. */
    //   this.approval_comment = ev.approval_comment;
    //   /** 모바일 화면에서는 테이블 편집이 안된다. */
    //   if(window.innerWidth <= 768) {
    //     this.permission.edit = false;
    //   }
    // }
    changeType(item) {
        console.log(this.form.safety_meeting_type_text);
        switch (item) {
            case '안전':
            case '노사':
            case '산업':
                this.form.safety_meeting_type = item;
                break;
            case '직접입력':
                this.form.safety_meeting_type = '';
                break;
        }
        this.changeDefault(item);
    }
    userInfo(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: src_app_component_modal_people_delete_people_delete_component__WEBPACK_IMPORTED_MODULE_3__.PeopleDeleteComponent,
                componentProps: Object.assign({ item }, { menu_state: this.editable.menu_state, my_state: this.editable.my_state, type: 'SAFE' })
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            console.log('userInfo outer - ', data);
            if (data) {
                console.log('userInfo inner - ', data);
                this.getAttendList();
            }
        });
    }
    safeAdd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: src_app_component_modal_search_attendance_search_attendance_component__WEBPACK_IMPORTED_MODULE_4__.SearchAttendanceComponent,
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
                const res = yield this.connect.run('/board/safety_meeting/attendant/insert', {
                    attendant_user_ids: this.user_id,
                    safety_meeting_id: this.safety_meeting_id
                });
                if (res.rsCode === 0) {
                    this.toast.present({ message: '선택하신 인원이 출석되었습니다.', color: 'primary' });
                    this.getAttendList();
                }
                else {
                    this.toast.present({ message: res.rsMsg, color: 'warning' });
                }
            }
        });
    }
    qrAdd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _qr_safety_in_qr_safety_in_page__WEBPACK_IMPORTED_MODULE_2__.QrSafetyInPage,
                componentProps: {
                    item: this.form
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.getAttendList();
            }
        });
    }
};
WorkerMinutesEditPage.ctorParameters = () => [
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_6__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_9__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_10__.DateService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: src_app_basic_service_core_language_pack_service__WEBPACK_IMPORTED_MODULE_11__.LanguagePackService }
];
WorkerMinutesEditPage.propDecorators = {
    safety_meeting_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    project_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }],
    safety_meeting_type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }]
};
WorkerMinutesEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-worker-minutes-edit',
        template: _raw_loader_worker_minutes_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_worker_minutes_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WorkerMinutesEditPage);



/***/ }),

/***/ 78487:
/*!*********************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/qr-safety-in/qr-safety-in.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1zYWZldHktaW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 57677:
/*!***********************************************************************************************!*\
  !*** ./src/app/page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.page.scss ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrZXItbWludXRlcy1lZGl0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 42628:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/work-plan/work-minutes/qr-safety-in/qr-safety-in.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <app-row>\n      <app-col>\n        <ion-title>출석등록 QR</ion-title>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-button (click)=\"dismiss()\" fill=\"clear\">\n          <app-img name=\"close\"></app-img>\n        </app-button>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div  style=\"display: flex; justify-content: center; height:calc(100% - 60%); align-items: center;\">\n    <img (click)=\"downloadQR()\" id=\"qrious\"/>\n  </div>\n    <app-card>\n      <app-row>\n        <app-col>\n          <app-input [readonly]=\"true\" name=\"date\" label=\"회의일\" [value]=\"meet_date\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <app-input [readonly]=\"true\" name=\"name\" label=\"회의유형\" [value]=\"item.safety_meeting_type_full\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <app-input [readonly]=\"true\" name=\"time\" label=\"회의시간\" [value]=\"meet_time\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n    <app-card>\n      <app-row>\n        <app-col>\n          <app-input [readonly]=\"true\" name=\"time\" label=\"출석진행자\" [value]=\"item.user_name\"></app-input>\n        </app-col>\n      </app-row>\n    </app-card>\n</ion-content>\n");

/***/ }),

/***/ 27702:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.page.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *mobileHidden>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>회의록</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  \n    <!-- *ngIf=\"user.userData.user_type !== 'WORKER'\" -->\n    <!-- <app-approval \n    [project_id]=\"form.project_id\"\n    [company_id]=\"form.company_id\"\n    [ctgo_approval_module_id]=\"form.ctgo_approval_module_id\"\n    [approval_id]=\"form.approval_id\"\n    (deleteClick)=\"onDeleteClick($event)\"\n    (saveClick)=\"onSaveClick($event)\"\n    (sendClick)=\"onSendClick($event)\"\n    (recoveryClick)=\"onRecoveryClick($event)\"\n    (approvalClick)=\"onApprovalClick($event)\"\n    (change)=\"onApprovalChange($event)\"></app-approval> -->\n  \n    <!-- <app-approval-document> -->\n  \n      <!-- <h2>{{ form.safety_meeting_type_text }}</h2> -->\n      <h2>회의 현황</h2>\n  \n      <!-- <app-approval-template *mobileShow [approval_answer]=\"approval_answer\"></app-approval-template> -->\n  \n      <!-- <h4>기본 정보</h4> -->\n  \n      <app-row>\n        <app-col>\n          <h4>회의 정보</h4>\n        </app-col>\n        <ng-container *ngIf=\"safety_meeting_id\">\n          <!-- <app-col size=\"auto\" *ngIf=\"editable.my_state\">\n            <app-button (click)=\"editable.update = true\" fill=\"translucent\">수정</app-button>\n          </app-col> -->\n          <app-col size=\"auto\" *ngIf=\"editable.my_state\">\n            <!--  (click)=\"deleteItem()\" -->\n            <app-button (click)=\"deleteItem()\" fill=\"translucent\" color=\"danger\">삭제</app-button>\n          </app-col>\n          <app-col size=\"auto\" *ngIf=\"editable.my_state\">\n            <!--  (click)=\"updateItem()\" -->\n            <app-button (click)=\"updateItem()\" fill=\"translucent\">저장</app-button>\n          </app-col>\n        </ng-container>\n        <app-col size=\"auto\" *ngIf=\"!safety_meeting_id\">\n          <!--  (click)=\"submit()\" -->\n          <app-button (click)=\"submit()\">저장</app-button>\n        </app-col>\n      </app-row>\n  \n      <app-row>\n        <app-col>\n          <app-select-scene [(ngModel)]=\"form.project_id\" [disabled]=\"true\"></app-select-scene>\n        </app-col>\n        <app-col>\n          <app-input label=\"회의 상태\" [(ngModel)]=\"form.safety_meeting_state\" [disabled]=\"true\"></app-input>\n        </app-col>\n      </app-row>\n  \n      <app-row>\n        <app-col>\n          <app-input label=\"개설자\" [(ngModel)]=\"form.user_name\" [disabled]=\"true\"></app-input>\n        </app-col>\n        <app-col>\n          <app-calendar label=\"개설일\" [(ngModel)]=\"form.create_date\" [disabled]=\"true\"></app-calendar>\n        </app-col>\n      </app-row>\n  \n      <app-row>\n        <app-col>\n          <app-row>\n            <app-col>\n              <app-select (ngModelChange)=\"changeType($event)\" [required]=\"true\" label=\"회의유형\" [(ngModel)]=\"form.safety_meeting_type_text\" [disabled]=\"editable.my_state ? false : (safety_meeting_id)\">\n                <app-select-option value=\"직접입력\">직접입력</app-select-option>\n                <app-select-option value=\"안전\">안전 및 보건에 관한 협의체 회의록</app-select-option>\n                <app-select-option value=\"노사\">노사 협의체 회의록</app-select-option>\n                <app-select-option value=\"산업\">산업안전보건위원회 회의록</app-select-option>\n              </app-select>\n            </app-col>\n  \n            <app-col>\n              <app-input [required]=\"true\" label=\"직접 입력란\" [(ngModel)]=\"form.safety_meeting_type\" [disabled]=\"safety_meeting_id ? (editable.update ? form.safety_meeting_type_text !== '직접입력' : true) : form.safety_meeting_type_text !== '직접입력'\"></app-input>\n            </app-col>\n          </app-row>\n  \n        </app-col>\n        <app-col>\n          <app-calendar [required]=\"true\" label=\"회의일\" [(ngModel)]=\"form.safety_meeting_date\" [disabled]=\"editable.my_state ? false : (safety_meeting_id)\"></app-calendar>\n        </app-col>\n      </app-row>\n  \n      <app-row>\n        <app-col>\n          <app-input [required]=\"true\" label=\"회의장소\" [(ngModel)]=\"form.safety_meeting_place\" [disabled]=\"editable.my_state ? false : (safety_meeting_id)\"></app-input>\n        </app-col>\n        <app-col>\n          <app-row>\n            <app-col size=\"6\">\n              <app-datetime [required]=\"true\" [disabled]=\"editable.my_state ? false : (safety_meeting_id)\" name=\"safety_meeting_start_time\" label=\"회의시작시간\"\n              [(ngModel)]=\"form.safety_meeting_start_time\">\n              </app-datetime>\n            </app-col>\n            <app-col size=\"6\">\n              <app-datetime [required]=\"true\" [disabled]=\"editable.my_state ? false : (safety_meeting_id)\" name=\"safety_meeting_end_time\" label=\"회의종료시간\"\n              [(ngModel)]=\"form.safety_meeting_end_time\">\n              </app-datetime>\n            </app-col>\n          </app-row>\n        </app-col>\n      </app-row>\n    \n      <h4>회의 내용</h4>\n      <app-row>\n        <app-col>\n    \n          <app-textarea [required]=\"true\" label=\"협의 사항\" [(ngModel)]=\"form.safety_meeting_content\" [rows]=\"10\" [readonly]=\"editable.my_state ? false : (safety_meeting_id)\"></app-textarea>\n    \n        </app-col>\n        <app-col>\n    \n          <app-textarea label=\"의결 사항\" [(ngModel)]=\"form.safety_meeting_resolve\" [rows]=\"10\" [readonly]=\"editable.my_state ? false : (safety_meeting_id)\"></app-textarea>\n    \n        </app-col>\n      </app-row>\n    \n      <app-textarea label=\"기타 사항\" [(ngModel)]=\"form.safety_meeting_etc\" [readonly]=\"editable.my_state ? false : (safety_meeting_id)\"></app-textarea>\n    \n      <app-row *ngIf=\"safety_meeting_id\" style=\"align-items: flex-start;\">\n        <app-col>\n          <ion-toolbar color=\"white\">\n            <app-row>\n              <app-col>\n                <h5>회의사진</h5>\n              </app-col>\n              <app-col *ngIf=\"editable.my_state\" size=\"auto\">\n                <app-button>추가\n                  <app-file name=\"input\" view_type=\"SAFETY_ONE\" [(ngModel)]=\"form.safety_meeting_file_data\" [file]=\"form.file\"\n                    [file_json]=\"form.file_json\"></app-file>\n                </app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <ng-container *ngFor=\"let futItem of form.safety_meeting_file_data; let i = index\">\n            <app-file-preview type=\"full\" *ngIf=\"futItem.view_type === 'SAFETY_ONE'\" [futItem]=\"futItem\"\n              (buttonClick)=\"form.safety_meeting_file_data.splice(i,1)\" [readonly]=\"editable.my_state ? false : (safety_meeting_id)\"></app-file-preview>\n          </ng-container>\n        </app-col>\n        <app-col>\n          <ion-toolbar color=\"white\">\n            <app-row>\n              <app-col>\n                <h5></h5>\n              </app-col>\n              <app-col *ngIf=\"editable.my_state\" size=\"auto\">\n                <app-button>추가\n                  <app-file name=\"input\" view_type=\"SAFETY_TWO\" [(ngModel)]=\"form.safety_meeting_file_data\" [file]=\"form.file\"\n                    [file_json]=\"form.file_json\"></app-file>\n                </app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <ng-container *ngFor=\"let futItem of form.safety_meeting_file_data; let i = index\">\n            <app-file-preview type=\"full\" *ngIf=\"futItem.view_type === 'SAFETY_TWO'\" [futItem]=\"futItem\"\n              (buttonClick)=\"form.safety_meeting_file_data.splice(i,1)\" [readonly]=\"editable.my_state ? false : (safety_meeting_id)\"></app-file-preview>\n          </ng-container>\n        </app-col>\n      </app-row>\n\n      <app-row>\n        <app-col>\n          <h4>교육 자료</h4>\n        </app-col>\n        <app-col size=\"auto\" *ngIf=\"editable.my_state\">\n          <app-button fill=\"translucent\">\n            <app-file view_type=\"SAFETY\" [multiple]=\"true\" [(ngModel)]=\"form.safety_meeting_file_data\"\n              [file]=\"form.file\" [file_json]=\"form.file_json\">\n            </app-file>\n            첨부\n          </app-button>\n        </app-col>\n      </app-row>\n      <ng-container *ngFor=\"let futItem of form.safety_meeting_file_data; let i = index\" >\n        <app-file-preview type=\"full\"\n        *ngIf=\"futItem.view_type === 'SAFETY'\"\n        [futItem]=\"futItem\" \n        [readonly]=\"editable.my_state ? false : (safety_meeting_id)\"\n        (buttonClick)=\"form.safety_meeting_file_data.splice(i,1)\"></app-file-preview>\n      </ng-container>\n  \n      <ng-container *ngIf=\"safety_meeting_id && form.safety_meeting_state !== '회의 전'\">\n        <app-row style=\"margin-top: 10px;\">\n          <app-col>\n            <h4>출석 현황 : {{ res?.rsObj?.row_count || 0 }}명</h4>\n          </app-col>\n          <app-col size=\"3\">\n            <app-input (keyup.enter)=\"getAttendList()\" [(ngModel)]=\"attentForm.search_text\" placeholder=\"출석한 근로자를 검색할 수 있습니다\">\n              <app-img (click)=\"getAttendList()\" name=\"search\"></app-img>\n            </app-input>\n          </app-col>\n          <app-col size=\"auto\" *ngIf=\"editable.menu_state || editable.my_state\">\n            <app-button (click)=\"safeAdd()\" fill=\"translucent\" >출석등록(검색)</app-button>\n          </app-col>\n          <app-col size=\"auto\" *ngIf=\"editable.menu_state || editable.my_state\" >\n            <app-button (click)=\"qrAdd()\">출석등록QR)</app-button> \n          </app-col>\n        </app-row>\n        <app-table style=\"margin-top: 0;\">\n          <thead>\n            <tr>\n              <th style=\"width: 48px;\">No</th>\n              <th>업체명</th>\n              <th>성명</th>\n              <th>서명일시</th>\n            </tr>\n          </thead>\n          <tbody *ngFor=\"let item of res?.rsMap let i = index\">\n            <tr class=\"button\" (click)=\"userInfo(item)\">\n              <td>{{ i+1 }}</td>\n              <td>{{ item.company_name }}</td>\n              <td>{{ item.user_name }}({{ item.account_id }})</td>\n              <td>{{ item.create_date }}</td>\n            </tr>\n          </tbody>\n        </app-table>\n      </ng-container>\n      <!-- <h5>\n        <app-row>\n          <app-col>첨부 자료</app-col>\n          <app-col size=\"auto\" *ngIf=\"permission.edit\">\n            <app-button>\n              첨부\n              <app-file view_type=\"SAFETY_MEETING\" [(ngModel)]=\"form.file_data\" [file]=\"form.file\" [file_json]=\"form.file_json\" [multiple]=\"true\"></app-file>\n            </app-button>\n          </app-col>\n        </app-row>\n      </h5>\n    \n      <app-file-preview *ngFor=\"let item of form.file_data; let i = index;\" [futItem]=\"item\" (buttonClick)=\"form.file_data.splice(i, 1)\" [readonly]=\"!permission.edit\"></app-file-preview> -->\n    \n      <!-- <app-approval-comment [approval_comment]=\"approval_comment\"></app-approval-comment> -->\n  \n    <!-- </app-approval-document> -->\n    \n  </ion-content>\n</ng-container>\n\n\n\n<!-- 모바일 교육정보/출석현황 탭 -->\n<ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>회의 현황</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\" *ngIf=\"safety_meeting_id\">\n      <ion-segment color=\"primary\" [value]=\"1\" >\n        <ion-segment-button (click)=\"editable.safetyMenu = 1\" [value]=\"1\">회의정보</ion-segment-button>\n        <ion-segment-button (click)=\"editable.safetyMenu = 2\" [value]=\"2\">회의사진</ion-segment-button>\n        <ion-segment-button (click)=\"editable.safetyMenu = 3\" [value]=\"3\">출석현황</ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ng-container *ngIf=\"editable.safetyMenu === 1\">\n      <app-row>\n        <app-col>\n          <h4>기본정보</h4>\n        </app-col>\n      </app-row>\n\n      <app-card>\n        <app-row>\n          <app-col>\n            <app-input [disabled]=\"true\" name=\"edustate\" [label]=\"languagePack.getText('현장명')\" [value]=\"form.project_name\"></app-input>\n          </app-col>\n        </app-row>\n      </app-card>\n      \n      <app-card>\n        <app-row>\n          <app-col>\n            <app-input [disabled]=\"true\" name=\"edustate\" label=\"회의상태\" [(ngModel)]=\"form.safety_meeting_state\"></app-input>\n          </app-col>\n        </app-row>\n      </app-card>\n\n      <app-card>\n        <app-row>\n          <app-col>\n            <app-input name=\"create\" [disabled]=\"true\" label=\"개설자\" [value]=\"form.safety_meeting_id ? (form.user_name) : (user.userData.user_name + ' / ' + user.userData.belong_data.company_name)\"></app-input>\n          </app-col>\n        </app-row>\n      </app-card>\n\n      <app-card>\n        <app-row>\n          <app-col>\n              <app-input [disabled]=\"true\" label=\"개설일\" name=\"createdata\" [(ngModel)]=\"form.create_date\"></app-input>\n          </app-col>\n        </app-row>\n      </app-card>\n      \n      <app-card>\n        <app-row>\n          <app-col>\n            <!-- <app-select-education [disabled]=\"editable.update ? false : (!editable.menu_state && !editable.my_state)\" [required]=\"true\" (change)=\"educationText($event)\" name=\"safe\" [(ngModel)]=\"form.ctgo_education_safe_id\"></app-select-education> -->\n            <app-select (ngModelChange)=\"changeType($event)\" [required]=\"true\" label=\"회의유형\" [(ngModel)]=\"form.safety_meeting_type_text\" [disabled]=\"editable.my_state ? false : (safety_meeting_id)\">\n              <app-select-option value=\"직접입력\">직접입력</app-select-option>\n              <app-select-option value=\"안전\">{{ languagePack.getText('안전 및 보건에 관한 협의체 회의록') }}</app-select-option>\n              <app-select-option value=\"노사\">{{ languagePack.getText('노사 협의체 회의록') }}</app-select-option>\n              <app-select-option value=\"산업\">{{ languagePack.getText('산업안전보건위원회 회의록') }}</app-select-option>\n            </app-select>\n          </app-col>\n        </app-row>\n      </app-card>\n\n      <app-card>\n        <app-row>\n          <app-col>\n            <app-calendar [disabled]=\"editable.my_state ? false : (safety_meeting_id)\" name=\"create_date\" label=\"회의일\" [required]=\"true\" [required]=\"true\" [(ngModel)]=\"form.safety_meeting_date\"></app-calendar>\n          </app-col>\n        </app-row>\n      </app-card>\n\n      <app-card>\n        <app-row>\n          <app-col>\n            <app-input [disabled]=\"editable.my_state ? false : (safety_meeting_id)\" placeholder=\"회의장소를 입력해주세요\" name=\"education_safe_place\" [required]=\"true\" label=\"회의장소\" [(ngModel)]=\"form.safety_meeting_place\"></app-input>\n          </app-col>\n        </app-row>\n      </app-card>\n\n      <app-card>\n        <app-row>\n          <app-col>\n            <app-datetime [disabled]=\"editable.my_state ? false : (safety_meeting_id)\" [required]=\"true\" name=\"education_safe_start_time\" label=\"회의시작시간\" \n            [(ngModel)]=\"form.safety_meeting_start_time\">\n            </app-datetime>\n          </app-col>\n        </app-row>\n\n        <app-row>\n          <app-col>\n            <app-datetime [disabled]=\"editable.my_state ? false : (safety_meeting_id)\" [required]=\"true\" name=\"education_safe_end_time\" label=\"회의종료시간\" \n            [(ngModel)]=\"form.safety_meeting_end_time\">\n            </app-datetime>\n          </app-col>\n        </app-row>\n      </app-card>\n\n      <app-card>\n        <app-row>\n          <app-col>\n            <app-textarea [required]=\"true\" [readonly]=\"editable.my_state ? false : (safety_meeting_id)\" placeholder=\"협의사항을 입력해주세요\" label=\"협의내용\" name=\"safety_meeting_content\" [rows]=\"10\" [(ngModel)]=\"form.safety_meeting_content\"></app-textarea>\n          </app-col>\n        </app-row>\n      </app-card>\n\n      <app-card>\n        <app-row>\n          <app-col>\n            <app-textarea [readonly]=\"editable.my_state ? false : (safety_meeting_id)\" placeholder=\"의결사항을 입력해주세요\" label=\"의결사항\" name=\"safety_meeting_resolve\" [rows]=\"10\" [(ngModel)]=\"form.safety_meeting_resolve\"></app-textarea>\n          </app-col>\n        </app-row>\n      </app-card>\n      \n      <app-card>\n        <app-row>\n          <app-col>\n            <app-textarea [readonly]=\"editable.my_state ? false : (safety_meeting_id)\" placeholder=\"기타사항을 입력해주세요\" label=\"기타사항\" name=\"safety_meeting_etc\" [rows]=\"10\" [(ngModel)]=\"form.safety_meeting_etc\"></app-textarea>\n          </app-col>\n        </app-row>\n      </app-card>\n      \n      <!-- <app-row>\n        <app-col>\n          첨부자료\n        </app-col>\n        <app-col size=\"auto\" *ngIf=\"editable.update ? true : (editable.menu_state || editable.my_state)\">\n          <app-button fill=\"translucent\">추가\n            <app-file [limit]=\"2\" name=\"input\" view_type=\"EDU\"\n            [(ngModel)]=\"form.education_safe_file_data\" \n            [file]=\"form.file\" \n            [file_json]=\"form.file_json\" [multiple]=\"true\"></app-file>\n          </app-button>\n        </app-col>\n      </app-row>\n      <app-file-preview type=\"full\" [readonly]=\"editable.update ? false : (!editable.menu_state && !editable.my_state)\"  *ngFor=\"let futItem of form.education_safe_file_data; let i = index\" [futItem]=\"futItem\"  \n      (buttonClick)=\"form.education_safe_file_data.splice(i,1)\"></app-file-preview> -->\n    </ng-container>\n\n    <ng-container *ngIf=\"editable.safetyMenu === 2\">\n      <app-row style=\"align-items: flex-start;\">\n        <app-col>\n          <ion-toolbar color=\"white\">\n            <app-row>\n              <app-col>\n                <h5>회의사진</h5>\n              </app-col>\n              <app-col *ngIf=\"editable.my_state\" size=\"auto\">\n                <app-button>추가\n                  <app-file name=\"input\" view_type=\"SAFETY_ONE\" [(ngModel)]=\"form.safety_meeting_file_data\" [file]=\"form.file\"\n                    [file_json]=\"form.file_json\"></app-file>\n                </app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <ng-container *ngFor=\"let futItem of form.safety_meeting_file_data; let i = index\">\n            <app-file-preview type=\"full\" *ngIf=\"futItem.view_type === 'SAFETY_ONE'\" [futItem]=\"futItem\"\n              (buttonClick)=\"form.safety_meeting_file_data.splice(i,1)\" [readonly]=\"editable.my_state ? false : (safety_meeting_id)\"></app-file-preview>\n          </ng-container>\n        </app-col>\n      </app-row>\n\n      <app-row style=\"align-items: flex-start;\">\n        <app-col>\n          <ion-toolbar color=\"white\">\n            <app-row>\n              <app-col>\n                <h5></h5>\n              </app-col>\n              <app-col *ngIf=\"editable.my_state\" size=\"auto\">\n                <app-button>추가\n                  <app-file name=\"input\" view_type=\"SAFETY_TWO\" [(ngModel)]=\"form.safety_meeting_file_data\" [file]=\"form.file\"\n                    [file_json]=\"form.file_json\"></app-file>\n                </app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <ng-container *ngFor=\"let futItem of form.safety_meeting_file_data; let i = index\">\n            <app-file-preview type=\"full\" *ngIf=\"futItem.view_type === 'SAFETY_TWO'\" [futItem]=\"futItem\"\n              (buttonClick)=\"form.safety_meeting_file_data.splice(i,1)\" [readonly]=\"editable.my_state ? false : (safety_meeting_id)\"></app-file-preview>\n          </ng-container>\n        </app-col>\n      </app-row>\n    </ng-container>\n\n    <ng-container *ngIf=\"editable.safetyMenu === 3\">\n      <app-card>\n        <app-row>\n          <app-col>\n            <h4>현황 : 총 {{ res?.rsObj?.row_count || 0 }}명</h4>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-input [(ngModel)]=\"attentForm.search_text\" placeholder=\"출석한 근로자를 검색할 수 있습니다\">\n              <app-img (click)=\"getAttendList()\" name=\"search\"></app-img>\n            </app-input>\n          </app-col>\n        </app-row>\n      </app-card>\n      <ion-row>\n        <ion-col *ngFor=\"let item of res?.rsMap\" size=\"6\">\n          <app-card [button]=\"true\" (click)=\"userInfo(item)\" style=\"height: 85%;\">\n            <app-row>\n              <app-col>\n                <h5>{{ item.user_name }}({{ item.account_id }})</h5>\n              </app-col>\n            </app-row>\n            <app-line></app-line>\n            <app-row>\n              <app-col>\n                <h6>{{ languagePack.getText('업체명') }}</h6>\n                <h5>{{ item.company_name }}</h5>\n                <h6>{{ languagePack.getText('직종') }}</h6>\n                <h5>{{ item.ctgo_occupation_name }}</h5>\n              </app-col>\n            </app-row>\n          </app-card>\n        </ion-col>\n        <ion-col size=\"6\">\n          <app-card *ngIf=\"editable.menu_state || editable.my_state\" style=\"background-color: var(--ion-color-medium-translucent); height: 85%;\" (click)=\"qrAdd()\">\n            <app-row>\n              <app-col size=\"auto\">\n                <app-img name=\"tag\"></app-img>\n              </app-col>\n              <app-col>\n              </app-col>\n            </app-row>\n            <app-line></app-line>\n            <app-row>\n              <app-col style=\"text-align: center;\">\n                <h5>QR코드를 근로자에게<br> 인식 시켜주세요</h5>\n              </app-col>\n            </app-row>\n          </app-card>\n        </ion-col>\n      </ion-row>\n    </ng-container>\n  </ion-content>\n  <app-button-footer *ngIf=\"safety_meeting_id && (editable.safetyMenu === 1 || editable.safetyMenu === 2)\">\n    <app-button *ngIf=\"editable.my_state\" (click)=\"updateItem()\" fill=\"translucent\">{{ languagePack.getText('수정') }}</app-button>\n    <app-button *ngIf=\"editable.my_state\" (click)=\"deleteItem()\" color=\"danger\" fill=\"translucent\">{{ languagePack.getText('삭제') }}</app-button>\n  </app-button-footer>\n  <app-button-footer *ngIf=\"!safety_meeting_id\">\n    <app-button (click)=\"submit()\">저장</app-button>\n  </app-button-footer>\n  <app-button-footer *ngIf=\"editable.menu_state && editable.safetyMenu === 3\">\n    <app-button *ngIf=\"editable.safetyMenu === 3\" (click)=\"safeAdd()\" fill=\"translucent\" >출석등록(검색)</app-button>\n    <app-button *ngIf=\"editable.safetyMenu === 3\" (click)=\"qrAdd()\">출석등록QR)</app-button>\n  </app-button-footer>\n</ng-container>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_work-plan_work-minutes_worker-minutes-edit_worker-minutes-edit_page_ts.js.map