import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { BasicComponentModule } from './basic/component/basic.component.module';
import { NaverMapId } from './basic/component/input/naver-map/naver-map.component';
import { ConnectStrategy } from './basic/service/core/connect.service';
import { ComponentModule } from './component/component.module';

describe('AppComponent', () => {


  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ 
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        FormsModule
      ],
      providers: [
        { provide: NaverMapId, useValue: 'icx4jmxljt' },
        { provide: ConnectStrategy, useValue: {
          devUrl: 'https://api.lh-skeeper.or.kr',
          url: 'https://api.lh-skeeper.or.kr',
          exceptLogUrls: []
        }}
      ]
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
