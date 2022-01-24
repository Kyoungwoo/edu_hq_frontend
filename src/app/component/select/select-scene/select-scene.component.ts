import { Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ProjectItem, ProjectSearchType, SearchSceneComponent } from '../../modal/search-scene/search-scene.component';
import { Color } from '@ionic/core';
import { ConnectService } from 'src/app/basic/service/core/connect.service';

@Component({
  selector: 'app-select-scene',
  templateUrl: './select-scene.component.html',
  styleUrls: ['./select-scene.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectSceneComponent),
    multi: true
  }]
})
export class SelectSceneComponent implements OnInit, ControlValueAccessor {

  @HostListener('click') onClick() {
    if(!this.disabled) this.openModal();
  }

  @Input() type:ProjectSearchType; // 'Signup'은 회원가입 시, 사용하는 현장 검색
  @Input() all:boolean = false; // 전체 현장 노출 여부
  @Input() color:Color;
  @Input() label:string = "현장";
  @Input() text:string;

  @Input() company_id:number = 0;

  isModalData:boolean = false;

  constructor(
    private connect: ConnectService,
    private _modal:ModalController
  ) { }

  ngOnInit() {}

  public async get() {
    if(this.isModalData || !this.value) return;
    const res = await this.connect.run('/forSignUp/project/id/get', {
      project_id: this.value
    });
    if(res.rsCode === 0) {
      this.text = res.rsObj.project_name;
    }
  }
  public async openModal() {
    this.isModalData = true;
    const modal = await this._modal.create({
      component:SearchSceneComponent,
      componentProps: {
        type: this.type,
        all: this.all,
        form: {
          company_id: this.company_id,
          search_text: ''
        }
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      const allState = <Boolean>data.allState;
      const selectedItem = <ProjectItem>data.selectedItem;
      if(allState) {
        this.value = 0;
        this.text = '전체';
      } else {
        this.value = selectedItem.project_id;
        this.text = selectedItem.project_name;
      }
    }
    this.isModalData = false;
  }

  //default setting
  //@Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
  @Output() change = new EventEmitter();

  private _value:number;
  @Input() set value(v:number) {
    if(v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:number): void {
    if(v !== this._value) {
      this._value = v;
      this.get();
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}