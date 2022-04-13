"use strict";
exports.__esModule = true;
exports.SignUpLhFormMock = exports.SignUpLhForm = void 0;
var file_service_1 = require("src/app/basic/service/core/file.service");
var regex_service_1 = require("src/app/basic/service/util/regex.service");
var regex = new regex_service_1.RegexService();
var SignUpLhForm = /** @class */ (function () {
    function SignUpLhForm() {
        this.user_name = null; //이름
        this.account_id = null; //아이디
        this.account_token = null; //비밀번호
        this.account_token_conform = null; //account_token_conform
        this.user_birth = null; //생년월일
        this.user_gender = null; //성별
        this.user_phone = null; //휴대폰번호  
        this.sms_token = null; //문자 인증번호
        this.user_email = null; //이메일
        this.hq_regional_id = null; //지역본부 ID
        this.hq_business_id = null; //사업본부 ID
        this.hq_department_id = null; //부서 ID
        this.project_id = 0; //소속 현장 ID
        this.ctgo_job_position_id = null; //직위 ID
        this.file_preview = [];
        this.file = []; //첨부파일
        this.file_json = new file_service_1.FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증
    }
    return SignUpLhForm;
}());
exports.SignUpLhForm = SignUpLhForm;
var SignUpLhFormMock = /** @class */ (function () {
    function SignUpLhFormMock() {
        this.user_name = regex.random.id('김수홍_lh');
        this.account_id = regex.random.id('lh'); //아이디
        this.account_token = 'qwer1234'; //비밀번호
        this.account_token_conform = 'qwer1234'; //account_token_conform
        this.user_birth = '1982-07-26'; //생년월일
        this.user_gender = '남'; //성별
        this.user_phone = regex.random.phone(); //'01056044147';//휴대폰번호
        this.sms_token = null; //문자 인증번호
        this.user_email = regex.random.email();
        this.hq_regional_id = null; //지역본부 ID
        this.hq_business_id = null; //사업본부 ID
        this.hq_department_id = null; //부서 ID
        this.project_id = null; //소속 현장 ID
        this.ctgo_job_position_id = null; //직위 ID
        this.file_preview = [];
        this.file = []; //첨부파일
        this.file_json = new file_service_1.FileJson(); //첨부파일 Json 정보 / PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증
        this.system_terms = null; // 시스템 이용약관
        this.personal_terms = null; // 개인정보 이용약관
        this.gps_terms = null; // 위치정보 이용약관
        this.sharing_terms = null; // 제 3자 정보제공 이용약관
    }
    ; //이름
    ; //이메일
    return SignUpLhFormMock;
}());
exports.SignUpLhFormMock = SignUpLhFormMock;
