"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApprovalComponent = void 0;
var core_1 = require("@angular/core");
var ApprovalComponent = /** @class */ (function () {
    function ApprovalComponent() {
    }
    Object.defineProperty(ApprovalComponent.prototype, "project_id", {
        // 신규 결재선에 필요한 정보
        set: function (v) {
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprovalComponent.prototype, "ctgo_approval_module_id", {
        set: function (v) {
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprovalComponent.prototype, "approval_id", {
        // 결재선 불러올 때, 필요한 정보
        set: function (v) {
        },
        enumerable: false,
        configurable: true
    });
    ApprovalComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input()
    ], ApprovalComponent.prototype, "project_id");
    __decorate([
        core_1.Input()
    ], ApprovalComponent.prototype, "ctgo_approval_module_id");
    __decorate([
        core_1.Input()
    ], ApprovalComponent.prototype, "approval_id");
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
