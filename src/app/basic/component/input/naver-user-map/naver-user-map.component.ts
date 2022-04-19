import { AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, HostBinding, Inject, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileService } from 'src/app/basic/service/core/file.service';
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

  id = `naver-map-${Math.random().toString().replace('.', '')}${Math.random().toString().replace('.', '')}`;
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
    this.file.script(`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${this.naverMapId}&submodules=geocoder`).then(() => {
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

    let infoEl = '';
    const res = await this.connect.run('/integrated/gps/detail', {
      gps_log_id: item.gps_log_id
    },{
      parse:[ 'safe_job_name' ]
    });
    if(res.rsCode === 0) {

      /** 좌표로 주소 가져오기 */
      const addressArr = await this.getAddress(coord);

      const data = res.rsObj;
        infoEl = `
        <div style="padding: 8px;">
          <h5 style="margin-top: 0; text-align: center;">${data.user_name}</h5>
          
          <h6 style="margin-top: 0; margin-bottom: 0;">회사</h6>
          <p style="margin-top: 0; margin-bottom: 0;">${data.company_name}</p>

          ${
            data.area_name ? `
              <h6 style="margin-top: 8px; margin-bottom: 0;">장소</h6>
              <p style="margin-top: 0; margin-bottom: 0;">${data.area_name || '-'}</p>
            ` : ''
          }

          ${
            data.area_risk_name ? `
              <h6 style="margin-top: 8px; margin-bottom: 0;">위험지역 명</h6>
              <p style="margin-top: 0; margin-bottom: 0;">${data.area_risk_name}</p>
            ` : ''
          }

          <h6 style="margin-top: 8px; margin-bottom: 0;">안전직무</h6>
          <p style="margin-top: 0; margin-bottom: 0;">${data.safe_job_name?.join('\n') || '없음'}</p>

          <h6 style="margin-top: 8px; margin-bottom: 0;">주소</h6>
          <p style="margin-top: 0; margin-bottom: 0; font-size: 11px;">${addressArr.join('\n')}</p>
        </div>
        `;
    }

    let infowindow = new naver.maps.InfoWindow({
      content: infoEl,
      maxWidth: 300
    });
    naver.maps.Event.addListener(this.marker[i], 'click', (e) => {
      if (infowindow.getMap()) {
        infowindow.close();
      } else {
        infowindow.open(this.map, this.marker[i]);
      }
    });
  }

  private async parseData(v) {
    await this.afterInit();
    this.resetMarker();
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

  private resetMarker() {
    const length = this.marker.length;
    for (let i = 0; i < length; i++) {
      const marker = this.marker.pop();
      marker.setMap(null);
    }
  }

  getAddress(coord):Promise<any[]> {
    return new Promise(res => {
      console.log(naver.maps);
      naver.maps.Service.reverseGeocode({
        coords: coord,
        orders: [
          naver.maps.Service.OrderType.ADDR,
          naver.maps.Service.OrderType.ROAD_ADDR
        ].join(',')
      }, function(status, response) {
        const address = response?.v2?.address;
        const addressArr = [];
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
    })
  }

  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Output() change = new EventEmitter();

  private _value = [];
  @Input() set value(v: userData[]) {
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
  writeValue(v: userData[]): void {
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
