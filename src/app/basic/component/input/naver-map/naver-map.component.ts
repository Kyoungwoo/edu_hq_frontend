import { AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, HostBinding, Inject, InjectionToken, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FileService } from 'src/app/basic/service/core/file.service';
declare const naver;



export const NaverMapId = new InjectionToken<string>('NaverMapId');
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
  text:boolean = true;
  path = [];
  marker = [];
  LatLng = [];
  infoMarker:any;

  constructor(
    @Inject(NaverMapId) private naverMapId:string,
    private el: ElementRef,
    private file: FileService
  ) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.file.script(`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${this.naverMapId}`).then(() => {
      this.init();
    });
  }
  
  async init() {
    console.log("123123---------",this.value.workerInfo)
    const rect = await this.getMapSize();
    const size = new naver.maps.Size(rect.width, rect.height);
    let position = [];
    for(let i=0; i<this.value.workerInfo.length; i++){
      if(this.value.workerInfo.length){
        console.log("x--------------------",this.value.workerInfo[i].x);
        console.log("y--------------------",this.value.workerInfo[i].y);
        new naver.maps.LatLng(this.value.workerInfo[i].x,this.value.workerInfo[i].y);
        console.log("position",position)
      }
    }
    console.log("position",position);
    this.map = new naver.maps.Map(this.id, {
      center: new naver.maps.LatLng(37.6685975,126.9234476),
      zoom: 10
    });
    let icon_option = this.text ? 'assets/basic/img/logo.png':''
    this.infoMarker = new naver.maps.Marker({
      map:this.map,
      position:position,
      icon: icon_option
    })
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
      '       <img src="./img/hi-seoul.jpg" width="38" height="26" alt="" class="pin_flag_m">',
      '       <span class="pin_txt"><em>캐나다</em> <span class="spr spr_arrow"></span></span>',
      '       <span class="spr spr_arr"></span>',
      '   </a>',
      '   <div class="pin"><span class="pin_blur"></span></div>',
      '</div>'].join(''));
    
    let infowindow = new naver.maps.InfoWindow({
      content: infoWindowElement,
      // pixelOffset: new naver.window.Point(20, -20)
    });
    
    naver.maps.Event.addListener(this.infoMarker, 'click', (e) => {
      if (infowindow.getMap()) {
        infowindow.close();
      } else {
          infowindow.open(this.map, this.infoMarker);
      }
    });


    naver.maps.Event.addListener(this.map, 'click', (e) => {
      const coord = e.coord;
      console.log(this.LatLng);
      console.log(coord);
      this.value.dangeraeararea.push(coord);
      this.addMarker(coord);
    });
    
    if(this.value.dangeraeararea.length){
      const length = this.value.dangeraeararea.length;
      for(let i=0; i < length; i++) {
        console.log(this.value.dangeraeararea[i].x);
        const x = this.value.dangeraeararea[i].x;
        const y = this.value.dangeraeararea[i].y;
        // console.log("------------",x,y)
        this.addMarker({ x, y });
      }
    }
  }

  private addMarker(coord) {
    console.log("coord",coord);
    const marker = new naver.maps.Marker({
      map: this.map,
      position: coord,
      draggable: true
    });
    this.path.push(coord);
    this.marker.push(marker);
    // console.log("~~~~~~~~~~~~~",coord)
    // const infoWindowElement = ([
    //   '<div class="pin_nation">',
    //   '   <a href="http://www.naver.com/" target="_blank" class="pin_a">',
    //   '       <img src="./assets/basic/img/cctv.png" width="38" height="26" alt="" class="pin_flag_m">',
    //   '       <span class="pin_txt"> <span class="spr spr_arrow"></span></span>',
    //   '       <span class="spr spr_arr"></span>',
    //   '   </a>',
    //   '   <div class="pin"><span class="pin_blur"></span></div>',
    //   '</div>'].join(''));
    // console.log(infoWindowElement);
    
    // let infowindow = new naver.maps.InfoWindow({
    //   content: infoWindowElement,
    //   // pixelOffset: new naver.window.Point(20, -20)
    // });
    
    // naver.maps.Event.addListener(marker, 'click', (e) => {
    //   if (infowindow.getMap()) {
    //     infowindow.close();
    //   } else {
    //       infowindow.open(this.map, marker);
    //   }
    // });

    naver.maps.Event.addListener(marker, "dragend", (e) => {
      const point = e.coord;
      const markerIndex = this.marker.indexOf(marker);
      this.path.splice(markerIndex,1,point);
      this.LatLng.splice(markerIndex,1,point);
    });
  }

  private getMapSize():Promise<DOMRect> {
    return new Promise(res => {
      const max = 20;
      let step = 0;
      const interval = setInterval(() => {
        const rect = this.el.nativeElement.getBoundingClientRect();
        if(rect.width || step > max) {
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
    if(v !== this.LatLng) {
      this.LatLng = v;
      this.change.emit(v);
    }
  }
  get value() {
    // console.log("-----------------1")
    return this.LatLng;
  }
  writeValue(v:any): void { 
    if(v !== this.LatLng){
      this.LatLng = v; 
    } 
  }

  private _onChangeCallback = (v) => {};
  private _onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this._onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this._onTouchedCallback = fn; }
}
