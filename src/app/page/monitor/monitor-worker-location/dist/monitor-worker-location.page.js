"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MonitorWorkerLocationPage = void 0;
var core_1 = require("@angular/core");
var MonitorWorkerLocationPage = /** @class */ (function () {
    function MonitorWorkerLocationPage() {
        this.form = {
            company_id: 0,
            ctgo_construction_id: 0,
            master_company_id: 0,
            project_id: 0,
            search_text: '',
            user_type: '전체'
        };
    }
    MonitorWorkerLocationPage.prototype.ngOnInit = function () {
    };
    MonitorWorkerLocationPage = __decorate([
        core_1.Component({
            selector: 'app-monitor-worker-location',
            templateUrl: './monitor-worker-location.page.html',
            styleUrls: ['./monitor-worker-location.page.scss']
        })
    ], MonitorWorkerLocationPage);
    return MonitorWorkerLocationPage;
}());
exports.MonitorWorkerLocationPage = MonitorWorkerLocationPage;
