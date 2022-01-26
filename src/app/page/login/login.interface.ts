export class LoginForm {
    accountID = '';
    accountToken = '';
}
export class LoginFormWorkerMock implements LoginForm {
    accountID = 'workrer_sh';
    accountToken = 'qwer1234';
}
export class LoginFormLHMock implements LoginForm {
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