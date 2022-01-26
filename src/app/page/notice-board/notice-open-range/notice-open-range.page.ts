import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService, Validator } from 'src/app/basic/service/core/connect.service';

export type scopeOne = '현장전체' | '내 소속사만' | '협력사별';
export type scopeTwo = '전체' | '관리자' | '작업자';
export class NoticePublicScope {
  scope_company_id: number;
  scope_company_name: string;
  public_scope_allstate: boolean;
  public_scope_one: scopeOne;
  public_scope_two: scopeTwo;
}
interface scopeItem<T> {
  value: T,
  text: string
}

interface companyItem {
  company_ceo: string,
  company_id: number,
  company_name: string
}

@Component({
  selector: 'app-notice-open-range',
  templateUrl: './notice-open-range.page.html',
  styleUrls: ['./notice-open-range.page.scss'],
})
export class NoticeOpenRangePage implements OnInit {

  @Input() form:NoticePublicScope;
  validator = new Validator(new NoticePublicScope()).validator;

  menuCount:Number = 1;
  
  list1:scopeItem<scopeOne>[] = [
    {
      value: '현장전체',
      text:'전체'
    },
    {
      value: '내 소속사만',
      text:'내 소속사만'
    },
    {
      value: '협력사별',
      text:'협력사별'
    }
  ]

  list2:scopeItem<scopeTwo>[] = [
    {
      value: '전체',
      text:'전체(관리자+작업자)'
    },
    {
      value: '관리자',
      text:'관리자만'
    },
    {
      value: '작업자',
      text:'작업자만'
    }
  ]

  res:ConnectResult<companyItem>;

  constructor(
    private _modal: ModalController,
    private connect: ConnectService
  ) { }

  ngOnInit() {
    this.get();
  }

  async get(){
    this.res = await this.connect.run('/category/certify/company/get', {
      company_contract_type:'협력사',
      search_text:''
    });
  }


  select1(item:scopeItem<scopeOne>) {
    this.form.public_scope_one = item.value;
    // this.form.public_scope_two
    this.form.public_scope_allstate = false;
    this.form.scope_company_id = 0;
    this.form.scope_company_name = '';
  }

  select2(item:scopeItem<scopeTwo>) {
    // this.form.public_scope_one
    this.form.public_scope_two = item.value;
    // this.form.public_scope_allstate
    // this.form.company_id
    // this.form.company_name
  }
  select3All() {
    this.form.public_scope_allstate = true;
    this.form.scope_company_id = 0;
    this.form.scope_company_name = '';
  }
  select3(item:companyItem) {
    // this.form.public_scope_one
    // this.form.public_scope_two
    this.form.public_scope_allstate = false;
    this.form.scope_company_id = item.company_id;
    this.form.scope_company_name = item.company_name;
  }
  
  submit() {
    if(!this.valid()) return;
    this._modal.dismiss(this.form);
  }

  valid() {
    if(!this.form.public_scope_one) this.validator.public_scope_one = { valid: false, message: '항목을 선택해주세요.' };
    else this.validator.public_scope_one = { valid: true };

    if(!this.form.public_scope_two) this.validator.public_scope_two = { valid: false, message: '항목을 선택해주세요.' };
    else this.validator.public_scope_two = { valid: true };

    if(this.form.public_scope_one === '협력사별') {
      if(this.form.public_scope_allstate == null) this.validator.scope_company_id = { valid: false, message: '항목을 선택해주세요.' };
      else if(this.form.public_scope_allstate == false) {
        if(!this.form.scope_company_id) this.validator.scope_company_id = { valid: false, message: '항목을 선택해주세요.' };
        else {
          this.validator.public_scope_allstate = { valid: true };
          this.validator.scope_company_id = { valid: true };
          this.validator.scope_company_name = { valid: true };
        }
      }
    } else this.validator.scope_company_id = { valid: true };
  
    for(let key in this.validator) {
      if(!this.validator[key]?.valid) return false;
    }
    return true;
  }
}
