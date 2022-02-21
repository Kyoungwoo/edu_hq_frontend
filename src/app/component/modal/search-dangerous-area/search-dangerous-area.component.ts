import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

@Component({
  selector: 'app-dangerous-area',
  templateUrl: './search-dangerous-area.component.html',
  styleUrls: ['./search-dangerous-area.component.scss'],
})
export class SearchDangerousAreaComponent implements OnInit {

  @Input() project_id;

  form = {
    ctgo_area_risk_id:0,
    project_id:0,
    search_text:''
  }

  ctgoAreaType:ConnectResult <{
    ctgo_area_risk_id: number,
    ctgo_area_risk_name: string,
  }>

  resRiskArea:ConnectResult <{
    area_bottom_name: string,
    area_risk_id: number,
    area_middle_name: string,
    ctgo_area_risk_name: string,
    area_top_id: number,
    area_middle_id: number,
    area_bottom_id: number,
    area_top_name: string,
    area_risk_name: string
  }>
  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private _modal: ModalController
  ) { }

  selectList;

  ngOnInit() {
    // if(this.project_id) this.form.project_id = this.project_id;
    this.form.project_id = 58;
    this.CtgoriskAreaGet();
  }

  async CtgoriskAreaGet() {
    this.ctgoAreaType = await this.connect.run('/category/risk/type/get');
    if(this.ctgoAreaType.rsCode) {

    } else {
      this.toast.present({message:this.ctgoAreaType.rsMsg});
    }
  }

  async riskTypeGet() {
    this.resRiskArea = await this.connect.run('/work_project/nfc_beacon/search_risk_area/list',this.form);
    if(this.resRiskArea.rsCode === 0) {
    } else {
      this.toast.present({message:this.ctgoAreaType.rsMsg});
    }
  }
 
  submit() {
    if(this.selectList){
      this._modal.dismiss(this.selectList);
    }
  }
}
