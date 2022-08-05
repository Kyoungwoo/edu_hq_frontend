import { async } from '@angular/core/testing';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';


export class HeavyEquipDetail {
    ctgo_construction_id: number;
    partner_company_name: string;
    rental_start_date: string;
    ctgo_construction_name: string;
    ctgo_machinery_id: number;
    master_company_id: number;
    machinery_id: number;
    project_name: string;
    master_company_name: string;
    rental_end_date: string;
    project_id: number;
    partner_company_id: number;
    rental_price: number;
    machinery_regist_no: string;
    rental_company_name: string;
    ctgo_machinery_name: string;
    machinery_file: (File | Blob)[] = [];
    machinery_json : FileJson = new FileJson();
    create_user_id:number;

    plan_file_data: FutItem[] = [];
    regist_file_data: FutItem[] = [];
    rental_file_data: FutItem[] = [];
    etc_file_data: FutItem[] = [];
    plan_file: (File | Blob)[] = [];
    regist_file: (File | Blob)[] = [];
    rental_file: (File | Blob)[] = [];
    etc_file: (File | Blob)[] = [];
    plan_json : FileJson = new FileJson();
    regist_json : FileJson = new FileJson();
    rental_json : FileJson = new FileJson();
    etc_json : FileJson = new FileJson();
}

export class HeavyEquipDetail_Theme {
  ctgo_construction_id: number = 0;
  partner_company_name: string = '';
  rental_start_date: string = '';
  ctgo_construction_name: string = '';
  ctgo_machinery_id: number = 0;
  master_company_id: number = 0;
  machinery_id: number = 0;
  project_name: string = '';
  master_company_name: string = '';
  rental_end_date: string = '';
  project_id: number = 0;
  partner_company_id: number = 0;
  rental_price: number = 0;
  machinery_regist_no: string = '';
  rental_company_name: string = '';
  ctgo_machinery_name: string = '';
  machinery_file: (File | Blob)[] = [];
  machinery_json : FileJson = new FileJson();
  create_user_id:number = 0;
}

@Component({
  selector: 'app-heavy-equip-edit',
  templateUrl: './heavy-equip-edit.page.html',
  styleUrls: ['./heavy-equip-edit.page.scss'],
})
export class HeavyEquipEditPage implements OnInit {

  @Input() machinery_id;
  @Input() list_data;
  
  updateStatus: boolean = false;

  form:HeavyEquipDetail = new HeavyEquipDetail();
  selectList = [];

  constructor(
    private connect: ConnectService,
    private alert: AlertService,
    private date: DateService,
    private toast: ToastService,
    public user: UserService,
    private _modal: ModalController,
  ) { }

  ngOnInit() {
    console.log(this.list_data);
    this.form = {
      ...this.form,
      ...this.list_data
    };
    if(this.machinery_id) {
      this.updateStatus = true;
      this.get();
    } else {
      this.updateStatus = false;
      
    }
  }

  SetListData(){
    this.form.project_id = this.list_data.project_id;
    this.form.master_company_id = this.list_data.master_company_id;
    this.form.partner_company_id = this.list_data.partner_company_id;
  }

  async get() { //상세보기
    const res = await this.connect.run('/machinery/get', { 
      machinery_id: this.machinery_id 
    }, { loading: true, parse: ['etc_file_data','rental_file_data','regist_file_data','plan_file_data'] });
    if(res.rsCode ===  0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      }
    }
  }

  Heavyedit() {
    this.updateStatus = false;
  }

  async Heavydelete() {
    const alert = await this.alert.present({
      message: '선택된 장비 정보가 모두 삭제됩니다. 정말 삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            const res = await this.connect.run('/machinery/delete', {
              machinery_ids : [this.machinery_id]
            });
            if (res.rsCode === 0) {
              this._modal.dismiss('Y');
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          }
        }
      ]
    })
  }

  async Heavysave() {
    let state = await this.UpdateValidation();
    if(state) return;
    this.alert.present({
      message: '저장하시겠습니까?',
      buttons: [
        { text: '아니오' },
        {
          text: '예',
          handler: async () => {
            await this.TransFileData();
            let json_obj = new HeavyEquipDetail_Theme();

            for(let key in json_obj){json_obj[key] = this.form[key];}

            const res = await this.connect.run('/machinery/insert', json_obj, {});
            if (res.rsCode === 0) {
              this._modal.dismiss('Y');
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          }
        }
      ]
    })
  }

  async Heavyupdate() { 
    let state = await this.UpdateValidation();
    if(state) return;
    this.alert.present({
      message:'수정 하시겠습니까?',
      buttons:[
        { text:'아니요' },
        {
          text:'예',
          handler: async() => {
            await this.TransFileData();
            let json_obj = new HeavyEquipDetail_Theme();

            for(let key in json_obj){json_obj[key] = this.form[key];}

            const res = await this.connect.run('/machinery/update', json_obj);
            if(res.rsCode === 0) {
              this._modal.dismiss('Y');
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          }
        }
      ]
    });
  }

  async UpdateValidation(){
    if(!this.form.project_id){
      this.toast.present({message:'현장명을 입력해주세요.',color:'warning'});
      return true;
    }
    if(!this.form.partner_company_id){
      this.toast.present({message:'업체명을 입력해주세요.',color:'warning'});
      return true;
    }
    if(!this.form.ctgo_machinery_id){
      this.toast.present({message:'중장비를 입력해주세요.',color:'warning'});
      return true;
    }
    if(!this.form.machinery_regist_no){
      this.toast.present({message:'등록번호를 입력해주세요.',color:'warning'});
      return true;
    }
    // if(!this.form.ctgo_construction_id){
    //   this.toast.present({message:'공종을 입력해주세요.',color:'warning'});
    //   return true;
    // }
    if(!this.form.rental_company_name){
      this.toast.present({message:'대여업체를 입력해주세요.',color:'warning'});
      return true;
    }
    if(!this.form.rental_start_date){
      this.toast.present({message:'보증기간을 입력해주세요.',color:'warning'});
      return true;
    }
    if(!this.form.rental_end_date){
      this.toast.present({message:'보증기간을 입력해주세요.',color:'warning'});
      return true;
    }
    if(!this.form.rental_price){
      this.toast.present({message:'보증금액을 입력해주세요.',color:'warning'});
      return true;
    }
    return false;
  }

  /**
   * @function TransFileData(): 4개의 파일을 통합해줍니다.
   */
  async TransFileData(){
    // 초기화
    this.form.machinery_json.insert = [];

    await this.form.plan_file.forEach(async(item) => { await this.form.machinery_file.push(item) });
    await this.form.plan_json.insert.forEach(async(item) => { await this.form.machinery_json.insert.push(item) });
    await this.form.plan_json.delete.forEach(async(item) => { await this.form.machinery_json.delete.push(item) });

    await this.form.regist_file.forEach(async(item) => { await this.form.machinery_file.push(item) });
    await this.form.regist_json.insert.forEach(async(item) => { await this.form.machinery_json.insert.push(item) });
    await this.form.regist_json.delete.forEach(async(item) => { await this.form.machinery_json.delete.push(item) });

    await this.form.rental_file.forEach(async(item) => { await this.form.machinery_file.push(item) });
    await this.form.rental_json.insert.forEach(async(item) => { await this.form.machinery_json.insert.push(item) });
    await this.form.rental_json.delete.forEach(async(item) => { await this.form.machinery_json.delete.push(item) });

    await this.form.etc_file.forEach(async(item) => { await this.form.machinery_file.push(item) });
    await this.form.etc_json.insert.forEach(async(item) => { await this.form.machinery_json.insert.push(item) });
    await this.form.etc_json.delete.forEach(async(item) => { await this.form.machinery_json.delete.push(item) });

    this.form.machinery_json.insert.forEach((item, index) => {item.order_no = index+1});
  }

  /**
   * @function btnPromise(): 권한에 따른 버튼활성화 메서드
   * @param type - 버튼의 type
   * @returns true or false
   */
  btnPromise(type){
    let state = false;
    switch(type){
      case 'save':
        if(this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_type == 'COMPANY' || this.user.userData.user_id == this.form.create_user_id) state = true;
        break;
      case 'delete':
        if(this.user.userData.user_role == 'LH_HEAD' || this.user.userData.user_role == 'MASTER_HEAD' || this.user.userData.user_id == this.form.create_user_id) state = true;
        break;
    }
    return state;
  }
}

// plan_file_data: FutItem[] = [];
// regist_file_data: FutItem[] = [];
// rental_file_data: FutItem[] = [];
// etc_file_data: FutItem[] = [];

// plan_file: (File | Blob)[] = [];
// regist_file: (File | Blob)[] = [];
// rental_file: (File | Blob)[] = [];
// etc_file: (File | Blob)[] = [];

// plan_json : FileJson = new FileJson();
// regist_json : FileJson = new FileJson();
// rental_json : FileJson = new FileJson();
// etc_json : FileJson = new FileJson();