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
exports.ApprovalEditPage = exports.ReferObj = exports.CommentObj = exports.AnswerObj = exports.ApprovalObj = void 0;
var core_1 = require("@angular/core");
var search_people_component_1 = require("src/app/component/modal/search-people/search-people.component");
var ApprovalObj = /** @class */ (function () {
    function ApprovalObj() {
    }
    return ApprovalObj;
}());
exports.ApprovalObj = ApprovalObj;
var AnswerObj = /** @class */ (function () {
    function AnswerObj() {
    }
    return AnswerObj;
}());
exports.AnswerObj = AnswerObj;
var CommentObj = /** @class */ (function () {
    function CommentObj() {
    }
    return CommentObj;
}());
exports.CommentObj = CommentObj;
var ReferObj = /** @class */ (function () {
    function ReferObj() {
    }
    return ReferObj;
}());
exports.ReferObj = ReferObj;
var ApprovalEditPage = /** @class */ (function () {
    function ApprovalEditPage(user, connect, toast, modal, file) {
        this.user = user;
        this.connect = connect;
        this.toast = toast;
        this.modal = modal;
        this.file = file;
        this.answerSortableOption = {
            handle: '.answer-handle',
            onMove: function (ev) {
                if (ev.related) {
                    return !ev.related.classList.contains('locked');
                }
            }
        };
        this.form = {
            project_id: this.user.userData.belong_data.project_id,
            ctgo_approval_module_id: null
        };
    }
    ApprovalEditPage.prototype.ngOnInit = function () {
    };
    /**
     * 결재선 리스트 가져오기
     * 전자결재 서식의 default가 '선택' 이므로 시작부터 들고오지는 않는다.
     */
    ApprovalEditPage.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.form.ctgo_approval_module_id) {
                            this.toast.present({ color: 'warning', message: '전자 결재 서식을 선택해주세요.' });
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/approval/default/get', this.form, {
                                loading: true,
                                parse: ['answer_datas', 'refer_datas']
                            })];
                    case 1:
                        _a.res = _b.sent();
                        if (this.res.rsCode === 0) {
                            // 초기화 기능 때문에 클론을 떠놔야 함
                            this.answerOrigin = this.file.clone(this.res.rsObj.answer_datas);
                            this.res.rsObj.refer_datas = this.res.rsObj.refer_datas || [];
                            this.referOrigin = this.file.clone(this.res.rsObj.refer_datas);
                        }
                        else if (this.res.rsCode === 1008) {
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
                            // 초기화 기능 때문에 클론을 떠놔야 함
                            this.answerOrigin = this.file.clone(this.res.rsObj.answer_datas);
                            this.referOrigin = this.file.clone(this.res.rsObj.refer_datas);
                        }
                        else if (this.res.rsCode) {
                            this.toast.present({ color: 'warning', message: this.res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ApprovalEditPage.prototype.search = function () {
        this.get();
    };
    /**
     * 결재자 초기화
     */
    ApprovalEditPage.prototype.resetAnswer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.res.rsObj.answer_datas = this.file.clone(this.answerOrigin);
                return [2 /*return*/];
            });
        });
    };
    /**
     * 결재자 추가
     */
    ApprovalEditPage.prototype.addAnswer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: search_people_component_1.SearchPeopleComponent,
                            componentProps: {
                                form: {
                                    company_id: this.user.userData.belong_data.company_id,
                                    search_text: '',
                                    user_type: 'WORKER'
                                }
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            item = data.selectedItem;
                            this.res.rsObj.answer_datas.push({
                                answer_user_id: item.user_id,
                                answer_user_name: item.user_name,
                                approval_order_no: 0,
                                approval_last_state: 0
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 결재자 삭제
     */
    ApprovalEditPage.prototype.removeAnswer = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.res.rsObj.answer_datas.splice(i, 1);
                return [2 /*return*/];
            });
        });
    };
    /**
     * 참조자 초기화
     */
    ApprovalEditPage.prototype.resetRefer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.res.rsObj.refer_datas = this.file.clone(this.referOrigin);
                return [2 /*return*/];
            });
        });
    };
    /**
     * 참조자 추가
     */
    ApprovalEditPage.prototype.addRefer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: search_people_component_1.SearchPeopleComponent,
                            componentProps: {
                                form: {
                                    company_id: this.user.userData.belong_data.company_id,
                                    search_text: '',
                                    user_type: 'WORKER'
                                }
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 2:
                        data = (_a.sent()).data;
                        if (data) {
                            item = data.selectedItem;
                            this.res.rsObj.refer_datas.push({
                                refer_user_id: item.user_id,
                                refer_user_name: item.user_name
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 참조자 삭제
     */
    ApprovalEditPage.prototype.removeRefer = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.res.rsObj.refer_datas.splice(i, 1);
                return [2 /*return*/];
            });
        });
    };
    /**
     * 결재선 저장
     */
    ApprovalEditPage.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var answer_datas, refer_datas, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        answer_datas = this.res.rsObj.answer_datas;
                        /**
                         * order_no 정렬
                         * 최종 결재자만 approval_last_state 가 1이고 나머지는 0임
                         */
                        answer_datas.forEach(function (item, i) {
                            item.approval_order_no = i + 1;
                            item.approval_last_state = i < answer_datas.length - 1 ? 0 : 1;
                        });
                        refer_datas = this.res.rsObj.refer_datas || [];
                        return [4 /*yield*/, this.connect.run('/approval/default/insert', {
                                project_id: this.form.project_id,
                                ctgo_approval_module_id: this.form.ctgo_approval_module_id,
                                approval_default_data: [
                                    {
                                        default_type: 'ANSWER',
                                        answer_datas: answer_datas
                                    },
                                    {
                                        default_type: 'REFER',
                                        refer_datas: refer_datas
                                    }
                                ]
                            }, { loading: true })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            // 저장되면, 다시 가져오기
                            this.get();
                        }
                        else {
                            this.toast.present({ color: 'warning', message: res.rsMsg });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ApprovalEditPage = __decorate([
        core_1.Component({
            selector: 'app-approval-edit',
            templateUrl: './approval-edit.page.html',
            styleUrls: ['./approval-edit.page.scss']
        })
    ], ApprovalEditPage);
    return ApprovalEditPage;
}());
exports.ApprovalEditPage = ApprovalEditPage;
