import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonHeader, ViewDidEnter, ViewWillLeave } from '@ionic/angular';
import { fadeAnimation, fadeInAnimation, listAnimation, listInAnimation, bounceInAnimation } from '../../app.animation';
import { FileBlob, FileJson, FutItem } from '../../service/core/file.service';
import { AlertService } from '../../service/ionic/alert.service';
import { NavService } from '../../service/ionic/nav.service';
import { ToastService } from '../../service/ionic/toast.service';
import { PromiseService } from '../../service/util/promise.service';
import { RegexService } from '../../service/util/regex.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
  animations: [ fadeAnimation, fadeInAnimation, listAnimation, listInAnimation, bounceInAnimation ]
})
export class GuidePage implements OnInit, AfterViewInit, ViewDidEnter, ViewWillLeave {

  markerList = [
    {x: 0, y: 0, userInfo: {
      name: '',
      hello: ''
    }},
    {x: 0, y: 0, userInfo: {
      name: '',
      hello: ''
    }},
    {x: 0, y: 0, userInfo: {
      name: '',
      hello: ''
    }},
    {x: 0, y: 0, userInfo: {
      name: '',
      hello: ''
    }}
  ]

  position = [
    {
      x: 127.4164494,
      y: 37.4235864
    },
    {
      x: 127.2983464,
      y: 37.3155373
    },
    {
      x: 127.5469121,
      y: 37.3930428
    },
    {
      workerInfo :[
        {
          name:'홍길동',
          x: 37.6685975,
          y: 126.9234476 
        },
        {
          name:'강감찬',
          x: 37.5846267,
          y: 127.1081377 
        }
      ]
    }
  ]

  
  @ViewChild('header') header:IonHeader;
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
  /** select */
  select = new Array(500).fill(null).map((_, i) => `select option ${this.regex.replace.fix(i, 4)}`);

  headerReady:boolean = false;

  constructor(
    private alert: AlertService,
    private navCtrl: NavService,
    private toast: ToastService,
    private promise: PromiseService,
    public regex: RegexService
  ) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.navCtrl.fragmentScroll(this.content);
    /** file */
    this.addFutFileEx();
  }
  async ionViewDidEnter() {
    await this.promise.wait(1000);
    this.headerReady = true;
  }
  async ionViewWillLeave() {
    this.headerReady = false;
  }
  scrollTopPrev = 0;
  async scrollStart($event) {
    if(!this.headerReady) return;
    const headerEl = <HTMLElement>this.header['el'];
    const scrollTop = $event.detail.scrollTop;
    const headerHeight = headerEl.offsetHeight;
    const delta = scrollTop - this.scrollTopPrev;
    this.scrollTopPrev = scrollTop;
    if(delta > 0) {
      headerEl.style.transform = `translateY(${-headerHeight}px)`;
    } else if(delta < 0) {
      headerEl.style.transform = `translateY(0px)`;
    }
  }

  alertPresent() {
    this.alert.present({
      img: 'https://www.devmonster.co.kr/assets/img/logo.svg',
      header: 'alert header',
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
        file_url: 'https://www.devmonster.co.kr/assets/img/logo.svg',
        order_no: this.file.list.length + 1, 
        seq_no: this.file.list.length + 1,
        view_type: 'SUB'
      });
    }
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
