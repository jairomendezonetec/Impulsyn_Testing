(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-visits-see-all-visits-see-all-visits-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-visits/see-all-visits/see-all-visits.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-visits/see-all-visits/see-all-visits.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'profileViews.title' | translate\" [showBackButton]=\"true\" (backButtonClick)=\"goBack()\">\n</app-header>\n\n<ion-content class=\"item-list\">\n  <div *ngFor=\"let item of profileVisitsList$ | async\">\n    <app-item-visit [info]=\"item\"></app-item-visit>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/profile-visits/see-all-visits/see-all-visits-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/profile-visits/see-all-visits/see-all-visits-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: SeeAllVisitsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeAllVisitsPageRoutingModule", function() { return SeeAllVisitsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _see_all_visits_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./see-all-visits.page */ "./src/app/profile-visits/see-all-visits/see-all-visits.page.ts");




var routes = [
    {
        path: '',
        component: _see_all_visits_page__WEBPACK_IMPORTED_MODULE_3__["SeeAllVisitsPage"],
    },
];
var SeeAllVisitsPageRoutingModule = /** @class */ (function () {
    function SeeAllVisitsPageRoutingModule() {
    }
    SeeAllVisitsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SeeAllVisitsPageRoutingModule);
    return SeeAllVisitsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/profile-visits/see-all-visits/see-all-visits.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/profile-visits/see-all-visits/see-all-visits.module.ts ***!
  \************************************************************************/
/*! exports provided: SeeAllVisitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeAllVisitsPageModule", function() { return SeeAllVisitsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _see_all_visits_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./see-all-visits-routing.module */ "./src/app/profile-visits/see-all-visits/see-all-visits-routing.module.ts");
/* harmony import */ var _see_all_visits_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./see-all-visits.page */ "./src/app/profile-visits/see-all-visits/see-all-visits.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _components_item_visit_item_visit_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/item-visit/item-visit.module */ "./src/app/profile-visits/components/item-visit/item-visit.module.ts");






var SeeAllVisitsPageModule = /** @class */ (function () {
    function SeeAllVisitsPageModule() {
    }
    SeeAllVisitsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _see_all_visits_routing_module__WEBPACK_IMPORTED_MODULE_2__["SeeAllVisitsPageRoutingModule"], _components_item_visit_item_visit_module__WEBPACK_IMPORTED_MODULE_5__["ItemVisitComponentModule"]],
            declarations: [_see_all_visits_page__WEBPACK_IMPORTED_MODULE_3__["SeeAllVisitsPage"]],
        })
    ], SeeAllVisitsPageModule);
    return SeeAllVisitsPageModule;
}());



/***/ }),

/***/ "./src/app/profile-visits/see-all-visits/see-all-visits.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/profile-visits/see-all-visits/see-all-visits.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtdmlzaXRzL3NlZS1hbGwtdmlzaXRzL3NlZS1hbGwtdmlzaXRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile-visits/see-all-visits/see-all-visits.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/profile-visits/see-all-visits/see-all-visits.page.ts ***!
  \**********************************************************************/
/*! exports provided: SeeAllVisitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeAllVisitsPage", function() { return SeeAllVisitsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _store_network_network_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@store/network/network.state */ "./src/app/@store/network/network.state.ts");








var SeeAllVisitsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SeeAllVisitsPage, _super);
    function SeeAllVisitsPage(router, location, store, utilsService) {
        return _super.call(this, location, router, store, utilsService) || this;
    }
    SeeAllVisitsPage.prototype.ngOnInit = function () {
        this.profileVisitsList$ = this.store.select(_store_network_network_state__WEBPACK_IMPORTED_MODULE_7__["NetworkState"].getVisits);
    };
    SeeAllVisitsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] }
    ]; };
    SeeAllVisitsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-see-all-visits',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./see-all-visits.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-visits/see-all-visits/see-all-visits.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./see-all-visits.page.scss */ "./src/app/profile-visits/see-all-visits/see-all-visits.page.scss")).default]
        })
    ], SeeAllVisitsPage);
    return SeeAllVisitsPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=profile-visits-see-all-visits-see-all-visits-module.js.map