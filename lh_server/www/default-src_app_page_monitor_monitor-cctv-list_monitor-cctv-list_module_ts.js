(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_monitor_monitor-cctv-list_monitor-cctv-list_module_ts"],{

/***/ 19840:
/*!**************************************************************************!*\
  !*** ./src/app/page/monitor/monitor-cctv-edit/monitor-cctv-edit.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorCctvEditPage": () => (/* binding */ MonitorCctvEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_monitor_cctv_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./monitor-cctv-edit.page.html */ 83011);
/* harmony import */ var _monitor_cctv_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitor-cctv-edit.page.scss */ 8170);
/* harmony import */ var _basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../basic/service/ionic/alert.service */ 82929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../basic/service/core/connect.service */ 71090);
/* harmony import */ var _basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../basic/service/core/user.service */ 29730);
/* harmony import */ var _basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../basic/service/ionic/toast.service */ 22455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);









let MonitorCctvEditPage = class MonitorCctvEditPage {
    constructor(alert, _modal, connect, user, toast) {
        this.alert = alert;
        this._modal = _modal;
        this.connect = connect;
        this.user = user;
        this.toast = toast;
        this.cctv_id = null;
        this.type = '';
        this.form = {
            cctv_id: 0,
            cctv_alias: '',
            cctv_area_name: '',
            cctv_channel_no: '',
            cctv_ip: '',
            cctv_nvr_id: '',
            cctv_nvr_password: '',
            cctv_port: '',
            cctv_use_state: 0,
            master_company_id: 0,
            master_company_name: '',
            project_id: 0,
            project_name: ''
        };
        this.permission = {
            edit_btn: false,
            input_disabled: false
        };
    }
    ngOnInit() {
        if (this.cctv_id) {
            this.get();
        }
        else {
            this.form.project_id = this.item.project_id;
            this.form.master_company_id = this.item.master_company_id;
        }
        if (this.type === 'update')
            this.permission.edit_btn = true;
        else
            this.permission.input_disabled = true;
    }
    /**
     * @function get(): CCTV상세정보를 가져옵니다.
     */
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/cctv/detail', { cctv_id: this.cctv_id });
            if (res.rsCode === 0) {
                this.form = res.rsObj;
            }
            else if (res.rsCode === 1008) {
                // this.res = null;
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    /**
     * @function save(): CCTV정보등록 OR 수정
     */
    save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let msg = this.validation();
            if (msg)
                return this.toast.present({ message: msg, color: 'warning' });
            const alert = yield this.alert.present({
                message: '저장 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            // console.log(this.form);
                            const res = yield this.connect.run(`/cctv/${this.type}`, this.form);
                            if (res.rsCode === 0) {
                                this._modal.dismiss(true);
                            }
                            else if (res.rsCode === 1008) {
                                // this.res = null;
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
    /**
     * @function delete(): CCTV정보등록 OR 삭제
     */
    delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/cctv/delete', { cctv_ids: [this.cctv_id] });
                            if (res.rsCode === 0) {
                                this._modal.dismiss(true);
                            }
                            else if (res.rsCode === 1008) {
                                // this.res = null;
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
    /**
     * @function validation(): CCTV상세정보 유효성검사
     */
    validation() {
        if (!this.form.project_id)
            return '현장을 선택해주세요.';
        if (!this.form.master_company_id)
            return '원청사를 선택해주세요.';
        if (!this.form.cctv_area_name)
            return '설치장소명을 입력해주세요.';
        if (!this.form.cctv_ip)
            return 'CCTV IP를 입력해주세요.';
        if (!this.form.cctv_alias)
            return 'Alias를 입력해주세요.';
        if (!this.form.cctv_port)
            return 'Port를 입력해주세요.';
        if (!this.form.cctv_channel_no)
            return 'Channel No.를 입력해주세요.';
        if (!this.form.cctv_nvr_id)
            return 'NVR ID를 입력해주세요.';
        if (!this.form.cctv_nvr_password)
            return 'NVR PW를 입력해주세요.';
        return null;
    }
};
MonitorCctvEditPage.ctorParameters = () => [
    { type: _basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: _basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService }
];
MonitorCctvEditPage.propDecorators = {
    cctv_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
MonitorCctvEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-monitor-cctv-edit',
        template: _raw_loader_monitor_cctv_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_monitor_cctv_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MonitorCctvEditPage);



/***/ }),

/***/ 31516:
/*!************************************************************************************!*\
  !*** ./src/app/page/monitor/monitor-cctv-list/monitor-cctv-list-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorCctvListPageRoutingModule": () => (/* binding */ MonitorCctvListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _monitor_cctv_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor-cctv-list.page */ 93537);




const routes = [
    {
        path: '',
        component: _monitor_cctv_list_page__WEBPACK_IMPORTED_MODULE_0__.MonitorCctvListPage
    }
];
let MonitorCctvListPageRoutingModule = class MonitorCctvListPageRoutingModule {
};
MonitorCctvListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MonitorCctvListPageRoutingModule);



/***/ }),

/***/ 95286:
/*!****************************************************************************!*\
  !*** ./src/app/page/monitor/monitor-cctv-list/monitor-cctv-list.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorCctvListPageModule": () => (/* binding */ MonitorCctvListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../component/component.module */ 55051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _monitor_cctv_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitor-cctv-list-routing.module */ 31516);
/* harmony import */ var _monitor_cctv_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monitor-cctv-list.page */ 93537);








let MonitorCctvListPageModule = class MonitorCctvListPageModule {
};
MonitorCctvListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _monitor_cctv_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.MonitorCctvListPageRoutingModule
        ],
        declarations: [_monitor_cctv_list_page__WEBPACK_IMPORTED_MODULE_2__.MonitorCctvListPage]
    })
], MonitorCctvListPageModule);



/***/ }),

/***/ 93537:
/*!**************************************************************************!*\
  !*** ./src/app/page/monitor/monitor-cctv-list/monitor-cctv-list.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CCTVInfo": () => (/* binding */ CCTVInfo),
/* harmony export */   "MonitorCctvListPage": () => (/* binding */ MonitorCctvListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_monitor_cctv_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./monitor-cctv-list.page.html */ 25455);
/* harmony import */ var _monitor_cctv_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitor-cctv-list.page.scss */ 82095);
/* harmony import */ var _monitor_cctv_edit_monitor_cctv_edit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../monitor-cctv-edit/monitor-cctv-edit.page */ 19840);
/* harmony import */ var _basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../basic/service/core/connect.service */ 71090);
/* harmony import */ var _basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../basic/service/core/user.service */ 29730);
/* harmony import */ var _basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../basic/service/ionic/toast.service */ 22455);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../basic/service/ionic/alert.service */ 82929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);










class CCTVInfo {
}
let MonitorCctvListPage = class MonitorCctvListPage {
    constructor(alert, _modal, connect, user, toast) {
        this.alert = alert;
        this._modal = _modal;
        this.connect = connect;
        this.user = user;
        this.toast = toast;
        this.form = {
            project_id: this.user.userData.belong_data.project_id,
            master_company_id: this.user.userData.belong_data.master_company_id ? this.user.userData.belong_data.master_company_id : 0,
            search_text: '',
            limit_no: 0
        };
        this.permission = {
            company_id: false
        };
        this.selectedList = [];
    }
    ngOnInit() {
        const { belong_data } = this.user.userData;
        this.form.project_id = belong_data.project_id;
        if (belong_data.company_contract_type === 'LH'
            || belong_data.company_contract_type === '감리사') {
            this.permission.company_id = true;
            this.form.master_company_id = 0;
        }
        else {
            this.permission.company_id = false;
            this.form.master_company_id = belong_data.master_company_id;
        }
        this.get();
    }
    /**
     * @function edit(): CCTV살세정보 OR 수정하기
     */
    edit(method = '', cctv_id = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _monitor_cctv_edit_monitor_cctv_edit_page__WEBPACK_IMPORTED_MODULE_2__.MonitorCctvEditPage,
                componentProps: {
                    cctv_id: cctv_id || 0,
                    type: method,
                    item: this.form
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                // 모바일은 편집이 없어서 이렇게해도 충분함. 있으면 추가 코드 작성을 해야함.
                this.get();
            }
        });
    }
    /**
     * @function delete(): CCTV정보등록 OR 삭제
     */
    delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let delete_arr = [];
            this.selectedList.map((item) => { delete_arr.push(item.cctv_id); });
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    { text: '예', handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                            const res = yield this.connect.run('/cctv/delete', { cctv_ids: delete_arr });
                            if (res.rsCode === 0) {
                                this.get();
                            }
                            else if (res.rsCode === 1008) {
                                // this.res = null;
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
    /**
     * @function get(): CCTV목록정보를 가져옵니다.
     */
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/cctv/list', this.form);
            if (res.rsCode === 0) {
                this.res = res;
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
     * @function changeUse(): CCTV표출정보를 변경합니다.
     */
    changeUse(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/cctv/usestate/update', item);
            if (res.rsCode === 0) {
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
};
MonitorCctvListPage.ctorParameters = () => [
    { type: _basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_3__.ConnectService },
    { type: _basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService }
];
MonitorCctvListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-monitor-cctv-list',
        template: _raw_loader_monitor_cctv_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_monitor_cctv_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MonitorCctvListPage);



/***/ }),

/***/ 8170:
/*!****************************************************************************!*\
  !*** ./src/app/page/monitor/monitor-cctv-edit/monitor-cctv-edit.page.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb25pdG9yLWNjdHYtZWRpdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 82095:
/*!****************************************************************************!*\
  !*** ./src/app/page/monitor/monitor-cctv-list/monitor-cctv-list.page.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("td {\n  vertical-align: baseline !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbml0b3ItY2N0di1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFHLG1DQUFrQztBQUVyQyIsImZpbGUiOiJtb25pdG9yLWNjdHYtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZHt2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmUhaW1wb3J0YW50O30iXX0= */");

/***/ }),

/***/ 83011:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/monitor/monitor-cctv-edit/monitor-cctv-edit.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>CCTV 상세보기</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-row mobileBreak>\n    <app-col>\n      <app-select-scene [required]=\"true\" label=\"현장명\" [(ngModel)]=\"form.project_id\" [disabled]=\"!permission.input_disabled\"></app-select-scene>\n    </app-col>\n    <app-col>\n      <app-select-contractor *ngIf=\"!cctv_id\" [required]=\"true\" label=\"원청사명\" [project_id]=\"form.project_id\" [(ngModel)]=\"form.master_company_id\" [disabled]=\"true\"></app-select-contractor>\n      <app-input *ngIf=\"cctv_id\" [required]=\"true\" label=\"원청사명\" [(ngModel)]=\"form.master_company_name\" [disabled]=\"true\"></app-input>\n    </app-col>\n  </app-row>\n\n  <app-row mobileBreak>\n    <app-col>\n      <app-input [required]=\"true\" label=\"설치장소명\" [(ngModel)]=\"form.cctv_area_name\" [disabled]=\"!permission.input_disabled\"></app-input>\n    </app-col>\n    <app-col>\n      <app-input [required]=\"true\" label=\"CCTV IP\" [(ngModel)]=\"form.cctv_ip\" [disabled]=\"!permission.input_disabled\"></app-input>\n    </app-col>\n  </app-row>\n\n  <app-row mobileBreak>\n    <app-col>\n      <app-input [required]=\"true\" label=\"Port\" [(ngModel)]=\"form.cctv_port\" [disabled]=\"!permission.input_disabled\"></app-input>\n    </app-col>\n    <app-col>\n      <app-input [required]=\"true\" label=\"Channel No.\" [(ngModel)]=\"form.cctv_channel_no\" [disabled]=\"!permission.input_disabled\"></app-input>\n    </app-col>\n  </app-row>\n\n  <app-row mobileBreak>\n    <app-col>\n      <app-input [required]=\"true\" label=\"NVR ID\" [(ngModel)]=\"form.cctv_nvr_id\" [disabled]=\"!permission.input_disabled\"></app-input>\n    </app-col>\n    <app-col>\n      <app-input [required]=\"true\" label=\"NVR PW\" [(ngModel)]=\"form.cctv_nvr_password\" [disabled]=\"!permission.input_disabled\"></app-input>\n    </app-col>\n  </app-row>\n\n  <app-row mobileBreak>\n    <app-col>\n      <app-input [required]=\"true\" label=\"Alias\" [(ngModel)]=\"form.cctv_alias\" [disabled]=\"!permission.input_disabled\"></app-input>\n    </app-col>\n  </app-row>\n</ion-content>\n<app-button-footer *ngIf=\"type === 'update'\">\n  <app-button fill=\"translucent\" *ngIf=\"!permission.input_disabled\" (click)=\"this.permission.input_disabled = true\">수정</app-button>\n  <app-button fill=\"translucent\" (click)=\"delete()\" color=\"danger\">삭제</app-button>\n  <app-button fill=\"translucent\" *ngIf=\"permission.input_disabled\" (click)=\"save()\">저장</app-button>\n</app-button-footer>\n<app-button-footer *ngIf=\"type === 'insert'\">\n  <app-button name=\"submit\" (click)=\"save()\">저장</app-button>\n</app-button-footer>");

/***/ }),

/***/ 25455:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/monitor/monitor-cctv-list/monitor-cctv-list.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>CCTV 목록</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-buttons slot=\"end\">\n        <app-dismiss-button></app-dismiss-button>\n      </ion-buttons>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *mobileHidden>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\">\n                <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"get()\">검색</app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor [project_id]=\"form.project_id\" [(ngModel)]=\"form.master_company_id\" [disabled]=\"!permission.company_id\" [allState]=\"permission.company_id\"></app-select-contractor>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" [(ngModel)]=\"form.search_text\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n        <ion-toolbar color=\"white\" *ngIf=\"user.userData.user_type !== 'LH' && user.userData.user_type !== 'SUPER'\">   \n          <ion-buttons slot=\"start\">\n            <app-button fill=\"translucent\" (click)=\"edit('insert')\">등록</app-button>\n            <app-button fill=\"translucent\" (click)=\"delete()\" color=\"warning\">삭제</app-button>\n          </ion-buttons>\n        </ion-toolbar>\n        <ion-toolbar color=\"white\">\n          <h5>CCTV 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n        </ion-toolbar>\n        <ng-container *ngIf=\"res\">\n          <ng-container *ngIf=\"res.rsCode === 0 else tempFail\">\n            <app-check-group [(ngModel)]=\"selectedList\">\n              <app-table>\n                <thead>\n                  <tr>\n                    <th style=\"width: 40px;\" *ngIf=\"user.userData.user_type !== 'LH' && user.userData.user_type !== 'SUPER'\">\n                      <app-check type=\"all\" color=\"white\" size=\"small\" name=\"check\"></app-check>\n                    </th>\n                    <th>CCTV ID</th>\n                    <th>Alias</th>\n                    <th>원청사명</th>\n                    <th>설치장소명</th>\n                    <th>CCTV IP</th>\n                    <th>Port</th>\n                    <th>Channel No.</th>\n                    <th>NVR ID</th>\n                    <th>NVR PW</th>\n                    <th>통합관제 표출</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr class=\"button\" *ngFor=\"let item of res?.rsMap\" (click)=\"edit('update', item.cctv_id)\">\n                    <td *ngIf=\"user.userData.user_type !== 'LH' && user.userData.user_type !== 'SUPER'\">\n                      <app-check (click)=\"$event.stopPropagation()\" [on]=\"item\" color=\"white\" size=\"small\" name=\"check\"></app-check>\n                    </td>\n                    <td>{{ item.cctv_id }}</td>\n                    <td>{{ item.cctv_alias }}</td>\n                    <td>{{ item.master_company_name }}</td>\n                    <td>{{ item.cctv_area_name }}</td>\n                    <td>{{ item.cctv_ip }}</td>\n                    <td>{{ item.cctv_port }}</td>\n                    <td>{{ item.cctv_channel_no }}</td>\n                    <td>{{ item.cctv_nvr_id }}</td>\n                    <td>{{ item.cctv_nvr_password }}</td>\n                    <td *ngIf=\"user.userData.user_role === 'MASTER_HEAD' || user.userData.user_role === 'MASTER_GENERAL' || user.userData.user_type === 'LH'\">\n                      <app-select (change)=\"changeUse(item)\" (click)=\"$event.stopPropagation()\" [(ngModel)]=\"item.cctv_use_state\">\n                        <app-select-option [value]=\"1\">Y</app-select-option>\n                        <app-select-option [value]=\"0\">N</app-select-option>\n                      </app-select>\n                    </td>\n                    <td *ngIf=\"user.userData.user_role === 'SUPER_HEAD'\">\n                      {{ item.cctv_use_state ? 'Y' : 'N' }}\n                    </td>\n                  </tr>\n                </tbody>\n              </app-table>\n            </app-check-group>\n\n            <!-- <app-pager [totalCount]=\"res?.rsObj.row_count\" [limitNo]=\"form.limit_no\" (pagerChange)=\"get($event)\"></app-pager> -->\n          </ng-container>\n          <ng-template #tempFail>\n            <app-card>{{ res.rsMsg }}</app-card>\n          </ng-template>\n        </ng-container>\n      </app-col>\n    </app-row>\n  </ng-container>\n  \n  <!-- <ng-container *mobileShow>\n    <ion-header>\n      <ion-toolbar color=\"white\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>공지사항</ion-title>\n        <ion-buttons slot=\"end\">\n          <app-menu-button></app-menu-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-toolbar color=\"white\">\n        <app-input-group>\n          <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\" [readonly]=\"true\"></app-select-scene>\n          <app-button (click)=\"detailSearch()\">상세검색</app-button>\n        </app-input-group>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <app-card *ngFor=\"let item of res?.rsMap\" (click)=\"edit(item.notice_id)\">\n        <app-row style=\"align-items: flex-start;\">\n          <app-col>\n            <p>{{ item.notice_title }}</p>\n            <p>{{ item.company_name }}/{{ item.user_name }}</p>\n            <p>작성일: {{ item.create_date }}</p>\n          </app-col>\n        </app-row>\n        <ion-badge color=\"success\">{{ item.notice_type }}</ion-badge>\n      </app-card>\n  \n      <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"getMobile($event)\">\n        <ion-infinite-scroll-content loading-spinner=\"dots\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-content>\n  </ng-container> -->\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_monitor_monitor-cctv-list_monitor-cctv-list_module_ts.js.map