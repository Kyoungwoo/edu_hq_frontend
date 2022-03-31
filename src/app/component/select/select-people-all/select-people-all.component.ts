import { Color } from '@ionic/core';
import { ctgoMemberItem } from './../../modal/search-people/search-people.component';
import { SearchPeopleAllComponent } from './../../modal/search-people-all/search-people-all.component';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { ModalController } from '@ionic/angular';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, OnInit, forwardRef, Input, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-people-all',
  templateUrl: './select-people-all.component.html',
  styleUrls: ['./select-people-all.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectPeopleAllComponent),
    multi: true
  }]
})
export class SelectPeopleAllComponent implements OnInit, ControlValueAccessor {

  @HostListener('click') onClick() {
    if(!this.disabled) this.openModal();
  }

  @Input() color:Color;
  @Input() label:string = "회원";

  // private _company_id:number = 0;
  // @Input() set company_id(v:number) { this._company_id = v; };
  // get company_id() { return this._company_id };
  @Input() user_type:'COMPANY' | 'WORKER' = 'COMPANY';

  @Input() project_id:number = 0;
  @Input() master_company_id:number = 0;
  @Input() company_id:number = 0;
  @Input() user_type_editable:boolean = false;

  @Input() text:string = '';

  isModalData:boolean = false;
  constructor(
    private _modal:ModalController,
    private connect: ConnectService,
    private user: UserService
  ) { }

  ngOnInit() {}

  public async get() {
    // if(this.isModalData) return;
    // if(!this.company_id || !this.value) return;

    // this.text
    // const res = await this.connect.run('/category/certify/company/user/get', {
    //   company_id: this.company_id,
    //   user_type: this.user_type,
    //   search_text: ''
    // });
    // if(res.rsCode === 0) {
    //   this.text = res.rsMap.find(user => user.user_id === this.value)?.user_name || '없음';
    // }
  }

  public async openModal() {
    this.isModalData = true;
    const modal = await this._modal.create({
      component: SearchPeopleAllComponent,
      componentProps: {
        form: {
          project_id: this.project_id,
          master_company_id: this.master_company_id,
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

  valueChange(v) {
    if(v !== this._value) {
      this._value = v;
      // this.get();
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
