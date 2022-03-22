import { AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, HostBinding, Inject, InjectionToken, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FileService } from 'src/app/basic/service/core/file.service';
declare const naver;



export const NaverMapId = new InjectionToken<string>('NaverMapId');

export class GpsCoordinateData {
  gps_latitude:number[] = []; // x, 위도
  gps_longitude:number[] = []; // y, 경도
}
export class LatLng {
  x:number = 0;
  y:number = 0;
}
@Component({
  selector: 'app-naver-map',
  templateUrl: './naver-map.component.html',
  styleUrls: ['./naver-map.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NaverMapComponent),
    multi: true
  }]
})
export class NaverMapComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @HostBinding('id') get id() { return this._id };
  private _id = `naver-map-${Math.random().toString().replace('.', '')}${Math.random().toString().replace('.', '')}`;
  map:any;

  path:LatLng[] = [];
  marker:any[] = [];

  afteInitRes;
  
  constructor(
    @Inject(NaverMapId) private naverMapId: string,
    private el: ElementRef,
    private file: FileService
  ) { }

  ngOnInit() {}
  ngAfterViewInit() {
    this.file.script(`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${this.naverMapId}`).then(() => {
      this.init();
    });
  }

  async init() {
    const rect = await this.getMapSize();
    const size = new naver.maps.Size(rect.width, rect.height);
    // 디폴트값을 어디로??
    const position = new naver.maps.LatLng(37.5795423, 126.8897844);

    this.map = new naver.maps.Map(this.id, {
      center: position,
      zoom: 10
    });
    this.map.setSize(size);

    const polygon = new naver.maps.Polygon({
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
  
    naver.maps.Event.addListener(this.map, 'click', (e) => {
      this.addMarker(e.coord);
    });
    this.afteInitRes();
  }
  afterInit() {
    return new Promise(res => {
      this.afteInitRes = res;
    });
  }

  private addMarker(coord:LatLng, parse = false) {
    // 좌표 생성
    const marker = new naver.maps.Marker({
      map: this.map,
      position: coord,
      draggable: true
    });
    this.marker.push(marker);
    this.path.push(coord);
    if(!parse) {
      // _value 셋팅. parse를 하는 상황에서는 value가 변했기 때문에 parse를 함
      this._value.gps_latitude.push(coord.x);
      this._value.gps_longitude.push(coord.y);
    }

    // 좌표 움직임 셋팅
    naver.maps.Event.addListener(marker, "dragend", (e) => {
      const point:LatLng = e.coord;
      const index = this.marker.indexOf(marker);

      this.marker.splice(index, 1, marker);
      this.path.splice(index, 1, point);

      this._value.gps_latitude.splice(index, 1, point.x);
      this._value.gps_longitude.splice(index, 1, point.y);
    });

    // 좌표 삭제 셋팅
    naver.maps.Event.addListener(marker, "dblclick", (e) => {
      const index = this.marker.indexOf(marker);

      this.marker.splice(index, 1);
      this.path.splice(index, 1);

      this._value.gps_latitude.splice(index, 1);
      this._value.gps_longitude.splice(index, 1);

      marker.setMap(null);
    });
  }

  private resetMarker() {
    const length = this.marker.length;
    for(let i = 0; i < length; i++) {
      const marker = this.marker.pop();
      marker.setMap(null);
    }
    this.path.splice(0, this.path.length);
    this._value.gps_latitude.splice(0, this.path.length);
    this._value.gps_longitude.splice(0, this.path.length);
  }

  private getMapSize():Promise<DOMRect> {
    return new Promise(res => {
      const max = 20;
      let step = 0;
      const interval = setInterval(() => {
        const rect = this.el.nativeElement.getBoundingClientRect();
        if (rect.width || step > max) {
          clearInterval(interval);
          res(rect);
        }
        step++;
      }, 20);
    });
  }

  private async parseData(v) {
    await this.afterInit();
    // this.resetMarker();
    if(v) {
      const length =  v.gps_latitude.length;
      for(let i = 0; i < length; i++) {
        const x = v.gps_latitude[i];
        const y = v.gps_longitude[i];
        this.addMarker({ x, y }, true);
      }
    };
  }

  //default setting
  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
  @Output() change = new EventEmitter();

  private _value = new GpsCoordinateData();
  @Input() set value(v:GpsCoordinateData) {
    if(!this.file.shallowEqual(v, this._value)) {
      this._value = v;
      this.parseData(v);
      this._onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:GpsCoordinateData): void {
    if(!this.file.shallowEqual(v, this._value)) {
      this._value = v;
      this.parseData(v);
      this._onChangeCallback(v);
      this.change.emit(v);
    }
  }

  private _onChangeCallback = (v) => { };
  private _onTouchedCallback = (v) => { };
  registerOnChange(fn: any): void { this._onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this._onTouchedCallback = fn; }
}


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