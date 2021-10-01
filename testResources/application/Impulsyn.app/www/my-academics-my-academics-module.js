(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-academics-my-academics-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/academics/my-academics/my-academics.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/academics/my-academics/my-academics.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [title]=\"'myAcademics.title' | translate\"\n  [showBackButton]=\"showBackButton\"\n  (backButtonClick)=\"goBack()\"\n></app-header>\n\n<ion-content>\n  <ion-segment [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\" color=\"secondary\">\n    <ion-segment-button value=\"favorites\">\n      <ion-label>{{'myAcademics.favorites' | translate}}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"requested\">\n      <ion-label>{{'myAcademics.requested' | translate}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div *ngIf=\"segmentModel === 'requested'\">\n    <div *ngFor=\"let item of items\">\n      <app-academic-item\n        [program]=\"item\"\n        (itemClick)=\"onItemClick($event)\"\n        [hasPhoto]=\"true\"\n        [linkText]=\"'academics.seeMore'\"\n      ></app-academic-item>\n    </div>\n    <app-empty [showButton]=\"false\" text=\"userProfile.noData\" *ngIf=\"items.length === 0\"> </app-empty>\n  </div>\n  <div *ngIf=\"segmentModel === 'favorites'\">\n    <div *ngFor=\"let item of itemsSaved\">\n      <app-academic-item\n        [program]=\"item\"\n        [hasPhoto]=\"true\"\n        [editable]=\"true\"\n        [iconNameInitial]=\"'heart'\"\n        [iconNameTapped]=\"'heart-outline'\"\n        (iconClick)=\"onFavoriteClick($event)\"\n        (itemClick)=\"onFavoriteItemClick($event)\"\n      ></app-academic-item>\n    </div>\n    <app-empty [showButton]=\"false\" text=\"userProfile.noData\" *ngIf=\"itemsSaved.length === 0\"> </app-empty>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/academics/my-academics/my-academics-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/academics/my-academics/my-academics-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: MyAcademicsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAcademicsPageRoutingModule", function() { return MyAcademicsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_academics_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-academics.page */ "./src/app/academics/my-academics/my-academics.page.ts");




var routes = [
    {
        path: '',
        component: _my_academics_page__WEBPACK_IMPORTED_MODULE_3__["MyAcademicsPage"],
    },
];
var MyAcademicsPageRoutingModule = /** @class */ (function () {
    function MyAcademicsPageRoutingModule() {
    }
    MyAcademicsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MyAcademicsPageRoutingModule);
    return MyAcademicsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/academics/my-academics/my-academics.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/academics/my-academics/my-academics.module.ts ***!
  \***************************************************************/
/*! exports provided: MyAcademicsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAcademicsPageModule", function() { return MyAcademicsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _my_academics_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-academics-routing.module */ "./src/app/academics/my-academics/my-academics-routing.module.ts");
/* harmony import */ var _my_academics_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-academics.page */ "./src/app/academics/my-academics/my-academics.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _profiles_components_empty_empty_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../profiles/components/empty/empty.module */ "./src/app/profiles/components/empty/empty.module.ts");






var MyAcademicsPageModule = /** @class */ (function () {
    function MyAcademicsPageModule() {
    }
    MyAcademicsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _my_academics_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyAcademicsPageRoutingModule"], _profiles_components_empty_empty_module__WEBPACK_IMPORTED_MODULE_5__["EmptyModule"]],
            declarations: [_my_academics_page__WEBPACK_IMPORTED_MODULE_3__["MyAcademicsPage"]],
        })
    ], MyAcademicsPageModule);
    return MyAcademicsPageModule;
}());



/***/ }),

/***/ "./src/app/academics/my-academics/my-academics.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/academics/my-academics/my-academics.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljcy9teS1hY2FkZW1pY3MvbXktYWNhZGVtaWNzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/academics/my-academics/my-academics.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/academics/my-academics/my-academics.page.ts ***!
  \*************************************************************/
/*! exports provided: MyAcademicsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAcademicsPage", function() { return MyAcademicsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_base_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/base.page */ "./src/app/base/base.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var src_app_store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/@store/academic-programs/academic-programs.actions */ "./src/app/@store/academic-programs/academic-programs.actions.ts");
/* harmony import */ var src_app_store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/@store/academic-programs/academic-programs.state */ "./src/app/@store/academic-programs/academic-programs.state.ts");









var MyAcademicsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MyAcademicsPage, _super);
    function MyAcademicsPage(router, location, store, utilsService) {
        var _this = _super.call(this, location, router, store, utilsService) || this;
        _this.segmentModel = 'favorites';
        return _this;
    }
    MyAcademicsPage.prototype.ngOnInit = function () {
        this.subscribeToFavourites();
        this.subscribeToRequested();
    };
    MyAcademicsPage.prototype.doIonViewWillEnter = function () {
        this.store.dispatch(new src_app_store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_7__["GetAcademicProgramsFavourites"]());
        this.store.dispatch(new src_app_store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_7__["GetAcademicProgramsRequested"]());
    };
    MyAcademicsPage.prototype.subscribeToFavourites = function () {
        var _this = this;
        this.favouritesSubscription = this.store
            .select(src_app_store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_8__["AcademicProgramsState"].getAcademicProgramsFavourites)
            .subscribe(function (res) {
            _this.itemsSaved = res;
        });
    };
    MyAcademicsPage.prototype.subscribeToRequested = function () {
        var _this = this;
        this.requestedSubscription = this.store
            .select(src_app_store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_8__["AcademicProgramsState"].getAcademicProgramsRequested)
            .subscribe(function (res) {
            _this.items = res;
        });
    };
    MyAcademicsPage.prototype.segmentChanged = function (ev) {
        console.log('Segment changed', ev);
    };
    MyAcademicsPage.prototype.onFavoriteClick = function ($event) {
        this.store.dispatch(new src_app_store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_7__["DeleteAcademicProgramsFavourite"]($event));
    };
    MyAcademicsPage.prototype.onItemClick = function ($event) {
        var program = this.store
            .selectSnapshot(src_app_store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_8__["AcademicProgramsState"].getAcademicProgramsRequested)
            .find(function (item) { return item.id === $event; });
        var programUpdated = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, program), { own: false });
        this.store.dispatch(new src_app_store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_7__["SetCurrentAcademicProgram"](programUpdated));
        this.router.navigate(['academic-program-detail', $event]);
    };
    MyAcademicsPage.prototype.onFavoriteItemClick = function ($event) {
        var program = this.store
            .selectSnapshot(src_app_store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_8__["AcademicProgramsState"].getAcademicProgramsFavourites)
            .find(function (item) { return item.id === $event; });
        var programUpdated = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, program), { own: false });
        this.store.dispatch(new src_app_store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_7__["SetCurrentAcademicProgram"](programUpdated));
        this.router.navigate(['academic-program-detail', $event]);
    };
    MyAcademicsPage.prototype.disconnectObservers = function () {
        if (this.favouritesSubscription) {
            this.favouritesSubscription.unsubscribe();
        }
        if (this.requestedSubscription) {
            this.requestedSubscription.unsubscribe();
        }
    };
    MyAcademicsPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    MyAcademicsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"] }
    ]; };
    MyAcademicsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-academics',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-academics.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/academics/my-academics/my-academics.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-academics.page.scss */ "./src/app/academics/my-academics/my-academics.page.scss")).default]
        })
    ], MyAcademicsPage);
    return MyAcademicsPage;
}(_base_base_page__WEBPACK_IMPORTED_MODULE_2__["BasePage"]));



/***/ })

}]);
//# sourceMappingURL=my-academics-my-academics-module.js.map