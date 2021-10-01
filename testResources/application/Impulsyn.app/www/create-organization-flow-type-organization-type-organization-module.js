(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-organization-flow-type-organization-type-organization-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-organization-flow/type-organization/type-organization.page.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-organization-flow/type-organization/type-organization.page.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding background-with-dark-color\">\n  <ion-grid class=\"flex-container\">\n    <ion-row class=\"flex-item\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <div class=\"screen-big-title\" [innerHTML]=\"'type-organization.title' | translate\"></div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-align-items-center ion-justify-content-center ion-margin-vertical\">\n      <ion-col size=\"12\" class=\"ion-margin-top ion-text-center\" size-md=\"8\">\n        <div class=\"small-size\" [innerHTML]=\"'type-organization.text' | translate\"></div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-align-items-center\">\n      <div class=\"col-xs-12 flex-full-centered ion-margin-vertical\">\n        <div class=\"chip big with-icon-start\" [ngClass]=\"(selectedItem === 1)?'active':''\" (click)=\"selectItem(1)\">\n          <ion-icon name=\"american-football-outline\" class=\"big-size\"></ion-icon>\n          <span class=\"small-size\">{{'type-organization.option1' | translate}}</span>\n        </div>\n        <ion-icon name=\"help-circle-outline\" class=\"big-size icon-end\" (click)=\"presentPopover($event,1)\"></ion-icon>\n      </div>\n    </ion-row>\n    <ion-row class=\"flex-item ion-align-items-center\">\n      <div class=\"col-xs-12 flex-full-centered ion-margin-vertical\">\n        <div class=\"chip big with-icon-start\" [ngClass]=\"(selectedItem === 2)?'active':''\" (click)=\"selectItem(2)\">\n          <ion-icon name=\"school-outline\" class=\"big-size\"></ion-icon>\n          <span class=\"small-size\">{{'type-organization.option2' | translate}}</span>\n        </div>\n        <ion-icon name=\"help-circle-outline\" class=\"big-size icon-end\" (click)=\"presentPopover($event,2)\"></ion-icon>\n      </div>\n    </ion-row>\n    <ion-row class=\"flex-item ion-align-items-center fill-all-line-centered ion-margin-bottom ion-padding-bottom\">\n      <div class=\"col-xs-12 flex-full-centered ion-margin-vertical\">\n        <div class=\"chip big with-icon-start\" [ngClass]=\"(selectedItem === 3)?'active':''\" (click)=\"selectItem(3)\">\n          <ion-icon name=\"business-outline\" class=\"big-size\"></ion-icon>\n          <span class=\"small-size\">{{'type-organization.option3' | translate}}</span>\n        </div>\n        <ion-icon name=\"help-circle-outline\" class=\"big-size icon-end\" (click)=\"presentPopover($event,3)\"></ion-icon>\n      </div>\n    </ion-row>\n    <!--    <app-action-button (actionButtonClick)=\"goSubtypePage()\" [buttonText]=\"'next'\"></app-action-button>-->\n  </ion-grid>\n</ion-content>\n");

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

/***/ "./src/app/create-organization-flow/type-organization/type-organization-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/create-organization-flow/type-organization/type-organization-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: TypeOrganizationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOrganizationPageRoutingModule", function() { return TypeOrganizationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _type_organization_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-organization.page */ "./src/app/create-organization-flow/type-organization/type-organization.page.ts");




var routes = [
    {
        path: '',
        component: _type_organization_page__WEBPACK_IMPORTED_MODULE_3__["TypeOrganizationPage"],
    },
];
var TypeOrganizationPageRoutingModule = /** @class */ (function () {
    function TypeOrganizationPageRoutingModule() {
    }
    TypeOrganizationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TypeOrganizationPageRoutingModule);
    return TypeOrganizationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/create-organization-flow/type-organization/type-organization.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/create-organization-flow/type-organization/type-organization.module.ts ***!
  \****************************************************************************************/
/*! exports provided: TypeOrganizationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOrganizationPageModule", function() { return TypeOrganizationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _type_organization_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-organization-routing.module */ "./src/app/create-organization-flow/type-organization/type-organization-routing.module.ts");
/* harmony import */ var _type_organization_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-organization.page */ "./src/app/create-organization-flow/type-organization/type-organization.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var TypeOrganizationPageModule = /** @class */ (function () {
    function TypeOrganizationPageModule() {
    }
    TypeOrganizationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _type_organization_routing_module__WEBPACK_IMPORTED_MODULE_2__["TypeOrganizationPageRoutingModule"]],
            declarations: [_type_organization_page__WEBPACK_IMPORTED_MODULE_3__["TypeOrganizationPage"]],
        })
    ], TypeOrganizationPageModule);
    return TypeOrganizationPageModule;
}());



/***/ }),

/***/ "./src/app/create-organization-flow/type-organization/type-organization.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/create-organization-flow/type-organization/type-organization.page.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chip.big {\n  line-height: 45px;\n  margin: 8px;\n  padding: 0 25px 0 45px;\n}\n.chip.with-icon-start {\n  position: relative;\n}\n.chip.with-icon-start ion-icon {\n  position: absolute;\n  top: 50%;\n  transform: translate(45%, -55%);\n  left: 5px;\n}\n.icon-end {\n  color: var(--ion-color-secondary-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLW9yZ2FuaXphdGlvbi1mbG93L3R5cGUtb3JnYW5pemF0aW9uL3R5cGUtb3JnYW5pemF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQUo7QUFHRTtFQUNFLGtCQUFBO0FBREo7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtBQUROO0FBS0E7RUFDRSxzQ0FBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLW9yZ2FuaXphdGlvbi1mbG93L3R5cGUtb3JnYW5pemF0aW9uL3R5cGUtb3JnYW5pemF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGlwIHtcbiAgJi5iaWcge1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIG1hcmdpbjogOHB4O1xuICAgIHBhZGRpbmc6IDAgMjVweCAwIDQ1cHg7XG4gIH1cblxuICAmLndpdGgtaWNvbi1zdGFydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0NSUsIC01NSUpO1xuICAgICAgbGVmdDogNXB4O1xuICAgIH1cbiAgfVxufVxuLmljb24tZW5kIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/create-organization-flow/type-organization/type-organization.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/create-organization-flow/type-organization/type-organization.page.ts ***!
  \**************************************************************************************/
/*! exports provided: TypeOrganizationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOrganizationPage", function() { return TypeOrganizationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_components_info_popover_info_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@shared/components/info-popover/info-popover.component */ "./src/app/@shared/components/info-popover/info-popover.component.ts");
/* harmony import */ var _organization_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organization-types */ "./src/app/create-organization-flow/organization-types.ts");
/* harmony import */ var _organization_base_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../organization-base.page */ "./src/app/create-organization-flow/organization-base.page.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@store/pages/pages.actions */ "./src/app/@store/pages/pages.actions.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../@core/inform.service */ "./src/app/@core/inform.service.ts");















var PAGE_POSITION = 0;
var TypeOrganizationPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TypeOrganizationPage, _super);
    function TypeOrganizationPage(router, location, store, utilsService, camera, informService, storage, popoverController, translateService) {
        var _this = _super.call(this, location, router, store, utilsService, camera, informService, storage) || this;
        _this.popoverController = popoverController;
        _this.translateService = translateService;
        _this.selectedItem = _organization_types__WEBPACK_IMPORTED_MODULE_8__["OrganizationTypes"].None;
        return _this;
    }
    TypeOrganizationPage.prototype.ngOnInit = function () { };
    TypeOrganizationPage.prototype.selectItem = function (id) {
        if (this.isItemSelected(id)) {
            this.selectedItem = _organization_types__WEBPACK_IMPORTED_MODULE_8__["OrganizationTypes"].None;
        }
        else {
            this.selectedItem = id;
            this.goSubtypePage();
        }
    };
    TypeOrganizationPage.prototype.isItemSelected = function (id) {
        return this.selectedItem === id;
    };
    TypeOrganizationPage.prototype.goSubtypePage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var navigationExtras;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.store.dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_12__["UpdateCurrentPageData"]({ organization_type: this.selectedItem }));
                navigationExtras = {
                    state: {
                        organizationType: this.selectedItem,
                    },
                };
                this.goNextFlowPage(PAGE_POSITION, navigationExtras);
                return [2 /*return*/];
            });
        });
    };
    TypeOrganizationPage.prototype.getOption = function (option) {
        switch (option) {
            case _organization_types__WEBPACK_IMPORTED_MODULE_8__["OrganizationTypes"].Sport:
                return _organization_types__WEBPACK_IMPORTED_MODULE_8__["OrganizationTypes"].Sport;
            case _organization_types__WEBPACK_IMPORTED_MODULE_8__["OrganizationTypes"].Academic:
                return _organization_types__WEBPACK_IMPORTED_MODULE_8__["OrganizationTypes"].Academic;
            case _organization_types__WEBPACK_IMPORTED_MODULE_8__["OrganizationTypes"].Other:
                return _organization_types__WEBPACK_IMPORTED_MODULE_8__["OrganizationTypes"].Other;
            default:
                console.error('No type selected');
                break;
        }
    };
    TypeOrganizationPage.prototype.presentPopover = function ($event, option) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var title, text, popover;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = this.translateService.instant("type-organization.option" + this.getOption(option));
                        text = this.translateService.instant("type-organization.help" + this.getOption(option));
                        return [4 /*yield*/, this.popoverController.create({
                                event: $event,
                                component: _shared_components_info_popover_info_popover_component__WEBPACK_IMPORTED_MODULE_7__["InfoPopoverComponent"],
                                cssClass: 'custom-alert',
                                translucent: true,
                                componentProps: { title: title, text: text },
                            })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TypeOrganizationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_14__["InformService"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] }
    ]; };
    TypeOrganizationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-type-organization',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./type-organization.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-organization-flow/type-organization/type-organization.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./type-organization.page.scss */ "./src/app/create-organization-flow/type-organization/type-organization.page.scss")).default]
        })
    ], TypeOrganizationPage);
    return TypeOrganizationPage;
}(_organization_base_page__WEBPACK_IMPORTED_MODULE_9__["OrganizationBasePage"]));



/***/ })

}]);
//# sourceMappingURL=create-organization-flow-type-organization-type-organization-module.js.map