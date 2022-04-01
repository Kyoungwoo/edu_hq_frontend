import { ModalController } from '@ionic/angular';
import { ToastService } from './../../../basic/service/ionic/toast.service';
import { UserService } from './../../../basic/service/core/user.service';
import { ConnectService, ConnectResult } from './../../../basic/service/core/connect.service';
import { Component, OnInit, Input } from '@angular/core';

export class ctgoMemberItem {
  create_date:string;
  ctgo_construction_id:number;
  ctgo_construction_name:string;
  ctgo_machinery_id:number;
  ctgo_machinery_name:string;
  machinery_id:number;
  machinery_regist_no:string;
  master_company_id:number;
  master_company_name:string;
  partner_company_id:number;
  partner_company_name:string;
}

@Component({
  selector: 'app-search-heavy',
  templateUrl: './search-heavy.component.html',
  styleUrls: ['./search-heavy.component.scss'],
})
export class SearchHeavyComponent implements OnInit {
  @Input() form;
  res:ConnectResult<ctgoMemberItem>

  selectedItem:ctgoMemberItem;
  constructor(
    private connect: ConnectService,
    private user: UserService,
    private toast: ToastService,
    private _modal: ModalController
  ) { }

  ngOnInit() {
    this.get();
  }

  /**
   * @function get(): 리스트에 필요한 모든 목록 가져오기
   */
  async get() {
    await this.getMachin();
    await this.getConstruction();
    await this.getList();
  }

  /**
   * @function getList(): 장비목록 가져오기
   */
   async getList() {
    this.res = await this.connect.run('/category/machinery/get',this.form);
    if(this.res.rsCode !== 0) {
      this.toast.present({message:this.res.rsMsg,color:'warning'});
    }
  }

  /**
   * @function getConstruction(): 공종 카테고리 가져오기
   */
  async getConstruction() {
    this.res = await this.connect.run('/category/machinery/get',this.form);
    if(this.res.rsCode !== 0) {
      this.toast.present({message:this.res.rsMsg,color:'warning'});
    }
  }
  /**
   * @function getMachin(): 건설기계 카테고리 가져오기
   */
  async getMachin() {
    this.res = await this.connect.run('/category/machinery/get',this.form);
    if(this.res.rsCode !== 0) {
      this.toast.present({message:this.res.rsMsg,color:'warning'});
    }
  }

  /**
   * @function select(): 장비 선택하기
   */
  select() {
    this._modal.dismiss({
      selectedItem: this.selectedItem
    });
  }
}
