import { UserService } from './../../../basic/service/core/user.service';
import { ChangeDetectorRef, Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ProjectItem, ProjectSearchType, SearchSceneComponent } from '../../modal/search-scene/search-scene.component';
import { Color } from '@ionic/core';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';

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
    if(!this.disabled && !this.readonly) this.openModal();
  }

  @Input() type:ProjectSearchType; // 'Signup'은 회원가입 시, 사용하는 현장 검색
  @Input() all:boolean = false; // 전체 현장 노출 여부
  @Input() color:Color;
  @Input() label:string = "현장";
  @Input() readonly:boolean = false;

  @Input() company_id:number = 0;

  text:string = '';

  isModalData:boolean = false;

  constructor(
    private connect: ConnectService,
    private _modal:ModalController,
    private changeDetector: ChangeDetectorRef,
    private user: UserService,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {}

  public async get() {
    if(this.isModalData) return;
    // console.log('this.value - ', this.value);
    // console.log('this.all - ', this.all);
    
    // 메인화면에서 선택된 현장이 있을 경우
    // if(this.user.userData.theme_project_id) this.value = this.user.userData.theme_project_id;

    if(!this.value && !this.all && this.user.userData.user_type !== 'LH') return;
    
    if(this.value === 0 && this.all) {
      this.text = '전체';
      this.changeDetector.detectChanges();
      return;
    }

    // if(this.value === 0 && !this.all && this.user.userData.user_type === 'LH') {
    //   this.getProjectList();
    //   return;
    // }

    if(!this.value) return;
    
    const res = await this.connect.run('/forSignUp/project/id/get', {
      project_id: this.value
    });
    if(res.rsCode === 0) {
      this.text = res.rsObj.project_name;
      this.value = res.rsObj.project_id;
    }
  }
  async getProjectList(){
    let res = await this.connect.run('/category/certify/search_my_project/get', {search_text: ''});
    if (res.rsCode === 0) {
      if(res?.rsMap?.length){
        this.value = res.rsMap[0].project_id;
        this.text = res.rsMap[0].project_name;
        this.changeDetector.detectChanges();
      }
    } else {
      // this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }
  public async openModal() {
    this.isModalData = true;
    const modal = await this._modal.create({
      component: SearchSceneComponent,
      componentProps: {
        type: this.type,
        all: this.all,
        value: this.value,
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
    this.valueChange(v);
  }
  get value() {
    return this._value;
  }
  writeValue(v:number): void {
    this.valueChange(v);
  }

  async valueChange(v) {
    if(v !== this._value) {
      this._value = v ? v : 0;
      this.onChangeCallback(v);
      this.get();
      this.change.emit({
        project_id: this.value,
        proje_name: this.text
      });
    }
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}