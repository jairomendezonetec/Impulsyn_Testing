(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-flow-profile-name-profile-name-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/profile-name/profile-name.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/profile-name/profile-name.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding background-with-dark-color\">\n  <ion-grid class=\"flex-container\">\n    <form [formGroup]=\"formGroup\">\n      <ion-row class=\"flex-item\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <div class=\"screen-extrabig-title\" [innerHTML]=\"'profileName.title' | translate\"></div>\n        </ion-col>\n      </ion-row>\n      <div class=\"flex-container-vertical ion-margin-top fill-all-line-centered\">\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin-bottom ion-margin-top input-background\">\n            <ion-label appPlatformMode>{{'formFields.name' | translate}}</ion-label>\n            <ion-input\n              type=\"text\"\n              inputmode=\"text\"\n              [formControlName]=\"'name'\"\n              [maxlength]=\"maxlengthName\"\n              required\n            ></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['name']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"flex-container-vertical ion-margin-vertical fill-all-line-centered ion-padding-bottom\">\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin-bottom ion-margin-top input-background\">\n            <ion-label appPlatformMode>{{'formFields.surname' | translate}}</ion-label>\n            <ion-input\n              type=\"text\"\n              inputmode=\"text\"\n              [formControlName]=\"'surname'\"\n              [maxlength]=\"maxlengthName\"\n              required\n            ></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['surname']\"></app-show-errors>\n        </div>\n      </div>\n      <app-action-button (actionButtonClick)=\"saveProfileName()\" [buttonText]=\"'next'\"></app-action-button>\n    </form>\n  </ion-grid>\n</ion-content>\n");

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

/***/ "./src/app/signup-flow/profile-name/profile-name-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/signup-flow/profile-name/profile-name-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProfileNamePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileNamePageRoutingModule", function() { return ProfileNamePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_name_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-name.page */ "./src/app/signup-flow/profile-name/profile-name.page.ts");




var routes = [
    {
        path: '',
        component: _profile_name_page__WEBPACK_IMPORTED_MODULE_3__["ProfileNamePage"],
    },
];
var ProfileNamePageRoutingModule = /** @class */ (function () {
    function ProfileNamePageRoutingModule() {
    }
    ProfileNamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfileNamePageRoutingModule);
    return ProfileNamePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup-flow/profile-name/profile-name.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/signup-flow/profile-name/profile-name.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileNamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileNamePageModule", function() { return ProfileNamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _profile_name_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-name-routing.module */ "./src/app/signup-flow/profile-name/profile-name-routing.module.ts");
/* harmony import */ var _profile_name_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-name.page */ "./src/app/signup-flow/profile-name/profile-name.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var ProfileNamePageModule = /** @class */ (function () {
    function ProfileNamePageModule() {
    }
    ProfileNamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _profile_name_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileNamePageRoutingModule"]],
            declarations: [_profile_name_page__WEBPACK_IMPORTED_MODULE_3__["ProfileNamePage"]],
        })
    ], ProfileNamePageModule);
    return ProfileNamePageModule;
}());



/***/ }),

/***/ "./src/app/signup-flow/profile-name/profile-name.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/signup-flow/profile-name/profile-name.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1mbG93L3Byb2ZpbGUtbmFtZS9wcm9maWxlLW5hbWUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/signup-flow/profile-name/profile-name.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/signup-flow/profile-name/profile-name.page.ts ***!
  \***************************************************************/
/*! exports provided: ProfileNamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileNamePage", function() { return ProfileNamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _signup_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signup-base.page */ "./src/app/signup-flow/signup-base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@shared/validators/form-custom-validators */ "./src/app/@shared/validators/form-custom-validators.ts");
/* harmony import */ var _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@core/google-analytics.service */ "./src/app/@core/google-analytics.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../@core/inform.service */ "./src/app/@core/inform.service.ts");















var PAGE_POSITION = 2;
var ProfileNamePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProfileNamePage, _super);
    function ProfileNamePage(router, location, store, utilsService, camera, informService, storage, navigationExtrasService, googleAnalyticsService, formBuilder) {
        var _this = _super.call(this, location, router, store, utilsService, camera, informService, storage, navigationExtrasService, googleAnalyticsService) || this;
        _this.formBuilder = formBuilder;
        _this.maxlengthName = _global_constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].MAX_LENGTH_NAME_COGNITO;
        return _this;
    }
    ProfileNamePage.prototype.ngOnInit = function () {
        this.initForm();
    };
    ProfileNamePage.prototype.doIonViewWillEnter = function () {
        // override showBackButton
        this.showBackButton = this.checkGoBack();
    };
    ProfileNamePage.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            name: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.maxlengthName),
                    _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_11__["FormCustomValidators"].notAllowedEmojis,
                    _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_11__["FormCustomValidators"].notAllowedNumbers,
                ],
            ],
            surname: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.maxlengthName),
                    _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_11__["FormCustomValidators"].notAllowedEmojis,
                    _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_11__["FormCustomValidators"].notAllowedNumbers,
                ],
            ],
        });
    };
    ProfileNamePage.prototype.saveProfileName = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.utilsService.isValidForm(this.formGroup)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.updateSignupFlowInfo(PAGE_POSITION, 'name', this.formGroup.get('name').value)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateSignupFlowInfo(PAGE_POSITION, 'surname', this.formGroup.get('surname').value)];
                    case 2:
                        _a.sent();
                        this.goNextFlowPage(PAGE_POSITION);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProfileNamePage.prototype.ngOnDestroy = function () { };
    ProfileNamePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_14__["InformService"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_7__["NavigationExtrasService"] },
        { type: _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_12__["GoogleAnalyticsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }
    ]; };
    ProfileNamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-name',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-name.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/profile-name/profile-name.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-name.page.scss */ "./src/app/signup-flow/profile-name/profile-name.page.scss")).default]
        })
    ], ProfileNamePage);
    return ProfileNamePage;
}(_signup_base_page__WEBPACK_IMPORTED_MODULE_2__["SignupBasePage"]));



/***/ })

}]);
//# sourceMappingURL=signup-flow-profile-name-profile-name-module.js.map