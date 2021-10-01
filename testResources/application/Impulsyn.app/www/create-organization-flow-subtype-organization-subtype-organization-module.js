(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-organization-flow-subtype-organization-subtype-organization-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-organization-flow/subtype-organization/subtype-organization.page.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-organization-flow/subtype-organization/subtype-organization.page.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"true\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding background-with-dark-color\">\n  <ion-grid class=\"flex-container\">\n    <form [formGroup]=\"formGroup\">\n      <ion-row class=\"flex-item\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <div class=\"screen-big-title\" [innerHTML]=\"title\"></div>\n        </ion-col>\n      </ion-row>\n      <div class=\"flex-container-vertical ion-margin-top fill-all-line-centered\">\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6 ion-padding-bottom text-item\" *ngFor=\"let line of textLines\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n          <span class=\"small-size\">{{line}}</span>\n        </div>\n      </div>\n      <div class=\"flex-container-vertical fill-all-line-centered\">\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin-bottom\">\n            <ion-label appPlatformMode>{{label}}</ion-label>\n            <ion-select\n              [cancelText]=\"'buttons.cancel' | translate\"\n              formControlName=\"subtype\"\n              class=\"custom-alert\"\n              [interfaceOptions]=\"customActionSheetOptions\"\n              interface=\"action-sheet\"\n            >\n              <ion-select-option *ngFor=\"let item of subtypesList\" [value]=\"item.id\">\n                {{prefix + '.' + item.name | translate}}</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['subtype']\"></app-show-errors>\n        </div>\n        <ion-row class=\"flex-item ion-align-items-center ion-margin-vertical ion-justify-content-center\">\n          <div class=\"pr col-xs-10 col-sm-8 col-lg-6 ion-text-center\">\n            <span color=\"secondary\" class=\"small-size\" [innerHTML]=\"'subtype-organization.warning' | translate\"></span>\n          </div>\n        </ion-row>\n      </div>\n      <app-action-button (actionButtonClick)=\"goNextPage()\" [buttonText]=\"'next'\"></app-action-button>\n    </form>\n  </ion-grid>\n</ion-content>\n");

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

/***/ "./src/app/create-organization-flow/subtype-organization/subtype-organization-routing.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/create-organization-flow/subtype-organization/subtype-organization-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: SubtypeOrganizationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtypeOrganizationPageRoutingModule", function() { return SubtypeOrganizationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _subtype_organization_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subtype-organization.page */ "./src/app/create-organization-flow/subtype-organization/subtype-organization.page.ts");




var routes = [
    {
        path: '',
        component: _subtype_organization_page__WEBPACK_IMPORTED_MODULE_3__["SubtypeOrganizationPage"],
    },
];
var SubtypeOrganizationPageRoutingModule = /** @class */ (function () {
    function SubtypeOrganizationPageRoutingModule() {
    }
    SubtypeOrganizationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SubtypeOrganizationPageRoutingModule);
    return SubtypeOrganizationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/create-organization-flow/subtype-organization/subtype-organization.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/create-organization-flow/subtype-organization/subtype-organization.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: SubtypeOrganizationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtypeOrganizationPageModule", function() { return SubtypeOrganizationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _subtype_organization_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subtype-organization-routing.module */ "./src/app/create-organization-flow/subtype-organization/subtype-organization-routing.module.ts");
/* harmony import */ var _subtype_organization_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subtype-organization.page */ "./src/app/create-organization-flow/subtype-organization/subtype-organization.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var SubtypeOrganizationPageModule = /** @class */ (function () {
    function SubtypeOrganizationPageModule() {
    }
    SubtypeOrganizationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _subtype_organization_routing_module__WEBPACK_IMPORTED_MODULE_2__["SubtypeOrganizationPageRoutingModule"]],
            declarations: [_subtype_organization_page__WEBPACK_IMPORTED_MODULE_3__["SubtypeOrganizationPage"]],
        })
    ], SubtypeOrganizationPageModule);
    return SubtypeOrganizationPageModule;
}());



/***/ }),

/***/ "./src/app/create-organization-flow/subtype-organization/subtype-organization.page.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/create-organization-flow/subtype-organization/subtype-organization.page.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-item {\n  line-height: 22px;\n}\n.text-item:last-of-type {\n  display: none;\n}\n.text-item ion-icon {\n  position: absolute;\n  left: -20px;\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLW9yZ2FuaXphdGlvbi1mbG93L3N1YnR5cGUtb3JnYW5pemF0aW9uL3N1YnR5cGUtb3JnYW5pemF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7QUFFSjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLW9yZ2FuaXphdGlvbi1mbG93L3N1YnR5cGUtb3JnYW5pemF0aW9uL3N1YnR5cGUtb3JnYW5pemF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWl0ZW0ge1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaW9uLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMjBweDtcbiAgICB0b3A6IDVweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/create-organization-flow/subtype-organization/subtype-organization.page.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/create-organization-flow/subtype-organization/subtype-organization.page.ts ***!
  \********************************************************************************************/
/*! exports provided: SubtypeOrganizationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtypeOrganizationPage", function() { return SubtypeOrganizationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@store/global-info/global-info.state */ "./src/app/@store/global-info/global-info.state.ts");
/* harmony import */ var _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@store/global-info/global-info.actions */ "./src/app/@store/global-info/global-info.actions.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _organization_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../organization-types */ "./src/app/create-organization-flow/organization-types.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _organization_base_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../organization-base.page */ "./src/app/create-organization-flow/organization-base.page.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../@store/pages/pages.actions */ "./src/app/@store/pages/pages.actions.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../@core/inform.service */ "./src/app/@core/inform.service.ts");

















var PAGE_POSITION = 1;
var SubtypeOrganizationPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SubtypeOrganizationPage, _super);
    function SubtypeOrganizationPage(router, location, store, utilsService, camera, informService, storage, translateService, formBuilder) {
        var _this = _super.call(this, location, router, store, utilsService, camera, informService, storage) || this;
        _this.translateService = translateService;
        _this.formBuilder = formBuilder;
        _this.organizationType = _organization_types__WEBPACK_IMPORTED_MODULE_9__["OrganizationTypes"].Sport;
        _this.textLines = [];
        if (_this.router.getCurrentNavigation().extras.state) {
            _this.organizationType = _this.router.getCurrentNavigation().extras.state.organizationType;
        }
        return _this;
    }
    SubtypeOrganizationPage.prototype.ngOnInit = function () {
        var _this = this;
        this.subtypesSubscription$ = this.sports$.subscribe(function (data) {
            _this.subtypesList = data;
        });
        this.subtypesSubscription$ = this.academic$.subscribe(function (data) {
            _this.subtypesList = data;
        });
        this.subtypesSubscription$ = this.other$.subscribe(function (data) {
            _this.subtypesList = data;
        });
        this.initForm();
    };
    SubtypeOrganizationPage.prototype.ionViewWillEnter = function () {
        this.loadSubtypes();
        this.title = this.translateService.instant("subtype-organization.option" + this.organizationType);
        this.text = this.translateService.instant("subtype-organization.text" + this.organizationType);
        this.label = this.translateService.instant("subtype-organization.label" + this.organizationType);
        this.textLines = this.text.split('.');
        this.customActionSheetOptions = {
            header: this.label,
            translucent: true,
        };
        this.prefix = _global_utils__WEBPACK_IMPORTED_MODULE_13__["Utils"].getSubtypeTranslationPrefix(this.organizationType);
    };
    SubtypeOrganizationPage.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            subtype: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
        });
    };
    SubtypeOrganizationPage.prototype.loadSubtypes = function () {
        switch (this.organizationType) {
            case _organization_types__WEBPACK_IMPORTED_MODULE_9__["OrganizationTypes"].Sport:
                this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_7__["GetSportOrganizationInfo"]());
                break;
            case _organization_types__WEBPACK_IMPORTED_MODULE_9__["OrganizationTypes"].Academic:
                this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_7__["GetAcademicOrganizationInfo"]());
                break;
            case _organization_types__WEBPACK_IMPORTED_MODULE_9__["OrganizationTypes"].Other:
                this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_7__["GetOtherOrganizationTypeInfo"]());
                break;
            default:
                console.error('No type selected');
                break;
        }
    };
    SubtypeOrganizationPage.prototype.goNextPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var navigationExtras;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.utilsService.isValidForm(this.formGroup)) {
                    this.store.dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_14__["UpdateCurrentPageData"]({ organization_subtype: this.formGroup.get('subtype').value }));
                    navigationExtras = {
                        state: {
                            organizationType: this.organizationType,
                        },
                    };
                    this.goNextFlowPage(PAGE_POSITION, navigationExtras);
                }
                return [2 /*return*/];
            });
        });
    };
    SubtypeOrganizationPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    SubtypeOrganizationPage.prototype.disconnectObservers = function () {
        this.subtypesSubscription$.unsubscribe();
    };
    SubtypeOrganizationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_16__["InformService"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_12__["StorageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_6__["GlobalInfoState"].getAcademicSubtypes)
    ], SubtypeOrganizationPage.prototype, "academic$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_6__["GlobalInfoState"].getSportSubtypes)
    ], SubtypeOrganizationPage.prototype, "sports$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_6__["GlobalInfoState"].getOtherSubtypes)
    ], SubtypeOrganizationPage.prototype, "other$", void 0);
    SubtypeOrganizationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subtype-organization',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./subtype-organization.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-organization-flow/subtype-organization/subtype-organization.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./subtype-organization.page.scss */ "./src/app/create-organization-flow/subtype-organization/subtype-organization.page.scss")).default]
        })
    ], SubtypeOrganizationPage);
    return SubtypeOrganizationPage;
}(_organization_base_page__WEBPACK_IMPORTED_MODULE_11__["OrganizationBasePage"]));



/***/ })

}]);
//# sourceMappingURL=create-organization-flow-subtype-organization-subtype-organization-module.js.map