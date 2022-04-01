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
exports.ApprovalComponent = void 0;
var core_1 = require("@angular/core");
var connect_service_1 = require("src/app/basic/service/core/connect.service");
var approval_edit_page_1 = require("src/app/page/confirm/box/approval-edit/approval-edit.page");
var confirm_process_popup_component_1 = require("../confirm-process-popup/confirm-process-popup.component");
var confirm_setting_popup_component_1 = require("../confirm-setting-popup/confirm-setting-popup.component");
var ApprovalComponent = /** @class */ (function () {
    function ApprovalComponent(user, connect, toast, _modal, alert) {
        this.user = user;
        this.connect = connect;
        this.toast = toast;
        this._modal = _modal;
        this.alert = alert;
        this.deleteClick = new core_1.EventEmitter();
        this.saveClick = new core_1.EventEmitter();
        this.sendClick = new core_1.EventEmitter();
        this.recoveryClick = new core_1.EventEmitter();
        this.approvalClick = new core_1.EventEmitter();
        this.printClick = new core_1.EventEmitter();
        this.change = new core_1.EventEmitter();
        this.form = {
            project_id: null,
            ctgo_approval_module_id: null,
            approval_id: null
        };
        this.btnList = [];
        /** 결재 버튼 클릭 */
        this.approvalForm = {
            approval_id: null,
            approval_answer: null,
            approval_comment: null
        };
    }
    Object.defineProperty(ApprovalComponent.prototype, "project_id", {
        // 신규 결재선에 필요한 정보
        set: function (v) {
            if (this.form.approval_id !== v) {
                this.form.project_id = v;
                this.get();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprovalComponent.prototype, "ctgo_approval_module_id", {
        set: function (v) {
            if (this.form.ctgo_approval_module_id !== v) {
                this.form.ctgo_approval_module_id = v;
                this.get();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprovalComponent.prototype, "approval_id", {
        // 결재선 불러올 때, 필요한 정보
        set: function (v) {
            if (this.form.approval_id !== v) {
                this.form.approval_id = v;
                this.get();
            }
        },
        enumerable: false,
        configurable: true
    });
    ApprovalComponent.prototype.ngOnInit = function () { };
    /**
     * 버튼 클릭
     */
    ApprovalComponent.prototype.onBtnClick = function (btn) {
        switch (btn) {
            case '삭제':
                this.onDeleteClick();
                break;
            case '임시저장':
                this.onSaveClick();
                break;
            case '결재선':
                this.onEditClick();
                break;
            case '결재요청':
                this.onSendClick();
                break;
            case '결재회수':
                this.onRecoveryClick();
                break;
            case '결재':
                this.onApprovalClick();
                break;
        }
    };
    /** 삭제버튼 클릭 */
    ApprovalComponent.prototype.onDeleteClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.alert.present({
                    message: '삭제 하시겠습니까?',
                    buttons: [
                        { text: '아니오' },
                        { text: '예', handler: function () {
                                _this.deleteClick.emit({
                                    "delete": _this.deleteApproval.bind(_this)
                                });
                            } }
                    ]
                });
                return [2 /*return*/];
            });
        });
    };
    ApprovalComponent.prototype.deleteApproval = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/approval/delete', {
                            approval_id: this.form.approval_id
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /** 저장버튼 클릭 */
    ApprovalComponent.prototype.onSaveClick = function () {
        var _this = this;
        this.alert.present({
            message: '임시 저장 하시겠습니까?',
            buttons: [
                { text: '아니오' },
                { text: '예', handler: function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.saveClick.emit(this.getClickEvent());
                            return [2 /*return*/];
                        });
                    }); } }
            ]
        });
    };
    /** 결재선 변경 버튼 클릭 */
    ApprovalComponent.prototype.onEditClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
                            component: confirm_setting_popup_component_1.ConfirmSettingPopupComponent,
                            componentProps: {
                                approvalObj: this.res.rsObj
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            this.res.rsObj.answer_datas = data.answer_datas;
                            this.res.rsObj.refer_datas = data.refer_datas;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 결재 요청 버튼 클릭 */
    ApprovalComponent.prototype.onSendClick = function () {
        var _this = this;
        this.alert.present({
            message: '결재 요청 하시겠습니까?',
            buttons: [
                { text: '아니오' },
                { text: '예', handler: function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.sendClick.emit(this.getClickEvent());
                            return [2 /*return*/];
                        });
                    }); } }
            ]
        });
    };
    /** 임시저장 된 결재를 결재 요청 상태 변경 함수 */
    ApprovalComponent.prototype.sendApproval = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/approval/update/req', {
                            approval_id: this.form.approval_id
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /** 결재 회수 버튼 클릭 */
    ApprovalComponent.prototype.onRecoveryClick = function () {
        var _this = this;
        this.alert.present({
            message: '회수 하시겠습니까?',
            buttons: [
                { text: '아니오' },
                { text: '예', handler: function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.recoveryClick.emit(this.getClickEvent());
                            return [2 /*return*/];
                        });
                    }); } }
            ]
        });
    };
    /** 회수 함수 */
    ApprovalComponent.prototype.recoveryApproval = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/approval/recovery', {
                            approval_id: this.form.approval_id
                        }, { loading: true })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0)
                            this.get();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ApprovalComponent.prototype.onApprovalClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
                            component: confirm_process_popup_component_1.ConfirmProcessPopupComponent,
                            cssClass: 'confirm-process-modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            this.approvalForm = {
                                approval_id: this.form.approval_id,
                                approval_answer: data.approval_answer,
                                approval_comment: data.approval_comment
                            };
                            this.approvalClick.emit(this.getClickEvent());
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 결재 함수 */
    ApprovalComponent.prototype.approvalApproval = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/approval/send', this.approvalForm, { loading: true })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /** 프린트 버튼 클릭 */
    ApprovalComponent.prototype.onPrintClick = function () {
    };
    /** 반환 이벤트 파라미터 만들기 */
    ApprovalComponent.prototype.getClickEvent = function () {
        var _a, _b;
        return {
            approval_data: this.getApprovalData(),
            approval_comment: ((_b = (_a = this.res) === null || _a === void 0 ? void 0 : _a.rsObj) === null || _b === void 0 ? void 0 : _b.approval_comment) || [],
            btnList: this.btnList,
            "delete": this.deleteApproval.bind(this),
            send: this.sendApproval.bind(this),
            recovery: this.recoveryApproval.bind(this),
            approval: this.approvalApproval.bind(this),
            refresh: this.get.bind(this)
        };
    };
    /**
     * 서버에 올리는 형태로 데이터를 변경하는 함수
     */
    ApprovalComponent.prototype.getApprovalData = function () {
        var _a, _b, _c, _d;
        var answer_datas = ((_b = (_a = this.res) === null || _a === void 0 ? void 0 : _a.rsObj) === null || _b === void 0 ? void 0 : _b.answer_datas) || [];
        /**
         * order_no 정렬
         * 최종 결재자만 approval_last_state 가 1이고 나머지는 0임
         */
        answer_datas.forEach(function (item, i) {
            item.approval_order_no = i + 1;
            item.approval_last_state = i < answer_datas.length - 1 ? 0 : 1;
        });
        var refer_datas = ((_d = (_c = this.res) === null || _c === void 0 ? void 0 : _c.rsObj) === null || _d === void 0 ? void 0 : _d.refer_datas) || [];
        return [
            {
                default_type: "ANSWER",
                answer_datas: answer_datas
            },
            {
                default_type: "REFER",
                refer_datas: refer_datas
            }
        ];
    };
    /**
     * 결재선 데이터 셋팅
     * 상황에 따라, 기본결재선, 혹은 문서에서 지정된 결재선을 가지고 온다.
     */
    ApprovalComponent.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.form.project_id && this.form.ctgo_approval_module_id && !this.form.approval_id)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getDefaultButton()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getDefaultApproval()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3:
                        if (!(this.form.project_id && this.form.ctgo_approval_module_id && this.form.approval_id)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getApprovalButton()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.getApproval()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        this.change.emit(this.getClickEvent());
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 기본 결재선 정보 가져오기
     * 기본 결재선을 가져올 때는 버튼을 가져오는 함수를 호출하지 않으므로, 임의로 만들어줘야 한다.
     */
    ApprovalComponent.prototype.getDefaultButton = function () {
        this.btnList = ["임시저장", "결재선", "결재요청"];
    };
    ApprovalComponent.prototype.getDefaultApproval = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/approval/default/get', this.form, {
                            loading: true,
                            parse: ['answer_datas', 'refer_datas']
                        })];
                    case 1:
                        res = _a.sent();
                        // 혹시 지정된 결재선과 통신 중이었는지 확인 후 데이터 삽입
                        if (!this.form.approval_id)
                            this.res = res;
                        else
                            return [2 /*return*/];
                        if (res.rsCode === 0) {
                            // 잘 가지고 왔으면, 되어씀
                            res.rsObj.answer_datas.sort(function (a, b) { return a.approval_order_no > b.approval_order_no ? 1 : -1; });
                        }
                        else if (res.rsCode === 1008) {
                            // 내 정보를 넣어줌
                            this.res.rsCode = 0;
                            this.res.rsObj = {
                                approval_default_id: 0,
                                ctgo_approval_module_id: this.form.ctgo_approval_module_id,
                                user_id: this.user.userData.user_id,
                                project_id: this.form.project_id,
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
                            this.toast.present({ color: 'warning', message: this.res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 저장된 결재선 정보 가져오기
     * 저장된 결재선 정보를 가져올 떄는 버튼, 결재선정보 두가지를 가져온다.
     */
    ApprovalComponent.prototype.getApprovalButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connect.run('/approval/btn/get', {
                            approval_id: this.form.approval_id
                        })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.btnList = res.rsObj.btn_data;
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ApprovalComponent.prototype.getApproval = function () {
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
                            answer_datas.sort(function (a, b) { return a.approval_order_no > b.approval_order_no ? 1 : -1; });
                            approval_comment.sort(function (a, b) { return a.approval_order_no > b.approval_order_no ? 1 : -1; });
                            this.res = new connect_service_1.ConnectResult();
                            this.res.rsObj = new approval_edit_page_1.ApprovalObj();
                            this.res.rsObj.answer_datas = answer_datas;
                            this.res.rsObj.approval_comment = approval_comment;
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Input()
    ], ApprovalComponent.prototype, "project_id");
    __decorate([
        core_1.Input()
    ], ApprovalComponent.prototype, "ctgo_approval_module_id");
    __decorate([
        core_1.Input()
    ], ApprovalComponent.prototype, "approval_id");
    __decorate([
        core_1.Output()
    ], ApprovalComponent.prototype, "deleteClick");
    __decorate([
        core_1.Output()
    ], ApprovalComponent.prototype, "saveClick");
    __decorate([
        core_1.Output()
    ], ApprovalComponent.prototype, "sendClick");
    __decorate([
        core_1.Output()
    ], ApprovalComponent.prototype, "recoveryClick");
    __decorate([
        core_1.Output()
    ], ApprovalComponent.prototype, "approvalClick");
    __decorate([
        core_1.Output()
    ], ApprovalComponent.prototype, "printClick");
    __decorate([
        core_1.Output()
    ], ApprovalComponent.prototype, "change");
    ApprovalComponent = __decorate([
        core_1.Component({
            selector: 'app-approval',
            templateUrl: './approval.component.html',
            styleUrls: ['./approval.component.scss']
        })
    ], ApprovalComponent);
    return ApprovalComponent;
}());
exports.ApprovalComponent = ApprovalComponent;
