import { UserService } from '../../../basic/service/core/user.service';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import {
  ProjectItem,
  ProjectSearchType,
  SearchSceneComponent,
} from '../../modal/search-scene/search-scene.component';
import { Color } from '@ionic/core';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { SearchSceneComponentHq } from '../../modal/search-scene-hq/search-scene-hq.component';

@Component({
  selector: 'app-select-scene-hq',
  templateUrl: './select-scene-hq.component.html',
  styleUrls: ['./select-scene-hq.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectSceneComponentHq),
      multi: true,
    },
  ],
})
export class SelectSceneComponentHq implements OnInit, ControlValueAccessor {
  @HostListener('click') onClick() {
    if (!this.disabled && !this.readonly) this.openModal();
  }

  @Input() type: ProjectSearchType; // 'Signup'은 회원가입 시, 사용하는 현장 검색
  @Input() all: boolean = false; // 전체 현장 노출 여부
  @Input() color: Color;
  @Input() label: string = '현장';
  @Input() readonly: boolean = false;

  @Input() company_id: number = 0;

  private _hq_regional_id: number;
  @Input() set hq_regional_id(v: number) {
    if (this._hq_regional_id !== v) {
      this._hq_regional_id = v;
      this.get();
    }
  }
  get hq_regional_id() {
    return this._hq_regional_id;
  }

  private _district_id: number;
  @Input() set district_id(v: number) {
    if (this._district_id !== v) {
      this._district_id = v;
      this.get();
    }
  }
  get district_id() {
    return this._district_id;
  }

  text: string = '';

  isModalData: boolean = false;

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private changeDetector: ChangeDetectorRef,
    private user: UserService,
    public languagePack: LanguagePackService
  ) {}

  ngOnInit() {
    this.get();
  }

  public async get() {
    if (this.isModalData) return;

    if (!this.value && !this.all && this.user.userData.user_type !== 'LH')
      return;

    if (this.value === 0 && this.all) {
      this.text = '전체';
      this.changeDetector.detectChanges();
      return;
    }

    // if (!this.value) return;

    const res = await this.connect.run('/project/district/list', {
      hq_regional_id: this.hq_regional_id,
      district_id: this.district_id,
      limit_no: 0,
    });
    if (res.rsCode === 0) {
      const filterd = res?.rsMap;

      if (filterd.length > 0) {
        this.text = filterd[0].project_name;
        this.value = filterd[0].project_id;
      }
    } else {
      this.text = '';
      this.value = 0;
    }
  }

  public async openModal() {
    this.isModalData = true;
    const modal = await this._modal.create({
      component: SearchSceneComponentHq,
      componentProps: {
        type: this.type,
        all: this.all,
        value: this.value,
        form: {
          hq_regional_id: this.hq_regional_id,
          district_id: this.district_id,
          search_text: '',
          limit_no: 0,
        },
      },
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      const allState = <Boolean>data.allState;
      const selectedItem = <ProjectItem>data.selectedItem;

      if (allState) {
        this.value = 0;
        this.text = '전체';
      } else {
        try {
          this.value = selectedItem.project_id;
          this.text = selectedItem.project_name;
        } catch (e) {
          console.error('err select scene hq ---------------->', e);
        }
      }
    }
    this.isModalData = false;
  }

  //default setting
  //@Input() readonly:boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Output() change = new EventEmitter();

  private _value: number;
  @Input() set value(v: number) {
    this.valueChange(v);
  }
  get value() {
    return this._value;
  }
  writeValue(v: number): void {
    this.valueChange(v);
  }

  async valueChange(v) {
    if (v !== this._value) {
      this._value = v ? v : 0;
      this.onChangeCallback(v);
      this.get();
      this.change.emit({
        project_id: this.value,
        proje_name: this.text,
      });
    }
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
}
