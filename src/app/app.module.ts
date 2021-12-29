import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

import { createAnimation, IonicModule, IonicRouteStrategy, isPlatform } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NaverMapId } from './basic/component/input/naver-map/naver-map.component';
import { ConnectStrategy } from './basic/service/core/connect.service';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';

const getConfig = () => {
  if(!isPlatform('ios')) {
    return  {
      navAnimation: (_, opts) => {
        const _leaveEl = <HTMLElement>opts.leavingEl;
        const enterEl = <HTMLElement>opts.enteringEl;
        const opacityAnimation = createAnimation()
        .addElement(enterEl)
        .duration(100)
        .fromTo('opacity', '0', '1');
        const transformAnimation = createAnimation()
        .addElement(enterEl)
        .duration(180)
        .easing('ease-out')
        .fromTo('transform', 'translateY(50px)', 'translateY(0px)');
        const headerAnimation = createAnimation()
        .addElement(enterEl.querySelector('app-header-admin'))
        .delay(300)
        .duration(100)
        .fromTo('opacity', '0', '1');
        return createAnimation().addAnimation([opacityAnimation, transformAnimation, headerAnimation]);
      }
    }
  } else {
    return null;
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot(getConfig()),
    FormsModule,
    AppRoutingModule,
    ScrollingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: NaverMapId, useValue: 'icx4jmxljt' },
    { provide: ConnectStrategy, useValue: {
      devUrl: 'https://api.lh-skeeper.or.kr',
      url: 'https://api.lh-skeeper.or.kr',
      exceptLogUrls: []
    }},
    QRScanner,
    File,
    Media
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
