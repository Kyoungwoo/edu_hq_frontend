"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MinutesSearchPageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var minutes_search_routing_module_1 = require("./minutes-search-routing.module");
var minutes_search_page_1 = require("./minutes-search.page");
var component_module_1 = require("src/app/component/component.module");
var MinutesSearchPageModule = /** @class */ (function () {
    function MinutesSearchPageModule() {
    }
    MinutesSearchPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                component_module_1.ComponentModule,
                minutes_search_routing_module_1.MinutesSearchPageRoutingModule
            ],
            declarations: [minutes_search_page_1.MinutesSearchPage]
        })
    ], MinutesSearchPageModule);
    return MinutesSearchPageModule;
}());
exports.MinutesSearchPageModule = MinutesSearchPageModule;
