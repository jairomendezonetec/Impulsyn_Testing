(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timeline-timeline-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timeline/timeline.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timeline/timeline.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-refresher\n    *ngIf=\"currentPublication?.id === this.getFirstPublicationReference()?.id || publicationList?.publications?.length === 0\"\n    slot=\"fixed\"\n    (ionRefresh)=\"doRefresh($event)\"\n  >\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div id=\"publicationListContainer\" #content *ngIf=\"publicationList?.publications?.length > 0\">\n    <div id=\"loaderTop\"></div>\n    <div\n      *ngFor=\"let publication of publicationList?.publications; let i = index; trackBy: trackByPublications\"\n      class=\"size-100\"\n    >\n      <div\n        class=\"publication-container\"\n        (touchstart)=\"onTouchStart($event)\"\n        (touchmove)=\"onTouchMove($event)\"\n        (touchend)=\"onTouchEnd($event, i)\"\n      >\n        <app-publication\n          [i]=\"i\"\n          [buttonList]=\"buttonList\"\n          [publication]=\"publication\"\n          (buttonClick)=\"onPublicationButtonClick($event)\"\n          (clickUserProfile)=\"goUserProfile($event)\"\n          (showCommentsList)=\"showCommentsList(publication.id)\"\n          (showLikesList)=\"showLikesList(publication.id)\"\n          [userPhoto]=\"publication.publisher.photo\"\n        ></app-publication>\n      </div>\n    </div>\n    <app-new-post-button\n      [fadeIn]=\"!focusOnPublication\"\n      (actionButtonClick)=\"onNewPostClick($event)\"\n    ></app-new-post-button>\n    <div id=\"loaderBottom\"></div>\n  </div>\n  <!--  No publications. Show suggestions -->\n  <div *ngIf=\"publicationList?.publications?.length === 0\">\n    <!--  start suggestions list-->\n    <div\n      *ngIf=\"(userSuggestionsList$ | async)?.length > 0\"\n      color=\"secondary\"\n      class=\"marginBottom ion-margin-top flex-compatible ion-align-items-center ion-padding-vertical w100 background-white ion-text-start\"\n    >\n      <span class=\"bold ion-padding-start regular-size\">{{ \"networking.connections\" | translate}}</span>\n    </div>\n    <app-suggestions-list\n      *ngIf=\"itemsSuggestions\"\n      (itemClick)=\"onItemClick($event)\"\n      (followPageClick)=\"onFollowPage($event)\"\n      [itemsRequests]=\"itemsRequests\"\n      [maxSuggestions]=\"maxSuggestions\"\n      [itemsSuggestions]=\"itemsSuggestions\"\n      (requestConnectionClick)=\"onRequestConnection($event)\"\n      [pages]=\"pages\"\n    ></app-suggestions-list>\n    <!--  end suggestions list-->\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/@core/router-ext.service.ts":
/*!*********************************************!*\
  !*** ./src/app/@core/router-ext.service.ts ***!
  \*********************************************/
/*! exports provided: RouterExtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterExtService", function() { return RouterExtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var RouterExtService = /** @class */ (function () {
    function RouterExtService(router) {
        var _this = this;
        this.router = router;
        this.previousUrl = undefined;
        this.currentUrl = undefined;
        this.currentUrl = this.router.url;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.previousUrl = _this.currentUrl;
                _this.currentUrl = event.url;
            }
        });
    }
    RouterExtService.prototype.getPreviousUrl = function () {
        return this.previousUrl;
    };
    RouterExtService.prototype.getCurrentUrl = function () {
        return this.currentUrl;
    };
    RouterExtService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    RouterExtService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], RouterExtService);
    return RouterExtService;
}());



/***/ }),

/***/ "./src/app/timeline/timeline-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/timeline/timeline-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TimelinePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePageRoutingModule", function() { return TimelinePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _timeline_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline.page */ "./src/app/timeline/timeline.page.ts");




var routes = [
    {
        path: '',
        component: _timeline_page__WEBPACK_IMPORTED_MODULE_3__["TimelinePage"],
    },
];
var TimelinePageRoutingModule = /** @class */ (function () {
    function TimelinePageRoutingModule() {
    }
    TimelinePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TimelinePageRoutingModule);
    return TimelinePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.module.ts":
/*!*********************************************!*\
  !*** ./src/app/timeline/timeline.module.ts ***!
  \*********************************************/
/*! exports provided: TimelinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePageModule", function() { return TimelinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _timeline_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline-routing.module */ "./src/app/timeline/timeline-routing.module.ts");
/* harmony import */ var _timeline_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline.page */ "./src/app/timeline/timeline.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _components_publication_publication_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/publication/publication.module */ "./src/app/timeline/components/publication/publication.module.ts");






var TimelinePageModule = /** @class */ (function () {
    function TimelinePageModule() {
    }
    TimelinePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _timeline_routing_module__WEBPACK_IMPORTED_MODULE_2__["TimelinePageRoutingModule"], _components_publication_publication_module__WEBPACK_IMPORTED_MODULE_5__["PublicationModule"]],
            declarations: [_timeline_page__WEBPACK_IMPORTED_MODULE_3__["TimelinePage"]],
        })
    ], TimelinePageModule);
    return TimelinePageModule;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.page.scss":
/*!*********************************************!*\
  !*** ./src/app/timeline/timeline.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".marginBottom {\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RpbWVsaW5lL3RpbWVsaW5lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW5Cb3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/timeline/timeline.page.ts":
/*!*******************************************!*\
  !*** ./src/app/timeline/timeline.page.ts ***!
  \*******************************************/
/*! exports provided: TimelinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePage", function() { return TimelinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_timeline_timeline_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@store/timeline/timeline.actions */ "./src/app/@store/timeline/timeline.actions.ts");
/* harmony import */ var _store_timeline_timeline_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@store/timeline/timeline.state */ "./src/app/@store/timeline/timeline.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var _enum_ion_sheet_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enum/ion-sheet-type */ "./src/app/timeline/enum/ion-sheet-type.ts");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _core_social_sharing_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@core/social-sharing.service */ "./src/app/@core/social-sharing.service.ts");
/* harmony import */ var _store_network_network_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@store/network/network.state */ "./src/app/@store/network/network.state.ts");
/* harmony import */ var _store_network_network_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@store/network/network.actions */ "./src/app/@store/network/network.actions.ts");
/* harmony import */ var _shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@shared/enums/publisher-type */ "./src/app/@shared/enums/publisher-type.ts");
/* harmony import */ var _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../@store/pages/pages.actions */ "./src/app/@store/pages/pages.actions.ts");
/* harmony import */ var _store_pages_pages_state__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../@store/pages/pages.state */ "./src/app/@store/pages/pages.state.ts");
/* harmony import */ var _networking_services_networking_controllers_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../networking/services/networking-controllers.service */ "./src/app/networking/services/networking-controllers.service.ts");
/* harmony import */ var _store_auth_auth_state__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../@store/auth/auth.state */ "./src/app/@store/auth/auth.state.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _core_router_ext_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../@core/router-ext.service */ "./src/app/@core/router-ext.service.ts");
/* harmony import */ var _store_posts_posts_state__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../@store/posts/posts.state */ "./src/app/@store/posts/posts.state.ts");
/* harmony import */ var _store_posts_posts_actions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../@store/posts/posts.actions */ "./src/app/@store/posts/posts.actions.ts");
/* harmony import */ var _store_common_common_actions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../@store/common/common.actions */ "./src/app/@store/common/common.actions.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

























var TAB_NAME = 'timeline';
var MAX_LOADED_PAGES = 3;
var DEFAULT_SCROLL_EFFECT_VELOCITY = 20;
var SCROLL_VELOCITY_RATIO = 32;
var MAX_SUGGESTIONS_ITEMS = 10;
var TimelinePage = /** @class */ (function () {
    function TimelinePage(store, router, elementRef, utilsService, socialShare, networkingService, routerExtService, platform) {
        this.store = store;
        this.router = router;
        this.elementRef = elementRef;
        this.utilsService = utilsService;
        this.socialShare = socialShare;
        this.networkingService = networkingService;
        this.routerExtService = routerExtService;
        this.platform = platform;
        this.isScrollInProgress = false;
        this.scrollVelocity = DEFAULT_SCROLL_EFFECT_VELOCITY;
        this.swipeAllowedTime = 300;
        this.distanceThreshold = 150;
        this.maxSuggestions = MAX_SUGGESTIONS_ITEMS;
        this.isLoadingPublications = false;
        this.buttonList = _global_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].PUBLICATION_BUTTONS;
        this.profileId = '';
        this.commentItems = [];
        this.likeItems = [];
        this.focusOnPublication = false;
        this.inProcess = false;
        this.scrollVelocity = Math.floor(this.platform.height() / SCROLL_VELOCITY_RATIO);
    }
    Object.defineProperty(TimelinePage.prototype, "content", {
        set: function (content) {
            if (content) {
                // initially setter gets called with undefined
                this.publicationListContainer = content;
                this.initLoaderIntersectors();
                this.subscribeToDOMPublicationListChanges();
            }
        },
        enumerable: false,
        configurable: true
    });
    TimelinePage.prototype.ngOnInit = function () {
        this.subscribeToTabEnter();
        this.subscribeToSuggestions();
        this.subscribeToPages();
        this.subscribeToRequested();
        this.subscribeToFocusOnPublication();
    };
    TimelinePage.prototype.subscribeToFocusOnPublication = function () {
        var _this = this;
        this.focusOnPublicationSubscription = this.store.select(_store_posts_posts_state__WEBPACK_IMPORTED_MODULE_21__["PostsState"].isFocusOnPublication).subscribe(function (result) {
            _this.focusOnPublication = result;
        });
    };
    TimelinePage.prototype.subscribeToSuggestions = function () {
        var _this = this;
        this.subscriptionSuggestions = this.userSuggestionsList$.subscribe(function (data) {
            _this.itemsSuggestions = data;
        });
    };
    TimelinePage.prototype.subscribeToPages = function () {
        var _this = this;
        this.subscriptionPages = this.userPagesList$.subscribe(function (data) {
            _this.pages = data;
        });
    };
    TimelinePage.prototype.subscribeToRequested = function () {
        var _this = this;
        this.subscriptionRequested = this.userSentList$.subscribe(function (data) {
            _this.itemsRequests = data;
        });
    };
    TimelinePage.prototype.initTimelineLogic = function () {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                try {
                    this.disableFocusOnPublication();
                    if (this.getFirstPublicationReference() || this.inProcess) {
                        return [2 /*return*/];
                    }
                    this.store.dispatch(new _store_common_common_actions__WEBPACK_IMPORTED_MODULE_23__["AsyncCallStart"]());
                    this.profileImage = (_a = this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_6__["UserState"].getUserInfo)) === null || _a === void 0 ? void 0 : _a.photo;
                    this.profileId = (_b = this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_6__["UserState"].getUserInfo)) === null || _b === void 0 ? void 0 : _b.id;
                    this.store.dispatch(new _store_timeline_timeline_actions__WEBPACK_IMPORTED_MODULE_2__["SetTimelineFirstPublicationReference"](null));
                    this.inProcess = true;
                    this.store
                        .dispatch(new _store_timeline_timeline_actions__WEBPACK_IMPORTED_MODULE_2__["GetTimeline"]({ limit: _global_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].PUBLICATION_LOAD_LIMIT_TIMELINE }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["take"])(1))
                        .subscribe(function () {
                        if (!_this.timelineSubscription) {
                            _this.subscribeToTimelineChanges();
                        }
                        _this.store.dispatch(new _store_common_common_actions__WEBPACK_IMPORTED_MODULE_23__["AsyncCallSuccess"]());
                        _this.inProcess = false;
                    });
                }
                catch (error) {
                    console.error(error);
                    this.store.dispatch(new _store_common_common_actions__WEBPACK_IMPORTED_MODULE_23__["AsyncCallFail"]());
                    this.inProcess = false;
                }
                return [2 /*return*/];
            });
        });
    };
    TimelinePage.prototype.removeShadow = function () {
        // get showLessLink to force click and remove shadow in directive
        var showLessLink = this.elementRef.nativeElement.querySelector('.show-less-link');
        showLessLink.click();
    };
    TimelinePage.prototype.subscribeToTabEnter = function () {
        var _this = this;
        this.tabEnterSubscription = this.utilsService.getTabNavEnterSubject().subscribe(function (tab) {
            if (tab === TAB_NAME) {
                _this.initTimelineLogic();
            }
            // check if come from create post and relocate scroll (bug on some devices)
            var previous = _this.routerExtService.getPreviousUrl();
            if (previous.includes('create-post')) {
                _this.centerPublicationScroll();
            }
        });
    };
    TimelinePage.prototype.subscribeToTimelineChanges = function () {
        var _this = this;
        this.timelineSubscription = this.store.select(_store_timeline_timeline_state__WEBPACK_IMPORTED_MODULE_3__["TimelineState"].getTimeline).subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.publicationList = data;
                if (data.publications.length && !this.getFirstPublicationReference()) {
                    this.store.dispatch(new _store_timeline_timeline_actions__WEBPACK_IMPORTED_MODULE_2__["SetTimelineFirstPublicationReference"](data.publications[0]));
                    this.currentPublication = data.publications[0];
                }
                if (data.publications.length === 0 && this.store.selectSnapshot(_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_17__["AuthState"].getUserId)) {
                    this.store.dispatch(new _store_network_network_actions__WEBPACK_IMPORTED_MODULE_12__["GetSuggestionsAction"]());
                    this.store.dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_14__["GetFollowedPages"]());
                    this.store.dispatch(new _store_network_network_actions__WEBPACK_IMPORTED_MODULE_12__["GetPendingRequestsAction"]());
                }
                return [2 /*return*/];
            });
        }); });
    };
    TimelinePage.prototype.initLoaderIntersectors = function () {
        var _this = this;
        // Intersector for next images
        this.loaderBottomObserver = new IntersectionObserver(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), entry = _b[0];
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                    if (!this.isLoadingPublications && entry && entry.isIntersecting) {
                        this.loadNextPublications();
                    }
                    return [2 /*return*/];
                });
            });
        }, {
            root: this.publicationListContainer.nativeElement,
            rootMargin: '100px',
        });
        this.loaderBottomObserver.observe(document.getElementById('loaderBottom'));
        // Intersector for previous images
        this.loaderTopObserver = new IntersectionObserver(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), entry = _b[0];
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                    if (!this.isLoadingPublications && entry && entry.isIntersecting) {
                        this.loadPreviousPublications();
                    }
                    return [2 /*return*/];
                });
            });
        }, {
            root: this.publicationListContainer.nativeElement,
            rootMargin: '100px',
        });
        this.loaderTopObserver.observe(document.getElementById('loaderTop'));
    };
    TimelinePage.prototype.loadNextPublications = function () {
        var lastPublication = this.publicationList.publications[this.publicationList.publications.length - 1];
        if (!lastPublication) {
            return;
        }
        var pageToRequest = lastPublication.page + 1;
        if (pageToRequest > this.publicationList.total_pages) {
            return;
        }
        this.store.dispatch(new _store_timeline_timeline_actions__WEBPACK_IMPORTED_MODULE_2__["AddNextPublicationsToTimeline"]({
            end_date: this.getFirstPublicationReference().creation_date,
            limit: _global_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].PUBLICATION_LOAD_LIMIT_TIMELINE,
            order: 'desc',
            page: pageToRequest,
        }, MAX_LOADED_PAGES));
    };
    TimelinePage.prototype.loadPreviousPublications = function () {
        var firstPublication = this.publicationList.publications[0];
        if (!firstPublication) {
            return;
        }
        var pageToRequest = firstPublication.page - 1;
        if (pageToRequest <= 0) {
            return;
        }
        this.store.dispatch(new _store_timeline_timeline_actions__WEBPACK_IMPORTED_MODULE_2__["AddPreviousPublicationsToTimeline"]({
            end_date: this.getFirstPublicationReference().creation_date,
            limit: _global_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].PUBLICATION_LOAD_LIMIT_TIMELINE,
            order: 'desd',
            page: pageToRequest,
        }, MAX_LOADED_PAGES));
    };
    TimelinePage.prototype.showLikesList = function (publicationId) {
        this.publicationId = publicationId;
        this.utilsService.openIonSheet(_enum_ion_sheet_type__WEBPACK_IMPORTED_MODULE_7__["ION_SHEET_TYPE"].LIKES, this.publicationId);
    };
    TimelinePage.prototype.showCommentsList = function (publicationId) {
        this.publicationId = publicationId;
        this.utilsService.openIonSheet(_enum_ion_sheet_type__WEBPACK_IMPORTED_MODULE_7__["ION_SHEET_TYPE"].COMMENTS, this.publicationId);
    };
    TimelinePage.prototype.onPublicationButtonClick = function ($event) {
        var buttonPosition = $event.buttonPosition;
        var publicationId = $event.publicationId;
        console.log(buttonPosition, publicationId);
        this.publicationId = publicationId;
        switch (buttonPosition) {
            case 0: // likes
                this.changeLikeStatus(publicationId);
                break;
            case 1: // comments
                this.showCommentsList(publicationId);
                break;
            case 2: // share on impulsyn
                this.socialShare.sharePublication(publicationId);
                break;
            case 3: // share outside
                break;
        }
    };
    TimelinePage.prototype.subscribeToDOMPublicationListChanges = function () {
        var _this = this;
        this.publicationListObserver = new MutationObserver(function () {
            if (_this.currentElementToScroll) {
                _this.publicationListContainer.nativeElement.scrollTop = _this.currentElementToScroll.offsetTop;
                _this.scrollToElement();
            }
        });
        this.publicationListObserver.observe(this.publicationListContainer.nativeElement, { childList: true });
    };
    TimelinePage.prototype.isTextOpened = function () {
        var opened = document.getElementsByClassName('opened');
        return opened.length > 0;
    };
    TimelinePage.prototype.onTouchStart = function (event) {
        if (this.isTextOpened() || this.isScrollInProgress) {
            return;
        }
        this.swipeStartTime = Date.now();
        this.touchStartPositionY = event.changedTouches[0].clientY;
        this.lastTouchPositionY = this.touchStartPositionY;
    };
    TimelinePage.prototype.onTouchMove = function (event) {
        if (this.isTextOpened() || this.isScrollInProgress) {
            return;
        }
        var currentTouchPositon = event.changedTouches[0].clientY;
        this.publicationListContainer.nativeElement.scrollTop -= currentTouchPositon - this.lastTouchPositionY;
        this.lastTouchPositionY += currentTouchPositon - this.lastTouchPositionY;
    };
    TimelinePage.prototype.onTouchEnd = function (event, index) {
        if (this.isTextOpened() || this.isScrollInProgress) {
            return;
        }
        var distanceY = event.changedTouches[0].clientY - this.touchStartPositionY;
        var elapsedTime = Date.now() - this.swipeStartTime;
        if (!(elapsedTime <= this.swipeAllowedTime) || Math.abs(distanceY) < this.distanceThreshold) {
            // if no swipe
            this.calculatePublicationToShow(index);
            return;
        }
        if (distanceY > 0) {
            // swipe down
            this.moveToPreviousPublication(index);
        }
        else {
            // swipe up
            this.moveToNextPublication(index);
        }
    };
    TimelinePage.prototype.moveToNextPublication = function (index) {
        var publicationListElements = this.getPublicationsElements();
        if (index === publicationListElements.length - 1) {
            return;
        }
        this.disableFocusOnPublication();
        this.setCurrentElements(index + 1);
        this.scrollToElement();
    };
    TimelinePage.prototype.moveToPreviousPublication = function (index) {
        if (index === 0) {
            return;
        }
        this.disableFocusOnPublication();
        this.setCurrentElements(index - 1);
        this.scrollToElement();
    };
    TimelinePage.prototype.calculatePublicationToShow = function (index) {
        try {
            var publicationListbounds = this.publicationListContainer.nativeElement.getBoundingClientRect();
            var publicationListMiddlePosition = publicationListbounds.height / 2 + publicationListbounds.top;
            var publicationListElements = this.getPublicationsElements();
            var bounds = publicationListElements[index].getBoundingClientRect();
            if (bounds.top > publicationListMiddlePosition) {
                this.setCurrentElements(index - 1);
                this.disableFocusOnPublication();
            }
            else if (bounds.bottom < publicationListMiddlePosition) {
                this.setCurrentElements(index + 1);
                this.disableFocusOnPublication();
            }
            else {
                this.setCurrentElements(index);
            }
            this.scrollToElement();
        }
        catch (error) {
            console.error(error);
        }
    };
    TimelinePage.prototype.scrollToElement = function () {
        this.isScrollInProgress = true;
        window.requestAnimationFrame(this.smoothScroll());
    };
    TimelinePage.prototype.smoothScroll = function () {
        var _this = this;
        var elementTop = this.currentElementToScroll.getBoundingClientRect().top;
        var elementOffsetTop = this.currentElementToScroll.offsetTop;
        return function () {
            var scrollVelocity = elementTop > 0 ? _this.scrollVelocity : -_this.scrollVelocity;
            var publicationListContainer = _this.publicationListContainer.nativeElement;
            var totalScroll = publicationListContainer.scrollTop + scrollVelocity;
            if (scrollVelocity > 0) {
                publicationListContainer.scrollTop = totalScroll > elementOffsetTop ? elementOffsetTop : totalScroll;
            }
            else {
                publicationListContainer.scrollTop = totalScroll < elementOffsetTop ? elementOffsetTop : totalScroll;
            }
            // if publication element top has not reach the publicationContainer top
            if ((totalScroll < elementOffsetTop && scrollVelocity > 0) ||
                (totalScroll > elementOffsetTop && scrollVelocity < 0)) {
                window.requestAnimationFrame(_this.smoothScroll());
            }
            else {
                _this.isScrollInProgress = false;
            }
        };
    };
    TimelinePage.prototype.getPublicationsElements = function () {
        return document
            .getElementById('publicationListContainer')
            .getElementsByClassName('publication-container');
    };
    TimelinePage.prototype.onNewPostClick = function ($event) {
        this.router.navigate(['/create-post', this.profileId]);
    };
    TimelinePage.prototype.goUserProfile = function (publication) {
        this.utilsService.goProfile(publication.publisher.id, publication.publisher.type);
    };
    TimelinePage.prototype.doRefresh = function (event) {
        this.store.dispatch(new _store_timeline_timeline_actions__WEBPACK_IMPORTED_MODULE_2__["SetTimelineFirstPublicationReference"](null));
        var subscription = this.store
            .dispatch(new _store_timeline_timeline_actions__WEBPACK_IMPORTED_MODULE_2__["GetTimeline"]({ limit: _global_constants__WEBPACK_IMPORTED_MODULE_9__["Constants"].PUBLICATION_LOAD_LIMIT_TIMELINE }))
            .subscribe(function () {
            subscription.unsubscribe();
            event.target.complete();
        }, function (error) {
            subscription.unsubscribe();
            event.target.complete();
        });
    };
    TimelinePage.prototype.setCurrentElements = function (index) {
        this.currentElementToScroll = this.getPublicationsElements()[index];
        this.currentPublication = this.publicationList.publications[index];
    };
    TimelinePage.prototype.getFirstPublicationReference = function () {
        return this.store.selectSnapshot(_store_timeline_timeline_state__WEBPACK_IMPORTED_MODULE_3__["TimelineState"].getFirstPublicationReference);
    };
    TimelinePage.prototype.newComment = function (comment) {
        this.store.dispatch(new _store_timeline_timeline_actions__WEBPACK_IMPORTED_MODULE_2__["AddComment"](comment, this.publicationId));
    };
    TimelinePage.prototype.likeComment = function (commentId) {
        var comment = this.commentItems.find(function (item) { return item.id === commentId; });
        if (comment) {
            this.store.dispatch(new _store_timeline_timeline_actions__WEBPACK_IMPORTED_MODULE_2__["ChangeCommentLikeStatus"](Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, comment)));
        }
    };
    TimelinePage.prototype.centerPublicationScroll = function () {
        if (!this.currentPublication) {
            return;
        }
        var publicationsToShowIndex = Object(lodash__WEBPACK_IMPORTED_MODULE_19__["findIndex"])(this.publicationList.publications, ['id', this.currentPublication.id]);
        this.calculatePublicationToShow(publicationsToShowIndex);
    };
    TimelinePage.prototype.changeLikeStatus = function (publicationId) {
        var pub = this.publicationList.publications.find(function (publication) { return publication.id === publicationId; });
        if (pub) {
            this.store.dispatch(new _store_timeline_timeline_actions__WEBPACK_IMPORTED_MODULE_2__["ChangeLikeStatusTimeline"](pub));
        }
    };
    TimelinePage.prototype.trackByPublications = function (index, item) {
        return item.id;
    };
    TimelinePage.prototype.onItemClick = function ($event) {
        this.utilsService.goProfile($event.model.id, !$event.isOrganization ? _shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_13__["PUBLISHER_TYPE"].USER : 0);
    };
    TimelinePage.prototype.onFollowPage = function ($event) {
        var index = this.itemsSuggestions.findIndex(function (item) { return item.id === $event.id; });
        var organization = this.itemsSuggestions[index];
        this.store.dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_14__["FollowPageAction"]({ organization: organization }));
    };
    TimelinePage.prototype.onRequestConnection = function ($event) {
        this.networkingService.requestConnectionUpdateList($event.id);
    };
    TimelinePage.prototype.disableFocusOnPublication = function () {
        this.store.dispatch(new _store_posts_posts_actions__WEBPACK_IMPORTED_MODULE_22__["SetFocusOnPublication"](false));
    };
    TimelinePage.prototype.disconnectObservers = function () {
        if (this.loaderBottomObserver) {
            this.loaderBottomObserver.disconnect();
        }
        if (this.loaderTopObserver) {
            this.loaderTopObserver.disconnect();
        }
        if (this.publicationListObserver) {
            this.publicationListObserver.disconnect();
        }
        if (this.timelineSubscription) {
            this.timelineSubscription.unsubscribe();
        }
        if (this.tabEnterSubscription) {
            this.tabEnterSubscription.unsubscribe();
        }
        if (this.subscriptionSuggestions) {
            this.subscriptionSuggestions.unsubscribe();
        }
        if (this.subscriptionPages) {
            this.subscriptionPages.unsubscribe();
        }
        if (this.subscriptionRequested) {
            this.subscriptionRequested.unsubscribe();
        }
        if (this.focusOnPublicationSubscription) {
            this.focusOnPublicationSubscription.unsubscribe();
        }
    };
    TimelinePage.prototype.ngOnDestroy = function () {
        this.store.dispatch(new _store_timeline_timeline_actions__WEBPACK_IMPORTED_MODULE_2__["SetTimelineFirstPublicationReference"](null));
        this.disconnectObservers();
    };
    TimelinePage.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] },
        { type: _core_social_sharing_service__WEBPACK_IMPORTED_MODULE_10__["SocialSharingService"] },
        { type: _networking_services_networking_controllers_service__WEBPACK_IMPORTED_MODULE_16__["NetworkingControllersService"] },
        { type: _core_router_ext_service__WEBPACK_IMPORTED_MODULE_20__["RouterExtService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_24__["Platform"] }
    ]; };
    TimelinePage.propDecorators = {
        slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['slider',] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['content', { static: false },] }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_network_network_state__WEBPACK_IMPORTED_MODULE_11__["NetworkState"].getSuggestions)
    ], TimelinePage.prototype, "userSuggestionsList$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_network_network_state__WEBPACK_IMPORTED_MODULE_11__["NetworkState"].getRequested)
    ], TimelinePage.prototype, "userSentList$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_15__["PagesState"].getFollowedPageList)
    ], TimelinePage.prototype, "userPagesList$", void 0);
    TimelinePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeline',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./timeline.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timeline/timeline.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./timeline.page.scss */ "./src/app/timeline/timeline.page.scss")).default]
        })
    ], TimelinePage);
    return TimelinePage;
}());



/***/ })

}]);
//# sourceMappingURL=timeline-timeline-module.js.map