(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-organization-flow-name-organization-name-organization-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-organization-flow/name-organization/name-organization.page.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-organization-flow/name-organization/name-organization.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding background-with-dark-color\">\n  <form [formGroup]=\"formGroup\">\n    <div class=\"flex-container-vertical\">\n      <ion-row class=\"flex-item\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <div class=\"screen-extrabig-title\" [innerHTML]=\"'name-organization.title' | translate\"></div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"flex-item ion-padding-vertical ion-margin-vertical\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <span class=\"small-size ion-text-center ion-margin-top\">{{ 'name-organization.text1' | translate }}</span\n          ><br />\n          <span class=\"small-size ion-text-center ion-margin-top\">{{ 'name-organization.text2' | translate }}</span\n          ><br />\n        </ion-col>\n      </ion-row>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin-bottom ion-margin-top input-background\">\n            <ion-label appPlatformMode>{{'name-organization.input1' | translate}}</ion-label>\n            <ion-input\n              type=\"text\"\n              inputmode=\"text\"\n              [formControlName]=\"'organizationName'\"\n              [maxlength]=\"maxlength\"\n              required\n            ></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['organizationName']\"></app-show-errors>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin-bottom ion-margin-top input-background pr\">\n            <ion-label appPlatformMode>{{'name-organization.input2' | translate}}</ion-label>\n            <ion-input type=\"text\" inputmode=\"text\" [formControlName]=\"'tagline'\" [maxlength]=\"maxlength\"></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['tagline']\"></app-show-errors>\n        </div>\n        <div class=\"pr col-xs-1 col-sm-2\">\n          <ion-icon name=\"help-circle-outline\" class=\"big-size icon-end\" (click)=\"presentPopover($event)\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"flex-justify-content-center\">\n        <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n          <ion-item lines=\"full\" class=\"ion-margin-bottom ion-margin-top input-background\">\n            <ion-label appPlatformMode>{{'name-organization.input3' | translate}}</ion-label>\n            <ion-input\n              type=\"text\"\n              inputmode=\"text\"\n              [formControlName]=\"'web'\"\n              [maxlength]=\"maxlength\"\n              placeholder=\"{{ 'name-organization.placeholder' | translate }}\"\n            ></ion-input>\n          </ion-item>\n          <app-show-errors [control]=\"formGroup.controls['web']\"></app-show-errors>\n        </div>\n      </div>\n      <app-action-button\n        class=\"ion-padding-vertical ion-margin-vertical\"\n        (actionButtonClick)=\"saveOrganizationData()\"\n        [buttonText]=\"'next'\"\n      ></app-action-button>\n    </div>\n  </form>\n</ion-content>\n");

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

/***/ "./src/app/create-organization-flow/name-organization/name-organization-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/create-organization-flow/name-organization/name-organization-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: NameOrganizationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameOrganizationPageRoutingModule", function() { return NameOrganizationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _name_organization_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./name-organization.page */ "./src/app/create-organization-flow/name-organization/name-organization.page.ts");




var routes = [
    {
        path: '',
        component: _name_organization_page__WEBPACK_IMPORTED_MODULE_3__["NameOrganizationPage"],
    },
];
var NameOrganizationPageRoutingModule = /** @class */ (function () {
    function NameOrganizationPageRoutingModule() {
    }
    NameOrganizationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NameOrganizationPageRoutingModule);
    return NameOrganizationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/create-organization-flow/name-organization/name-organization.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/create-organization-flow/name-organization/name-organization.module.ts ***!
  \****************************************************************************************/
/*! exports provided: NameOrganizationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameOrganizationPageModule", function() { return NameOrganizationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _name_organization_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./name-organization-routing.module */ "./src/app/create-organization-flow/name-organization/name-organization-routing.module.ts");
/* harmony import */ var _name_organization_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./name-organization.page */ "./src/app/create-organization-flow/name-organization/name-organization.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var NameOrganizationPageModule = /** @class */ (function () {
    function NameOrganizationPageModule() {
    }
    NameOrganizationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _name_organization_routing_module__WEBPACK_IMPORTED_MODULE_2__["NameOrganizationPageRoutingModule"]],
            declarations: [_name_organization_page__WEBPACK_IMPORTED_MODULE_3__["NameOrganizationPage"]],
        })
    ], NameOrganizationPageModule);
    return NameOrganizationPageModule;
}());



/***/ }),

/***/ "./src/app/create-organization-flow/name-organization/name-organization.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/create-organization-flow/name-organization/name-organization.page.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-end {\n  color: var(--ion-color-secondary-tint);\n  position: absolute;\n  top: 50%;\n  transform: translate(45%, -55%);\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLW9yZ2FuaXphdGlvbi1mbG93L25hbWUtb3JnYW5pemF0aW9uL25hbWUtb3JnYW5pemF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7RUFDQSxPQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtb3JnYW5pemF0aW9uLWZsb3cvbmFtZS1vcmdhbml6YXRpb24vbmFtZS1vcmdhbml6YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tZW5kIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQ1JSwgLTU1JSk7XG4gIGxlZnQ6IDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/create-organization-flow/name-organization/name-organization.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/create-organization-flow/name-organization/name-organization.page.ts ***!
  \**************************************************************************************/
/*! exports provided: NameOrganizationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameOrganizationPage", function() { return NameOrganizationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _organization_base_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organization-base.page */ "./src/app/create-organization-flow/organization-base.page.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var _shared_components_info_popover_info_popover_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@shared/components/info-popover/info-popover.component */ "./src/app/@shared/components/info-popover/info-popover.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../@shared/validators/form-custom-validators */ "./src/app/@shared/validators/form-custom-validators.ts");
/* harmony import */ var _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../@store/pages/pages.actions */ "./src/app/@store/pages/pages.actions.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../@core/inform.service */ "./src/app/@core/inform.service.ts");

















var PAGE_POSITION = 2;
var NameOrganizationPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NameOrganizationPage, _super);
    function NameOrganizationPage(router, location, store, utilsService, camera, informService, storage, formBuilder, translateService, popoverController) {
        var _this = _super.call(this, location, router, store, utilsService, camera, informService, storage) || this;
        _this.formBuilder = formBuilder;
        _this.translateService = translateService;
        _this.popoverController = popoverController;
        _this.maxlength = _global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].MAX_LENGTH_TITLE;
        return _this;
    }
    NameOrganizationPage.prototype.ngOnInit = function () {
        this.initForm();
    };
    NameOrganizationPage.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            organizationName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxlength)]],
            tagline: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxlength)]],
            web: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(this.maxlength), _shared_validators_form_custom_validators__WEBPACK_IMPORTED_MODULE_13__["FormCustomValidators"].validUrl]],
        });
    };
    NameOrganizationPage.prototype.saveOrganizationData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.utilsService.isValidForm(this.formGroup)) {
                    data = {
                        complete_name: this.formGroup.get('organizationName').value,
                        tagline: this.formGroup.get('tagline').value,
                        website: this.formGroup.get('web').value,
                    };
                    this.store.dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_14__["UpdateCurrentPageData"](data));
                    this.goNextFlowPage(PAGE_POSITION);
                }
                return [2 /*return*/];
            });
        });
    };
    NameOrganizationPage.prototype.presentPopover = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var text, popover;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        text = this.translateService.instant("name-organization.infoText");
                        return [4 /*yield*/, this.popoverController.create({
                                event: event,
                                component: _shared_components_info_popover_info_popover_component__WEBPACK_IMPORTED_MODULE_10__["InfoPopoverComponent"],
                                cssClass: 'custom-alert',
                                translucent: true,
                                componentProps: { text: text },
                            })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NameOrganizationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_16__["InformService"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["PopoverController"] }
    ]; };
    NameOrganizationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-name-organization',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./name-organization.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-organization-flow/name-organization/name-organization.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./name-organization.page.scss */ "./src/app/create-organization-flow/name-organization/name-organization.page.scss")).default]
        })
    ], NameOrganizationPage);
    return NameOrganizationPage;
}(_organization_base_page__WEBPACK_IMPORTED_MODULE_8__["OrganizationBasePage"]));



/***/ })

}]);
//# sourceMappingURL=create-organization-flow-name-organization-name-organization-module.js.map