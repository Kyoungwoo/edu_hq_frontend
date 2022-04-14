"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.MonitorPage = exports.SmartEquip = exports.TodayConstructionItem = exports.TodayWorkItem = void 0;
var today_departure_status_list_page_1 = require("./../work-management/departure-status/today-departure-status-list/today-departure-status-list.page");
var monitor_smart_equip_edit_page_1 = require("./monitor-smart-equip-edit/monitor-smart-equip-edit.page");
var core_1 = require("@angular/core");
var connect_service_1 = require("src/app/basic/service/core/connect.service");
var naver_map_component_1 = require("src/app/basic/component/input/naver-map/naver-map.component");
var monitor_realtime_location_page_1 = require("./monitor-realtime-location/monitor-realtime-location.page");
/**
 * @class TodayConstructionItem
 *  - 금일 출역 근로자 변수 class
 */
var TodayWorkItem = /** @class */ (function () {
    function TodayWorkItem() {
    }
    return TodayWorkItem;
}());
exports.TodayWorkItem = TodayWorkItem;
/**
 * @class TodayConstructionItem
 *  - 공종별 출역인원 변수 class
 */
var TodayConstructionItem = /** @class */ (function () {
    function TodayConstructionItem() {
    }
    return TodayConstructionItem;
}());
exports.TodayConstructionItem = TodayConstructionItem;
/**
 * @class SmartEquip
 *  - 스마트 안전장비 변수 class
 */
var SmartEquip = /** @class */ (function () {
    function SmartEquip() {
    }
    return SmartEquip;
}());
exports.SmartEquip = SmartEquip;
var MonitorPage = /** @class */ (function () {
    function MonitorPage(connect, toast, modal, route, user, date) {
        this.connect = connect;
        this.toast = toast;
        this.modal = modal;
        this.route = route;
        this.user = user;
        this.date = date;
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
        this.scandata = "http://m.site.naver.com/0TGMk";
        this.maxIndex = 300;
        this.graphArr3 = [
            {
                name: '작업전',
                count: 10
            },
            {
                name: '작업중',
                count: 90
            },
            {
                name: '작업종료',
                count: 50
            }
        ];
        this.graphArr4 = [
            {
                name: '고소 작업(높이 2m 이상)',
                count: 17
            },
            {
                name: '굴착 가설(깊이 1.5m 이상)',
                count: 8
            },
            {
                name: '기설 구조물 설치 해제',
                count: 80
            },
            {
                name: '밀폐공간',
                count: 35
            },
            {
                name: '휴일작업',
                count: 70
            },
        ];
        this.gpsData = new connect_service_1.ConnectResult();
        this.gps_log_id = [];
        this.gps_log_data = new naver_map_component_1.GpsCoordinateData();
        this.data = {
            monitor: '통합관제'
        };
    }
    MonitorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.$activedRoute = this.route.queryParams.subscribe(function (params) {
            var monitor = params.monitor;
            _this.data = {
                monitor: monitor || '통합관제'
            };
        });
        this.methodContrroller();
    };
    /**
     * @function ngOnDestroy(): 해당 페이지가 없어지면 걸려있던 subscribe 및 interval을 해제해줍니다.
     */
    MonitorPage.prototype.ngOnDestroy = function () {
        this.$activedRoute.unsubscribe();
    };
    /**
     * @function methodContrroller(): 통합관제 데이터를 모두 불러오는 메서드(인터벌이 들어가있는 메서드 제외)
     */
    MonitorPage.prototype.methodContrroller = function () {
        this.wokerInGetList();
        this.gpsGet(); //근로자 gps
        this.getTodayWorker(); // 금일 출역 작업자
        this.getTodayConstruction(); // 공종별 출역 작업자
        this.getSmartEquip(); // 스마트 안전장비 
    };
    /**
     * @function getTodayWorker(): 금일 출역 작업자 데이터를 가져오는 메서드
     */
    MonitorPage.prototype.getTodayWorker = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, total_1, total_arr_1, max_today, lineCount, graph_item, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/integrated/today_worker', this.form, {})];
                    case 1:
                        res = _a.sent();
                        switch (res.rsCode) {
                            case 0:
                                total_1 = 0;
                                this.todayWork = res;
                                this.todayWork.rsMap.map(function (item) { total_1 = total_1 + item.master_worker + item.company_worker; });
                                this.todayWork_totalCount = total_1;
                                total_arr_1 = [];
                                this.todayWork.rsMap.map(function (item) { total_arr_1.push(item.master_worker + item.company_worker); });
                                max_today = Math.max.apply(null, total_arr_1);
                                lineCount = (Math.ceil(max_today / 100) * 100) * 0.01;
                                this.todayWork_ceil_Total = Math.ceil(max_today / 100) * 100;
                                graph_item = [];
                                for (i = 0; i < lineCount; i++) {
                                    graph_item.push((i + 1) * 100);
                                }
                                this.todayWork_graphLine = graph_item;
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function getTodayConstruction(): 공종별 출역 작업자 데이터를 가져오는 메서드
     */
    MonitorPage.prototype.getTodayConstruction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, total_2, total_arr_2, max_today;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/integrated/construction_worker', this.form, {})];
                    case 1:
                        res = _a.sent();
                        switch (res.rsCode) {
                            case 0:
                                total_2 = 0;
                                this.todayConstruction = res;
                                this.todayConstruction.rsMap.map(function (item) { total_2 = total_2 + item.cnt; });
                                this.todayConstruction_totalCount = total_2;
                                total_arr_2 = [];
                                this.todayConstruction.rsMap.map(function (item) { total_arr_2.push(item.cnt); });
                                max_today = Math.max.apply(null, total_arr_2);
                                this.todayConstruction_ceil_Total = Math.ceil(max_today / 10) * 10;
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function getSmartEquip(): 스마트장비 데이터를 가져오는 메서드
     */
    MonitorPage.prototype.getSmartEquip = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/integrated/smart_equip', { project_id: 1, master_company_id: 1 }, {})];
                    case 1:
                        res = _a.sent();
                        switch (res.rsCode) {
                            case 0:
                                this.smartEquip = res;
                                this.smartEquip.rsMap.map(function (item) {
                                    if (item.ctgo_machine_serial_id == 8) {
                                        _this.smartEquip_structure = item;
                                        _this.smartEquip_structure.ctgo_machine_serial_name = '구조물 변위 감지';
                                    }
                                    if (item.ctgo_machine_serial_id == 4) {
                                        _this.smartEquip_crane = item;
                                        _this.smartEquip_crane.ctgo_machine_serial_name = '크레인 상하차 감지';
                                    }
                                    if (item.ctgo_machine_serial_id == 7) {
                                        _this.smartEquip_closeness = item;
                                        _this.smartEquip_closeness.ctgo_machine_serial_name = '밀폐공간 유해물질 감지';
                                    }
                                });
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function smartEquipEdit(): 스마트 안전장비 가동중 수정 모달입니다.
     */
    MonitorPage.prototype.smartEquipEdit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: monitor_smart_equip_edit_page_1.MonitorSmartEquipEditPage,
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function todayWorkDetail(): 금일 출역 작업자 모달입니다.
     */
    MonitorPage.prototype.todayWorkDetail = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var trnas_item, modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        trnas_item = item;
                        trnas_item.row_count = 0;
                        return [4 /*yield*/, this.modal.create({
                                component: today_departure_status_list_page_1.TodayDepartureStatusListPage,
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
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MonitorPage.prototype.wokerInGetList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/integrated/worker/in/list', this.form)];
                    case 1:
                        _a.workerInRes = _b.sent();
                        if (this.workerInRes.rsCode !== 0) {
                            this.toast.present({ message: this.workerInRes.rsMsg, color: 'warning' });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MonitorPage.prototype.gpsGet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/integrated/gps/log', this.form)];
                    case 1:
                        _a.gpsData = _b.sent();
                        console.log("res", this.gpsData.rsMap);
                        if (this.gpsData.rsCode === 0) {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MonitorPage.prototype.realtimeedit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: monitor_realtime_location_page_1.MonitorRealtimeLocationPage
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MonitorPage.prototype.style = function (item) {
        var style;
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
    };
    MonitorPage = __decorate([
        core_1.Component({
            selector: 'app-moniter',
            templateUrl: './monitor.page.html',
            styleUrls: ['./monitor.page.scss']
        })
    ], MonitorPage);
    return MonitorPage;
}());
exports.MonitorPage = MonitorPage;
