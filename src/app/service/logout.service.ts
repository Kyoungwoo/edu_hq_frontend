import { ConnectService } from './../basic/service/core/connect.service';
import { Injectable } from '@angular/core';
import { DeviceService } from '../basic/service/core/device.service';
import { UserData, UserService } from '../basic/service/core/user.service';
import { AlertService } from '../basic/service/ionic/alert.service';
import { NavService } from '../basic/service/ionic/nav.service';
import { GeolocationService } from './geolocation.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(
    private device: DeviceService,
    private alert: AlertService,
    private nav: NavService,
    private user: UserService,
    private gps: GeolocationService,
    private connect: ConnectService
  ) { }

  async logout() {
    this.alert.present({
      header: '로그아웃',
      message: '로그아웃 하시겠습니까?',
      buttons: [
        { text: '취소' },
        { text: '로그아웃', handler: async() => {
          if(this.device.platform_type < 3) {
            this.gps.stopLocationUpdates();
            await this.nav.navigateRoot('/login-mobile', { animated: true, animation: 'fadeIn' });
          }
          else {
            await this.nav.navigateRoot('/login', { animated: true, animation: 'fadeIn' });
          }
          this.user.clear();
        }}
      ]
    })
  }

  async getProjectList(data:UserData){
    
    let res = await this.connect.run('/category/certify/search_my_project/get', {search_text: ''});
    console.log('getProjectList - 두러옴', res);
    if (res.rsCode === 0) {
      if(res?.rsMap?.length){
        data.belong_data.project_original_id = JSON.parse(JSON.stringify(data.belong_data.project_id));
        data.belong_data.project_original_name = JSON.parse(JSON.stringify(data.belong_data.project_name));
        data.belong_data.project_id = res.rsMap[0].project_id;
        data.belong_data.project_name = res.rsMap[0].project_name;
        console.log('getProjectList - ', data);
      }
    }

    return data;
  }
}
