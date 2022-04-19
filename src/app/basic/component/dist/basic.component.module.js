"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BasicComponentModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var directive_module_1 = require("../directive/directive.module");
var pipes_module_1 = require("../pipes/pipes.module");
var daum_component_1 = require("./dialog/daum/daum.component");
var calendar_popover_component_1 = require("./input/calendar-popover/calendar-popover.component");
var calendar_component_1 = require("./input/calendar/calendar.component");
var check_group_component_1 = require("./input/check-group/check-group.component");
var check_component_1 = require("./input/check/check.component");
var datetime_popover_component_1 = require("./input/datetime-popover/datetime-popover.component");
var datetime_component_1 = require("./input/datetime/datetime.component");
var file_component_1 = require("./input/file/file.component");
var input_caption_component_1 = require("./input/input-caption/input-caption.component");
var input_component_1 = require("./input/input/input.component");
var naver_map_component_1 = require("./input/naver-map/naver-map.component");
var select_multiple_popover_component_1 = require("./input/select-multiple-popover/select-multiple-popover.component");
var select_option_component_1 = require("./input/select-option/select-option.component");
var select_popover_component_1 = require("./input/select-popover/select-popover.component");
var select_component_1 = require("./input/select/select.component");
var textarea_component_1 = require("./input/textarea/textarea.component");
var avatar_component_1 = require("./ui/avatar/avatar.component");
var button_footer_component_1 = require("./ui/button-footer/button-footer.component");
var button_component_1 = require("./ui/button/button.component");
var card_component_1 = require("./ui/card/card.component");
var col_component_1 = require("./ui/col/col.component");
var container_component_1 = require("./ui/container/container.component");
var copy_right_component_1 = require("./ui/copy-right/copy-right.component");
var img_component_1 = require("./ui/img/img.component");
var logo_component_1 = require("./ui/logo/logo.component");
var row_component_1 = require("./ui/row/row.component");
var table_component_1 = require("./ui/table/table.component");
var scrolling_1 = require("@angular/cdk/scrolling");
var line_component_1 = require("./ui/line/line.component");
var radio_component_1 = require("./input/radio/radio.component");
var radio_input_component_1 = require("./input/radio-input/radio-input.component");
var radio_group_component_1 = require("./input/radio-group/radio-group.component");
var input_template_component_1 = require("./input/input-template/input-template.component");
var input_group_component_1 = require("./input/input-group/input-group.component");
var pager_component_1 = require("./ui/pager/pager.component");
var dismiss_button_component_1 = require("./ui/dismiss-button/dismiss-button.component");
var email_component_1 = require("./input/email/email.component");
var smartedit_component_1 = require("./input/smartedit/smartedit.component");
var menu_button_component_1 = require("./ui/menu-button/menu-button.component");
var nfc_component_1 = require("./dialog/nfc/nfc.component");
var graph_group_component_1 = require("./ui/graph-group/graph-group.component");
var graph_value_component_1 = require("./ui/graph-value/graph-value.component");
var graph_line_component_1 = require("./ui/graph-line/graph-line.component");
var file_preview_component_1 = require("./ui/file-preview/file-preview.component");
var file_popover_component_1 = require("./input/file-popover/file-popover.component");
var qr_scanner_component_1 = require("./dialog/qr-scanner/qr-scanner.component");
var naver_user_map_component_1 = require("./input/naver-user-map/naver-user-map.component");
var naver_user_map_modal_component_1 = require("./input/naver-user-map-modal/naver-user-map-modal.component");
var BasicComponentModule = /** @class */ (function () {
    function BasicComponentModule() {
    }
    BasicComponentModule = __decorate([
        core_1.NgModule({
            declarations: [
                // dialog components
                daum_component_1.DaumComponent,
                qr_scanner_component_1.QrScannerComponent,
                // input components
                calendar_component_1.CalendarComponent,
                calendar_popover_component_1.CalendarPopoverComponent,
                check_component_1.CheckComponent,
                check_group_component_1.CheckGroupComponent,
                datetime_component_1.DatetimeComponent,
                datetime_popover_component_1.DatetimePopoverComponent,
                email_component_1.EmailComponent,
                file_component_1.FileComponent,
                file_popover_component_1.FilePopoverComponent,
                input_component_1.InputComponent,
                input_caption_component_1.InputCaptionComponent,
                input_group_component_1.InputGroupComponent,
                input_template_component_1.InputTemplateComponent,
                naver_map_component_1.NaverMapComponent,
                naver_user_map_component_1.NaverUserMapComponent,
                naver_user_map_modal_component_1.NaverUserMapModalComponent,
                radio_component_1.RadioComponent,
                radio_group_component_1.RadioGroupComponent,
                radio_input_component_1.RadioInputComponent,
                select_component_1.SelectComponent,
                select_multiple_popover_component_1.SelectMultiplePopoverComponent,
                select_option_component_1.SelectOptionComponent,
                select_popover_component_1.SelectPopoverComponent,
                textarea_component_1.TextareaComponent,
                // ui components
                avatar_component_1.AvatarComponent,
                button_component_1.ButtonComponent,
                button_footer_component_1.ButtonFooterComponent,
                card_component_1.CardComponent,
                col_component_1.ColComponent,
                container_component_1.ContainerComponent,
                copy_right_component_1.CopyRightComponent,
                dismiss_button_component_1.DismissButtonComponent,
                file_preview_component_1.FilePreviewComponent,
                graph_group_component_1.GraphGroupComponent,
                graph_line_component_1.GraphLineComponent,
                graph_value_component_1.GraphValueComponent,
                img_component_1.ImgComponent,
                line_component_1.LineComponent,
                logo_component_1.LogoComponent,
                menu_button_component_1.MenuButtonComponent,
                row_component_1.RowComponent,
                table_component_1.TableComponent,
                pager_component_1.PagerComponent,
                smartedit_component_1.SmarteditComponent,
                nfc_component_1.NfcComponent
            ],
            imports: [
                common_1.CommonModule,
                angular_1.IonicModule,
                forms_1.FormsModule,
                directive_module_1.DirectiveModule,
                pipes_module_1.PipesModule,
                router_1.RouterModule,
                scrolling_1.ScrollingModule
            ],
            exports: [
                //dialog
                daum_component_1.DaumComponent,
                qr_scanner_component_1.QrScannerComponent,
                // input components
                directive_module_1.DirectiveModule,
                calendar_component_1.CalendarComponent,
                check_component_1.CheckComponent,
                check_group_component_1.CheckGroupComponent,
                datetime_component_1.DatetimeComponent,
                email_component_1.EmailComponent,
                file_component_1.FileComponent,
                input_component_1.InputComponent,
                input_caption_component_1.InputCaptionComponent,
                input_group_component_1.InputGroupComponent,
                input_template_component_1.InputTemplateComponent,
                naver_map_component_1.NaverMapComponent,
                naver_user_map_component_1.NaverUserMapComponent,
                naver_user_map_modal_component_1.NaverUserMapModalComponent,
                radio_component_1.RadioComponent,
                radio_group_component_1.RadioGroupComponent,
                radio_input_component_1.RadioInputComponent,
                select_component_1.SelectComponent,
                select_option_component_1.SelectOptionComponent,
                textarea_component_1.TextareaComponent,
                // ui components
                avatar_component_1.AvatarComponent,
                button_component_1.ButtonComponent,
                button_footer_component_1.ButtonFooterComponent,
                card_component_1.CardComponent,
                col_component_1.ColComponent,
                container_component_1.ContainerComponent,
                copy_right_component_1.CopyRightComponent,
                dismiss_button_component_1.DismissButtonComponent,
                file_preview_component_1.FilePreviewComponent,
                graph_group_component_1.GraphGroupComponent,
                graph_line_component_1.GraphLineComponent,
                graph_value_component_1.GraphValueComponent,
                img_component_1.ImgComponent,
                line_component_1.LineComponent,
                logo_component_1.LogoComponent,
                menu_button_component_1.MenuButtonComponent,
                row_component_1.RowComponent,
                table_component_1.TableComponent,
                pager_component_1.PagerComponent,
                smartedit_component_1.SmarteditComponent,
                nfc_component_1.NfcComponent
            ]
        })
    ], BasicComponentModule);
    return BasicComponentModule;
}());
exports.BasicComponentModule = BasicComponentModule;
