import { AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, HostBinding, Inject, InjectionToken, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileService } from 'src/app/basic/service/core/file.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { NaverMapId } from '../naver-map/naver-map.component';

declare const naver;

export class userData {
  area_bottom_id: number;
  area_middle_id: number;
  area_risk_id: number;
  area_state: string;
  area_top_id: number;
  gps_id: number;
  gps_log_id: number;
  user_id: number;
  user_latitude: number;
  user_longitude: number;
 }

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
export class NaverUserMapComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @HostBinding('id') get id() { return this._id };
  private _id = `naver-map-${Math.random().toString().replace('.', '')}${Math.random().toString().replace('.', '')}`;
  map: any;

  marker: any[] = [];

  isAfterInit:boolean = false;

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
    this.isAfterInit = true;

  }

  afterInit() {
    if(this.isAfterInit) {
      return new Promise(res => res(true));
    } else {
      return new Promise(res => {
        this.afteInitRes = res;
      });
    }
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

  private async userMarker(coord, item, i) {
    const marker = new naver.maps.Marker({
      map: this.map,
      position: coord,
      draggable: false,
      icon:{
        url:item.area_state === '일반' ? '../../../assets/img/main/gps.svg' :  '../../../assets/img/main/gps-danger.svg'
      }
    });
    this.marker.push(marker);
    let infoWindowElement;
    const res = await this.connect.run('/integrated/gps/detail',{gps_log_id:item.gps_log_id},{
      parse:['safe_job_name']
    });
    if(res.rsCode === 0) {
      // if(item.area_state === '일반') {
      //   infoWindowElement = (
      //     `<div style="padding:5px">
      //       <h5 style="text-align:center">${res.rsObj.user_name}</h5>
      //       <p>${res.rsObj.company_name}</p>
      //       <p>장소 : ${res.rsObj.area_name ? item.area_name:''}</p>
      //       <p>안전직무 : ${res.rsObj.safe_job_name}</p>
      //      </div>
      //     `
      //   );
      // } else {
      //   infoWindowElement = (
      //     `<div style="padding:5px">
      //       <h5 style="text-align:center">SOS 요청</h5>
      //       <p>${res.rsObj.company_name}</p>
      //       <p>${res.rsObj.user_name}</p>
      //       <p>장소 : ${res.rsObj.area_name ? item.area_name:''}</p>
      //       <p>위험지역명${res.rsObj.area_risk_name?.toString()}</p>
      //      </div>
      //     `
      //   );
      // }     
    }
    let infowindow = new naver.maps.InfoWindow({
      content: infoWindowElement,
      maxWidth: 120,
      maxHeight: 100,
    });
    if(item.area_state !== '일반') {
      infowindow.open(this.map, this.marker[i]);
      setTimeout(() => {
        infowindow.close();
      }, 5000);
    }
    naver.maps.Event.addListener(this.marker[i], 'click', (e) => {
      if (infowindow.getMap()) {
        infowindow.close();
      } else {
        infowindow.open(this.map, this.marker[i]);
      }
    });
  }

  private async parseData(v) {
    console.log("v - ",v)
    await this.afterInit();
    if (v) {
      const length = v.length;
      if(length) {
        v.forEach(async(item,i) => {
          const x = item.user_longitude;
          const y = item.user_latitude;
          this.userMarker({ x, y }, item, i);
        });
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
