"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.RiskEvaluationEditPage = void 0;
var core_1 = require("@angular/core");
var file_service_1 = require("src/app/basic/service/core/file.service");
var search_area_component_1 = require("src/app/component/modal/search-area/search-area.component");
var risk_evaluation_popup_page_1 = require("../risk-evaluation-popup/risk-evaluation-popup.page");
var RiskEvaluationEditPage = /** @class */ (function () {
    function RiskEvaluationEditPage(user, connect, toast, _modal, loading, date) {
        this.user = user;
        this.connect = connect;
        this.toast = toast;
        this._modal = _modal;
        this.loading = loading;
        this.date = date;
        this.form = {
            project_id: null,
            master_company_id: null,
            company_id: null,
            company_name: null,
            ctgo_construction_id: null,
            risk_asment_type: '수시',
            risk_asment_type_text: '수시',
            risk_asment_start_date: this.date.today({ date: 1 }),
            risk_asment_end_date: this.date.today({ date: 1 }),
            evaluation_data: [],
            risk_file_data: [],
            file: [],
            file_json: new file_service_1.FileJson(),
            // 결재 값
            ctgo_approval_module_id: null,
            approval_cnt_answer: null,
            approval_default_data: [],
            // 수정시
            approval_id: null,
            risk_asment_id: null,
            user_name: null,
            create_date: this.date.today()
        };
        this.permission = {
            edit: false
        };
        this.riskTableList = [];
    }
    RiskEvaluationEditPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.user.userData);
                        if (!!this.risk_asment_id) return [3 /*break*/, 1];
                        // 신규 작성 시, 디폴트 값을 가져옴
                        this.getDefaultForm(); // 폼 채우기
                        return [3 /*break*/, 3];
                    case 1:
                        // 수정 시에는 정보를 가져와서 채워넣음
                        this.form.risk_asment_id = this.risk_asment_id;
                        return [4 /*yield*/, this.getDetail()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        // 나머지 정보
                        this.form.risk_asment_type_text = this.getTypeText(this.form.risk_asment_type);
                        // 결재에는 ctgo_approval_module_id 가 반드시 필요하므로 유의
                        this.form.ctgo_approval_module_id = this.getApprovalModuleId(this.form.risk_asment_type);
                        return [2 /*return*/];
                }
            });
        });
    };
    RiskEvaluationEditPage.prototype.getDefaultForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, user_name, belong_data, res, contractor;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.user.userData, user_name = _a.user_name, belong_data = _a.belong_data;
                        this.form.project_id = this.project_id;
                        this.form.company_id = belong_data.company_id;
                        this.form.company_name = belong_data.company_name;
                        this.form.risk_asment_type = this.risk_asment_type;
                        this.form.user_name = user_name;
                        if (!(belong_data.company_contract_type === '원청사')) return [3 /*break*/, 1];
                        this.form.master_company_id = belong_data.company_id;
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(belong_data.company_contract_type === '협력사')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.connect.run('/category/certify/search_my_master_company/get', {
                                project_id: this.form.project_id,
                                search_text: ''
                            })];
                    case 2:
                        res = _b.sent();
                        if (res.rsCode === 0) {
                            contractor = res.rsMap[0];
                            this.form.master_company_id = contractor.master_company_id;
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 위험성평가 정보 가져오기
     */
    RiskEvaluationEditPage.prototype.getDetail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/risk/assessment/detail/get', {
                            risk_asment_id: this.form.risk_asment_id
                        }, { parse: ['risk_file_data'] })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.form = __assign(__assign({}, this.form), res.rsObj);
                            // 정보를 가져온 후, 결재 정보를 가져와야 한다! => app-approval component가 알아서 자동으로 가져온다!
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 위험성평가 텍스트 가져오기
     */
    RiskEvaluationEditPage.prototype.getTypeText = function (risk_asment_type) {
        switch (risk_asment_type) {
            case '최초':
                return '최초';
            case '정기':
                return '정기';
            case '수시':
                return '수시';
        }
    };
    /**
     * 회의록 결재선 아이디 가져오기
     */
    RiskEvaluationEditPage.prototype.getApprovalModuleId = function (risk_asment_type) {
        switch (risk_asment_type) {
            case '최초':
                return 6;
            case '정기':
                return 7;
            case '수시':
                return 8;
        }
    };
    /**
     * 삭제 버튼 클릭
     */
    RiskEvaluationEditPage.prototype.onDeleteClick = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ev["delete"]()];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this._modal.dismiss();
                            // 목록을 새로고침 해줘야 함
                            window.dispatchEvent(new CustomEvent('risk-list:get()'));
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 임시 저장버튼 클릭
     */
    RiskEvaluationEditPage.prototype.onSaveClick = function (ev) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var approval_data, url, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        approval_data = ev.approval_data;
                        this.form.evaluation_data = this.riskTableToList(this.riskTableList);
                        if (!this.form.ctgo_construction_id) {
                            this.toast.present({ color: 'warning', message: '공종을 선택해주세요.' });
                            return [2 /*return*/];
                        }
                        if (!((_a = this.form.evaluation_data) === null || _a === void 0 ? void 0 : _a.length)) {
                            this.toast.present({ color: 'warning', message: '위험성 평가 평가표 정보를 입력해주세요.' });
                            return [2 /*return*/];
                        }
                        this.form.approval_cnt_answer = '임시저장';
                        this.form.approval_default_data = approval_data;
                        url = '';
                        if (!this.form.approval_id) {
                            url = '/risk/assessment/insert';
                        }
                        else {
                            url = '/risk/assessment/update';
                        }
                        return [4 /*yield*/, this.connect.run(url, this.form, { loading: true })];
                    case 1:
                        res = _b.sent();
                        if (res.rsCode === 0) {
                            this.toast.present({ color: 'success', message: '임시저장 되었습니다.' });
                            if (!this.form.approval_id) {
                                // 신규 작성이었다면, approval_id와 safety_meeting_id 반환받아서 넣어줘야 임시저장 시, 새로 추가되는 것이 아닌 수정이 된다.
                                this.form.approval_id = res.rsObj.approval_id;
                                this.form.risk_asment_id = res.rsObj.risk_asment_id;
                                // 목록을 새로고침 해줘야 함
                                window.dispatchEvent(new CustomEvent('risk-list:get()'));
                            }
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 결재 요청 버튼 클릭
     */
    RiskEvaluationEditPage.prototype.onSendClick = function (ev) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var approval_data, res, loading, res, approvalRes;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        approval_data = ev.approval_data;
                        this.form.evaluation_data = this.riskTableToList(this.riskTableList);
                        if (!this.form.ctgo_construction_id) {
                            this.toast.present({ color: 'warning', message: '공종을 선택해주세요.' });
                            return [2 /*return*/];
                        }
                        if (!((_a = this.form.evaluation_data) === null || _a === void 0 ? void 0 : _a.length)) {
                            this.toast.present({ color: 'warning', message: '위험성 평가 평가표 정보를 입력해주세요.' });
                            return [2 /*return*/];
                        }
                        this.form.approval_cnt_answer = '결재중';
                        this.form.approval_default_data = approval_data;
                        if (!!this.form.approval_id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.connect.run('/risk/assessment/insert', this.form, { loading: true })];
                    case 1:
                        res = _b.sent();
                        if (res.rsCode === 0) {
                            this.toast.present({ color: 'success', message: '결재요청 되었습니다.' });
                            this._modal.dismiss();
                            // 목록을 새로고침 해줘야 함
                            window.dispatchEvent(new CustomEvent('risk-list:get()'));
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [3 /*break*/, 8];
                    case 2: return [4 /*yield*/, this.loading.present()];
                    case 3:
                        loading = _b.sent();
                        return [4 /*yield*/, this.connect.run('/risk/assessment/update', this.form)];
                    case 4:
                        res = _b.sent();
                        if (!(res.rsCode === 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, ev.send()];
                    case 5:
                        approvalRes = _b.sent();
                        if (approvalRes.rsCode === 0) {
                            this.toast.present({ color: 'success', message: '결재요청 되었습니다.' });
                            this._modal.dismiss();
                            // 목록을 새로고침 해줘야 함
                            window.dispatchEvent(new CustomEvent('risk-list:get()'));
                        }
                        else {
                            this.toast.present({ color: 'warning', message: approvalRes.rsMsg });
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        this.toast.present({ color: 'warning', message: res.rsMsg });
                        _b.label = 7;
                    case 7:
                        loading.dismiss();
                        _b.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 결재 회수 버튼 클릭
     */
    RiskEvaluationEditPage.prototype.onRecoveryClick = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ev.recovery()];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            // 목록을 새로고침 해줘야 함
                            window.dispatchEvent(new CustomEvent('risk-list:get()'));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 결재 버튼 클릭
     */
    RiskEvaluationEditPage.prototype.onApprovalClick = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ev.approval()];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            // 목록을 새로고침 해줘야 함
                            window.dispatchEvent(new CustomEvent('risk-list:get()'));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 결재 상태가 변할 때 행동
     */
    RiskEvaluationEditPage.prototype.onApprovalChange = function (ev) {
        if (ev.btnList.includes('임시저장')) {
            this.permission.edit = true;
        }
        else {
            this.permission.edit = false;
        }
    };
    RiskEvaluationEditPage.prototype.add = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data, riskList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
                            component: risk_evaluation_popup_page_1.RiskEvaluationPopupPage,
                            componentProps: {
                                project_id: this.form.project_id
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            riskList = data.riskList;
                            /** 테이블 형식 데이터로 변환 */
                            this.riskTableList = this.riskListToTable(riskList);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RiskEvaluationEditPage.prototype.riskFrequencyChange = function (factorItem) {
        var risk_frequency = factorItem.risk_frequency, risk_strength = factorItem.risk_strength;
        factorItem.risk_danger_level = risk_frequency * risk_strength;
    };
    RiskEvaluationEditPage.prototype.riskStrengthChange = function (factorItem) {
        var risk_frequency = factorItem.risk_frequency, risk_strength = factorItem.risk_strength;
        factorItem.risk_danger_level = risk_frequency * risk_strength;
    };
    /**
     * 편집 가능 리스트를 테이블 리스트 형태로 변경
     */
    RiskEvaluationEditPage.prototype.riskListToTable = function (riskList) {
        var riskTableList = [];
        riskList.forEach(function (riskItem) {
            var tableConstructionItem = riskTableList.find(function (item) { return item.risk_construction_id === riskItem.risk_construction_id; });
            /** 공사명이 없다면 새로 추가 */
            if (!tableConstructionItem) {
                tableConstructionItem = {
                    rowspan: 0,
                    risk_construction_id: riskItem.risk_construction_id,
                    risk_construction_name: riskItem.risk_construction_name,
                    seq_no: riskItem.seq_no,
                    unitList: []
                };
                riskTableList.push(tableConstructionItem);
            }
            var tableUnitItem = tableConstructionItem.unitList.find(function (item) { return item.risk_unit_id === riskItem.risk_unit_id; });
            /** 공사명에 단위작업이 없다면 새로 추가 */
            if (!tableUnitItem) {
                tableUnitItem = {
                    rowspan: 0,
                    risk_unit_id: riskItem.risk_unit_id,
                    risk_unit_name: riskItem.risk_unit_name,
                    area_top_id: riskItem.area_top_id,
                    area_top_name: riskItem.area_top_name,
                    area_middle_id: riskItem.area_middle_id,
                    area_middle_name: riskItem.area_middle_name,
                    area_bottom_id: riskItem.area_bottom_id,
                    area_bottom_name: riskItem.area_bottom_name,
                    ctgo_machinery_ids: riskItem.ctgo_machinery_ids,
                    ctgo_machinery_names: riskItem.ctgo_machinery_names,
                    ctgo_tool_ids: riskItem.ctgo_tool_ids,
                    ctgo_tool_names: riskItem.ctgo_tool_names,
                    facterList: []
                };
                tableConstructionItem.unitList.push(tableUnitItem);
            }
            /** 위험요인 아이디가 있고(직접입력이 아니고) && 현재 있는 위험요인인지 체크 */
            var tableFactorItem = tableUnitItem.facterList.find(function (item) { return item.risk_factor_id && item.risk_factor_id === riskItem.risk_factor_id; });
            /** 단위작업에 위험요인이 없다면 새로 추가 */
            if (!tableFactorItem) {
                tableFactorItem = {
                    rowspan: 0,
                    risk_factor_id: riskItem.risk_factor_id,
                    risk_factor_name: riskItem.risk_factor_name,
                    risk_frequency: riskItem.risk_frequency,
                    risk_strength: riskItem.risk_strength,
                    risk_danger_level: riskItem.risk_danger_level,
                    planList: []
                };
                tableUnitItem.facterList.push(tableFactorItem);
            }
            /** 위험요인에 감소대책 추가 */
            tableFactorItem.planList.push({
                risk_plan_id: null,
                risk_plan_name: riskItem.risk_plan_name
            });
            /** 테이블 레이아웃 병합 정보 추가 */
            tableConstructionItem.rowspan++;
            tableUnitItem.rowspan++;
            tableFactorItem.rowspan++;
        });
        return riskTableList;
    };
    /**
     * 테이블 리스트를 편집 가능 리스트 형태로 변경
     */
    RiskEvaluationEditPage.prototype.riskTableToList = function (riskTableList) {
        var _this = this;
        var riskList = [];
        riskTableList.forEach(function (constructionItem) {
            constructionItem.unitList.forEach(function (unitItem) {
                unitItem.facterList.forEach(function (factorItem) {
                    factorItem.planList.forEach(function (planItem) {
                        riskList.push({
                            risk_asment_id: _this.form.risk_asment_id,
                            seq_no: constructionItem.seq_no,
                            risk_construction_id: constructionItem.risk_construction_id,
                            risk_construction_name: constructionItem.risk_construction_name,
                            risk_unit_id: unitItem.risk_unit_id,
                            risk_unit_name: unitItem.risk_unit_name,
                            area_top_id: unitItem.area_top_id,
                            area_top_name: unitItem.area_top_name,
                            area_middle_id: unitItem.area_middle_id,
                            area_middle_name: unitItem.area_middle_name,
                            area_bottom_id: unitItem.area_bottom_id,
                            area_bottom_name: unitItem.area_bottom_name,
                            ctgo_machinery_ids: unitItem.ctgo_machinery_ids,
                            ctgo_machinery_names: unitItem.ctgo_machinery_names,
                            ctgo_tool_ids: unitItem.ctgo_tool_ids,
                            ctgo_tool_names: unitItem.ctgo_tool_names,
                            risk_factor_id: factorItem.risk_factor_id,
                            risk_factor_name: factorItem.risk_factor_name,
                            risk_frequency: factorItem.risk_frequency,
                            risk_strength: factorItem.risk_strength,
                            risk_danger_level: factorItem.risk_danger_level,
                            risk_plan_id: planItem.risk_plan_id,
                            risk_plan_name: planItem.risk_plan_name // 감소대책
                        });
                    });
                });
            });
        });
        return riskList;
    };
    /**
     * 장소 팝업
     */
    RiskEvaluationEditPage.prototype.openArea = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
                            component: search_area_component_1.SearchAreaComponent,
                            componentProps: {
                                project_id: this.form.project_id
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            console.log(data);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 건설기계 팝업
     */
    RiskEvaluationEditPage.prototype.openMachinery = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
                            component: search_area_component_1.SearchAreaComponent,
                            componentProps: {
                                project_id: this.form.project_id
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            console.log(data);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 특수공도구 팝업
     */
    RiskEvaluationEditPage.prototype.openTool = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
                            component: search_area_component_1.SearchAreaComponent,
                            componentProps: {
                                project_id: this.form.project_id
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            console.log(data);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Input()
    ], RiskEvaluationEditPage.prototype, "risk_asment_id");
    __decorate([
        core_1.Input()
    ], RiskEvaluationEditPage.prototype, "project_id");
    __decorate([
        core_1.Input()
    ], RiskEvaluationEditPage.prototype, "risk_asment_type");
    RiskEvaluationEditPage = __decorate([
        core_1.Component({
            selector: 'app-risk-evaluation-edit',
            templateUrl: './risk-evaluation-edit.page.html',
            styleUrls: ['./risk-evaluation-edit.page.scss']
        })
    ], RiskEvaluationEditPage);
    return RiskEvaluationEditPage;
}());
exports.RiskEvaluationEditPage = RiskEvaluationEditPage;