(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-user-info-pages-sports-sports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-user-info/pages/sports/sports.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-user-info/pages/sports/sports.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding background-with-dark-color\">\n  <div class=\"flex-container\">\n    <ion-row class=\"flex-item\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <div class=\"screen-extrabig-title\" [innerHTML]=\"'sports.title' | translate\"></div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-justify-content-center\">\n      <div class=\"pr col-xs-10 col-sm-8 col-lg-6\">\n        <div class=\"ion-text-end small-size ion-padding-bottom ion-color-tertiary\">\n          {{ 'sports.maxItems' | translate}}{{ max }}\n        </div>\n        <div class=\"container-chip pr\" *ngIf=\"sportsList?.length > 0\">\n          <div class=\"shadow-layer\" [ngClass]=\"allToggle?'':'ion-hide'\"></div>\n          <span\n            class=\"small-size chip\"\n            *ngFor=\"let sport of sportsList\"\n            id=\"{{sport.id}}\"\n            (click)=\"selectItem(sport.id)\"\n            [ngClass]=\"(isItemSelected(sport.id))?'active':''\"\n          >\n            {{('sports.' + sport.name) | translate}}\n          </span>\n        </div>\n        <div class=\"ion-text-end small-size ion-padding-top\" [ngClass]=\"(reachMaxItemsSelected())?'danger':''\">\n          {{selectedItems.length}} / {{ max }}\n        </div>\n        <div class=\"ion-text-left\">\n          <ion-item class=\"ion-no-border\">\n            <ion-label class=\"regular-size\">{{ 'sports.all' | translate}}</ion-label>\n            <ion-toggle\n              [(ngModel)]=\"allToggle\"\n              [checked]=\"allToggle\"\n              slot=\"start\"\n              name=\"all\"\n              color=\"secondary\"\n              (ionChange)=\"resetSelection()\"\n            ></ion-toggle>\n          </ion-item>\n        </div>\n      </div>\n    </ion-row>\n    <app-action-button (actionButtonClick)=\"nextPage()\" [buttonText]=\"'next'\"></app-action-button>\n  </div>\n</ion-content>\n");

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

/***/ "./src/app/edit-user-info/pages/sports/sports-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/edit-user-info/pages/sports/sports-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: SportsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsPageRoutingModule", function() { return SportsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sports_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sports.page */ "./src/app/edit-user-info/pages/sports/sports.page.ts");




var routes = [
    {
        path: '',
        component: _sports_page__WEBPACK_IMPORTED_MODULE_3__["SportsPage"],
    },
];
var SportsPageRoutingModule = /** @class */ (function () {
    function SportsPageRoutingModule() {
    }
    SportsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SportsPageRoutingModule);
    return SportsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/edit-user-info/pages/sports/sports.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/edit-user-info/pages/sports/sports.module.ts ***!
  \**************************************************************/
/*! exports provided: SportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsPageModule", function() { return SportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sports_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sports-routing.module */ "./src/app/edit-user-info/pages/sports/sports-routing.module.ts");
/* harmony import */ var _sports_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sports.page */ "./src/app/edit-user-info/pages/sports/sports.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var SportsPageModule = /** @class */ (function () {
    function SportsPageModule() {
    }
    SportsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _sports_routing_module__WEBPACK_IMPORTED_MODULE_2__["SportsPageRoutingModule"]],
            declarations: [_sports_page__WEBPACK_IMPORTED_MODULE_3__["SportsPage"]],
        })
    ], SportsPageModule);
    return SportsPageModule;
}());



/***/ }),

/***/ "./src/app/edit-user-info/pages/sports/sports.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/edit-user-info/pages/sports/sports.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --padding-start: 0;\n}\n\n.shadow-layer {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.1);\n}\n\nion-toggle {\n  --background: var(--ion-color-medium-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC11c2VyLWluZm8vcGFnZXMvc3BvcnRzL3Nwb3J0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFFRjs7QUFBQTtFQUNFLDJDQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXVzZXItaW5mby9wYWdlcy9zcG9ydHMvc3BvcnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuLnNoYWRvdy1sYXllciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5pb24tdG9nZ2xlIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/edit-user-info/pages/sports/sports.page.ts":
/*!************************************************************!*\
  !*** ./src/app/edit-user-info/pages/sports/sports.page.ts ***!
  \************************************************************/
/*! exports provided: SportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsPage", function() { return SportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@store/global-info/global-info.state */ "./src/app/@store/global-info/global-info.state.ts");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@core/inform.service */ "./src/app/@core/inform.service.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _signup_flow_signup_base_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../signup-flow/signup-base.page */ "./src/app/signup-flow/signup-base.page.ts");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@store/global-info/global-info.actions */ "./src/app/@store/global-info/global-info.actions.ts");
/* harmony import */ var _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@core/google-analytics.service */ "./src/app/@core/google-analytics.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");














var SPORTS_MAX_ITEMS = 3;
var PAGE_POSITION = 3;
var SportsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SportsPage, _super);
    function SportsPage(router, location, store, utilsService, camera, informService, storage, navigationExtrasService, googleAnalyticsService) {
        var _this = _super.call(this, location, router, store, utilsService, camera, informService, storage, navigationExtrasService, googleAnalyticsService) || this;
        _this.max = SPORTS_MAX_ITEMS;
        _this.selectedItems = [];
        _this.allToggle = false;
        return _this;
    }
    SportsPage.prototype.ngOnInit = function () {
        this.loadSportsInfo();
        // override showBackButton
        this.showBackButton = this.checkGoBack();
    };
    SportsPage.prototype.loadSportsInfo = function () {
        var _this = this;
        this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_11__["GetSportsInfo"]());
        this.subscription$ = this.sports$.subscribe(function (data) {
            _this.sportsList = data;
        });
    };
    SportsPage.prototype.selectItem = function (id) {
        var _a;
        if (this.isItemSelected(id)) {
            this.selectedItems = this.selectedItems.filter(function (item) { return item !== id; });
        }
        else {
            if (this.selectedItems.length < SPORTS_MAX_ITEMS) {
                this.selectedItems.push((_a = this.sportsList.find(function (item) { return item.id === id; })) === null || _a === void 0 ? void 0 : _a.id);
            }
        }
    };
    SportsPage.prototype.isItemSelected = function (id) {
        var _a;
        return ((_a = this.selectedItems) === null || _a === void 0 ? void 0 : _a.indexOf(id)) !== -1;
    };
    SportsPage.prototype.reachMaxItemsSelected = function () {
        return this.selectedItems.length === SPORTS_MAX_ITEMS;
    };
    SportsPage.prototype.nextPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.selectedItems.length !== 0 || this.allToggle)) return [3 /*break*/, 2];
                        // await this.updateSignupFlowInfo(PAGE_POSITION, 'sports', this.allToggle ? ['-1'] : this.selectedItems);
                        return [4 /*yield*/, this.updateSignupFlowInfo(PAGE_POSITION, 'sports', null)];
                    case 1:
                        // await this.updateSignupFlowInfo(PAGE_POSITION, 'sports', this.allToggle ? ['-1'] : this.selectedItems);
                        _a.sent();
                        // go next page
                        this.goNextFlowPage(PAGE_POSITION);
                        return [3 /*break*/, 3];
                    case 2:
                        this.informService.showWarning('sports.selectionMessage');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SportsPage.prototype.resetSelection = function () {
        if (this.allToggle) {
            this.selectedItems = [];
        }
    };
    SportsPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    SportsPage.prototype.disconnectObservers = function () {
        this.subscription$.unsubscribe();
    };
    SportsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_6__["InformService"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_8__["NavigationExtrasService"] },
        { type: _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_12__["GoogleAnalyticsService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_5__["GlobalInfoState"].getSports)
    ], SportsPage.prototype, "sports$", void 0);
    SportsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sports',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sports.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-user-info/pages/sports/sports.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sports.page.scss */ "./src/app/edit-user-info/pages/sports/sports.page.scss")).default]
        })
    ], SportsPage);
    return SportsPage;
}(_signup_flow_signup_base_page__WEBPACK_IMPORTED_MODULE_9__["SignupBasePage"]));



/***/ })

}]);
//# sourceMappingURL=edit-user-info-pages-sports-sports-module.js.map