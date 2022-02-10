import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Color } from '@ionic/core';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { SearchCompanyComponent } from '../../modal/search-company/search-company.component';

@Component({
  selector: 'app-select-company',
  templateUrl: './select-company.component.html',
  styleUrls: ['./select-company.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectCompanyComponent),
    multi: true
  }]
})
export class SelectCompanyComponent implements OnInit, ControlValueAccessor {

  @Input() color:Color;
  @Input() label:string = "원청사";
  @Input() required:boolean = false;
  @Input() text:string;
  @Input() type?:boolean;
  @Input() multiple:boolean;
  @Input() disabled:boolean;


  isModalData:boolean = false;

  constructor(
    private _modal:ModalController,
    private connect:ConnectService,
    private user: UserService
  ) { }

  ngOnInit() {}

  
  // async company(){
  //   const modal = await this._modal.create({
  //     component:SearchCompanyComponent,
  //     componentProps:{
  //       type:this.type,
  //       multiple:this.multiple,
  //       value:this.value,
  //       form : {
  //         company_contract_type: this.user.userData.user_type,
  //         search_text: ''
  //       }
  //     }
  //   });
  //   modal.present();
  //   const { data } = await modal.onDidDismiss();
  //   if(data) { 
  //     console.log(data);
  //     this.value = data.company_id;
  //     this.text = data.company_name;
  //   }
  // }

  public async get() {
    console.log("dsfasdf-=----this.value",this.value);
    if(this.isModalData || !this.value) return;
    const res = await this.connect.run('/category/certify/company/get', {
      company_contract_type: '원청사',
      search_text: ''
    });
    if(this.type){
      let textArr = [];
      if(res.rsCode === 0) {
        for (let i = 0; i < res.rsMap.length; i++) {
          for (let x = 0; x < this.value.length; x++) {
            if (res.rsMap[i].company_id === this.value[x]) {
              textArr.push(res.rsMap[i].company_name);
            }
          }
        }
        this.text = textArr.toString();
      }
    } else {
      for(let i = 0; i < res.rsMap.length; i++) {
        if(res.rsMap[i].company_id === this.value) {
          this.text = res.rsMap[i].company_name;
        }
      }
    }
  }
  
  public async openModal() {
    console.log(this.multiple);
    this.isModalData = true;
    const modal = await this._modal.create({
      component:SearchCompanyComponent,
      componentProps:{
        type:this.type,
        value:this.value,
        multiple:this.multiple,
       form : {
          company_contract_type: this.user.userData.user_type,
          search_text: ''
        }
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      console.log("data",data);
      console.log("ddddddddddd",this.multiple);
      if(this.multiple){
        let compnay_name_string = [];
        console.log(data);
        for(let i = 0; i < data.length; i++) {
         compnay_name_string.push(data[i].company_name);
        }
        this.text = compnay_name_string.toString();
      } else {
        this.text = data.company_name
        console.log("eeeeeeeee",this.text);
      } 
    }
  }
  
 
  @Output() change = new EventEmitter();

  private _value:string = "";
  @Input() set value(v:string) {
    if(v !== this._value) {
      this._value = v;
      this.onChangeCallback(v);
      this.change.emit(v);
    }
  }
  get value() {
    return this._value;
  }
  writeValue(v:string): void { 
    if(v !== this._value) this._value = v;
    this.onChangeCallback(v);
    this.change.emit(v);
  }

  private onChangeCallback = (v) => {};
  private onTouchedCallback = (v) => {};
  registerOnChange(fn: any): void { this.onChangeCallback = fn; }
  registerOnTouched(fn: any): void { this.onTouchedCallback = fn; }
}
