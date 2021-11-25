import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { filter } from 'rxjs/operators';
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
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(async(e) => {
      const fragment = this.activatedRoute.snapshot.fragment;
      this.scrollTo(fragment);
    });
    this.activatedRoute.fragment.subscribe(fragment => {
      this.activatedRoute.snapshot.fragment = fragment;
    });
  }

  fragmentChangeReady = true;
  //디렉티브 혹은 컴포넌트로 개발을 해야될까?
  private async scrollTo(fragment) {
    const el = document.getElementById(fragment);

    const offsetTop = el?.offsetTop || 0;

    const scrollEl = await this.content.getScrollElement();

    if(!scrollEl?.scrollHeight) {
      setTimeout(() => {
        this.scrollTo(fragment);
      }, 10);
      return;
    }

    const safeAreaTop = getComputedStyle(document.documentElement).getPropertyValue("--ion-safe-area-top");
    const paddingTop = getComputedStyle(scrollEl).getPropertyValue("padding-top");
    
    this.fragmentChangeReady = false;
    this.content.scrollToPoint(0, offsetTop - parseInt(safeAreaTop) - parseInt(paddingTop) - 40, 100)
    .then(() => {
      this.fragmentChangeReady = true;
    });
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
