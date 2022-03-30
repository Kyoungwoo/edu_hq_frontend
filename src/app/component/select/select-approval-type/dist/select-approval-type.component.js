"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SelectApprovalTypeComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SelectApprovalTypeComponent = /** @class */ (function () {
    function SelectApprovalTypeComponent(el, promise) {
        this.el = el;
        this.promise = promise;
        this.label = "전자결재 유형";
        this.placeholder = "선택";
        this.readonly = false;
        this.disabled = false;
        this.required = false;
        this.change = new core_1.EventEmitter();
        this.onChangeCallback = function (v) { };
        this.onTouchedCallback = function (v) { };
    }
    SelectApprovalTypeComponent_1 = SelectApprovalTypeComponent;
    SelectApprovalTypeComponent.prototype.onClick = function () {
        this.el.nativeElement.querySelector('[name=select]').dispatchEvent(new Event('click'));
    };
    SelectApprovalTypeComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(SelectApprovalTypeComponent.prototype, "classReadonly", {
        //default setting
        get: function () { return this.readonly; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectApprovalTypeComponent.prototype, "classDisabled", {
        get: function () { return this.disabled; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectApprovalTypeComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChangeCallback(v);
                this.change.emit(v);
            }
        },
        enumerable: false,
        configurable: true
    });
    SelectApprovalTypeComponent.prototype.writeValue = function (v) {
        if (v !== this._value) {
            this._value = v;
            this.onChangeCallback(v);
            this.change.emit(v);
        }
    };
    SelectApprovalTypeComponent.prototype.registerOnChange = function (fn) { this.onChangeCallback = fn; };
    SelectApprovalTypeComponent.prototype.registerOnTouched = function (fn) { this.onTouchedCallback = fn; };
    var SelectApprovalTypeComponent_1;
    __decorate([
        core_1.HostListener('click')
    ], SelectApprovalTypeComponent.prototype, "onClick");
    __decorate([
        core_1.Input()
    ], SelectApprovalTypeComponent.prototype, "color");
    __decorate([
        core_1.Input()
    ], SelectApprovalTypeComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], SelectApprovalTypeComponent.prototype, "placeholder");
    __decorate([
        core_1.HostBinding('class.readonly')
    ], SelectApprovalTypeComponent.prototype, "classReadonly");
    __decorate([
        core_1.HostBinding('class.disabled')
    ], SelectApprovalTypeComponent.prototype, "classDisabled");
    __decorate([
        core_1.Input()
    ], SelectApprovalTypeComponent.prototype, "readonly");
    __decorate([
        core_1.Input()
    ], SelectApprovalTypeComponent.prototype, "disabled");
    __decorate([
        core_1.Input()
    ], SelectApprovalTypeComponent.prototype, "required");
    __decorate([
        core_1.Output()
    ], SelectApprovalTypeComponent.prototype, "change");
    __decorate([
        core_1.Input()
    ], SelectApprovalTypeComponent.prototype, "value");
    SelectApprovalTypeComponent = SelectApprovalTypeComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-select-approval-type',
            templateUrl: './select-approval-type.component.html',
            styleUrls: ['./select-approval-type.component.scss'],
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return SelectApprovalTypeComponent_1; }),
                    multi: true
                }]
        })
    ], SelectApprovalTypeComponent);
    return SelectApprovalTypeComponent;
}());
exports.SelectApprovalTypeComponent = SelectApprovalTypeComponent;
