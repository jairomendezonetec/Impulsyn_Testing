(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~select-location-select-location-module~select-program-location-select-program-location-modul~a9b70ea9"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/@shared/components/location/location.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/@shared/components/location/location.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"formGroup\">\n  <ion-row class=\"flex-item ion-align-items-center w100 ion-justify-content-center\">\n    <div class=\"pr col-xs-10 col-sm-6 col-lg-6 ion-text-center flex-container-vertical\" *ngIf=\"countryList?.length > 0\">\n      <ion-item lines=\"full\" class=\"ion-margin-bottom ion-margin-top input-background\">\n        <ion-label appPlatformMode>{{ 'formFields.country' | translate }}</ion-label>\n        <ion-select\n          interface=\"action-sheet\"\n          formControlName=\"countryCode\"\n          (ionChange)=\"getRegionsOfCountry()\"\n          class=\"custom-alert\"\n          [interfaceOptions]=\"customActionSheetOptionsCountry\"\n          okText=\"{{ 'buttons.accept' | translate }}\"\n          cancelText=\"{{ 'buttons.cancel' | translate }}\"\n        >\n          <ion-select-option [value]=\"defaultOption.value\">{{ defaultOption.name | translate }}</ion-select-option>\n          <ion-select-option\n            *ngFor=\"let countryOption of countryList | sortBy: 'asc':'name'\"\n            [value]=\"countryOption.value\"\n          >\n            {{ countryOption.name | translate }}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n      <app-show-errors [control]=\"formGroup.controls['countryCode']\"></app-show-errors>\n    </div>\n  </ion-row>\n  <ion-row class=\"flex-item ion-align-items-center w100 ion-justify-content-center\">\n    <div class=\"pr col-xs-10 col-sm-6 col-lg-6 ion-text-center flex-container-vertical\" *ngIf=\"regionsOfCountry\">\n      <ion-item lines=\"full\" class=\"ion-margin-bottom ion-margin-top input-background\">\n        <ion-label appPlatformMode>{{ 'formFields.region' | translate }}</ion-label>\n        <ion-select\n          (ionChange)=\"getProvinces()\"\n          [formControlName]=\"'region'\"\n          class=\"custom-alert\"\n          interface=\"action-sheet\"\n          [interfaceOptions]=\"customActionSheetOptionsRegion\"\n          [selectedText]=\"formGroup.get('region').value\"\n          okText=\"{{ 'buttons.accept' | translate }}\"\n          cancelText=\"{{ 'buttons.cancel' | translate }}\"\n        >\n          <ion-select-option *ngFor=\"let region of regions | sortBy: 'asc':'name'\" [value]=\"region.name\">\n            {{ region.name | translate }}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n      <app-show-errors [control]=\"formGroup.controls['region']\"></app-show-errors>\n    </div>\n  </ion-row>\n  <ion-row class=\"flex-item ion-align-items-center w100 ion-justify-content-center\">\n    <div\n      class=\"pr col-xs-10 col-sm-6 col-lg-6 ion-text-center flex-container-vertical\"\n      *ngIf=\"regionsOfCountry && provinces?.length > 1\"\n    >\n      <ion-item lines=\"full\" class=\"ion-margin-bottom ion-margin-top input-background\">\n        <ion-label appPlatformMode>{{ 'formFields.province' | translate }}</ion-label>\n        <ion-select\n          [formControlName]=\"'province'\"\n          class=\"custom-alert\"\n          [interfaceOptions]=\"customActionSheetOptionsProvince\"\n          interface=\"action-sheet\"\n          okText=\"{{ 'buttons.accept' | translate }}\"\n          cancelText=\"{{ 'buttons.cancel' | translate }}\"\n        >\n          <ion-select-option *ngFor=\"let province of provinces | sortBy: 'asc':'name'\" [value]=\"province.name\">\n            {{ province.name }}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n      <app-show-errors [control]=\"formGroup.controls['province']\"></app-show-errors>\n    </div>\n  </ion-row>\n  <ion-row class=\"flex-item ion-align-items-center w100 ion-justify-content-center\">\n    <div class=\"pr col-xs-10 col-sm-6 col-lg-6 ion-text-center flex-container-vertical\" *ngIf=\"regionsOfCountry\">\n      <ion-item lines=\"full\" class=\"ion-margin-bottom ion-margin-top input-background\">\n        <ion-label appPlatformMode>{{ 'formFields.city' | translate }}</ion-label>\n        <ion-input type=\"text'\" [formControlName]=\"'city'\"></ion-input>\n      </ion-item>\n      <app-show-errors [control]=\"formGroup.controls['city']\"></app-show-errors>\n    </div>\n  </ion-row>\n  <ion-row class=\"flex-item ion-align-items-center w100 ion-justify-content-center\">\n    <div class=\"pr col-xs-10 col-sm-6 col-lg-6 ion-text-center flex-container-vertical\" *ngIf=\"!regionsOfCountry\">\n      <ion-item lines=\"full\" class=\"ion-margin-bottom ion-margin-top input-background\">\n        <ion-label appPlatformMode>{{ 'formFields.region' | translate }}</ion-label>\n        <ion-input type=\"text'\" [formControlName]=\"'region'\"></ion-input>\n      </ion-item>\n      <app-show-errors [control]=\"formGroup.controls['region']\"></app-show-errors>\n    </div>\n  </ion-row>\n</form>\n<ion-row class=\"ion-padding-vertical ion-margin-vertical\"></ion-row>\n<app-action-button (actionButtonClick)=\"buttonClick()\" [buttonText]=\"buttonText\"></app-action-button>\n");

/***/ }),

/***/ "./src/app/@shared/components/location/location.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/@shared/components/location/location.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvY29tcG9uZW50cy9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@shared/components/location/location.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@shared/components/location/location.component.ts ***!
  \*******************************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@store/global-info/global-info.actions */ "./src/app/@store/global-info/global-info.actions.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@store/global-info/global-info.state */ "./src/app/@store/global-info/global-info.state.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);










var SPECIAL_CASE = 'es';
var LocationComponent = /** @class */ (function () {
    function LocationComponent(formBuilder, store, translate, utilsService) {
        this.formBuilder = formBuilder;
        this.store = store;
        this.translate = translate;
        this.utilsService = utilsService;
        this.actionButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.regionsOfCountry = false;
        this.isSpain = false;
        this.defaultOption = {
            name: 'Spain',
            value: 'es',
        };
    }
    LocationComponent.prototype.ngOnChanges = function (changes) {
        var _a, _b;
        if ((_a = changes['deviceLocation']) === null || _a === void 0 ? void 0 : _a.currentValue) {
            var deviceLocationValue = changes['deviceLocation'].currentValue;
            var countryCode = (_b = deviceLocationValue.countryCode) === null || _b === void 0 ? void 0 : _b.toLowerCase();
            // set country
            this.formGroup.get('countryCode').setValue(countryCode);
            this.formGroup.get('city').setValue(deviceLocationValue.locality);
            this.getRegions(countryCode);
        }
    };
    LocationComponent.prototype.ngOnInit = function () {
        // override showBackButton
        this.loadLocalCountriesInfo();
        this.initForm();
        this.labelCountry = this.translate.instant("formFields.country");
        this.labelRegion = this.translate.instant("formFields.region");
        this.labelProvince = this.translate.instant("formFields.province");
        this.customActionSheetOptionsCountry = {
            header: this.labelCountry,
            translucent: true,
        };
        this.customActionSheetOptionsRegion = {
            header: this.labelRegion,
            translucent: true,
        };
        this.customActionSheetOptionsProvince = {
            header: this.labelProvince,
            translucent: true,
        };
    };
    LocationComponent.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            countryCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            region: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            province: '',
            city: [''],
        });
    };
    LocationComponent.prototype.getRegionsOfCountry = function () {
        this.resetSubLevels();
        var countryCode = this.formGroup.get('countryCode').value;
        this.isSpain = countryCode === SPECIAL_CASE;
        this.getRegions(countryCode);
    };
    LocationComponent.prototype.resetSubLevels = function () {
        this.resetProvinces();
        this.resetRegion();
        this.formGroup.get('city').setValue('');
    };
    LocationComponent.prototype.resetRegion = function () {
        this.formGroup.get('region').reset();
        this.formGroup.get('region').setValue('', { emitEvent: false });
    };
    LocationComponent.prototype.getRegions = function (countryCode) {
        var _a;
        if (this.isCountryWithRegions(countryCode)) {
            this.regionsOfCountry = true;
            var foundRegions = this.getCountry(countryCode);
            if (((_a = foundRegions === null || foundRegions === void 0 ? void 0 : foundRegions.regions) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.regions = foundRegions.regions;
                // this.formGroup.get('region').setValue(this.regions[0].name, { emitEvent: false });
                if (this.deviceLocation) {
                    console.dir(this.deviceLocation);
                    this.searchRegionInLocalFile(this.deviceLocation.administrativeArea);
                }
                else {
                    this.getProvinces();
                }
            }
        }
        else {
            this.resetRegion();
            this.regionsOfCountry = false;
        }
    };
    LocationComponent.prototype.resetProvinces = function () {
        this.provinces = [];
        this.formGroup.get('province').reset();
        this.formGroup.get('province').clearValidators();
        this.formGroup.get('province').updateValueAndValidity({ onlySelf: true, emitEvent: false });
        this.formGroup.get('province').disable();
    };
    LocationComponent.prototype.getProvinces = function () {
        if (!this.isSpain) {
            this.resetProvinces();
        }
        else {
            if (this.formGroup.get('region').value) {
                var regionSelected = this.formGroup.get('region').value;
                var regionFounded = this.getRegion(regionSelected);
                // const regionFounded = this.searchElementList(this.regions, this.formGroup.get('region').value);
                if (regionFounded) {
                    this.provinces = regionFounded.provinces;
                    this.selectUniqueProvince(regionFounded);
                    this.formGroup.get('province').enable();
                    if (this.provinces.length > 1) {
                        this.formGroup.get('province').reset();
                        this.formGroup.get('province').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                        this.formGroup.get('province').updateValueAndValidity({ onlySelf: true, emitEvent: false });
                    }
                }
            }
        }
    };
    LocationComponent.prototype.searchRegionInLocalFile = function (regionNameSelected) {
        var _a;
        if (regionNameSelected) {
            var regionFounded = this.getRegion(regionNameSelected);
            if (regionFounded) {
                // region founded
                this.formGroup.get('region').setValue(regionFounded.name, { emitEvent: false });
                if (this.isSpain) {
                    // show provinces
                    this.provinces = regionFounded.provinces;
                    this.selectUniqueProvince(regionFounded);
                    if ((_a = this.deviceLocation) === null || _a === void 0 ? void 0 : _a.subAdministrativeArea) {
                        var selectedProvince = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["find"])(this.provinces, { name: this.deviceLocation.subAdministrativeArea });
                        if (selectedProvince) {
                            this.formGroup.get('province').setValue(selectedProvince.name);
                        }
                    }
                }
            }
        }
    };
    LocationComponent.prototype.isCountryWithRegions = function (country) {
        return _global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].COUNTRIES_REGION_LIST.indexOf(country === null || country === void 0 ? void 0 : country.toLowerCase()) !== -1;
    };
    LocationComponent.prototype.selectUniqueProvince = function (region) {
        if (region.provinces.length === 1) {
            this.formGroup.get('province').setValue(region.provinces[0].name);
        }
    };
    LocationComponent.prototype.loadLocalCountriesInfo = function () {
        var _this = this;
        this.store.dispatch(new _store_global_info_global_info_actions__WEBPACK_IMPORTED_MODULE_3__["GetLocationInfo"]());
        this.countriesSubscription$ = this.countries$.subscribe(function (data) {
            _this.countryList = data;
        });
    };
    LocationComponent.prototype.disconnectObservers = function () {
        try {
            this.countriesSubscription$.unsubscribe();
        }
        catch (e) {
            console.log(e);
        }
    };
    LocationComponent.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    LocationComponent.prototype.buttonClick = function () {
        var _a, _b, _c, _d, _e, _f;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var countrySelected, regionSelected, provinceSelected, resultObject;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_g) {
                if (this.utilsService.isValidForm(this.formGroup)) {
                    countrySelected = this.formGroup.get('countryCode').value;
                    regionSelected = this.formGroup.get('region').value;
                    provinceSelected = this.formGroup.get('province').value;
                    resultObject = {
                        country: { id: (_a = this.getCountry(countrySelected)) === null || _a === void 0 ? void 0 : _a.id, name: (_b = this.getCountry(countrySelected)) === null || _b === void 0 ? void 0 : _b.name },
                        city: this.formGroup.get('city').value,
                    };
                    if (this.isCountryWithRegions(countrySelected)) {
                        resultObject['region'] = { id: (_c = this.getRegion(regionSelected)) === null || _c === void 0 ? void 0 : _c.id, name: (_d = this.getRegion(regionSelected)) === null || _d === void 0 ? void 0 : _d.name };
                        if (this.isSpain) {
                            resultObject['province'] = {
                                id: (_e = this.getProvince(provinceSelected)) === null || _e === void 0 ? void 0 : _e.id,
                                name: (_f = this.getProvince(provinceSelected)) === null || _f === void 0 ? void 0 : _f.name,
                            };
                        }
                    }
                    else {
                        resultObject['region_name'] = regionSelected;
                    }
                    this.actionButtonClick.emit(resultObject);
                }
                return [2 /*return*/];
            });
        });
    };
    LocationComponent.prototype.getCountry = function (countryCode) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_9__["find"])(this.countryList, { value: countryCode });
    };
    LocationComponent.prototype.getRegion = function (regionNameSelected) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_9__["find"])(this.regions, { name: regionNameSelected });
    };
    LocationComponent.prototype.getProvince = function (provinceName) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_9__["find"])(this.provinces, { name: provinceName });
    };
    LocationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] }
    ]; };
    LocationComponent.propDecorators = {
        buttonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        deviceLocation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        actionButtonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_global_info_global_info_state__WEBPACK_IMPORTED_MODULE_5__["GlobalInfoState"].getCountries)
    ], LocationComponent.prototype, "countries$", void 0);
    LocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-location',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/@shared/components/location/location.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./location.component.scss */ "./src/app/@shared/components/location/location.component.scss")).default]
        })
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/@shared/components/location/location.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/@shared/components/location/location.module.ts ***!
  \****************************************************************/
/*! exports provided: LocationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationModule", function() { return LocationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _location_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.component */ "./src/app/@shared/components/location/location.component.ts");




var LocationModule = /** @class */ (function () {
    function LocationModule() {
    }
    LocationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_location_component__WEBPACK_IMPORTED_MODULE_3__["LocationComponent"]],
            imports: [_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
            exports: [_location_component__WEBPACK_IMPORTED_MODULE_3__["LocationComponent"]],
        })
    ], LocationModule);
    return LocationModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~select-location-select-location-module~select-program-location-select-program-location-modul~a9b70ea9.js.map