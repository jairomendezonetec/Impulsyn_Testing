(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-opportunities-my-opportunities-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunities/my-opportunities/my-opportunities.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/opportunities/my-opportunities/my-opportunities.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [title]=\"'myOpportunities.title' | translate\"\n  [showBackButton]=\"showBackButton\"\n  (backButtonClick)=\"goBack()\"\n></app-header>\n\n<ion-content>\n  <ion-segment [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\" color=\"secondary\">\n    <ion-segment-button value=\"favorites\">\n      <ion-label>{{'myOpportunities.favorites' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"requested\">\n      <ion-label>{{'myOpportunities.requested' | translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div *ngIf=\"segmentModel === 'requested'\">\n    <div *ngFor=\"let item of items\">\n      <app-opportunity-item\n        [info]=\"item\"\n        [hasPhoto]=\"true\"\n        [linkText]=\"'opportunities.seeMore'\"\n        (itemClick)=\"onItemClick($event)\"\n      ></app-opportunity-item>\n    </div>\n    <app-empty [showButton]=\"false\" text=\"userProfile.noData\" *ngIf=\"items.length === 0\"> </app-empty>\n  </div>\n  <div *ngIf=\"segmentModel === 'favorites'\">\n    <div *ngFor=\"let item of itemsSaved\">\n      <app-opportunity-item\n        [info]=\"item\"\n        [hasPhoto]=\"true\"\n        [editable]=\"true\"\n        [iconNameInitial]=\"'heart'\"\n        [iconNameTapped]=\"'heart-outline'\"\n        (iconClick)=\"onFavoriteClick($event)\"\n        (itemClick)=\"onFavoriteItemClick($event)\"\n      ></app-opportunity-item>\n    </div>\n    <app-empty [showButton]=\"false\" text=\"userProfile.noData\" *ngIf=\"itemsSaved.length === 0\"> </app-empty>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/opportunities/my-opportunities/my-opportunities-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/opportunities/my-opportunities/my-opportunities-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: MyOpportunitiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOpportunitiesPageRoutingModule", function() { return MyOpportunitiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_opportunities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-opportunities.page */ "./src/app/opportunities/my-opportunities/my-opportunities.page.ts");




var routes = [
    {
        path: '',
        component: _my_opportunities_page__WEBPACK_IMPORTED_MODULE_3__["MyOpportunitiesPage"],
    },
];
var MyOpportunitiesPageRoutingModule = /** @class */ (function () {
    function MyOpportunitiesPageRoutingModule() {
    }
    MyOpportunitiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MyOpportunitiesPageRoutingModule);
    return MyOpportunitiesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/opportunities/my-opportunities/my-opportunities.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/opportunities/my-opportunities/my-opportunities.module.ts ***!
  \***************************************************************************/
/*! exports provided: MyOpportunitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOpportunitiesPageModule", function() { return MyOpportunitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _my_opportunities_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-opportunities-routing.module */ "./src/app/opportunities/my-opportunities/my-opportunities-routing.module.ts");
/* harmony import */ var _my_opportunities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-opportunities.page */ "./src/app/opportunities/my-opportunities/my-opportunities.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _profiles_components_empty_empty_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../profiles/components/empty/empty.module */ "./src/app/profiles/components/empty/empty.module.ts");






var MyOpportunitiesPageModule = /** @class */ (function () {
    function MyOpportunitiesPageModule() {
    }
    MyOpportunitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _my_opportunities_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyOpportunitiesPageRoutingModule"], _profiles_components_empty_empty_module__WEBPACK_IMPORTED_MODULE_5__["EmptyModule"]],
            declarations: [_my_opportunities_page__WEBPACK_IMPORTED_MODULE_3__["MyOpportunitiesPage"]],
        })
    ], MyOpportunitiesPageModule);
    return MyOpportunitiesPageModule;
}());



/***/ }),

/***/ "./src/app/opportunities/my-opportunities/my-opportunities.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/opportunities/my-opportunities/my-opportunities.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wcG9ydHVuaXRpZXMvbXktb3Bwb3J0dW5pdGllcy9teS1vcHBvcnR1bml0aWVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/opportunities/my-opportunities/my-opportunities.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/opportunities/my-opportunities/my-opportunities.page.ts ***!
  \*************************************************************************/
/*! exports provided: MyOpportunitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOpportunitiesPage", function() { return MyOpportunitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var src_app_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/@store/job-offers/job-offers.state */ "./src/app/@store/job-offers/job-offers.state.ts");
/* harmony import */ var src_app_store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/@store/job-offers/job-offers.actions */ "./src/app/@store/job-offers/job-offers.actions.ts");









var MyOpportunitiesPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MyOpportunitiesPage, _super);
    function MyOpportunitiesPage(router, location, store, utilsService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.segmentModel = 'favorites';
        return _this;
    }
    MyOpportunitiesPage.prototype.ngOnInit = function () {
        this.subscribeToFavourites();
        this.subscribeToRequested();
    };
    MyOpportunitiesPage.prototype.doIonViewWillEnter = function () {
        this.store.dispatch(new src_app_store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_8__["GetJobOffersFavourites"]());
        this.store.dispatch(new src_app_store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_8__["GetJobOffersRequested"]());
    };
    MyOpportunitiesPage.prototype.subscribeToFavourites = function () {
        var _this = this;
        this.favouritesSubscription = this.store
            .select(src_app_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_7__["JobOffersState"].getJobOffersFavourites)
            .subscribe(function (res) {
            _this.itemsSaved = res;
        });
    };
    MyOpportunitiesPage.prototype.subscribeToRequested = function () {
        var _this = this;
        this.requestedSubscription = this.store
            .select(src_app_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_7__["JobOffersState"].getJobOffersRequested)
            .subscribe(function (res) {
            _this.items = res;
        });
    };
    MyOpportunitiesPage.prototype.segmentChanged = function (ev) {
        console.log('Segment changed', ev);
    };
    MyOpportunitiesPage.prototype.onFavoriteClick = function ($event) {
        this.store.dispatch(new src_app_store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_8__["DeleteJobOfferFavourite"]($event));
    };
    MyOpportunitiesPage.prototype.onFavoriteItemClick = function (event) {
        var opportunity = this.store
            .selectSnapshot(src_app_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_7__["JobOffersState"].getJobOffersFavourites)
            .find(function (item) { return item.id === event; });
        this.goToOpportunityDetail(opportunity);
    };
    MyOpportunitiesPage.prototype.onItemClick = function (event) {
        var opportunity = this.store
            .selectSnapshot(src_app_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_7__["JobOffersState"].getJobOffersRequested)
            .find(function (item) { return item.id === event; });
        this.goToOpportunityDetail(opportunity);
    };
    MyOpportunitiesPage.prototype.goToOpportunityDetail = function (opportunity) {
        var opportunityUpdated = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, opportunity), { own: false });
        this.store.dispatch(new src_app_store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_8__["SetCurrentJobOffer"](opportunityUpdated));
        this.router.navigate(['opportunity-detail', opportunity.id]);
    };
    MyOpportunitiesPage.prototype.disconnectObservers = function () {
        if (this.favouritesSubscription) {
            this.favouritesSubscription.unsubscribe();
        }
        if (this.requestedSubscription) {
            this.requestedSubscription.unsubscribe();
        }
    };
    MyOpportunitiesPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    MyOpportunitiesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] }
    ]; };
    MyOpportunitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-opportunities',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-opportunities.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunities/my-opportunities/my-opportunities.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-opportunities.page.scss */ "./src/app/opportunities/my-opportunities/my-opportunities.page.scss")).default]
        })
    ], MyOpportunitiesPage);
    return MyOpportunitiesPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=my-opportunities-my-opportunities-module.js.map