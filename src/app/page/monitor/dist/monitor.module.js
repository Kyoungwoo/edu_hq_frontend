"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MonitorPageModule = void 0;
var monitor_smart_equip_edit_module_1 = require("./monitor-smart-equip-edit/monitor-smart-equip-edit.module");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var monitor_routing_module_1 = require("./monitor-routing.module");
var monitor_page_1 = require("./monitor.page");
var component_module_1 = require("src/app/component/component.module");
var monitor_realtime_location_module_1 = require("./monitor-realtime-location/monitor-realtime-location.module");
var monitor_worker_location_module_1 = require("./monitor-worker-location/monitor-worker-location.module");
var MonitorPageModule = /** @class */ (function () {
    function MonitorPageModule() {
    }
    MonitorPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                component_module_1.ComponentModule,
                monitor_routing_module_1.MonitorPageRoutingModule,
                monitor_worker_location_module_1.MonitorWorkerLocationPageModule,
                monitor_smart_equip_edit_module_1.MonitorSmartEquipEditPageModule,
                monitor_realtime_location_module_1.MonitorRealtimeLocationPageModule,
            ],
            declarations: [monitor_page_1.MonitorPage]
        })
    ], MonitorPageModule);
    return MonitorPageModule;
}());
exports.MonitorPageModule = MonitorPageModule;
