import { AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, HostBinding, Inject, InjectionToken, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
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
    private el: ElementRef
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

  private addMarker(coord) {
    if (this.disabled) return;
    // 좌표 생성
    const marker = new naver.maps.Marker({
      map: this.map,
      position: coord,
      draggable: true
    });
    this.marker.push(marker);
  }

  private async parseData(v) {
    await this.afterInit();
    if (v) {
    //     const length = v.length;
    //     for (let i = 0; i < length; i++) {
    //       const x = v[i].gps_latitude;
    //       const y = v[i].gps_longitude;
    //       this.addMarker({ x, y });
    //     }
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
