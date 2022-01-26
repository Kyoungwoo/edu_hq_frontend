// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { UserType } from "src/app/basic/service/core/user.service";

export const environment = {
  production: false,
  autoTest: {
    core: { test: false, done: false },
    SignUp: { test: true, done: false, type: ['SUPER', 'COMPANY'] as UserType[] },
    FindId: { test: false, done: false },
    FindPassword: { test: false, done: false },
    Login: {  test: true, done: false }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
