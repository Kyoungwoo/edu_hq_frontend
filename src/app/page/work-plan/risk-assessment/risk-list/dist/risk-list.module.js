"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RiskListPageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var risk_list_routing_module_1 = require("./risk-list-routing.module");
var risk_list_page_1 = require("./risk-list.page");
var component_module_1 = require("src/app/component/component.module");
var basic_component_module_1 = require("src/app/basic/component/basic.component.module");
var risk_detail_search_module_1 = require("../risk-detail-search/risk-detail-search.module");
var risk_evaluation_edit_module_1 = require("../risk-evaluation-edit/risk-evaluation-edit.module");
var risk_pending_list_module_1 = require("../risk-pending-list/risk-pending-list.module");
var RiskListPageModule = /** @class */ (function () {
    function RiskListPageModule() {
    }
    RiskListPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                component_module_1.ComponentModule,
                basic_component_module_1.BasicComponentModule,
                risk_list_routing_module_1.RiskListPageRoutingModule,
                risk_detail_search_module_1.RiskDetailSearchPageModule,
                risk_evaluation_edit_module_1.RiskEvaluationEditPageModule,
                risk_pending_list_module_1.RiskPendingListPageModule
            ],
            declarations: [risk_list_page_1.RiskListPage]
        })
    ], RiskListPageModule);
    return RiskListPageModule;
}());
exports.RiskListPageModule = RiskListPageModule;
