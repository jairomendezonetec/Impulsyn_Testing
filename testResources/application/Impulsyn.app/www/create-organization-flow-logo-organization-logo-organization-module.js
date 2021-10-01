(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-organization-flow-logo-organization-logo-organization-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-organization-flow/logo-organization/logo-organization.page.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-organization-flow/logo-organization/logo-organization.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding background-with-dark-color\">\n  <ion-grid class=\"flex-container\">\n    <ion-row class=\"flex-item\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <div class=\"screen-extrabig-title\" [innerHTML]=\"'logo-organization.title' | translate\"></div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-padding-vertical ion-margin-vertical\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <span class=\"small-size ion-text-center ion-margin-top\">{{ 'logo-organization.text' | translate }}</span><br />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-align-items-center w100 ion-justify-content-center ion-padding-top\">\n      <app-image-chooser\n        (actionButtonClick)=\"(!profileImage)?selectImageFrom():showEditOptions()\"\n        [imagePath]=\"(!profileImage)? noProfilePhotoPath : profileImage\"\n      ></app-image-chooser>\n    </ion-row>\n    <ion-row\n      class=\"flex-container-vertical ion-align-items-center w100 ion-justify-content-center ion-padding-bottom ion-margin-bottom\"\n    >\n      <h4 color=\"white\" class=\"ion-text-capitalize bold regular-size\">{{ organizationData?.complete_name }}</h4>\n      <span color=\"white\" *ngIf=\"organizationData?.tagline\" class=\"small-size\">{{ organizationData.tagline }}</span>\n      <span color=\"white\" *ngIf=\"organizationData?.website\" class=\"italic underline small-size\">\n        {{ organizationData.website }}\n      </span>\n    </ion-row>\n    <app-action-button-link\n      *ngIf=\"!profileImage\"\n      [buttonText]=\"'profileImage.addLogo'\"\n      [linkText]=\"'skip'\"\n      (actionButtonClick)=\"selectImageFrom()\"\n      (actionLinkClick)=\"createPageWithoutLogo()\"\n    ></app-action-button-link>\n    <app-action-button-link\n      *ngIf=\"profileImage\"\n      [buttonText]=\"'profileImage.save'\"\n      [linkText]=\"'skip'\"\n      (actionButtonClick)=\"createPageWithLogo()\"\n      (actionLinkClick)=\"createPageWithoutLogo()\"\n    ></app-action-button-link>\n  </ion-grid>\n</ion-content>\n");

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

/***/ "./src/app/create-organization-flow/logo-organization/logo-organization-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/create-organization-flow/logo-organization/logo-organization-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: LogoOrganizationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoOrganizationPageRoutingModule", function() { return LogoOrganizationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _logo_organization_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo-organization.page */ "./src/app/create-organization-flow/logo-organization/logo-organization.page.ts");




var routes = [
    {
        path: '',
        component: _logo_organization_page__WEBPACK_IMPORTED_MODULE_3__["LogoOrganizationPage"],
    },
];
var LogoOrganizationPageRoutingModule = /** @class */ (function () {
    function LogoOrganizationPageRoutingModule() {
    }
    LogoOrganizationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LogoOrganizationPageRoutingModule);
    return LogoOrganizationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/create-organization-flow/logo-organization/logo-organization.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/create-organization-flow/logo-organization/logo-organization.module.ts ***!
  \****************************************************************************************/
/*! exports provided: LogoOrganizationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoOrganizationPageModule", function() { return LogoOrganizationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _logo_organization_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo-organization-routing.module */ "./src/app/create-organization-flow/logo-organization/logo-organization-routing.module.ts");
/* harmony import */ var _logo_organization_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo-organization.page */ "./src/app/create-organization-flow/logo-organization/logo-organization.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var LogoOrganizationPageModule = /** @class */ (function () {
    function LogoOrganizationPageModule() {
    }
    LogoOrganizationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _logo_organization_routing_module__WEBPACK_IMPORTED_MODULE_2__["LogoOrganizationPageRoutingModule"]],
            declarations: [_logo_organization_page__WEBPACK_IMPORTED_MODULE_3__["LogoOrganizationPage"]],
        })
    ], LogoOrganizationPageModule);
    return LogoOrganizationPageModule;
}());



/***/ }),

/***/ "./src/app/create-organization-flow/logo-organization/logo-organization.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/create-organization-flow/logo-organization/logo-organization.page.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1vcmdhbml6YXRpb24tZmxvdy9sb2dvLW9yZ2FuaXphdGlvbi9sb2dvLW9yZ2FuaXphdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/create-organization-flow/logo-organization/logo-organization.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/create-organization-flow/logo-organization/logo-organization.page.ts ***!
  \**************************************************************************************/
/*! exports provided: LogoOrganizationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoOrganizationPage", function() { return LogoOrganizationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _organization_base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organization-base.page */ "./src/app/create-organization-flow/organization-base.page.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@store/pages/pages.actions */ "./src/app/@store/pages/pages.actions.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../@core/inform.service */ "./src/app/@core/inform.service.ts");
/* harmony import */ var src_app_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/@store/pages/pages.state */ "./src/app/@store/pages/pages.state.ts");

















var PAGE_POSITION = 3;
var LogoOrganizationPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LogoOrganizationPage, _super);
    function LogoOrganizationPage(router, location, store, utilsService, storage, camera, informService, actionSheetController, platform) {
        var _this = _super.call(this, location, router, store, utilsService, camera, informService, storage) || this;
        _this.actionSheetController = actionSheetController;
        _this.platform = platform;
        _this.noProfilePhotoPath = _global_constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].NO_PROFILE_IMAGE_PATH;
        _this.removePhoto = function () {
            _this.profileImage = null;
        };
        return _this;
    }
    LogoOrganizationPage.prototype.ngOnInit = function () {
        // recover previous pages organization info
        this.organizationData = this.store.selectSnapshot(src_app_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_15__["PagesState"].getCurrentPageData);
        console.dir(this.organizationData);
    };
    LogoOrganizationPage.prototype.createPageWithLogo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!this.platform.is('cordova')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.createPage()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.uploadImageToBucket()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.updatePage()];
                    case 3:
                        _a.sent();
                        this.finishCreatePageProcess();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LogoOrganizationPage.prototype.createPageWithoutLogo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var error_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.createPage()];
                    case 1:
                        _a.sent();
                        this.finishCreatePageProcess();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LogoOrganizationPage.prototype.createPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var info;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        info = this.utilsService.getOrganizationModel(this.store.selectSnapshot(src_app_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_15__["PagesState"].getCurrentPageData));
                        return [4 /*yield*/, this.store
                                .dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_12__["CreatePage"]({ page: info }))
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1))
                                .toPromise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LogoOrganizationPage.prototype.updatePage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var pageId, pagePhoto;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pageId = this.store.selectSnapshot(src_app_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_15__["PagesState"].getCurrentPageData).id;
                        pagePhoto = this.store.selectSnapshot(src_app_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_15__["PagesState"].getCurrentPageData).photo;
                        return [4 /*yield*/, this.store
                                .dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_12__["UpdatePage"]({ id: pageId, input: { photo: pagePhoto } }))
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1))
                                .toPromise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LogoOrganizationPage.prototype.clearUpdatePageData = function () {
        this.store.dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_12__["SetCurrentPageData"](null));
        this.imageOriginalPath = null;
    };
    LogoOrganizationPage.prototype.finishCreatePageProcess = function () {
        var createdPageId = this.store.selectSnapshot(src_app_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_15__["PagesState"].getCurrentPageData).id;
        this.clearUpdatePageData();
        this.goNextFlowPage(PAGE_POSITION, null, createdPageId);
    };
    LogoOrganizationPage.prototype.selectImageFrom = function () {
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
    LogoOrganizationPage.prototype.showEditOptions = function () {
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
    LogoOrganizationPage.prototype.uploadImageToBucket = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, path, filename, file, pageId, filenameToUpload;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = _global_utils__WEBPACK_IMPORTED_MODULE_13__["Utils"].getPathAndFilenameFromUrl(this.imageOriginalPath), path = _a.path, filename = _a.filename;
                        return [4 /*yield*/, this.utilsService.getFileFromSystemPath(path, filename)];
                    case 1:
                        file = _b.sent();
                        pageId = this.store.selectSnapshot(src_app_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_15__["PagesState"].getCurrentPageData).id;
                        filenameToUpload = _global_constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].PRIVATE_FOLDER + "/" + pageId + "/" + _global_constants__WEBPACK_IMPORTED_MODULE_10__["Constants"].PROFILE_FOLDER + "/" + _global_utils__WEBPACK_IMPORTED_MODULE_13__["Utils"].generateFileUniqueName(file);
                        if (!_global_utils__WEBPACK_IMPORTED_MODULE_13__["Utils"].isMediaValidSize(file)) {
                            this.informService.showWarning('createPost.invalidFileSize');
                            throw new Error('invalidFileSize');
                        }
                        return [4 /*yield*/, this.store
                                .dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_12__["UploadPageProfileImage"]({ filename: filenameToUpload, file: file, type: file.type, pageId: pageId }))
                                .toPromise()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LogoOrganizationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_14__["InformService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] }
    ]; };
    LogoOrganizationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logo-organization',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./logo-organization.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-organization-flow/logo-organization/logo-organization.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./logo-organization.page.scss */ "./src/app/create-organization-flow/logo-organization/logo-organization.page.scss")).default]
        })
    ], LogoOrganizationPage);
    return LogoOrganizationPage;
}(_organization_base_page__WEBPACK_IMPORTED_MODULE_6__["OrganizationBasePage"]));



/***/ })

}]);
//# sourceMappingURL=create-organization-flow-logo-organization-logo-organization-module.js.map