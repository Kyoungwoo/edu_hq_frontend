import { Component } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public selectedLibrary:'home' | 'animation' | 'component' | 'pipe' | 'service' = 'home';

  constructor() {}

  async ngOnInit() {
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

  addListeners = async () => {
    await PushNotifications.addListener('registration', token => {
      console.info('Registration token: ', token.value);
    });
  
    await PushNotifications.addListener('registrationError', err => {
      console.error('Registration error: ', err.error);
    });
  
    await PushNotifications.addListener('pushNotificationReceived', notification => {
      console.log('Push notification received: ', notification);
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
