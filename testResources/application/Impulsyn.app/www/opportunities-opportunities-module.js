(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["opportunities-opportunities-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunities/opportunities.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/opportunities/opportunities.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"item-list\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div\n    (click)=\"navigateTo('my-opportunities')\"\n    color=\"secondary\"\n    class=\"flex-compatible ion-align-items-center ion-margin-bottom marginTop ion-padding-vertical w100 background-white ion-text-start\"\n  >\n    <span class=\"bold ion-padding-start\">{{ \"opportunities.myOpportunities\" | translate}}</span>\n    <ion-icon name=\"chevron-forward-outline\" class=\"extrabig-size\"></ion-icon>\n  </div>\n\n  <!--  start suggestions list-->\n  <div\n    *ngIf=\"items.length > 0\"\n    color=\"secondary\"\n    [routerLink]=\"'/see-all-opportunities'\"\n    class=\"marginBottom flex-compatible ion-align-items-center ion-padding-vertical w100 background-white ion-text-start\"\n  >\n    <span class=\"bold ion-padding-start\">{{ \"opportunities.suggestions\" | translate}}</span>\n    <ion-icon name=\"chevron-forward-outline\" class=\"extrabig-size\"></ion-icon>\n    <!--    TODO: Add filters button when functionality is done-->\n    <!--    <ion-button (click)=\"filter()\" class=\"filtersButton\">-->\n    <!--      <ion-icon slot=\"icon-only\" name=\"options-outline\"></ion-icon>-->\n    <!--    </ion-button>-->\n  </div>\n  <div *ngFor=\"let item of items | slice:0:maxSuggestions\">\n    <app-opportunity-item\n      [info]=\"item\"\n      [hasPhoto]=\"true\"\n      [linkText]=\"'opportunities.seeMore'\"\n      (itemClick)=\"onItemClick($event)\"\n    ></app-opportunity-item>\n  </div>\n  <div\n    *ngIf=\"items.length > maxSuggestions\"\n    color=\"secondary\"\n    class=\"marginTop ion-margin-bottom paddingVertical w100 background-white ion-text-center\"\n  >\n    <span class=\"bold ion-padding-start\" [routerLink]=\"'/see-all-opportunities'\"\n      >{{ \"opportunities.seeAll\" | translate}}</span\n    >\n  </div>\n  <!--  end suggestions list-->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/opportunities/opportunities-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/opportunities/opportunities-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OpportunitiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunitiesPageRoutingModule", function() { return OpportunitiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _opportunities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opportunities.page */ "./src/app/opportunities/opportunities.page.ts");




var routes = [
    {
        path: '',
        component: _opportunities_page__WEBPACK_IMPORTED_MODULE_3__["OpportunitiesPage"],
    },
    {
        path: 'my-opportunities',
        loadChildren: function () { return __webpack_require__.e(/*! import() | my-opportunities-my-opportunities-module */ "my-opportunities-my-opportunities-module").then(__webpack_require__.bind(null, /*! ./my-opportunities/my-opportunities.module */ "./src/app/opportunities/my-opportunities/my-opportunities.module.ts")).then(function (m) { return m.MyOpportunitiesPageModule; }); },
    },
];
var OpportunitiesPageRoutingModule = /** @class */ (function () {
    function OpportunitiesPageRoutingModule() {
    }
    OpportunitiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], OpportunitiesPageRoutingModule);
    return OpportunitiesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/opportunities/opportunities.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/opportunities/opportunities.module.ts ***!
  \*******************************************************/
/*! exports provided: OpportunitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunitiesPageModule", function() { return OpportunitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _opportunities_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opportunities-routing.module */ "./src/app/opportunities/opportunities-routing.module.ts");
/* harmony import */ var _opportunities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opportunities.page */ "./src/app/opportunities/opportunities.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var OpportunitiesPageModule = /** @class */ (function () {
    function OpportunitiesPageModule() {
    }
    OpportunitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _opportunities_routing_module__WEBPACK_IMPORTED_MODULE_2__["OpportunitiesPageRoutingModule"]],
            declarations: [_opportunities_page__WEBPACK_IMPORTED_MODULE_3__["OpportunitiesPage"]],
        })
    ], OpportunitiesPageModule);
    return OpportunitiesPageModule;
}());



/***/ }),

/***/ "./src/app/opportunities/opportunities.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/opportunities/opportunities.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avatar-text.four-lines {\n  line-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Bwb3J0dW5pdGllcy9vcHBvcnR1bml0aWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9vcHBvcnR1bml0aWVzL29wcG9ydHVuaXRpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhci10ZXh0LmZvdXItbGluZXMge1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/opportunities/opportunities.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/opportunities/opportunities.page.ts ***!
  \*****************************************************/
/*! exports provided: OpportunitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpportunitiesPage", function() { return OpportunitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@store/job-offers/job-offers.actions */ "./src/app/@store/job-offers/job-offers.actions.ts");
/* harmony import */ var _store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@store/job-offers/job-offers.state */ "./src/app/@store/job-offers/job-offers.state.ts");






var MAX_SUGGESTIONS_ITEMS = 5;
var OpportunitiesPage = /** @class */ (function () {
    function OpportunitiesPage(router, store) {
        this.router = router;
        this.store = store;
        this.items = [];
        this.maxSuggestions = MAX_SUGGESTIONS_ITEMS;
    }
    OpportunitiesPage.prototype.ngOnInit = function () {
        this.subscribeToSuggestions();
    };
    OpportunitiesPage.prototype.ionViewWillEnter = function () {
        if (this.store.selectSnapshot(_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_5__["JobOffersState"].getJobOffersSuggestions).length === 0) {
            this.store.dispatch(new _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_4__["GetJobOffersSuggestions"]());
        }
    };
    OpportunitiesPage.prototype.doRefresh = function (event) {
        var subscription = this.store.dispatch(new _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_4__["GetJobOffersSuggestions"]()).subscribe(function () {
            subscription.unsubscribe();
            event.target.complete();
        }, function (error) {
            subscription.unsubscribe();
            event.target.complete();
        });
    };
    OpportunitiesPage.prototype.subscribeToSuggestions = function () {
        var _this = this;
        this.suggestionsSubscription = this.store.select(_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_5__["JobOffersState"].getJobOffersSuggestions).subscribe(function (res) {
            _this.items = res;
        });
    };
    OpportunitiesPage.prototype.goDetail = function () {
        this.router.navigate(['/detail']);
    };
    OpportunitiesPage.prototype.navigateTo = function (url) {
        this.router.navigate([url]);
    };
    OpportunitiesPage.prototype.filter = function () { };
    OpportunitiesPage.prototype.onItemClick = function ($event) {
        var jobOffer = this.store
            .selectSnapshot(_store_job_offers_job_offers_state__WEBPACK_IMPORTED_MODULE_5__["JobOffersState"].getJobOffersSuggestions)
            .find(function (item) { return item.id === $event; });
        var jobOfferUpdated = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, jobOffer), { own: false });
        this.store.dispatch(new _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_4__["SetCurrentJobOffer"](jobOfferUpdated));
        this.router.navigate(['opportunity-detail', $event]);
    };
    OpportunitiesPage.prototype.disconnectObservers = function () {
        if (this.suggestionsSubscription) {
            this.suggestionsSubscription.unsubscribe();
        }
    };
    OpportunitiesPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    OpportunitiesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    OpportunitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-opportunities',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./opportunities.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/opportunities/opportunities.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./opportunities.page.scss */ "./src/app/opportunities/opportunities.page.scss")).default]
        })
    ], OpportunitiesPage);
    return OpportunitiesPage;
}());



/***/ })

}]);
//# sourceMappingURL=opportunities-opportunities-module.js.map