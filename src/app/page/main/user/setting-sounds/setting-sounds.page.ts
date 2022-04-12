import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-sounds',
  templateUrl: './setting-sounds.page.html',
  styleUrls: ['./setting-sounds.page.scss'],
})
export class SettingSoundsPage implements OnInit {
  notify_type = 1;

  constructor(
    private connect: ConnectService
  ) { }

  ngOnInit() {
    this.getAlarmSetting();
  }

  /**
   * @function getAlarmSetting(): 내 알림설정 가져오기
   */
   async getAlarmSetting() {
    const res = await this.connect.run('/main/etc/notifytype/get', null);
    switch (res.rsCode) {
      case 0:
        this.notify_type = res.rsObj.notify_type;
        break;
      default:
        // this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }

  /**
   * @function updateAlarmSetting(): 내 알림설정 변경하기
   */
   async updateAlarmSetting() {
    const res = await this.connect.run('/main/etc/notifytype/update', {notify_type:this.notify_type});
    switch (res.rsCode) {
      case 0:
        // this.notify_type = res.rsObj.notify_type;
        this.getAlarmSetting();
        break;
      default:
        // this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }
}
