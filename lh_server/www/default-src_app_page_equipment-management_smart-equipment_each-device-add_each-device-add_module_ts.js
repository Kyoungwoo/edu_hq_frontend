(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["default-src_app_page_equipment-management_smart-equipment_each-device-add_each-device-add_module_ts"],{

/***/ 62706:
/*!*************************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/each-device-add/each-device-add-routing.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EachDeviceAddPageRoutingModule": () => (/* binding */ EachDeviceAddPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _each_device_add_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./each-device-add.page */ 53836);




const routes = [
    {
        path: '',
        component: _each_device_add_page__WEBPACK_IMPORTED_MODULE_0__.EachDeviceAddPage
    }
];
let EachDeviceAddPageRoutingModule = class EachDeviceAddPageRoutingModule {
};
EachDeviceAddPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EachDeviceAddPageRoutingModule);



/***/ }),

/***/ 29386:
/*!*****************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/each-device-add/each-device-add.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EachDeviceAddPageModule": () => (/* binding */ EachDeviceAddPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _each_device_add_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./each-device-add-routing.module */ 62706);
/* harmony import */ var _each_device_add_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each-device-add.page */ 53836);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);









let EachDeviceAddPageModule = class EachDeviceAddPageModule {
};
EachDeviceAddPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_3__.BasicComponentModule,
            _each_device_add_routing_module__WEBPACK_IMPORTED_MODULE_0__.EachDeviceAddPageRoutingModule
        ],
        declarations: [_each_device_add_page__WEBPACK_IMPORTED_MODULE_1__.EachDeviceAddPage]
    })
], EachDeviceAddPageModule);



/***/ }),

/***/ 53836:
/*!***************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/each-device-add/each-device-add.page.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EachDeviceAddPage": () => (/* binding */ EachDeviceAddPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_each_device_add_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./each-device-add.page.html */ 48676);
/* harmony import */ var _each_device_add_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each-device-add.page.scss */ 66769);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/core/file.service */ 89613);
/* harmony import */ var _component_modal_search_serial_number_search_serial_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../component/modal/search-serial-number/search-serial-number.component */ 50171);
/* harmony import */ var _basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../basic/service/ionic/alert.service */ 82929);
/* harmony import */ var _basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../basic/service/ionic/toast.service */ 22455);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);










class SmartInfoInsertItem {
    constructor() {
        this.ctgo_machine_serial_id = 0;
        this.ctgo_machine_serial_name = '';
        this.serial_id = 0;
        this.serial_use_state = 0;
        this.assign_user_id = 0;
        this.assign_user_name = '';
        this.serial_no = '';
        this.serial_type = '';
    }
}
let EachDeviceAddPage = class EachDeviceAddPage {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/device/user/mo/list', { user_id: id });
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.present({
                message: '저장 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.item.assign_user_id)
                return this.toast.present({ message: '성명을 먼저 선택해주세요.', color: 'warning' });
            const modal = yield this._modal.create({
                component: _component_modal_search_serial_number_search_serial_number_component__WEBPACK_IMPORTED_MODULE_4__.SearchSerialNumberComponent,
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
                    assign_user_id: this.item.assign_user_id,
                    assign_user_name: this.item.assign_user_name,
                    serial_id: selectedItem.serial_id,
                    serial_no: selectedItem.serial_no,
                    ctgo_machine_serial_id: selectedItem.ctgo_machine_serial_id,
                    ctgo_machine_serial_name: selectedItem.ctgo_machine_serial_name,
                    serial_use_state: 0,
                    serial_type: selectedItem.serial_type
                };
                this.insert_list.push(addItem);
            }
        });
    }
    deleteItem(index) {
        this.insert_list.splice(index, 1);
    }
    changePeople(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
};
EachDeviceAddPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService },
    { type: _basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: src_app_basic_service_core_file_service__WEBPACK_IMPORTED_MODULE_3__.FileService },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService }
];
EachDeviceAddPage.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    ctgo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    serial_type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
EachDeviceAddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-each-device-add',
        template: _raw_loader_each_device_add_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_each_device_add_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EachDeviceAddPage);



/***/ }),

/***/ 66769:
/*!*****************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/each-device-add/each-device-add.page.scss ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".serial-add-class {\n  display: flex;\n}\n\n.serial-add-class h5 {\n  flex: 1;\n}\n\n.serial-add-class app-button {\n  min-height: 30px;\n  height: 30px;\n  margin-top: 23px;\n  font-size: var(--font-size-h5);\n}\n\n.device-delete-btn {\n  z-index: 9999;\n  position: absolute;\n  left: -8px;\n  top: -8px;\n  margin: 0;\n  height: 23px;\n  width: 23px;\n  border-radius: 12px;\n  overflow: hidden;\n  --background: var(--ion-color-danger);\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVhY2gtZGV2aWNlLWFkZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDQyxhQUFhO0FBSGQ7O0FBRUE7RUFJRSxPQUFPO0FBRlQ7O0FBRkE7RUFRRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFGaEM7O0FBTUE7RUFDSSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixxQ0FBYTtFQUNiLGtCQUFnQjtFQUNoQixnQkFBYztFQUNkLGdCQUFjO0VBQ2QsbUJBQWlCO0FBSHJCIiwiZmlsZSI6ImVhY2gtZGV2aWNlLWFkZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAtYnV0dG9uIHtcbi8vIFx0ZGlzcGxheTogYmxvY2s7XG4vLyB9XG5cbi5zZXJpYWwtYWRkLWNsYXNze1xuXHRkaXNwbGF5OiBmbGV4O1xuXG5cdGg1e1xuXHRcdGZsZXg6IDE7XG5cdH1cblxuXHRhcHAtYnV0dG9ue1xuXHRcdG1pbi1oZWlnaHQ6IDMwcHg7XG5cdFx0aGVpZ2h0OiAzMHB4O1xuXHRcdG1hcmdpbi10b3A6IDIzcHg7XG5cdFx0Zm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDUpO1xuXHR9XG59XG5cbi5kZXZpY2UtZGVsZXRlLWJ0bntcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtOHB4O1xuICAgIHRvcDogLThweDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAyM3B4O1xuICAgIHdpZHRoOiAyM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbn0iXX0= */");

/***/ }),

/***/ 48676:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/equipment-management/smart-equipment/each-device-add/each-device-add.page.html ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>개인용 디바이스 등록</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <!-- <ion-toolbar color=\"white\">\n    <ion-buttons>\n      <ion-segment color=\"primary\" [(ngModel)]=\"item.ctgo_machine_serial_id\">\n        <ion-segment-button *ngFor=\"let data of ctgo\" [value]=\"data.ctgo_machine_serial_id\">{{ data.ctgo_machine_serial_name }}</ion-segment-button>\n      </ion-segment>\n    </ion-buttons>\n  </ion-toolbar> -->\n</ion-header>\n<ion-content>\n  <app-select-people-all (ngModelChange)=\"changePeople($event)\" label=\"성명\" [project_id]=\"form.project_id\" [master_company_id]=\"form.company_id\" [(ngModel)]=\"item.assign_user_id\" [text]=\"item.assign_user_name\"></app-select-people-all>\n  <!-- <app-select-serial-number label=\"등록No\" [project_id]=\"form.project_id\" [master_company_id]=\"form.company_id\" [text]=\"item.serial_no\" [(ngModel)]=\"item.serial_id\"></app-select-serial-number> -->\n  <ng-container>\n    <div class=\"serial-add-class\">\n      <h5>디바이스 등록 현황</h5>\n      <app-button (click)=\"openModal_SerialMobile()\">추가</app-button>\n    </div>\n\n    <!-- Add Item List -->\n    <div style=\"position: relative;\" *ngFor=\"let data of insert_list; let i = index;\">\n      <ion-button (click)=\"deleteItem(i)\" class=\"device-delete-btn\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n\n      <app-card>\n        <app-row>\n          <app-col>\n            <p>디바이스 구분 : {{ data.ctgo_machine_serial_name }}</p>\n            <p>등록 NO : {{ data.serial_no }}</p>\n            <p>등록 타입 : {{ data.serial_type }}</p>\n          </app-col>\n\n          <app-col size=\"3\">\n            <p>사용여부</p>\n            <app-select class=\"use-state-class\" [(ngModel)]=\"data.serial_use_state\">\n              <app-select-option [value]=\"1\">Y</app-select-option>\n              <app-select-option [value]=\"0\">N</app-select-option>\n            </app-select>\n          </app-col>\n        </app-row>\n      </app-card>\n    </div>\n    \n\n    <app-card style=\"position: relative;\" *ngFor=\"let data of res?.rsMap\">\n      <app-row>\n        <app-col>\n          <p>디바이스 구분 : {{ data.ctgo_machine_serial_name }}</p>\n          <p>등록 NO : {{ data.serial_no }}</p>\n          <p>등록 타입 : {{ data.serial_type }}</p>\n        </app-col>\n\n        <app-col size=\"3\">\n          <p>사용여부</p>\n          <app-select class=\"use-state-class\" [(ngModel)]=\"data.serial_use_state\">\n            <app-select-option [value]=\"1\">Y</app-select-option>\n            <app-select-option [value]=\"0\">N</app-select-option>\n          </app-select>\n        </app-col>\n      </app-row>\n    </app-card>\n  </ng-container>\n</ion-content>\n<app-button-footer>\n  <app-button (click)=\"select()\">저장</app-button>\n</app-button-footer>\n\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_page_equipment-management_smart-equipment_each-device-add_each-device-add_module_ts.js.map