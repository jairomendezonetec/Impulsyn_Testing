(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding background-with-dark-color\">\n  <div class=\"flex-vertical-space\">\n    <div class=\"flex-container\">\n      <form [formGroup]=\"formGroup\">\n        <ion-row class=\"flex-item\">\n          <ion-col size=\"12\" class=\"ion-text-center\">\n            <div class=\"screen-extrabig-title\" [innerHTML]=\"'login.title' | translate\"></div>\n          </ion-col>\n        </ion-row>\n        <div class=\"flex-item ion-margin-vertical ion-padding-vertical fill-all-line-centered\">\n          <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n            <ion-item lines=\"full\" class=\"ion-margin\">\n              <ion-label appPlatformMode>{{'formFields.email' | translate}}</ion-label>\n              <ion-input\n                type=\"email\"\n                inputmode=\"email\"\n                autocomplete=\"off\"\n                [formControlName]=\"'email'\"\n                required\n                data-test=\"email-input\"\n              ></ion-input>\n            </ion-item>\n            <app-show-errors [control]=\"formGroup.controls['email']\"></app-show-errors>\n          </div>\n          <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n            <ion-item lines=\"full\" class=\"ion-margin\">\n              <ion-label appPlatformMode>{{'formFields.pass' | translate}}</ion-label>\n              <ion-input\n                [type]=\"seePassword ? 'text' : 'password'\"\n                [formControlName]=\"'password'\"\n                required\n                maxlength=\"25\"\n                data-test=\"password-input\"\n                class=\"pass-input\"\n              ></ion-input>\n              <app-icon-clicked\n                color=\"secondary\"\n                class=\"extrabig-size icon-input-end\"\n                (buttonClick)=\"onSeePassword()\"\n                [iconNameInitial]=\"!seePassword? initialIconEye:tappedIconEye\"\n                [iconNameTapped]=\"!seePassword? tappedIconEye:initialIconEye\"\n              ></app-icon-clicked>\n            </ion-item>\n            <app-show-errors [control]=\"formGroup.controls['password']\"></app-show-errors>\n          </div>\n          <div class=\"flex-item ion-padding-top fill-all-line-centered\">\n            <div class=\"col-xs-12 flex-row col-sm-8 col-lg-6\">\n              <div class=\"col-6\">\n                <ion-item class=\"ion-no-border\">\n                  <ion-checkbox\n                    name=\"remember\"\n                    formControlName=\"remember\"\n                    color=\"secondary\"\n                    data-test=\"remember\"\n                    [checked]=\"rememberCredentials\"\n                  ></ion-checkbox>\n                  <ion-label class=\"small-size\">{{ 'login.rememberMe' | translate }}</ion-label>\n                </ion-item>\n              </div>\n              <div class=\"col-6 ion-padding-end ion-justify-content-end\">\n                <a\n                  (click)=\"forgotPassword()\"\n                  color=\"white\"\n                  class=\"small-size ion-text-end underline\"\n                  data-test=\"forgot-password-link\"\n                  >{{ 'login.forgotLink' |translate}}</a\n                >\n              </div>\n            </div>\n          </div>\n        </div>\n        <app-action-button-link\n          [buttonText]=\"'signIn'\"\n          [linkText]=\"'login.signUpText'\"\n          (actionButtonClick)=\"logIn()\"\n          (actionLinkClick)=\"navigateTo('/data-protection')\"\n        ></app-action-button-link>\n      </form>\n      <ion-row class=\"flex-item ion-align-items-center w100 ion-justify-content-center\">\n        <div class=\"col-xs-10 col-sm-6 col-lg-6 ion-text-center flex-container-vertical\">\n          <span color=\"white\" class=\"ion-padding-vertical small-size\">v{{appVersion}}</span>\n        </div>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"],
    },
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginPageRoutingModule"]],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _core_errors_aws_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@core/errors/aws-error */ "./src/app/@core/errors/aws-error.ts");
/* harmony import */ var _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@shared/validators/form-custom-validators */ "./src/app/@shared/validators/form-custom-validators.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var _model_credentials__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./model/credentials */ "./src/app/login/model/credentials.ts");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _store_auth_auth_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@store/auth/auth.state */ "./src/app/@store/auth/auth.state.ts");
/* harmony import */ var _core_analytics_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../@core/analytics.service */ "./src/app/@core/analytics.service.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _signup_flow_signup_pages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../signup-flow/signup-pages */ "./src/app/signup-flow/signup-pages.ts");
/* harmony import */ var _store_common_common_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../@store/common/common.actions */ "./src/app/@store/common/common.actions.ts");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../@core/google-analytics.service */ "./src/app/@core/google-analytics.service.ts");
/* harmony import */ var _store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../@store/global-info/global-info.state */ "./src/app/@store/global-info/global-info.state.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");























var LoginPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LoginPage, _super);
    function LoginPage(router, location, store, utilsService, formBuilder, navigationExtrasService, storage, analyticsService, googleAnalyticsService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.formBuilder = formBuilder;
        _this.navigationExtrasService = navigationExtrasService;
        _this.storage = storage;
        _this.analyticsService = analyticsService;
        _this.googleAnalyticsService = googleAnalyticsService;
        _this.rememberCredentials = true;
        _this.seePassword = false;
        _this.appVersion = _env_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].version;
        _this.initialIconEye = 'eye-outline';
        _this.tappedIconEye = 'eye-off-outline';
        return _this;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.initForm();
        // from signup process when email is already registered
        this.emailFromOtherPage =
            this.navigationExtrasService.getExtras() && this.navigationExtrasService.getExtras().userEmail;
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // check if login page is root in this case, as it can be both cases.
                        this.showBackButton = !!((_a = this.navigationExtrasService.getExtras()) === null || _a === void 0 ? void 0 : _a.showGoBack);
                        this.store.dispatch(new _store_common_common_actions__WEBPACK_IMPORTED_MODULE_18__["SetRootPage"](!this.showBackButton));
                        this.navigationExtrasService.setExtras(null);
                        if (!this.emailFromOtherPage) return [3 /*break*/, 1];
                        this.formGroup.get('email').setValue(this.emailFromOtherPage);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.recoverCredentials()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        this.resetEyeIcon();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.resetEyeIcon = function () {
        this.seePassword = false;
    };
    LoginPage.prototype.recoverCredentials = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var localValue, credentials;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getRememberUser()];
                    case 1:
                        localValue = _a.sent();
                        // without value, true by default. If value, keep it
                        this.rememberCredentials = localValue === null ? true : localValue;
                        if (!this.rememberCredentials) return [3 /*break*/, 3];
                        this.formGroup.get('remember').setValue(this.rememberCredentials);
                        return [4 /*yield*/, this.storage.getCredentials()];
                    case 2:
                        credentials = _a.sent();
                        if (credentials) {
                            this.formGroup.get('email').setValue(credentials.email);
                            this.formGroup.get('password').setValue(credentials.password);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        this.formGroup.get('email').reset();
                        this.formGroup.get('password').reset();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.onSeePassword = function () {
        this.seePassword = !this.seePassword;
    };
    LoginPage.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_global_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].MAX_LENGTH_USERNAME_COGNITO)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_9__["FormCustomValidators"].validatePassPattern]],
            remember: [this.rememberCredentials],
        });
    };
    LoginPage.prototype.logIn = function () {
        var _this = this;
        if (this.utilsService.isValidForm(this.formGroup)) {
            var userCredentials_1 = new _model_credentials__WEBPACK_IMPORTED_MODULE_11__["CredentialsModel"](this.formGroup.get('email').value, this.formGroup.get('password').value);
            this.utilsService
                .logIn({ username: userCredentials_1.email, password: userCredentials_1.password })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
                .subscribe(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                var rememberUser, signUpCompleted, signupInProgress, _a, lastPageIndex;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (this.store.selectSnapshot(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_21__["GlobalInfoState"].getVersionInfo).user_needs_accept_app) {
                                this.router.navigate([_global_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].DOWNLOAD_NEW_VERSION_PAGE]);
                                return [2 /*return*/];
                            }
                            this.googleAnalyticsService.userLogin();
                            return [4 /*yield*/, this.storage.setAvoidOnboardingPages(true)];
                        case 1:
                            _b.sent();
                            rememberUser = this.formGroup.get('remember').value;
                            return [4 /*yield*/, this.storage.setRememberUser(rememberUser)];
                        case 2:
                            _b.sent();
                            return [4 /*yield*/, this.storage.setCredentials(rememberUser ? userCredentials_1 : null)];
                        case 3:
                            _b.sent();
                            signUpCompleted = this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_19__["UserState"].getUserInfo).signup_complete;
                            if (signUpCompleted) {
                                this.sendLoginEvent();
                                this.router.navigate([_global_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].FIRST_PAGE_AFTER_LOGIN]);
                                // remove remaining signup data
                                this.utilsService.removeSignUpDataFromLocalStorage();
                                return [2 /*return*/];
                            }
                            console.log('Sign up process not finished');
                            return [4 /*yield*/, this.storage.getLastCompleteSignupPage()];
                        case 4:
                            signupInProgress = _b.sent();
                            _a = signupInProgress;
                            if (!_a) return [3 /*break*/, 6];
                            return [4 /*yield*/, this.utilsService.hasUserFinishedSignUp(this.formGroup.get('email').value)];
                        case 5:
                            _a = !(_b.sent());
                            _b.label = 6;
                        case 6:
                            if (_a) {
                                console.log('Sign up process not finished and data is in the local storage');
                                lastPageIndex = _signup_flow_signup_pages__WEBPACK_IMPORTED_MODULE_17__["SIGNUP_FLOW_PAGES"].indexOf(signupInProgress);
                                this.navigationExtrasService.setExtras({ showGoBack: false });
                                this.router.navigate(["/" + _signup_flow_signup_pages__WEBPACK_IMPORTED_MODULE_17__["SIGNUP_FLOW_PAGES"][lastPageIndex + 1]]);
                            }
                            else {
                                console.log('Sign up process not finished but there is no data is in the local storage');
                                this.router.navigate(["/" + _global_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].FIRST_SIGNUP_PAGE_AFTER_VERIFICATION_CODE]);
                            }
                            return [2 /*return*/];
                    }
                });
            }); }, function (error) {
                if (error.code === _core_errors_aws_error__WEBPACK_IMPORTED_MODULE_8__["AWSErrorType"].UserNotConfirmedException) {
                    _this.navigationExtrasService.setExtras({
                        fromLogin: true,
                        username: _this.formGroup.get('email').value,
                        password: _this.formGroup.get('password').value,
                    });
                    _this.router.navigateByUrl('/verification-code');
                }
            });
        }
    };
    LoginPage.prototype.forgotPassword = function () {
        if (this.formGroup.get('email').value !== '') {
            this.navigationExtrasService.setExtras({
                username: this.formGroup.get('email').value,
            });
        }
        this.router.navigateByUrl('/forgot-password');
    };
    LoginPage.prototype.sendLoginEvent = function () {
        this.analyticsService.record(_global_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].USER_LOGGED_IN_EVENT, {
            userId: this.store.selectSnapshot(_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_13__["AuthState"].getUserId),
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_16__["UtilsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_7__["NavigationExtrasService"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] },
        { type: _core_analytics_service__WEBPACK_IMPORTED_MODULE_14__["AnalyticsService"] },
        { type: _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_20__["GoogleAnalyticsService"] }
    ]; };
    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
        })
    ], LoginPage);
    return LoginPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_12__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map