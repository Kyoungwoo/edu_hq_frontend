import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { StorageService } from 'src/app/basic/service/core/storage.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { DaumService } from 'src/app/basic/service/util/daum.service';
import { ProjectAreaSetComponent } from 'src/app/component/modal/project-area-set/project-area-set.component';
import { SupervisionSearchComponent } from 'src/app/component/modal/supervision-search/supervision-search.component';
import { OrganizationSelectPage } from '../organization-select/organization-select.page';

export interface COMPANY_DATA {
  company_type: string,
  company_id:any
}

export interface GPS_COORDINATE_DATA {
  gps_latitude:[];
}
export class ProjectDetail {
  create_user_id: number; // 작성자 유저 ID
  hq_business_name: string; // 사업본부 (null일 수 있습니다)
  construction_amount: number; // 공사금액
  create_user_name: string; // 작성자å
  project_address: string; // 주소
  hq_regional_id: number; // 지역본부 ID
  hq_business_id: number; // 사업본부 ID
  project_code: string; // 현장코드
  hq_regional_name: string; // 지역본부
  project_name: string; // 현장명
  contract_start_date: string; // 공사기간 ~å
  contract_end_date: string; // ~ 공사기간
  ctgo_business_field_name: string; // 사업분야
  project_id: number; // 현장 ID
  construction_content: string; // 공사내용
  project_postal_code: string; // 우편번호
  project_detail_address: string; // 상세주소
  ctgo_business_field_id: number; // 사업분야 ID
  create_date: string; // 작성일
  gps_state: number; // 1, 현장영역 설정됨, 0 현장영역 설정되지않음
  project_use_state: number; // 1 사용, 0 미사용
  project_file_data: FutItem[] = [];
  file: (File | Blob)[] = [];
  file_json: FileJson = new FileJson();
  supervision_name: string;
  add_gps_state_con:string
  gps_state_con: string;
  company_data: COMPANY_DATA[] = [];
  gps_coordinate_data:object;
}
// {"gps_latitude":[37.40428515657017,37.4042804438199,37.404136280751516,37.40413648328292],
// "gps_longitude":[127.1072361945521,127.10746490257915,127.10746469669094,127.10724162994126]}

@Component({
  selector: 'app-scene-edit',
  templateUrl: './scene-edit.page.html',
  styleUrls: ['./scene-edit.page.scss'],
})
export class SceneEditPage implements OnInit {

  @Input() project_id;

  contractor_id = [];
  mapData = {
    gps_latitude:[]
  }

  organization_data = {
    company_type: '',
    company_id:[]
  }
  supervision_data = {
    company_type: '',
    company_id:[]
  }
  today = this.Date.today();
  title: string;
  returnData: [];
  form: ProjectDetail = new ProjectDetail();

  ctgo_Business:Array <{
    ctgo_business_field_name:string, // 사업분야명
    ctgo_business_field_id:number // 사업분야 ID
  }> = [];

  organization = {
    id: 0,
    name: '',
    type: '지역' || '사업'
  }
  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private daum: DaumService,
    private Date: DateService,
    public user: StorageService
  ) { }

  ngOnInit() {
    this.ctgoBusiness();
    if (this.project_id) {
      this.getItem();
      this.title = '상세';
    } else {
      this.title = '등록';
    }
  }

  async getItem() {
    const res = await this.connect.run('/project/detail', {
      project_id: this.project_id
    }, {
      parse: ['project_file_data']
    });
    if (res.rsCode === 0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      }
      console.log("this.form",this.form);
      console.log(this.form);
      if (res.rsObj.gps_state === 1) {
        this.form.gps_state_con = '설정됨'
      } else {
        this.form.gps_state_con = '설정 안됨'
      }
      this.organization.name = res.rsObj.hq_regional_name + ', ' + res.rsObj.hq_business_name;
    }
  }

  async sceneInsert() {
    console.log("ㅁㅇㄴㄹㅁㄴㅇㄹㅁㄴㅇㄹs",this.contractor_id);
    this.organization_data = {
      company_type: '원청사',
      company_id:this.contractor_id
    }
    console.log("this.organization_data",this.organization_data);
    if(this.contractor_id.length) {
      this.form.company_data.push(
        {
          company_type:'원청사',
          company_id:this.contractor_id
        }
      )
    }
    this.form.gps_coordinate_data = this.mapData;
    const res = await this.connect.run('/project/insert', this.form);
    if (res.rsCode === 0) {
    }
  }

  async organizationSel() {
    const modal = await this._modal.create({
      component: OrganizationSelectPage
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    console.log("data", data);
    if (data) {
      console.log("조직기구 모달 데이터", data);
      this.organization.name = data.regName + ', ' + data.busName;
      this.form.hq_regional_id = data.regId;
      this.form.hq_business_id = data.busId;
    }
  }

  async supervisionSel() {
    const modal = await this._modal.create({
      component: SupervisionSearchComponent
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    console.log("감리사 모달 데이터", data);
    if (data) {
      let company_name_data = [];
      let compnay_ids = [];
      console.log(this.form.company_data);
      data.forEach(item => {
        compnay_ids.push(item.company_id);
        company_name_data.push(item.company_name);
      });
      this.form.company_data.push({
        company_type: '감리사',
        company_id:compnay_ids
      })
      // this.comapny_data.company_type = '원청사'
      console.log("compnay_ids",this.supervision_data);
      this.form.supervision_name = company_name_data.toString();
      console.log("this.form.supervision_name",this.form.supervision_name);
      this.form.supervision_name = this.form.supervision_name.substring(0, this.form.supervision_name.length - 1);
    }
  }

  address() {
    // this.daum.open().then((item) => { if (item) this.form.project_address = '[' + item.zoneCode + '] ' + item.address; });
    this.daum.open().then((item) => {
      if(item) {
        this.form.project_address = item.address;
        this.form.project_postal_code = item.zoneCode;
      }
    })
  }

  async project_area_set() {
    let map = [];
    // this.gps_latitude = [];
    console.log("mapinput",map);
    if (!this.project_id) {
      const modal = await this._modal.create({
        component: ProjectAreaSetComponent,
        componentProps:
        { returnData: this.returnData }
      });
      modal.present();
      const { data } = await modal.onDidDismiss();
      console.log("data",data);
      console.log("map",map);
      if (data) {
        this.form.add_gps_state_con = '설장 됨';
        this.returnData = data
        data.forEach(item => {
          map.push(item.x, item.y);
        })
        this.mapData.gps_latitude.push(map);
        console.log("this.mapData",this.mapData);
      }
    }
  }

  async ctgoBusiness() {
    const res = await this.connect.run('/category/business_field/get',{},{});
    if(res.rsCode === 0) {
      this.ctgo_Business = res.rsMap;
    }
  }
  
}
