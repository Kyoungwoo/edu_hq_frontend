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
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var push_notifications_1 = require("@capacitor/push-notifications");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.selectedLibrary = 'home';
        this.addListeners = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, push_notifications_1.PushNotifications.addListener('registration', function (token) {
                            console.info('Registration token: ', token.value);
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, push_notifications_1.PushNotifications.addListener('registrationError', function (err) {
                                console.error('Registration error: ', err.error);
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, push_notifications_1.PushNotifications.addListener('pushNotificationReceived', function (notification) {
                                console.log('Push notification received: ', notification);
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, push_notifications_1.PushNotifications.addListener('pushNotificationActionPerformed', function (notification) {
                                console.log('Push notification action performed', notification.actionId, notification.inputValue);
                            })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.registerNotifications = function () { return __awaiter(_this, void 0, void 0, function () {
            var permStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, push_notifications_1.PushNotifications.checkPermissions()];
                    case 1:
                        permStatus = _a.sent();
                        if (!(permStatus.receive === 'prompt')) return [3 /*break*/, 3];
                        return [4 /*yield*/, push_notifications_1.PushNotifications.requestPermissions()];
                    case 2:
                        permStatus = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (permStatus.receive !== 'granted') {
                            throw new Error('User denied permissions!');
                        }
                        return [4 /*yield*/, push_notifications_1.PushNotifications.register()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.getDeliveredNotifications = function () { return __awaiter(_this, void 0, void 0, function () {
            var notificationList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, push_notifications_1.PushNotifications.getDeliveredNotifications()];
                    case 1:
                        notificationList = _a.sent();
                        console.log('delivered notifications', notificationList);
                        return [2 /*return*/];
                }
            });
        }); };
    }
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addListeners()];
                    case 1:
                        _a.sent();
                        console.log('addListeners end');
                        return [4 /*yield*/, this.registerNotifications()];
                    case 2:
                        _a.sent();
                        console.log('registerNotifications end');
                        return [4 /*yield*/, this.getDeliveredNotifications()];
                    case 3:
                        _a.sent();
                        console.log('getDeliveredNotifications end');
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;