(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-location-select-location-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-location/select-location.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-location/select-location.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [showBackButton]=\"showBackButton\"\n  [title]=\"'selectLocation.title' | translate\"\n  (backButtonClick)=\"goBack()\"\n></app-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"flex-container pr\">\n    <app-device-location\n      [buttonText]=\"'buttons.accept'\"\n      [deviceLocation]=\"geocodeResult\"\n      (actionButtonClick)=\"saveLocation($event)\"\n    ></app-device-location>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/select-location/select-location-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/select-location/select-location-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SelectLocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLocationPageRoutingModule", function() { return SelectLocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-location.page */ "./src/app/select-location/select-location.page.ts");




var routes = [
    {
        path: '',
        component: _select_location_page__WEBPACK_IMPORTED_MODULE_3__["SelectLocationPage"],
    },
];
var SelectLocationPageRoutingModule = /** @class */ (function () {
    function SelectLocationPageRoutingModule() {
    }
    SelectLocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SelectLocationPageRoutingModule);
    return SelectLocationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/select-location/select-location.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/select-location/select-location.module.ts ***!
  \***********************************************************/
/*! exports provided: SelectLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLocationPageModule", function() { return SelectLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _select_location_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-location-routing.module */ "./src/app/select-location/select-location-routing.module.ts");
/* harmony import */ var _select_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-location.page */ "./src/app/select-location/select-location.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _shared_components_location_location_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/components/location/location.module */ "./src/app/@shared/components/location/location.module.ts");






var SelectLocationPageModule = /** @class */ (function () {
    function SelectLocationPageModule() {
    }
    SelectLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _select_location_routing_module__WEBPACK_IMPORTED_MODULE_2__["SelectLocationPageRoutingModule"], _shared_components_location_location_module__WEBPACK_IMPORTED_MODULE_5__["LocationModule"]],
            declarations: [_select_location_page__WEBPACK_IMPORTED_MODULE_3__["SelectLocationPage"]],
        })
    ], SelectLocationPageModule);
    return SelectLocationPageModule;
}());



/***/ }),

/***/ "./src/app/select-location/select-location.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/select-location/select-location.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1sb2NhdGlvbi9zZWxlY3QtbG9jYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/select-location/select-location.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/select-location/select-location.page.ts ***!
  \*********************************************************/
/*! exports provided: SelectLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLocationPage", function() { return SelectLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _store_preferences_preferences_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@store/preferences/preferences.state */ "./src/app/@store/preferences/preferences.state.ts");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _store_preferences_preferences_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@store/preferences/preferences.actions */ "./src/app/@store/preferences/preferences.actions.ts");
/* harmony import */ var _store_user_user_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@store/user/user.actions */ "./src/app/@store/user/user.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");














var SelectLocationPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SelectLocationPage, _super);
    function SelectLocationPage(location, router, store, utilsService, diagnostic, platform) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.diagnostic = diagnostic;
        _this.platform = platform;
        _this.allowedLocationDetection = false;
        return _this;
    }
    SelectLocationPage.prototype.ngOnInit = function () { };
    SelectLocationPage.prototype.ionViewDidEnter = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.platform.is('cordova') && _env_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].locationGPSActive)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.searchDeviceUserLocation()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    SelectLocationPage.prototype.saveLocation = function ($event) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var location;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                location = {
                    country: (_a = $event.country) === null || _a === void 0 ? void 0 : _a.id,
                    region: (_b = $event.region) === null || _b === void 0 ? void 0 : _b.id,
                    province: (_c = $event.province) === null || _c === void 0 ? void 0 : _c.id,
                    city: $event.city,
                    region_name: $event.region_name,
                };
                this.store
                    .dispatch(new _store_user_user_actions__WEBPACK_IMPORTED_MODULE_11__["SetUserInfo"]({ userInfo: location }))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1))
                    .subscribe(function () {
                    _this.goBack();
                }, function (error) {
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    SelectLocationPage.prototype.searchDeviceUserLocation = function () {
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
    SelectLocationPage.prototype.subscribeToLocationStateChanges = function () {
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
    SelectLocationPage.prototype.getUserPosition = function () {
        var _this = this;
        this.store.dispatch(new _store_preferences_preferences_actions__WEBPACK_IMPORTED_MODULE_10__["GetUserCoordinates"]());
        this.locationSubscription$ = this.coordinates$.subscribe(function (coordinates) {
            if (coordinates) {
                _this.allowedLocationDetection = true;
                _this.coordinates = coordinates;
                _this.store.dispatch(new _store_preferences_preferences_actions__WEBPACK_IMPORTED_MODULE_10__["GetUserGeolocation"]({
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
    SelectLocationPage.prototype.disconnectObservers = function () {
        if (this.locationSubscription$) {
            this.locationSubscription$.unsubscribe();
        }
        if (this.geocodeSubscription$) {
            this.geocodeSubscription$.unsubscribe();
        }
    };
    SelectLocationPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    SelectLocationPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_8__["Diagnostic"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_preferences_preferences_state__WEBPACK_IMPORTED_MODULE_7__["PreferencesState"].getCoordinates)
    ], SelectLocationPage.prototype, "coordinates$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_preferences_preferences_state__WEBPACK_IMPORTED_MODULE_7__["PreferencesState"].getGeolocation)
    ], SelectLocationPage.prototype, "geolocation$", void 0);
    SelectLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-location',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-location.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-location/select-location.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-location.page.scss */ "./src/app/select-location/select-location.page.scss")).default]
        })
    ], SelectLocationPage);
    return SelectLocationPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=select-location-select-location-module.js.map