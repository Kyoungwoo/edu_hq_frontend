export class LoginForm {
  accountID = '';
  accountToken = '';
}
export class LoginFormWorkerMock implements LoginForm {
  accountID = 'workrer_sh';
  accountToken = 'qwer1234';
}
export class LoginFormLhMock implements LoginForm {
  accountID = 'lh_sh';
  accountToken = 'qwer1234';
}
export class LoginFormSuperMock implements LoginForm {
  accountID = 'super_sh';
  accountToken = 'qwer1234';
}
export class LoginFormPartnerMock implements LoginForm {
  accountID = 'partner_sh';
  accountToken = 'qwer1234';
}

export class FindIdForm {
  user_name:string = null; // 성명
  user_phone:string = null; // 휴대폰 번호
  sms_token:string = null; // 인증번호
}

export class FindIdFormMock implements FindIdForm {
  user_name:string = '김수홍'; // 성명
  user_phone:string = '01000249857'; // 휴대폰 번호
  sms_token:string = null; // 인증번호
}

export class FindPasswordForm {
  account_id:string = null; // 아이디
  user_name:string = null; // 성명
  user_phone:string = null; // 휴대폰 번호
  sms_token:string = null; // 인증번호
}

export class FindPasswordFormMock implements FindPasswordForm {
  account_id:string = 'worker_sh'; // 아이디
  user_name:string = '김수홍'; // 성명
  user_phone:string = '01000249857'; // 휴대폰 번호
  sms_token:string = null; // 인증번호
}

export class UpdatePasswordForm {
  account_id:string = null; // 아이디
  account_token:string = null; // 변경할 비밀번호
  account_token_conform:string = null;
  sms_token:string = null; // 인증번호
  user_name:string = null; // 성명
  user_phone:string = null; // 휴대폰번호
}

export class UpdatePasswordFormMock implements UpdatePasswordForm {
  account_id:string = null; // 아이디
  account_token:string = 'qwer1234'; // 변경할 비밀번호
  account_token_conform:string = 'qwer1234'; // 변경할 비밀번호 확인
  sms_token:string = null; // 인증번호
  user_name:string = null; // 성명
  user_phone:string = null; // 휴대폰번호
}