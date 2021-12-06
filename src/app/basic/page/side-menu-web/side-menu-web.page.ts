import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { AlertController, AnimationController, ModalController } from '@ionic/angular';
import { fadeInAnimation } from '../../app.animation';
import { SideMenuComponent } from '../../component/dialog/side-menu/side-menu.component';
import Nfc from '../../plugin/testnfc';
// import { NFC } from '@ionic-native/nfc/ngx';


@Component({
  selector: 'app-side-menu-web',
  templateUrl: './side-menu-web.page.html',
  styleUrls: ['./side-menu-web.page.scss'],
  animations: [ fadeInAnimation ]
})
export class SideMenuWebPage implements OnInit {

  pageAlive:boolean = true;
  nfcTimeout;
  
  document:boolean = false;
  sign:boolean = false;
  risk:boolean = false;
  smart:boolean = false;
  
  fadeAnimationToggle
  constructor(
    private alert: AlertController,
    private animationCtrl: AnimationController,
    private modal:ModalController,
    // private iosnfc: NFC,
    //  private ndef: Ndef
  ) { }

  async ngOnInit() {
    // const { ndefMessage } = await Nfc.getData();
    // console.log(ndefMessage);
    // if(ndefMessage !== null){
    //   console.log("value",ndefMessage);
    //   const alert = await this.alert.create({
    //     header: '테스트',
    //     message: ndefMessage,
    //     buttons: [
    //       {
    //         text: '확인',
    //         handler:() => {
    //           alert.dismiss()
    //         }
    //       }
    //     ]
    //   });
    //   alert.present();
    // }
  //   try {
  //     let tag = await this.iosnfc.scanNdef();
  //     console.log("ㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ",JSON.stringify(tag));
  //  } catch (err) {
  //      console.log('Error reading tag', err);
  //  }
  }
  ngOnDestroy() {
    this.pageAlive = false;
    clearTimeout(this.nfcTimeout);
  }
  // async nfcScan() { 
  //   const { ndefMessage } = await Nfc.getData();
  //   if(this.pageAlive) {
  //     this.nfcTimeout = setTimeout(() => {
  //       this.nfcScan();
  //     }, 1000);
  //     const alert = await this.alert.create({
  //       header: '테스트',
  //       message: ndefMessage,
  //       buttons: [
  //         {
  //           text: '확인',
  //           handler:() => {
  //             alert.dismiss()
  //           }
  //         }
  //       ]
  //     });
  //     window.dispatchEvent(new CustomEvent("main:afterNFCScan", { detail: ndefMessage }));
  //   }

  // }


  async testcomponent(){
    const modal = await this.modal.create({
      component:SideMenuComponent,
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

  async alerttest() {
    const alert = await this.alert.create({
      header:'테스트',
      message:'테스트입니다.',
      cssClass:'asdsad',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler: async() => {

          }
        }
      ]
    });
      alert.present();
  }


}
