"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConfirmProcessPopupComponent = void 0;
var core_1 = require("@angular/core");
var ConfirmProcessPopupComponent = /** @class */ (function () {
    function ConfirmProcessPopupComponent(_modal) {
        this._modal = _modal;
        this.form = {
            approval_answer: '승인',
            approval_comment: null
        };
    }
    ConfirmProcessPopupComponent.prototype.ngOnInit = function () { };
    ConfirmProcessPopupComponent.prototype.submit = function () {
        this._modal.dismiss(this.form);
    };
    ConfirmProcessPopupComponent = __decorate([
        core_1.Component({
            selector: 'app-confirm-process-popup',
            templateUrl: './confirm-process-popup.component.html',
            styleUrls: ['./confirm-process-popup.component.scss']
        })
    ], ConfirmProcessPopupComponent);
    return ConfirmProcessPopupComponent;
}());
exports.ConfirmProcessPopupComponent = ConfirmProcessPopupComponent;
