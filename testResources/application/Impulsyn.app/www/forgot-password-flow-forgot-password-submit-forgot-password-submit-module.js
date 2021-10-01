(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-flow-forgot-password-submit-forgot-password-submit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password-flow/forgot-password-submit/forgot-password-submit.page.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password-flow/forgot-password-submit/forgot-password-submit.page.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding background-with-dark-color\">\n  <form [formGroup]=\"formGroup\">\n    <div class=\"flex-container-vertical flex-align-items-center ion-margin-bottom ion-padding-bottom\">\n      <ion-row class=\"flex-item\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <div class=\"screen-extrabig-title\" [innerHTML]=\"'forgotPasswordSubmit.title' | translate\"></div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"flex-item ion-padding-vertical ion-margin-vertical\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <span class=\"small-size ion-text-center ion-margin-top\"\n            >{{ 'forgotPasswordSubmit.codeMessage' | translate }}</span\n          >\n        </ion-col>\n      </ion-row>\n      <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n        <ion-item lines=\"full\" class=\"ion-margin-bottom ion-margin-top input-background\">\n          <ion-label appPlatformMode>{{'formFields.verificationCode' | translate}}</ion-label>\n          <ion-input\n            type=\"text\"\n            inputmode=\"numeric\"\n            formControlName=\"code\"\n            required\n            data-test=\"forgot-password-code-input\"\n          >\n          </ion-input>\n        </ion-item>\n        <app-show-errors [control]=\"formGroup.controls['code']\"></app-show-errors>\n      </div>\n      <div class=\"pr col-xs-10 col-sm-8 col-lg-6 ion-text-end\">\n        <a color=\"white\" class=\"small-size ion-text-end underline\" data-test=\"resend-code-link\" (click)=\"resendCode()\"\n          >{{ 'formFields.resendCode' |translate}}</a\n        >\n      </div>\n      <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n        <ion-item lines=\"full\" class=\"ion-margin-bottom ion-margin-top input-background\">\n          <ion-label appPlatformMode>{{'formFields.newPass' | translate}}</ion-label>\n          <ion-input\n            [type]=\"seePassword ? 'text' : 'password'\"\n            inputmode=\"text\"\n            maxlength=\"25\"\n            formControlName=\"newPassword\"\n            required\n            data-test=\"forgot-password-new-pass\"\n            class=\"pass-input\"\n          >\n          </ion-input>\n          <app-icon-clicked\n            color=\"secondary\"\n            class=\"extrabig-size icon-input-end\"\n            (buttonClick)=\"onSeePassword($event)\"\n            [iconNameInitial]=\"'eye-outline'\"\n            [iconNameTapped]=\"'eye-off-outline'\"\n          ></app-icon-clicked>\n        </ion-item>\n        <app-show-errors [control]=\"formGroup.controls['newPassword']\"></app-show-errors>\n      </div>\n    </div>\n    <app-action-button (actionButtonClick)=\"onForgotPasswordSubmit()\" [buttonText]=\"'savePassword'\"></app-action-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/forgot-password-flow/forgot-password-submit/forgot-password-submit-routing.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/forgot-password-flow/forgot-password-submit/forgot-password-submit-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ForgotPasswordSubmitPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordSubmitPageRoutingModule", function() { return ForgotPasswordSubmitPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forgot_password_submit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password-submit.page */ "./src/app/forgot-password-flow/forgot-password-submit/forgot-password-submit.page.ts");




var routes = [
    {
        path: '',
        component: _forgot_password_submit_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordSubmitPage"],
    },
];
var ForgotPasswordSubmitPageRoutingModule = /** @class */ (function () {
    function ForgotPasswordSubmitPageRoutingModule() {
    }
    ForgotPasswordSubmitPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ForgotPasswordSubmitPageRoutingModule);
    return ForgotPasswordSubmitPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/forgot-password-flow/forgot-password-submit/forgot-password-submit.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/forgot-password-flow/forgot-password-submit/forgot-password-submit.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: ForgotPasswordSubmitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordSubmitPageModule", function() { return ForgotPasswordSubmitPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _forgot_password_submit_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password-submit-routing.module */ "./src/app/forgot-password-flow/forgot-password-submit/forgot-password-submit-routing.module.ts");
/* harmony import */ var _forgot_password_submit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password-submit.page */ "./src/app/forgot-password-flow/forgot-password-submit/forgot-password-submit.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var ForgotPasswordSubmitPageModule = /** @class */ (function () {
    function ForgotPasswordSubmitPageModule() {
    }
    ForgotPasswordSubmitPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _forgot_password_submit_routing_module__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordSubmitPageRoutingModule"]],
            declarations: [_forgot_password_submit_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordSubmitPage"]],
        })
    ], ForgotPasswordSubmitPageModule);
    return ForgotPasswordSubmitPageModule;
}());



/***/ }),

/***/ "./src/app/forgot-password-flow/forgot-password-submit/forgot-password-submit.page.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/forgot-password-flow/forgot-password-submit/forgot-password-submit.page.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC1mbG93L2ZvcmdvdC1wYXNzd29yZC1zdWJtaXQvZm9yZ290LXBhc3N3b3JkLXN1Ym1pdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/forgot-password-flow/forgot-password-submit/forgot-password-submit.page.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/forgot-password-flow/forgot-password-submit/forgot-password-submit.page.ts ***!
  \********************************************************************************************/
/*! exports provided: ForgotPasswordSubmitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordSubmitPage", function() { return ForgotPasswordSubmitPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@store/auth/auth.actions */ "./src/app/@store/auth/auth.actions.ts");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@shared/validators/form-custom-validators */ "./src/app/@shared/validators/form-custom-validators.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var _login_model_credentials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../login/model/credentials */ "./src/app/login/model/credentials.ts");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../@core/inform.service */ "./src/app/@core/inform.service.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../@store/global-info/global-info.state */ "./src/app/@store/global-info/global-info.state.ts");

















var ForgotPasswordSubmitPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ForgotPasswordSubmitPage, _super);
    function ForgotPasswordSubmitPage(router, location, store, utilsService, formBuilder, navigationExtrasService, storage, informService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.formBuilder = formBuilder;
        _this.navigationExtrasService = navigationExtrasService;
        _this.storage = storage;
        _this.informService = informService;
        _this.seePassword = false;
        return _this;
    }
    ForgotPasswordSubmitPage.prototype.ngOnInit = function () {
        var _a;
        this.username = (_a = this.navigationExtrasService.getExtras()) === null || _a === void 0 ? void 0 : _a.username;
        if (!this.username) {
            console.error('Missing username');
        }
        this.initForm();
    };
    ForgotPasswordSubmitPage.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_10__["FormCustomValidators"].validateVerificationCode]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_10__["FormCustomValidators"].validatePassPattern]],
        });
    };
    ForgotPasswordSubmitPage.prototype.onForgotPasswordSubmit = function () {
        var _this = this;
        this.formGroup.markAllAsTouched();
        if (this.formGroup.get('code').invalid) {
            this.informService.showWarning('formValidations.checkCode');
        }
        else {
            if (this.utilsService.isValidForm(this.formGroup)) {
                var code = this.formGroup.get('code').value;
                var newPassword_1 = this.formGroup.get('newPassword').value;
                this.store
                    .dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordSubmit"]({
                    username: this.username,
                    code: code,
                    newPassword: newPassword_1,
                }))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
                    .subscribe(function () {
                    _this.utilsService
                        .logIn({ username: _this.username, password: newPassword_1 })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
                        .subscribe(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            this.informService.showInfo('formValidations.changePassSuccess');
                            if (this.store.selectSnapshot(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_16__["GlobalInfoState"].getVersionInfo).user_needs_accept_app) {
                                this.router.navigate([_global_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].DOWNLOAD_NEW_VERSION_PAGE]);
                                return [2 /*return*/];
                            }
                            this.setUserCredentials(this.username, newPassword_1);
                            this.router.navigate([_global_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].FIRST_PAGE_AFTER_LOGIN]);
                            return [2 /*return*/];
                        });
                    }); }, function (error) {
                        console.log(error);
                        _this.router.navigate(['/login']);
                    });
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    ForgotPasswordSubmitPage.prototype.setUserCredentials = function (username, password) {
        var userCredentials = new _login_model_credentials__WEBPACK_IMPORTED_MODULE_12__["CredentialsModel"](username, password);
        this.storage.setCredentials(userCredentials);
        this.storage.setRememberUser(true);
    };
    ForgotPasswordSubmitPage.prototype.resendCode = function () {
        var _this = this;
        this.store
            .dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_7__["ResendVerificationCode"]({
            username: this.username,
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe(function () {
            _this.informService.showInfo('formValidations.resendCodeSuccess');
        }, function (error) {
            console.log(error);
        });
    };
    ForgotPasswordSubmitPage.prototype.onSeePassword = function ($event) {
        this.seePassword = !this.seePassword;
    };
    ForgotPasswordSubmitPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_13__["UtilsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_9__["NavigationExtrasService"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_14__["InformService"] }
    ]; };
    ForgotPasswordSubmitPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password-submit',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot-password-submit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password-flow/forgot-password-submit/forgot-password-submit.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgot-password-submit.page.scss */ "./src/app/forgot-password-flow/forgot-password-submit/forgot-password-submit.page.scss")).default]
        })
    ], ForgotPasswordSubmitPage);
    return ForgotPasswordSubmitPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_8__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=forgot-password-flow-forgot-password-submit-forgot-password-submit-module.js.map