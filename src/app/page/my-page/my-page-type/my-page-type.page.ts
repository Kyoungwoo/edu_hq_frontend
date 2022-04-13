import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FutItem, FileBlob, FileJson } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
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

  userType:'LH' | 'SUPER' | 'MASTER' | 'PARTNER' | 'WORKER' = null;

  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private alert: AlertService,
    public user: UserService,
    private nav: NavService
  ) { }

  ngOnInit() {
    this.getForm();
  }

  /**
   * 데이터 구성 파트
   */
   getForm() {
     /** 유저 타입 */
    const { user_type, user_role } = this.user.userData;
    if(user_type === 'COMPANY') {
      if(user_role.startsWith('MASTER')) {
        this.userType = 'MASTER';
      }
      else {
        this.userType = 'PARTNER';
      }
    }
    else {
      this.userType = user_type;
    }
  }

  /** 회원 탈퇴 */
  async withdrawal() {
    this.alert.present({
      header: '회원탈퇴를 진행합니다.',
      message: `
        □ 회원 탈퇴 시 시스템 이용이 불가능 하며 취소가 불가능 합니다.\n
        □ 회원 탈퇴 후 마지막 출역 현장의 준공일로 부터 3년 후 까지 정보 보관 후 자동 삭제 됩니다.\n
        □ 회원 탈퇴를 원할 시 비밀번호를 입력해주세요.
      `,
      inputs: [
        { name: 'account_token', placeholder: '비밀번호', type: 'password' }
      ],
      buttons: [
        { text: '취소' },
        { text: '탈퇴하기', handler: this.withdrawalHandler.bind(this) }
      ]
    });
  }
  async withdrawalHandler({ account_token }) {
    const res = await this.connect.run('/mypage/user/delete', {
      account_token
    });
    if(res.rsCode === 0) {
      this.user.clear();
      this.nav.navigateRoot('/login', { 
        force: true, 
        animated: true
      });

      this.alert.present({
        header: '회원 탈퇴가 완료되었습니다.',
        message: '그동안 이용해주셔서 감사합니다.',
        buttons: [
          { text: '확인' }
        ]
      });
    } else {
      this.toast.present({ color: 'warning', message: '비밀번호가 올바르지 않습니다.' });
    }
  }
  
}
