import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { SceneEditPage } from '../scene-edit/scene-edit.page';

@Component({
  selector: 'app-scene-list',
  templateUrl: './scene-list.page.html',
  styleUrls: ['./scene-list.page.scss'],
})
export class SceneListPage implements OnInit {

  form = {
    hq_business_ids:[],
    hq_regional_ids:[],
    search_text:'',
    limit_no:0,
  }
  res:ConnectResult<{
    contract_end_date:string, // ~ 공사기간
    hq_business_name: string, // 사업본부
    project_id: Number, // 현장 ID
    hq_regional_id: Number, // 지역본부 ID
    hq_business_id: Number, // 사업본부 ID
    project_code: string, // 현장 코드
    hq_regional_name: string, // 지역본부
    master_company_list: string, // 원청사목록
    project_name: string, // 현장명
    super_company_list: string, // 감리사목록
    contract_start_date: string, // 공사기간 ~
    project_use_state: Number, // 1 사용, 0 미사용
    update_date:string, // 최근 업데이트
    state:boolean
  }>;
  

  constructor(
    private modal:ModalController,
    private connect:ConnectService,
    private toast:ToastService,
    private date:DateService,
    private alert:AlertService
  ) { }

  ngOnInit() {
    this.getList();
  }

  async getList() {
    const res = await this.connect.run('/project/list',this.form,{
      loading:'현장 불러온느중'
    });
    if(res.rsCode === 0){
      this.res = res;
    } else { 
      this.connect.error('현장 불러오기 실패',res);
    }
  }

  async use_submit() {
    
    let project_use_state_data = [];
    this.res.rsMap.forEach(item => {
      if(item.state){
        project_use_state_data.push({
          project_id:item.project_id,
          project_use_state:item.project_use_state
        });
      }
    })
    console.log(project_use_state_data);
    const res = await this.connect.run('/project/use/update',{project_use_state_data:project_use_state_data});
    if(res.rsCode === 0) {
      this.toast.present({message:'사용여부가 변경되었습니다.',position:'bottom',color:'primary'});
      this.getList();
    } else {
      this.connect.error('변경실패',res);
    }
  }
  async edit(project_id?) {
    const modal = await this.modal.create({
      component:SceneEditPage,
      componentProps: project_id
    });
    modal.present();
  }

  async changeUse(item){
    let maxdate = this.date.dirrerence(item.contract_end_date,this.date.today())
    if(maxdate < 0) {
      await this.alert.present({
        header:'안내',
        message:'공사 기간 만료 전에는 미사용으로 변경할 수 없습니다.'
      });
    } else { 
      item.state = true;
      // if(item.state) {
      //   this.alert.present({
      //     header:'안내',
      //     message:'미사용으로 변경시, 모든 현장 조회 화면, 현장 선택 화면에 노출되지 않습니다.'
      //     +'근로자의 경우 소속 정보에는 노출되지 않으나, 근로 이력에는 현장 정보가 남아있습니다.'
      //   })
      // }
    }
  }
}
