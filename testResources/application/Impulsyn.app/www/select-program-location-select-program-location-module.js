(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-program-location-select-program-location-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-program-location/select-program-location.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-program-location/select-program-location.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [showBackButton]=\"showBackButton\"\n  [title]=\"'selectLocation.title' | translate\"\n  (backButtonClick)=\"goBack()\"\n></app-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"flex-container pr\">\n    <app-device-location\n      [buttonText]=\"'buttons.accept'\"\n      (actionButtonClick)=\"saveLocation($event)\"\n    ></app-device-location>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/select-program-location/select-program-location-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/select-program-location/select-program-location-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SelectProgramLocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProgramLocationPageRoutingModule", function() { return SelectProgramLocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_program_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-program-location.page */ "./src/app/select-program-location/select-program-location.page.ts");




var routes = [
    {
        path: '',
        component: _select_program_location_page__WEBPACK_IMPORTED_MODULE_3__["SelectProgramLocationPage"],
    },
];
var SelectProgramLocationPageRoutingModule = /** @class */ (function () {
    function SelectProgramLocationPageRoutingModule() {
    }
    SelectProgramLocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SelectProgramLocationPageRoutingModule);
    return SelectProgramLocationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/select-program-location/select-program-location.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/select-program-location/select-program-location.module.ts ***!
  \***************************************************************************/
/*! exports provided: SelectProgramLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProgramLocationPageModule", function() { return SelectProgramLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _select_program_location_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-program-location-routing.module */ "./src/app/select-program-location/select-program-location-routing.module.ts");
/* harmony import */ var _select_program_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-program-location.page */ "./src/app/select-program-location/select-program-location.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _shared_components_location_location_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/components/location/location.module */ "./src/app/@shared/components/location/location.module.ts");






var SelectProgramLocationPageModule = /** @class */ (function () {
    function SelectProgramLocationPageModule() {
    }
    SelectProgramLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _shared_components_location_location_module__WEBPACK_IMPORTED_MODULE_5__["LocationModule"], _select_program_location_routing_module__WEBPACK_IMPORTED_MODULE_2__["SelectProgramLocationPageRoutingModule"]],
            declarations: [_select_program_location_page__WEBPACK_IMPORTED_MODULE_3__["SelectProgramLocationPage"]],
        })
    ], SelectProgramLocationPageModule);
    return SelectProgramLocationPageModule;
}());



/***/ }),

/***/ "./src/app/select-program-location/select-program-location.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/select-program-location/select-program-location.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1wcm9ncmFtLWxvY2F0aW9uL3NlbGVjdC1wcm9ncmFtLWxvY2F0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/select-program-location/select-program-location.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/select-program-location/select-program-location.page.ts ***!
  \*************************************************************************/
/*! exports provided: SelectProgramLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProgramLocationPage", function() { return SelectProgramLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");








var SelectProgramLocationPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SelectProgramLocationPage, _super);
    function SelectProgramLocationPage(location, router, store, utilsService, navigationExtrasService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.navigationExtrasService = navigationExtrasService;
        return _this;
    }
    SelectProgramLocationPage.prototype.ngOnInit = function () { };
    SelectProgramLocationPage.prototype.saveLocation = function ($event) {
        this.navigationExtrasService.setExtras({ location: $event });
        this.goBack();
    };
    SelectProgramLocationPage.prototype.ngOnDestroy = function () { };
    SelectProgramLocationPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_7__["NavigationExtrasService"] }
    ]; };
    SelectProgramLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-program-location',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-program-location.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-program-location/select-program-location.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-program-location.page.scss */ "./src/app/select-program-location/select-program-location.page.scss")).default]
        })
    ], SelectProgramLocationPage);
    return SelectProgramLocationPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_6__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=select-program-location-select-program-location-module.js.map