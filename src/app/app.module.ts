import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';

import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { File } from "@ionic-native/file/ngx";
import { Media } from '@ionic-native/media/ngx';
import { BasicComponentModule } from './basic/component/basic.component.module';
import { FormsModule } from '@angular/forms';
import { AlertStrategy } from './basic/service/ionic/alert.service';
// import { NFC } from '@ionic-native/nfc/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    ScrollingModule,
    BasicComponentModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: AlertStrategy, useValue: { mode: 'devmonster' }},
    QRScanner,
    File,
    Media,
    // NFC
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
