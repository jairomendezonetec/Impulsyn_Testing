(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["download-new-version-download-new-version-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/download-new-version/download-new-version.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/download-new-version/download-new-version.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"showBackButton\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content>\n  <div class=\"flex-container\">\n    <ion-row class=\"flex-item ion-margin-vertical\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <div class=\"screen-big-title\" [innerHTML]=\"'downloadNewVersion.text' | translate\"></div>\n      </ion-col>\n    </ion-row>\n    <app-action-button\n      (actionButtonClick)=\"openStore()\"\n      [buttonText]=\"'downloadNewVersion.download'\"\n    ></app-action-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/download-new-version/download-new-version-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/download-new-version/download-new-version-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DownloadNewVersionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadNewVersionPageRoutingModule", function() { return DownloadNewVersionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _download_new_version_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download-new-version.page */ "./src/app/download-new-version/download-new-version.page.ts");




var routes = [
    {
        path: '',
        component: _download_new_version_page__WEBPACK_IMPORTED_MODULE_3__["DownloadNewVersionPage"],
    },
];
var DownloadNewVersionPageRoutingModule = /** @class */ (function () {
    function DownloadNewVersionPageRoutingModule() {
    }
    DownloadNewVersionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DownloadNewVersionPageRoutingModule);
    return DownloadNewVersionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/download-new-version/download-new-version.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/download-new-version/download-new-version.module.ts ***!
  \*********************************************************************/
/*! exports provided: DownloadNewVersionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadNewVersionPageModule", function() { return DownloadNewVersionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _download_new_version_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./download-new-version-routing.module */ "./src/app/download-new-version/download-new-version-routing.module.ts");
/* harmony import */ var _download_new_version_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download-new-version.page */ "./src/app/download-new-version/download-new-version.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var DownloadNewVersionPageModule = /** @class */ (function () {
    function DownloadNewVersionPageModule() {
    }
    DownloadNewVersionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _download_new_version_routing_module__WEBPACK_IMPORTED_MODULE_2__["DownloadNewVersionPageRoutingModule"]],
            declarations: [_download_new_version_page__WEBPACK_IMPORTED_MODULE_3__["DownloadNewVersionPage"]],
        })
    ], DownloadNewVersionPageModule);
    return DownloadNewVersionPageModule;
}());



/***/ }),

/***/ "./src/app/download-new-version/download-new-version.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/download-new-version/download-new-version.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".link {\n  color: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG93bmxvYWQtbmV3LXZlcnNpb24vZG93bmxvYWQtbmV3LXZlcnNpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rvd25sb2FkLW5ldy12ZXJzaW9uL2Rvd25sb2FkLW5ldy12ZXJzaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5rIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/download-new-version/download-new-version.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/download-new-version/download-new-version.page.ts ***!
  \*******************************************************************/
/*! exports provided: DownloadNewVersionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadNewVersionPage", function() { return DownloadNewVersionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var src_app_global_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/@global/constants */ "./src/app/@global/constants.ts");









var DownloadNewVersionPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DownloadNewVersionPage, _super);
    function DownloadNewVersionPage(location, router, store, utilsService, platform) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.platform = platform;
        return _this;
    }
    DownloadNewVersionPage.prototype.ngOnInit = function () { };
    DownloadNewVersionPage.prototype.openStore = function () {
        var storeUrl = this.platform.is('android') ? src_app_global_constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].MARKET_ANDROID_URL : src_app_global_constants__WEBPACK_IMPORTED_MODULE_8__["Constants"].MARKET_IOS_URL;
        this.utilsService.openLink(storeUrl);
    };
    DownloadNewVersionPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
    ]; };
    DownloadNewVersionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-download-new-version',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./download-new-version.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/download-new-version/download-new-version.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./download-new-version.page.scss */ "./src/app/download-new-version/download-new-version.page.scss")).default]
        })
    ], DownloadNewVersionPage);
    return DownloadNewVersionPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_6__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=download-new-version-download-new-version-module.js.map