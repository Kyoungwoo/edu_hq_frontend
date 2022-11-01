(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_safety-education_education-history_safety-education-history-detail_safet-825e38"],{

/***/ 40965:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-history/safety-education-history-detail/safety-education-history-detail-routing.module.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyEducationHistoryDetailPageRoutingModule": () => (/* binding */ SafetyEducationHistoryDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _safety_education_history_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-education-history-detail.page */ 76838);




const routes = [
    {
        path: '',
        component: _safety_education_history_detail_page__WEBPACK_IMPORTED_MODULE_0__.SafetyEducationHistoryDetailPage
    }
];
let SafetyEducationHistoryDetailPageRoutingModule = class SafetyEducationHistoryDetailPageRoutingModule {
};
SafetyEducationHistoryDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SafetyEducationHistoryDetailPageRoutingModule);



/***/ }),

/***/ 64306:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-history/safety-education-history-detail/safety-education-history-detail.module.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafetyEducationHistoryDetailPageModule": () => (/* binding */ SafetyEducationHistoryDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _safety_education_history_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-education-history-detail-routing.module */ 40965);
/* harmony import */ var _safety_education_history_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-education-history-detail.page */ 76838);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);









let SafetyEducationHistoryDetailPageModule = class SafetyEducationHistoryDetailPageModule {
};
SafetyEducationHistoryDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _safety_education_history_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.SafetyEducationHistoryDetailPageRoutingModule
        ],
        declarations: [_safety_education_history_detail_page__WEBPACK_IMPORTED_MODULE_1__.SafetyEducationHistoryDetailPage]
    })
], SafetyEducationHistoryDetailPageModule);



/***/ }),

/***/ 76838:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-history/safety-education-history-detail/safety-education-history-detail.page.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryItem": () => (/* binding */ HistoryItem),
/* harmony export */   "HireEducationItem": () => (/* binding */ HireEducationItem),
/* harmony export */   "RoutineEducationItem": () => (/* binding */ RoutineEducationItem),
/* harmony export */   "SpecialEducationItem": () => (/* binding */ SpecialEducationItem),
/* harmony export */   "SafetyEducationHistoryDetailPage": () => (/* binding */ SafetyEducationHistoryDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_safety_education_history_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./safety-education-history-detail.page.html */ 41640);
/* harmony import */ var _safety_education_history_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-education-history-detail.page.scss */ 79952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_service_education_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/education.service */ 86727);






class HistoryItem {
    constructor() {
        this.user_profile_file_data = [];
    }
}
class HireEducationItem {
}
class RoutineEducationItem {
}
class SpecialEducationItem {
}
let SafetyEducationHistoryDetailPage = class SafetyEducationHistoryDetailPage {
    constructor(connect, education) {
        this.connect = connect;
        this.education = education;
        this.menuCount = 1;
        this.useForm = {
            attendant_user_id: 0,
            limit_no: 0,
            search_text: ''
        };
        this.res = new HistoryItem();
        this.hire = new HireEducationItem();
        this.routine = new RoutineEducationItem();
    }
    ngOnInit() {
        this.getItem();
        this.hireItem();
        this.routineItem();
        this.specialItem();
        this.useItem();
    }
    getItem() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/education/state/user/detail', { attendant_user_id: this.user_id }, {
                parse: ['safe_job_name', 'user_profile_file_data']
            });
            if (res.rsCode === 0) {
                this.res = res.rsObj;
                (_b = (_a = this.res) === null || _a === void 0 ? void 0 : _a.safe_job_name) === null || _b === void 0 ? void 0 : _b.toString();
            }
        });
    }
    hireItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/education/report/hire/get', { approval_user_id: this.user_id });
            if (res.rsCode === 0) {
                this.hire = res.rsObj;
            }
        });
    }
    routineItem() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/education/report/routine/get', { approval_user_id: this.user_id });
            if (res.rsCode === 0) {
                this.routine = res.rsObj;
                this.education.parseEducationHours(this.routine);
            }
        });
    }
    specialItem() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/education/report/special/get', { approval_user_id: this.user_id });
            if (res.rsCode === 0) {
                this.specialRes = res;
                (_a = this.specialRes.rsMap) === null || _a === void 0 ? void 0 : _a.forEach(item => this.education.parseEducationHours(item));
            }
        });
    }
    useItem(limit_no = this.useForm.limit_no) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.useForm.limit_no = limit_no;
            this.useForm.attendant_user_id = this.user_id;
            const res = yield this.connect.run('/education/state/user/list', this.useForm);
            if (res.rsCode === 0) {
                this.useRes = res;
                this.useRes.rsMap.forEach((item, i) => {
                    item.index = res.rsObj.row_count - this.useForm.limit_no - i;
                });
            }
            else {
                this.useRes = null;
            }
        });
    }
};
SafetyEducationHistoryDetailPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_service_education_service__WEBPACK_IMPORTED_MODULE_3__.EducationService }
];
SafetyEducationHistoryDetailPage.propDecorators = {
    user_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
SafetyEducationHistoryDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-safety-education-history-detail',
        template: _raw_loader_safety_education_history_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_safety_education_history_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SafetyEducationHistoryDetailPage);



/***/ }),

/***/ 86727:
/*!**********************************************!*\
  !*** ./src/app/service/education.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationService": () => (/* binding */ EducationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let EducationService = class EducationService {
    constructor() { }
    /** 교육 시간의 시간단위 number값 가져오기 */
    parseEducationHours(item) {
        var _a, _b, _c;
        const completeHourArr = ((_a = item.education_complete_time) === null || _a === void 0 ? void 0 : _a.split(':')) || ['00', '00'];
        item.education_complete_hours = parseInt(completeHourArr[0]) + (parseInt(completeHourArr[1]) / 60);
        const needHourArr = ((_b = item.education_need_time) === null || _b === void 0 ? void 0 : _b.split(':')) || ['00', '00'];
        item.education_need_hours = parseInt(needHourArr[0]) + (parseInt(needHourArr[1]) / 60);
        const recommendHourArr = ((_c = item.recommend_time) === null || _c === void 0 ? void 0 : _c.split(':')) || ['00', '00'];
        item.recommend_hours = parseInt(recommendHourArr[0]) + (parseInt(recommendHourArr[1]) / 60);
    }
};
EducationService.ctorParameters = () => [];
EducationService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], EducationService);



/***/ }),

/***/ 79952:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/page/safety-education/education-history/safety-education-history-detail/safety-education-history-detail.page.scss ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  margin: 0;\n}\n\nh4 {\n  margin: 0;\n}\n\n.education-row {\n  align-items: flex-end;\n}\n\n.education-head-tr th {\n  height: 34px;\n}\n\n.education-body-tr td {\n  height: 44px;\n}\n\n.grp-group .label {\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.grp-group .label .label-inner {\n  margin-left: 4px;\n}\n\n.grp-group .label .circle {\n  width: 16px;\n  height: 16px;\n  border-radius: 8px;\n}\n\n.grp-group .label .circle.one {\n  background-color: var(--ion-color-primary);\n}\n\n.grp-group .label .circle.two {\n  background-color: var(--ion-color-tertiary);\n}\n\n.grp-group .label .label-inner + .circle {\n  margin-left: 8px;\n}\n\n.grp-group .grp-box {\n  height: 44px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.grp-group .grp-item-bar {\n  position: relative;\n  width: 0%;\n  max-width: 100%;\n  height: 16px;\n  margin-top: 2px;\n}\n\n.grp-group .grp-item-bar.one {\n  background: var(--ion-color-primary);\n}\n\n.grp-group .grp-item-bar.two {\n  background: var(--ion-color-tertiary);\n}\n\n.grp-group .grp-item-bar.three {\n  background: var(--ion-color-primary);\n}\n\n.grp-group .grp-item-bar.four {\n  background: var(--ion-color-tertiary);\n}\n\n.grp-group .grp-item-time {\n  text-align: center;\n  color: #444444;\n  font-weight: 400;\n  font-size: var(--font-size-h6-small);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  white-space: nowrap;\n}\n\n.grp-group .grp-bottom-border {\n  background: var(--ion-color-medium);\n  width: 100%;\n  height: 3px;\n  margin-top: 3px;\n}\n\n.grp-time {\n  width: 100%;\n  height: 30%;\n  justify-content: space-between;\n}\n\n.grp-time-pull {\n  width: 100%;\n  height: 30%;\n  display: flex;\n}\n\n.grp-time-pull .first {\n  flex: 1;\n}\n\n.grp-time-pull .second {\n  display: flex;\n  position: relative;\n  flex: 1;\n}\n\n.grp-time-pull .second-one {\n  position: absolute;\n  left: -10px;\n}\n\n.grp-time-pull .second-two {\n  position: absolute;\n  left: -10px;\n}\n\n.grp-time-pull .second-three {\n  position: absolute;\n  right: -10px;\n}\n\n.grp-time-pull .third {\n  flex: 1;\n}\n\n.grp-time-pull .third-one {\n  text-align: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZmV0eS1lZHVjYXRpb24taGlzdG9yeS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsU0FBUztBQUNWOztBQUNBO0VBQ0MsU0FBUztBQUVWOztBQUNBO0VBQ0MscUJBQXFCO0FBRXRCOztBQUFBO0VBRUUsWUFBWTtBQUVkOztBQUNBO0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQTNCOztBQUxBO0VBUUcsZ0JBQWdCO0FBQ25COztBQVRBO0VBV0csV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFFckI7O0FBZkE7RUFlSSwwQ0FBMEM7QUFJOUM7O0FBbkJBO0VBa0JJLDJDQUEyQztBQUsvQzs7QUF2QkE7RUFzQkcsZ0JBQWdCO0FBS25COztBQTNCQTtFQTBCRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFLM0I7O0FBbENBO0VBZ0NFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0FBTWpCOztBQTFDQTtFQXNDRyxvQ0FBb0M7QUFRdkM7O0FBOUNBO0VBeUNHLHFDQUFxQztBQVN4Qzs7QUFsREE7RUE0Q0csb0NBQW9DO0FBVXZDOztBQXREQTtFQStDRyxxQ0FBcUM7QUFXeEM7O0FBMURBO0VBbURFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQVdyQjs7QUF2RUE7RUErREUsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtBQVlqQjs7QUFSQTtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ2QsOEJBQThCO0FBVy9COztBQVJBO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0FBV2pCOztBQWRBO0VBS0UsT0FBTztBQWFUOztBQWxCQTtFQVFFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsT0FBTztBQWNUOztBQXhCQTtFQWFFLGtCQUFrQjtFQUNsQixXQUFXO0FBZWI7O0FBN0JBO0VBa0JFLGtCQUFrQjtFQUNsQixXQUFXO0FBZWI7O0FBbENBO0VBc0JFLGtCQUFrQjtFQUNsQixZQUFZO0FBZ0JkOztBQXZDQTtFQTBCRSxPQUFPO0FBaUJUOztBQTNDQTtFQTZCRSxpQkFBaUI7QUFrQm5CIiwiZmlsZSI6InNhZmV0eS1lZHVjYXRpb24taGlzdG9yeS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG5cdG1hcmdpbjogMDtcbn1cbmg0e1xuXHRtYXJnaW46IDA7XG59XG5cbi5lZHVjYXRpb24tcm93IHtcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmVkdWNhdGlvbi1oZWFkLXRyIHtcblx0dGgge1xuXHRcdGhlaWdodDogMzRweDtcblx0fVxufVxuLmVkdWNhdGlvbi1ib2R5LXRyIHtcblx0dGQge1xuXHRcdGhlaWdodDogNDRweDtcblx0fVxufVxuLmdycC1ncm91cCB7XG4gICAgLmxhYmVsIHtcblx0XHRoZWlnaHQ6IDM0cHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cblx0XHQubGFiZWwtaW5uZXIge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDRweDtcblx0XHR9XG5cdFx0LmNpcmNsZSB7XG5cdFx0XHR3aWR0aDogMTZweDtcblx0XHRcdGhlaWdodDogMTZweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdCYub25lIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0fVxuXHRcdFx0Ji50d28ge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQubGFiZWwtaW5uZXIgKyAuY2lyY2xlIHtcblx0XHRcdG1hcmdpbi1sZWZ0OiA4cHg7XG5cdFx0fVxuXHR9XG5cdC5ncnAtYm94IHtcblx0XHRoZWlnaHQ6IDQ0cHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdH1cblx0LmdycC1pdGVtLWJhciB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHdpZHRoOiAwJTtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxNnB4O1xuXHRcdG1hcmdpbi10b3A6IDJweDtcblx0XHQmLm9uZSB7XG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cdFx0fVxuXHRcdCYudHdvIHtcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG5cdFx0fVxuXHRcdCYudGhyZWUge1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdH1cblx0XHQmLmZvdXIge1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcblx0XHR9XG5cdH1cblx0LmdycC1pdGVtLXRpbWUge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRjb2xvcjogIzQ0NDQ0NDtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWg2LXNtYWxsKTtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdH1cblx0LmdycC1ib3R0b20tYm9yZGVyIHtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDNweDtcblx0XHRtYXJnaW4tdG9wOiAzcHg7XG5cdH1cbn1cblxuLmdycC10aW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwJTtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZ3JwLXRpbWUtcHVsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgZGlzcGxheTogZmxleDtcblx0LmZpcnN0IHtcblx0XHRmbGV4OiAxO1xuXHR9XG5cdC5zZWNvbmQge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGZsZXg6IDE7XG5cdH1cblx0LnNlY29uZC1vbmUge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAtMTBweDtcblx0XG5cdH1cblx0LnNlY29uZC10d29cdHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogLTEwcHg7XG5cdH1cblx0LnNlY29uZC10aHJlZVx0e1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRyaWdodDogLTEwcHg7XG5cdH1cblx0LnRoaXJkIHtcblx0XHRmbGV4OiAxO1xuXHR9XG5cdC50aGlyZC1vbmUge1xuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXG5cdH1cbn0iXX0= */");

/***/ }),

/***/ 41640:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/safety-education/education-history/safety-education-history-detail/safety-education-history-detail.page.html ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-title>근로자 교육 이력</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <app-card color=\"light\">\n      <app-row>\n        <app-col>\n          <h4>근로자 정보</h4>\n        </app-col>\n      </app-row>\n      <app-row>\n        <app-col size=\"auto\">\n          <app-avatar style=\"width: 70px; height: 70px;\" name=\"worker-profile\" view_type=\"PROFILE\"\n            [(ngModel)]=\"res.user_profile_file_data\" [file]=\"null\" [file_json]=\"null\"></app-avatar>\n        </app-col>\n        <app-col>\n          <app-table>\n            <thead>\n              <tr>\n                <th>현장명</th>\n                <th>업체명</th>\n                <th>성명</th>\n                <th>국적</th>\n                <th>직종</th>\n                <th>직위</th>\n                <th>안전직무</th>\n                <th>계약유형</th>\n                <th>출역상태</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>{{ res?.project_name }}</td>\n                <td>{{ res?.company_name }}</td>\n                <td>{{ res?.user_name }}</td>\n                <td>{{ res?.ctgo_country_name }}</td>\n                <td>{{ res?.ctgo_occupation_name }}</td>\n                <td>{{ res?.ctgo_job_position_name }}</td>\n                <td>{{ res?.safe_job_name }}</td>\n                <td>{{ res?.work_contract_type }}</td>\n                <td>{{ res?.project_state ? '출역중' : '출역 종료'}}</td>\n              </tr>\n            </tbody>\n          </app-table>\n        </app-col>\n      </app-row>\n    </app-card>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-segment color=\"primary\" value=\"1\">\n          <ion-segment-button [value]=\"1\" (click)=\"menuCount = 1\">주요 교육 현황</ion-segment-button>\n          <ion-segment-button (click)=\"menuCount = 0\">전체 교육 이력</ion-segment-button>\n        </ion-segment>\n      </ion-buttons>\n    </ion-toolbar>\n    <app-card  color=\"light\" style=\"margin-top: 0;\">\n      <ng-container *ngIf=\"menuCount\">\n        <app-row>\n          <app-col size=\"3\">\n            <h4>채용 시 교육</h4>\n          </app-col>\n          <app-col size=\"2\">\n            <p style=\"width: 220px; text-align: right;\">*교육 관리 기준:1H / 채용시</p>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-table style=\"width: 45%;\">\n              <thead>\n                <tr>\n                  <th>교육명</th>\n                  <th>이수일</th>\n                  <th>경과일</th>\n                  <th>이수시간</th>\n                  <th>교육상태</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>채용 시 교육</td>\n                  <td>{{ hire?.education_date }}</td>\n                  <td>{{ hire?.elapse_date }}</td>\n                  <td>{{ hire?.education_complete_time }}</td>\n                  <td>\n                    <ion-chip *ngIf=\"hire?.recruitment_state === '양호'\" outline color=\"primary\">양호</ion-chip>\n                    <ion-chip *ngIf=\"hire?.recruitment_state === '필요'\" outline color=\"warning\">필요</ion-chip>\n                    <ion-chip *ngIf=\"hire?.recruitment_state === '기한초과'\" outline color=\"danger\">기한초과</ion-chip>\n                  </td>\n                </tr>\n              </tbody>\n            </app-table>\n          </app-col>\n        </app-row>\n        <ng-container>\n\n          <app-row style=\"margin-top: 20px;\">\n            <app-col size=\"auto\">\n              <h4>정기 교육</h4>\n            </app-col>\n            <app-col style=\"text-align: right;\" size=\"5\">\n              <p>*교육 관리 기준:6H / 분기</p>\n            </app-col>\n          </app-row>\n          <app-row class=\"education-row\">\n            <app-col>\n              <app-table>\n                <thead>\n                  <tr class=\"education-head-tr\">\n                    <th>교육명</th>\n                    <th>이수기간</th>\n                    <th>잔여일</th>\n                    <th>이수시간</th>\n                    <th>잔여시간</th>\n                    <th>교육상태</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr class=\"education-body-tr\">\n                    <td>작업자 정기교육</td>\n                    <td>{{ routine.education_start_term }} ~ {{ routine.education_end_term }}</td>\n                    <td>{{ routine.remaining_date }}</td>\n                    <td>{{ routine.education_complete_time }}</td>\n                    <td>{{ routine.remaining_time }}</td>\n                    <td>\n                      <ion-chip *ngIf=\"routine.require_state === '양호'\" outline color=\"primary\">양호</ion-chip>\n                      <ion-chip *ngIf=\"routine.require_state === '필요'\" outline color=\"warning\">필요</ion-chip>\n                      <ion-chip *ngIf=\"routine.require_state === '기한초과'\" outline color=\"danger\">기한초과</ion-chip>\n                    </td>\n                  </tr>\n                </tbody>\n              </app-table>\n            </app-col>\n            <app-col>\n              <div class=\"grp-group\">\n                <div class=\"label\">\n                  <div class=\"circle one\"></div>\n                  <div class=\"label-inner\">권장이수</div>\n                  <div class=\"circle two\"></div>\n                  <div class=\"label-inner\">실제이수</div>\n                </div>\n  \n                <div class=\"grp-box\">\n                  <div class=\"grp-item-bar one\" [style.width]=\"routine.recommend_hours/routine.education_need_hours*100 + '%'\">\n                    <p class=\"grp-item-time\">{{ routine.recommend_time ? routine.recommend_time : ''}}</p>\n                  </div>\n                  <div class=\"grp-item-bar two\" [style.width]=\"routine.education_complete_hours/routine.education_need_hours*100 + '%'\">\n                    <p class=\"grp-item-time\">{{ routine.education_complete_time ? routine.education_complete_time : ''}}</p>\n                  </div>\n                  <div class=\"grp-bottom-border\"></div>\n                </div>\n              </div>\n            </app-col>\n          </app-row>\n          <app-row>\n            <app-col></app-col>\n            <app-col>\n              <app-row class=\"grp-time\">\n                <app-col size=\"auto\">0H</app-col>\n                <app-col size=\"auto\">2H</app-col>\n                <app-col size=\"auto\">4H</app-col>\n                <app-col size=\"auto\">6H</app-col>\n              </app-row>\n            </app-col>\n          </app-row>\n\n        </ng-container>\n\n\n        <ng-container *ngIf=\"res.work_contract_type === '일용직'\">\n          <app-row style=\"margin-top: 20px;\">\n            <app-col size=\"auto\">\n              <h4>특별 교육</h4>\n            </app-col>\n            <app-col style=\"text-align: right;\" size=\"5\">\n              <p>*교육 관리 기준:2H / 작업 투입 시(타워크레인 신호수 교육 / 8H)</p>\n            </app-col>\n          </app-row>\n          <app-row class=\"education-row\">\n            <app-col>\n              <app-table>\n                <thead>\n                  <tr class=\"education-head-tr\">\n                    <th>교육명</th>\n                    <th>이수일</th>\n                    <th>이수시간</th>\n                    <th>필요시간</th>\n                    <th>교육상태</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of specialRes?.rsMap\" class=\"education-body-tr\">\n                    <td>{{ item.ctgo_education_safe_name }}</td>\n                    <td>{{ item.education_date }}</td>\n                    <td>{{ item.education_complete_time }}</td>\n                    <td>{{ item.recommend_time }}</td>\n                    <td>\n                      <ion-chip *ngIf=\"item.special_state === '양호'\" color=\"primary\">양호</ion-chip>\n                      <ion-chip *ngIf=\"item.special_state === '필요'\" color=\"warning\">필요</ion-chip>\n                      <ion-chip *ngIf=\"item.special_state === '기한초과'\" color=\"danger\">기한초과</ion-chip>\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"!specialRes?.rsMap\" class=\"education-body-tr\">\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                  </tr>\n                </tbody>\n              </app-table>\n            </app-col>\n            <app-col>\n              <div class=\"grp-group\">\n                <div class=\"label\">\n                  <div class=\"circle one\"></div>\n                  <div class=\"label-inner\">권장이수</div>\n                  <div class=\"circle two\"></div>\n                  <div class=\"label-inner\">실제이수</div>\n                </div>\n\n                <div class=\"grp-box\" *ngFor=\"let item of specialRes?.rsMap\">\n                  <div class=\"grp-item-bar three\" [style.width]=\"(item.recommend_hours/item.education_need_hours * 100) + '%'\">\n                    <p class=\"grp-item-time\">{{ item.recommend_time }}</p>\n                  </div>\n                  <div class=\"grp-item-bar four\" [style.width]=\"(item.education_complete_hours/item.education_need_hours * 100) + '%'\">\n                    <p class=\"grp-item-time\">{{ item.education_complete_time ? item.education_complete_time : ''}}</p>\n                  </div>\n                  <div class=\"grp-bottom-border\"></div>\n                </div>\n                \n                <div *ngIf=\"!specialRes?.rsMap\" class=\"grp-box\">\n                  <div class=\"grp-bottom-border\"></div>\n                </div>\n              </div>\n            </app-col>\n          </app-row>\n          <app-row>\n            <app-col></app-col>\n            <app-col>\n               <app-row class=\"grp-time\">\n              <app-col size=\"auto\">0H</app-col>\n              <app-col size=\"auto\">2H(8H)</app-col>\n            </app-row>\n            </app-col>\n          </app-row>\n        </ng-container>\n\n        <ng-container *ngIf=\"res.work_contract_type === '상용직'\">\n          <app-row style=\"margin-top: 20px;\">\n            <app-col size=\"auto\">\n              <h4>특별 교육</h4>\n            </app-col>\n            <app-col style=\"text-align: right;\" size=\"5\">\n              <p>*교육 관리 기준: 16H / 최초 교육 후 3개월</p>\n            </app-col>\n          </app-row>\n          <app-row class=\"education-row\">\n            <app-col>\n              <app-table>\n                <thead>\n                  <tr class=\"education-head-tr\">\n                    <th>교육명</th>\n                    <th>이수일</th>\n                    <th>잔여일</th>\n                    <th>이수시간</th>\n                    <th>잔여시간</th>\n                    <th>교육상태</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of specialRes?.rsMap\" class=\"education-body-tr\">\n                    <td>{{ item.ctgo_education_safe_name }}</td>\n                    <td>{{ item.education_date }}</td>\n                    <td>{{ item.remaining_date }}</td>\n                    <td>{{ item.education_complete_time }}</td>\n                    <td>{{ item.remaining_time }}</td>\n                    <td>\n                      <ion-chip *ngIf=\"item.special_state === '양호'\" color=\"primary\">양호</ion-chip>\n                      <ion-chip *ngIf=\"item.special_state === '필요'\" color=\"warning\">필요</ion-chip>\n                      <ion-chip *ngIf=\"item.special_state === '기한초과'\" color=\"danger\">기한초과</ion-chip>\n                    </td>\n                  </tr>\n\n                  <tr *ngIf=\"!specialRes?.rsMap\" class=\"education-body-tr\">\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                  </tr>\n                </tbody>\n              </app-table>\n            </app-col>\n            <app-col>\n              <div class=\"grp-group\">\n                <div class=\"label\">\n                  <div class=\"circle one\"></div>\n                  <div class=\"label-inner\">권장이수</div>\n                  <div class=\"circle two\"></div>\n                  <div class=\"label-inner\">실제이수</div>\n                </div>\n\n                <div class=\"grp-box\" *ngFor=\"let item of specialRes?.rsMap\">\n                  <div class=\"grp-item-bar three\" [style.width]=\"(item.recommend_hours/item.education_need_hours * 100) + '%'\">\n                    <p class=\"grp-item-time\">{{ item.recommend_time ? item.recommend_time : ''}}</p>\n                  </div>\n                  <div class=\"grp-item-bar four\" [style.width]=\"(item.education_complete_hours/item.education_need_hours * 100) + '%'\">\n                    <p class=\"grp-item-time\">{{ item.education_complete_time ? item.education_complete_time : ''}}</p>\n                  </div>\n                  <div class=\"grp-bottom-border\"></div>\n                </div>\n                \n                <div *ngIf=\"!specialRes?.rsMap\" class=\"grp-box\">\n                  <div class=\"grp-bottom-border\"></div>\n                </div>\n              </div>\n            </app-col>\n          </app-row>\n          <app-row>\n            <app-col></app-col>\n            <app-col>\n              <!-- <div class=\"grp-bottom-border\"></div> -->\n              <app-row class=\"grp-time\">\n                <app-col size=\"auto\">0H</app-col>\n                <app-col size=\"auto\">4H</app-col>\n                <app-col size=\"auto\">8H</app-col>\n                <app-col size=\"auto\">12H</app-col>\n                <app-col size=\"auto\">16H</app-col>\n              </app-row>\n            </app-col>\n          </app-row>\n        </ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"!menuCount\">\n        <app-row>\n          <app-col></app-col>\n          <app-col>\n            <app-input label=\"검색어\" name=\"search\" [(ngModel)]=\"useForm.search_text\" (keyup.enter)=\"useItem(0)\" placeholder=\"검색어를 입력해주세요.\">\n              <app-img name=\"search\" (click)=\"useItem(0)\"></app-img>\n            </app-input>\n          </app-col>\n        </app-row>\n        <app-row>\n          <app-col>\n            <app-table>\n              <thead>\n                <tr>\n                  <th style=\"width: 48px;\">No</th>\n                  <th>교육명</th>\n                  <th style=\"width: 200px;\">이수일</th>\n                  <th style=\"width: 100px;\">이수시간</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of useRes?.rsMap\">\n                  <td>{{ item.index }}</td>\n                  <td>{{ item.ctgo_education_safe_name }}</td>\n                  <td>{{ item.create_date }}</td>\n                  <td>{{ item.education_safe_time }}</td>\n                </tr>\n              </tbody>\n            </app-table>\n            <app-pager [totalCount]=\"useRes?.rsObj.row_count\" [limitNo]=\"useForm.limit_no\" (pagerChange)=\"useItem($event)\"></app-pager>\n          </app-col>\n        </app-row>\n      </ng-container>\n    </app-card>\n  </ion-content>\n</ng-container>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_safety-education_education-history_safety-education-history-detail_safet-825e38.js.map