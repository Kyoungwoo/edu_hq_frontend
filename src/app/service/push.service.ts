import { ModalController } from '@ionic/angular';
import { DeviceService } from 'src/app/basic/service/core/device.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { Injectable } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { EmergencyPopupComponent } from '../page/main/user/emergency-popup/emergency-popup.component';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private device: DeviceService,
    private modal: ModalController
  ) {
    
  }

  async init(){
    try {
      await this.addListeners();
      console.log('addListeners end');
      await this.registerNotifications();
      console.log('registerNotifications end');
      await this.getDeliveredNotifications();
      console.log('getDeliveredNotifications end');
    } catch(e) {
      console.log('push notification not supported');
    }
  }

  /**
   * @function InsertRegister(): Register를 등록하는 메서드
   */
  async InsertRegister(token) {
    let register_data = {
      platform_type: this.device.platform_type, // 안드 1 / ios 2 / web 3
      register_id: token // 등록 ID
    }
    const res = await this.connect.run('/user/push/register/insert', register_data);
    switch (res.rsCode) {
      case 0:
        break;
      default:
        this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }

  /**
   * @function EmergencyPop(): 긴급요청 팝업
   */
   async EmergencyPop(message) {
    const _modal = await this.modal.create({
      component:EmergencyPopupComponent,
      backdropDismiss: false,
      cssClass:"emergency-modal",
      componentProps: {
        message: message
      }
    });
    _modal.present();
  }



  addListeners = async () => {
    // registration token을 받는부분
    await PushNotifications.addListener('registration', token => {
      console.info('Registration token: ', token.value);
      if(token?.value) this.InsertRegister(token.value);
    });
  
    // registration token을 못받아서 에러가 낫을경우
    await PushNotifications.addListener('registrationError', err => {
      console.error('Registration error: ', err.error);
    });
  
    // 푸시를 받았을경우
    await PushNotifications.addListener('pushNotificationReceived', notification => {
      console.log('Push notification received: ', notification);
      this.EmergencyPop(notification.body);
    });
  
    await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      console.log('Push notification action performed', notification.actionId, notification.inputValue);
    });
  }
  
  registerNotifications = async () => {
    let permStatus = await PushNotifications.checkPermissions();
  
    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }
  
    if (permStatus.receive !== 'granted') {
      throw new Error('User denied permissions!');
    }
  
    await PushNotifications.register();
  }
  
  getDeliveredNotifications = async () => {
    const notificationList = await PushNotifications.getDeliveredNotifications();
    console.log('delivered notifications', notificationList);
  }
}
