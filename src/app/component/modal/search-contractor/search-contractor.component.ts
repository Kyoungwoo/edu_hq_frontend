import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';

export class Constractor {
  business_register_no = "";
  company_ceo = "";
  company_id = 0;
  company_name = "";
  company_phone = "";
  create_user_id = 0;
  create_user_name = "";
  ctgo_construction_name = "";
  project_id = 0;
  project_name = "";
  update_date = "";
}
@Component({
  selector: 'app-search-contractor',
  templateUrl: './search-contractor.component.html',
  styleUrls: ['./search-contractor.component.scss'],
})
export class SearchContractorComponent implements OnInit {
  @Input() set project_id(_project_id:number) {
    this.form.project_id = _project_id;
  }
  @Input() allState:boolean = false;
  @Input() editable:boolean = false;
  @Input() multiple:boolean = false;

  form = {
    company_contract_type: '원청사',
    project_id: 0,
    search_text: ''
  }
  res:ConnectResult<Constractor>;

  selectAll:boolean;
  values:Constractor[] = [];
  newValues:Constractor[] = [];
  
  allBusinessRegisterNoChecked:boolean = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private connect: ConnectService,
    private _modal_: ModalController,
    private toast: ToastService,
    private promise: PromiseService
  ) { }

  ngOnInit() {
    this.get();
    this.test();
  }

  private async test() {
    if(!environment.test.core.test) return;

    const el = this.el.nativeElement;

    // 가짜 데이터 삽입
    await this.promise.wait();

    // 가장 위엣놈 클릭
    el.querySelector('[name=item]').dispatchEvent(new Event('click'));
    await this.promise.wait();

    // 적용
    el.querySelector('[name=submit]').dispatchEvent(new Event('click'));
  }

  async get() {
    // 현장에 관계 없이, 원청사 전체를 검색을 할 수 있어야 되는 상황이 있는건지?
    this.res = await this.connect.run('/category/certify/company/master/get', this.form);
    if(this.res.rsCode === 0) {
      
    } else {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }

  selectAllConstractor() {
    this.selectAll = true;
    
    this.values = [];
    this.newValues = [];
  }

  async selectConstractor(item) {
    this.selectAll = false;
    if(this.multiple) {
      if(this.values.length + this.newValues.length < 5) {
        this.values.push(item);
      } else {
        this.toast.present({
          message: '최대 선택 개수는 5개입니다.',
          color: 'warning'
        });
      }
    } else {
      this.values = [item];
      this.newValues = [];
    }
  }
  getActive(item:Constractor) {
    return this.values.indexOf(item) > -1;
  }

  async newConstractor() {
    if(this.multiple) {
      if(this.values.length + this.newValues.length < 5) {
        this.newValues.push(new Constractor());
      } else {
        this.toast.present({
          message: '최대 선택 개수는 5개입니다.',
          color: 'warning'
        });
      }
    } 
    else {
      this.values = [];
      this.newValues = [new Constractor()];
    }
  }

  async overlap(business_register_no) {
    if (business_register_no.length >= 10) {
      const res = await this.connect.run('/project/overlap/business_register_no', { business_register_no: business_register_no });
      if (res.rsCode === 0) {
        this.allBusinessRegisterNoChecked = true;
      } 
      else if (business_register_no.length > 10) {
        this.allBusinessRegisterNoChecked = false;
        this.toast.present({ message: '10자 이하로 입력해주세요', color: 'warning' });
      }
      else {
        this.allBusinessRegisterNoChecked = false;
        this.toast.present({
          message: '이미 등록된 사업자등록번호입니다. 등록된 회사 목록에서 선택하여 주세요.',
          color: 'warning'
        });
      }
    } else {
      this.allBusinessRegisterNoChecked = false;
    }
  }

  async submit() {
    if(this.editable) {
      for(let i = 0; i < this.newValues.length; i++) {
        const newValue = this.newValues[i];
        if (!newValue.company_name) return this.toast.present({ message: '회사명 입력해 주세요.', color: "warning" });

        if (!newValue.business_register_no) return this.toast.present({ message: '사업자등록번호를 입력해 주세요.', color: "warning" });
        else if (newValue.business_register_no.length < 10) return this.toast.present({ message: '사업자등록번호를 확인해주세요.', color: "warning" });
        else if(!this.allBusinessRegisterNoChecked) return this.toast.present({ message: '사업자등록번호를 확인해주세요.', color: "warning" });

        if (!newValue.company_ceo) return this.toast.present({ message: '대표자를 입력해 주세요.', color: "warning" });
      }

      for(let i = 0; i < this.newValues.length; i++) {
        const newValue = this.newValues[i];
        const res = await this.connect.run('/project/company/insert', {
          business_register_no: newValue.business_register_no,
          company_ceo: newValue.company_ceo,
          company_name: newValue.company_name,
          company_contract_type: '원청사'
        });
        
        if (res.rsCode !== 0) {
          return this.toast.present({ message: res.rsMsg, color: 'warning' });
        }
      }
      this._modal_.dismiss({values: this.values, submit: true});
    }
    else if(this.multiple) {
      this._modal_.dismiss({values: this.values, submit: true});
    }
    else {
      this._modal_.dismiss({values: this.values[0], submit: true});
    }
  }
}
