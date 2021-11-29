import { AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
declare const naver;


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
export class NaverMapComponent implements OnInit, AfterViewInit, ControlValueAccessor{
  
  @ViewChild('naverMap') naverMap:ElementRef<HTMLElement>;

  map:any;
  
  path = [];
  marker = [];
  LatLng = [];
  infoWindows = [];

  constructor() { }

  ngOnInit() {}
  ngAfterViewInit() {
    this.init();
  }
  
  async init(){
    const rect = await this.getMapSize();
    const size = new naver.maps.Size(rect.width, rect.height);
    const position = new naver.maps.LatLng(36.8637499,126.6422598);
    this.map = new naver.maps.Map("map", {
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
      const coord = e.coord;
      this.LatLng.push(coord);
      this.addMarker(coord);
    });
    
    if(this.value.length){
      console.log(this.value);
      const length = this.value.length;
      for(let i=0; i < length; i++) {
        const { x, y } = this.value[i];
        this.addMarker({ x, y });
      }
    }
  }

  private addMarker(coord) {
    const marker = new naver.maps.Marker({
      map: this.map,
      position: coord,
      draggable: true
    });
    this.path.push(coord);
    this.marker.push(marker);

    naver.maps.Event.addListener(marker, "dragend", (e) => {
      console.log("this.path",this.path);
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
        console.log('efef');
        const rect = this.naverMap.nativeElement.getBoundingClientRect();
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

  @Input() set value(v:any[]) {
    if(v !== this.LatLng) {
      this.LatLng = v;
      this.change.emit(v);
    }
  }
  get value() {
    return this.LatLng;
  }
  writeValue(v:any[]): void { 
    if(v !== this.LatLng){
      this.LatLng = v; 
    } 
  }

  private _onChangeCallback = (v) => {};
  private _onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this._onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this._onTouchedCallback = fn; }
}
