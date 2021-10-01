(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["connections-connections-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/connections/connections.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/connections/connections.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"completeName\" [showBackButton]=\"true\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content>\n  <div *ngFor=\"let item of items\">\n    <app-item-suggestion\n      *ngIf=\"loaded\"\n      [info]=\"item\"\n      [buttonText]=\"getButtonText(item.id)\"\n      [infoText]=\"getInfoText(item.id)\"\n      (actionButtonClick)=\"isCommonContact(item.id) ? onSendMessageClick($event) : onRequestConnection($event)\"\n      (actionItemClick)=\"onItemClick($event)\"\n      [buttonColor]=\"!isCommonContact(item.id) ? 'secondary' : null\"\n      [isOrganization]=\"false\"\n    ></app-item-suggestion>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/connections/connections-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/connections/connections-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ConnectionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionsPageRoutingModule", function() { return ConnectionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _connections_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connections.page */ "./src/app/connections/connections.page.ts");




var routes = [
    {
        path: '',
        component: _connections_page__WEBPACK_IMPORTED_MODULE_3__["ConnectionsPage"],
    },
];
var ConnectionsPageRoutingModule = /** @class */ (function () {
    function ConnectionsPageRoutingModule() {
    }
    ConnectionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ConnectionsPageRoutingModule);
    return ConnectionsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/connections/connections.module.ts":
/*!***************************************************!*\
  !*** ./src/app/connections/connections.module.ts ***!
  \***************************************************/
/*! exports provided: ConnectionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionsPageModule", function() { return ConnectionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _connections_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connections-routing.module */ "./src/app/connections/connections-routing.module.ts");
/* harmony import */ var _connections_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connections.page */ "./src/app/connections/connections.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _networking_components_item_suggestion_item_suggestion_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../networking/components/item-suggestion/item-suggestion.module */ "./src/app/networking/components/item-suggestion/item-suggestion.module.ts");
/* harmony import */ var _profiles_components_empty_empty_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profiles/components/empty/empty.module */ "./src/app/profiles/components/empty/empty.module.ts");







var ConnectionsPageModule = /** @class */ (function () {
    function ConnectionsPageModule() {
    }
    ConnectionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _connections_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConnectionsPageRoutingModule"], _networking_components_item_suggestion_item_suggestion_module__WEBPACK_IMPORTED_MODULE_5__["ItemSuggestionModule"], _profiles_components_empty_empty_module__WEBPACK_IMPORTED_MODULE_6__["EmptyModule"]],
            declarations: [_connections_page__WEBPACK_IMPORTED_MODULE_3__["ConnectionsPage"]],
        })
    ], ConnectionsPageModule);
    return ConnectionsPageModule;
}());



/***/ }),

/***/ "./src/app/connections/connections.page.scss":
/*!***************************************************!*\
  !*** ./src/app/connections/connections.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvbm5lY3Rpb25zL2Nvbm5lY3Rpb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/connections/connections.page.ts":
/*!*************************************************!*\
  !*** ./src/app/connections/connections.page.ts ***!
  \*************************************************/
/*! exports provided: ConnectionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionsPage", function() { return ConnectionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_auth_auth_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@store/auth/auth.state */ "./src/app/@store/auth/auth.state.ts");
/* harmony import */ var _store_network_network_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@store/network/network.actions */ "./src/app/@store/network/network.actions.ts");
/* harmony import */ var _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@store/pages/pages.actions */ "./src/app/@store/pages/pages.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_network_network_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@store/network/network.state */ "./src/app/@store/network/network.state.ts");
/* harmony import */ var _store_pages_pages_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@store/pages/pages.state */ "./src/app/@store/pages/pages.state.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@shared/enums/publisher-type */ "./src/app/@shared/enums/publisher-type.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _networking_services_networking_controllers_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../networking/services/networking-controllers.service */ "./src/app/networking/services/networking-controllers.service.ts");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");

















var ConnectionsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConnectionsPage, _super);
    function ConnectionsPage(router, location, store, utilsService, route, networkingService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.route = route;
        _this.networkingService = networkingService;
        _this.completeName = null;
        _this.otherUserId = null;
        _this.userLoggedId = '';
        _this.pageFollowers = false;
        _this.loaded = false;
        _this.items = [];
        _this.itemsIntersection = [];
        _this.pendingItems = [];
        _this.sendedPendingItems = [];
        _this.pages = [];
        _this.itemsRequests = [];
        return _this;
    }
    ConnectionsPage.prototype.ngOnInit = function () { };
    ConnectionsPage.prototype.doIonViewWillEnter = function () {
        var _a, _b, _c;
        this.completeName = (_a = this.route.snapshot.queryParams) === null || _a === void 0 ? void 0 : _a.completeName;
        this.otherUserId = (_b = this.route.snapshot.queryParams) === null || _b === void 0 ? void 0 : _b.id;
        this.userLoggedId = this.store.selectSnapshot(_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_2__["AuthState"].getUserId);
        this.pageFollowers = ((_c = this.route.snapshot.queryParams) === null || _c === void 0 ? void 0 : _c.page) || false;
        if (this.pageFollowers) {
            this.subscribeFollowers();
            this.getFollowersConnections();
        }
        else {
            this.subscribeConnections();
            this.getCommonFriends();
        }
        this.subscribeToRequested();
        this.subscribeToPending();
        this.store.dispatch(new _store_network_network_actions__WEBPACK_IMPORTED_MODULE_3__["GetPendingRequestsAction"]());
        this.store.dispatch(new _store_network_network_actions__WEBPACK_IMPORTED_MODULE_3__["GetRequestsSentAction"]());
    };
    ConnectionsPage.prototype.getCommonFriends = function () {
        var _this = this;
        this.store
            .dispatch(new _store_network_network_actions__WEBPACK_IMPORTED_MODULE_3__["GetConnectionsAction"]({ id: this.userLoggedId }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function () {
            var userLoggedContacts = _this.store.selectSnapshot(_store_network_network_state__WEBPACK_IMPORTED_MODULE_6__["NetworkState"].getContacts);
            _this.store
                .dispatch(new _store_network_network_actions__WEBPACK_IMPORTED_MODULE_3__["GetConnectionsAction"]({ id: _this.otherUserId }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                .subscribe(function () {
                var userContacts = _this.store.selectSnapshot(_store_network_network_state__WEBPACK_IMPORTED_MODULE_6__["NetworkState"].getContacts);
                _this.itemsIntersection = _this.unionCollections(userContacts, userLoggedContacts);
                _this.loaded = true;
            });
        });
    };
    ConnectionsPage.prototype.getFollowersConnections = function () {
        var _this = this;
        this.store
            .dispatch(new _store_network_network_actions__WEBPACK_IMPORTED_MODULE_3__["GetConnectionsAction"]({ id: this.userLoggedId }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function () {
            var userLoggedContacts = _this.store.selectSnapshot(_store_network_network_state__WEBPACK_IMPORTED_MODULE_6__["NetworkState"].getContacts);
            _this.store
                .dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_4__["GetPageFollowers"]({ id: _this.otherUserId }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                .subscribe(function () {
                var pageFollowers = _this.store.selectSnapshot(_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_7__["PagesState"].getPageFollowers);
                _this.itemsIntersection = _this.unionCollections(pageFollowers, userLoggedContacts);
                _this.loaded = true;
            });
        });
    };
    ConnectionsPage.prototype.subscribeToRequested = function () {
        var _this = this;
        this.subscriptionRequested$ = this.userSentList$.subscribe(function (data) {
            _this.sendedPendingItems = data;
        });
    };
    ConnectionsPage.prototype.subscribeToPending = function () {
        var _this = this;
        this.subscriptionPending$ = this.userPendingList$.subscribe(function (data) {
            _this.pendingItems = data;
        });
    };
    ConnectionsPage.prototype.isOwnUser = function (id) {
        return id === this.userLoggedId;
    };
    ConnectionsPage.prototype.unionCollections = function (collection1, collection2) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_8__["filter"])(collection1, function (item) { return Object(lodash__WEBPACK_IMPORTED_MODULE_8__["find"])(collection2, ['id', item.id]); });
    };
    ConnectionsPage.prototype.isCommonContact = function (id) {
        return _global_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].isItemOnList(this.itemsIntersection, id);
    };
    ConnectionsPage.prototype.isPendingRequest = function (id) {
        return _global_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].isItemOnList(this.pendingItems, id);
    };
    ConnectionsPage.prototype.isSendedPendingRequest = function (id) {
        return _global_utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].isItemOnList(this.sendedPendingItems, id);
    };
    ConnectionsPage.prototype.getButtonText = function (id) {
        if (this.isOwnUser(id) || this.isSendedPendingRequest(id) || this.isPendingRequest(id)) {
            return null;
        }
        return this.isCommonContact(id) ? 'message' : 'connect';
    };
    ConnectionsPage.prototype.getInfoText = function (id) {
        if (this.isSendedPendingRequest(id)) {
            return 'requested';
        }
        else if (this.isPendingRequest(id)) {
            return 'pending';
        }
        return null;
    };
    ConnectionsPage.prototype.onRequestConnection = function ($event) {
        this.networkingService.onRequestConnection($event.id);
    };
    ConnectionsPage.prototype.subscribeConnections = function () {
        var _this = this;
        this.subscriptionContacts$ = this.userContactsList$.subscribe(function (data) {
            if (!data) {
                return;
            }
            _this.items = data;
        });
    };
    ConnectionsPage.prototype.subscribeFollowers = function () {
        var _this = this;
        this.subscriptionFollowers$ = this.pageFollowersList$.subscribe(function (data) {
            if (!data) {
                return;
            }
            _this.items = data;
        });
    };
    ConnectionsPage.prototype.onItemClick = function ($event) {
        this.utilsService.goProfile($event.model.id, _shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_10__["PUBLISHER_TYPE"].USER);
    };
    ConnectionsPage.prototype.onSendMessageClick = function ($event) {
        this.utilsService.goChatDetailWithUserData($event.id, $event.completeName);
    };
    ConnectionsPage.prototype.ionViewWillLeave = function () {
        this.disconnectObservers();
    };
    ConnectionsPage.prototype.disconnectObservers = function () {
        if (this.subscriptionContacts$) {
            this.subscriptionContacts$.unsubscribe();
        }
        if (this.subscriptionPages$) {
            this.subscriptionPages$.unsubscribe();
        }
        if (this.subscriptionFollowers$) {
            this.subscriptionFollowers$.unsubscribe();
        }
        if (this.subscriptionRequested$) {
            this.subscriptionRequested$.unsubscribe();
        }
        if (this.subscriptionPending$) {
            this.subscriptionPending$.unsubscribe();
        }
    };
    ConnectionsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_11__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_14__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
        { type: _networking_services_networking_controllers_service__WEBPACK_IMPORTED_MODULE_15__["NetworkingControllersService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_11__["Select"])(_store_network_network_state__WEBPACK_IMPORTED_MODULE_6__["NetworkState"].getContacts)
    ], ConnectionsPage.prototype, "userContactsList$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_11__["Select"])(_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_7__["PagesState"].getFollowedPageList)
    ], ConnectionsPage.prototype, "userPagesList$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_11__["Select"])(_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_7__["PagesState"].getPageFollowers)
    ], ConnectionsPage.prototype, "pageFollowersList$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_11__["Select"])(_store_network_network_state__WEBPACK_IMPORTED_MODULE_6__["NetworkState"].getRequested)
    ], ConnectionsPage.prototype, "userSentList$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_11__["Select"])(_store_network_network_state__WEBPACK_IMPORTED_MODULE_6__["NetworkState"].getPending)
    ], ConnectionsPage.prototype, "userPendingList$", void 0);
    ConnectionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-connections',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./connections.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/connections/connections.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./connections.page.scss */ "./src/app/connections/connections.page.scss")).default]
        })
    ], ConnectionsPage);
    return ConnectionsPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_16__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=connections-connections-module.js.map