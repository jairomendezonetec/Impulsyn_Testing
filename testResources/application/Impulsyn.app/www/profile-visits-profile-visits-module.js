(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-visits-profile-visits-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-visits/profile-visits.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-visits/profile-visits.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'profileViews.title' | translate\" [showBackButton]=\"true\" (backButtonClick)=\"goBack()\">\n</app-header>\n\n<ion-content class=\"item-list\">\n  <ion-row class=\"ion-align-items-end ion-justify-content-start w100 title-section ion-margin-vertical\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <span color=\"secondary\" class=\"bold\">{{ 'profileViews.subtitle' | translate:param }}</span>\n      <ion-icon color=\"secondary\" name=\"bar-chart\" class=\"bold extrabig-size\"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <div *ngFor=\"let item of profileVisitsList$ | async | slice:0:maxVisits\">\n    <app-item-visit [info]=\"item\"></app-item-visit>\n  </div>\n  <div *ngIf=\"(profileVisitsList$ | async).length === 0\">\n    <app-empty [showButton]=\"false\" text=\"userProfile.noData\"></app-empty>\n  </div>\n  <div\n    *ngIf=\"(profileVisitsList$ | async)?.length > maxVisits\"\n    color=\"secondary\"\n    class=\"marginTop paddingVertical w100 background-white ion-text-center\"\n  >\n    <span class=\"bold ion-padding-start\" [routerLink]=\"'/see-all-visits'\">{{ \"profileViews.seeAll\" | translate}}</span>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/profile-visits/profile-visits-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/profile-visits/profile-visits-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileVisitsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileVisitsPageRoutingModule", function() { return ProfileVisitsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_visits_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-visits.page */ "./src/app/profile-visits/profile-visits.page.ts");




var routes = [
    {
        path: '',
        component: _profile_visits_page__WEBPACK_IMPORTED_MODULE_3__["ProfileVisitsPage"],
    },
];
var ProfileVisitsPageRoutingModule = /** @class */ (function () {
    function ProfileVisitsPageRoutingModule() {
    }
    ProfileVisitsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfileVisitsPageRoutingModule);
    return ProfileVisitsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/profile-visits/profile-visits.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/profile-visits/profile-visits.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfileVisitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileVisitsPageModule", function() { return ProfileVisitsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _profile_visits_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-visits-routing.module */ "./src/app/profile-visits/profile-visits-routing.module.ts");
/* harmony import */ var _components_item_visit_item_visit_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/item-visit/item-visit.module */ "./src/app/profile-visits/components/item-visit/item-visit.module.ts");
/* harmony import */ var _profile_visits_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-visits.page */ "./src/app/profile-visits/profile-visits.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _profiles_components_empty_empty_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profiles/components/empty/empty.module */ "./src/app/profiles/components/empty/empty.module.ts");







var ProfileVisitsPageModule = /** @class */ (function () {
    function ProfileVisitsPageModule() {
    }
    ProfileVisitsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _profile_visits_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileVisitsPageRoutingModule"], _components_item_visit_item_visit_module__WEBPACK_IMPORTED_MODULE_3__["ItemVisitComponentModule"], _profiles_components_empty_empty_module__WEBPACK_IMPORTED_MODULE_6__["EmptyModule"]],
            declarations: [_profile_visits_page__WEBPACK_IMPORTED_MODULE_4__["ProfileVisitsPage"]],
        })
    ], ProfileVisitsPageModule);
    return ProfileVisitsPageModule;
}());



/***/ }),

/***/ "./src/app/profile-visits/profile-visits.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/profile-visits/profile-visits.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtdmlzaXRzL3Byb2ZpbGUtdmlzaXRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile-visits/profile-visits.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/profile-visits/profile-visits.page.ts ***!
  \*******************************************************/
/*! exports provided: ProfileVisitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileVisitsPage", function() { return ProfileVisitsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _store_network_network_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@store/network/network.state */ "./src/app/@store/network/network.state.ts");
/* harmony import */ var _store_network_network_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@store/network/network.actions */ "./src/app/@store/network/network.actions.ts");









var MAX_VISITS_ITEMS = 10;
var DAYS = 7;
var ProfileVisitsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProfileVisitsPage, _super);
    function ProfileVisitsPage(router, location, store, utilsService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.maxVisits = MAX_VISITS_ITEMS;
        _this.param = { days: DAYS };
        return _this;
    }
    ProfileVisitsPage.prototype.ngOnInit = function () { };
    ProfileVisitsPage.prototype.ionViewWillEnter = function () {
        this.store.dispatch(new _store_network_network_actions__WEBPACK_IMPORTED_MODULE_8__["GetProfileVisitsAction"]({ days: DAYS }));
    };
    ProfileVisitsPage.prototype.ngOnDestroy = function () { };
    ProfileVisitsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_store_network_network_state__WEBPACK_IMPORTED_MODULE_7__["NetworkState"].getVisits)
    ], ProfileVisitsPage.prototype, "profileVisitsList$", void 0);
    ProfileVisitsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-visits',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-visits.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-visits/profile-visits.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-visits.page.scss */ "./src/app/profile-visits/profile-visits.page.scss")).default]
        })
    ], ProfileVisitsPage);
    return ProfileVisitsPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_6__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=profile-visits-profile-visits-module.js.map