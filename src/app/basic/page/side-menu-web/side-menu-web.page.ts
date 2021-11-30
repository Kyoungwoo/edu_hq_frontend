import { Component, OnInit } from '@angular/core';
import { AnimationController, ModalController } from '@ionic/angular';
import { fadeAnimation, fadeInAnimation } from '../../app.animation';
import { NaverMapComponent } from '../../component/input/naver-map/naver-map.component';

@Component({
  selector: 'app-side-menu-web',
  templateUrl: './side-menu-web.page.html',
  styleUrls: ['./side-menu-web.page.scss'],
  animations: [ fadeInAnimation ]
})
export class SideMenuWebPage implements OnInit {

  document:boolean = false;
  sign:boolean = false;
  risk:boolean = false;
  smart:boolean = false;
  
  fadeAnimationToggle
  constructor(
    private animationCtrl: AnimationController,
    private modal:ModalController
  ) { }

  ngOnInit() {
  }

  async testcomponent(){
    const modal = await this.modal.create({
      component:NaverMapComponent,
      cssClass:'my-modal',
      enterAnimation: (baseEl:HTMLElement) => {
        const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.getElementsByTagName('ion-backdrop')[0])
        .duration(100)
        .fromTo('opacity', '0', '0.1');

        const wrapperEl = <HTMLElement>baseEl.getElementsByClassName('modal-wrapper')[0];
        wrapperEl.style.transformOrigin = '50% -50%';
        const wrapperAnimation = this.animationCtrl.create()
        .addElement(wrapperEl)
        .duration(100)
        .fromTo('opacity', '0', '1')
        //.fromTo('transform', 'translateY(-5px)', 'translateY(0px)')
        .fromTo('transform', 'scale(0.95)', 'scale(1)');

        return this.animationCtrl.create()
        .addAnimation([backdropAnimation, wrapperAnimation]);
      },
        leaveAnimation: (baseEl:HTMLElement) => {
        const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.getElementsByTagName('ion-backdrop')[0])
        .duration(100)
        .fromTo('opacity', '0.1', '0');
        const wrapperEl = <HTMLElement>baseEl.getElementsByClassName('modal-wrapper')[0]
        wrapperEl.style.transformOrigin = '50% ,-50%'
        const wrapperAnimation = this.animationCtrl.create()
        .addElement(wrapperEl)
        .duration(100)
        .fromTo('opacity', '1', '0')
        .fromTo('transform', 'scale(1)', 'scale(1)');
        

        return this.animationCtrl.create()
        .addAnimation([backdropAnimation, wrapperAnimation]);
      }
    });
    modal.present();
  }
}
