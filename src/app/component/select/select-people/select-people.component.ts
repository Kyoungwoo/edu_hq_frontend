import { Component, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ctgoMemberItem, SearchPeopleComponent } from '../../modal/search-people/search-people.component';

@Component({
  selector: 'app-select-people',
  templateUrl: './select-people.component.html',
  styleUrls: ['./select-people.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectPeopleComponent),
    multi: true
  }]
})
export class SelectPeopleComponent implements OnInit, ControlValueAccessor {

  @HostListener('click') onClick() {
    if(!this.disabled) this.openModal();
  }

  @Input() color:Color;
  @Input() label:string = "회원";

  private _company_id:number = 0;
  @Input() set company_id(v:number) { this._company_id = v; };
  get company_id() { return this._company_id };
  @Input() user_type:'COMPANY' | 'WORKER' = 'COMPANY';
  @Input() user_type_editable:boolean = false;

  text:string;

  isModalData:boolean = false;
  constructor(
    private _modal:ModalController,
    private connect: ConnectService,
    private user: UserService
  ) { }

  ngOnInit() {}

  public async get() {
    if(!this.company_id || !this.value) return;
    const res = await this.connect.run('/category/certify/company/user/get', {
      company_id: this.company_id,
      user_type: this.user_type,
      search_text: ''
    });
    if(res.rsCode === 0) {
      console.log(this.user_type);
      console.log("this.value",this.value);
      console.log(res.rsMap);
      this.text = res.rsMap.find(user => user.user_id === this.value)?.user_name || '없음';
    }
  }

  public async openModal() {
    const modal = await this._modal.create({
      component: SearchPeopleComponent,
      componentProps: {
        form: {
          company_id: this.company_id,
          user_type: this.user_type,
          search_text: ''
        }
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      const selectedItem = <ctgoMemberItem>data.selectedItem
      this.value = selectedItem.user_id
      this.text = selectedItem.user_name
    }
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
      this.get();
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
