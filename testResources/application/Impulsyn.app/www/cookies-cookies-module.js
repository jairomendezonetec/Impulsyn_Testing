(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cookies-cookies-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cookies/cookies.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cookies/cookies.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [showBackButton]=\"true\" [titleImage]=\"logoPath\" (backButtonClick)=\"goBack()\"></app-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"flex-container\">\n    <ion-row class=\"flex-item\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <div class=\"screen-big-title\" [innerHTML]=\"'cookies.title' | translate\"></div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"flex-item ion-margin-vertical\">\n      <ion-col size=\"12\" class=\"ion-text-start\">\n        <span class=\"regular-small-size\" [innerHTML]=\"'cookies.firstModalText' | translate\"></span\n        ><a (click)=\"openCompleteCookies()\" class=\"regular-small-size underline\">link</a>\n      </ion-col>\n    </ion-row>\n    <div class=\"flex-justify-content-center ion-margin-vertical\" *ngIf=\"clickedConfigure\">\n      <form [formGroup]=\"formGroup\">\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item class=\"ion-no-border apply-checkbox\">\n            <ion-checkbox [formControlName]=\"'firstCheck'\" [disabled]=\"true\" color=\"secondary\"></ion-checkbox>\n            <ion-label class=\"regular-small-size\">{{ 'cookies.firstCheck' | translate }}</ion-label>\n          </ion-item>\n        </div>\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item class=\"ion-no-border apply-checkbox\">\n            <ion-checkbox [formControlName]=\"'secondCheck'\" color=\"secondary\"></ion-checkbox>\n            <ion-label class=\"regular-small-size\">{{ 'cookies.secondCheck' | translate }}</ion-label>\n          </ion-item>\n        </div>\n        <div class=\"pr col-xs-12 col-sm-8 col-lg-6\">\n          <ion-item class=\"ion-no-border apply-checkbox\">\n            <ion-checkbox [formControlName]=\"'thirdCheck'\" color=\"secondary\"></ion-checkbox>\n            <ion-label class=\"regular-small-size\">{{ 'cookies.thirdCheck' | translate }}</ion-label>\n          </ion-item>\n        </div>\n      </form>\n    </div>\n    <ion-row class=\"flex-row\">\n      <div class=\"col-xs-6 ion-justify-content-center\">\n        <ion-button class=\"secondary-button\" (click)=\"onConfigureButtonClick()\" [disabled]=\"clickedConfigure\">\n          {{'buttons.configure' | translate}}</ion-button\n        >\n      </div>\n      <div class=\"col-xs-6 ion-justify-content-center\">\n        <ion-button color=\"secondary\" (click)=\"onAcceptButtonClick()\"> {{'buttons.accept' | translate}}</ion-button>\n      </div>\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/cookies/cookies-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/cookies/cookies-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CookiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiesPageRoutingModule", function() { return CookiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cookies_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookies.page */ "./src/app/cookies/cookies.page.ts");




var routes = [
    {
        path: '',
        component: _cookies_page__WEBPACK_IMPORTED_MODULE_3__["CookiesPage"],
    },
];
var CookiesPageRoutingModule = /** @class */ (function () {
    function CookiesPageRoutingModule() {
    }
    CookiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CookiesPageRoutingModule);
    return CookiesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/cookies/cookies.module.ts":
/*!*******************************************!*\
  !*** ./src/app/cookies/cookies.module.ts ***!
  \*******************************************/
/*! exports provided: CookiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiesPageModule", function() { return CookiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cookies_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cookies-routing.module */ "./src/app/cookies/cookies-routing.module.ts");
/* harmony import */ var _cookies_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookies.page */ "./src/app/cookies/cookies.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@shared/shared.module */ "./src/app/@shared/shared.module.ts");





var CookiesPageModule = /** @class */ (function () {
    function CookiesPageModule() {
    }
    CookiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _cookies_routing_module__WEBPACK_IMPORTED_MODULE_2__["CookiesPageRoutingModule"]],
            declarations: [_cookies_page__WEBPACK_IMPORTED_MODULE_3__["CookiesPage"]],
        })
    ], CookiesPageModule);
    return CookiesPageModule;
}());



/***/ }),

/***/ "./src/app/cookies/cookies.page.scss":
/*!*******************************************!*\
  !*** ./src/app/cookies/cookies.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".apply-checkbox ion-label {\n  margin-left: 10px;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29va2llcy9jb29raWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2Nvb2tpZXMvY29va2llcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwbHktY2hlY2tib3gge1xuICBpb24tbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/cookies/cookies.page.ts":
/*!*****************************************!*\
  !*** ./src/app/cookies/cookies.page.ts ***!
  \*****************************************/
/*! exports provided: CookiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiesPage", function() { return CookiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
/* harmony import */ var _core_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@core/storage.service */ "./src/app/@core/storage.service.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _global_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@global/constants */ "./src/app/@global/constants.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _store_auth_auth_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@store/auth/auth.state */ "./src/app/@store/auth/auth.state.ts");
/* harmony import */ var _store_common_common_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@store/common/common.actions */ "./src/app/@store/common/common.actions.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@store/auth/auth.actions */ "./src/app/@store/auth/auth.actions.ts");













var CookiesPage = /** @class */ (function () {
    function CookiesPage(router, store, storage, formBuilder, route, iab, location) {
        this.router = router;
        this.store = store;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.route = route;
        this.iab = iab;
        this.location = location;
        this.logoPath = _global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].LOGO_PATH;
        this.clickedConfigure = false;
    }
    CookiesPage.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.initForm();
                return [2 /*return*/];
            });
        });
    };
    CookiesPage.prototype.initForm = function () {
        this.formGroup = this.formBuilder.group({
            firstCheck: [true],
            secondCheck: [true],
            thirdCheck: [true],
        });
    };
    CookiesPage.prototype.onConfigureButtonClick = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.clickedConfigure = true;
                return [2 /*return*/];
            });
        });
    };
    CookiesPage.prototype.openCompleteCookies = function () {
        this.iab.create(_global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].COMPLETE_COOKIES_URL);
    };
    CookiesPage.prototype.goBack = function () {
        this.store.dispatch(new _store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_12__["SignOut"]());
        this.location.back();
    };
    CookiesPage.prototype.onAcceptButtonClick = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.cookiesModel = {
                            creationDate: dayjs__WEBPACK_IMPORTED_MODULE_6__().format(_global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].DATE_DISPLAY_FORMAT).toString(),
                            cookies: {
                                tech: true,
                                analytics: this.formGroup.get('secondCheck').value,
                                socialMedia: this.formGroup.get('thirdCheck').value,
                            },
                        };
                        return [4 /*yield*/, this.storage.setCookiesData(this.cookiesModel)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.store.dispatch(new _store_common_common_actions__WEBPACK_IMPORTED_MODULE_10__["SetAnalyticsCookies"](this.formGroup.get('secondCheck').value)).toPromise()];
                    case 2:
                        _a.sent();
                        if (!!this.store.selectSnapshot(_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_9__["AuthState"].getToken)) {
                            this.router.navigate([_global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].FIRST_PAGE_AFTER_LOGIN]);
                        }
                        else {
                            this.router.navigate([_global_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].PAGE_AFTER_COOKIES]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CookiesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _core_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] }
    ]; };
    CookiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cookies',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cookies.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cookies/cookies.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cookies.page.scss */ "./src/app/cookies/cookies.page.scss")).default]
        })
    ], CookiesPage);
    return CookiesPage;
}());



/***/ })

}]);
//# sourceMappingURL=cookies-cookies-module.js.map