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
exports.NaverUserMapComponent = exports.userData = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var naver_map_component_1 = require("../naver-map/naver-map.component");
var userData = /** @class */ (function () {
    function userData() {
    }
    return userData;
}());
exports.userData = userData;
var NaverUserMapComponent = /** @class */ (function () {
    function NaverUserMapComponent(naverMapId, file, el, connect) {
        this.naverMapId = naverMapId;
        this.file = file;
        this.el = el;
        this.connect = connect;
        this.id = "naver-map-" + Math.random().toString().replace('.', '') + Math.random().toString().replace('.', '');
        this.marker = [];
        this.isAfterInit = false;
        this.readonly = false;
        this.disabled = false;
        this.required = false;
        this.change = new core_1.EventEmitter();
        this._value = [];
        this._onChangeCallback = function (v) { };
        this._onTouchedCallback = function (v) { };
    }
    NaverUserMapComponent_1 = NaverUserMapComponent;
    NaverUserMapComponent.prototype.ngOnInit = function () {
    };
    NaverUserMapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.file.script("https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=" + this.naverMapId + "&submodules=geocoder").then(function () {
            _this.init();
        });
    };
    NaverUserMapComponent.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rect, size, position;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getMapSize()];
                    case 1:
                        rect = _a.sent();
                        size = new naver.maps.Size(rect.width, rect.height);
                        position = new naver.maps.LatLng(37.5795423, 126.8897844);
                        this.map = new naver.maps.Map(this.id, {
                            center: position,
                            zoom: 10
                        });
                        this.map.setSize(size);
                        this.afteInitRes();
                        this.isAfterInit = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    NaverUserMapComponent.prototype.afterInit = function () {
        var _this = this;
        if (this.isAfterInit) {
            return new Promise(function (res) { return res(true); });
        }
        else {
            return new Promise(function (res) {
                _this.afteInitRes = res;
            });
        }
    };
    NaverUserMapComponent.prototype.getMapSize = function () {
        var _this = this;
        return new Promise(function (res) {
            var max = 20;
            var step = 0;
            var interval = setInterval(function () {
                var rect = _this.el.nativeElement.getBoundingClientRect();
                if (rect.width || step > max) {
                    clearInterval(interval);
                    res(rect);
                }
                step++;
            }, 20);
        });
    };
    NaverUserMapComponent.prototype.userMarker = function (coord, item, i) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var marker, infoEl, res, addressArr, data, infowindow;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        marker = new naver.maps.Marker({
                            map: this.map,
                            position: coord,
                            draggable: false,
                            icon: {
                                url: item.area_state === '일반' ? '../../../assets/img/main/gps.svg' : '../../../assets/img/main/gps-danger.svg'
                            }
                        });
                        this.marker.push(marker);
                        infoEl = '';
                        return [4 /*yield*/, this.connect.run('/integrated/gps/detail', {
                                gps_log_id: item.gps_log_id
                            }, {
                                parse: ['safe_job_name']
                            })];
                    case 1:
                        res = _b.sent();
                        if (!(res.rsCode === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getAddress(coord)];
                    case 2:
                        addressArr = _b.sent();
                        data = res.rsObj;
                        infoEl = "\n        <div style=\"padding: 8px;\">\n          <h5 style=\"margin-top: 0; text-align: center;\">" + data.user_name + "</h5>\n          \n          <h6 style=\"margin-top: 0; margin-bottom: 0;\">\uD68C\uC0AC</h6>\n          <p style=\"margin-top: 0; margin-bottom: 0;\">" + data.company_name + "</p>\n\n          " + (data.area_name ? "\n              <h6 style=\"margin-top: 8px; margin-bottom: 0;\">\uC7A5\uC18C</h6>\n              <p style=\"margin-top: 0; margin-bottom: 0;\">" + (data.area_name || '-') + "</p>\n            " : '') + "\n\n          " + (data.area_risk_name ? "\n              <h6 style=\"margin-top: 8px; margin-bottom: 0;\">\uC704\uD5D8\uC9C0\uC5ED \uBA85</h6>\n              <p style=\"margin-top: 0; margin-bottom: 0;\">" + data.area_risk_name + "</p>\n            " : '') + "\n\n          <h6 style=\"margin-top: 8px; margin-bottom: 0;\">\uC548\uC804\uC9C1\uBB34</h6>\n          <p style=\"margin-top: 0; margin-bottom: 0;\">" + (((_a = data.safe_job_name) === null || _a === void 0 ? void 0 : _a.join('\n')) || '없음') + "</p>\n\n          <h6 style=\"margin-top: 8px; margin-bottom: 0;\">\uC8FC\uC18C</h6>\n          <p style=\"margin-top: 0; margin-bottom: 0; font-size: 11px;\">" + addressArr.join('\n') + "</p>\n        </div>\n        ";
                        _b.label = 3;
                    case 3:
                        infowindow = new naver.maps.InfoWindow({
                            content: infoEl,
                            maxWidth: 300
                        });
                        naver.maps.Event.addListener(this.marker[i], 'click', function (e) {
                            if (infowindow.getMap()) {
                                infowindow.close();
                            }
                            else {
                                infowindow.open(_this.map, _this.marker[i]);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    NaverUserMapComponent.prototype.parseData = function (v) {
        return __awaiter(this, void 0, void 0, function () {
            var length;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afterInit()];
                    case 1:
                        _a.sent();
                        this.resetMarker();
                        if (v) {
                            length = v.length;
                            if (length) {
                                v.forEach(function (item, i) { return __awaiter(_this, void 0, void 0, function () {
                                    var x, y;
                                    return __generator(this, function (_a) {
                                        x = item.user_longitude;
                                        y = item.user_latitude;
                                        this.userMarker({ x: x, y: y }, item, i);
                                        return [2 /*return*/];
                                    });
                                }); });
                            }
                        }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    NaverUserMapComponent.prototype.resetMarker = function () {
        var length = this.marker.length;
        for (var i = 0; i < length; i++) {
            var marker = this.marker.pop();
            marker.setMap(null);
        }
    };
    NaverUserMapComponent.prototype.getAddress = function (coord) {
        return new Promise(function (res) {
            console.log(naver.maps);
            naver.maps.Service.reverseGeocode({
                coords: coord,
                orders: [
                    naver.maps.Service.OrderType.ADDR,
                    naver.maps.Service.OrderType.ROAD_ADDR
                ].join(',')
            }, function (status, response) {
                var _a;
                var address = (_a = response === null || response === void 0 ? void 0 : response.v2) === null || _a === void 0 ? void 0 : _a.address;
                var addressArr = [];
                if (status === naver.maps.Service.Status.ERROR) {
                    console.warn('check coords');
                }
                else {
                    if (address.jibunAddress !== '') {
                        addressArr.push('[지번 주소] ' + address.jibunAddress);
                    }
                    if (address.roadAddress !== '') {
                        addressArr.push('[도로명 주소] ' + address.roadAddress);
                    }
                }
                res(addressArr);
            });
        });
    };
    Object.defineProperty(NaverUserMapComponent.prototype, "classReadonly", {
        get: function () { return this.readonly; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NaverUserMapComponent.prototype, "classDisabled", {
        get: function () { return this.disabled; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NaverUserMapComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (!this.file.shallowEqual(v, this._value)) {
                this._value = v;
                this.parseData(v);
                this._onChangeCallback(v);
                this.change.emit(v);
            }
        },
        enumerable: false,
        configurable: true
    });
    NaverUserMapComponent.prototype.writeValue = function (v) {
        if (!this.file.shallowEqual(v, this._value)) {
            this._value = v;
            this.parseData(v);
            this._onChangeCallback(v);
            this.change.emit(v);
        }
    };
    NaverUserMapComponent.prototype.registerOnChange = function (fn) { this._onChangeCallback = fn; };
    NaverUserMapComponent.prototype.registerOnTouched = function (fn) { this._onTouchedCallback = fn; };
    var NaverUserMapComponent_1;
    __decorate([
        core_1.HostBinding('class.readonly')
    ], NaverUserMapComponent.prototype, "classReadonly");
    __decorate([
        core_1.HostBinding('class.disabled')
    ], NaverUserMapComponent.prototype, "classDisabled");
    __decorate([
        core_1.Input()
    ], NaverUserMapComponent.prototype, "readonly");
    __decorate([
        core_1.Input()
    ], NaverUserMapComponent.prototype, "disabled");
    __decorate([
        core_1.Input()
    ], NaverUserMapComponent.prototype, "required");
    __decorate([
        core_1.Output()
    ], NaverUserMapComponent.prototype, "change");
    __decorate([
        core_1.Input()
    ], NaverUserMapComponent.prototype, "value");
    NaverUserMapComponent = NaverUserMapComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-naver-user-map',
            templateUrl: './naver-user-map.component.html',
            styleUrls: ['./naver-user-map.component.scss'],
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return NaverUserMapComponent_1; }),
                    multi: true
                }]
        }),
        __param(0, core_1.Inject(naver_map_component_1.NaverMapId))
    ], NaverUserMapComponent);
    return NaverUserMapComponent;
}());
exports.NaverUserMapComponent = NaverUserMapComponent;
