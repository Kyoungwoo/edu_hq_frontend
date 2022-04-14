"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WorkerMinutesListPageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var worker_minutes_list_routing_module_1 = require("./worker-minutes-list-routing.module");
var worker_minutes_list_page_1 = require("./worker-minutes-list.page");
var component_module_1 = require("src/app/component/component.module");
var basic_component_module_1 = require("src/app/basic/component/basic.component.module");
var worker_minutes_detail_search_module_1 = require("../worker-minutes-detail-search/worker-minutes-detail-search.module");
var worker_minutes_select_type_module_1 = require("../worker-minutes-select-type/worker-minutes-select-type.module");
var worker_minutes_edit_module_1 = require("../worker-minutes-edit/worker-minutes-edit.module");
var worker_minutes_pending_list_module_1 = require("../worker-minutes-pending-list/worker-minutes-pending-list.module");
var WorkerMinutesListPageModule = /** @class */ (function () {
    function WorkerMinutesListPageModule() {
    }
    WorkerMinutesListPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                component_module_1.ComponentModule,
                basic_component_module_1.BasicComponentModule,
                worker_minutes_list_routing_module_1.WorkerMinutesListPageRoutingModule,
                // 모바일 상세검색
                worker_minutes_detail_search_module_1.WorkerMinutesDetailSearchPageModule,
                // 신규작성 시, 타입 선택
                worker_minutes_select_type_module_1.WorkerMinutesSelectTypePageModule,
                // 수정 페이지
                worker_minutes_edit_module_1.WorkerMinutesEditPageModule,
                // 미결함
                worker_minutes_pending_list_module_1.WorkerMinutesPendingListPageModule
            ],
            declarations: [worker_minutes_list_page_1.WorkerMinutesListPage]
        })
    ], WorkerMinutesListPageModule);
    return WorkerMinutesListPageModule;
}());
exports.WorkerMinutesListPageModule = WorkerMinutesListPageModule;
