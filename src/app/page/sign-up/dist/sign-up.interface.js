"use strict";
exports.__esModule = true;
exports.SignUpTerms = exports.SignUpProjectInfoMock = exports.SignUpCompanyInfoMock = exports.SignUpCountryMock = exports.SignUpCompanyInfo = void 0;
var SignUpCompanyInfo = /** @class */ (function () {
    function SignUpCompanyInfo() {
        this.company_id = null;
        this.business_register_no = null;
        this.company_name = null;
        this.company_ceo = null;
    }
    return SignUpCompanyInfo;
}());
exports.SignUpCompanyInfo = SignUpCompanyInfo;
var SignUpCountryMock = /** @class */ (function () {
    function SignUpCountryMock() {
        this.ctgo_country_id = 1;
        this.ctgo_country_name = 'test';
    }
    return SignUpCountryMock;
}());
exports.SignUpCountryMock = SignUpCountryMock;
var SignUpCompanyInfoMock = /** @class */ (function () {
    function SignUpCompanyInfoMock() {
        this.company_id = 1;
        this.business_register_no = null;
        this.company_name = null;
        this.company_ceo = null;
    }
    return SignUpCompanyInfoMock;
}());
exports.SignUpCompanyInfoMock = SignUpCompanyInfoMock;
var SignUpProjectInfoMock = /** @class */ (function () {
    function SignUpProjectInfoMock() {
        this.project_code = "PKWA46";
        this.project_id = 61;
        this.project_name = "데브현장";
    }
    return SignUpProjectInfoMock;
}());
exports.SignUpProjectInfoMock = SignUpProjectInfoMock;
var SignUpTerms = /** @class */ (function () {
    function SignUpTerms() {
        this.system_terms = null; // 시스템 이용약관
        this.personal_terms = null; // 개인정보 이용약관
        this.sensitive_terms = null; // 민감정보 이용약관
        this.gps_terms = null; // 위치정보 이용약관
        this.sharing_terms = null; // 제 3자 정보제공 이용약관
    }
    return SignUpTerms;
}());
exports.SignUpTerms = SignUpTerms;
