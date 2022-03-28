"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConfirmObtainListPageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var confirm_obtain_list_routing_module_1 = require("./confirm-obtain-list-routing.module");
var confirm_obtain_list_page_1 = require("./confirm-obtain-list.page");
var component_module_1 = require("src/app/component/component.module");
var basic_component_module_1 = require("src/app/basic/component/basic.component.module");
var confirm_obtain_detail_search_module_1 = require("../confirm-obtain-detail-search/confirm-obtain-detail-search.module");
var worker_minutes_edit_module_1 = require("src/app/page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.module");
var ConfirmObtainListPageModule = /** @class */ (function () {
    function ConfirmObtainListPageModule() {
    }
    ConfirmObtainListPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                component_module_1.ComponentModule,
                basic_component_module_1.BasicComponentModule,
                confirm_obtain_list_routing_module_1.ConfirmObtainListPageRoutingModule,
                confirm_obtain_detail_search_module_1.ConfirmObtainDetailSearchPageModule,
                worker_minutes_edit_module_1.WorkerMinutesEditPageModule
            ],
            declarations: [confirm_obtain_list_page_1.ConfirmObtainListPage]
        })
    ], ConfirmObtainListPageModule);
    return ConfirmObtainListPageModule;
}());
exports.ConfirmObtainListPageModule = ConfirmObtainListPageModule;
