import { Component, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';
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
  @HostBinding('class') get class() {
    let _class = [];
    if(this.color) _class.push(`ion-color-${this.color}`);
    return _class.join(' ');
  }
  
  @HostListener('setValue', ['$event']) setValue({ detail:value }) {
    this.value = value;
  }

  @Input() color:Color;
  @Input() placeholder:string;
  @Output() change = new EventEmitter();

  @Input() 
  set disabled(v:boolean) {
    if(this._disabled !== v) {
      this._disabled = v;
      this.disabledChange();
    }
  }
  get disabled() { return this._disabled }
  private _disabled:boolean = false;

  oEditors:any = [];
  
  constructor(
    private el: ElementRef<HTMLElement>
  ) { }

  ngOnInit() {
    this.smartEditor();
  }

  smartEditor(){
    nhn.husky.EZCreator.createInIFrame({
      // bUseBlocker: this._disabled,
      oAppRef: this.oEditors,
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
    console.log(nhn.husky.EZCreator);
    // this.disabledChange();
  }
  private insert() {
    try {
      //this.oEditors.getById["smartEditor"].exec("PASTE_HTML", [this.value]);
      this.oEditors.getById["smartEditor"].exec("SET_IR", [this.value]);
    } catch(e) {}
  }
  public update() {
    try {
      this.oEditors.getById["smartEditor"].exec("UPDATE_CONTENTS_FIELD", []);
      this.value = this.el.nativeElement.querySelector('#smartEditor')['value'];
    } catch(e) {}
  }

  public _value:string = '';
  @Input() set value(v:string) {
    if(v !== this.value) {
      this._value = v;
      this.insert();
      this._onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() { return this._value; }
  
  writeValue(v:any): void {
    if(v !== this._value) {
      this._value = v; 
      this.insert();
      this._onChangeCallback(v);
      this.change.emit(v);
    }
  }
  disabledChange(){
    if(this._disabled) nhn.husky.EZCreator.showBlocker();
    else nhn.husky.EZCreator.hideBlocker();
  }
  private _onChangeCallback = (v) => {};
  private _onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this._onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this._onTouchedCallback = fn; }
}
