"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NoticeListPageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var notice_list_routing_module_1 = require("./notice-list-routing.module");
var notice_list_page_1 = require("./notice-list.page");
var basic_component_module_1 = require("src/app/basic/component/basic.component.module");
var component_module_1 = require("src/app/component/component.module");
var notice_edit_module_1 = require("../notice-edit/notice-edit.module");
var notice_search_module_1 = require("../notice-search/notice-search.module");
var NoticeListPageModule = /** @class */ (function () {
    function NoticeListPageModule() {
    }
    NoticeListPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                component_module_1.ComponentModule,
                basic_component_module_1.BasicComponentModule,
                notice_list_routing_module_1.NoticeListPageRoutingModule,
                notice_search_module_1.NoticeSearchPageModule,
                notice_edit_module_1.NoticeEditPageModule
            ],
            declarations: [notice_list_page_1.NoticeListPage]
        })
    ], NoticeListPageModule);
    return NoticeListPageModule;
}());
exports.NoticeListPageModule = NoticeListPageModule;
