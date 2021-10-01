(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["opportunities-see-all-opportunities-see-all-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunities/see-all-opportunities/see-all.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/opportunities/see-all-opportunities/see-all.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'opportunities.suggestions' | translate\" [showBackButton]=\"true\" (backButtonClick)=\"goBack()\">\n</app-header>\n\n<ion-content class=\"item-list\">\n  <div *ngFor=\"let item of items\">\n    <app-opportunity-item\n      [info]=\"item\"\n      [hasPhoto]=\"true\"\n      [linkText]=\"'opportunities.seeMore'\"\n      (itemClick)=\"onItemClick($event)\"\n    ></app-opportunity-item>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/opportunities/see-all-opportunities/see-all-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/opportunities/see-all-opportunities/see-all-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SeeAllPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeAllPageRoutingModule", function() { return SeeAllPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _see_all_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./see-all.page */ "./src/app/opportunities/see-all-opportunities/see-all.page.ts");




var routes = [
    {
        path: '',
        component: _see_all_page__WEBPACK_IMPORTED_MODULE_3__["SeeAllPage"],
    },
];
var SeeAllPageRoutingModule = /** @class */ (function () {
    function SeeAllPageRoutingModule() {
    }
    SeeAllPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SeeAllPageRoutingModule);
    return SeeAllPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/opportunities/see-all-opportunities/see-all.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/opportunities/see-all-opportunities/see-all.module.ts ***!
  \***********************************************************************/
/*! exports provided: SeeAllPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeAllPageModule", function() { return SeeAllPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _see_all_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./see-all-routing.module */ "./src/app/opportunities/see-all-opportunities/see-all-routing.module.ts");
/* harmony import */ var _see_all_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./see-all.page */ "./src/app/opportunities/see-all-opportunities/see-all.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var SeeAllPageModule = /** @class */ (function () {
    function SeeAllPageModule() {
    }
    SeeAllPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _see_all_routing_module__WEBPACK_IMPORTED_MODULE_2__["SeeAllPageRoutingModule"]],
            declarations: [_see_all_page__WEBPACK_IMPORTED_MODULE_3__["SeeAllPage"]],
        })
    ], SeeAllPageModule);
    return SeeAllPageModule;
}());



/***/ }),

/***/ "./src/app/opportunities/see-all-opportunities/see-all.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/opportunities/see-all-opportunities/see-all.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wcG9ydHVuaXRpZXMvc2VlLWFsbC1vcHBvcnR1bml0aWVzL3NlZS1hbGwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/opportunities/see-all-opportunities/see-all.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/opportunities/see-all-opportunities/see-all.page.ts ***!
  \*********************************************************************/
/*! exports provided: SeeAllPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeAllPage", function() { return SeeAllPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var src_app_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/@store/job-offers/job-offers.state */ "./src/app/@store/job-offers/job-offers.state.ts");
/* harmony import */ var _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@store/job-offers/job-offers.actions */ "./src/app/@store/job-offers/job-offers.actions.ts");









var SeeAllPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SeeAllPage, _super);
    function SeeAllPage(router, location, store, utilsService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.items = [];
        return _this;
    }
    SeeAllPage.prototype.ngOnInit = function () {
        this.subscribeToSuggestions();
    };
    SeeAllPage.prototype.onItemClick = function ($event) {
        var jobOffer = this.store
            .selectSnapshot(src_app_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_7__["JobOffersState"].getJobOffersSuggestions)
            .find(function (item) { return item.id === $event; });
        var jobOfferUpdated = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, jobOffer), { own: false });
        this.store.dispatch(new _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_8__["SetCurrentJobOffer"](jobOfferUpdated));
        this.router.navigate(['opportunity-detail', $event]);
    };
    SeeAllPage.prototype.subscribeToSuggestions = function () {
        var _this = this;
        this.suggestionsSubscription = this.store.select(src_app_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_7__["JobOffersState"].getJobOffersSuggestions).subscribe(function (res) {
            _this.items = res;
        });
    };
    SeeAllPage.prototype.disconnectObservers = function () {
        if (this.suggestionsSubscription) {
            this.suggestionsSubscription.unsubscribe();
        }
    };
    SeeAllPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    SeeAllPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] }
    ]; };
    SeeAllPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-see-all',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./see-all.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunities/see-all-opportunities/see-all.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./see-all.page.scss */ "./src/app/opportunities/see-all-opportunities/see-all.page.scss")).default]
        })
    ], SeeAllPage);
    return SeeAllPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=opportunities-see-all-opportunities-see-all-module.js.map