import { AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, HostBinding, Inject, InjectionToken, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileService } from 'src/app/basic/service/core/file.service';
import { userData } from 'src/app/page/monitor/monitor.page';
import { NaverMapId } from '../naver-map/naver-map.component';

declare const naver;

@Component({
  selector: 'app-naver-user-map',
  templateUrl: './naver-user-map.component.html',
  styleUrls: ['./naver-user-map.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NaverUserMapComponent),
    multi: true
  }]
})
export class NaverUserMapComponent implements OnInit,AfterViewInit,ControlValueAccessor {

  @HostBinding('id') get id() { return this._id };
  private _id = `naver-user-map-${Math.random().toString().replace('.', '')}${Math.random().toString().replace('.', '')}`;
  map: any;

  marker: any[] = [];

  afteInitRes;

  constructor(
    @Inject(NaverMapId) private naverMapId: string,
    private file: FileService,
    private el: ElementRef,
    private connect: ConnectService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.file.script(`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${this.naverMapId}`).then(() => {
      this.init();
    });
  }

  async init() {
    // 디폴트값을 어디로?? 서울~
    const rect = await this.getMapSize();
    const size = new naver.maps.Size(rect.width, rect.height);
    // 디폴트값을 어디로??
    const position = new naver.maps.LatLng(37.5795423, 126.8897844);

    this.map = new naver.maps.Map(this.id, {
      center: position,
      zoom: 10
    });
    this.map.setSize(size);

    this.afteInitRes();

  }

  afterInit() {
    return new Promise(res => {
      this.afteInitRes = res;
    });
  }

  private getMapSize(): Promise<DOMRect> {
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
  private userMarker(coord,item) {
    console.log("item : ",item)
    const marker = new naver.maps.Marker({
      map: this.map,
      position: coord,
      draggable: true
    });
    this.marker.push(marker);

    console.log("marker.position : ", marker.position);

    this.marker.push(marker);
    console.log("this.infoMarker", this.marker);
    // this._value.gps_latitude.push(coord.x);
    // this._value.gps_longitude.push(coord.y);
    let infoWindowElement = (
      `<div class="iw_inner">
        <h5>${item}</h5>
        <p>서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청
       </div>
      `
      );

    // '<div >',
    // '   <a href="http://www.naver.com/" target="_blank" class="pin_a">',
    // '       <span class="pin_txt"><em>캐나다</em> <span class="spr spr_arrow"></span></span>',
    // '       <span class="spr spr_arr"></span>',
    // '   </a>',
    // '   <div class="pin"><span class="pin_blur"></span></div>',
    // '</div>'].join(''));

    let infowindow = new naver.maps.InfoWindow({
      content: infoWindowElement,
      maxWidth: 120,
      maxHeight:100
      // pixelOffset: new naver.window.Point(20, -20)
    });
    let close:boolean = false;
    this.marker.forEach((item, i) => {
      naver.maps.Event.addListener(this.marker[i], 'click', (e) => {
        close = !close;
        console.log("infowindow.getMap()",close);
        if (close) {
          infowindow.close();
        } else {
          infowindow.open(this.map, this.marker[i]);
          // this.promise.timeout(infowindow.close(),3000);
        }
      });
    });
  }

  private async parseData(v) {
    await this.afterInit();
    if (v) {
        const length = v.length;
        console.log(length)
        for (let i = 0; i < length; i++) {
          console.log("v[i].gps_log_id",v[i].gps_log_id);
          const x = v[i].user_longitude;
          const y = v[i].user_latitude;
          const res = await this.connect.run('/integrated/gps/detail',v[i].gps_log_id);
          console.log("res",res);
          this.userMarker({ x, y },res.rsObj);
        }
    };
  }

  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Output() change = new EventEmitter();

  private _value = new userData();
  @Input() set value(v: userData) {
    if (!this.file.shallowEqual(v, this._value)) {
      this._value = v;
      this.parseData(v);
      this._onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v: userData): void {
    if (!this.file.shallowEqual(v, this._value)) {
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
