import { UserType } from "src/app/basic/service/core/user.service";

export const environment = {
  production: true,
  test: {
    core: { test: false, done: false },
    SignUp: { test: false, done: false, type: [
      "WORKER",
      "LH",
      "SUPER",
      "COMPANY"
    ] as UserType[] },
    FindId: { test: false, done: false, type: ['PHONE'] },
    FindPassword: { test: false, done: false },
    Login: { test: false, done: false },
    UserManual: { test: false, done: false, type: [
      'ADD',
      'EDIT',
      'REMOVE'
    ]},
    Project: { test: false, done: false, type: [
      'PARTNER'
    ]}
  }
};
