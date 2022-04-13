import { ChangeDetectorRef, Component, Injectable, OnInit } from '@angular/core';
import { AnimationController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { SideMenuAdminComponent } from '../../side-menu/side-menu-admin/side-menu-admin.component';


interface Tab {
  text:string,
  data:string
}

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-moniter-header',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss'],
})
export class MonitorComponent implements OnInit {

  tabList:Tab[] = [
    { text: '통합관제',
      data:'통합관제'
    },
    { text: 'CCTV 모니터링',
      data:'CCTV 모니터링'
    },
    { text: '근로자 실시간 위치 모니터링',
      data:'근로자 실시간 위치 모니터링'
    }
  ]

  tabActive:Tab = this.tabList[0];
  
  constructor(
    private animationCtrl: AnimationController,
    private modal:ModalController,
    private nav: NavService,
    public adminMenu: SideMenuAdminComponent
  ) { }
  
  ngOnInit() {}
  
  ngAfterViewInit() {
    this.tabActive = this.tabList[0];
  }

  tabClick(tab, i) {
    this.tabActive = tab;
  }

  ngOnDestroy(): void {}

  async openSideMenu(){
    const modal = await this.modal.create({
      component: SideMenuAdminComponent,
      cssClass:'side-menu-admin-modal',
      enterAnimation: (baseEl:HTMLElement) => {
        const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.getElementsByTagName('ion-backdrop')[0])
        .duration(100)
        .fromTo('opacity', '0', '0.08');

        const wrapperEl = <HTMLElement>baseEl.getElementsByClassName('modal-wrapper')[0];
        wrapperEl.style.transformOrigin = '50% 0';
        const wrapperAnimation = this.animationCtrl.create()
        .addElement(wrapperEl)
        .duration(100)
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'scaleY(0.99)', 'scaleY(1)');

        return this.animationCtrl.create()
        .addAnimation([backdropAnimation, wrapperAnimation]);
      },
      leaveAnimation: (baseEl:HTMLElement) => {
        const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.getElementsByTagName('ion-backdrop')[0])
        .duration(100)
        .fromTo('opacity', '0.08', '0');
        const wrapperEl = <HTMLElement>baseEl.getElementsByClassName('modal-wrapper')[0]
        wrapperEl.style.transformOrigin = '50% 0';
        const wrapperAnimation = this.animationCtrl.create()
        .addElement(wrapperEl)
        .duration(100)
        .fromTo('opacity', '1', '0')
        .fromTo('transform', 'scale(1)', 'scale(0.99)');
        

        return this.animationCtrl.create()
        .addAnimation([backdropAnimation, wrapperAnimation]);
      }
    });
    modal.present();
  }
}
