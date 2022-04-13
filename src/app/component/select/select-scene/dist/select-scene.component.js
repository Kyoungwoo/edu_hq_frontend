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
exports.SelectSceneComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var search_scene_component_1 = require("../../modal/search-scene/search-scene.component");
var SelectSceneComponent = /** @class */ (function () {
    function SelectSceneComponent(connect, _modal, changeDetector) {
        this.connect = connect;
        this._modal = _modal;
        this.changeDetector = changeDetector;
        this.all = false; // 전체 현장 노출 여부
        this.label = "현장";
        this.readonly = false;
        this.company_id = 0;
        this.text = '';
        this.isModalData = false;
        //default setting
        //@Input() readonly:boolean = false;
        this.disabled = false;
        this.required = false;
        this.change = new core_1.EventEmitter();
        this.onChangeCallback = function (v) { };
        this.onTouchedCallback = function (v) { };
    }
    SelectSceneComponent_1 = SelectSceneComponent;
    SelectSceneComponent.prototype.onClick = function () {
        if (!this.disabled || !this.readonly)
            this.openModal();
    };
    SelectSceneComponent.prototype.ngOnInit = function () { };
    SelectSceneComponent.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isModalData)
                            return [2 /*return*/];
                        if (!this.value && !this.all)
                            return [2 /*return*/];
                        if (this.value === 0 && this.all) {
                            this.text = '전체';
                            this.changeDetector.detectChanges();
                            return [2 /*return*/];
                        }
                        if (!this.value)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.connect.run('/forSignUp/project/id/get', {
                                project_id: this.value
                            })];
                    case 1:
                        res = _a.sent();
                        if (res.rsCode === 0) {
                            this.text = res.rsObj.project_name;
                            this.value = res.rsObj.project_id;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectSceneComponent.prototype.openModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data, allState, selectedItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isModalData = true;
                        return [4 /*yield*/, this._modal.create({
                                component: search_scene_component_1.SearchSceneComponent,
                                componentProps: {
                                    type: this.type,
                                    all: this.all,
                                    value: this.value,
                                    form: {
                                        company_id: this.company_id,
                                        search_text: ''
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
                            allState = data.allState;
                            selectedItem = data.selectedItem;
                            if (allState) {
                                this.value = 0;
                                this.text = '전체';
                            }
                            else {
                                this.value = selectedItem.project_id;
                                this.text = selectedItem.project_name;
                            }
                        }
                        this.isModalData = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(SelectSceneComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this.valueChange(v);
        },
        enumerable: false,
        configurable: true
    });
    SelectSceneComponent.prototype.writeValue = function (v) {
        this.valueChange(v);
    };
    SelectSceneComponent.prototype.valueChange = function (v) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (v !== this._value) {
                    this._value = v ? v : 0;
                    this.onChangeCallback(v);
                    this.get();
                    this.change.emit({
                        project_id: this.value,
                        proje_name: this.text
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    SelectSceneComponent.prototype.registerOnChange = function (fn) { this.onChangeCallback = fn; };
    SelectSceneComponent.prototype.registerOnTouched = function (fn) { this.onTouchedCallback = fn; };
    var SelectSceneComponent_1;
    __decorate([
        core_1.HostListener('click')
    ], SelectSceneComponent.prototype, "onClick");
    __decorate([
        core_1.Input()
    ], SelectSceneComponent.prototype, "type");
    __decorate([
        core_1.Input()
    ], SelectSceneComponent.prototype, "all");
    __decorate([
        core_1.Input()
    ], SelectSceneComponent.prototype, "color");
    __decorate([
        core_1.Input()
    ], SelectSceneComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], SelectSceneComponent.prototype, "readonly");
    __decorate([
        core_1.Input()
    ], SelectSceneComponent.prototype, "company_id");
    __decorate([
        core_1.Input()
    ], SelectSceneComponent.prototype, "disabled");
    __decorate([
        core_1.Input()
    ], SelectSceneComponent.prototype, "required");
    __decorate([
        core_1.Output()
    ], SelectSceneComponent.prototype, "change");
    __decorate([
        core_1.Input()
    ], SelectSceneComponent.prototype, "value");
    SelectSceneComponent = SelectSceneComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-select-scene',
            templateUrl: './select-scene.component.html',
            styleUrls: ['./select-scene.component.scss'],
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return SelectSceneComponent_1; }),
                    multi: true
                }]
        })
    ], SelectSceneComponent);
    return SelectSceneComponent;
}());
exports.SelectSceneComponent = SelectSceneComponent;
