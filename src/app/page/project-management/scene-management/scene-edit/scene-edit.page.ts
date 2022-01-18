import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { OrganizationSelectPage } from '../organization-select/organization-select.page';

@Component({
  selector: 'app-scene-edit',
  templateUrl: './scene-edit.page.html',
  styleUrls: ['./scene-edit.page.scss'],
})
export class SceneEditPage implements OnInit {

  @Input() project_id;

  title:string

  form = {
    list: [] as FutItem[],
    file: [] as (File | FileBlob)[],
    file_json: {
      insert: [],
      update: [],
      delete: []
    } as FileJson
  }

  editItem:ConnectResult<{
    create_user_id: number, // 작성자 유저 ID
    hq_business_name: string, // 사업본부 (null일 수 있습니다)
    construction_amount: number, // 공사금액
    create_user_name: string, // 작성자
    project_address: string, // 주소
    hq_regional_id: number, // 지역본부 ID
    hq_business_id: number, // 사업본부 ID
    project_code: string, // 현장코드
    hq_regional_name: string, // 지역본부
    project_name: string, // 현장명
    contract_start_date: string, // 공사기간 ~
    project_file_data:[],
    contract_end_date: string, // ~ 공사기간
    ctgo_business_field_name:string, // 사업분야
    project_id: number, // 현장 ID
    construction_content: string, // 공사내용
    project_postal_code: string, // 우편번호
    project_detail_address: string, // 상세주소
    ctgo_business_field_id: number, // 사업분야 ID
    create_date: string, // 작성일
    gps_state: number, // 1, 현장영역 설정됨, 0 현장영역 설정되지않음
    project_use_state: number, // 1 사용, 0 미사용
  }>;

  organization = {
    id:0,
    name:'',
    type:'지역' || '사업'
  }
  constructor(
    private connect:ConnectService,
    private _modal:ModalController
  ) { }

  ngOnInit() {
    console.log(this.project_id);
    if(this.project_id) {
      this.getItem();
      this.title = '상세'
    } else {
      this.title = '등록'
    }
  }

  async getItem() {
    this.editItem = await this.connect.run('/project/detail',{project_id:this.project_id});
    if(this.editItem.rsCode === 0) {
      console.log(this.editItem);
    } else { 
      this.connect.error('불러오기 실패',this.editItem);
    }
  }
  async organizationSel(){
    const modal = await this._modal.create({
      component:OrganizationSelectPage
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      console.log(data);
      this.organization.name = data.regName + ', ' + data.busName;
      this.editItem.rsObj.hq_regional_id = data.regId;
      this.editItem.rsObj.hq_business_id = data.subId;
    }
  }

}
