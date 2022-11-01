(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_project-management_scene-management_scene-edit_scene-edit_module_ts"],{

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

/***/ 31804:
/*!****************************************************!*\
  !*** ./src/app/basic/service/util/daum.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaumService": () => (/* binding */ DaumService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_component_dialog_daum_daum_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/basic/component/dialog/daum/daum.component */ 13604);




let DaumService = class DaumService {
    constructor(modal) {
        this.modal = modal;
    }
    present() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: src_app_basic_component_dialog_daum_daum_component__WEBPACK_IMPORTED_MODULE_0__.DaumComponent
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            return data;
        });
    }
    open() {
        return new Promise(res => {
            new daum.Postcode({
                oncomplete: (data) => {
                    // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
                    // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                    // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                    var addr = ''; // 주소 변수
                    var extraAddr = ''; // 참고항목 변수
                    //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                    if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                        addr = data.roadAddress;
                    }
                    else { // 사용자가 지번 주소를 선택했을 경우(J)
                        addr = data.jibunAddress;
                    }
                    // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                    if (data.userSelectedType === 'R') {
                        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                            extraAddr += data.bname;
                        }
                        // 건물명이 있고, 공동주택일 경우 추가한다.
                        if (data.buildingName !== '' && data.apartment === 'Y') {
                            extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                        }
                        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                        if (extraAddr !== '') {
                            extraAddr = ' (' + extraAddr + ')';
                        }
                    }
                    // 우편번호와 주소 정보를 해당 필드에 넣는다.
                    res({
                        zoneCode: data.zonecode,
                        address: addr + extraAddr, //주소 + 참고항목
                    });
                }
            }).open();
        });
    }
};
DaumService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
DaumService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DaumService);



/***/ }),

/***/ 74161:
/*!********************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/organization-select/organization-select-routing.module.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizationSelectPageRoutingModule": () => (/* binding */ OrganizationSelectPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _organization_select_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organization-select.page */ 52173);




const routes = [
    {
        path: '',
        component: _organization_select_page__WEBPACK_IMPORTED_MODULE_0__.OrganizationSelectPage
    }
];
let OrganizationSelectPageRoutingModule = class OrganizationSelectPageRoutingModule {
};
OrganizationSelectPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrganizationSelectPageRoutingModule);



/***/ }),

/***/ 67032:
/*!************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/organization-select/organization-select.module.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizationSelectPageModule": () => (/* binding */ OrganizationSelectPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _organization_select_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organization-select-routing.module */ 74161);
/* harmony import */ var _organization_select_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organization-select.page */ 52173);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let OrganizationSelectPageModule = class OrganizationSelectPageModule {
};
OrganizationSelectPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _organization_select_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrganizationSelectPageRoutingModule
        ],
        declarations: [_organization_select_page__WEBPACK_IMPORTED_MODULE_1__.OrganizationSelectPage]
    })
], OrganizationSelectPageModule);



/***/ }),

/***/ 52173:
/*!**********************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/organization-select/organization-select.page.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganizationSelectPage": () => (/* binding */ OrganizationSelectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_organization_select_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./organization-select.page.html */ 16835);
/* harmony import */ var _organization_select_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organization-select.page.scss */ 36073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/basic.animation */ 56503);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);







class RegionalItem {
}
class BusinessItem {
}
let OrganizationSelectPage = class OrganizationSelectPage {
    constructor(connect, _modal) {
        this.connect = connect;
        this._modal = _modal;
        this.retrunData = {
            regName: '',
            regId: 0,
            busName: '',
            busId: 0
        };
    }
    ngOnInit() {
        this.regional();
    }
    regional() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.regionalItem = yield this.connect.run('/category/organization/regional/get');
            if (this.regionalItem.rsCode === 0) { }
        });
    }
    business(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.level1selectedItem = item;
            this.businessItem = yield this.connect.run('/category/organization/business/get', { hq_regional_id: item.hq_regional_id });
            if (this.businessItem.rsCode === 0) { }
        });
    }
    submit() {
        this._modal.dismiss({
            level1selectedItem: this.level1selectedItem,
            level2selectedItem: this.level2selectedItem
        });
    }
};
OrganizationSelectPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
OrganizationSelectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-organization-select',
        template: _raw_loader_organization_select_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [src_app_basic_basic_animation__WEBPACK_IMPORTED_MODULE_2__.listAnimation],
        styles: [_organization_select_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrganizationSelectPage);



/***/ }),

/***/ 53482:
/*!**************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/scene-edit/scene-edit-routing.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneEditPageRoutingModule": () => (/* binding */ SceneEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _scene_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene-edit.page */ 83196);




const routes = [
    {
        path: '',
        component: _scene_edit_page__WEBPACK_IMPORTED_MODULE_0__.SceneEditPage
    }
];
let SceneEditPageRoutingModule = class SceneEditPageRoutingModule {
};
SceneEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SceneEditPageRoutingModule);



/***/ }),

/***/ 72137:
/*!******************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/scene-edit/scene-edit.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneEditPageModule": () => (/* binding */ SceneEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _scene_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene-edit-routing.module */ 53482);
/* harmony import */ var _scene_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene-edit.page */ 83196);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _organization_select_organization_select_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organization-select/organization-select.module */ 67032);










let SceneEditPageModule = class SceneEditPageModule {
};
SceneEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_2__.BasicComponentModule,
            _scene_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.SceneEditPageRoutingModule,
            _organization_select_organization_select_module__WEBPACK_IMPORTED_MODULE_4__.OrganizationSelectPageModule
        ],
        declarations: [_scene_edit_page__WEBPACK_IMPORTED_MODULE_1__.SceneEditPage]
    })
], SceneEditPageModule);



/***/ }),

/***/ 83196:
/*!****************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/scene-edit/scene-edit.page.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetail": () => (/* binding */ ProjectDetail),
/* harmony export */   "SceneEditPage": () => (/* binding */ SceneEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_scene_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./scene-edit.page.html */ 62005);
/* harmony import */ var _scene_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene-edit.page.scss */ 9157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_component_input_naver_map_naver_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/component/input/naver-map/naver-map.component */ 85409);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/util/date.service */ 46879);
/* harmony import */ var src_app_basic_service_util_daum_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/basic/service/util/daum.service */ 31804);
/* harmony import */ var src_app_component_modal_project_area_set_project_area_set_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/component/modal/project-area-set/project-area-set.component */ 49870);
/* harmony import */ var _organization_select_organization_select_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../organization-select/organization-select.page */ 52173);















class ProjectDetail {
    constructor() {
        this.project_file_data = [];
        this.file = [];
        this.file_json = new src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_4__.FileJson();
        this.company_data = [];
        this.gps_coordinate_data = new src_app_basic_component_input_naver_map_naver_map_component__WEBPACK_IMPORTED_MODULE_2__.GpsCoordinateData();
    }
}
let SceneEditPage = class SceneEditPage {
    constructor(connect, _modal, daum, Date, user, alert, changeRef, toast) {
        this.connect = connect;
        this._modal = _modal;
        this.daum = daum;
        this.Date = Date;
        this.user = user;
        this.alert = alert;
        this.changeRef = changeRef;
        this.toast = toast;
        this.contractor_id = null;
        this.supervision_id = null;
        this.organization_data = {
            company_type: '',
            company_id: []
        };
        this.supervision_data = {
            company_type: '',
            company_id: []
        };
        this.today = this.Date.today();
        this.form = new ProjectDetail();
        this.ctgo_Business = [];
        this.organization = {
            id: 0,
            name: '',
            type: '지역' || 0
        };
        this.roleCheck = true;
    }
    ngOnInit() {
        this.ctgoBusiness();
        if (this.project_id) {
            this.getItem();
            this.title = '상세';
        }
        else {
            this.title = '등록';
            this.roleCheck = false;
            this.contractor_id = [];
            this.supervision_id = [];
        }
    }
    getItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/project/detail', {
                project_id: this.project_id
            }, {
                parse: ['project_file_data', 'gps_coordinate_data']
            });
            if (res.rsCode === 0) {
                this.form = Object.assign(Object.assign({}, this.form), res.rsObj);
                if ((this.form.create_user_id === this.user.userData.user_id) ||
                    (this.user.userData.user_role === 'LH_HEAD')) {
                    this.roleCheck = false;
                }
                if (res.rsObj.company_data) {
                    this.contractor_id = [];
                    this.supervision_id = [];
                    let josncompany = res.rsObj.company_data ? JSON.parse(res.rsObj.company_data) : [];
                    for (let i = 0; i < josncompany.length; i++) {
                        if (josncompany[i].company_contract_type === '원청사') {
                            for (let x = 0; x < josncompany[i].company_data.length; x++) {
                                this.contractor_id.push(josncompany[i].company_data[x].company_id);
                            }
                        }
                        else {
                            for (let x = 0; x < josncompany[i].company_data.length; x++) {
                                this.supervision_id.push(josncompany[i].company_data[x].company_id);
                            }
                        }
                    }
                }
                // this.contractor_id = "테스트";
                if (res.rsObj.gps_state === 1) {
                    this.form.gps_state_con = '설정됨';
                }
                else {
                    this.form.gps_state_con = '설정 안됨';
                }
                this.organization.name = res.rsObj.hq_regional_name + ', ' + res.rsObj.hq_business_name;
                this.changeRef.detectChanges();
            }
        });
    }
    sceneInsert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // if(!this.form.hq_regional_id) return this.toast.present({message:'지역본부를 설정해 주세요.', color:'warning'});
            // if(!this.form.hq_business_id) return this.toast.present({message:'사업본부를 설정해 주세요.', color:'warning'});
            if (!this.form.project_name)
                return this.toast.present({ message: '현장명을 입력해 주세요.', color: 'warning' });
            // if(!this.contractor_id.length) return this.toast.present({message:'원창사를 선택해 주세요.', color:'warning'});
            // if(!this.supervision_id.length) return this.toast.present({message:'감리사를 선택해 주세요.', color:'warning'});
            if (!this.form.contract_start_date)
                return this.toast.present({ message: '공사시작를 설정해 주세요.', color: 'warning' });
            if (!this.form.contract_end_date)
                return this.toast.present({ message: '공사종료를 설정해 주세요.', color: 'warning' });
            if (!this.form.construction_amount)
                return this.toast.present({ message: '공사금액를 설정해 주세요.', color: 'warning' });
            if (!this.form.ctgo_business_field_id)
                return this.toast.present({ message: '공사분야를 설정해 주세요.', color: 'warning' });
            if (!this.form.project_address)
                return this.toast.present({ message: '주소를 설정해 주세요.', color: 'warning' });
            if (!this.form.gps_coordinate_data)
                return this.toast.present({ message: '현장영역를 설정해 주세요.', color: 'warning' });
            const alert = yield this.alert.present({
                message: '저장 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                            this.form.company_data = [];
                            this.form.company_data.push({
                                company_type: '원청사',
                                company_id: this.contractor_id
                            });
                            this.form.company_data.push({
                                company_type: '감리사',
                                company_id: this.supervision_id
                            });
                            if (this.form.gps_coordinate_data) {
                                this.form.gps_state = 1;
                            }
                            // this.form.gps_coordinate_data = this.mapData;
                            const res = yield this.connect.run('/project/insert', this.form);
                            if (res.rsCode === 0) {
                                this._modal.dismiss('Y');
                            }
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    sceneUpdate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.form.company_data = [];
            // if(!this.form.hq_regional_id) return this.toast.present({message:'지역본부를 설정해 주세요.',color:'warning'});
            // if(!this.form.hq_business_id) return this.toast.present({message:'사업본부를 설정해 주세요.',color:'warning'});
            if (!this.form.project_name)
                return this.toast.present({ message: '현장명을 입력해 주세요.', color: 'warning' });
            // if(!this.contractor_id.length) return this.toast.present({message:'원창사를 선택해 주세요.',color:'warning'});
            // if(!this.supervision_id.length) return this.toast.present({message:'감리사를 선택해 주세요.',color:'warning'});
            if (!this.form.contract_start_date)
                return this.toast.present({ message: '공사시작를 설정해 주세요.', color: 'warning' });
            if (!this.form.contract_end_date)
                return this.toast.present({ message: '공사종료를 설정해 주세요.', color: 'warning' });
            if (!this.form.construction_amount)
                return this.toast.present({ message: '공사금액를 설정해 주세요.', color: 'warning' });
            if (!this.form.ctgo_business_field_id)
                return this.toast.present({ message: '공사분야를 설정해 주세요.', color: 'warning' });
            if (!this.form.project_address)
                return this.toast.present({ message: '주소를 설정해 주세요.', color: 'warning' });
            if (!this.form.gps_coordinate_data)
                return this.toast.present({ message: '현장영역를 설정해 주세요.', color: 'warning' });
            // console.log(this.form.gps_coordinate_data);
            const alert = yield this.alert.present({
                message: '수정 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                            this.form.company_data.push({
                                company_type: '원청사',
                                company_id: this.contractor_id
                            });
                            this.form.company_data.push({
                                company_type: '감리사',
                                company_id: this.supervision_id
                            });
                            if (this.form.gps_coordinate_data) {
                                this.form.gps_state = 1;
                            }
                            const res = yield this.connect.run('/project/update', this.form, {});
                            if (res.rsCode === 0) {
                                this._modal.dismiss('Y');
                            }
                        })
                    }
                ]
            });
            alert.present();
        });
    }
    organizationSel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // if(!this.roleCheck){
            const modal = yield this._modal.create({
                component: _organization_select_organization_select_page__WEBPACK_IMPORTED_MODULE_11__.OrganizationSelectPage
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.organization.name = data.level1selectedItem.hq_regional_name + ', ' + data.level2selectedItem.hq_business_name;
                this.form.hq_regional_id = data.level1selectedItem.hq_regional_id;
                this.form.hq_business_id = data.level2selectedItem.hq_business_id;
            }
            // }
        });
    }
    address() {
        this.daum.open().then((item) => {
            if (item) {
                this.form.project_address = item.address;
                this.form.project_postal_code = item.zoneCode;
            }
        });
    }
    project_area_set() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // if(!this.roleCheck) {
            const modal = yield this._modal.create({
                component: src_app_component_modal_project_area_set_project_area_set_component__WEBPACK_IMPORTED_MODULE_10__.ProjectAreaSetComponent,
                componentProps: {
                    gps_coordinate_data: this.form.gps_coordinate_data,
                    disabled: this.roleCheck
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                if (this.project_id) {
                    this.form.gps_state = 1;
                }
                this.form.gps_coordinate_data = data;
            }
            // }
        });
    }
    ctgoBusiness() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/category/business_field/get', {}, {});
            if (res.rsCode === 0) {
                this.ctgo_Business = res.rsMap;
            }
        });
    }
};
SceneEditPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: src_app_basic_service_util_daum_service__WEBPACK_IMPORTED_MODULE_9__.DaumService },
    { type: src_app_basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_8__.DateService },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService }
];
SceneEditPage.propDecorators = {
    project_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Input }]
};
SceneEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-scene-edit',
        template: _raw_loader_scene_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_scene_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SceneEditPage);



/***/ }),

/***/ 36073:
/*!************************************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/organization-select/organization-select.page.scss ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("app-table td {\n  text-align: center;\n  font-size: var(--font-size-h6);\n}\n\n.col-header-class {\n  background: #dedede;\n}\n\n.flex-box {\n  display: flex;\n}\n\n.flex-box .flex-revers {\n  flex-direction: column;\n  flex: 0 0 50%;\n}\n\n.flex-box .flex-revers .flex-header {\n  background: var(--ion-color-medium-translucent);\n  height: 40px;\n  text-align: center;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.flex-box .flex-revers .flex-header app-img {\n  position: absolute;\n  right: -10px;\n  z-index: 1;\n}\n\n.flex-box .flex-revers .flex-list {\n  height: 550px;\n  overflow: auto;\n  background: white;\n  border-right: 1px solid var(--ion-color-step-100);\n}\n\n.flex-box .flex-revers .flex-list:nth-child(4) {\n  border-right: none;\n}\n\n.flex-box .flex-revers .flex-item {\n  padding: 5px;\n  cursor: pointer;\n}\n\n.flex-box .flex-revers .flex-item:hover {\n  background: var(--ion-color-step-100);\n}\n\n.selected {\n  background-color: var(--ion-color-primary-translucent);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZ2FuaXphdGlvbi1zZWxlY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUFoQzs7QUFJQTtFQUNDLG1CQUFtQjtBQURwQjs7QUFJQTtFQUNDLGFBQWE7QUFEZDs7QUFBQTtFQUtFLHNCQUFzQjtFQUN0QixhQUFhO0FBRGY7O0FBTEE7RUFTRywrQ0FBK0M7RUFDL0MsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFBMUI7O0FBZkE7RUFpQkksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0FBRWQ7O0FBckJBO0VBd0JHLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlEQUFpRDtBQUNwRDs7QUE1QkE7RUE4Qkksa0JBQWtCO0FBRXRCOztBQWhDQTtFQW1DRyxZQUFZO0VBQ1osZUFBZTtBQUNsQjs7QUFyQ0E7RUF1Q0cscUNBQXFDO0FBRXhDOztBQUVBO0VBQ0Msc0RBQXNEO0FBQ3ZEIiwiZmlsZSI6Im9yZ2FuaXphdGlvbi1zZWxlY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXRhYmxlIHtcblx0dGQge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oNik7XG5cdH1cbn1cblxuLmNvbC1oZWFkZXItY2xhc3N7XG5cdGJhY2tncm91bmQ6ICNkZWRlZGU7XG59XG5cbi5mbGV4LWJveCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdFxuXG5cdC5mbGV4LXJldmVycyB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRmbGV4OiAwIDAgNTAlO1xuXG5cdFx0LmZsZXgtaGVhZGVye1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10cmFuc2x1Y2VudCk7XG5cdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0YXBwLWltZyB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0cmlnaHQ6IC0xMHB4O1xuXHRcdFx0XHR6LWluZGV4OiAxO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5mbGV4LWxpc3Qge1xuXHRcdFx0aGVpZ2h0OiA1NTBweDtcblx0XHRcdG92ZXJmbG93OiBhdXRvO1xuXHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuXG5cdFx0XHQmOm50aC1jaGlsZCg0KSB7XG5cdFx0XHRcdGJvcmRlci1yaWdodDogbm9uZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQuZmxleC1pdGVtIHtcblx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHR9XG5cdFx0LmZsZXgtaXRlbTpob3ZlciB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuXHRcdH1cblx0fVxufVxuLnNlbGVjdGVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdHJhbnNsdWNlbnQpO1xufSJdfQ== */");

/***/ }),

/***/ 9157:
/*!******************************************************************************************!*\
  !*** ./src/app/page/project-management/scene-management/scene-edit/scene-edit.page.scss ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2VuZS1lZGl0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 16835:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/scene-management/organization-select/organization-select.page.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>조직기구 설정</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  \n  <div>\n\n        <app-input placeholder=\"검색어를 입력해 주세요.\">\n          <app-img name=\"search\"></app-img>\n        </app-input>\n\n  <div class=\"flex-box\">\n\n    <div class=\"flex-revers\">\n      <!-- header -->\n      <div class=\"flex-header\">\n        <div>Level1</div>\n        <app-img name=\"next\"></app-img>\n      </div>\n      <div class=\"flex-list\" >\n        <!-- item -->\n        <div *ngFor=\"let item of regionalItem?.rsMap\" class=\"flex-item\" [class.selected]=\"level1selectedItem === item\" (click)=\"business(item)\">\n          {{item.hq_regional_name }}\n        </div>\n        </div>\n    </div>\n  \n    <div class=\"flex-revers\">\n      <!-- header -->\n      <div class=\"flex-header\">\n        <div>Level2</div>\n      </div>\n      <div class=\"flex-list\">\n        <div *ngFor=\"let item of businessItem?.rsMap\"  class=\"flex-item\" [class.selected]=\"level2selectedItem === item\"  (click)=\"level2selectedItem = item\">\n          <!-- item -->\n          {{ item.hq_business_name}}\n        </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<app-button-footer>\n  <app-button (click)=\"submit()\">적용</app-button>\n</app-button-footer>\n");

/***/ }),

/***/ 62005:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/project-management/scene-management/scene-edit/scene-edit.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>현장{{title}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h4>현장 개요</h4>\n  <app-row mobileBreak>\n    <app-col>\n      <!-- <app-input [required]=\"true\" (click)=\"organizationSel()\" [disabled]=\"roleCheck\" [(ngModel)]=\"organization.name\" [readonly]=\"true\"\n        label=\"조직기구\">\n        <app-img name=\"search\"></app-img>\n      </app-input> -->\n      <app-input label=\"사업지구\" value=\"수원당수\" [disabled]=\"true\"></app-input>\n    </app-col>\n    <app-col>\n      <app-input [required]=\"true\" [(ngModel)]=\"form.project_name\" [disabled]=\"roleCheck\" label=\"현장명\"></app-input>\n    </app-col>\n  </app-row>\n  <app-row mobileBreak>\n    <app-col>\n      <app-row>\n        <app-col>\n          <app-select-project-contractor *ngIf=\"contractor_id !== null\" [disabled]=\"true\" [(ngModel)]=\"contractor_id\">\n          </app-select-project-contractor>\n        </app-col>\n      </app-row>\n    </app-col>\n    <app-col>\n      <app-row>\n        <app-col>\n          <app-select-supervision *ngIf=\"supervision_id !== null\" [disabled]=\"true\" [(ngModel)]=\"supervision_id\"></app-select-supervision>\n        </app-col>\n      </app-row>\n    </app-col>\n  </app-row>\n  <app-row mobileBreak>\n    <app-col style=\"display: flex;align-items: baseline;\">\n      <app-calendar [disabled]=\"roleCheck\" label=\"공사시작날짜\" [required]=\"true\" [(ngModel)]=\"form.contract_start_date\" style=\"width: 100%;\"\n        [max]=\"form.contract_end_date\">\n      </app-calendar>\n      <span>&nbsp;~&nbsp;</span>\n      <app-calendar [disabled]=\"roleCheck\" label=\"공사종료날짜\" [required]=\"true\" [(ngModel)]=\"form.contract_end_date\" style=\"width: 100%;\"\n        [min]=\"form.contract_start_date\">\n      </app-calendar>\n    </app-col>\n    <app-col>\n      <app-input [disabled]=\"roleCheck\" [required]=\"true\" type=\"number\" [(ngModel)]=\"form.construction_amount\" label=\"공사금액\"></app-input>\n    </app-col>\n  </app-row>\n  <app-row mobileBreak>\n    <app-col>\n      <app-select [disabled]=\"roleCheck\" [required]=\"true\" [(ngModel)]=\"form.ctgo_business_field_id\" label=\"사업분야\">\n        <app-select-option *ngFor=\"let opt of ctgo_Business\" [value]=\"opt.ctgo_business_field_id\"> {{\n          opt.ctgo_business_field_name }}</app-select-option>\n      </app-select>\n    </app-col>\n    <app-col>\n      <app-input [disabled]=\"roleCheck\" [(ngModel)]=\"form.construction_content\" label=\"공사내용\"></app-input>\n    </app-col>\n  </app-row>\n  <app-row mobileBreak>\n    <!-- <app-col size=\"1\">\n      <app-input [readonly]=\"true\" [required]=\"true\" [(ngModel)]=\"form.project_postal_code\" label=\"우편번호\" (click)=\"address()\">\n      </app-input>\n    </app-col> -->\n    <app-col size=\"3\">\n      <app-input placeholder=\"주소를 검색해주세요.\" [disabled]=\"roleCheck\" [required]=\"true\" [readonly]=\"true\" [(ngModel)]=\"form.project_address\" (click)=\"address()\"\n        label=\"주소\"></app-input>\n    </app-col>\n    <app-col size=\"3\">\n      <app-input [disabled]=\"roleCheck\" [required]=\"true\" [(ngModel)]=\"form.project_detail_address\" label=\"상세주소\"></app-input>\n    </app-col>\n    <app-col>\n      <app-input [disabled]=\"roleCheck\" [required]=\"true\"\n      [value]=\"form.gps_coordinate_data?.gps_latitude?.length ? '설정됨' : ''\" [readonly]=\"true\" (click)=\"project_area_set()\"\n        label=\"현장 영역\">\n      </app-input>\n    </app-col>\n  </app-row>\n\n  <app-row style=\"align-items: flex-start;\">\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <app-row>\n          <app-col>\n            <h5>조감도</h5>\n          </app-col>\n          <app-col *ngIf=\"!roleCheck\" size=\"auto\">\n            <app-button>추가\n              <app-file name=\"input\" view_type=\"BIRDSEYE\" [(ngModel)]=\"form.project_file_data\" [file]=\"form.file\"\n                [file_json]=\"form.file_json\"></app-file>\n            </app-button>\n          </app-col>\n        </app-row>\n      </ion-toolbar>\n      <ng-container *ngFor=\"let futItem of form.project_file_data let i = index\">\n        <app-file-preview type=\"full\" *ngIf=\"futItem.view_type === 'BIRDSEYE'\" [futItem]=\"futItem\"\n          (buttonClick)=\"form.project_file_data.splice(i,1)\" [readonly]=\"roleCheck\"></app-file-preview>\n      </ng-container>\n    </app-col>\n    <app-col>\n      <ion-toolbar color=\"white\">\n        <app-row>\n          <app-col>\n            <h5>조직도</h5>\n          </app-col>\n          <app-col *ngIf=\"!roleCheck\" size=\"auto\">\n            <app-button>추가\n              <app-file name=\"input\" view_type=\"FLOOR\" [(ngModel)]=\"form.project_file_data\" [file]=\"form.file\"\n                [file_json]=\"form.file_json\"></app-file>\n            </app-button>\n          </app-col>\n        </app-row>\n      </ion-toolbar>\n      <ng-container *ngFor=\"let futItem of form.project_file_data let i = index\">\n        <app-file-preview type=\"full\" *ngIf=\"futItem.view_type === 'FLOOR'\" [futItem]=\"futItem\"\n          (buttonClick)=\"form.project_file_data.splice(i,1)\" [readonly]=\"roleCheck\"></app-file-preview>\n      </ng-container>\n    </app-col>\n  </app-row>\n\n  <h4>작성 정보</h4>\n  <app-row>\n    <app-col>\n      <app-input [disabled]=\"roleCheck\" [readonly]=\"true\" [value]=\"form.project_id ? form.create_date : today\" label=\"작성일\"></app-input>\n    </app-col>\n    <app-col>\n      <app-input [disabled]=\"roleCheck\" [readonly]=\"true\" [value]=\"form.project_id ? form.create_user_name : user.userData.user_name\" label=\"작성자\"></app-input>\n    </app-col>\n  </app-row>\n</ion-content>\n<app-button-footer>\n  <app-button slot=\"end\" *ngIf=\"!project_id\" (click)=\"sceneInsert()\">저장</app-button>\n  <app-button slot=\"end\" *ngIf=\"project_id && !roleCheck\" fill=\"translucent\" (click)=\"sceneUpdate()\">수정</app-button>\n</app-button-footer> ");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_project-management_scene-management_scene-edit_scene-edit_module_ts.js.map