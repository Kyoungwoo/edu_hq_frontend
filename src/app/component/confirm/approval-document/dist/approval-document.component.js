"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApprovalDocumentComponent = void 0;
var core_1 = require("@angular/core");
var ApprovalDocumentComponent = /** @class */ (function () {
    function ApprovalDocumentComponent() {
        this.isDocumentHidden = false;
    }
    ApprovalDocumentComponent.prototype.ngOnInit = function () { };
    /** 모바일 레이아웃 전용 */
    ApprovalDocumentComponent.prototype.documentToggle = function () {
        this.isDocumentHidden = !this.isDocumentHidden;
    };
    ApprovalDocumentComponent = __decorate([
        core_1.Component({
            selector: 'app-approval-document',
            templateUrl: './approval-document.component.html',
            styleUrls: ['./approval-document.component.scss']
        })
    ], ApprovalDocumentComponent);
    return ApprovalDocumentComponent;
}());
exports.ApprovalDocumentComponent = ApprovalDocumentComponent;
