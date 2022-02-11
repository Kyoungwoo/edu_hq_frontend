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
  LatLng = [];
  infoMarker = [];

  constructor(
    @Inject(NaverMapId) private naverMapId: string,
    private el: ElementRef,
    private file: FileService
  ) { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    console.log("this.value",this.LatLng);
    console.log("this.marker",this.marker);
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
      console.log(coord);
      this.LatLng.push(coord);
      this.addMarker(coord);
    });

    // const length = this.value.length;
    // for (let i = 0; i < length; i++) {
    //   if (!this.value[i].worker && this.value[i].x) {
    //     const { x, y } = this.value[i];
    //     this.addMarker({ x, y });
    //   }
    // }
  }

  private addMarker(coord) {
    console.log("coord",coord)
    const marker = new naver.maps.Marker({
      map: this.map,
      position: coord,
      draggable: true
    });
    this.path.push(coord);
    console.log("this.path",this.path);
    this.marker.push(marker);
    console.log("this.marker",this.marker);
    

    naver.maps.Event.addListener(marker, "dragend", (e) => {
      const point = e.coord;
      const markerIndex = this.marker.indexOf(marker);
      this.path.splice(markerIndex, 1, point);
      this.LatLng.splice(markerIndex, 1, point);
    });
    naver.maps.Event.addListener(marker, "click", (e) => {
      const point = e.coord;
      const markerIndex = this.marker.indexOf(marker);
      console.log("markerIndex",markerIndex);
      for(let i = 0; i < this.marker.length; i++) {
        // this.marker.splice(markerIndex,this.marker.length);
        // this.marker.splice(0,this.marker.length);
        this.path.splice(markerIndex,this.marker.length);
        this.LatLng.splice(markerIndex,this.marker.length);
        // this.marker[i].setMap(null);
      }
    
      console.log("this.LatLng",this.LatLng);
      // this.map.removePane();
      // this.marker.splice(markerIndex,1);
      // this.path.splice(markerIndex, 1);
      // this.LatLng.splice(markerIndex, 1);
      // this.init();
    });
  }
  private changeMarker() {
    console.log("this.value",this.value);
    for(let i = 0; i < this.value.length; i++) {
      console.log(this.value[i]);
      const x = this.value[i].gps_longitude;
      const y = this.value[i].gps_latitude;
      this.addMarker({ x, y });
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

  @Input() set value(v: any[]) {
    if(!this.file.shallowEqual(v, this.LatLng)) {
      this.LatLng = v ? this.file.clone(v) : [];
      // this.changeMarker();
      this._onChangeCallback(this.LatLng);
      this.change.emit(v);
    }
  }
  get value() {
    return this.LatLng;
  }
  writeValue(v: any[]): void {
    if(!this.file.shallowEqual(v, this.LatLng)) {
      this.LatLng = v ? this.file.clone(v) : [];
      this.changeMarker();
      this._onChangeCallback(this.LatLng);
      this.change.emit(this.LatLng);
    }
  }

  private _onChangeCallback = (v) => { };
  private _onTouchedCallback = (v) => { };
  registerOnChange(fn: any): void { this._onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this._onTouchedCallback = fn; }
}
