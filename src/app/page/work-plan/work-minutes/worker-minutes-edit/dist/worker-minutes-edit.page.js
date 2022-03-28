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
exports.WorkerMinutesEditPage = void 0;
var core_1 = require("@angular/core");
var connect_service_1 = require("src/app/basic/service/core/connect.service");
var file_service_1 = require("src/app/basic/service/core/file.service");
var approval_edit_page_1 = require("src/app/page/confirm/box/approval-edit/approval-edit.page");
var WorkerMinutesEditPage = /** @class */ (function () {
    function WorkerMinutesEditPage(alert, user, connect, toast, modal, file, date) {
        this.alert = alert;
        this.user = user;
        this.connect = connect;
        this.toast = toast;
        this.modal = modal;
        this.file = file;
        this.date = date;
        this.form = {
            project_id: null,
            company_id: null,
            company_name: null,
            safety_meeting_type: null,
            safety_meeting_type_text: null,
            safety_meeting_date: null,
            safety_meeting_place: null,
            safety_meeting_content: null,
            safety_meeting_resolve: null,
            safety_meeting_etc: '',
            file_data: [],
            file: [],
            file_json: new file_service_1.FileJson(),
            // 결재 값
            ctgo_approval_module_id: null,
            approval_cnt_answer: null,
            approval_default_data: [],
            // 수정시 정보
            approval_id: null,
            safety_meeting_id: null // 회의록 ID
        };
        this.approvalForm = {
            project_id: this.user.userData.belong_data.project_id,
            ctgo_approval_module_id: null
        };
    }
    WorkerMinutesEditPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.safety_meeting_id) return [3 /*break*/, 1];
                        // 신규 작성 시, 디폴트 값을 가져옴
                        this.getDefaultForm();
                        this.getDefaultContent();
                        // 결재 - 신규작성시에는 디폴트 결재선을 불러옴
                        this.getDefaultApprovalForm();
                        this.getDefaultApproval();
                        return [3 /*break*/, 3];
                    case 1:
                        // 수정 시에는 정보를 가져와서 채워넣음
                        this.form.safety_meeting_id = this.safety_meeting_id;
                        return [4 /*yield*/, this.getDetail()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        // 나머지 정보
                        this.form.safety_meeting_type_text = this.getTypeText(this.safety_meeting_type);
                        // 결재에는 ctgo_approval_module_id 가 반드시 필요하므로 유의
                        this.form.ctgo_approval_module_id = this.getApprovalModuleId(this.safety_meeting_type);
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkerMinutesEditPage.prototype.getDefaultForm = function () {
        var belong_data = this.user.userData.belong_data;
        this.form.project_id = this.project_id;
        this.form.company_id = belong_data.company_id;
        this.form.company_name = belong_data.company_name;
        this.form.safety_meeting_type = this.safety_meeting_type;
        this.form.safety_meeting_date = this.date.today();
    };
    /**
     * 회의록 정보 가져오기
     */
    WorkerMinutesEditPage.prototype.getDetail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/board/safety_meeting/detail', {
                            safety_meeting_id: this.form.safety_meeting_id
                        }, { parse: ['file_data'] })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.form = __assign(__assign({}, this.form), res.rsObj);
                            // 정보를 가져온 후, 결재 정보를 가져와야 한다!
                            this.getApproval();
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
     * 회의록 텍스트 가져오기
     */
    WorkerMinutesEditPage.prototype.getTypeText = function (safety_meeting_type) {
        switch (safety_meeting_type) {
            case '안전':
                return '안전 및 보건에 관한 협의체 회의록';
            case '노사':
                return '노사 협의체 회의록';
            case '산업':
                return '산업안전보건위원회 회의록';
        }
    };
    /**
     * 회의록 결재선 아이디 가져오기
     */
    WorkerMinutesEditPage.prototype.getApprovalModuleId = function (safety_meeting_type) {
        switch (safety_meeting_type) {
            case '안전':
                return 11;
            case '노사':
                return 10;
            case '산업':
                return 9;
        }
    };
    /**
     * 기본 회의록 협의사항 가져오기
     */
    WorkerMinutesEditPage.prototype.getDefaultContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/board/safety_meeting/default/get', {
                            project_id: this.form.project_id,
                            company_id: this.form.company_id
                        })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            switch (this.form.safety_meeting_type) {
                                case '안전':
                                    this.form.safety_meeting_content = res.rsObj.safety_default;
                                    break;
                                case '노사':
                                    this.form.safety_meeting_content = res.rsObj.union_default;
                                    break;
                                case '산업':
                                    this.form.safety_meeting_content = res.rsObj.health_default;
                                    break;
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
     * 결재선 정보 입력 (분리해서 컴포넌트로 만들어야 함)
     */
    // (임시) approval 불러오는데에 필요한 정보들 가져오기
    WorkerMinutesEditPage.prototype.getDefaultApprovalForm = function () {
        this.approvalForm.project_id = this.form.project_id;
        this.approvalForm.ctgo_approval_module_id = this.getApprovalModuleId(this.safety_meeting_type);
    };
    /**
     * 기본 결재선 정보 가져오기
     */
    WorkerMinutesEditPage.prototype.getDefaultApproval = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/approval/default/get', this.approvalForm, {
                                loading: true,
                                parse: ['answer_datas', 'refer_datas']
                            })];
                    case 1:
                        _a.approvalRes = _b.sent();
                        if (this.approvalRes.rsCode === 0) {
                            // 잘 가지고 왔으면 대씀
                        }
                        else if (this.approvalRes.rsCode === 1008) {
                            // 내 정보를 넣어줌
                            this.approvalRes.rsCode = 0;
                            this.approvalRes.rsObj = {
                                approval_default_id: 0,
                                ctgo_approval_module_id: this.approvalForm.ctgo_approval_module_id,
                                user_id: this.user.userData.user_id,
                                project_id: this.approvalForm.project_id,
                                answer_datas: [{
                                        approval_order_no: 0,
                                        approval_last_state: 0,
                                        answer_user_id: this.user.userData.user_id,
                                        answer_user_name: this.user.userData.user_name
                                    }],
                                refer_datas: []
                            };
                        }
                        else {
                            this.toast.present({ color: 'warning', message: this.approvalRes.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 저장된 결재선 정보 가져오기
     */
    WorkerMinutesEditPage.prototype.getApproval = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, answer_datas, approval_comment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/approval/get', {
                            approval_id: this.form.approval_id
                        })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            answer_datas = JSON.parse(res.rsObj.approval_default_data.answer_datas);
                            approval_comment = res.rsObj.approval_comment;
                            this.approvalRes = new connect_service_1.ConnectResult();
                            this.approvalRes.rsObj = new approval_edit_page_1.ApprovalObj();
                            this.approvalRes.rsObj.answer_datas = answer_datas;
                            this.approvalRes.rsObj.approval_comment = approval_comment;
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
     * 임시저장
     */
    WorkerMinutesEditPage.prototype.temptSave = function () {
        var _this = this;
        this.alert.present({
            message: '임시 저장 하시겠습니까?',
            buttons: [
                { text: '아니오' },
                { text: '예', handler: function () { return __awaiter(_this, void 0, void 0, function () {
                        var answer_datas, refer_datas, url, res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!this.form.safety_meeting_place) {
                                        this.toast.present({ color: 'warning', message: '회의 장소를 입력해주세요.' });
                                        return [2 /*return*/];
                                    }
                                    if (!this.form.safety_meeting_content) {
                                        this.toast.present({ color: 'warning', message: '협의 사항을 입력해주세요.' });
                                        return [2 /*return*/];
                                    }
                                    if (!this.form.safety_meeting_resolve) {
                                        this.toast.present({ color: 'warning', message: '의결 사항을 입력해주세요.' });
                                        return [2 /*return*/];
                                    }
                                    answer_datas = this.approvalRes.rsObj.answer_datas;
                                    /**
                                     * order_no 정렬
                                     * 최종 결재자만 approval_last_state 가 1이고 나머지는 0임
                                     */
                                    answer_datas.forEach(function (item, i) {
                                        item.approval_order_no = i + 1;
                                        item.approval_last_state = i < answer_datas.length - 1 ? 0 : 1;
                                    });
                                    refer_datas = this.approvalRes.rsObj.refer_datas || [];
                                    this.form.safety_meeting_type = '안전';
                                    this.form.approval_cnt_answer = '임시저장';
                                    this.form.approval_default_data = [
                                        {
                                            default_type: 'ANSWER',
                                            answer_datas: answer_datas
                                        },
                                        {
                                            default_type: 'REFER',
                                            refer_datas: refer_datas
                                        }
                                    ];
                                    url = '';
                                    if (!this.form.approval_id) {
                                        url = '/board/safety_meeting/insert';
                                    }
                                    else {
                                        url = '/board/safety_meeting/update';
                                    }
                                    return [4 /*yield*/, this.connect.run(url, this.form, { loading: true })];
                                case 1:
                                    res = _a.sent();
                                    if (res.rsCode === 0) {
                                        this.toast.present({ color: 'success', message: '임시저장 되었습니다.' });
                                        if (!this.form.approval_id) {
                                            // 신규 작성이었다면, approval_id와 safety_meeting_id 반환받아서 넣어줘야 임시저장 시, 새로 추가되는 것이 아닌 수정이 된다.
                                            this.form.approval_id = res.rsObj.approval_id;
                                            this.form.safety_meeting_id = res.rsObj.safety_meeting_id;
                                        }
                                    }
                                    else {
                                        this.toast.present({ color: 'warning', message: res.rsMsg });
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); } }
            ]
        });
    };
    /**
     * 결재 요청
     */
    WorkerMinutesEditPage.prototype.sendApproval = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        core_1.Input()
    ], WorkerMinutesEditPage.prototype, "safety_meeting_id");
    __decorate([
        core_1.Input()
    ], WorkerMinutesEditPage.prototype, "project_id");
    __decorate([
        core_1.Input()
    ], WorkerMinutesEditPage.prototype, "safety_meeting_type");
    WorkerMinutesEditPage = __decorate([
        core_1.Component({
            selector: 'app-worker-minutes-edit',
            templateUrl: './worker-minutes-edit.page.html',
            styleUrls: ['./worker-minutes-edit.page.scss']
        })
    ], WorkerMinutesEditPage);
    return WorkerMinutesEditPage;
}());
exports.WorkerMinutesEditPage = WorkerMinutesEditPage;
