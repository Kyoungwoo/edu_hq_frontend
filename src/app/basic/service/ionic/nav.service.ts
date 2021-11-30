import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent, UrlTree } from '@angular/router';
import { IonContent, NavController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
export interface NavOptions {
  animated?:boolean,
  force?:boolean
}

@Injectable({
  providedIn: 'root'
})
export class NavService {

  force:boolean = true;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  back(options?): void {
    this.navCtrl.back(options);
  }
  navigateBack(url: string | any[] | UrlTree, options?:NavOptions): Promise<boolean> {
    this.force = options?.force ?? true;
    return this.navCtrl.navigateBack(url, options as any);
  }
  navigateForward(url: string | any[] | UrlTree, options?:NavOptions): Promise<boolean> {
    this.force = options?.force ?? true;
    return this.navCtrl.navigateForward(url, options as any);
  }
  navigateRoot(url: string | any[] | UrlTree, options?:NavOptions): Promise<boolean> {
    this.force = options?.force ?? true;
    return this.navCtrl.navigateRoot(url, options as any);
  }

  fragmentScroll(content:IonContent) {
    const $router = this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(async(e) => {
      const fragment = this.activatedRoute.snapshot.fragment;
      this.scrollTo(fragment, content);
    });
    const $fragment = this.activatedRoute.fragment.subscribe(fragment => {
      this.activatedRoute.snapshot.fragment = fragment;
    });
    return {
      unsubscribe: () => {
        $router.unsubscribe();
        $fragment.unsubscribe();
      }
    }
  }
  private scrollTryLimit = 10;
  private scrollTry = 0;
  private async scrollTo(fragment, content:IonContent, animation:boolean = true) {
    if(this.scrollTry > this.scrollTryLimit) {
      this.scrollTry = 0;
      return;
    }
    this.scrollTry++;

    const el = document.getElementById(fragment);
    if(!el) {
      setTimeout(() => {
        this.scrollTo(fragment, content, false);
      }, 20);
      return;
    }
    const scrollEl = await content.getScrollElement();
    if(!scrollEl?.scrollHeight) {
      setTimeout(() => {
        this.scrollTo(fragment, content, false);
      }, 20);
      return;
    }

    const offsetTop = el.offsetTop;
    const safeAreaTop = getComputedStyle(document.documentElement).getPropertyValue("--ion-safe-area-top");
    const paddingTop = getComputedStyle(scrollEl).getPropertyValue("padding-top");
    const scrollTop = offsetTop - parseInt(safeAreaTop) - parseInt(paddingTop) - 40;
    
    content.scrollToPoint(0, scrollTop, animation ? 100 : null)
    .then(() => {
      if(scrollTop !== scrollEl.scrollTop) {
        this.scrollTo(fragment, content, false);
      } else {
        this.scrollTry = 0;
      }
    })
  }
}
