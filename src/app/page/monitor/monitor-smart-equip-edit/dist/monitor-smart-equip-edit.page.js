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
exports.MonitorSmartEquipEditPage = void 0;
var core_1 = require("@angular/core");
var MonitorSmartEquipEditPage = /** @class */ (function () {
    function MonitorSmartEquipEditPage(connect, toast, user) {
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
            master_company_id: 1,
            ctgo_machine_serial_id: 0
        };
        /**
         * @var original_items - 원본 데이터 저장용
         */
        this.original_items = [];
    }
    MonitorSmartEquipEditPage.prototype.ngOnInit = function () {
        this.getForm();
        this.get();
    };
    MonitorSmartEquipEditPage.prototype.getForm = function () {
        var belong_data = this.user.userData.belong_data;
        this.form.project_id = belong_data.project_id;
        this.form.master_company_id = belong_data.master_company_id;
    };
    /**
     * @function get(): 개별현장 스마트 장비 리스트를 불러오는 메서드
     */
    MonitorSmartEquipEditPage.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, total_1, using_total_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/integrated/smart_equip_list', this.form)];
                    case 1:
                        _a.res = _b.sent();
                        if (this.res.rsCode === 0) {
                            total_1 = 0;
                            using_total_1 = 0;
                            this.res.rsMap.map(function (item) {
                                total_1 = total_1 + item.machine_count;
                                using_total_1 = using_total_1 + item.mmachine_using_count;
                            });
                            // 원본데이터 저장
                            this.original_items = JSON.parse(JSON.stringify(this.res.rsMap));
                            this.total_count = total_1;
                            this.using_total_count = using_total_1;
                        }
                        else if (this.res.rsCode === 1008) {
                            // 암것도 안함
                        }
                        else {
                            this.toast.present({ message: this.res.rsMsg, color: 'warning' });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function edit(): 개별현장 스마트 장비 리스트를 수정하는 메서드
     */
    MonitorSmartEquipEditPage.prototype.edit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var edit_items, validation_state;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        edit_items = [];
                        this.res.rsMap.map(function (item) {
                            _this.original_items.map(function (original_item) {
                                if (Number(original_item.master_company_id) === Number(item.master_company_id)
                                    && Number(original_item.ctgo_machine_serial_id) === Number(item.ctgo_machine_serial_id)
                                    && Number(original_item.mmachine_using_count) !== Number(item.mmachine_using_count)) {
                                    edit_items.push(item);
                                }
                            });
                        });
                        if (!edit_items.length)
                            return [2 /*return*/, this.toast.present({ message: '변경된 내용이 없습니다.', color: 'warning' })];
                        validation_state = true;
                        edit_items.map(function (item) {
                            if (Number(item.mmachine_using_count) > Number(item.machine_count))
                                validation_state = false;
                        });
                        if (!validation_state)
                            return [2 /*return*/, this.toast.present({ message: '가동중 값은 보유대수보다 높을수 없습니다.', color: 'warning' })];
                        return [4 /*yield*/, edit_items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.edit_items({
                                                ctgo_machine_serial_id: item.ctgo_machine_serial_id,
                                                in_operation_cnt: Number(item.mmachine_using_count),
                                                master_company_id: item.master_company_id,
                                                project_id: this.form.project_id
                                            })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.toast.present({ message: '내용이 적용되었습니다.' })];
                    case 2:
                        _a.sent();
                        setTimeout(function () { _this.get(); }, 300);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @function edit_items(): 수정 메서드 실행
     */
    MonitorSmartEquipEditPage.prototype.edit_items = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/integrated/smart_equip_update', item)];
                    case 1:
                        _a.res = _b.sent();
                        if (this.res.rsCode === 0) {
                        }
                        else {
                            // this.toast.present({message:this.res.rsMsg, color:'warning'});
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MonitorSmartEquipEditPage = __decorate([
        core_1.Component({
            selector: 'app-monitor-smart-equip-edit',
            templateUrl: './monitor-smart-equip-edit.page.html',
            styleUrls: ['./monitor-smart-equip-edit.page.scss']
        })
    ], MonitorSmartEquipEditPage);
    return MonitorSmartEquipEditPage;
}());
exports.MonitorSmartEquipEditPage = MonitorSmartEquipEditPage;
