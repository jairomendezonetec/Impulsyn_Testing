(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["academics-academics-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/academics/academics.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/academics/academics.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"item-list\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div\n    (click)=\"navigateTo('my-academics')\"\n    color=\"secondary\"\n    class=\"flex-compatible ion-align-items-center ion-margin-bottom marginTop ion-padding-vertical w100 background-white ion-text-start\"\n  >\n    <span class=\"bold ion-padding-start\">{{ \"academics.myAcademics\" | translate}}</span>\n    <ion-icon name=\"chevron-forward-outline\" class=\"extrabig-size\"></ion-icon>\n  </div>\n\n  <!--  start suggestions list-->\n  <div\n    *ngIf=\"items.length > 0\"\n    color=\"secondary\"\n    [routerLink]=\"'/see-all-academics'\"\n    class=\"marginBottom flex-compatible ion-align-items-center ion-padding-vertical w100 background-white ion-text-start\"\n  >\n    <span class=\"bold ion-padding-start\">{{ \"academics.suggestions\" | translate}}</span>\n    <ion-icon name=\"chevron-forward-outline\" class=\"extrabig-size\"></ion-icon>\n    <!--    TODO: Add filters button when functionality is done-->\n    <!--    <ion-button (click)=\"filter()\" class=\"filtersButton\">-->\n    <!--      <ion-icon slot=\"icon-only\" name=\"options-outline\"></ion-icon>-->\n    <!--    </ion-button>-->\n  </div>\n  <div *ngFor=\"let item of items| slice:0:maxSuggestions\">\n    <app-academic-item\n      [linkText]=\"'academics.seeMore'\"\n      (itemClick)=\"onItemClick($event)\"\n      [hasPhoto]=\"true\"\n      [program]=\"item\"\n    ></app-academic-item>\n  </div>\n  <div\n    *ngIf=\"items.length > maxSuggestions\"\n    color=\"secondary\"\n    class=\"marginTop ion-margin-bottom paddingVertical w100 background-white ion-text-center\"\n  >\n    <span class=\"bold ion-padding-start\" [routerLink]=\"'/see-all-academics'\">{{ \"academics.seeAll\" | translate}}</span>\n  </div>\n  <!--  end suggestions list-->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/academics/academics-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/academics/academics-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AcademicsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicsPageRoutingModule", function() { return AcademicsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _academics_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./academics.page */ "./src/app/academics/academics.page.ts");




var routes = [
    {
        path: '',
        component: _academics_page__WEBPACK_IMPORTED_MODULE_3__["AcademicsPage"],
    },
    {
        path: 'my-academics',
        loadChildren: function () { return __webpack_require__.e(/*! import() | my-academics-my-academics-module */ "my-academics-my-academics-module").then(__webpack_require__.bind(null, /*! ./my-academics/my-academics.module */ "./src/app/academics/my-academics/my-academics.module.ts")).then(function (m) { return m.MyAcademicsPageModule; }); },
    },
];
var AcademicsPageRoutingModule = /** @class */ (function () {
    function AcademicsPageRoutingModule() {
    }
    AcademicsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AcademicsPageRoutingModule);
    return AcademicsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/academics/academics.module.ts":
/*!***********************************************!*\
  !*** ./src/app/academics/academics.module.ts ***!
  \***********************************************/
/*! exports provided: AcademicsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicsPageModule", function() { return AcademicsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _academics_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./academics-routing.module */ "./src/app/academics/academics-routing.module.ts");
/* harmony import */ var _academics_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./academics.page */ "./src/app/academics/academics.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var AcademicsPageModule = /** @class */ (function () {
    function AcademicsPageModule() {
    }
    AcademicsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _academics_routing_module__WEBPACK_IMPORTED_MODULE_2__["AcademicsPageRoutingModule"]],
            declarations: [_academics_page__WEBPACK_IMPORTED_MODULE_3__["AcademicsPage"]],
        })
    ], AcademicsPageModule);
    return AcademicsPageModule;
}());



/***/ }),

/***/ "./src/app/academics/academics.page.scss":
/*!***********************************************!*\
  !*** ./src/app/academics/academics.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-profile {\n  position: relative;\n  padding: 10px 16px;\n  margin-bottom: 1px;\n  background: var(--ion-color-primary-contrast);\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: start;\n}\n.item-profile .avatar-image {\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-secondary);\n  width: 64px;\n  height: 64px;\n  overflow: hidden;\n  padding: 1px;\n  margin-right: 16px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.item-profile > div {\n  display: flex;\n  flex-direction: row;\n}\n.item-profile .avatar-text {\n  flex-direction: column;\n}\n.item-profile .avatar-text div {\n  display: block;\n  max-width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 16px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNhZGVtaWNzL2FjYWRlbWljcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUVKO0FBQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUFFO0VBQ0Usc0JBQUE7QUFFSjtBQURJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUdOIiwiZmlsZSI6InNyYy9hcHAvYWNhZGVtaWNzL2FjYWRlbWljcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1wcm9maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgLmF2YXRhci1pbWFnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAuYXZhdGFyLXRleHQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZGl2IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/academics/academics.page.ts":
/*!*********************************************!*\
  !*** ./src/app/academics/academics.page.ts ***!
  \*********************************************/
/*! exports provided: AcademicsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicsPage", function() { return AcademicsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@store/academic-programs/academic-programs.actions */ "./src/app/@store/academic-programs/academic-programs.actions.ts");
/* harmony import */ var _store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@store/academic-programs/academic-programs.state */ "./src/app/@store/academic-programs/academic-programs.state.ts");






var MAX_SUGGESTIONS_ITEMS = 5;
var AcademicsPage = /** @class */ (function () {
    function AcademicsPage(router, store) {
        this.router = router;
        this.store = store;
        this.items = [];
        this.maxSuggestions = MAX_SUGGESTIONS_ITEMS;
    }
    AcademicsPage.prototype.ngOnInit = function () {
        this.subscribeToSuggestions();
    };
    AcademicsPage.prototype.ionViewWillEnter = function () {
        if (this.store.selectSnapshot(_store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_5__["AcademicProgramsState"].getAcademicProgramsSuggestions).length === 0) {
            this.store.dispatch(new _store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_4__["GetAcademicProgramsSuggestions"]());
        }
    };
    AcademicsPage.prototype.doRefresh = function (event) {
        var subscription = this.store.dispatch(new _store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_4__["GetAcademicProgramsSuggestions"]()).subscribe(function () {
            subscription.unsubscribe();
            event.target.complete();
        }, function (error) {
            subscription.unsubscribe();
            event.target.complete();
        });
    };
    AcademicsPage.prototype.subscribeToSuggestions = function () {
        var _this = this;
        this.suggestionsSubscription = this.store
            .select(_store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_5__["AcademicProgramsState"].getAcademicProgramsSuggestions)
            .subscribe(function (res) {
            _this.items = res;
        });
    };
    AcademicsPage.prototype.goDetail = function () {
        this.router.navigate(['/detail']);
    };
    AcademicsPage.prototype.navigateTo = function (url) {
        this.router.navigate([url]);
    };
    AcademicsPage.prototype.filter = function () { };
    AcademicsPage.prototype.onItemClick = function ($event) {
        var program = this.store
            .selectSnapshot(_store_academic_programs_academic_programs_state__WEBPACK_IMPORTED_MODULE_5__["AcademicProgramsState"].getAcademicProgramsSuggestions)
            .find(function (item) { return item.id === $event; });
        var programUpdated = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, program), { own: false });
        this.store.dispatch(new _store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_4__["SetCurrentAcademicProgram"](programUpdated));
        this.router.navigate(['academic-program-detail', $event]);
    };
    AcademicsPage.prototype.disconnectObservers = function () {
        try {
            this.suggestionsSubscription.unsubscribe();
        }
        catch (error) {
            console.error(error);
        }
    };
    AcademicsPage.prototype.ngOnDestroy = function () {
        this.disconnectObservers();
    };
    AcademicsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    AcademicsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-academics',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./academics.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/academics/academics.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./academics.page.scss */ "./src/app/academics/academics.page.scss")).default]
        })
    ], AcademicsPage);
    return AcademicsPage;
}());



/***/ })

}]);
//# sourceMappingURL=academics-academics-module.js.map