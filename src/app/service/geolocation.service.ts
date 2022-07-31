import { Injectable } from '@angular/core';
import { GeolocationPermissionOptions, GeolocationAlertOptions, GeololocationUpdatesOptions, GeolocationNotificationOptions, GeolocationConnectOptions } from '../basic/plugin/geolocation.definitions';
import { Geolocation } from '../basic/plugin/geolocation.plugin';
import { UserService } from '../basic/service/core/user.service';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(
    private user: UserService
  ) { }

  async startLocationUpdates() {
    try {
      const permissionOptions:GeolocationPermissionOptions = {
        promptAlert: null,
        deniedAlert: null
      }
      const promptAlert:GeolocationAlertOptions = {
        header: '위치권한 필요',
        message: '이 앱은 원활한 사용을 위해 위치권한을 필요로 합니다.\n위치 권한을 허용해주세요.',
        cancelText: '거부',
        okText: '확인'
      }
      const deniedAlert:GeolocationAlertOptions = {
        header: '위치권한 거부됨',
        message: '이 앱은 원활한 사용을 위해 위치권한을 필요로 합니다.\n[권한 -> 위치]로 이동하여 권한을 허용해주세요.',
        cancelText: '거부',
        okText: '이동'
      }
      permissionOptions.promptAlert = promptAlert;
      permissionOptions.deniedAlert = deniedAlert;
      const { state } = await Geolocation.requestPermission(permissionOptions);
      
      if(state !== 'granted') return;
      
      const updatesOptions:GeololocationUpdatesOptions = {
        background: null,
        notification: null,
        connect: null
      }
      const background:boolean = true;
      const notification:GeolocationNotificationOptions = {
        channelID: 'LOCATION_SERVICE_CHANNEL',
        channelName: '근로자 안전 위치 관리',
        header: '근로자 안전 관리 시스템',
        message: '안전한 근무를 위해 위치관리 시스템을 작동 중 입니다.',
        icon: 'drawable/default_dark'
      }
      const connect:GeolocationConnectOptions = {
        url: 'https://api.lh-skeeper.or.kr/work_project/gps/call',
        authorization: `Bearer ${this.user.authToken.login_token}`,
        body: {
          latitude: '@latitude',
          longitude: '@longitude'
        }
      }
      updatesOptions.background = background;
      updatesOptions.notification = notification;
      updatesOptions.connect = connect;
  
      Geolocation.startLocationUpdates(updatesOptions, ({latitude, longitude}) => {
          console.log(latitude, longitude);
      });
    } catch(e) {}
  }
  stopLocationUpdates() {
      try {
        Geolocation.stopLocationUpdates();
      } catch(e) {}
  }
}
