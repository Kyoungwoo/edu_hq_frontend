(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_equipment-management_smart-equipment_heavy-device-list_heavy-device-list_module_ts"],{

/***/ 58747:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/heavy-device-list/heavy-device-list-routing.module.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeavyDeviceListPageRoutingModule": () => (/* binding */ HeavyDeviceListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _heavy_device_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heavy-device-list.page */ 33197);




const routes = [
    {
        path: '',
        component: _heavy_device_list_page__WEBPACK_IMPORTED_MODULE_0__.HeavyDeviceListPage
    }
];
let HeavyDeviceListPageRoutingModule = class HeavyDeviceListPageRoutingModule {
};
HeavyDeviceListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HeavyDeviceListPageRoutingModule);



/***/ }),

/***/ 8872:
/*!*********************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/heavy-device-list/heavy-device-list.module.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeavyDeviceListPageModule": () => (/* binding */ HeavyDeviceListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _heavy_qr_view_heavy_qr_view_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../heavy-qr-view/heavy-qr-view.module */ 14162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _heavy_device_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heavy-device-list-routing.module */ 58747);
/* harmony import */ var _heavy_device_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heavy-device-list.page */ 33197);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/component/basic.component.module */ 95511);
/* harmony import */ var _heavy_device_detail_search_heavy_device_detail_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../heavy-device-detail-search/heavy-device-detail-search.module */ 83934);
/* harmony import */ var _heavy_device_add_heavy_device_add_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../heavy-device-add/heavy-device-add.module */ 37809);












let HeavyDeviceListPageModule = class HeavyDeviceListPageModule {
};
HeavyDeviceListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
            src_app_basic_component_basic_component_module__WEBPACK_IMPORTED_MODULE_4__.BasicComponentModule,
            _heavy_device_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.HeavyDeviceListPageRoutingModule,
            _heavy_device_detail_search_heavy_device_detail_search_module__WEBPACK_IMPORTED_MODULE_5__.HeavyDeviceDetailSearchPageModule,
            _heavy_device_add_heavy_device_add_module__WEBPACK_IMPORTED_MODULE_6__.HeavyDeviceAddPageModule,
            _heavy_qr_view_heavy_qr_view_module__WEBPACK_IMPORTED_MODULE_0__.HeavyQrViewPageModule
        ],
        declarations: [_heavy_device_list_page__WEBPACK_IMPORTED_MODULE_2__.HeavyDeviceListPage]
    })
], HeavyDeviceListPageModule);



/***/ }),

/***/ 33197:
/*!*******************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/heavy-device-list/heavy-device-list.page.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeavyDeviceListPage": () => (/* binding */ HeavyDeviceListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_heavy_device_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./heavy-device-list.page.html */ 22878);
/* harmony import */ var _heavy_device_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heavy-device-list.page.scss */ 78673);
/* harmony import */ var _heavy_qr_view_heavy_qr_view_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../heavy-qr-view/heavy-qr-view.page */ 86138);
/* harmony import */ var _basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../basic/service/ionic/loading.service */ 21501);
/* harmony import */ var _basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../basic/service/ionic/alert.service */ 82929);
/* harmony import */ var _basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../basic/service/core/user.service */ 29730);
/* harmony import */ var _basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../basic/service/util/date.service */ 46879);
/* harmony import */ var _basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../basic/service/ionic/toast.service */ 22455);
/* harmony import */ var _basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../basic/service/core/connect.service */ 71090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _heavy_device_add_heavy_device_add_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../heavy-device-add/heavy-device-add.page */ 45734);
/* harmony import */ var _heavy_device_detail_search_heavy_device_detail_search_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../heavy-device-detail-search/heavy-device-detail-search.page */ 94412);














class SmartInfo {
}
class SmartInfoInsertItem {
    constructor() {
        this.ctgo_machine_serial_id = 0;
        this.machinery_id = 0;
        this.serial_id = 0;
        this.serial_use_state = 0;
        this.ctgo_machinery_name = '';
        // assign_user_id: number = 0;
        // assign_user_name:string = '';
        this.serial_no = '';
    }
}
class SmartCtgo {
}
let HeavyDeviceListPage = class HeavyDeviceListPage {
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
        this.serial_type = '중장비';
        /** @param update_state - 현재 업데이트중인지 여부 */
        this.update_state = false;
        /** @param list_state - '전체' or '내 장비' */
        this.list_state = '전체';
        /** @param update_state - 현재 업데이트중인지 여부 */
        // method_type = '';
        this.form = {
            ctgo_machine_serial_id: 0,
            company_id: (this.user.userData.user_type == 'LH' || this.user.userData.user_type == 'SUPER') ? 0 : this.user.userData.belong_data.company_id,
            project_id: this.user.userData.belong_data.project_id,
            search_text: '',
            start_date: this.date.today({ year: -3 }),
            end_date: this.date.today(),
            serial_use_state: '전체'
        };
        /** @param res_original - 원본 데이터(비교용) */
        this.res_original = [];
        /** @param res_insert - 추가할 리스트 */
        this.res_insert = [];
        /** @param searial_ctgo_list - 스마트장비 카테고리 */
        this.smart_ctgo_list = [];
        /** @param selectedList - 체크박스로 선택된 목록 */
        this.selectedList = [];
    }
    ngOnInit() {
        setTimeout(() => {
            this.get();
        }, 300);
    }
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getSmartCtgo();
            yield this.getList();
        });
    }
    /**
     * @function getList(): 중장비 디바이스 목록 가져오기
     */
    getList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let method = yield this.TransMethodType();
            yield this.resetState();
            const res = yield this.connect.run(method, this.form);
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
        });
    }
    /**
     * @function resetState(): 선택리스트, 추가리스트, 업데이트 실행여부 등 스테이터스 초기화
     */
    resetState() {
        this.selectedList = [];
        this.res_insert = [];
        this.update_state = false;
        console.log("update state - ", this.update_state);
    }
    /**
     * @function TransMethodType(): searial_type에 따라서 메서드 URL을 반환해주는 메서드
     */
    TransMethodType() {
        let method = '';
        switch (this.serial_type) {
            case '개인':
                method = '/device/user/list';
                break;
            case '중장비':
                method = '/device/machine/list';
                break;
            case '위험지역':
                method = '/device/risk/list';
                break;
        }
        return method;
    }
    /**
     * @function getSmartCtgo(): 스마트장비 카테고리 목록 가져오기
     */
    getSmartCtgo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/category/serial/machine/get', { serial_type: this.serial_type });
            if (res.rsCode === 0) {
                this.smart_ctgo_list = res.rsMap;
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
        let add_item = new SmartInfoInsertItem();
        if (this.user.userData.user_role === 'PARTNER_HEAD' || this.user.userData.user_role === 'PARTNER_GENERAL') {
            add_item.partner_company_name = this.user.userData.belong_data.company_name;
        }
        else {
            add_item.master_company_name = this.user.userData.belong_data.company_name;
            add_item.partner_company_name = this.user.userData.belong_data.company_name;
        }
        this.res_insert.push(add_item);
    }
    /**
     * @function SmartDelete(): 선택목록 삭제하기 메서드
     */
    SmartDelete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.present({
                message: '삭제 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                            let insert_item = [];
                            let update_item = [];
                            this.selectedList.map((item) => {
                                if (!item.device_id)
                                    insert_item.push(item);
                                if (item.device_id)
                                    update_item.push(item.device_id);
                            });
                            // insert item이 있으면 삭제
                            if (insert_item.length) {
                                insert_item.map((item) => { if (this.res_insert.indexOf(item) != -1)
                                    this.res_insert.splice(this.res_insert.indexOf(item), 1); });
                            }
                            // update item이 있으면 삭제
                            if (update_item.length) {
                                const res = yield this.connect.run('/device/delete', {
                                    device_ids: update_item
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
     * @function SmartSave(): "저장" 버튼을 클릭하면 실행되는 메서드
     */
    SmartSave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alert.present({
                message: '저장 하시겠습니까?',
                buttons: [
                    { text: '아니요' },
                    {
                        text: '예',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                            let case_1 = false; // 장비구분을 하나라도 선택 안했을때
                            let case_2 = false; // serial_id를 하나라도 선택 안했을때
                            let case_3 = false; // 성명을 하나라도 선택 안했을때
                            let insert_promise = null;
                            let update_promise = null;
                            // 추가한 리스트 인서트
                            let loadingCus = yield this.loading.present();
                            if (this.res_insert.length) {
                                this.res_insert.map((item, index) => {
                                    if (!item.ctgo_machine_serial_id)
                                        case_1 = true;
                                    if (!item.serial_id)
                                        case_2 = true;
                                    if (!item.machinery_id)
                                        case_3 = true;
                                });
                                if (case_1) {
                                    yield loadingCus.dismiss();
                                    return this.toast.present({ color: 'warning', message: '장비구분을 선택해주세요.' });
                                }
                                if (case_2) {
                                    yield loadingCus.dismiss();
                                    return this.toast.present({ color: 'warning', message: '등록 NO를 선택해주세요.' });
                                }
                                if (case_3) {
                                    yield loadingCus.dismiss();
                                    return this.toast.present({ color: 'warning', message: '장비구분을 선택해주세요.' });
                                }
                                console.log(this.res_insert);
                                // 예외처리 후 하나씩 리스트에 추가해준다. - 모든 api가 호출될때까지 기다린다
                                insert_promise = yield Promise.all(this.res_insert.map((item) => { return this.SmartSaveMethod(item, 'insert'); }));
                            }
                            // 수정된 아이템 찾기
                            let changeed_itemIndex = [];
                            if (this.res) {
                                console.log(this.res);
                                for (let i = 0; i < this.res.rsMap.length; i++) {
                                    if (this.res.rsMap[i].ctgo_machine_serial_id !== this.res_original[i].ctgo_machine_serial_id ||
                                        this.res.rsMap[i].serial_id !== this.res_original[i].serial_id ||
                                        this.res.rsMap[i].machinery_id !== this.res_original[i].machinery_id ||
                                        this.res.rsMap[i].serial_use_state !== this.res_original[i].serial_use_state)
                                        changeed_itemIndex.push(this.res.rsMap[i]);
                                }
                            }
                            // 한개라도 바뀐 아이템이 있으면 수정 실행
                            if (changeed_itemIndex.length) {
                                // 수정된 아이템들 업데이트하기 - 모든 api를 호출할때까지 기다린다
                                update_promise = yield Promise.all(changeed_itemIndex.map((item) => { return this.SmartSaveMethod(item, 'update'); }));
                            }
                            const all_promise = Promise.all([
                                insert_promise,
                                update_promise
                            ]);
                            yield all_promise.then(() => {
                                if (changeed_itemIndex.length || this.res_insert.length)
                                    this.getList();
                                loadingCus.dismiss();
                            });
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
    SmartSaveMethod(item, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
    /**
     * @function openDetailSearch(): 상세검색필터 모달
     */
    openDetailSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _heavy_device_detail_search_heavy_device_detail_search_page__WEBPACK_IMPORTED_MODULE_10__.HeavyDeviceDetailSearchPage,
                componentProps: {
                    form: this.form,
                    smart_ctgo_list: this.smart_ctgo_list
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                this.form = data.form;
                this.get();
            }
        });
    }
    /**
     * @function edit(): 등록 모달
     */
    edit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _heavy_device_add_heavy_device_add_page__WEBPACK_IMPORTED_MODULE_9__.HeavyDeviceAddPage,
                componentProps: {
                    form: this.form,
                    item: new SmartInfoInsertItem(),
                    list: this.res_original,
                    ctgo: this.smart_ctgo_list,
                    serial_type: this.serial_type
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            // this.SmartSaveMethod(<SmartInfo>data.item, data.type);
            if (data)
                this.getList();
        });
    }
    openModal_QR(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _heavy_qr_view_heavy_qr_view_page__WEBPACK_IMPORTED_MODULE_2__.HeavyQrViewPage,
                cssClass: 'danger-qr-view-modal',
                componentProps: {
                    item: item
                }
            });
            modal.present();
        });
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
HeavyDeviceListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService },
    { type: _basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_8__.ConnectService },
    { type: _basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_6__.DateService },
    { type: _basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _basic_service_ionic_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _basic_service_ionic_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService }
];
HeavyDeviceListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-heavy-device-list',
        template: _raw_loader_heavy_device_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_heavy_device_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeavyDeviceListPage);



/***/ }),

/***/ 78673:
/*!*********************************************************************************************************!*\
  !*** ./src/app/page/equipment-management/smart-equipment/heavy-device-list/heavy-device-list.page.scss ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".center-class {\n  text-align: center;\n}\n\ntd {\n  vertical-align: middle !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYXZ5LWRldmljZS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNJLGlDQUFnQztBQUNwQyIsImZpbGUiOiJoZWF2eS1kZXZpY2UtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLWNsYXNze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGR7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ 22878:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/equipment-management/smart-equipment/heavy-device-list/heavy-device-list.page.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- pc -->\n<ng-container *mobileHidden>\n  <app-header-admin></app-header-admin>\n  <ion-content>\n    <app-row style=\"align-items: flex-start;\">\n      <app-col size=\"280px\">\n        <app-table type=\"card\">\n          <ion-toolbar slot=\"top\" color=\"white\">\n            <app-row style=\"justify-content: space-between;\">\n              <app-col size=\"auto\"><h5>필터</h5></app-col>\n              <app-col size=\"auto\"><app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"getList()\">검색</app-button></app-col>\n            </app-row>\n          </ion-toolbar>\n          <tbody>\n            <tr>\n              <td>\n                <app-select-scene name=\"project_id\" [(ngModel)]=\"form.project_id\"></app-select-scene>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select-contractor [project_id]=\"form.project_id\" [(ngModel)]=\"form.company_id\"></app-select-contractor>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-select label=\"스마트 장비\" [(ngModel)]=\"form.ctgo_machine_serial_id\">\n                  <app-select-option [value]=\"0\">전체</app-select-option>\n                  <app-select-option *ngFor=\"let item of smart_ctgo_list\" [value]=\"item.ctgo_machine_serial_id\">{{ item.ctgo_machine_serial_name }}</app-select-option>\n                </app-select>\n              </td> \n            </tr>\n            <tr>\n              <td>\n                <app-select label=\"사용여부\" [(ngModel)]=\"form.serial_use_state\">\n                  <app-select-option value=\"전체\">전체</app-select-option>\n                  <app-select-option value=\"Y\">사용중</app-select-option>\n                  <app-select-option value=\"N\">미사용</app-select-option>\n                </app-select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input-group label=\"배정일\">\n                  <app-calendar [(ngModel)]=\"form.start_date\" [max]=\"form.end_date\"></app-calendar>\n                  ~\n                  <app-calendar [(ngModel)]=\"form.end_date\" [min]=\"form.start_date\"></app-calendar>\n                </app-input-group>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <app-input label=\"검색어\" placeholder=\"검색어를 입력해 주세요.\" [(ngModel)]=\"form.search_text\"></app-input>\n              </td>\n            </tr>\n          </tbody>\n        </app-table>\n      </app-col>\n      <app-col>\n        <ion-toolbar color=\"white\">\n          <ion-buttons slot=\"start\">\n            <app-button *ngIf=\"btnPromise('insert')\" fill=\"translucent\" (click)=\"addButton()\">추가</app-button>\n            <app-button *ngIf=\"btnPromise('update')\" [disabled]=\"update_state\" fill=\"translucent\" (click)=\"update_state = true\">수정</app-button>\n            <app-button *ngIf=\"btnPromise('delete')\" fill=\"translucent\" color=\"danger\" (click)=\"SmartDelete()\">삭제</app-button>\n            <app-button *ngIf=\"btnPromise('update')\" [disabled]=\"!update_state && !res_insert.length\" fill=\"translucent\" (click)=\"SmartSave()\">저장</app-button>\n          </ion-buttons>\n        </ion-toolbar>\n        <ion-toolbar color=\"white\">\n          <h5>장비 목록 (총 {{res?.rsObj?.row_count || 0 }}건)</h5>\n        </ion-toolbar>\n        <app-check-group [(ngModel)]=\"selectedList\">\n          <app-table>\n            <thead>\n              <tr>\n                <th *ngIf=\"btnPromise('delete_check')\" style=\"width: 40px;\"><app-check type=\"all\" color=\"white\" size=\"small\" name=\"check\"></app-check></th>\n                <th>스마트 장비</th>\n                <th>관리번호</th>\n                <!-- <th>등록번호</th> -->\n                <!-- <th>원청사명</th> -->\n                <th>업체명</th>\n                <th>건설기계</th>\n                <!-- <th>QR코드</th> -->\n                <th>배정일시</th>\n                <th>사용여부</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of res_insert\">\n                <td *ngIf=\"btnPromise('delete_check')\" style=\"width: 40px;\"><app-check [on]=\"item\" color=\"white\" size=\"small\" name=\"check\"></app-check></td>\n                <td>\n                  <app-select label=\"\" [(ngModel)]=\"item.ctgo_machine_serial_id\">\n                    <app-select-option *ngFor=\"let ctgo of smart_ctgo_list\" [value]=\"ctgo.ctgo_machine_serial_id\">{{ ctgo.ctgo_machine_serial_name }}</app-select-option>\n                  </app-select>\n                </td>\n                <td>\n                  <app-select-serial-number [ctgo_machine_serial_id]=\"item.ctgo_machine_serial_id\" [project_id]=\"form.project_id\" [master_company_id]=\"form.company_id\" [text]=\"item.serial_no\" [(ngModel)]=\"item.serial_id\"></app-select-serial-number>\n                </td>\n\n                <!-- <td [class.center-class]=\"!item.machinery_regist_no\">{{ item.machinery_regist_no ? item.machinery_regist_no : ' - ' }}</td> -->\n                <!-- <td [class.center-class]=\"!item.master_company_name\">{{ item.master_company_name ? item.master_company_name : ' - ' }}</td> -->\n                <td [class.center-class]=\"!item.partner_company_name\">{{ item.partner_company_name ? item.partner_company_name : ' - ' }}</td>\n                <td>\n                  <app-select-heavy [project_id]=\"form.project_id\" [master_company_id]=\"form.company_id\" [text]=\"item\" [(ngModel)]=\"item.machinery_id\" label=\"\"></app-select-heavy>\n                </td>\n                <!-- <td> - </td> -->\n                <td class=\"center-class\"> - </td>\n                <td>\n                  <app-select [(ngModel)]=\"item.serial_use_state\">\n                    <app-select-option [value]=\"1\">Y</app-select-option>\n                    <app-select-option [value]=\"0\">N</app-select-option>\n                  </app-select>\n                </td>\n              </tr>\n              \n              <tr *ngFor=\"let item of res?.rsMap\">\n                <td style=\"width: 40px;\"><app-check [on]=\"item\" color=\"white\" size=\"small\" name=\"check\"></app-check></td>\n                <td>\n                  <app-select label=\"\" [disabled]=\"!update_state\" [(ngModel)]=\"item.ctgo_machine_serial_id\">\n                    <app-select-option *ngFor=\"let ctgo of smart_ctgo_list\" [value]=\"ctgo.ctgo_machine_serial_id\">{{ ctgo.ctgo_machine_serial_name }}</app-select-option>\n                  </app-select>\n                </td>\n                <td [class.center-class]=\"!item.serial_id\">\n                  <app-select-serial-number [ctgo_machine_serial_id]=\"item.ctgo_machine_serial_id\" *ngIf=\"item.serial_id || update_state\" [disabled]=\"!update_state\" [project_id]=\"form.project_id\" [master_company_id]=\"form.company_id\" [text]=\"item.serial_no\" [(ngModel)]=\"item.serial_id\"></app-select-serial-number>\n                  {{ (item.serial_id || (!item.serial_id && update_state)) ? '' : ' - ' }}\n                </td>\n\n                <!-- <td [class.center-class]=\"!item.machinery_regist_no\">{{ item.machinery_regist_no ? item.machinery_regist_no : ' - ' }}</td> -->\n                <!-- <td [class.center-class]=\"!item.master_company_name\">{{ item.master_company_name ? item.master_company_name : ' - ' }}</td> -->\n                <td [class.center-class]=\"!item.partner_company_name\">{{ item.partner_company_name ? item.partner_company_name : ' - ' }}</td>\n                <td [class.center-class]=\"!item.machinery_id\">\n                  <app-select-heavy *ngIf=\"item.machinery_id || update_state\" [disabled]=\"!update_state\" [project_id]=\"form.project_id\" [master_company_id]=\"form.company_id\" [text]=\"item\" [(ngModel)]=\"item.machinery_id\" label=\"\"></app-select-heavy>\n                  {{ (item.machinery_id || (!item.machinery_id && update_state)) ? '' : ' - ' }}\n                </td>\n                <!-- <td class=\"center-class\">\n                  <app-button size=\"small\" fill=\"clear\" style=\"width:100%;\" (click)=\"openModal_QR(item)\">\n                    <app-img name=\"search\"></app-img>\n                  </app-button>\n                </td> -->\n                <td [class.center-class]=\"!item.create_date\">{{ item.create_date ? item.create_date : ' - ' }}</td>\n                <td>\n                  <app-select [(ngModel)]=\"item.serial_use_state\" [disabled]=\"!update_state\">\n                    <app-select-option [value]=\"1\">Y</app-select-option>\n                    <app-select-option [value]=\"0\">N</app-select-option>\n                  </app-select>\n                </td>\n              </tr>\n            </tbody>\n          </app-table>\n        </app-check-group>\n      </app-col>\n    </app-row> \n  </ion-content>\n</ng-container>\n\n  <!-- 모바일 -->\n  <ng-container *mobileShow>\n  <ion-header>\n    <ion-toolbar color=\"white\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>중장비 디바이스</ion-title>\n      <ion-buttons slot=\"end\">\n        <app-menu-button></app-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar color=\"white\">\n      <app-input-group>\n        <app-select-scene [disabled]=\"true\" name=\"project_id\" [(ngModel)]=\"form.project_id\"></app-select-scene>\n        <app-button (click)=\"openDetailSearch()\">상세검색</app-button>\n      </app-input-group>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ng-container>\n      <app-card *ngFor=\"let item of res?.rsMap\">\n        <app-row style=\"align-items: flex-start;\">\n          <app-col>\n            <p>{{ item.partner_company_name }}/{{ item.ctgo_machinery_name }}/{{ item.machinery_regist_no }}</p>\n            <p>{{ item.serial_no }}/{{ item.create_date }}</p>\n          </app-col>\n          <app-col size=\"auto\">\n          </app-col>\n        </app-row>\n        <app-row style=\"align-items: flex-start;\">\n          <app-col><ion-badge color=\"success\">{{ item.ctgo_machine_serial_name }}</ion-badge></app-col>\n        </app-row>\n      </app-card>\n    </ng-container>\n  </ion-content>\n  <app-button-footer *ngIf=\"btnPromise('insert')\">\n    <app-button (click)=\"edit()\">신규배정</app-button>\n  </app-button-footer>\n</ng-container>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_equipment-management_smart-equipment_heavy-device-list_heavy-device-list_module_ts.js.map