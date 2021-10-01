(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-suggestions-my-suggestions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/networking/my-suggestions/my-suggestions.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/networking/my-suggestions/my-suggestions.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [title]=\"'networking.connections' | translate\"\n  [showBackButton]=\"true\"\n  (backButtonClick)=\"goBack()\"\n></app-header>\n\n<ion-content class=\"item-list\">\n  <div *ngFor=\"let item of itemsSuggestions\">\n    <!--    page-->\n    <app-item-suggestion\n      *ngIf=\"(item.organization_type!==undefined)\"\n      [info]=\"item\"\n      [buttonText]=\"(isPageOnList(item.id)?null:'follow')\"\n      [infoText]=\"(isPageOnList(item.id)?'followed':null)\"\n      (actionButtonClick)=\"onFollowPage($event)\"\n      (actionItemClick)=\"onItemClick($event)\"\n      [buttonColor]=\"'secondary'\"\n      [isOrganization]=\"true\"\n    ></app-item-suggestion>\n    <!--    user-->\n    <app-item-suggestion\n      *ngIf=\"(item.organization_type==undefined || item.organization_type==null)\"\n      [info]=\"item\"\n      [buttonText]=\"(isItemOnList(item.id)?null:'connect')\"\n      [infoText]=\"(isItemOnList(item.id)?'requested':null)\"\n      (actionButtonClick)=\"onRequestConnection($event)\"\n      (actionItemClick)=\"onItemClick($event)\"\n      [buttonColor]=\"'secondary'\"\n      [isOrganization]=\"false\"\n    ></app-item-suggestion>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/networking/my-suggestions/my-suggestions-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/networking/my-suggestions/my-suggestions-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: MySuggestionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySuggestionsPageRoutingModule", function() { return MySuggestionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_suggestions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-suggestions.page */ "./src/app/networking/my-suggestions/my-suggestions.page.ts");




var routes = [
    {
        path: '',
        component: _my_suggestions_page__WEBPACK_IMPORTED_MODULE_3__["MySuggestionsPage"],
    },
];
var MySuggestionsPageRoutingModule = /** @class */ (function () {
    function MySuggestionsPageRoutingModule() {
    }
    MySuggestionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MySuggestionsPageRoutingModule);
    return MySuggestionsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/networking/my-suggestions/my-suggestions.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/networking/my-suggestions/my-suggestions.module.ts ***!
  \********************************************************************/
/*! exports provided: MySuggestionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySuggestionsPageModule", function() { return MySuggestionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _my_suggestions_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-suggestions-routing.module */ "./src/app/networking/my-suggestions/my-suggestions-routing.module.ts");
/* harmony import */ var _my_suggestions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-suggestions.page */ "./src/app/networking/my-suggestions/my-suggestions.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _components_item_suggestion_item_suggestion_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/item-suggestion/item-suggestion.module */ "./src/app/networking/components/item-suggestion/item-suggestion.module.ts");






var MySuggestionsPageModule = /** @class */ (function () {
    function MySuggestionsPageModule() {
    }
    MySuggestionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _my_suggestions_routing_module__WEBPACK_IMPORTED_MODULE_2__["MySuggestionsPageRoutingModule"], _components_item_suggestion_item_suggestion_module__WEBPACK_IMPORTED_MODULE_5__["ItemSuggestionModule"]],
            declarations: [_my_suggestions_page__WEBPACK_IMPORTED_MODULE_3__["MySuggestionsPage"]],
        })
    ], MySuggestionsPageModule);
    return MySuggestionsPageModule;
}());



/***/ }),

/***/ "./src/app/networking/my-suggestions/my-suggestions.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/networking/my-suggestions/my-suggestions.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldHdvcmtpbmcvbXktc3VnZ2VzdGlvbnMvbXktc3VnZ2VzdGlvbnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/networking/my-suggestions/my-suggestions.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/networking/my-suggestions/my-suggestions.page.ts ***!
  \******************************************************************/
/*! exports provided: MySuggestionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySuggestionsPage", function() { return MySuggestionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _services_networking_controllers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/networking-controllers.service */ "./src/app/networking/services/networking-controllers.service.ts");
/* harmony import */ var _store_network_network_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@store/network/network.state */ "./src/app/@store/network/network.state.ts");
/* harmony import */ var _shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@shared/enums/publisher-type */ "./src/app/@shared/enums/publisher-type.ts");
/* harmony import */ var _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@store/pages/pages.actions */ "./src/app/@store/pages/pages.actions.ts");
/* harmony import */ var _store_pages_pages_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@store/pages/pages.state */ "./src/app/@store/pages/pages.state.ts");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@global/utils */ "./src/app/@global/utils.ts");













var MySuggestionsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MySuggestionsPage, _super);
    function MySuggestionsPage(router, location, store, utilsService, networkingService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.networkingService = networkingService;
        return _this;
    }
    MySuggestionsPage.prototype.ngOnInit = function () {
        this.loadRequested();
        this.loadSuggestions();
        this.loadPending();
        this.loadPages();
    };
    MySuggestionsPage.prototype.loadPages = function () {
        var _this = this;
        this.subscriptionPages$ = this.userPagesList$.subscribe(function (data) {
            _this.pages = data;
        });
    };
    MySuggestionsPage.prototype.loadPending = function () {
        var _this = this;
        this.subscriptionPending$ = this.userPendingList$.subscribe(function (data) {
            _this.itemsPending = data;
        });
    };
    MySuggestionsPage.prototype.loadRequested = function () {
        var _this = this;
        this.subscriptionRequested$ = this.userSentList$.subscribe(function (data) {
            _this.itemsRequests = data;
        });
    };
    MySuggestionsPage.prototype.loadSuggestions = function () {
        var _this = this;
        this.subscriptionSuggestions$ = this.userSuggestionsList$.subscribe(function (data) {
            _this.itemsSuggestions = data;
        });
    };
    MySuggestionsPage.prototype.onRequestConnection = function ($event) {
        this.networkingService.onRequestConnection($event.id);
    };
    MySuggestionsPage.prototype.onFollowPage = function ($event) {
        var organization = this.itemsSuggestions.find(function (item) { return item.id === $event.id; });
        this.store.dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_10__["FollowPageAction"]({ organization: organization }));
    };
    MySuggestionsPage.prototype.isPageOnList = function (id) {
        return _global_utils__WEBPACK_IMPORTED_MODULE_12__["Utils"].isItemOnList(this.pages, id);
    };
    MySuggestionsPage.prototype.isItemOnList = function (id) {
        return _global_utils__WEBPACK_IMPORTED_MODULE_12__["Utils"].isItemOnList(this.itemsRequests, id);
    };
    MySuggestionsPage.prototype.onItemClick = function ($event) {
        this.utilsService.goProfile($event.model.id, !$event.isOrganization ? _shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_9__["PUBLISHER_TYPE"].USER : 0);
    };
    MySuggestionsPage.prototype.disconnectObservers = function () {
        this.subscriptionSuggestions$.unsubscribe();
        this.subscriptionPending$.unsubscribe();
        this.subscriptionRequested$.unsubscribe();
        this.subscriptionPages$.unsubscribe();
    };
    MySuggestionsPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    MySuggestionsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _services_networking_controllers_service__WEBPACK_IMPORTED_MODULE_7__["NetworkingControllersService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_network_network_state__WEBPACK_IMPORTED_MODULE_8__["NetworkState"].getSuggestions)
    ], MySuggestionsPage.prototype, "userSuggestionsList$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_network_network_state__WEBPACK_IMPORTED_MODULE_8__["NetworkState"].getPending)
    ], MySuggestionsPage.prototype, "userPendingList$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_network_network_state__WEBPACK_IMPORTED_MODULE_8__["NetworkState"].getRequested)
    ], MySuggestionsPage.prototype, "userSentList$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_11__["PagesState"].getFollowedPageList)
    ], MySuggestionsPage.prototype, "userPagesList$", void 0);
    MySuggestionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-suggestions',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-suggestions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/networking/my-suggestions/my-suggestions.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-suggestions.page.scss */ "./src/app/networking/my-suggestions/my-suggestions.page.scss")).default]
        })
    ], MySuggestionsPage);
    return MySuggestionsPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=my-suggestions-my-suggestions-module.js.map