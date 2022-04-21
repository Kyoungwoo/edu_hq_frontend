"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: '',
        redirectTo: 'splash',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/login/login/login.module'); }).then(function (m) { return m.LoginPageModule; }); }
    },
    {
        path: 'main-admin',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/main/admin/main-admin/main-admin.module'); }).then(function (m) { return m.MainAdminPageModule; }); }
    },
    {
        path: 'main-user',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/main/user/main-user/main-user.module'); }).then(function (m) { return m.MainUserPageModule; }); }
    },
    {
        path: 'sign-up-type',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/sign-up/sign-up-type/sign-up-type.module'); }).then(function (m) { return m.SignUpTypePageModule; }); }
    },
    {
        path: 'sign-up-company',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/sign-up/sign-up-company/sign-up-company.module'); }).then(function (m) { return m.SignUpCompanyPageModule; }); }
    },
    {
        path: 'sign-up-worker',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/sign-up/sign-up-worker/sign-up-worker.module'); }).then(function (m) { return m.SignUpWorkerPageModule; }); }
    },
    {
        path: 'sign-up-terms',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/sign-up/sign-up-terms/sign-up-terms.module'); }).then(function (m) { return m.SignUpTermsPageModule; }); }
    },
    {
        path: 'sign-up-done',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/sign-up/sign-up-done/sign-up-done.module'); }).then(function (m) { return m.SignUpDonePageModule; }); }
    },
    {
        path: 'monitor',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/monitor/monitor.module'); }).then(function (m) { return m.MonitorPageModule; }); }
    },
    {
        path: 'manual-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/customer-support/user-manual/manual-list/manual-list.module'); }).then(function (m) { return m.ManualListPageModule; }); }
    },
    {
        path: 'msds-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/notice-board/msds/msds-list/msds-list.module'); }).then(function (m) { return m.MsdsListPageModule; }); }
    },
    {
        path: 'msds-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/notice-board/msds/msds-edit/msds-edit.module'); }).then(function (m) { return m.MsdsEditPageModule; }); }
    },
    {
        path: 'minutes-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/notice-board/minutes/minutes-list/minutes-list.module'); }).then(function (m) { return m.MinutesListPageModule; }); }
    },
    {
        path: 'notice-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/notice-board/notice/notice-list/notice-list.module'); }).then(function (m) { return m.NoticeListPageModule; }); }
    },
    {
        path: 'notice-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/notice-board/notice/notice-edit/notice-edit.module'); }).then(function (m) { return m.NoticeEditPageModule; }); }
    },
    {
        path: 'manual-detail-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/customer-support/user-manual/manual-detail-search/manual-detail-search.module'); }).then(function (m) { return m.ManualDetailSearchPageModule; }); }
    },
    {
        path: 'manual-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/customer-support/user-manual/manual-edit/manual-edit.module'); }).then(function (m) { return m.ManualEditPageModule; }); }
    },
    {
        path: 'use-terms',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/customer-support/terms/use-terms/use-terms.module'); }).then(function (m) { return m.UseTermsPageModule; }); }
    },
    {
        path: 'sign-up-health',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/sign-up/sign-up-health/sign-up-health.module'); }).then(function (m) { return m.SignUpHealthPageModule; }); }
    },
    {
        path: 'privacy',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/customer-support/terms/privacy/privacy.module'); }).then(function (m) { return m.PrivacyPageModule; }); }
    },
    {
        path: 'heavy-equip-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/equipment-management/heavy-equip-management/heavy-equip-list/heavy-equip-list.module'); }).then(function (m) { return m.HeavyEquipListPageModule; }); }
    },
    {
        path: 'scene-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/project-management/scene-management/scene-list/scene-list.module'); }).then(function (m) { return m.SceneListPageModule; }); }
    },
    {
        path: 'scene-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/project-management/scene-management/scene-edit/scene-edit.module'); }).then(function (m) { return m.SceneEditPageModule; }); }
    },
    {
        path: 'scene-area-set',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/project-management/scene-management/scene-area-set/scene-area-set.module'); }).then(function (m) { return m.SceneAreaSetPageModule; }); }
    },
    {
        path: 'member-standard-set',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/project-management/scene-management/member-standard-set/member-standard-set.module'); }).then(function (m) { return m.MemberStandardSetPageModule; }); }
    },
    {
        path: 'area-standard-set',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/project-management/scene-management/area-standard-set/area-standard-set.module'); }).then(function (m) { return m.AreaStandardSetPageModule; }); }
    },
    {
        path: 'work-standard-set',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/project-management/scene-management/work-standard-set/work-standard-set.module'); }).then(function (m) { return m.WorkStandardSetPageModule; }); }
    },
    {
        path: 'contractor-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/project-management/contractor-management/contractor-list/contractor-list.module'); }).then(function (m) { return m.ContractorListPageModule; }); }
    },
    {
        path: 'contractor-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/project-management/contractor-management/contractor-edit/contractor-edit.module'); }).then(function (m) { return m.ContractorEditPageModule; }); }
    },
    {
        path: 'partner-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/project-management/partner-management/partner-list/partner-list.module'); }).then(function (m) { return m.PartnerListPageModule; }); }
    },
    {
        path: 'partner-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/project-management/partner-management/partner-edit/partner-edit.module'); }).then(function (m) { return m.PartnerEditPageModule; }); }
    },
    {
        path: 'heavy-equip-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/equipment-management/heavy-equip-management/heavy-equip-edit/heavy-equip-edit.module'); }).then(function (m) { return m.HeavyEquipEditPageModule; }); }
    },
    {
        path: 'serial-no-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/equipment-management/smart-equipment/serial-no-list/serial-no-list.module'); }).then(function (m) { return m.SerialNoListPageModule; }); }
    },
    {
        path: 'each-device-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/equipment-management/smart-equipment/each-device-list/each-device-list.module'); }).then(function (m) { return m.EachDeviceListPageModule; }); }
    },
    {
        path: 'smart-detail-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/equipment-management/smart-equipment/smart-detail-search/smart-detail-search.module'); }).then(function (m) { return m.SmartDetailSearchPageModule; }); }
    },
    {
        path: 'each-device-add',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/equipment-management/smart-equipment/each-device-add/each-device-add.module'); }).then(function (m) { return m.EachDeviceAddPageModule; }); }
    },
    {
        path: 'heavy-device-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/equipment-management/smart-equipment/heavy-device-list/heavy-device-list.module'); }).then(function (m) { return m.HeavyDeviceListPageModule; }); }
    },
    {
        path: 'heavy-device-add',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/equipment-management/smart-equipment/heavy-device-add/heavy-device-add.module'); }).then(function (m) { return m.HeavyDeviceAddPageModule; }); }
    },
    {
        path: 'system-standard-set',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/project-management/scene-management/system-standard-set/system-standard-set.module'); }).then(function (m) { return m.SystemStandardSetPageModule; }); }
    },
    {
        path: 'my-status-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/today-work/my-status-situation/my-status-list/my-status-list.module'); }).then(function (m) { return m.MyStatusListPageModule; }); }
    },
    {
        path: 'my-status-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/today-work/my-status-situation/my-status-edit/my-status-edit.module'); }).then(function (m) { return m.MyStatusEditPageModule; }); }
    },
    {
        path: 'worker-status-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/today-work/my-status-situation/worker-status-list/worker-status-list.module'); }).then(function (m) { return m.WorkerStatusListPageModule; }); }
    },
    {
        path: 'notice-open-range',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/notice-board/notice/notice-open-range/notice-open-range.module'); }).then(function (m) { return m.NoticeOpenRangePageModule; }); }
    },
    {
        path: 'heavy-device-add',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/equipment-management/smart-equipment/heavy-device-add/heavy-device-add.module'); }).then(function (m) { return m.HeavyDeviceAddPageModule; }); }
    },
    {
        path: 'system-standard-set',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/project-management/scene-management/system-standard-set/system-standard-set.module'); }).then(function (m) { return m.SystemStandardSetPageModule; }); }
    },
    {
        path: 'danger-area-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/equipment-management/smart-equipment/danger-area-list/danger-area-list.module'); }).then(function (m) { return m.DangerAreaListPageModule; }); }
    },
    {
        path: 'danger-area-add',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/equipment-management/smart-equipment/danger-area-add/danger-area-add.module'); }).then(function (m) { return m.DangerAreaAddPageModule; }); }
    },
    {
        path: 'each-device-detail-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/equipment-management/smart-equipment/each-device-detail-search/each-device-detail-search.module'); }).then(function (m) { return m.EachDeviceDetailSearchPageModule; }); }
    },
    {
        path: 'heavy-device-detail-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/equipment-management/smart-equipment/heavy-device-detail-search/heavy-device-detail-search.module'); }).then(function (m) { return m.HeavyDeviceDetailSearchPageModule; }); }
    },
    {
        path: 'danger-area-detail-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/equipment-management/smart-equipment/danger-area-detail-search/danger-area-detail-search.module'); }).then(function (m) { return m.DangerAreaDetailSearchPageModule; }); }
    },
    {
        path: 'confirm-pending-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/confirm/box/confirm-pending-list/confirm-pending-list.module'); }).then(function (m) { return m.ConfirmPendingListPageModule; }); }
    },
    {
        path: 'confirm-pending-detail-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/confirm/box/confirm-pending-detail-search/confirm-pending-detail-search.module'); }).then(function (m) { return m.ConfirmPendingDetailSearchPageModule; }); }
    },
    {
        path: 'confirm-obtain-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/confirm/box/confirm-obtain-list/confirm-obtain-list.module'); }).then(function (m) { return m.ConfirmObtainListPageModule; }); }
    },
    {
        path: 'confirm-obtain-detail-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/confirm/box/confirm-obtain-detail-search/confirm-obtain-detail-search.module'); }).then(function (m) { return m.ConfirmObtainDetailSearchPageModule; }); }
    },
    {
        path: 'confirm-progress-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/confirm/box/confirm-progress-list/confirm-progress-list.module'); }).then(function (m) { return m.ConfirmProgressListPageModule; }); }
    },
    {
        path: 'confirm-progress-detail-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/confirm/box/confirm-progress-detail-search/confirm-progress-detail-search.module'); }).then(function (m) { return m.ConfirmProgressDetailSearchPageModule; }); }
    },
    {
        path: 'confirm-cc-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/confirm/box/confirm-cc-list/confirm-cc-list.module'); }).then(function (m) { return m.ConfirmCcListPageModule; }); }
    },
    {
        path: 'confirm-cc-detail-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/confirm/box/confirm-cc-detail-search/confirm-cc-detail-search.module'); }).then(function (m) { return m.ConfirmCcDetailSearchPageModule; }); }
    },
    {
        path: 'approval-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/confirm/box/approval-edit/approval-edit.module'); }).then(function (m) { return m.ApprovalEditPageModule; }); }
    },
    {
        path: 'worker-minutes-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/work-plan/work-minutes/worker-minutes-list/worker-minutes-list.module'); }).then(function (m) { return m.WorkerMinutesListPageModule; }); }
    },
    {
        path: 'worker-minutes-detail-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/work-plan/work-minutes/worker-minutes-detail-search/worker-minutes-detail-search.module'); }).then(function (m) { return m.WorkerMinutesDetailSearchPageModule; }); }
    },
    {
        path: 'supervision-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/project-management/supervision-management/supervision-list/supervision-list.module'); }).then(function (m) { return m.SupervisionListPageModule; }); }
    },
    {
        path: 'supervision-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/project-management/supervision-management/supervision-edit/supervision-edit.module'); }).then(function (m) { return m.SupervisionEditPageModule; }); }
    },
    {
        path: 'area-add',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/project-management/scene-management/area-add/area-add.module'); }).then(function (m) { return m.AreaAddPageModule; }); }
    },
    {
        path: 'safety-education-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/safety-education/educatiion-status/safety-education-list/safety-education-list.module'); }).then(function (m) { return m.SafetyEducationListPageModule; }); }
    },
    {
        path: 'risk-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/work-plan/risk-assessment/risk-list/risk-list.module'); }).then(function (m) { return m.RiskListPageModule; }); }
    },
    {
        path: 'risk-detail-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/work-plan/risk-assessment/risk-detail-search/risk-detail-search.module'); }).then(function (m) { return m.RiskDetailSearchPageModule; }); }
    },
    {
        path: 'worker-status-add',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/today-work/my-status-situation/worker-status-add/worker-status-add.module'); }).then(function (m) { return m.WorkerStatusAddPageModule; }); }
    },
    {
        path: 'risk-evaluation-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/work-plan/risk-assessment/risk-evaluation-edit/risk-evaluation-edit.module'); }).then(function (m) { return m.RiskEvaluationEditPageModule; }); }
    },
    {
        path: 'worker-approval-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/member-management/member-approval-wait/worker-approval-list/worker-approval-list.module'); }).then(function (m) { return m.WorkerApprovalListPageModule; }); },
        canDeactivate: []
    },
    {
        path: 'risk-evaluation-popup',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/work-plan/risk-assessment/risk-evaluation-popup/risk-evaluation-popup.module'); }).then(function (m) { return m.RiskEvaluationPopupPageModule; }); }
    },
    {
        path: 'safety-education-detail-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/safety-education/educatiion-status/safety-education-detail-search/safety-education-detail-search.module'); }).then(function (m) { return m.SafetyEducationDetailSearchPageModule; }); }
    },
    {
        path: 'safety-education-detail-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/safety-education/educatiion-status/safety-education-detail-list/safety-education-detail-list.module'); }).then(function (m) { return m.SafetyEducationDetailListPageModule; }); }
    },
    {
        path: 'safety-education-detail-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/safety-education/educatiion-status/safety-education-detail-edit/safety-education-detail-edit.module'); }).then(function (m) { return m.SafetyEducationDetailEditPageModule; }); }
    },
    {
        path: 'safety-education-result-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/safety-education/education-result/safety-education-result-list/safety-education-result-list.module'); }).then(function (m) { return m.SafetyEducationResultListPageModule; }); }
    },
    {
        path: 'new-write-target',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/safety-education/education-result/new-write-target/new-write-target.module'); }).then(function (m) { return m.NewWriteTargetPageModule; }); }
    },
    {
        path: 'education-confirm-pending-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/safety-education/education-result/education-confirm-pending-list/education-confirm-pending-list.module'); }).then(function (m) { return m.EducationConfirmPendingListPageModule; }); }
    },
    {
        path: 'safety-education-result-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/safety-education/education-result/safety-education-result-edit/safety-education-result-edit.module'); }).then(function (m) { return m.SafetyEducationResultEditPageModule; }); }
    },
    {
        path: 'safety-education-result-detail-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/safety-education/education-result/safety-education-result-detail-search/safety-education-result-detail-search.module'); }).then(function (m) { return m.SafetyEducationResultDetailSearchPageModule; }); }
    },
    {
        path: 'my-education-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/safety-education/my-education/my-education-list/my-education-list.module'); }).then(function (m) { return m.MyEducationListPageModule; }); }
    },
    {
        path: 'my-education-detail-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/safety-education/my-education/my-education-detail-list/my-education-detail-list.module'); }).then(function (m) { return m.MyEducationDetailListPageModule; }); }
    },
    {
        path: 'safety-education-history-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/safety-education/education-history/safety-education-history-list/safety-education-history-list.module'); }).then(function (m) { return m.SafetyEducationHistoryListPageModule; }); }
    },
    {
        path: 'safety-education-history-detail',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/safety-education/education-history/safety-education-history-detail/safety-education-history-detail.module'); }).then(function (m) { return m.SafetyEducationHistoryDetailPageModule; }); }
    },
    {
        path: 'lh-approval-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/member-management/member-approval-wait/lh-approval-list/lh-approval-list.module'); }).then(function (m) { return m.LhApprovalListPageModule; }); }
    },
    {
        path: 'supervision-approval-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/member-management/member-approval-wait/supervision-approval-list/supervision-approval-list.module'); }).then(function (m) { return m.SupervisionApprovalListPageModule; }); }
    },
    {
        path: 'partner-approval-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/member-management/member-approval-wait/partner-approval-list/partner-approval-list.module'); }).then(function (m) { return m.PartnerApprovalListPageModule; }); }
    },
    {
        path: 'worker-info-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/member-management/member-management/worker-info-list/worker-info-list.module'); }).then(function (m) { return m.WorkerInfoListPageModule; }); }
    },
    {
        path: 'lh-info-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/member-management/member-management/lh-info-list/lh-info-list.module'); }).then(function (m) { return m.LhInfoListPageModule; }); }
    },
    {
        path: 'supervision-info-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/member-management/member-management/supervision-info-list/supervision-info-list.module'); }).then(function (m) { return m.SupervisionInfoListPageModule; }); }
    },
    {
        path: 'partner-info-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/member-management/member-management/partner-info-list/partner-info-list.module'); }).then(function (m) { return m.PartnerInfoListPageModule; }); }
    },
    {
        path: 'worker-approval-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/member-management/member-approval-wait/worker-approval-edit/worker-approval-edit.module'); }).then(function (m) { return m.WorkerApprovalEditPageModule; }); }
    },
    {
        path: 'belong-info-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/member-management/member-approval-wait/belong-info-edit/belong-info-edit.module'); }).then(function (m) { return m.BelongInfoEditPageModule; }); }
    },
    {
        path: 'lh-approval-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/member-management/member-approval-wait/lh-approval-edit/lh-approval-edit.module'); }).then(function (m) { return m.LhApprovalEditPageModule; }); }
    },
    {
        path: 'supervision-approval-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/member-management/member-approval-wait/supervision-approval-edit/supervision-approval-edit.module'); }).then(function (m) { return m.SupervisionApprovalEditPageModule; }); }
    },
    {
        path: 'partner-approval-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/member-management/member-approval-wait/partner-approval-edit/partner-approval-edit.module'); }).then(function (m) { return m.PartnerApprovalEditPageModule; }); }
    },
    {
        path: 'partner-into-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/member-management/member-management/partner-into-edit/partner-into-edit.module'); }).then(function (m) { return m.PartnerIntoEditPageModule; }); }
    },
    {
        path: 'supervision-info-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/member-management/member-management/supervision-info-edit/supervision-info-edit.module'); }).then(function (m) { return m.SupervisionInfoEditPageModule; }); }
    },
    {
        path: 'lh-info-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/member-management/member-management/lh-info-edit/lh-info-edit.module'); }).then(function (m) { return m.LhInfoEditPageModule; }); }
    },
    {
        path: 'worker-info-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/member-management/member-management/worker-info-edit/worker-info-edit.module'); }).then(function (m) { return m.WorkerInfoEditPageModule; }); }
    },
    {
        path: 'notify-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/notify-board/notify/notify-list/notify-list.module'); }).then(function (m) { return m.NotifyListPageModule; }); }
    },
    {
        path: 'open-detail-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/notify-board/notify/open-detail-search/open-detail-search.module'); }).then(function (m) { return m.OpenDetailSearchPageModule; }); }
    },
    {
        path: 'splash',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/splash/splash.module'); }).then(function (m) { return m.SplashPageModule; }); }
    },
    {
        path: 'organization-select',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/project-management/scene-management/organization-select/organization-select.module'); }).then(function (m) { return m.OrganizationSelectPageModule; }); }
    },
    {
        path: 'sign-up-lh',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/sign-up/sign-up-lh/sign-up-lh.module'); }).then(function (m) { return m.SignUpLhPageModule; }); }
    },
    {
        path: 'sign-up-supervision',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/sign-up/sign-up-supervision/sign-up-supervision.module'); }).then(function (m) { return m.SignUpSupervisionPageModule; }); }
    },
    {
        path: 'sign-up-partner',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/sign-up/sign-up-partner/sign-up-partner.module'); }).then(function (m) { return m.SignUpPartnerPageModule; }); }
    },
    {
        path: 'find-pc',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/login/find-pc/find-pc.module'); }).then(function (m) { return m.FindPcPageModule; }); }
    },
    {
        path: 'login-mobile',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/login/login-mobile/login-mobile.module'); }).then(function (m) { return m.LoginMobilePageModule; }); }
    },
    {
        path: 'find-id-mobile-type',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/login/find-mobile/find-id-mobile-type/find-id-mobile-type.module'); }).then(function (m) { return m.FindIdMobileTypePageModule; }); }
    },
    {
        path: 'find-id-mobile-phone',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/login/find-mobile/find-id-mobile-phone/find-id-mobile-phone.module'); }).then(function (m) { return m.FindIdMobilePhonePageModule; }); }
    },
    {
        path: 'find-id-mobile-result',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/login/find-mobile/find-id-mobile-result/find-id-mobile-result.module'); }).then(function (m) { return m.FindIdMobileResultPageModule; }); }
    },
    {
        path: 'find-password-mobile-type',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/login/find-mobile/find-password-mobile-type/find-password-mobile-type.module'); }).then(function (m) { return m.FindPasswordMobileTypePageModule; }); }
    },
    {
        path: 'find-password-mobile-phone',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/login/find-mobile/find-password-mobile-phone/find-password-mobile-phone.module'); }).then(function (m) { return m.FindPasswordMobilePhonePageModule; }); }
    },
    {
        path: 'find-password-mobile-result',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/login/find-mobile/find-password-mobile-result/find-password-mobile-result.module'); }).then(function (m) { return m.FindPasswordMobileResultPageModule; }); }
    },
    {
        path: 'manual-detail',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/customer-support/user-manual/manual-detail/manual-detail.module'); }).then(function (m) { return m.ManualDetailPageModule; }); }
    },
    {
        path: 'my-page',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/my-page/my-page/my-page.module'); }).then(function (m) { return m.MyPagePageModule; }); }
    },
    {
        path: 'my-page-type',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/my-page/my-page-type/my-page-type.module'); }).then(function (m) { return m.MyPageTypePageModule; }); }
    },
    {
        path: 'my-page-info',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/my-page/my-page-info/my-page-info.module'); }).then(function (m) { return m.MyPageInfoPageModule; }); }
    },
    {
        path: 'my-page-health',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/my-page/my-page-health/my-page-health.module'); }).then(function (m) { return m.MyPageHealthPageModule; }); }
    },
    {
        path: 'my-page-education',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/my-page/my-page-education/my-page-education.module'); }).then(function (m) { return m.MyPageEducationPageModule; }); }
    },
    {
        path: 'my-page-mileage',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/my-page/my-page-mileage/my-page-mileage.module'); }).then(function (m) { return m.MyPageMileagePageModule; }); }
    },
    {
        path: 'departure-status-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/work-management/departure-status/departure-status-list/departure-status-list.module'); }).then(function (m) { return m.DepartureStatusListPageModule; }); }
    },
    {
        path: 'today-departure-status-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/work-management/departure-status/today-departure-status-list/today-departure-status-list.module'); }).then(function (m) { return m.TodayDepartureStatusListPageModule; }); }
    },
    {
        path: 'today-departure-status-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/work-management/departure-status/today-departure-status-edit/today-departure-status-edit.module'); }).then(function (m) { return m.TodayDepartureStatusEditPageModule; }); }
    },
    {
        path: 'qr-scan',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/today-work/qr-scan/qr-scan.module'); }).then(function (m) { return m.QrScanPageModule; }); }
    },
    {
        path: 'qr-education-in',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/safety-education/educatiion-status/qr-education-in/qr-education-in.module'); }).then(function (m) { return m.QrEducationInPageModule; }); }
    },
    {
        path: 'change-password',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/my-page/change-password/change-password.module'); }).then(function (m) { return m.ChangePasswordPageModule; }); }
    },
    {
        path: 'change-phone',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/my-page/change-phone/change-phone.module'); }).then(function (m) { return m.ChangePhonePageModule; }); }
    },
    {
        path: 'my-detail-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/safety-education/my-education/my-detail-search/my-detail-search.module'); }).then(function (m) { return m.MyDetailSearchPageModule; }); }
    },
    {
        path: 'my-page-education-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/my-page/my-page-education-search/my-page-education-search.module'); }).then(function (m) { return m.MyPageEducationSearchPageModule; }); }
    },
    {
        path: 'minutes-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/notice-board/minutes/minutes-search/minutes-search.module'); }).then(function (m) { return m.MinutesSearchPageModule; }); }
    },
    {
        path: 'worker-minutes-edit',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.module'); }).then(function (m) { return m.WorkerMinutesEditPageModule; }); }
    },
    {
        path: 'worker-minutes-select-type',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/work-plan/work-minutes/worker-minutes-select-type/worker-minutes-select-type.module'); }).then(function (m) { return m.WorkerMinutesSelectTypePageModule; }); }
    },
    {
        path: 'main-sub-admin',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/main/admin/main-sub-admin/main-sub-admin.module'); }).then(function (m) { return m.MainSubAdminPageModule; }); }
    },
    {
        path: 'main-user-master',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/main/user/main-user-master/main-user-master.module'); }).then(function (m) { return m.MainUserMasterPageModule; }); }
    },
    {
        path: 'main-user-partner',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/main/user/main-user-partner/main-user-partner.module'); }).then(function (m) { return m.MainUserPartnerPageModule; }); }
    },
    {
        path: 'main-user-worker',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/main/user/main-user-worker/main-user-worker.module'); }).then(function (m) { return m.MainUserWorkerPageModule; }); }
    },
    {
        path: 'danger-qr-view',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/equipment-management/smart-equipment/danger-qr-view/danger-qr-view.module'); }).then(function (m) { return m.DangerQrViewPageModule; }); }
    },
    {
        path: 'heavy-qr-view',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/equipment-management/smart-equipment/heavy-qr-view/heavy-qr-view.module'); }).then(function (m) { return m.HeavyQrViewPageModule; }); }
    },
    {
        path: 'setting-menu',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/main/user/setting-menu/setting-menu.module'); }).then(function (m) { return m.SettingMenuPageModule; }); }
    },
    {
        path: 'setting-sounds',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/main/user/setting-sounds/setting-sounds.module'); }).then(function (m) { return m.SettingSoundsPageModule; }); }
    },
    {
        path: 'sos-popup',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/main/user/sos-popup/sos-popup.module'); }).then(function (m) { return m.SosPopupPageModule; }); }
    },
    {
        path: 'risk-pending-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/work-plan/risk-assessment/risk-pending-list/risk-pending-list.module'); }).then(function (m) { return m.RiskPendingListPageModule; }); }
    },
    {
        path: 'worker-minutes-pending-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/work-plan/work-minutes/worker-minutes-pending-list/worker-minutes-pending-list.module'); }).then(function (m) { return m.WorkerMinutesPendingListPageModule; }); }
    },
    {
        path: 'heavy-qr-data',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/equipment-management/smart-equipment/heavy-qr-data/heavy-qr-data.module'); }).then(function (m) { return m.HeavyQrDataPageModule; }); }
    },
    {
        path: 'notice-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/notice-board/notice/notice-search/notice-search.module'); }).then(function (m) { return m.NoticeSearchPageModule; }); }
    },
    {
        path: 'msds-search',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./page/notice-board/msds/msds-search/msds-search.module'); }).then(function (m) { return m.MsdsSearchPageModule; }); }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, {
                //preloadingStrategy: PreloadAllModules
                })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
