import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { AreaAddPage } from '../area-add/area-add.page';

export class FileData {
  file: (File|FileBlob)[] = [];
  file_json: FileJson = new FileJson();
  file_data: FutItem[] = [];
  project_id:number
}
@Component({
  selector: 'app-area-standard-set',
  templateUrl: './area-standard-set.page.html',
  styleUrls: ['./area-standard-set.page.scss'],
})
export class AreaStandardSetPage implements OnInit {

  menuCount:Number = 1;
  resAreaOne:ConnectResult <{
    area_top_name: string,
    area_top_id: number
  }>;

  resAreaTwo:ConnectResult <{
    area_middle_name: string, // 장소2
    area_top_id: number, // 장소1 ID
    area_middle_id: number // 장소2 ID
  }>;

  file:FileData = new FileData();
  resAreaThree:ConnectResult <{
    area_bottom_name: string, //장소 3
    area_top_id: number, // 장소1 ID
    area_middle_id: number, // 장소2 ID
    area_bottom_id: number // 장소3 ID
  }>

  AreaOneForm = {
    project_id:this.user.userData.belong_data.project_id
  }

  selectDataArea1 = [];
  selectDataArea2 = [];
  selectDataArea3 = [];

  area_top_id:number;
  area_middle_id:number;

  resFileData:ConnectResult <{
    seq_no: number,
    order_no: number,
    file_url: string,
    ctgo_business_field_name: string,
    content_type: string,
    full_url: string,
    file_name: string,
    file_type: string,
    view_type: string,
    ctgo_business_field_id: number,
    project_name: string,
    file_size: number
  }>

  resRiskArea:ConnectResult <{
    second_user_id: number, // 관리 책임자 부
    area_risk_id: number, // 위험지역 ID
    area_middle_name: string, // 장소2
    ctgo_area_risk_name: string, // 위험지역 유형
    area_middle_id: number, // 장소2 ID
    ctgo_area_risk_id: number, // 위험지역 ID
    area_risk_name: string, // 위험지역 명
    manager_user_id: number, // 관리 책임자 정
    area_bottom_name: string, // 장소3
    area_risk_type: string, // 실내/실외
    nfc_state: number, // NFC 등록여부 개수
    project_id: number, // 현장 ID
    area_top_id: number, // 장소1 ID
    area_bottom_id: number, // 장소3 ID
    area_risk_use_state: number, // 사용여부
    area_top_name: string, // 장소1
    gps_state: number // GPS 등록여부 / 1 등록, 0 미등록
  }>;

  resCtgoRisk:ConnectResult <{
    ctgo_area_risk_id: number,
    ctgo_area_risk_name:string
  }>
  addRiskAreaArr = [];

  riskAreaData = [];



  // area = [
  //   {
  //     x: 126.7552019,
  //     y: 37.6090918
  //   },
  //   {
  //     x: 126.6865373,
  //     y: 37.5568537
  //   },
  //   {
  //     x: 126.9090105,
  //     y: 37.5579424
  //   },
  //   [
  //     {
  //       x: 127.2825456,
  //       y: 37.5503214
  //     }
  //   ]
  // ]


  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    private toast: ToastService,
    private alert: AlertService,
    private user: UserService
  ) { }

  ngOnInit() {
    this.get();
    this.AreaOne();
    this.getRiskArea();
    this.CtgoRisk();
  }

  async get() {
    this.resFileData = await this.connect.run('/project/area/guidemap/get',{project_id:this.AreaOneForm.project_id});
  }

  async AreaOne() {
    this.resAreaOne = await this.connect.run('/project/area/top/get',this.AreaOneForm,{});
    if(this.resAreaOne.rsCode === 0) {

    }
  }

  async areaTow(area_top_id) {
    this.area_top_id = area_top_id;
    this.resAreaTwo = await this.connect.run('/project/area/middle/get',{area_top_id:area_top_id},{});
    if(this.resAreaTwo.rsCode === 0) {

    }
  }

  async areaThree(area_middle_id) {
    this.area_middle_id = area_middle_id
    this.resAreaThree = await this.connect.run('/project/area/bottom/get',{
      area_middle_id:area_middle_id,
      area_top_id:this.area_top_id
    },{});
    if(this.resAreaThree.rsCode === 0) {

    }
  }

  async areaOneEdit(area,update?) {
    console.log("asdfasdfasdf",this.selectDataArea1);
    if(update) {
      if(!this.selectDataArea1.length) return await this.toast.present({message:'장소를 선택해 주세요', color:'danger'});
    }
    if(this.selectDataArea1.length > 1) return await this.toast.present({message:'한 개만 선택해 주세요.', color:'danger'});
    if(!this.AreaOneForm.project_id) return await this.toast.present({message:'현장을 선택해 주세요.', color:'danger'});
    const modal =  await this.modal.create({
      component:AreaAddPage,
      componentProps:{
        selectData:this.selectDataArea1[0],
        project_id:this.AreaOneForm.project_id,
        area
      },
      cssClass:'lhOrganization'
    });
    modal.present();
    const {data} = await modal.onDidDismiss();
    if(data) {
      this.AreaOne();
    }
  }


  async areaTwoEdit(area,update?) {
    if(update) {
      if(!this.selectDataArea2.length) return await this.toast.present({message:'장소를 선택해 주세요',color:'danger'});
    }
    if(this.selectDataArea2.length > 1) return await this.toast.present({message:'한 개만 선택해 주세요.',color:'danger'});
    if(!this.AreaOneForm.project_id) return await this.toast.present({message:'현장을 선택해 주세요.',color:'danger'});
    const modal =  await this.modal.create({
      component:AreaAddPage,
      componentProps:{
        area_top_id:this.area_top_id,
        selectData:this.selectDataArea2[0],
        project_id:this.AreaOneForm.project_id,
        area
      },
      cssClass:'lhOrganization'
    });
    modal.present();
    const {data} = await modal.onDidDismiss();
    if(data) {
      console.log(data);
      this.areaTow(data);
    }
    // if(data) this.testarr.push({text:data.text});
  }


  async areaThreeEdit(area,update?) {
    if(update) {
      if(!this.selectDataArea3.length) return await this.toast.present({message:'장소를 선택해 주세요'});
    }
    if(this.selectDataArea3.length > 1) return await this.toast.present({message:'한 개만 선택해 주세요.'});
    if(!this.AreaOneForm.project_id) return await this.toast.present({message:'현장을 선택해 주세요.'});
    const modal =  await this.modal.create({
      component:AreaAddPage,
      componentProps:{
        area_middle_id:this.area_middle_id,
        selectData:this.selectDataArea3[0],
        area_top_id:this.area_top_id,
        area
      },
      cssClass:'lhOrganization'
    });
    modal.present();
    const {data} = await modal.onDidDismiss();
    if(data) {
      this.areaThree(data);
    }
  }

  async deleteArea(area) {
    const alert = await this.alert.present({
      message:'삭제 하시겠습니까?',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler: async() => {
            switch(area) {
              case 1:
                for (let i = 0; i < this.selectDataArea1.length; i++) {
                  const res = await this.connect.run('/project/area/top/delete', {
                    area_top_id: this.selectDataArea1[i].area_top_id,
                    project_id: this.AreaOneForm.project_id
                  });
                  if (res.rsCode === 0) { this.AreaOne() };
                }
              break;
              case 2:
                for (let i = 0; i < this.selectDataArea2.length; i++) {
                  const res = await this.connect.run('/project/area/middle/delete', {
                    area_middle_id: this.selectDataArea2[i].area_middle_id,
                    area_top_id:this.area_top_id,
                  });
                  if (res.rsCode === 0) { this.areaTow(this.area_top_id) };
                }
              break;
              case 3:
                for (let i = 0; i < this.selectDataArea3.length; i++) {
                  const res = await this.connect.run('/project/area/bottom/delete', {
                    area_top_id: this.area_top_id,
                    area_middle_id: this.area_middle_id,
                    area_bottom_id: this.selectDataArea3[i].area_bottom_id
                  });
                  console.log(this.selectDataArea3[i].area_bottom_id);
                  if (res.rsCode === 0) { this.areaThree(this.area_middle_id) };
                }
              break;
            }
          }
        }
      ]
    });
    alert.present();
  }


  async getRiskArea() {
    this.resRiskArea = await this.connect.run('/project/area/risk/get',{
      limit_no:0,
      project_id:this.AreaOneForm.project_id
    });
    if(this.resRiskArea.rsCode === 0) {};
  }

  addRiskArea() {
    this.addRiskAreaArr.push({
      second_user_id:0, // 관리 책임자 부
      area_risk_id:0, // 위험지역 ID
      area_middle_name:'', // 장소2
      ctgo_area_risk_name:0, // 위험지역 유형
      area_middle_id:0, // 장소2 ID
      ctgo_area_risk_id:0, // 위험지역 ID
      area_risk_name:'', // 위험지역 명
      manager_user_id:0, // 관리 책임자 정
      area_bottom_name:'', // 장소3
      area_risk_type:'', // 실내/실외
      nfc_state:0, // NFC 등록여부 개수
      project_id:'', // 현장 ID
      area_top_id:'', // 장소1 ID
      area_bottom_id:0, // 장소3 ID
      area_risk_use_state:false, // 사용여부
      area_top_name:'', // 장소1
      gps_state:0 // GPS 등록여부 / 1 등록, 0 미등록
    })
  }

  async CtgoRisk() {
    this.resCtgoRisk = await this.connect.run('/category/risk/type/get',{},{});
    if(this.resCtgoRisk.rsCode === 0) {};
  }
}
