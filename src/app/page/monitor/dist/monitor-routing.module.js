"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MonitorPageRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var monitor_page_1 = require("./monitor.page");
var routes = [
    {
        path: '',
        component: monitor_page_1.MonitorPage
    },
    {
        path: 'monitor-smart-equip-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./monitor-smart-equip-edit/monitor-smart-equip-edit.module'); }).then(function (m) { return m.MonitorSmartEquipEditPageModule; }); }
    },
    {
        path: 'monitor-worker-location',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./monitor-worker-location/monitor-worker-location.module'); }).then(function (m) { return m.MonitorWorkerLocationPageModule; }); }
    }
];
var MonitorPageRoutingModule = /** @class */ (function () {
    function MonitorPageRoutingModule() {
    }
    MonitorPageRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], MonitorPageRoutingModule);
    return MonitorPageRoutingModule;
}());
exports.MonitorPageRoutingModule = MonitorPageRoutingModule;
