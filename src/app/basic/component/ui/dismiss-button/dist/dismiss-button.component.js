"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DismissButtonComponent = void 0;
var core_1 = require("@angular/core");
var DismissButtonComponent = /** @class */ (function () {
    function DismissButtonComponent(alert, _modal) {
        this.alert = alert;
        this._modal = _modal;
    }
    DismissButtonComponent.prototype.onClick = function () {
        this.dismiss();
    };
    DismissButtonComponent.prototype.ngOnInit = function () { };
    DismissButtonComponent.prototype.dismiss = function () {
        var _this = this;
        this.alert.present({
            message: '창을 닫으시겠습니까?',
            buttons: [
                { text: '취소' },
                { text: '닫기', handler: function () {
                        _this._modal.dismiss();
                    } }
            ]
        });
    };
    __decorate([
        core_1.HostListener('click')
    ], DismissButtonComponent.prototype, "onClick");
    DismissButtonComponent = __decorate([
        core_1.Component({
            selector: 'app-dismiss-button',
            templateUrl: './dismiss-button.component.html',
            styleUrls: ['./dismiss-button.component.scss']
        })
    ], DismissButtonComponent);
    return DismissButtonComponent;
}());
exports.DismissButtonComponent = DismissButtonComponent;
