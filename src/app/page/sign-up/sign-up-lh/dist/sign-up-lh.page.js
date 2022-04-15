"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.SignUpLhPage = void 0;
var core_1 = require("@angular/core");
var basic_animation_1 = require("src/app/basic/basic.animation");
var connect_service_1 = require("src/app/basic/service/core/connect.service");
var environment_1 = require("src/environments/environment");
var sign_up_lh_interface_1 = require("./sign-up-lh.interface");
var SignUpLhPage = /** @class */ (function () {
    function SignUpLhPage(el, connect, nav, regex, promise, changeDetector) {
        this.el = el;
        this.connect = connect;
        this.nav = nav;
        this.regex = regex;
        this.promise = promise;
        this.changeDetector = changeDetector;
        this.form = new sign_up_lh_interface_1.SignUpLhForm();
        this.validator = new connect_service_1.Validator(new sign_up_lh_interface_1.SignUpLhForm()).validator;
    }
    SignUpLhPage.prototype.ngOnInit = function () {
        if (!this.checkParams())
            return this.nav.navigateBack('/sign-up-type');
        this.test();
    };
    SignUpLhPage.prototype.test = function () {
        return __awaiter(this, void 0, void 0, function () {
            var el, user_phone, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!environment_1.environment.test.core.test)
                            return [2 /*return*/];
                        if (!environment_1.environment.test.SignUp.test)
                            return [2 /*return*/];
                        el = this.el.nativeElement;
                        return [4 /*yield*/, this.promise.wait()];
                    case 1:
                        _a.sent();
                        // 가짜 데이터 삽입
                        this.form = new sign_up_lh_interface_1.SignUpLhFormMock();
                        // 문자 인증 전송
                        el.querySelector('[name=user_phone]').dispatchEvent(new Event('buttonClick'));
                        return [4 /*yield*/, this.promise.wait(1500)];
                    case 2:
                        _a.sent();
                        user_phone = this.form.user_phone;
                        return [4 /*yield*/, this.connect.run('/test/sms/get', { user_phone: user_phone })];
                    case 3:
                        res = _a.sent();
                        this.form.sms_token = res.rsObj.sms_token;
                        return [4 /*yield*/, this.promise.wait()];
                    case 4:
                        _a.sent();
                        // 문자 인증
                        this.changeDetector.detectChanges();
                        el.querySelector('[name=sms_token]').dispatchEvent(new Event('buttonClick'));
                        return [4 /*yield*/, this.promise.wait()];
                    case 5:
                        _a.sent();
                        // 직위 가져오기
                        el.querySelector('[name=ctgo_job_position_id]').dispatchEvent(new Event('click'));
                        return [4 /*yield*/, this.promise.wait(1000)];
                    case 6:
                        _a.sent();
                        // 현장 가져오기
                        el.querySelector('[name=project_id]').dispatchEvent(new Event('click'));
                        return [4 /*yield*/, this.promise.wait(2500)];
                    case 7:
                        _a.sent();
                        // 조직 기구 가져오기
                        el.querySelector('[name=hq_regional_id]').dispatchEvent(new Event('click'));
                        return [4 /*yield*/, this.promise.wait(1500)];
                    case 8:
                        _a.sent();
                        if (!el.querySelector('[name=hq_business_id]')) return [3 /*break*/, 10];
                        this.changeDetector.detectChanges();
                        el.querySelector('[name=hq_business_id]').dispatchEvent(new Event('click'));
                        return [4 /*yield*/, this.promise.wait(1500)];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10:
                        if (!el.querySelector('[name=hq_department_id]')) return [3 /*break*/, 12];
                        this.changeDetector.detectChanges();
                        el.querySelector('[name=hq_department_id]').dispatchEvent(new Event('click'));
                        return [4 /*yield*/, this.promise.wait(1000)];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12:
                        // 다음 페이지로
                        el.querySelector('[name=button_next]').dispatchEvent(new Event('click'));
                        return [2 /*return*/];
                }
            });
        });
    };
    SignUpLhPage.prototype.checkParams = function () {
        return true;
    };
    SignUpLhPage.prototype.prev = function () {
        this.nav.navigateBack('/sign-up-type');
    };
    SignUpLhPage.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.valid())
                    return [2 /*return*/];
                this.nav.navigateForward('/sign-up-terms', {
                    state: {
                        signUpLhForm: this.form
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    SignUpLhPage.prototype.overlapId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var account_id, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account_id = this.form.account_id;
                        if (!account_id)
                            return [2 /*return*/, this.validator.account_id = null];
                        if ((account_id === null || account_id === void 0 ? void 0 : account_id.length) < 3)
                            return [2 /*return*/, this.validator.account_id = { valid: false, message: '아이디를 3자 이상 입력해주세요.' }];
                        return [4 /*yield*/, this.connect.run('/forSignUp/overlap/id', { account_id: account_id })];
                    case 1:
                        res = _a.sent();
                        this.validator.account_id = { valid: res.rsCode === 0, message: res.rsMsg };
                        return [2 /*return*/];
                }
            });
        });
    };
    SignUpLhPage.prototype.checkPass = function () {
        return __awaiter(this, void 0, void 0, function () {
            var account_token, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account_token = this.form.account_token;
                        if (!account_token)
                            return [2 /*return*/, this.validator.account_token = null];
                        if ((account_token === null || account_token === void 0 ? void 0 : account_token.length) < 4)
                            return [2 /*return*/, this.validator.account_token = { valid: false, message: '비밀번호를 4자이상 입력해주세요.' }];
                        return [4 /*yield*/, this.connect.run('/forSignUp/check/pass', { account_token: account_token })];
                    case 1:
                        res = _a.sent();
                        this.validator.account_token = { valid: res.rsCode === 0, message: res.rsMsg };
                        return [2 /*return*/];
                }
            });
        });
    };
    SignUpLhPage.prototype.checkPassConfirm = function () {
        var _a = this.form, account_token = _a.account_token, account_token_conform = _a.account_token_conform;
        if (account_token !== account_token_conform)
            return this.validator.account_token_conform = { valid: false, message: '비밀번호와 비밀번호 확인이 다릅니다.' };
        else
            return this.validator.account_token_conform = { valid: true };
    };
    // user_phone은 overlapPhone 과 aligoSend 두개를 모두 실행해야 valid 된다.
    SignUpLhPage.prototype.overlapPhone = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user_phone, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user_phone = this.form.user_phone;
                        if (!user_phone)
                            return [2 /*return*/, this.validator.user_phone = null];
                        if ((user_phone === null || user_phone === void 0 ? void 0 : user_phone.length) < 3)
                            return [2 /*return*/, this.validator.user_phone = { valid: false, message: '휴대폰 번호를 정확히 입력해주세요.' }];
                        return [4 /*yield*/, this.connect.run('/forSignUp/overlap/phone', { user_phone: user_phone })];
                    case 1:
                        res = _a.sent();
                        this.validator.user_phone = res.rsCode === 0 ? null : { valid: res.rsCode === 0, message: res.rsMsg };
                        this.validator.sms_token = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    SignUpLhPage.prototype.aligoSend = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var user_phone, res, res2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        user_phone = this.form.user_phone;
                        if (((_a = this.validator.user_phone) === null || _a === void 0 ? void 0 : _a.valid) === false)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.connect.run('/aligo/send', { user_phone: user_phone })];
                    case 1:
                        res = _b.sent();
                        this.validator.user_phone = { valid: res.rsCode === 0, message: res.rsMsg };
                        return [4 /*yield*/, this.connect.run('/test/sms/get', { user_phone: user_phone })];
                    case 2:
                        res2 = _b.sent();
                        this.form.sms_token = res2.rsObj.sms_token;
                        return [4 /*yield*/, this.promise.wait()];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignUpLhPage.prototype.aligoCheck = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, user_phone, sms_token, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.form, user_phone = _a.user_phone, sms_token = _a.sms_token;
                        return [4 /*yield*/, this.connect.run('/aligo/check', { user_phone: user_phone, sms_token: sms_token })];
                    case 1:
                        res = _b.sent();
                        this.validator.sms_token = { valid: res.rsCode === 0, message: res.rsMsg };
                        return [2 /*return*/];
                }
            });
        });
    };
    SignUpLhPage.prototype.overlapEmail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user_email, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user_email = this.form.user_email;
                        return [4 /*yield*/, this.connect.run('/forSignUp/overlap/email', { user_email: user_email })];
                    case 1:
                        res = _a.sent();
                        this.validator.user_email = { valid: res.rsCode === 0, message: res.rsMsg };
                        return [2 /*return*/];
                }
            });
        });
    };
    SignUpLhPage.prototype.findFile = function (view_type) {
        return this.form.file_preview.find(function (futItem) { return futItem.view_type === view_type; });
    };
    SignUpLhPage.prototype.valid = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        console.log(this.form);
        if (!this.form.user_name)
            this.validator.user_name = { message: '이름을 입력해주세요.', valid: false };
        else
            this.validator.user_name = { valid: true };
        if (!this.form.account_id)
            this.validator.account_id = { message: '아이디를 입력해주세요.', valid: false };
        else if ((_a = this.validator.account_id) === null || _a === void 0 ? void 0 : _a.valid)
            this.validator.account_id = { valid: true };
        if (!this.form.account_token)
            this.validator.account_token = { message: '비밀번호를 입력해주세요.', valid: false };
        else if ((_b = this.validator.account_token) === null || _b === void 0 ? void 0 : _b.valid)
            this.validator.account_token = { valid: true };
        if (!this.form.account_token_conform)
            this.validator.account_token_conform = { message: '비밀번호 확인을 입력해주세요.', valid: false };
        else if ((_c = this.validator.account_token_conform) === null || _c === void 0 ? void 0 : _c.valid)
            this.validator.account_token_conform = { valid: true };
        if (!this.form.user_birth)
            this.validator.user_birth = { message: '생년월일을 입력해주세요.', valid: false };
        else
            this.validator.user_birth = { valid: true };
        if (!this.form.user_gender)
            this.validator.user_gender = { message: '성별을 선택해주세요.', valid: false };
        else
            this.validator.user_gender = { valid: true };
        if (!this.form.user_phone)
            this.validator.user_phone = { message: '휴대폰번호를 입력해주세요.', valid: false };
        else if ((_d = this.validator.user_phone) === null || _d === void 0 ? void 0 : _d.valid)
            this.validator.user_phone = { valid: true };
        if (!this.form.sms_token)
            this.validator.sms_token = { message: '문자인증번호를 입력해주세요.', valid: false };
        else if (!((_e = this.validator.sms_token) === null || _e === void 0 ? void 0 : _e.valid))
            this.validator.sms_token = { message: '문자인증번호를 인증해주세요.', valid: false };
        else
            this.validator.sms_token = { valid: true };
        if ((_f = this.validator.user_email) === null || _f === void 0 ? void 0 : _f.valid)
            this.validator.user_email = { valid: true };
        if (this.form.ctgo_job_position_id == null)
            this.validator.ctgo_job_position_id = { message: '직위를 입력해주세요.', valid: false };
        else
            this.validator.ctgo_job_position_id = { valid: true };
        if (!this.form.hq_regional_id)
            this.validator.hq_regional_id = { message: '지역본부를 입력해주세요', valid: false };
        else
            this.validator.hq_regional_id = { valid: true };
        // 지역본부 선택을 했는데 본사면 통과
        if (!this.form.hq_regional_entire_state
            && !this.form.hq_business_id)
            this.validator.hq_business_id = { message: '사업본부를 입력해주세요', valid: false };
        else
            this.validator.hq_business_id = { valid: true };
        // 사업본부 선택을 했는데 사업본부 본사면 통과
        if (!this.form.hq_regional_entire_state
            && !this.form.hq_business_entire_state
            && !this.form.hq_department_id)
            this.validator.hq_department_id = { message: '부서를 입력해주세요', valid: false };
        else
            this.validator.hq_department_id = { valid: true };
        if (this.form.project_id == null)
            this.validator.project_id = { message: '현장을 입력해주세요.', valid: false };
        else
            this.validator.project_id = { valid: true };
        this.validator.file_preview = { valid: true };
        this.validator.file = { valid: true };
        this.validator.file_json = { valid: true };
        for (var key in this.validator) {
            if (!((_g = this.validator[key]) === null || _g === void 0 ? void 0 : _g.valid))
                return false;
        }
        return true;
    };
    SignUpLhPage = __decorate([
        core_1.Component({
            selector: 'app-sign-up-lh',
            templateUrl: './sign-up-lh.page.html',
            styleUrls: ['./sign-up-lh.page.scss'],
            animations: [basic_animation_1.fadeAnimation]
        })
    ], SignUpLhPage);
    return SignUpLhPage;
}());
exports.SignUpLhPage = SignUpLhPage;
