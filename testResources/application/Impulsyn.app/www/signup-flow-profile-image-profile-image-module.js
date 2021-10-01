(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-flow-profile-image-profile-image-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/profile-image/profile-image.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/profile-image/profile-image.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding background-with-dark-color\">\n  <div class=\"flex-container\">\n    <ion-row class=\"flex-item\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <div class=\"screen-extrabig-title\" [innerHTML]=\"'profileImage.title' | translate\"></div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-padding-vertical ion-margin-vertical\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <span class=\"small-size ion-text-center ion-margin-top\">{{ 'profileImage.text' | translate }}</span><br />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-align-items-center w100 ion-justify-content-center ion-padding-top\">\n      <app-image-chooser\n        (actionButtonClick)=\"(!profileImage)?selectImageFrom():showEditOptions()\"\n        [imagePath]=\"(!profileImage)? noProfilePhotoPath : profileImage\"\n      ></app-image-chooser>\n    </ion-row>\n    <ion-row\n      class=\"flex-container-vertical ion-align-items-center w100 ion-justify-content-center ion-padding-bottom ion-margin-bottom\"\n    >\n      <h4 color=\"white\" class=\"ion-text-capitalize bold regular-size\">{{ userData?.name }} {{ userData?.surname }}</h4>\n      <div color=\"white\" class=\"small-size\">{{ userData?.occupation }}</div>\n    </ion-row>\n    <app-action-button-link\n      *ngIf=\"!profileImage\"\n      [buttonText]=\"'profileImage.addPhoto'\"\n      [linkText]=\"'skip'\"\n      (actionButtonClick)=\"selectImageFrom()\"\n      (actionLinkClick)=\"skip()\"\n    ></app-action-button-link>\n    <app-action-button-link\n      *ngIf=\"profileImage\"\n      [buttonText]=\"'profileImage.save'\"\n      [linkText]=\"'skip'\"\n      (actionButtonClick)=\"saveProfileImage()\"\n      (actionLinkClick)=\"skip()\"\n    ></app-action-button-link>\n  </div>\n</ion-content>\n");

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

/***/ "./src/app/signup-flow/profile-image/profile-image-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/signup-flow/profile-image/profile-image-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileImagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileImagePageRoutingModule", function() { return ProfileImagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_image_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-image.page */ "./src/app/signup-flow/profile-image/profile-image.page.ts");




var routes = [
    {
        path: '',
        component: _profile_image_page__WEBPACK_IMPORTED_MODULE_3__["ProfileImagePage"],
    },
];
var ProfileImagePageRoutingModule = /** @class */ (function () {
    function ProfileImagePageRoutingModule() {
    }
    ProfileImagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfileImagePageRoutingModule);
    return ProfileImagePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup-flow/profile-image/profile-image.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/signup-flow/profile-image/profile-image.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileImagePageModule", function() { return ProfileImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _profile_image_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-image-routing.module */ "./src/app/signup-flow/profile-image/profile-image-routing.module.ts");
/* harmony import */ var _profile_image_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-image.page */ "./src/app/signup-flow/profile-image/profile-image.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var ProfileImagePageModule = /** @class */ (function () {
    function ProfileImagePageModule() {
    }
    ProfileImagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _profile_image_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileImagePageRoutingModule"]],
            declarations: [_profile_image_page__WEBPACK_IMPORTED_MODULE_3__["ProfileImagePage"]],
        })
    ], ProfileImagePageModule);
    return ProfileImagePageModule;
}());



/***/ }),

/***/ "./src/app/signup-flow/profile-image/profile-image.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/signup-flow/profile-image/profile-image.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1mbG93L3Byb2ZpbGUtaW1hZ2UvcHJvZmlsZS1pbWFnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/signup-flow/profile-image/profile-image.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/signup-flow/profile-image/profile-image.page.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileImagePage", function() { return ProfileImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _signup_base_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../signup-base.page */ "./src/app/signup-flow/signup-base.page.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _store_user_user_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@store/user/user.actions */ "./src/app/@store/user/user.actions.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../@core/inform.service */ "./src/app/@core/inform.service.ts");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../@core/google-analytics.service */ "./src/app/@core/google-analytics.service.ts");

















var PAGE_POSITION = 4;
var ProfileImagePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProfileImagePage, _super);
    function ProfileImagePage(router, location, store, utilsService, camera, informService, storage, navigationExtrasService, googleAnalyticsService, actionSheetController, platform) {
        var _this = _super.call(this, location, router, store, utilsService, camera, informService, storage, navigationExtrasService, googleAnalyticsService) || this;
        _this.actionSheetController = actionSheetController;
        _this.platform = platform;
        _this.noProfilePhotoPath = _global_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].NO_PROFILE_IMAGE_PATH;
        _this.removePhoto = function () {
            _this.profileImage = null;
        };
        return _this;
    }
    ProfileImagePage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // override showBackButton
                        this.showBackButton = this.checkGoBack();
                        // recover previous pages user info
                        _a = this;
                        return [4 /*yield*/, this.storage.getSignupData()];
                    case 1:
                        // recover previous pages user info
                        _a.userData = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileImagePage.prototype.saveProfileImage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!this.platform.is('cordova')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.uploadImageToBucket()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.updateSignupFlowInfo(PAGE_POSITION, 'photo', this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_15__["UserState"].getcurrentUploadedPhotoKey))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.skip();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ProfileImagePage.prototype.skip = function () {
        // go next page
        this.goNextFlowPage(PAGE_POSITION);
    };
    ProfileImagePage.prototype.selectImageFrom = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var buttons;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buttons = [
                            { text: 'cameraOptions.gallery', handler: this.pickImageGallery },
                            { text: 'cameraOptions.camera', handler: this.pickImageCamera },
                            { text: 'buttons.cancel' },
                        ];
                        return [4 /*yield*/, this.utilsService.showActionSheet('cameraOptions.actionSheetTitle', buttons)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileImagePage.prototype.showEditOptions = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var buttons;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buttons = [
                            { text: 'cameraOptions.choosePhoto', handler: this.pickImageGallery },
                            { text: 'cameraOptions.camera', handler: this.pickImageCamera },
                            { text: 'cameraOptions.deletePhoto', handler: this.removePhoto },
                            { text: 'buttons.cancel' },
                        ];
                        return [4 /*yield*/, this.utilsService.showActionSheet('cameraOptions.actionSheetEditTitle', buttons)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileImagePage.prototype.uploadImageToBucket = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, path, filename, file, filenameToUpload;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = _global_utils__WEBPACK_IMPORTED_MODULE_13__["Utils"].getPathAndFilenameFromUrl(this.imageOriginalPath), path = _a.path, filename = _a.filename;
                        return [4 /*yield*/, this.utilsService.getFileFromSystemPath(path, filename)];
                    case 1:
                        file = _b.sent();
                        filenameToUpload = _global_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].PROFILE_FOLDER + '/' + _global_utils__WEBPACK_IMPORTED_MODULE_13__["Utils"].generateFileUniqueName(file);
                        if (!_global_utils__WEBPACK_IMPORTED_MODULE_13__["Utils"].isMediaValidSize(file)) {
                            this.informService.showWarning('createPost.invalidFileSize');
                            throw new Error('invalidFileSize');
                        }
                        return [4 /*yield*/, this.store
                                .dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_12__["UploadProfileImage"]({ filename: filenameToUpload, file: file, type: file.type }))
                                .toPromise()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileImagePage.prototype.ngOnDestroy = function () { };
    ProfileImagePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_14__["InformService"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_7__["NavigationExtrasService"] },
        { type: _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_16__["GoogleAnalyticsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"] }
    ]; };
    ProfileImagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-image',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-image.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/profile-image/profile-image.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-image.page.scss */ "./src/app/signup-flow/profile-image/profile-image.page.scss")).default]
        })
    ], ProfileImagePage);
    return ProfileImagePage;
}(_signup_base_page__WEBPACK_IMPORTED_MODULE_8__["SignupBasePage"]));



/***/ })

}]);
//# sourceMappingURL=signup-flow-profile-image-profile-image-module.js.map