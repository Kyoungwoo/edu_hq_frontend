(self["webpackChunkionic_angulart_starter"] = self["webpackChunkionic_angulart_starter"] || []).push([["src_app_page_monitor_monitor_module_ts"],{

/***/ 60559:
/*!********************************************************!*\
  !*** ./src/app/page/monitor/monitor-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorPageRoutingModule": () => (/* binding */ MonitorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _monitor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor.page */ 48219);




const routes = [
    {
        path: '',
        component: _monitor_page__WEBPACK_IMPORTED_MODULE_0__.MonitorPage
    },
    {
        path: 'monitor-smart-equip-edit',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./monitor-smart-equip-edit/monitor-smart-equip-edit.module */ 62253)).then(m => m.MonitorSmartEquipEditPageModule)
    },
    {
        path: 'monitor-worker-location',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./monitor-worker-location/monitor-worker-location.module */ 65196)).then(m => m.MonitorWorkerLocationPageModule)
    },
    {
        path: 'monitor-cctv-list',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./monitor-cctv-list/monitor-cctv-list.module */ 95286)).then(m => m.MonitorCctvListPageModule)
    },
    {
        path: 'monitor-cctv-edit',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./monitor-cctv-edit/monitor-cctv-edit.module */ 39555)).then(m => m.MonitorCctvEditPageModule)
    }
];
let MonitorPageRoutingModule = class MonitorPageRoutingModule {
};
MonitorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MonitorPageRoutingModule);



/***/ }),

/***/ 69409:
/*!**************************************************************************************************!*\
  !*** ./src/app/page/monitor/monitor-smart-equip-edit/monitor-smart-equip-edit-routing.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorSmartEquipEditPageRoutingModule": () => (/* binding */ MonitorSmartEquipEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _monitor_smart_equip_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor-smart-equip-edit.page */ 21906);




const routes = [
    {
        path: '',
        component: _monitor_smart_equip_edit_page__WEBPACK_IMPORTED_MODULE_0__.MonitorSmartEquipEditPage
    }
];
let MonitorSmartEquipEditPageRoutingModule = class MonitorSmartEquipEditPageRoutingModule {
};
MonitorSmartEquipEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MonitorSmartEquipEditPageRoutingModule);



/***/ }),

/***/ 62253:
/*!******************************************************************************************!*\
  !*** ./src/app/page/monitor/monitor-smart-equip-edit/monitor-smart-equip-edit.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorSmartEquipEditPageModule": () => (/* binding */ MonitorSmartEquipEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _monitor_smart_equip_edit_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitor-smart-equip-edit-routing.module */ 69409);
/* harmony import */ var _monitor_smart_equip_edit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monitor-smart-equip-edit.page */ 21906);








let MonitorSmartEquipEditPageModule = class MonitorSmartEquipEditPageModule {
};
MonitorSmartEquipEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
            _monitor_smart_equip_edit_routing_module__WEBPACK_IMPORTED_MODULE_1__.MonitorSmartEquipEditPageRoutingModule
        ],
        declarations: [_monitor_smart_equip_edit_page__WEBPACK_IMPORTED_MODULE_2__.MonitorSmartEquipEditPage]
    })
], MonitorSmartEquipEditPageModule);



/***/ }),

/***/ 21906:
/*!****************************************************************************************!*\
  !*** ./src/app/page/monitor/monitor-smart-equip-edit/monitor-smart-equip-edit.page.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorSmartEquipEditPage": () => (/* binding */ MonitorSmartEquipEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_monitor_smart_equip_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./monitor-smart-equip-edit.page.html */ 78118);
/* harmony import */ var _monitor_smart_equip_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitor-smart-equip-edit.page.scss */ 44849);
/* harmony import */ var _basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../basic/service/core/user.service */ 29730);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);







let MonitorSmartEquipEditPage = class MonitorSmartEquipEditPage {
    constructor(connect, toast, user) {
        this.connect = connect;
        this.toast = toast;
        this.user = user;
        /**
         * @var smart_option - 구분 셀렉트 아이템 변수
         */
        this.smart_option = [
            {
                text: '구조물 변위 감지',
                ctgo_machine_serial_id: 8
            },
            {
                text: '크레인 상하차 감지',
                ctgo_machine_serial_id: 4
            },
            {
                text: '밀폐공간 유해물질 감지',
                ctgo_machine_serial_id: 7
            }
        ];
        /**
         * @var total_count - 총 보유대수
         * @var using_total_count - 총 가동대수
         */
        this.total_count = 0;
        this.using_total_count = 0;
        /**
         * @var form - 메서드 호출용 필수 변수모음
         */
        this.form = {
            project_id: 1,
            master_company_id: 0,
            ctgo_machine_serial_id: 0
        };
        /**
         * @var original_items - 원본 데이터 저장용
         */
        this.original_items = [];
    }
    ngOnInit() {
        this.form = Object.assign(Object.assign({}, this.form), this.item);
        // this.getForm();
        this.get();
    }
    getForm() {
        const { belong_data } = this.user.userData;
        this.form.project_id = belong_data.project_id;
        this.form.master_company_id = belong_data.master_company_id;
    }
    /**
     * @function get(): 개별현장 스마트 장비 리스트를 불러오는 메서드
     */
    get() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.res = yield this.connect.run('/integrated/smart_equip_list', this.form);
            if (this.res.rsCode === 0) {
                let total = 0;
                let using_total = 0;
                this.res.rsMap.map((item) => {
                    total = total + item.machine_count;
                    using_total = using_total + item.mmachine_using_count;
                });
                // 원본데이터 저장
                this.original_items = JSON.parse(JSON.stringify(this.res.rsMap));
                this.total_count = total;
                this.using_total_count = using_total;
            }
            else if (this.res.rsCode === 1008) {
                // 암것도 안함
            }
            else {
                this.toast.present({ message: this.res.rsMsg, color: 'warning' });
            }
        });
    }
    /**
     * @function edit(): 개별현장 스마트 장비 리스트를 수정하는 메서드
     */
    edit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let edit_items = [];
            this.res.rsMap.map((item) => {
                this.original_items.map((original_item) => {
                    if (Number(original_item.master_company_id) === Number(item.master_company_id)
                        && Number(original_item.ctgo_machine_serial_id) === Number(item.ctgo_machine_serial_id)
                        && Number(original_item.mmachine_using_count) !== Number(item.mmachine_using_count)) {
                        edit_items.push(item);
                    }
                });
            });
            if (!edit_items.length)
                return this.toast.present({ message: '변경된 내용이 없습니다.', color: 'warning' });
            let validation_state = true;
            edit_items.map((item) => {
                if (Number(item.mmachine_using_count) > Number(item.machine_count))
                    validation_state = false;
            });
            if (!validation_state)
                return this.toast.present({ message: '가동중 값은 보유대수보다 높을수 없습니다.', color: 'warning' });
            yield edit_items.map((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                yield this.edit_items({
                    ctgo_machine_serial_id: item.ctgo_machine_serial_id,
                    in_operation_cnt: Number(item.mmachine_using_count),
                    master_company_id: item.master_company_id,
                    project_id: this.form.project_id
                });
            }));
            yield this.toast.present({ message: '내용이 적용되었습니다.' });
            setTimeout(() => { this.get(); }, 300);
        });
    }
    /**
     * @function edit_items(): 수정 메서드 실행
     */
    edit_items(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.res = yield this.connect.run('/integrated/smart_equip_update', item);
            if (this.res.rsCode === 0) {
            }
            else {
                // this.toast.present({message:this.res.rsMsg, color:'warning'});
            }
        });
    }
};
MonitorSmartEquipEditPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_4__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService },
    { type: _basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
MonitorSmartEquipEditPage.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
MonitorSmartEquipEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-monitor-smart-equip-edit',
        template: _raw_loader_monitor_smart_equip_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_monitor_smart_equip_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MonitorSmartEquipEditPage);



/***/ }),

/***/ 87637:
/*!************************************************************************************************!*\
  !*** ./src/app/page/monitor/monitor-worker-location/monitor-worker-location-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorWorkerLocationPageRoutingModule": () => (/* binding */ MonitorWorkerLocationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _monitor_worker_location_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor-worker-location.page */ 54987);




const routes = [
    {
        path: '',
        component: _monitor_worker_location_page__WEBPACK_IMPORTED_MODULE_0__.MonitorWorkerLocationPage
    }
];
let MonitorWorkerLocationPageRoutingModule = class MonitorWorkerLocationPageRoutingModule {
};
MonitorWorkerLocationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MonitorWorkerLocationPageRoutingModule);



/***/ }),

/***/ 65196:
/*!****************************************************************************************!*\
  !*** ./src/app/page/monitor/monitor-worker-location/monitor-worker-location.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorWorkerLocationPageModule": () => (/* binding */ MonitorWorkerLocationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _monitor_worker_location_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor-worker-location-routing.module */ 87637);
/* harmony import */ var _monitor_worker_location_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitor-worker-location.page */ 54987);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let MonitorWorkerLocationPageModule = class MonitorWorkerLocationPageModule {
};
MonitorWorkerLocationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _monitor_worker_location_routing_module__WEBPACK_IMPORTED_MODULE_0__.MonitorWorkerLocationPageRoutingModule
        ],
        declarations: [_monitor_worker_location_page__WEBPACK_IMPORTED_MODULE_1__.MonitorWorkerLocationPage],
        exports: [_monitor_worker_location_page__WEBPACK_IMPORTED_MODULE_1__.MonitorWorkerLocationPage]
    })
], MonitorWorkerLocationPageModule);



/***/ }),

/***/ 54987:
/*!**************************************************************************************!*\
  !*** ./src/app/page/monitor/monitor-worker-location/monitor-worker-location.page.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorWorkerLocationPage": () => (/* binding */ MonitorWorkerLocationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_monitor_worker_location_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./monitor-worker-location.page.html */ 75166);
/* harmony import */ var _monitor_worker_location_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitor-worker-location.page.scss */ 74351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);





let MonitorWorkerLocationPage = class MonitorWorkerLocationPage {
    constructor(el, connect) {
        this.el = el;
        this.connect = connect;
        this.form = {
            company_id: 0,
            ctgo_construction_id: 0,
            master_company_id: 0,
            project_id: 0,
            search_text: '',
            user_type: '전체'
        };
        this.gpsData = [];
        this.gps_coordinate_data = null;
        /* event = {
          resize: null
        }
        mapSize = {
          height: 0
        } */
        this.gps_interval = null;
    }
    set project_id(v) {
        this.form.project_id = v;
        this.getProjectGps();
    }
    set master_company_id(v) {
        this.form.master_company_id = v;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.gps_interval = setInterval(() => {
                this.get();
            }, 3000);
        });
    }
    /**
     * @function ngOnDestroy(): 해당 페이지가 없어지면 걸려있던 subscribe 및 interval을 해제해줍니다.
     */
    ngOnDestroy() {
        if (this.gps_interval)
            clearInterval(this.gps_interval);
    }
    /* ngAfterViewInit() {
      this.event.resize = this.resizeEvent.bind(this);
      window.addEventListener('resize', this.event.resize);
    }
    resizeEvent() {
      const el = this.el.nativeElement.getElementsByClassName('inner-scroll')[0];
    } */
    get() {
        this.getGps();
        this.wokerInGetList();
    }
    getGps() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/integrated/gps/log', this.form);
            if (res.rsCode === 0) {
                this.gpsData = res.rsMap;
            }
            else {
                this.gpsData = [];
            }
        });
    }
    getProjectGps() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/project/detail', this.form, { parse: ['gps_coordinate_data'] });
            if (res.rsCode === 0)
                this.gps_coordinate_data = res.rsObj.gps_coordinate_data;
        });
    }
    wokerInGetList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.workerInRes = yield this.connect.run('/integrated/worker/in/list', this.form);
        });
    }
};
MonitorWorkerLocationPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef },
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService }
];
MonitorWorkerLocationPage.propDecorators = {
    project_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    master_company_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
MonitorWorkerLocationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-monitor-worker-location',
        template: _raw_loader_monitor_worker_location_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_monitor_worker_location_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MonitorWorkerLocationPage);



/***/ }),

/***/ 48055:
/*!************************************************!*\
  !*** ./src/app/page/monitor/monitor.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitorPageModule": () => (/* binding */ MonitorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _basic_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../basic/pipes/pipes.module */ 75180);
/* harmony import */ var _monitor_cctv_edit_monitor_cctv_edit_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitor-cctv-edit/monitor-cctv-edit.module */ 39555);
/* harmony import */ var _monitor_cctv_list_monitor_cctv_list_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./monitor-cctv-list/monitor-cctv-list.module */ 95286);
/* harmony import */ var _monitor_smart_equip_edit_monitor_smart_equip_edit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monitor-smart-equip-edit/monitor-smart-equip-edit.module */ 62253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _monitor_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monitor-routing.module */ 60559);
/* harmony import */ var _monitor_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./monitor.page */ 48219);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _monitor_worker_location_monitor_worker_location_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./monitor-worker-location/monitor-worker-location.module */ 65196);
/* harmony import */ var _work_management_departure_status_today_departure_status_list_today_departure_status_list_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../work-management/departure-status/today-departure-status-list/today-departure-status-list.module */ 34124);














let MonitorPageModule = class MonitorPageModule {
};
MonitorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule,
            _basic_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_6__.ComponentModule,
            _monitor_routing_module__WEBPACK_IMPORTED_MODULE_4__.MonitorPageRoutingModule,
            _monitor_worker_location_monitor_worker_location_module__WEBPACK_IMPORTED_MODULE_7__.MonitorWorkerLocationPageModule,
            _monitor_smart_equip_edit_monitor_smart_equip_edit_module__WEBPACK_IMPORTED_MODULE_3__.MonitorSmartEquipEditPageModule,
            _monitor_cctv_list_monitor_cctv_list_module__WEBPACK_IMPORTED_MODULE_2__.MonitorCctvListPageModule,
            _monitor_cctv_edit_monitor_cctv_edit_module__WEBPACK_IMPORTED_MODULE_1__.MonitorCctvEditPageModule,
            _work_management_departure_status_today_departure_status_list_today_departure_status_list_module__WEBPACK_IMPORTED_MODULE_8__.TodayDepartureStatusListPageModule
        ],
        declarations: [_monitor_page__WEBPACK_IMPORTED_MODULE_5__.MonitorPage],
        exports: [_monitor_page__WEBPACK_IMPORTED_MODULE_5__.MonitorPage]
    })
], MonitorPageModule);



/***/ }),

/***/ 48219:
/*!**********************************************!*\
  !*** ./src/app/page/monitor/monitor.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodayWorkItem": () => (/* binding */ TodayWorkItem),
/* harmony export */   "TodayConstructionItem": () => (/* binding */ TodayConstructionItem),
/* harmony export */   "SmartEquip": () => (/* binding */ SmartEquip),
/* harmony export */   "MonitorPage": () => (/* binding */ MonitorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_monitor_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./monitor.page.html */ 60915);
/* harmony import */ var _monitor_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monitor.page.scss */ 69103);
/* harmony import */ var src_app_basic_service_core_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basic/service/core/device.service */ 54044);
/* harmony import */ var _monitor_cctv_list_monitor_cctv_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monitor-cctv-list/monitor-cctv-list.page */ 93537);
/* harmony import */ var _basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../basic/service/util/date.service */ 46879);
/* harmony import */ var _work_management_departure_status_today_departure_status_list_today_departure_status_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../work-management/departure-status/today-departure-status-list/today-departure-status-list.page */ 20811);
/* harmony import */ var _monitor_smart_equip_edit_monitor_smart_equip_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./monitor-smart-equip-edit/monitor-smart-equip-edit.page */ 21906);
/* harmony import */ var src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/basic/service/core/user.service */ 29730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/basic/service/core/connect.service */ 71090);
/* harmony import */ var src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/basic/service/ionic/toast.service */ 22455);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);














// import * as rtsp from 'rtsp_player';
// import * as streamedian from 'streamedian/player.js';
// declare var Streamedian:any;
/**
 * @class TodayConstructionItem
 *  - 금일 출역 근로자 변수 class
 */
class TodayWorkItem {
}
/**
 * @class TodayConstructionItem
 *  - 공종별 출역인원 변수 class
 */
class TodayConstructionItem {
}
/**
 * @class SmartEquip
 *  - 스마트 안전장비 변수 class
 */
class SmartEquip {
}
let MonitorPage = class MonitorPage {
    // @ViewChild('video', {static: true}) video_list: ElementRef;
    // test_url = encodeURIComponent('rtsp://admin:qwert12@61.83.219.219:554/main/ch1');
    constructor(connect, toast, modal, route, user, date, device) {
        this.connect = connect;
        this.toast = toast;
        this.modal = modal;
        this.route = route;
        this.user = user;
        this.date = date;
        this.device = device;
        this.form = {
            project_id: 1,
            master_company_id: 4,
            company_id: 0,
            ctgo_construction_id: 0,
            search_text: '',
            user_type: '전체' // 근로자 구분 관리자 OR 작업자 OR 전체
        };
        this.todayWork_totalCount = 0; // 금일 출역 근로자 총 수
        this.todayWork_graphLine = []; // 금일 출역 근로자 그래프 단위라인
        this.todayWork_ceil_Total = 0; // 금일 출역 근로자 총 수를 올림한 값
        this.todayConstruction_totalCount = 0; // 금일 출역 근로자 총 수
        this.todayConstruction_graphLine = []; // 금일 출역 근로자 그래프 단위라인
        this.todayConstruction_ceil_Total = 0; // 금일 출역 근로자 총 수를 올림한 값
        //  구조물 변위 감지
        this.smartEquip_structure = {
            not_using_count: 0,
            ctgo_machine_serial_name: '구조물 변위 감지',
            ctgo_machine_serial_id: 0,
            machine_count: 0,
            mmachine_using_count: 0 // 사용중 스마트장비 수
        };
        //  크레인 상하차 감지
        this.smartEquip_crane = {
            not_using_count: 0,
            ctgo_machine_serial_name: '크레인 상하차 감지',
            ctgo_machine_serial_id: 0,
            machine_count: 0,
            mmachine_using_count: 0 // 사용중 스마트장비 수
        };
        //  밀폐공간 유해물질 감지
        this.smartEquip_closeness = {
            not_using_count: 0,
            ctgo_machine_serial_name: '밀폐공간 유해물질 감지',
            ctgo_machine_serial_id: 0,
            machine_count: 0,
            mmachine_using_count: 0 // 사용중 스마트장비 수
        };
        this.weather = {
            weather_speed: "",
            weather_id: "",
            weather_temp: "",
            avg_temp: 0,
            weather_icon: "",
            create_date: "",
            weather_main: "",
            weather_humidity: "",
            weather_rain: "",
            weather_snow: "",
            high_weather_temp: "",
            low_weather_temp: "" // 최저 기온(온도),
        };
        this.dust = {
            dataTime: "",
            grade_name: "",
            icon_url: "",
            pm10Value: 0,
            pm25Grade: 0
        };
        // scandata = "http://m.site.naver.com/0TGMk"
        // maxIndex = 300;
        this.graphArr3 = [
            {
                name: '작업전',
                count: 0,
            },
            {
                name: '작업중',
                count: 0,
            },
            {
                name: '작업종료',
                count: 0,
            }
        ];
        this.graphArr4 = [
            {
                name: '고소 작업(높이 2m 이상)',
                count: 0
            },
            {
                name: '굴착 가설(깊이 1.5m 이상)',
                count: 0
            },
            {
                name: '기설 구조물 설치 해제',
                count: 0
            },
            {
                name: '밀폐공간',
                count: 0
            },
            {
                name: '휴일작업',
                count: 0
            },
        ];
        this.data = {
            monitor: '현장 모니터링'
        };
        this.event = {
            get: null,
            change_project: null
        };
        // cctv_form = {
        //   project_id: this.user.userData.belong_data.project_id,
        //   master_company_id: this.user.userData.belong_data.master_company_id ? this.user.userData.belong_data.master_company_id : 0,
        //   search_text: '',
        //   limit_no: 0
        // }
        this.cctv = []; // :ConnectResult<CCTVInfo>;
        /**
         * @function getSence(): 현장목록정보를 가져옵니다.
         */
        this.sence_index = 0;
        this.sence_cur = 0;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // let mediaElement = streamedian.rtsp.attach(document.getElementById('test_video'));
            // streamedian.player(document.getElementById('test_video'));
            // console.log();
            // console.log("mediaElement ----- ", mediaElement);
            // setTimeout(() => {
            //   this.init_api();
            // },2000);
            // await this.testMethod();
            yield this.getForm();
            yield this.getSence();
            this.$activedRoute = this.route.queryParams.subscribe(params => {
                const { monitor } = params;
                this.data = {
                    monitor: monitor || '현장 모니터링'
                };
            });
            // event 물리기
            this.event.get = this.monitorCctvList.bind(this);
            window.addEventListener('cctvList:get()', this.event.get);
            this.methodContrroller();
            this.event.change_project = window.addEventListener('change_project:get()', (ev) => {
                console.log('addEventListener - ', ev);
                this.form.project_id = ev.detail.project_id;
            });
        });
    }
    /**
     * @function ngOnDestroy(): 해당 페이지가 없어지면 걸려있던 subscribe 및 interval을 해제해줍니다.
     */
    ngOnDestroy() {
        this.$activedRoute.unsubscribe();
        window.removeEventListener('cctvList:get()', this.event.get);
        window.removeEventListener('change_project:get()', this.event.change_project);
    }
    getForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const { belong_data } = this.user.userData;
            console.log('getForm = ', belong_data.master_company_id);
            this.form.project_id = belong_data.project_id;
            this.form.master_company_id = belong_data.master_company_id | 0;
            this.form.company_id = belong_data.company_id;
        });
    }
    formChange(newForm) {
        this.form.project_id = newForm.project_id;
        this.form.master_company_id = newForm.master_company_id | 0;
        this.methodContrroller();
    }
    /**
     * @function methodContrroller(): 통합관제 데이터를 모두 불러오는 메서드(인터벌이 들어가있는 메서드 제외)
     */
    methodContrroller() {
        this.getTodayWorker(); // 금일 출역 작업자
        this.getTodayConstruction(); // 공종별 출역 작업자
        this.getSmartEquip(); // 스마트 안전장비 
        this.getWeather(); // 날씨정보
        this.getDust(); // 미세먼지 정보
    }
    /**
     * @function getTodayWorker(): 금일 출역 작업자 데이터를 가져오는 메서드
     */
    getTodayWorker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/integrated/today_worker', this.form, {});
            switch (res.rsCode) {
                case 0:
                    let total = 0;
                    this.todayWork = res;
                    this.todayWork.rsMap.map((item) => { total = total + item.total_cnt; });
                    this.todayWork_totalCount = total;
                    let total_arr = [];
                    this.todayWork.rsMap.map((item) => { total_arr.push(item.total_cnt); });
                    let max_today = Math.max.apply(null, total_arr);
                    let lineCount = (Math.ceil(max_today / 100) * 100) * 0.01;
                    this.todayWork_ceil_Total = Math.ceil(max_today / 100) * 100;
                    let graph_item = [];
                    for (let i = 0; i < lineCount; i++) {
                        graph_item.push((i + 1) * 100);
                    }
                    this.todayWork_graphLine = graph_item;
                    break;
            }
        });
    }
    /**
     * @function getTodayConstruction(): 공종별 출역 작업자 데이터를 가져오는 메서드
     */
    getTodayConstruction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/integrated/construction_worker', this.form, {});
            switch (res.rsCode) {
                case 0:
                    let total = 0;
                    this.todayConstruction = res;
                    this.todayConstruction.rsMap.map((item) => { total = total + item.cnt; });
                    this.todayConstruction_totalCount = total;
                    let total_arr = [];
                    this.todayConstruction.rsMap.map((item) => { total_arr.push(item.cnt); });
                    let max_today = Math.max.apply(null, total_arr);
                    this.todayConstruction_ceil_Total = Math.ceil(max_today / 10) * 10;
                    break;
            }
        });
    }
    /**
     * @function getSmartEquip(): 스마트장비 데이터를 가져오는 메서드
     */
    getSmartEquip() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // this.form
            const res = yield this.connect.run('/integrated/smart_equip', this.form, {});
            switch (res.rsCode) {
                case 0:
                    this.smartEquip = res;
                    this.smartEquip.rsMap.map((item) => {
                        if (item.ctgo_machine_serial_id == 8) {
                            this.smartEquip_structure = item;
                            this.smartEquip_structure.ctgo_machine_serial_name = '구조물 변위 감지';
                        }
                        if (item.ctgo_machine_serial_id == 4) {
                            this.smartEquip_crane = item;
                            this.smartEquip_crane.ctgo_machine_serial_name = '크레인 상하차 감지';
                        }
                        if (item.ctgo_machine_serial_id == 7) {
                            this.smartEquip_closeness = item;
                            this.smartEquip_closeness.ctgo_machine_serial_name = '밀폐공간 유해물질 감지';
                        }
                    });
                    break;
                default:
                    this.smartEquip_structure.not_using_count = 0;
                    this.smartEquip_structure.machine_count = 0;
                    this.smartEquip_structure.mmachine_using_count = 0;
                    this.smartEquip_closeness.not_using_count = 0;
                    this.smartEquip_closeness.machine_count = 0;
                    this.smartEquip_closeness.mmachine_using_count = 0;
                    this.smartEquip_crane.not_using_count = 0;
                    this.smartEquip_crane.machine_count = 0;
                    this.smartEquip_crane.mmachine_using_count = 0;
                    break;
            }
        });
    }
    /**
     * @function smartEquipEdit(): 스마트 안전장비 가동중 수정 모달입니다.
     */
    smartEquipEdit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _monitor_smart_equip_edit_monitor_smart_equip_edit_page__WEBPACK_IMPORTED_MODULE_6__.MonitorSmartEquipEditPage,
                componentProps: {
                    item: this.form
                }
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
            this.getSmartEquip();
        });
    }
    /**
     * @function todayWorkDetail(): 금일 출역 작업자 모달입니다.
     */
    todayWorkDetail(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.device.platform_type !== 3)
                return false;
            let trnas_item = item;
            trnas_item.row_count = 0;
            const modal = yield this.modal.create({
                component: _work_management_departure_status_today_departure_status_list_today_departure_status_list_page__WEBPACK_IMPORTED_MODULE_5__.TodayDepartureStatusListPage,
                cssClass: 'today-departure-status-list-modal',
                componentProps: {
                    listForm: {
                        project_id: this.form.project_id,
                        master_company_id: this.form.master_company_id,
                        ctgo_construction_ids: [],
                        start_date: '',
                        end_date: '',
                        limit_no: 0
                    },
                    item: trnas_item
                }
            });
            modal.present();
        });
    }
    getWeather() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            //날씨
            const res = yield this.connect.run('/weather/get', null, {});
            switch (res.rsCode) {
                case 0:
                    this.weather = res.rsObj;
                    break;
            }
        });
    }
    getDust() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.connect.run('/dust/get', null, {});
            switch (res.rsCode) {
                case 0:
                    this.dust = res.rsObj;
                    break;
            }
        });
    }
    style(item) {
        let style;
        switch (item.name) {
            case '작업전':
                style = { 'background-color': 'var(--ion-color-monitor-yellow)' };
                break;
            case '작업중':
                style = { 'background-color': 'var(--ion-color-primary)' };
                break;
            case '작업종료':
                style = { 'background-color': 'var(--ion-color-tertiary)' };
                break;
            case '고소 작업(높이 2m 이상)':
                style = { 'background-color': 'var(--ion-color-monitor-yellow)' };
                break;
            case '굴착 가설(깊이 1.5m 이상)':
                style = { 'background-color': 'var(--ion-color-monitor-green)' };
                break;
            case '기설 구조물 설치 해제':
                style = { 'background-color': 'var(--ion-color-primary)' };
                break;
            case '밀폐공간':
                style = { 'background-color': 'var(--ion-color-tertiary)' };
                break;
            case '휴일작업':
                style = { 'background-color': 'var(--ion-color-fourth)' };
                break;
        }
        return style;
    }
    /**
     * @function monitorCctvList(): CCTV 목록 리스트 모달
     */
    monitorCctvList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                // component:MonitorSmartEquipEditPage,
                component: _monitor_cctv_list_monitor_cctv_list_page__WEBPACK_IMPORTED_MODULE_3__.MonitorCctvListPage,
                // cssClass: 'risk-evaluation-class'
            });
            modal.present();
            const { data } = yield modal.onDidDismiss();
        });
    }
    // async testMethod(){
    //   // https://ipcamlive.com/api/v2/getstreamhlsurl?apisecret=62b2d166929f4&alias=namgwang1
    //   const res = await this.connect.run('https://ipcamlive.com/api/v2/getstreamhlsurl', {apisecret:'62b2d166929f4',alias:'namgwang1'}, {cctv:true});
    //   switch (res.rsCode) {
    //     case 0:
    //       // this.dust = res.rsObj;
    //       break;
    //   }
    // }
    // /**
    //  * @function getCCTV(): CCTV목록정보를 가져옵니다.
    //  */
    //  async getCCTV(item, index) {
    //     let cctv_form = {
    //       project_id: item.project_id,
    //       master_company_id: this.user.userData.belong_data.master_company_id ? this.user.userData.belong_data.master_company_id : 0,
    //       search_text: '',
    //       limit_no: 0
    //     }
    //     const res = await this.connect.run('/cctv/list', cctv_form);
    //     if(res.rsCode === 0 ) {
    //       if(res?.rsMap?.length){
    //         let cctv_item = {
    //           project_id: item.project_id,
    //           project_name: item.project_name,
    //           cctv_list: []
    //         };
    //         this.cctv.push(cctv_item);
    //         res.rsMap.map((data_arr) => {if(data_arr.cctv_use_state) this.cctv[index]['cctv_list'].push(data_arr);});
    //       }
    //       // this.cctv = res;
    //     }
    //     else if (res.rsCode === 1008) {
    //       // this.cctv = null;
    //     }
    //     else {
    //       this.toast.present({ color: 'warning', message: res.rsMsg });
    //     }
    // }
    /**
     * @function getCCTV(): CCTV목록정보를 가져옵니다.
     */
    getCCTV(item) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let cctv_form = {
                project_id: item[this.sence_cur].project_id,
                master_company_id: this.user.userData.belong_data.master_company_id ? this.user.userData.belong_data.master_company_id : 0,
                search_text: '',
                limit_no: 0
            };
            const res = yield this.connect.run('/cctv/list', cctv_form);
            if (res.rsCode === 0) {
                if ((_a = res === null || res === void 0 ? void 0 : res.rsMap) === null || _a === void 0 ? void 0 : _a.length) {
                    let cctv_item = {
                        project_id: item[this.sence_cur].project_id,
                        project_name: item[this.sence_cur].project_name,
                        cctv_list: []
                    };
                    this.cctv.push(cctv_item);
                    res.rsMap.map((data_arr) => { if (data_arr.cctv_use_state)
                        this.cctv[this.sence_cur]['cctv_list'].push(data_arr); });
                    if (this.sence_index - 1 > this.sence_cur) {
                        console.log("들어옴!!!!! - ", this.sence_cur);
                        this.sence_cur++;
                        this.getCCTV(item);
                    }
                }
            }
            else if (res.rsCode === 1008) {
                // this.cctv = null;
                let cctv_item = {
                    project_id: item[this.sence_cur].project_id,
                    project_name: item[this.sence_cur].project_name,
                    cctv_list: []
                };
                this.cctv.push(cctv_item);
                this.sence_cur++;
                this.getCCTV(item);
            }
            else {
                this.toast.present({ color: 'warning', message: res.rsMsg });
            }
        });
    }
    getSence() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.cctv = [];
            this.sence_cur = 0;
            let res = yield this.connect.run('/category/certify/search_my_project/get', { search_text: '' });
            if (res.rsCode === 0) {
                if ((_a = res === null || res === void 0 ? void 0 : res.rsMap) === null || _a === void 0 ? void 0 : _a.length) {
                    this.sence_index = res.rsMap.length;
                    // res.rsMap.map(async(item, index) => {
                    //   console.log('index', index);
                    //   await this.getCCTV(item, index);
                    // });
                    yield this.getCCTV(res.rsMap);
                }
            }
            else {
                // this.toast.present({ color: 'warning', message: this.res.rsMsg });
            }
        });
    }
};
MonitorPage.ctorParameters = () => [
    { type: src_app_basic_service_core_connect_service__WEBPACK_IMPORTED_MODULE_8__.ConnectService },
    { type: src_app_basic_service_ionic_toast_service__WEBPACK_IMPORTED_MODULE_9__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: src_app_basic_service_core_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService },
    { type: _basic_service_util_date_service__WEBPACK_IMPORTED_MODULE_4__.DateService },
    { type: src_app_basic_service_core_device_service__WEBPACK_IMPORTED_MODULE_2__.DeviceService }
];
MonitorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-moniter',
        template: _raw_loader_monitor_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_monitor_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MonitorPage);



/***/ }),

/***/ 44849:
/*!******************************************************************************************!*\
  !*** ./src/app/page/monitor/monitor-smart-equip-edit/monitor-smart-equip-edit.page.scss ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("td {\n  vertical-align: baseline !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbml0b3Itc21hcnQtZXF1aXAtZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxtQ0FBa0M7QUFFckMiLCJmaWxlIjoibW9uaXRvci1zbWFydC1lcXVpcC1lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRke3ZlcnRpY2FsLWFsaWduOiBiYXNlbGluZSFpbXBvcnRhbnQ7fSJdfQ== */");

/***/ }),

/***/ 74351:
/*!****************************************************************************************!*\
  !*** ./src/app/page/monitor/monitor-worker-location/monitor-worker-location.page.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.tool-bar-class-geo {\n  height: 100%;\n  display: flex;\n  flex: 1;\n  position: relative;\n}\n\n.map-area {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  display: flex;\n  flex: 1;\n  left: 0;\n  bottom: 0;\n}\n\n.content-class {\n  --padding-start: 0;\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --offset-top: -8px!important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbml0b3Itd29ya2VyLWxvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0FBQTFCOztBQUVBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixPQUFPO0VBQ1Asa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLE9BQU87RUFDUCxPQUFPO0VBQ1AsU0FBUztBQUNiOztBQUVBO0VBQ0ksa0JBQWdCO0VBQ2hCLG1CQUFpQjtFQUNqQixnQkFBYztFQUNkLGdCQUFjO0VBQ2QsNEJBQWE7QUFDakIiLCJmaWxlIjoibW9uaXRvci13b3JrZXItbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnRvb2wtYmFyLWNsYXNzLWdlb3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1hcC1hcmVhe1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xufVxuXG4uY29udGVudC1jbGFzc3tcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgLS1vZmZzZXQtdG9wOiAtOHB4IWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ 69103:
/*!************************************************!*\
  !*** ./src/app/page/monitor/monitor.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-top: 16px;\n}\n\napp-row {\n  align-items: stretch;\n}\n\n@media screen and (max-width: 1199px) {\n  .container {\n    max-width: 768px;\n    margin: auto;\n  }\n  .mobileBreak {\n    display: block;\n  }\n  .mobileBreak > app-col {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-top: 8px;\n    margin-bottom: 8px;\n  }\n  app-card {\n    height: 100% !important;\n  }\n}\n\n.graph-card {\n  height: 328px;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.graph-area {\n  display: flex;\n  flex-direction: column;\n  height: 192px;\n  position: relative;\n}\n\n.graph-area .graph-line-wrap {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.graph-area .graph-line-box {\n  flex: 1;\n  display: flex;\n  height: 100%;\n}\n\n.graph-area .graph-line-box .graph-line {\n  position: relative;\n  height: 50px;\n  width: 100%;\n  border-top: 1px solid var(--ion-color-medium);\n  height: 100%;\n}\n\n.graph-area .graph-line-box .graph-text {\n  flex: 0 24px;\n  text-align: right;\n  margin-right: 4px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  position: relative;\n}\n\n.graph-area .graph-line-box .graph-text .div-text-g {\n  position: absolute;\n  position: absolute;\n  top: -10px;\n}\n\n.graph-area .bar-flex-box {\n  display: flex;\n  top: 0;\n  position: absolute;\n  height: calc(100% + 49px);\n  width: 100%;\n}\n\n.graph-area .bar-flex-box .bar-flex-theme {\n  flex: 0 30px;\n  width: 30px;\n}\n\n.graph-area .bar-flex-box .bar-wrap {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.graph-area .bar-flex-box .bar-wrap .bar-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.graph-area .bar-flex-box .bar-wrap .bar-item .bar {\n  width: 36px;\n  background: var(--ion-color-primary);\n  position: relative;\n  cursor: pointer;\n}\n\n.graph-area .bar-flex-box .bar-wrap .bar-item .bar .bar-inner-text {\n  position: absolute;\n  top: -20px;\n  width: 100%;\n  text-align: center;\n}\n\n.graph-area .bar-flex-box .bar-wrap .bar-item .text {\n  height: 50px;\n  padding-top: 26px;\n  font-size: var(--font-size-h6);\n  transform: rotate(-45deg);\n  white-space: nowrap;\n}\n\n.graph-area .bar-flex-box .bar-wrap .bar-item.theme {\n  width: 26px;\n}\n\n.donut-group {\n  position: relative;\n  height: 254px;\n  margin-left: 20px;\n}\n\n.donut-group .donut {\n  height: 100%;\n}\n\n.donut-group .donut-in-count {\n  position: absolute;\n  top: 42%;\n  left: 48%;\n  transform: translate(-50%, -50%);\n  font-size: 40px;\n  font-weight: 600;\n}\n\n.donut-group .donut-in-text {\n  position: absolute;\n  top: 60%;\n  left: 48%;\n  transform: translate(-50%, -50%);\n  font-size: var(--font-size-h4);\n  color: #2F8D38;\n}\n\n.donut-sub {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-right: 8px;\n}\n\n.donut-sub .circle-plan {\n  background-color: var(--ion-color-monitor-warning);\n  width: 20px;\n  height: 20px;\n  border-radius: 75px;\n  text-align: center;\n  margin: 0 auto;\n  font-size: var(--font-size-h6);\n  vertical-align: middle;\n  line-height: 150px;\n}\n\n.donut-sub .circle-per {\n  background-color: var(--ion-color-primary);\n  width: 20px;\n  height: 20px;\n  border-radius: 75px;\n  text-align: center;\n  margin: 0 auto;\n  font-size: var(--font-size-h6);\n  vertical-align: middle;\n  line-height: 150px;\n}\n\n.donut-sub .count-name {\n  padding-left: 8px;\n  font-size: var(--font-size-h4);\n  color: var(--ion-color-secondary-contrast);\n}\n\n.donut-sub .count-contant {\n  font-weight: 800;\n  color: var(--ion-color-medium);\n  font-size: var(--font-size-h4);\n}\n\n.risk-type-name {\n  margin-left: 15px;\n  text-align: left;\n  font-size: 16px;\n  color: var(--ion-color-secondary-contrast);\n}\n\n.worker-item {\n  align-items: center;\n}\n\n.worker-state {\n  height: 70px;\n  margin-right: 10px;\n  border-radius: 2px;\n}\n\n.danger-state {\n  height: 10px;\n  margin-right: 10px;\n  border-radius: 5px;\n}\n\n.toolbar-padding {\n  --padding-start: 12px !important;\n  --padding-end: 12px !important;\n}\n\n.table-text {\n  font-size: 18px;\n  color: var(--ion-color-primary-shade);\n}\n\n.table-text h5 {\n  margin-top: 10px;\n  text-align: left;\n}\n\n.cctv-box {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbml0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWM7QUFDbEI7O0FBQ0E7RUFDSSxvQkFBb0I7QUFFeEI7O0FBQ0E7RUFDSTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0VBRWxCO0VBQUU7SUFDSSxjQUFjO0VBRXBCO0VBSEU7SUFHUSwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtFQUc1QjtFQUNFO0lBQ0ksdUJBQXVCO0VBQzdCO0FBQ0Y7O0FBR0E7RUFDSSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUEvQjs7QUFHQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtBQUF0Qjs7QUFKQTtFQU9RLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7QUFDdEM7O0FBWkE7RUFlUSxPQUFPO0VBQ1AsYUFBYTtFQUNiLFlBQVk7QUFDcEI7O0FBbEJBO0VBb0JZLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLDZDQUE2QztFQUM3QyxZQUFZO0FBRXhCOztBQTFCQTtFQTJCWSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFHOUI7O0FBcENBO0VBb0NnQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFJMUI7O0FBMUNBO0VBNENRLGFBQWE7RUFDYixNQUFNO0VBQ04sa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0FBRW5COztBQWxEQTtFQW1EWSxZQUFZO0VBQ1osV0FBVztBQUd2Qjs7QUF2REE7RUF3RFksT0FBTztFQUNQLFdBQVc7RUFDWCxhQUFhO0VBSWIsNkJBQTZCO0FBQXpDOztBQTlEQTtFQWlFZ0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ25DOztBQXJFQTtFQXVFb0IsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsZUFBZTtBQUVuQzs7QUE1RUE7RUE2RXdCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtBQUcxQzs7QUFuRkE7RUFvRm9CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFHdkM7O0FBM0ZBO0VBMkZ3QixXQUFVO0FBSWxDOztBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7QUFDckI7O0FBSkE7RUFLUSxZQUFZO0FBR3BCOztBQVJBO0VBUVEsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQStCO0VBQy9CLGVBQWU7RUFDZixnQkFBZ0I7QUFJeEI7O0FBakJBO0VBZ0JRLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUErQjtFQUMvQiw4QkFBOEI7RUFDOUIsY0FBYztBQUt0Qjs7QUFEQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUlyQjs7QUFSQTtFQU1RLGtEQUFpRDtFQUNqRCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBTTFCOztBQXBCQTtFQWlCUSwwQ0FBMEM7RUFDMUMsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQU8xQjs7QUFoQ0E7RUE0QlEsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QiwwQ0FBMEM7QUFRbEQ7O0FBdENBO0VBaUNRLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsOEJBQThCO0FBU3RDOztBQUxBO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMENBQTBDO0FBUTlDOztBQUxBO0VBQ0ksbUJBQW1CO0FBUXZCOztBQU5BO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFTdEI7O0FBUEE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQVV0Qjs7QUFQQTtFQUNJLGdDQUFnQjtFQUNoQiw4QkFBYztBQVVsQjs7QUFQQTtFQUNJLGVBQWU7RUFDZixxQ0FBcUM7QUFVekM7O0FBWkE7RUFJUSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBWXhCOztBQVJBO0VBQ0ksYUFBYTtFQUNiLGVBQWU7QUFXbkIiLCJmaWxlIjoibW9uaXRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcbn1cbmFwcC1yb3cge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA3NjhweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAubW9iaWxlQnJlYWsge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgPmFwcC1jb2wge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGFwcC1jYXJkIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxufVxuXG4uZ3JhcGgtY2FyZCB7XG4gICAgaGVpZ2h0OiAzMjhweDtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4uZ3JhcGgtYXJlYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTkycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmdyYXBoLWxpbmUtd3JhcCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIH1cblxuICAgIC5ncmFwaC1saW5lLWJveCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICBcbiAgICAgICAgLmdyYXBoLWxpbmV7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmdyYXBoLXRleHR7XG4gICAgICAgICAgICBmbGV4OiAwIDI0cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgICAgICAgICAgIC5kaXYtdGV4dC1ne1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5iYXItZmxleC1ib3gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA0OXB4KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLmJhci1mbGV4LXRoZW1le1xuICAgICAgICAgICAgZmxleDogMCAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFyLXdyYXB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgLy8gdG9wOiAwO1xuICAgICAgICAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMCUgKyA0OXB4KTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gICAgICAgICAgICAuYmFyLWl0ZW17XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIC5iYXJ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgICAgICAgIC5iYXItaW5uZXItdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGV4dHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjZweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDYpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYudGhlbWV7d2lkdGg6MjZweDt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kb251dC1ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjU0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgLmRvbnV0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAuZG9udXQtaW4tY291bnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNDIlO1xuICAgICAgICBsZWZ0OiA0OCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLmRvbnV0LWluLXRleHQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNjAlO1xuICAgICAgICBsZWZ0OiA0OCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWg0KTtcbiAgICAgICAgY29sb3I6ICMyRjhEMzg7XG4gICAgfVxufVxuXG4uZG9udXQtc3ViIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgLmNpcmNsZS1wbGFuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tY29sb3ItbW9uaXRvci13YXJuaW5nKTtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNzVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDYpO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBsaW5lLWhlaWdodDogMTUwcHg7XG4gICAgfVxuICAgIC5jaXJjbGUtcGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3NXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oNik7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTBweDtcbiAgICB9XG4gICAgLmNvdW50LW5hbWV7XG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4OyBcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDQpO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgfVxuICAgIC5jb3VudC1jb250YW50IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oNCk7XG4gICAgfVxufVxuXG4ucmlzay10eXBlLW5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbn1cblxuLndvcmtlci1pdGVtIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndvcmtlci1zdGF0ZSB7IFxuICAgIGhlaWdodDogNzBweDsgXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5kYW5nZXItc3RhdGUgeyBcbiAgICBoZWlnaHQ6IDEwcHg7IFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50b29sYmFyLXBhZGRpbmcge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTJweCAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy1lbmQ6IDEycHggIWltcG9ydGFudDtcbn1cblxuLnRhYmxlLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICAgIGg1IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG59XG5cbi5jY3R2LWJveHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn0iXX0= */");

/***/ }),

/***/ 78118:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/monitor/monitor-smart-equip-edit/monitor-smart-equip-edit.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"white\">\n    <ion-title>스마트 안전장비 검색</ion-title>\n    <ion-buttons slot=\"end\">\n      <app-dismiss-button></app-dismiss-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar color=\"white\" *ngIf=\"user.userData.user_type !== 'COMPANY'\">\n    <app-input-group>\n      <app-select-contractor \n      [project_id]=\"form.project_id\" \n      [(ngModel)]=\"form.master_company_id\" [allState]=\"true\"></app-select-contractor>\n      <app-select label=\"스마트장비\" name=\"select\" [(ngModel)]=\"form.ctgo_machine_serial_id\">\n        <app-select-option [value]=\"0\">전체</app-select-option>\n        <app-select-option *ngFor=\"let option of smart_option\" [value]=\"option.ctgo_machine_serial_id\">{{ option.text }}</app-select-option>\n      </app-select>\n    </app-input-group>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-toolbar color=\"white\">\n    <h5>총 보유 : {{ total_count }}대 / 가동중 {{ using_total_count }}대</h5>\n  </ion-toolbar>\n  <app-table>\n    <thead>\n      <tr>\n        <th>원청사명</th>\n        <th>스마트 장비</th>\n        <th width=\"80px\">보유대수</th>\n        <th width=\"80px\">가동중</th>\n        <th width=\"80px\">미가동</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of res?.rsMap\">\n        <td>{{ item.company_name }}</td>\n        <td>{{ item.ctgo_machine_serial_name }}</td>\n        <td>{{ item.machine_count }}</td>\n        <!-- *ngIf=\"user.userData.user_role === 'LH_HEAD' || user.userData.user_role === 'MASTER_HEAD'\" -->\n        <td>\n          <div *ngIf=\"user.userData.user_role !== 'LH_HEAD' && user.userData.user_role !== 'MASTER_HEAD'\">{{ item.mmachine_using_count }}</div>\n          <app-input *ngIf=\"user.userData.user_role === 'LH_HEAD' || user.userData.user_role === 'MASTER_HEAD'\" [(ngModel)]=\"item.mmachine_using_count\"></app-input>\n        </td>\n        <td>{{ item.not_using_count }}</td>\n      </tr>\n    </tbody>\n  </app-table>\n\n  <app-button-footer *ngIf=\"user.userData.user_role === 'MASTER_HEAD'\">\n    <app-button name=\"submit\" (click)=\"edit()\">적용</app-button>\n  </app-button-footer>\n</ion-content>\n");

/***/ }),

/***/ 75166:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/monitor/monitor-worker-location/monitor-worker-location.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-row style=\"align-items: stretch; height: 100%;\" *mobileHidden>\n\n  <!-- <app-col size=\"200px\">\n    \n    <app-table type=\"card\">\n      <ion-toolbar slot=\"top\" color=\"white\">\n        <app-row style=\"justify-content: space-between;\">\n          <app-col size=\"auto\"><h5>필터</h5></app-col>\n          <app-col size=\"auto\"><app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"get()\">검색</app-button></app-col>\n        </app-row>\n      </ion-toolbar>\n      <tbody>\n        <tr>\n          <td>\n           <app-select-company [project_id]=\"form.project_id\" [(ngModel)]=\"form.company_id\"></app-select-company>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <app-select-construction [project_id]=\"form.project_id\" [master_company_id]=\"form.master_company_id\" [(ngModel)]=\"form.ctgo_construction_id\" [all]=\"true\"></app-select-construction>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <app-select label=\"근로자 구분\" [(ngModel)]=\"form.user_type\">\n              <app-select-option value=\"전체\">전체</app-select-option>\n              <app-select-option value=\"관리자\">관리자</app-select-option>\n              <app-select-option value=\"작업자\">작업자</app-select-option>\n            </app-select>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <app-input-template label=\"위험공종 *고정\">\n              <p slot=\"input\">전체</p>\n            </app-input-template>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <app-input-template label=\"작업상태 *고정\">\n              <p slot=\"input\">전체</p>\n            </app-input-template>\n          </td>\n        </tr>\n      </tbody>\n    </app-table>\n\n  </app-col> -->\n\n  <app-col>\n\n    <app-naver-user-map style=\"height: 100%\" [(ngModel)]=\"gpsData\" [LineGpsData]=\"gps_coordinate_data\"></app-naver-user-map>\n\n  </app-col>\n\n  <app-col size=\"4\">\n    <app-row>\n      <app-col>\n        <app-input [(ngModel)]=\"form.search_text\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"wokerInGetList()\">검색</app-button>\n      </app-col>\n    </app-row>\n\n    <app-table style=\"overflow:auto; width:auto; height:93%;\">  <!--사용자 스크롤 구현 -->\n      <thead>\n        <tr>\n          <th colspan=\"4\">총 {{ workerInRes?.rsObj?.row_count || 0 }}명</th>\n        </tr>\n        <tr>\n          <th>회사명</th>\n          <th>성명</th>\n          <th>공종</th>\n          <th>근로자 구분</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of workerInRes?.rsMap\">\n          <td>{{ item.company_name }}</td>\n          <td>{{ item.user_name }}</td>\n          <td>{{ item.ctgo_construction_name }}</td>\n          <td>{{ item.user_type }}</td>\n        </tr>\n      </tbody>\n    </app-table>\n  </app-col>\n\n</app-row>\n\n<ng-container *mobileShow>\n  <ion-toolbar class=\"tool-bar-class-geo\" slot=\"top\" color=\"white\">\n    <app-naver-user-map class=\"map-area\" [(ngModel)]=\"gpsData\" [LineGpsData]=\"gps_coordinate_data\"></app-naver-user-map>\n  </ion-toolbar>\n\n  <ion-toolbar class=\"tool-bar-class-searchbox\" slot=\"top\" color=\"white\">\n    <app-row>\n      <app-col>\n        <app-input [(ngModel)]=\"form.search_text\" placeholder=\"검색어를 입력해 주세요.\"></app-input>\n      </app-col>\n      <app-col size=\"auto\">\n        <app-button fill=\"translucent\" style=\"width: 100px;\" (click)=\"wokerInGetList()\">검색</app-button>\n      </app-col>\n    </app-row>\n  </ion-toolbar>\n\n\n\n\n  <ion-content class=\"content-class\">\n    <app-row style=\"flex:1; position:relative;\">\n      <app-col style=\"top: 0; position:absolute;\">  \n        <app-row>\n          <app-col>\n            <app-table>\n              <thead>\n                <tr>\n                  <th colspan=\"4\">총 {{ workerInRes?.rsObj?.row_count || 0 }}명</th>\n                </tr>\n                <tr>\n                  <th>회사명</th>\n                  <th>성명</th>\n                  <th>공종</th>\n                  <th>근로자 구분</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of workerInRes?.rsMap\">\n                  <td>{{ item.company_name }}</td>\n                  <td>{{ item.user_name }}</td>\n                  <td>{{ item.ctgo_construction_name }}</td>\n                  <td>{{ item.user_type }}</td>\n                </tr>\n              </tbody>\n            </app-table>\n          </app-col>\n        </app-row>\n\n      </app-col>\n    </app-row>\n  </ion-content>\n</ng-container>\n\n");

/***/ }),

/***/ 60915:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/monitor/monitor.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-moniter-header [form]=\"form\" (formChange)=\"formChange($event)\"></app-moniter-header>\n\n<ion-content>\n\n  <div *ngIf=\"data.monitor === '현장 모니터링'\" class=\"container\">\n    <app-row class=\"mobileBreak\">\n      <app-col>\n        <app-row class=\"mobileBreak\">\n          <app-col style=\"height: 350px;\">\n            <app-card color=\"white\" class=\"graph-card\">\n              <ion-toolbar slot=\"top\" color=\"white\">\n                <app-row>\n                  <app-col>\n                    <h4>주간 출역 현황</h4>\n                  </app-col>\n                  <app-col size=\"auto\">\n                    <ion-badge color=\"medium\" (click)=\"todayWorkDetail({\n                      company_admin: 0,\n                      company_worker: 0,\n                      master_admin: 0,\n                      master_worker: 0,\n                      total_cnt: 0,\n                      work_date: this.date.today()\n                  })\"><b>{{ todayWork_totalCount }}</b>명</ion-badge>\n                  <!-- <ion-badge color=\"medium\"><b>{{ todayWork_totalCount }}</b>명</ion-badge> -->\n                  </app-col>\n                </app-row>\n              </ion-toolbar>\n              <div class=\"graph-area\">\n                <div class=\"graph-line-wrap\">\n                  <div *ngFor=\"let item of todayWork_graphLine\" class=\"graph-line-box\">\n                    <div class=\"graph-text\">\n                      <div class=\"div-text-g\">{{ item }}</div>\n                    </div>\n                    <div class=\"graph-line\"></div>\n                  </div>\n                </div>\n                <div class=\"graph-line-box\">\n                  <div class=\"graph-text\">\n                    <div class=\"div-text-g\">0</div>\n                  </div>\n                  <div class=\"graph-line\"></div>\n                </div>\n\n                <div class=\"bar-flex-box\">\n\n                  <div class=\"bar-flex-theme\"></div>\n                  <div class=\"bar-wrap\">\n                    <div class=\"bar-item\" *ngFor=\"let item of todayWork?.rsMap\">\n                      <!-- (click)=\"todayWorkDetail(item)\" -->\n                      <div *ngIf=\"item.total_cnt\" (click)=\"todayWorkDetail(item)\"\n                        class=\"bar\"\n                        [style.height]=\"'calc((100% - 50.55px) * '+(item.total_cnt / todayWork_ceil_Total)+')'\">\n                        <div class=\"bar-inner-text\">{{ item.total_cnt }}</div>\n                      </div>\n                      <div class=\"text\">{{ item.work_date }}</div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </app-card>\n\n          </app-col>\n          <app-col>\n            <app-card class=\"graph-card\">\n              <ion-toolbar slot=\"top\" color=\"white\">\n                <app-row>\n                  <app-col>\n                    <h4>TBM / 작업 현황</h4>\n                  </app-col>\n                  <app-col size=\"auto\">\n                    <ion-badge color=\"medium\">총<b>0</b>팀</ion-badge>\n                  </app-col>\n                </app-row>\n              </ion-toolbar>\n              <ion-row *ngFor=\"let item of graphArr3 let i = index\" class=\"worker-item\">\n                <app-col size=\"78px\" class=\"risk-type-name\">{{ item.name }}</app-col>\n                <app-col style=\"display: flex; align-items: center;\">\n                  <div [ngStyle]=\"style(item)\" class=\"worker-state\" [style.width]=\"item.count + '%'\"></div>\n                  <h4>{{item.count}}</h4>\n                </app-col>\n              </ion-row>\n            </app-card>\n          </app-col>\n        </app-row>\n        \n        <app-row class=\"mobileBreak\">\n          <app-col>\n\n            <app-card class=\"graph-card\">\n\n              \n              <ion-toolbar slot=\"top\" color=\"white\">\n                <app-row>\n                  <app-col>\n                    <h4>오늘의 공종별 출역 현황</h4>\n                  </app-col>\n                  <app-col size=\"auto\">\n                    <ion-badge color=\"medium\">총<b>{{ todayConstruction_totalCount }}</b>명</ion-badge>\n                  </app-col>\n                </app-row>\n              </ion-toolbar>\n              <ion-row *ngFor=\"let item of todayConstruction?.rsMap\">\n                <app-col size=\"2\" class=\"risk-type-name\">{{ item.ctgo_construction_name }}</app-col>\n                <app-col style=\"display: flex; align-items: center;\">\n                  <div *ngIf=\"item.cnt\"\n                    style=\"height: 10px; background-color: red; margin-right: 10px; border-radius: 5px;\"\n                    [style.width]=\"'calc((100% - 50.55px) * '+(item.cnt/todayConstruction_ceil_Total)+')'\"></div>\n                  <h4 *ngIf=\"item.cnt\" style=\"width: 36px;\">{{item.cnt}}</h4>\n                </app-col>\n              </ion-row>\n            </app-card>\n\n          </app-col>\n\n          <app-col>\n\n            <!-- <app-card class=\"graph-card\" [blind]=\"true\"> -->\n              <app-card class=\"graph-card\">\n              <ion-toolbar slot=\"top\" color=\"white\">\n                <app-row>\n                  <app-col>\n                    <h4>PTW 위험 작업 계획</h4>\n                  </app-col>\n                  <app-col size=\"auto\">\n                    <ion-badge color=\"medium\">총<b>0</b>건</ion-badge>\n                  </app-col>\n                </app-row>\n              </ion-toolbar>\n              <ion-row *ngFor=\"let item of graphArr4 let i = index\">\n                <app-col size=\"6\" class=\"risk-type-name\">{{ item.name }}</app-col>\n                <app-col style=\"display: flex; align-items: center;\">\n                  <div [ngStyle]=\"style(item)\" class=\"danger-state\" [style.width]=\"item.count + '%'\"></div>\n                  <h4>{{item.count}}</h4>\n                </app-col>\n              </ion-row>\n            </app-card>\n\n          </app-col>\n        </app-row>\n      </app-col>\n\n      <app-col style=\"flex: 0 0 300px;\">\n        <app-card color=\"white\">\n          <ion-toolbar class=\"toolbar-padding\" slot=\"top\" color=\"white\">\n            <app-row style=\"align-items: center; justify-content: space-between;\">\n              <app-col>\n                <h4>스마트 안전 장비</h4>\n              </app-col>\n              <app-col size=\"auto\">\n                <app-button *mobileHidden fill=\"translucent\" (click)=\"smartEquipEdit()\">{{ (user.userData.user_type === 'LH' || user.userData.user_type === 'SUPER') ? '조회' : '수정' }}</app-button>\n              </app-col>\n            </app-row>\n          </ion-toolbar>\n          <table style=\"width: 100%;\">\n            <tbody>\n              <tr>\n                <td>\n                  <app-img style=\"width: 70px;\" src=\"/assets/img/monitor/dangerarea.svg\"></app-img>\n                </td>\n                <td class=\"table-text\">\n                  <h5>\n                    {{ smartEquip_structure.ctgo_machine_serial_name }}\n                  </h5>\n                  <p>\n                    <app-row>\n                      <app-col style=\"text-align: left;\">보유 대수</app-col>\n                      <app-col style=\"text-align: right;\">\n                        <h4>{{ smartEquip_structure.machine_count }}</h4>\n                      </app-col>\n                    </app-row>\n                  </p>\n                  <p>\n                    <app-row>\n                      <app-col style=\"text-align: left;\">가동 중</app-col>\n                      <app-col style=\"text-align: right;\">\n                        <h4>{{ smartEquip_structure.mmachine_using_count }}</h4>\n                      </app-col>\n                    </app-row>\n                  </p>\n                  <p>\n                    <app-row>\n                      <app-col style=\"text-align: left;\">미가동</app-col>\n                      <app-col style=\"text-align: right;\">\n                        <h4>{{ smartEquip_structure.not_using_count }}</h4>\n                      </app-col>\n                    </app-row>\n                  </p>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <app-img style=\"width: 70px;\" src=\"/assets/img/monitor/heavy.svg\"></app-img>\n                </td>\n                <td class=\"table-text\">\n                  <h5 style=\"text-align: left;\">\n                    {{ smartEquip_crane.ctgo_machine_serial_name }}\n                  </h5>\n                  <p>\n                    <app-row>\n                      <app-col style=\"text-align: left;\">보유 대수</app-col>\n                      <app-col style=\"text-align: right;\">\n                        <h4>{{ smartEquip_crane.machine_count }}</h4>\n                      </app-col>\n                    </app-row>\n                  </p>\n                  <p>\n                    <app-row>\n                      <app-col style=\"text-align: left;\">가동 중</app-col>\n                      <app-col style=\"text-align: right;\">\n                        <h4>{{ smartEquip_crane.mmachine_using_count }}</h4>\n                      </app-col>\n                    </app-row>\n                  </p>\n                  <p>\n                    <app-row>\n                      <app-col style=\"text-align: left;\">미가동</app-col>\n                      <app-col style=\"text-align: right;\">\n                        <h4>{{ smartEquip_crane.not_using_count }}</h4>\n                      </app-col>\n                    </app-row>\n                  </p>\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  <app-img style=\"width: 70px;\" src=\"/assets/img/monitor/closeness.svg\"></app-img>\n                </td>\n                <td class=\"table-text\">\n                  <h5 style=\"text-align: left;\">\n                    {{ smartEquip_closeness.ctgo_machine_serial_name }}\n                  </h5>\n                  <p>\n                    <app-row>\n                      <app-col style=\"text-align: left;\">보유 대수</app-col>\n                      <app-col style=\"text-align: right;\">\n                        <h4>{{ smartEquip_closeness.machine_count }}</h4>\n                      </app-col>\n                    </app-row>\n                  </p>\n                  <p>\n                    <app-row>\n                      <app-col style=\"text-align: left;\">가동 중</app-col>\n                      <app-col style=\"text-align: right;\">\n                        <h4>{{ smartEquip_closeness.mmachine_using_count }}</h4>\n                      </app-col>\n                    </app-row>\n                  </p>\n                  <p>\n                    <app-row>\n                      <app-col style=\"text-align: left;\">미가동</app-col>\n                      <app-col style=\"text-align: right;\">\n                        <h4>{{ smartEquip_closeness.not_using_count }}</h4>\n                      </app-col>\n                    </app-row>\n                  </p>\n                </td>\n              </tr>\n\n            </tbody>\n          </table>\n\n\n        </app-card>\n      </app-col>\n      <ng-container *mobileShow>\n        <app-col>\n          <app-card class=\"card-flex\" style=\"height: 315px;\"> \n            <div>\n                <ion-toolbar slot=\"top\" color=\"white\">\n                  <app-row>\n                    <app-col>\n                      <h4>경기도 성남시 분당구</h4>\n                    </app-col>\n                  </app-row>\n                </ion-toolbar>\n                <!--            \n                  <app-row>\n                    <app-col>\n                      <app-row>\n                        <app-col>\n                          <h5>최고기온</h5>\n                        </app-col>\n                        <app-col>\n                          <h4>{{ weather.high_weather_temp + \"&deg;C\" }}</h4>\n                        </app-col>\n                      </app-row>\n                      <app-row >\n                        <app-col class=\"wheather\" style=\"text-align: center;\">\n                          <h2>{{ weather.weather_temp + \"&deg;C\" }}</h2>\n                        </app-col>\n                      </app-row>\n                      <app-row>\n                        <app-col>\n                          <h5>최저기온</h5>\n                        </app-col>\n                        <app-col>\n                          <h4>{{ weather.low_weather_temp + \"&deg;C\" }}</h4>\n                        </app-col>\n                      </app-row>\n                    </app-col>\n                    <app-col>\n                      <app-img style=\"width: 100%;\" [src]=\"weather.weather_icon\"></app-img>\n                    </app-col>\n                  </app-row> -->\n                <app-row>\n                  <app-col style=\"border-right: 1px solid var(--ion-color-step-100);\">\n                    <app-row style=\"text-align: center; border-bottom: 1px solid var(--ion-color-step-100);\">\n                      <app-col>\n                        <h2>{{ weather.weather_temp }}&deg;C</h2>\n                      </app-col>\n                    </app-row>\n                    <app-row style=\"text-align: center;\">\n                      <app-col>\n                        <h5>최고기온</h5>\n                      </app-col>\n                      <app-col>\n                        <h3>{{ weather.high_weather_temp }}&deg;C</h3>\n                      </app-col>\n                    </app-row>\n                    <app-row style=\"text-align: center; border-top: 1px solid var(--ion-color-step-100);\">\n                      <app-col>\n                        <h5>최저기온</h5>\n                      </app-col>\n                      <app-col>\n                        <h3>{{ weather.low_weather_temp }}&deg;C</h3>\n                      </app-col>\n                    </app-row>\n                  </app-col>\n                  <app-col style=\"text-align: center;\">\n                    <!-- <app-img style=\"width: 100%;\" [src]=\"weather.weather_icon\"></app-img> -->\n                    <app-img style=\"width: 80%;\" src=\"assets/img/weather/01_day.svg\"></app-img>\n                  </app-col>\n                </app-row>\n                <app-row style=\"border-top: 1px solid var(--ion-color-step-100); text-align: center;\">\n                  <app-col style=\"padding-left: 0; padding-right: 0;\">\n                    <app-row class=\"title\">\n                      <app-col style=\"border-right: 1px solid var(--ion-color-step-100);\">\n                        <h5>강수량</h5>\n                      </app-col>\n                    </app-row>\n                    <app-row class=\"ratio\">\n                      <app-col style=\"padding: 0; border-right: 1px solid var(--ion-color-step-100);\">\n                        <!-- <h6>{{ weather.weather_rain !== '강수없음' ? weather.weather_rain + \"mm\" : weather.weather_rain}}</h6> -->\n                        <h6>{{ weather.weather_rain }}</h6>\n                      </app-col>\n                    </app-row>\n                  </app-col>\n                  <app-col style=\"padding-left: 0; padding-right: 0;\">\n                    <app-row class=\"title\">\n                      <app-col style=\"border-right: 1px solid var(--ion-color-step-100);\">\n                        <h5>적설량</h5>\n                      </app-col>\n                    </app-row>\n                    <app-row class=\"ratio\">\n                      <app-col style=\"padding: 0; border-right: 1px solid var(--ion-color-step-100);\">\n                        <h6>{{ weather.weather_snow !== '적설없음' ? weather.weather_pty : '-' }}</h6>\n                      </app-col>\n                    </app-row>\n                  </app-col>\n                  <app-col style=\"padding-left: 0; padding-right: 0;\">\n                    <app-row class=\"title\">\n                      <app-col style=\"border-right: 1px solid var(--ion-color-step-100);\">\n                        <h5>최대풍속</h5>\n                      </app-col>\n                    </app-row>\n                    <app-row class=\"ratio\">\n                      <app-col style=\"padding: 0; border-right: 1px solid var(--ion-color-step-100);\">\n                        <h6>{{ weather.weather_speed + \"m/s\"}}</h6>\n                      </app-col>\n                    </app-row>\n                  </app-col>\n                  <app-col style=\"padding-left: 0; padding-right: 0;\">\n                    <app-row class=\"title\">\n                      <app-col>\n                        <h5>미세먼지</h5>\n                      </app-col>\n                    </app-row>\n                    <app-row class=\"ratio\">\n                      <app-col class=\"ratio-col\">\n                        <app-img style=\"width: 20px;\" src=\"assets/img/weather/dust_good.svg\"></app-img>\n                        <h6>{{ dust.grade_name}}</h6>\n                      </app-col>\n                    </app-row>\n                  </app-col>\n                </app-row>\n            </div>\n          </app-card>\n        </app-col>\n      </ng-container>\n\n    </app-row>\n  </div>\n\n  <div *ngIf=\"data.monitor === 'CCTV 모니터링'\" class=\"container\">\n\n    <!-- <app-card *mobileShow>\n      <app-select placeholder=\"모니터링 할 CCTV를 선택해주세요\"></app-select>\n      <ion-row style=\"align-items: flex-start;\">\n        <app-col>\n          <h4>CCTV 설치장소1</h4>\n        </app-col>\n      </ion-row>\n      <app-row>\n        <app-col style=\"position: relative;\">\n          <div style=\"border: 1px solid; height: 500px; position: relative;\">\n          </div>\n        </app-col>\n      </app-row>\n    </app-card> -->\n\n    <ng-container>\n      <app-row style=\"align-items: flex-start;\">\n        <app-col>\n          <ng-container *ngFor=\"let res_1 of cctv\">\n            <app-card *ngIf=\"res_1.cctv_list.length\" color=\"white\">\n              <app-row style=\"align-items: stretch;\">\n  \n                <app-col class=\"cctv-box\">\n                  <app-row>\n                    <app-col>\n                      <h4>{{ res_1.project_name }}</h4>\n                      <!-- <h4>수원당수 A-1BL 아파트 건설공사 1공구</h4> -->\n                    </app-col>\n                    <app-col size=\"auto\"></app-col>\n                  </app-row>\n                  <app-row class=\"cctv-box\">\n                    <ng-container *mobileHidden>\n                      <app-col *ngFor=\"let res_2 of res_1?.cctv_list\" size=\"auto\">\n                        <div>[{{ res_2.cctv_area_name }}]</div>\n                        <!-- <iframe [src]=\"'https://g3.ipcamlive.com/player/player.php?alias='+(res_2.cctv_id+res_2.cctv_channel_no)+'&autoplay=1&disableautofullscreen=1&playsinline=1' | safe: 'resourceUrl'\" width=\"500px\" height=\"280px\" frameborder=\"0\" allowfullscreen></iframe> -->\n\n                        <iframe [src]=\"'https://g3.ipcamlive.com/player/player.php?alias='+(res_2.cctv_alias)+'&autoplay=1&disableautofullscreen=1&playsinline=1' | safe: 'resourceUrl'\" width=\"500px\" height=\"280px\" frameborder=\"0\" allowfullscreen></iframe>\n                        <!-- <iframe src= \"https://dev.ipcamlive.com/player/player.php?alias=62bcbac138ab8\" width=\"800px\" height=\"450px\" frameborder=\"0\" allowfullscreen> </iframe> -->\n                        <!-- <iframe src= \"https://dev.ipcamlive.com/player/player.php?alias=62bcbac138ab8\" width=\"100%\" height=\"210px\" frameborder=\"0\" allowfullscreen> </iframe>  -->\n                        <!-- <iframe [src]=\"'https://dev.ipcamlive.com/player/player.php?alias='+(res_2.cctv_id+res_2.cctv_channel_no)+'&autoplay=1&disableautofullscreen=1&playsinline=1' | safe: 'resourceUrl'\" width=\"500px\" height=\"280px\" frameborder=\"0\" allowfullscreen></iframe> -->\n                        <!-- <iframe src= \"https://dev.ipcamlive.com/player/player.php?alias=62bcbac138ab8\" width=\"800px\" height=\"450px\" frameborder=\"0\" allowfullscreen> </iframe> -->\n                        <!-- <video width=\"352\" height=\"198\" controls autoplay>\n                          <source src=\"http://s40.ipcamlive.com/streams/28iqfxocuhl7vy58z/stream.m3u8\" type=\"application/x-mpegURL\">\n                        </video> -->\n                        <!-- <iframe [src]=\"'http:\\/\\/s40.ipcamlive.com\\/streams\\/28z6ilpcuokabnfdv\\/stream.m3u8' | safe: 'resourceUrl'\" width=\"500\" height=\"280px\" frameborder=\"0\" allowfullscreen> </iframe> -->\n    \n                        <!-- http:\\/\\/s40.ipcamlive.com\\/streams\\/28z6ilpcuokabnfdv\\/stream.m3u8 -->\n                      </app-col>\n                    </ng-container>\n  \n  \n                    <ng-container *mobileShow>\n                      <app-col size=\"12\" *ngFor=\"let res_2 of res_1?.cctv_list\">\n                        <div>[{{ res_2.cctv_area_name }}]</div>\n                        <!-- <iframe src= \"https://dev.ipcamlive.com/player/player.php?alias=62bcbac138ab8\" width=\"100%\" height=\"210px\" frameborder=\"0\" allowfullscreen> </iframe>  -->\n                        <!-- <iframe [src]=\"'https://g3.ipcamlive.com/player/player.php?alias='+(res_2.cctv_id+res_2.cctv_channel_no)+'&autoplay=1&playsinline=1' | safe: 'resourceUrl'\" width=\"100%\" height=\"210px\" frameborder=\"0\" allowfullscreen></iframe> -->\n                        <iframe [src]=\"'https://g3.ipcamlive.com/player/player.php?alias='+(res_2.cctv_alias)+'&autoplay=1&playsinline=1' | safe: 'resourceUrl'\" width=\"100%\" height=\"210px\" frameborder=\"0\" allowfullscreen></iframe>\n                        <!-- <iframe src= \"https://dev.ipcamlive.com/player/player.php?alias=62bcbac138ab8\" width=\"100%\" height=\"210px\" frameborder=\"0\" allowfullscreen></iframe> -->\n                      </app-col>\n                    </ng-container>\n                  </app-row>\n                </app-col>\n              \n              </app-row>\n            </app-card>\n          </ng-container>\n        </app-col>\n\n        <!-- <app-col>\n          <video #videoItem id=\"videoItem\" width=\"500px\" height=\"280px\" controls autoplay>\n            <source type=\"application/x-mpegURL\" src=\"http://s40.ipcamlive.com/streams/28atxw0mvoe391rqu/stream.m3u8\" />\n          </video>\n        </app-col> -->\n      </app-row>\n  \n    </ng-container>\n  </div>\n\n  <div *ngIf=\"data.monitor === '실시간 위치 모니터링'\" style=\"height: 100%\">\n    <app-monitor-worker-location style=\"height: 100%\"\n    [project_id]=\"form.project_id\"\n    [master_company_id]=\"form.master_company_id\"></app-monitor-worker-location>\n  </div>\n  \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_monitor_monitor_module_ts.js.map