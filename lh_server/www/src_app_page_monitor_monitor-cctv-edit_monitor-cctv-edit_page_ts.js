(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_monitor_monitor-cctv-edit_monitor-cctv-edit_page_ts"],{

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

/***/ })

}]);
//# sourceMappingURL=src_app_page_monitor_monitor-cctv-edit_monitor-cctv-edit_page_ts.js.map