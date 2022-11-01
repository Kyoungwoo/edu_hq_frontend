(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_work-management_departure-status_today-departure-status-edit_today-depar-149755"],{

/***/ 50758:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/page/work-management/departure-status/today-departure-status-edit/today-departure-status-edit-routing.module.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodayDepartureStatusEditPageRoutingModule": () => (/* binding */ TodayDepartureStatusEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _today_departure_status_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today-departure-status-edit.page */ 88931);




const routes = [
    {
        path: '',
        component: _today_departure_status_edit_page__WEBPACK_IMPORTED_MODULE_0__.TodayDepartureStatusEditPage
    }
];
let TodayDepartureStatusEditPageRoutingModule = class TodayDepartureStatusEditPageRoutingModule {
};
TodayDepartureStatusEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TodayDepartureStatusEditPageRoutingModule);



/***/ }),

/***/ 71324:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/page/work-management/departure-status/today-departure-status-edit/today-departure-status-edit.module.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodayDepartureStatusEditPageModule": () => (/* binding */ TodayDepartureStatusEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _today_departure_status_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today-departure-status-edit-routing.module */ 50758);
/* harmony import */ var _today_departure_status_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today-departure-status-edit.page */ 88931);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let TodayDepartureStatusEditPageModule = class TodayDepartureStatusEditPageModule {
};
TodayDepartureStatusEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _today_departure_status_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.TodayDepartureStatusEditPageRoutingModule
        ],
        declarations: [_today_departure_status_edit_page__WEBPACK_IMPORTED_MODULE_1__.TodayDepartureStatusEditPage],
        exports: [_today_departure_status_edit_page__WEBPACK_IMPORTED_MODULE_1__.TodayDepartureStatusEditPage]
    })
], TodayDepartureStatusEditPageModule);



/***/ }),

/***/ 88931:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/page/work-management/departure-status/today-departure-status-edit/today-departure-status-edit.page.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodayDeparturePersionItem": () => (/* binding */ TodayDeparturePersionItem),
/* harmony export */   "TodayDepartureStatusEditForm": () => (/* binding */ TodayDepartureStatusEditForm),
/* harmony export */   "TodayDepartureStatusEditPage": () => (/* binding */ TodayDepartureStatusEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_today_departure_status_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./today-departure-status-edit.page.html */ 92934);
/* harmony import */ var _today_departure_status_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today-departure-status-edit.page.scss */ 52538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/ionic/alert.service */ 82929);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);








class TodayDeparturePersionItem {
}
class TodayDepartureStatusEditForm {
    constructor() {
        this.area_risk_id = null; // 위험지역ID - 입장유형이 위험지역일 경우에만 입력
        this.area_top_id = null; // 장소ID_1(TOP) - 입장유형이 위험지역일 경우에만 입력
        this.area_middle_id = null; // 장소ID_2(MIDDLE) - 입장유형이 위험지역일 경우에만 입력
        this.area_bottom_id = null; // 장소ID_3(BOTTOM) - 입장유형이 위험지역일 경우에만 입력
        this.project_id = null; // 현장ID
        this.master_company_id = null; // 원청사ID
        this.serial_type = null; // 입장유형 - 게이트/위험지역
        this.insert_state = null; // IN - 입장 / OUT - 퇴장
        this.inout_datetime = null; // 입장시간
        this.inout_date = null; // 입장 시간 - 날짜
        this.inout_time = null; // 입장 시간 - 시간
        this.user_ids = []; // 입/퇴장 유저ID
    }
}
let TodayDepartureStatusEditPage = class TodayDepartureStatusEditPage {
    constructor(_modal, connect, toast, alert) {
        this._modal = _modal;
        this.connect = connect;
        this.toast = toast;
        this.alert = alert;
        this.form = {
            project_id: 0,
            company_id: 0,
            inside_date: '',
            user_type: 'WORKER',
            search_text: ''
        };
        this.selectedList = [];
        this.submitForm = new TodayDepartureStatusEditForm();
    }
    ngOnInit() {
        /** form 초기값 입력
         * 이 부분에서 초기값을 제대로 입력 안해서, 오류가 나는 경우가 많습니다. 유의해주세요.
         */
        this.form.project_id = this.project_id;
        this.form.company_id = this.company_id;
        this.form.inside_date = this.inout_date;
        this.submitForm.project_id = this.project_id;
        this.submitForm.master_company_id = this.company_id;
        this.submitForm.serial_type = '게이트';
        this.submitForm.insert_state = this.type === '입장' ? 'IN' : 'OUT';
        this.submitForm.inout_date = this.inout_date;
        this.submitForm.inout_time = '07:30';
        /** inout_date 와 inout_time을 합쳐서 하나의 datetime 형태로 만들어야 할 때는
         * get, set을 이용하면 편하지만, 위의 형태로 사용하셔도 무방합니다.
         */
        /** 리스트 호출 */
        this.get();
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let url;
            if (this.type === '입장') {
                url = '/category/certify/project/notin/user/get';
            } /** if else 정렬 이렇게 하세요. */
            else {
                url = '/category/certify/project/in/user/get';
            }
            /** api 호출 */
            this.res = yield this.connect.run(url, this.form);
            if (this.res.rsCode === 0) {
                // 암것도 안함
            }
            else if (this.res.rsCode === 1008) {
                // 암것도 안함
            }
            else {
                this.toast.present({ color: 'warning', message: this.res.rsMsg });
            }
        });
    }
    select(item) {
        /** 이 코드는 밖에서 select list를 들고와야 할 경우는 틀린 코드입니다.
         * 이유는 깊은 비교 상에서 다르기 떄문입니다. 이점 유의하시기 바랍니다.
         * 깊은 비교로는 다르나, 얕은 비교 상에서 같은 아이템을 찾아야 할 경우는
         * const index = this.selectedList.findIndex(selectedItem => this.file.shallowEqual(selectedItem, item))
         * 이런 식으로 찾아야 합니다.
         * 단, 얕은 비교의 경우, 서버에서 받아온 데이터를 비교해야하는 경우가 대부분이고, 이 경우 아이디를 제외한 데이터는 변동될 수 있습니다.
         * 때문에 위의 방식을 쓰면 안되고,
         * const index = this.selectedList.findIndex(selectedItem => selectedItem.user_id === item.user_id)
         * 로 비교하는 것이 맞습니다. */
        const index = this.selectedList.indexOf(item);
        if (index > -1) {
            this.selectedList.splice(index, 1);
        } /** if else 정렬 이렇게 하세요. */
        else {
            this.selectedList.push(item);
        }
    }
    submit() {
        /** form 입력 */
        this.submitForm.inout_datetime = `${this.submitForm.inout_date} ${this.submitForm.inout_time}`;
        this.submitForm.user_ids = this.selectedList.map(item => item.user_id);
        /** form 검증 */
        if (!this.submitForm.user_ids.length)
            return this.toast.present({ color: 'warning', message: `${this.type} 할 유저를 선택해주세요.` });
        let message = '';
        if (this.type === '입장') {
            message = '선택한 인원을 입장 등록 처리하시겠습니까?';
        }
        else {
            message = '선택한 인원이 아직 현장에 남아 있을 수 있습니다. 퇴장 등록 처리 하시겠습니까?';
        }
        this.alert.present({
            message,
            buttons: [{
                    text: '아니오'
                }, {
                    text: '예',
                    handler: () => {
                        /** handler 처럼 function을 값으로 가지는 변수들을
                         * handler: this.submitHandler.bind(this)
                         * 형태로도 쓸 수 있습니다. 다만, 이 부분은 알려드린 부분이 아니라서, 여기서는 이렇게 사용하지는 않았습니다.
                         */
                        this.submitHandler();
                    }
                }]
        });
    }
    submitHandler() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            /** api 호출 */
            const res = yield this.connect.run('/work_project/nfc_beacon/manual/insups', this.submitForm);
            if (res.rsCode === 0) {
                this._modal.dismiss({ update: true });
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
};
TodayDepartureStatusEditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService },
    { type: src_app_basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService }
];
TodayDepartureStatusEditPage.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    project_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    company_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    inout_date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
TodayDepartureStatusEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-today-departure-status-edit',
        template: _raw_loader_today_departure_status_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_today_departure_status_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TodayDepartureStatusEditPage);



/***/ }),

/***/ 52538:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/page/work-management/departure-status/today-departure-status-edit/today-departure-status-edit.page.scss ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("tr.selected td {\n  background: var(--ion-color-secondary);\n  color: var(--ion-color-secondary-contrast);\n}\n\ntr.selected:hover td {\n  background: var(--ion-color-secondary-shade);\n}\n\n.selected-layout {\n  text-align: left;\n}\n\n.selected-layout .seleted-list {\n  padding-top: var(--app-padding);\n  padding-bottom: var(--app-padding);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZGF5LWRlcGFydHVyZS1zdGF0dXMtZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxzQ0FBc0M7RUFDdEMsMENBQTBDO0FBQWxEOztBQUdBO0VBRVEsNENBQTRDO0FBRHBEOztBQUtBO0VBQ0ksZ0JBQWdCO0FBRnBCOztBQUNBO0VBR1EsK0JBQStCO0VBQy9CLGtDQUFrQztBQUExQyIsImZpbGUiOiJ0b2RheS1kZXBhcnR1cmUtc3RhdHVzLWVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidHIuc2VsZWN0ZWQge1xuICAgIHRkIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICB9XG59XG50ci5zZWxlY3RlZDpob3ZlciB7XG4gICAgdGQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlKTtcbiAgICB9XG59XG5cbi5zZWxlY3RlZC1sYXlvdXQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgLnNlbGV0ZWQtbGlzdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1hcHAtcGFkZGluZyk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1hcHAtcGFkZGluZyk7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ 92934:
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/work-management/departure-status/today-departure-status-edit/today-departure-status-edit.page.html ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>작업자 {{ type }} 등록</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar color=\"white\">\n    <app-input-group>\n      <app-select label=\"구분\" name=\"select\" [(ngModel)]=\"form.user_type\">\n        <app-select-option value=\"COMPANY\">관리자</app-select-option>\n        <app-select-option value=\"WORKER\">작업자</app-select-option>\n      </app-select>\n      <app-input name=\"with img\" label=\"검색어\" placeholder=\"검색어를 입력하세요\" [(ngModel)]=\"form.search_text\" (buttonClick)=\"get()\">\n        <app-img name=\"search\"></app-img>\n      </app-input>\n    </app-input-group>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-table>\n    <thead>\n      <tr>\n        <th>회사명</th>\n        <th>성명</th>\n        <th>직위</th>\n        <th>안전직무</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr button *ngFor=\"let item of res?.rsMap\" [class.selected]=\"selectedList.indexOf(item) > -1\" (click)=\"select(item)\">\n        <td>{{ item.company_name }}</td>\n        <td>{{ item.user_name }}</td>\n        <td>{{ item.ctgo_job_position_name }}</td>\n        <td>{{ item.ctgo_safe_job_name }}</td>\n      </tr>\n    </tbody>\n  </app-table>\n</ion-content>\n<app-button-footer>\n  <div class=\"selected-layout\">\n    <h6 *ngIf=\"type === '입장'; else tempOut\">현재 입장 처리가 되어있지 않은 근로자만 조회됩니다.</h6>\n    <ng-template #tempOut>\n      <h6>현재 입장 처리가 되어있는 근로자만 조회됩니다.</h6>\n    </ng-template>\n    <div class=\"seleted-list\">\n      <ion-chip button color=\"secondary\" fill=\"solid\" *ngFor=\"let item of selectedList; let i = index;\" (click)=\"selectedList.splice(i, 1)\">\n        <ion-label>{{ item.user_name }}</ion-label>\n        <ion-icon name=\"close-circle\"></ion-icon>\n      </ion-chip>\n    </div>\n    <app-datetime [label]=\"type + '시간'\" [(ngModel)]=\"submitForm.inout_time\"></app-datetime>\n  </div>\n  <app-button (click)=\"submit()\">적용</app-button>\n</app-button-footer>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_work-management_departure-status_today-departure-status-edit_today-depar-149755.js.map