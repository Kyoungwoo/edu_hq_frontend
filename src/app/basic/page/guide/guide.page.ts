import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
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
export class GuidePage implements OnInit, AfterViewInit {

  @ViewChild('content') content:IonContent;

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
    private alert: AlertService,
    private loading: LoadingService,
    private navCtrl: NavService,
    private toast: ToastService,
    private date: DateService,
    private fullScreen: FullScreenService,
    private promise: PromiseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {}
  ngAfterViewInit() {
    this.activatedRoute.fragment.subscribe(t => {
      console.log(t);
    });
    //console.log(this.activatedRoute.snapshot.fragment);
    setTimeout(() => {
      location.hash = '#hello';
    }, 100);
    /* setTimeout(() => {
      console.log(this.activatedRoute.snapshot.fragment);
    }, 100) */
    console.log(document.getElementById('button'));
    console.log(this.content);
    setTimeout(() => {
    }, 1000);
  }
  alertPresent(mode) {
    this.alert.present({
      mode,
      header: 'alert header',
      subHeader: 'alert sub header',
      message: 'alert message',
      buttons: [
        { text: 'cancel' },
        { text: 'submit', handler: () => {
          this.toast.present({ message: 'submit click' });
        }}
      ]
    })
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
