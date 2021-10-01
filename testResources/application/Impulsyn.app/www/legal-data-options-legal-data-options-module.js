(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["legal-data-options-legal-data-options-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/legal-data-options/legal-data-options.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/legal-data-options/legal-data-options.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [showBackButton]=\"showBackButton\"\n  [title]=\"'legalDataOptions.title'\"\n  (backButtonClick)=\"goBack()\"\n></app-header>\n<ion-content>\n  <ion-list>\n    <ion-item (click)=\"openPrivacyPolicy()\">\n      <ion-label> {{ 'legalDataOptions.privacyPolicy' | translate }} </ion-label>\n    </ion-item>\n    <ion-item (click)=\"openConditions()\">\n      <ion-label> {{ 'legalDataOptions.termsAndConditions' | translate }} </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/legal-data-options/legal-data-options-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/legal-data-options/legal-data-options-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: LegalDataOptionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalDataOptionsPageRoutingModule", function() { return LegalDataOptionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _legal_data_options_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legal-data-options.page */ "./src/app/legal-data-options/legal-data-options.page.ts");




var routes = [
    {
        path: '',
        component: _legal_data_options_page__WEBPACK_IMPORTED_MODULE_3__["LegalDataOptionsPage"],
    },
];
var LegalDataOptionsPageRoutingModule = /** @class */ (function () {
    function LegalDataOptionsPageRoutingModule() {
    }
    LegalDataOptionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LegalDataOptionsPageRoutingModule);
    return LegalDataOptionsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/legal-data-options/legal-data-options.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/legal-data-options/legal-data-options.module.ts ***!
  \*****************************************************************/
/*! exports provided: LegalDataOptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalDataOptionsPageModule", function() { return LegalDataOptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _legal_data_options_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legal-data-options-routing.module */ "./src/app/legal-data-options/legal-data-options-routing.module.ts");
/* harmony import */ var _legal_data_options_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legal-data-options.page */ "./src/app/legal-data-options/legal-data-options.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var LegalDataOptionsPageModule = /** @class */ (function () {
    function LegalDataOptionsPageModule() {
    }
    LegalDataOptionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _legal_data_options_routing_module__WEBPACK_IMPORTED_MODULE_2__["LegalDataOptionsPageRoutingModule"]],
            declarations: [_legal_data_options_page__WEBPACK_IMPORTED_MODULE_3__["LegalDataOptionsPage"]],
        })
    ], LegalDataOptionsPageModule);
    return LegalDataOptionsPageModule;
}());



/***/ }),

/***/ "./src/app/legal-data-options/legal-data-options.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/legal-data-options/legal-data-options.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --padding-start: 0;\n}\nion-item ion-label {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVnYWwtZGF0YS1vcHRpb25zL2xlZ2FsLWRhdGEtb3B0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvbGVnYWwtZGF0YS1vcHRpb25zL2xlZ2FsLWRhdGEtb3B0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgaW9uLWxhYmVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/legal-data-options/legal-data-options.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/legal-data-options/legal-data-options.page.ts ***!
  \***************************************************************/
/*! exports provided: LegalDataOptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalDataOptionsPage", function() { return LegalDataOptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _store_common_common_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@store/common/common.state */ "./src/app/@store/common/common.state.ts");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@core/storage.service */ "./src/app/@core/storage.service.ts");











var LegalDataOptionsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LegalDataOptionsPage, _super);
    function LegalDataOptionsPage(router, location, store, utilsService, iab, storage) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.iab = iab;
        _this.storage = storage;
        return _this;
    }
    LegalDataOptionsPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, _b;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        _b = this.store.selectSnapshot(_store_common_common_state__WEBPACK_IMPORTED_MODULE_9__["CommonState"].getLanguage);
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.storage.getLanguage()];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        _a.language = _b;
                        return [2 /*return*/];
                }
            });
        });
    };
    LegalDataOptionsPage.prototype.openPrivacyPolicy = function () {
        this.iab.create(_global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].PRIVACY_POLICY_URL + '?lang=' + this.language);
    };
    LegalDataOptionsPage.prototype.openConditions = function () {
        this.iab.create(_global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].USE_TERMS_AND_CONDITIONS_URL + '?lang=' + this.language);
    };
    LegalDataOptionsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] }
    ]; };
    LegalDataOptionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-legal-data-options',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./legal-data-options.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/legal-data-options/legal-data-options.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./legal-data-options.page.scss */ "./src/app/legal-data-options/legal-data-options.page.scss")).default]
        })
    ], LegalDataOptionsPage);
    return LegalDataOptionsPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=legal-data-options-legal-data-options-module.js.map