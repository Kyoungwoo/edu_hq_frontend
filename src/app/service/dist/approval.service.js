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
exports.ApprovalService = void 0;
var core_1 = require("@angular/core");
var worker_minutes_edit_page_1 = require("../page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.page");
var ApprovalService = /** @class */ (function () {
    function ApprovalService(_modal) {
        this._modal = _modal;
    }
    ApprovalService.prototype.getComponent = function (ctgo_approval_module_id, target_id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, modal, modal, modal;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(ctgo_approval_module_id);
                        _a = ctgo_approval_module_id;
                        switch (_a) {
                            case 1: return [3 /*break*/, 1];
                            case 2: return [3 /*break*/, 2];
                            case 3: return [3 /*break*/, 3];
                            case 4: return [3 /*break*/, 4];
                            case 5: return [3 /*break*/, 5];
                            case 6: return [3 /*break*/, 6];
                            case 7: return [3 /*break*/, 7];
                            case 8: return [3 /*break*/, 8];
                            case 9: return [3 /*break*/, 9];
                            case 10: return [3 /*break*/, 11];
                            case 11: return [3 /*break*/, 13];
                            case 12: return [3 /*break*/, 15];
                        }
                        return [3 /*break*/, 16];
                    case 1: // 교육 결과 보고서 (채용시)
                    return [2 /*return*/, ''];
                    case 2: // 교육 결과 보고서 (작업자 정기)
                    return [2 /*return*/, ''];
                    case 3: // 교육 결과 보고서 (관리감독자 정기)
                    return [2 /*return*/, ''];
                    case 4: // 교육 결과 보고서 (작업 내용 변경 시)
                    return [2 /*return*/, ''];
                    case 5: // 교육 결과 보고서 (특별 교육)
                    return [2 /*return*/, ''];
                    case 6: // 최초 위험성 평가서
                    return [2 /*return*/, ''];
                    case 7: // 정기 위험성 평가서
                    return [2 /*return*/, ''];
                    case 8: // 수시 위험성 평가서
                    return [2 /*return*/, ''];
                    case 9: return [4 /*yield*/, this._modal.create({
                            component: worker_minutes_edit_page_1.WorkerMinutesEditPage,
                            componentProps: {
                                safety_meeting_id: target_id
                            }
                        })];
                    case 10:
                        modal = _b.sent();
                        modal.present();
                        return [2 /*return*/, ''];
                    case 11: return [4 /*yield*/, this._modal.create({
                            component: worker_minutes_edit_page_1.WorkerMinutesEditPage,
                            componentProps: {
                                safety_meeting_id: target_id
                            }
                        })];
                    case 12:
                        modal = _b.sent();
                        modal.present();
                        return [2 /*return*/, ''];
                    case 13: return [4 /*yield*/, this._modal.create({
                            component: worker_minutes_edit_page_1.WorkerMinutesEditPage,
                            componentProps: {
                                safety_meeting_id: target_id
                            }
                        })];
                    case 14:
                        modal = _b.sent();
                        modal.present();
                        return [2 /*return*/, ''];
                    case 15: // 위험 공종 안전 작업허가서(PTW)
                    return [2 /*return*/, ''];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    ApprovalService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApprovalService);
    return ApprovalService;
}());
exports.ApprovalService = ApprovalService;
