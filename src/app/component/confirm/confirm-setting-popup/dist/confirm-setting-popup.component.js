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
exports.ConfirmSettingPopupComponent = void 0;
var core_1 = require("@angular/core");
var search_people_component_1 = require("../../modal/search-people/search-people.component");
var ConfirmSettingPopupComponent = /** @class */ (function () {
    function ConfirmSettingPopupComponent(user, connect, toast, _modal, file) {
        this.user = user;
        this.connect = connect;
        this.toast = toast;
        this._modal = _modal;
        this.file = file;
        this.answerSortableOption = {
            handle: '.answer-handle',
            onMove: function (ev) {
                if (ev.related) {
                    return !ev.related.classList.contains('locked');
                }
            }
        };
    }
    ConfirmSettingPopupComponent.prototype.ngOnInit = function () {
        // 초기화 기능 때문에 클론을 떠놔야 함
        this.answerObj = this.file.clone(this.approvalObj.answer_datas);
        this.answerOrigin = this.file.clone(this.approvalObj.answer_datas);
        this.approvalObj.refer_datas = this.approvalObj.refer_datas || [];
        this.referObj = this.file.clone(this.approvalObj.refer_datas);
        this.referOrigin = this.file.clone(this.approvalObj.refer_datas);
        this.commentObj = this.file.clone(this.approvalObj.approval_comment);
        this.commentOrigin = this.file.clone(this.approvalObj.approval_comment);
    };
    /**
     * 결재자 초기화
     */
    ConfirmSettingPopupComponent.prototype.resetAnswer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.answerObj = this.file.clone(this.answerOrigin);
                return [2 /*return*/];
            });
        });
    };
    /**
     * 결재자 추가
     */
    ConfirmSettingPopupComponent.prototype.addAnswer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
                            component: search_people_component_1.SearchPeopleComponent,
                            componentProps: {
                                form: {
                                    company_id: this.user.userData.belong_data.company_id,
                                    search_text: '',
                                    user_type: 'COMPANY'
                                },
                                canUserTypeChange: false
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
                            this.answerObj.push({
                                answer_user_id: item.user_id,
                                answer_user_name: item.user_name,
                                approval_order_no: 0,
                                approval_last_state: 0
                            });
                            this.commentObj.push({
                                approval_answer: '미결',
                                approval_comment: '',
                                approval_date: '',
                                approval_last_state: 0,
                                approval_order_no: 0,
                                company_id: item.company_id,
                                company_name: item.company_name,
                                user_id: item.user_id,
                                user_name: item.user_name
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
    ConfirmSettingPopupComponent.prototype.removeAnswer = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.answerObj.splice(i, 1);
                this.commentObj.splice(i, 1);
                return [2 /*return*/];
            });
        });
    };
    /**
     * 참조자 초기화
     */
    ConfirmSettingPopupComponent.prototype.resetRefer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.referObj = this.file.clone(this.referOrigin);
                return [2 /*return*/];
            });
        });
    };
    /**
     * 참조자 추가
     */
    ConfirmSettingPopupComponent.prototype.addRefer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
                            component: search_people_component_1.SearchPeopleComponent,
                            componentProps: {
                                form: {
                                    company_id: this.user.userData.belong_data.company_id,
                                    search_text: '',
                                    user_type: 'COMPANY'
                                },
                                canUserTypeChange: false
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
                            this.referObj.push({
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
    ConfirmSettingPopupComponent.prototype.removeRefer = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.referObj.splice(i, 1);
                return [2 /*return*/];
            });
        });
    };
    /**
     * 결재선 저장
     */
    ConfirmSettingPopupComponent.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._modal.dismiss({
                    answer_datas: this.answerObj,
                    refer_datas: this.referObj,
                    comment_datas: this.commentObj
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        core_1.Input()
    ], ConfirmSettingPopupComponent.prototype, "approvalObj");
    ConfirmSettingPopupComponent = __decorate([
        core_1.Component({
            selector: 'app-confirm-setting-popup',
            templateUrl: './confirm-setting-popup.component.html',
            styleUrls: ['./confirm-setting-popup.component.scss']
        })
    ], ConfirmSettingPopupComponent);
    return ConfirmSettingPopupComponent;
}());
exports.ConfirmSettingPopupComponent = ConfirmSettingPopupComponent;
