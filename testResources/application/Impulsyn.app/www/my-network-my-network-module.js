(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-network-my-network-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/networking/components/item-following/item-following.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/networking/components/item-following/item-following.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"item-profile\" (click)=\"onItemClick()\">\n  <div>\n    <img [src]=\"info.photo\" class=\"avatar-image\" />\n  </div>\n  <div class=\"avatar-text col-xs-8 col-md-8\">\n    <div class=\"small-size\">{{ info.complete_name }}</div>\n    <div class=\"small-size\">{{ prefix + '.' + info.organization_subtype.name | translate }}</div>\n    <div class=\"small-size\" *ngIf=\"hasLocation\">{{ itemLocation }}</div>\n  </div>\n  <div class=\"col-xs-2 col-md-2 followingLink\">\n    <span color=\"secondary\" class=\"small-size ion-text-end\">{{ 'myNetwork.following' | translate }}</span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/networking/my-network/my-network.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/networking/my-network/my-network.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'myNetwork.title' | translate\" [showBackButton]=\"true\" (backButtonClick)=\"goBack()\"></app-header>\n\n<ion-content>\n  <ion-segment [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\" color=\"secondary\">\n    <ion-segment-button value=\"people\">\n      <ion-label>{{'myNetwork.people' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"pages\">\n      <ion-label>{{'myNetwork.pages' | translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div *ngIf=\"segmentModel === 'people'\">\n    <div *ngFor=\"let item of items\">\n      <app-item-suggestion\n        [info]=\"item\"\n        [buttonText]=\"'message'\"\n        (actionItemClick)=\"onItemClick($event)\"\n        (actionButtonClick)=\"onButtonClick($event)\"\n      ></app-item-suggestion>\n    </div>\n    <app-empty [showButton]=\"false\" text=\"userProfile.noData\" *ngIf=\"items.length === 0\"> </app-empty>\n  </div>\n  <div *ngIf=\"segmentModel === 'pages'\">\n    <div *ngFor=\"let item of pages\">\n      <app-item-following [info]=\"item\" (actionItemClick)=\"onItemOrganizationClick($event)\"></app-item-following>\n    </div>\n    <app-empty [showButton]=\"false\" text=\"userProfile.noData\" *ngIf=\"pages.length === 0\"> </app-empty>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/networking/components/item-following/item-following.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/networking/components/item-following/item-following.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".followingLink {\n  padding-bottom: 4px;\n  align-self: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV0d29ya2luZy9jb21wb25lbnRzL2l0ZW0tZm9sbG93aW5nL2l0ZW0tZm9sbG93aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmV0d29ya2luZy9jb21wb25lbnRzL2l0ZW0tZm9sbG93aW5nL2l0ZW0tZm9sbG93aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbGxvd2luZ0xpbmsge1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/networking/components/item-following/item-following.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/networking/components/item-following/item-following.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ItemFollowingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFollowingComponent", function() { return ItemFollowingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@global/utils */ "./src/app/@global/utils.ts");



var ItemFollowingComponent = /** @class */ (function () {
    function ItemFollowingComponent() {
        this.actionItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ItemFollowingComponent.prototype.ngOnInit = function () { };
    ItemFollowingComponent.prototype.ngOnChanges = function (changes) {
        var _a;
        if ((_a = changes['info']) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.hasLocation = !!this.info.country;
            if (this.hasLocation) {
                this.itemLocation = _global_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].generateUserFriendlyLocation(this.info.country, this.info.region, this.info.city, this.info.province, this.info.region_name);
            }
            this.prefix = _global_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getSubtypeTranslationPrefix(this.info.organization_type);
        }
    };
    ItemFollowingComponent.prototype.onItemClick = function () {
        this.actionItemClick.emit(this.info.id);
    };
    ItemFollowingComponent.ctorParameters = function () { return []; };
    ItemFollowingComponent.propDecorators = {
        info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        actionItemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    ItemFollowingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-following',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-following.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/networking/components/item-following/item-following.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-following.component.scss */ "./src/app/networking/components/item-following/item-following.component.scss")).default]
        })
    ], ItemFollowingComponent);
    return ItemFollowingComponent;
}());



/***/ }),

/***/ "./src/app/networking/components/item-following/item-following.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/networking/components/item-following/item-following.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ItemFollowingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFollowingModule", function() { return ItemFollowingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _item_following_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-following.component */ "./src/app/networking/components/item-following/item-following.component.ts");






var ItemFollowingModule = /** @class */ (function () {
    function ItemFollowingModule() {
    }
    ItemFollowingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_item_following_component__WEBPACK_IMPORTED_MODULE_5__["ItemFollowingComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_item_following_component__WEBPACK_IMPORTED_MODULE_5__["ItemFollowingComponent"]],
        })
    ], ItemFollowingModule);
    return ItemFollowingModule;
}());



/***/ }),

/***/ "./src/app/networking/my-network/my-network-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/networking/my-network/my-network-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: MyNetworkPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNetworkPageRoutingModule", function() { return MyNetworkPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_network_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-network.page */ "./src/app/networking/my-network/my-network.page.ts");




var routes = [
    {
        path: '',
        component: _my_network_page__WEBPACK_IMPORTED_MODULE_3__["MyNetworkPage"],
    },
];
var MyNetworkPageRoutingModule = /** @class */ (function () {
    function MyNetworkPageRoutingModule() {
    }
    MyNetworkPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MyNetworkPageRoutingModule);
    return MyNetworkPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/networking/my-network/my-network.module.ts":
/*!************************************************************!*\
  !*** ./src/app/networking/my-network/my-network.module.ts ***!
  \************************************************************/
/*! exports provided: MyNetworkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNetworkPageModule", function() { return MyNetworkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _my_network_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-network-routing.module */ "./src/app/networking/my-network/my-network-routing.module.ts");
/* harmony import */ var _my_network_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-network.page */ "./src/app/networking/my-network/my-network.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _components_item_suggestion_item_suggestion_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/item-suggestion/item-suggestion.module */ "./src/app/networking/components/item-suggestion/item-suggestion.module.ts");
/* harmony import */ var _components_item_following_item_following_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/item-following/item-following.module */ "./src/app/networking/components/item-following/item-following.module.ts");
/* harmony import */ var _profiles_components_empty_empty_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../profiles/components/empty/empty.module */ "./src/app/profiles/components/empty/empty.module.ts");








var MyNetworkPageModule = /** @class */ (function () {
    function MyNetworkPageModule() {
    }
    MyNetworkPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _my_network_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyNetworkPageRoutingModule"], _components_item_suggestion_item_suggestion_module__WEBPACK_IMPORTED_MODULE_5__["ItemSuggestionModule"], _components_item_following_item_following_module__WEBPACK_IMPORTED_MODULE_6__["ItemFollowingModule"], _profiles_components_empty_empty_module__WEBPACK_IMPORTED_MODULE_7__["EmptyModule"]],
            declarations: [_my_network_page__WEBPACK_IMPORTED_MODULE_3__["MyNetworkPage"]],
        })
    ], MyNetworkPageModule);
    return MyNetworkPageModule;
}());



/***/ }),

/***/ "./src/app/networking/my-network/my-network.page.scss":
/*!************************************************************!*\
  !*** ./src/app/networking/my-network/my-network.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldHdvcmtpbmcvbXktbmV0d29yay9teS1uZXR3b3JrLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/networking/my-network/my-network.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/networking/my-network/my-network.page.ts ***!
  \**********************************************************/
/*! exports provided: MyNetworkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNetworkPage", function() { return MyNetworkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var _store_network_network_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@store/network/network.actions */ "./src/app/@store/network/network.actions.ts");
/* harmony import */ var _store_network_network_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@store/network/network.state */ "./src/app/@store/network/network.state.ts");
/* harmony import */ var _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@store/pages/pages.actions */ "./src/app/@store/pages/pages.actions.ts");
/* harmony import */ var _store_pages_pages_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@store/pages/pages.state */ "./src/app/@store/pages/pages.state.ts");
/* harmony import */ var _shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../@shared/enums/publisher-type */ "./src/app/@shared/enums/publisher-type.ts");













var MyNetworkPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MyNetworkPage, _super);
    function MyNetworkPage(router, location, store, utilsService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.segmentModel = 'people';
        return _this;
    }
    MyNetworkPage.prototype.ngOnInit = function () {
        this.loadConnections();
        this.loadPages();
    };
    MyNetworkPage.prototype.ionViewWillEnter = function () {
        var user = this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_7__["UserState"].getUserInfo);
        this.store.dispatch(new _store_network_network_actions__WEBPACK_IMPORTED_MODULE_8__["GetConnectionsAction"]({ id: user.id }));
        this.store.dispatch(new _store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_10__["GetFollowedPages"]());
    };
    MyNetworkPage.prototype.loadConnections = function () {
        var _this = this;
        this.subscriptionContacts$ = this.userContactsList$.subscribe(function (data) {
            _this.items = data;
        });
    };
    MyNetworkPage.prototype.loadPages = function () {
        var _this = this;
        this.subscriptionPages$ = this.userPagesList$.subscribe(function (data) {
            _this.pages = data;
        });
    };
    MyNetworkPage.prototype.segmentChanged = function (ev) {
        console.log('Segment changed', ev);
    };
    MyNetworkPage.prototype.onItemClick = function ($event) {
        this.utilsService.goProfile($event.model.id, _shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_12__["PUBLISHER_TYPE"].USER);
    };
    MyNetworkPage.prototype.onButtonClick = function ($event) {
        this.utilsService.goChatDetailWithUserData($event.id, $event.completeName);
    };
    MyNetworkPage.prototype.onItemOrganizationClick = function ($event) {
        this.utilsService.goProfile($event, 0);
    };
    MyNetworkPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    MyNetworkPage.prototype.disconnectObservers = function () {
        if (this.subscriptionContacts$) {
            this.subscriptionContacts$.unsubscribe();
        }
        if (this.subscriptionPages$) {
            this.subscriptionPages$.unsubscribe();
        }
    };
    MyNetworkPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_network_network_state__WEBPACK_IMPORTED_MODULE_9__["NetworkState"].getContacts)
    ], MyNetworkPage.prototype, "userContactsList$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_11__["PagesState"].getFollowedPageList)
    ], MyNetworkPage.prototype, "userPagesList$", void 0);
    MyNetworkPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-network',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-network.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/networking/my-network/my-network.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-network.page.scss */ "./src/app/networking/my-network/my-network.page.scss")).default]
        })
    ], MyNetworkPage);
    return MyNetworkPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=my-network-my-network-module.js.map