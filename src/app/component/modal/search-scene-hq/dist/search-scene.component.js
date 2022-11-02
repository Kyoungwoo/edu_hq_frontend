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
exports.SearchSceneComponent = exports.ProjectItem = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var ProjectItem = /** @class */ (function () {
    function ProjectItem() {
    }
    return ProjectItem;
}());
exports.ProjectItem = ProjectItem;
var SearchSceneComponent = /** @class */ (function () {
    function SearchSceneComponent(el, connect, _modal, promise, toast) {
        this.el = el;
        this.connect = connect;
        this._modal = _modal;
        this.promise = promise;
        this.toast = toast;
        this.all = false;
        this.form = {
            company_id: 0,
            search_text: ''
        };
        this.allState = false; // 전체현장을 선택했는지?
    }
    SearchSceneComponent.prototype.ngOnInit = function () {
        this.get();
        this.test();
    };
    SearchSceneComponent.prototype.test = function () {
        return __awaiter(this, void 0, void 0, function () {
            var el;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!environment_1.environment.test.core.test)
                            return [2 /*return*/];
                        el = this.el.nativeElement;
                        // 가짜 데이터 삽입
                        return [4 /*yield*/, this.promise.wait()];
                    case 1:
                        // 가짜 데이터 삽입
                        _a.sent();
                        // 검색
                        el.querySelector('[name=search_text]').dispatchEvent(new Event('buttonClick'));
                        return [4 /*yield*/, this.promise.wait()];
                    case 2:
                        _a.sent();
                        // 가장 위의 현장을 입력
                        el.querySelector('[name=project_info]').dispatchEvent(new Event('click'));
                        return [4 /*yield*/, this.promise.wait()];
                    case 3:
                        _a.sent();
                        // 선택함
                        el.querySelector('[name=submit]').dispatchEvent(new Event('click'));
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchSceneComponent.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.type === 'SIGNUP')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/forSignUp/project/company_get', this.form, { loading: '현장 검색' })];
                    case 1:
                        _a.res = _d.sent();
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(this.type === 'SIGNUPLH')) return [3 /*break*/, 4];
                        _b = this;
                        return [4 /*yield*/, this.connect.run('/forSignUp/project/get', this.form, { loading: '현장 검색' })];
                    case 3:
                        _b.res = _d.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        _c = this;
                        return [4 /*yield*/, this.connect.run('/category/certify/search_my_project/get', this.form, { loading: '현장 검색' })];
                    case 5:
                        _c.res = _d.sent();
                        if (this.res.rsCode === 0) {
                            this.res.rsMap.filter(function (item) {
                                if (_this.value === item.project_id)
                                    _this.selectedItem = item;
                            });
                            if (!this.value)
                                this.allState = true;
                        }
                        else {
                            this.toast.present({ color: 'warning', message: this.res.rsMsg });
                        }
                        _d.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SearchSceneComponent.prototype.select = function () {
        this._modal.dismiss({
            selectedItem: this.selectedItem,
            allState: this.allState
        });
    };
    __decorate([
        core_1.Input()
    ], SearchSceneComponent.prototype, "value");
    __decorate([
        core_1.Input()
    ], SearchSceneComponent.prototype, "type");
    __decorate([
        core_1.Input()
    ], SearchSceneComponent.prototype, "all");
    __decorate([
        core_1.Input()
    ], SearchSceneComponent.prototype, "form");
    SearchSceneComponent = __decorate([
        core_1.Component({
            selector: 'app-search-scene',
            templateUrl: './search-scene.component.html',
            styleUrls: ['./search-scene.component.scss']
        })
    ], SearchSceneComponent);
    return SearchSceneComponent;
}());
exports.SearchSceneComponent = SearchSceneComponent;
