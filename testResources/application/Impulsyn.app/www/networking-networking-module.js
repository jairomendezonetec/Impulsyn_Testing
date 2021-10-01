(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["networking-networking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/networking/networking.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/networking/networking.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"item-list\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div\n    (click)=\"navigateTo('my-network')\"\n    color=\"secondary\"\n    class=\"flex-compatible ion-align-items-center ion-margin-bottom marginTop ion-padding-vertical w100 background-white ion-text-start\"\n  >\n    <span class=\"bold ion-padding-start regular-size\">{{ \"networking.myNetwork\" | translate}}</span>\n    <ion-icon name=\"chevron-forward-outline\" class=\"extrabig-size\"></ion-icon>\n  </div>\n\n  <!--  start request list-->\n  <div\n    *ngIf=\"itemsPending?.length > 0\"\n    color=\"secondary\"\n    [routerLink]=\"'/my-requests'\"\n    class=\"flex-compatible ion-align-items-center marginBottom ion-margin-top ion-padding-vertical w100 background-white ion-text-start\"\n  >\n    <span class=\"bold ion-padding-start regular-size\">{{ \"networking.requests\" | translate}}</span>\n    <ion-icon name=\"chevron-forward-outline\" class=\"extrabig-size\"></ion-icon>\n  </div>\n  <div *ngFor=\"let item of itemsPending | slice:0:maxRequests\">\n    <app-item-request\n      [info]=\"item\"\n      (acceptClick)=\"onResponseRequest($event, true)\"\n      (cancelClick)=\"onResponseRequest($event, false)\"\n      (actionItemClick)=\"onItemClick($event)\"\n    ></app-item-request>\n  </div>\n  <div\n    *ngIf=\"itemsPending?.length > maxRequests\"\n    color=\"secondary\"\n    class=\"marginTop paddingVertical w100 background-white ion-text-center\"\n  >\n    <span class=\"bold ion-padding-start\" [routerLink]=\"'/my-requests'\">{{ \"networking.seeAll\" | translate}}</span>\n  </div>\n  <!--  end request list-->\n\n  <!--  start suggestions list-->\n  <div\n    *ngIf=\"(userSuggestionsList$ | async)?.length > 0\"\n    color=\"secondary\"\n    [routerLink]=\"'/my-suggestions'\"\n    class=\"marginBottom ion-margin-top flex-compatible ion-align-items-center ion-padding-vertical w100 background-white ion-text-start\"\n  >\n    <span class=\"bold ion-padding-start regular-size\">{{ \"networking.connections\" | translate}}</span>\n    <ion-icon name=\"chevron-forward-outline\" class=\"extrabig-size\"></ion-icon>\n  </div>\n  <app-suggestions-list\n    *ngIf=\"itemsSuggestions\"\n    (itemClick)=\"onItemClick($event)\"\n    (followPageClick)=\"onFollowPage($event)\"\n    [itemsRequests]=\"itemsRequests\"\n    [maxSuggestions]=\"maxSuggestions\"\n    [itemsSuggestions]=\"itemsSuggestions\"\n    (requestConnectionClick)=\"onRequestConnection($event)\"\n    [pages]=\"pages\"\n  ></app-suggestions-list>\n  <div\n    *ngIf=\"(userSuggestionsList$ | async)?.length > maxSuggestions\"\n    color=\"secondary\"\n    [routerLink]=\"'/my-suggestions'\"\n    class=\"marginTop ion-margin-bottom paddingVertical w100 background-white ion-text-center\"\n  >\n    <span class=\"bold ion-padding-start\">{{ \"networking.seeMore\" | translate}}</span>\n  </div>\n  <!--  end suggestions list-->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/networking/networking-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/networking/networking-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: NetworkingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkingPageRoutingModule", function() { return NetworkingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _networking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./networking.page */ "./src/app/networking/networking.page.ts");




var routes = [
    {
        path: '',
        component: _networking_page__WEBPACK_IMPORTED_MODULE_3__["NetworkingPage"],
    },
    {
        path: 'my-network',
        loadChildren: function () { return __webpack_require__.e(/*! import() | my-network-my-network-module */ "my-network-my-network-module").then(__webpack_require__.bind(null, /*! ./my-network/my-network.module */ "./src/app/networking/my-network/my-network.module.ts")).then(function (m) { return m.MyNetworkPageModule; }); },
    },
    {
        path: 'my-suggestions',
        loadChildren: function () { return __webpack_require__.e(/*! import() | my-suggestions-my-suggestions-module */ "my-suggestions-my-suggestions-module").then(__webpack_require__.bind(null, /*! ./my-suggestions/my-suggestions.module */ "./src/app/networking/my-suggestions/my-suggestions.module.ts")).then(function (m) { return m.MySuggestionsPageModule; }); },
    },
    {
        path: 'my-requests',
        loadChildren: function () { return __webpack_require__.e(/*! import() | my-requests-my-requests-module */ "common").then(__webpack_require__.bind(null, /*! ./my-requests/my-requests.module */ "./src/app/networking/my-requests/my-requests.module.ts")).then(function (m) { return m.MyRequestsPageModule; }); },
    },
];
var NetworkingPageRoutingModule = /** @class */ (function () {
    function NetworkingPageRoutingModule() {
    }
    NetworkingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NetworkingPageRoutingModule);
    return NetworkingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/networking/networking.module.ts":
/*!*************************************************!*\
  !*** ./src/app/networking/networking.module.ts ***!
  \*************************************************/
/*! exports provided: NetworkingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkingPageModule", function() { return NetworkingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _networking_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./networking-routing.module */ "./src/app/networking/networking-routing.module.ts");
/* harmony import */ var _networking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./networking.page */ "./src/app/networking/networking.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _components_item_request_item_request_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/item-request/item-request.module */ "./src/app/networking/components/item-request/item-request.module.ts");
/* harmony import */ var _components_item_suggestion_item_suggestion_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/item-suggestion/item-suggestion.module */ "./src/app/networking/components/item-suggestion/item-suggestion.module.ts");







var NetworkingPageModule = /** @class */ (function () {
    function NetworkingPageModule() {
    }
    NetworkingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _networking_routing_module__WEBPACK_IMPORTED_MODULE_2__["NetworkingPageRoutingModule"], _components_item_request_item_request_module__WEBPACK_IMPORTED_MODULE_5__["ItemRequestComponentModule"], _components_item_suggestion_item_suggestion_module__WEBPACK_IMPORTED_MODULE_6__["ItemSuggestionModule"]],
            declarations: [_networking_page__WEBPACK_IMPORTED_MODULE_3__["NetworkingPage"]],
        })
    ], NetworkingPageModule);
    return NetworkingPageModule;
}());



/***/ }),

/***/ "./src/app/networking/networking.page.scss":
/*!*************************************************!*\
  !*** ./src/app/networking/networking.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldHdvcmtpbmcvbmV0d29ya2luZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/networking/networking.page.ts":
/*!***********************************************!*\
  !*** ./src/app/networking/networking.page.ts ***!
  \***********************************************/
/*! exports provided: NetworkingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkingPage", function() { return NetworkingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _services_networking_controllers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/networking-controllers.service */ "./src/app/networking/services/networking-controllers.service.ts");
/* harmony import */ var _store_network_network_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@store/network/network.state */ "./src/app/@store/network/network.state.ts");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@shared/enums/publisher-type */ "./src/app/@shared/enums/publisher-type.ts");
/* harmony import */ var _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@store/pages/pages.actions */ "./src/app/@store/pages/pages.actions.ts");
/* harmony import */ var _store_pages_pages_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@store/pages/pages.state */ "./src/app/@store/pages/pages.state.ts");
/* harmony import */ var _store_network_network_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@store/network/network.actions */ "./src/app/@store/network/network.actions.ts");












var MAX_REQUESTS_ITEMS = 3;
var MAX_SUGGESTIONS_ITEMS = 5;
var NetworkingPage = /** @class */ (function () {
    function NetworkingPage(router, store, networkingService, utilsService) {
        this.router = router;
        this.store = store;
        this.networkingService = networkingService;
        this.utilsService = utilsService;
        this.imagePathOnboarding = _global_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].ONBOARDING_IMAGE_PATH;
        this.maxRequests = MAX_REQUESTS_ITEMS;
        this.maxSuggestions = MAX_SUGGESTIONS_ITEMS;
    }
    NetworkingPage.prototype.ngOnInit = function () {
        this.subscribeToRequested();
        this.subscribeToSuggestions();
        this.subscribeToPending();
        this.subscribeToPages();
    };
    NetworkingPage.prototype.ionViewWillEnter = function () {
        this.networkingService.loadData();
    };
    NetworkingPage.prototype.doRefresh = function (event) {
        this.store.dispatch(new _store_network_network_actions__WEBPACK_IMPORTED_MODULE_11__["GetRequestsSentAction"]());
        this.store.dispatch(new _store_network_network_actions__WEBPACK_IMPORTED_MODULE_11__["GetPendingRequestsAction"]());
        this.store.dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_9__["GetFollowedPages"]());
        var subscription = this.store.dispatch(new _store_network_network_actions__WEBPACK_IMPORTED_MODULE_11__["GetSuggestionsAction"]()).subscribe(function () {
            subscription.unsubscribe();
            event.target.complete();
        }, function (error) {
            subscription.unsubscribe();
            event.target.complete();
        });
    };
    NetworkingPage.prototype.subscribeToPages = function () {
        var _this = this;
        this.subscriptionPages$ = this.userPagesList$.subscribe(function (data) {
            _this.pages = data;
        });
    };
    NetworkingPage.prototype.subscribeToRequested = function () {
        var _this = this;
        this.subscriptionRequested$ = this.userSentList$.subscribe(function (data) {
            _this.itemsRequests = data;
        });
    };
    NetworkingPage.prototype.subscribeToSuggestions = function () {
        var _this = this;
        this.subscriptionSuggestions$ = this.userSuggestionsList$.subscribe(function (data) {
            _this.itemsSuggestions = data;
        });
    };
    NetworkingPage.prototype.subscribeToPending = function () {
        var _this = this;
        this.subscriptionPending$ = this.userPendingList$.subscribe(function (data) {
            _this.itemsPending = data;
        });
    };
    NetworkingPage.prototype.onResponseRequest = function (id, accept) {
        this.networkingService.onResponseRequest(id, accept);
    };
    NetworkingPage.prototype.onRequestConnection = function ($event) {
        this.networkingService.onRequestConnection($event.id);
    };
    NetworkingPage.prototype.onFollowPage = function ($event) {
        var index = this.itemsSuggestions.findIndex(function (item) { return item.id === $event.id; });
        var organization = this.itemsSuggestions[index];
        this.store.dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_9__["FollowPageAction"]({ organization: organization }));
    };
    NetworkingPage.prototype.onItemClick = function ($event) {
        this.utilsService.goProfile($event.model.id, !$event.isOrganization ? _shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_8__["PUBLISHER_TYPE"].USER : 0);
    };
    NetworkingPage.prototype.navigateTo = function (url) {
        this.router.navigate([url]);
    };
    NetworkingPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    NetworkingPage.prototype.disconnectObservers = function () {
        if (this.subscriptionSuggestions$) {
            this.subscriptionSuggestions$.unsubscribe();
        }
        if (this.subscriptionPending$) {
            this.subscriptionPending$.unsubscribe();
        }
        if (this.subscriptionRequested$) {
            this.subscriptionRequested$.unsubscribe();
        }
        if (this.subscriptionPages$) {
            this.subscriptionPages$.unsubscribe();
        }
    };
    NetworkingPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _services_networking_controllers_service__WEBPACK_IMPORTED_MODULE_5__["NetworkingControllersService"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_network_network_state__WEBPACK_IMPORTED_MODULE_6__["NetworkState"].getSuggestions)
    ], NetworkingPage.prototype, "userSuggestionsList$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_network_network_state__WEBPACK_IMPORTED_MODULE_6__["NetworkState"].getPending)
    ], NetworkingPage.prototype, "userPendingList$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_network_network_state__WEBPACK_IMPORTED_MODULE_6__["NetworkState"].getRequested)
    ], NetworkingPage.prototype, "userSentList$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_10__["PagesState"].getFollowedPageList)
    ], NetworkingPage.prototype, "userPagesList$", void 0);
    NetworkingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-networking',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./networking.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/networking/networking.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./networking.page.scss */ "./src/app/networking/networking.page.scss")).default]
        })
    ], NetworkingPage);
    return NetworkingPage;
}());



/***/ })

}]);
//# sourceMappingURL=networking-networking-module.js.map