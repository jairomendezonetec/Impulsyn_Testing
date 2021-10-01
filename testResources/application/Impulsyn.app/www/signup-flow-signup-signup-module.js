(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-flow-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/signup/signup.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/signup/signup.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding background-with-dark-color\">\n  <div class=\"flex-vertical-space\">\n    <div class=\"flex-container\">\n      <form [formGroup]=\"formGroup\">\n        <ion-row class=\"flex-item\">\n          <ion-col size=\"12\" class=\"ion-text-center ion-padding-bottom ion-margin-top ion-padding-top\">\n            <div class=\"screen-extrabig-title\" [innerHTML]=\"'signup.title' | translate\"></div>\n            <span class=\"regular-size\">{{'signup.subtitle' | translate}}</span>\n          </ion-col>\n        </ion-row>\n        <div class=\"flex-item fill-all-line-centered ion-padding-vertical ion-margin-bottom\">\n          <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n            <ion-item lines=\"full\" class=\"ion-margin\">\n              <ion-label appPlatformMode>{{'formFields.email' | translate}}</ion-label>\n              <ion-input\n                type=\"email\"\n                inputmode=\"email\"\n                autocomplete=\"off\"\n                name=\"email\"\n                [formControlName]=\"'email'\"\n                required\n                data-test=\"email-input\"\n              ></ion-input>\n            </ion-item>\n            <app-show-errors [control]=\"formGroup.controls['email']\"></app-show-errors>\n          </div>\n          <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n            <ion-item lines=\"full\" class=\"ion-margin\">\n              <ion-label appPlatformMode>{{'formFields.pass' | translate}}</ion-label>\n              <ion-input\n                [type]=\"seePassword ? 'text' : 'password'\"\n                name=\"password\"\n                [formControlName]=\"'password'\"\n                required\n                maxlength=\"25\"\n                data-test=\"password-input\"\n                (ionFocus)=\"showInfoToast()\"\n                class=\"pass-input\"\n              ></ion-input>\n              <app-icon-clicked\n                color=\"secondary\"\n                class=\"extrabig-size icon-input-end\"\n                (buttonClick)=\"onSeePassword($event)\"\n                [iconNameInitial]=\"'eye-outline'\"\n                [iconNameTapped]=\"'eye-off-outline'\"\n              ></app-icon-clicked>\n            </ion-item>\n            <app-show-errors [control]=\"formGroup.controls['password']\"></app-show-errors>\n          </div>\n        </div>\n        <app-action-button-link\n          [buttonText]=\"'signUp'\"\n          [linkText]=\"'signup.goLogin'\"\n          (actionButtonClick)=\"signUp()\"\n          (actionLinkClick)=\"goLogin()\"\n        ></app-action-button-link>\n      </form>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/base/profile-image-editor-base.page.ts":
/*!********************************************************!*\
  !*** ./src/app/base/profile-image-editor-base.page.ts ***!
  \********************************************************/
/*! exports provided: ProfileImageEditorBasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileImageEditorBasePage", function() { return ProfileImageEditorBasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@global/utils */ "./src/app/@global/utils.ts");



var ProfileImageEditorBasePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProfileImageEditorBasePage, _super);
    function ProfileImageEditorBasePage(location, router, store, utilsService, camera, informService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.camera = camera;
        _this.informService = informService;
        _this.pickImageGallery = function () {
            _this.pickImage(_this.camera.PictureSourceType.PHOTOLIBRARY);
        };
        _this.pickImageCamera = function () {
            _this.pickImage(_this.camera.PictureSourceType.CAMERA);
        };
        return _this;
    }
    ProfileImageEditorBasePage.prototype.pickImage = function (sourceType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var imageData, _a, path, filename, file, error_1, capturedError;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.utilsService.getMediaFromCameraPlugin(sourceType, this.camera.MediaType.PICTURE)];
                    case 1:
                        imageData = _b.sent();
                        _a = _global_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getPathAndFilenameFromUrl(imageData.imageOriginalPath), path = _a.path, filename = _a.filename;
                        return [4 /*yield*/, this.utilsService.getFileFromSystemPath(path, filename)];
                    case 2:
                        file = _b.sent();
                        if (!_global_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isImageMediaType(file.type)) {
                            this.informService.showWarning('createPost.wrongImageType');
                            return [2 /*return*/];
                        }
                        this.imageOriginalPath = imageData.imageOriginalPath;
                        this.profileImage = imageData.imageSource;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.error('[ProfileImageEditorBasePage pickImage] error taking a picture');
                        console.error(error_1);
                        capturedError = new Error('Error in pickImage: ' + error_1);
                        capturedError.name = '[ProfileImageEditorBasePage error]';
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ProfileImageEditorBasePage;
}(_base_page__WEBPACK_IMPORTED_MODULE_1__["BasePage"]));



/***/ }),

/***/ "./src/app/signup-flow/signup/signup-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/signup-flow/signup/signup-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup-flow/signup/signup.page.ts");




var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"],
    },
];
var SignupPageRoutingModule = /** @class */ (function () {
    function SignupPageRoutingModule() {
    }
    SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SignupPageRoutingModule);
    return SignupPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup-flow/signup/signup.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/signup-flow/signup/signup.module.ts ***!
  \*****************************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup-flow/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup-flow/signup/signup.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignupPageRoutingModule"]],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup-flow/signup/signup.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/signup-flow/signup/signup.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1mbG93L3NpZ251cC9zaWdudXAucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/signup-flow/signup/signup.page.ts":
/*!***************************************************!*\
  !*** ./src/app/signup-flow/signup/signup.page.ts ***!
  \***************************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@store/auth/auth.actions */ "./src/app/@store/auth/auth.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _core_errors_aws_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@core/errors/aws-error */ "./src/app/@core/errors/aws-error.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@core/inform.service */ "./src/app/@core/inform.service.ts");
/* harmony import */ var _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../@shared/validators/form-custom-validators */ "./src/app/@shared/validators/form-custom-validators.ts");
/* harmony import */ var _login_model_credentials__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../login/model/credentials */ "./src/app/login/model/credentials.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _signup_base_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../signup-base.page */ "./src/app/signup-flow/signup-base.page.ts");
/* harmony import */ var _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../@core/google-analytics.service */ "./src/app/@core/google-analytics.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");





















var PAGE_POSITION = 0;
var SignupPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SignupPage, _super);
    function SignupPage(router, location, store, utilsService, camera, informService, storage, navigationExtrasService, googleAnalyticsService, formBuilder, alertController, translateService) {
        var _this = _super.call(this, location, router, store, utilsService, camera, informService, storage, navigationExtrasService, googleAnalyticsService) || this;
        _this.formBuilder = formBuilder;
        _this.alertController = alertController;
        _this.translateService = translateService;
        _this.seePassword = false;
        _this.toastShowed = false;
        return _this;
    }
    SignupPage.prototype.ngOnInit = function () {
        this.initForm();
    };
    SignupPage.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(_global_constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].MAX_LENGTH_USERNAME_COGNITO)]],
            password: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_13__["FormCustomValidators"].validatePassPattern, _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_13__["FormCustomValidators"].notAllowedEmojis],
            ],
        });
    };
    SignupPage.prototype.onSeePassword = function ($event) {
        this.seePassword = !this.seePassword;
    };
    SignupPage.prototype.signUp = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var userCredentials_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.utilsService.isValidForm(this.formGroup)) {
                    userCredentials_1 = new _login_model_credentials__WEBPACK_IMPORTED_MODULE_14__["CredentialsModel"](this.formGroup.get('email').value, this.formGroup.get('password').value);
                    this.store
                        .dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_2__["SignUp"]({
                        username: userCredentials_1.email,
                        password: userCredentials_1.password,
                    }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
                        .subscribe(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0: 
                                // set form data in local storage
                                return [4 /*yield*/, this.updateStorageDataObject('email', this.formGroup.get('email').value.trim())];
                                case 1:
                                    // set form data in local storage
                                    _a.sent();
                                    return [4 /*yield*/, this.updateLastPage(PAGE_POSITION)];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, this.storage.setRememberUser(true)];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, this.storage.setCredentials(userCredentials_1)];
                                case 4:
                                    _a.sent();
                                    return [4 /*yield*/, this.storage.setAvoidOnboardingPages(true)];
                                case 5:
                                    _a.sent();
                                    // go next page
                                    this.router.navigateByUrl('/verification-code');
                                    return [2 /*return*/];
                            }
                        });
                    }); }, function (error) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var alert_1;
                        var _this = this;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.dir(error);
                                    if (!(error.code === _core_errors_aws_error__WEBPACK_IMPORTED_MODULE_9__["AWSErrorType"].UsernameExistsException)) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.alertController.create({
                                            cssClass: 'custom-alert',
                                            header: 'Info',
                                            message: this.translateService.instant('confirmEmail.usernameExistsExceptionAlert'),
                                            buttons: [
                                                {
                                                    text: this.translateService.instant('confirmEmail.modify'),
                                                    role: 'cancel',
                                                    cssClass: 'secondary',
                                                    handler: function () { },
                                                },
                                                {
                                                    text: this.translateService.instant('confirmEmail.login'),
                                                    handler: function () {
                                                        _this.navigationExtrasService.setExtras({ userEmail: _this.formGroup.get('email').value });
                                                        _this.router.navigateByUrl("/login");
                                                    },
                                                },
                                            ],
                                        })];
                                case 1:
                                    alert_1 = _a.sent();
                                    return [4 /*yield*/, alert_1.present()];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        });
    };
    SignupPage.prototype.showInfoToast = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.toastShowed) return [3 /*break*/, 2];
                        this.toastShowed = true;
                        _a = this;
                        return [4 /*yield*/, this.informService.showInfo('signup.passwordInfo', 0)];
                    case 1:
                        _a.infoToast = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.prototype.goLogin = function () {
        this.navigationExtrasService.setExtras({ showGoBack: true });
        this.router.navigate(['/login']);
    };
    SignupPage.prototype.ionViewWillLeave = function () {
        if (this.infoToast) {
            this.infoToast.dismiss();
        }
    };
    SignupPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_11__["UtilsService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_20__["Camera"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_12__["InformService"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_8__["NavigationExtrasService"] },
        { type: _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_19__["GoogleAnalyticsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__["AlertController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateService"] }
    ]; };
    SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-signup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/signup/signup.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup-flow/signup/signup.page.scss")).default]
        })
    ], SignupPage);
    return SignupPage;
}(_signup_base_page__WEBPACK_IMPORTED_MODULE_18__["SignupBasePage"]));



/***/ })

}]);
//# sourceMappingURL=signup-flow-signup-signup-module.js.map