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

  form = {
    search_text:''
  }

  allState:boolean = false;

  res:ConnectResult<Education>;
  values:Education;
  selectAll:boolean;
  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private _modal: ModalController
  ) { }

  ngOnInit() {
    this.get();
  }


  async get() {
    this.res = await this.connect.run('/category/education/get',this.form);
    if(this.res.rsCode !==0 ) {
      this.toast.present({message:this.res.rsMsg, color:'wanring'});
    }
  }

  dismiss() {
    this._modal.dismiss();
  }
  submit() {
    this._modal.dismiss({
      data:this.values,
      allState:this.allState
    });
  }
}
