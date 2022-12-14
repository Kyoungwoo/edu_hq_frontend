// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
//모든 페이지
const context = require.context('./', true, /\.spec\.ts$/);

//스플래쉬
//const context = require.context('./', true, /page\/splash\/splash\.page\.spec\.ts$/);

//로그인
//const context = require.context('./', true, /page\/login\/login\/login\.page\.spec\.ts$/);
//디테일 서치
// const context = require.context('./', true, /page\/notice-board\/detail-search\/detail-search\.page\.spec\.ts$/);
// const context = require.context('./', true, /component\/header\/header-admin\/header-admin\.component\.spec\.ts$/);

//회원가입
// const context = require.context('./', true, /page\/sign-up\/.*\.page\.spec\.ts$/);
//const context = require.context('./', true, /page\/sign-up\/sign-up-worker\/sign-up-worker\.page\.spec\.ts$/);

// And load the modules.
context.keys().map(context);
