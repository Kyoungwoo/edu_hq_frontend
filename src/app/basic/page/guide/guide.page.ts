import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { fadeAnimation, fadeInAnimation, listAnimation, listInAnimation, bounceInAnimation } from '../../app.animation';
import { AlertService } from '../../service/ionic/alert.service';
import { LoadingService } from '../../service/ionic/loading.service';
import { NavService } from '../../service/ionic/nav.service';
import { ToastService } from '../../service/ionic/toast.service';
import { DateService } from '../../service/util/date.service';
import { FullScreenService } from '../../service/util/full-screen.service';
import { PromiseService } from '../../service/util/promise.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
  animations: [ fadeAnimation, fadeInAnimation, listAnimation, listInAnimation, bounceInAnimation ]
})
export class GuidePage implements OnInit {

  /** Animations */
  fadeAnimationToggle:boolean = false;
  fadeInAnimationToggle:boolean = false;
  listAnimationToggle:boolean = false;
  listAnimationItemList = [];
  listAnimationItemListMax = ["item1","item2","item3","item4","item5"];
  listAnimationItemListEmpty = [];
  listInAnimationItemList = [];
  listInAnimationItemListMax = ["item1","item2","item3","item4","item5"];
  listInAnimationItemListEmpty = [];
  bounceInAnimationToggle:boolean = false;

  /** inputs */
  selectValue = "hello10";

  constructor(
    private modal : ModalController,
    private alert: AlertService,
    private loading: LoadingService,
    private navCtrl: NavService,
    private toast: ToastService,
    private date: DateService,
    private fullScreen: FullScreenService,
    private promise: PromiseService
  ) { }

  ngOnInit() {
    /* this.alert.present({
      message: "present"
    });
    this.loading.present({
      message: "present",
      duration: 500
    });
    this.toast.present({
      message: "비밀번호 오류",
      duration:1000
    }); */
  }
  async navRoot() {
    console.log("before");
    // this.promise.timeout(new Promise((res) => {console.log('test11')}), 50000);
    console.log("after");
    //this.fullScreen.present();
    //this.navCtrl.navigateRoot("/test2");
  }
  navBack() {
    this.navCtrl.navigateBack("/test2");
  }
  navForward() {
    this.navCtrl.navigateForward("/test2");
  }

}
