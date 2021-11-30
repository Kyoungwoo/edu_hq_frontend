import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { fadeAnimation, fadeInAnimation, listAnimation, listInAnimation, bounceInAnimation } from '../../app.animation';
import { FileBlob, FileJson, FutItem } from '../../service/file.service';
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

  /** Animation */
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

  /** input */
  /** file */
  file = {
    list: [] as FutItem[],
    files: [] as (File | FileBlob)[],
    file_json: {
      insert: [],
      update: [],
      delete: []
    } as FileJson
  }

  selectValue = "hello10";
  test:FutItem[] = [];

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
    this.navCtrl.fragmentScroll(this.content);
    /** file */
    this.addFutFileEx();
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

  addFutFileEx() {
    for(let i = 0; i < 3; i++) {
      this.file.list.push({ 
        content_type: 'image/svg+xml', 
        file_name: 'logo.svg', 
        file_size: 23423432,
        file_type: '.svg',
        file_url: 'https://www.devmonster.co.kr/assets/img/',
        order_no: this.file.list.length + 1, 
        seq_no: this.file.list.length + 1,
        view_type: 'Logo'
      });
    }
  }
  popList() {
    this.test.pop();
    console.log(this.test);
  }
  spliceList() {
    this.test.splice(0, 1);
    console.log(this.test);
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
