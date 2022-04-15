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
exports.GeolocationService = void 0;
var core_1 = require("@angular/core");
var geolocation_plugin_1 = require("../basic/plugin/geolocation.plugin");
var GeolocationService = /** @class */ (function () {
    function GeolocationService(user) {
        this.user = user;
    }
    GeolocationService.prototype.startLocationUpdates = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permissionOptions, promptAlert, deniedAlert, state, updatesOptions, background, notification, connect;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        permissionOptions = {
                            promptAlert: null,
                            deniedAlert: null
                        };
                        promptAlert = {
                            header: '위치권한 필요',
                            message: '이 앱은 원활한 사용을 위해 위치권한을 필요로 합니다.\n위치 권한을 허용해주세요.',
                            cancelText: '거부',
                            okText: '확인'
                        };
                        deniedAlert = {
                            header: '위치권한 거부됨',
                            message: '이 앱은 원활한 사용을 위해 위치권한을 필요로 합니다.\n[권한 -> 위치]로 이동하여 권한을 허용해주세요.',
                            cancelText: '거부',
                            okText: '이동'
                        };
                        permissionOptions.promptAlert = promptAlert;
                        permissionOptions.deniedAlert = deniedAlert;
                        return [4 /*yield*/, geolocation_plugin_1.Geolocation.requestPermission(permissionOptions)];
                    case 1:
                        state = (_a.sent()).state;
                        if (state !== 'granted')
                            return [2 /*return*/];
                        updatesOptions = {
                            background: null,
                            notification: null,
                            connect: null
                        };
                        background = true;
                        notification = {
                            channelID: 'LOCATION_SERVICE_CHANNEL',
                            channelName: '근로자 안전 위치 관리',
                            header: '근로자 안전 관리 시스템',
                            message: '안전한 근무를 위해 위치관리 시스템을 작동 중 입니다.',
                            icon: 'drawable/default_dark'
                        };
                        connect = {
                            url: 'https://api.lh-skeeper.or.kr/work_project/gps/call',
                            authorization: "Bearer " + this.user.authToken.login_token,
                            body: {
                                latitude: '@latitude',
                                longitude: '@longitude'
                            }
                        };
                        updatesOptions.background = background;
                        updatesOptions.notification = notification;
                        updatesOptions.connect = connect;
                        console.log(connect);
                        geolocation_plugin_1.Geolocation.startLocationUpdates(updatesOptions, function (_a) {
                            var latitude = _a.latitude, longitude = _a.longitude;
                            console.log(latitude, longitude);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    GeolocationService.prototype.stopLocationUpdates = function () {
        geolocation_plugin_1.Geolocation.stopLocationUpdates();
    };
    GeolocationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], GeolocationService);
    return GeolocationService;
}());
exports.GeolocationService = GeolocationService;
