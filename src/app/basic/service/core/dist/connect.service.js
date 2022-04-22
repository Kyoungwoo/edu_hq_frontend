"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.ConnectService = exports.Validator = exports.ContentType = exports.ConnectResult = exports.ConnectStrategy = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var common_1 = require("@angular/common");
var environment_1 = require("src/environments/environment");
exports.ConnectStrategy = new core_1.InjectionToken('ConnectStrategy');
var ConnectResult = /** @class */ (function () {
    function ConnectResult() {
    }
    return ConnectResult;
}());
exports.ConnectResult = ConnectResult;
var ContentType;
(function (ContentType) {
    ContentType["ApplicationJson"] = "PROMPT";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var Validator = /** @class */ (function () {
    function Validator(form) {
        this.validator = {};
        for (var key in form) {
            this.validator[key] = { valid: null };
        }
    }
    return Validator;
}());
exports.Validator = Validator;
var ConnectService = /** @class */ (function () {
    function ConnectService(platformId, connectStrategy, http, file, user, storage, loading, router, alertController) {
        this.platformId = platformId;
        this.connectStrategy = connectStrategy;
        this.http = http;
        this.file = file;
        this.user = user;
        this.storage = storage;
        this.loading = loading;
        this.router = router;
        this.alertController = alertController;
    }
    ConnectService.prototype.run = function (endPoint, data, options) {
        return __awaiter(this, void 0, Promise, function () {
            var url, headers, body, result, loading, http, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = data || {};
                        url = (environment_1.environment.production ? this.connectStrategy.url : this.connectStrategy.devUrl) + endPoint;
                        if (!environment_1.environment.production && !this.connectStrategy.exceptLogUrls.includes(url)) {
                            console.log(data, url);
                        }
                        headers = {};
                        if ((options === null || options === void 0 ? void 0 : options.contentType) === ContentType.ApplicationJson) {
                            body = data;
                        }
                        else {
                            if (this.user.authToken)
                                headers['Authorization'] = "Bearer " + this.user.authToken.login_token;
                            body = this.jsonToForm(data);
                        }
                        if (!!common_1.isPlatformServer(this.platformId)) return [3 /*break*/, 3];
                        if (!((options === null || options === void 0 ? void 0 : options.loading) != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loading.present({
                            // message: options.loading
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.http.post(url, body, { headers: headers })
                                .pipe(operators_1.timeout(60000))
                                .toPromise()];
                    case 4:
                        http = _a.sent();
                        result = http;
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        result = {
                            errorStatus: error_1.status,
                            rsCode: 500,
                            rsObj: error_1.error,
                            rsMsg: '서버 연결에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
                            rqMethod: '',
                            rsMap: null
                        };
                        return [3 /*break*/, 6];
                    case 6:
                        if (options === null || options === void 0 ? void 0 : options.parse) {
                            if (result.rsObj) {
                                options === null || options === void 0 ? void 0 : options.parse.forEach(function (key) {
                                    try {
                                        result.rsObj[key] = JSON.parse(result.rsObj[key]);
                                    }
                                    catch (e) { }
                                });
                            }
                            if (result.rsMap) {
                                options === null || options === void 0 ? void 0 : options.parse.forEach(function (key) {
                                    result.rsMap.forEach(function (rsObj) {
                                        try {
                                            rsObj[key] = JSON.parse(rsObj[key]);
                                        }
                                        catch (e) { }
                                    });
                                });
                            }
                        }
                        loading === null || loading === void 0 ? void 0 : loading.dismiss();
                        if (!environment_1.environment.production)
                            console.log(result, url);
                        if (result.rsCode === 1002) {
                            //this.
                            return [2 /*return*/, result];
                        }
                        else {
                            return [2 /*return*/, result];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ConnectService.prototype.error = function (title, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        res.code ? null : res.code = '';
                        _a = res.code;
                        switch (_a) {
                            case 1002: return [3 /*break*/, 1];
                            case 2002: return [3 /*break*/, 1];
                        }
                        return [3 /*break*/, 2];
                    case 1:
                        //ip교체로 인한 세션 마감
                        this.storage.user.clear();
                        // 퍼블리싱 끝나면 밑에 첫째줄 풀어줘야함
                        this.router.navigate(['/admin-web/login'], { replaceUrl: true });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.alertController.create({
                            // mode: 'ios',
                            header: "" + title + (res.code && !environment_1.environment.production ? '[' + res.code + ']' : ''),
                            message: res.message,
                            buttons: [{
                                    text: '확인'
                                }]
                        })];
                    case 3:
                        error = _b.sent();
                        error.present();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ConnectService.prototype.jsonToForm = function (json) {
        var _this = this;
        var form = new FormData();
        var _loop_1 = function (key) {
            if (typeof json[key] !== 'object')
                form.append(key, json[key]);
            else if (json[key] === null || json[key] === undefined) { } //form.append(key, json[key]);
            else if (json[key].constructor.name !== 'Array') {
                if (json[key].constructor.name == 'File')
                    form.append(key, json[key]);
                else if (json[key].constructor.name == 'Blob') {
                    var fileName = "attaches_" + new Date().getTime();
                    form.append(key, json[key], fileName + this_1.file.getMimeType(json[key]));
                }
                else
                    form.append(key, JSON.stringify(json[key]));
            }
            else { // Array
                if (typeof json[key][0] === 'object') {
                    if (json[key][0].constructor.name == 'File')
                        json[key].forEach(function (value) { return form.append(key, value); });
                    else if (json[key][0].constructor.name == 'Blob') {
                        json[key].forEach(function (value) {
                            var fileName = "attaches_" + new Date().getTime();
                            form.append(key, value, fileName + _this.file.getMimeType(value));
                        });
                    }
                    else
                        form.append(key, JSON.stringify(json[key]));
                }
                else {
                    form.append(key, JSON.stringify(json[key]));
                }
            }
        };
        var this_1 = this;
        for (var key in json) {
            _loop_1(key);
        }
        return form;
    };
    ConnectService.prototype.changeTestImgUrl = function (imgUrl) {
        return new Promise(function (res) {
            var img = document.createElement('img');
            img.onload = function () {
                img = null;
                res(null);
            };
            img.onerror = function () {
                img = null;
                var reg = /https:\/\/www\.kunyoungcms\.com/;
                if (reg.test(imgUrl))
                    res(imgUrl.replace(reg, 'http://3.35.5.135'));
                else
                    res(null);
            };
            img.src = imgUrl;
        });
    };
    ConnectService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(0, core_1.Inject(core_1.PLATFORM_ID)),
        __param(1, core_1.Inject(exports.ConnectStrategy))
    ], ConnectService);
    return ConnectService;
}());
exports.ConnectService = ConnectService;
