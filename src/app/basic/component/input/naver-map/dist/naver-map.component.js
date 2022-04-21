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
exports.NaverMapComponent = exports.LatLng = exports.GpsCoordinateData = exports.NaverMapId = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
exports.NaverMapId = new core_1.InjectionToken('NaverMapId');
var GpsCoordinateData = /** @class */ (function () {
    function GpsCoordinateData() {
        this.gps_latitude = []; // x, 위도
        this.gps_longitude = []; // y, 경도
    }
    return GpsCoordinateData;
}());
exports.GpsCoordinateData = GpsCoordinateData;
var LatLng = /** @class */ (function () {
    function LatLng() {
        this.x = 0;
        this.y = 0;
    }
    return LatLng;
}());
exports.LatLng = LatLng;
var NaverMapComponent = /** @class */ (function () {
    function NaverMapComponent(naverMapId, el, file, promise) {
        this.naverMapId = naverMapId;
        this.el = el;
        this.file = file;
        this.promise = promise;
        this._id = "naver-map-" + Math.random().toString().replace('.', '') + Math.random().toString().replace('.', '');
        this.path = [];
        this.marker = [];
        this.user_marker = [];
        this.infoMarker = [];
        this.isAfterInit = false;
        this.readonly = false;
        this.disabled = false;
        this.required = false;
        this.change = new core_1.EventEmitter();
        this._value = new GpsCoordinateData();
        this._onChangeCallback = function (v) { };
        this._onTouchedCallback = function (v) { };
    }
    NaverMapComponent_1 = NaverMapComponent;
    Object.defineProperty(NaverMapComponent.prototype, "id", {
        get: function () { return this._id; },
        enumerable: false,
        configurable: true
    });
    ;
    NaverMapComponent.prototype.ngOnInit = function () { };
    NaverMapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.file.script("https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=" + this.naverMapId).then(function () {
            _this.init();
        });
    };
    NaverMapComponent.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rect, size, position, polygon;
            var _this = this;
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
                        polygon = new naver.maps.Polygon({
                            map: this.map,
                            paths: [[]],
                            fillColor: '#ff0000',
                            fillOpacity: 0.3,
                            strokeColor: '#ff0000',
                            strokeOpacity: 0.6,
                            strokeWeight: 3,
                            clickable: true
                        });
                        this.path = polygon.getPaths().getAt(0);
                        naver.maps.Event.addListener(this.map, 'click', function (e) {
                            _this.addMarker(e.coord);
                        });
                        this.afteInitRes();
                        this.isAfterInit = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    NaverMapComponent.prototype.afterInit = function () {
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
    NaverMapComponent.prototype.addMarker = function (coord) {
        var _this = this;
        console.log(coord, this.disabled);
        if (this.disabled)
            return;
        // 좌표 생성
        var marker = new naver.maps.Marker({
            map: this.map,
            position: coord,
            draggable: true
        });
        this.marker.push(marker);
        this.path.push(coord);
        this._value.gps_latitude.push(coord.x);
        this._value.gps_longitude.push(coord.y);
        // 좌표 움직임 셋팅
        naver.maps.Event.addListener(marker, "dragend", function (e) {
            var point = e.coord;
            var index = _this.marker.indexOf(marker);
            _this.marker.splice(index, 1, marker);
            _this.path.splice(index, 1, point);
            _this._value.gps_latitude.splice(index, 1, point.x);
            _this._value.gps_longitude.splice(index, 1, point.y);
        });
        // 좌표 삭제 셋팅
        naver.maps.Event.addListener(marker, "dblclick", function (e) {
            var index = _this.marker.indexOf(marker);
            _this.marker.splice(index, 1);
            _this.path.splice(index, 1);
            _this._value.gps_latitude.splice(index, 1);
            _this._value.gps_longitude.splice(index, 1);
            marker.setMap(null);
        });
    };
    NaverMapComponent.prototype.resetMarker = function () {
        var length = this.marker.length;
        for (var i = 0; i < length; i++) {
            var marker = this.marker.pop();
            marker.setMap(null);
            this.path.splice(0, 1);
            this._value.gps_latitude.splice(0, 1);
            this._value.gps_longitude.splice(0, 1);
        }
    };
    NaverMapComponent.prototype.getMapSize = function () {
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
    NaverMapComponent.prototype.parseData = function (v) {
        return __awaiter(this, void 0, void 0, function () {
            var insertV, length, i, x, y;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afterInit()];
                    case 1:
                        _a.sent();
                        insertV = this.file.clone(v);
                        this.resetMarker();
                        if (insertV) {
                            length = insertV.gps_latitude.length;
                            for (i = 0; i < length; i++) {
                                x = insertV.gps_latitude[i];
                                y = insertV.gps_longitude[i];
                                this.addMarker({ x: x, y: y });
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(NaverMapComponent.prototype, "classReadonly", {
        //default setting
        get: function () { return this.readonly; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NaverMapComponent.prototype, "classDisabled", {
        get: function () { return this.disabled; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NaverMapComponent.prototype, "value", {
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
    NaverMapComponent.prototype.writeValue = function (v) {
        console.log(this._value);
        console.log(v);
        if (!this.file.shallowEqual(v, this._value)) {
            this._value = v;
            this.parseData(v);
            this._onChangeCallback(v);
            this.change.emit(v);
        }
    };
    NaverMapComponent.prototype.registerOnChange = function (fn) { this._onChangeCallback = fn; };
    NaverMapComponent.prototype.registerOnTouched = function (fn) { this._onTouchedCallback = fn; };
    var NaverMapComponent_1;
    __decorate([
        core_1.HostBinding('id')
    ], NaverMapComponent.prototype, "id");
    __decorate([
        core_1.HostBinding('class.readonly')
    ], NaverMapComponent.prototype, "classReadonly");
    __decorate([
        core_1.HostBinding('class.disabled')
    ], NaverMapComponent.prototype, "classDisabled");
    __decorate([
        core_1.Input()
    ], NaverMapComponent.prototype, "readonly");
    __decorate([
        core_1.Input()
    ], NaverMapComponent.prototype, "disabled");
    __decorate([
        core_1.Input()
    ], NaverMapComponent.prototype, "required");
    __decorate([
        core_1.Output()
    ], NaverMapComponent.prototype, "change");
    __decorate([
        core_1.Input()
    ], NaverMapComponent.prototype, "value");
    NaverMapComponent = NaverMapComponent_1 = __decorate([
        core_1.Component({
            selector: 'app-naver-map',
            templateUrl: './naver-map.component.html',
            styleUrls: ['./naver-map.component.scss'],
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return NaverMapComponent_1; }),
                    multi: true
                }]
        }),
        __param(0, core_1.Inject(exports.NaverMapId))
    ], NaverMapComponent);
    return NaverMapComponent;
}());
exports.NaverMapComponent = NaverMapComponent;
// 지우지 마시오. 나중에 꼭 필요함. 지운사람 API 찾아서 정리하기.
/* const infoWindowElement = ([
  '<div >',
  '   <a href="http://www.naver.com/" target="_blank" class="pin_a">',
  '       <span class="pin_txt"><em>캐나다</em> <span class="spr spr_arrow"></span></span>',
  '       <span class="spr spr_arr"></span>',
  '   </a>',
  '   <div class="pin"><span class="pin_blur"></span></div>',
  '</div>'].join(''));

let infowindow = new naver.maps.InfoWindow({
  content: infoWindowElement,
  // pixelOffset: new naver.window.Point(20, -20)
});
this.infoMarker.forEach((item, i) => {
  naver.maps.Event.addListener(this.infoMarker[i], 'click', (e) => {
    console.log(this.infoMarker);
    if (infowindow.getMap()) {
      infowindow.close();
    } else {
      infowindow.open(this.map, this.infoMarker[i]);
    }
  });
}) */ 
