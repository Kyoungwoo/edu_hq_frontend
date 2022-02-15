// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { UserType } from "src/app/basic/service/core/user.service";

// test module v1.0(beta)
export const environment = {
  production: false,
  test: {
    core: { test: false, done: false },
    SignUp: { test: true, done: false, type: [
      "WORKER",
      //"LH",
      //"SUPER",
      //"COMPANY"
    ] as UserType[] },
    FindId: { test: false, done: false, type: ['PHONE'] },
    FindPassword: { test: false, done: false },
    Login: { test: false, done: false },
    UserManual: { test: false, done: false, type: [
      'ADD',
      'EDIT',
      'REMOVE'
    ] }
  }
}
// SignUp: { valid: false, message: '아 뭔가 문제가 생겼어.' };
//type 은 나중에 todo 로 바꾸는게 더 세련될듯?

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
