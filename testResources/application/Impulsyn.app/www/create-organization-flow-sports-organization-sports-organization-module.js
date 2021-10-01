(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-organization-flow-sports-organization-sports-organization-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-organization-flow/sports-organization/sports-organization.page.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-organization-flow/sports-organization/sports-organization.page.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding background-with-dark-color\">\n  <div class=\"flex-container\">\n    <ion-row class=\"flex-item\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <div class=\"screen-extrabig-title\" [innerHTML]=\"title\"></div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-margin-vertical fill-all-line-centered ion-justify-content-center\">\n      <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n        <!--        <div class=\"ion-text-end small-size ion-padding-bottom ion-color-tertiary\">-->\n        <!--          {{ 'sports.maxItems' | translate}}{{ max }}-->\n        <!--        </div>-->\n        <div class=\"container-chip pr\" *ngIf=\"sportsList?.length > 0\">\n          <span\n            class=\"small-size chip\"\n            *ngFor=\"let sport of sportsList\"\n            id=\"{{sport.id}}\"\n            (click)=\"selectItem(sport.id)\"\n            [ngClass]=\"(isItemSelected(sport.id))?'active':''\"\n          >\n            {{('sports.' + sport.name) | translate}}\n          </span>\n        </div>\n        <!--        <div class=\"ion-text-end small-size ion-padding-top\" [ngClass]=\"(reachMaxItemsSelected())?'danger':''\">-->\n        <!--          {{selectedItems.length}} / {{ max }}-->\n        <!--        </div>-->\n        <div class=\"ion-text-left\">\n          <ion-item class=\"ion-no-border\">\n            <ion-label class=\"regular-size\">{{ 'sports.all' | translate}}</ion-label>\n            <ion-toggle\n              [(ngModel)]=\"allToggle\"\n              [checked]=\"allToggle\"\n              slot=\"start\"\n              name=\"all\"\n              color=\"secondary\"\n              (ionChange)=\"resetSelection()\"\n            ></ion-toggle>\n          </ion-item>\n        </div>\n      </div>\n    </ion-row>\n    <app-action-button-link\n      [buttonText]=\"'next'\"\n      [linkText]=\"'skip'\"\n      (actionButtonClick)=\"goNextPage()\"\n      (actionLinkClick)=\"goNextPage()\"\n    ></app-action-button-link>\n  </div>\n</ion-content>\n");

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

/***/ "./src/app/create-organization-flow/sports-organization/sports-organization-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/create-organization-flow/sports-organization/sports-organization-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: SportsOrganizationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsOrganizationPageRoutingModule", function() { return SportsOrganizationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sports_organization_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sports-organization.page */ "./src/app/create-organization-flow/sports-organization/sports-organization.page.ts");




var routes = [
    {
        path: '',
        component: _sports_organization_page__WEBPACK_IMPORTED_MODULE_3__["SportsOrganizationPage"],
    },
];
var SportsOrganizationPageRoutingModule = /** @class */ (function () {
    function SportsOrganizationPageRoutingModule() {
    }
    SportsOrganizationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SportsOrganizationPageRoutingModule);
    return SportsOrganizationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/create-organization-flow/sports-organization/sports-organization.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/create-organization-flow/sports-organization/sports-organization.module.ts ***!
  \********************************************************************************************/
/*! exports provided: SportsOrganizationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsOrganizationPageModule", function() { return SportsOrganizationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sports_organization_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sports-organization-routing.module */ "./src/app/create-organization-flow/sports-organization/sports-organization-routing.module.ts");
/* harmony import */ var _sports_organization_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sports-organization.page */ "./src/app/create-organization-flow/sports-organization/sports-organization.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var SportsOrganizationPageModule = /** @class */ (function () {
    function SportsOrganizationPageModule() {
    }
    SportsOrganizationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _sports_organization_routing_module__WEBPACK_IMPORTED_MODULE_2__["SportsOrganizationPageRoutingModule"]],
            declarations: [_sports_organization_page__WEBPACK_IMPORTED_MODULE_3__["SportsOrganizationPage"]],
        })
    ], SportsOrganizationPageModule);
    return SportsOrganizationPageModule;
}());



/***/ }),

/***/ "./src/app/create-organization-flow/sports-organization/sports-organization.page.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/create-organization-flow/sports-organization/sports-organization.page.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1vcmdhbml6YXRpb24tZmxvdy9zcG9ydHMtb3JnYW5pemF0aW9uL3Nwb3J0cy1vcmdhbml6YXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/create-organization-flow/sports-organization/sports-organization.page.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/create-organization-flow/sports-organization/sports-organization.page.ts ***!
  \******************************************************************************************/
/*! exports provided: SportsOrganizationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsOrganizationPage", function() { return SportsOrganizationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _organization_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../organization-base.page */ "./src/app/create-organization-flow/organization-base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var _store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@store/global-info/global-info.state */ "./src/app/@store/global-info/global-info.state.ts");
/* harmony import */ var _organization_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../organization-types */ "./src/app/create-organization-flow/organization-types.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@store/global-info/global-info.actions */ "./src/app/@store/global-info/global-info.actions.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../@core/inform.service */ "./src/app/@core/inform.service.ts");














// const SPORTS_MAX_ITEMS = 10;
var PAGE_POSITION = 2;
var SportsOrganizationPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SportsOrganizationPage, _super);
    function SportsOrganizationPage(router, location, store, utilsService, camera, informService, storage, translateService) {
        var _this = _super.call(this, location, router, store, utilsService, camera, informService, storage) || this;
        _this.translateService = translateService;
        _this.organizationType = _organization_types__WEBPACK_IMPORTED_MODULE_9__["OrganizationTypes"].Sport;
        _this.selectedItems = [];
        _this.allToggle = false;
        if (_this.router.getCurrentNavigation().extras.state) {
            _this.organizationType = _this.router.getCurrentNavigation().extras.state.organizationType;
        }
        return _this;
    }
    SportsOrganizationPage.prototype.ngOnInit = function () {
        this.loadSportsInfo();
        this.title = this.translateService.instant("sports-organization.title" + this.getOption());
    };
    SportsOrganizationPage.prototype.getOption = function () {
        switch (this.organizationType) {
            case _organization_types__WEBPACK_IMPORTED_MODULE_9__["OrganizationTypes"].Sport:
                return _organization_types__WEBPACK_IMPORTED_MODULE_9__["OrganizationTypes"].Sport;
            case _organization_types__WEBPACK_IMPORTED_MODULE_9__["OrganizationTypes"].Academic:
                return _organization_types__WEBPACK_IMPORTED_MODULE_9__["OrganizationTypes"].Academic;
            case _organization_types__WEBPACK_IMPORTED_MODULE_9__["OrganizationTypes"].Other:
                return _organization_types__WEBPACK_IMPORTED_MODULE_9__["OrganizationTypes"].Other;
            default:
                console.error('No type selected');
                break;
        }
    };
    SportsOrganizationPage.prototype.loadSportsInfo = function () {
        var _this = this;
        this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_11__["GetSportsInfo"]());
        this.subscription$ = this.sports$.subscribe(function (data) {
            _this.sportsList = data;
        });
    };
    SportsOrganizationPage.prototype.selectItem = function (id) {
        var _a;
        if (this.isItemSelected(id)) {
            this.selectedItems = this.selectedItems.filter(function (item) { return item !== id; });
        }
        else {
            // if (this.selectedItems.length < SPORTS_MAX_ITEMS) {
            this.selectedItems.push((_a = this.sportsList.find(function (item) { return item.id === id; })) === null || _a === void 0 ? void 0 : _a.id);
            // }
        }
    };
    SportsOrganizationPage.prototype.isItemSelected = function (id) {
        var _a;
        return ((_a = this.selectedItems) === null || _a === void 0 ? void 0 : _a.indexOf(id)) !== -1;
    };
    // public reachMaxItemsSelected(): boolean {
    //   return this.selectedItems.length === SPORTS_MAX_ITEMS;
    // }
    SportsOrganizationPage.prototype.goNextPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.selectedItems.length !== 0 || this.allToggle) {
                    // await this.updateStorageDataObject('sport', this.allToggle ? ['-1'] : this.selectedItems);
                }
                this.goNextFlowPage(PAGE_POSITION);
                return [2 /*return*/];
            });
        });
    };
    SportsOrganizationPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    SportsOrganizationPage.prototype.resetSelection = function () {
        if (this.allToggle) {
            this.selectedItems = [];
        }
    };
    SportsOrganizationPage.prototype.disconnectObservers = function () {
        this.subscription$.unsubscribe();
    };
    SportsOrganizationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_13__["InformService"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_8__["GlobalInfoState"].getSports)
    ], SportsOrganizationPage.prototype, "sports$", void 0);
    SportsOrganizationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sports-organization',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sports-organization.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-organization-flow/sports-organization/sports-organization.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sports-organization.page.scss */ "./src/app/create-organization-flow/sports-organization/sports-organization.page.scss")).default]
        })
    ], SportsOrganizationPage);
    return SportsOrganizationPage;
}(_organization_base_page__WEBPACK_IMPORTED_MODULE_2__["OrganizationBasePage"]));



/***/ })

}]);
//# sourceMappingURL=create-organization-flow-sports-organization-sports-organization-module.js.map