"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InputTemplateComponent = void 0;
var core_1 = require("@angular/core");
var InputTemplateComponent = /** @class */ (function () {
    function InputTemplateComponent() {
        this.color = 'white';
        this.buttonFill = 'translucent';
        this.buttonClick = new core_1.EventEmitter();
        this.readonly = false;
        this.disabled = false;
        this.required = false;
    }
    Object.defineProperty(InputTemplateComponent.prototype, "class", {
        get: function () {
            var _class = [];
            if (this.color)
                _class.push("ion-color-" + this.color);
            this.label ? _class.push("input-label") : _class.push("input-no-label");
            return _class.join(' ');
        },
        enumerable: false,
        configurable: true
    });
    InputTemplateComponent.prototype.ngOnInit = function () { };
    InputTemplateComponent.prototype.onButtonClick = function () {
        this.buttonClick.emit();
    };
    InputTemplateComponent.prototype.isButtonEmpty = function () {
        var _a;
        if (!((_a = this.slot) === null || _a === void 0 ? void 0 : _a.nativeElement.childNodes)) {
            return true;
        }
        else {
            var nodeList_1 = [];
            this.slot.nativeElement.childNodes.forEach(function (node) {
                if (node.nodeName !== '#comment') {
                    nodeList_1.push(node);
                }
            });
            if (nodeList_1.length) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    Object.defineProperty(InputTemplateComponent.prototype, "classReadonly", {
        get: function () { return this.readonly; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputTemplateComponent.prototype, "classDisabled", {
        get: function () { return this.disabled; },
        enumerable: false,
        configurable: true
    });
    __decorate([
        core_1.HostBinding('class')
    ], InputTemplateComponent.prototype, "class");
    __decorate([
        core_1.Input()
    ], InputTemplateComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], InputTemplateComponent.prototype, "color");
    __decorate([
        core_1.Input()
    ], InputTemplateComponent.prototype, "buttonFill");
    __decorate([
        core_1.Output()
    ], InputTemplateComponent.prototype, "buttonClick");
    __decorate([
        core_1.ViewChild('slot')
    ], InputTemplateComponent.prototype, "slot");
    __decorate([
        core_1.HostBinding('class.readonly')
    ], InputTemplateComponent.prototype, "classReadonly");
    __decorate([
        core_1.HostBinding('class.disabled')
    ], InputTemplateComponent.prototype, "classDisabled");
    __decorate([
        core_1.Input()
    ], InputTemplateComponent.prototype, "readonly");
    __decorate([
        core_1.Input()
    ], InputTemplateComponent.prototype, "disabled");
    __decorate([
        core_1.Input()
    ], InputTemplateComponent.prototype, "required");
    InputTemplateComponent = __decorate([
        core_1.Component({
            selector: 'app-input-template',
            templateUrl: './input-template.component.html',
            styleUrls: ['./input-template.component.scss']
        })
    ], InputTemplateComponent);
    return InputTemplateComponent;
}());
exports.InputTemplateComponent = InputTemplateComponent;
