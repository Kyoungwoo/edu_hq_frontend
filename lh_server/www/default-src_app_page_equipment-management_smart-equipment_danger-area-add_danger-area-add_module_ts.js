(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_equipment-management_smart-equipment_danger-area-add_danger-area-add_module_ts"],{

/***/ 46627:
/*!*************************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/danger-area-add/danger-area-add-routing.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DangerAreaAddPageRoutingModule": () => (/* binding */ DangerAreaAddPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _danger_area_add_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./danger-area-add.page */ 58843);




const routes = [
    {
        path: '',
        component: _danger_area_add_page__WEBPACK_IMPORTED_MODULE_0__.DangerAreaAddPage
    }
];
let DangerAreaAddPageRoutingModule = class DangerAreaAddPageRoutingModule {
};
DangerAreaAddPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DangerAreaAddPageRoutingModule);



/***/ }),

/***/ 59248:
/*!*****************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/danger-area-add/danger-area-add.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DangerAreaAddPageModule": () => (/* binding */ DangerAreaAddPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _danger_area_add_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./danger-area-add-routing.module */ 46627);
/* harmony import */ var _danger_area_add_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./danger-area-add.page */ 58843);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);









let DangerAreaAddPageModule = class DangerAreaAddPageModule {
};
DangerAreaAddPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _danger_area_add_routing_module__WEBPACK_IMPORTED_MODULE_0__.DangerAreaAddPageRoutingModule
        ],
        declarations: [_danger_area_add_page__WEBPACK_IMPORTED_MODULE_1__.DangerAreaAddPage]
    })
], DangerAreaAddPageModule);



/***/ }),

/***/ 58843:
/*!***************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/danger-area-add/danger-area-add.page.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DangerAreaAddPage": () => (/* binding */ DangerAreaAddPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_danger_area_add_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./danger-area-add.page.html */ 29829);
/* harmony import */ var _danger_area_add_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./danger-area-add.page.scss */ 7570);
/* harmony import */ var _component_modal_search_dangerous_area_search_dangerous_area_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../component/modal/search-dangerous-area/search-dangerous-area.component */ 29393);
/* harmony import */ var _component_modal_search_serial_number_search_serial_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../component/modal/search-serial-number/search-serial-number.component */ 50171);
/* harmony import */ var _basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../basic/service/core/file.service */ 89613);
/* harmony import */ var _basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../basic/service/ionic/alert.service */ 82929);
/* harmony import */ var _basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../basic/service/ionic/toast.service */ 22455);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../basic/service/core/connect.service */ 71090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);











class SmartInfoInsertItem {
    constructor() {
        this.ctgo_machine_serial_id = 0;
        this.ctgo_machine_serial_name = '';
        this.serial_id = 0;
        this.serial_use_state = 0;
        this.serial_no = '';
        this.serial_type = '';
        this.area_risk_id = 0;
        this.area_risk_name = '';
        this.area_top_id = 0;
        this.area_top_name = '';
        this.area_middle_id = 0;
        this.area_middle_name = '';
        this.area_bottom_id = 0;
        this.area_bottom_name = '';
    }
}
let DangerAreaAddPage = class DangerAreaAddPage {
    constructor(_modal, toast, alert, file, connect) {
        this._modal = _modal;
        this.toast = toast;
        this.alert = alert;
        this.file = file;
        this.connect = connect;
        this.original_item = [];
        this.insert_list = [];
    }
    ngOnInit() {
        // this.original_item = this.file.clone(this.list);
    }
    get(id) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/device/risk/mo/list', { area_risk_id: id });
            if (res.rsCode === 0) {
                this.res = Object.assign(Object.assign({}, this.res), res);
                this.original_item = JSON.parse(JSON.stringify((_a = this.res) === null || _a === void 0 ? void 0 : _a.rsMap));
            }
            else if (res.rsCode === 1008) {
                this.res = null;
                this.original_item = [];
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
                this.original_item = [];
            }
        });
    }
    select() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.present({
                message: '저장 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            var _a;
                            let updateItems = [];
                            let insert_promise = null;
                            let update_promise = null;
                            console.log(this.original_item);
                            (_a = this.original_item) === null || _a === void 0 ? void 0 : _a.map((item, i) => {
                                var _a, _b;
                                if (item.serial_use_state != ((_a = this.res) === null || _a === void 0 ? void 0 : _a.rsMap[i].serial_use_state))
                                    updateItems.push((_b = this.res) === null || _b === void 0 ? void 0 : _b.rsMap[i]);
                            });
                            if (!this.insert_list.length && !updateItems.length)
                                this._modal.dismiss();
                            else {
                                if (this.insert_list.length) {
                                    // 예외처리 후 하나씩 리스트에 추가해준다. - 모든 api가 호출될때까지 기다린다
                                    insert_promise = yield Promise.all(this.insert_list.map((item) => { return this.SmartSaveMethod(item, 'insert'); }));
                                }
                                if (updateItems.length) {
                                    update_promise = yield Promise.all(updateItems.map((item) => { return this.SmartSaveMethod(item, 'update'); }));
                                }
                                const all_promise = Promise.all([
                                    insert_promise,
                                    update_promise
                                ]);
                                all_promise.then(() => {
                                    this._modal.dismiss(true);
                                });
                            }
                            this._modal.dismiss({ item: this.item, type: 'insert' });
                        })
                    }
                ]
            });
        });
    }
    /**
     * @function openModal_SerialMobile(): 등록을 가져오는 모달(앱일경우에만 사용)
     */
    openModal_SerialMobile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.item.area_risk_id)
                return this.toast.present({ message: '위험지역을 먼저 선택해주세요.', color: 'warning' });
            const modal = yield this._modal.create({
                component: _component_modal_search_serial_number_search_serial_number_component__WEBPACK_IMPORTED_MODULE_3__.SearchSerialNumberComponent,
                componentProps: {
                    form: {
                        serial_type: this.serial_type,
                        project_id: this.form.project_id,
                        master_company_id: this.form.company_id,
                        ctgo_machine_serial_id: 0,
                        search_text: ''
                    },
                    state: 'mobile'
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                const selectedItem = data.selectedItem;
                console.log(selectedItem);
                let addItem = {
                    serial_id: selectedItem.serial_id,
                    serial_no: selectedItem.serial_no,
                    ctgo_machine_serial_id: selectedItem.ctgo_machine_serial_id,
                    ctgo_machine_serial_name: selectedItem.ctgo_machine_serial_name,
                    serial_use_state: 0,
                    serial_type: selectedItem.serial_type,
                    area_risk_id: this.item.area_risk_id,
                    area_risk_name: this.item.area_risk_name,
                    area_top_id: this.item.area_top_id,
                    area_top_name: this.item.area_top_name,
                    area_middle_id: this.item.area_middle_id,
                    area_middle_name: this.item.area_middle_name,
                    area_bottom_id: this.item.area_bottom_id,
                    area_bottom_name: this.item.area_bottom_name,
                    area_full_name: (this.item.area_top_name ? this.item.area_top_name : '') + ' '
                        + (this.item.area_middle_name ? this.item.area_middle_name : '') + ' '
                        + (this.item.area_bottom_name ? this.item.area_bottom_name : '')
                };
                this.insert_list.push(addItem);
            }
        });
    }
    deleteItem(index) {
        this.insert_list.splice(index, 1);
    }
    changePeople(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log(ev);
            if (ev)
                yield this.get(ev);
        });
    }
    /**
     * @function SeariaSaveMethod(): Promise가 적용된 insert/update api 호출메서드 입니다.
     * @param item - insert/update 아이템
     * @param type - 메서드 타입('insert' | 'update')
     * @returns resolve(true)
     */
    SmartSaveMethod(item, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                const res = yield this.connect.run('/device/' + type, item);
                if (res.rsCode === 0) {
                    resolve(true);
                }
                else {
                    this.toast.present({ color: 'warning', message: res.rsMsg });
                    resolve(true);
                }
            }));
        });
    }
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _component_modal_search_dangerous_area_search_dangerous_area_component__WEBPACK_IMPORTED_MODULE_2__.SearchDangerousAreaComponent,
                componentProps: {
                    project_id: this.form.project_id
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                console.log(data);
                this.item = Object.assign(Object.assign({}, this.item), data);
                this.item.area_full_name = (data.area_top_name ? data.area_top_name : '') +
                    ' ' + (data.area_middle_name ? data.area_middle_name : '') +
                    ' ' + (data.area_bottom_name ? data.area_bottom_name : '');
                this.get(data.area_risk_id);
                // setTimeout(() => {
                //   this._modal.dismiss({areaSelectedItem: data, selectType: 'manual'});
                // },300);
            }
        });
    }
};
DangerAreaAddPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: _basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_4__.FileService },
    { type: _basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_7__.ConnectService }
];
DangerAreaAddPage.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    ctgo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    serial_type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
DangerAreaAddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-danger-area-add',
        template: _raw_loader_danger_area_add_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_danger_area_add_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DangerAreaAddPage);



/***/ }),

/***/ 7570:
/*!*****************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/danger-area-add/danger-area-add.page.scss ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".serial-add-class {\n  display: flex;\n}\n\n.serial-add-class h5 {\n  flex: 1;\n}\n\n.serial-add-class app-button {\n  min-height: 30px;\n  height: 30px;\n  margin-top: 23px;\n  font-size: var(--font-size-h5);\n}\n\n.device-delete-btn {\n  z-index: 9999;\n  position: absolute;\n  left: -8px;\n  top: -8px;\n  margin: 0;\n  height: 23px;\n  width: 23px;\n  border-radius: 12px;\n  overflow: hidden;\n  --background: var(--ion-color-danger);\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhbmdlci1hcmVhLWFkZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFhO0FBQ2Q7O0FBRkE7RUFJRSxPQUFPO0FBRVQ7O0FBTkE7RUFRRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFFaEM7O0FBRUE7RUFDSSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixxQ0FBYTtFQUNiLGtCQUFnQjtFQUNoQixnQkFBYztFQUNkLGdCQUFjO0VBQ2QsbUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImRhbmdlci1hcmVhLWFkZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VyaWFsLWFkZC1jbGFzc3tcblx0ZGlzcGxheTogZmxleDtcblxuXHRoNXtcblx0XHRmbGV4OiAxO1xuXHR9XG5cblx0YXBwLWJ1dHRvbntcblx0XHRtaW4taGVpZ2h0OiAzMHB4O1xuXHRcdGhlaWdodDogMzBweDtcblx0XHRtYXJnaW4tdG9wOiAyM3B4O1xuXHRcdGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWg1KTtcblx0fVxufVxuXG4uZGV2aWNlLWRlbGV0ZS1idG57XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLThweDtcbiAgICB0b3A6IC04cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMjNweDtcbiAgICB3aWR0aDogMjNweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG59Il19 */");

/***/ }),

/***/ 29829:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/equipment-management/smart-equipment/danger-area-add/danger-area-add.page.html ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>장소용 디바이스 등록</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <!-- <ion-toolbar color=\"white\">\n    <ion-buttons>\n      <ion-segment color=\"primary\" [(ngModel)]=\"item.ctgo_machine_serial_id\">\n        <ion-segment-button *ngFor=\"let data of ctgo\" [value]=\"data.ctgo_machine_serial_id\">{{ data.ctgo_machine_serial_name }}</ion-segment-button>\n      </ion-segment>\n    </ion-buttons>\n  </ion-toolbar> -->\n</ion-header>\n<ion-content>\n  <app-input label=\"위험지역\" name=\"with img\" [readonly]=\"true\" [(ngModel)]=\"item.area_full_name\" (click)=\"openModal()\">\n    <app-img name=\"search\"></app-img>\n  </app-input>\n  <ng-container>\n    <div class=\"serial-add-class\">\n      <h5>디바이스 등록 현황</h5>\n      <app-button (click)=\"openModal_SerialMobile()\">추가</app-button>\n    </div>\n\n    <!-- Add Item List -->\n    <div style=\"position: relative;\" *ngFor=\"let data of insert_list; let i = index;\">\n      <ion-button (click)=\"deleteItem(i)\" class=\"device-delete-btn\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n\n      <app-card>\n        <app-row>\n          <app-col>\n            <p>디바이스 구분 : {{ data.ctgo_machine_serial_name }}</p>\n            <p>등록 NO : {{ data.serial_no }}</p>\n            <p>등록 타입 : {{ data.serial_type }}</p>\n          </app-col>\n\n          <app-col size=\"3\">\n            <p>사용여부</p>\n            <app-select class=\"use-state-class\" [(ngModel)]=\"data.serial_use_state\">\n              <app-select-option [value]=\"1\">Y</app-select-option>\n              <app-select-option [value]=\"0\">N</app-select-option>\n            </app-select>\n          </app-col>\n        </app-row>\n      </app-card>\n    </div>\n    \n\n    <app-card style=\"position: relative;\" *ngFor=\"let data of res?.rsMap\">\n      <app-row>\n        <app-col>\n          <p>디바이스 구분 : {{ data.ctgo_machine_serial_name }}</p>\n          <p>등록 NO : {{ data.serial_no }}</p>\n          <p>등록 타입 : {{ data.serial_type }}</p>\n        </app-col>\n\n        <app-col size=\"3\">\n          <p>사용여부</p>\n          <app-select class=\"use-state-class\" [(ngModel)]=\"data.serial_use_state\">\n            <app-select-option [value]=\"1\">Y</app-select-option>\n            <app-select-option [value]=\"0\">N</app-select-option>\n          </app-select>\n        </app-col>\n      </app-row>\n    </app-card>\n  </ng-container>\n</ion-content>\n<app-button-footer>\n  <app-button (click)=\"select()\">저장</app-button>\n</app-button-footer>\n\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_equipment-management_smart-equipment_danger-area-add_danger-area-add_module_ts.js.map