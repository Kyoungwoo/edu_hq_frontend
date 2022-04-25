"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApprovalZoomComponent = void 0;
var core_1 = require("@angular/core");
var ApprovalZoomComponent = /** @class */ (function () {
    function ApprovalZoomComponent(_modal) {
        this._modal = _modal;
    }
    ApprovalZoomComponent.prototype.ngOnInit = function () { };
    ApprovalZoomComponent.prototype.ngAfterViewInit = function () {
        this.zoomContainer.nativeElement.appendChild(this.zoomEl);
        panzoom(this.zoomEl, {
            maxZoom: 5,
            minZoom: 1
        });
    };
    ApprovalZoomComponent.prototype.dismiss = function () {
        this._modal.dismiss();
    };
    __decorate([
        core_1.Input()
    ], ApprovalZoomComponent.prototype, "zoomEl");
    __decorate([
        core_1.ViewChild('zoomContainer')
    ], ApprovalZoomComponent.prototype, "zoomContainer");
    ApprovalZoomComponent = __decorate([
        core_1.Component({
            selector: 'app-approval-zoom',
            templateUrl: './approval-zoom.component.html',
            styleUrls: ['./approval-zoom.component.scss']
        })
    ], ApprovalZoomComponent);
    return ApprovalZoomComponent;
}());
exports.ApprovalZoomComponent = ApprovalZoomComponent;
