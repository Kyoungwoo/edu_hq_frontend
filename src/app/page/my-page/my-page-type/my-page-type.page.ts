import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FutItem, FileBlob, FileJson } from 'src/app/basic/service/core/file.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

/** 기본 정보 class */
class BasicForm {
  account_id:string = null; // 아이디
  user_name:string = null; // 유저 이름
  user_gender:string = null; // 유저 성별
  user_email:string = null; // 유저 이메일
  user_birth:string = null; // 유저 생년월일
  user_phone:string = null; // 유저 연락처
  ctgo_country_id:number = null; // 국적 아이디
  ctgo_country_name:string = null; // 국적 이름

  user_profile_file_data:FutItem[] = []; // 유저 프로필 데이터
  file:(File|FileBlob)[] = []; // 파일
  file_json:FileJson = new FileJson(); // 파일 JSON

  update_date:string = null;
}
@Component({
  selector: 'app-my-page-type',
  templateUrl: './my-page-type.page.html',
  styleUrls: ['./my-page-type.page.scss'],
})
export class MyPageTypePage implements OnInit {

  basicForm = new BasicForm();

  constructor(
    private connect: ConnectService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.getBasic();
  }

  /** 기본정보 가져오기 */
  private async getBasic() {
    const res = await this.connect.run('/mypage/basic/detail', {}, { parse: ['user_profile_file_data'] });
    if(res.rsCode === 0) {
      this.basicForm = {
        ...this.basicForm,
        ...res.rsObj
      }
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

}
