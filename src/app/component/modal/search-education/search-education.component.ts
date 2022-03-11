import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

export class Education {
  ctgo_education_safe_type:string;
  ctgo_education_safe_name:string;
  ctgo_education_safe_id:number;
  ctgo_education_safe_title:string;
  ctgo_education_safe_text:string;
}

@Component({
  selector: 'app-search-education',
  templateUrl: './search-education.component.html',
  styleUrls: ['./search-education.component.scss'],
})
export class SearchEducationComponent implements OnInit {

  @Input() all:boolean = false;
  @Input() editable:boolean = false;
  @Input() multiple:boolean = false;
  @Input() value:number | number[];

  form = {
    search_text:''
  }

  allState:boolean = false;

  res:ConnectResult<Education>;
  values:Education | Education[];
  selectAll:boolean;
  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private _modal: ModalController
  ) { }

  ngOnInit() {
    console.log("value----------",this.value);
    this.get();
  }


  async get() {
    this.res = await this.connect.run('/category/education/get',this.form);
    if(this.res.rsCode === 0 ) {
      if(this.multiple) {
        this.values = this.res.rsMap.filter(item => (this.value as number[]).indexOf(item.ctgo_education_safe_id))
      } else {
        this.res.rsMap.filter(item => {
          if(item.ctgo_education_safe_id === this.value) this.values = item;
        });
      }
    } else {
      this.toast.present({message:this.res.rsMsg, color:'wanring'});
    }
  }
  selected(item:Education) {
    if(!this.multiple) {
      return this.values === item;
    }
    else {
      if(!this.values) this.values = [];
      const values = <Education[]>this.values;
      return values.includes(item);
    }
  }
  itemClick(item:Education) {
    this.allState = false;
    if(!this.multiple) {
      
      if(this.values === item) {
        this.values = null;
        console.log("---------delete",this.values);
      }
      else {
        this.values = item;
      }
    }
    else {
      if(!this.values) this.values = [];
      const values = <Education[]>this.values;
      const index = values.indexOf(item);
      if(index > -1) {
        values.splice(index, 1);
      }
      else {
        values.push(item);
      }
    }
  }

  dismiss() {
    this._modal.dismiss();
  }
  submit() {
    console.log(this.values);
    this._modal.dismiss({
      data:this.values,
      allState:this.allState
    });
  }
}
