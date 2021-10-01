(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-flow-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/profile/profile.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/profile/profile.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding background-with-dark-color\">\n  <ion-grid class=\"flex-container\">\n    <form [formGroup]=\"formGroup\">\n      <ion-row class=\"flex-item\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <div class=\"screen-extrabig-title\" [innerHTML]=\"'profile.title' | translate\"></div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"flex-item ion-padding-vertical ion-margin-vertical\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <span class=\"small-size ion-text-center ion-margin-top\">{{ 'profile.text1' | translate }}</span><br />\n          <span class=\"small-size ion-text-center ion-margin-top italic\">{{ 'profile.text2' | translate }}</span>\n        </ion-col>\n      </ion-row>\n      <div class=\"flex-container-vertical ion-margin-bottom fill-all-line-centered ion-padding-bottom\">\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin-bottom ion-margin-top input-background\">\n            <ion-label appPlatformMode>{{'formFields.profile' | translate}}</ion-label>\n            <ion-input\n              type=\"text\"\n              inputmode=\"text\"\n              [formControlName]=\"'occupation'\"\n              [maxlength]=\"maxlength\"\n              required\n            ></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['occupation']\"></app-show-errors>\n        </div>\n      </div>\n      <ion-row class=\"flex-item ion-justify-content-center ion-margin-vertical\">\n        <div class=\"pr col-xs-12 col-sm-10 col-lg-8\">\n          <div class=\"ion-text-left\">\n            <ion-item class=\"ion-no-border\">\n              <span class=\"small-size\">{{ 'profile.toggleText' | translate}}</span>\n              <ion-toggle\n                [ngModelOptions]=\"{standalone: true}\"\n                [(ngModel)]=\"toggle\"\n                [checked]=\"toggle\"\n                slot=\"start\"\n                name=\"all\"\n                color=\"secondary\"\n                (ionChange)=\"resetForm()\"\n              ></ion-toggle>\n            </ion-item>\n          </div>\n        </div>\n      </ion-row>\n      <app-action-button (actionButtonClick)=\"saveProfile()\" [buttonText]=\"'next'\"></app-action-button>\n    </form>\n  </ion-grid>\n</ion-content>\n");

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

/***/ "./src/app/signup-flow/profile/profile-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/signup-flow/profile/profile-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/signup-flow/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"],
    },
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup-flow/profile/profile.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/signup-flow/profile/profile.module.ts ***!
  \*******************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/signup-flow/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/signup-flow/profile/profile.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfilePageRoutingModule"]],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/signup-flow/profile/profile.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/signup-flow/profile/profile.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1mbG93L3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/signup-flow/profile/profile.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/signup-flow/profile/profile.page.ts ***!
  \*****************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _signup_base_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../signup-base.page */ "./src/app/signup-flow/signup-base.page.ts");
/* harmony import */ var _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@shared/validators/form-custom-validators */ "./src/app/@shared/validators/form-custom-validators.ts");
/* harmony import */ var _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@core/google-analytics.service */ "./src/app/@core/google-analytics.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../@core/inform.service */ "./src/app/@core/inform.service.ts");















var PAGE_POSITION = 3;
var ProfilePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProfilePage, _super);
    function ProfilePage(router, location, store, utilsService, camera, informService, storage, navigationExtrasService, googleAnalyticsService, formBuilder) {
        var _this = _super.call(this, location, router, store, utilsService, camera, informService, storage, navigationExtrasService, googleAnalyticsService) || this;
        _this.formBuilder = formBuilder;
        _this.maxlength = _global_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].MAX_LENGTH_PROFILE;
        return _this;
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.initForm();
        // override showBackButton
        this.showBackButton = this.checkGoBack();
        this.toggle = false;
    };
    ProfilePage.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            occupation: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_11__["FormCustomValidators"].notAllowedEmojis, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.maxlength)],
            ],
        });
    };
    ProfilePage.prototype.ngOnDestroy = function () { };
    ProfilePage.prototype.saveProfile = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.toggle && this.utilsService.isValidForm(this.formGroup))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.updateSignupFlowInfo(PAGE_POSITION, 'occupation', this.formGroup.get('occupation').value)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateSignupFlowInfo(PAGE_POSITION, 'sports_related', !this.toggle)];
                    case 2:
                        _a.sent();
                        // go next page
                        this.goNextFlowPage(PAGE_POSITION);
                        _a.label = 3;
                    case 3:
                        if (!this.toggle) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.updateSignupFlowInfo(PAGE_POSITION, 'sports_related', !this.toggle)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.storage.removeSignupDataField('occupation')];
                    case 5:
                        _a.sent();
                        this.goNextFlowPage(PAGE_POSITION);
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.resetForm = function () {
        if (this.toggle) {
            this.formGroup.get('occupation').reset();
            this.formGroup.get('occupation').disable();
        }
        else {
            this.formGroup.get('occupation').reset();
            this.formGroup.get('occupation').enable();
        }
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_14__["InformService"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_9__["NavigationExtrasService"] },
        { type: _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_12__["GoogleAnalyticsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/profile/profile.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/signup-flow/profile/profile.page.scss")).default]
        })
    ], ProfilePage);
    return ProfilePage;
}(_signup_base_page__WEBPACK_IMPORTED_MODULE_10__["SignupBasePage"]));



/***/ })

}]);
//# sourceMappingURL=signup-flow-profile-profile-module.js.map