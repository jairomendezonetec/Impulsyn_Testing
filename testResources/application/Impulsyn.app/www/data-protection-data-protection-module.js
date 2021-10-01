(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-protection-data-protection-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/data-protection/data-protection.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/data-protection/data-protection.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"flex-container\">\n    <ion-row class=\"flex-item\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <div class=\"screen-big-title\" [innerHTML]=\"'dataProtection.title' | translate\"></div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-margin-vertical\">\n      <ion-col size=\"12\" class=\"ion-text-start\">\n        <span class=\"regular-small-size bold\">{{'dataProtection.title1' | translate}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-margin-vertical\">\n      <ion-col size=\"12\" class=\"ion-text-start\">\n        <span class=\"regular-small-size\">{{'dataProtection.text1' | translate}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-margin-vertical\">\n      <ion-col size=\"12\" class=\"ion-text-start\">\n        <span class=\"regular-small-size bold\">{{'dataProtection.title2' | translate}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-margin-vertical\">\n      <ion-col size=\"12\" class=\"ion-text-start\">\n        <span class=\"regular-small-size\">{{'dataProtection.text2' | translate}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-margin-vertical\">\n      <ion-col size=\"12\" class=\"ion-text-start\">\n        <span class=\"regular-small-size bold\">{{'dataProtection.title3' | translate}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-margin-vertical\">\n      <ion-col size=\"12\" class=\"ion-text-start\">\n        <span class=\"regular-small-size\">{{'dataProtection.text3' | translate}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-margin-vertical\">\n      <ion-col size=\"12\" class=\"ion-text-start\">\n        <span class=\"regular-small-size bold\">{{'dataProtection.title4' | translate}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-margin-vertical\">\n      <ion-col size=\"12\" class=\"ion-text-start\">\n        <span class=\"regular-small-size\">{{'dataProtection.text4' | translate}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-margin-vertical\">\n      <ion-col size=\"12\" class=\"ion-text-start\">\n        <span class=\"regular-small-size bold\">{{'dataProtection.title5' | translate}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-margin-vertical\">\n      <ion-col size=\"12\" class=\"ion-text-start\">\n        <span class=\"regular-small-size\">{{'dataProtection.text5' | translate}}</span\n        ><a (click)=\"openPrivacyPolicy()\" class=\"regular-small-size underline\">link</a>\n      </ion-col>\n    </ion-row>\n    <div class=\"flex-justify-content-center ion-margin-bottom\">\n      <form [formGroup]=\"formGroup\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item class=\"ion-no-border apply-checkbox\">\n            <ion-checkbox [formControlName]=\"'acceptConditions'\" color=\"secondary\"></ion-checkbox>\n            <ion-label class=\"regular-small-size\"\n              >{{ 'dataProtection.check' | translate }}<a\n                (click)=\"openConditions()\"\n                class=\"regular-small-size underline\"\n                >{{ 'dataProtection.checkLink' | translate }}</a\n              ></ion-label\n            >\n          </ion-item>\n        </div>\n      </form>\n    </div>\n    <ion-row class=\"flex-row ion-padding-bottom ion-margin-bottom\">\n      <div class=\"col-xs-6 ion-justify-content-center\">\n        <ion-button class=\"secondary-button\" (click)=\"navigateTo('/login')\">\n          {{'buttons.reject' | translate}}</ion-button\n        >\n      </div>\n      <div class=\"col-xs-6 ion-justify-content-center\">\n        <ion-button color=\"secondary\" (click)=\"onAcceptButtonClick()\"> {{'buttons.accept' | translate}}</ion-button>\n      </div>\n    </ion-row>\n  </div>\n</ion-content>\n");

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

/***/ "./src/app/data-protection/data-protection-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/data-protection/data-protection-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DataProtectionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProtectionPageRoutingModule", function() { return DataProtectionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _data_protection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-protection.page */ "./src/app/data-protection/data-protection.page.ts");




var routes = [
    {
        path: '',
        component: _data_protection_page__WEBPACK_IMPORTED_MODULE_3__["DataProtectionPage"],
    },
];
var DataProtectionPageRoutingModule = /** @class */ (function () {
    function DataProtectionPageRoutingModule() {
    }
    DataProtectionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DataProtectionPageRoutingModule);
    return DataProtectionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/data-protection/data-protection.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/data-protection/data-protection.module.ts ***!
  \***********************************************************/
/*! exports provided: DataProtectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProtectionPageModule", function() { return DataProtectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_protection_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-protection-routing.module */ "./src/app/data-protection/data-protection-routing.module.ts");
/* harmony import */ var _data_protection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-protection.page */ "./src/app/data-protection/data-protection.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var DataProtectionPageModule = /** @class */ (function () {
    function DataProtectionPageModule() {
    }
    DataProtectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _data_protection_routing_module__WEBPACK_IMPORTED_MODULE_2__["DataProtectionPageRoutingModule"]],
            declarations: [_data_protection_page__WEBPACK_IMPORTED_MODULE_3__["DataProtectionPage"]],
        })
    ], DataProtectionPageModule);
    return DataProtectionPageModule;
}());



/***/ }),

/***/ "./src/app/data-protection/data-protection.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/data-protection/data-protection.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".apply-checkbox ion-label {\n  margin-left: 10px;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS1wcm90ZWN0aW9uL2RhdGEtcHJvdGVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9kYXRhLXByb3RlY3Rpb24vZGF0YS1wcm90ZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBseS1jaGVja2JveCB7XG4gIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/data-protection/data-protection.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/data-protection/data-protection.page.ts ***!
  \*********************************************************/
/*! exports provided: DataProtectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProtectionPage", function() { return DataProtectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _signup_flow_signup_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signup-flow/signup-base.page */ "./src/app/signup-flow/signup-base.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@core/google-analytics.service */ "./src/app/@core/google-analytics.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@core/inform.service */ "./src/app/@core/inform.service.ts");
/* harmony import */ var _store_auth_auth_state__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../@store/auth/auth.state */ "./src/app/@store/auth/auth.state.ts");
/* harmony import */ var _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../@store/global-info/global-info.actions */ "./src/app/@store/global-info/global-info.actions.ts");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _core_encoder_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../@core/encoder.service */ "./src/app/@core/encoder.service.ts");
/* harmony import */ var _store_common_common_state__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../@store/common/common.state */ "./src/app/@store/common/common.state.ts");




















var DataProtectionPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DataProtectionPage, _super);
    function DataProtectionPage(location, router, store, utilsService, camera, informService, storage, navigationExtrasService, googleAnalyticsService, formBuilder, iab, encoder) {
        var _this = _super.call(this, location, router, store, utilsService, camera, informService, storage, navigationExtrasService, googleAnalyticsService) || this;
        _this.formBuilder = formBuilder;
        _this.iab = iab;
        _this.encoder = encoder;
        return _this;
    }
    DataProtectionPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.initForm();
                        _a = this;
                        _b = this.store.selectSnapshot(_store_common_common_state__WEBPACK_IMPORTED_MODULE_19__["CommonState"].getLanguage);
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.storage.getLanguage()];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        _a.language = _b;
                        return [2 /*return*/];
                }
            });
        });
    };
    DataProtectionPage.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            acceptConditions: [true],
        });
    };
    DataProtectionPage.prototype.openPrivacyPolicy = function () {
        this.iab.create(_global_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].PRIVACY_POLICY_URL + '?lang=' + this.language);
    };
    DataProtectionPage.prototype.openConditions = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.iab.create(_global_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].USE_TERMS_AND_CONDITIONS_URL + '?lang=' + this.language);
                return [2 /*return*/];
            });
        });
    };
    DataProtectionPage.prototype.onAcceptButtonClick = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var encryptedEmail;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.formGroup.get('acceptConditions').value === true) {
                            this.informService.showWarning('dataProtection.acceptWarning');
                            return [2 /*return*/];
                        }
                        if (!this.store.selectSnapshot(_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_14__["AuthState"].getToken)) return [3 /*break*/, 2];
                        encryptedEmail = this.encoder.setEncrypt(this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_16__["UserState"].getUserInfo).email);
                        return [4 /*yield*/, this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_15__["CreateUserLegalTerms"](encryptedEmail)).toPromise()];
                    case 1:
                        _a.sent();
                        this.router.navigate([_global_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].FIRST_PAGE_AFTER_LOGIN]);
                        return [3 /*break*/, 3];
                    case 2:
                        this.router.navigate(['/signup']);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DataProtectionPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_17__["Camera"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_13__["InformService"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_8__["NavigationExtrasService"] },
        { type: _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_9__["GoogleAnalyticsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"] },
        { type: _core_encoder_service__WEBPACK_IMPORTED_MODULE_18__["EncoderService"] }
    ]; };
    DataProtectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-protection',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./data-protection.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/data-protection/data-protection.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./data-protection.page.scss */ "./src/app/data-protection/data-protection.page.scss")).default]
        })
    ], DataProtectionPage);
    return DataProtectionPage;
}(_signup_flow_signup_base_page__WEBPACK_IMPORTED_MODULE_2__["SignupBasePage"]));



/***/ })

}]);
//# sourceMappingURL=data-protection-data-protection-module.js.map