(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/components/item-user-org-search/item-user-org-search.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/components/item-user-org-search/item-user-org-search.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"item-profile\">\n  <app-image-item [imageProfile]=\"info.photo\" (click)=\"onItemClick()\"></app-image-item>\n  <div class=\"avatar-text col-xs-7 col-md-7\" (click)=\"onItemClick()\">\n    <span class=\"regular-small-size bold\">{{ info.complete_name }}</span>\n    <span class=\"small-size\" *ngIf=\"!isOrganization\">{{ info['occupation'] }}</span>\n    <span class=\"small-size\" *ngIf=\"isOrganization\">{{\n      prefix + '.' + info['organization_subtype'].name | translate\n    }}</span>\n    <span class=\"small-size\" color=\"grey\" *ngIf=\"hasLocation\">\n      {{ userLocation }}\n    </span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon class=\"back-icon\" name=\"chevron-back-outline\" (click)=\"goBack()\"></ion-icon>\n    </ion-buttons>\n    <ion-searchbar\n      [debounce]=\"debounce\"\n      (ionClear)=\"clear()\"\n      (ionChange)=\"search($event)\"\n      inputmode=\"text\"\n      #searchbar\n      placeholder=\"{{'search.inputPlaceholder' | translate}} {{extraPlaceholder}}\"\n    ></ion-searchbar>\n    <!--    Filters button-->\n    <!--    <ion-buttons slot=\"end\">-->\n    <!--      <ion-button>-->\n    <!--        <ion-icon slot=\"icon-only\" name=\"options-outline\"></ion-icon>-->\n    <!--      </ion-button>-->\n    <!--    </ion-buttons>-->\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"showSpinner\" class=\"loading-spinner\">\n    <ion-spinner color=\"secondary\"></ion-spinner>\n  </div>\n  <div\n    class=\"flex-vertical-space\"\n    *ngIf=\"usersSearched.length === 0\n  && organizationsSearched.length === 0\n  && academicProgramsSearched.length === 0\n  && opportunitiesSearched.length === 0\"\n  >\n    <div class=\"flex-container pr\">\n      <ion-row class=\"flex-item centered-axis-xy\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-icon name=\"search-circle-outline\" class=\"search-content-icon\" color=\"primary\"></ion-icon>\n          <div>{{'search.inputPlaceholder' | translate}} {{extraPlaceholder}}</div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div *ngFor=\"let item of usersSearched\">\n    <app-item-user-org-search [info]=\"item\" (actionItemClick)=\"itemClick($event)\"></app-item-user-org-search>\n  </div>\n  <div *ngFor=\"let item of organizationsSearched\">\n    <app-item-user-org-search\n      [isOrganization]=\"true\"\n      [info]=\"item\"\n      (actionItemClick)=\"itemClick($event)\"\n    ></app-item-user-org-search>\n  </div>\n  <div *ngFor=\"let item of academicProgramsSearched\">\n    <app-academic-item [program]=\"item\" [hasPhoto]=\"true\" (itemClick)=\"academicProgramClick($event)\">\n    </app-academic-item>\n  </div>\n\n  <div *ngFor=\"let item of opportunitiesSearched\">\n    <app-opportunity-item\n      [info]=\"item\"\n      [hasPhoto]=\"true\"\n      [linkText]=\"'opportunities.seeMore'\"\n      (itemClick)=\"opportunityClick($event)\"\n    ></app-opportunity-item>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/@core/search.service.ts":
/*!*****************************************!*\
  !*** ./src/app/@core/search.service.ts ***!
  \*****************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/api */ "./node_modules/@aws-amplify/api/lib-esm/index.js");
/* harmony import */ var src_graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/graphql/queries */ "./src/graphql/queries.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");





var SearchService = /** @class */ (function () {
    function SearchService() {
    }
    SearchService.prototype.searchPeople = function (text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(src_graphql_queries__WEBPACK_IMPORTED_MODULE_3__["searchUsers"], { text: text, limit: _global_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].SEARCH_LIMIT }))];
            });
        });
    };
    SearchService.prototype.searchOrganizations = function (text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(src_graphql_queries__WEBPACK_IMPORTED_MODULE_3__["searchOrganizations"], { text: text, limit: _global_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].SEARCH_LIMIT }))];
            });
        });
    };
    SearchService.prototype.searchOpportunities = function (text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(src_graphql_queries__WEBPACK_IMPORTED_MODULE_3__["searchJobOffers"], { text: text, limit: _global_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].SEARCH_LIMIT }))];
            });
        });
    };
    SearchService.prototype.searchPrograms = function (text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(src_graphql_queries__WEBPACK_IMPORTED_MODULE_3__["searchAcademicPrograms"], { text: text, limit: _global_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].SEARCH_LIMIT }))];
            });
        });
    };
    SearchService.ctorParameters = function () { return []; };
    SearchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/search/components/item-user-org-search/item-user-org-search.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/search/components/item-user-org-search/item-user-org-search.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9jb21wb25lbnRzL2l0ZW0tdXNlci1vcmctc2VhcmNoL2l0ZW0tdXNlci1vcmctc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/search/components/item-user-org-search/item-user-org-search.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/search/components/item-user-org-search/item-user-org-search.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ItemUserOrgSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemUserOrgSearchComponent", function() { return ItemUserOrgSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@global/utils */ "./src/app/@global/utils.ts");



var ItemUserOrgSearchComponent = /** @class */ (function () {
    function ItemUserOrgSearchComponent() {
        this.isOrganization = false;
        this.actionButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.actionItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ItemUserOrgSearchComponent.prototype.ngOnInit = function () { };
    ItemUserOrgSearchComponent.prototype.ngOnChanges = function (changes) {
        var _a;
        if ((_a = changes['info']) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.hasLocation = !!this.info.country;
            if (this.hasLocation) {
                this.userLocation = _global_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].generateUserFriendlyLocation(this.info.country, this.info.region, this.info.city, this.info.province, this.info.region_name);
            }
            this.prefix = this.isOrganization ? _global_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].getSubtypeTranslationPrefix(this.info['organization_type']) : '';
        }
    };
    ItemUserOrgSearchComponent.prototype.onButtonClick = function () {
        this.actionButtonClick.emit({ id: this.info.id, isOrganization: this.isOrganization });
    };
    ItemUserOrgSearchComponent.prototype.onItemClick = function () {
        this.actionItemClick.emit({
            model: this.info,
            isOrganization: this.isOrganization,
        });
    };
    ItemUserOrgSearchComponent.ctorParameters = function () { return []; };
    ItemUserOrgSearchComponent.propDecorators = {
        info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        isOrganization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        actionButtonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        actionItemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    ItemUserOrgSearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-user-org-search',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item-user-org-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/components/item-user-org-search/item-user-org-search.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item-user-org-search.component.scss */ "./src/app/search/components/item-user-org-search/item-user-org-search.component.scss")).default]
        })
    ], ItemUserOrgSearchComponent);
    return ItemUserOrgSearchComponent;
}());



/***/ }),

/***/ "./src/app/search/components/item-user-org-search/item-user-org-search.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/search/components/item-user-org-search/item-user-org-search.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ItemUserOrgSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemUserOrgSearchModule", function() { return ItemUserOrgSearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _item_user_org_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-user-org-search.component */ "./src/app/search/components/item-user-org-search/item-user-org-search.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_image_item_image_item_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@shared/components/image-item/image-item.module */ "./src/app/@shared/components/image-item/image-item.module.ts");







var ItemUserOrgSearchModule = /** @class */ (function () {
    function ItemUserOrgSearchModule() {
    }
    ItemUserOrgSearchModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_item_user_org_search_component__WEBPACK_IMPORTED_MODULE_3__["ItemUserOrgSearchComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_components_image_item_image_item_module__WEBPACK_IMPORTED_MODULE_6__["ImageItemModule"]],
            exports: [_item_user_org_search_component__WEBPACK_IMPORTED_MODULE_3__["ItemUserOrgSearchComponent"]],
        })
    ], ItemUserOrgSearchModule);
    return ItemUserOrgSearchModule;
}());



/***/ }),

/***/ "./src/app/search/search-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function() { return SearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");




var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"],
    },
];
var SearchPageRoutingModule = /** @class */ (function () {
    function SearchPageRoutingModule() {
    }
    SearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SearchPageRoutingModule);
    return SearchPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/search/search-routing.module.ts");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");
/* harmony import */ var _components_item_user_org_search_item_user_org_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/item-user-org-search/item-user-org-search.module */ "./src/app/search/components/item-user-org-search/item-user-org-search.module.ts");
/* harmony import */ var _shared_components_academic_item_academic_item_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@shared/components/academic-item/academic-item.module */ "./src/app/@shared/components/academic-item/academic-item.module.ts");
/* harmony import */ var _shared_components_opportunity_item_opportunity_item_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@shared/components/opportunity-item/opportunity-item.module */ "./src/app/@shared/components/opportunity-item/opportunity-item.module.ts");








var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _search_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchPageRoutingModule"], _components_item_user_org_search_item_user_org_search_module__WEBPACK_IMPORTED_MODULE_5__["ItemUserOrgSearchModule"], _shared_components_academic_item_academic_item_module__WEBPACK_IMPORTED_MODULE_6__["AcademicItemModule"], _shared_components_opportunity_item_opportunity_item_module__WEBPACK_IMPORTED_MODULE_7__["OpportunityItemModule"]],
            declarations: [_search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-content-icon {\n  font-size: 12em;\n}\n\n.loading-spinner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1jb250ZW50LWljb24ge1xuICBmb250LXNpemU6IDEyZW07XG59XG4ubG9hZGluZy1zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@core/navigation-extras.service */ "./src/app/@core/navigation-extras.service.ts");
/* harmony import */ var _core_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@core/search.service */ "./src/app/@core/search.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@global/utils */ "./src/app/@global/utils.ts");
/* harmony import */ var _core_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@core/utils.service */ "./src/app/@core/utils.service.ts");
/* harmony import */ var _shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@shared/enums/publisher-type */ "./src/app/@shared/enums/publisher-type.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _store_user_user_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@store/user/user.state */ "./src/app/@store/user/user.state.ts");
/* harmony import */ var _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@store/job-offers/job-offers.actions */ "./src/app/@store/job-offers/job-offers.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../@store/academic-programs/academic-programs.actions */ "./src/app/@store/academic-programs/academic-programs.actions.ts");
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _core_inform_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../@core/inform.service */ "./src/app/@core/inform.service.ts");


















var SearchPage = /** @class */ (function () {
    function SearchPage(location, navigationExtrasService, translateService, searchService, utilsService, store, router, informService) {
        this.location = location;
        this.navigationExtrasService = navigationExtrasService;
        this.translateService = translateService;
        this.searchService = searchService;
        this.utilsService = utilsService;
        this.store = store;
        this.router = router;
        this.informService = informService;
        this.extraPlaceholder = '';
        this.usersSearched = [];
        this.organizationsSearched = [];
        this.opportunitiesSearched = [];
        this.academicProgramsSearched = [];
        this.debounce = _global_constants__WEBPACK_IMPORTED_MODULE_16__["Constants"].DEBOUNCE_SEARCH;
        this.showSpinner = false;
        this.origin = '';
        this.userId = '';
    }
    SearchPage.prototype.ionViewWillEnter = function () {
        this.searchbar.setFocus();
    };
    SearchPage.prototype.ngOnInit = function () {
        var _a;
        this.userId = this.store.selectSnapshot(_store_user_user_state__WEBPACK_IMPORTED_MODULE_12__["UserState"].getUserInfo).id;
        if ((_a = this.navigationExtrasService.getExtras()) === null || _a === void 0 ? void 0 : _a.origin) {
            // /timeline
            var originUrl = this.navigationExtrasService.getExtras().origin.split('/');
            var origin_1 = originUrl[originUrl.length - 1];
            this.origin = origin_1;
            switch (origin_1) {
                case 'opportunities':
                    this.extraPlaceholder = this.getTranslationKey('opportunities');
                    break;
                case 'academics':
                    this.extraPlaceholder = this.getTranslationKey('academics');
                    break;
                default:
                    this.extraPlaceholder = this.getTranslationKey('networking');
                // case networking:
                // case timeline:
                // case notifications:
            }
        }
    };
    SearchPage.prototype.clear = function () {
        this.usersSearched = [];
        this.organizationsSearched = [];
        this.opportunitiesSearched = [];
        this.academicProgramsSearched = [];
    };
    SearchPage.prototype.search = function ($event) {
        var val = $event.target.value;
        if (val === '') {
            this.clear();
        }
        if (val.length >= 3) {
            switch (this.origin) {
                case 'opportunities':
                    this.searchOpportunities(val);
                    break;
                case 'academics':
                    this.searchPrograms(val);
                    break;
                default:
                    this.searchUsersAndOrganizations(val);
            }
        }
    };
    SearchPage.prototype.searchUsersAndOrganizations = function (text) {
        var _this = this;
        this.showSpinner = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.searchService.searchPeople(text)), Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.searchService.searchOrganizations(text))])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe(function (results) {
            _this.usersSearched = _this.mapItemsPhoto(results[0]['data'].searchUsers || []);
            _this.organizationsSearched = _this.mapItemsPhoto(results[1]['data'].searchOrganizations || []);
            _this.usersSearched = _this.usersSearched.filter(function (user) { return user.id !== _this.userId; });
            _this.showSpinner = false;
            if (_this.usersSearched.length === 0 && _this.organizationsSearched.length === 0) {
                _this.informService.showWarning('search.noResults');
            }
        });
    };
    SearchPage.prototype.searchOpportunities = function (text) {
        var _this = this;
        this.showSpinner = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.searchService.searchOpportunities(text))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe(function (response) {
            _this.opportunitiesSearched = _this.mapOpportunities(response['data'].searchJobOffers) || [];
            _this.showSpinner = false;
            if (_this.opportunitiesSearched.length === 0) {
                _this.informService.showWarning('search.noResults');
            }
        });
    };
    SearchPage.prototype.searchPrograms = function (text) {
        var _this = this;
        this.showSpinner = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.searchService.searchPrograms(text))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe(function (response) {
            _this.academicProgramsSearched = _this.mapPrograms(response['data'].searchAcademicPrograms) || [];
            _this.showSpinner = false;
            if (_this.academicProgramsSearched.length === 0) {
                _this.informService.showWarning('search.noResults');
            }
        });
    };
    SearchPage.prototype.getTranslationKey = function (key) {
        return this.translateService.instant('search.' + key);
    };
    SearchPage.prototype.goBack = function () {
        this.location.back();
    };
    SearchPage.prototype.itemClick = function ($event) {
        this.utilsService.goProfile($event.model.id, !$event.isOrganization ? _shared_enums_publisher_type__WEBPACK_IMPORTED_MODULE_10__["PUBLISHER_TYPE"].USER : 0);
    };
    SearchPage.prototype.opportunityClick = function ($event) {
        var opportunity = this.opportunitiesSearched.find(function (op) { return op.id === $event; });
        var opportunityUpdated = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, opportunity), { own: false });
        this.store.dispatch(new _store_job_offers_job_offers_actions__WEBPACK_IMPORTED_MODULE_13__["SetCurrentJobOffer"](opportunityUpdated));
        this.router.navigate(['opportunity-detail', $event]);
    };
    SearchPage.prototype.academicProgramClick = function ($event) {
        var program = this.academicProgramsSearched.find(function (prog) { return prog.id === $event; });
        var programUpdated = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, program), { own: false });
        this.store.dispatch(new _store_academic_programs_academic_programs_actions__WEBPACK_IMPORTED_MODULE_15__["SetCurrentAcademicProgram"](programUpdated));
        this.router.navigate(['academic-program-detail', $event]);
    };
    SearchPage.prototype.mapItemsPhoto = function (items) {
        return items.map(function (item) {
            var photo = _global_utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].mapCloudfrontProfilePhoto(item.photo);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { photo: photo });
        });
    };
    SearchPage.prototype.mapOpportunities = function (opportunities) {
        var _this = this;
        return opportunities.map(function (opportunity) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, opportunity), { photo: _global_utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].mapCloudfrontProfilePhoto(opportunity.photo), creation_date_literal: _this.utilsService.calculateCreatedLiteral(Date.now(), opportunity.creation_date) });
        });
    };
    SearchPage.prototype.mapPrograms = function (programs) {
        var _this = this;
        return programs.map(function (program) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, program), { photo: _global_utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].mapCloudfrontProfilePhoto(program.photo), location: _global_utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].generateUserFriendlyLocation(program.country, program.region, program.city, program.province, program.region_name), friendly_start_date: _global_utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].getDateMMMYY(program.start_date), creation_date_literal: _this.utilsService.calculateCreatedLiteral(Date.now(), program.creation_date), friendly_end_date: _global_utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].getDateMMMYY(program.end_date) });
        });
    };
    SearchPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _core_navigation_extras_service__WEBPACK_IMPORTED_MODULE_4__["NavigationExtrasService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
        { type: _core_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"] },
        { type: _core_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_11__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] },
        { type: _core_inform_service__WEBPACK_IMPORTED_MODULE_17__["InformService"] }
    ]; };
    SearchPage.propDecorators = {
        searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['searchbar', { static: false },] }]
    };
    SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")).default]
        })
    ], SearchPage);
    return SearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map