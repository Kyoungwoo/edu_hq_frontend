import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GpsCoordinateData } from 'src/app/basic/component/input/naver-map/naver-map.component';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { DaumService } from 'src/app/basic/service/util/daum.service';
import { ProjectAreaSetComponent } from 'src/app/component/modal/project-area-set/project-area-set.component';
import { OrganizationSelectPage } from '../organization-select/organization-select.page';

export interface CompanyData {
  company_type: string,
  company_id: any
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
  add_gps_state_con: string;
  gps_state_con: string;
  company_data: CompanyData[] = [];
  gps_coordinate_data = new GpsCoordinateData();
}

@Component({
  selector: 'app-scene-edit',
  templateUrl: './scene-edit.page.html',
  styleUrls: ['./scene-edit.page.scss'],
})
export class SceneEditPage implements OnInit {

  @Input() project_id;

  contractor_id = null;
  supervision_id = null;

  organization_data = {
    company_type: '',
    company_id: []
  }
  supervision_data = {
    company_type: '',
    company_id: []
  }
  today = this.Date.today();
  title: string;
  returnData: [];
  form: ProjectDetail = new ProjectDetail();

  ctgo_Business: Array<{
    ctgo_business_field_name: string, // 사업분야명
    ctgo_business_field_id: number // 사업분야 ID
  }> = [];

  organization = {
    id: 0,
    name: '',
    type: '지역' || '사업'
  }

  roleCheck:boolean = true;

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private daum: DaumService,
    private Date: DateService,
    public user: UserService,
    private alert: AlertService,
    private changeRef: ChangeDetectorRef,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.ctgoBusiness();
    if (this.project_id) {
      this.getItem();
      this.title = '상세';
     
    } else {
      this.title = '등록';
      this.roleCheck = false;

      this.contractor_id = [];
      this.supervision_id = [];
    }
  }

  async getItem() {
    const res = await this.connect.run('/project/detail', {
      project_id: this.project_id
    }, {
      parse: ['project_file_data', 'gps_coordinate_data']
    });
    if (res.rsCode === 0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      }
      if((this.form.create_user_id === this.user.userData.user_id) || 
      (this.user.userData.user_role === 'LH_HEAD')) {
        this.roleCheck = false;
      }
      if (res.rsObj.company_data) {
        this.contractor_id = [];
        this.supervision_id = [];
        let josncompany = res.rsObj.company_data ? JSON.parse(res.rsObj.company_data) : [];
        for (let i = 0; i < josncompany.length; i++) {
          if (josncompany[i].company_contract_type === '원청사') {
            for (let x = 0; x < josncompany[i].company_data.length; x++) {
              this.contractor_id.push(josncompany[i].company_data[x].company_id);
            }
          } else {
            for (let x = 0; x < josncompany[i].company_data.length; x++) {
              this.supervision_id.push(josncompany[i].company_data[x].company_id);
            }
          }
        }
      }
      // this.contractor_id = "테스트";
      if (res.rsObj.gps_state === 1) {
        this.form.gps_state_con = '설정됨'
      } else {
        this.form.gps_state_con = '설정 안됨'
      }
      this.organization.name = res.rsObj.hq_regional_name + ', ' + res.rsObj.hq_business_name;

      this.changeRef.detectChanges();
    }
  }

  async sceneInsert() {
    // if(!this.form.hq_regional_id) return this.toast.present({message:'지역본부를 설정해 주세요.', color:'warning'});
    // if(!this.form.hq_business_id) return this.toast.present({message:'사업본부를 설정해 주세요.', color:'warning'});
    if(!this.form.project_name) return this.toast.present({message:'현장명을 입력해 주세요.', color:'warning'});
    // if(!this.contractor_id.length) return this.toast.present({message:'원창사를 선택해 주세요.', color:'warning'});
    // if(!this.supervision_id.length) return this.toast.present({message:'감리사를 선택해 주세요.', color:'warning'});
    if(!this.form.contract_start_date) return this.toast.present({message:'공사시작를 설정해 주세요.', color:'warning'});
    if(!this.form.contract_end_date) return this.toast.present({message:'공사종료를 설정해 주세요.', color:'warning'});
    if(!this.form.construction_amount) return this.toast.present({message:'공사금액를 설정해 주세요.', color:'warning'});
    if(!this.form.ctgo_business_field_id) return this.toast.present({message:'공사분야를 설정해 주세요.', color:'warning'});
    if(!this.form.project_address) return this.toast.present({message:'주소를 설정해 주세요.', color:'warning'});
    if(!this.form.gps_coordinate_data) return this.toast.present({message:'현장영역를 설정해 주세요.', color:'warning'});
    const alert = await this.alert.present({
      message: '저장 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            this.form.company_data = [];
            this.form.company_data.push({
              company_type: '원청사',
              company_id: this.contractor_id
            });
            this.form.company_data.push({
              company_type: '감리사',
              company_id: this.supervision_id
            });
            if(this.form.gps_coordinate_data) {
              this.form.gps_state = 1;
            }
            // this.form.gps_coordinate_data = this.mapData;
            const res = await this.connect.run('/project/insert', this.form);
            if (res.rsCode === 0) { 
              this._modal.dismiss('Y');
            }
          }
        }
      ]
    });
    alert.present();
  }
  async sceneUpdate() {
    this.form.company_data = []
    // if(!this.form.hq_regional_id) return this.toast.present({message:'지역본부를 설정해 주세요.',color:'warning'});
    // if(!this.form.hq_business_id) return this.toast.present({message:'사업본부를 설정해 주세요.',color:'warning'});
    if(!this.form.project_name) return this.toast.present({message:'현장명을 입력해 주세요.',color:'warning'});
    // if(!this.contractor_id.length) return this.toast.present({message:'원창사를 선택해 주세요.',color:'warning'});
    // if(!this.supervision_id.length) return this.toast.present({message:'감리사를 선택해 주세요.',color:'warning'});
    if(!this.form.contract_start_date) return this.toast.present({message:'공사시작를 설정해 주세요.',color:'warning'});
    if(!this.form.contract_end_date) return this.toast.present({message:'공사종료를 설정해 주세요.',color:'warning'});
    if(!this.form.construction_amount) return this.toast.present({message:'공사금액를 설정해 주세요.',color:'warning'});
    if(!this.form.ctgo_business_field_id) return this.toast.present({message:'공사분야를 설정해 주세요.',color:'warning'});
    if(!this.form.project_address) return this.toast.present({message:'주소를 설정해 주세요.',color:'warning'});
    if(!this.form.gps_coordinate_data) return this.toast.present({message:'현장영역를 설정해 주세요.',color:'warning'});
    // console.log(this.form.gps_coordinate_data);
    const alert = await this.alert.present({
      message: '수정 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            this.form.company_data.push({
              company_type: '원청사',
              company_id: this.contractor_id
            });
            this.form.company_data.push({
              company_type: '감리사',
              company_id: this.supervision_id
            });
            if(this.form.gps_coordinate_data) {
              this.form.gps_state = 1;
            }
            
            const res = await this.connect.run('/project/update', this.form, {});
            if (res.rsCode === 0) {
              this._modal.dismiss('Y');
            }
          }
        }
      ]
    });
    alert.present();
  }

  async organizationSel() {
    // if(!this.roleCheck){
      const modal = await this._modal.create({
        component: OrganizationSelectPage
      });
      modal.present();
      const { data } = await modal.onDidDismiss();
      if (data) {
        this.organization.name = data.level1selectedItem.hq_regional_name + ', ' + data.level2selectedItem.hq_business_name;
        this.form.hq_regional_id = data.level1selectedItem.hq_regional_id;
        this.form.hq_business_id = data.level2selectedItem.hq_business_id;
      }
    // }
  }

  address() {
    this.daum.open().then((item) => {
      if (item) {
        this.form.project_address = item.address;
        this.form.project_postal_code = item.zoneCode;
      }
    })
  }

  async project_area_set() {
    // if(!this.roleCheck) {
      const modal = await this._modal.create({
        component: ProjectAreaSetComponent,
        componentProps:{ 
          gps_coordinate_data: this.form.gps_coordinate_data,
          disabled: this.roleCheck
        }
      });
      modal.present();
      const { data } = await modal.onDidDismiss();
      if(data) {
        if(this.project_id) {
          this.form.gps_state = 1;
        }
        this.form.gps_coordinate_data = data;
      }
    // }
  }

  async ctgoBusiness() {
    const res = await this.connect.run('/category/business_field/get', {}, {});
    if (res.rsCode === 0) {
      this.ctgo_Business = res.rsMap;
    }
  }

}
