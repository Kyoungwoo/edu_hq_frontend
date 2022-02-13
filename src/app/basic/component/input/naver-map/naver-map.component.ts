import { newArray } from '@angular/compiler/src/util';
import { AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, HostBinding, Inject, InjectionToken, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FileService } from 'src/app/basic/service/core/file.service';
declare const naver;



export const NaverMapId = new InjectionToken<string>('NaverMapId');

export interface Pos {
  x:number,
  y:number
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

  map: any;
  // text:boolean = true;
  path = [];
  marker = [];
  LatLng = {
    gps_latitude:[],
    gps_longitude:[]
  };
  infoMarker = [];

  constructor(
    @Inject(NaverMapId) private naverMapId: string,
    private el: ElementRef,
    private file: FileService
  ) { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    this.file.script(`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${this.naverMapId}`).then(() => {
      this.init();
    });
  }

  async init() {
    const rect = await this.getMapSize();
    const size = new naver.maps.Size(rect.width, rect.height);
    const position = new naver.maps.LatLng(37.5795423, 126.8897844);
    this.map = new naver.maps.Map(this.id, {
      center: position,
      zoom: 10
    });
    for (let i = 0; i < this.value.length; i++) {
      if (this.value[i].workerInfo) {
        for (let j = 0; j < this.value[i].workerInfo.length; j++) {
          const infoposition = new naver.maps.LatLng(this.value[i].workerInfo[j].x, this.value[i].workerInfo[j].y);
          const infoMarker = new naver.maps.Marker({
            map: this.map,
            position: infoposition,
            // icon: icon_option
          });
          this.infoMarker.push(infoMarker);
        }
      }
    }
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

    const infoWindowElement = ([
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
    })


    naver.maps.Event.addListener(this.map, 'click', (e) => {
      const coord = e.coord;
      this.LatLng.gps_latitude.push(coord.x);
      this.LatLng.gps_longitude.push(coord.y);
      this.addMarker(coord);
    });

    // const length = this.value.length;
    // for (let i = 0; i < length; i++) {
    //   if (!this.value[i].worker && this.value[i].x) {
    //     const { x, y } = this.value[i];
    //     this.addMarker({ x, y });
    //   }
    // }
      this.changeMarker();
  };

  private addMarker(coord) {
    const marker = new naver.maps.Marker({
      map: this.map,
      position: coord,
      draggable: true
    });
    this.path.push(coord);
    // this.marker.push(coord);
    this.marker.push(marker);

    naver.maps.Event.addListener(marker, "dragend", (e) => {
      const point = e.coord;
      const markerIndex = this.marker.indexOf(marker);
      this.path.splice(markerIndex, 1, point);
      this.LatLng.gps_latitude.splice(markerIndex, 1, point.x);
      this.LatLng.gps_longitude.splice(markerIndex, 1, point.y);

      // this.LatLng.splice(markerIndex, 1, point);
    });
    naver.maps.Event.addListener(marker, "dblclick", (e) => {
      marker.setMap(null);
      const point = e.coord;
      
      const markerIndex = this.marker.indexOf(marker);
      this.marker?.forEach((item,i) => {
        this.path.forEach((data,i) => {
          if(item.position.x === data.x){
              this.marker.splice(markerIndex,1);
              this.path.splice(markerIndex,1);
              // this.LatLng.splice(markerIndex,1);
          }
        });
      });
    });
  }

  private changeMarker() {
    let x = 0;
    let y = 0;
    if(this.value.gps_latitude.length){
      for(let i = 0; i < this.value.gps_latitude.length; i++) {
        x = this.value.gps_latitude[i];
        y = this.value.gps_longitude[i];
        this.addMarker({x,y});        
      }
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
    })
  }

  //default setting
  @Output() change = new EventEmitter();

  @Input() set value(v:any) {
    if(!this.file.shallowEqual(v, this.LatLng)) {
      this.LatLng = v;
      // this.changeMarker();
      this._onChangeCallback(this.LatLng);
      this.change.emit(this.LatLng);
    }
  }
  get value() {
    return this.LatLng;
  }
  writeValue(v:any): void {
    if(!this.file.shallowEqual(v, this.LatLng)) {
      console.log("--------------writeValue = v",v);
      this.LatLng = v;
      // this.changeMarker();
      this._onChangeCallback(this.LatLng);
      this.change.emit(this.LatLng);
    }
  }

  private _onChangeCallback = (v) => { };
  private _onTouchedCallback = (v) => { };
  registerOnChange(fn: any): void { this._onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this._onTouchedCallback = fn; }
}

// 0: 37.5824332
// 1: 37.4124648
// 2: 37.5214634

// 0: 37.5824332
// 1: 37.4124648
// 2: 37.5138387

// 37.5824332,
// 37.4124648,
// 37.5138387