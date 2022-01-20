import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
declare var nhn:any;

@Component({
  selector: 'app-smartedit',
  templateUrl: './smartedit.component.html',
  styleUrls: ['./smartedit.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SmarteditComponent),
    multi: true
  }]
})
export class SmarteditComponent implements OnInit {

  @Input() placeholder:string;
  @Output() change = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    this.smartEditor();
  }

  smartEditor(){
    let oEditors = [];
    nhn.husky.EZCreator.createInIFrame({
      oAppRef: oEditors,
      elPlaceHolder: "smartEditor",  //textarea ID 입력
      // sSkinURI: "/libs/smarteditor/SmartEditor2Skin.html",  //martEditor2Skin.html 경로 입력
      sSkinURI: "../../assets/lib/smartEditor/SmartEditor2Skin.html",  //martEditor2Skin.html 경로 입력
      fCreator: "createSEditor2",
      htParams : { 
        // 툴바 사용 여부 (true:사용/ false:사용하지 않음) 
        bUseToolbar : true, 
        // 입력창 크기 조절바 사용 여부 (true:사용/ false:사용하지 않음) 
        bUseVerticalResizer : false, 
        // 모드 탭(Editor | HTML | TEXT) 사용 여부 (true:사용/ false:사용하지 않음) 
        bUseModeChanger : false 
      }
    });
  }
  public _value:string = '';
  @Input() set value(v:string) {
    if(v !== this.value) {
      console.log("this.value",this.value);
      this._value = v;
      this._onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() { return this._value; }
  
  writeValue(v:any): void {
    if(v !== this._value) this._value = v; 
    this._onChangeCallback(v);
    this.change.emit(v);
  }
  private _onChangeCallback = (v) => {};
  private _onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this._onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this._onTouchedCallback = fn; }
}
