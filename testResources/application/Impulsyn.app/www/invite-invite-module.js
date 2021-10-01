(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invite-invite-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-admins-page/components/item-contact-invite/item-contact-invite.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-admins-page/components/item-contact-invite/item-contact-invite.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"item-profile\">\n  <app-image-item [imageProfile]=\"info.photo\"></app-image-item>\n  <div class=\"avatar-text col-xs-7 col-md-7\">\n    <span class=\"small-size ion-text-capitalize\">{{ info.complete_name }}</span>\n    <span class=\"small-size\">{{ info.occupation }}</span>\n    <span class=\"small-size\" *ngIf=\"hasLocation\">\n      {{ userLocation }}\n    </span>\n  </div>\n  <div class=\"col-xs-3 col-md-3\">\n    <ion-button color=\"secondary\" size=\"small\" (click)=\"inviteClickBtn()\">\n      {{ 'organizationProfile.administratorsPage.inviteBtn' | translate }}\n    </ion-button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-admins-page/invite/invite.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-admins-page/invite/invite.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [title]=\"'organizationProfile.administratorsPage.invite' | translate\"\n  [showBackButton]=\"showBackButton\"\n  (backButtonClick)=\"goBack()\"\n>\n</app-header>\n\n<ion-content class=\"item-list\">\n  <ion-searchbar (ionInput)=\"search($event)\"> </ion-searchbar>\n\n  <div *ngFor=\"let item of itemsSearch\">\n    <app-item-contact-invite [info]=\"item\" (inviteEv)=\"invite($event)\" *ngIf=\"!isAdministrator(item)\">\n    </app-item-contact-invite>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/manage-admins-page/components/item-contact-invite/item-contact-invite.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/manage-admins-page/components/item-contact-invite/item-contact-invite.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1hZG1pbnMtcGFnZS9jb21wb25lbnRzL2l0ZW0tY29udGFjdC1pbnZpdGUvaXRlbS1jb250YWN0LWludml0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/manage-admins-page/components/item-contact-invite/item-contact-invite.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/manage-admins-page/components/item-contact-invite/item-contact-invite.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ItemContactInviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemContactInviteComponent", function() { return ItemContactInviteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@global/utils */ "./src/app/@global/utils.ts");



var ItemContactInviteComponent = /** @class */ (function () {
    function ItemContactInviteComponent() {
        this.inviteEv = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ItemContactInviteComponent.prototype.ngOnInit = function () { };
    ItemContactInviteComponent.prototype.ngOnChanges = function (changes) {
        var _a;
        if ((_a = changes['info']) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.hasLocation = !!this.info.country;
            if (this.hasLocation) {
                this.userLocation = _global_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].generateUserFriendlyLocation(this.info.country, this.info.region, this.info.city, this.info.province, this.info.region_name);
            }
        }
    };
    ItemContactInviteComponent.prototype.inviteClickBtn = function () {
        this.inviteEv.emit(this.info);
    };
    ItemContactInviteComponent.ctorParameters = function () { return []; };
    ItemContactInviteComponent.propDecorators = {
        info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inviteEv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    ItemContactInviteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-contact-invite',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-contact-invite.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-admins-page/components/item-contact-invite/item-contact-invite.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-contact-invite.component.scss */ "./src/app/manage-admins-page/components/item-contact-invite/item-contact-invite.component.scss")).default]
        })
    ], ItemContactInviteComponent);
    return ItemContactInviteComponent;
}());



/***/ }),

/***/ "./src/app/manage-admins-page/components/item-contact-invite/item-contact-invite.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/manage-admins-page/components/item-contact-invite/item-contact-invite.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ItemContactInviteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemContactInviteModule", function() { return ItemContactInviteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _item_contact_invite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-contact-invite.component */ "./src/app/manage-admins-page/components/item-contact-invite/item-contact-invite.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_image_item_image_item_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@shared/components/image-item/image-item.module */ "./src/app/@shared/components/image-item/image-item.module.ts");







var ItemContactInviteModule = /** @class */ (function () {
    function ItemContactInviteModule() {
    }
    ItemContactInviteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_item_contact_invite_component__WEBPACK_IMPORTED_MODULE_3__["ItemContactInviteComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_components_image_item_image_item_module__WEBPACK_IMPORTED_MODULE_6__["ImageItemModule"]],
            exports: [_item_contact_invite_component__WEBPACK_IMPORTED_MODULE_3__["ItemContactInviteComponent"]],
        })
    ], ItemContactInviteModule);
    return ItemContactInviteModule;
}());



/***/ }),

/***/ "./src/app/manage-admins-page/invite/invite-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/manage-admins-page/invite/invite-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: InvitePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitePageRoutingModule", function() { return InvitePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _invite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invite.page */ "./src/app/manage-admins-page/invite/invite.page.ts");




var routes = [
    {
        path: '',
        component: _invite_page__WEBPACK_IMPORTED_MODULE_3__["InvitePage"],
    },
];
var InvitePageRoutingModule = /** @class */ (function () {
    function InvitePageRoutingModule() {
    }
    InvitePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], InvitePageRoutingModule);
    return InvitePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/manage-admins-page/invite/invite.module.ts":
/*!************************************************************!*\
  !*** ./src/app/manage-admins-page/invite/invite.module.ts ***!
  \************************************************************/
/*! exports provided: InvitePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitePageModule", function() { return InvitePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _invite_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invite-routing.module */ "./src/app/manage-admins-page/invite/invite-routing.module.ts");
/* harmony import */ var _invite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invite.page */ "./src/app/manage-admins-page/invite/invite.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _components_item_contact_invite_item_contact_invite_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/item-contact-invite/item-contact-invite.module */ "./src/app/manage-admins-page/components/item-contact-invite/item-contact-invite.module.ts");






var InvitePageModule = /** @class */ (function () {
    function InvitePageModule() {
    }
    InvitePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _invite_routing_module__WEBPACK_IMPORTED_MODULE_2__["InvitePageRoutingModule"], _components_item_contact_invite_item_contact_invite_module__WEBPACK_IMPORTED_MODULE_5__["ItemContactInviteModule"]],
            declarations: [_invite_page__WEBPACK_IMPORTED_MODULE_3__["InvitePage"]],
        })
    ], InvitePageModule);
    return InvitePageModule;
}());



/***/ }),

/***/ "./src/app/manage-admins-page/invite/invite.page.scss":
/*!************************************************************!*\
  !*** ./src/app/manage-admins-page/invite/invite.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1hZG1pbnMtcGFnZS9pbnZpdGUvaW52aXRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/manage-admins-page/invite/invite.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/manage-admins-page/invite/invite.page.ts ***!
  \**********************************************************/
/*! exports provided: InvitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitePage", function() { return InvitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _store_network_network_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@store/network/network.state */ "./src/app/@store/network/network.state.ts");
/* harmony import */ var src_app_store_network_network_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/@store/network/network.actions */ "./src/app/@store/network/network.actions.ts");
/* harmony import */ var src_app_store_user_user_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var src_app_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/@store/pages/pages.state */ "./src/app/@store/pages/pages.state.ts");
/* harmony import */ var src_app_store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/@store/pages/pages.actions */ "./src/app/@store/pages/pages.actions.ts");












var InvitePage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvitePage, _super);
    function InvitePage(router, location, store, utilsService, route) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.route = route;
        _this.pageAdministrators = [];
        return _this;
    }
    InvitePage.prototype.ngOnInit = function () {
        var _a;
        this.profileId = this.route.snapshot.params['profileId'];
        var userId = (_a = this.store.selectSnapshot(src_app_store_user_user_state__WEBPACK_IMPORTED_MODULE_9__["UserState"].getUserInfo)) === null || _a === void 0 ? void 0 : _a.id;
        this.store.dispatch(new src_app_store_network_network_actions__WEBPACK_IMPORTED_MODULE_8__["GetConnectionsAction"]({ id: userId }));
        this.loadConnections();
        this.subscribeToPageAdministrators();
    };
    InvitePage.prototype.invite = function (user) {
        this.store.dispatch(new src_app_store_pages_pages_actions__WEBPACK_IMPORTED_MODULE_11__["CreatePageAdministrator"]({ organizationId: this.profileId, user: user }));
    };
    InvitePage.prototype.loadConnections = function () {
        var _this = this;
        this.subscriptionContacts$ = this.userContactsList$.subscribe(function (data) {
            _this.items = data;
            _this.initializeSearchList();
        });
    };
    InvitePage.prototype.subscribeToPageAdministrators = function () {
        var _this = this;
        this.pageAdministratorsSubscription$ = this.store
            .select(src_app_store_pages_pages_state__WEBPACK_IMPORTED_MODULE_10__["PagesState"].getPageAdministrators)
            .subscribe(function (data) {
            _this.pageAdministrators = data;
        });
    };
    InvitePage.prototype.isAdministrator = function (item) {
        var isAdmin = this.pageAdministrators.find(function (admin) { return admin.id === item.id; });
        return isAdmin ? true : false;
    };
    InvitePage.prototype.search = function (event) {
        this.initializeSearchList();
        var val = event.target.value;
        if (val && val.trim() !== '') {
            this.itemsSearch = this.items.filter(function (it) { return it.complete_name.toLowerCase().indexOf(val.trim().toLowerCase()) > -1; });
        }
    };
    InvitePage.prototype.initializeSearchList = function () {
        this.itemsSearch = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.items);
    };
    InvitePage.prototype.ngOnDestroy = function () {
        if (this.subscriptionContacts$) {
            this.subscriptionContacts$.unsubscribe();
        }
        if (this.pageAdministratorsSubscription$) {
            this.pageAdministratorsSubscription$.unsubscribe();
        }
    };
    InvitePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_store_network_network_state__WEBPACK_IMPORTED_MODULE_7__["NetworkState"].getContacts)
    ], InvitePage.prototype, "userContactsList$", void 0);
    InvitePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invite',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./invite.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-admins-page/invite/invite.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./invite.page.scss */ "./src/app/manage-admins-page/invite/invite.page.scss")).default]
        })
    ], InvitePage);
    return InvitePage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=invite-invite-module.js.map