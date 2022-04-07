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
exports.SearchAreaComponent = void 0;
var search_dangerous_area_component_1 = require("./../search-dangerous-area/search-dangerous-area.component");
var core_1 = require("@angular/core");
var basic_animation_1 = require("src/app/basic/basic.animation");
var area1 = /** @class */ (function () {
    function area1() {
    }
    return area1;
}());
var area2 = /** @class */ (function () {
    function area2() {
    }
    return area2;
}());
var area3 = /** @class */ (function () {
    function area3() {
    }
    return area3;
}());
var SearchAreaComponent = /** @class */ (function () {
    function SearchAreaComponent(connect, _modal) {
        this.connect = connect;
        this._modal = _modal;
        this.selectType = 'auto';
        this.multiple = false;
    }
    SearchAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.area1Get();
        }, 300);
    };
    SearchAreaComponent.prototype.area1Get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/category/area/top/get', { project_id: this.project_id })];
                    case 1:
                        _a.area1 = _b.sent();
                        if (this.area1.rsCode === 0) { }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchAreaComponent.prototype.area2Get = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.area3 = null;
                        this.area1selectedItem = item;
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/category/area/middle/get', { area_top_id: item.area_top_id })];
                    case 1:
                        _a.area2 = _b.sent();
                        if (this.area2.rsCode === 0) { }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchAreaComponent.prototype.area3Get = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.area2selectedItem = item;
                        _a = this;
                        return [4 /*yield*/, this.connect.run('/category/area/bottom/get', {
                                area_top_id: item.area_top_id,
                                area_middle_id: item.area_middle_id
                            })];
                    case 1:
                        _a.area3 = _b.sent();
                        if (this.area1.rsCode === 0) { }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchAreaComponent.prototype.select = function () {
        this._modal.dismiss({
            area1selectedItem: this.area1selectedItem,
            area2selectedItem: this.area2selectedItem,
            area3selectedItem: this.area3selectedItem,
            selectType: 'auto'
        });
    };
    SearchAreaComponent.prototype.openModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._modal.create({
                            component: search_dangerous_area_component_1.SearchDangerousAreaComponent,
                            componentProps: {
                                project_id: this.project_id
                                // selectType: this.selectType
                                // form: {
                                //   project_id: this.project_id,
                                //   master_company_id: this.master_company_id,
                                //   company_id: this.company_id,
                                //   user_type: this.user_type,
                                //   search_text: ''
                                // }
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
                            setTimeout(function () {
                                _this._modal.dismiss({ areaSelectedItem: data, selectType: 'manual' });
                            }, 300);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Input()
    ], SearchAreaComponent.prototype, "project_id");
    __decorate([
        core_1.Input()
    ], SearchAreaComponent.prototype, "selectType");
    __decorate([
        core_1.Input()
    ], SearchAreaComponent.prototype, "multiple");
    SearchAreaComponent = __decorate([
        core_1.Component({
            selector: 'app-search-area',
            templateUrl: './search-area.component.html',
            styleUrls: ['./search-area.component.scss'],
            animations: [basic_animation_1.listAnimation]
        })
    ], SearchAreaComponent);
    return SearchAreaComponent;
}());
exports.SearchAreaComponent = SearchAreaComponent;
