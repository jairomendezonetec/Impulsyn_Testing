(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-flow-location-location-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/location/location.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/location/location.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content class=\"ion-padding background-with-dark-color\">\n  <ion-grid class=\"flex-container\">\n    <ion-row class=\"flex-item ion-margin-vertical\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <div class=\"screen-extrabig-title\" [innerHTML]=\"'location.title' | translate\"></div>\n      </ion-col>\n    </ion-row>\n    <app-device-location\n      [buttonText]=\"'next'\"\n      [deviceLocation]=\"geocodeResult\"\n      (actionButtonClick)=\"saveLocation($event)\"\n    ></app-device-location>\n    <ion-row class=\"flex-item ion-align-items-center w100 ion-justify-content-center\">\n      <div class=\"col-xs-10 col-sm-6 col-lg-6 ion-text-center flex-container-vertical\">\n        <a color=\"white\" class=\"ion-padding-vertical small-size\" (click)=\"skip()\">{{'skip' | translate}}</a>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

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

/***/ "./src/app/signup-flow/location/location-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/signup-flow/location/location-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: LocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageRoutingModule", function() { return LocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.page */ "./src/app/signup-flow/location/location.page.ts");




var routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_3__["LocationPage"],
    },
];
var LocationPageRoutingModule = /** @class */ (function () {
    function LocationPageRoutingModule() {
    }
    LocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LocationPageRoutingModule);
    return LocationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup-flow/location/location.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/signup-flow/location/location.module.ts ***!
  \*********************************************************/
/*! exports provided: LocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _location_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location-routing.module */ "./src/app/signup-flow/location/location-routing.module.ts");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.page */ "./src/app/signup-flow/location/location.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _shared_components_location_location_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@shared/components/location/location.module */ "./src/app/@shared/components/location/location.module.ts");






var LocationPageModule = /** @class */ (function () {
    function LocationPageModule() {
    }
    LocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _location_routing_module__WEBPACK_IMPORTED_MODULE_2__["LocationPageRoutingModule"], _shared_components_location_location_module__WEBPACK_IMPORTED_MODULE_5__["LocationModule"]],
            declarations: [_location_page__WEBPACK_IMPORTED_MODULE_3__["LocationPage"]],
        })
    ], LocationPageModule);
    return LocationPageModule;
}());



/***/ }),

/***/ "./src/app/signup-flow/location/location.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/signup-flow/location/location.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1mbG93L2xvY2F0aW9uL2xvY2F0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/signup-flow/location/location.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/signup-flow/location/location.page.ts ***!
  \*******************************************************/
/*! exports provided: LocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPage", function() { return LocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _signup_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signup-base.page */ "./src/app/signup-flow/signup-base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _store_preferences_preferences_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@store/preferences/preferences.actions */ "./src/app/@store/preferences/preferences.actions.ts");
/* harmony import */ var _store_preferences_preferences_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@store/preferences/preferences.state */ "./src/app/@store/preferences/preferences.state.ts");
/* harmony import */ var _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../@core/google-analytics.service */ "./src/app/@core/google-analytics.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../@core/inform.service */ "./src/app/@core/inform.service.ts");
















var PAGE_POSITION = 5;
var LocationPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocationPage, _super);
    function LocationPage(router, location, store, utilsService, camera, informService, storage, navigationExtrasService, googleAnalyticsService, diagnostic, platform) {
        var _this = _super.call(this, location, router, store, utilsService, camera, informService, storage, navigationExtrasService, googleAnalyticsService) || this;
        _this.diagnostic = diagnostic;
        _this.platform = platform;
        _this.allowedLocationDetection = false;
        return _this;
    }
    LocationPage.prototype.ngOnInit = function () {
        // override showBackButton
        this.showBackButton = this.checkGoBack();
    };
    LocationPage.prototype.ionViewDidEnter = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    LocationPage.prototype.subscribeToLocationStateChanges = function () {
        var _this = this;
        this.diagnostic.registerLocationStateChangeHandler(function (state) {
            if ((_this.platform.is('android') && state !== _this.diagnostic.locationMode.LOCATION_OFF) ||
                (_this.platform.is('ios') &&
                    (state === _this.diagnostic.permissionStatus.GRANTED ||
                        state === _this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE))) {
                _this.getUserPosition();
                // deregister, so it is only done once
                _this.diagnostic.registerLocationStateChangeHandler(null);
            }
        });
    };
    LocationPage.prototype.searchDeviceUserLocation = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isLocationEnabled, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.diagnostic.isLocationEnabled()];
                    case 1:
                        isLocationEnabled = _a.sent();
                        if (!!isLocationEnabled) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.utilsService.showActiveLocationAlert()];
                    case 2:
                        _a.sent();
                        this.subscribeToLocationStateChanges();
                        return [3 /*break*/, 4];
                    case 3:
                        this.getUserPosition();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error('searchDeviceUserLocation ' + error_1.message);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LocationPage.prototype.getUserPosition = function () {
        var _this = this;
        this.store.dispatch(new _store_preferences_preferences_actions__WEBPACK_IMPORTED_MODULE_11__["GetUserCoordinates"]());
        this.locationSubscription$ = this.coordinates$.subscribe(function (coordinates) {
            if (coordinates) {
                _this.allowedLocationDetection = true;
                _this.coordinates = coordinates;
                _this.store.dispatch(new _store_preferences_preferences_actions__WEBPACK_IMPORTED_MODULE_11__["GetUserGeolocation"]({
                    latitude: _this.coordinates.latitude,
                    longitude: _this.coordinates.longitude,
                }));
            }
        });
        this.geocodeSubscription$ = this.geolocation$.subscribe(function (data) {
            if (data) {
                _this.geocodeResult = data;
            }
        });
    };
    LocationPage.prototype.saveLocation = function ($event) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var location;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        location = {
                            country: (_a = $event.country) === null || _a === void 0 ? void 0 : _a.id,
                            region: (_b = $event.region) === null || _b === void 0 ? void 0 : _b.id,
                            province: (_c = $event.province) === null || _c === void 0 ? void 0 : _c.id,
                            city: $event.city,
                            region_name: $event.region_name,
                        };
                        return [4 /*yield*/, this.updateSignupFlowInfo(PAGE_POSITION, 'location', location)];
                    case 1:
                        _d.sent();
                        this.goNextFlowPage(PAGE_POSITION);
                        return [2 /*return*/];
                }
            });
        });
    };
    LocationPage.prototype.disconnectObservers = function () {
        if (this.locationSubscription$) {
            this.locationSubscription$.unsubscribe();
        }
        if (this.geocodeSubscription$) {
            this.geocodeSubscription$.unsubscribe();
        }
    };
    LocationPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    LocationPage.prototype.skip = function () {
        // go next page
        this.goNextFlowPage(PAGE_POSITION);
    };
    LocationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_15__["InformService"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_8__["NavigationExtrasService"] },
        { type: _core_google_analytics_service__WEBPACK_IMPORTED_MODULE_13__["GoogleAnalyticsService"] },
        { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_9__["Diagnostic"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_preferences_preferences_state__WEBPACK_IMPORTED_MODULE_12__["PreferencesState"].getCoordinates)
    ], LocationPage.prototype, "coordinates$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_preferences_preferences_state__WEBPACK_IMPORTED_MODULE_12__["PreferencesState"].getGeolocation)
    ], LocationPage.prototype, "geolocation$", void 0);
    LocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./location.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-flow/location/location.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./location.page.scss */ "./src/app/signup-flow/location/location.page.scss")).default]
        })
    ], LocationPage);
    return LocationPage;
}(_signup_base_page__WEBPACK_IMPORTED_MODULE_2__["SignupBasePage"]));



/***/ })

}]);
//# sourceMappingURL=signup-flow-location-location-module.js.map